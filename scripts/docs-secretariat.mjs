#!/usr/bin/env node
/**
 * Génère les documents de pilotage de la série « secrétariat externalisé » :
 *   docs/seo-secretariat-50/01_EXISTING_CONTENT_INVENTORY.md   l'inventaire des pages existantes
 *   docs/seo-secretariat-50/02_CANDIDATE_POOL.md               le vivier d'idées
 *   docs/seo-secretariat-50/03_CANNIBALIZATION_MATRIX.md       la matrice de cannibalisation
 *   docs/seo-secretariat-50/04_FINAL_50_PAGE_PLAN.md           le plan des pages retenues
 *   docs/seo-secretariat-50/05_PUBLICATION_PLAN.md             la publication par lots
 *   docs/seo-secretariat-50/06_INTERNAL_LINKING_MAP.md         le maillage
 *   docs/seo-secretariat-50/07_SIMILARITY_REPORT.md            la similarité
 *   docs/seo-secretariat-50/11_HUMAN_REVIEW_CHECKLIST.md       la liste de relecture
 *
 * Rien n'est recopié à la main : les tableaux viennent des fiches (src/data), des
 * registres de publication et de relecture, du vivier d'idées
 * (docs/seo-secretariat-50/data/candidats.json) et du build audité (dist/).
 * Relancer le script après toute modification de contenu ou de registre.
 *
 * Le build doit être celui de l'aperçu, qui contient les brouillons :
 *   npm run build:apercu && node scripts/docs-secretariat.mjs
 * ou, d'un seul geste : npm run docs:secretariat
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { bibliotheque, dossiers } from '../src/data/bibliotheque.ts';
import { metiers } from '../src/data/metiers.ts';
import { prestations } from '../src/data/prestations.ts';
import { zones } from '../src/data/zones.ts';
import { dateDeRelecture, datePublicationSansRelecture, estPubliee, validationDuProprietaire } from '../src/data/publication.mjs';
import { DATES_DES_LOTS } from '../src/data/dossiers/secretariat-lots.ts';
import { auditer, SEUILS as SEUILS_AUDIT } from './seo-audit.mjs';
import { SEUILS, champsDe, controler, cosinus, grammes, jaccard, rapprocher, tfidf } from './similarity-check.mjs';

const DOSSIER_DOCS = 'docs/seo-secretariat-50';
const HUB = 'secretariat-externalise';

const rapport = auditer('dist');
const parChemin = new Map(rapport.pages.map((p) => [p.chemin, p]));
const serie = bibliotheque.filter((g) => g.lot);
if (serie.some((g) => !parChemin.has(`/guides/${g.slug}`))) {
  console.error('Le build ne contient pas les brouillons. Lancez d’abord : npm run build:apercu');
  process.exit(2);
}
const existants = bibliotheque.filter((g) => !g.lot);
const NOMS_DOSSIERS = new Map(dossiers.map((d) => [d.slug, d]));
const candidats = JSON.parse(readFileSync(`${DOSSIER_DOCS}/data/candidats.json`, 'utf8'));
const candidatParSlug = new Map(candidats.filter((c) => c.slug).map((c) => [c.slug, c]));
const guideParChemin = new Map(bibliotheque.map((g) => [`/guides/${g.slug}`, g]));

const cellule = (t) => String(t ?? '—').replace(/\|/g, '\\|').replace(/\n/g, ' ');
const aujourdhui = new Date().toISOString().slice(0, 10);
const enTete = (titre, intro) => `# ${titre}\n\n> Document généré par \`scripts/docs-secretariat.mjs\` le ${aujourdhui}, à partir des fiches, des registres et du build d’aperçu. Ne pas le modifier à la main : relancer \`npm run docs:secretariat\`.\n\n${intro}\n`;

function statut(chemin) {
  const relue = dateDeRelecture(chemin);
  if (relue) return `Relue le ${relue}`;
  const publiee = datePublicationSansRelecture(chemin);
  if (publiee) return `En ligne — publiée sans relecture le ${publiee}`;
  return estPubliee(chemin) ? 'En ligne — antérieure aux registres' : 'Brouillon — noindex, hors sitemap';
}

// ══════════════════════════════════════════════════════════════════════════
// 01 — Inventaire des pages existantes
// ══════════════════════════════════════════════════════════════════════════

/** Les douze premiers guides n'ont pas de fiche de cadrage : leur intention est reconstituée à partir du contenu. */
const CADRAGE_RECONSTITUE = {
  'assistante-independante-ou-salariee': ['assistante indépendante ou salariée', 'comparaison', 'Dirigeant qui hésite entre recruter et externaliser'],
  'prix-assistante-de-direction-externalisee': ['prix assistante de direction externalisée', 'commerciale', 'Dirigeant qui veut un ordre de prix avant de consulter'],
  'qu-est-ce-qu-un-private-office': ['private office externalisé définition', 'informationnelle', 'Dirigeant qui découvre le terme'],
  'assistante-virtuelle-ou-private-office': ['assistante virtuelle ou private office', 'comparaison', 'Dirigeant qui compare une plateforme et un interlocuteur unique'],
  'secretariat-externalise': ['secrétariat externalisé', 'informationnelle', 'Dirigeant qui cherche à comprendre les offres derrière le terme'],
  'comment-deleguer': ['comment déléguer', 'méthode', 'Dirigeant qui n’a jamais délégué'],
  'executive-assistant-role': ['executive assistant définition', 'informationnelle', 'Lecteur qui cherche à comprendre le métier'],
  'confidentialite-assistante-externalisee': ['confidentialité assistante externalisée', 'méthode', 'Dirigeant qui hésite à ouvrir ses accès'],
  'premier-mois-assistante-externalisee': ['premier mois avec une assistante externalisée', 'méthode', 'Dirigeant qui démarre une collaboration'],
  'choisir-assistante-externalisee': ['choisir une assistante externalisée', 'commerciale', 'Dirigeant qui compare des prestataires'],
  'modele-brief-assistante-externalisee': ['modèle de brief assistante', 'modèle', 'Dirigeant qui formule ses premières demandes'],
  'suivi-demandes-assistante-externalisee': ['suivi des demandes déléguées', 'méthode', 'Dirigeant qui veut suivre ce qu’il délègue'],
};

/** Pages fixes : titre et H1 sont lus dans le build ; l'intention est donnée ici. */
const PAGES_FIXES = [
  ['/', 'accueil', 'private office externalisé', 'commerciale', 'Dirigeant qui découvre l’offre'],
  ['/private-office', 'offre', 'fonctionnement d’un private office', 'commerciale', 'Dirigeant qui veut comprendre le fonctionnement'],
  ['/services', 'hub', 'services d’une assistante externalisée', 'navigation', 'Dirigeant qui cherche une ligne précise du périmètre'],
  ['/tarifs', 'offre', 'tarifs assistance de direction externalisée', 'commerciale', 'Dirigeant qui veut les prix'],
  ['/guides', 'hub', 'guides assistance externalisée', 'navigation', 'Lecteur en phase d’information'],
  ['/assistante', 'hub', 'assistante externalisée par métier', 'navigation', 'Dirigeant qui cherche si son métier est concerné'],
  ['/assistante-independante', 'hub', 'où intervient BrittAssist', 'navigation', 'Dirigeant qui se demande si la distance est un obstacle'],
  ['/a-propos', 'institutionnelle', 'Brittany Dreano', 'navigation', 'Lecteur qui veut savoir à qui il s’adresse'],
  ['/contact', 'conversion', 'contacter BrittAssist', 'commerciale', 'Dirigeant prêt à échanger'],
  ['/methode-editoriale', 'institutionnelle', 'méthode éditoriale des guides', 'navigation', 'Lecteur qui veut savoir comment les guides sont écrits'],
  ['/cgv', 'légale', 'conditions générales de vente', 'navigation', 'Client ou prospect qui vérifie le cadre'],
  ['/mentions-legales', 'légale', 'mentions légales', 'navigation', 'Tout visiteur'],
  ['/politique-confidentialite', 'légale', 'politique de confidentialité', 'navigation', 'Tout visiteur'],
];

