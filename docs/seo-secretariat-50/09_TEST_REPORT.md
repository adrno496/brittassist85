# 09 — Rapport de test

Résultats de la passe finale du 6 octobre 2026, lancée après la dernière modification de contenu. Chaque ligne correspond à une commande réellement exécutée ; ce qui n’a pas pu l’être est marqué NON TESTÉ.

Une seconde passe a eu lieu le même jour, après l’enregistrement de la validation du propriétaire : `npm run check`, `npm test`, `npm run qa:apercu`, `npm run build:apercu`, `npm run qa`, `npm run qa:similarite` et la comparaison à l’octet près ont été relancés. Le tableau « Les commandes demandées » donne les chiffres de cette seconde passe. Les autres contrôles datent de la première ; les builds qu’ils ont examinés n’ont pas changé depuis (0 différence). Deux sections s’ajoutent : « Validation du propriétaire » et « Répétition de la mise en ligne du lot A ».

Une troisième passe a suivi la décision du propriétaire, à 20 h 07, de mettre les cinquante pages en ligne : ce sont les sections « Mise en ligne des 50 pages » et « Après le déploiement », placées en tête. **Toutes les autres sections décrivent l’état d’avant** : cinquante brouillons, et un build de production identique à l’état initial.

Statuts utilisés : PASS · PARTIAL · FAIL · NON TESTÉ · NON APPLICABLE.

## Synthèse

| Statut | Contrôles |
| --- | --- |
| PASS | 80, dont 14 après la mise en ligne, 5 sur le site réel après le déploiement, et 8 obtenus sur une copie du dépôt (répétition du lot A) |
| PARTIAL | 2, tous deux sur les sources externes : avant et après la mise en ligne |
| FAIL | 0 |
| NON TESTÉ | 5 (dont les Core Web Vitals, cités aussi dans le tableau « Performance ») |
| NON APPLICABLE | 1 |

## Mise en ligne des 50 pages

Contrôles faits sur le dépôt après l’inscription des 50 pages dans `publications.mjs`. Le build examiné ici est celui qui est mis en ligne.

| Contrôle | Statut | Commande | Résultat réel | Preuve / remarque |
| --- | --- | --- | --- | --- |
| Types | PASS | `npm run check` | 75 fichiers, 0 erreur, 0 avertissement, 0 indication | — |
| Tests unitaires | PASS | `npm test` | 52 tests, 52 réussis | Dont « publier sans relecture ne déclare jamais une relecture », qui parcourt les 149 lignes du registre |
| Gate éditorial | PASS | `node scripts/content-gate.mjs` (dans `npm run qa`) | 0 blocage, 0 avertissement. « en ligne : 50 · validées par le propriétaire : 50 · relues par Brittany Dreano : 0 » | — |
| Build et audit strict | PASS | `npm run qa` | 201 pages : 199 indexables, 0 brouillon, 2 non indexables (`/404`, `/questionnaire`). 0 blocage, 2 avertissements | Les 2 avertissements sont ceux de l’état initial |
| Sitemap | PASS | Lecture de `dist/sitemap-0.xml` | 199 URL : les 149 d’avant, les 50 de la série. 51 portent la date du 6 octobre 2026 : les 50 pages et la page de référence | — |
| Les 50 pages | PASS | Lecture du HTML produit | 50 sur 50 indexables, canonical propre, CSP stricte, `datePublished` au 6 octobre 2026, sans bandeau « brouillon », sans mention « Relu par », sans `reviewedBy` | De 780 à 1 129 mots de contenu principal ; de 7 à 12 liens entrants |
| Pages existantes | PASS | Comparaison de `dist/` à la copie de l’état initial | 50 fichiers nouveaux, 0 supprimé, 76 modifiés : 73 guides, l’index `/guides`, les 2 fichiers du sitemap. Aucune page hors `/guides` ne change | Sur les 74 pages modifiées, aucune ne change de title, de H1, de description, de canonical ni de directive robots ; 176 liens ajoutés au total |
| Liens entrants | PASS | `scripts/seo-audit.mjs` sur les deux builds | Aucune page existante ne perd de page qui la cite ; 98 en gagnent | Profondeur maximale : 2 clics |
| Page de référence | PASS | idem, et lecture du HTML | Title et H1 inchangés. Rubrique « Pour approfondir » affichée, 14 liens. Citée par 15 pages au lieu de 10 ; 74 liens internes au lieu de 60 ; 1 174 mots au lieu de 901 | Mention « Mis à jour en octobre 2026 » |
| Cohérence avec le build déjà chargé en navigateur | PASS | Comparaison de `dist/` au build d’aperçu de la passe précédente | 53 fichiers diffèrent : les 50 pages, qui perdent leur statut de brouillon, la page de référence, pour sa date, et les 2 fichiers du sitemap. Tous les autres sont identiques à l’octet près | — |
| Similarité | PASS | `npm run qa:similarite` | 6 425 paires comparées, 0 blocage, 5 alertes, 0 phrase reprise | Inchangé |
| Règles de date du gate | PASS | Deux essais négatifs, sur une copie : date du sitemap décalée d’un jour, puis date de registre décalée d’un jour | Le gate bloque dans les deux cas (`approfondir-date`, `date-de-lot-incoherente`) | Règles ajoutées avec la mise en ligne |
| Navigateur | PASS | `scripts/browser-check.mjs` sur une copie figée de ce build, servie par `scripts/serve-dist.mjs` | 201 pages × 5 écrans = 1 005 chargements en 510 s. 0 page en défaut, 0 violation axe-core, 0 violation de CSP, 3 parcours réussis | Synthèse : `data/browser-check-publication.json` |
| Sources externes | PARTIAL | `node scripts/check-sources.mjs` | 77 liens distincts : 71 répondent, 6 « non concluants » | Les mêmes six qu’avant, dont la source du ministère de l’Économie, à sa nouvelle adresse : voir « Sources externes » |
| Build à partir du commit seul | PASS | `git archive` du commit dans un dossier vide, `npm run build`, comparaison à `dist/` | 241 fichiers, tous identiques à ceux du build local ; seul le `.DS_Store` de macOS manque | C’est ce que l’hébergeur construit |

