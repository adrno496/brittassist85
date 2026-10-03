/**
 * Registre des relectures humaines — une ligne par page réellement relue.
 *
 * Les guides et pages métier ajoutés en octobre 2026 ont été préparés avec l'aide
 * d'un outil d'IA, à partir de sources officielles et du périmètre déjà publié sur
 * le site. Ce registre est la trace de leur relecture par une personne.
 *
 * Il ne décide plus seul de la mise en ligne : depuis le 3 octobre 2026, ces pages
 * sont publiées par publications.mjs sans attendre leur relecture. Ce registre-ci
 * porte une affirmation, et une seule : « cette page a été relue, à cette date ».
 *
 * Inscrire une page ici :
 *  - affiche « Relu par Brittany Dreano le … » sous sa réponse courte ;
 *  - ajoute reviewedBy et lastReviewed à ses données structurées ;
 *  - met son <lastmod> à la date de relecture.
 *
 * N'y inscrire qu'une page lue en entier et corrigée : c'est une déclaration
 * publique faite au nom de Brittany Dreano.
 *
 *   '/guides/mentions-obligatoires-facture': '2026-10-06',
 */
export const relectures = {};
