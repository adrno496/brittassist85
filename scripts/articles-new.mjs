#!/usr/bin/env node
/**
 * « Fais un nouvel article » — préparation locale, sans accès au web.
 *
 * Ce script ne cherche pas d'actualité et n'écrit pas d'article : ce travail
 * revient à l'agent (ou à la personne) qui dispose d'un accès réel aux sources.
 * Il fait ce qu'un script peut faire sans rien inventer :
 *
 *   npm run article:nouveau                        état : créneau du jour, dernier article, créneaux sans fiche
 *   npm run article:nouveau -- --verifier "texte"  pages existantes les plus proches d'une intention (anti-cannibalisation)
 *   npm run article:nouveau -- --creer --slug <slug> [--semaine S42] [--categorie <id>] [--sensibilite reglementaire|standard]
 *        crée une fiche squelette au statut SOURCES_A_VERIFIER et l'inscrit au plan.
 *        Idempotent : une fiche existante n'est jamais réécrite ; une semaine déjà traitée est refusée.
 *
 * Options de test : --date AAAA-MM-JJ, --dossier <dir>, --plan <fichier>.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { bibliotheque } from '../src/data/bibliotheque.ts';
import { IDS_CATEGORIES, aujourdhuiParis, creneau, creneauDeDate, numeroDeCreneau, CRENEAUX_RETROSPECTIFS, programmeRetrospectif } from '../src/data/articles.mjs';
import { estPubliee } from '../src/data/publication.mjs';
import { normaliser } from '../src/data/regles-editoriales.mjs';
import { DOSSIER_ARTICLES, lireArticles } from './lib/articles-fichiers.mjs';
import { PLAN } from './articles-check.mjs';

const mots = (t) => new Set(normaliser(t).split(' ').filter((m) => m.length > 3));
function proximite(a, b) {
  const x = mots(a);
  const y = mots(b);
  let c = 0;
  for (const m of x) if (y.has(m)) c++;
  return c / (x.size + y.size - c || 1);
}

/** Pages existantes (guides publiés, articles) les plus proches d'une intention. */
export function plusProches(intention, { dossier = DOSSIER_ARTICLES, n = 5 } = {}) {
  const pages = [
    ...bibliotheque.filter((g) => estPubliee(`/guides/${g.slug}`)).map((g) => ({ chemin: `/guides/${g.slug}`, texte: [g.title, g.h1, g.cadrage?.motCle ?? ''].join(' ') })),
    ...lireArticles(dossier).filter((a) => !a.erreur).map((a) => ({ chemin: `/articles/${a.slug}`, texte: [a.data.title, a.data.h1, a.data.intention].join(' ') })),
  ];
  return pages.map((p) => ({ chemin: p.chemin, score: Number(proximite(intention, p.texte).toFixed(2)) })).sort((a, b) => b.score - a.score).slice(0, n);
}

/** État de la rubrique au jour donné. */
export function etat({ aujourdhui = aujourdhuiParis(), dossier = DOSSIER_ARTICLES, plan = PLAN } = {}) {
  const fiches = lireArticles(dossier).filter((f) => !f.erreur);
  const duJour = creneauDeDate(aujourdhui);
  const parSemaine = new Map(fiches.map((f) => [f.data.semaineEditoriale, f.slug]));
  const derniere = [...fiches].sort((a, b) => numeroDeCreneau(b.data.semaineEditoriale) - numeroDeCreneau(a.data.semaineEditoriale))[0];
  const contenu = existsSync(plan) ? JSON.parse(readFileSync(plan, 'utf8')) : { creneaux: [], suite: [] };
  const sansFiche = [...contenu.creneaux, ...(contenu.suite ?? [])].filter((p) => !parSemaine.has(p.semaine)).map((p) => `${p.semaine} (${p.statut})`);
  return {
    aujourdhui,
    creneauDuJour: duJour,
    creneauDuJourDejaTraite: parSemaine.get(duJour.id) ?? null,
    derniereFiche: derniere ? { slug: derniere.slug, semaine: derniere.data.semaineEditoriale, statut: derniere.data.editorialStatus } : null,
    fiches: fiches.length,
    creneauxSansFiche: sansFiche,
  };
}

function squelette({ slug, c, aujourdhui, categorie, sensibilite }) {
  return `---
title: "À COMPLÉTER (70 caractères au plus, se termine par « · BrittAssist ») · BrittAssist"
description: "À COMPLÉTER : entre 70 et 165 caractères. Ce qui change, pour qui, à partir de quand. Une phrase informative, sans promesse."
h1: "À COMPLÉTER : le titre visible de l’article"
summary: "À COMPLÉTER : le chapô, deux ou trois phrases qui disent l’actualité et son intérêt pour un dirigeant."
category: "${categorie}"
audience: ["À COMPLÉTER"]
intention: "À COMPLÉTER : requête principale, unique sur le site ${slug}"
keywords: []
semaineEditoriale: "${c.id}"
periodeDebut: "${c.debut}"
periodeFin: "${c.fin}"
dateEvenement: "${c.debut}"
natureEvenement: "À COMPLÉTER : publication, annonce, entrée en vigueur…"
sources:
  - titre: "À COMPLÉTER : titre exact de la page source"
    organisme: "À COMPLÉTER"
    url: "https://www.example.invalid/a-completer"
    type: "primaire"
    ouverte: false
    extrait: "À COMPLÉTER : ce que la source établit, reformulé."
createdAt: "${aujourdhui}"
editorialStatus: "SOURCES_A_VERIFIER"
sensibilite: "${sensibilite}"
relatedGuides: []
relatedArticles: []
notesInternes: "Fiche créée par scripts/articles-new.mjs le ${aujourdhui}. Rien n’est rédigé ni vérifié."
---

À COMPLÉTER : l’actualité, en un paragraphe, avec sa date.

## Ce qui a été annoncé

## Ce que cela change pour vous

## Checklist

## Exemple fictif : à compléter

## Ce que BrittAssist peut prendre en charge
`;
}

