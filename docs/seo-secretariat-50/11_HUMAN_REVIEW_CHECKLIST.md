# 11 — Liste de relecture humaine

> Document généré par `scripts/docs-secretariat.mjs` le 2026-10-06, à partir des fiches, des registres et du build d’aperçu. Ne pas le modifier à la main : relancer `npm run docs:secretariat`.

Les 50 pages de la série. **Validées par le propriétaire du site : 50. Relues par Brittany Dreano : 0. En ligne : 50.**

## Ce que disent les quatre statuts

| Statut | Ce qu’il affirme | Où il est enregistré |
| --- | --- | --- |
| RELECTURE_IA | Contrôles faits par l’outil qui a rédigé les pages : chaque règle citée confrontée à sa source officielle au moment de l’écriture, chaque phrase qui décrit BrittAssist confrontée aux conditions générales publiées, recherche de répétitions et de fautes de typographie. Ce n’est ni une seconde lecture intégrale, ni une relecture par une personne | Ce document. **FAITE** pour les 50 pages |
| QA automatique | La page passe le gate éditorial, l’audit du build et le contrôle de similarité | `09_TEST_REPORT.md` |
| VALIDATION DU PROPRIÉTAIRE | Le propriétaire du site déclare avoir vérifié la page et l’accepte. Le registre garde son nom, la date et ses mots, tels quels ; il ne dit pas ce que la vérification a couvert. Sans effet sur le site : la page n’est ni mise en ligne, ni présentée comme relue | `src/data/relectures.mjs`, liste `validations` |
| RELECTURE PAR BRITTANY DREANO | Brittany Dreano a lu la page en entier et ouvert ses sources. C’est la seule relecture que le site affiche | `src/data/relectures.mjs`, objet `relectures` — et nulle part ailleurs |

Ces quatre statuts ne se remplacent pas. Une page relue par l’outil et passée au contrôle automatique **n’est pas une page relue par une personne**. Une page validée par le propriétaire **n’est pas une page relue par Brittany Dreano**.

Dans les rapports de cette série, `RELECTURE_HUMAINE = FAITE` désigne l’un ou l’autre des deux derniers statuts, et dit toujours lequel.

## Deux registres dans un même fichier

Inscrire une page dans l’objet `relectures` de `src/data/relectures.mjs` a trois effets visibles : la mention « **Relu par Brittany Dreano** le … » s’affiche sous la réponse courte, les données structurées déclarent `reviewedBy` avec Brittany Dreano pour auteur de la relecture, et le `<lastmod>` du sitemap prend cette date.

Cet objet n’enregistre qu’une date : le nom de la personne est fixé par le gabarit. **Une validation donnée par une autre personne que Brittany Dreano ne peut donc pas y être inscrite** sans publier une affirmation inexacte en son nom. Elle s’inscrit dans la liste `validations` du même fichier, qui porte le nom de la personne et ses mots, et qu’aucun gabarit ne lit. Deux voies, donc :

1. Brittany Dreano relit le lot : ses pages sont inscrites dans `relectures`, et le site l’affiche.
2. Le propriétaire du site valide le lot sans que Brittany Dreano l’ait relu : la validation est inscrite dans `validations`. Le jour où le lot est publié, ses pages sont inscrites dans `publications.mjs` — en ligne, sans mention de relecture —, comme la série d’octobre 2026.

Afficher sur le site le nom d’un autre relecteur est possible, mais c’est une modification du gabarit et des données structurées : elle n’a pas été faite sans demande.

## Ce qu’une relecture doit regarder

1. **Le ton** : est-ce ainsi que BrittAssist parle à ses clients ?
2. **Ce qui est dit de BrittAssist** : chaque phrase qui décrit l’offre reprend les conditions générales ou le site. Vérifier qu’elle est toujours vraie.
3. **Les règles citées** : 27 pages citent une source officielle. Ouvrir chaque lien de la rubrique « Références », vérifier que la page dit bien ce que la source dit.
4. **Les exemples** : tous sont illustratifs. Aucun ne doit pouvoir être lu comme un cas client.
5. **Ce qui manque** : une limite du métier que la page devrait dire, une situation qu’elle ignore.

## Lot A — 10 pages

