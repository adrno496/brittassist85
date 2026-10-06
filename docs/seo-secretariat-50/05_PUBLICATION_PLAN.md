# 05 — Plan de publication

> Document généré par `scripts/docs-secretariat.mjs` le 2026-10-06, à partir des fiches, des registres et du build d’aperçu. Ne pas le modifier à la main : relancer `npm run docs:secretariat`.

Les 50 pages existent. **En ligne : 50. En brouillon : 0.** Un brouillon est généré par `npm run build:apercu`, en `noindex`, hors sitemap ; `npm run build` ne le génère pas du tout. Validées par le propriétaire du site : 50 — une validation garde une trace, elle ne met rien en ligne. Ce document donne l’ordre dans lequel publier les pages.

## Ce plan n’a pas été suivi

Les 50 pages ont été mises en ligne le même jour, le 2026-10-06, sur décision du propriétaire du site : voir « Décisions de relecture » à la fin de `11_HUMAN_REVIEW_CHECKLIST.md`. Les quatre lots ci-dessous n’ont donc pas servi d’étapes, et les critères de passage de l’un à l’autre n’ont pas été appliqués. Ils gardent une utilité : ils disent dans quel ordre regarder les pages, et lesquelles retirer en premier si la page de référence perd des clics.

## Principe

Le plan prévoyait de ne pas publier les pages d’un coup : quatre lots, du plus proche de la page de référence au plus éloigné, et un regard sur ce que chacun produit avant de passer au suivant.

**Aucun calendrier n’est fixé ici.** Aucune donnée de recherche n’était disponible pour en justifier un (voir `00_BASELINE.md`). Le passage d’un lot au suivant dépend d’un constat, non d’une date. Un repère de bon sens seulement : attendre que les pages d’un lot aient été explorées et, pour la plupart, indexées — ce qui se lit dans la Search Console, propriété `https://www.brittassist.fr/`.

## État des lots

| Lot | Pages | En ligne | Validées par le propriétaire | Relues par Brittany Dreano | Date portée par le lot |
| --- | --- | --- | --- | --- | --- |
| A | 10 | 10 | 10 | 0 | 2026-10-06 |
| B | 10 | 10 | 10 | 0 | 2026-10-06 |
| C | 15 | 15 | 15 | 0 | 2026-10-06 |
| D | 15 | 15 | 15 | 0 | 2026-10-06 |

Les trois colonnes ne disent pas la même chose : une page validée reste un brouillon tant qu’elle n’est pas inscrite dans `publications.mjs`, et seule une page relue par Brittany Dreano affiche une mention de relecture. Détail dans `11_HUMAN_REVIEW_CHECKLIST.md`.

## Publier un lot : la marche à suivre

1. **Relire** les pages du lot (`11_HUMAN_REVIEW_CHECKLIST.md`), ou décider en connaissance de cause de les publier sans relecture. Une validation du propriétaire s’inscrit dans la liste `validations` de `src/data/relectures.mjs`.
2. **Dater** : dans `src/data/dossiers/secretariat-lots.ts`, remplacer la date du lot par celle du jour de mise en ligne. Les pages du lot en tirent leur date de publication et de mise à jour.
3. **Inscrire** : ajouter une ligne par page dans `src/data/publications.mjs` (page en ligne, sans mention de relecture). Pour une page relue par Brittany Dreano, ajouter aussi sa ligne dans l’objet `relectures` de `src/data/relectures.mjs` : la mention « Relu par Brittany Dreano » s’affichera.
4. **Contrôler** : `npm run check`, `npm test`, `npm run qa`, `npm run qa:similarite`.
5. **Pour le lot A seulement** : la page de référence `/guides/secretariat-externalise` gagne ce jour-là sa rubrique « Pour approfondir ». Mettre à jour son `dateModified` dans `src/data/guides.ts`. Dans `src/data/dates.mjs`, lui donner une date de révision — une constante datée du jour, sur le modèle de `GUIDES_REVISES` — pour que le `<lastmod>` du sitemap suive. Ne pas le faire avant : tant qu’aucune page du lot n’est en ligne, la page de référence n’a pas changé, et sa date non plus.
6. **Régénérer** ces documents : `npm run docs:secretariat`.
7. **Mettre en ligne** : un push sur la branche de production déclenche le déploiement. Soumettre ensuite le sitemap dans la Search Console.

Retour arrière : retirer la ligne d’une page de `publications.mjs` la remet en brouillon au build suivant.

