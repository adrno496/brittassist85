const RECIPIENT = 'brittanydreanocm@gmail.com';
const MAX_BYTES = 48 * 1024;
const EMAIL = /^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/;
const ERROR = 'L’envoi n’a pas abouti. Réessayez ou écrivez à brittanydreanocm@gmail.com.';
const FIELDS = {
  prenom: 'Prénom', nom: 'Nom', email: 'E-mail', telephone: 'Téléphone',
  profil: 'Rôle', metier: 'Secteur d’activité', taille: 'Taille de la structure',
  'domaines[]': 'Univers souhaités', contexte: 'Semaine actuelle',
  objectif: 'Objectif à trois mois', timing: 'Démarrage', budget: 'Format envisagé',
  message: 'Message',
};

function parseBody(req) {
  const type = String(req.headers['content-type'] || '').split(';')[0].trim();
  if (type !== 'application/x-www-form-urlencoded') throw new Error('content-type');
  if (Number(req.headers['content-length']) > MAX_BYTES) throw new Error('size');
  const body = req.body;
  if (typeof body === 'string' || Buffer.isBuffer(body)) {
    if (Buffer.byteLength(body) > MAX_BYTES) throw new Error('size');
    return new URLSearchParams(String(body));
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('body');
  if (Buffer.byteLength(JSON.stringify(body)) > MAX_BYTES) throw new Error('size');
  const fields = new URLSearchParams();
  for (const [key, value] of Object.entries(body)) {
    for (const item of Array.isArray(value) ? value : [value]) {
      if (typeof item !== 'string') throw new Error('field');
      fields.append(key, item);
    }
  }
  return fields;
}

function allowedOrigin(req) {
  if (req.headers['sec-fetch-site'] === 'cross-site') return false;
  const origin = req.headers.origin;
  if (!origin) return true;
  const allowed = ['https://www.brittassist.fr', 'https://brittassist.fr'];
  for (const host of [process.env.VERCEL_URL, process.env.VERCEL_BRANCH_URL]) {
    if (host) allowed.push(`https://${host}`);
  }
  if (process.env.NODE_ENV !== 'production') {
    allowed.push('http://localhost:3000', 'http://127.0.0.1:3000');
  }
  return allowed.includes(origin);
}

function reply(req, res, status, page, ok, message = ERROR) {
  res.setHeader('Cache-Control', 'no-store');
  if (String(req.headers.accept || '').includes('application/json')) {
    return res.status(status).json({ ok, message });
  }
  // Confirmation lisible même sans JavaScript, sans redirection imposée par le visiteur.
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  const title = ok ? 'Message envoyé' : 'Message non envoyé';
  return res.status(status).send(`<!doctype html><html lang="fr"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${title} · BrittAssist</title><main><h1>${title}</h1><p>${message}</p><p><a href="${page}">Revenir au formulaire</a></p><p><a href="mailto:${RECIPIENT}">${RECIPIENT}</a></p></main></html>`);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.setHeader('Cache-Control', 'no-store');
    return res.status(405).end();
  }
  if (!allowedOrigin(req)) return reply(req, res, 403, '/contact', false);
  let fields;
  try {
    fields = parseBody(req);
  } catch {
    return reply(req, res, 400, '/contact', false, 'Le formulaire est invalide.');
  }
  const kind = fields.get('_form');
  const page = kind === 'questionnaire' ? '/questionnaire' : '/contact';
  const value = (key) => (fields.get(key) || '').trim();
  if (value('_honey')) return reply(req, res, 200, page, true, 'Message envoyé.');

  const valid = ['contact', 'questionnaire'].includes(kind)
    && value('prenom') && value('nom')
    && EMAIL.test(value('email')) && value('email').length <= 254
    && value('rgpd') === 'on'
    && (kind !== 'contact' || value('message'))
    && (kind !== 'questionnaire' || value('profil'))
    && Object.keys(FIELDS).every((key) => {
      const values = fields.getAll(key);
      const max = ['message', 'contexte', 'objectif'].includes(key) ? 8000 : 300;
      return values.length <= (key === 'domaines[]' ? 6 : 1)
        && values.every((item) => item.length <= max && !item.includes('\u0000'));
    });
  if (!valid) return reply(req, res, 400, page, false, 'Vérifiez les champs obligatoires et votre consentement.');

  const apiKey = process.env.BREVO_API_KEY;
  const sender = process.env.BREVO_SENDER_EMAIL || RECIPIENT;
  if (!apiKey || !EMAIL.test(sender)) return reply(req, res, 503, page, false);
  const textContent = Object.entries(FIELDS)
    .map(([key, label]) => {
      const content = fields.getAll(key).map((item) => item.trim()).filter(Boolean).join(', ');
      return content ? `${label} : ${content}` : '';
    }).filter(Boolean).join('\n\n')
    + '\n\nConsentement au traitement de la demande : oui.';

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': apiKey, 'Content-Type': 'application/json', accept: 'application/json' },
      signal: AbortSignal.timeout(10000),
      body: JSON.stringify({
        sender: { email: sender, name: process.env.BREVO_SENDER_NAME || 'BrittAssist' },
        to: [{ email: RECIPIENT, name: 'Brittany Dreano' }],
        replyTo: { email: value('email'), name: `${value('prenom')} ${value('nom')}` },
        subject: kind === 'questionnaire'
          ? 'Préparation Private Office — BrittAssist' : 'Nouvelle demande BrittAssist',
        textContent,
        tags: ['brittassist', kind],
      }),
    });
    if (!response.ok) {
      // Ne journaliser ni les données du visiteur ni la clé API.
      console.error('Brevo : envoi refusé, statut', response.status);
      return reply(req, res, 502, page, false);
    }
    return reply(req, res, 200, page, true, 'Message envoyé.');
  } catch {
    console.error('Brevo : service indisponible ou délai dépassé.');
    return reply(req, res, 502, page, false);
  }
}
