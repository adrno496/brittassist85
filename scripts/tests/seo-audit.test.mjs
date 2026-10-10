/**
 * L'audit doit attraper les défauts qu'il prétend attraper.
 * Chaque test construit un mini-site défectueux et vérifie que la règle se déclenche.
 */
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { auditer } from '../seo-audit.mjs';

const SITE = 'https://www.brittassist.fr';

function page({ chemin, titre, h1, description = 'Une description suffisamment longue pour passer le seuil minimal de soixante-dix caractères.', corps = '', robots = '', canonical, extra = '' }) {
  const url = SITE + (chemin === '/' ? '/' : chemin);
  return `<!DOCTYPE html><html lang="fr"><head><meta http-equiv="content-security-policy" content="default-src 'self'">
<title>${titre}</title><meta name="description" content="${description}">${robots}
<link rel="canonical" href="${canonical ?? url}">
<meta property="og:title" content="${titre}"><meta property="og:description" content="${description}"><meta property="og:url" content="${canonical ?? url}"><meta property="og:image" content="${SITE}/i.jpg"><meta property="og:type" content="website">
<meta name="twitter:card" content="summary">${extra}</head><body><main><h1>${h1}</h1>${corps}</main></body></html>`;
}

function site(pages, { sitemap } = {}) {
  const racine = mkdtempSync(join(tmpdir(), 'audit-'));
  const dist = join(racine, 'dist');
  for (const p of pages) {
    const fichier = join(dist, p.chemin === '/' ? 'index.html' : `${p.chemin}.html`);
    mkdirSync(dirname(fichier), { recursive: true });
    writeFileSync(fichier, page(p));
  }
  const urls = sitemap ?? pages.filter((p) => !p.robots).map((p) => SITE + (p.chemin === '/' ? '/' : p.chemin));
  writeFileSync(join(dist, 'sitemap-index.xml'), `<sitemapindex><sitemap><loc>${SITE}/sitemap-0.xml</loc></sitemap></sitemapindex>`);
  writeFileSync(join(dist, 'sitemap-0.xml'), `<urlset>${urls.map((u) => `<url><loc>${u}</loc><lastmod>2026-10-03T00:00:00.000Z</lastmod></url>`).join('')}</urlset>`);
  writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap-index.xml\n`);
  return dist;
}

const regles = (rapport) => new Set(rapport.blocages.map((b) => b.regle));
const lien = (href, texte = 'Lire la page voisine') => `<p><a href="${href}">${texte}</a></p>`;

test('un site sain ne produit aucun blocage', () => {
  const r = auditer(site([
    { chemin: '/', titre: 'Accueil du site de test', h1: 'Accueil', corps: lien('/a') },
    { chemin: '/a', titre: 'Page A du site de test', h1: 'Page A', description: 'Une autre description, distincte de la première, et assez longue pour passer le seuil.', corps: lien('/') },
  ]));
  assert.deepEqual(r.blocages, []);
});

test('lien interne cassé', () => {
  const r = auditer(site([{ chemin: '/', titre: 'Accueil du site de test', h1: 'Accueil', corps: lien('/absente') }]));
  assert.ok(regles(r).has('lien-casse'));
});

test('page orpheline et inatteignable', () => {
  const r = auditer(site([
    { chemin: '/', titre: 'Accueil du site de test', h1: 'Accueil' },
    { chemin: '/seule', titre: 'Page seule du site de test', h1: 'Seule', description: 'Une description différente, assez longue pour ne pas déclencher une autre règle.' },
  ]));
  assert.ok(regles(r).has('page-orpheline'));
  assert.ok(regles(r).has('inatteignable'));
});

test('titre, H1 et description en double', () => {
  const r = auditer(site([
    { chemin: '/', titre: 'Titre identique sur deux pages', h1: 'Même titre', corps: lien('/b') },
    { chemin: '/b', titre: 'Titre identique sur deux pages', h1: 'Même titre', corps: lien('/') },
  ]));
  for (const regle of ['title-duplique', 'h1-duplique', 'description-dupliquee']) assert.ok(regles(r).has(regle), regle);
});

test('canonical qui désigne une autre page', () => {
  const r = auditer(site([{ chemin: '/', titre: 'Accueil du site de test', h1: 'Accueil', canonical: `${SITE}/ailleurs` }]));
  assert.ok(regles(r).has('canonical-incoherent'));
});

test('page en noindex présente dans le sitemap', () => {
  const r = auditer(site(
    [{ chemin: '/', titre: 'Accueil du site de test', h1: 'Accueil', corps: lien('/cachee') }, { chemin: '/cachee', titre: 'Page cachée du site de test', h1: 'Cachée', robots: '<meta name="robots" content="noindex,follow">' }],
    { sitemap: [`${SITE}/`, `${SITE}/cachee`] },
  ));
  assert.ok(regles(r).has('sitemap-noindex'));
});

test('brouillon : contrôlé comme une page publiée, mais interdit de sitemap', () => {
  const brouillon = '<meta name="robots" content="noindex,follow"><meta name="statut-editorial" content="brouillon">';
  const r = auditer(site([
    { chemin: '/', titre: 'Accueil du site de test', h1: 'Accueil' },
    { chemin: '/brouillon', titre: 'Brouillon du site de test', h1: 'Brouillon', robots: brouillon, description: 'Une description différente, assez longue pour ne pas déclencher une autre règle.' },
  ]));
  assert.equal(r.totaux.brouillons, 1);
  assert.ok(regles(r).has('page-orpheline'), 'un brouillon sans lien entrant doit être signalé');
});

test('JSON-LD invalide et attribut style en ligne', () => {
  const r = auditer(site([{ chemin: '/', titre: 'Accueil du site de test', h1: 'Accueil', extra: '<script type="application/ld+json">{ pas du json }</script>', corps: '<p style="color:red">x</p>' }]));
  assert.ok(regles(r).has('json-ld-invalide'));
  assert.ok(regles(r).has('style-inline'));
});

test('contenu quasi identique entre deux pages', () => {
  const texte = `<p>${'Le suivi administratif d’une petite entreprise repose sur un classement clair et des échéances tenues. '.repeat(30)}</p>`;
  const r = auditer(site([
    { chemin: '/', titre: 'Accueil du site de test', h1: 'Accueil', corps: texte + lien('/copie') },
    { chemin: '/copie', titre: 'Copie du site de test', h1: 'Copie', description: 'Une description différente, assez longue pour ne pas déclencher une autre règle.', corps: texte + lien('/') },
  ]));
  assert.ok(regles(r).has('contenu-similaire'));
});

// ── Articles (BlogPosting) ────────────────────────────────────────────────

function article({ publie = '2026-10-10', modifie = publie, pageModifiee = modifie, visible = publie } = {}) {
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': `${SITE}/articles/a#webpage`, datePublished: publie, dateModified: pageModifiee },
      { '@type': 'BlogPosting', headline: 'Article', datePublished: publie, dateModified: modifie, author: { '@id': `${SITE}/#business` } },
    ],
  };
  return {
    chemin: '/articles/a',
    titre: 'Un article du site de test',
    h1: 'Article',
    description: 'Une description d’article différente des autres, et assez longue pour le seuil minimal.',
    corps: `${visible ? `<p>Publié le <time itemprop="datePublished" datetime="${visible}">ce jour</time></p>` : ''}${lien('/')}`,
    extra: `<script type="application/ld+json">${JSON.stringify(ld)}</script>`,
  };
}