Ce que cette passe ne couvre pas : l’indexation, qui ne se constate qu’une fois les pages explorées par les moteurs.

## Après le déploiement

Le commit de mise en ligne, `fa14903`, a été poussé sur la branche de production le 6 octobre 2026 à 20 h 24. Les contrôles ci-dessous portent sur le site réel, `https://www.brittassist.fr`.

| Contrôle | Statut | Commande | Résultat réel | Preuve / remarque |
| --- | --- | --- | --- | --- |
| Déploiement | PASS | `vercel ls brittassist85 -m githubCommitSha=…`, `vercel inspect www.brittassist.fr` | Déploiement de production créé à 20 h 24 min 44 s, prêt en 20 s ; le domaine le sert | — |
| Sitemap en ligne | PASS | Téléchargement de `/sitemap-0.xml` | 199 URL ; fichier identique à l’octet près à celui du build contrôlé | Constaté à 20 h 25 min 12 s |
| Statut des adresses | PASS | Une requête par adresse du sitemap | 199 réponses HTTP 200, aucune autre | — |
| Pages servies | PASS | Téléchargement et empreinte SHA-256 de 58 pages : les 50 de la série, la page de référence, l’index des guides, un pilier et cinq pages hors `/guides` | 58 sur 58 identiques à l’octet près au build contrôlé. Aucune en `noindex`, aucune mention « Relu par » | La page de référence sert sa rubrique « Pour approfondir » et ses 14 liens ; son title est inchangé |
| En-têtes d’une page de la série | PASS | Lecture des en-têtes de réponse | HTTP/2 200, en-tête `content-security-policy` présent, pas d’en-tête `x-robots-tag` | Une seule page lue |

Ce que ces contrôles ne couvrent pas : les redirections, non rejouées en ligne, et l’indexation.

## Les commandes demandées

