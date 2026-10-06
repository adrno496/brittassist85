#!/usr/bin/env node
/**
 * Contrôle de similarité entre fiches — complète le gate éditorial.
 *
 * Le gate éditorial (content-gate.mjs) compare les fiches d'un seul bloc, sur des
 * 4-grammes. Ce script regarde de plus près, champ par champ, et cherche ce qu'un
 * score global ne montre pas :
 *  - des titres ou des H1 trop proches ;
 *  - des chapôs, des réponses courtes, des corps, des FAQ ou des clôtures qui se recoupent ;
 *  - des phrases reprises à l'identique d'une page à l'autre ;
 *  - des questions de FAQ posées deux fois ;
 *  - des pages « quasi synonymes » : vocabulaire différent, même sujet (TF-IDF) ;
 *  - des requêtes principales voisines, ou égales à une variante d'une autre page.
 *
 * Deux usages :
 *   node scripts/similarity-check.mjs                      toute la bibliothèque
 *   node scripts/similarity-check.mjs --serie              seulement les paires où figure un guide de la série (champ `lot`)
 *   node scripts/similarity-check.mjs --strict             code de sortie 1 s'il reste un blocage
 *   node scripts/similarity-check.mjs --json r.json --md r.md
 *   node scripts/similarity-check.mjs --candidats c.json --json r.json
 *       mode « idées de pages » : chaque candidat (requête, variantes, problème) est rapproché
 *       de la page existante la plus proche, par deux mesures lexicales.
 *
 * Zéro dépendance. Comme le gate éditorial, il charge les fichiers .ts de src/data :
 * Node 22.18 ou plus récent est nécessaire.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

/** Seuils. Calibrés sur les 104 guides déjà en ligne (voir docs/seo-secretariat-50/07). */
export const SEUILS = {
  /** Pseudo-racines communes entre deux titres (Jaccard). */
  titre: { alerte: 0.5, blocage: 0.8 },
  /** 3-grammes communs, champs courts. */
  lede: { alerte: 0.12, blocage: 0.4 },
  reponseCourte: { alerte: 0.12, blocage: 0.4 },
  cloture: { alerte: 0.3, blocage: 0.7 },
  /** 4-grammes communs, champs longs. */
  corps: { alerte: 0.08, blocage: 0.3 },
  faq: { alerte: 0.08, blocage: 0.3 },
  /** Cosinus TF-IDF sur le texte entier : même sujet, mots différents. */
  sujet: { alerte: 0.45, blocage: 0.7 },
  /** Requêtes principales : pseudo-racines communes (Jaccard). */
  requete: { alerte: 0.6, blocage: 0.85 },
  /** Une phrase d'au moins tant de mots, présente dans deux pages. */
  phraseMots: 9,
  /** Une question de FAQ reprise : pseudo-racines communes (Jaccard). */
  question: 0.8,
};

const MOTS_VIDES = new Set(
  `a au aux avec ce ces cet cette ceci cela celle celles celui ceux chez comme d dans de des du elle elles en entre est et eux il ils je l la le les leur leurs lui ma mais me mes moi mon n ne ni nos notre nous on ont ou où par pas plus pour qu que quel quelle quelles quels qui s sa sans se ses si son sont sur ta te tes toi ton tous tout toute toutes tu un une vos votre vous y à été être avoir fait faire peut peuvent doit doivent sera seront cela c j m t afin ainsi alors aussi autre autres aux bien car chaque comment dont donc encore ici là lorsque même moins non peu puis quand quoi soit tant très trop vers voici voilà déjà depuis dès deux trois selon ainsi leur faut`
    .split(/\s+/),
);

export const normaliser = (t) =>
  String(t ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

/** Mots, sans accents ni ponctuation. */
export const mots = (t) => normaliser(t).split(' ').filter(Boolean);

/** Mots porteurs de sens, ramenés à une pseudo-racine de six lettres : « externalisé », « externaliser » → « extern ». */
export const racines = (t) =>
  mots(t)
    .filter((m) => m.length > 2 && !MOTS_VIDES.has(m))
    .map((m) => m.slice(0, 6));

export function grammes(t, n) {
  const m = mots(t);
  const s = new Set();
  for (let i = 0; i + n <= m.length; i++) s.add(m.slice(i, i + n).join(' '));
  return s;
}

export function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  const [petit, grand] = a.size < b.size ? [a, b] : [b, a];
  let commun = 0;
  for (const x of petit) if (grand.has(x)) commun++;
  return commun / (a.size + b.size - commun);
}