test('un article cohérent ne produit aucun blocage', () => {
  // Même date partout : publication, modification, <time> visible et <lastmod> du mini-site (2026-10-03).
  const r = auditer(site([{ chemin: '/', titre: 'Accueil du site de test', h1: 'Accueil', corps: lien('/articles/a') }, article({ publie: '2026-10-03' })]));
  assert.deepEqual([...regles(r)].filter((x) => x.startsWith('article') || x.startsWith('dates') || x.startsWith('sitemap-lastmod-article')), []);
});

test('article : dates contradictoires entre la page et le BlogPosting', () => {
  const r = auditer(site([{ chemin: '/', titre: 'Accueil du site de test', h1: 'Accueil', corps: lien('/articles/a') }, article({ pageModifiee: '2026-10-09' })]));
  assert.ok(regles(r).has('dates-contradictoires'));
});

test('article : affichage facultatif de la date, sans contradiction ni date future ou inversée', () => {
  const sansDateAffichee = auditer(site([{ chemin: '/', titre: 'Accueil du site de test', h1: 'Accueil', corps: lien('/articles/a') }, article({ publie: '2026-10-03', visible: null })]));
  assert.deepEqual([...regles(sansDateAffichee)].filter((x) => x.startsWith('article') || x.startsWith('dates') || x.startsWith('sitemap-lastmod-article')), []);
  const contradictoire = auditer(site([{ chemin: '/', titre: 'Accueil du site de test', h1: 'Accueil', corps: lien('/articles/a') }, article({ visible: '2026-01-01' })]));
  assert.ok(regles(contradictoire).has('article-date-contradictoire'));
  const future = auditer(site([{ chemin: '/', titre: 'Accueil du site de test', h1: 'Accueil', corps: lien('/articles/a') }, article({ publie: '2099-01-01' })]));
  assert.ok(regles(future).has('article-date-future'));
  const inversee = auditer(site([{ chemin: '/', titre: 'Accueil du site de test', h1: 'Accueil', corps: lien('/articles/a') }, article({ modifie: '2026-10-01', pageModifiee: '2026-10-01' })]));
  assert.ok(regles(inversee).has('article-dates-inversees'));
});

test('article : le <lastmod> du sitemap est sa date de modification déclarée', () => {
  // Le mini-site déclare un lastmod au 2026-10-03 : un article modifié le 2026-10-10 doit être signalé.
  const r = auditer(site([{ chemin: '/', titre: 'Accueil du site de test', h1: 'Accueil', corps: lien('/articles/a') }, article()]));
  assert.ok(regles(r).has('sitemap-lastmod-article'));
});
