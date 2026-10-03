#!/usr/bin/env node
/**
 * Génère les trois documents de pilotage qui doivent rester alignés sur le code :
 *   docs/seo/02_100_PAGE_CONTENT_MAP.md   la matrice des 100 pages
 *   docs/seo/03_INTERNAL_LINK_GRAPH.md    le graphe de liens internes
 *   docs/seo/09_FINAL_100_PAGE_QA.md      le contrôle page par page
 *
 * Les tableaux sont calculés à partir des fiches (src/data) et du build audité
 * (dist/). Ils ne sont donc jamais recopiés à la main : relancer le script après
 * toute modification de contenu.
 *
 * Le build doit être celui de l'aperçu, qui contient toutes les pages :
 *   npm run build:apercu && node scripts/docs-seo.mjs
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { bibliotheque, dossiers } from '../src/data/bibliotheque.ts';
import { metiers } from '../src/data/metiers.ts';
import { estPubliee } from '../src/data/publication.mjs';
import { auditer, SEUILS } from './seo-audit.mjs';

const rapport = auditer('dist');
const parChemin = new Map(rapport.pages.map((p) => [p.chemin, p]));
if (rapport.totaux.brouillons === 0 && bibliotheque.some((g) => !estPubliee(`/guides/${g.slug}`))) {
  console.error('Le build ne contient pas les brouillons. Lancez d’abord : npm run build:apercu');
  process.exit(2);
}
const reference = existsSync('docs/site-audit/data/seo-baseline.json') ? JSON.parse(readFileSync('docs/site-audit/data/seo-baseline.json', 'utf8')) : null;
const avant = new Map((reference?.pages ?? []).map((p) => [p.chemin, p]));

// ── Les 100 pages : 92 guides, 6 métiers, 2 hubs ──────────────────────────
const NOMS_DOSSIERS = new Map(dossiers.map((d) => [d.slug, d]));
const HUBS = [
  {
    chemin: '/assistante', cluster: 'Par métier', type: 'hub', nom: 'Hub « par métier »',
    cadrage: { intention: 'navigation', motCle: 'assistante externalisée par métier', variantes: ['assistante administrative par secteur', 'assistante de direction pour quel métier'], persona: 'Dirigeant qui cherche si son métier est concerné', objectif: 'Orienter vers la page du métier, ou rassurer si le métier n’y figure pas', difference: 'Dit ce qui change d’un métier à l’autre et ce qui ne change pas ; corrige une erreur 404' },
    cta: 'Échanger avec Brittany → /contact',
  },
  {
    chemin: '/assistante-independante', cluster: 'Par zone', type: 'hub', nom: 'Hub « zones d’intervention »',
    cadrage: { intention: 'navigation', motCle: 'où intervient BrittAssist', variantes: ['assistante indépendante Vendée Nantes à distance', 'zones d’intervention assistante indépendante'], persona: 'Dirigeant qui se demande si la distance est un obstacle', objectif: 'Dire clairement qu’il n’existe qu’une implantation et que le travail se fait à distance', difference: 'Annonce le refus des pages par commune ; corrige une erreur 404' },
    cta: 'Échanger avec Brittany → /contact',
  },
];
const CADRAGE_METIERS = {
  'organismes-de-formation': { motCle: 'assistante administrative organisme de formation', variantes: ['gestion administrative formation Qualiopi', 'assistante formateur indépendant'], persona: 'Dirigeant d’organisme de formation, formateur indépendant', difference: 'Vocabulaire du métier : conventions, émargements, certificats de réalisation, bilan pédagogique et financier' },
  'architectes-maitres-d-oeuvre': { motCle: 'assistante pour architecte', variantes: ['assistante administrative agence d’architecture', 'secrétariat maître d’œuvre'], persona: 'Architecte ou maître d’œuvre, petite agence', difference: 'Comptes rendus de chantier, dossiers de consultation, situations : et ce qui engage la responsabilité reste à l’architecte' },
  'hotellerie-restauration': { motCle: 'assistante administrative restaurant hôtel', variantes: ['gestion administrative restaurant', 'externaliser l’administratif d’un hôtel'], persona: 'Hôtelier, restaurateur indépendant', difference: 'Devis de groupes, fournisseurs, saisonniers ; exclut l’exploitation et l’hygiène' },
  'fondateurs-de-startup': { motCle: 'assistante pour fondateur de start-up', variantes: ['executive assistant start-up', 'assistante CEO externalisée'], persona: 'Fondateur ou dirigeant de jeune entreprise', difference: 'Agenda investisseurs, comités, recrutements ; exclut négociation, juridique et finance' },
  'agences-et-studios': { motCle: 'assistante administrative agence de communication', variantes: ['gestion administrative studio créatif', 'facturation agence externalisée'], persona: 'Dirigeant d’agence ou de studio', difference: 'Facturation à l’avancement, indépendants, bons de commande ; exclut création et éditorial' },
  'organisateurs-d-evenements': { motCle: 'assistante pour organisateur d’événements', variantes: ['assistante administrative traiteur', 'gestion administrative événementiel'], persona: 'Organisateur d’événements, traiteur, wedding planner', difference: 'Devis, acomptes, rétroplannings, feuilles de route ; exclut la présence sur place' },
};

const pages = [
  ...HUBS,
  ...bibliotheque.filter((g) => g.type).map((g) => ({
    chemin: `/guides/${g.slug}`, cluster: NOMS_DOSSIERS.get(g.dossier).nom, type: g.type, nom: g.nom, cadrage: g.cadrage,
    cta: `${NOMS_DOSSIERS.get(g.dossier).action.label} → ${NOMS_DOSSIERS.get(g.dossier).action.href}`,
  })),
  ...metiers.filter((m) => CADRAGE_METIERS[m.slug]).map((m) => ({
    chemin: `/assistante/${m.slug}`, cluster: 'Par métier', type: 'metier', nom: m.nom,
    cadrage: { intention: 'commerciale', objectif: 'Montrer ce qui est pris en charge et ce qui reste chez le dirigeant, dans les termes du métier', ...CADRAGE_METIERS[m.slug] },
    cta: 'Échanger sur mon organisation → /contact',
  })),
];
if (pages.length !== 100) console.warn(`Attention : ${pages.length} pages recensées, 100 attendues.`);

const GLOBAUX = new Set(['WebSite', 'ProfessionalService', 'LocalBusiness', 'Person', 'WebPage']);
const schemas = (p) => p.schemas.filter((s) => !GLOBAUX.has(s)).join(', ') || '—';
const statut = (chemin) => (estPubliee(chemin) ? 'oui' : 'après relecture');
const cellule = (t) => String(t).replace(/\|/g, '/').replace(/\n/g, ' ');
const liste = (l, n) => (l.length <= n ? l.join(', ') : `${l.slice(0, n).join(', ')} … (+${l.length - n})`);
const NATURES = { pilier: 'Pilier', hub: 'Hub', guide: 'Guide', methode: 'Méthode', comparatif: 'Comparatif', reference: 'Repère sourcé', situation: 'Situation', modele: 'Modèle', metier: 'Page métier' };
const date = new Date().toISOString().slice(0, 10);
const entete = (titre) => `# ${titre}\n\n> Document généré par \`scripts/docs-seo.mjs\` le ${date}, à partir des fiches de \`src/data\` et du build d’aperçu audité. Ne pas le modifier à la main : relancer le script.\n`;

mkdirSync('docs/seo', { recursive: true });

// ── 02 — Matrice des 100 pages ────────────────────────────────────────────
{
  const parNature = {};
  for (const p of pages) parNature[NATURES[p.type]] = (parNature[NATURES[p.type]] ?? 0) + 1;
  const parCluster = {};
  for (const p of pages) parCluster[p.cluster] = (parCluster[p.cluster] ?? 0) + 1;
  const requetes = new Set(pages.map((p) => p.cadrage.motCle.toLowerCase()));

  const lignes = [
    entete('02 — Matrice des 100 pages'),
    `**${pages.length} pages**, **${requetes.size} requêtes principales distinctes** : aucune page ne vise la même intention principale qu’une autre. Le contrôle est automatique (\`scripts/content-gate.mjs\`, règle \`intention-dupliquee\`).`,
    '',
    '## Répartition',
    '',
    '| Par nature | Pages | | Par dossier | Pages |',
    '| --- | --- | --- | --- | --- |',
    ...(() => {
      const a = Object.entries(parNature), b = Object.entries(parCluster);
      return Array.from({ length: Math.max(a.length, b.length) }, (_, i) => `| ${a[i]?.[0] ?? ''} | ${a[i]?.[1] ?? ''} | | ${b[i]?.[0] ?? ''} | ${b[i]?.[1] ?? ''} |`);
    })(),
    '',
    'Colonne **Indexable** : « oui » = la page est publiée ; « après relecture » = la page est construite et contrôlée, mais ne sera générée en production et proposée à l’indexation qu’une fois inscrite au registre `src/data/relectures.mjs`.',
    '',
    'Colonne **Liens entrants** : nombre de pages qui citent la page dans leur contenu (hors navigation et pied de page), et les premières d’entre elles.',
    '',
    '## Les 100 pages',
    '',
    '| # | URL | Cluster | Intention | Sujet | Mot-clé principal | Variantes | Persona | Objectif | Différenciation | CTA | Liens entrants | Liens sortants | Schema | Indexable |',
    '| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |',
    ...pages.map((p, i) => {
      const a = parChemin.get(p.chemin);
      return `| ${[
        i + 1, p.chemin, p.cluster, `${p.cadrage.intention} (${NATURES[p.type].toLowerCase()})`, p.nom, p.cadrage.motCle, p.cadrage.variantes.join(' ; '),
        p.cadrage.persona, p.cadrage.objectif, p.cadrage.difference, p.cta,
        a ? `${a.citeePar.length} — ${liste(a.citeePar, 3)}` : 'page absente du build',
        a ? `${a.cite.length} — ${liste(a.cite, 4)}` : '—',
        a ? schemas(a) : '—', statut(p.chemin),
      ].map(cellule).join(' | ')} |`;
    }),
    '',
  ];
  writeFileSync('docs/seo/02_100_PAGE_CONTENT_MAP.md', lignes.join('\n'));
}

// ── 03 — Graphe de liens internes ─────────────────────────────────────────
{
  const controlees = rapport.pages.filter((p) => p.indexable || p.brouillon);
  const mediane = (v) => [...v].sort((a, b) => a - b)[Math.floor(v.length / 2)];
  const stats = (v) => `min ${Math.min(...v)} · médiane ${mediane(v)} · max ${Math.max(...v)}`;
  const nouvelles = pages.map((p) => parChemin.get(p.chemin)).filter(Boolean);
  const familles = [
    ['Prestations `/services/<slug>`', (c) => /^\/services\/[^/]+$/.test(c)],
    ['Métiers `/assistante/<slug>` (existants)', (c) => /^\/assistante\/[^/]+$/.test(c) && estPubliee(c)],
    ['Zones `/assistante-independante/<slug>`', (c) => /^\/assistante-independante\/[^/]+$/.test(c)],
    ['Guides existants', (c) => /^\/guides\/[^/]+$/.test(c) && estPubliee(c)],
  ];
  const orphelines = rapport.blocages.filter((b) => b.regle === 'page-orpheline' || b.regle === 'inatteignable');
  const profondeurs = {};
  for (const p of controlees) profondeurs[p.profondeur] = (profondeurs[p.profondeur] ?? 0) + 1;

  const lignes = [
    entete('03 — Graphe de liens internes'),
    '## Principe',
    '',
    'Trois niveaux, et aucun contenu atteignable seulement par le sitemap :',
    '',
    '```',
    'Accueil',
    '├── /guides ─────────────── hub de la bibliothèque (navigation principale)',
    '│   ├── 8 piliers ───────── un par dossier, cités aussi dans le pied de page',
    '│   │   └── pages du dossier (liste « Dans ce dossier » du pilier)',
    '│   └── chaque page ─────── pilier + 5 pages voisines + 3 à 6 liens choisis + une offre',
    '├── /assistante ─────────── hub « par métier » (pied de page, /guides, /services)',
    '│   └── 14 pages métier',
    '├── /assistante-independante  hub « par zone »',
    '│   └── 5 pages de zone',
    '└── /services ───────────── 13 prestations, désormais citées par les guides',
    '```',
    '',
    'Chaque guide porte quatre groupes de liens : le fil d’Ariane (Guides → dossier → page), les liens choisis à la main (`liens` de la fiche), les cinq pages suivantes du même dossier (en boucle, pour que chaque page propose une suite différente), et l’appel à l’action du dossier, qui mène à l’offre correspondante.',
    '',
    '## État mesuré',
    '',
    `Mesures prises sur le build d’aperçu (${rapport.totaux.pages} pages, dont ${rapport.totaux.brouillons} en attente de relecture).`,
    '',
    '| Indicateur | Valeur |',
    '| --- | --- |',
    `| Pages orphelines ou inatteignables | ${orphelines.length} |`,
    `| Liens internes cassés | ${rapport.blocages.filter((b) => b.regle === 'lien-casse' || b.regle === 'ancre-cassee').length} |`,
    `| Profondeur de clic depuis l’accueil | ${Object.entries(profondeurs).map(([k, v]) => `${v} pages à ${k} clic(s)`).join(' · ')} |`,
    `| Profondeur maximale | ${rapport.totaux.profondeurMax} (seuil d’alerte : ${SEUILS.profondeurMax}) |`,
    `| Liens entrants contextuels vers les 100 nouvelles pages | ${stats(nouvelles.map((p) => p.entrantsContextuels))} |`,
    `| Liens sortants contextuels des 100 nouvelles pages | ${stats(nouvelles.map((p) => p.cite.length))} |`,
    `| Ancres génériques (« cliquez ici », « en savoir plus ») | ${rapport.avertissements.filter((a) => a.regle === 'ancre-generique').length} |`,
    '',
    '## Avant / après par famille de pages existantes',
    '',
    'Liens entrants **contextuels** (pages qui citent la cible dans leur contenu). « Avant » : build de référence du 3 octobre 2026. « Après » : build d’aperçu, toutes pages publiées.',
    '',
    '| Famille | Avant | Après |',
    '| --- | --- | --- |',
    ...familles.map(([nom, filtre]) => {
      const apres = controlees.filter((p) => filtre(p.chemin)).map((p) => p.entrantsContextuels);
      const av = [...avant.values()].filter((p) => filtre(p.chemin)).map((p) => p.entrantsContextuels);
      return `| ${nom} | ${av.length ? stats(av) : 'non mesuré'} | ${apres.length ? stats(apres) : '—'} |`;
    }),
    '',
    '### Détail des 13 pages de prestation',
    '',
    'C’était le point faible relevé à l’inventaire : des pages commerciales peu citées.',
    '',
    '| Page | Entrants avant | Entrants après | Clics avant | Clics après |',
    '| --- | --- | --- | --- | --- |',
    ...controlees.filter((p) => /^\/services\/[^/]+$/.test(p.chemin)).map((p) => `| ${p.chemin} | ${avant.get(p.chemin)?.entrantsContextuels ?? '—'} | ${p.entrantsContextuels} | ${avant.get(p.chemin)?.profondeur ?? '—'} | ${p.profondeur} |`),
    '',
    '## Pages orphelines',
    '',
    orphelines.length
      ? orphelines.map((o) => `- ${o.chemin} — ${o.regle}`).join('\n')
      : 'Aucune. Le contrôle `page-orpheline` fait échouer le build : une page sans lien entrant ne peut pas être mise en ligne.',
    '',
    'Deux adresses étaient en erreur 404 avant ce chantier, alors que 13 pages vivaient sous elles : `/assistante` et `/assistante-independante`. Elles sont désormais des hubs, cités depuis le pied de page, `/guides`, les pages métier et les pages de zone.',
    '',
    '## Les 100 nouvelles pages',
    '',
    '| URL | Clics | Citée par (contenu) | Cite (contenu) | Premières pages qui la citent |',
    '| --- | --- | --- | --- | --- |',
    ...pages.map((p) => {
      const a = parChemin.get(p.chemin);
      return a ? `| ${p.chemin} | ${a.profondeur} | ${a.citeePar.length} | ${a.cite.length} | ${liste(a.citeePar, 3)} |` : `| ${p.chemin} | — | — | — | absente du build |`;
    }),
    '',
  ];
  writeFileSync('docs/seo/03_INTERNAL_LINK_GRAPH.md', lignes.join('\n'));
}

// ── 09 — Contrôle final des 100 pages ─────────────────────────────────────
{
  const fautes = new Map();
  for (const b of rapport.blocages) fautes.set(b.chemin, [...(fautes.get(b.chemin) ?? []), b.regle]);
  const alertes = new Map();
  for (const a of rapport.avertissements) alertes.set(a.chemin, [...(alertes.get(a.chemin) ?? []), a.regle]);
  const lignesPages = pages.map((p) => ({ p, a: parChemin.get(p.chemin) }));
  const construites = lignesPages.filter((x) => x.a);
  const conformes = construites.filter((x) => !(fautes.get(x.p.chemin) ?? []).length);
  const mots = construites.map((x) => x.a.mots).sort((a, b) => a - b);

  const lignes = [
    entete('09 — Contrôle final des 100 pages'),
    '## Résultat',
    '',
    '| Contrôle | Résultat |',
    '| --- | --- |',
    `| Pages prévues | ${pages.length} |`,
    `| Pages construites dans le build d’aperçu | ${construites.length} |`,
    `| Pages sans aucun blocage | ${conformes.length} |`,
    `| Pages rejetées par le quality gate | ${construites.length - conformes.length} |`,
    `| Pages publiées et indexables aujourd’hui | ${pages.filter((p) => estPubliee(p.chemin)).length} |`,
    `| Pages en attente de relecture humaine | ${pages.filter((p) => !estPubliee(p.chemin)).length} |`,
    `| Longueur du contenu principal | min ${mots[0]} · médiane ${mots[Math.floor(mots.length / 2)]} · max ${mots.at(-1)} mots |`,
    `| Paires de pages à plus de ${Math.round(SEUILS.similariteAvertissement * 100)} % de contenu commun | ${rapport.similarites.length} |`,
    '',
    'Ce tableau est un contrôle **automatique** du HTML construit. Il vérifie la forme et la cohérence : il ne vaut pas relecture du fond. Le contrôle en navigateur réel (console, CSP, débordement, accessibilité) figure dans `docs/site-audit/04_FINAL_VALIDATION.md`.',
    '',
    '## Ce que chaque colonne vérifie',
    '',
    '- **Title / Desc.** : présents, uniques sur le site, longueur en caractères.',
    '- **H1** : exactement un, unique sur le site.',
    '- **Canonical** : absolu, sur `https://www.brittassist.fr`, égal à l’adresse de la page.',
    '- **Mots** : texte du contenu principal, hors navigation et pied de page.',
    '- **Entrants** : pages qui citent celle-ci dans leur contenu.',
    '- **Blocages** : règles bloquantes du quality gate — lien cassé, doublon, JSON-LD invalide, question de FAQ absente du texte visible, page orpheline, contenu trop proche.',
    '',
    '## Page par page',
    '',
    '| # | URL | Statut | Title (car.) | Desc. (car.) | H1 | Canonical | Mots | H2 | Liens internes | Entrants | Clics | Schema | Blocages | Avertissements |',
    '| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |',
    ...lignesPages.map(({ p, a }, i) => (a
      ? `| ${i + 1} | ${p.chemin} | ${a.indexable ? 'publiée' : 'brouillon'} | ${a.longueurTitre} | ${a.longueurDescription} | ${a.nombreH1} | ${a.canonical === `https://www.brittassist.fr${p.chemin}` ? 'conforme' : 'ÉCART'} | ${a.mots} | ${a.h2} | ${a.liensInternes} | ${a.entrantsContextuels} | ${a.profondeur} | ${schemas(a)} | ${(fautes.get(p.chemin) ?? []).join(', ') || 'aucun'} | ${(alertes.get(p.chemin) ?? []).join(', ') || 'aucun'} |`
      : `| ${i + 1} | ${p.chemin} | ABSENTE | — | — | — | — | — | — | — | — | — | — | page non construite | — |`)),
    '',
  ];
  writeFileSync('docs/seo/09_FINAL_100_PAGE_QA.md', lignes.join('\n'));
}

console.log(`Documents générés : docs/seo/02, 03 et 09 — ${pages.length} pages, ${rapport.totaux.blocages} blocage(s) dans le build.`);
