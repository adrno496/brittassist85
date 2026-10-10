#!/usr/bin/env node
/**
 * Contrôle de la rubrique « Articles » — avant le build.
 *
 * Lit les fiches (src/content/articles/*.md), le registre de publication commun
 * et le plan éditorial (docs/articles/plan-editorial-2026.json), et refuse :
 *  - une fiche dont les dates, les sources ou le statut contredisent le registre ;
 *  - un article inscrit au registre sans source primaire ouverte, ou sujet
 *    réglementaire sans approbation ;
 *  - une relecture ou une approbation déclarée sans trace ;
 *  - un titre, un H1, une description ou une intention déjà pris par un guide ou un article ;
 *  - deux articles pour la même semaine ;
 *  - un plan qui ne compte pas exactement les 41 créneaux du 1er janvier au 8 octobre 2026.
 *
 * Node 22.18 ou plus récent (il charge les fichiers .ts de src/data).
 * Usage : node scripts/articles-check.mjs [--json rapport.json] [--date AAAA-MM-JJ]
 * Code de sortie 1 si un blocage est trouvé.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { bibliotheque } from '../src/data/bibliotheque.ts';
import { metiers } from '../src/data/metiers.ts';
import { prestations } from '../src/data/prestations.ts';
import { zones } from '../src/data/zones.ts';
import {
  STATUTS_PLAN,
  aujourdhuiParis,
  cheminArticle,
  controlerArticle,
  controlerCollection,
  creneau,
  programmeRetrospectif,
} from '../src/data/articles.mjs';
import { articlesInscrits, dateDeRelecture, datePublicationSansRelecture, estPubliee, validationDuProprietaire } from '../src/data/publication.mjs';
import { lastmodPour } from '../src/data/dates.mjs';
import { lireArticles } from './lib/articles-fichiers.mjs';

export const PLAN = 'docs/articles/plan-editorial-2026.json';
const STATUTS_EN_LIGNE = new Set(['PUBLIE', 'DEPLOIEMENT_NON_CONFIRME', 'EN_LIGNE_VERIFIE']);
/** États d'un créneau qui peuvent exister sans fiche rédigée (pistes repérées, sources non ouvertes). */
const SANS_FICHE = new Set(['A_RECHERCHER', 'SOURCES_INSUFFISANTES', 'SOURCES_A_VERIFIER']);

/** Routes du site connues avant le build. */
function routesConnues(articles) {
  return new Set([
    '/', '/private-office', '/services', '/tarifs', '/guides', '/a-propos', '/contact', '/articles',
    '/mentions-legales', '/cgv', '/politique-confidentialite', '/assistante', '/assistante-independante', '/methode-editoriale',
    ...bibliotheque.map((g) => `/guides/${g.slug}`),
    ...metiers.map((m) => `/assistante/${m.slug}`),
    ...prestations.map((p) => `/services/${p.slug}`),
    ...zones.map((z) => `/assistante-independante/${z.slug}`),
    ...articles.map((a) => cheminArticle(a.slug)),
  ]);
}

/**
 * Contrôle complet. Fonction pure à l'exception des lectures de fichiers : les tests l'appellent
 * avec un dossier et un plan de leur choix.
 */