| # | Slug | Title | Intention | Cannibalisation | Sources | QA | Validation et relecture |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `inconvenients-secretariat-externalise` | Secrétariat externalisé : les inconvénients réels · BrittAssist | informationnelle | MOYEN — proche de `ce-qu-une-assistante-externalisee-ne-fait-pas` | Aucune règle citée | PASS — 1129 mots, 9 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 2 | `mission-ponctuelle-de-secretariat` | Mission ponctuelle de secrétariat : bien la cadrer · BrittAssist | commerciale | MOYEN — proche de `situations-de-dirigeant` | Aucune règle citée | PASS — 928 mots, 11 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 3 | `periode-d-essai-assistante-independante` | Période d’essai avec une assistante indépendante ? · BrittAssist | informationnelle | MOYEN — proche de `premier-mois-assistante-externalisee` | 2 source(s) officielle(s) à ouvrir | PASS — 1039 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 4 | `cahier-des-charges-secretariat-externalise` | Cahier des charges pour externaliser son secrétariat · BrittAssist | modèle | MOYEN — proche de `modele-brief-assistante-externalisee` | Aucune règle citée | PASS — 904 mots, 10 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 5 | `comparer-devis-secretariat-externalise` | Comparer deux devis de secrétariat externalisé · BrittAssist | modèle | MOYEN — proche de `prix-assistante-de-direction-externalisee` | Aucune règle citée | PASS — 987 mots, 9 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 6 | `tva-prestataire-en-franchise-en-base` | Prestataire sans TVA : ce que cela change pour vous · BrittAssist | référence | FAIBLE — proche de `mentions-obligatoires-facture` | 2 source(s) officielle(s) à ouvrir | PASS — 945 mots, 11 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 7 | `delais-de-reponse-assistante-externalisee` | Assistante externalisée : délais de réponse à convenir · BrittAssist | méthode | FAIBLE — proche de `canal-pour-transmettre-ses-demandes` | 1 source(s) officielle(s) à ouvrir | PASS — 958 mots, 9 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 8 | `forfait-secretariat-externalise-depassement` | Forfait de secrétariat : dépassement, sous-utilisation · BrittAssist | méthode | MOYEN — proche de `prix-assistante-de-direction-externalisee` | Aucune règle citée | PASS — 930 mots, 10 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 9 | `absence-de-son-assistante-independante` | Assistante indépendante absente : la continuité · BrittAssist | problème-solution | MOYEN — proche de `remplacer-une-assistante-absente` | Aucune règle citée | PASS — 934 mots, 12 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 10 | `obligation-de-vigilance-prestataire-independant` | Obligation de vigilance : les pièces du prestataire · BrittAssist | référence | MOYEN — proche de `dossier-permanent-entreprise` | 3 source(s) officielle(s) à ouvrir | PASS — 1039 mots, 9 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |

## Lot B — 10 pages

| # | Slug | Title | Intention | Cannibalisation | Sources | QA | Validation et relecture |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11 | `domiciliation-ou-secretariat-externalise` | Domiciliation ou secrétariat externalisé ? · BrittAssist | comparaison | FAIBLE — proche de `secretariat-externalise` | 1 source(s) officielle(s) à ouvrir | PASS — 897 mots, 9 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 12 | `evaluer-un-secretariat-externalise` | Évaluer un secrétariat externalisé : cinq indicateurs · BrittAssist | méthode | MOYEN — proche de `suivi-demandes-assistante-externalisee` | Aucune règle citée | PASS — 834 mots, 10 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 13 | `changer-d-assistante-externalisee` | Changer de prestataire de secrétariat sans rupture · BrittAssist | méthode | MOYEN — proche de `fin-de-collaboration-assistante-externalisee` | Aucune règle citée | PASS — 882 mots, 9 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 14 | `assistante-partagee-entre-associes` | Une assistante pour plusieurs associés : les règles · BrittAssist | méthode | FAIBLE — proche de `/assistante/professions-liberales` | Aucune règle citée | PASS — 780 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 15 | `presenter-son-assistante-a-ses-clients` | Présenter son assistante à ses clients : les messages · BrittAssist | modèle | MOYEN — proche de `deleguer-sa-boite-mail` | Aucune règle citée | PASS — 818 mots, 9 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 16 | `erreur-de-son-assistante-externalisee` | Erreur de votre assistante externalisée : que faire · BrittAssist | problème-solution | MOYEN — proche de `erreurs-de-delegation` | 1 source(s) officielle(s) à ouvrir | PASS — 907 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 17 | `rgpd-sous-traitance-assistante-externalisee` | RGPD : l’accord de sous-traitance avec une assistante · BrittAssist | référence | MOYEN — proche de `contrat-de-prestation-assistante-independante` | 4 source(s) officielle(s) à ouvrir | PASS — 1036 mots, 11 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 18 | `acces-bancaire-pour-son-assistante` | Banque en ligne : quel accès donner à son assistante · BrittAssist | informationnelle | FAIBLE — proche de `circuit-des-factures-fournisseurs` | Aucune règle citée | PASS — 870 mots, 9 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 19 | `moyens-de-paiement-delegues` | Payer pour vous sans votre carte : les solutions · BrittAssist | méthode | FAIBLE — proche de `niveaux-d-autonomie-delegation` | Aucune règle citée | PASS — 891 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 20 | `appels-manques-entreprise` | Appels manqués : répondeur, rappel ou télésecrétariat ? · BrittAssist | problème-solution | MOYEN — proche de `filtrer-les-appels-et-messages` | Aucune règle citée | PASS — 912 mots, 10 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |

