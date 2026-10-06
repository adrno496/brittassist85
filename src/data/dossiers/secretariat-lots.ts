/**
 * Série « secrétariat externalisé » — cinquante guides ajoutés en octobre 2026.
 *
 * Ils ne sont pas publiés d'un coup : quatre lots, mis en ligne l'un après
 * l'autre (docs/seo-secretariat-50/05_PUBLICATION_PLAN.md). Chaque guide déclare
 * son lot, et en tire ses dates.
 *
 * Tant qu'un lot est en brouillon, sa date est celle de la rédaction. Le jour où
 * ses pages sont inscrites dans publications.mjs, remplacer ici la date du lot
 * par celle de la mise en ligne : la date affichée et celle des données
 * structurées restent ainsi celles d'une publication réelle.
 */
import type { Guide } from '../guides.ts';

export const DATES_DES_LOTS = {
  A: '2026-10-06',
  B: '2026-10-06',
  C: '2026-10-06',
  D: '2026-10-06',
} as const;

export type Lot = keyof typeof DATES_DES_LOTS;

/** Lot et dates d'un guide, d'une seule source. */
export function lot(l: Lot): Pick<Guide, 'lot' | 'datePublished' | 'dateModified'> {
  return { lot: l, datePublished: DATES_DES_LOTS[l], dateModified: DATES_DES_LOTS[l] };
}
