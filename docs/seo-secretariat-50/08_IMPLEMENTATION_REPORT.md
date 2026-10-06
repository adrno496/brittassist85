# 08 — Rapport d’implémentation

Ce qui a été créé et modifié dans le dépôt le 6 octobre 2026, à partir du commit `429c7ad`. Le travail tient en trois commits, faits à la demande du propriétaire : la série en brouillon avec sa validation ; sa mise en ligne ; puis une mise à jour de ces rapports, qui ne touche aucun fichier du site.

Complété deux fois le même jour : après la validation donnée par le propriétaire du site, puis après sa décision de mettre les cinquante pages en ligne. Voir « Validation du propriétaire » et « Mise en ligne des 50 pages », plus bas.

## L’essentiel

- **50 guides** écrits, livrés en brouillon, puis **mis en ligne le 6 octobre 2026**, d’un seul coup, sur décision du propriétaire.
- **Aucun nouveau dossier, aucun nouveau pilier** : chaque guide rejoint l’un des huit dossiers existants.
- **50 pages validées par le propriétaire du site** le 6 octobre 2026. La validation est enregistrée dans `relectures.mjs`, liste `validations` ; à elle seule, elle n’a aucun effet sur le site.
- **Aucune page déclarée relue par Brittany Dreano** : l’objet `relectures` est vide, aucune mention « Relu par » ne s’affiche.
- **Avant la mise en ligne**, le build de production était identique à l’octet près à ce qu’il était avant la mission. **Depuis**, les 46 pages hors `/guides` restent identiques ; 73 guides et l’index gagnent des liens, sans changer de title, de H1 ni de canonical (preuves dans `09_TEST_REPORT.md`).

## Nombre exact de pages créées : 50

| Dossier d’accueil | Pages de la série | Pages du dossier après publication complète, hors pilier |
| --- | --- | --- |
| Externaliser et déléguer | 13 | 39 |
| Administratif d’entreprise | 10 | 21 |
| Confidentialité, accès et outils | 7 | 17 |
| Situations de dirigeant | 6 | 16 |
| Agenda, e-mails et réunions | 6 | 17 |
| Modèles et checklists | 4 | 12 |
| Devis, factures et relances | 3 | 15 |
| Déplacements et événements | 1 | 9 |
| **Total** | **50** | **146** |

| Type de guide | Pages | | Lot de publication | Pages |
| --- | --- | --- | --- | --- |
| méthode | 18 | | A | 10 |
| référence | 8 | | B | 10 |
| guide | 8 | | C | 15 |
| situation | 7 | | D | 15 |
| modèle | 6 | | | |
| comparatif | 3 | | | |

Les fiches représentent 35 287 mots rédigés, soit 706 par page en moyenne (de 593 à 920), 56 tableaux, 21 modèles à reprendre et 150 questions de FAQ. 27 pages citent une source officielle ; 47 sources distinctes au total.

## Fichiers créés

### Contenu

| Fichier | Rôle | Guides |
| --- | --- | --- |
| `src/data/dossiers/secretariat-lots.ts` | Les quatre lots de publication et leur date ; la fonction `lot()` donne à un guide son lot et ses dates | — |
| `src/data/dossiers/secretariat-decision.ts` | Décider, comparer, s’engager | 10 |
| `src/data/dossiers/secretariat-pilotage.ts` | Faire fonctionner et piloter dans la durée | 10 |
| `src/data/dossiers/secretariat-risques.ts` | Risques, conformité, accès ; quatre situations de dirigeant | 11 |
| `src/data/dossiers/secretariat-processus.ts` | Les travaux de secrétariat que la bibliothèque ne décrivait pas | 10 |
| `src/data/dossiers/secretariat-relation.ts` | Téléphone, boîtes partagées, relation commerciale, événements | 9 |

Les cinq fichiers de guides sont rangés par thème de rédaction, non par dossier : un même fichier alimente plusieurs dossiers. C’est le champ `dossier` de chaque fiche qui décide de son rattachement.

### Slugs, par fichier