## Lot C — 15 pages

| # | Slug | Title | Intention | Cannibalisation | Sources | QA | Validation et relecture |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 21 | `secretariat-externalise-france-ou-offshore` | Secrétariat externalisé en France ou offshore ? · BrittAssist | comparaison | MOYEN — proche de `assistante-virtuelle-ou-private-office` | 2 source(s) officielle(s) à ouvrir | PASS — 1029 mots, 9 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 22 | `revue-trimestrielle-assistance-externalisee` | Revue trimestrielle d’une assistance externalisée · BrittAssist | méthode | MOYEN — proche de `point-hebdomadaire-avec-son-assistante` | Aucune règle citée | PASS — 788 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 23 | `recruter-apres-avoir-externalise` | Après l’externalisation : quand recruter une assistante · BrittAssist | informationnelle | MOYEN — proche de `assistante-independante-ou-salariee` | 1 source(s) officielle(s) à ouvrir | PASS — 871 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 24 | `incident-de-securite-chez-un-prestataire` | Incident de sécurité chez un prestataire : que faire · BrittAssist | problème-solution | FAIBLE — proche de `fraude-au-faux-rib-et-au-president` | 2 source(s) officielle(s) à ouvrir | PASS — 996 mots, 7 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 25 | `delegations-aupres-des-organismes` | Impôts, Urssaf, La Poste : déléguer sans mot de passe · BrittAssist | informationnelle | FAIBLE — proche de `delegation-d-acces-messagerie-et-agenda` | 3 source(s) officielle(s) à ouvrir | PASS — 975 mots, 9 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 26 | `dirigeant-indisponible-du-jour-au-lendemain` | Dirigeant indisponible du jour au lendemain : anticiper · BrittAssist | problème-solution | MOYEN — proche de `preparer-son-absence` | 1 source(s) officielle(s) à ouvrir | PASS — 927 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 27 | `conjoint-qui-fait-l-administratif` | Votre conjoint fait l’administratif : statut, relais · BrittAssist | référence | FAIBLE — proche de `/assistante/artisans-btp` | 2 source(s) officielle(s) à ouvrir | PASS — 1021 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 28 | `controle-urssaf-preparer-les-pieces` | Contrôle Urssaf : préparer les pièces demandées · BrittAssist | problème-solution | FAIBLE — proche de `rattraper-un-retard-administratif` | 1 source(s) officielle(s) à ouvrir | PASS — 880 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 29 | `lettre-recommandee-electronique` | Lettre recommandée électronique : valeur et usages · BrittAssist | référence | FAIBLE — proche de `signature-electronique-niveaux-et-usages` | 2 source(s) officielle(s) à ouvrir | PASS — 936 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 30 | `mentions-obligatoires-courriers-et-emails` | Mentions obligatoires : courriers et e-mails pro · BrittAssist | référence | MOYEN — proche de `mentions-obligatoires-facture` | 4 source(s) officielle(s) à ouvrir | PASS — 967 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 31 | `collecter-des-pieces-aupres-de-ses-clients` | Obtenir les pièces de ses clients sans relancer dix fois · BrittAssist | méthode | MOYEN — proche de `checklist-ouverture-dossier-client` | Aucune règle citée | PASS — 841 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 32 | `tenir-son-fichier-clients-a-jour` | Tenir son fichier clients à jour : la méthode · BrittAssist | méthode | FAIBLE — proche de `checklist-ouverture-dossier-client` | 1 source(s) officielle(s) à ouvrir | PASS — 961 mots, 9 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 33 | `assemblee-generale-annuelle-retroplanning` | Assemblée générale annuelle : le rétroplanning · BrittAssist | méthode | MOYEN — proche de `checklist-cloture-annuelle-administrative` | 1 source(s) officielle(s) à ouvrir | PASS — 913 mots, 9 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 34 | `annonce-de-repondeur-professionnel` | Annonce de répondeur professionnel : cinq textes · BrittAssist | modèle | FAIBLE — proche de `preparer-son-absence` | Aucune règle citée | PASS — 820 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 35 | `boite-mail-partagee-entreprise` | Boîte mail partagée (contact@) : qui lit, qui répond · BrittAssist | méthode | MOYEN — proche de `organiser-sa-boite-mail-de-dirigeant` | Aucune règle citée | PASS — 805 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |

