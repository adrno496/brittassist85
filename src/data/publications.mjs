/**
 * Registre des publications sans relecture préalable — une ligne par page.
 *
 * Les guides et pages métier ajoutés en octobre 2026 ont été préparés avec l'aide
 * d'un outil d'IA. Le 3 octobre 2026, le propriétaire du site a décidé de les
 * publier sans attendre leur relecture. Ce fichier est la trace de cette décision :
 * il rend ces pages indexables, sans prétendre qu'une personne les a relues.
 *
 * Deux registres, deux sens différents :
 *  - ici : la page est en ligne. Aucune mention de relecture n'est affichée ;
 *  - relectures.mjs : la page a réellement été relue. La mention « Relu par
 *    Brittany Dreano le … » s'affiche, et les données structurées le déclarent.
 *
 * Une page relue s'inscrit dans relectures.mjs ; sa ligne peut rester ici.
 * Une page absente des deux registres n'est générée qu'en aperçu, en noindex
 * (`npm run build:apercu`) : c'est le sort de toute page ajoutée par la suite.
 * Pour retirer une page de l'index, supprimer sa ligne.
 *
 * La date est celle de la mise à disposition du contenu : elle sert de date de
 * publication et de <lastmod> dans le sitemap tant que la page n'est pas relue.
 */
