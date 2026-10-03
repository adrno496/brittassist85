# 03 — Graphe de liens internes

> Document généré par `scripts/docs-seo.mjs` le 2026-10-03, à partir des fiches de `src/data` et du build d’aperçu audité. Ne pas le modifier à la main : relancer le script.

## Principe

Trois niveaux, et aucun contenu atteignable seulement par le sitemap :

```
Accueil
├── /guides ─────────────── hub de la bibliothèque (navigation principale)
│   ├── 8 piliers ───────── un par dossier, cités aussi dans le pied de page
│   │   └── pages du dossier (liste « Dans ce dossier » du pilier)
│   └── chaque page ─────── pilier + 5 pages voisines + 3 à 6 liens choisis + une offre
├── /assistante ─────────── hub « par métier » (pied de page, /guides, /services)
│   └── 14 pages métier
├── /assistante-independante  hub « par zone »
│   └── 5 pages de zone
└── /services ───────────── 13 prestations, désormais citées par les guides
```

Chaque guide porte quatre groupes de liens : le fil d’Ariane (Guides → dossier → page), les liens choisis à la main (`liens` de la fiche), les cinq pages suivantes du même dossier (en boucle, pour que chaque page propose une suite différente), et l’appel à l’action du dossier, qui mène à l’offre correspondante.

## État mesuré

Mesures prises sur le build (151 pages, dont 0 brouillon(s)).

| Indicateur | Valeur |
| --- | --- |
| Pages orphelines ou inatteignables | 0 |
| Liens internes cassés | 0 |
| Profondeur de clic depuis l’accueil | 1 pages à 0 clic(s) · 45 pages à 1 clic(s) · 103 pages à 2 clic(s) |
| Profondeur maximale | 2 (seuil d’alerte : 3) |
| Liens entrants contextuels vers les 100 nouvelles pages | min 7 · médiane 9 · max 27 |
| Liens sortants contextuels des 100 nouvelles pages | min 12 · médiane 14 · max 32 |
| Ancres génériques (« cliquez ici », « en savoir plus ») | 0 |

## Avant / après par famille de pages existantes

Liens entrants **contextuels** (pages qui citent la cible dans leur contenu). « Avant » : build de référence du 3 octobre 2026. « Après » : build d’aperçu, toutes pages publiées.

| Famille | Avant | Après |
| --- | --- | --- |
| Prestations `/services/<slug>` | min 2 · médiane 6 · max 10 | min 5 · médiane 14 · max 36 |
| Métiers `/assistante/<slug>` (existants) | min 9 · médiane 14 · max 14 | min 16 · médiane 16 · max 27 |
| Zones `/assistante-independante/<slug>` | min 14 · médiane 14 · max 16 | min 21 · médiane 21 · max 24 |
| Guides existants | min 2 · médiane 7 · max 26 | min 7 · médiane 9 · max 34 |

### Détail des 13 pages de prestation

C’était le point faible relevé à l’inventaire : des pages commerciales peu citées.

| Page | Entrants avant | Entrants après | Clics avant | Clics après |
| --- | --- | --- | --- | --- |
| /services/assistanat-anglais | 2 | 6 | 2 | 1 |
| /services/coordination | 6 | 18 | 2 | 1 |
| /services/facturation | 9 | 30 | 1 | 2 |
| /services/gestion-administrative | 10 | 36 | 2 | 1 |
| /services/gestion-agenda | 6 | 22 | 2 | 2 |
| /services/gestion-des-contrats | 9 | 14 | 1 | 2 |
| /services/organisation-deplacements | 4 | 17 | 1 | 1 |
| /services/organisation-personnelle | 3 | 7 | 2 | 1 |
| /services/recherches | 2 | 5 | 2 | 2 |
| /services/reporting | 8 | 10 | 2 | 2 |
| /services/reservations | 3 | 9 | 1 | 1 |
| /services/suivi-prestataires | 7 | 14 | 1 | 2 |
| /services/support-equipes | 4 | 10 | 2 | 2 |

## Pages orphelines

Aucune. Le contrôle `page-orpheline` fait échouer le build : une page sans lien entrant ne peut pas être mise en ligne.