## Lot D — 15 pages

| # | Slug | Title | Intention | Cannibalisation | Sources | QA | Validation et relecture |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 36 | `temps-partage-interim-alternance-ou-prestataire` | Temps partagé, intérim, alternance ou prestataire ? · BrittAssist | comparaison | MOYEN — proche de `assistante-independante-ou-salariee` | 3 source(s) officielle(s) à ouvrir | PASS — 1039 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 37 | `secretariat-externalise-charge-deductible` | Secrétariat externalisé : une charge déductible ? · BrittAssist | référence | FAIBLE — proche de `rentabilite-assistante-externalisee` | 3 source(s) officielle(s) à ouvrir | PASS — 929 mots, 9 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 38 | `sous-traitance-par-son-assistante` | Votre assistante peut-elle sous-traiter votre travail ? · BrittAssist | informationnelle | MOYEN — proche de `contrat-de-prestation-assistante-independante` | 2 source(s) officielle(s) à ouvrir | PASS — 875 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 39 | `depart-d-un-salarie-checklist-administrative` | Départ d’un salarié : la checklist administrative · BrittAssist | problème-solution | FAIBLE — proche de `premiere-embauche-formalites-administratives` | 2 source(s) officielle(s) à ouvrir | PASS — 1015 mots, 9 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 40 | `numeriser-ses-archives-papier` | Numériser ses papiers d’entreprise : trier d’abord · BrittAssist | méthode | MOYEN — proche de `duree-de-conservation-documents-entreprise` | 2 source(s) officielle(s) à ouvrir | PASS — 933 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 41 | `declarer-un-sinistre-professionnel` | Déclarer un sinistre professionnel : le dossier · BrittAssist | méthode | FAIBLE — proche de `suivi-des-contrats-et-abonnements` | 2 source(s) officielle(s) à ouvrir | PASS — 844 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 42 | `vehicules-de-societe-suivi-administratif` | Véhicules de société : le suivi administratif · BrittAssist | référence | FAIBLE — proche de `echeancier-administratif-entreprise` | 2 source(s) officielle(s) à ouvrir | PASS — 861 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 43 | `dicter-ses-courriers` | Dicter ses courriers et les faire mettre en forme · BrittAssist | méthode | MOYEN — proche de `canal-pour-transmettre-ses-demandes` | 1 source(s) officielle(s) à ouvrir | PASS — 953 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 44 | `checklist-administrative-mensuelle` | Checklist administrative mensuelle d’une entreprise · BrittAssist | modèle | MOYEN — proche de `echeancier-administratif-entreprise` | Aucune règle citée | PASS — 908 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 45 | `telesecretariat-et-assistante-externalisee` | Télésecrétariat et assistante : organiser le relais · BrittAssist | méthode | MOYEN — proche de `secretariat-externalise` | Aucune règle citée | PASS — 826 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 46 | `coordonner-des-entretiens-de-recrutement` | Entretiens de recrutement : organiser la logistique · BrittAssist | méthode | MOYEN — proche de `gerer-les-demandes-de-rendez-vous` | 1 source(s) officielle(s) à ouvrir | PASS — 835 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 47 | `participer-a-un-salon-professionnel` | Exposer sur un salon professionnel : le rétroplanning · BrittAssist | méthode | FAIBLE — proche de `organiser-un-seminaire-d-equipe` | Aucune règle citée | PASS — 879 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 48 | `modele-note-d-aide-a-la-decision` | Note d’aide à la décision : le modèle d’une page · BrittAssist | modèle | FAIBLE — proche de `dossier-de-rendez-vous` | Aucune règle citée | PASS — 837 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 49 | `assistante-commerciale-externalisee` | Assistante commerciale externalisée : son périmètre · BrittAssist | informationnelle | MOYEN — proche de `devis-factures-relances` | Aucune règle citée | PASS — 942 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |
| 50 | `traiter-les-demandes-de-devis-entrantes` | Demandes de devis entrantes : répondre dans la journée · BrittAssist | méthode | MOYEN — proche de `relancer-un-devis-sans-reponse` | Aucune règle citée | PASS — 864 mots, 8 liens entrants | VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 |