const sansMarque = (t) => t.replace(/ · BrittAssist$/, '');
const aPlat = (objet) => JSON.stringify(objet).replace(/[{}[\]"]/g, ' ');

/** Corpus unique de toutes les pages existantes, pour chercher les pages proches. */
const inventaire = [
  ...existants.map((g) => {
    const [motCle, intention, persona] = g.cadrage ? [g.cadrage.motCle, g.cadrage.intention, g.cadrage.persona] : CADRAGE_RECONSTITUE[g.slug].map((x, i) => (i === 0 ? `${x} (reconstitué)` : x));
    return { chemin: `/guides/${g.slug}`, type: g.type ? `guide — ${g.type}` : 'guide — première série', dossier: NOMS_DOSSIERS.get(g.dossier).nom, titre: g.title, h1: g.h1, motCle, intention, persona, texte: champsDe(g).tout };
  }),
  ...metiers.map((m) => ({ chemin: `/assistante/${m.slug}`, type: 'page métier', dossier: 'Par métier', titre: m.title, h1: m.h1, motCle: `${sansMarque(m.title).toLowerCase()} (reconstitué)`, intention: 'commerciale', persona: m.nom, texte: aPlat(m) })),
  ...prestations.map((p) => ({ chemin: `/services/${p.slug}`, type: 'page de prestation', dossier: p.univers, titre: p.title, h1: p.h1, motCle: `${sansMarque(p.title).toLowerCase()} (reconstitué)`, intention: 'commerciale', persona: `Dirigeant qui veut confier : ${p.perimetre.toLowerCase()}`, texte: aPlat(p) })),
  ...zones.map((z) => ({ chemin: `/assistante-independante/${z.slug}`, type: 'page de zone', dossier: 'Par zone', titre: z.title, h1: z.h1, motCle: `${sansMarque(z.title).toLowerCase()} (reconstitué)`, intention: 'commerciale locale', persona: `Dirigeant — ${z.nom}`, texte: aPlat(z) })),
  ...PAGES_FIXES.map(([chemin, type, motCle, intention, persona]) => {
    const p = parChemin.get(chemin);
    return { chemin, type: `page fixe — ${type}`, dossier: '—', titre: p?.titre ?? '', h1: p?.h1 ?? '', motCle: `${motCle} (reconstitué)`, intention, persona, texte: `${p?.titre ?? ''} ${p?.h1 ?? ''} ${p?.description ?? ''} ${motCle}` };
  }),
];
{
  const index = tfidf(inventaire.map((p) => p.texte));
  inventaire.forEach((p, i) => {
    const scores = inventaire.map((q, j) => ({ chemin: q.chemin, score: i === j ? -1 : cosinus(index.vecteurs[i], index.vecteurs[j]) })).sort((a, b) => b.score - a.score);
    p.proches = scores.slice(0, 2).map((s) => s.chemin);
  });
}

const compte = (liste, cle) => {
  const m = new Map();
  for (const x of liste) m.set(cle(x), (m.get(cle(x)) ?? 0) + 1);
  return [...m.entries()].sort((a, b) => b[1] - a[1]);
};

const doc01 = [
  enTete('01 — Inventaire des pages existantes', `Les **${inventaire.length} pages indexables** du site telles qu’elles existaient avant la série « secrétariat externalisé ». Les cinquante pages de la série n’y figurent pas : elles sont décrites dans \`04_FINAL_50_PAGE_PLAN.md\`.`),
  '## Lecture\n',
  '- **Mot-clé principal** : pour les 92 guides d’octobre 2026, c’est le `cadrage.motCle` de la fiche. Pour les 12 premiers guides, les pages métier, les pages de prestation, de zone et les pages fixes, la fiche n’en déclare pas : il est **reconstitué** à partir du titre et du contenu, et signalé comme tel. Rien n’a été ajouté aux fiches pour harmoniser.',
  '- **Pages proches** : les deux pages dont le vocabulaire est le plus voisin (cosinus TF-IDF sur le texte entier). C’est une mesure lexicale ; elle sert à repérer les voisinages, pas à juger de l’intention.',
  '- **Statut** : lu dans les registres `publications.mjs` et `relectures.mjs`.\n',
  '## Répartition\n',
  '| Type | Pages |',
  '| --- | --- |',
  ...compte(inventaire, (p) => p.type).map(([t, n]) => `| ${t} | ${n} |`),
  '',
  '| Intention | Pages |',
  '| --- | --- |',
  ...compte(inventaire, (p) => p.intention).map(([t, n]) => `| ${t} | ${n} |`),
  '',
  '| Statut | Pages |',
  '| --- | --- |',
  ...compte(inventaire, (p) => statut(p.chemin).replace(/ le \d{4}-\d{2}-\d{2}$/, '')).map(([t, n]) => `| ${t} | ${n} |`),
  '',
  '| Dossier de guides | Pages avant la série, pilier compris | Pages de la série | Total après publication complète |',
  '| --- | --- | --- | --- |',
  ...dossiers.map((d) => {
    const avant = existants.filter((g) => g.dossier === d.slug).length;
    const plus = serie.filter((g) => g.dossier === d.slug).length;
    return `| ${d.nom} | ${avant} | ${plus} | ${avant + plus} |`;
  }),
  '',
  '## Inventaire\n',
  '| URL | Type | Dossier | Title | H1 | Mot-clé principal | Intention | Persona | Statut | Pages proches |',
  '| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |',
  ...inventaire.map((p) => `| ${p.chemin} | ${cellule(p.type)} | ${cellule(p.dossier)} | ${cellule(p.titre)} | ${cellule(p.h1)} | ${cellule(p.motCle)} | ${cellule(p.intention)} | ${cellule(p.persona)} | ${statut(p.chemin)} | ${p.proches.join('<br>')} |`),
  '',
].join('\n');

// ══════════════════════════════════════════════════════════════════════════
// 02 et 03 — Vivier d'idées et matrice de cannibalisation
// ══════════════════════════════════════════════════════════════════════════

const rapprochements = new Map(rapprocher(candidats, existants).map((r) => [r.id, r]));
const AXES = ['Décision', 'Mise en place', 'Pilotage', 'Fonctionnement réel', 'Économie', 'Risque', 'Processus précis', 'Longue traîne'];
const retenus = candidats.filter((c) => c.decision === 'retenu');
const decisionLisible = (c) =>
  c.decision === 'retenu' ? `**Retenu** (${c.priorite}, lot ${c.lot}) → \`/guides/${c.slug}\`` : c.decision === 'fusionné' ? `Fusionné dans ${c.fusion}` : 'Rejeté';

const doc02 = [
  enTete('02 — Vivier d’idées', `**${candidats.length} idées** de pages autour du secrétariat externalisé, de la délégation administrative et de l’assistance externalisée. **${retenus.length} retenues**, ${candidats.filter((c) => c.decision === 'fusionné').length} fusionnées dans une idée voisine, ${candidats.filter((c) => c.decision === 'rejeté').length} rejetées.`),
  '## Comment le vivier a été constitué\n',
  '1. Lecture des 104 guides, des 14 pages métier, des 13 pages de prestation, des 5 pages de zone et des conditions générales (voir `01`).',
  '2. Passage en revue des huit axes de recherche : décision, mise en place, pilotage, fonctionnement réel, économie, risque, processus précis, longue traîne.',
  '3. Observation des résultats de recherche publics sur « secrétariat externalisé » et ses variantes, pour repérer les intentions présentes — sans reprendre ni les textes ni les plans des pages rencontrées.',
  '4. Vérification, pour chaque sujet réglementaire, qu’une source primaire existe et dit ce que la page affirmerait.\n',
  '**Ce que ce vivier ne contient pas.** Aucun volume de recherche : aucun outil n’en fournissait, et aucun n’a été estimé. Aucune donnée Search Console : elle n’était pas accessible (voir `00_BASELINE.md`). Les notes « valeur » et « conversion » sont des jugements éditoriaux sur cinq, non des mesures.\n',
  '**Le critère de tri n’est pas le nombre d’occurrences de « secrétariat externalisé ».** Une idée est retenue si elle répond à une question que le lecteur de la page de référence se pose ensuite, et qu’aucune page existante ne traite.\n',
  '## Vue d’ensemble\n',
  '| Axe | Idées | Retenues | Fusionnées | Rejetées |',
  '| --- | --- | --- | --- | --- |',
  ...AXES.map((axe) => {
    const l = candidats.filter((c) => c.axe === axe);
    return `| ${axe} | ${l.length} | ${l.filter((c) => c.decision === 'retenu').length} | ${l.filter((c) => c.decision === 'fusionné').length} | ${l.filter((c) => c.decision === 'rejeté').length} |`;
  }),
  `| **Total** | **${candidats.length}** | **${retenus.length}** | **${candidats.filter((c) => c.decision === 'fusionné').length}** | **${candidats.filter((c) => c.decision === 'rejeté').length}** |`,
  '',
  '| Motif d’écart | Idées |',
  '| --- | --- |',
  ...compte(candidats.filter((c) => c.decision !== 'retenu'), (c) => (c.risque === 'DOUBLON' ? 'Doublon d’une page existante' : c.risque === 'FORT' ? 'Risque fort de cannibalisation' : c.decision === 'fusionné' ? 'Fusionnée dans une idée retenue' : 'Hors cible, hors périmètre publié ou contenu trop mince')).map(([t, n]) => `| ${t} | ${n} |`),
  '',
  ...AXES.flatMap((axe) => [
    `## ${axe}\n`,
    ...candidats.filter((c) => c.axe === axe).flatMap((c) => [
      `### ${c.id} — ${c.requete}\n`,
      `- **Variantes** : ${c.variantes.join(' · ')}`,
      `- **Intention** : ${c.intention} · **Persona** : ${c.persona}`,
      `- **Problème réel** : ${c.probleme}`,
      `- **Type de contenu** : ${c.type} · **Dossier proposé** : ${NOMS_DOSSIERS.get(c.dossier)?.nom ?? c.dossier}`,
      `- **Page existante la plus proche** : \`${c.proche}\` · similarité estimée : ${c.similarite}`,
      `- **Valeur pour BrittAssist** : ${c.valeur}/5 · **Potentiel de conversion** : ${c.conversion}/5`,
      `- **Risque de cannibalisation** : ${c.risque} · **Risque de contenu faible** : ${c.contenuFaible}`,
      `- **Sources nécessaires** : ${c.sources}`,
      `- **Décision** : ${decisionLisible(c)}${c.motif ? ` — ${c.motif}` : ''}`,
      '',
    ]),
  ]),
].join('\n');

const pct = (x) => `${Math.round(x * 100)} %`;
/** Score et page d'une mesure lexicale ; une mesure nulle ne désigne aucune page. */
const mesure = (m, format = pct) => (m.slug ? `${format(m.score)} — \`${m.slug}\`` : `${format(m.score)} — aucune`);
/** Coïncidences lexicales relevées à la lecture : la mesure désigne une page, la lecture écarte le rapprochement. */
const COINCIDENCES = {
  C028: 'La pseudo-racine « indisp » réunit « indisponible » et « indispensable » : la page désignée traite du dirigeant par qui tout passe, non de son absence.',
  C031: 'Mots communs attendus (« salarié », « checklist », « administrative ») : la page désignée traite l’embauche, celle-ci le départ.',
  C033: 'Mots communs attendus (« mentions », « obligatoires ») : la page désignée traite la facture, celle-ci les correspondances.',
  C037: '« Numériser » et « dossiers numériques » partagent leur racine : la page désignée traite le plan de classement, non le passage du papier au numérique.',
};
const voisinages = controler(bibliotheque);
const voisinDe = new Map(voisinages.voisins.map((v) => [v.slug, v]));
const ORDRE_RISQUE = { DOUBLON: 0, FORT: 1, MOYEN: 2, FAIBLE: 3 };

const doc03 = [
  enTete('03 — Matrice de cannibalisation', `Chaque idée du vivier est comparée aux ${existants.length} guides existants par deux mesures lexicales, puis par un jugement d’intention. Les pages métier, de prestation et de zone sont prises en compte dans le jugement d’intention (colonne « Page la plus proche »).`),
  '## Les deux méthodes\n',
  '### A — Comparaison lexicale (calculée)\n',
  'Trois chiffres par idée, produits par `scripts/similarity-check.mjs --candidats` :\n',
  '- **Mots-clés** : indice de Jaccard entre les pseudo-racines de la requête et de ses variantes, et celles des repères de chaque page existante — slug, title, H1, nom, `cadrage.motCle`, variantes. Les mots sont ramenés à six lettres, sans accents ni mots vides : « externalisé » et « externaliser » comptent pour un seul.',
  '- **Couverture** : part des mots de la requête principale déjà présents dans les repères d’une page. Une couverture de 100 % signifie qu’une page existante contient tous les mots de la requête.',
  '- **Sujet** : cosinus TF-IDF entre la description de l’idée — requête, variantes, problème — et le **texte entier** de chaque page, FAQ comprise. Il repère une page qui traite déjà le sujet avec d’autres mots.\n',
  'Ces chiffres ne décident de rien seuls. Une requête courte partage mécaniquement ses mots avec beaucoup de pages (« assistante », « externalisée ») ; une idée réellement neuve peut avoir une couverture élevée, et un doublon une couverture faible. Ils servent à **désigner la page à lire**.\n',
  '### B — Comparaison d’intention (jugée)\n',
  'Pour chaque idée, la page désignée a été relue, et quatre questions posées : le lecteur est-il le même ? Cherche-t-il la même chose — comprendre, comparer, faire, obtenir un modèle ? À quel moment de son parcours ? Repart-il avec la même réponse ? Deux pages au vocabulaire différent qui donnent la même réponse au même lecteur sont un doublon ; deux pages au vocabulaire voisin qui servent deux lecteurs ne le sont pas.\n',
  '### Classement\n',
  '| Classe | Définition | Suite |',
  '| --- | --- | --- |',
  '| DOUBLON | Même lecteur, même question, même réponse qu’une page existante | Rejet |',
  '| RISQUE FORT | Même question, traitée en partie ; une nouvelle page diviserait le signal | Rejet, ou fusion dans une idée voisine |',
  '| RISQUE MOYEN | Sujet voisin d’une page existante | Retenue seulement si la différence d’intention est démontrée par écrit |',
  '| RISQUE FAIBLE | Aucune page existante ne traite la question | Éligible |\n',
  '## Résultat\n',
  '| Classe | Idées | Retenues | Écartées |',
  '| --- | --- | --- | --- |',
  ...['DOUBLON', 'FORT', 'MOYEN', 'FAIBLE'].map((r) => {
    const l = candidats.filter((c) => c.risque === r);
    return `| ${r === 'DOUBLON' ? 'DOUBLON' : `RISQUE ${r}`} | ${l.length} | ${l.filter((c) => c.decision === 'retenu').length} | ${l.filter((c) => c.decision !== 'retenu').length} |`;
  }),
  '',
  `Aucune idée classée DOUBLON ou RISQUE FORT n’a été retenue. Les ${retenus.filter((c) => c.risque === 'MOYEN').length} idées retenues en RISQUE MOYEN portent chacune leur démonstration, dans la dernière colonne.\n`,
  '## Matrice — idées retenues\n',
  '| Id | Requête principale | Mots-clés (A) | Couverture (A) | Sujet (A) | Page la plus proche (B) | Classe | Différence d’intention démontrée |',
  '| --- | --- | --- | --- | --- | --- | --- | --- |',
  ...retenus
    .slice()
    .sort((a, b) => ORDRE_RISQUE[a.risque] - ORDRE_RISQUE[b.risque] || a.id.localeCompare(b.id))
    .map((c) => {
      const r = rapprochements.get(c.id);
      return `| ${c.id} | ${cellule(c.requete)} | ${mesure(r.motsCles)} | ${mesure(r.couverture)} | ${mesure(r.sujet, (x) => x.toFixed(2))} | \`${c.proche}\` | ${c.risque} | ${cellule(c.motif || 'Aucune page existante ne traite la question.')} |`;
    }),
  '',
  '### Idées retenues dont la couverture lexicale dépasse 70 %\n',
  'Ce sont les cas où la mesure A désigne le plus nettement une page existante. Chacun a été relu.\n',
  '| Id | Requête | Page désignée | Couverture | Lecture |',
  '| --- | --- | --- | --- | --- |',
  ...retenus
    .filter((c) => rapprochements.get(c.id).couverture.score > 0.7)
    .map((c) => `| ${c.id} | ${cellule(c.requete)} | \`${rapprochements.get(c.id).couverture.slug}\` | ${pct(rapprochements.get(c.id).couverture.score)} | ${COINCIDENCES[c.id] ?? 'À relire : aucune lecture consignée.'} |`),
  '',
  '## Matrice — idées écartées\n',
  '| Id | Requête principale | Mots-clés (A) | Couverture (A) | Sujet (A) | Page la plus proche (B) | Classe | Décision et motif |',
  '| --- | --- | --- | --- | --- | --- | --- | --- |',
  ...candidats
    .filter((c) => c.decision !== 'retenu')
    .sort((a, b) => ORDRE_RISQUE[a.risque] - ORDRE_RISQUE[b.risque] || a.id.localeCompare(b.id))
    .map((c) => {
      const r = rapprochements.get(c.id);
      return `| ${c.id} | ${cellule(c.requete)} | ${mesure(r.motsCles)} | ${mesure(r.couverture)} | ${mesure(r.sujet, (x) => x.toFixed(2))} | \`${c.proche}\` | ${c.risque} | ${c.decision === 'fusionné' ? `Fusionné dans ${c.fusion}` : 'Rejeté'} — ${cellule(c.motif)} |`;
    }),
  '',
  '## Vérification après rédaction\n',
  'La matrice ci-dessus compare des idées. Une fois les pages écrites, le contrôle est refait sur leur texte complet : pour chaque page de la série, la page de la bibliothèque dont le vocabulaire est le plus proche (cosinus TF-IDF, toutes pages confondues, série comprise).\n',
  `Repère : parmi les ${existants.length} guides déjà en ligne, la page la plus proche d’une autre l’est à ${Math.max(...voisinages.voisins.filter((v) => !v.serie).map((v) => v.score)).toFixed(2)} au plus, et à ${[...voisinages.voisins.filter((v) => !v.serie).map((v) => v.score)].sort((a, b) => a - b)[Math.floor(existants.length / 2)].toFixed(2)} en médiane. Les pages de la série se situent dans le même intervalle : médiane ${[...voisinages.voisins.filter((v) => v.serie).map((v) => v.score)].sort((a, b) => a - b)[Math.floor(serie.length / 2)].toFixed(2)}.\n`,
  '| Page de la série | Page au vocabulaire le plus proche | Cosinus | Page jugée la plus proche à l’étape B | Classe |',
  '| --- | --- | --- | --- | --- |',
  ...serie
    .map((g) => ({ g, v: voisinDe.get(g.slug), c: candidatParSlug.get(g.slug) }))
    .sort((a, b) => b.v.score - a.v.score)
    .map(({ g, v, c }) => `| \`${g.slug}\` | \`${v.voisin}\` | ${v.score.toFixed(2)} | \`${c.proche}\` | ${c.risque} |`),
  '',
  `La paire la plus proche, \`obligation-de-vigilance-prestataire-independant\` et \`dossier-permanent-entreprise\`, est aussi la plus proche de toute la bibliothèque. Elle était attendue : les deux pages parlent de la même pièce, l’attestation de vigilance. L’une s’adresse à l’entreprise qui doit la fournir, l’autre au client qui doit la demander ; elles se citent mutuellement. Le détail figure dans \`07_SIMILARITY_REPORT.md\`.\n`,
].join('\n');

// ══════════════════════════════════════════════════════════════════════════
// 04 — Plan des cinquante pages
// ══════════════════════════════════════════════════════════════════════════

/** Fiches qui citent une page dans leur maillage ou leur rubrique « Pour approfondir ». */
function citationsDe(chemin) {
  const sources = [];
  for (const g of bibliotheque) {
    for (const l of g.liens) if (l.href === chemin) sources.push({ de: g, ancre: l.label, ou: 'Pour aller plus loin' });
    for (const groupe of g.approfondir?.groupes ?? []) for (const l of groupe.liens) if (l.href === chemin) sources.push({ de: g, ancre: l.label, ou: `Pour approfondir — ${groupe.nom}` });
  }
  return sources;
}

const ordreDuPlan = serie.slice().sort((a, b) => a.lot.localeCompare(b.lot) || candidatParSlug.get(a.slug).id.localeCompare(candidatParSlug.get(b.slug).id));

const doc04 = [
  enTete('04 — Plan des cinquante pages', `Les **${serie.length} pages retenues**, dans l’ordre des lots de publication. Tout ce qui décrit une page — title, description, H1, sections, FAQ, liens — est lu dans sa fiche : ce document décrit ce qui est écrit, non ce qui était projeté.`),
  '## Synthèse\n',
  '| # | Lot | Priorité | Slug | Dossier | Type | Risque | Utilité | Confiance |',
  '| --- | --- | --- | --- | --- | --- | --- | --- | --- |',
  ...ordreDuPlan.map((g, i) => {
    const c = candidatParSlug.get(g.slug);
    return `| ${i + 1} | ${g.lot} | ${c.priorite} | \`${g.slug}\` | ${NOMS_DOSSIERS.get(g.dossier).nom} | ${g.type} | ${c.risque} | ${c.utilite}/10 | ${c.confiance}/10 |`;
  }),
  '',
  '**Score d’utilité** : ce que la page apporte au lecteur visé, de 1 à 10. **Score de confiance** : solidité de la différence avec l’existant et des sources, de 1 à 10. Ce sont des jugements éditoriaux, consignés pour être discutés ; aucun ne repose sur une mesure de trafic.\n',
  '| Dossier | Pages de la série |',
  '| --- | --- |',
  ...dossiers.map((d) => `| ${d.nom} | ${serie.filter((g) => g.dossier === d.slug).length} |`),
  '',
  '| Type de guide | Pages |',
  '| --- | --- |',
  ...compte(serie, (g) => g.type).map(([t, n]) => `| ${t} | ${n} |`),
  '',
  ...ordreDuPlan.flatMap((g, i) => {
    const c = candidatParSlug.get(g.slug);
    const d = NOMS_DOSSIERS.get(g.dossier);
    const chemin = `/guides/${g.slug}`;
    const entrants = citationsDe(chemin);
    return [
      `## ${i + 1}. ${g.nom}\n`,
      `1. **Numéro** : ${i + 1} (idée ${c.id})`,
      `2. **Slug** : \`${g.slug}\` — URL \`${chemin}\``,
      `3. **Title** : ${g.title} (${g.title.length} caractères)`,
      `4. **Meta description** : ${g.description} (${g.description.length} caractères)`,
      `5. **H1** : ${g.h1}`,
      `6. **Requête principale** : ${g.cadrage.motCle}`,
      `7. **Variantes** : ${g.cadrage.variantes.join(' · ')}`,
      `8. **Intention** : ${g.cadrage.intention}`,
      `9. **Persona** : ${g.cadrage.persona}`,
      `10. **Objectif utilisateur** : ${g.cadrage.objectif}`,
      `11. **Différence avec la page existante la plus proche** (\`${c.proche}\`) : ${c.motif || g.cadrage.difference}`,
      `12. **Dossier cible** : ${d.nom} (\`/guides/${d.slug}\`)`,
      `13. **Type de guide** : ${g.type} — rubrique « ${g.categorie} »`,
      `14. **Angle éditorial** : ${g.cadrage.difference}`,
      `15. **Sections H2** : ${g.sections.map((s) => s.h2).join(' · ')}${g.erreurs ? ' · Les erreurs les plus fréquentes' : ''}${g.limites ? ' · Ce que cette page ne remplace pas' : ''}`,
      `16. **FAQ** : ${g.faq.map((f) => f.q).join(' · ')}`,
      `17. **Liens internes entrants** : pilier « ${d.nom} » et index des guides (automatiques)${entrants.length ? ' ; ' + entrants.map((e) => `\`${e.de.slug}\` (« ${e.ancre} »)`).join(' ; ') : ''}`,
      `18. **Liens internes sortants** : ${g.liens.map((l) => `\`${l.href}\``).join(' · ')}`,
      `19. **CTA** : « ${d.action.label} » → \`${d.action.href}\``,
      `20. **Sources** : ${g.sources?.length ? g.sources.map((s) => s.label).join(' ; ') : 'aucune règle citée, donc aucune source requise'}`,
      `21. **Priorité** : ${c.priorite} — lot ${g.lot}`,
      `22. **Risque de cannibalisation** : ${c.risque}`,
      `23. **Score d’utilité** : ${c.utilite}/10`,
      `24. **Score de confiance** : ${c.confiance}/10`,
      '',
    ];
  }),
].join('\n');

