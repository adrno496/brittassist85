# 06 — Carte du maillage interne

> Document généré par `scripts/docs-secretariat.mjs` le 2026-10-06, à partir des fiches, des registres et du build d’aperçu. Ne pas le modifier à la main : relancer `npm run docs:secretariat`.

D’où chaque page de la série reçoit ses liens, et vers quoi elle en envoie. Les liens sont comptés dans le build d’aperçu, c’est-à-dire tels qu’ils seront une fois les 50 pages publiées.

## Les quatre sources de liens entrants

| Source | Nature | Écrit où |
| --- | --- | --- |
| Le pilier du dossier | Automatique : une carte par page du dossier | Gabarit `src/pages/guides/[slug].astro` |
| L’index des guides | Automatique : une carte par page | `src/pages/guides.astro` |
| La colonne « Dans le même dossier » | Automatique : les cinq pages suivantes du dossier, en boucle | `voisins()` dans `src/data/bibliotheque.ts` |
| Le maillage éditorial | Choisi : champ `liens` d’une fiche, ou rubrique « Pour approfondir » | Les fiches |

Les trois premières suffisent à ce qu’aucune page ne soit orpheline. La quatrième est celle qui compte : un lien choisi, avec une ancre qui dit ce qu’on trouvera.

**Comportement en production.** Un lien vers une page encore en brouillon n’est pas rendu (`liensVisibles`). Les liens ajoutés aux pages existantes n’apparaissent donc qu’au fur et à mesure des lots : aujourd’hui, aucune page en ligne n’a changé.

## Contrôles

| Contrôle | Résultat |
| --- | --- |
| Pages de la série sans lien entrant | 0 |
| Pages de la série sans lien éditorial entrant | 0 |
| Liens éditoriaux entrants par page | de 1 à 5 |
| Liens entrants par page, toutes sources | de 7 à 12 |
| Profondeur maximale depuis l’accueil | 2 clics |
| Liens sortants par page (champ `liens`) | de 5 à 6 |
| Pages de la série avec un lien vers une offre, un service ou le contact | 50 sur 50 |
| Liens cassés dans le build d’aperçu | 0 |
| Ancre la plus répétée vers une même page | 1 fois |

## La page de référence : `/guides/secretariat-externalise`

Elle reçoit une rubrique « Pour approfondir, question par question », placée à la fin du corps de la page : **14 liens**, en 3 groupes, chacun suivi d’une phrase de contexte. Rien d’autre n’y est modifié : ni le slug, ni le title, ni le H1, ni le texte, ni la date.

Les autres pages de la série ne sont pas citées par la page de référence : elles sont atteintes par leur dossier et par leurs voisines.

| Groupe | Page citée | Ancre | Phrase de contexte | Lot |
| --- | --- | --- | --- | --- |
| Avant de choisir | `inconvenients-secretariat-externalise` | Les inconvénients du secrétariat externalisé | ce que le modèle coûte vraiment, et les deux défauts qui doivent parfois faire renoncer. | A |
| Avant de choisir | `cahier-des-charges-secretariat-externalise` | Le cahier des charges, en une page | pour que deux prestataires répondent à la même question. | A |
| Avant de choisir | `comparer-devis-secretariat-externalise` | La grille pour comparer des devis | douze lignes, quand les prix n’ont pas la même unité. | A |
| Avant de choisir | `domiciliation-ou-secretariat-externalise` | Domiciliation ou secrétariat externalisé | deux services souvent vendus ensemble, qui ne font pas le même travail. | B |
| Avant de choisir | `secretariat-externalise-france-ou-offshore` | Secrétariat en France ou offshore | ce que le prix horaire ne dit pas : données, droit applicable, usages. | C |
| Au moment de s’engager | `mission-ponctuelle-de-secretariat` | Cadrer une mission ponctuelle | quand le besoin a un début et une fin. | A |
| Au moment de s’engager | `periode-d-essai-assistante-independante` | Ce qui remplace une période d’essai | trois mécanismes pour vérifier avant de s’installer. | A |
| Au moment de s’engager | `obligation-de-vigilance-prestataire-independant` | Les pièces à demander à une prestataire | l’obligation de vigilance, vue du côté du client. | A |
| Au moment de s’engager | `tva-prestataire-en-franchise-en-base` | Un prestataire qui ne facture pas la TVA | comment lire son devis, selon que vous récupérez ou non la taxe. | A |
| Au moment de s’engager | `delais-de-reponse-assistante-externalisee` | Disponibilité et délais de réponse | ce qui se convient par écrit, sans imposer d’horaires. | A |
| Une fois la collaboration lancée | `forfait-secretariat-externalise-depassement` | Ajuster un forfait trop juste ou trop large | quand le volume ne correspond plus à ce qui était prévu. | A |
| Une fois la collaboration lancée | `absence-de-son-assistante-independante` | Quand votre assistante s’absente | congés, maladie : ce qui doit tenir sans elle. | A |
| Une fois la collaboration lancée | `evaluer-un-secretariat-externalise` | Évaluer un secrétariat externalisé | cinq indicateurs, dont deux parlent de vous. | B |
| Une fois la collaboration lancée | `appels-manques-entreprise` | Vous ratez des appels | mesurer avant de choisir entre répondeur, rappel organisé et télésecrétariat. | B |

