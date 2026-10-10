/**
 * Rubrique « Articles » — calendrier éditorial et règles de publication.
 *
 * Un article est une fiche Markdown de src/content/articles/<slug>.md (schéma :
 * src/content.config.ts). Ce module ne lit aucun fichier : il dit ce qu'une fiche
 * doit respecter. Il est appelé par le gabarit pendant le build (un article inscrit
 * au registre qui enfreint une règle fait échouer le build), par
 * scripts/articles-check.mjs et par les tests.
 *
 * Ce qui décide de la mise en ligne reste le registre commun du site :
 * src/data/publications.mjs (publié sans relecture) ou src/data/relectures.mjs
 * (relu par Brittany Dreano). Le champ `editorialStatus` de la fiche suit le
 * travail éditorial ; il doit dire « PUBLIE » si et seulement si la page est
 * inscrite, et le contrôle le vérifie.
 *
 * Quatre dates qu'il ne faut jamais confondre :
 *  - periodeDebut / periodeFin : la semaine éditoriale couverte ;
 *  - dateEvenement : le jour où l'actualité a eu lieu (publication, annonce…) ;
 *  - createdAt : le jour où la fiche a été rédigée ;
 *  - datePublished : le jour où la page a réellement été mise en ligne.
 * Un article écrit en octobre sur une actualité de janvier est publié en octobre.
 */
import { INTERDITS, normaliser } from './regles-editoriales.mjs';

export const CATEGORIES = [
  { id: 'formalites', nom: 'Formalités et administration' },
  { id: 'facturation', nom: 'Facturation et trésorerie' },
  { id: 'social', nom: 'Social et emploi' },
  { id: 'fiscalite', nom: 'Fiscalité' },
  { id: 'donnees-securite', nom: 'Données et cybersécurité' },
  { id: 'outils-ia', nom: 'Outils et IA' },
  { id: 'deplacements', nom: 'Déplacements' },
  { id: 'territoire', nom: 'Vendée et Pays de la Loire' },
];
export const IDS_CATEGORIES = CATEGORIES.map((c) => c.id);
export const nomCategorie = (id) => CATEGORIES.find((c) => c.id === id)?.nom ?? id;

/** États d'une fiche d'article. Une fiche n'existe qu'à partir du premier brouillon. */
export const STATUTS_FICHE = ['SOURCES_A_VERIFIER', 'BROUILLON', 'A_RELIRE', 'QA_PASS', 'APPROUVE', 'PUBLIE'];

/** États d'un créneau du plan éditorial (docs/articles/plan-editorial-2026.json). */
export const STATUTS_PLAN = [
  'A_RECHERCHER', 'SOURCES_INSUFFISANTES', 'SOURCES_A_VERIFIER', 'BROUILLON', 'A_RELIRE',
  'QA_PASS', 'APPROUVE', 'PUBLIE', 'DEPLOIEMENT_NON_CONFIRME', 'EN_LIGNE_VERIFIE',
];

export const TYPES_SOURCE = ['primaire', 'officielle', 'presse', 'autre'];

// ── Calendrier ────────────────────────────────────────────────────────────

/** Premier créneau : jeudi 1er janvier 2026. Un créneau tous les sept jours. */
export const DEBUT_PROGRAMME = '2026-01-01';
/** Le programme rétrospectif compte 41 créneaux, évalués au 10 octobre 2026. */
export const CRENEAUX_RETROSPECTIFS = 41;
export const FIN_PROGRAMME_RETROSPECTIF = '2026-10-10';

const JOUR = 86_400_000;
const ISO = /^\d{4}-\d{2}-\d{2}$/;

