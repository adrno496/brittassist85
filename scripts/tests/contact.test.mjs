import assert from 'node:assert/strict';
import { test } from 'node:test';
import handler from '../../api/contact.js';

const valid = {
  _form: 'contact', prenom: 'Alice', nom: 'Martin', email: 'alice@example.org',
  telephone: '+33600000000', message: 'Bonjour, organisons un échange.', rgpd: 'on',
};

async function invoke(t, { fields = valid, body, headers = {}, method = 'POST', configured = true, fetcher } = {}) {
  const old = process.env.BREVO_API_KEY;
  const oldSender = process.env.BREVO_SENDER_EMAIL;
  if (configured) process.env.BREVO_API_KEY = 'test-private-key';
  else delete process.env.BREVO_API_KEY;
  delete process.env.BREVO_SENDER_EMAIL;
  t.after(() => {
    if (old === undefined) delete process.env.BREVO_API_KEY;
    else process.env.BREVO_API_KEY = old;
    if (oldSender === undefined) delete process.env.BREVO_SENDER_EMAIL;
    else process.env.BREVO_SENDER_EMAIL = oldSender;
  });
  const calls = [];
  t.mock.method(globalThis, 'fetch', async (...args) => {
    calls.push(args);
    return fetcher ? fetcher(...args) : { ok: true, status: 201 };
  });
  const res = {
    headers: {}, code: 0, body: null,
    setHeader(key, value) { this.headers[key] = value; },
    status(code) { this.code = code; return this; },
    json(body) { this.body = body; },
    send(body) { this.body = body; },
    end() {},
  };
  await handler({
    method, body: body ?? new URLSearchParams(fields).toString(),
    headers: { accept: 'application/json', 'content-type': 'application/x-www-form-urlencoded', origin: 'https://www.brittassist.fr', ...headers },
  }, res);
  return { res, calls };
}

test('Brevo reçoit le destinataire fixe, le visiteur en replyTo et la clé serveur', async (t) => {
  const { res, calls } = await invoke(t, { fields: { ...valid, _subject: 'Détournement', _next: 'https://example.org', to: 'other@example.org' } });
  assert.equal(res.code, 200);
  assert.equal(res.body.ok, true);
  assert.equal(calls.length, 1);
  assert.equal(calls[0][0], 'https://api.brevo.com/v3/smtp/email');
  const options = calls[0][1];
  assert.equal(options.headers['api-key'], 'test-private-key');
  const mail = JSON.parse(options.body);
  assert.equal(mail.to[0].email, 'brittanydreanocm@gmail.com');
  assert.equal(mail.sender.email, 'brittanydreanocm@gmail.com');
  assert.equal(mail.replyTo.email, valid.email);
  assert.equal(mail.subject, 'Nouvelle demande BrittAssist');
  assert.match(mail.textContent, /Bonjour, organisons un échange/);
  assert.doesNotMatch(JSON.stringify(res.body), /test-private-key/);
  assert.equal(res.headers['Cache-Control'], 'no-store');
});

test('questionnaire : toutes les cases et le contexte sont transmis', async (t) => {
  const body = new URLSearchParams({ ...valid, _form: 'questionnaire', profil: 'Dirigeant', contexte: 'Ma semaine', objectif: 'Déléguer' });
  body.delete('message');
  body.append('domaines[]', 'Travel');
  body.append('domaines[]', 'International');
  const { res, calls } = await invoke(t, { body: body.toString() });
  assert.equal(res.code, 200);
  const mail = JSON.parse(calls[0][1].body);
  assert.match(mail.subject, /Préparation/);
  assert.match(mail.textContent, /Travel, International/);
  assert.match(mail.textContent, /Ma semaine/);
  assert.match(mail.textContent, /Déléguer/);
});

test('le corps déjà décodé par Vercel accepte les réponses multiples', async (t) => {
  const { res, calls } = await invoke(t, { body: { ...valid, 'domaines[]': ['Travel', 'Lifestyle'] } });
  assert.equal(res.code, 200);
  assert.match(JSON.parse(calls[0][1].body).textContent, /Travel, Lifestyle/);
});

