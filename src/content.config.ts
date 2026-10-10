/**
 * Collections de contenu Astro 5.
 *
 * Une seule collection : les articles (src/content/articles/<slug>.md). Le nom
 * du fichier est le slug de l'URL /articles/<slug>. Les guides restent des
 * fichiers TypeScript (src/data/dossiers) : ils ne passent pas par ici.
 *
 * Le schéma valide la forme de chaque fiche ; les règles de fond (dates,
 * sources, registre de publication) sont dans src/data/articles.mjs.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { IDS_CATEGORIES, STATUTS_FICHE, TYPES_SOURCE } from './data/articles.mjs';

// YAML transforme une date non citée (2026-01-05) en objet Date : on la ramène à AAAA-MM-JJ.
const jour = z.preprocess(
  (v) => (v instanceof Date ? v.toISOString().slice(0, 10) : v),
  z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'date attendue au format AAAA-MM-JJ'),
);

const source = z.object({
  titre: z.string().min(5),
  organisme: z.string().min(2),
  url: z.string().url().startsWith('https://'),
  type: z.enum(TYPES_SOURCE as [string, ...string[]]),
  /** Date de publication de la page source (pas sa date de mise à jour) */
  datePublication: jour.optional(),
  dateMiseAJour: jour.optional(),
  /** La page a-t-elle été ouverte et lue ? Un résultat de moteur de recherche ne compte pas. */
  ouverte: z.boolean(),
  consulteeLe: jour.optional(),
  /** Ce que la source établit, reformulé en une ou deux phrases */
  extrait: z.string().min(10),
});

const articles = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/articles' }),
  schema: z
    .object({
      title: z.string().min(20),
      description: z.string().min(70).max(165),
      h1: z.string().min(10),
      summary: z.string().min(40),
      category: z.enum(IDS_CATEGORIES as [string, ...string[]]),
      audience: z.array(z.string()).min(1),
      /** Requête ou intention principale : unique sur tout le site */
      intention: z.string().min(5),
      keywords: z.array(z.string()).max(8).default([]),
      semaineEditoriale: z.string().regex(/^S\d{2,}$/),
      periodeDebut: jour,
      periodeFin: jour,
      dateEvenement: jour,
      /** Nature de l'événement daté : publication d'un texte, annonce, alerte, entrée en vigueur… */
      natureEvenement: z.string().min(3),
      /** Date d'entrée en vigueur, quand elle diffère de l'événement */
      dateEffet: jour.optional(),
      sources: z.array(source).min(1),
      createdAt: jour,
      datePublished: jour.optional(),
      dateModified: jour.optional(),
      /** Les articles sont préparés par BrittAssist, avec l'aide d'un outil d'IA */
      author: z.literal('BrittAssist').default('BrittAssist'),
      editorialStatus: z.enum(STATUTS_FICHE as [string, ...string[]]),
      /** « reglementaire » : juridique, fiscal, social ou obligation — publication soumise à approbation */
      sensibilite: z.enum(['reglementaire', 'standard']),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      relatedGuides: z.array(z.string()).default([]),
      relatedArticles: z.array(z.string()).default([]),
      /** Uniquement si relectures.mjs porte la même date pour cette page */
      reviewedAt: jour.optional(),
      /** Uniquement si une validation du propriétaire est inscrite dans relectures.mjs */
      approvedBy: z.string().optional(),
      /** Notes de travail : jamais affichées */
      notesInternes: z.string().optional(),
    })
    .strict(),
});

export const collections = { articles };