| Contrôle | Statut | Commande | Résultat réel | Preuve / remarque |
| --- | --- | --- | --- | --- |
| Types | PASS | `npm run check` | 75 fichiers, 0 erreur, 0 avertissement, 0 indication | État initial : 66 fichiers, même résultat. Les 9 fichiers de plus sont ceux de la série et ses scripts |
| Tests unitaires | PASS | `npm test` | 52 tests, 52 réussis | État initial : 42. Huit de plus couvrent le contrôle de similarité, deux la liste des validations |
| QA d’aperçu | PASS | `npm run qa:apercu` | Gate éditorial : 0 blocage, 0 avertissement. Build : 201 pages. Audit strict : 0 blocage, 2 avertissements | Les 2 avertissements existaient avant la mission (`/contact` : 150 mots ; `/mentions-legales` : pas de lien contextuel) |
| Build d’aperçu | PASS | `npm run build:apercu` | 201 pages : 149 indexables, 50 brouillons, 2 non indexables. Quality gate : 0 blocage | Le quality gate fait partie du build : un blocage l’aurait interrompu |
| QA de production | PASS | `npm run qa` | Gate éditorial : 0 blocage. Build : 151 pages, 149 indexables, 0 brouillon. Sitemap : 149 URL. Audit strict : 0 blocage, 2 avertissements | Chiffres identiques à ceux de l’état initial |
| Navigateur | PASS | `PLAYWRIGHT_ROOT=… node scripts/browser-check.mjs --base http://127.0.0.1:4322` | 201 pages × 5 écrans = 1 005 chargements en 467 s. 0 page en défaut, 0 violation axe-core, 3 parcours réussis | Lancé sur le build d’aperçu servi par `scripts/serve-dist.mjs`. Playwright 1.60 et axe-core 4.11 chargés depuis la boîte à outils SENTINEL, comme le prévoit le README. Synthèse : `data/browser-check-apercu.json`. Non relancé après l’enregistrement de la validation : le build d’aperçu est resté identique à l’octet près à celui qui avait été chargé (242 fichiers, 0 différence) |

## Non-régression des pages existantes

| Contrôle | Statut | Commande | Résultat réel | Preuve / remarque |
| --- | --- | --- | --- | --- |
| Build de production identique | PASS | Empreinte SHA-256 de chaque fichier de `dist/`, avant et après | 192 fichiers, 0 différence | HTML, XML, `robots.txt`, feuilles de style, polices, images. Comparaison faite contre une copie du build prise avant toute modification, et refaite après l’enregistrement de la validation. Les 192 fichiers comptent un `.DS_Store` de macOS, présent dans `public/` en local et absent du dépôt |
| Build à partir du commit seul | PASS | `git archive` du commit dans un dossier vide, `npm run build`, comparaison à la copie de l’état initial | 191 fichiers, tous identiques ; seul le `.DS_Store` local manque | C’est ce que l’hébergeur construit : il ne voit que le dépôt |
| Sitemap | PASS | Lecture de `dist/sitemap-0.xml` | 149 URL avant, 149 après ; aucune page de la série | — |
| Registres | PASS | `git status`, lecture de `src/data/relectures.mjs` | `publications.mjs` : aucune modification. `relectures.mjs` : l’objet `relectures` est inchangé et vide ; la liste `validations` a été ajoutée à côté | Voir « Validation du propriétaire » |
| Configuration | PASS | `git status` sur `astro.config.mjs`, `vercel.json`, `package-lock.json`, `src/layouts`, `src/components`, `src/styles`, `src/lib`, `api`, `public` | Aucune modification | — |
| Pages hors `/guides` une fois la série publiée | PASS | Comparaison du build d’aperçu au build de production initial | 46 pages identiques à l’octet près : accueil, offres, tarifs, métiers, prestations, zones, pages légales | Les 74 fichiers qui changeront sont 73 guides et l’index : détail dans `08` |

## Les cinquante pages

