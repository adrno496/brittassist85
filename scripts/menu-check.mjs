#!/usr/bin/env node
/**
 * Menu principal et lien « Articles » en navigateur réel : largeurs critiques du
 * menu ordinateur (921 à 1920 px), menu mobile à 320 et 390 px et au zoom 200 %,
 * parcours clavier (focus à l'ouverture, Tab, focus visible, Échap), lien actif.
 *
 * Comme browser-check.mjs, il charge Playwright depuis PLAYWRIGHT_ROOT et sort
 * avec le code 2 (« non testé ») s'il est absent.
 *
 * Usage : npm run servir & PLAYWRIGHT_ROOT=/chemin node scripts/menu-check.mjs [--base http://127.0.0.1:4322]
 */
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';

const args = process.argv.slice(2);
const base = args.includes('--base') ? args[args.indexOf('--base') + 1] : 'http://127.0.0.1:4322';
const racine = process.env.PLAYWRIGHT_ROOT;
if (!racine || !existsSync(join(racine, 'node_modules', 'playwright'))) {
  console.error('NON TESTÉ : Playwright introuvable (PLAYWRIGHT_ROOT).');
  process.exit(2);
}
const { chromium } = createRequire(join(racine, 'package.json'))('playwright');

const b = await chromium.launch();
const resultats = [];
const ok = (nom, cond, detail = '') => resultats.push({ nom, ok: Boolean(cond), detail });

// Bureau : le menu complet tient sur une ligne, sans débordement, de 921 à 1920 px.
for (const width of [921, 960, 1024, 1100, 1280, 1366, 1920]) {
  const p = await b.newPage({ viewport: { width, height: 800 } });
  await p.goto(`${base}/`);
  const m = await p.evaluate(() => {
    const nav = document.querySelector('.nav-inner');
    const liens = [...document.querySelectorAll('#nav-links > li:not(.nav-links__cta) a')];
    const tops = new Set(liens.map((a) => Math.round(a.getBoundingClientRect().top)));
    const art = liens.find((a) => a.getAttribute('href') === '/articles');
    const r = art?.getBoundingClientRect();
    return {
      debordePage: document.documentElement.scrollWidth > window.innerWidth,
      debordeNav: nav.scrollWidth > nav.clientWidth,
      lignes: tops.size,
      ordre: liens.map((a) => a.textContent.trim()).join(' | '),
      articlesVisible: Boolean(r && r.width > 0 && r.right <= window.innerWidth),
    };
  });
  ok(`bureau ${width}px : une ligne, sans débordement, « Articles » visible`, !m.debordePage && !m.debordeNav && m.lignes === 1 && m.articlesVisible, JSON.stringify(m));
  await p.close();
}

// Zoom 200 % : un écran de 1280 px à 200 % équivaut à 640 px CSS.
for (const [width, scale, nom] of [[640, 2, 'zoom 200 % (1280 px)'], [320, 1, 'mobile 320 px'], [390, 1, 'mobile 390 px']]) {
  const p = await b.newPage({ viewport: { width, height: 720 }, deviceScaleFactor: scale });
  await p.goto(`${base}/`);
  await p.click('#nav-hamburger');
  await p.waitForTimeout(400);
  const m = await p.evaluate(() => {
    const a = document.querySelector('#nav-links a[href="/articles"]');
    const r = a.getBoundingClientRect();
    return { expanded: document.querySelector('#nav-hamburger').getAttribute('aria-expanded'), visible: r.width > 0 && r.left >= 0 && r.right <= window.innerWidth, debordePage: document.documentElement.scrollWidth > window.innerWidth };
  });
  ok(`${nom} : menu ouvert, « Articles » visible, sans débordement`, m.expanded === 'true' && m.visible && !m.debordePage, JSON.stringify(m));
  // Clavier : « Articles » est atteignable au Tab dans le menu ouvert, et Entrée y mène.
  // À l'ouverture, le focus est dans le menu ; Tab y avance jusqu'à « Articles ».
  const ouverture = await p.evaluate(() => (document.activeElement?.closest('#nav-links') ? 'menu' : document.activeElement?.className || document.activeElement?.tagName));
  ok(`${nom} : à l’ouverture, le focus passe dans le menu`, ouverture === 'menu', `focus sur ${ouverture}`);
  let atteint = await p.evaluate(() => document.activeElement?.getAttribute('href') === '/articles');
  for (let i = 0; i < 20 && !atteint; i++) {
    await p.keyboard.press('Tab');
    atteint = await p.evaluate(() => document.activeElement?.getAttribute('href') === '/articles');
  }
  const focus = atteint ? await p.evaluate(() => { const s = getComputedStyle(document.activeElement); return `${s.outlineStyle} ${s.outlineWidth} ${s.outlineColor}`; }) : null;
  ok(`${nom} : « Articles » atteint au clavier (Tab), focus visible`, atteint && focus && !focus.startsWith('none'), `outline ${focus}`);
  if (atteint) {
    // Échap ferme le menu et rend le focus au bouton ; on rouvre ensuite pour suivre le lien.
    await p.keyboard.press('Escape');
    const retour = await p.evaluate(() => ({ focus: document.activeElement?.id, expanded: document.querySelector('#nav-hamburger').getAttribute('aria-expanded') }));
    ok(`${nom} : Échap ferme le menu et rend le focus au bouton`, retour.focus === 'nav-hamburger' && retour.expanded === 'false', JSON.stringify(retour));
    await p.keyboard.press('Enter');
    await p.waitForTimeout(300);
    for (let i = 0; i < 20 && !(await p.evaluate(() => document.activeElement?.getAttribute('href') === '/articles')); i++) await p.keyboard.press('Tab');
    await Promise.all([p.waitForURL(/\/articles$/), p.keyboard.press('Enter')]);
    ok(`${nom} : Entrée mène à /articles`, p.url().endsWith('/articles'), p.url());
    const actif = await p.evaluate(() => document.querySelector('#nav-links a[href="/articles"]').getAttribute('aria-current'));
    ok(`${nom} : lien actif signalé (aria-current)`, actif === 'page', String(actif));
  }
  await p.close();
}

// Bureau : le lien fonctionne au clic.
const p = await b.newPage({ viewport: { width: 1366, height: 800 } });
await p.goto(`${base}/guides`);
await Promise.all([p.waitForURL(/\/articles$/), p.click('#nav-links a[href="/articles"]')]);
ok('bureau : clic sur « Articles » → /articles (200)', p.url().endsWith('/articles'), p.url());
await b.close();

for (const r of resultats) console.log(`${r.ok ? 'PASS' : 'FAIL'} — ${r.nom}${r.ok ? '' : ` — ${r.detail}`}`);
const echecs = resultats.filter((r) => !r.ok).length;
console.log(`${resultats.length - echecs}/${resultats.length} contrôles réussis`);
process.exit(echecs ? 1 : 0);
