# 07 — Rapport de similarité

> Document généré par `scripts/docs-secretariat.mjs` le 2026-10-06, à partir des fiches, des registres et du build d’aperçu. Ne pas le modifier à la main : relancer `npm run docs:secretariat`.

Contrôle de la ressemblance entre les 50 pages de la série, et entre elles et les 104 guides existants. Trois contrôles se complètent : le gate éditorial, l’audit du build, et un contrôle champ par champ ajouté pour cette série.

## Les trois contrôles

| Contrôle | Script | Ce qu’il compare | Seuils |
| --- | --- | --- | --- |
| Gate éditorial | `scripts/content-gate.mjs` | Le texte entier de chaque fiche, en 4-grammes | Avertissement à 20 %, blocage à 55 % |
| Audit du build | `scripts/seo-audit.mjs` | Le contenu principal du HTML servi, en 5-grammes | Avertissement à 30 %, blocage à 50 % |
| Contrôle champ par champ | `scripts/similarity-check.mjs` | Titres, chapôs, réponses courtes, corps, FAQ, clôtures, requêtes ; phrases reprises ; questions répétées ; sujet (TF-IDF) | Voir ci-dessous |

Le troisième est nouveau. Il se lance par `npm run qa:similarite`, qui échoue s’il reste un blocage sur une paire où figure une page de la série.

## Résultat

| Contrôle | Résultat sur la série |
| --- | --- |
| Gate éditorial — paires au-dessus de 20 % | 0 (voir `09_TEST_REPORT.md`) |
| Audit du build — paires au-dessus de 30 % | 0 |
| Audit du build — paire la plus proche où figure une page de la série | 8 % : `/guides/modele-note-d-aide-a-la-decision` ↔ `/guides/modele-tableau-de-suivi-des-factures` |
| Contrôle champ par champ — paires comparées | 6425 |
| Contrôle champ par champ — blocages | **0** |
| Contrôle champ par champ — alertes | 5 |
| Phrases reprises à l’identique entre deux pages | 0 |

Le contenu principal du HTML comprend le gabarit commun à tous les guides — intertitres fixes, colonnes de liens, appel final. Les pourcentages de l’audit du build ont donc un plancher qui ne doit rien au texte des pages.

## Seuils du contrôle champ par champ

| Champ | Mesure | Alerte | Blocage | Maximum observé sur la série | Maximum observé sur les guides déjà en ligne |
| --- | --- | --- | --- | --- | --- |
| Titre et H1 | Jaccard des pseudo-racines | 0.5 | 0.8 | 0.375 | 0.5 |
| Chapô | Jaccard des 3-grammes | 0.12 | 0.4 | 0.044 | 0.043 |
| Réponse courte | Jaccard des 3-grammes | 0.12 | 0.4 | 0.076 | 0.064 |
| Corps | Jaccard des 4-grammes | 0.08 | 0.3 | 0.029 | 0.034 |
| FAQ | Jaccard des 4-grammes | 0.08 | 0.3 | 0.019 | 0.079 |
| Clôture | Jaccard des 3-grammes | 0.3 | 0.7 | 0.118 | 0.158 |
| Sujet de la page | Cosinus TF-IDF, texte entier | 0.45 | 0.7 | 0.495 | 0.429 |
| Requête principale | Jaccard des pseudo-racines | 0.6 | 0.85 | 0.667 | 0.75 |

S’y ajoutent trois règles sans seuil numérique : une **phrase d’au moins 9 mots** présente dans deux pages (alerte ; blocage à partir de 14 mots), une **question de FAQ identique** dans deux pages (blocage), et la **requête principale** d’une page reprise telle quelle dans les variantes d’une autre (blocage).

Les seuils ont été posés après avoir mesuré les 104 guides déjà en ligne : les alertes se déclenchent au-dessus de ce que cette bibliothèque produit couramment, les blocages nettement au-delà. La dernière colonne donne ce repère.

## Les alertes, une par une