En sens inverse, 5 pages de la série renvoient vers la page de référence dans leur maillage : `inconvenients-secretariat-externalise`, `temps-partage-interim-alternance-ou-prestataire`, `domiciliation-ou-secretariat-externalise`, `appels-manques-entreprise`, `telesecretariat-et-assistante-externalisee`.

## Liens ajoutés aux pages existantes

**54 liens** ajoutés dans le champ `liens` de **44 guides** d’octobre 2026. Les douze premiers guides n’ont pas été touchés, à l’exception de la page de référence.

| Page existante | Lien ajouté vers | Ancre |
| --- | --- | --- |
| `quelles-taches-deleguer-a-une-assistante` | `conjoint-qui-fait-l-administratif` | Quand c’est le conjoint qui tient l’administratif |
| `quand-prendre-une-assistante` | `mission-ponctuelle-de-secretariat` | Commencer par une mission ponctuelle |
| `contrat-de-prestation-assistante-independante` | `rgpd-sous-traitance-assistante-externalisee` | Le contenu de l’accord de sous-traitance RGPD |
| `requalification-assistante-independante-salariat` | `delais-de-reponse-assistante-externalisee` | Convenir de délais plutôt que d’horaires |
| `niveaux-d-autonomie-delegation` | `moyens-de-paiement-delegues` | Les dépenses engagées pour vous, et leur plafond |
| `erreurs-de-delegation` | `erreur-de-son-assistante-externalisee` | Quand l’erreur vient de la prestataire |
| `fin-de-collaboration-assistante-externalisee` | `changer-d-assistante-externalisee` | Organiser le relais vers une nouvelle prestataire |
| `ce-qu-une-assistante-externalisee-ne-fait-pas` | `inconvenients-secretariat-externalise` | Les inconvénients du modèle lui-même |
| `rentabilite-assistante-externalisee` | `secretariat-externalise-charge-deductible` | La dépense est-elle une charge déductible ? |
| `point-hebdomadaire-avec-son-assistante` | `revue-trimestrielle-assistance-externalisee` | La revue trimestrielle, pour le cadre |
| `canal-pour-transmettre-ses-demandes` | `dicter-ses-courriers` | Dicter un courrier plutôt que l’écrire |
| `canal-pour-transmettre-ses-demandes` | `assistante-partagee-entre-associes` | Une file unique quand on est plusieurs à demander |
| `organiser-l-administratif-de-son-entreprise` | `checklist-administrative-mensuelle` | La checklist administrative du mois |
| `arborescence-dossiers-entreprise` | `numeriser-ses-archives-papier` | Numériser ses archives papier |
| `duree-de-conservation-documents-entreprise` | `controle-urssaf-preparer-les-pieces` | Retrouver trois ans de pièces pour un contrôle |
| `echeancier-administratif-entreprise` | `assemblee-generale-annuelle-retroplanning` | Le calendrier de l’assemblée annuelle |
| `suivi-des-contrats-et-abonnements` | `declarer-un-sinistre-professionnel` | Déclarer un sinistre, contrat en main |
| `traitement-du-courrier-entrant` | `lettre-recommandee-electronique` | Envoyer un recommandé sans passer au guichet |
| `traitement-du-courrier-entrant` | `vehicules-de-societe-suivi-administratif` | L’avis de contravention d’un véhicule de société |
| `dossier-permanent-entreprise` | `obligation-de-vigilance-prestataire-independant` | L’obligation de vigilance, côté donneur d’ordre |
| `dossier-permanent-entreprise` | `delegations-aupres-des-organismes` | Déléguer l’accès aux espaces des organismes |
| `administratif-a-la-creation-d-entreprise` | `mentions-obligatoires-courriers-et-emails` | Les mentions à porter sur ses courriers et e-mails |
| `administratif-a-la-creation-d-entreprise` | `domiciliation-ou-secretariat-externalise` | Domiciliation ou secrétariat : ne pas confondre |
| `devis-factures-relances` | `assistante-commerciale-externalisee` | Ce que prend en charge une assistante commerciale |
| `mentions-obligatoires-facture` | `tva-prestataire-en-franchise-en-base` | Recevoir une facture sans TVA : ce que cela change |
| `relancer-un-devis-sans-reponse` | `traiter-les-demandes-de-devis-entrantes` | Répondre vite aux demandes de devis entrantes |
| `circuit-des-factures-fournisseurs` | `acces-bancaire-pour-son-assistante` | Le niveau d’accès bancaire à ouvrir |
| `organiser-sa-boite-mail-de-dirigeant` | `boite-mail-partagee-entreprise` | Organiser une adresse partagée à plusieurs |
| `deleguer-sa-boite-mail` | `presenter-son-assistante-a-ses-clients` | Annoncer son assistante à ses interlocuteurs |
| `gerer-les-demandes-de-rendez-vous` | `coordonner-des-entretiens-de-recrutement` | Le cas des entretiens de recrutement |
| `preparer-son-absence` | `dirigeant-indisponible-du-jour-au-lendemain` | Quand l’absence n’était pas prévue |
| `preparer-son-absence` | `annonce-de-repondeur-professionnel` | Le texte de l’annonce de répondeur |
| `filtrer-les-appels-et-messages` | `appels-manques-entreprise` | Les appels auxquels on n’a pas répondu |
| `filtrer-les-appels-et-messages` | `telesecretariat-et-assistante-externalisee` | Faire travailler ensemble télésecrétariat et assistante |
| `dossier-de-rendez-vous` | `modele-note-d-aide-a-la-decision` | La note d’aide à la décision, autre format d’une page |
| `dossier-de-rendez-vous` | `tenir-son-fichier-clients-a-jour` | Mettre le fichier clients à jour après le rendez-vous |
| `organiser-un-seminaire-d-equipe` | `participer-a-un-salon-professionnel` | Préparer une participation à un salon |
| `delegation-d-acces-messagerie-et-agenda` | `delegations-aupres-des-organismes` | Les délégations prévues par les impôts, l’Urssaf et La Poste |
| `signature-electronique-niveaux-et-usages` | `lettre-recommandee-electronique` | La lettre recommandée électronique |
| `ia-generative-et-donnees-confidentielles` | `secretariat-externalise-france-ou-offshore` | Un prestataire hors d’Europe : la question des données |
| `registre-des-acces-entreprise` | `incident-de-securite-chez-un-prestataire` | Couper les accès après un incident |
| `registre-des-acces-entreprise` | `depart-d-un-salarie-checklist-administrative` | La checklist de départ d’un salarié |
| `rattraper-un-retard-administratif` | `mission-ponctuelle-de-secretariat` | Confier le rattrapage comme une mission ponctuelle |
| `remplacer-une-assistante-absente` | `absence-de-son-assistante-independante` | Si c’est votre prestataire indépendante qui s’absente |
| `remplacer-une-assistante-absente` | `temps-partage-interim-alternance-ou-prestataire` | Intérim, temps partagé, alternance : comparer |
| `pic-d-activite-saisonnier` | `forfait-secretariat-externalise-depassement` | Adapter le forfait à une activité qui varie |
| `premiere-embauche-formalites-administratives` | `recruter-apres-avoir-externalise` | Créer le poste après avoir externalisé |
| `premiere-embauche-formalites-administratives` | `depart-d-un-salarie-checklist-administrative` | Le jour où un salarié s’en va |
| `demenagement-de-bureaux` | `mentions-obligatoires-courriers-et-emails` | Signatures et en-têtes à corriger après un changement de siège |
| `dirigeant-souvent-en-deplacement` | `domiciliation-ou-secretariat-externalise` | Courrier numérisé par un domiciliataire : qui le traite |
| `modele-releve-du-temps-administratif` | `cahier-des-charges-secretariat-externalise` | Du relevé au cahier des charges |
| `checklist-cloture-annuelle-administrative` | `assemblee-generale-annuelle-retroplanning` | Après la clôture : l’assemblée et le dépôt |
| `modele-tableau-de-bord-hebdomadaire` | `evaluer-un-secretariat-externalise` | Cinq indicateurs pour évaluer la prestation |
| `checklist-ouverture-dossier-client` | `collecter-des-pieces-aupres-de-ses-clients` | Obtenir les pièces qui manquent encore |

