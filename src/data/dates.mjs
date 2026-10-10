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
import { articlesInscrits, dateDeRelecture, datePublicationSansRelecture } from './publication.mjs';

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

/** Page de référence de la série « secrétariat externalisé » : sa rubrique « Pour approfondir » est apparue à la mise en ligne de la série. */
export const DATE_SERIE_SECRETARIAT = '2026-10-06';
const PAGE_DE_REFERENCE = '/guides/secretariat-externalise';

/** Ouverture de la rubrique « Articles » (/articles). */
export const DATE_RUBRIQUE_ARTICLES = '2026-10-10';

/**
 * Modifications significatives d'un article déjà publié — chemin → AAAA-MM-JJ.
 * Une correction de fond, une mise à jour d'échéance, une source remplacée : oui.
 * Une coquille, un changement de gabarit ou de menu : non. Le <lastmod> et le
 * dateModified de l'article prennent cette date ; son frontmatter `dateModified`
 * doit dire la même (scripts/articles-check.mjs le vérifie).
 *
 *   '/articles/facture-electronique-reception-1er-septembre-2026': '2026-10-20',
 */
export const MODIFICATIONS_ARTICLES = {};

const ARTICLE = /^\/articles\/[^/]+$/;
const LISTE_ARTICLES = /^\/articles(\/page\/\d+)?$/;

/** Date de dernière modification d'un article, ou null s'il n'est inscrit dans aucun registre. */
function lastmodArticle(chemin) {
  const inscrite = dateDeRelecture(chemin) ?? datePublicationSansRelecture(chemin);
  if (!inscrite) return null;
  const modifiee = MODIFICATIONS_ARTICLES[chemin];
  return modifiee && modifiee > inscrite ? modifiee : inscrite;
}

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
  // La liste des articles change quand un article paraît ou change ; sinon elle garde la date d'ouverture de la rubrique.
  if (LISTE_ARTICLES.test(chemin)) {
    return [DATE_RUBRIQUE_ARTICLES, ...articlesInscrits().map(lastmodArticle)].filter(Boolean).sort().at(-1);
  }
  if (ARTICLE.test(chemin)) return lastmodArticle(chemin) ?? DATE_RUBRIQUE_ARTICLES;
  // Une page relue porte la date de sa relecture ; une page publiée sans relecture
  // préalable porte la date de sa mise en ligne.
  const inscrite = dateDeRelecture(chemin) ?? datePublicationSansRelecture(chemin);
  if (inscrite) return inscrite;
  if (chemin === PAGE_DE_REFERENCE) return DATE_SERIE_SECRETARIAT;
  if (PAGES_OCTOBRE.has(chemin)) return DATE_HUBS;
  if (NOUVEAUX_GUIDES.has(chemin) || GUIDES_REVISES.has(chemin) || PAGES_REVISEES.has(chemin)) return DATE_NOUVEAUX_GUIDES;
  return CHEMINS_SEPTEMBRE.test(chemin) ? DATE_SEO_METIERS_ZONES_GUIDES : DATE_SOCLE;
}

/**
 * Date de première publication d'une page.
 * Un article non inscrit n'a pas de date de publication : null, et aucune n'est déclarée.
 */
export function publicationPour(pathname) {
  const chemin = nettoyer(pathname);
  if (LISTE_ARTICLES.test(chemin)) return DATE_RUBRIQUE_ARTICLES;
  if (ARTICLE.test(chemin)) return datePublicationSansRelecture(chemin) ?? dateDeRelecture(chemin);
  // La date de publication ne recule pas quand la page est relue ensuite.
  const inscrite = datePublicationSansRelecture(chemin) ?? dateDeRelecture(chemin);
  if (inscrite) return inscrite;
  if (chemin === '/assistante' || chemin === '/assistante-independante' || chemin === '/methode-editoriale') return DATE_HUBS;
  if (NOUVEAUX_GUIDES.has(chemin) || chemin === '/tarifs') return DATE_NOUVEAUX_GUIDES;
  return CHEMINS_SEPTEMBRE.test(chemin) ? DATE_SEO_METIERS_ZONES_GUIDES : DATE_SOCLE;
}