// ══════════════════════════════════════════════════════════════════════════
// 05 — Plan de publication
// ══════════════════════════════════════════════════════════════════════════

const LOTS = {
  A: {
    titre: 'Lot A — 10 pages, toutes P0',
    raison: 'Les dix pages qui répondent aux questions qu’un lecteur de la page de référence se pose aussitôt après : ce que le modèle coûte, comment consulter et comparer, ce qui se convient par écrit, ce qui se passe quand la prestataire s’absente. Dix des quatorze liens de la rubrique « Pour approfondir » de la page de référence pointent vers ce lot : c’est lui qui la fait apparaître.',
    observer: 'Impressions et clics de chaque page du lot ; requêtes sur lesquelles elles apparaissent ; clics et position de la page de référence, qui ne doivent pas baisser ; pages du lot indexées.',
    decision: 'Publier le lot B si les pages du lot A sont indexées dans leur majorité, et si la page de référence n’a perdu ni clics ni position sur ses requêtes principales. Dans le cas contraire, chercher laquelle des nouvelles pages apparaît sur ces mêmes requêtes avant d’aller plus loin.',
  },
  B: {
    titre: 'Lot B — 10 pages, P0 et P1',
    raison: 'Les pages de fonctionnement : évaluer, corriger une erreur, changer de prestataire, partager une assistante, ouvrir la banque, payer, présenter l’assistante, traiter les appels manqués. Elles s’adressent à un lecteur déjà engagé ou sur le point de l’être.',
    observer: 'Les mêmes mesures, et en plus : les requêtes où une page du lot B et une page du lot A apparaissent ensemble.',
    decision: 'Publier le lot C si aucune paire de pages de la série ne se dispute durablement la même requête.',
  },
  C: {
    titre: 'Lot C — 15 pages, toutes P1',
    raison: 'Les pages de référence et de méthode qui élargissent le champ : conformité (RGPD, incident), délégations officielles, courriers et mentions, fichier clients, assemblée annuelle, situations de dirigeant. Chacune vise une requête précise, souvent réglementaire.',
    observer: 'Les mêmes mesures. Vérifier aussi, pour les pages qui citent une règle, que la source officielle n’a pas changé depuis la rédaction (`node scripts/check-sources.mjs`).',
    decision: 'Publier le lot D si les pages réglementaires du lot C ont été relues par une personne, ou si le propriétaire assume de les publier sans relecture, comme pour la série d’octobre.',
  },
  D: {
    titre: 'Lot D — 15 pages, P1 et P2',
    raison: 'Les pages les plus éloignées du cœur du sujet : processus particuliers (sinistre, véhicules, numérisation, dictée, salon), comparatifs secondaires, modèles. Utiles, mais les moins liées à la requête d’origine : elles passent en dernier, et peuvent attendre.',
    observer: 'Les mêmes mesures.',
    decision: 'Aucun lot ne suit. Bilan d’ensemble : pages sans impression après plusieurs mois à réécrire, fusionner ou retirer.',
  },
};

