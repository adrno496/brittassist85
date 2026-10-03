# 04 — Duplication et cannibalisation

Date : 3 octobre 2026. Mesures prises sur le build d'aperçu (151 pages, dont les 100 nouvelles) et sur les fiches de contenu.

## Résultat

| Contrôle | Méthode | Résultat |
| --- | --- | --- |
| Slugs en double | `content-gate.mjs` | 0 |
| Titres en double | `content-gate.mjs` + `seo-audit.mjs` | 0 |
| Meta descriptions en double | idem | 0 |
| H1 en double | idem | 0 |
| Requêtes principales en double | `content-gate.mjs`, règle `intention-dupliquee` | 0 — 100 requêtes distinctes pour 100 pages |
| Pages sans canonical ou sans métadonnées | `seo-audit.mjs` | 0 |
| Pages sans lien entrant | `seo-audit.mjs` | 0 |
| Paires de pages au-dessus de 30 % de contenu commun | `seo-audit.mjs`, HTML construit | 0 |
| Paire de fiches la plus proche | calcul direct sur les textes | 4,0 % |

Aucune page n'a été rejetée pour duplication. Trois ajustements ont été faits en cours de route (voir plus bas).

## Comment la similarité est mesurée

Deux mesures, à deux niveaux.

**Sur les fiches** (`scripts/content-gate.mjs`). Tout le texte rédigé d'une page — titre, chapô, réponse courte, sections, tableaux, modèles, FAQ — est découpé en suites de quatre mots. Deux pages sont comparées par la part de suites qu'elles ont en commun (indice de Jaccard). Avertissement à 20 %, blocage à 55 %.

**Sur le HTML construit** (`scripts/seo-audit.mjs`). Même calcul sur le contenu principal de chaque page tel qu'il est servi, avec des suites de cinq mots. Cette mesure inclut le texte commun du gabarit (intertitres fixes, appel à l'action) : elle est donc plus sévère. Avertissement à 30 %, blocage à 50 %. **Un blocage fait échouer le build.**

Les seuils ont été calibrés sur le site : avant ce chantier, aucune paire des 48 pages indexables ne dépassait 30 %.

### Limite de la méthode

Ces mesures détectent le texte recopié ou paraphrasé de près. Elles ne détectent pas deux pages écrites différemment qui répondraient à la même question. Ce second risque est traité par la règle « une requête principale par page » et par la revue manuelle ci-dessous. Aucune mesure sémantique par modèle de langage n'a été utilisée.

## Les paires les plus proches

Mesure sur les fiches, suites de quatre mots.

| Paire | Contenu commun | Pourquoi ce n'est pas un doublon |
| --- | --- | --- |
| `assistante-externalisee-et-ia` ↔ `ia-generative-et-donnees-confidentielles` | 4,0 % | La première compare un outil et une personne ; la seconde dit quelles données saisir ou non. Elles se citent l'une l'autre |
| `confidentialite-acces-et-outils` ↔ `partager-un-mot-de-passe-en-securite` | 2,5 % | Pilier et page de détail |
| `devis-factures-relances` ↔ `delais-de-paiement-et-penalites-de-retard` | 2,5 % | Pilier et page de détail |
| `relancer-une-facture-impayee` ↔ `mise-en-demeure-et-injonction-de-payer` | 2,4 % | Phase amiable, puis phase formelle |
| `circuit-des-factures-fournisseurs` ↔ `fraude-au-faux-rib-et-au-president` | 2,0 % | Le circuit ; la fraude qui le vise |

Toutes les autres paires sont sous 2 %.

## Risques de cannibalisation examinés un par un

Chaque fois qu'une nouvelle page s'approchait d'une page existante, la question a été tranchée avant rédaction.