## Page par page

| Page | Lot | Entrants (dont dans le contenu) | Liens éditoriaux entrants | Sortants (champ `liens`) | Clics depuis l’accueil |
| --- | --- | --- | --- | --- | --- |
| `inconvenients-secretariat-externalise` | A | 9 (9) | 2 : `secretariat-externalise`, `ce-qu-une-assistante-externalisee-ne-fait-pas` | 5 : `secretariat-externalise`, `ce-qu-une-assistante-externalisee-ne-fait-pas`, `assistante-independante-ou-salariee`, `absence-de-son-assistante-independante`, `/tarifs` | 2 |
| `mission-ponctuelle-de-secretariat` | A | 11 (11) | 4 : `secretariat-externalise`, `quand-prendre-une-assistante`, `rattraper-un-retard-administratif`, `periode-d-essai-assistante-independante` | 5 : `/tarifs`, `rattraper-un-retard-administratif`, `situations-de-dirigeant`, `periode-d-essai-assistante-independante`, `/contact` | 2 |
| `periode-d-essai-assistante-independante` | A | 8 (8) | 2 : `secretariat-externalise`, `mission-ponctuelle-de-secretariat` | 6 : `premier-mois-assistante-externalisee`, `contrat-de-prestation-assistante-independante`, `fin-de-collaboration-assistante-externalisee`, `mission-ponctuelle-de-secretariat`, `/cgv`, `/tarifs` | 2 |
| `cahier-des-charges-secretariat-externalise` | A | 10 (10) | 3 : `secretariat-externalise`, `modele-releve-du-temps-administratif`, `comparer-devis-secretariat-externalise` | 5 : `choisir-assistante-externalisee`, `modele-releve-du-temps-administratif`, `comparer-devis-secretariat-externalise`, `modele-brief-assistante-externalisee`, `/contact` | 2 |
| `comparer-devis-secretariat-externalise` | A | 9 (9) | 3 : `secretariat-externalise`, `cahier-des-charges-secretariat-externalise`, `tva-prestataire-en-franchise-en-base` | 5 : `prix-assistante-de-direction-externalisee`, `choisir-assistante-externalisee`, `cahier-des-charges-secretariat-externalise`, `tva-prestataire-en-franchise-en-base`, `/tarifs` | 2 |
| `tva-prestataire-en-franchise-en-base` | A | 11 (11) | 4 : `secretariat-externalise`, `mentions-obligatoires-facture`, `secretariat-externalise-charge-deductible`, `comparer-devis-secretariat-externalise` | 6 : `mentions-obligatoires-facture`, `comparer-devis-secretariat-externalise`, `prix-assistante-de-direction-externalisee`, `secretariat-externalise-charge-deductible`, `/cgv`, `/tarifs` | 2 |
| `delais-de-reponse-assistante-externalisee` | A | 9 (9) | 2 : `secretariat-externalise`, `requalification-assistante-independante-salariat` | 6 : `canal-pour-transmettre-ses-demandes`, `contrat-de-prestation-assistante-independante`, `requalification-assistante-independante-salariat`, `absence-de-son-assistante-independante`, `/cgv`, `/private-office` | 2 |
| `forfait-secretariat-externalise-depassement` | A | 10 (10) | 3 : `secretariat-externalise`, `pic-d-activite-saisonnier`, `revue-trimestrielle-assistance-externalisee` | 5 : `prix-assistante-de-direction-externalisee`, `suivi-demandes-assistante-externalisee`, `revue-trimestrielle-assistance-externalisee`, `/tarifs`, `/cgv` | 2 |
| `absence-de-son-assistante-independante` | A | 12 (12) | 5 : `secretariat-externalise`, `remplacer-une-assistante-absente`, `inconvenients-secretariat-externalise`, `delais-de-reponse-assistante-externalisee`, `sous-traitance-par-son-assistante` | 6 : `remplacer-une-assistante-absente`, `preparer-son-absence`, `echeancier-administratif-entreprise`, `sous-traitance-par-son-assistante`, `/cgv`, `/private-office` | 2 |
| `obligation-de-vigilance-prestataire-independant` | A | 9 (9) | 2 : `secretariat-externalise`, `dossier-permanent-entreprise` | 6 : `dossier-permanent-entreprise`, `modele-fiche-prestataire`, `contrat-de-prestation-assistante-independante`, `echeancier-administratif-entreprise`, `choisir-assistante-externalisee`, `/services/suivi-prestataires` | 2 |
| `domiciliation-ou-secretariat-externalise` | B | 9 (9) | 3 : `secretariat-externalise`, `administratif-a-la-creation-d-entreprise`, `dirigeant-souvent-en-deplacement` | 5 : `secretariat-externalise`, `traitement-du-courrier-entrant`, `dirigeant-souvent-en-deplacement`, `administratif-a-la-creation-d-entreprise`, `/services/gestion-administrative` | 2 |
| `evaluer-un-secretariat-externalise` | B | 10 (10) | 3 : `secretariat-externalise`, `modele-tableau-de-bord-hebdomadaire`, `erreur-de-son-assistante-externalisee` | 5 : `suivi-demandes-assistante-externalisee`, `point-hebdomadaire-avec-son-assistante`, `modele-tableau-de-bord-hebdomadaire`, `revue-trimestrielle-assistance-externalisee`, `/services/reporting` | 2 |
| `changer-d-assistante-externalisee` | B | 9 (9) | 2 : `fin-de-collaboration-assistante-externalisee`, `presenter-son-assistante-a-ses-clients` | 6 : `fin-de-collaboration-assistante-externalisee`, `modele-note-de-passation`, `registre-des-acces-entreprise`, `choisir-assistante-externalisee`, `presenter-son-assistante-a-ses-clients`, `/contact` | 2 |
| `assistante-partagee-entre-associes` | B | 8 (8) | 1 : `canal-pour-transmettre-ses-demandes` | 5 : `niveaux-d-autonomie-delegation`, `suivi-demandes-assistante-externalisee`, `canal-pour-transmettre-ses-demandes`, `/assistante/professions-liberales`, `/services/support-equipes` | 2 |
| `presenter-son-assistante-a-ses-clients` | B | 9 (9) | 2 : `deleguer-sa-boite-mail`, `changer-d-assistante-externalisee` | 5 : `deleguer-sa-boite-mail`, `delegation-d-acces-messagerie-et-agenda`, `fraude-au-faux-rib-et-au-president`, `/services/coordination`, `changer-d-assistante-externalisee` | 2 |
| `erreur-de-son-assistante-externalisee` | B | 8 (8) | 1 : `erreurs-de-delegation` | 6 : `erreurs-de-delegation`, `niveaux-d-autonomie-delegation`, `contrat-de-prestation-assistante-independante`, `evaluer-un-secretariat-externalise`, `/cgv`, `/private-office` | 2 |
| `rgpd-sous-traitance-assistante-externalisee` | B | 11 (11) | 4 : `contrat-de-prestation-assistante-independante`, `secretariat-externalise-france-ou-offshore`, `incident-de-securite-chez-un-prestataire`, `sous-traitance-par-son-assistante` | 6 : `confidentialite-assistante-externalisee`, `contrat-de-prestation-assistante-independante`, `incident-de-securite-chez-un-prestataire`, `sous-traitance-par-son-assistante`, `confidentialite-acces-et-outils`, `/private-office` | 2 |
| `acces-bancaire-pour-son-assistante` | B | 9 (9) | 2 : `circuit-des-factures-fournisseurs`, `moyens-de-paiement-delegues` | 5 : `circuit-des-factures-fournisseurs`, `fraude-au-faux-rib-et-au-president`, `registre-des-acces-entreprise`, `moyens-de-paiement-delegues`, `/services/facturation` | 2 |
| `moyens-de-paiement-delegues` | B | 8 (8) | 2 : `niveaux-d-autonomie-delegation`, `acces-bancaire-pour-son-assistante` | 5 : `niveaux-d-autonomie-delegation`, `notes-de-frais-justificatifs`, `double-authentification-et-delegation`, `acces-bancaire-pour-son-assistante`, `/services/reservations` | 2 |
| `appels-manques-entreprise` | B | 10 (10) | 4 : `secretariat-externalise`, `filtrer-les-appels-et-messages`, `annonce-de-repondeur-professionnel`, `telesecretariat-et-assistante-externalisee` | 6 : `filtrer-les-appels-et-messages`, `secretariat-externalise`, `annonce-de-repondeur-professionnel`, `telesecretariat-et-assistante-externalisee`, `/assistante/artisans-btp`, `/services/coordination` | 2 |
| `secretariat-externalise-france-ou-offshore` | C | 9 (9) | 2 : `secretariat-externalise`, `ia-generative-et-donnees-confidentielles` | 5 : `assistante-virtuelle-ou-private-office`, `prix-assistante-de-direction-externalisee`, `confidentialite-assistante-externalisee`, `rgpd-sous-traitance-assistante-externalisee`, `/assistante-independante/a-distance` | 2 |
| `revue-trimestrielle-assistance-externalisee` | C | 8 (8) | 3 : `point-hebdomadaire-avec-son-assistante`, `forfait-secretariat-externalise-depassement`, `evaluer-un-secretariat-externalise` | 5 : `point-hebdomadaire-avec-son-assistante`, `niveaux-d-autonomie-delegation`, `registre-des-acces-entreprise`, `forfait-secretariat-externalise-depassement`, `/private-office` | 2 |
| `recruter-apres-avoir-externalise` | C | 8 (8) | 1 : `premiere-embauche-formalites-administratives` | 5 : `assistante-independante-ou-salariee`, `premiere-embauche-formalites-administratives`, `modele-note-de-passation`, `fin-de-collaboration-assistante-externalisee`, `/services/support-equipes` | 2 |
| `incident-de-securite-chez-un-prestataire` | C | 7 (7) | 2 : `registre-des-acces-entreprise`, `rgpd-sous-traitance-assistante-externalisee` | 6 : `registre-des-acces-entreprise`, `partager-un-mot-de-passe-en-securite`, `fraude-au-faux-rib-et-au-president`, `rgpd-sous-traitance-assistante-externalisee`, `confidentialite-acces-et-outils`, `/private-office` | 2 |
| `delegations-aupres-des-organismes` | C | 9 (9) | 2 : `dossier-permanent-entreprise`, `delegation-d-acces-messagerie-et-agenda` | 5 : `delegation-d-acces-messagerie-et-agenda`, `partager-un-mot-de-passe-en-securite`, `registre-des-acces-entreprise`, `dossier-permanent-entreprise`, `/services/gestion-administrative` | 2 |
| `dirigeant-indisponible-du-jour-au-lendemain` | C | 8 (8) | 1 : `preparer-son-absence` | 5 : `preparer-son-absence`, `echeancier-administratif-entreprise`, `registre-des-acces-entreprise`, `partager-un-mot-de-passe-en-securite`, `/services/gestion-administrative` | 2 |
| `conjoint-qui-fait-l-administratif` | C | 8 (8) | 1 : `quelles-taches-deleguer-a-une-assistante` | 5 : `/assistante/artisans-btp`, `devis-factures-relances`, `quelles-taches-deleguer-a-une-assistante`, `premiere-embauche-formalites-administratives`, `/services/gestion-administrative` | 2 |
| `controle-urssaf-preparer-les-pieces` | C | 8 (8) | 1 : `duree-de-conservation-documents-entreprise` | 5 : `duree-de-conservation-documents-entreprise`, `arborescence-dossiers-entreprise`, `pieces-pour-l-expert-comptable`, `rattraper-un-retard-administratif`, `/services/gestion-administrative` | 2 |
| `lettre-recommandee-electronique` | C | 8 (8) | 2 : `traitement-du-courrier-entrant`, `signature-electronique-niveaux-et-usages` | 5 : `traitement-du-courrier-entrant`, `signature-electronique-niveaux-et-usages`, `mise-en-demeure-et-injonction-de-payer`, `suivi-des-contrats-et-abonnements`, `/services/gestion-administrative` | 2 |
| `mentions-obligatoires-courriers-et-emails` | C | 8 (8) | 2 : `administratif-a-la-creation-d-entreprise`, `demenagement-de-bureaux` | 5 : `mentions-obligatoires-facture`, `devis-contenu-et-validite`, `reponses-types-emails`, `demenagement-de-bureaux`, `/services/gestion-administrative` | 2 |
| `collecter-des-pieces-aupres-de-ses-clients` | C | 8 (8) | 1 : `checklist-ouverture-dossier-client` | 5 : `checklist-ouverture-dossier-client`, `choisir-un-espace-de-stockage-partage`, `reponses-types-emails`, `/assistante/professions-liberales`, `/services/gestion-administrative` | 2 |
| `tenir-son-fichier-clients-a-jour` | C | 9 (9) | 2 : `dossier-de-rendez-vous`, `participer-a-un-salon-professionnel` | 5 : `checklist-ouverture-dossier-client`, `duree-de-conservation-documents-entreprise`, `dossier-de-rendez-vous`, `sauvegarde-des-documents-entreprise`, `/services/gestion-administrative` | 2 |
| `assemblee-generale-annuelle-retroplanning` | C | 9 (9) | 2 : `echeancier-administratif-entreprise`, `checklist-cloture-annuelle-administrative` | 5 : `/assistante/dirigeants-multi-societes`, `checklist-cloture-annuelle-administrative`, `echeancier-administratif-entreprise`, `signature-electronique-niveaux-et-usages`, `/services/gestion-administrative` | 2 |
| `annonce-de-repondeur-professionnel` | C | 8 (8) | 2 : `preparer-son-absence`, `appels-manques-entreprise` | 5 : `filtrer-les-appels-et-messages`, `preparer-son-absence`, `appels-manques-entreprise`, `gerer-les-demandes-de-rendez-vous`, `/services/coordination` | 2 |
| `boite-mail-partagee-entreprise` | C | 8 (8) | 1 : `organiser-sa-boite-mail-de-dirigeant` | 5 : `organiser-sa-boite-mail-de-dirigeant`, `delegation-d-acces-messagerie-et-agenda`, `traitement-du-courrier-entrant`, `reponses-types-emails`, `/services/coordination` | 2 |
| `temps-partage-interim-alternance-ou-prestataire` | D | 8 (8) | 1 : `remplacer-une-assistante-absente` | 5 : `assistante-independante-ou-salariee`, `secretariat-externalise`, `remplacer-une-assistante-absente`, `requalification-assistante-independante-salariat`, `/tarifs` | 2 |
| `secretariat-externalise-charge-deductible` | D | 9 (9) | 2 : `rentabilite-assistante-externalisee`, `tva-prestataire-en-franchise-en-base` | 5 : `tva-prestataire-en-franchise-en-base`, `prix-assistante-de-direction-externalisee`, `rentabilite-assistante-externalisee`, `pieces-pour-l-expert-comptable`, `/tarifs` | 2 |
| `sous-traitance-par-son-assistante` | D | 8 (8) | 2 : `absence-de-son-assistante-independante`, `rgpd-sous-traitance-assistante-externalisee` | 6 : `contrat-de-prestation-assistante-independante`, `confidentialite-assistante-externalisee`, `absence-de-son-assistante-independante`, `rgpd-sous-traitance-assistante-externalisee`, `assistante-virtuelle-ou-private-office`, `/private-office` | 2 |
| `depart-d-un-salarie-checklist-administrative` | D | 9 (9) | 2 : `registre-des-acces-entreprise`, `premiere-embauche-formalites-administratives` | 5 : `registre-des-acces-entreprise`, `modele-note-de-passation`, `premiere-embauche-formalites-administratives`, `remplacer-une-assistante-absente`, `/services/support-equipes` | 2 |
| `numeriser-ses-archives-papier` | D | 8 (8) | 1 : `arborescence-dossiers-entreprise` | 5 : `duree-de-conservation-documents-entreprise`, `regles-de-nommage-des-fichiers`, `arborescence-dossiers-entreprise`, `sauvegarde-des-documents-entreprise`, `/services/gestion-administrative` | 2 |
| `declarer-un-sinistre-professionnel` | D | 8 (8) | 1 : `suivi-des-contrats-et-abonnements` | 5 : `suivi-des-contrats-et-abonnements`, `echeancier-administratif-entreprise`, `modele-fiche-prestataire`, `/services/suivi-prestataires`, `/services/gestion-des-contrats` | 2 |
| `vehicules-de-societe-suivi-administratif` | D | 8 (8) | 1 : `traitement-du-courrier-entrant` | 5 : `traitement-du-courrier-entrant`, `echeancier-administratif-entreprise`, `suivi-des-contrats-et-abonnements`, `/assistante/artisans-btp`, `/services/gestion-administrative` | 2 |
| `dicter-ses-courriers` | D | 8 (8) | 1 : `canal-pour-transmettre-ses-demandes` | 5 : `canal-pour-transmettre-ses-demandes`, `reponses-types-emails`, `ia-generative-et-donnees-confidentielles`, `compte-rendu-de-reunion`, `/services/gestion-administrative` | 2 |
| `checklist-administrative-mensuelle` | D | 8 (8) | 1 : `organiser-l-administratif-de-son-entreprise` | 5 : `echeancier-administratif-entreprise`, `pieces-pour-l-expert-comptable`, `modele-tableau-de-suivi-des-factures`, `checklist-cloture-annuelle-administrative`, `/services/gestion-administrative` | 2 |
| `telesecretariat-et-assistante-externalisee` | D | 8 (8) | 2 : `filtrer-les-appels-et-messages`, `appels-manques-entreprise` | 6 : `secretariat-externalise`, `filtrer-les-appels-et-messages`, `canal-pour-transmettre-ses-demandes`, `appels-manques-entreprise`, `/assistante/professionnels-sante`, `/services/coordination` | 2 |
| `coordonner-des-entretiens-de-recrutement` | D | 8 (8) | 1 : `gerer-les-demandes-de-rendez-vous` | 5 : `gerer-les-demandes-de-rendez-vous`, `tenir-un-agenda-de-dirigeant`, `premiere-embauche-formalites-administratives`, `/assistante/fondateurs-de-startup`, `/services/coordination` | 2 |
| `participer-a-un-salon-professionnel` | D | 8 (8) | 1 : `organiser-un-seminaire-d-equipe` | 5 : `organiser-un-deplacement-professionnel`, `feuille-de-route-de-deplacement`, `organiser-un-seminaire-d-equipe`, `tenir-son-fichier-clients-a-jour`, `/services/organisation-deplacements` | 2 |
| `modele-note-d-aide-a-la-decision` | D | 8 (8) | 1 : `dossier-de-rendez-vous` | 5 : `/services/recherches`, `niveaux-d-autonomie-delegation`, `dossier-de-rendez-vous`, `choisir-un-lieu-de-seminaire`, `modeles-et-checklists` | 2 |
| `assistante-commerciale-externalisee` | D | 8 (8) | 2 : `devis-factures-relances`, `traiter-les-demandes-de-devis-entrantes` | 6 : `devis-factures-relances`, `relancer-un-devis-sans-reponse`, `traiter-les-demandes-de-devis-entrantes`, `checklist-ouverture-dossier-client`, `/services/facturation`, `/assistante/agences-et-studios` | 2 |
| `traiter-les-demandes-de-devis-entrantes` | D | 8 (8) | 2 : `relancer-un-devis-sans-reponse`, `assistante-commerciale-externalisee` | 6 : `devis-contenu-et-validite`, `relancer-un-devis-sans-reponse`, `reponses-types-emails`, `assistante-commerciale-externalisee`, `/assistante/organisateurs-d-evenements`, `/services/facturation` | 2 |

