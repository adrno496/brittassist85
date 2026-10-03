#!/usr/bin/env node
/**
 * Sert `dist/` en appliquant vercel.json, pour tester en local ce que
 * `astro preview` ignore : en-têtes, redirections, URL propres, page 404.
 *
 * Ce n'est pas Vercel. Le script reproduit les règles déclarées dans
 * vercel.json (headers, redirects, rewrites, cleanUrls, trailingSlash) ; il ne
 * prouve pas que l'hébergeur les applique. Il sert à vérifier que le site
 * fonctionne dans un navigateur réel sous ces en-têtes — en particulier que la
 * CSP d'en-tête et la CSP en <meta> cohabitent sans rien bloquer.
 *
 * Usage : node scripts/serve-dist.mjs [--port 4322]
 */
import { createReadStream, existsSync, readFileSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';

const args = process.argv.slice(2);
const port = Number(args.includes('--port') ? args[args.indexOf('--port') + 1] : 4322);
const dist = 'dist';
const config = JSON.parse(readFileSync('vercel.json', 'utf8'));

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8',
  '.woff2': 'font/woff2', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.webp': 'image/webp', '.avif': 'image/avif', '.ico': 'image/x-icon', '.svg': 'image/svg+xml',
};

/** Les motifs de vercel.json (« /images/(.*) ») sont déjà des expressions régulières : il suffit de les ancrer. */
const motif = (source) => new RegExp(`^${source}$`);

function enTetes(chemin) {
  const sortie = {};
  for (const regle of config.headers ?? []) {
    if (motif(regle.source).test(chemin)) for (const h of regle.headers) sortie[h.key] = h.value;
  }
  return sortie;
}

const rediriger = (res, vers, code = 308) => {
  res.writeHead(code, { Location: vers });
  res.end();
};

createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let chemin = decodeURIComponent(url.pathname);

  for (const r of config.redirects ?? []) {
    if (motif(r.source).test(chemin)) return rediriger(res, r.destination, r.permanent ? 308 : 307);
  }
  // URL propres : ni extension .html, ni barre finale.
  if (chemin === '/index.html') return rediriger(res, '/');
  if (chemin.endsWith('.html') && existsSync(join(dist, chemin))) return rediriger(res, chemin.slice(0, -5) + url.search);
  if (chemin.length > 1 && chemin.endsWith('/')) return rediriger(res, chemin.slice(0, -1) + url.search);

  for (const r of config.rewrites ?? []) if (motif(r.source).test(chemin)) chemin = r.destination;

  const base = normalize(join(dist, chemin));
  if (!base.startsWith(dist)) {
    res.writeHead(400);
    return res.end();
  }
  const candidats = chemin === '/' ? [join(dist, 'index.html')] : [base, `${base}.html`];
  const fichier = candidats.find((c) => existsSync(c) && statSync(c).isFile());

  const communs = enTetes(url.pathname);
  if (!fichier) {
    const page404 = join(dist, '404.html');
    res.writeHead(404, { 'Content-Type': TYPES['.html'], ...communs });
    return existsSync(page404) ? createReadStream(page404).pipe(res) : res.end('404');
  }
  res.writeHead(200, { 'Content-Type': TYPES[extname(fichier)] ?? 'application/octet-stream', ...communs });
  createReadStream(fichier).pipe(res);
}).listen(port, '127.0.0.1', () => console.log(`dist/ servi avec les règles de vercel.json sur http://127.0.0.1:${port}`));