const enLigne = serie.filter((g) => estPubliee(`/guides/${g.slug}`));
const validees = serie.filter((g) => validationDuProprietaire(`/guides/${g.slug}`));
const relues = serie.filter((g) => dateDeRelecture(`/guides/${g.slug}`));

const doc05 = [
  enTete('05 — Plan de publication', `Les ${serie.length} pages existent. **En ligne : ${enLigne.length}. En brouillon : ${serie.length - enLigne.length}.** Un brouillon est généré par \`npm run build:apercu\`, en \`noindex\`, hors sitemap ; \`npm run build\` ne le génère pas du tout. Validées par le propriétaire du site : ${validees.length} — une validation garde une trace, elle ne met rien en ligne. Ce document donne l’ordre dans lequel publier les pages.`),
  '## Principe\n',
  'Les pages ne sont pas publiées d’un coup. Quatre lots, du plus proche de la page de référence au plus éloigné. Entre deux lots, on regarde ce que le précédent a produit avant de continuer.\n',
  '**Aucun calendrier n’est fixé ici.** Aucune donnée de recherche n’était disponible pour en justifier un (voir `00_BASELINE.md`). Le passage d’un lot au suivant dépend d’un constat, non d’une date. Un repère de bon sens seulement : attendre que les pages d’un lot aient été explorées et, pour la plupart, indexées — ce qui se lit dans la Search Console, propriété `https://www.brittassist.fr/`.\n',
  '## État des lots\n',
  '| Lot | Pages | En ligne | Validées par le propriétaire | Relues par Brittany Dreano | Date portée par le lot |',
  '| --- | --- | --- | --- | --- | --- |',
  ...Object.keys(LOTS).map((l) => {
    const pages = serie.filter((g) => g.lot === l);
    return `| ${l} | ${pages.length} | ${pages.filter((g) => enLigne.includes(g)).length} | ${pages.filter((g) => validees.includes(g)).length} | ${pages.filter((g) => relues.includes(g)).length} | ${DATES_DES_LOTS[l]} |`;
  }),
  '',
  'Les trois colonnes ne disent pas la même chose : une page validée reste un brouillon tant qu’elle n’est pas inscrite dans `publications.mjs`, et seule une page relue par Brittany Dreano affiche une mention de relecture. Détail dans `11_HUMAN_REVIEW_CHECKLIST.md`.\n',
  '## Publier un lot : la marche à suivre\n',
  '1. **Relire** les pages du lot (`11_HUMAN_REVIEW_CHECKLIST.md`), ou décider en connaissance de cause de les publier sans relecture. Une validation du propriétaire s’inscrit dans la liste `validations` de `src/data/relectures.mjs`.',
  '2. **Dater** : dans `src/data/dossiers/secretariat-lots.ts`, remplacer la date du lot par celle du jour de mise en ligne. Les pages du lot en tirent leur date de publication et de mise à jour.',
  '3. **Inscrire** : ajouter une ligne par page dans `src/data/publications.mjs` (page en ligne, sans mention de relecture). Pour une page relue par Brittany Dreano, ajouter aussi sa ligne dans l’objet `relectures` de `src/data/relectures.mjs` : la mention « Relu par Brittany Dreano » s’affichera.',
  '4. **Contrôler** : `npm run check`, `npm test`, `npm run qa`, `npm run qa:similarite`.',
  '5. **Pour le lot A seulement** : la page de référence `/guides/secretariat-externalise` gagne ce jour-là sa rubrique « Pour approfondir ». Mettre à jour son `dateModified` dans `src/data/guides.ts`. Dans `src/data/dates.mjs`, lui donner une date de révision — une constante datée du jour, sur le modèle de `GUIDES_REVISES` — pour que le `<lastmod>` du sitemap suive. Ne pas le faire avant : tant qu’aucune page du lot n’est en ligne, la page de référence n’a pas changé, et sa date non plus.',
  '6. **Régénérer** ces documents : `npm run docs:secretariat`.',
  '7. **Mettre en ligne** : un push sur la branche de production déclenche le déploiement. Soumettre ensuite le sitemap dans la Search Console.\n',
  'Retour arrière : retirer la ligne d’une page de `publications.mjs` la remet en brouillon au build suivant.\n',
  ...Object.entries(LOTS).flatMap(([l, lot]) => {
    const pages = serie.filter((g) => g.lot === l).sort((a, b) => candidatParSlug.get(a.slug).id.localeCompare(candidatParSlug.get(b.slug).id));
    const cibles = new Set(pages.map((g) => `/guides/${g.slug}`));
    const liensQuiSOuvrent = [];
    for (const g of existants) for (const lien of [...g.liens, ...(g.approfondir?.groupes ?? []).flatMap((x) => x.liens)]) if (cibles.has(lien.href)) liensQuiSOuvrent.push(`\`${g.slug}\` → \`${lien.href.replace('/guides/', '')}\``);
    return [
      `## ${lot.titre}\n`,
      `**Raison.** ${lot.raison}\n`,
      '| # | Page | Priorité | Dossier | Risque | Sources citées |',
      '| --- | --- | --- | --- | --- | --- |',
      ...pages.map((g, i) => {
        const c = candidatParSlug.get(g.slug);
        return `| ${i + 1} | \`${g.slug}\` | ${c.priorite} | ${NOMS_DOSSIERS.get(g.dossier).nom} | ${c.risque} | ${g.sources?.length ?? 0} |`;
      }),
      '',
      `**Liens à ajouter.** Aucun à écrire : ils sont déjà dans les fiches, masqués tant que leur cible est un brouillon. À la publication du lot, ${liensQuiSOuvrent.length} lien(s) apparaissent sur des pages déjà en ligne :\n`,
      ...liensQuiSOuvrent.map((x) => `- ${x}`),
      '',
      `S’y ajoutent les liens automatiques : la carte de chaque page dans son pilier et dans l’index des guides, et sa place dans la colonne « Dans le même dossier » de ses voisines.\n`,
      `**Métriques à suivre.** ${lot.observer}\n`,
      `**Critère pour continuer.** ${lot.decision}\n`,
    ];
  }),
  '## Ce qu’il faut surveiller sur la page de référence\n',
  'La série existe parce que `/guides/secretariat-externalise` attire des clics. Le premier risque d’une série de cinquante pages voisines est de les lui prendre. Après chaque lot, comparer pour cette page, sur une période identique avant et après : clics, impressions, position moyenne, et liste des requêtes. Si une page de la série apparaît à sa place sur une requête qu’elle tenait, trois réponses, dans cet ordre : renforcer le lien de la nouvelle page vers la page de référence, resserrer le title de la nouvelle page sur sa propre requête, et en dernier recours la retirer de `publications.mjs`.\n',
].join('\n');

