/**
 * Statut de publication des pages éditoriales — source unique.
 *
 * Fichier en .mjs : il est lu par la configuration Astro (sitemap), par les
 * gabarits et par les scripts de contrôle.
 */
import { APERCU } from './mode.mjs';
import { relectures } from './relectures.mjs';

// `npm run build:apercu` : génère aussi les pages non relues, en noindex. Voir mode.mjs.
export { APERCU };

/** Deux familles passent par le registre de relecture, plus la page qui décrit la méthode. */
const FAMILLES_RELUES = /^\/(guides|assistante)\/[^/]+$/;
const PAGES_RELUES = new Set(['/methode-editoriale']);

/** Pages en ligne avant la création du registre : leur statut ne change pas. */
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

/** Une page est publiée si elle est hors registre, antérieure au registre, ou relue. */
export function estPubliee(chemin) {
  const c = normaliser(chemin);
  if (!FAMILLES_RELUES.test(c) && !PAGES_RELUES.has(c)) return true;
  return HERITAGE.has(c) || Boolean(relectures[c]);
}

/** Une page est générée si elle est publiée, ou si l'aperçu des brouillons est demandé. */
export function estGeneree(chemin) {
  return estPubliee(chemin) || APERCU;
}

/** Vrai pour une page générée seulement parce que l'aperçu est actif. */
export function estBrouillon(chemin) {
  return !estPubliee(chemin);
}

/**
 * Ne garde que les liens internes dont la cible existe dans le build en cours.
 * Sans cela, une page relue qui cite une page encore en brouillon produirait un lien cassé.
 * @template {{ href: string }} T
 * @param {T[]} liens
 * @returns {T[]}
 */
export function liensVisibles(liens) {
  return liens.filter((l) => !l.href.startsWith('/') || estGeneree(l.href));
}