| Règle | Pages | Score | Lecture |
| --- | --- | --- | --- |
| requete-proche | `externaliser-son-assistanat` ↔ `erreur-de-son-assistante-externalisee` | 0.667 | Les deux requêtes partagent des pseudo-racines très courantes dans la bibliothèque (« extern », « assist », « secret », « charge »). Les requêtes complètes sont différentes, et les intentions aussi. |
| requete-proche | `externaliser-son-assistanat` ↔ `telesecretariat-et-assistante-externalisee` | 0.667 | Les deux requêtes partagent des pseudo-racines très courantes dans la bibliothèque (« extern », « assist », « secret », « charge »). Les requêtes complètes sont différentes, et les intentions aussi. |
| requete-proche | `externaliser-son-assistanat` ↔ `assistante-commerciale-externalisee` | 0.667 | Les deux requêtes partagent des pseudo-racines très courantes dans la bibliothèque (« extern », « assist », « secret », « charge »). Les requêtes complètes sont différentes, et les intentions aussi. |
| requete-proche | `secretariat-externalise-charge-deductible` ↔ `cahier-des-charges-secretariat-externalise` | 0.6 | Les deux requêtes partagent des pseudo-racines très courantes dans la bibliothèque (« extern », « assist », « secret », « charge »). Les requêtes complètes sont différentes, et les intentions aussi. |
| sujet-proche | `dossier-permanent-entreprise` ↔ `obligation-de-vigilance-prestataire-independant` | 0.495 | Les deux pages traitent de l’attestation de vigilance : l’une pour l’entreprise qui la fournit, l’autre pour le client qui la demande. Vocabulaire commun, lecteurs opposés ; elles se citent mutuellement. |

## Corrections faites pendant la rédaction

Le premier passage du contrôle avait relevé, sur les pages de la série :

- deux questions de FAQ identiques à des questions de pages existantes (« Quelle longueur ? », « Faut-il un outil particulier ? ») ;
- un intertitre repris mot pour mot d’une page existante (« Ce qui se délègue, et ce qui ne se délègue pas »).

Les trois ont été reformulés. À cette occasion, quarante et une questions de FAQ de la série ont été réécrites pour se suffire à elles-mêmes : « Qui relit ? » est devenue « Qui relit un courrier dicté ? ». Une question lisible hors de sa page est aussi celle qu’un moteur de réponse peut citer.

## Ce que le contrôle relève sur les pages déjà en ligne

Lancé sur les seuls guides existants, le contrôle relève 3 blocage(s) et 15 alerte(s). Ils ne concernent pas la série et **n’ont pas été corrigés** : ce sont des pages publiées, que cette mission ne devait pas modifier. Ils sont consignés pour une passe ultérieure.

| Règle | Pages | Détail |
| --- | --- | --- |
| question-identique | `assistante-virtuelle-ou-private-office` ↔ `conciergerie-privee-ou-lifestyle-assistant` | Peut-on combiner les deux ? |
| question-identique | `dossier-de-rendez-vous` ↔ `politique-voyage-petite-entreprise` | Qui la rédige ? |
| question-identique | `dirigeant-goulot-d-etranglement` ↔ `demenagement-de-bureaux` | Par quoi commencer ? |
| question-voisine | `suivi-des-contrats-et-abonnements` ↔ `registre-des-acces-entreprise` | « Qui peut tenir ce registre ? » / « Qui doit tenir le registre ? » |
| question-voisine | `traitement-du-courrier-entrant` ↔ `dirigeant-souvent-en-deplacement` | « Une assistante à distance peut-elle traiter le courrier papier ? » / « Une assistante à distance peut-elle traiter du courrier papier ? » |
| question-voisine | `agenda-emails-reunions` ↔ `dirigeant-goulot-d-etranglement` | « Par où commencer ? » / « Par quoi commencer ? » |
| question-voisine | `agenda-emails-reunions` ↔ `reprise-d-entreprise-administratif` | « Par où commencer ? » / « Quand commencer ? » |
| question-voisine | `agenda-emails-reunions` ↔ `demenagement-de-bureaux` | « Par où commencer ? » / « Par quoi commencer ? » |
| question-voisine | `dirigeant-goulot-d-etranglement` ↔ `reprise-d-entreprise-administratif` | « Par quoi commencer ? » / « Quand commencer ? » |
| question-voisine | `reprise-d-entreprise-administratif` ↔ `demenagement-de-bureaux` | « Quand commencer ? » / « Par quoi commencer ? » |
| titre-proche | `prix-assistante-de-direction-externalisee` ↔ `choisir-assistante-externalisee` | 0.5 |
| titre-proche | `choisir-assistante-externalisee` ↔ `ce-qu-une-assistante-externalisee-ne-fait-pas` | 0.5 |