| Contrôle | Statut | Commande | Résultat réel | Preuve / remarque |
| --- | --- | --- | --- | --- |
| Présence dans le build d’aperçu | PASS | `scripts/seo-audit.mjs` sur le build d’aperçu | 50 pages construites, toutes reconnues comme brouillons | Le navigateur a reçu HTTP 200 pour les 50 |
| `noindex` en brouillon | PASS | idem | `<meta name="robots" content="noindex,follow">` et bandeau « Brouillon » sur les 50 | — |
| Absence du build de production | PASS | `ls dist/guides` après `npm run build` | 104 guides, aucun de la série | — |
| Canonical | PASS | Règles `canonical-absent`, `canonical-incoherent` de l’audit | 0 blocage : chaque page se désigne elle-même, en `https://www.brittassist.fr/guides/<slug>` | — |
| Title, description, H1, URL uniques | PASS | Règles `title-duplique`, `description-dupliquee`, `h1-duplique` de l’audit ; mêmes règles et `slug-duplique` dans le gate | 0 blocage | Titles de 56 à 70 caractères ; descriptions de 143 à 165 |
| `lang="fr"` | PASS | Règle `lang` de l’audit | 0 blocage | — |
| Open Graph et carte Twitter | PASS | Règles `open-graph`, `og-url`, `twitter-card` | 0 blocage, 0 avertissement | Gabarit commun, non modifié |
| Données structurées | PASS | Règles `json-ld-invalide`, `article-incomplet`, `fil-ariane-cible`, `faq-invisible` | 0 blocage. Types présents : `Article`, `FAQPage`, `BreadcrumbList`, plus ceux du gabarit commun | Aucun type ajouté. `reviewedBy` absent des 50 pages, comme il se doit sans relecture de Brittany Dreano |
| Liens internes | PASS | Règles `lien-casse`, `ancre-cassee`, `lien-vers-redirection` | 0 blocage, 0 avertissement | — |
| Pages orphelines | PASS | Règles `page-orpheline`, `inatteignable`, `sans-lien-contextuel` | 0 : chaque page reçoit de 7 à 12 liens, dont 1 à 5 choisis par une autre fiche | Profondeur maximale : 2 clics depuis l’accueil |
| Contenu mince | PASS | Règle `contenu-mince` (seuil : 300 mots) | 0 : de 805 à 1 154 mots de contenu principal par page | — |
| Requêtes principales distinctes | PASS | Règle `intention-dupliquee` du gate | 142 requêtes pour 142 fiches cadrées | — |
| Règle de droit sans source | PASS | Règles `regle-sans-source`, `reference-sans-source` du gate | 0 blocage | 27 pages citent une source officielle |
| Formulations interdites | PASS | Règle `formulation-interdite` du gate | 0 : ni promesse de résultat, ni statistique sans source, ni superlatif | — |
| Lien éditorial entrant | PASS | Règle `aucun-lien-editorial-entrant`, ajoutée au gate | 0 avertissement | Contrôle nouveau : voir `08` |

## Similarité

| Contrôle | Statut | Commande | Résultat réel | Preuve / remarque |
| --- | --- | --- | --- | --- |
| Gate éditorial, 4-grammes | PASS | `node scripts/content-gate.mjs` | 0 paire au-dessus de 20 % | Seuil de blocage : 55 % |
| Audit du build, 5-grammes | PASS | `scripts/seo-audit.mjs` | 0 paire au-dessus de 30 % | Seuil de blocage : 50 % |
| Contrôle champ par champ | PASS | `npm run qa:similarite` | 6 425 paires comparées, 0 blocage, 5 alertes, 0 phrase reprise | Les 5 alertes sont lues une à une dans `07` |

## Responsive

| Contrôle | Statut | Commande | Résultat réel | Preuve / remarque |
| --- | --- | --- | --- | --- |
| Cinq largeurs du script du dépôt | PASS | `scripts/browser-check.mjs` | 320, 390, 768, 1 366 et 1 920 px sur les 201 pages : 0 débordement horizontal, H1 visible partout | — |
| Cinq largeurs demandées | PASS | Script Playwright complémentaire, non conservé dans le dépôt | 16 pages × 360, 390, 768, 1 024 et 1 440 px = 80 chargements, 0 échec | Synthèse : `data/responsive.json` |

L’échantillon des 16 pages : la page de référence, deux piliers (l’un découpé en rubriques, l’autre non), l’index des guides, et douze pages de la série choisies pour couvrir tous les types et tous les blocs — tableaux à deux, trois et quatre colonnes, modèles, étapes, sources.

