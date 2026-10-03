/**
 * Pages métier présentes dans le build en cours.
 *
 * Les pages ajoutées après septembre 2026 passent par les registres
 * (publications.mjs, relectures.mjs) : tant qu'elles ne figurent dans aucun des
 * deux, elles ne sont générées qu'en aperçu. Tout ce qui liste des métiers doit
 * passer par ce module, sinon une page non publiée se retrouverait citée par un
 * lien cassé.
 */
import { metiers } from './metiers.ts';
import type { Metier } from './metiers.ts';
import { estBrouillon, estGeneree } from './publication.mjs';

export const cheminDuMetier = (m: Metier) => `/assistante/${m.slug}`;
export const metierEstBrouillon = (m: Metier) => estBrouillon(cheminDuMetier(m));
export const metiersGeneres = (): Metier[] => metiers.filter((m) => estGeneree(cheminDuMetier(m)));
