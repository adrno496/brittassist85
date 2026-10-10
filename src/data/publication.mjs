/**
 * Statut de publication des pages éditoriales — source unique.
 *
 * Fichier en .mjs : il est lu par la configuration Astro (sitemap), par les
 * gabarits et par les scripts de contrôle.
 */
import { APERCU } from './mode.mjs';
import { publications } from './publications.mjs';
import { relectures, validations } from './relectures.mjs';

// `npm run build:apercu` : génère aussi les pages absentes des deux registres, en noindex. Voir mode.mjs.
export { APERCU };

/**
 * Trois familles passent par les registres (relectures.mjs, publications.mjs), plus la page qui décrit la méthode.
 * Les articles (/articles/<slug>) y sont entrés le 10 octobre 2026 : aucun n'est en ligne sans y être inscrit.
 */
const FAMILLES_RELUES = /^\/(guides|assistante|articles)\/[^/]+$/;
const PAGES_RELUES = new Set(['/methode-editoriale']);

/** Pages en ligne avant la création des registres : leur statut ne change pas. */
const HERITAGE = new Set([
  '/guides/assistante-independante-ou-salariee',
  '/guides/prix-assistante-de-direction-externalisee',
  '/guides/qu-est-ce-qu-un-private-office',
  '/guides/assistante-virtuelle-ou-private-office',
  '/guides/secretariat-externalise',
  '/guides/comment-deleguer',
  '/guides/executive-assistant-role',
  '/guides/confidentialite-assistante-externalisee',
  '/guides/premier-mois-assistante-externalisee',
  '/guides/choisir-assistante-externalisee',
  '/guides/modele-brief-assistante-externalisee',
  '/guides/suivi-demandes-assistante-externalisee',
  '/assistante/artisans-btp',
  '/assistante/dirigeants-pme',
  '/assistante/consultants-independants',
  '/assistante/professions-liberales',
  '/assistante/agents-immobiliers',
  '/assistante/e-commerce',
  '/assistante/dirigeants-multi-societes',
  '/assistante/professionnels-sante',
]);

function normaliser(chemin) {
  return chemin.split('#')[0].replace(/\.html$/, '').replace(/(.)\/$/, '$1') || '/';
}

/** Date de relecture d'une page (AAAA-MM-JJ), ou null. */
export function dateDeRelecture(chemin) {
  return relectures[normaliser(chemin)] ?? null;
}

/**
 * Dernière validation donnée par le propriétaire du site pour une page ({ date, par, declaration, pages }), ou null.
 * Trace interne : elle ne met pas la page en ligne et n'en fait pas une page relue.
 */
export function validationDuProprietaire(chemin) {
  const c = normaliser(chemin);
  return validations.findLast((v) => v.pages.includes(c)) ?? null;
}

/**
 * Date de mise en ligne d'une page publiée sans relecture préalable (AAAA-MM-JJ), ou null.
 * Ne dit rien d'une relecture : seul relectures.mjs en fait foi.
 */
export function datePublicationSansRelecture(chemin) {
  return publications[normaliser(chemin)] ?? null;
}

/**
 * Une page est publiée si elle est hors registre, antérieure aux registres, relue,
 * ou inscrite au registre des publications sans relecture préalable.
 */
export function estPubliee(chemin) {
  const c = normaliser(chemin);
  if (!FAMILLES_RELUES.test(c) && !PAGES_RELUES.has(c)) return true;
  return HERITAGE.has(c) || Boolean(relectures[c]) || Boolean(publications[c]);
}

/** Une page est générée si elle est publiée, ou si l'aperçu des brouillons est demandé. */
export function estGeneree(chemin) {
  return estPubliee(chemin) || APERCU;
}

/** Vrai pour une page générée seulement parce que l'aperçu est actif : jamais indexable. */
export function estBrouillon(chemin) {
  return !estPubliee(chemin);
}

/**
 * Ne garde que les liens internes dont la cible existe dans le build en cours.
 * Sans cela, une page publiée qui cite une page encore en brouillon produirait un lien cassé.
 * @template {{ href: string }} T
 * @param {T[]} liens
 * @returns {T[]}
 */
export function liensVisibles(liens) {
  return liens.filter((l) => !l.href.startsWith('/') || estGeneree(l.href));
}

/** Chemins des articles inscrits dans l'un des deux registres, donc publiés (/articles/<slug>). */
export function articlesInscrits() {
  return [...new Set([...Object.keys(publications), ...Object.keys(relectures)])].filter((c) => /^\/articles\/[^/]+$/.test(c)).sort();
}