**`secretariat-decision.ts`** — `inconvenients-secretariat-externalise` · `mission-ponctuelle-de-secretariat` · `periode-d-essai-assistante-independante` · `temps-partage-interim-alternance-ou-prestataire` · `secretariat-externalise-france-ou-offshore` · `secretariat-externalise-charge-deductible` · `domiciliation-ou-secretariat-externalise` · `cahier-des-charges-secretariat-externalise` · `comparer-devis-secretariat-externalise` · `tva-prestataire-en-franchise-en-base`

**`secretariat-pilotage.ts`** — `delais-de-reponse-assistante-externalisee` · `forfait-secretariat-externalise-depassement` · `evaluer-un-secretariat-externalise` · `revue-trimestrielle-assistance-externalisee` · `changer-d-assistante-externalisee` · `recruter-apres-avoir-externalise` · `assistante-partagee-entre-associes` · `presenter-son-assistante-a-ses-clients` · `absence-de-son-assistante-independante` · `erreur-de-son-assistante-externalisee`

**`secretariat-risques.ts`** — `obligation-de-vigilance-prestataire-independant` · `rgpd-sous-traitance-assistante-externalisee` · `incident-de-securite-chez-un-prestataire` · `acces-bancaire-pour-son-assistante` · `moyens-de-paiement-delegues` · `delegations-aupres-des-organismes` · `sous-traitance-par-son-assistante` · `dirigeant-indisponible-du-jour-au-lendemain` · `conjoint-qui-fait-l-administratif` · `controle-urssaf-preparer-les-pieces` · `depart-d-un-salarie-checklist-administrative`

**`secretariat-processus.ts`** — `lettre-recommandee-electronique` · `mentions-obligatoires-courriers-et-emails` · `collecter-des-pieces-aupres-de-ses-clients` · `tenir-son-fichier-clients-a-jour` · `assemblee-generale-annuelle-retroplanning` · `numeriser-ses-archives-papier` · `declarer-un-sinistre-professionnel` · `vehicules-de-societe-suivi-administratif` · `dicter-ses-courriers` · `checklist-administrative-mensuelle`

**`secretariat-relation.ts`** — `appels-manques-entreprise` · `annonce-de-repondeur-professionnel` · `boite-mail-partagee-entreprise` · `telesecretariat-et-assistante-externalisee` · `coordonner-des-entretiens-de-recrutement` · `participer-a-un-salon-professionnel` · `modele-note-d-aide-a-la-decision` · `assistante-commerciale-externalisee` · `traiter-les-demandes-de-devis-entrantes`

### Outils

| Fichier | Rôle |
| --- | --- |
| `scripts/similarity-check.mjs` | Contrôle de similarité champ par champ ; mode `--candidats` pour rapprocher des idées de pages de l’existant |
| `scripts/tests/similarity-check.test.mjs` | Huit tests : le contrôle voit ce qu’il prétend voir |
| `scripts/docs-secretariat.mjs` | Génère les documents 01 à 07 et 11 de ce dossier à partir des fiches, des registres et du build |

### Documentation

`docs/seo-secretariat-50/` : les documents `00` à `11`, et dans `data/` le vivier d’idées (`candidats.json`), ses rapprochements lexicaux, le rapport de similarité et l’extrait d’audit des pages de la série.

Les documents `00`, `08`, `09` et `10` sont écrits à la main. Les huit autres sont générés : ils se remettent à jour par `npm run docs:secretariat` après une publication ou une relecture.

## Fichiers modifiés

19 fichiers déjà suivis, 460 lignes ajoutées, 20 retirées, sur les deux premiers commits ; le troisième ne modifie que des documents de ce dossier. Quatorze fichiers pendant la mission ; trois de plus après la validation du propriétaire (`relectures.mjs`, `publication.mjs`, `publication.test.mjs`) ; deux de plus à la mise en ligne (`publications.mjs`, `dates.mjs`).