Les 6 alertes « requête proche » entre pages existantes tiennent toutes à un pilier dont la requête, très générale, partage ses mots avec les pages de son dossier.

## Voisinages : la page la plus proche de chacune

Pour chaque page de la série, la page de la bibliothèque dont le vocabulaire est le plus voisin (cosinus TF-IDF sur le texte entier).

| Page de la série | Page la plus proche | Cosinus |
| --- | --- | --- |
| `obligation-de-vigilance-prestataire-independant` | `dossier-permanent-entreprise` | 0.49 |
| `rgpd-sous-traitance-assistante-externalisee` | `contrat-de-prestation-assistante-independante` | 0.36 |
| `appels-manques-entreprise` | `telesecretariat-et-assistante-externalisee` | 0.36 |
| `telesecretariat-et-assistante-externalisee` | `appels-manques-entreprise` | 0.36 |
| `annonce-de-repondeur-professionnel` | `telesecretariat-et-assistante-externalisee` | 0.34 |
| `sous-traitance-par-son-assistante` | `rgpd-sous-traitance-assistante-externalisee` | 0.33 |
| `traiter-les-demandes-de-devis-entrantes` | `relancer-un-devis-sans-reponse` | 0.32 |
| `recruter-apres-avoir-externalise` | `assistante-independante-ou-salariee` | 0.31 |
| `forfait-secretariat-externalise-depassement` | `revue-trimestrielle-assistance-externalisee` | 0.31 |
| `revue-trimestrielle-assistance-externalisee` | `forfait-secretariat-externalise-depassement` | 0.31 |
| `periode-d-essai-assistante-independante` | `contrat-de-prestation-assistante-independante` | 0.31 |
| `temps-partage-interim-alternance-ou-prestataire` | `assistante-independante-ou-salariee` | 0.30 |
| `changer-d-assistante-externalisee` | `fin-de-collaboration-assistante-externalisee` | 0.30 |
| `absence-de-son-assistante-independante` | `remplacer-une-assistante-absente` | 0.29 |
| `comparer-devis-secretariat-externalise` | `prix-assistante-de-direction-externalisee` | 0.29 |
| `coordonner-des-entretiens-de-recrutement` | `gerer-les-demandes-de-rendez-vous` | 0.28 |
| `assistante-commerciale-externalisee` | `devis-factures-relances` | 0.28 |
| `delegations-aupres-des-organismes` | `delegation-d-acces-messagerie-et-agenda` | 0.28 |
| `secretariat-externalise-charge-deductible` | `tva-prestataire-en-franchise-en-base` | 0.27 |
| `tva-prestataire-en-franchise-en-base` | `secretariat-externalise-charge-deductible` | 0.27 |
| `depart-d-un-salarie-checklist-administrative` | `fin-de-collaboration-assistante-externalisee` | 0.27 |
| `inconvenients-secretariat-externalise` | `assistante-independante-ou-salariee` | 0.27 |
| `numeriser-ses-archives-papier` | `organiser-l-administratif-de-son-entreprise` | 0.26 |
| `boite-mail-partagee-entreprise` | `traitement-du-courrier-entrant` | 0.26 |
| `dicter-ses-courriers` | `compte-rendu-de-reunion` | 0.26 |
| `secretariat-externalise-france-ou-offshore` | `assistante-virtuelle-ou-private-office` | 0.26 |
| `cahier-des-charges-secretariat-externalise` | `externaliser-son-assistanat` | 0.26 |
| `incident-de-securite-chez-un-prestataire` | `confidentialite-acces-et-outils` | 0.26 |
| `tenir-son-fichier-clients-a-jour` | `changer-d-outil-de-gestion` | 0.25 |
| `lettre-recommandee-electronique` | `signature-electronique-niveaux-et-usages` | 0.25 |
| `delais-de-reponse-assistante-externalisee` | `absence-de-son-assistante-independante` | 0.24 |
| `acces-bancaire-pour-son-assistante` | `pieces-pour-l-expert-comptable` | 0.24 |
| `domiciliation-ou-secretariat-externalise` | `traitement-du-courrier-entrant` | 0.24 |
| `dirigeant-indisponible-du-jour-au-lendemain` | `delegations-aupres-des-organismes` | 0.24 |
| `mentions-obligatoires-courriers-et-emails` | `checklist-ouverture-dossier-client` | 0.23 |
| `checklist-administrative-mensuelle` | `checklist-cloture-annuelle-administrative` | 0.23 |
| `moyens-de-paiement-delegues` | `notes-de-frais-justificatifs` | 0.23 |
| `mission-ponctuelle-de-secretariat` | `externaliser-son-assistanat` | 0.23 |
| `collecter-des-pieces-aupres-de-ses-clients` | `traiter-les-demandes-de-devis-entrantes` | 0.23 |
| `controle-urssaf-preparer-les-pieces` | `dirigeant-indisponible-du-jour-au-lendemain` | 0.21 |
| `conjoint-qui-fait-l-administratif` | `dirigeant-indisponible-du-jour-au-lendemain` | 0.21 |
| `assemblee-generale-annuelle-retroplanning` | `echeancier-administratif-entreprise` | 0.21 |
| `presenter-son-assistante-a-ses-clients` | `deleguer-sa-boite-mail` | 0.21 |
| `evaluer-un-secretariat-externalise` | `premier-mois-assistante-externalisee` | 0.21 |
| `erreur-de-son-assistante-externalisee` | `erreurs-de-delegation` | 0.20 |
| `assistante-partagee-entre-associes` | `executive-assistant-role` | 0.19 |
| `modele-note-d-aide-a-la-decision` | `niveaux-d-autonomie-delegation` | 0.19 |
| `participer-a-un-salon-professionnel` | `organiser-un-seminaire-d-equipe` | 0.19 |
| `vehicules-de-societe-suivi-administratif` | `echeancier-administratif-entreprise` | 0.18 |
| `declarer-un-sinistre-professionnel` | `erreur-de-son-assistante-externalisee` | 0.17 |

