#!/usr/bin/env node
/**
 * Quality gate éditorial — contrôle les données AVANT le build.
 *
 * Le build audite le HTML produit (scripts/seo-audit.mjs). Ce script, lui, lit
 * les fiches telles qu'elles sont écrites, et refuse ce qu'aucun contrôle de
 * HTML ne peut voir : une page sans fiche de cadrage, deux pages visant la même
 * requête, une règle de droit citée sans source, une promesse de résultat.
 *
 * Il charge directement les fichiers .ts de src/data : Node 22.18 ou plus récent
 * est nécessaire (prise en charge native de TypeScript). Il ne tourne donc pas
 * pendant le build de l'hébergeur ; c'est un contrôle de poste de travail et
 * d'intégration continue : `npm run qa`.
 *
 * Usage : node scripts/content-gate.mjs [--json rapport.json]
 */
import { writeFileSync } from 'node:fs';
import { bibliotheque, dossiers } from '../src/data/bibliotheque.ts';
import { metiers } from '../src/data/metiers.ts';
import { prestations } from '../src/data/prestations.ts';
import { zones } from '../src/data/zones.ts';
import { dateDeRelecture, datePublicationSansRelecture, estPubliee, validationDuProprietaire } from '../src/data/publication.mjs';
import { lastmodPour } from '../src/data/dates.mjs';
import { validations } from '../src/data/relectures.mjs';
import { INTERDITS, MARQUEURS_DE_REGLE } from '../src/data/regles-editoriales.mjs';
import { lireArticles } from './lib/articles-fichiers.mjs';

const SEUILS = { titleMax: 70, descriptionMin: 70, descriptionMax: 165, similarite: 0.55 };

/** Routes connues du site : toute cible de lien interne doit en faire partie. */
const routes = new Set([
  '/', '/private-office', '/services', '/tarifs', '/guides', '/a-propos', '/contact',
  '/mentions-legales', '/cgv', '/politique-confidentialite', '/assistante', '/assistante-independante', '/methode-editoriale', '/articles',
  ...bibliotheque.map((g) => `/guides/${g.slug}`),
  ...metiers.map((m) => `/assistante/${m.slug}`),
  ...prestations.map((p) => `/services/${p.slug}`),
  ...zones.map((z) => `/assistante-independante/${z.slug}`),
  // La rubrique possède ses propres contrôles de fond dans articles-check.mjs.
  // Une validation doit néanmoins désigner une fiche réellement présente et lisible.
  ...lireArticles().filter((a) => !a.erreur).map((a) => `/articles/${a.slug}`),
]);

const normaliser = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
const grammes = (t, n = 4) => {
  const m = normaliser(t).split(' ');
  const s = new Set();
  for (let i = 0; i + n <= m.length; i++) s.add(m.slice(i, i + n).join(' '));
  return s;
};
const jaccard = (a, b) => {
  let c = 0;
  for (const g of a) if (b.has(g)) c++;
  return c / (a.size + b.size - c || 1);
};

/** Tout le texte rédigé d'une fiche, pour les contrôles de fond. */
function texteDe(g) {
  const blocs = g.sections.flatMap((s) => [s.h2, ...s.blocs.flatMap((b) => [
    b.h3 ?? '', ...(b.paragraphes ?? []), ...(b.liste ?? []), ...(b.etapes ?? []),
    ...(b.tableau ? [b.tableau.legende, ...b.tableau.colonnes, ...b.tableau.lignes.flat()] : []),
    ...(b.modele ? [b.modele.titre, ...b.modele.lignes] : []),
  ])]);
  return [g.h1, g.lede, ...g.reponseCourte, ...blocs, ...(g.erreurs ?? []), ...(g.limites ?? []), ...g.faq.flatMap((f) => [f.q, f.a]), g.cloture].join(' ');
}

const blocages = [];
const avertissements = [];
const bloquer = (page, regle, detail = '') => blocages.push({ page, regle, detail });
const avertir = (page, regle, detail = '') => avertissements.push({ page, regle, detail });

// Les douze premiers guides n'ont ni type ni cadrage : ils sont contrôlés sur le socle commun seulement.
const nouveaux = bibliotheque.filter((g) => g.type);
const slugsDossiers = new Set(dossiers.map((d) => d.slug));

