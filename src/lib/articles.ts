/**
 * Accès aux articles depuis les gabarits.
 *
 * Seuls les articles inscrits au registre (publications.mjs ou relectures.mjs)
 * sont générés par `npm run build`. `npm run build:apercu` génère aussi les
 * brouillons, en noindex et hors sitemap.
 *
 * Garde-fou : chaque article généré est contrôlé (src/data/articles.mjs). Un
 * article inscrit au registre qui enfreint une règle — source non ouverte, date
 * de publication différente du registre, sujet réglementaire sans approbation —
 * fait échouer le build : rien ne part en ligne. En aperçu, la même règle vaut
 * pour tous les articles générés, sauf les conditions propres à la mise en ligne.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { bibliotheque } from '../data/bibliotheque';
import {
  aujourdhuiParis,
  cheminArticle,
  controlerArticle,
  controlerCollection,
  estRetrospectif,
  nomCategorie,
  tempsDeLecture,
} from '../data/articles.mjs';
import {
  dateDeRelecture,
  datePublicationSansRelecture,
  estGeneree,
  estPubliee,
  validationDuProprietaire,
} from '../data/publication.mjs';

export type Article = {
  slug: string;
  chemin: string;
  entree: CollectionEntry<'articles'>;
  data: CollectionEntry<'articles'>['data'];
  brouillon: boolean;
  categorie: string;
  lecture: number;
  retrospectif: boolean;
};

let cache: Article[] | undefined;

/** Tous les articles générés dans ce build, le plus récent d'abord. */
export async function articlesGeneres(): Promise<Article[]> {
  if (cache) return cache;
  const toutes = await getCollection('articles');
  const ids = new Set(toutes.map((e) => e.id));
  const aujourdhui = aujourdhuiParis();
  const ctx = {
    aujourdhui,
    datePublication: datePublicationSansRelecture,
    dateRelecture: dateDeRelecture,
    validation: validationDuProprietaire,
    guidePublie: (slug: string) => bibliotheque.some((g) => g.slug === slug) && estPubliee(`/guides/${slug}`),
    articleExiste: (slug: string) => ids.has(slug),
  };

  const generees = toutes.filter((e) => estGeneree(cheminArticle(e.id)));
  const erreurs: string[] = [];
  for (const e of generees) {
    const { blocages } = controlerArticle({ slug: e.id, data: e.data, corps: e.body ?? '' }, ctx);
    for (const b of blocages) erreurs.push(`${e.id} : ${b.regle}${b.detail ? ` — ${b.detail}` : ''}`);
  }
  const titres = bibliotheque.map((g) => ({ slug: g.slug, title: g.title, h1: g.h1, description: g.description, intention: g.cadrage?.motCle }));
  for (const b of controlerCollection(generees.map((e) => ({ slug: e.id, data: e.data })), titres)) {
    erreurs.push(`${b.slug} : ${b.regle} — ${b.detail}`);
  }
  if (erreurs.length) {
    throw new Error(`Articles : ${erreurs.length} blocage(s). Le build est interrompu.\n  ${erreurs.join('\n  ')}`);
  }

  cache = generees
    .map((e) => ({
      slug: e.id,
      chemin: cheminArticle(e.id),
      entree: e,
      data: e.data,
      brouillon: !estPubliee(cheminArticle(e.id)),
      categorie: nomCategorie(e.data.category),
      lecture: tempsDeLecture(e.body ?? ''),
      retrospectif: estRetrospectif(e.data, aujourdhui),
    }))
    .sort((a, b) =>
      // Publiés d'abord, du plus récent au plus ancien ; puis les brouillons (aperçu).
      Number(a.brouillon) - Number(b.brouillon) ||
      (b.data.datePublished ?? '').localeCompare(a.data.datePublished ?? '') ||
      b.data.dateEvenement.localeCompare(a.data.dateEvenement),
    );
  return cache;
}

export const ARTICLES_PAR_PAGE = 24;