Éléments vérifiés à chaque largeur : menu (bouton qui ouvre et ferme sous le point de rupture, liens visibles au-dessus), fil d’Ariane, H1, réponse courte, tableaux (contenus dans leur cadre, défilables et atteignables au clavier), listes, modèles, sommaire et cibles de ses ancres, FAQ, cartes de dossier, appel à l’action, pied de page, aucun élément hors du cadre.

Deux vérifications propres aux ajouts :

- **rubrique « Pour approfondir »** de la page de référence : visible, 14 liens, aux cinq largeurs ;
- **pilier découpé en rubriques** : 8 rubriques, 39 cartes ; un clic dans le sommaire amène le titre de la rubrique entre 155 et 183 px du haut de l’écran, donc sous l’en-tête fixe et non derrière lui.

## Performance

| Contrôle | Statut | Commande | Résultat réel | Preuve / remarque |
| --- | --- | --- | --- | --- |
| Poids du HTML | PASS | Audit du build d’aperçu | Pages de la série : de 25 à 29 Ko, 27 Ko en moyenne | Guides existants : de 24 à 41 Ko, 26 Ko en moyenne |
| Nombre de liens | PASS | idem | De 66 à 69 liens internes par page de la série | Guides existants : de 60 à 91 |
| JavaScript client | PASS | Comparaison des balises `<script>` d’un guide existant et d’une page de la série | Mêmes 6 balises ; aucun script ajouté | Les pages restent statiques |
| Dépendances | PASS | `git diff -- package.json package-lock.json` | Aucune dépendance ajoutée ; `package-lock.json` inchangé | — |
| Durée du build | PASS | Journaux d’Astro | Production : 151 pages en 4,7 s. Aperçu : 201 pages en 3 à 15 s selon la charge de la machine | — |
| Poids global | PASS | Somme des tailles de fichiers de `dist/` | Production : 5 731 275 octets avant, 5 731 275 après. Aperçu : 7 165 189 octets | Soit 1,4 Mo de plus pour les 50 pages et les pages existantes qui s’allongent |
| Core Web Vitals | NON TESTÉ | — | — | Lighthouse n’est installé ni dans le dépôt ni dans la boîte à outils |

Deux pages existantes grossiront à la publication complète, sans changer de nature : l’index `/guides`, de 70 à 96 Ko et de 176 à 226 liens ; le pilier « Externaliser et déléguer », de 41 à 49 Ko.

## Sécurité

| Contrôle | Statut | Commande | Résultat réel | Preuve / remarque |
| --- | --- | --- | --- | --- |
| CSP présente | PASS | Recherche de la balise dans les 202 fichiers HTML du build d’aperçu | 201 sur 202 | Le fichier restant est la preuve de propriété Google, qui n’est pas une page |
| CSP stricte | PASS | Recherche de `unsafe-inline` et `unsafe-eval` | 0 occurrence | — |
| Empreintes de la CSP | PASS | Règle `csp-empreinte` de l’audit | 0 blocage : chaque script et chaque style en ligne a son empreinte | — |
| Violations en navigateur | PASS | Écoute de `securitypolicyviolation` par `browser-check.mjs` | 0 sur 1 005 chargements | — |
| Attributs `style=""` | PASS | Règle `style-inline` de l’audit | 0 | — |
| Secrets | PASS | Recherche de clés, jetons et mots de passe dans les fichiers ajoutés ou modifiés | Aucun | Les seules occurrences du mot « secret » sont « secret professionnel » et « secrétariat » |
| `vercel.json` et configuration Astro | PASS | `git status` | Non modifiés | — |
| Consentement | PASS | Parcours de `browser-check.mjs` | Bandeau affiché, aucun cookie de mesure avant choix | — |

## Validation du propriétaire

Enregistrée le 6 octobre 2026 dans `src/data/relectures.mjs`, liste `validations`. Les contrôles ci-dessous vérifient que le registre la porte, et qu’elle n’a aucun effet sur ce que le site sert.