/** Phrases d'un texte, assez longues pour qu'une reprise ne soit pas un hasard. */
export function phrases(t, minMots = SEUILS.phraseMots) {
  return String(t ?? '')
    .split(/(?<=[.!?…])\s+|\n+/)
    .map((p) => normaliser(p))
    .filter((p) => p.split(' ').length >= minMots);
}

// ── TF-IDF ────────────────────────────────────────────────────────────────

/** Vecteurs TF-IDF normés d'un ensemble de textes. Renvoie aussi de quoi projeter un texte extérieur. */
export function tfidf(textes) {
  const sacs = textes.map((t) => {
    const sac = new Map();
    for (const r of racines(t)) sac.set(r, (sac.get(r) ?? 0) + 1);
    return sac;
  });
  const df = new Map();
  for (const sac of sacs) for (const r of sac.keys()) df.set(r, (df.get(r) ?? 0) + 1);
  const idf = (r) => Math.log((1 + textes.length) / (1 + (df.get(r) ?? 0))) + 1;
  const vecteur = (sac) => {
    const v = new Map();
    let norme = 0;
    for (const [r, n] of sac) {
      const poids = (1 + Math.log(n)) * idf(r);
      v.set(r, poids);
      norme += poids * poids;
    }
    norme = Math.sqrt(norme) || 1;
    for (const [r, p] of v) v.set(r, p / norme);
    return v;
  };
  return {
    vecteurs: sacs.map(vecteur),
    projeter: (t) => {
      const sac = new Map();
      for (const r of racines(t)) sac.set(r, (sac.get(r) ?? 0) + 1);
      return vecteur(sac);
    },
  };
}

export function cosinus(a, b) {
  const [petit, grand] = a.size < b.size ? [a, b] : [b, a];
  let s = 0;
  for (const [r, p] of petit) s += p * (grand.get(r) ?? 0);
  return s;
}

// ── Lecture d'une fiche ───────────────────────────────────────────────────

const texteDesBlocs = (g) =>
  g.sections
    .flatMap((s) => [
      s.h2,
      ...s.blocs.flatMap((b) => [
        b.h3 ?? '',
        ...(b.paragraphes ?? []),
        ...(b.liste ?? []),
        ...(b.etapes ?? []),
        ...(b.tableau ? [b.tableau.legende, ...b.tableau.colonnes, ...b.tableau.lignes.flat()] : []),
        ...(b.modele ? [b.modele.titre, ...b.modele.lignes] : []),
      ]),
    ])
    .filter(Boolean);

/** Les champs comparés, et le texte entier. */
export function champsDe(g) {
  const corps = [...texteDesBlocs(g), ...(g.erreurs ?? []), ...(g.limites ?? [])];
  const faq = g.faq.flatMap((f) => [f.q, f.a]);
  return {
    slug: g.slug,
    serie: Boolean(g.lot),
    titre: `${g.title.replace(/ · BrittAssist$/, '')} ${g.h1}`,
    lede: g.lede,
    reponseCourte: g.reponseCourte.join(' '),
    corps: corps.join(' '),
    faq: faq.join(' '),
    cloture: g.cloture,
    questions: g.faq.map((f) => f.q),
    /** Unités de texte, pour la recherche de phrases reprises. */
    unites: [g.lede, ...g.reponseCourte, ...corps, ...faq, g.cloture],
    tout: [g.h1, g.lede, ...g.reponseCourte, ...corps, ...faq, g.cloture].join(' '),
    motCle: g.cadrage?.motCle ?? null,
    variantes: g.cadrage?.variantes ?? [],
    reperes: [g.slug, g.title, g.h1, g.nom, g.cadrage?.motCle ?? '', ...(g.cadrage?.variantes ?? [])].join(' '),
  };
}

// ── Contrôle de la bibliothèque ───────────────────────────────────────────

/**
 * @param {object[]} guides fiches au format Guide
 * @param {{ serie?: boolean }} options serie : ne garder que les paires où figure un guide de la série
 */