## Les dix paires de HTML les plus proches

Contenu principal du HTML servi, 5-grammes, paires où figure au moins une page de la série.

| Page | Page | Part commune |
| --- | --- | --- |
| `/guides/modele-note-d-aide-a-la-decision` | `/guides/modele-tableau-de-suivi-des-factures` | 8 % |
| `/guides/forfait-secretariat-externalise-depassement` | `/guides/revue-trimestrielle-assistance-externalisee` | 7 % |
| `/guides/sous-traitance-par-son-assistante` | `/guides/partager-un-mot-de-passe-en-securite` | 7 % |
| `/guides/cahier-des-charges-secretariat-externalise` | `/guides/modele-tableau-de-bord-hebdomadaire` | 7 % |
| `/guides/assistante-partagee-entre-associes` | `/guides/recruter-apres-avoir-externalise` | 7 % |
| `/guides/tva-prestataire-en-franchise-en-base` | `/guides/choisir-un-logiciel-de-facturation` | 7 % |
| `/guides/participer-a-un-salon-professionnel` | `/guides/feuille-de-route-de-deplacement` | 7 % |
| `/guides/presenter-son-assistante-a-ses-clients` | `/guides/reunions-et-fuseaux-horaires` | 7 % |
| `/guides/acces-bancaire-pour-son-assistante` | `/guides/moyens-de-paiement-delegues` | 7 % |
| `/guides/participer-a-un-salon-professionnel` | `/guides/organiser-un-deplacement-professionnel` | 7 % |