// ══════════════════════════════════════════════════════════════════════════
// 06 — Maillage interne
// ══════════════════════════════════════════════════════════════════════════

const liensAjoutes = [];
for (const g of existants) {
  for (const l of g.liens) if (guideParChemin.get(l.href)?.lot) liensAjoutes.push({ de: g, vers: l.href, ancre: l.label, ou: 'Pour aller plus loin' });
}
const hub = bibliotheque.find((g) => g.slug === HUB);
const liensDuHub = (hub.approfondir?.groupes ?? []).flatMap((groupe) => groupe.liens.map((l) => ({ groupe: groupe.nom, ...l })));

const doc06 = [
  enTete('06 — Carte du maillage interne', `D’où chaque page de la série reçoit ses liens, et vers quoi elle en envoie. Les liens sont comptés dans le build d’aperçu, c’est-à-dire tels qu’ils seront une fois les ${serie.length} pages publiées.`),
  '## Les quatre sources de liens entrants\n',
  '| Source | Nature | Écrit où |',
  '| --- | --- | --- |',
  '| Le pilier du dossier | Automatique : une carte par page du dossier | Gabarit `src/pages/guides/[slug].astro` |',
  '| L’index des guides | Automatique : une carte par page | `src/pages/guides.astro` |',
  '| La colonne « Dans le même dossier » | Automatique : les cinq pages suivantes du dossier, en boucle | `voisins()` dans `src/data/bibliotheque.ts` |',
  '| Le maillage éditorial | Choisi : champ `liens` d’une fiche, ou rubrique « Pour approfondir » | Les fiches |\n',
  'Les trois premières suffisent à ce qu’aucune page ne soit orpheline. La quatrième est celle qui compte : un lien choisi, avec une ancre qui dit ce qu’on trouvera.\n',
  '**Comportement en production.** Un lien vers une page encore en brouillon n’est pas rendu (`liensVisibles`). Les liens ajoutés aux pages existantes n’apparaissent donc qu’au fur et à mesure des lots : aujourd’hui, aucune page en ligne n’a changé.\n',
  '## Contrôles\n',
  '| Contrôle | Résultat |',
  '| --- | --- |',
  `| Pages de la série sans lien entrant | ${serie.filter((g) => parChemin.get(`/guides/${g.slug}`).entrants === 0).length} |`,
  `| Pages de la série sans lien éditorial entrant | ${serie.filter((g) => citationsDe(`/guides/${g.slug}`).length === 0).length} |`,
  `| Liens éditoriaux entrants par page | de ${Math.min(...serie.map((g) => citationsDe(`/guides/${g.slug}`).length))} à ${Math.max(...serie.map((g) => citationsDe(`/guides/${g.slug}`).length))} |`,
  `| Liens entrants par page, toutes sources | de ${Math.min(...serie.map((g) => parChemin.get(`/guides/${g.slug}`).entrants))} à ${Math.max(...serie.map((g) => parChemin.get(`/guides/${g.slug}`).entrants))} |`,
  `| Profondeur maximale depuis l’accueil | ${Math.max(...serie.map((g) => parChemin.get(`/guides/${g.slug}`).profondeur))} clics |`,
  `| Liens sortants par page (champ \`liens\`) | de ${Math.min(...serie.map((g) => g.liens.length))} à ${Math.max(...serie.map((g) => g.liens.length))} |`,
  `| Pages de la série avec un lien vers une offre, un service ou le contact | ${serie.filter((g) => g.liens.some((l) => /^\/(services|tarifs|contact|private-office|assistante)/.test(l.href))).length} sur ${serie.length} |`,
  `| Liens cassés dans le build d’aperçu | ${rapport.blocages.filter((b) => b.regle === 'lien-casse' || b.regle === 'ancre-cassee').length} |`,
  `| Ancre la plus répétée vers une même page | ${(() => {
    let max = 0;
    for (const g of serie) {
      const ancres = citationsDe(`/guides/${g.slug}`).map((e) => e.ancre);
      for (const a of new Set(ancres)) max = Math.max(max, ancres.filter((x) => x === a).length);
    }
    return `${max} fois`;
  })()} |`,
  '',
  `## La page de référence : \`/guides/${HUB}\`\n`,
  `Elle reçoit une rubrique « ${hub.approfondir.titre} », placée à la fin du corps de la page : **${liensDuHub.length} liens**, en ${hub.approfondir.groupes.length} groupes, chacun suivi d’une phrase de contexte. Rien d’autre n’y est modifié : ni le slug, ni le title, ni le H1, ni le texte, ni la date.\n`,
  'Les autres pages de la série ne sont pas citées par la page de référence : elles sont atteintes par leur dossier et par leurs voisines.\n',
  '| Groupe | Page citée | Ancre | Phrase de contexte | Lot |',
  '| --- | --- | --- | --- | --- |',
  ...liensDuHub.map((l) => `| ${l.groupe} | \`${l.href.replace('/guides/', '')}\` | ${cellule(l.label)} | ${cellule(l.note)} | ${guideParChemin.get(l.href).lot} |`),
  '',
  `En sens inverse, ${serie.filter((g) => g.liens.some((l) => l.href === `/guides/${HUB}`)).length} pages de la série renvoient vers la page de référence dans leur maillage : ${serie.filter((g) => g.liens.some((l) => l.href === `/guides/${HUB}`)).map((g) => `\`${g.slug}\``).join(', ')}.\n`,
  '## Liens ajoutés aux pages existantes\n',
  `**${liensAjoutes.length} liens** ajoutés dans le champ \`liens\` de **${new Set(liensAjoutes.map((l) => l.de.slug)).size} guides** d’octobre 2026. Les douze premiers guides n’ont pas été touchés, à l’exception de la page de référence.\n`,
  '| Page existante | Lien ajouté vers | Ancre |',
  '| --- | --- | --- |',
  ...liensAjoutes.map((l) => `| \`${l.de.slug}\` | \`${l.vers.replace('/guides/', '')}\` | ${cellule(l.ancre)} |`),
  '',
  '## Page par page\n',
  '| Page | Lot | Entrants (dont dans le contenu) | Liens éditoriaux entrants | Sortants (champ `liens`) | Clics depuis l’accueil |',
  '| --- | --- | --- | --- | --- | --- |',
  ...ordreDuPlan.map((g) => {
    const p = parChemin.get(`/guides/${g.slug}`);
    const e = citationsDe(`/guides/${g.slug}`);
    return `| \`${g.slug}\` | ${g.lot} | ${p.entrants} (${p.entrantsContextuels}) | ${e.length} : ${e.map((x) => `\`${x.de.slug}\``).join(', ')} | ${g.liens.length} : ${g.liens.map((l) => `\`${l.href.replace('/guides/', '')}\``).join(', ')} | ${p.profondeur} |`;
  }),
  '',
  '## Ancres\n',
  'Les ancres varient d’une page citante à l’autre : chacune dit ce que le lecteur trouvera, vu depuis la page où il se trouve. Le tableau des contrôles, plus haut, donne la répétition maximale observée. Liste complète des ancres reçues :\n',
  '| Page | Ancres reçues |',
  '| --- | --- |',
  ...ordreDuPlan.map((g) => `| \`${g.slug}\` | ${citationsDe(`/guides/${g.slug}`).map((e) => `« ${cellule(e.ancre)} »`).join(' · ')} |`),
  '',
].join('\n');