export function controler(guides, { serie = false } = {}) {
  const fiches = guides.map(champsDe);
  const index = tfidf(fiches.map((f) => f.tout));
  const empreintes = fiches.map((f) => ({
    titre: new Set(racines(f.titre)),
    lede: grammes(f.lede, 3),
    reponseCourte: grammes(f.reponseCourte, 3),
    cloture: grammes(f.cloture, 3),
    corps: grammes(f.corps, 4),
    faq: grammes(f.faq, 4),
    requete: f.motCle ? new Set(racines(f.motCle)) : new Set(),
  }));

  const constats = [];
  const noter = (gravite, regle, a, b, score, detail = '') => constats.push({ gravite, regle, a, b, score: score === null ? null : Number(score.toFixed(3)), detail });
  const maxima = { titre: 0, lede: 0, reponseCourte: 0, cloture: 0, corps: 0, faq: 0, sujet: 0, requete: 0 };
  const voisins = fiches.map(() => ({ slug: null, score: 0 }));
  let paires = 0;

  for (let i = 0; i < fiches.length; i++) {
    for (let j = i + 1; j < fiches.length; j++) {
      const a = fiches[i];
      const b = fiches[j];
      const sujet = cosinus(index.vecteurs[i], index.vecteurs[j]);
      // Le voisin le plus proche se cherche dans toute la bibliothèque, même en mode --serie.
      if (sujet > voisins[i].score) voisins[i] = { slug: b.slug, score: sujet };
      if (sujet > voisins[j].score) voisins[j] = { slug: a.slug, score: sujet };
      if (serie && !a.serie && !b.serie) continue;
      paires++;

      const scores = { sujet };
      for (const champ of ['titre', 'lede', 'reponseCourte', 'cloture', 'corps', 'faq', 'requete']) scores[champ] = jaccard(empreintes[i][champ], empreintes[j][champ]);
      for (const [champ, score] of Object.entries(scores)) {
        if (score > maxima[champ]) maxima[champ] = score;
        const seuil = SEUILS[champ];
        if (score >= seuil.blocage) noter('blocage', `${champ}-proche`, a.slug, b.slug, score);
        else if (score >= seuil.alerte) noter('alerte', `${champ}-proche`, a.slug, b.slug, score);
      }

      // Requête principale d'une page reprise telle quelle parmi les variantes de l'autre.
      for (const [x, y] of [[a, b], [b, a]]) {
        if (x.motCle && y.variantes.some((v) => normaliser(v) === normaliser(x.motCle))) noter('blocage', 'requete-en-variante', x.slug, y.slug, null, `« ${x.motCle} » figure dans les variantes de ${y.slug}`);
      }

      // Questions de FAQ posées deux fois.
      for (const qa of a.questions) for (const qb of b.questions) {
        const score = jaccard(new Set(racines(qa)), new Set(racines(qb)));
        if (normaliser(qa) === normaliser(qb)) noter('blocage', 'question-identique', a.slug, b.slug, 1, qa);
        else if (score >= SEUILS.question) noter('alerte', 'question-voisine', a.slug, b.slug, score, `« ${qa} » / « ${qb} »`);
      }
    }
  }

  // Phrases reprises à l'identique dans deux pages.
  const vues = new Map();
  fiches.forEach((f) => {
    const propres = new Set(f.unites.flatMap((u) => phrases(u)));
    for (const p of propres) vues.set(p, [...(vues.get(p) ?? []), f]);
  });
  const reprises = [];
  for (const [phrase, pages] of vues) {
    if (pages.length < 2) continue;
    if (serie && !pages.some((p) => p.serie)) continue;
    reprises.push({ phrase, pages: pages.map((p) => p.slug) });
    // Une phrase longue reprise mot pour mot est un blocage ; une phrase courte, une alerte.
    noter(phrase.split(' ').length >= 14 ? 'blocage' : 'alerte', 'phrase-reprise', pages[0].slug, pages[1].slug, null, phrase);
  }

  constats.sort((x, y) => (x.gravite === y.gravite ? (y.score ?? 0) - (x.score ?? 0) : x.gravite === 'blocage' ? -1 : 1));
  return {
    genere: new Date().toISOString(),
    seuils: SEUILS,
    perimetre: serie ? 'paires où figure un guide de la série' : 'toute la bibliothèque',
    fiches: fiches.length,
    serie: fiches.filter((f) => f.serie).length,
    paires,
    maxima: Object.fromEntries(Object.entries(maxima).map(([k, v]) => [k, Number(v.toFixed(3))])),
    blocages: constats.filter((c) => c.gravite === 'blocage'),
    alertes: constats.filter((c) => c.gravite === 'alerte'),
    reprises,
    voisins: fiches.map((f, i) => ({ slug: f.slug, serie: f.serie, voisin: voisins[i].slug, score: Number(voisins[i].score.toFixed(3)) })),
  };
}

