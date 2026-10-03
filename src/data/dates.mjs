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
import { dateDeRelecture, datePublicationSansRelecture } from './publication.mjs';

/** Pages historiques : accueil, private-office, services, à propos, contact, prestations. */
export const DATE_SOCLE = '2026-08-20';

/** Pages métier, zone et guide publiées le 4 septembre 2026. */
export const DATE_SEO_METIERS_ZONES_GUIDES = '2026-09-04';
export const DATE_NOUVEAUX_GUIDES = '2026-09-27';

/** Hubs « par métier » et « par zone », index des guides réorganisé, méthode éditoriale. */
export const DATE_HUBS = '2026-10-03';

const NOUVEAUX_GUIDES = new Set([
  '/guides/confidentialite-assistante-externalisee',
  '/guides/premier-mois-assistante-externalisee',
  '/guides/choisir-assistante-externalisee',
  '/guides/modele-brief-assistante-externalisee',
  '/guides/suivi-demandes-assistante-externalisee',
]);
const GUIDES_REVISES = new Set([
  '/guides/assistante-independante-ou-salariee',
  '/guides/prix-assistante-de-direction-externalisee',
]);
const PAGES_REVISEES = new Set(['/', '/private-office', '/services', '/contact', '/tarifs']);
const PAGES_OCTOBRE = new Set(['/guides', '/assistante', '/assistante-independante', '/methode-editoriale']);

/** Préfixes d'URL de la vague de publication de septembre 2026. */
const CHEMINS_SEPTEMBRE = /^\/(guides|assistante|assistante-independante)(\/|$)/;

function nettoyer(pathname) {
  return pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
}

/**
 * Date de dernière modification d'une page, à partir de son chemin.
 * @param {string} pathname — chemin de l'URL, avec ou sans .html final
 * @returns {string} date au format AAAA-MM-JJ
 */
export function lastmodPour(pathname) {
  const chemin = nettoyer(pathname);
  // Une page relue porte la date de sa relecture ; une page publiée sans relecture
  // préalable porte la date de sa mise en ligne.
  const inscrite = dateDeRelecture(chemin) ?? datePublicationSansRelecture(chemin);
  if (inscrite) return inscrite;
  if (PAGES_OCTOBRE.has(chemin)) return DATE_HUBS;
  if (NOUVEAUX_GUIDES.has(chemin) || GUIDES_REVISES.has(chemin) || PAGES_REVISEES.has(chemin)) return DATE_NOUVEAUX_GUIDES;
  return CHEMINS_SEPTEMBRE.test(chemin) ? DATE_SEO_METIERS_ZONES_GUIDES : DATE_SOCLE;
}

export function publicationPour(pathname) {
  const chemin = nettoyer(pathname);
  // La date de publication ne recule pas quand la page est relue ensuite.
  const inscrite = datePublicationSansRelecture(chemin) ?? dateDeRelecture(chemin);
  if (inscrite) return inscrite;
  if (chemin === '/assistante' || chemin === '/assistante-independante' || chemin === '/methode-editoriale') return DATE_HUBS;
  if (NOUVEAUX_GUIDES.has(chemin) || chemin === '/tarifs') return DATE_NOUVEAUX_GUIDES;
  return CHEMINS_SEPTEMBRE.test(chemin) ? DATE_SEO_METIERS_ZONES_GUIDES : DATE_SOCLE;
}