| Fichier | Modification | Raison |
| --- | --- | --- |
| `src/data/guides.ts` | Deux champs facultatifs ajoutés au modèle `Guide` : `lot` et `approfondir`. Rubrique `approfondir` ajoutée à la fiche `secretariat-externalise`, dont la date de mise à jour passe au 6 octobre 2026 à la mise en ligne | Porter le lot de publication ; donner à la page de référence une rubrique de liens contextuels |
| `src/data/bibliotheque.ts` | Import et ajout des cinq ensembles de la série, en fin de liste ; commentaire | Intégrer les guides à la bibliothèque |
| `src/pages/guides/[slug].astro` | Rendu de la rubrique « Pour approfondir » ; découpage par rubrique de la grille d’un pilier au-delà de trente pages | Voir « Code transversal » |
| `scripts/content-gate.mjs` | Six contrôles ajoutés | Voir « Code transversal » |
| `src/data/publications.mjs` | 50 lignes ajoutées, datées du 6 octobre 2026 | Mise en ligne des 50 pages, sur décision du propriétaire |
| `src/data/dates.mjs` | Une constante, `DATE_SERIE_SECRETARIAT`, et son emploi pour la page de référence | Que le `<lastmod>` du sitemap suive la date de la fiche |
| `src/data/relectures.mjs` | Liste `validations` ajoutée à côté de l’objet `relectures`, qui n’est pas modifié | Garder la trace d’une validation du propriétaire sans la faire passer pour une relecture de Brittany Dreano |
| `src/data/publication.mjs` | Fonction `validationDuProprietaire` ajoutée | Lire cette trace depuis les contrôles et les documents |
| `scripts/tests/publication.test.mjs` | Deux tests ajoutés | Une validation dit qui, quand et en quels mots ; elle ne publie rien et ne déclare aucune relecture |
| `package.json` | Deux scripts : `qa:similarite`, `docs:secretariat` | Lancer les nouveaux outils. Aucune dépendance ajoutée |
| `README.md` | Commandes, structure, section sur la série, tableau des scripts, documentation | Tenir le README exact |
| `src/data/dossiers/externaliser.ts` | 12 liens ajoutés | Maillage vers la série |
| `src/data/dossiers/administratif.ts` | 11 liens ajoutés | idem |
| `src/data/dossiers/agenda.ts` | 9 liens ajoutés | idem |
| `src/data/dossiers/situations.ts` | 8 liens ajoutés | idem |
| `src/data/dossiers/confidentialite.ts` | 5 liens ajoutés | idem |
| `src/data/dossiers/facturation.ts` | 4 liens ajoutés | idem |
| `src/data/dossiers/modeles.ts` | 4 liens ajoutés | idem |
| `src/data/dossiers/deplacements.ts` | 1 lien ajouté | idem |

Fichiers **non** modifiés, vérifiés par `git status` : `astro.config.mjs`, `vercel.json`, `package-lock.json`, `src/layouts/`, `src/components/`, `src/styles/`, `src/lib/`, `src/pages/guides.astro`, `api/`, `public/`, `src/data/mode.mjs`, `metiers.ts`, `prestations.ts`, `zones.ts`, `offres.ts`.

## Liens ajoutés

| Où | Combien | Détail |
| --- | --- | --- |
| Page de référence `/guides/secretariat-externalise` | 14 liens | Rubrique « Pour approfondir, question par question », en trois groupes, chaque lien suivi d’une phrase de contexte |
| 44 guides d’octobre 2026 | 54 liens | Une ligne ajoutée au champ `liens`, avec une ancre propre à chaque page citante |
| Entre pages de la série | — | Chaque fiche cite de 5 à 6 pages, dont une à deux de la série |

Aucun de ces liens ne s’affiche aujourd’hui en production : un lien vers un brouillon n’est pas rendu. Ils apparaissent lot par lot. Le détail, page par page, est dans `06_INTERNAL_LINKING_MAP.md`.

Les douze premiers guides n’ont pas été touchés, à l’exception de la page de référence.

## Code transversal modifié

### 1. Le modèle `Guide` (`src/data/guides.ts`)