// ── Mode « idées de pages » ───────────────────────────────────────────────

/**
 * Rapproche des idées de pages de la bibliothèque existante.
 * Deux mesures lexicales, volontairement différentes :
 *  - motsCles : pseudo-racines de la requête et de ses variantes, comparées aux repères de chaque page
 *    (title, H1, nom, requête principale, variantes) — détecte deux pages qui visent les mêmes mots ;
 *  - sujet : cosinus TF-IDF entre la description de l'idée et le texte entier de chaque page —
 *    détecte une page qui traite déjà le sujet avec d'autres mots.
 * @param {{ id: string, requete: string, variantes?: string[], probleme?: string }[]} candidats
 * @param {object[]} guides bibliothèque de référence
 */
export function rapprocher(candidats, guides) {
  const fiches = guides.map(champsDe);
  const index = tfidf(fiches.map((f) => f.tout));
  const reperes = fiches.map((f) => new Set(racines(f.reperes)));
  return candidats.map((c) => {
    const cles = new Set(racines([c.requete, ...(c.variantes ?? [])].join(' ')));
    const requete = new Set(racines(c.requete));
    const vecteur = index.projeter([c.requete, ...(c.variantes ?? []), c.probleme ?? ''].join(' '));
    let motsCles = { slug: null, score: 0 };
    let sujet = { slug: null, score: 0 };
    let couverture = { slug: null, score: 0 };
    fiches.forEach((f, i) => {
      const j = jaccard(cles, reperes[i]);
      if (j > motsCles.score) motsCles = { slug: f.slug, score: j };
      const cos = cosinus(vecteur, index.vecteurs[i]);
      if (cos > sujet.score) sujet = { slug: f.slug, score: cos };
      // Part des mots de la requête principale déjà présents dans les repères d'une page.
      let communs = 0;
      for (const r of requete) if (reperes[i].has(r)) communs++;
      const part = requete.size ? communs / requete.size : 0;
      if (part > couverture.score) couverture = { slug: f.slug, score: part };
    });
    const arrondi = (x) => ({ slug: x.slug, score: Number(x.score.toFixed(3)) });
    return { id: c.id, requete: c.requete, motsCles: arrondi(motsCles), sujet: arrondi(sujet), couverture: arrondi(couverture) };
  });
}

// ── Sorties ───────────────────────────────────────────────────────────────

export function resumer(r, { detail = 15 } = {}) {
  const lignes = [
    `Similarité — ${r.perimetre} : ${r.fiches} fiches (${r.serie} de la série), ${r.paires} paires comparées`,
    `Maxima observés : ${Object.entries(r.maxima).map(([k, v]) => `${k} ${v}`).join(' · ')}`,
    `Blocages : ${r.blocages.length} · alertes : ${r.alertes.length} · phrases reprises : ${r.reprises.length}`,
  ];
  for (const [titre, liste] of [['BLOCAGES', r.blocages], ['ALERTES', r.alertes]]) {
    if (!liste.length) continue;
    lignes.push('', `${titre} :`);
    for (const c of liste.slice(0, detail)) lignes.push(`  ${c.regle.padEnd(22)} ${c.a} ↔ ${c.b}${c.score === null ? '' : ` (${c.score})`}${c.detail ? ` — ${c.detail.slice(0, 110)}` : ''}`);
    if (liste.length > detail) lignes.push(`  … et ${liste.length - detail} autre(s)`);
  }
  return lignes.join('\n');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const option = (nom) => (args.includes(nom) ? args[args.indexOf(nom) + 1] : null);
  const { bibliotheque } = await import('../src/data/bibliotheque.ts');

  if (option('--candidats')) {
    const candidats = JSON.parse(readFileSync(option('--candidats'), 'utf8'));
    // Les idées se comparent à ce qui existait avant elles : les guides de la série sont écartés de la référence.
    const reference = bibliotheque.filter((g) => !g.lot);
    const resultat = rapprocher(candidats, reference);
    console.log(`${resultat.length} idées rapprochées de ${reference.length} guides existants`);
    if (option('--json')) writeFileSync(option('--json'), JSON.stringify(resultat, null, 2));
    process.exit(0);
  }

  const rapport = controler(bibliotheque, { serie: args.includes('--serie') });
  console.log(resumer(rapport));
  if (option('--json')) writeFileSync(option('--json'), JSON.stringify(rapport, null, 2));
  if (args.includes('--strict') && rapport.blocages.length > 0) process.exit(1);
}