| Contrôle | Statut | Commande | Résultat réel | Preuve / remarque |
| --- | --- | --- | --- | --- |
| Forme de la validation | PASS | `npm test` — « une validation du propriétaire dit qui, quand et en quels mots » | Date valide et passée, nom, déclaration, 50 pages sans doublon ; le nom n’est pas celui de Brittany Dreano | Test ajouté |
| Valider ne publie pas, et ne déclare aucune relecture | PASS | `npm test` — « valider une page ne la publie pas et ne la déclare pas relue » | Les 50 pages validées restent des brouillons ; `dateDeRelecture` renvoie `null` pour chacune | Test ajouté |
| Pages validées existantes | PASS | Règle `validation-page-inconnue` du gate | 0 blocage. Ligne de synthèse : « en ligne : 0 · validées par le propriétaire : 50 · relues par Brittany Dreano : 0 » | Contrôle ajouté |
| Aucun effet sur le build de production | PASS | Comparaison de `dist/` à la copie de l’état initial | 192 fichiers, 0 différence, 5 731 275 octets | Le sitemap compte toujours 149 URL |
| Aucun effet sur le build d’aperçu | PASS | Comparaison de `dist/` au build d’aperçu de la passe précédente | 242 fichiers, 0 différence | — |
| Aucune mention publique | PASS | Recherche dans les 50 pages du build d’aperçu, puis dans tout `dist/` | « Relu par » : 0 page. `reviewedBy`, `lastReviewed` : 0. Nom du valideur ou texte de sa déclaration : 0 fichier | Les 50 pages portent toujours `noindex,follow` et le bandeau « brouillon » |
| Documents | PASS | `npm run docs:secretariat` | `05` : 0 page en ligne, 50 validées, 0 relue. `11` : 50 lignes « VALIDÉE PAR LE PROPRIÉTAIRE le 2026-10-06 » | La déclaration et sa portée sont reprises à la fin de `11` |

## Répétition de la mise en ligne du lot A

**Rien n’a été publié.** Le dépôt a été copié dans un dossier temporaire, et les étapes 2, 3 et 5 de `05_PUBLICATION_PLAN.md` ont été appliquées à cette copie : dix lignes dans `publications.mjs`, date de la page de référence dans `guides.ts` et `dates.mjs`. Les contrôles ci-dessous portent sur la copie. Ils disent ce que produirait la mise en ligne du lot A ; ils ne disent rien du dépôt réel, qui n’a pas bougé. Chiffres : `data/repetition-lot-a.json`.

| Contrôle | Statut | Commande | Résultat réel | Preuve / remarque |
| --- | --- | --- | --- | --- |
| Gate éditorial | PASS | `node scripts/content-gate.mjs` dans la copie | 0 blocage, 0 avertissement ; « en ligne : 10 » | — |
| Build et audit strict | PASS | `npm run qa` dans la copie | 161 pages : 159 indexables, 0 brouillon, 2 non indexables. 0 blocage, 2 avertissements | Les 2 avertissements sont ceux de l’état initial |
| Sitemap | PASS | Lecture de `sitemap-0.xml` | 159 URL : les 149 d’avant, plus les 10 du lot. Une date change, celle de la page de référence | — |
| Pages existantes | PASS | Comparaison du build de la copie à la copie de l’état initial | 10 fichiers nouveaux, 0 supprimé, 43 modifiés : 40 guides, l’index `/guides` et les 2 fichiers du sitemap. 149 fichiers identiques | Aucune des 41 pages modifiées ne change de title, de H1, de canonical ni de directive robots. Aucune page hors `/guides` ne change |
| Liens entrants | PASS | `scripts/seo-audit.mjs` sur les deux builds | Aucune page existante ne perd de page qui la cite ; 59 en gagnent | La colonne « Dans le même dossier » tourne : des liens changent de cible, le solde n’est négatif pour aucune page |
| Page de référence | PASS | Comparaison du HTML, fragment par fragment | Title et H1 inchangés. S’ajoutent : la rubrique « Pour approfondir » avec 10 liens visibles sur 14, la mention « Mis à jour en octobre 2026 », la date des données structurées | Elle passe de 10 à 11 pages qui la citent |
| Les dix pages du lot | PASS | Lecture du HTML produit | 10 sur 10 indexables, canonical propre, CSP stricte, sans bandeau « brouillon », sans mention « Relu par », sans `reviewedBy` | — |
| Navigateur | PASS | `scripts/browser-check.mjs --only /guides` sur le build de la copie | 115 pages × 5 écrans = 575 chargements en 328 s. 0 page en défaut, 0 violation axe-core, 3 parcours réussis | Les 46 pages hors `/guides` sont identiques à celles déjà chargées dans la passe finale |

