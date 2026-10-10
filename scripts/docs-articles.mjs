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

const lignes = plan.creneaux.map((c) => {
  const f = c.slug ? parSlug.get(c.slug) : null;
  const sortants = (c.liensInternes?.sortants ?? []).join(', ');
  return `| ${c.semaine} | ${c.debut} → ${c.fin} | **${c.statut}** | ${cellule(court(c.actualiteRetenue))} | ${c.dateActualite ?? '—'}${c.dateActualite ? ' (non attestée)' : ''} | ${cellule(c.titrePrevu)} | ${c.slug ? (f ? `[${c.slug}](../../src/content/articles/${c.slug}.md)` : `\`${c.slug}\` (pas de fiche)`) : '—'} | ${c.sensibilite ?? '—'} | ${c.risqueCannibalisation?.niveau ?? '—'}${c.risqueCannibalisation?.note ? ` — ${cellule(c.risqueCannibalisation.note)}` : ''} | ${cellule(sortants)} | ${c.datePublication ?? 'non publié'} |`;
});

const planMd = `# Plan éditorial 2026 — rubrique Articles

> Fichier généré par \`npm run docs:articles\` le ${jour} à partir de [plan-editorial-2026.json](plan-editorial-2026.json), des fiches de \`src/content/articles/\` et du registre \`src/data/publications.mjs\`. Ne pas l'éditer à la main : modifier les données, puis régénérer.

## Ce que ce plan est, et ce qu'il n'est pas

- **41 créneaux** de sept jours, du jeudi 1er janvier au jeudi 8 octobre 2026 ; le dernier est évalué au 10 octobre 2026. Les créneaux suivants (S42 et au-delà) s'ajoutent dans \`suite\`.
- Un créneau est une **semaine d'actualité couverte**, pas une date de publication. Un article écrit en octobre sur une actualité de janvier est publié en octobre, et se présente comme une rétrospective.
- « Date de l'actualité » est la date repérée par moteur de recherche : **non attestée** tant que la source n'a pas été ouverte.

## État au ${jour}

| Statut | Créneaux |
| --- | --- |
${Object.entries(compte).sort().map(([k, v]) => `| ${k} | ${v} |`).join('\n')}

- Fiches rédigées (brouillons) : ${fiches.length} — ${fiches.map((f) => `${f.data.semaineEditoriale} \`${f.slug}\``).join(', ') || 'aucune'}.
- Articles publiés : **${publies.length} / 41**.
- Toutes les pistes ont été repérées le 10 octobre 2026 par moteur de recherche, **sans qu'aucune page source ne puisse être ouverte** : l'accès réseau de l'environnement d'exécution refusait les sites sources (voir [RAPPORT_IMPLEMENTATION.md](RAPPORT_IMPLEMENTATION.md)). Les dossiers de recherche bruts sont dans [recherche/](recherche/).

## Recoupements à arbitrer avant publication

- **AI Act** : S19 (accord provisoire du 7 mai), S24 (vote du Parlement du 16 juin, écarté au profit d'une autre piste), S31 (transparence au 2 août). Un seul article de calendrier, plus éventuellement S31 sur les chatbots.
- **Déclaration des revenus** : S15 et S23 traitent la même campagne ; n'en publier qu'un.
- **Facturation électronique** : S03, S08, S17, S28, S30, S35, S37. Angles distincts (liste des plateformes, amendes, baromètre, bonne foi, contrat, démarrage, données personnelles), mais sept articles sur un même thème en neuf mois : vérifier la valeur propre de chacun et l'absence de cannibalisation avec le guide [facturation électronique pour une TPE](../../src/data/dossiers/facturation.ts).
- **CNIL** : S04, S11, S12, S14, S20, S25, S27, S29, S37 ; angles distincts, à surveiller.

## Les 41 créneaux

| Semaine | Période | Statut | Actualité retenue | Date de l'actualité | Titre prévu | Fiche | Sensibilité | Risque de cannibalisation | Liens internes sortants | Publication |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
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

| Source | Organisme | Type | Publiée le | Ouverte | Ce qu'elle établirait |
| --- | --- | --- | --- | --- | --- |
${sources.join('\n')}
${f.data.notesInternes ? `\nÀ vérifier : ${f.data.notesInternes}\n` : ''}`;
});
const ouvertes = fiches.flatMap((f) => f.data.sources).filter((s) => s.ouverte).length;
const sourcesMd = `# Sources vérifiées — rubrique Articles

> Fichier généré par \`npm run docs:articles\` le ${jour}. Il reprend les sources déclarées dans chaque fiche ; la colonne « Ouverte » dit si la page a réellement été lue.

## Bilan

- Sources déclarées dans les fiches : ${fiches.reduce((n, f) => n + f.data.sources.length, 0)}.
- **Sources ouvertes et vérifiées : ${ouvertes}.**
- Raison : le 10 octobre 2026, l'environnement d'exécution de l'agent ne pouvait ouvrir aucune page externe (résolution DNS et proxy refusés pour entreprendre.service-public.gouv.fr, cnil.fr, urssaf.fr, impots.gouv.fr, legifrance.gouv.fr, cybermalveillance.gouv.fr, economie.gouv.fr…). Seul le moteur de recherche répondait, avec des titres, des URL et des résumés. Ces résumés ont servi à **repérer** les pistes, jamais à **établir** un fait : aucune source n'est déclarée ouverte.
- Conséquence : aucun article n'est publiable. Le contrôle \`preuve-absente\` le garantit techniquement.

## Pour vérifier une fiche

1. Ouvrir chaque URL ; corriger l'URL si elle a changé.
2. Relever la date de publication réelle (pas la date de mise à jour) et la comparer à la période de la fiche.
3. Relire chaque affirmation de l'article contre la source ; supprimer ou corriger ce qui n'y figure pas.
4. Dans la fiche : \`ouverte: true\`, \`consulteeLe: "AAAA-MM-JJ"\`, extrait reformulé exact.
5. \`npm run articles:check\`, puis \`npm run docs:articles\`.

## Fiches

${blocs.join('\n')}
## Pistes des autres semaines

Les candidats repérés pour les 33 créneaux sans fiche, avec leurs URL, la date affichée par le moteur, le niveau de confiance et les contradictions relevées, sont dans les dossiers bruts : [S01-S10](recherche/S01-S10.json), [S11-S20](recherche/S11-S20.json), [S21-S31](recherche/S21-S31.json), [S32-S41](recherche/S32-S41.json). Aucun n'a été ouvert. Une attribution de presse non confirmée (nom d'une entreprise sanctionnée que la CNIL ne nomme pas) en a été retirée.
`;
writeFileSync('docs/articles/SOURCES_VERIFIEES.md', sourcesMd);
console.log(`docs/articles/PLAN_EDITORIAL_2026.md et SOURCES_VERIFIEES.md régénérés (${plan.creneaux.length} créneaux, ${fiches.length} fiches, ${ouvertes} source(s) ouverte(s)).`);