for (const [label, fields] of [
  ['sans consentement', { ...valid, rgpd: '' }],
  ['sans message', { ...valid, message: ' ' }],
  ['e-mail invalide', { ...valid, email: 'bad\naddress@example.org' }],
  ['nom absent', { ...valid, nom: '' }],
  ['message trop long', { ...valid, message: 'a'.repeat(8001) }],
  ['questionnaire sans profil', { ...valid, _form: 'questionnaire' }],
  ['type inconnu', { ...valid, _form: 'newsletter' }],
]) {
  test(`refus ${label} sans appel Brevo`, async (t) => {
    const { res, calls } = await invoke(t, { fields });
    assert.equal(res.code, 400);
    assert.equal(res.body.ok, false);
    assert.equal(calls.length, 0);
  });
}

test('champ piège : aucun e-mail envoyé', async (t) => {
  const { res, calls } = await invoke(t, { fields: { ...valid, _honey: 'spam' } });
  assert.equal(res.body.ok, true);
  assert.equal(calls.length, 0);
});

test('origine extérieure refusée', async (t) => {
  const { res, calls } = await invoke(t, { headers: { origin: 'https://untrusted.example' } });
  assert.equal(res.code, 403);
  assert.equal(calls.length, 0);
});

test('clé manquante : pas de faux succès', async (t) => {
  const { res, calls } = await invoke(t, { configured: false });
  assert.equal(res.code, 503);
  assert.equal(res.body.ok, false);
  assert.equal(calls.length, 0);
});

for (const [label, fetcher] of [
  ['refus Brevo', () => ({ ok: false, status: 401 })],
  ['panne réseau', () => { throw new Error('network'); }],
]) {
  test(`${label} : pas de faux succès`, async (t) => {
    t.mock.method(console, 'error', () => {});
    const { res } = await invoke(t, { fetcher });
    assert.equal(res.code, 502);
    assert.equal(res.body.ok, false);
  });
}

test('sans JavaScript : confirmation HTML et destination interne fixe', async (t) => {
  const { res } = await invoke(t, { headers: { accept: 'text/html' }, fields: { ...valid, _next: 'https://untrusted.example' } });
  assert.equal(res.code, 200);
  assert.match(res.headers['Content-Type'], /text\/html/);
  assert.match(res.body, /Message envoyé/);
  assert.match(res.body, /href="\/contact"/);
  assert.doesNotMatch(res.body, /untrusted/);
});

for (const [message, cause] of [
  ['Key not found', 'cle_api_refusee'],
  ['We have detected you are using an unrecognised IP address.', 'adresse_ip_non_autorisee'],
]) {
  test(`diagnostic serveur : ${cause} sans exposer la réponse brute`, async (t) => {
    const logs = [];
    t.mock.method(console, 'error', (...args) => logs.push(args.join(' ')));
    const { res } = await invoke(t, {
      fetcher: () => ({ ok: false, status: 401, json: async () => ({ code: 'unauthorized', message }) }),
    });
    assert.equal(res.code, 502);
    assert.match(logs[0], new RegExp(cause));
    assert.ok(!logs[0].includes(message));
    assert.ok(!JSON.stringify(res.body).includes(cause));
  });
}

test('sans JavaScript : l’échec est affiché', async (t) => {
  const { res } = await invoke(t, { headers: { accept: 'text/html' }, configured: false });
  assert.equal(res.code, 503);
  assert.match(res.body, /Message non envoyé/);
});

test('GET ne déclenche aucun envoi', async (t) => {
  const { res, calls } = await invoke(t, { method: 'GET' });
  assert.equal(res.code, 405);
  assert.equal(res.headers.Allow, 'POST');
  assert.equal(calls.length, 0);
});

test('corps trop volumineux refusé', async (t) => {
  const { res, calls } = await invoke(t, { body: 'a'.repeat(50000) });
  assert.equal(res.code, 400);
  assert.equal(calls.length, 0);
});