## Valeurs possibles de la dernière colonne

- **EN ATTENTE** : personne n’a validé ni relu la page.
- **VALIDÉE PAR LE PROPRIÉTAIRE** : la page figure dans la liste `validations` de `relectures.mjs`, à la date indiquée. Le site n’affiche rien.
- **RELUE PAR BRITTANY DREANO** : la page figure dans l’objet `relectures`, à la date indiquée. Le site affiche la mention.
- **À CORRIGER** et **REJETÉE** ne sont pas des états du registre : ce sont des décisions de relecture. Elles se notent ici, à la main, dans la section suivante, jusqu’à ce que la page soit corrigée ou retirée de la série.

## Décisions de relecture

Les décisions (À CORRIGER, REJETÉE) et le détail de chaque validation du propriétaire se notent dans `docs/seo-secretariat-50/data/decisions-de-relecture.md`. Ce fichier s’écrit à la main ; il est repris ici à chaque régénération.

### 6 octobre 2026 — validation du propriétaire, 50 pages

| | |
| --- | --- |
| Qui | Axel Dreano, propriétaire du site |
| Quand | 6 octobre 2026, 19 h 19 (heure de Paris) |
| Ses mots | « c'est bon j'ai tout checker » |
| En réponse à | Le rapport final de la série, qui demandait la relecture du lot A et rappelait que le site affiche « Relu par Brittany Dreano » |
| Pages couvertes | Les 50 pages de la série, lots A à D |
| Enregistré dans | `src/data/relectures.mjs`, liste `validations` |

**Comment « tout » a été lu.** Comme les cinquante pages de la série : ce sont les seules pages soumises à relecture, et ce document les liste toutes. C’était d’abord une lecture de l’outil. Le propriétaire l’a confirmée à 20 h 07 en écrivant que toutes les pages avaient été relues (voir plus bas).

**Ce que cette validation dit.** Que le propriétaire déclare avoir tout vérifié, et qu’il accepte les pages. L’outil n’a aucun moyen de savoir ce que la vérification a couvert : le registre garde la phrase, il ne la traduit pas en « lu en entier, sources ouvertes ».

**Ce qu’elle ne dit pas.** Que Brittany Dreano a relu ces pages. L’objet `relectures` reste vide : aucune page n’affiche « Relu par Brittany Dreano », aucune donnée structurée ne déclare `reviewedBy`.

**Ce qu’elle ne fait pas.** Elle ne publie rien. Les cinquante pages restent des brouillons — `noindex`, hors sitemap, absentes du build de production — jusqu’à leur inscription, lot par lot, dans `publications.mjs`.

**Contenu validé.** Celui des fichiers `src/data/dossiers/secretariat-*.ts` dans l’état où ils étaient à 18 h 50 le 6 octobre 2026, leur dernière modification avant la déclaration. Une page modifiée ensuite n’est plus couverte par cette validation pour ce qui a changé.

**Restés ouverts après la déclaration.**

- La page de référence dit « une obligation de résultat sur chaque sujet » ; les conditions générales, article 6, disent « obligation de moyens, non de résultat ». Non corrigé : la déclaration ne dit pas quoi en faire, et la page est protégée.
- Le nom affiché par le site reste celui de Brittany Dreano. Faire apparaître un autre relecteur demanderait de modifier le gabarit et les données structurées : rien n’a été demandé en ce sens.
- La source `economie.gouv.fr` de la page `tva-prestataire-en-franchise-en-base` refuse les outils, navigateur automatisé compris (HTTP 403, page de vérification). L’outil ne sait pas si elle a été ouverte pendant la vérification du propriétaire. Les règles qu’elle appuie ont été lues sur impots.gouv.fr et le BOFiP. Son adresse a été corrigée avant la mise en ligne (voir plus bas).