## Ancres

Les ancres varient d’une page citante à l’autre : chacune dit ce que le lecteur trouvera, vu depuis la page où il se trouve. Le tableau des contrôles, plus haut, donne la répétition maximale observée. Liste complète des ancres reçues :

| Page | Ancres reçues |
| --- | --- |
| `inconvenients-secretariat-externalise` | « Les inconvénients du secrétariat externalisé » · « Les inconvénients du modèle lui-même » |
| `mission-ponctuelle-de-secretariat` | « Cadrer une mission ponctuelle » · « Commencer par une mission ponctuelle » · « Confier le rattrapage comme une mission ponctuelle » · « Cadrer une mission ponctuelle de secrétariat » |
| `periode-d-essai-assistante-independante` | « Ce qui remplace une période d’essai » · « Tester une prestataire avant de s’engager » |
| `cahier-des-charges-secretariat-externalise` | « Le cahier des charges, en une page » · « Du relevé au cahier des charges » · « Modèle de cahier des charges » |
| `comparer-devis-secretariat-externalise` | « La grille pour comparer des devis » · « Comparer des devis de secrétariat externalisé » · « La grille de comparaison des devis » |
| `tva-prestataire-en-franchise-en-base` | « Un prestataire qui ne facture pas la TVA » · « Recevoir une facture sans TVA : ce que cela change » · « Lire une facture sans TVA » · « Comparer un devis avec TVA et un devis sans » |
| `delais-de-reponse-assistante-externalisee` | « Disponibilité et délais de réponse » · « Convenir de délais plutôt que d’horaires » |
| `forfait-secretariat-externalise-depassement` | « Ajuster un forfait trop juste ou trop large » · « Adapter le forfait à une activité qui varie » · « Quand le forfait ne correspond plus au volume » |
| `absence-de-son-assistante-independante` | « Quand votre assistante s’absente » · « Si c’est votre prestataire indépendante qui s’absente » · « Quand votre assistante indépendante s’absente » · « Congés et maladie de la prestataire : la continuité » · « Le relais pendant une absence » |
| `obligation-de-vigilance-prestataire-independant` | « Les pièces à demander à une prestataire » · « L’obligation de vigilance, côté donneur d’ordre » |
| `domiciliation-ou-secretariat-externalise` | « Domiciliation ou secrétariat externalisé » · « Domiciliation ou secrétariat : ne pas confondre » · « Courrier numérisé par un domiciliataire : qui le traite » |
| `evaluer-un-secretariat-externalise` | « Évaluer un secrétariat externalisé » · « Cinq indicateurs pour évaluer la prestation » · « Erreur isolée ou tendance : les indicateurs » |
| `changer-d-assistante-externalisee` | « Organiser le relais vers une nouvelle prestataire » · « Changer de prestataire de secrétariat » |
| `assistante-partagee-entre-associes` | « Une file unique quand on est plusieurs à demander » |
| `presenter-son-assistante-a-ses-clients` | « Annoncer son assistante à ses interlocuteurs » · « Présenter son assistante à ses clients » |
| `erreur-de-son-assistante-externalisee` | « Quand l’erreur vient de la prestataire » |
| `rgpd-sous-traitance-assistante-externalisee` | « Le contenu de l’accord de sous-traitance RGPD » · « RGPD : l’accord de sous-traitance » · « Ce que le contrat prévoit en cas d’incident » · « Les huit engagements de l’accord RGPD » |
| `acces-bancaire-pour-son-assistante` | « Le niveau d’accès bancaire à ouvrir » · « Quel accès bancaire donner à son assistante » |
| `moyens-de-paiement-delegues` | « Les dépenses engagées pour vous, et leur plafond » · « Payer pour vous sans votre carte » |
| `appels-manques-entreprise` | « Vous ratez des appels » · « Les appels auxquels on n’a pas répondu » · « Vous ratez des appels : que faire » · « Mesurer ses appels manqués avant de choisir » |
| `secretariat-externalise-france-ou-offshore` | « Secrétariat en France ou offshore » · « Un prestataire hors d’Europe : la question des données » |
| `revue-trimestrielle-assistance-externalisee` | « La revue trimestrielle, pour le cadre » · « La revue trimestrielle du périmètre » · « Revoir le cadre une fois par trimestre » |
| `recruter-apres-avoir-externalise` | « Créer le poste après avoir externalisé » |
| `incident-de-securite-chez-un-prestataire` | « Couper les accès après un incident » · « Incident de sécurité chez un prestataire » |
| `delegations-aupres-des-organismes` | « Déléguer l’accès aux espaces des organismes » · « Les délégations prévues par les impôts, l’Urssaf et La Poste » |
| `dirigeant-indisponible-du-jour-au-lendemain` | « Quand l’absence n’était pas prévue » |
| `conjoint-qui-fait-l-administratif` | « Quand c’est le conjoint qui tient l’administratif » |
| `controle-urssaf-preparer-les-pieces` | « Retrouver trois ans de pièces pour un contrôle » |
| `lettre-recommandee-electronique` | « Envoyer un recommandé sans passer au guichet » · « La lettre recommandée électronique » |
| `mentions-obligatoires-courriers-et-emails` | « Les mentions à porter sur ses courriers et e-mails » · « Signatures et en-têtes à corriger après un changement de siège » |
| `collecter-des-pieces-aupres-de-ses-clients` | « Obtenir les pièces qui manquent encore » |
| `tenir-son-fichier-clients-a-jour` | « Mettre le fichier clients à jour après le rendez-vous » · « Tenir son fichier clients à jour » |
| `assemblee-generale-annuelle-retroplanning` | « Le calendrier de l’assemblée annuelle » · « Après la clôture : l’assemblée et le dépôt » |
| `annonce-de-repondeur-professionnel` | « Le texte de l’annonce de répondeur » · « L’annonce de répondeur professionnel » |
| `boite-mail-partagee-entreprise` | « Organiser une adresse partagée à plusieurs » |
| `temps-partage-interim-alternance-ou-prestataire` | « Intérim, temps partagé, alternance : comparer » |
| `secretariat-externalise-charge-deductible` | « La dépense est-elle une charge déductible ? » · « Le secrétariat externalisé, charge déductible » |
| `sous-traitance-par-son-assistante` | « Votre assistante peut-elle sous-traiter ? » · « Quand la prestataire confie le travail à un tiers » |
| `depart-d-un-salarie-checklist-administrative` | « La checklist de départ d’un salarié » · « Le jour où un salarié s’en va » |
| `numeriser-ses-archives-papier` | « Numériser ses archives papier » |
| `declarer-un-sinistre-professionnel` | « Déclarer un sinistre, contrat en main » |
| `vehicules-de-societe-suivi-administratif` | « L’avis de contravention d’un véhicule de société » |
| `dicter-ses-courriers` | « Dicter un courrier plutôt que l’écrire » |
| `checklist-administrative-mensuelle` | « La checklist administrative du mois » |
| `telesecretariat-et-assistante-externalisee` | « Faire travailler ensemble télésecrétariat et assistante » · « Télésecrétariat et assistante : organiser le relais » |
| `coordonner-des-entretiens-de-recrutement` | « Le cas des entretiens de recrutement » |
| `participer-a-un-salon-professionnel` | « Préparer une participation à un salon » |
| `modele-note-d-aide-a-la-decision` | « La note d’aide à la décision, autre format d’une page » |
| `assistante-commerciale-externalisee` | « Ce que prend en charge une assistante commerciale » · « L’assistante commerciale externalisée » |
| `traiter-les-demandes-de-devis-entrantes` | « Répondre vite aux demandes de devis entrantes » · « Traiter les demandes de devis entrantes » |