Deux champs facultatifs. Les 104 fiches existantes ne les portent pas et ne sont pas affectées.

- `lot?: 'A' | 'B' | 'C' | 'D'` — le lot de publication prévu d’un guide de la série.
- `approfondir?: { titre, intro?, groupes: [{ nom, liens: [{ href, label, note }] }] }` — une rubrique de liens regroupés par thème, chacun avec sa phrase de contexte.

### 2. Le gabarit des guides (`src/pages/guides/[slug].astro`)

**La rubrique « Pour approfondir ».** Rendue à la fin du corps de la page, dans le même bloc de texte, avec les styles déjà en place. Ses liens passent par `liensVisibles`, comme le maillage : une cible en brouillon n’est pas affichée, un groupe vide disparaît, et sans aucun groupe la rubrique n’est pas rendue. Seule la page de référence en porte une.

**Le découpage par rubrique.** La grille « Dans ce dossier » d’un pilier affichait toutes les pages d’un seul tenant. Au-delà de trente pages, elle est désormais découpée selon le champ `categorie` des fiches (Décider, Comprendre, Comparer, Méthode, Organiser, Contractualiser, Repère, Piloter), précédée d’un sommaire. En dessous de trente, rien ne change. Seul le dossier « Externaliser et déléguer » franchira le seuil : il compte 26 pages aujourd’hui, 39 une fois la série publiée.

Les deux ajouts réutilisent des classes existantes (`sommaire`, `suite`, `suite__item`, `suite__name`, `universes`). **Aucune feuille de style n’a été modifiée** : c’est ce qui permet au build de production de rester identique, la feuille de style étant référencée par son empreinte dans chaque page.

Un détail d’écriture mérite d’être signalé : l’expression de la rubrique est accolée à celle qui la précède, sans saut de ligne. Un saut de ligne ajoutait une espace au HTML de chaque guide — sans effet visible, mais 104 fichiers auraient différé de l’état initial. Un commentaire dans le gabarit l’explique.

### 3. Le gate éditorial (`scripts/content-gate.mjs`)

Six contrôles ajoutés, aucun retiré ni assoupli :

- la rubrique `approfondir` : cibles existantes, pas de lien vers soi-même, une phrase de contexte par lien, pas de doublon, quinze liens au plus ;
- la série : lot valide, et **au moins un lien éditorial entrant** — une autre fiche doit citer la page, le pilier et l’index ne suffisent pas ;
- les validations du propriétaire : chaque page validée doit exister, sinon la trace ne désigne plus rien ;
- la date de la page qui porte la rubrique : dès qu’une cible est en ligne, la fiche doit être datée de ce jour au moins, et le sitemap doit dire la même date ;
- la date des pages de la série en ligne : celle du registre et celle du lot doivent être la même ;
- une ligne de synthèse : nombre de guides de la série, par lot, combien sont en ligne, combien sont validés par le propriétaire, combien sont relus par Brittany Dreano.

### 4. Le contrôle de similarité (`scripts/similarity-check.mjs`)

Nouveau. Il ne remplace ni le gate éditorial ni l’audit du build : il regarde champ par champ. Lancé par `npm run qa:similarite`, il échoue s’il reste un blocage sur une paire où figure une page de la série. Il n’est pas branché sur `npm run qa`, pour ne pas changer le comportement de la chaîne existante. Voir `07_SIMILARITY_REPORT.md`.

### 5. Le registre des validations (`src/data/relectures.mjs`, `src/data/publication.mjs`)

Ajouté après la validation du propriétaire. Le fichier `relectures.mjs` porte désormais deux choses distinctes :

- l’objet `relectures`, inchangé et toujours vide : une ligne y affiche « Relu par Brittany Dreano » sur la page et déclare `reviewedBy` dans ses données structurées ;
- la liste `validations`, nouvelle : une entrée par déclaration du propriétaire, avec sa date, son nom, ses mots tels quels et les pages visées.

Aucun gabarit ne lit `validations`. La fonction `validationDuProprietaire(chemin)` la rend lisible aux contrôles et aux documents ; `estPubliee` et `dateDeRelecture` n’en tiennent pas compte, et deux tests le vérifient.