export const publications = {
  // Guides
  '/guides/externaliser-son-assistanat': '2026-10-03',
  '/guides/quelles-taches-deleguer-a-une-assistante': '2026-10-03',
  '/guides/quand-prendre-une-assistante': '2026-10-03',
  '/guides/contrat-de-prestation-assistante-independante': '2026-10-03',
  '/guides/requalification-assistante-independante-salariat': '2026-10-03',
  '/guides/niveaux-d-autonomie-delegation': '2026-10-03',
  '/guides/erreurs-de-delegation': '2026-10-03',
  '/guides/fin-de-collaboration-assistante-externalisee': '2026-10-03',
  '/guides/ce-qu-une-assistante-externalisee-ne-fait-pas': '2026-10-03',
  '/guides/rentabilite-assistante-externalisee': '2026-10-03',
  '/guides/point-hebdomadaire-avec-son-assistante': '2026-10-03',
  '/guides/assistante-externalisee-et-ia': '2026-10-03',
  '/guides/conciergerie-privee-ou-lifestyle-assistant': '2026-10-03',
  '/guides/chief-of-staff-ou-executive-assistant': '2026-10-03',
  '/guides/canal-pour-transmettre-ses-demandes': '2026-10-03',
  '/guides/organiser-l-administratif-de-son-entreprise': '2026-10-03',
  '/guides/arborescence-dossiers-entreprise': '2026-10-03',
  '/guides/regles-de-nommage-des-fichiers': '2026-10-03',
  '/guides/duree-de-conservation-documents-entreprise': '2026-10-03',
  '/guides/echeancier-administratif-entreprise': '2026-10-03',
  '/guides/pieces-pour-l-expert-comptable': '2026-10-03',
  '/guides/notes-de-frais-justificatifs': '2026-10-03',
  '/guides/suivi-des-contrats-et-abonnements': '2026-10-03',
  '/guides/traitement-du-courrier-entrant': '2026-10-03',
  '/guides/dossier-permanent-entreprise': '2026-10-03',
  '/guides/rediger-une-procedure-interne': '2026-10-03',
  '/guides/administratif-a-la-creation-d-entreprise': '2026-10-03',
  '/guides/devis-factures-relances': '2026-10-03',
  '/guides/mentions-obligatoires-facture': '2026-10-03',
  '/guides/facturation-electronique-tpe': '2026-10-03',
  '/guides/relancer-une-facture-impayee': '2026-10-03',
  '/guides/delais-de-paiement-et-penalites-de-retard': '2026-10-03',
  '/guides/mise-en-demeure-et-injonction-de-payer': '2026-10-03',
  '/guides/relancer-un-devis-sans-reponse': '2026-10-03',
  '/guides/devis-contenu-et-validite': '2026-10-03',
  '/guides/acompte-ou-arrhes': '2026-10-03',
  '/guides/numerotation-des-factures-et-avoirs': '2026-10-03',
  '/guides/facture-de-situation-et-retenue-de-garantie': '2026-10-03',
  '/guides/choisir-un-logiciel-de-facturation': '2026-10-03',
  '/guides/circuit-des-factures-fournisseurs': '2026-10-03',
  '/guides/agenda-emails-reunions': '2026-10-03',
  '/guides/organiser-sa-boite-mail-de-dirigeant': '2026-10-03',
  '/guides/deleguer-sa-boite-mail': '2026-10-03',
  '/guides/tenir-un-agenda-de-dirigeant': '2026-10-03',
  '/guides/preparer-une-reunion': '2026-10-03',
  '/guides/compte-rendu-de-reunion': '2026-10-03',
  '/guides/reponses-types-emails': '2026-10-03',
  '/guides/gerer-les-demandes-de-rendez-vous': '2026-10-03',
  '/guides/preparer-son-absence': '2026-10-03',
  '/guides/filtrer-les-appels-et-messages': '2026-10-03',
  '/guides/dossier-de-rendez-vous': '2026-10-03',
  '/guides/reunions-et-fuseaux-horaires': '2026-10-03',
  '/guides/deplacements-et-evenements-professionnels': '2026-10-03',
  '/guides/organiser-un-deplacement-professionnel': '2026-10-03',
  '/guides/feuille-de-route-de-deplacement': '2026-10-03',
  '/guides/organiser-un-seminaire-d-equipe': '2026-10-03',
  '/guides/organiser-un-diner-client': '2026-10-03',
  '/guides/politique-voyage-petite-entreprise': '2026-10-03',
  '/guides/deplacement-a-l-etranger-formalites': '2026-10-03',
  '/guides/gerer-un-imprevu-en-deplacement': '2026-10-03',
  '/guides/choisir-un-lieu-de-seminaire': '2026-10-03',
  '/guides/confidentialite-acces-et-outils': '2026-10-03',
  '/guides/partager-un-mot-de-passe-en-securite': '2026-10-03',
  '/guides/delegation-d-acces-messagerie-et-agenda': '2026-10-03',
  '/guides/double-authentification-et-delegation': '2026-10-03',
  '/guides/signature-electronique-niveaux-et-usages': '2026-10-03',
  '/guides/ia-generative-et-donnees-confidentielles': '2026-10-03',
  '/guides/choisir-un-outil-de-suivi-des-taches': '2026-10-03',
  '/guides/choisir-un-espace-de-stockage-partage': '2026-10-03',
  '/guides/registre-des-acces-entreprise': '2026-10-03',
  '/guides/fraude-au-faux-rib-et-au-president': '2026-10-03',
  '/guides/sauvegarde-des-documents-entreprise': '2026-10-03',
  '/guides/situations-de-dirigeant': '2026-10-03',
  '/guides/rattraper-un-retard-administratif': '2026-10-03',
  '/guides/dirigeant-goulot-d-etranglement': '2026-10-03',
  '/guides/remplacer-une-assistante-absente': '2026-10-03',
  '/guides/reprise-d-entreprise-administratif': '2026-10-03',
  '/guides/pic-d-activite-saisonnier': '2026-10-03',
  '/guides/premiere-embauche-formalites-administratives': '2026-10-03',
  '/guides/demenagement-de-bureaux': '2026-10-03',
  '/guides/appel-d-offres-dossier-de-candidature': '2026-10-03',
  '/guides/dirigeant-souvent-en-deplacement': '2026-10-03',
  '/guides/changer-d-outil-de-gestion': '2026-10-03',
  '/guides/modeles-et-checklists': '2026-10-03',
  '/guides/modele-tableau-de-suivi-des-factures': '2026-10-03',
  '/guides/modele-releve-du-temps-administratif': '2026-10-03',
  '/guides/modele-fiche-de-preferences-dirigeant': '2026-10-03',
  '/guides/checklist-cloture-annuelle-administrative': '2026-10-03',
  '/guides/modele-fiche-prestataire': '2026-10-03',
  '/guides/modele-note-de-passation': '2026-10-03',
  '/guides/modele-tableau-de-bord-hebdomadaire': '2026-10-03',
  '/guides/checklist-ouverture-dossier-client': '2026-10-03',
  // Pages métier
  '/assistante/organismes-de-formation': '2026-10-03',
  '/assistante/architectes-maitres-d-oeuvre': '2026-10-03',
  '/assistante/hotellerie-restauration': '2026-10-03',
  '/assistante/fondateurs-de-startup': '2026-10-03',
  '/assistante/agences-et-studios': '2026-10-03',
  '/assistante/organisateurs-d-evenements': '2026-10-03',
  // Page de méthode
  '/methode-editoriale': '2026-10-03',
};