## Lot A — 10 pages, toutes P0

**Raison.** Les dix pages qui répondent aux questions qu’un lecteur de la page de référence se pose aussitôt après : ce que le modèle coûte, comment consulter et comparer, ce qui se convient par écrit, ce qui se passe quand la prestataire s’absente. Dix des quatorze liens de la rubrique « Pour approfondir » de la page de référence pointent vers ce lot : c’est lui qui la fait apparaître.

| # | Page | Priorité | Dossier | Risque | Sources citées |
| --- | --- | --- | --- | --- | --- |
| 1 | `inconvenients-secretariat-externalise` | P0 | Externaliser et déléguer | MOYEN | 0 |
| 2 | `mission-ponctuelle-de-secretariat` | P0 | Externaliser et déléguer | MOYEN | 0 |
| 3 | `periode-d-essai-assistante-independante` | P0 | Externaliser et déléguer | MOYEN | 2 |
| 4 | `cahier-des-charges-secretariat-externalise` | P0 | Modèles et checklists | MOYEN | 0 |
| 5 | `comparer-devis-secretariat-externalise` | P0 | Modèles et checklists | MOYEN | 0 |
| 6 | `tva-prestataire-en-franchise-en-base` | P0 | Devis, factures et relances | FAIBLE | 2 |
| 7 | `delais-de-reponse-assistante-externalisee` | P0 | Externaliser et déléguer | FAIBLE | 1 |
| 8 | `forfait-secretariat-externalise-depassement` | P0 | Externaliser et déléguer | MOYEN | 0 |
| 9 | `absence-de-son-assistante-independante` | P0 | Situations de dirigeant | MOYEN | 0 |
| 10 | `obligation-de-vigilance-prestataire-independant` | P0 | Confidentialité, accès et outils | MOYEN | 3 |

**Liens à ajouter.** Aucun à écrire : ils sont déjà dans les fiches, masqués tant que leur cible est un brouillon. À la publication du lot, 19 lien(s) apparaissent sur des pages déjà en ligne :

- `secretariat-externalise` → `inconvenients-secretariat-externalise`
- `secretariat-externalise` → `cahier-des-charges-secretariat-externalise`
- `secretariat-externalise` → `comparer-devis-secretariat-externalise`
- `secretariat-externalise` → `mission-ponctuelle-de-secretariat`
- `secretariat-externalise` → `periode-d-essai-assistante-independante`
- `secretariat-externalise` → `obligation-de-vigilance-prestataire-independant`
- `secretariat-externalise` → `tva-prestataire-en-franchise-en-base`
- `secretariat-externalise` → `delais-de-reponse-assistante-externalisee`
- `secretariat-externalise` → `forfait-secretariat-externalise-depassement`
- `secretariat-externalise` → `absence-de-son-assistante-independante`
- `quand-prendre-une-assistante` → `mission-ponctuelle-de-secretariat`
- `requalification-assistante-independante-salariat` → `delais-de-reponse-assistante-externalisee`
- `ce-qu-une-assistante-externalisee-ne-fait-pas` → `inconvenients-secretariat-externalise`
- `dossier-permanent-entreprise` → `obligation-de-vigilance-prestataire-independant`
- `mentions-obligatoires-facture` → `tva-prestataire-en-franchise-en-base`
- `rattraper-un-retard-administratif` → `mission-ponctuelle-de-secretariat`
- `remplacer-une-assistante-absente` → `absence-de-son-assistante-independante`
- `pic-d-activite-saisonnier` → `forfait-secretariat-externalise-depassement`
- `modele-releve-du-temps-administratif` → `cahier-des-charges-secretariat-externalise`

S’y ajoutent les liens automatiques : la carte de chaque page dans son pilier et dans l’index des guides, et sa place dans la colonne « Dans le même dossier » de ses voisines.

**Métriques à suivre.** Impressions et clics de chaque page du lot ; requêtes sur lesquelles elles apparaissent ; clics et position de la page de référence, qui ne doivent pas baisser ; pages du lot indexées.

**Critère pour continuer.** Publier le lot B si les pages du lot A sont indexées dans leur majorité, et si la page de référence n’a perdu ni clics ni position sur ses requêtes principales. Dans le cas contraire, chercher laquelle des nouvelles pages apparaît sur ces mêmes requêtes avant d’aller plus loin.

## Lot B — 10 pages, P0 et P1

