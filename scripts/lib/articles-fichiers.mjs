/**
 * Lecture des fiches d'articles (src/content/articles/*.md) hors d'Astro.
 *
 * Même lecture YAML qu'Astro (js-yaml) ; les dates non citées sont ramenées
 * à AAAA-MM-JJ, comme le fait le schéma de src/content.config.ts.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import yaml from 'js-yaml';

export const DOSSIER_ARTICLES = 'src/content/articles';

function dates(valeur) {
  if (valeur instanceof Date) return valeur.toISOString().slice(0, 10);
  if (Array.isArray(valeur)) return valeur.map(dates);
  if (valeur && typeof valeur === 'object') return Object.fromEntries(Object.entries(valeur).map(([k, v]) => [k, dates(v)]));
  return valeur;
}

/** Sépare le frontmatter du corps. Lève une erreur si le fichier n'en a pas. */
export function analyserFiche(texte) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(texte);
  if (!m) throw new Error('frontmatter absent (le fichier doit commencer par ---)');
  const data = yaml.load(m[1]);
  if (!data || typeof data !== 'object') throw new Error('frontmatter vide');
  return { data: dates(data), corps: m[2] };
}

/**
 * Toutes les fiches du dossier. Une fiche illisible est rendue avec `erreur`,
 * sans interrompre la lecture des autres.
 * @returns {{ slug: string, fichier: string, data?: object, corps?: string, erreur?: string }[]}
 */
export function lireArticles(dossier = DOSSIER_ARTICLES) {
  if (!existsSync(dossier)) return [];
  return readdirSync(dossier)
    .filter((f) => f.endsWith('.md'))
    .sort()
    .map((f) => {
      const fichier = join(dossier, f);
      const slug = basename(f, '.md');
      try {
        return { slug, fichier, ...analyserFiche(readFileSync(fichier, 'utf8')) };
      } catch (e) {
        return { slug, fichier, erreur: String(e.message ?? e) };
      }
    });
}