// ══════════════════════════════════════════════════════════════════════════
// 07 — Similarité
// ══════════════════════════════════════════════════════════════════════════

const similSerie = controler(bibliotheque, { serie: true });
const similAnciens = controler(existants);

/** Similarité du HTML servi : 5-grammes du contenu principal, comme l'audit du build. */
function texteDuMain(chemin) {
  const fichier = chemin === '/' ? 'dist/index.html' : `dist${chemin}.html`;
  const html = readFileSync(fichier, 'utf8');
  const principal = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] ?? '';
  return principal.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ');
}
const controlees = rapport.pages.filter((p) => p.indexable || p.brouillon);
const empreintesHtml = new Map(controlees.map((p) => [p.chemin, grammes(texteDuMain(p.chemin), 5)]));
const pairesHtml = [];
for (const g of serie) {
  const a = `/guides/${g.slug}`;
  for (const p of controlees) {
    if (p.chemin === a) continue;
    if (guideParChemin.get(p.chemin)?.lot && p.chemin < a) continue; // une paire de la série n'est comptée qu'une fois
    pairesHtml.push({ a, b: p.chemin, score: jaccard(empreintesHtml.get(a), empreintesHtml.get(p.chemin)) });
  }
}
pairesHtml.sort((x, y) => y.score - x.score);

const EXPLICATIONS = {
  'requete-proche': 'Les deux requêtes partagent des pseudo-racines très courantes dans la bibliothèque (« extern », « assist », « secret », « charge »). Les requêtes complètes sont différentes, et les intentions aussi.',
  'sujet-proche': 'Les deux pages traitent de l’attestation de vigilance : l’une pour l’entreprise qui la fournit, l’autre pour le client qui la demande. Vocabulaire commun, lecteurs opposés ; elles se citent mutuellement.',
  'titre-proche': 'Titres construits sur les mêmes mots de tête ; les requêtes principales diffèrent.',
  'phrase-reprise': 'Phrase commune à deux pages : à reformuler dans l’une des deux.',
  'question-voisine': 'Deux questions de FAQ formulées de façon voisine.',
};