/** Vrai pour une date calendaire réelle au format AAAA-MM-JJ (le 2026-02-30 est refusé). */
export function estDateIso(valeur) {
  if (typeof valeur !== 'string' || !ISO.test(valeur)) return false;
  const d = new Date(`${valeur}T00:00:00Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === valeur;
}

export function ajouterJours(iso, n) {
  return new Date(Date.parse(`${iso}T00:00:00Z`) + n * JOUR).toISOString().slice(0, 10);
}

/** « 1 » → « S01 » ; « 120 » → « S120 ». */
export const idCreneau = (numero) => `S${String(numero).padStart(2, '0')}`;

/** Créneau numéro n : du jeudi de départ à la veille du créneau suivant (S42 commence le 15 octobre 2026). */
export function creneau(numero) {
  if (!Number.isInteger(numero) || numero < 1) throw new Error(`Numéro de créneau invalide : ${numero}`);
  const debut = ajouterJours(DEBUT_PROGRAMME, (numero - 1) * 7);
  return { id: idCreneau(numero), numero, debut, fin: ajouterJours(debut, 6) };
}

/**
 * Les 41 créneaux du programme rétrospectif 2026. Le dernier s'arrête au
 * 10 octobre 2026, date à laquelle la période a été évaluée ; un article de S41
 * peut déclarer l'une ou l'autre fin (10 ou 14 octobre).
 */
export function programmeRetrospectif() {
  return Array.from({ length: CRENEAUX_RETROSPECTIFS }, (_, i) => {
    const c = creneau(i + 1);
    return c.numero === CRENEAUX_RETROSPECTIFS ? { ...c, fin: FIN_PROGRAMME_RETROSPECTIF } : c;
  });
}

/** Fins de période acceptées pour un créneau. */
export function finsAdmises(numero) {
  const c = creneau(numero);
  return numero === CRENEAUX_RETROSPECTIFS ? [FIN_PROGRAMME_RETROSPECTIF, c.fin] : [c.fin];
}

/** Créneau standard contenant une date, ou null avant le 1er janvier 2026. */
export function creneauDeDate(iso) {
  const jours = Math.floor((Date.parse(`${iso}T00:00:00Z`) - Date.parse(`${DEBUT_PROGRAMME}T00:00:00Z`)) / JOUR);
  return jours < 0 ? null : creneau(Math.floor(jours / 7) + 1);
}

export function numeroDeCreneau(id) {
  const m = /^S(\d{2,})$/.exec(String(id));
  return m ? Number(m[1]) : null;
}

// ── Lecture du contenu ────────────────────────────────────────────────────

/** Texte lisible d'un corps Markdown : sans balisage, sans URL. */
export function texteDuCorps(corps) {
  return String(corps ?? '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[*_`>|-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function nombreDeMots(corps) {
  const t = texteDuCorps(corps);
  return t ? t.split(' ').length : 0;
}

/** Temps de lecture, calculé sur le corps réel à 200 mots par minute. */
export function tempsDeLecture(corps) {
  return Math.max(1, Math.round(nombreDeMots(corps) / 200));
}

/** Intertitres de niveau 2 du corps, dans l'ordre. */
export function intertitres(corps) {
  return [...String(corps ?? '').matchAll(/^##\s+(.+?)\s*$/gm)].map((m) => m[1]);
}

/** Liens Markdown du corps : [texte](cible). */
export function liensDuCorps(corps) {
  return [...String(corps ?? '').matchAll(/(?<!!)\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)].map((m) => ({ texte: m[1], href: m[2] }));
}

export const cheminArticle = (slug) => `/articles/${slug}`;

/** Date du jour à Paris, AAAA-MM-JJ : c'est elle qui borne « pas de date future ». */
export function aujourdhuiParis(maintenant = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit' }).format(maintenant);
}

/** Un article publié après la fin de sa semaine est une rétrospective, et le dit. */
export function estRetrospectif(data, aujourdhui) {
  return (data.datePublished ?? aujourdhui) > data.periodeFin;
}

// ── Contrôle d'une fiche ──────────────────────────────────────────────────

const INTERTITRES_REQUIS = [
  [/^ce que cela change pour vous$/i, '« Ce que cela change pour vous »'],
  [/^checklist\b/i, '« Checklist … »'],
];
const ANCRES_GENERIQUES = new Set(['cliquez ici', 'ici', 'en savoir plus', 'lire la suite', 'voir plus', 'lien', 'cette page']);

/**
 * Contrôle une fiche d'article.
 *
 * @param {{ slug: string, data: Record<string, any>, corps: string }} article
 * @param {object} ctx
 * @param {string} ctx.aujourdhui            date du contrôle, AAAA-MM-JJ
 * @param {(chemin: string) => string|null} ctx.datePublication   registre publications.mjs
 * @param {(chemin: string) => string|null} ctx.dateRelecture     registre relectures.mjs
 * @param {(chemin: string) => {par: string, date: string}|null} ctx.validation   validations du propriétaire
 * @param {(chemin: string) => boolean} [ctx.routeExiste]   route interne connue (lien du corps)
 * @param {(slug: string) => boolean} ctx.guidePublie
 * @param {(slug: string) => boolean} ctx.articleExiste
 * @returns {{ blocages: {regle: string, detail: string}[], avertissements: {regle: string, detail: string}[], inscrit: boolean, publiable: boolean }}
 */
export function controlerArticle({ slug, data, corps }, ctx) {
  const blocages = [];
  const avertissements = [];
  const bloquer = (regle, detail = '') => blocages.push({ regle, detail });
  const avertir = (regle, detail = '') => avertissements.push({ regle, detail });
  const chemin = cheminArticle(slug);
  const d = data ?? {};

  // Identité et métadonnées.
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug) || slug.length > 90) bloquer('slug-invalide', slug);
  if (!d.title?.endsWith(' · BrittAssist')) bloquer('title-sans-marque', d.title ?? '');
  if ((d.title ?? '').length > 70) bloquer('title-long', `${d.title.length} caractères`);
  if ((d.description ?? '').length < 70 || (d.description ?? '').length > 165) bloquer('description-longueur', `${(d.description ?? '').length} caractères`);
  if (!d.h1?.trim()) bloquer('h1-absent');
  if (!d.summary?.trim()) bloquer('chapo-absent');
  if (!d.intention?.trim()) bloquer('intention-absente');
  if (d.keywords && new Set(d.keywords.map(normaliser)).size !== d.keywords.length) bloquer('mots-cles-doublons');
  if ((d.keywords?.length ?? 0) > 8) bloquer('mots-cles-trop-nombreux', `${d.keywords.length} : huit au plus`);
  if (d.image && !d.imageAlt?.trim()) bloquer('image-sans-alt', d.image);
  if (d.image && !String(d.image).startsWith('/images/')) bloquer('image-hors-site', d.image);

  // Dates : format, semaine, chronologie.
  for (const champ of ['periodeDebut', 'periodeFin', 'dateEvenement', 'createdAt', 'datePublished', 'dateModified', 'dateEffet', 'reviewedAt']) {
    if (d[champ] !== undefined && !estDateIso(d[champ])) bloquer('date-invalide', `${champ} : ${d[champ]}`);
  }
  const numero = numeroDeCreneau(d.semaineEditoriale);
  if (!numero) bloquer('semaine-invalide', String(d.semaineEditoriale));
  else {
    const c = creneau(numero);
    if (d.periodeDebut !== c.debut || !finsAdmises(numero).includes(d.periodeFin)) bloquer('semaine-incoherente', `${c.id} couvre ${c.debut} → ${c.fin}, la fiche ${d.periodeDebut} → ${d.periodeFin}`);
  }
  if (d.dateEvenement && (d.dateEvenement < d.periodeDebut || d.dateEvenement > d.periodeFin)) bloquer('evenement-hors-semaine', `${d.dateEvenement} hors ${d.periodeDebut} → ${d.periodeFin}`);
  if (d.createdAt > ctx.aujourdhui) bloquer('creation-future', d.createdAt);
  if (d.dateEvenement && d.createdAt < d.dateEvenement) bloquer('creation-avant-evenement', `${d.createdAt} < ${d.dateEvenement}`);

  // Registre de publication : seule source de vérité de la mise en ligne.
  const publieLe = ctx.datePublication(chemin);
  const reluLe = ctx.dateRelecture(chemin);
  const inscrit = Boolean(publieLe || reluLe);
  const enLigneDepuis = publieLe ?? reluLe;
  if (inscrit) {
    if (d.editorialStatus !== 'PUBLIE') bloquer('statut-incoherent', `inscrite au registre, statut ${d.editorialStatus}`);
    if (d.datePublished !== enLigneDepuis) bloquer('date-publication-incoherente', `registre ${enLigneDepuis}, fiche ${d.datePublished ?? 'absente'}`);
    if (enLigneDepuis > ctx.aujourdhui) bloquer('publication-future', enLigneDepuis);
    if (enLigneDepuis < d.createdAt) bloquer('publication-avant-redaction', `${enLigneDepuis} < ${d.createdAt}`);
  } else {
    if (d.editorialStatus === 'PUBLIE') bloquer('statut-incoherent', 'statut PUBLIE sans inscription au registre');
    if (d.datePublished) bloquer('date-publication-sans-publication', d.datePublished);
  }
  if (d.dateModified && !d.datePublished) bloquer('modification-sans-publication', d.dateModified);
  if (d.dateModified && d.datePublished && d.dateModified < d.datePublished) bloquer('modification-avant-publication', `${d.dateModified} < ${d.datePublished}`);
  if (d.dateModified && d.dateModified > ctx.aujourdhui) bloquer('modification-future', d.dateModified);

  // Relecture et approbation : jamais déclarées sans trace dans relectures.mjs.
  if (d.reviewedAt && d.reviewedAt !== reluLe) bloquer('relecture-non-attestee', `reviewedAt ${d.reviewedAt}, registre ${reluLe ?? 'vide'}`);
  if (reluLe && d.reviewedAt !== reluLe) bloquer('relecture-non-reportee', `registre ${reluLe}, fiche ${d.reviewedAt ?? 'absente'}`);
  const validation = ctx.validation(chemin);
  if (d.approvedBy && validation?.par !== d.approvedBy) bloquer('approbation-non-attestee', `approvedBy ${d.approvedBy} sans validation inscrite`);

  // Sources.
  const sources = d.sources ?? [];
  if (sources.length === 0) bloquer('sources-absentes');
  for (const s of sources) {
    if (!/^https:\/\/[^\s/]+\.[^\s]+$/.test(s.url ?? '')) bloquer('source-url-invalide', String(s.url));
    if (s.ouverte && !s.consulteeLe) bloquer('source-sans-date-de-consultation', s.url);
    if (s.consulteeLe && s.consulteeLe > ctx.aujourdhui) bloquer('consultation-future', `${s.url} : ${s.consulteeLe}`);
    if (!s.ouverte && s.consulteeLe) bloquer('consultation-sans-ouverture', s.url);
    if (s.datePublication && !estDateIso(s.datePublication)) bloquer('date-invalide', `source ${s.url} : ${s.datePublication}`);
  }
  if (new Set(sources.map((s) => s.url)).size !== sources.length) bloquer('source-doublon');
  /** Une source primaire ou officielle, réellement ouverte, publiée au plus tard à la fin de la semaine. */
  const preuve = sources.find((s) => ['primaire', 'officielle'].includes(s.type) && s.ouverte && s.consulteeLe && s.datePublication && s.datePublication <= d.periodeFin);
  const sourcesOuvertes = sources.filter((s) => s.ouverte).length;

  // Fiche inachevée : un squelette de scripts/articles-new.mjs n'est jamais générable tel quel.
  if (/À COMPLÉTER|example\.invalid/.test(JSON.stringify(d) + (corps ?? ''))) bloquer('fiche-inachevee', 'des champs « À COMPLÉTER » subsistent');

  // Corps.
  if (/<\/?[a-z][^>]*>/i.test(corps ?? '')) bloquer('html-dans-le-corps', 'le Markdown ne doit contenir aucune balise HTML');
  if (/^#\s/m.test(corps ?? '')) bloquer('h1-dans-le-corps', 'le titre de la page est le seul h1');
  const h2 = intertitres(corps);
  for (const [motif, nom] of INTERTITRES_REQUIS) if (!h2.some((t) => motif.test(t))) bloquer('rubrique-manquante', nom);
  for (const l of liensDuCorps(corps)) {
    if (/^javascript:/i.test(l.href)) bloquer('lien-dangereux', l.href);
    else if (l.href.startsWith('/')) {
      if (ctx.routeExiste && !ctx.routeExiste(l.href.split('#')[0])) bloquer('lien-vers-route-inconnue', l.href);
    } else if (!/^https:\/\//.test(l.href) && !l.href.startsWith('#')) bloquer('lien-non-https', l.href);
    if (ANCRES_GENERIQUES.has(normaliser(l.texte))) avertir('ancre-generique', l.texte);
  }
  const texte = [d.title, d.description, d.h1, d.summary, texteDuCorps(corps)].join(' ');
  for (const [motif, raison] of INTERDITS) {
    const trouve = texte.match(motif);
    if (trouve) bloquer('formulation-interdite', `${raison} : « ${trouve[0]} »`);
  }
  if (h2.some((t) => /exemple/i.test(t) && !/fictif/i.test(t))) bloquer('exemple-non-signale', 'un exemple inventé se dit « fictif » dans son intertitre');
  const mots = nombreDeMots(corps);
  if (mots < 350) avertir('contenu-mince', `${mots} mots`);

  // Maillage.
  const guides = d.relatedGuides ?? [];
  if (guides.length === 0) bloquer('aucun-guide-lie', 'au moins un guide publié en lien sortant');
  for (const g of guides) if (!ctx.guidePublie(g)) bloquer('guide-lie-non-publie', g);
  for (const a of d.relatedArticles ?? []) {
    if (a === slug) bloquer('lien-vers-soi-meme', a);
    else if (!ctx.articleExiste(a)) bloquer('article-lie-inconnu', a);
  }

  // Conditions propres à la mise en ligne.
  const conditions = [];
  if (!preuve) conditions.push(['preuve-absente', 'aucune source primaire ou officielle ouverte, datée au plus tard de la fin de la semaine']);
  if (d.sensibilite === 'reglementaire' && !reluLe && !validation) conditions.push(['approbation-requise', 'sujet juridique, fiscal ou social : validation du propriétaire ou relecture exigée']);
  if (d.editorialStatus === 'SOURCES_A_VERIFIER') conditions.push(['sources-a-verifier', 'les sources n’ont pas été ouvertes']);
  for (const [regle, detail] of conditions) (inscrit ? bloquer : avertir)(regle, detail);
  if (sourcesOuvertes < 2) avertir('une-seule-source', `${sourcesOuvertes} source(s) ouverte(s) : deux sources indépendantes sont préférables`);

  return { blocages, avertissements, inscrit, publiable: blocages.length === 0 && conditions.length === 0 };
}

/**
 * Contrôles entre fiches : titre, H1, description, intention et semaine uniques.
 * `autres` : pages déjà publiées du site (guides), même forme { slug, title, h1, description, intention }.
 */
export function controlerCollection(articles, autres = []) {
  const blocages = [];
  for (const [champ, lire] of [['title', (x) => x.title], ['h1', (x) => x.h1], ['description', (x) => x.description], ['intention', (x) => x.intention]]) {
    const vus = new Map();
    for (const x of autres) if (lire(x)) vus.set(normaliser(lire(x)), `guide ${x.slug}`);
    for (const a of articles) {
      const cle = normaliser(lire(a.data) ?? '');
      if (!cle) continue;
      if (vus.has(cle)) blocages.push({ slug: a.slug, regle: `${champ}-duplique`, detail: `identique à ${vus.get(cle)}` });
      else vus.set(cle, `article ${a.slug}`);
    }
  }
  const parSemaine = new Map();
  for (const a of articles) {
    const s = a.data.semaineEditoriale;
    if (parSemaine.has(s)) blocages.push({ slug: a.slug, regle: 'semaine-en-double', detail: `${s} déjà traitée par ${parSemaine.get(s)}` });
    else parSemaine.set(s, a.slug);
  }
  return blocages;
}