Deux adresses étaient en erreur 404 avant ce chantier, alors que 13 pages vivaient sous elles : `/assistante` et `/assistante-independante`. Elles sont désormais des hubs, cités depuis le pied de page, `/guides`, les pages métier et les pages de zone.

## Les 100 nouvelles pages

| URL | Clics | Citée par (contenu) | Cite (contenu) | Premières pages qui la citent |
| --- | --- | --- | --- | --- |
| /assistante | 1 | 17 | 26 | /404, /assistante-independante, /assistante/agences-et-studios … (+14) |
| /assistante-independante | 1 | 8 | 14 | /404, /assistante, /assistante-independante/a-distance … (+5) |
| /guides/externaliser-son-assistanat | 1 | 27 | 32 | /guides, /guides/assistante-externalisee-et-ia, /guides/assistante-independante-ou-salariee … (+24) |
| /guides/quelles-taches-deleguer-a-une-assistante | 2 | 10 | 13 | /guides, /guides/ce-qu-une-assistante-externalisee-ne-fait-pas, /guides/choisir-assistante-externalisee … (+7) |
| /guides/quand-prendre-une-assistante | 2 | 10 | 15 | /guides, /guides/choisir-assistante-externalisee, /guides/externaliser-son-assistanat … (+7) |
| /guides/contrat-de-prestation-assistante-independante | 2 | 10 | 14 | /guides, /guides/choisir-assistante-externalisee, /guides/externaliser-son-assistanat … (+7) |
| /guides/requalification-assistante-independante-salariat | 2 | 7 | 13 | /guides, /guides/contrat-de-prestation-assistante-independante, /guides/externaliser-son-assistanat … (+4) |
| /guides/niveaux-d-autonomie-delegation | 2 | 12 | 13 | /guides, /guides/contrat-de-prestation-assistante-independante, /guides/dirigeant-goulot-d-etranglement … (+9) |
| /guides/erreurs-de-delegation | 2 | 7 | 14 | /guides, /guides/contrat-de-prestation-assistante-independante, /guides/externaliser-son-assistanat … (+4) |
| /guides/fin-de-collaboration-assistante-externalisee | 2 | 9 | 15 | /guides, /guides/contrat-de-prestation-assistante-independante, /guides/erreurs-de-delegation … (+6) |
| /guides/ce-qu-une-assistante-externalisee-ne-fait-pas | 2 | 9 | 14 | /guides, /guides/contrat-de-prestation-assistante-independante, /guides/erreurs-de-delegation … (+6) |
| /guides/rentabilite-assistante-externalisee | 2 | 9 | 15 | /guides, /guides/ce-qu-une-assistante-externalisee-ne-fait-pas, /guides/erreurs-de-delegation … (+6) |
| /guides/point-hebdomadaire-avec-son-assistante | 2 | 8 | 14 | /guides, /guides/ce-qu-une-assistante-externalisee-ne-fait-pas, /guides/erreurs-de-delegation … (+5) |
| /guides/assistante-externalisee-et-ia | 2 | 8 | 14 | /guides, /guides/ce-qu-une-assistante-externalisee-ne-fait-pas, /guides/erreurs-de-delegation … (+5) |
| /guides/conciergerie-privee-ou-lifestyle-assistant | 2 | 8 | 14 | /guides, /guides/assistante-externalisee-et-ia, /guides/ce-qu-une-assistante-externalisee-ne-fait-pas … (+5) |
| /guides/chief-of-staff-ou-executive-assistant | 2 | 7 | 14 | /guides, /guides/assistante-externalisee-et-ia, /guides/ce-qu-une-assistante-externalisee-ne-fait-pas … (+4) |
| /guides/canal-pour-transmettre-ses-demandes | 2 | 8 | 14 | /guides, /guides/assistante-externalisee-et-ia, /guides/chief-of-staff-ou-executive-assistant … (+5) |
| /guides/organiser-l-administratif-de-son-entreprise | 1 | 13 | 17 | /guides, /guides/administratif-a-la-creation-d-entreprise, /guides/arborescence-dossiers-entreprise … (+10) |
| /guides/arborescence-dossiers-entreprise | 2 | 11 | 12 | /guides, /guides/administratif-a-la-creation-d-entreprise, /guides/checklist-ouverture-dossier-client … (+8) |
| /guides/regles-de-nommage-des-fichiers | 2 | 8 | 13 | /guides, /guides/administratif-a-la-creation-d-entreprise, /guides/arborescence-dossiers-entreprise … (+5) |
| /guides/duree-de-conservation-documents-entreprise | 2 | 11 | 13 | /guides, /guides/administratif-a-la-creation-d-entreprise, /guides/arborescence-dossiers-entreprise … (+8) |
| /guides/echeancier-administratif-entreprise | 2 | 16 | 12 | /guides, /guides/administratif-a-la-creation-d-entreprise, /guides/arborescence-dossiers-entreprise … (+13) |
| /guides/pieces-pour-l-expert-comptable | 2 | 13 | 13 | /guides, /guides/administratif-a-la-creation-d-entreprise, /guides/arborescence-dossiers-entreprise … (+10) |
| /guides/notes-de-frais-justificatifs | 2 | 8 | 14 | /guides, /guides/arborescence-dossiers-entreprise, /guides/duree-de-conservation-documents-entreprise … (+5) |
| /guides/suivi-des-contrats-et-abonnements | 2 | 13 | 15 | /guides, /guides/checklist-cloture-annuelle-administrative, /guides/demenagement-de-bureaux … (+10) |
| /guides/traitement-du-courrier-entrant | 2 | 10 | 13 | /guides, /guides/dirigeant-souvent-en-deplacement, /guides/duree-de-conservation-documents-entreprise … (+7) |
| /guides/dossier-permanent-entreprise | 2 | 11 | 14 | /guides, /guides/administratif-a-la-creation-d-entreprise, /guides/appel-d-offres-dossier-de-candidature … (+8) |
| /guides/rediger-une-procedure-interne | 2 | 10 | 14 | /guides, /guides/dirigeant-goulot-d-etranglement, /guides/dossier-permanent-entreprise … (+7) |
| /guides/administratif-a-la-creation-d-entreprise | 2 | 7 | 14 | /guides, /guides/dossier-permanent-entreprise, /guides/notes-de-frais-justificatifs … (+4) |
| /guides/devis-factures-relances | 1 | 14 | 18 | /guides, /guides/acompte-ou-arrhes, /guides/choisir-un-logiciel-de-facturation … (+11) |
| /guides/mentions-obligatoires-facture | 2 | 10 | 12 | /guides, /guides/acompte-ou-arrhes, /guides/checklist-ouverture-dossier-client … (+7) |
| /guides/facturation-electronique-tpe | 2 | 8 | 14 | /guides, /guides/checklist-ouverture-dossier-client, /guides/choisir-un-logiciel-de-facturation … (+5) |
| /guides/relancer-une-facture-impayee | 2 | 11 | 12 | /guides, /guides/choisir-un-logiciel-de-facturation, /guides/circuit-des-factures-fournisseurs … (+8) |
| /guides/delais-de-paiement-et-penalites-de-retard | 2 | 9 | 14 | /guides, /guides/choisir-un-logiciel-de-facturation, /guides/circuit-des-factures-fournisseurs … (+6) |
| /guides/mise-en-demeure-et-injonction-de-payer | 2 | 7 | 14 | /guides, /guides/circuit-des-factures-fournisseurs, /guides/delais-de-paiement-et-penalites-de-retard … (+4) |
| /guides/relancer-un-devis-sans-reponse | 2 | 8 | 12 | /guides, /guides/delais-de-paiement-et-penalites-de-retard, /guides/devis-contenu-et-validite … (+5) |
| /guides/devis-contenu-et-validite | 2 | 9 | 14 | /guides, /guides/acompte-ou-arrhes, /guides/delais-de-paiement-et-penalites-de-retard … (+6) |
| /guides/acompte-ou-arrhes | 2 | 8 | 12 | /guides, /guides/choisir-un-lieu-de-seminaire, /guides/delais-de-paiement-et-penalites-de-retard … (+5) |
| /guides/numerotation-des-factures-et-avoirs | 2 | 10 | 12 | /guides, /guides/acompte-ou-arrhes, /guides/changer-d-outil-de-gestion … (+7) |
| /guides/facture-de-situation-et-retenue-de-garantie | 2 | 7 | 13 | /guides, /guides/acompte-ou-arrhes, /guides/devis-contenu-et-validite … (+4) |
| /guides/choisir-un-logiciel-de-facturation | 2 | 10 | 13 | /guides, /guides/acompte-ou-arrhes, /guides/administratif-a-la-creation-d-entreprise … (+7) |
| /guides/circuit-des-factures-fournisseurs | 2 | 10 | 14 | /guides, /guides/acompte-ou-arrhes, /guides/choisir-un-logiciel-de-facturation … (+7) |
| /guides/agenda-emails-reunions | 1 | 12 | 17 | /guides, /guides/compte-rendu-de-reunion, /guides/deleguer-sa-boite-mail … (+9) |
| /guides/organiser-sa-boite-mail-de-dirigeant | 2 | 10 | 13 | /guides, /guides/agenda-emails-reunions, /guides/deleguer-sa-boite-mail … (+7) |
| /guides/deleguer-sa-boite-mail | 2 | 9 | 15 | /guides, /guides/agenda-emails-reunions, /guides/delegation-d-acces-messagerie-et-agenda … (+6) |
| /guides/tenir-un-agenda-de-dirigeant | 2 | 10 | 13 | /guides, /guides/agenda-emails-reunions, /guides/delegation-d-acces-messagerie-et-agenda … (+7) |
| /guides/preparer-une-reunion | 2 | 9 | 13 | /guides, /guides/agenda-emails-reunions, /guides/compte-rendu-de-reunion … (+6) |
| /guides/compte-rendu-de-reunion | 2 | 8 | 15 | /guides, /guides/agenda-emails-reunions, /guides/deleguer-sa-boite-mail … (+5) |
| /guides/reponses-types-emails | 2 | 8 | 15 | /guides, /guides/agenda-emails-reunions, /guides/compte-rendu-de-reunion … (+5) |
| /guides/gerer-les-demandes-de-rendez-vous | 2 | 8 | 13 | /guides, /guides/agenda-emails-reunions, /guides/compte-rendu-de-reunion … (+5) |
| /guides/preparer-son-absence | 2 | 8 | 13 | /guides, /guides/agenda-emails-reunions, /guides/compte-rendu-de-reunion … (+5) |
| /guides/filtrer-les-appels-et-messages | 2 | 8 | 14 | /guides, /guides/agenda-emails-reunions, /guides/compte-rendu-de-reunion … (+5) |
| /guides/dossier-de-rendez-vous | 2 | 8 | 13 | /guides, /guides/agenda-emails-reunions, /guides/compte-rendu-de-reunion … (+5) |
| /guides/reunions-et-fuseaux-horaires | 2 | 9 | 15 | /guides, /guides/agenda-emails-reunions, /guides/deplacement-a-l-etranger-formalites … (+6) |
| /guides/deplacements-et-evenements-professionnels | 1 | 9 | 14 | /guides, /guides/choisir-un-lieu-de-seminaire, /guides/deplacement-a-l-etranger-formalites … (+6) |
| /guides/organiser-un-deplacement-professionnel | 2 | 9 | 13 | /guides, /guides/choisir-un-lieu-de-seminaire, /guides/deplacement-a-l-etranger-formalites … (+6) |
| /guides/feuille-de-route-de-deplacement | 2 | 7 | 13 | /guides, /guides/choisir-un-lieu-de-seminaire, /guides/deplacement-a-l-etranger-formalites … (+4) |
| /guides/organiser-un-seminaire-d-equipe | 2 | 7 | 14 | /guides, /guides/choisir-un-lieu-de-seminaire, /guides/deplacement-a-l-etranger-formalites … (+4) |
| /guides/organiser-un-diner-client | 2 | 7 | 15 | /guides, /guides/choisir-un-lieu-de-seminaire, /guides/deplacements-et-evenements-professionnels … (+4) |
| /guides/politique-voyage-petite-entreprise | 2 | 8 | 13 | /guides, /guides/choisir-un-lieu-de-seminaire, /guides/deplacements-et-evenements-professionnels … (+5) |
| /guides/deplacement-a-l-etranger-formalites | 2 | 8 | 13 | /guides, /guides/deplacements-et-evenements-professionnels, /guides/feuille-de-route-de-deplacement … (+5) |
| /guides/gerer-un-imprevu-en-deplacement | 2 | 8 | 12 | /guides, /guides/deplacement-a-l-etranger-formalites, /guides/deplacements-et-evenements-professionnels … (+5) |
| /guides/choisir-un-lieu-de-seminaire | 2 | 7 | 14 | /guides, /guides/deplacement-a-l-etranger-formalites, /guides/deplacements-et-evenements-professionnels … (+4) |
| /guides/confidentialite-acces-et-outils | 1 | 11 | 15 | /guides, /guides/choisir-un-espace-de-stockage-partage, /guides/choisir-un-outil-de-suivi-des-taches … (+8) |
| /guides/partager-un-mot-de-passe-en-securite | 2 | 11 | 12 | /guides, /guides/canal-pour-transmettre-ses-demandes, /guides/choisir-un-espace-de-stockage-partage … (+8) |
| /guides/delegation-d-acces-messagerie-et-agenda | 2 | 10 | 14 | /guides, /guides/choisir-un-espace-de-stockage-partage, /guides/confidentialite-acces-et-outils … (+7) |
| /guides/double-authentification-et-delegation | 2 | 7 | 13 | /guides, /guides/confidentialite-acces-et-outils, /guides/delegation-d-acces-messagerie-et-agenda … (+4) |
| /guides/signature-electronique-niveaux-et-usages | 2 | 10 | 14 | /guides, /guides/appel-d-offres-dossier-de-candidature, /guides/confidentialite-acces-et-outils … (+7) |
| /guides/ia-generative-et-donnees-confidentielles | 2 | 9 | 13 | /guides, /guides/assistante-externalisee-et-ia, /guides/compte-rendu-de-reunion … (+6) |
| /guides/choisir-un-outil-de-suivi-des-taches | 2 | 7 | 12 | /guides, /guides/confidentialite-acces-et-outils, /guides/delegation-d-acces-messagerie-et-agenda … (+4) |
| /guides/choisir-un-espace-de-stockage-partage | 2 | 9 | 12 | /guides, /guides/arborescence-dossiers-entreprise, /guides/choisir-un-outil-de-suivi-des-taches … (+6) |
| /guides/registre-des-acces-entreprise | 2 | 14 | 13 | /guides, /guides/changer-d-outil-de-gestion, /guides/choisir-un-espace-de-stockage-partage … (+11) |
| /guides/fraude-au-faux-rib-et-au-president | 2 | 8 | 14 | /guides, /guides/choisir-un-espace-de-stockage-partage, /guides/choisir-un-outil-de-suivi-des-taches … (+5) |
| /guides/sauvegarde-des-documents-entreprise | 2 | 7 | 14 | /guides, /guides/choisir-un-espace-de-stockage-partage, /guides/choisir-un-outil-de-suivi-des-taches … (+4) |
| /guides/situations-de-dirigeant | 1 | 11 | 17 | /guides, /guides/appel-d-offres-dossier-de-candidature, /guides/changer-d-outil-de-gestion … (+8) |
| /guides/rattraper-un-retard-administratif | 2 | 8 | 15 | /guides, /guides/appel-d-offres-dossier-de-candidature, /guides/changer-d-outil-de-gestion … (+5) |
| /guides/dirigeant-goulot-d-etranglement | 2 | 9 | 15 | /guides, /guides/appel-d-offres-dossier-de-candidature, /guides/changer-d-outil-de-gestion … (+6) |
| /guides/remplacer-une-assistante-absente | 2 | 8 | 15 | /guides, /guides/appel-d-offres-dossier-de-candidature, /guides/changer-d-outil-de-gestion … (+5) |
| /guides/reprise-d-entreprise-administratif | 2 | 7 | 15 | /guides, /guides/changer-d-outil-de-gestion, /guides/dirigeant-goulot-d-etranglement … (+4) |
| /guides/pic-d-activite-saisonnier | 2 | 7 | 14 | /guides, /guides/changer-d-outil-de-gestion, /guides/dirigeant-goulot-d-etranglement … (+4) |
| /guides/premiere-embauche-formalites-administratives | 2 | 7 | 15 | /guides, /guides/dirigeant-goulot-d-etranglement, /guides/pic-d-activite-saisonnier … (+4) |
| /guides/demenagement-de-bureaux | 2 | 7 | 15 | /guides, /guides/dirigeant-goulot-d-etranglement, /guides/pic-d-activite-saisonnier … (+4) |
| /guides/appel-d-offres-dossier-de-candidature | 2 | 8 | 15 | /guides, /guides/demenagement-de-bureaux, /guides/dossier-permanent-entreprise … (+5) |
| /guides/dirigeant-souvent-en-deplacement | 2 | 8 | 15 | /guides, /guides/appel-d-offres-dossier-de-candidature, /guides/demenagement-de-bureaux … (+5) |
| /guides/changer-d-outil-de-gestion | 2 | 7 | 16 | /guides, /guides/appel-d-offres-dossier-de-candidature, /guides/demenagement-de-bureaux … (+4) |
| /guides/modeles-et-checklists | 1 | 9 | 13 | /guides, /guides/checklist-cloture-annuelle-administrative, /guides/checklist-ouverture-dossier-client … (+6) |
| /guides/modele-tableau-de-suivi-des-factures | 2 | 10 | 14 | /guides, /guides/checklist-cloture-annuelle-administrative, /guides/checklist-ouverture-dossier-client … (+7) |
| /guides/modele-releve-du-temps-administratif | 2 | 9 | 14 | /guides, /guides/checklist-ouverture-dossier-client, /guides/modele-fiche-prestataire … (+6) |
| /guides/modele-fiche-de-preferences-dirigeant | 2 | 10 | 14 | /guides, /guides/checklist-ouverture-dossier-client, /guides/conciergerie-privee-ou-lifestyle-assistant … (+7) |
| /guides/checklist-cloture-annuelle-administrative | 2 | 9 | 14 | /guides, /guides/checklist-ouverture-dossier-client, /guides/duree-de-conservation-documents-entreprise … (+6) |
| /guides/modele-fiche-prestataire | 2 | 8 | 14 | /guides, /guides/checklist-cloture-annuelle-administrative, /guides/checklist-ouverture-dossier-client … (+5) |
| /guides/modele-note-de-passation | 2 | 11 | 15 | /guides, /guides/checklist-cloture-annuelle-administrative, /guides/fin-de-collaboration-assistante-externalisee … (+8) |
| /guides/modele-tableau-de-bord-hebdomadaire | 2 | 8 | 13 | /guides, /guides/checklist-cloture-annuelle-administrative, /guides/modele-fiche-de-preferences-dirigeant … (+5) |
| /guides/checklist-ouverture-dossier-client | 2 | 7 | 14 | /guides, /guides/checklist-cloture-annuelle-administrative, /guides/modele-fiche-de-preferences-dirigeant … (+4) |
| /assistante/organismes-de-formation | 1 | 16 | 30 | /assistante, /assistante/agences-et-studios, /assistante/agents-immobiliers … (+13) |
| /assistante/architectes-maitres-d-oeuvre | 1 | 16 | 30 | /assistante, /assistante/agences-et-studios, /assistante/agents-immobiliers … (+13) |
| /assistante/hotellerie-restauration | 1 | 16 | 30 | /assistante, /assistante/agences-et-studios, /assistante/agents-immobiliers … (+13) |
| /assistante/fondateurs-de-startup | 1 | 16 | 30 | /assistante, /assistante/agences-et-studios, /assistante/agents-immobiliers … (+13) |
| /assistante/agences-et-studios | 1 | 16 | 30 | /assistante, /assistante/agents-immobiliers, /assistante/architectes-maitres-d-oeuvre … (+13) |
| /assistante/organisateurs-d-evenements | 1 | 16 | 30 | /assistante, /assistante/agences-et-studios, /assistante/agents-immobiliers … (+13) |
