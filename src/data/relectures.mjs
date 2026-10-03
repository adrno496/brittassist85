/**
 * Registre des relectures humaines — une ligne par page relue.
 *
 * Pourquoi ce fichier existe : les guides et pages métier ajoutés en octobre 2026
 * ont été préparés avec l'aide d'un outil d'IA, à partir de sources officielles et
 * du périmètre déjà publié sur le site. Google demande que tout contenu rédigé de
 * cette façon soit relu et vérifié par une personne avant publication. Ce registre
 * est la trace de cette relecture.
 *
 * Tant qu'une page n'y figure pas :
 *  - elle n'est pas générée par `npm run build` (elle n'existe pas en ligne) ;
 *  - elle est générée par `npm run build:apercu`, en `noindex`, avec un bandeau
 *    « brouillon », hors sitemap — pour être lue avant validation.
 *
 * Pour publier une page : la lire en entier, corriger ce qui doit l'être dans son
 * fichier de données, puis ajouter ici son chemin et la date du jour.
 *
 *   '/guides/mentions-obligatoires-facture': '2026-10-06',
 *
 * La date sert aussi de date de publication et de <lastmod> dans le sitemap.
 * N'y inscrire qu'une page réellement relue : la mention « Relu par Brittany
 * Dreano le … » s'affiche sur la page à partir de cette ligne.
 */
export const relectures = {};
