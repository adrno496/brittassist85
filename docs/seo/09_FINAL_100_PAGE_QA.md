# 09 — Contrôle final des 100 pages

> Document généré par `scripts/docs-seo.mjs` le 2026-10-03, à partir des fiches de `src/data` et du build d’aperçu audité. Ne pas le modifier à la main : relancer le script.

## Résultat

| Contrôle | Résultat |
| --- | --- |
| Pages prévues | 100 |
| Pages construites | 100 |
| Pages sans aucun blocage | 100 |
| Pages rejetées par le quality gate | 0 |
| Pages publiées et indexables aujourd’hui | 100 |
| Dont publiées sans relecture humaine préalable | 98 |
| Dont relues par une personne | 0 |
| Brouillons, non publiés | 0 |
| Longueur du contenu principal | min 591 · médiane 761 · max 1654 mots |
| Paires de pages à plus de 30 % de contenu commun | 0 |

Ce tableau est un contrôle **automatique** du HTML construit. Il vérifie la forme et la cohérence : il ne vaut pas relecture du fond. Le contrôle en navigateur réel (console, CSP, débordement, accessibilité) figure dans `docs/site-audit/04_FINAL_VALIDATION.md`.

## Ce que chaque colonne vérifie

- **Title / Desc.** : présents, uniques sur le site, longueur en caractères.
- **H1** : exactement un, unique sur le site.
- **Canonical** : absolu, sur `https://www.brittassist.fr`, égal à l’adresse de la page.
- **Mots** : texte du contenu principal, hors navigation et pied de page.
- **Entrants** : pages qui citent celle-ci dans leur contenu.
- **Blocages** : règles bloquantes du quality gate — lien cassé, doublon, JSON-LD invalide, question de FAQ absente du texte visible, page orpheline, contenu trop proche.

## Page par page

