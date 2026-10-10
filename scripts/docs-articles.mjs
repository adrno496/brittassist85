#!/usr/bin/env node
/**
 * Régénère docs/articles/PLAN_EDITORIAL_2026.md et docs/articles/SOURCES_VERIFIEES.md
 * à partir du plan (docs/articles/plan-editorial-2026.json), des fiches et du registre.
 * Les deux documents ne disent rien que les données ne disent pas.
 *
 * Usage : npm run docs:articles
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { aujourdhuiParis, cheminArticle } from '../src/data/articles.mjs';
import { dateDeRelecture, datePublicationSansRelecture } from '../src/data/publication.mjs';
import { lireArticles } from './lib/articles-fichiers.mjs';
import { PLAN } from './articles-check.mjs';

const plan = JSON.parse(readFileSync(PLAN, 'utf8'));
const fiches = lireArticles().filter((f) => !f.erreur);
const parSlug = new Map(fiches.map((f) => [f.slug, f]));
const cellule = (t) => String(t ?? '—').replace(/\|/g, '\\|').replace(/\n/g, ' ');
const court = (t, n = 110) => (t && t.length > n ? `${t.slice(0, n - 1)}…` : t);
const jour = aujourdhuiParis();

const tous = [...plan.creneaux, ...(plan.suite ?? [])];
const compte = {};
for (const c of tous) compte[c.statut] = (compte[c.statut] ?? 0) + 1;
const publies = tous.filter((c) => c.slug && (datePublicationSansRelecture(cheminArticle(c.slug)) ?? dateDeRelecture(cheminArticle(c.slug))));
const sourcesDeclarees = fiches.flatMap((f) => f.data.sources);
const ouvertes = sourcesDeclarees.filter((s) => s.ouverte);
const urlsOuvertes = new Set(ouvertes.map((s) => s.url));
const sansFiche = tous.filter((c) => !c.slug || !parSlug.has(c.slug));

const lignes = plan.creneaux.map((c) => {
  const f = c.slug ? parSlug.get(c.slug) : null;
  const sortants = (c.liensInternes?.sortants ?? []).join(', ');
  return `| ${c.semaine} | ${c.debut} → ${c.fin} | **${c.statut}** | ${cellule(court(c.actualiteRetenue))} | ${c.dateActualite ?? '—'}${c.dateActualite && !c.dateAttestee ? ' (non attestée)' : ''} | ${cellule(c.titrePrevu)} | ${c.slug ? (f ? `[${c.slug}](../../src/content/articles/${c.slug}.md)` : `\`${c.slug}\` (pas de fiche)`) : '—'} | ${c.sensibilite ?? '—'} | ${c.risqueCannibalisation?.niveau ?? '—'}${c.risqueCannibalisation?.note ? ` — ${cellule(c.risqueCannibalisation.note)}` : ''} | ${cellule(sortants)} | ${c.datePublication ?? 'non publié'} | ${c.deploiement ?? '—'} |`;
});

const planMd = `# Plan éditorial 2026 — rubrique Articles

> Fichier généré par \`npm run docs:articles\` le ${jour} à partir de [plan-editorial-2026.json](plan-editorial-2026.json), des fiches de \`src/content/articles/\` et du registre \`src/data/publications.mjs\`. Ne pas l'éditer à la main : modifier les données, puis régénérer.

## Ce que ce plan est, et ce qu'il n'est pas

- **41 créneaux** de sept jours, du jeudi 1er janvier au jeudi 8 octobre 2026 ; le dernier est évalué au 10 octobre 2026. Les créneaux suivants (S42 et au-delà) s'ajoutent dans \`suite\`.
- Un créneau est une **semaine d'actualité couverte**, pas une date de publication. Un article écrit en octobre sur une actualité de janvier est publié en octobre, et se présente comme une rétrospective.
- « Date de l'actualité » est **non attestée** tant que la source n'a pas été ouverte et sa date vérifiée ; le plan consigne cette vérification avec \`dateAttestee\`.

## État au ${jour}

| Statut | Créneaux |
| --- | --- |
${Object.entries(compte).sort().map(([k, v]) => `| ${k} | ${v} |`).join('\n')}

- Fiches rédigées : ${fiches.length}, dont ${fiches.filter((f) => f.data.editorialStatus !== 'PUBLIE').length} en attente de publication.
- Articles publiés : **${publies.length} / 41**.
- Sources déclarées ouvertes dans les fiches : **${ouvertes.length} références / ${urlsOuvertes.size} URL distinctes**. Les preuves de consultation du lot sont dans [SOURCES_VERIFIEES_2026-10-10.json](SOURCES_VERIFIEES_2026-10-10.json).
- Les pistes initiales de Claude Cloud sont conservées dans [recherche/](recherche/). Son [rapport d'implémentation](RAPPORT_IMPLEMENTATION.md) décrit l'accès réseau de cette ancienne session ; il ne remplace pas l'état actuel des fiches.

## Originalité et recoupements

Les intentions, voisins et angles retenus sont consignés dans le tableau. Le [contrôle de proximité du lot](CONTROLE_SIMILARITE_40_ARTICLES.json) et le [rapport d'intégration](RAPPORT_INTEGRATION_VSCODE_PRODUCTION.md) documentent les vérifications exécutées. Toute nouvelle fiche doit faire contrôler son intention avant publication.

## Les 41 créneaux

| Semaine | Période | Statut | Actualité retenue | Date de l'actualité | Titre prévu | Fiche | Sensibilité | Risque de cannibalisation | Liens internes sortants | Publication | Déploiement |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
${lignes.join('\n')}

Lien entrant prévu pour chaque article : la liste \`/articles\` ; liens entrants supplémentaires depuis des guides seulement si un article publié apporte réellement un complément (pas de liens semés en masse).

## Légende des statuts

| Statut | Sens |
| --- | --- |
| A_RECHERCHER | Rien n'a encore été cherché |
| SOURCES_INSUFFISANTES | Recherche faite, aucune actualité sérieuse et datée : pas d'article forcé |
| SOURCES_A_VERIFIER | Pistes repérées, sources non ouvertes ; une fiche peut exister en brouillon |
| BROUILLON | Sources ouvertes, rédaction en cours |
| A_RELIRE | Rédigé et contrôlé ; sujet réglementaire en attente de validation humaine |
| QA_PASS | Contrôles réussis ; sujet standard publiable |
| APPROUVE | Validation du propriétaire inscrite dans \`relectures.mjs\` |
| PUBLIE | Inscrit au registre de publication du dépôt |
| DEPLOIEMENT_NON_CONFIRME | Publié dans le dépôt, mise en ligne non vérifiée |
| EN_LIGNE_VERIFIE | Page servie en production, vérifiée |
`;
writeFileSync('docs/articles/PLAN_EDITORIAL_2026.md', planMd);

const blocs = fiches.map((f) => {
  const sources = f.data.sources.map((s) => `| [${cellule(s.titre)}](${s.url}) | ${cellule(s.organisme)} | ${s.type} | ${s.datePublication ?? 'non relevée'} | ${s.ouverte ? `oui, le ${s.consulteeLe}` : '**non**'} | ${cellule(s.extrait)} |`);
  return `### ${f.data.semaineEditoriale} — ${f.data.h1}

Fiche : [\`${f.slug}.md\`](../../src/content/articles/${f.slug}.md) · statut \`${f.data.editorialStatus}\` · actualité du ${f.data.dateEvenement} (${f.data.natureEvenement})${f.data.dateEffet ? ` · effet le ${f.data.dateEffet}` : ''}

| Source | Organisme | Type | Publiée le | Ouverte | Ce qu'elle établit |
| --- | --- | --- | --- | --- | --- |
${sources.join('\n')}
${f.data.notesInternes ? `\nNotes internes : ${f.data.notesInternes}\n` : ''}`;
});
const sourcesMd = `# Sources vérifiées — rubrique Articles

> Fichier généré par \`npm run docs:articles\` le ${jour}. Il reprend les sources déclarées dans chaque fiche ; la colonne « Ouverte » dit si la page a réellement été lue.

## Bilan

- Sources déclarées dans les fiches : ${sourcesDeclarees.length}.
- **Sources déclarées ouvertes et vérifiées : ${ouvertes.length} références / ${urlsOuvertes.size} URL distinctes.**
- Sources restant à ouvrir : ${sourcesDeclarees.length - ouvertes.length}. Le contrôle \`preuve-absente\` refuse une fiche sans source primaire réellement ouverte.
- Les dates et extraits ci-dessous reprennent les fiches. Le [dossier des sources du lot](SOURCES_VERIFIEES_2026-10-10.json) conserve la trace des consultations ; le [rapport d'intégration](RAPPORT_INTEGRATION_VSCODE_PRODUCTION.md) décrit les contrôles exécutés et leurs limites.

## Pour vérifier une fiche

1. Ouvrir chaque URL ; corriger l'URL si elle a changé.
2. Relever la date de publication réelle (pas la date de mise à jour) et la comparer à la période de la fiche.
3. Relire chaque affirmation de l'article contre la source ; supprimer ou corriger ce qui n'y figure pas.
4. Dans la fiche : \`ouverte: true\`, \`consulteeLe: "AAAA-MM-JJ"\`, extrait reformulé exact.
5. \`npm run articles:check\`, puis \`npm run docs:articles\`.

## Fiches

${blocs.join('\n')}
## Pistes des autres semaines

Créneaux actuellement sans fiche : ${sansFiche.map((c) => c.semaine).join(', ') || 'aucun'} (${sansFiche.length}). Les pistes initiales sont conservées dans [S01-S10](recherche/S01-S10.json), [S11-S20](recherche/S11-S20.json), [S21-S31](recherche/S21-S31.json), [S32-S41](recherche/S32-S41.json). Ces archives historiques ne sont pas des preuves d'ouverture ; seules les consultations consignées dans les fiches et le dossier de sources font foi.
`;
writeFileSync('docs/articles/SOURCES_VERIFIEES.md', sourcesMd);
console.log(`docs/articles/PLAN_EDITORIAL_2026.md et SOURCES_VERIFIEES.md régénérés (${plan.creneaux.length} créneaux, ${fiches.length} fiches, ${ouvertes.length} référence(s) ouverte(s)).`);