// ── 1. Unicité : slugs, titres, H1, descriptions, requête principale ──────
for (const [champ, lire] of [['slug', (g) => g.slug], ['title', (g) => g.title], ['h1', (g) => g.h1], ['description', (g) => g.description], ['nom', (g) => g.nom]]) {
  const vus = new Map();
  for (const g of bibliotheque) {
    const cle = normaliser(lire(g));
    if (vus.has(cle)) bloquer(g.slug, `${champ}-duplique`, `identique à ${vus.get(cle)}`);
    else vus.set(cle, g.slug);
  }
}
const requetes = new Map();
for (const g of nouveaux) {
  if (!g.cadrage) continue;
  const cle = normaliser(g.cadrage.motCle);
  if (requetes.has(cle)) bloquer(g.slug, 'intention-dupliquee', `même requête principale que ${requetes.get(cle)} : « ${g.cadrage.motCle} »`);
  else requetes.set(cle, g.slug);
}

// ── 2. Fiche par fiche ────────────────────────────────────────────────────
for (const g of bibliotheque) {
  const page = g.slug;
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(g.slug)) bloquer(page, 'slug-invalide', g.slug);
  if (g.title.length > SEUILS.titleMax) bloquer(page, 'title-long', `${g.title.length} caractères`);
  if (!g.title.endsWith(' · BrittAssist')) bloquer(page, 'title-sans-marque');
  if (g.description.length < SEUILS.descriptionMin || g.description.length > SEUILS.descriptionMax) bloquer(page, 'description-longueur', `${g.description.length} caractères`);
  if (g.reponseCourte.length < 3) bloquer(page, 'reponse-courte', `${g.reponseCourte.length} point(s) : il en faut au moins trois`);
  if (g.sections.length < 2) bloquer(page, 'sections', `${g.sections.length} section(s)`);
  if (g.faq.length < 2) bloquer(page, 'faq', `${g.faq.length} question(s)`);
  if (!g.cloture) bloquer(page, 'cloture-absente');
  if (Number.isNaN(Date.parse(g.dateModified))) bloquer(page, 'date-invalide', g.dateModified);

  // Liens internes : tous doivent mener à une route existante.
  if (g.liens.length < 3) bloquer(page, 'liens-insuffisants', `${g.liens.length} lien(s) sortant(s)`);
  for (const l of g.liens) {
    if (!l.href.startsWith('/')) bloquer(page, 'lien-externe-dans-le-maillage', l.href);
    else if (!routes.has(l.href)) bloquer(page, 'lien-vers-route-inconnue', l.href);
    if (l.href === `/guides/${g.slug}`) bloquer(page, 'lien-vers-soi-meme');
    if (/^(cliquez ici|ici|en savoir plus|lire la suite)$/i.test(l.label.trim())) bloquer(page, 'ancre-generique', l.label);
  }
  // Un lien vers une offre ou une prise de contact : chaque page doit mener quelque part.
  if (g.type && !g.liens.some((l) => /^\/(services|tarifs|contact|private-office|assistante)/.test(l.href))) avertir(page, 'aucun-lien-vers-une-offre');

  for (const s of g.sources ?? []) {
    if (!/^https:\/\//.test(s.href)) bloquer(page, 'source-non-https', s.href);
  }

  // Rubrique « Pour approfondir » : mêmes exigences que le maillage, une phrase de contexte par lien,
  // et une limite de taille — une page qui cite tout ne recommande plus rien.
  const approfondis = (g.approfondir?.groupes ?? []).flatMap((groupe) => groupe.liens);
  for (const l of approfondis) {
    if (!routes.has(l.href)) bloquer(page, 'approfondir-route-inconnue', l.href);
    if (l.href === `/guides/${g.slug}`) bloquer(page, 'lien-vers-soi-meme');
    if (!l.note?.trim()) bloquer(page, 'approfondir-sans-contexte', l.href);
  }
  if (new Set(approfondis.map((l) => l.href)).size !== approfondis.length) bloquer(page, 'approfondir-doublon');
  if (approfondis.length > 15) bloquer(page, 'approfondir-trop-long', `${approfondis.length} liens : quinze au plus`);
  // La rubrique apparaît avec sa première cible en ligne : ce jour-là la page a changé, sa date et celle du sitemap doivent le dire.
  const ciblesEnLigne = approfondis.map((l) => dateDeRelecture(l.href) ?? datePublicationSansRelecture(l.href)).filter(Boolean).sort();
  if (ciblesEnLigne.length) {
    const sitemap = lastmodPour(`/guides/${g.slug}`);
    if (g.dateModified < ciblesEnLigne[0]) bloquer(page, 'approfondir-date', `rubrique visible depuis le ${ciblesEnLigne[0]}, fiche datée du ${g.dateModified}`);
    if (sitemap !== g.dateModified) bloquer(page, 'approfondir-date', `sitemap ${sitemap}, fiche ${g.dateModified}`);
  }

  const texte = texteDe(g);
  for (const [motif, raison] of INTERDITS) {
    const trouve = texte.match(motif);
    if (trouve) bloquer(page, 'formulation-interdite', `${raison} : « ${trouve[0]} »`);
  }

  if (!g.type) continue; // ── ce qui suit ne concerne que les pages d'octobre 2026 et suivantes

  if (!g.dossier || !slugsDossiers.has(g.dossier)) bloquer(page, 'dossier-inconnu', String(g.dossier));
  if (g.type === 'pilier' && g.dossier !== g.slug) bloquer(page, 'pilier-mal-rattache');
  if (!g.cadrage) bloquer(page, 'cadrage-absent');
  else for (const champ of ['intention', 'motCle', 'persona', 'objectif', 'difference']) {
    if (!g.cadrage[champ]) bloquer(page, 'cadrage-incomplet', champ);
  }
  if (g.cadrage && g.cadrage.variantes.length < 2) bloquer(page, 'cadrage-variantes', 'au moins deux variantes attendues');

  // Une page qui énonce une règle de droit ou un montant doit citer sa source.
  const regle = texte.match(MARQUEURS_DE_REGLE);
  if (regle && !(g.sources?.length)) bloquer(page, 'regle-sans-source', `« ${regle[0]} » sans rubrique Références`);
  if (g.type === 'reference' && !(g.sources?.length)) bloquer(page, 'reference-sans-source');

  // Tableaux : chaque ligne a autant de cellules que de colonnes.
  for (const s of g.sections) for (const b of s.blocs) {
    if (!b.tableau) continue;
    for (const ligne of b.tableau.lignes) {
      if (ligne.length !== b.tableau.colonnes.length) bloquer(page, 'tableau-irregulier', `« ${b.tableau.legende} » : ${ligne.length} cellules pour ${b.tableau.colonnes.length} colonnes`);
    }
  }
}