const doc07 = [
  enTete('07 — Rapport de similarité', `Contrôle de la ressemblance entre les ${serie.length} pages de la série, et entre elles et les ${existants.length} guides existants. Trois contrôles se complètent : le gate éditorial, l’audit du build, et un contrôle champ par champ ajouté pour cette série.`),
  '## Les trois contrôles\n',
  '| Contrôle | Script | Ce qu’il compare | Seuils |',
  '| --- | --- | --- | --- |',
  '| Gate éditorial | `scripts/content-gate.mjs` | Le texte entier de chaque fiche, en 4-grammes | Avertissement à 20 %, blocage à 55 % |',
  `| Audit du build | \`scripts/seo-audit.mjs\` | Le contenu principal du HTML servi, en 5-grammes | Avertissement à ${pct(SEUILS_AUDIT.similariteAvertissement)}, blocage à ${pct(SEUILS_AUDIT.similariteBlocage)} |`,
  '| Contrôle champ par champ | `scripts/similarity-check.mjs` | Titres, chapôs, réponses courtes, corps, FAQ, clôtures, requêtes ; phrases reprises ; questions répétées ; sujet (TF-IDF) | Voir ci-dessous |\n',
  'Le troisième est nouveau. Il se lance par `npm run qa:similarite`, qui échoue s’il reste un blocage sur une paire où figure une page de la série.\n',
  '## Résultat\n',
  '| Contrôle | Résultat sur la série |',
  '| --- | --- |',
  `| Gate éditorial — paires au-dessus de 20 % | 0 (voir \`09_TEST_REPORT.md\`) |`,
  `| Audit du build — paires au-dessus de ${pct(SEUILS_AUDIT.similariteAvertissement)} | ${rapport.similarites.filter((s) => guideParChemin.get(s.a)?.lot || guideParChemin.get(s.b)?.lot).length} |`,
  `| Audit du build — paire la plus proche où figure une page de la série | ${pct(pairesHtml[0].score)} : \`${pairesHtml[0].a}\` ↔ \`${pairesHtml[0].b}\` |`,
  `| Contrôle champ par champ — paires comparées | ${similSerie.paires} |`,
  `| Contrôle champ par champ — blocages | **${similSerie.blocages.length}** |`,
  `| Contrôle champ par champ — alertes | ${similSerie.alertes.length} |`,
  `| Phrases reprises à l’identique entre deux pages | ${similSerie.reprises.length} |`,
  '',
  'Le contenu principal du HTML comprend le gabarit commun à tous les guides — intertitres fixes, colonnes de liens, appel final. Les pourcentages de l’audit du build ont donc un plancher qui ne doit rien au texte des pages.\n',
  '## Seuils du contrôle champ par champ\n',
  '| Champ | Mesure | Alerte | Blocage | Maximum observé sur la série | Maximum observé sur les guides déjà en ligne |',
  '| --- | --- | --- | --- | --- | --- |',
  ...[
    ['titre', 'Titre et H1', 'Jaccard des pseudo-racines'],
    ['lede', 'Chapô', 'Jaccard des 3-grammes'],
    ['reponseCourte', 'Réponse courte', 'Jaccard des 3-grammes'],
    ['corps', 'Corps', 'Jaccard des 4-grammes'],
    ['faq', 'FAQ', 'Jaccard des 4-grammes'],
    ['cloture', 'Clôture', 'Jaccard des 3-grammes'],
    ['sujet', 'Sujet de la page', 'Cosinus TF-IDF, texte entier'],
    ['requete', 'Requête principale', 'Jaccard des pseudo-racines'],
  ].map(([cle, nom, mesure]) => `| ${nom} | ${mesure} | ${SEUILS[cle].alerte} | ${SEUILS[cle].blocage} | ${similSerie.maxima[cle]} | ${similAnciens.maxima[cle]} |`),
  '',
  `S’y ajoutent trois règles sans seuil numérique : une **phrase d’au moins ${SEUILS.phraseMots} mots** présente dans deux pages (alerte ; blocage à partir de 14 mots), une **question de FAQ identique** dans deux pages (blocage), et la **requête principale** d’une page reprise telle quelle dans les variantes d’une autre (blocage).\n`,
  'Les seuils ont été posés après avoir mesuré les 104 guides déjà en ligne : les alertes se déclenchent au-dessus de ce que cette bibliothèque produit couramment, les blocages nettement au-delà. La dernière colonne donne ce repère.\n',
  '## Les alertes, une par une\n',
  similSerie.alertes.length ? '| Règle | Pages | Score | Lecture |\n| --- | --- | --- | --- |' : 'Aucune alerte.',
  ...similSerie.alertes.map((c) => `| ${c.regle} | \`${c.a}\` ↔ \`${c.b}\` | ${c.score ?? '—'} | ${cellule(c.detail ? `« ${c.detail} » — ` : '')}${EXPLICATIONS[c.regle] ?? ''} |`),
  '',
  similSerie.blocages.length ? '## Blocages\n\n| Règle | Pages | Détail |\n| --- | --- | --- |' : '',
  ...similSerie.blocages.map((c) => `| ${c.regle} | \`${c.a}\` ↔ \`${c.b}\` | ${cellule(c.detail)} |`),
  '',
  '## Corrections faites pendant la rédaction\n',
  'Le premier passage du contrôle avait relevé, sur les pages de la série :\n',
  '- deux questions de FAQ identiques à des questions de pages existantes (« Quelle longueur ? », « Faut-il un outil particulier ? ») ;',
  '- un intertitre repris mot pour mot d’une page existante (« Ce qui se délègue, et ce qui ne se délègue pas »).\n',
  'Les trois ont été reformulés. À cette occasion, quarante et une questions de FAQ de la série ont été réécrites pour se suffire à elles-mêmes : « Qui relit ? » est devenue « Qui relit un courrier dicté ? ». Une question lisible hors de sa page est aussi celle qu’un moteur de réponse peut citer.\n',
  '## Ce que le contrôle relève sur les pages déjà en ligne\n',
  `Lancé sur les seuls guides existants, le contrôle relève ${similAnciens.blocages.length} blocage(s) et ${similAnciens.alertes.length} alerte(s). Ils ne concernent pas la série et **n’ont pas été corrigés** : ce sont des pages publiées, que cette mission ne devait pas modifier. Ils sont consignés pour une passe ultérieure.\n`,
  '| Règle | Pages | Détail |',
  '| --- | --- | --- |',
  ...similAnciens.blocages.map((c) => `| ${c.regle} | \`${c.a}\` ↔ \`${c.b}\` | ${cellule(c.detail)} |`),
  ...similAnciens.alertes.filter((c) => c.regle !== 'requete-proche').map((c) => `| ${c.regle} | \`${c.a}\` ↔ \`${c.b}\` | ${cellule(c.detail || String(c.score))} |`),
  '',
  `Les ${similAnciens.alertes.filter((c) => c.regle === 'requete-proche').length} alertes « requête proche » entre pages existantes tiennent toutes à un pilier dont la requête, très générale, partage ses mots avec les pages de son dossier.\n`,
  '## Voisinages : la page la plus proche de chacune\n',
  'Pour chaque page de la série, la page de la bibliothèque dont le vocabulaire est le plus voisin (cosinus TF-IDF sur le texte entier).\n',
  '| Page de la série | Page la plus proche | Cosinus |',
  '| --- | --- | --- |',
  ...similSerie.voisins.filter((v) => v.serie).sort((a, b) => b.score - a.score).map((v) => `| \`${v.slug}\` | \`${v.voisin}\` | ${v.score.toFixed(2)} |`),
  '',
  '## Les dix paires de HTML les plus proches\n',
  'Contenu principal du HTML servi, 5-grammes, paires où figure au moins une page de la série.\n',
  '| Page | Page | Part commune |',
  '| --- | --- | --- |',
  ...pairesHtml.slice(0, 10).map((p) => `| \`${p.a}\` | \`${p.b}\` | ${pct(p.score)} |`),
  '',
].join('\n');

// ══════════════════════════════════════════════════════════════════════════
// 11 — Liste de relecture humaine
// ══════════════════════════════════════════════════════════════════════════

const fautes = new Map();
for (const b of rapport.blocages) fautes.set(b.chemin, [...(fautes.get(b.chemin) ?? []), b.regle]);
const relecture = (g) => {
  const relue = dateDeRelecture(`/guides/${g.slug}`);
  const validee = validationDuProprietaire(`/guides/${g.slug}`);
  const etats = [relue && `RELUE PAR BRITTANY DREANO le ${relue}`, validee && `VALIDÉE PAR LE PROPRIÉTAIRE le ${validee.date}`].filter(Boolean);
  return etats.length ? etats.join(' ; ') : 'EN ATTENTE';
};
const REGLEMENTAIRE = new Set(serie.filter((g) => g.sources?.length).map((g) => g.slug));

