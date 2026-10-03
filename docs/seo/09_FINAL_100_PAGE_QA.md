# 09 — Contrôle final des 100 pages

> Document généré par `scripts/docs-seo.mjs` le 2026-10-03, à partir des fiches de `src/data` et du build d’aperçu audité. Ne pas le modifier à la main : relancer le script.

## Résultat

| Contrôle | Résultat |
| --- | --- |
| Pages prévues | 100 |
| Pages construites dans le build d’aperçu | 100 |
| Pages sans aucun blocage | 100 |
| Pages rejetées par le quality gate | 0 |
| Pages publiées et indexables aujourd’hui | 2 |
| Pages en attente de relecture humaine | 98 |
| Longueur du contenu principal | min 591 · médiane 786 · max 1679 mots |
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
| 1 | /assistante | publiée | 69 | 148 | 1 | conforme | 667 | 3 | 72 | 17 | 1 | CollectionPage, ItemList, FAQPage, BreadcrumbList | aucun | aucun |
| 2 | /assistante-independante | publiée | 68 | 151 | 1 | conforme | 591 | 3 | 62 | 8 | 1 | CollectionPage, ItemList, FAQPage, BreadcrumbList | aucun | aucun |
| 3 | /guides/externaliser-son-assistanat | brouillon | 63 | 145 | 1 | conforme | 1679 | 10 | 92 | 27 | 1 | Article, ItemList, FAQPage, BreadcrumbList | aucun | aucun |
| 4 | /guides/quelles-taches-deleguer-a-une-assistante | brouillon | 65 | 144 | 1 | conforme | 802 | 8 | 66 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 5 | /guides/quand-prendre-une-assistante | brouillon | 69 | 143 | 1 | conforme | 753 | 7 | 67 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 6 | /guides/contrat-de-prestation-assistante-independante | brouillon | 68 | 148 | 1 | conforme | 898 | 10 | 68 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 7 | /guides/requalification-assistante-independante-salariat | brouillon | 68 | 148 | 1 | conforme | 888 | 10 | 67 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 8 | /guides/niveaux-d-autonomie-delegation | brouillon | 63 | 142 | 1 | conforme | 775 | 7 | 66 | 12 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 9 | /guides/erreurs-de-delegation | brouillon | 63 | 147 | 1 | conforme | 770 | 7 | 68 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 10 | /guides/fin-de-collaboration-assistante-externalisee | brouillon | 69 | 143 | 1 | conforme | 780 | 9 | 68 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 11 | /guides/ce-qu-une-assistante-externalisee-ne-fait-pas | brouillon | 59 | 142 | 1 | conforme | 764 | 7 | 67 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 12 | /guides/rentabilite-assistante-externalisee | brouillon | 66 | 133 | 1 | conforme | 870 | 9 | 67 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 13 | /guides/point-hebdomadaire-avec-son-assistante | brouillon | 70 | 140 | 1 | conforme | 759 | 8 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 14 | /guides/assistante-externalisee-et-ia | brouillon | 64 | 153 | 1 | conforme | 949 | 9 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 15 | /guides/conciergerie-privee-ou-lifestyle-assistant | brouillon | 58 | 144 | 1 | conforme | 700 | 8 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 16 | /guides/chief-of-staff-ou-executive-assistant | brouillon | 67 | 146 | 1 | conforme | 740 | 7 | 67 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 17 | /guides/canal-pour-transmettre-ses-demandes | brouillon | 66 | 139 | 1 | conforme | 792 | 8 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 18 | /guides/organiser-l-administratif-de-son-entreprise | brouillon | 57 | 154 | 1 | conforme | 1158 | 10 | 76 | 13 | 1 | Article, ItemList, FAQPage, BreadcrumbList | aucun | aucun |
| 19 | /guides/arborescence-dossiers-entreprise | brouillon | 70 | 132 | 1 | conforme | 733 | 8 | 67 | 11 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 20 | /guides/regles-de-nommage-des-fichiers | brouillon | 60 | 125 | 1 | conforme | 636 | 8 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 21 | /guides/duree-de-conservation-documents-entreprise | brouillon | 62 | 142 | 1 | conforme | 970 | 10 | 67 | 11 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 22 | /guides/echeancier-administratif-entreprise | brouillon | 64 | 141 | 1 | conforme | 782 | 9 | 67 | 16 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 23 | /guides/pieces-pour-l-expert-comptable | brouillon | 59 | 143 | 1 | conforme | 785 | 9 | 67 | 13 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 24 | /guides/notes-de-frais-justificatifs | brouillon | 68 | 145 | 1 | conforme | 718 | 9 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 25 | /guides/suivi-des-contrats-et-abonnements | brouillon | 62 | 143 | 1 | conforme | 691 | 9 | 67 | 13 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 26 | /guides/traitement-du-courrier-entrant | brouillon | 63 | 145 | 1 | conforme | 742 | 9 | 67 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 27 | /guides/dossier-permanent-entreprise | brouillon | 64 | 133 | 1 | conforme | 826 | 10 | 67 | 11 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 28 | /guides/rediger-une-procedure-interne | brouillon | 56 | 146 | 1 | conforme | 670 | 8 | 67 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 29 | /guides/administratif-a-la-creation-d-entreprise | brouillon | 59 | 144 | 1 | conforme | 808 | 9 | 67 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 30 | /guides/devis-factures-relances | brouillon | 60 | 141 | 1 | conforme | 1601 | 11 | 78 | 14 | 1 | Article, ItemList, FAQPage, BreadcrumbList | aucun | aucun |
| 31 | /guides/mentions-obligatoires-facture | brouillon | 60 | 149 | 1 | conforme | 1177 | 11 | 68 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 32 | /guides/facturation-electronique-tpe | brouillon | 67 | 142 | 1 | conforme | 1029 | 10 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 33 | /guides/relancer-une-facture-impayee | brouillon | 69 | 129 | 1 | conforme | 1180 | 10 | 67 | 11 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 34 | /guides/delais-de-paiement-et-penalites-de-retard | brouillon | 66 | 143 | 1 | conforme | 981 | 10 | 67 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 35 | /guides/mise-en-demeure-et-injonction-de-payer | brouillon | 69 | 136 | 1 | conforme | 1012 | 10 | 67 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 36 | /guides/relancer-un-devis-sans-reponse | brouillon | 69 | 119 | 1 | conforme | 897 | 8 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 37 | /guides/devis-contenu-et-validite | brouillon | 62 | 133 | 1 | conforme | 945 | 10 | 67 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 38 | /guides/acompte-ou-arrhes | brouillon | 67 | 140 | 1 | conforme | 764 | 9 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 39 | /guides/numerotation-des-factures-et-avoirs | brouillon | 69 | 133 | 1 | conforme | 834 | 9 | 66 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 40 | /guides/facture-de-situation-et-retenue-de-garantie | brouillon | 68 | 137 | 1 | conforme | 941 | 9 | 66 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 41 | /guides/choisir-un-logiciel-de-facturation | brouillon | 69 | 146 | 1 | conforme | 802 | 9 | 66 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 42 | /guides/circuit-des-factures-fournisseurs | brouillon | 69 | 133 | 1 | conforme | 856 | 10 | 67 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 43 | /guides/agenda-emails-reunions | brouillon | 70 | 147 | 1 | conforme | 1064 | 9 | 77 | 12 | 1 | Article, ItemList, FAQPage, BreadcrumbList | aucun | aucun |
| 44 | /guides/organiser-sa-boite-mail-de-dirigeant | brouillon | 63 | 150 | 1 | conforme | 743 | 8 | 67 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 45 | /guides/deleguer-sa-boite-mail | brouillon | 64 | 151 | 1 | conforme | 824 | 9 | 67 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 46 | /guides/tenir-un-agenda-de-dirigeant | brouillon | 56 | 139 | 1 | conforme | 767 | 8 | 67 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 47 | /guides/preparer-une-reunion | brouillon | 68 | 140 | 1 | conforme | 718 | 8 | 67 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 48 | /guides/compte-rendu-de-reunion | brouillon | 64 | 139 | 1 | conforme | 725 | 9 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 49 | /guides/reponses-types-emails | brouillon | 68 | 140 | 1 | conforme | 707 | 8 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 50 | /guides/gerer-les-demandes-de-rendez-vous | brouillon | 64 | 144 | 1 | conforme | 677 | 8 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 51 | /guides/preparer-son-absence | brouillon | 61 | 138 | 1 | conforme | 738 | 9 | 68 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 52 | /guides/filtrer-les-appels-et-messages | brouillon | 70 | 139 | 1 | conforme | 731 | 9 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 53 | /guides/dossier-de-rendez-vous | brouillon | 70 | 144 | 1 | conforme | 689 | 8 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 54 | /guides/reunions-et-fuseaux-horaires | brouillon | 67 | 146 | 1 | conforme | 747 | 8 | 67 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 55 | /guides/deplacements-et-evenements-professionnels | brouillon | 69 | 141 | 1 | conforme | 951 | 9 | 73 | 9 | 1 | Article, ItemList, FAQPage, BreadcrumbList | aucun | aucun |
| 56 | /guides/organiser-un-deplacement-professionnel | brouillon | 67 | 117 | 1 | conforme | 696 | 8 | 67 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 57 | /guides/feuille-de-route-de-deplacement | brouillon | 57 | 142 | 1 | conforme | 681 | 7 | 66 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 58 | /guides/organiser-un-seminaire-d-equipe | brouillon | 64 | 129 | 1 | conforme | 744 | 8 | 67 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 59 | /guides/organiser-un-diner-client | brouillon | 56 | 145 | 1 | conforme | 695 | 8 | 67 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 60 | /guides/politique-voyage-petite-entreprise | brouillon | 65 | 144 | 1 | conforme | 704 | 8 | 66 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 61 | /guides/deplacement-a-l-etranger-formalites | brouillon | 69 | 137 | 1 | conforme | 800 | 10 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 62 | /guides/gerer-un-imprevu-en-deplacement | brouillon | 57 | 143 | 1 | conforme | 802 | 9 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 63 | /guides/choisir-un-lieu-de-seminaire | brouillon | 63 | 136 | 1 | conforme | 725 | 8 | 67 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 64 | /guides/confidentialite-acces-et-outils | brouillon | 67 | 143 | 1 | conforme | 1162 | 11 | 76 | 11 | 1 | Article, ItemList, FAQPage, BreadcrumbList | aucun | aucun |
| 65 | /guides/partager-un-mot-de-passe-en-securite | brouillon | 63 | 144 | 1 | conforme | 875 | 10 | 68 | 11 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 66 | /guides/delegation-d-acces-messagerie-et-agenda | brouillon | 70 | 149 | 1 | conforme | 864 | 10 | 67 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 67 | /guides/double-authentification-et-delegation | brouillon | 67 | 137 | 1 | conforme | 840 | 10 | 68 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 68 | /guides/signature-electronique-niveaux-et-usages | brouillon | 64 | 147 | 1 | conforme | 820 | 10 | 67 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 69 | /guides/ia-generative-et-donnees-confidentielles | brouillon | 64 | 154 | 1 | conforme | 881 | 10 | 68 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 70 | /guides/choisir-un-outil-de-suivi-des-taches | brouillon | 58 | 133 | 1 | conforme | 712 | 9 | 67 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 71 | /guides/choisir-un-espace-de-stockage-partage | brouillon | 68 | 139 | 1 | conforme | 743 | 9 | 68 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 72 | /guides/registre-des-acces-entreprise | brouillon | 60 | 128 | 1 | conforme | 762 | 10 | 68 | 14 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 73 | /guides/fraude-au-faux-rib-et-au-president | brouillon | 65 | 149 | 1 | conforme | 858 | 10 | 68 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 74 | /guides/sauvegarde-des-documents-entreprise | brouillon | 69 | 150 | 1 | conforme | 773 | 10 | 68 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 75 | /guides/situations-de-dirigeant | brouillon | 62 | 147 | 1 | conforme | 1176 | 9 | 76 | 11 | 1 | Article, ItemList, FAQPage, BreadcrumbList | aucun | aucun |
| 76 | /guides/rattraper-un-retard-administratif | brouillon | 61 | 152 | 1 | conforme | 827 | 9 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 77 | /guides/dirigeant-goulot-d-etranglement | brouillon | 57 | 153 | 1 | conforme | 756 | 8 | 67 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 78 | /guides/remplacer-une-assistante-absente | brouillon | 69 | 143 | 1 | conforme | 827 | 9 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 79 | /guides/reprise-d-entreprise-administratif | brouillon | 68 | 140 | 1 | conforme | 786 | 9 | 67 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 80 | /guides/pic-d-activite-saisonnier | brouillon | 65 | 146 | 1 | conforme | 781 | 9 | 67 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 81 | /guides/premiere-embauche-formalites-administratives | brouillon | 64 | 153 | 1 | conforme | 922 | 10 | 67 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 82 | /guides/demenagement-de-bureaux | brouillon | 67 | 145 | 1 | conforme | 766 | 9 | 67 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 83 | /guides/appel-d-offres-dossier-de-candidature | brouillon | 67 | 144 | 1 | conforme | 834 | 10 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 84 | /guides/dirigeant-souvent-en-deplacement | brouillon | 62 | 150 | 1 | conforme | 729 | 8 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 85 | /guides/changer-d-outil-de-gestion | brouillon | 66 | 150 | 1 | conforme | 794 | 9 | 68 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 86 | /guides/modeles-et-checklists | brouillon | 62 | 143 | 1 | conforme | 974 | 9 | 73 | 9 | 1 | Article, ItemList, FAQPage, BreadcrumbList | aucun | aucun |
| 87 | /guides/modele-tableau-de-suivi-des-factures | brouillon | 63 | 122 | 1 | conforme | 728 | 8 | 67 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 88 | /guides/modele-releve-du-temps-administratif | brouillon | 70 | 143 | 1 | conforme | 742 | 9 | 67 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 89 | /guides/modele-fiche-de-preferences-dirigeant | brouillon | 59 | 124 | 1 | conforme | 732 | 8 | 67 | 10 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 90 | /guides/checklist-cloture-annuelle-administrative | brouillon | 60 | 153 | 1 | conforme | 778 | 8 | 66 | 9 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 91 | /guides/modele-fiche-prestataire | brouillon | 64 | 142 | 1 | conforme | 707 | 8 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 92 | /guides/modele-note-de-passation | brouillon | 69 | 142 | 1 | conforme | 785 | 8 | 68 | 11 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 93 | /guides/modele-tableau-de-bord-hebdomadaire | brouillon | 66 | 132 | 1 | conforme | 763 | 9 | 67 | 8 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 94 | /guides/checklist-ouverture-dossier-client | brouillon | 58 | 153 | 1 | conforme | 787 | 9 | 67 | 7 | 2 | Article, FAQPage, BreadcrumbList | aucun | aucun |
| 95 | /assistante/organismes-de-formation | brouillon | 65 | 151 | 1 | conforme | 949 | 8 | 77 | 16 | 1 | Service, FAQPage, BreadcrumbList | aucun | aucun |
| 96 | /assistante/architectes-maitres-d-oeuvre | brouillon | 58 | 153 | 1 | conforme | 946 | 8 | 77 | 16 | 1 | Service, FAQPage, BreadcrumbList | aucun | aucun |
| 97 | /assistante/hotellerie-restauration | brouillon | 64 | 153 | 1 | conforme | 915 | 8 | 77 | 16 | 1 | Service, FAQPage, BreadcrumbList | aucun | aucun |
| 98 | /assistante/fondateurs-de-startup | brouillon | 51 | 159 | 1 | conforme | 956 | 8 | 77 | 16 | 1 | Service, FAQPage, BreadcrumbList | aucun | aucun |
| 99 | /assistante/agences-et-studios | brouillon | 69 | 149 | 1 | conforme | 875 | 8 | 77 | 16 | 1 | Service, FAQPage, BreadcrumbList | aucun | aucun |
| 100 | /assistante/organisateurs-d-evenements | brouillon | 67 | 140 | 1 | conforme | 946 | 8 | 77 | 16 | 1 | Service, FAQPage, BreadcrumbList | aucun | aucun |