// ── 2 bis. Série « secrétariat externalisé » : lot connu, et au moins un lien éditorial entrant ──
const serie = bibliotheque.filter((g) => g.lot);
const citees = new Set(
  bibliotheque.flatMap((g) => [...g.liens, ...(g.approfondir?.groupes ?? []).flatMap((groupe) => groupe.liens)].map((l) => l.href)),
);
for (const g of serie) {
  if (!['A', 'B', 'C', 'D'].includes(g.lot)) bloquer(g.slug, 'lot-inconnu', String(g.lot));
  // Le pilier et l'index citent toutes les pages ; ce contrôle exige en plus un lien choisi par une autre fiche.
  if (!citees.has(`/guides/${g.slug}`)) avertir(g.slug, 'aucun-lien-editorial-entrant', 'citée par aucune autre fiche');
  // Une page en ligne porte la date de son lot : le registre et la fiche doivent dire le même jour.
  const enLigneLe = datePublicationSansRelecture(`/guides/${g.slug}`);
  if (enLigneLe && enLigneLe !== g.datePublished) bloquer(g.slug, 'date-de-lot-incoherente', `registre ${enLigneLe}, fiche ${g.datePublished}`);
}

// ── 2 ter. Validations du propriétaire : une page validée existe, sinon la trace ne désigne plus rien ──
for (const v of validations) {
  for (const chemin of v.pages) if (!routes.has(chemin)) bloquer(chemin, 'validation-page-inconnue', `validation du ${v.date}`);
}

// ── 3. Chaque dossier a son pilier et assez de pages pour en être un ──────
for (const d of dossiers) {
  const pilier = bibliotheque.find((g) => g.slug === d.slug);
  if (!pilier || pilier.type !== 'pilier') bloquer(d.slug, 'dossier-sans-pilier');
  const pages = bibliotheque.filter((g) => g.dossier === d.slug && g.slug !== d.slug).length;
  if (pages < 4) avertir(d.slug, 'dossier-maigre', `${pages} page(s)`);
  if (!routes.has(d.action.href)) bloquer(d.slug, 'action-vers-route-inconnue', d.action.href);
}