### 6 octobre 2026, 19 h 42 — mise en ligne du lot A : répétée, non faite

À 19 h 42, le propriétaire a demandé de préparer le commit et le push finaux. Aucune de ses deux phrases ne demande la mise en ligne d’un lot, et l’outil n’est pas autorisé à préparer une mise en production de sa propre initiative. Le lot A n’a donc pas été inscrit dans `publications.mjs` : les cinquante pages sont toujours des brouillons, et le commit préparé ne change rien à ce que le site sert.

La mise en ligne du lot A a été répétée sur une copie du dépôt, sans toucher au dépôt réel : 161 pages, 159 URL au sitemap, aucun blocage. Chiffres dans `data/repetition-lot-a.json`, lecture dans `09_TEST_REPORT.md`. Elle attend une demande explicite du propriétaire.

### 6 octobre 2026, 20 h 07 — mise en ligne des 50 pages, sur décision du propriétaire

| | |
| --- | --- |
| Qui | Axel Dreano, propriétaire du site |
| Quand | 6 octobre 2026, 20 h 07 (heure de Paris) |
| Ses mots | « fait pour qu'il y est les 199page indexable au sitemap, toute les pages on ete relu, corrige les brouille, puis commit push sur le main » |
| Ce qui a été fait | Les 50 pages de la série inscrites dans `src/data/publications.mjs`, datées du 6 octobre 2026 |
| Enregistré dans | `publications.mjs` pour la mise en ligne ; `relectures.mjs`, liste `validations`, pour la déclaration de relecture |

**Ce que cette décision change.** Les cinquante pages sont en ligne d’un coup : 199 pages indexables, 199 adresses au sitemap. Le plan par lots de `05_PUBLICATION_PLAN.md` n’a pas été suivi, et les critères de passage d’un lot au suivant n’ont pas été appliqués. C’est le choix du propriétaire, qui avait lui-même demandé une publication par lots au départ de la mission.

**Ce que « toutes les pages ont été relues » a changé, et n’a pas changé.** La phrase est enregistrée telle quelle dans la liste `validations`, comme seconde déclaration du propriétaire. Elle a été lue comme visant les cinquante pages de la série, les seules encore en brouillon. Elle ne dit pas qui a relu. L’objet `relectures` est donc resté vide : aucune page n’affiche « Relu par Brittany Dreano », aucune donnée structurée ne déclare `reviewedBy`. Si Brittany Dreano a relu ces pages elle-même, il suffit de le dire pour qu’elles y soient inscrites.

**Ce que « corriger les brouillons » a été compris comme.** Lever le statut de brouillon : retirer le `noindex`, le bandeau et la mise à l’écart du sitemap, ce que fait l’inscription dans `publications.mjs`. Aucun texte n’a été réécrit.

**La seule correction de contenu.** L’adresse de la source `economie.gouv.fr` de la page `tva-prestataire-en-franchise-en-base`. Une recherche limitée au site du ministère ne renvoie pas l’ancienne adresse ; la page de même titre, « Entreprises : pouvez-vous bénéficier de la franchise de TVA ? », y figure à une adresse plus longue, qui a été retenue. L’outil n’a pu ouvrir ni l’une ni l’autre : le site refuse les requêtes automatisées. Cette correction est postérieure à la validation du propriétaire ; elle ne touche qu’un lien de la rubrique « Références ».

**La page de référence.** Elle gagne sa rubrique « Pour approfondir », quatorze liens, et sa date de mise à jour passe au 6 octobre 2026. Title, H1, slug et texte ne changent pas. La phrase « une obligation de résultat sur chaque sujet », qui contredit l’article 6 des conditions générales, n’a pas été touchée.

**À surveiller.** Clics, impressions et position de `/guides/secretariat-externalise` dans la Search Console, sur une période identique avant et après le 6 octobre 2026. Si une page de la série apparaît à sa place sur une requête qu’elle tenait : renforcer le lien de cette page vers la page de référence, resserrer son title, et en dernier recours retirer sa ligne de `publications.mjs`.