/**
 * Crée une fiche squelette. Ne réécrit jamais une fiche existante.
 * @returns {{ cree: boolean, fichier: string, raison: string }}
 */
export function creer({ slug, semaine, categorie = 'formalites', sensibilite = 'reglementaire', aujourdhui = aujourdhuiParis(), dossier = DOSSIER_ARTICLES, plan = PLAN }) {
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug ?? '')) throw new Error(`slug invalide : ${slug}`);
  if (!IDS_CATEGORIES.includes(categorie)) throw new Error(`catégorie inconnue : ${categorie} (${IDS_CATEGORIES.join(', ')})`);
  if (!['reglementaire', 'standard'].includes(sensibilite)) throw new Error(`sensibilité inconnue : ${sensibilite}`);
  if (bibliotheque.some((g) => g.slug === slug)) throw new Error(`slug déjà pris par le guide /guides/${slug} : choisir un slug distinct`);
  const fichier = join(dossier, `${slug}.md`);
  if (existsSync(fichier)) return { cree: false, fichier, raison: 'la fiche existe déjà : rien n’est modifié' };

  const numero = semaine ? numeroDeCreneau(semaine) : creneauDeDate(aujourdhui).numero;
  if (!numero) throw new Error(`semaine invalide : ${semaine}`);
  const c = numero <= CRENEAUX_RETROSPECTIFS ? programmeRetrospectif()[numero - 1] : creneau(numero);
  if (c.debut > aujourdhui) throw new Error(`${c.id} commence le ${c.debut} : pas d’article sur une semaine future`);
  const deja = lireArticles(dossier).find((f) => !f.erreur && f.data.semaineEditoriale === c.id);
  if (deja) throw new Error(`${c.id} est déjà traitée par ${deja.slug} : un article par semaine`);

  writeFileSync(fichier, squelette({ slug, c, aujourdhui, categorie, sensibilite }));

  // Inscription au plan : le créneau rétrospectif est mis à jour, un créneau ultérieur est ajouté à la suite.
  if (plan && existsSync(plan)) {
    const contenu = JSON.parse(readFileSync(plan, 'utf8'));
    contenu.suite ??= [];
    let ligne = contenu.creneaux.find((p) => p.semaine === c.id) ?? contenu.suite.find((p) => p.semaine === c.id);
    if (!ligne) {
      // Les créneaux intermédiaires restent visibles, à rechercher.
      for (let n = 42 + contenu.suite.length; n < numero; n++) {
        const x = creneau(n);
        contenu.suite.push({ semaine: x.id, debut: x.debut, fin: x.fin, statut: 'A_RECHERCHER', slug: null, datePublication: null, note: 'Créneau passé sans article.' });
      }
      ligne = { semaine: c.id, debut: c.debut, fin: c.fin };
      contenu.suite.push(ligne);
    }
    Object.assign(ligne, { statut: 'SOURCES_A_VERIFIER', slug, ficheRedigee: true, datePublication: ligne.datePublication ?? null });
    writeFileSync(plan, JSON.stringify(contenu, null, 2) + '\n');
  }
  return { cree: true, fichier, raison: `${c.id} (${c.debut} → ${c.fin})` };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const option = (nom) => (args.includes(nom) ? args[args.indexOf(nom) + 1] : undefined);
  const commun = { aujourdhui: option('--date') ?? aujourdhuiParis(), dossier: option('--dossier') ?? DOSSIER_ARTICLES, plan: option('--plan') ?? PLAN };
  try {
    if (args.includes('--verifier')) {
      console.log(`Pages les plus proches de « ${option('--verifier')} » :`);
      for (const p of plusProches(option('--verifier'), commun)) console.log(`  ${p.score.toFixed(2)}  ${p.chemin}`);
      console.log('Au-delà de 0,5 : intention probablement déjà couverte, changer d’angle ou renoncer.');
    } else if (args.includes('--creer')) {
      const r = creer({ ...commun, slug: option('--slug'), semaine: option('--semaine'), categorie: option('--categorie'), sensibilite: option('--sensibilite') });
      console.log(r.cree ? `Fiche créée : ${r.fichier} — ${r.raison}` : `Aucune création : ${r.raison} (${r.fichier})`);
    } else {
      const e = etat(commun);
      console.log(`Date du jour : ${e.aujourdhui} · créneau du jour : ${e.creneauDuJour.id} (${e.creneauDuJour.debut} → ${e.creneauDuJour.fin})`);
      console.log(e.creneauDuJourDejaTraite ? `Ce créneau est déjà traité par « ${e.creneauDuJourDejaTraite} » : ne pas créer de second article sans raison.` : 'Ce créneau n’a pas encore d’article.');
      console.log(`Dernière fiche : ${e.derniereFiche ? `${e.derniereFiche.slug} (${e.derniereFiche.semaine}, ${e.derniereFiche.statut})` : 'aucune'} · ${e.fiches} fiche(s)`);
      console.log(`Créneaux du plan sans fiche : ${e.creneauxSansFiche.length}${e.creneauxSansFiche.length ? ` — ${e.creneauxSansFiche.slice(0, 12).join(', ')}${e.creneauxSansFiche.length > 12 ? '…' : ''}` : ''}`);
      console.log('Recherche d’actualité et rédaction : à faire par l’agent, sources ouvertes (docs/articles/PROCEDURE_NOUVEL_ARTICLE.md).');
    }
  } catch (e) {
    console.error(`Erreur : ${e.message}`);
    process.exit(1);
  }
}
