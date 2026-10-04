import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';

const script = readFileSync(new URL('../../public/axdia-forms.js', import.meta.url), 'utf8');

function setup(fetcher) {
  const status = { hidden: true, textContent: '' };
  const sent = { hidden: true, scrollIntoView() {} };
  const button = { disabled: false };
  const fd = new URLSearchParams({ prenom: 'Alice', nom: 'Martin', email: 'alice@example.org', message: 'Bonjour' });
  let submit;
  let resets = 0;
  let copies = 0;
  let requests = 0;
  const form = {
    action: 'https://www.brittassist.fr/api/contact',
    querySelector: (selector) => selector === '#form-status' ? status : button,
    addEventListener: (_event, callback) => { submit = callback; },
    getAttribute: () => 'Demande de contact',
    reset: () => { resets++; },
  };
  runInNewContext(script, {
    URLSearchParams, Blob,
    FormData: function () { return fd; },
    fetch: async (...args) => { requests++; return fetcher(...args); },
    navigator: { sendBeacon: () => { copies++; return true; } },
    window: { location: { search: '' } },
    document: {
      readyState: 'complete', querySelectorAll: () => [form],
      getElementById: (id) => id === 'form-sent' ? sent : status,
    },
  });
  return {
    submit: () => submit({ preventDefault() {} }), status, sent, button,
    get counts() { return { resets, copies, requests }; },
  };
}

test('échec Brevo : saisie conservée, erreur visible, pas de copie AxdiaOS', async () => {
  const ui = setup(async () => ({ ok: false, json: async () => ({ ok: false, message: 'Réessayez.' }) }));
  await ui.submit();
  assert.deepEqual(ui.counts, { resets: 0, copies: 0, requests: 1 });
  assert.equal(ui.status.textContent, 'Réessayez.');
  assert.equal(ui.status.hidden, false);
  assert.equal(ui.sent.hidden, true);
  assert.equal(ui.button.disabled, false);
});

test('succès : copie AxdiaOS, confirmation et remise à zéro après acceptation', async () => {
  const ui = setup(async (_url, options) => {
    assert.equal(options.headers.Accept, 'application/json');
    assert.equal(options.body.get('email'), 'alice@example.org');
    return { ok: true, json: async () => ({ ok: true }) };
  });
  await ui.submit();
  assert.deepEqual(ui.counts, { resets: 1, copies: 1, requests: 1 });
  assert.equal(ui.sent.hidden, false);
  assert.equal(ui.status.hidden, true);
  assert.equal(ui.button.disabled, false);
});

test('double clic bloqué et panne réseau récupérable sans perte de saisie', async () => {
  let reject;
  const ui = setup(() => new Promise((_resolve, rejectRequest) => { reject = rejectRequest; }));
  const first = ui.submit();
  assert.equal(ui.button.disabled, true);
  await ui.submit();
  assert.equal(ui.counts.requests, 1);
  reject(new Error('network'));
  await first;
  assert.match(ui.status.textContent, /brittanydreanocm@gmail.com/);
  assert.equal(ui.button.disabled, false);
  assert.equal(ui.counts.resets, 0);
});