**Raison.** Les pages de fonctionnement : évaluer, corriger une erreur, changer de prestataire, partager une assistante, ouvrir la banque, payer, présenter l’assistante, traiter les appels manqués. Elles s’adressent à un lecteur déjà engagé ou sur le point de l’être.

| # | Page | Priorité | Dossier | Risque | Sources citées |
| --- | --- | --- | --- | --- | --- |
| 1 | `domiciliation-ou-secretariat-externalise` | P1 | Administratif d’entreprise | FAIBLE | 1 |
| 2 | `evaluer-un-secretariat-externalise` | P1 | Externaliser et déléguer | MOYEN | 0 |
| 3 | `changer-d-assistante-externalisee` | P1 | Externaliser et déléguer | MOYEN | 0 |
| 4 | `assistante-partagee-entre-associes` | P1 | Externaliser et déléguer | FAIBLE | 0 |
| 5 | `presenter-son-assistante-a-ses-clients` | P1 | Agenda, e-mails et réunions | MOYEN | 0 |
| 6 | `erreur-de-son-assistante-externalisee` | P1 | Situations de dirigeant | MOYEN | 1 |
| 7 | `rgpd-sous-traitance-assistante-externalisee` | P1 | Confidentialité, accès et outils | MOYEN | 4 |
| 8 | `acces-bancaire-pour-son-assistante` | P0 | Confidentialité, accès et outils | FAIBLE | 0 |
| 9 | `moyens-de-paiement-delegues` | P1 | Confidentialité, accès et outils | FAIBLE | 0 |
| 10 | `appels-manques-entreprise` | P0 | Agenda, e-mails et réunions | MOYEN | 0 |

**Liens à ajouter.** Aucun à écrire : ils sont déjà dans les fiches, masqués tant que leur cible est un brouillon. À la publication du lot, 14 lien(s) apparaissent sur des pages déjà en ligne :

- `secretariat-externalise` → `domiciliation-ou-secretariat-externalise`
- `secretariat-externalise` → `evaluer-un-secretariat-externalise`
- `secretariat-externalise` → `appels-manques-entreprise`
- `contrat-de-prestation-assistante-independante` → `rgpd-sous-traitance-assistante-externalisee`
- `niveaux-d-autonomie-delegation` → `moyens-de-paiement-delegues`
- `erreurs-de-delegation` → `erreur-de-son-assistante-externalisee`
- `fin-de-collaboration-assistante-externalisee` → `changer-d-assistante-externalisee`
- `canal-pour-transmettre-ses-demandes` → `assistante-partagee-entre-associes`
- `administratif-a-la-creation-d-entreprise` → `domiciliation-ou-secretariat-externalise`
- `circuit-des-factures-fournisseurs` → `acces-bancaire-pour-son-assistante`
- `deleguer-sa-boite-mail` → `presenter-son-assistante-a-ses-clients`
- `filtrer-les-appels-et-messages` → `appels-manques-entreprise`
- `dirigeant-souvent-en-deplacement` → `domiciliation-ou-secretariat-externalise`
- `modele-tableau-de-bord-hebdomadaire` → `evaluer-un-secretariat-externalise`

S’y ajoutent les liens automatiques : la carte de chaque page dans son pilier et dans l’index des guides, et sa place dans la colonne « Dans le même dossier » de ses voisines.

**Métriques à suivre.** Les mêmes mesures, et en plus : les requêtes où une page du lot B et une page du lot A apparaissent ensemble.

**Critère pour continuer.** Publier le lot C si aucune paire de pages de la série ne se dispute durablement la même requête.

## Lot C — 15 pages, toutes P1

**Raison.** Les pages de référence et de méthode qui élargissent le champ : conformité (RGPD, incident), délégations officielles, courriers et mentions, fichier clients, assemblée annuelle, situations de dirigeant. Chacune vise une requête précise, souvent réglementaire.