// ── 4. Pages métier ajoutées : mêmes exigences de fond ────────────────────
for (const m of metiers) {
  const page = `assistante/${m.slug}`;
  if (m.title.length > SEUILS.titleMax) bloquer(page, 'title-long', `${m.title.length} caractères`);
  if (m.description.length < SEUILS.descriptionMin || m.description.length > SEUILS.descriptionMax) (estPubliee(`/assistante/${m.slug}`) ? avertir : bloquer)(page, 'description-longueur', `${m.description.length} caractères`);
  for (const s of m.liens) if (!prestations.some((p) => p.slug === s)) bloquer(page, 'prestation-inconnue', s);
  const texte = [m.h1, m.lede, ...m.constat.paragraphes, ...m.frictions, ...m.absorbe, ...m.reste, ...m.faq.flatMap((f) => [f.q, f.a])].join(' ');
  for (const [motif, raison] of INTERDITS) {
    const trouve = texte.match(motif);
    if (trouve) bloquer(page, 'formulation-interdite', `${raison} : « ${trouve[0]} »`);
  }
}

// ── 5. Proximité de contenu entre fiches (4-grammes) ──────────────────────
const empreintes = bibliotheque.map((g) => ({ slug: g.slug, g: grammes(texteDe(g)) }));
const proches = [];
for (let i = 0; i < empreintes.length; i++) for (let j = i + 1; j < empreintes.length; j++) {
  const score = jaccard(empreintes[i].g, empreintes[j].g);
  if (score >= 0.2) proches.push({ a: empreintes[i].slug, b: empreintes[j].slug, score: Number(score.toFixed(3)) });
}
proches.sort((x, y) => y.score - x.score);
for (const p of proches) (p.score >= SEUILS.similarite ? bloquer : avertir)(p.a, 'contenu-proche', `${Math.round(p.score * 100)} % de 4-grammes communs avec ${p.b}`);

// ── Sortie ────────────────────────────────────────────────────────────────
const parType = {};
for (const g of nouveaux) parType[g.type] = (parType[g.type] ?? 0) + 1;
const brouillons = bibliotheque.filter((g) => !estPubliee(`/guides/${g.slug}`)).length + metiers.filter((m) => !estPubliee(`/assistante/${m.slug}`)).length;

console.log(`Fiches : ${bibliotheque.length} guides (${nouveaux.length} nouveaux) · ${metiers.length} métiers · ${dossiers.length} dossiers`);
console.log(`Nouveaux guides par nature : ${Object.entries(parType).map(([k, v]) => `${k} ${v}`).join(' · ')}`);
const nonRelues = nouveaux.filter((g) => !dateDeRelecture(`/guides/${g.slug}`)).length;
console.log(`Brouillons non publiés : ${brouillons} · nouveaux guides non relus : ${nonRelues} · requêtes principales distinctes : ${requetes.size}`);
if (serie.length) {
  const parLot = {};
  for (const g of serie) parLot[g.lot] = (parLot[g.lot] ?? 0) + 1;
  const enLigne = serie.filter((g) => estPubliee(`/guides/${g.slug}`)).length;
  const validees = serie.filter((g) => validationDuProprietaire(`/guides/${g.slug}`)).length;
  const relues = serie.filter((g) => dateDeRelecture(`/guides/${g.slug}`)).length;
  console.log(`Série secrétariat : ${serie.length} guides · ${Object.keys(parLot).sort().map((l) => `lot ${l} ${parLot[l]}`).join(' · ')} · en ligne : ${enLigne} · validées par le propriétaire : ${validees} · relues par Brittany Dreano : ${relues}`);
}
console.log(`Blocages : ${blocages.length} · avertissements : ${avertissements.length}`);
for (const [titre, liste] of [['BLOCAGES', blocages], ['AVERTISSEMENTS', avertissements]]) {
  if (!liste.length) continue;
  console.log(`\n${titre} :`);
  for (const x of liste.slice(0, 60)) console.log(`  ${x.regle.padEnd(30)} ${x.page}${x.detail ? ' — ' + x.detail : ''}`);
  if (liste.length > 60) console.log(`  … et ${liste.length - 60} autre(s)`);
}

const option = process.argv.includes('--json') ? process.argv[process.argv.indexOf('--json') + 1] : null;
if (option) writeFileSync(option, JSON.stringify({ genere: new Date().toISOString(), blocages, avertissements, proches, parType }, null, 2));
process.exit(blocages.length ? 1 : 0);
