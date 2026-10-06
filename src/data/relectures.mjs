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

/**
 * Validations données par le propriétaire du site — une entrée par déclaration.
 *
 * Une validation n'est pas une relecture au sens du registre ci-dessus. Elle
 * garde la trace de ce qui a été dit, par qui et quand, et n'a aucun effet sur
 * le site : la page n'est ni mise en ligne (c'est le rôle de publications.mjs),
 * ni présentée comme relue. Aucun gabarit ne lit ce qui suit.
 *
 * `declaration` reprend les mots de la personne, tels quels : le registre ne dit
 * pas ce que sa vérification a couvert. `pages` liste ce que ces mots visent ;
 * n'y inscrire qu'une page réellement concernée. Une nouvelle validation
 * s'ajoute à la suite, sans retoucher les précédentes. Une page modifiée après
 * la date d'une validation n'est plus couverte par elle pour ce qui a changé.
 *
 * Si Brittany Dreano relit elle-même une page, c'est le registre du dessus qui
 * le dit, pas celui-ci.
 */

/** Les cinquante pages de la série « secrétariat externalisé », par lot de publication. */
const SERIE_SECRETARIAT = [
  // Lot A
  '/guides/inconvenients-secretariat-externalise',
  '/guides/mission-ponctuelle-de-secretariat',
  '/guides/periode-d-essai-assistante-independante',
  '/guides/cahier-des-charges-secretariat-externalise',
  '/guides/comparer-devis-secretariat-externalise',
  '/guides/tva-prestataire-en-franchise-en-base',
  '/guides/delais-de-reponse-assistante-externalisee',
  '/guides/forfait-secretariat-externalise-depassement',
  '/guides/absence-de-son-assistante-independante',
  '/guides/obligation-de-vigilance-prestataire-independant',
  // Lot B
  '/guides/domiciliation-ou-secretariat-externalise',
  '/guides/evaluer-un-secretariat-externalise',
  '/guides/changer-d-assistante-externalisee',
  '/guides/assistante-partagee-entre-associes',
  '/guides/presenter-son-assistante-a-ses-clients',
  '/guides/erreur-de-son-assistante-externalisee',
  '/guides/rgpd-sous-traitance-assistante-externalisee',
  '/guides/acces-bancaire-pour-son-assistante',
  '/guides/moyens-de-paiement-delegues',
  '/guides/appels-manques-entreprise',
  // Lot C
  '/guides/secretariat-externalise-france-ou-offshore',
  '/guides/revue-trimestrielle-assistance-externalisee',
  '/guides/recruter-apres-avoir-externalise',
  '/guides/incident-de-securite-chez-un-prestataire',
  '/guides/delegations-aupres-des-organismes',
  '/guides/dirigeant-indisponible-du-jour-au-lendemain',
  '/guides/conjoint-qui-fait-l-administratif',
  '/guides/controle-urssaf-preparer-les-pieces',
  '/guides/lettre-recommandee-electronique',
  '/guides/mentions-obligatoires-courriers-et-emails',
  '/guides/collecter-des-pieces-aupres-de-ses-clients',
  '/guides/tenir-son-fichier-clients-a-jour',
  '/guides/assemblee-generale-annuelle-retroplanning',
  '/guides/annonce-de-repondeur-professionnel',
  '/guides/boite-mail-partagee-entreprise',
  // Lot D
  '/guides/temps-partage-interim-alternance-ou-prestataire',
  '/guides/secretariat-externalise-charge-deductible',
  '/guides/sous-traitance-par-son-assistante',
  '/guides/depart-d-un-salarie-checklist-administrative',
  '/guides/numeriser-ses-archives-papier',
  '/guides/declarer-un-sinistre-professionnel',
  '/guides/vehicules-de-societe-suivi-administratif',
  '/guides/dicter-ses-courriers',
  '/guides/checklist-administrative-mensuelle',
  '/guides/telesecretariat-et-assistante-externalisee',
  '/guides/coordonner-des-entretiens-de-recrutement',
  '/guides/participer-a-un-salon-professionnel',
  '/guides/modele-note-d-aide-a-la-decision',
  '/guides/assistante-commerciale-externalisee',
  '/guides/traiter-les-demandes-de-devis-entrantes',
];

export const validations = [
  {
    date: '2026-10-06',
    par: 'Axel Dreano',
    declaration: "c'est bon j'ai tout checker",
    // « tout » : les cinquante pages de la série, alors en brouillon.
    pages: SERIE_SECRETARIAT,
  },
  {
    date: '2026-10-06',
    par: 'Axel Dreano',
    declaration: 'toute les pages on ete relu',
    // Dit en demandant leur mise en ligne. « toutes les pages » : les cinquante de la série, les seules encore en brouillon.
    pages: SERIE_SECRETARIAT,
  },
];