| # | Page | Priorité | Dossier | Risque | Sources citées |
| --- | --- | --- | --- | --- | --- |
| 1 | `secretariat-externalise-france-ou-offshore` | P1 | Externaliser et déléguer | MOYEN | 2 |
| 2 | `revue-trimestrielle-assistance-externalisee` | P1 | Externaliser et déléguer | MOYEN | 0 |
| 3 | `recruter-apres-avoir-externalise` | P1 | Externaliser et déléguer | MOYEN | 1 |
| 4 | `incident-de-securite-chez-un-prestataire` | P1 | Confidentialité, accès et outils | FAIBLE | 2 |
| 5 | `delegations-aupres-des-organismes` | P1 | Confidentialité, accès et outils | FAIBLE | 3 |
| 6 | `dirigeant-indisponible-du-jour-au-lendemain` | P1 | Situations de dirigeant | MOYEN | 1 |
| 7 | `conjoint-qui-fait-l-administratif` | P1 | Situations de dirigeant | FAIBLE | 2 |
| 8 | `controle-urssaf-preparer-les-pieces` | P1 | Situations de dirigeant | FAIBLE | 1 |
| 9 | `lettre-recommandee-electronique` | P1 | Administratif d’entreprise | FAIBLE | 2 |
| 10 | `mentions-obligatoires-courriers-et-emails` | P1 | Administratif d’entreprise | MOYEN | 4 |
| 11 | `collecter-des-pieces-aupres-de-ses-clients` | P1 | Administratif d’entreprise | MOYEN | 0 |
| 12 | `tenir-son-fichier-clients-a-jour` | P1 | Administratif d’entreprise | FAIBLE | 1 |
| 13 | `assemblee-generale-annuelle-retroplanning` | P1 | Administratif d’entreprise | MOYEN | 1 |
| 14 | `annonce-de-repondeur-professionnel` | P1 | Agenda, e-mails et réunions | FAIBLE | 0 |
| 15 | `boite-mail-partagee-entreprise` | P1 | Agenda, e-mails et réunions | MOYEN | 0 |

**Liens à ajouter.** Aucun à écrire : ils sont déjà dans les fiches, masqués tant que leur cible est un brouillon. À la publication du lot, 20 lien(s) apparaissent sur des pages déjà en ligne :

- `secretariat-externalise` → `secretariat-externalise-france-ou-offshore`
- `quelles-taches-deleguer-a-une-assistante` → `conjoint-qui-fait-l-administratif`
- `point-hebdomadaire-avec-son-assistante` → `revue-trimestrielle-assistance-externalisee`
- `duree-de-conservation-documents-entreprise` → `controle-urssaf-preparer-les-pieces`
- `echeancier-administratif-entreprise` → `assemblee-generale-annuelle-retroplanning`
- `traitement-du-courrier-entrant` → `lettre-recommandee-electronique`
- `dossier-permanent-entreprise` → `delegations-aupres-des-organismes`
- `administratif-a-la-creation-d-entreprise` → `mentions-obligatoires-courriers-et-emails`
- `organiser-sa-boite-mail-de-dirigeant` → `boite-mail-partagee-entreprise`
- `preparer-son-absence` → `dirigeant-indisponible-du-jour-au-lendemain`
- `preparer-son-absence` → `annonce-de-repondeur-professionnel`
- `dossier-de-rendez-vous` → `tenir-son-fichier-clients-a-jour`
- `delegation-d-acces-messagerie-et-agenda` → `delegations-aupres-des-organismes`
- `signature-electronique-niveaux-et-usages` → `lettre-recommandee-electronique`
- `ia-generative-et-donnees-confidentielles` → `secretariat-externalise-france-ou-offshore`
- `registre-des-acces-entreprise` → `incident-de-securite-chez-un-prestataire`
- `premiere-embauche-formalites-administratives` → `recruter-apres-avoir-externalise`
- `demenagement-de-bureaux` → `mentions-obligatoires-courriers-et-emails`
- `checklist-cloture-annuelle-administrative` → `assemblee-generale-annuelle-retroplanning`
- `checklist-ouverture-dossier-client` → `collecter-des-pieces-aupres-de-ses-clients`

S’y ajoutent les liens automatiques : la carte de chaque page dans son pilier et dans l’index des guides, et sa place dans la colonne « Dans le même dossier » de ses voisines.

**Métriques à suivre.** Les mêmes mesures. Vérifier aussi, pour les pages qui citent une règle, que la source officielle n’a pas changé depuis la rédaction (`node scripts/check-sources.mjs`).

**Critère pour continuer.** Publier le lot D si les pages réglementaires du lot C ont été relues par une personne, ou si le propriétaire assume de les publier sans relecture, comme pour la série d’octobre.

## Lot D — 15 pages, P1 et P2

**Raison.** Les pages les plus éloignées du cœur du sujet : processus particuliers (sinistre, véhicules, numérisation, dictée, salon), comparatifs secondaires, modèles. Utiles, mais les moins liées à la requête d’origine : elles passent en dernier, et peuvent attendre.