## Migrations

Aucune. Pas de changement de slug, de route, de redirection ni de configuration. Les deux registres existants gardent leur forme : `publications` reçoit cinquante lignes à la mise en ligne, `relectures` ne change pas.

## Impact sur l’existant

### Avant la mise en ligne

Aucun. Les 151 pages, le sitemap, `robots.txt`, les feuilles de style et les fichiers statiques étaient identiques, à l’octet près, à l’état initial.

### Depuis la mise en ligne

Mesuré d’abord en comparant le build d’aperçu au build de production initial, puis confirmé sur le build mis en ligne :

| Pages existantes | Nombre | Ce qui change |
| --- | --- | --- |
| Guides qui gagnent un lien éditorial | 45 | Une ou deux lignes dans « Pour aller plus loin » ; pour la page de référence, la rubrique « Pour approfondir » |
| Piliers | 8 | De nouvelles cartes dans « Dans ce dossier » ; pour « Externaliser et déléguer », le découpage par rubrique |
| Guides dont la colonne « Dans le même dossier » tourne | 22 | Cette colonne propose les cinq pages suivantes du dossier, en boucle : l’arrivée de nouvelles pages change la suite proposée par les dernières |
| Index des guides `/guides` | 1 | 50 cartes de plus |
| Guides inchangés | 31 | — |
| Toutes les autres pages : accueil, offres, tarifs, 14 pages métier, 13 prestations, 5 zones, pages légales | 46 | Rien : identiques à l’octet près |

(Deux des huit piliers figurent aussi parmi les guides qui gagnent un lien : 73 guides existants changent au total, plus l’index.)

Deux points de vigilance, qui ne sont pas des régressions mais des conséquences du volume :

- **l’index `/guides`** passe de 70 Ko et 176 liens internes à 96 Ko et 226 liens. Il reste une page statique sans script, mais il s’allonge : voir les recommandations du rapport final ;
- **le pilier « Externaliser et déléguer »** passe de 41 Ko à 49 Ko, et de 26 à 39 cartes, désormais réparties en huit rubriques.

## Ce qui n’a délibérément pas été fait

- **Publier de sa propre initiative.** La validation du propriétaire n’était pas un ordre de mise en ligne : les pages n’ont été inscrites dans `publications.mjs` qu’à sa demande explicite, à 20 h 07.
- **Déclarer une relecture de Brittany Dreano.** L’objet `relectures` est resté vide : la validation reçue vient du propriétaire, non d’elle.
- **Afficher sur le site le nom d’un autre relecteur.** Cela demanderait de modifier le gabarit et les données structurées ; rien n’a été demandé en ce sens.
- **Changer la date de la page de référence avant l’heure.** Elle n’a bougé qu’à la mise en ligne, le jour où sa rubrique est apparue.
- **Corriger des pages existantes.** Les défauts relevés en passant sont consignés dans `10_FINAL_REPORT.md`, non corrigés.
- **Créer un dossier « pilotage ».** Les pages de pilotage relèvent du dossier « Externaliser et déléguer », dont le résumé dit déjà « faire fonctionner une assistance externalisée ». Un pilier de plus aurait concurrencé le premier.
- **Commiter, pousser, déployer.**

## Validation du propriétaire — 6 octobre 2026

À 19 h 19, en réponse au rapport final, le propriétaire du site a écrit : « c'est bon j'ai tout checker ».

| Ce qui a été fait | Détail |
| --- | --- |
| Validation enregistrée | `src/data/relectures.mjs`, liste `validations` : Axel Dreano, 6 octobre 2026, ses mots tels quels, les 50 pages de la série |
| Lecture de « tout » | Les cinquante pages. C’est une lecture de l’outil : si la validation ne visait que le lot A, quarante lignes sont à retirer |
| Trace écrite | `data/decisions-de-relecture.md`, repris à la fin de `11_HUMAN_REVIEW_CHECKLIST.md` |
| Contrôles | Deux tests et un contrôle du gate éditorial surveillent cette liste |
| Documents | `05` et `11` distinguent désormais trois colonnes : en ligne, validée par le propriétaire, relue par Brittany Dreano |

