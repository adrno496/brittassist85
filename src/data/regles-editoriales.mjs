/**
 * Règles éditoriales communes aux guides et aux articles.
 *
 * Fichier en .mjs : il est lu par le gate éditorial (scripts/content-gate.mjs),
 * par le contrôle des articles (scripts/articles-check.mjs) et par le gabarit
 * des articles pendant le build.
 */

/** Formulations interdites : promesses de résultat et preuves inventées. */
export const INTERDITS = [
  [/\b(résultats?|classement|position|satisfaction|succès|gains?) garantis?\b|\b(nous|je) (vous )?garanti(ssons|s)\b|garanti(e)? sans risque/i, 'promesse de résultat'],
  [/premi(er|ère) (sur|dans) google/i, 'promesse de classement'],
  [/100 ?%/i, 'pourcentage absolu'],
  [/\b(nos|mes) clients (témoignent|disent|confirment)/i, 'témoignage non sourcé'],
  [/\d+ ?% des (dirigeants|entreprises|TPE|PME)/i, 'statistique sans source'],
  [/\bjusqu’à \d+ ?(heures|h) (gagnées|par semaine)/i, 'gain chiffré non mesuré'],
  [/\b(le|la) meilleure? (assistante|prestataire|service|offre|agence|private office)\b|\bn° ?1\b|\bleader\b/i, 'superlatif commercial'],
];

/** Termes qui signalent une règle de droit ou un fait chiffré : une source est alors exigée. */
export const MARQUEURS_DE_REGLE = /\b(amende|mentions? obligatoires?|obligation légale|code (civil|du travail|de commerce|général des impôts)|loi n°|article \d|décret|délai légal|€ (hors taxes|HT)|pénalités de retard)\b/i;

/** Texte comparable : minuscules, sans accents ni ponctuation. */
export function normaliser(texte) {
  return String(texte ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}