| # | Page | Priorité | Dossier | Risque | Sources citées |
| --- | --- | --- | --- | --- | --- |
| 1 | `temps-partage-interim-alternance-ou-prestataire` | P2 | Externaliser et déléguer | MOYEN | 3 |
| 2 | `secretariat-externalise-charge-deductible` | P2 | Externaliser et déléguer | FAIBLE | 3 |
| 3 | `sous-traitance-par-son-assistante` | P2 | Confidentialité, accès et outils | MOYEN | 2 |
| 4 | `depart-d-un-salarie-checklist-administrative` | P2 | Situations de dirigeant | FAIBLE | 2 |
| 5 | `numeriser-ses-archives-papier` | P2 | Administratif d’entreprise | MOYEN | 2 |
| 6 | `declarer-un-sinistre-professionnel` | P2 | Administratif d’entreprise | FAIBLE | 2 |
| 7 | `vehicules-de-societe-suivi-administratif` | P2 | Administratif d’entreprise | FAIBLE | 2 |
| 8 | `dicter-ses-courriers` | P2 | Administratif d’entreprise | MOYEN | 1 |
| 9 | `checklist-administrative-mensuelle` | P1 | Modèles et checklists | MOYEN | 0 |
| 10 | `telesecretariat-et-assistante-externalisee` | P2 | Agenda, e-mails et réunions | MOYEN | 0 |
| 11 | `coordonner-des-entretiens-de-recrutement` | P2 | Agenda, e-mails et réunions | MOYEN | 1 |
| 12 | `participer-a-un-salon-professionnel` | P1 | Déplacements et événements | FAIBLE | 0 |
| 13 | `modele-note-d-aide-a-la-decision` | P2 | Modèles et checklists | FAIBLE | 0 |
| 14 | `assistante-commerciale-externalisee` | P1 | Devis, factures et relances | MOYEN | 0 |
| 15 | `traiter-les-demandes-de-devis-entrantes` | P1 | Devis, factures et relances | MOYEN | 0 |

**Liens à ajouter.** Aucun à écrire : ils sont déjà dans les fiches, masqués tant que leur cible est un brouillon. À la publication du lot, 15 lien(s) apparaissent sur des pages déjà en ligne :

- `rentabilite-assistante-externalisee` → `secretariat-externalise-charge-deductible`
- `canal-pour-transmettre-ses-demandes` → `dicter-ses-courriers`
- `organiser-l-administratif-de-son-entreprise` → `checklist-administrative-mensuelle`
- `arborescence-dossiers-entreprise` → `numeriser-ses-archives-papier`
- `suivi-des-contrats-et-abonnements` → `declarer-un-sinistre-professionnel`
- `traitement-du-courrier-entrant` → `vehicules-de-societe-suivi-administratif`
- `devis-factures-relances` → `assistante-commerciale-externalisee`
- `relancer-un-devis-sans-reponse` → `traiter-les-demandes-de-devis-entrantes`
- `gerer-les-demandes-de-rendez-vous` → `coordonner-des-entretiens-de-recrutement`
- `filtrer-les-appels-et-messages` → `telesecretariat-et-assistante-externalisee`
- `dossier-de-rendez-vous` → `modele-note-d-aide-a-la-decision`
- `organiser-un-seminaire-d-equipe` → `participer-a-un-salon-professionnel`
- `registre-des-acces-entreprise` → `depart-d-un-salarie-checklist-administrative`
- `remplacer-une-assistante-absente` → `temps-partage-interim-alternance-ou-prestataire`
- `premiere-embauche-formalites-administratives` → `depart-d-un-salarie-checklist-administrative`

S’y ajoutent les liens automatiques : la carte de chaque page dans son pilier et dans l’index des guides, et sa place dans la colonne « Dans le même dossier » de ses voisines.

**Métriques à suivre.** Les mêmes mesures.

**Critère pour continuer.** Aucun lot ne suit. Bilan d’ensemble : pages sans impression après plusieurs mois à réécrire, fusionner ou retirer.

## Ce qu’il faut surveiller sur la page de référence

La série existe parce que `/guides/secretariat-externalise` attire des clics. Le premier risque d’une série de cinquante pages voisines est de les lui prendre. Après chaque lot, comparer pour cette page, sur une période identique avant et après : clics, impressions, position moyenne, et liste des requêtes. Si une page de la série apparaît à sa place sur une requête qu’elle tenait, trois réponses, dans cet ordre : renforcer le lien de la nouvelle page vers la page de référence, resserrer le title de la nouvelle page sur sa propre requête, et en dernier recours la retirer de `publications.mjs`.