Ce que cette répétition ne couvre pas : le comportement chez l’hébergeur, et l’indexation.

## Sources externes

| Contrôle | Statut | Commande | Résultat réel | Preuve / remarque |
| --- | --- | --- | --- | --- |
| Liens externes du site | PARTIAL | `node scripts/check-sources.mjs` | 77 liens distincts : 71 répondent, 6 « non concluants », 0 « à vérifier » | Détail : `data/sources-externes.json` |

Sur les 47 sources citées par la série, 43 répondent en HTTP 200. Les 4 autres refusent les requêtes d’un script (HTTP 403) :

| Source | Page de la série | Vérification complémentaire |
| --- | --- | --- |
| Légifrance — code des assurances, art. L113-2 | `declarer-un-sinistre-professionnel` | Relue par un autre outil de lecture : l’article existe et dit ce que la page rapporte |
| Légifrance — code des postes et des communications électroniques, art. L100 | `lettre-recommandee-electronique` | idem |
| Légifrance — code de commerce, art. R123-237 et R123-238 | `mentions-obligatoires-courriers-et-emails` | idem |
| Ministère de l’Économie — franchise de TVA | `tva-prestataire-en-franchise-en-base` | **Non rouverte** : à ouvrir à la main. Un second essai, avec un navigateur automatisé, a reçu la même réponse (HTTP 403, page de vérification). Les règles citées ont été vérifiées sur impots.gouv.fr et le BOFiP. Avant la mise en ligne, l’adresse a été remplacée par celle que les résultats de recherche donnent pour la page de même titre ; elle n’a pas pu être ouverte non plus. **Après la mise en ligne, le propriétaire a ouvert la page et en a transmis le texte : les cinq affirmations du guide qui s’y appuient lui sont conformes** (détail à la fin de `11_HUMAN_REVIEW_CHECKLIST.md`) |

Les deux autres liens non concluants, le profil LinkedIn et un texte Légifrance cité par un guide existant, étaient déjà dans ce cas avant la mission.

## Ce qui n’a pas été testé

| Contrôle | Statut | Raison |
| --- | --- | --- |
| Search Console | NON TESTÉ | Aucune donnée accessible : ni export, ni variable d’environnement, ni connecteur. Voir `00_BASELINE.md` |
| Core Web Vitals | NON TESTÉ | Pas d’outil de mesure disponible |
| Redirections chez l’hébergeur | NON TESTÉ | Non rejouées en ligne : testées seulement avec le serveur local qui reproduit `vercel.json`. Les en-têtes, eux, ont été lus sur une page du site réel (voir « Après le déploiement ») |
| Indexation et affichage dans les résultats | NON TESTÉ | Rien à observer avant que les moteurs explorent les pages |
| Relecture par une personne | NON TESTÉ | Le propriétaire a déclaré avoir tout vérifié, et sa validation est enregistrée pour les 50 pages. L’outil ne peut ni mesurer ni confirmer ce que cette vérification a couvert : ce n’est pas un contrôle qu’il a exécuté. Aucune relecture par Brittany Dreano |
| Formulaire de contact | NON APPLICABLE | Ni `api/contact.js` ni les formulaires n’ont été modifiés ; leurs tests passent avec `npm test` |

## Reproduire

```bash
npm ci
npm run check
npm test
npm run qa:apercu          # gate éditorial, build d’aperçu, audit strict
npm run qa                 # la même chose sur l’état publié
npm run qa:similarite      # contrôle champ par champ sur la série

# Navigateur réel : Playwright et axe-core ne sont pas des dépendances du site
npm run build:apercu && npm run servir &
PLAYWRIGHT_ROOT=/chemin/vers/un/dossier/avec/node_modules node scripts/browser-check.mjs --base http://127.0.0.1:4322
node scripts/check-sources.mjs

npm run docs:secretariat   # régénère les documents 01 à 07 et 11, puis rebâtit la production
```