| Nouvelle page | Page existante voisine | Décision | Ce qui les distingue |
| --- | --- | --- | --- |
| `externaliser-son-assistanat` (pilier) | `secretariat-externalise`, `comment-deleguer` | Conservée, repositionnée | Le pilier décrit un parcours en sept étapes et renvoie aux guides ; il ne redéfinit ni les formes de secrétariat, ni les blocages de la délégation |
| `quelles-taches-deleguer-a-une-assistante` | `comment-deleguer` (section « ce qui ne se délègue pas ») | Conservée | Liste par domaine et test de tri ; le guide existant traite des freins et du démarrage |
| `ce-qu-une-assistante-externalisee-ne-fait-pas` | `comment-deleguer`, `/services` | Conservée | Entrée par les limites du métier et le professionnel compétent, pas par les tâches |
| `rentabilite-assistante-externalisee` | `prix-assistante-de-direction-externalisee` | Conservée | Méthode de calcul avec ses propres chiffres ; le guide existant compare des modèles de tarification |
| `point-hebdomadaire-avec-son-assistante` | `suivi-demandes-assistante-externalisee` | Conservée | Le rituel oral ; le guide existant traite du tableau de suivi écrit |
| `fin-de-collaboration-assistante-externalisee` | `confidentialite-assistante-externalisee` (section « terminer la mission ») | Conservée | Procédure complète de sortie ; le guide existant n'y consacre qu'une section |
| `deleguer-sa-boite-mail` | `delegation-d-acces-messagerie-et-agenda` | Les deux conservées | La première fixe le cadre (quoi traiter, au nom de qui) ; la seconde explique le mécanisme technique |
| `gerer-les-demandes-de-rendez-vous` | `/services/gestion-agenda` | Conservée | Méthode applicable seul ; la page de prestation vend la prise en charge |
| `organiser-un-deplacement-professionnel` | `/services/organisation-deplacements` | Conservée | Même raison |
| Pages métier nouvelles | Pages métier existantes | Conservées | Six secteurs absents des huit existants ; aucun recoupement |
| `/assistante` (hub) | `/services`, section « Pour qui » | Conservée, texte modifié | Le hub reprenait les chapôs des métiers, déjà affichés sur `/services` : 31 % de contenu commun. Il affiche désormais la phrase-constat de chaque métier. Mesure après correction : sous 30 % |

## Sujets fusionnés ou abandonnés pour éviter un doublon

| Sujet prévu | Sort | Raison |
| --- | --- | --- |
| « Délais de paiement » et « Pénalités de retard » | Fusionnés en une page | Même source officielle, même question pratique |
| « Office manager ou assistante de direction » | Abandonné | Déjà traité par `executive-assistant-role` |
| « Assistante à l'heure ou au forfait » | Abandonné | Déjà traité par le guide sur les prix |
| « Assistante indépendante ou agence de secrétariat » | Abandonné | Sous-ensemble de `secretariat-externalise` |
| « Déléguer sans perdre le contrôle » | Fusionné dans « Les niveaux d'autonomie » | Même réponse |
| « Revue hebdomadaire du dirigeant » | Abandonné | Trop proche du point hebdomadaire |
| « Modèle d'ordre du jour » | Intégré à « Préparer une réunion » | Un modèle sans méthode n'apportait rien de distinct |
| « Modèle d'échéancier » et « Modèle de registre des contrats » | Intégrés aux pages de méthode correspondantes | Même raison |
| « Création d'une deuxième société » | Abandonné | Couvert par la page métier `dirigeants-multi-societes` |
| « Changement de RIB fournisseur » | Fusionné dans la page sur la fraude au faux RIB | Même sujet |
| « Choisir un outil de prise de rendez-vous » | Fusionné dans « Gérer les demandes de rendez-vous » | Le choix de l'outil est une sous-question de la méthode |

## Garde-fous en place

1. **Avant le build** — `npm run qa` lance `content-gate.mjs` : une requête principale en double, un titre en double ou deux fiches trop proches arrêtent le contrôle.
2. **Pendant le build** — le quality gate bloque sur titres, descriptions et H1 en double, et sur toute paire de pages au-dessus de 50 % de contenu commun.
3. **À l'écriture** — chaque fiche porte un champ `cadrage.difference` : ce qui distingue la page des autres. Une page dont on ne sait pas remplir ce champ ne devrait pas exister.

## Ce qui n'a pas été testé

- La cannibalisation réelle, c'est-à-dire deux pages du site apparaissant sur la même requête : elle ne se voit que dans Search Console, après indexation.
- La proximité avec des pages d'autres sites.
