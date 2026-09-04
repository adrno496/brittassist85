/**
 * Dates de dernière modification du contenu — source unique.
 *
 * Elles alimentent deux choses qui ne doivent jamais diverger :
 *  - le <lastmod> de chaque URL du sitemap (astro.config.mjs) ;
 *  - le dateModified du JSON-LD WebPage (BaseLayout.astro).
 *
 * Google se sert du lastmod pour décider s'il vaut la peine de re-télécharger
 * un sitemap. Sans lui, une publication met beaucoup plus longtemps à être vue.
 * En contrepartie, une date doit rester honnête : on ne la pousse à aujourd'hui
 * que lorsqu'on a réellement modifié le contenu de la famille concernée, sinon
 * le signal perd toute valeur et finit ignoré.
 *
 * Fichier volontairement en .mjs : il est importé à la fois par la config Astro
 * et par un composant .astro.
 */

/** Pages historiques : accueil, private-office, services, à propos, contact, prestations. */
export const DATE_SOCLE = '2026-08-20';

/** Pages métier, zone et guide publiées le 4 septembre 2026. */
export const DATE_SEO_METIERS_ZONES_GUIDES = '2026-09-04';

/** Préfixes d'URL de la vague de publication de septembre 2026. */
const CHEMINS_SEPTEMBRE = /^\/(guides|assistante|assistante-independante)(\/|$)/;

/**
 * Date de dernière modification d'une page, à partir de son chemin.
 * @param {string} pathname — chemin de l'URL, avec ou sans .html final
 * @returns {string} date au format AAAA-MM-JJ
 */
export function lastmodPour(pathname) {
  const chemin = pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  return CHEMINS_SEPTEMBRE.test(chemin) ? DATE_SEO_METIERS_ZONES_GUIDES : DATE_SOCLE;
}