export function controlerRubrique({ dossier, plan = PLAN, aujourdhui = aujourdhuiParis(), registre } = {}) {
  const reg = registre ?? {
    datePublication: datePublicationSansRelecture,
    dateRelecture: dateDeRelecture,
    validation: validationDuProprietaire,
    inscrits: articlesInscrits(),
  };
  const fiches = lireArticles(dossier);
  const lisibles = fiches.filter((f) => !f.erreur);
  const routes = routesConnues(fiches);
  const slugs = new Set(fiches.map((f) => f.slug));
  const ctx = {
    aujourdhui,
    datePublication: reg.datePublication,
    dateRelecture: reg.dateRelecture,
    validation: reg.validation,
    routeExiste: (c) => routes.has(c),
    guidePublie: (slug) => bibliotheque.some((g) => g.slug === slug) && estPubliee(`/guides/${slug}`),
    articleExiste: (slug) => slugs.has(slug),
  };

  const blocages = [];
  const avertissements = [];
  const fichesRapport = [];

  for (const f of fiches) {
    if (f.erreur) {
      blocages.push({ page: f.slug, regle: 'fiche-illisible', detail: f.erreur });
      continue;
    }
    const r = controlerArticle(f, ctx);
    for (const b of r.blocages) blocages.push({ page: f.slug, ...b });
    for (const a of r.avertissements) avertissements.push({ page: f.slug, ...a });
    // Le <lastmod> du sitemap et la date de modification affichée sont la même date.
    if (r.inscrit) {
      const attendu = f.data.dateModified ?? f.data.datePublished;
      const sitemap = lastmodPour(cheminArticle(f.slug));
      if (sitemap !== attendu) blocages.push({ page: f.slug, regle: 'lastmod-incoherent', detail: `sitemap ${sitemap}, fiche ${attendu}` });
    }
    fichesRapport.push({ slug: f.slug, semaine: f.data.semaineEditoriale, statut: f.data.editorialStatus, sensibilite: f.data.sensibilite, inscrit: r.inscrit, publiable: r.publiable, blocages: r.blocages.length });
  }

  const guides = bibliotheque.map((g) => ({ slug: g.slug, title: g.title, h1: g.h1, description: g.description, intention: g.cadrage?.motCle }));
  for (const b of controlerCollection(lisibles, guides)) blocages.push({ page: b.slug, regle: b.regle, detail: b.detail });

  // Registre : toute ligne /articles/<slug> désigne une fiche existante.
  for (const chemin of reg.inscrits) {
    const slug = chemin.slice('/articles/'.length);
    if (!slugs.has(slug)) blocages.push({ page: chemin, regle: 'registre-sans-fiche', detail: 'inscrit au registre, aucune fiche' });
  }

  // Plan éditorial : exactement les 41 créneaux, chacun cohérent avec sa fiche.
  let creneaux = [];
  if (plan && existsSync(plan)) {
    const contenu = JSON.parse(readFileSync(plan, 'utf8'));
    // Les 41 créneaux du programme rétrospectif, puis la suite du calendrier (S42…), un créneau à la fois.
    const suite = contenu.suite ?? [];
    suite.forEach((p, i) => {
      const c = creneau(42 + i);
      if (p.semaine !== c.id || p.debut !== c.debut || p.fin !== c.fin) blocages.push({ page: plan, regle: 'plan-suite-calendrier', detail: `${c.id} attendu ${c.debut} → ${c.fin}, trouvé ${p.semaine} ${p.debut} → ${p.fin}` });
    });
    creneaux = [...(contenu.creneaux ?? []), ...suite];
    const retro = contenu.creneaux ?? [];
    const attendus = programmeRetrospectif();
    if (retro.length !== attendus.length) blocages.push({ page: plan, regle: 'plan-nombre', detail: `${retro.length} créneaux, ${attendus.length} attendus` });
    attendus.forEach((c, i) => {
      const p = retro[i];
      if (!p || p.semaine !== c.id || p.debut !== c.debut || p.fin !== c.fin) {
        blocages.push({ page: plan, regle: 'plan-calendrier', detail: `${c.id} attendu ${c.debut} → ${c.fin}, trouvé ${p ? `${p.semaine} ${p.debut} → ${p.fin}` : 'rien'}` });
      }
    });
    const slugsPlan = new Map();
    for (const p of creneaux) {
      if (!STATUTS_PLAN.includes(p.statut)) blocages.push({ page: p.semaine, regle: 'plan-statut-inconnu', detail: String(p.statut) });
      if (!p.slug) {
        if (!SANS_FICHE.has(p.statut)) blocages.push({ page: p.semaine, regle: 'plan-sans-fiche', detail: `statut ${p.statut} sans slug` });
        continue;
      }
      if (slugsPlan.has(p.slug)) blocages.push({ page: p.semaine, regle: 'plan-slug-double', detail: `${p.slug} déjà prévu en ${slugsPlan.get(p.slug)}` });
      slugsPlan.set(p.slug, p.semaine);
      const fiche = lisibles.find((f) => f.slug === p.slug);
      if (!fiche) {
        if (!SANS_FICHE.has(p.statut)) blocages.push({ page: p.semaine, regle: 'plan-fiche-absente', detail: p.slug });
        continue;
      }
      if (fiche.data.semaineEditoriale !== p.semaine) blocages.push({ page: p.semaine, regle: 'plan-semaine-fiche', detail: `fiche ${p.slug} en ${fiche.data.semaineEditoriale}` });
      const inscrit = reg.inscrits.includes(cheminArticle(p.slug));
      if (inscrit !== STATUTS_EN_LIGNE.has(p.statut)) blocages.push({ page: p.semaine, regle: 'plan-statut-registre', detail: `plan ${p.statut}, ${inscrit ? 'inscrit' : 'non inscrit'} au registre` });
      if (!inscrit && p.statut !== fiche.data.editorialStatus) blocages.push({ page: p.semaine, regle: 'plan-statut-fiche', detail: `plan ${p.statut}, fiche ${fiche.data.editorialStatus}` });
      const publieLe = reg.datePublication(cheminArticle(p.slug)) ?? reg.dateRelecture(cheminArticle(p.slug));
      if ((p.datePublication ?? null) !== (publieLe ?? null)) blocages.push({ page: p.semaine, regle: 'plan-date-publication', detail: `plan ${p.datePublication ?? 'vide'}, registre ${publieLe ?? 'vide'}` });
    }
    for (const f of lisibles) {
      if (!slugsPlan.has(f.slug)) avertissements.push({ page: f.slug, regle: 'fiche-hors-plan', detail: `${f.data.semaineEditoriale} ne cite pas cette fiche` });
    }
  } else if (plan) {
    blocages.push({ page: plan, regle: 'plan-absent', detail: 'plan éditorial introuvable' });
  }

  const parStatut = {};
  for (const p of creneaux) parStatut[p.statut] = (parStatut[p.statut] ?? 0) + 1;
  return { aujourdhui, fiches: fichesRapport, creneaux: creneaux.length, parStatut, blocages, avertissements };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const option = (nom) => (args.includes(nom) ? args[args.indexOf(nom) + 1] : null);
  const r = controlerRubrique({ aujourdhui: option('--date') ?? undefined });
  const inscrits = r.fiches.filter((f) => f.inscrit).length;
  console.log(`Articles : ${r.fiches.length} fiche(s) · ${inscrits} publiée(s) · ${r.fiches.filter((f) => f.publiable && !f.inscrit).length} prête(s) à publier · contrôle au ${r.aujourdhui}`);
  console.log(`Plan : ${r.creneaux} créneau(x) · ${Object.entries(r.parStatut).map(([k, v]) => `${k} ${v}`).join(' · ')}`);
  console.log(`Blocages : ${r.blocages.length} · avertissements : ${r.avertissements.length}`);
  for (const [titre, liste] of [['BLOCAGES', r.blocages], ['AVERTISSEMENTS', r.avertissements]]) {
    if (!liste.length) continue;
    console.log(`\n${titre} :`);
    for (const x of liste.slice(0, 80)) console.log(`  ${x.regle.padEnd(32)} ${x.page}${x.detail ? ' — ' + x.detail : ''}`);
    if (liste.length > 80) console.log(`  … et ${liste.length - 80} autre(s)`);
  }
  if (option('--json')) writeFileSync(option('--json'), JSON.stringify(r, null, 2));
  process.exit(r.blocages.length ? 1 : 0);
}