| # | URL | Statut | Title (car.) | Desc. (car.) | H1 | Canonical | Mots | H2 | Liens internes | Entrants | Clics | Schema | Blocages | Avertissements |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | /assistante | publiée | 69 | 148 | 1 | conforme | 667 | 3 | 71 | 17 | 1 | CollectionPage, ItemList, FAQPage, BreadcrumbList | aucun | aucun |
| 2 | /assistante-independante | publiée | 68 | 151 | 1 | conforme | 591 | 3 | 61 | 8 | 1 | CollectionPage, ItemList, FAQPage, BreadcrumbList | aucun | aucun |
| 3 | /guides/externaliser-son-assistanat | publiée | 63 | 145 | 1 | conforme | 1654 | 10 | 91 | 27 | 1 | Article, ItemList, FAQPage, BreadcrumbList | aucun | aucun |
| 4 | /guides/quelles-taches-deleguer-a-une-assistante | publiée | 65 | 144 | 1 | conforme | 777 | 8 | 65 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 5 | /guides/quand-prendre-une-assistante | publiée | 69 | 143 | 1 | conforme | 728 | 7 | 66 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 6 | /guides/contrat-de-prestation-assistante-independante | publiée | 68 | 148 | 1 | conforme | 873 | 10 | 67 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 7 | /guides/requalification-assistante-independante-salariat | publiée | 68 | 148 | 1 | conforme | 863 | 10 | 66 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 8 | /guides/niveaux-d-autonomie-delegation | publiée | 63 | 142 | 1 | conforme | 750 | 7 | 65 | 12 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 9 | /guides/erreurs-de-delegation | publiée | 63 | 147 | 1 | conforme | 745 | 7 | 67 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 10 | /guides/fin-de-collaboration-assistante-externalisee | publiée | 69 | 143 | 1 | conforme | 755 | 9 | 67 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 11 | /guides/ce-qu-une-assistante-externalisee-ne-fait-pas | publiée | 59 | 142 | 1 | conforme | 739 | 7 | 66 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 12 | /guides/rentabilite-assistante-externalisee | publiée | 66 | 133 | 1 | conforme | 845 | 9 | 66 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 13 | /guides/point-hebdomadaire-avec-son-assistante | publiée | 70 | 140 | 1 | conforme | 734 | 8 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 14 | /guides/assistante-externalisee-et-ia | publiée | 64 | 153 | 1 | conforme | 924 | 9 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 15 | /guides/conciergerie-privee-ou-lifestyle-assistant | publiée | 58 | 144 | 1 | conforme | 675 | 8 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 16 | /guides/chief-of-staff-ou-executive-assistant | publiée | 67 | 146 | 1 | conforme | 715 | 7 | 66 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 17 | /guides/canal-pour-transmettre-ses-demandes | publiée | 66 | 139 | 1 | conforme | 767 | 8 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 18 | /guides/organiser-l-administratif-de-son-entreprise | publiée | 57 | 154 | 1 | conforme | 1133 | 10 | 75 | 13 | 1 | Article, ItemList, FAQPage, BreadcrumbList | aucun | aucun |
| 19 | /guides/arborescence-dossiers-entreprise | publiée | 70 | 132 | 1 | conforme | 708 | 8 | 66 | 11 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 20 | /guides/regles-de-nommage-des-fichiers | publiée | 60 | 125 | 1 | conforme | 611 | 8 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 21 | /guides/duree-de-conservation-documents-entreprise | publiée | 62 | 142 | 1 | conforme | 945 | 10 | 66 | 11 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 22 | /guides/echeancier-administratif-entreprise | publiée | 64 | 141 | 1 | conforme | 757 | 9 | 66 | 16 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 23 | /guides/pieces-pour-l-expert-comptable | publiée | 59 | 143 | 1 | conforme | 760 | 9 | 66 | 13 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 24 | /guides/notes-de-frais-justificatifs | publiée | 68 | 145 | 1 | conforme | 693 | 9 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 25 | /guides/suivi-des-contrats-et-abonnements | publiée | 62 | 143 | 1 | conforme | 666 | 9 | 66 | 13 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 26 | /guides/traitement-du-courrier-entrant | publiée | 63 | 145 | 1 | conforme | 717 | 9 | 66 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 27 | /guides/dossier-permanent-entreprise | publiée | 64 | 133 | 1 | conforme | 801 | 10 | 66 | 11 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 28 | /guides/rediger-une-procedure-interne | publiée | 56 | 146 | 1 | conforme | 645 | 8 | 66 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 29 | /guides/administratif-a-la-creation-d-entreprise | publiée | 59 | 144 | 1 | conforme | 783 | 9 | 66 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 30 | /guides/devis-factures-relances | publiée | 60 | 141 | 1 | conforme | 1576 | 11 | 77 | 14 | 1 | Article, ItemList, FAQPage, BreadcrumbList | aucun | aucun |
| 31 | /guides/mentions-obligatoires-facture | publiée | 60 | 149 | 1 | conforme | 1152 | 11 | 67 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 32 | /guides/facturation-electronique-tpe | publiée | 67 | 142 | 1 | conforme | 1004 | 10 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 33 | /guides/relancer-une-facture-impayee | publiée | 69 | 129 | 1 | conforme | 1155 | 10 | 66 | 11 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 34 | /guides/delais-de-paiement-et-penalites-de-retard | publiée | 66 | 143 | 1 | conforme | 956 | 10 | 66 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 35 | /guides/mise-en-demeure-et-injonction-de-payer | publiée | 69 | 136 | 1 | conforme | 987 | 10 | 66 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 36 | /guides/relancer-un-devis-sans-reponse | publiée | 69 | 119 | 1 | conforme | 872 | 8 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 37 | /guides/devis-contenu-et-validite | publiée | 62 | 133 | 1 | conforme | 920 | 10 | 66 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 38 | /guides/acompte-ou-arrhes | publiée | 67 | 140 | 1 | conforme | 739 | 9 | 65 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 39 | /guides/numerotation-des-factures-et-avoirs | publiée | 69 | 133 | 1 | conforme | 809 | 9 | 65 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 40 | /guides/facture-de-situation-et-retenue-de-garantie | publiée | 68 | 137 | 1 | conforme | 916 | 9 | 65 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 41 | /guides/choisir-un-logiciel-de-facturation | publiée | 69 | 146 | 1 | conforme | 777 | 9 | 65 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 42 | /guides/circuit-des-factures-fournisseurs | publiée | 69 | 133 | 1 | conforme | 831 | 10 | 66 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 43 | /guides/agenda-emails-reunions | publiée | 70 | 147 | 1 | conforme | 1039 | 9 | 76 | 12 | 1 | Article, ItemList, FAQPage, BreadcrumbList | aucun | aucun |
| 44 | /guides/organiser-sa-boite-mail-de-dirigeant | publiée | 63 | 150 | 1 | conforme | 718 | 8 | 66 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 45 | /guides/deleguer-sa-boite-mail | publiée | 64 | 151 | 1 | conforme | 799 | 9 | 66 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 46 | /guides/tenir-un-agenda-de-dirigeant | publiée | 56 | 139 | 1 | conforme | 742 | 8 | 66 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 47 | /guides/preparer-une-reunion | publiée | 68 | 140 | 1 | conforme | 693 | 8 | 66 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 48 | /guides/compte-rendu-de-reunion | publiée | 64 | 139 | 1 | conforme | 700 | 9 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 49 | /guides/reponses-types-emails | publiée | 68 | 140 | 1 | conforme | 682 | 8 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 50 | /guides/gerer-les-demandes-de-rendez-vous | publiée | 64 | 144 | 1 | conforme | 652 | 8 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 51 | /guides/preparer-son-absence | publiée | 61 | 138 | 1 | conforme | 713 | 9 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 52 | /guides/filtrer-les-appels-et-messages | publiée | 70 | 139 | 1 | conforme | 706 | 9 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 53 | /guides/dossier-de-rendez-vous | publiée | 70 | 144 | 1 | conforme | 664 | 8 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 54 | /guides/reunions-et-fuseaux-horaires | publiée | 67 | 146 | 1 | conforme | 722 | 8 | 66 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 55 | /guides/deplacements-et-evenements-professionnels | publiée | 69 | 141 | 1 | conforme | 926 | 9 | 72 | 9 | 1 | Article, ItemList, FAQPage, BreadcrumbList | aucun | aucun |
| 56 | /guides/organiser-un-deplacement-professionnel | publiée | 67 | 117 | 1 | conforme | 671 | 8 | 66 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 57 | /guides/feuille-de-route-de-deplacement | publiée | 57 | 142 | 1 | conforme | 656 | 7 | 65 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 58 | /guides/organiser-un-seminaire-d-equipe | publiée | 64 | 129 | 1 | conforme | 719 | 8 | 66 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 59 | /guides/organiser-un-diner-client | publiée | 56 | 145 | 1 | conforme | 670 | 8 | 66 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 60 | /guides/politique-voyage-petite-entreprise | publiée | 65 | 144 | 1 | conforme | 679 | 8 | 65 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 61 | /guides/deplacement-a-l-etranger-formalites | publiée | 69 | 137 | 1 | conforme | 775 | 10 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 62 | /guides/gerer-un-imprevu-en-deplacement | publiée | 57 | 143 | 1 | conforme | 777 | 9 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 63 | /guides/choisir-un-lieu-de-seminaire | publiée | 63 | 136 | 1 | conforme | 700 | 8 | 66 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 64 | /guides/confidentialite-acces-et-outils | publiée | 67 | 143 | 1 | conforme | 1137 | 11 | 75 | 11 | 1 | Article, ItemList, FAQPage, BreadcrumbList | aucun | aucun |
| 65 | /guides/partager-un-mot-de-passe-en-securite | publiée | 63 | 144 | 1 | conforme | 850 | 10 | 67 | 11 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 66 | /guides/delegation-d-acces-messagerie-et-agenda | publiée | 70 | 149 | 1 | conforme | 839 | 10 | 66 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 67 | /guides/double-authentification-et-delegation | publiée | 67 | 137 | 1 | conforme | 815 | 10 | 67 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 68 | /guides/signature-electronique-niveaux-et-usages | publiée | 64 | 147 | 1 | conforme | 795 | 10 | 66 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 69 | /guides/ia-generative-et-donnees-confidentielles | publiée | 64 | 154 | 1 | conforme | 856 | 10 | 67 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 70 | /guides/choisir-un-outil-de-suivi-des-taches | publiée | 58 | 133 | 1 | conforme | 687 | 9 | 66 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 71 | /guides/choisir-un-espace-de-stockage-partage | publiée | 68 | 139 | 1 | conforme | 718 | 9 | 67 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 72 | /guides/registre-des-acces-entreprise | publiée | 60 | 128 | 1 | conforme | 737 | 10 | 67 | 14 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 73 | /guides/fraude-au-faux-rib-et-au-president | publiée | 65 | 149 | 1 | conforme | 833 | 10 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 74 | /guides/sauvegarde-des-documents-entreprise | publiée | 69 | 150 | 1 | conforme | 748 | 10 | 67 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 75 | /guides/situations-de-dirigeant | publiée | 62 | 147 | 1 | conforme | 1151 | 9 | 75 | 11 | 1 | Article, ItemList, FAQPage, BreadcrumbList | aucun | aucun |
| 76 | /guides/rattraper-un-retard-administratif | publiée | 61 | 152 | 1 | conforme | 802 | 9 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 77 | /guides/dirigeant-goulot-d-etranglement | publiée | 57 | 153 | 1 | conforme | 731 | 8 | 66 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 78 | /guides/remplacer-une-assistante-absente | publiée | 69 | 143 | 1 | conforme | 802 | 9 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 79 | /guides/reprise-d-entreprise-administratif | publiée | 68 | 140 | 1 | conforme | 761 | 9 | 66 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 80 | /guides/pic-d-activite-saisonnier | publiée | 65 | 146 | 1 | conforme | 756 | 9 | 66 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 81 | /guides/premiere-embauche-formalites-administratives | publiée | 64 | 153 | 1 | conforme | 897 | 10 | 66 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 82 | /guides/demenagement-de-bureaux | publiée | 67 | 145 | 1 | conforme | 741 | 9 | 66 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 83 | /guides/appel-d-offres-dossier-de-candidature | publiée | 67 | 144 | 1 | conforme | 809 | 10 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 84 | /guides/dirigeant-souvent-en-deplacement | publiée | 62 | 150 | 1 | conforme | 704 | 8 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 85 | /guides/changer-d-outil-de-gestion | publiée | 66 | 150 | 1 | conforme | 769 | 9 | 67 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 86 | /guides/modeles-et-checklists | publiée | 62 | 143 | 1 | conforme | 949 | 9 | 72 | 9 | 1 | Article, ItemList, FAQPage, BreadcrumbList | aucun | aucun |
| 87 | /guides/modele-tableau-de-suivi-des-factures | publiée | 63 | 122 | 1 | conforme | 703 | 8 | 66 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 88 | /guides/modele-releve-du-temps-administratif | publiée | 70 | 143 | 1 | conforme | 717 | 9 | 66 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 89 | /guides/modele-fiche-de-preferences-dirigeant | publiée | 59 | 124 | 1 | conforme | 707 | 8 | 66 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 90 | /guides/checklist-cloture-annuelle-administrative | publiée | 60 | 153 | 1 | conforme | 753 | 8 | 65 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 91 | /guides/modele-fiche-prestataire | publiée | 64 | 142 | 1 | conforme | 682 | 8 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 92 | /guides/modele-note-de-passation | publiée | 69 | 142 | 1 | conforme | 760 | 8 | 67 | 11 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 93 | /guides/modele-tableau-de-bord-hebdomadaire | publiée | 66 | 132 | 1 | conforme | 738 | 9 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 94 | /guides/checklist-ouverture-dossier-client | publiée | 58 | 153 | 1 | conforme | 762 | 9 | 66 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 95 | /assistante/organismes-de-formation | publiée | 65 | 151 | 1 | conforme | 924 | 8 | 76 | 16 | 1 | Service, FAQPage, BreadcrumbList | aucun | aucun |
| 96 | /assistante/architectes-maitres-d-oeuvre | publiée | 58 | 153 | 1 | conforme | 921 | 8 | 76 | 16 | 1 | Service, FAQPage, BreadcrumbList | aucun | aucun |
| 97 | /assistante/hotellerie-restauration | publiée | 64 | 153 | 1 | conforme | 890 | 8 | 76 | 16 | 1 | Service, FAQPage, BreadcrumbList | aucun | aucun |
| 98 | /assistante/fondateurs-de-startup | publiée | 51 | 159 | 1 | conforme | 931 | 8 | 76 | 16 | 1 | Service, FAQPage, BreadcrumbList | aucun | aucun |
| 99 | /assistante/agences-et-studios | publiée | 69 | 149 | 1 | conforme | 850 | 8 | 76 | 16 | 1 | Service, FAQPage, BreadcrumbList | aucun | aucun |
| 100 | /assistante/organisateurs-d-evenements | publiée | 67 | 140 | 1 | conforme | 921 | 8 | 76 | 16 | 1 | Service, FAQPage, BreadcrumbList | aucun | aucun |
