#!/usr/bin/env node
/**
 * Contrôles en navigateur réel sur le build servi localement.
 *
 * Ce que le script vérifie, page par page et à cinq largeurs d'écran :
 *  - erreurs console, erreurs JavaScript, requêtes échouées ;
 *  - violations de la Content-Security-Policy (la CSP reste active : pas de contournement) ;
 *  - débordement horizontal (une page ne doit jamais défiler de côté) ;
 *  - accessibilité avec axe-core, règles WCAG 2.0, 2.1 et 2.2 niveaux A et AA ;
 *  - parcours clavier : lien d'évitement, menu mobile, persistance du thème.
 *
 * Il ne fait pas partie du build : Playwright et axe-core ne sont pas des
 * dépendances du site. Le script les charge depuis une installation existante,
 * désignée par PLAYWRIGHT_ROOT (dossier contenant node_modules/playwright et
 * node_modules/axe-core). S'ils sont absents, il s'arrête avec le code 2 :
 * le contrôle est alors « non testé », jamais « réussi ».
 *
 * Usage :
 *   npm run preview -- --host 127.0.0.1 --port 4321   (dans un autre terminal)
 *   PLAYWRIGHT_ROOT=/chemin node scripts/browser-check.mjs [--base http://127.0.0.1:4321] [--json rapport.json] [--only /guides]
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { auditer } from './seo-audit.mjs';

const args = process.argv.slice(2);
const option = (nom, defaut = null) => (args.includes(nom) ? args[args.indexOf(nom) + 1] : defaut);
const base = option('--base', 'http://127.0.0.1:4321');
const filtre = option('--only');
const racine = process.env.PLAYWRIGHT_ROOT;

if (!racine || !existsSync(join(racine, 'node_modules', 'playwright'))) {
  console.error('NON TESTÉ : Playwright introuvable. Définissez PLAYWRIGHT_ROOT vers un dossier qui contient node_modules/playwright et node_modules/axe-core.');
  process.exit(2);
}
const require = createRequire(join(racine, 'package.json'));
const { chromium } = require('playwright');
const axeSource = readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');

const ECRANS = [
  { nom: 'mobile étroit', width: 320, height: 640 },
  { nom: 'mobile', width: 390, height: 844 },
  { nom: 'tablette', width: 768, height: 1024 },
  { nom: 'bureau', width: 1366, height: 768 },
  { nom: 'grand écran', width: 1920, height: 1080 },
];
const REGLES_AXE = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

// La liste des pages vient du build lui-même : aucune URL oubliée, aucune inventée.
const chemins = auditer('dist').pages.map((p) => p.chemin).filter((c) => !filtre || c.startsWith(filtre));

const navigateur = await chromium.launch();
const resultats = [];
const debut = Date.now();

for (const chemin of chemins) {
  const page = { chemin, statut: null, ecrans: [], axe: [], erreurs: [] };

  for (const ecran of ECRANS) {
    const contexte = await navigateur.newContext({ viewport: { width: ecran.width, height: ecran.height }, locale: 'fr-FR' });
    const onglet = await contexte.newPage();
    const console_ = [];
    const echecs = [];
    onglet.on('console', (m) => m.type() === 'error' && console_.push(m.text().slice(0, 300)));
    onglet.on('pageerror', (e) => console_.push(`exception : ${String(e.message).slice(0, 300)}`));
    onglet.on('requestfailed', (r) => echecs.push(`${r.url()} — ${r.failure()?.errorText}`));
    onglet.on('response', (r) => r.status() >= 400 && r.url() !== base + chemin && echecs.push(`${r.url()} — HTTP ${r.status()}`));
    await onglet.addInitScript(() => {
      window.__csp = [];
      document.addEventListener('securitypolicyviolation', (e) => window.__csp.push(`${e.violatedDirective} : ${e.blockedURI || 'inline'}`));
    });

    const reponse = await onglet.goto(base + chemin, { waitUntil: 'load' });
    page.statut ??= reponse?.status() ?? null;
    await onglet.waitForTimeout(150);

    const mesure = await onglet.evaluate(() => ({
      debordement: document.documentElement.scrollWidth - window.innerWidth,
      csp: window.__csp,
      h1Visible: (() => {
        const h1 = document.querySelector('h1');
        if (!h1) return false;
        const r = h1.getBoundingClientRect();
        return r.width > 0 && r.height > 0 && getComputedStyle(h1).visibility !== 'hidden';
      })(),
    }));
    const probleme = [];
    if (mesure.debordement > 1) probleme.push(`débordement horizontal de ${mesure.debordement}px`);
    if (!mesure.h1Visible) probleme.push('h1 invisible');
    for (const v of mesure.csp) probleme.push(`CSP ${v}`);
    for (const c of console_) probleme.push(`console ${c}`);
    for (const e of echecs) probleme.push(`requête ${e}`);
    page.ecrans.push({ ecran: ecran.nom, largeur: ecran.width, problemes: probleme });
    for (const p of probleme) page.erreurs.push(`[${ecran.nom}] ${p}`);

    // axe-core : une passe mobile et une passe bureau suffisent, le DOM est le même ailleurs.
    if (ecran.nom === 'mobile' || ecran.nom === 'bureau') {
      // Les blocs révélés au défilement sont transparents tant qu'ils n'ont pas été
      // atteints : axe mesurerait un contraste en cours d'animation. On recharge donc
      // la page avec « mouvement réduit », où le site affiche tout d'emblée.
      await onglet.emulateMedia({ reducedMotion: 'reduce' });
      await onglet.reload({ waitUntil: 'load' });
      await onglet.waitForTimeout(100);
      await onglet.evaluate(axeSource);
      const violations = await onglet.evaluate(async (regles) => {
        // eslint-disable-next-line no-undef
        const r = await axe.run(document, { runOnly: { type: 'tag', values: regles } });
        return r.violations.map((v) => ({ id: v.id, impact: v.impact, aide: v.help, noeuds: v.nodes.length, exemple: v.nodes[0]?.target?.join(' ') }));
      }, REGLES_AXE);
      for (const v of violations) {
        page.axe.push({ ecran: ecran.nom, ...v });
        page.erreurs.push(`[${ecran.nom}] axe ${v.id} (${v.impact}) ×${v.noeuds} — ${v.exemple}`);
      }
    }
    await contexte.close();
  }
  resultats.push(page);
}

// Parcours fonctionnels, une seule fois : ils ne dépendent pas de la page.
const parcours = [];
{
  const contexte = await navigateur.newContext({ viewport: { width: 390, height: 844 }, locale: 'fr-FR' });
  const onglet = await contexte.newPage();
  await onglet.goto(base + '/', { waitUntil: 'load' });

  await onglet.keyboard.press('Tab');
  const premier = await onglet.evaluate(() => ({ classe: document.activeElement?.className, href: document.activeElement?.getAttribute('href') }));
  parcours.push({ test: 'Tab atteint d’abord le lien d’évitement', ok: premier.href === '#main-content', detail: JSON.stringify(premier) });

  const menu = onglet.locator('#nav-hamburger');
  await menu.click();
  const ouvert = await menu.getAttribute('aria-expanded');
  await onglet.keyboard.press('Escape');
  const ferme = await menu.getAttribute('aria-expanded');
  parcours.push({ test: 'Menu mobile : ouverture au clic, fermeture à Échap', ok: ouvert === 'true' && ferme === 'false', detail: `aria-expanded ${ouvert} → ${ferme}` });

  // Le thème choisi doit être rétabli avant le premier affichage, sur la page suivante.
  await onglet.evaluate(() => localStorage.setItem('brittassist-theme', 'light'));
  await onglet.goto(base + '/guides', { waitUntil: 'domcontentloaded' });
  const theme = await onglet.evaluate(() => document.documentElement.dataset.theme ?? null);
  parcours.push({ test: 'Thème clair rétabli au chargement d’une autre page', ok: theme === 'light', detail: `data-theme = ${theme}` });

  const bandeau = await onglet.locator('#cookie-banner').count();
  const cookies = (await contexte.cookies()).map((c) => c.name);
  parcours.push({ test: 'Bandeau de consentement affiché, aucun cookie de mesure avant choix', ok: bandeau === 1 && !cookies.some((n) => n.startsWith('_ga')), detail: `bandeau ${bandeau}, cookies [${cookies.join(', ')}]` });
  await contexte.close();
}

// Thème clair : le contraste est revérifié sur un échantillon qui couvre chaque gabarit
// (la première et la dernière page de chaque famille).
const themeClair = [];
{
  const familles = [/^\/$/, /^\/guides$/, /^\/guides\/[^/]+$/, /^\/services$/, /^\/services\/[^/]+$/, /^\/assistante$/, /^\/assistante\/[^/]+$/, /^\/assistante-independante$/, /^\/assistante-independante\/[^/]+$/, /^\/(tarifs|contact|private-office|a-propos|cgv|methode-editoriale)$/];
  const echantillon = [...new Set(familles.flatMap((re) => { const f = chemins.filter((c) => re.test(c)); return [f[0], f.at(-1)]; }).filter(Boolean))];
  const contexte = await navigateur.newContext({ viewport: { width: 1366, height: 768 }, locale: 'fr-FR', reducedMotion: 'reduce' });
  await contexte.addInitScript(() => localStorage.setItem('brittassist-theme', 'light'));
  const onglet = await contexte.newPage();
  for (const chemin of echantillon) {
    await onglet.goto(base + chemin, { waitUntil: 'load' });
    await onglet.waitForTimeout(100);
    await onglet.evaluate(axeSource);
    const violations = await onglet.evaluate(async (regles) => {
      // eslint-disable-next-line no-undef
      const r = await axe.run(document, { runOnly: { type: 'tag', values: regles } });
      return r.violations.map((v) => ({ id: v.id, impact: v.impact, noeuds: v.nodes.length, exemple: v.nodes[0]?.target?.join(' ') }));
    }, REGLES_AXE);
    themeClair.push({ chemin, violations });
  }
  await contexte.close();
}

await navigateur.close();

// La page d'erreur répond 200 sur un serveur de fichiers et 404 chez l'hébergeur : les deux sont admis.
const enEchec = resultats.filter((p) => p.erreurs.length || !(p.statut === 200 || (p.chemin === '/404' && p.statut === 404)));
const rapport = {
  genere: new Date().toISOString(),
  base,
  dureeSecondes: Math.round((Date.now() - debut) / 1000),
  pages: resultats.length,
  chargements: resultats.length * ECRANS.length,
  ecrans: ECRANS,
  reglesAxe: REGLES_AXE,
  pagesEnEchec: enEchec.length,
  violationsAxe: resultats.reduce((s, p) => s + p.axe.length, 0),
  themeClair: { pages: themeClair.length, violations: themeClair.reduce((s, p) => s + p.violations.length, 0), detail: themeClair },
  parcours,
  resultats,
};

console.log(`${rapport.pages} pages × ${ECRANS.length} écrans = ${rapport.chargements} chargements en ${rapport.dureeSecondes} s`);
console.log(`Pages avec au moins un problème : ${rapport.pagesEnEchec} · violations axe-core : ${rapport.violationsAxe}`);
const parType = new Map();
for (const p of resultats) for (const e of p.erreurs) {
  const cle = e.replace(/^\[[^\]]+\] /, '').replace(/×\d+ — .*/, '').slice(0, 110);
  parType.set(cle, (parType.get(cle) ?? new Set()).add(p.chemin));
}
for (const [cle, pages] of [...parType.entries()].sort((a, b) => b[1].size - a[1].size)) console.log(`  ${String(pages.size).padStart(4)} page(s) — ${cle}   ex. ${[...pages][0]}`);
for (const p of parcours) console.log(`  ${p.ok ? 'PASS' : 'FAIL'} — ${p.test} (${p.detail})`);
console.log(`Thème clair : ${rapport.themeClair.pages} pages testées, ${rapport.themeClair.violations} violation(s) axe-core`);
for (const p of themeClair) for (const v of p.violations) console.log(`  ${p.chemin} — ${v.id} (${v.impact}) ×${v.noeuds} — ${v.exemple}`);

if (option('--json')) writeFileSync(option('--json'), JSON.stringify(rapport, null, 2));
process.exit(enEchec.length || rapport.themeClair.violations || parcours.some((p) => !p.ok) ? 1 : 0);