const doc11 = [
  enTete('11 — Liste de relecture humaine', `Les ${serie.length} pages de la série. **Validées par le propriétaire du site : ${validees.length}. Relues par Brittany Dreano : ${relues.length}. En ligne : ${enLigne.length}.**`),
  '## Ce que disent les quatre statuts\n',
  '| Statut | Ce qu’il affirme | Où il est enregistré |',
  '| --- | --- | --- |',
  `| RELECTURE_IA | Contrôles faits par l’outil qui a rédigé les pages : chaque règle citée confrontée à sa source officielle au moment de l’écriture, chaque phrase qui décrit BrittAssist confrontée aux conditions générales publiées, recherche de répétitions et de fautes de typographie. Ce n’est ni une seconde lecture intégrale, ni une relecture par une personne | Ce document. **FAITE** pour les ${serie.length} pages |`,
  '| QA automatique | La page passe le gate éditorial, l’audit du build et le contrôle de similarité | `09_TEST_REPORT.md` |',
  '| VALIDATION DU PROPRIÉTAIRE | Le propriétaire du site déclare avoir vérifié la page et l’accepte. Le registre garde son nom, la date et ses mots, tels quels ; il ne dit pas ce que la vérification a couvert. Sans effet sur le site : la page n’est ni mise en ligne, ni présentée comme relue | `src/data/relectures.mjs`, liste `validations` |',
  '| RELECTURE PAR BRITTANY DREANO | Brittany Dreano a lu la page en entier et ouvert ses sources. C’est la seule relecture que le site affiche | `src/data/relectures.mjs`, objet `relectures` — et nulle part ailleurs |\n',
  'Ces quatre statuts ne se remplacent pas. Une page relue par l’outil et passée au contrôle automatique **n’est pas une page relue par une personne**. Une page validée par le propriétaire **n’est pas une page relue par Brittany Dreano**.\n',
  'Dans les rapports de cette série, `RELECTURE_HUMAINE = FAITE` désigne l’un ou l’autre des deux derniers statuts, et dit toujours lequel.\n',
  '## Deux registres dans un même fichier\n',
  'Inscrire une page dans l’objet `relectures` de `src/data/relectures.mjs` a trois effets visibles : la mention « **Relu par Brittany Dreano** le … » s’affiche sous la réponse courte, les données structurées déclarent `reviewedBy` avec Brittany Dreano pour auteur de la relecture, et le `<lastmod>` du sitemap prend cette date.\n',
  'Cet objet n’enregistre qu’une date : le nom de la personne est fixé par le gabarit. **Une validation donnée par une autre personne que Brittany Dreano ne peut donc pas y être inscrite** sans publier une affirmation inexacte en son nom. Elle s’inscrit dans la liste `validations` du même fichier, qui porte le nom de la personne et ses mots, et qu’aucun gabarit ne lit. Deux voies, donc :\n',
  '1. Brittany Dreano relit le lot : ses pages sont inscrites dans `relectures`, et le site l’affiche.',
  '2. Le propriétaire du site valide le lot sans que Brittany Dreano l’ait relu : la validation est inscrite dans `validations`. Le jour où le lot est publié, ses pages sont inscrites dans `publications.mjs` — en ligne, sans mention de relecture —, comme la série d’octobre 2026.\n',
  'Afficher sur le site le nom d’un autre relecteur est possible, mais c’est une modification du gabarit et des données structurées : elle n’a pas été faite sans demande.\n',
  '## Ce qu’une relecture doit regarder\n',
  '1. **Le ton** : est-ce ainsi que BrittAssist parle à ses clients ?',
  '2. **Ce qui est dit de BrittAssist** : chaque phrase qui décrit l’offre reprend les conditions générales ou le site. Vérifier qu’elle est toujours vraie.',
  `3. **Les règles citées** : ${REGLEMENTAIRE.size} pages citent une source officielle. Ouvrir chaque lien de la rubrique « Références », vérifier que la page dit bien ce que la source dit.`,
  '4. **Les exemples** : tous sont illustratifs. Aucun ne doit pouvoir être lu comme un cas client.',
  '5. **Ce qui manque** : une limite du métier que la page devrait dire, une situation qu’elle ignore.\n',
  ...Object.keys(LOTS).flatMap((l) => {
    const pages = serie.filter((g) => g.lot === l).sort((a, b) => candidatParSlug.get(a.slug).id.localeCompare(candidatParSlug.get(b.slug).id));
    return [
      `## Lot ${l} — ${pages.length} pages\n`,
      '| # | Slug | Title | Intention | Cannibalisation | Sources | QA | Validation et relecture |',
      '| --- | --- | --- | --- | --- | --- | --- | --- |',
      ...pages.map((g) => {
        const c = candidatParSlug.get(g.slug);
        const p = parChemin.get(`/guides/${g.slug}`);
        const qa = fautes.get(p.chemin)?.length ? `FAIL : ${fautes.get(p.chemin).join(', ')}` : `PASS — ${p.mots} mots, ${p.entrants} liens entrants`;
        return `| ${ordreDuPlan.indexOf(g) + 1} | \`${g.slug}\` | ${cellule(g.title)} | ${g.cadrage.intention} | ${c.risque} — proche de \`${c.proche.replace('/guides/', '')}\` | ${g.sources?.length ? `${g.sources.length} source(s) officielle(s) à ouvrir` : 'Aucune règle citée'} | ${qa} | ${relecture(g)} |`;
      }),
      '',
    ];
  }),
  '## Valeurs possibles de la dernière colonne\n',
  '- **EN ATTENTE** : personne n’a validé ni relu la page.',
  '- **VALIDÉE PAR LE PROPRIÉTAIRE** : la page figure dans la liste `validations` de `relectures.mjs`, à la date indiquée. Le site n’affiche rien.',
  '- **RELUE PAR BRITTANY DREANO** : la page figure dans l’objet `relectures`, à la date indiquée. Le site affiche la mention.',
  '- **À CORRIGER** et **REJETÉE** ne sont pas des états du registre : ce sont des décisions de relecture. Elles se notent ici, à la main, dans la section suivante, jusqu’à ce que la page soit corrigée ou retirée de la série.\n',
  '## Décisions de relecture\n',
  'Les décisions (À CORRIGER, REJETÉE) et le détail de chaque validation du propriétaire se notent dans `docs/seo-secretariat-50/data/decisions-de-relecture.md`. Ce fichier s’écrit à la main ; il est repris ici à chaque régénération.\n',
  existsSync(`${DOSSIER_DOCS}/data/decisions-de-relecture.md`) ? readFileSync(`${DOSSIER_DOCS}/data/decisions-de-relecture.md`, 'utf8') : '_Aucune décision enregistrée à ce jour._',
].join('\n');

// ── Écriture ──────────────────────────────────────────────────────────────
mkdirSync(`${DOSSIER_DOCS}/data`, { recursive: true });
const fichiers = {
  '01_EXISTING_CONTENT_INVENTORY.md': doc01,
  '02_CANDIDATE_POOL.md': doc02,
  '03_CANNIBALIZATION_MATRIX.md': doc03,
  '04_FINAL_50_PAGE_PLAN.md': doc04,
  '05_PUBLICATION_PLAN.md': doc05,
  '06_INTERNAL_LINKING_MAP.md': doc06,
  '07_SIMILARITY_REPORT.md': doc07,
  '11_HUMAN_REVIEW_CHECKLIST.md': doc11,
};
for (const [nom, contenu] of Object.entries(fichiers)) writeFileSync(`${DOSSIER_DOCS}/${nom}`, contenu.replace(/\n{3,}/g, '\n\n').trimEnd() + '\n');
writeFileSync(`${DOSSIER_DOCS}/data/rapprochement-candidats.json`, JSON.stringify([...rapprochements.values()], null, 2) + '\n');
writeFileSync(`${DOSSIER_DOCS}/data/similarite-serie.json`, JSON.stringify({ ...similSerie, pairesHtml: pairesHtml.slice(0, 50) }, null, 2) + '\n');
writeFileSync(
  `${DOSSIER_DOCS}/data/seo-apercu-serie.json`,
  JSON.stringify({ genere: rapport.genere, totaux: rapport.totaux, blocages: rapport.blocages, avertissements: rapport.avertissements, pages: rapport.pages.filter((p) => guideParChemin.get(p.chemin)?.lot || p.chemin === `/guides/${HUB}`) }, null, 2) + '\n',
);

console.log(`docs/seo-secretariat-50 : ${Object.keys(fichiers).length} documents régénérés`);
console.log(`  inventaire : ${inventaire.length} pages · vivier : ${candidats.length} idées, ${retenus.length} retenues · série : ${serie.length} pages`);
console.log(`  similarité (série) : ${similSerie.blocages.length} blocage(s), ${similSerie.alertes.length} alerte(s) · build : ${rapport.totaux.blocages} blocage(s)`);