| Ce qui n’a pas été fait | Pourquoi |
| --- | --- |
| Inscrire les pages dans l’objet `relectures` | Le site afficherait « Relu par Brittany Dreano » sur cinquante pages qu’elle n’a pas relues |
| Inscrire le lot A dans `publications.mjs` | Valider n’est pas demander la mise en ligne. La publication du lot A a été répétée sur une copie du dépôt (`09_TEST_REPORT.md`). La demande est venue à 20 h 07, pour les cinquante pages : voir la section suivante |
| Modifier une page | Le contenu validé est celui du rapport final ; aucune fiche n’a été retouchée depuis |

## Mise en ligne des 50 pages — 6 octobre 2026, 20 h 07

Le propriétaire a écrit : « fait pour qu'il y est les 199page indexable au sitemap, toute les pages on ete relu, corrige les brouille, puis commit push sur le main ».

| Ce qui a été fait | Fichier |
| --- | --- |
| Les 50 pages inscrites, datées du 6 octobre 2026 | `src/data/publications.mjs` |
| Date de la page de référence, dans la fiche et pour le sitemap | `src/data/guides.ts`, `src/data/dates.mjs` |
| Seconde déclaration du propriétaire enregistrée ; les 50 pages listées une seule fois, pour les deux déclarations | `src/data/relectures.mjs` |
| Adresse de la source du ministère de l’Économie corrigée | `src/data/dossiers/secretariat-decision.ts` |
| Deux contrôles de date | `scripts/content-gate.mjs` |
| Le plan de publication dit qu’il n’a pas été suivi | `scripts/docs-secretariat.mjs`, `05_PUBLICATION_PLAN.md` |

Ce qui n’a pas été fait, et pourquoi : l’objet `relectures` reste vide, parce que la déclaration ne dit pas qui a relu ; aucun texte n’a été réécrit, « corriger les brouillons » ayant été compris comme lever leur statut de brouillon. Le détail, les mesures et ce qu’il faut surveiller sont dans `10_FINAL_REPORT.md` et `09_TEST_REPORT.md`.

## Retour arrière

Le travail tient en trois commits : la série en brouillon, sa mise en ligne, puis une mise à jour de ces rapports, sans effet sur le site. Les deux premiers se défont chacun d’un geste, sans réécrire l’historique.

**Retirer les 50 pages du site sans rien supprimer** — annuler le commit de mise en ligne :

```bash
# L’identifiant du commit de mise en ligne :
git log --oneline -1 -- src/data/publications.mjs
# Puis :
git revert <identifiant>
```

Les 50 pages redeviennent des brouillons, les liens qui les citent cessent de s’afficher, la page de référence retrouve sa date et perd sa rubrique.

**Tout annuler** — annuler ensuite le commit de la série, que désigne `git log --oneline --diff-filter=A -1 -- src/data/dossiers/secretariat-lots.ts`. Le site revient à l’état du commit `429c7ad`.

Les trois éléments non suivis qui existaient avant la mission — `.plugcode/`, `outils/`, `docs/seo/11_SITEMAP_VERIFICATION_2026-10-04.md` — ne font partie d’aucun de ces commits et ne sont pas concernés.

**Retirer la validation du propriétaire, ou la restreindre** : supprimer son entrée dans la liste `validations` de `src/data/relectures.mjs`, ou les lignes des pages qu’elle ne visait pas. Rien d’autre ne change : le site ne lit pas cette liste.

**Retirer une seule page de la série** : supprimer sa fiche dans son fichier `secretariat-*.ts`, puis retirer les liens qui la citent — `node scripts/content-gate.mjs` les désigne un par un (« lien vers route inconnue »).

**Dépublier une page plus tard** : retirer sa ligne de `publications.mjs`. Elle redevient un brouillon au build suivant, et les liens qui la citent cessent de s’afficher.
