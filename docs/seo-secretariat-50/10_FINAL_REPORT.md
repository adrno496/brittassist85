# 10 — Rapport final

Mission : créer cinquante pages réellement nouvelles autour de `/guides/secretariat-externalise`, sur le dépôt existant, sans régression ni cannibalisation, et sans les publier d’un coup. Réalisée le 6 octobre 2026.

Mis à jour le même jour, après la validation donnée par le propriétaire du site à 19 h 19 et sa demande de préparer le commit final.

## En bref

| | |
| --- | --- |
| Pages créées | **50**, toutes en brouillon (`noindex`, hors sitemap) |
| Pages publiées | **0** |
| Validation du propriétaire | **50 pages**, le 6 octobre 2026 : « c'est bon j'ai tout checker ». Enregistrée dans `relectures.mjs`, liste `validations`, sans effet sur le site |
| Pages relues par Brittany Dreano | **0** — aucune mention « Relu par », aucun `reviewedBy` |
| `RELECTURE_IA` | FAITE pour les 50, au sens précis donné dans `11_HUMAN_REVIEW_CHECKLIST.md` |
| Build de production | Identique à l’octet près à l’état initial : 192 fichiers en local, 0 différence. Construit à partir du commit seul : 191 fichiers, tous identiques — le 192ᵉ était un `.DS_Store` de macOS, absent du dépôt |
| Contrôles automatiques | Tous réussis ; détail et réserves dans `09_TEST_REPORT.md` |
| Search Console | **NON TESTÉ** : aucune donnée accessible |
| Commit | Un seul, celui qui contient ce rapport, fait à la demande du propriétaire le 6 octobre 2026. Déployé, il sert un site identique à l’octet près : aucune page de la série n’est en ligne |

**Ce qui attend une décision du propriétaire** : la mise en ligne du lot A (dix pages). Elle a été répétée sur une copie du dépôt ; elle n’a pas été faite, parce que ni la validation ni la demande de préparer le commit ne la demandent, et que l’outil n’est pas autorisé à préparer une mise en production de sa propre initiative.

---

## INSPECTÉ

Ce qui a réellement été lu avant d’écrire.

- **Le code** : `src/data/guides.ts` (modèle `Guide`, `Bloc`, `Cadrage`, `TypeDeGuide`), `bibliotheque.ts`, `publication.mjs`, `publications.mjs`, `relectures.mjs`, `dates.mjs`, `mode.mjs`, `metiers-publies.ts`, `offres.ts`, `src/lib/seo.ts`, `astro.config.mjs`, `vercel.json`, `package.json`, `README.md`.
- **Les gabarits** : `src/pages/guides/[slug].astro`, `guides.astro`, `[editorial].astro`, `layouts/BaseLayout.astro`, `components/Blocs.astro` et `Fil.astro`, la feuille de style des guides.
- **Les contrôles** : `content-gate.mjs`, `seo-audit.mjs`, `quality-gate.mjs`, `browser-check.mjs`, `check-sources.mjs`, `serve-dist.mjs`, `docs-seo.mjs`, et les tests des registres et de l’audit.
- **Le contenu** : pour chacun des 104 guides, le title, le H1, le nom, la fiche de cadrage, les intertitres, les questions de FAQ et les liens ; en entier, la page de référence et une dizaine de guides voisins des sujets envisagés. Pour les 14 pages métier, les 13 pages de prestation et les 5 pages de zone : title, H1, description, frictions, périmètre, hors-périmètre, FAQ.
- **Les conditions générales** (`/cgv`), article par article : tout ce que les nouvelles pages disent de BrittAssist en vient.
- **Les résultats de recherche publics** sur « secrétariat externalisé » et ses variantes, pour repérer les intentions présentes.
- **Les sources officielles** des sujets réglementaires : Urssaf, Service-Public, CNIL, impots.gouv.fr, BOFiP, Légifrance, ANTAI, La Poste. Chaque règle écrite dans une page a été lue à sa source.

Ce qui n’a pas été lu : les données Search Console, inaccessibles ; le texte intégral de chacun des 104 guides, dont seule la structure a été lue systématiquement — c’est pourquoi le texte complet des nouvelles pages a ensuite été comparé par programme à celui de tous les guides existants (`07`).

## CRÉÉ

- **50 guides**, répartis dans cinq fichiers `src/data/dossiers/secretariat-*.ts`, plus `secretariat-lots.ts`.
- **Un contrôle de similarité** (`scripts/similarity-check.mjs`) et ses huit tests.
- **Un générateur de documents** (`scripts/docs-secretariat.mjs`).
- **Douze documents** dans `docs/seo-secretariat-50/`, et les données qui les alimentent.

Liste complète, slug par slug : `08_IMPLEMENTATION_REPORT.md`.

## MODIFIÉ

17 fichiers suivis, 374 lignes ajoutées, 19 retirées :

- le modèle `Guide` : deux champs facultatifs, `lot` et `approfondir` ;
- la fiche de la page de référence : une rubrique « Pour approfondir » de 14 liens, **invisible tant qu’aucune page de la série n’est en ligne** ;
- le gabarit des guides : rendu de cette rubrique, et découpage par rubrique d’un pilier de plus de trente pages ;
- le gate éditorial : quatre contrôles ajoutés ;
- le registre `relectures.mjs` : une liste `validations`, à côté de l’objet `relectures` resté vide ; `publication.mjs` : la fonction qui la lit ; deux tests ;
- 44 guides d’octobre : 54 liens vers la série, eux aussi invisibles tant que leur cible est un brouillon ;
- `bibliotheque.ts`, `package.json` (deux scripts, aucune dépendance), `README.md`.

Sur la page de référence, **rien d’autre n’a changé** : ni le slug, ni le title, ni le H1, ni le texte, ni la FAQ, ni la date.

## EXÉCUTÉ

Commandes réellement lancées, dans cet ordre.

| Étape | Commandes |
| --- | --- |
| État initial | `git status`, `git fetch --all --prune`, `node --version`, `npm --version`, `npm ci`, `npm run check`, `npm test`, `npm run qa` ; relevé des empreintes SHA-256 du build et copie de référence |
| Inventaire | Chargement des fiches par Node, extraction de la structure des 104 guides, des métiers, prestations et zones |
| Search Console | Recherche d’exports locaux, de variables d’environnement, de connecteurs : rien |
| Recherche externe | Recherches web sur les intentions ; lecture des pages officielles pour chaque règle citée ; test de chaque URL de source |
| Rédaction | Écriture des cinq fichiers ; `node scripts/content-gate.mjs` après chaque lot de corrections |
| Intégration | `npm run check`, `npm test`, `npm run qa:apercu`, `npm run build`, comparaison des empreintes |
| Similarité | `node scripts/similarity-check.mjs`, puis `--serie`, puis `npm run qa:similarite` |
| Documents | `node scripts/docs-secretariat.mjs` sur le build d’aperçu |
| Navigateur | `node scripts/serve-dist.mjs`, puis `scripts/browser-check.mjs` avec Playwright et axe-core ; un contrôle responsive complémentaire aux cinq largeurs demandées |
| Sources | `node scripts/check-sources.mjs` |
| Passe finale | `npm run check`, `npm test`, `npm run qa:apercu`, `npm run build:apercu`, `npm run qa`, `npm run qa:similarite`, comparaison finale des empreintes |
| Après la validation du propriétaire | Enregistrement de la validation ; puis les mêmes commandes, `npm run docs:secretariat` et la comparaison des empreintes |
| Répétition du lot A | Sur une copie du dépôt dans un dossier temporaire : étapes 2, 3 et 5 du plan de publication, `npm run qa`, comparaison au build initial, `scripts/browser-check.mjs --only /guides` |
| Commit | `git fetch --all --prune`, `git add` sur les fichiers de la mission, puis `git commit` à la demande du propriétaire |

Ce rapport fait partie du commit : il ne peut pas attester ce qui le suit. Le push et le déploiement demandés avec lui ne sont donc pas décrits ici.

## TESTÉ

Résultats de la passe finale. Tableau complet, avec preuves : `09_TEST_REPORT.md`.

| Contrôle | Statut |
| --- | --- |
| Types (`npm run check`) | PASS — 75 fichiers, 0 erreur, 0 avertissement, 0 indication |
| Tests unitaires (`npm test`) | PASS — 52 sur 52 |
| Gate éditorial | PASS — 154 guides, 142 requêtes principales distinctes, 0 blocage, 0 avertissement |
| Build d’aperçu et audit strict (`npm run qa:apercu`) | PASS — 201 pages, 50 brouillons, 0 blocage |
| Build de production et audit strict (`npm run qa`) | PASS — 151 pages, 149 indexables, sitemap 149 URL, 0 blocage |
| Non-régression à l’octet près | PASS — 192 fichiers identiques en local ; 191 dans un build fait à partir du commit seul |
| Similarité (`npm run qa:similarite`) | PASS — 0 blocage, 5 alertes expliquées |
| Navigateur réel, accessibilité, CSP | PASS — voir `09` pour le périmètre exact |
| Responsive à 360, 390, 768, 1024 et 1440 px | PASS — 80 chargements, 0 échec |
| Sources externes | PARTIAL — 43 des 47 sources de la série répondent ; 4 refusent les scripts |
| Sécurité : CSP, secrets, dépendances | PASS |
| Validation du propriétaire : enregistrée, sans effet sur le site | PASS — 7 contrôles ; production et aperçu identiques à l’octet près à ce qu’ils étaient |
| Répétition de la mise en ligne du lot A, **sur une copie** | PASS — 161 pages, 159 URL au sitemap, 0 blocage ; 575 chargements en navigateur, 0 défaut |

## NON TESTÉ

| Sujet | Pourquoi |
| --- | --- |
| **Search Console** | Aucun export dans le dépôt, aucune variable d’environnement, aucun connecteur relié à une propriété. Aucun chiffre de clics, d’impressions ou de position n’a été lu ni cité |
| **Volumes de recherche** | Aucun outil n’en fournissait. Aucun n’a été estimé ni inventé |
| **Core Web Vitals** | Lighthouse n’est installé ni dans le dépôt ni dans la boîte à outils. Seuls des indicateurs statiques ont été mesurés : poids du HTML, nombre de liens, scripts |
| **Comportement sur Vercel** | Rien n’était déployé quand ce rapport a été écrit. Les en-têtes ont été testés avec le serveur local qui reproduit `vercel.json`, non chez l’hébergeur |
| **Indexation** | Les pages sont en `noindex` : il n’y a rien à observer avant publication |
| **Ce que la vérification du propriétaire a couvert** | L’outil a enregistré sa déclaration ; il ne peut ni la mesurer ni la confirmer. Aucune relecture par Brittany Dreano |
| **Mise en ligne réelle du lot A** | Non faite. Seule sa répétition sur une copie a été contrôlée |
| **Une source** | `economie.gouv.fr` refuse les requêtes des outils, navigateur automatisé compris (HTTP 403) : la page sur la franchise de TVA n’a pas pu être rouverte. Le lien est à ouvrir à la main. Les règles qu’elle appuie ont été vérifiées par ailleurs, sur impots.gouv.fr et le BOFiP |

## ÉCHECS

Aucun contrôle n’est en échec à l’issue de la mission. Trois incidents ont eu lieu en cours de route, tous corrigés :

1. **Le premier build de production différait de l’état initial sur les 104 guides.** Cause : un saut de ligne dans le gabarit, entre deux expressions, ajoutait une espace au HTML. Sans effet visible, mais c’était une différence. L’expression a été accolée à la précédente ; les 192 fichiers sont redevenus identiques.
2. **Le gate éditorial a refusé une description de 168 caractères** (limite : 165) et signalé six pages sans lien vers une offre. Corrigé.
3. **Le contrôle de similarité a relevé deux questions de FAQ et un intertitre repris de pages existantes.** Reformulés ; 41 questions de la série ont été réécrites à cette occasion pour se suffire à elles-mêmes.

Une limite de méthode doit être dite : la comparaison lexicale des *idées* (document `03`) sépare mal les doublons des idées neuves — une requête courte partage ses mots avec trop de pages. Elle a servi à désigner la page à relire, pas à décider. La décision vient de la lecture, et la preuve par le texte vient après rédaction (`07`).

## RECOMMANDÉ

### Avant de publier quoi que ce soit

1. **Décider de la mise en ligne du lot A.** Le propriétaire a validé les cinquante pages ; il n’a pas demandé qu’un lot soit mis en ligne. La marche à suivre est dans `05_PUBLICATION_PLAN.md`, et ce qu’elle produit est mesuré dans `09_TEST_REPORT.md` : dix pages nouvelles, quarante guides et l’index modifiés, aucune page hors `/guides` touchée.
2. **Ouvrir à la main la source `economie.gouv.fr`** de la page sur la TVA, la seule que les outils n’ont pas pu rouvrir, avant que cette page soit en ligne.
3. **Si le site doit afficher une relecture**, la faire faire par Brittany Dreano : l’objet `relectures` affiche son nom, et seule une relecture faite par elle peut y être inscrite. La validation du propriétaire, elle, ne s’affiche nulle part.
4. **Exporter les requêtes Search Console** de `/guides/secretariat-externalise`, dans l’ancienne propriété (sans `www`), qui détient l’historique. Elles permettraient de vérifier l’ordre des lots, et peut-être de faire remonter une page P1.

### Constats sur l’existant, non corrigés

Relevés pendant l’inventaire. Aucun n’a été corrigé : ces pages sont publiées, et la mission interdisait de les retoucher sans preuve.

| Constat | Où | Proposition |
| --- | --- | --- |
| **La page de référence parle d’« une obligation de résultat sur chaque sujet »** pour le Private Office ; les conditions générales, article 6, disent « obligation de moyens, non de résultat » | `src/data/guides.ts`, réponse courte de `secretariat-externalise` | À trancher par Brittany Dreano. C’est la page la plus lue, et les deux textes se contredisent |
| Les conditions générales, article 14, renvoient pour les données personnelles à la politique de confidentialité du site | `/cgv` | Faire vérifier par un conseil que le traitement des données *du client* par la prestataire est couvert comme le demande le RGPD. La nouvelle page sur l’accord de sous-traitance décrit ce qui est attendu |
| Trois questions de FAQ identiques entre pages publiées, sept formulées de façon voisine | Voir `07`, section « pages déjà en ligne » | Les reformuler pour qu’elles se lisent hors de leur page |
| `choisir-assistante-externalisee` est le plus court des premiers guides, et quatre idées écartées lui revenaient | `guides.ts` | L’enrichir : questions à poser, vérifications de sécurité |
| Le guide sur le prix ne contient pas le mot « secrétariat » dans son title | `guides.ts` | À regarder avec les données Search Console : si la requête « tarif secrétariat externalisé » existe, c’est cette page qui doit y répondre |
| Les pages de prestation ne renvoient vers aucun guide ; les 14 pages métier renvoient toutes vers les trois mêmes | `src/pages/services/[slug].astro`, `assistante/[slug].astro` | Relier chaque prestation au pilier de son dossier, chaque métier à deux guides de son secteur |
| L’index `/guides` atteindra 226 liens et 96 Ko | `src/pages/guides.astro` | Replier les dossiers, ou ne montrer que les premières pages de chacun |
| Cinq alertes de sécurité sur les dépendances, dont une critique sur Astro | `npm audit` | Chantier distinct : passage d’Astro 5 à Astro 7 |

### Après le lot A

5. Suivre la page de référence avant tout le reste : c’est elle que la série doit servir, pas concurrencer (`05`, dernière section).
6. Relancer `node scripts/check-sources.mjs` avant chaque lot : les pages officielles changent.

## RISQUE DE RÉGRESSION

**Faible aujourd’hui, mesuré.** Le build de production est identique, fichier par fichier, à ce qu’il était. Le sitemap, la CSP, les données structurées, les canonicals, les formulaires, les scripts et les styles n’ont pas bougé : aucun de ces fichiers n’a été modifié.

**Mesuré pour le lot A, sur une copie.** Sa mise en ligne ajoute dix pages et en modifie quarante et une : quarante guides et l’index. Aucune ne change de title, de H1, de canonical ni de directive robots ; aucune ne perd de page qui la cite ; aucune page hors `/guides` ne change. La page de référence gagne sa rubrique « Pour approfondir », dix liens, et sa date de mise à jour.

**Modéré à la publication complète, et connu d’avance.** Une fois la série en ligne, 73 guides existants et l’index changeront — par des liens ajoutés, des cartes nouvelles, une colonne « Dans le même dossier » qui tourne. Ces changements ont été construits, audités et chargés dans un navigateur dans le build d’aperçu : 0 blocage, 0 violation d’accessibilité, 0 débordement. Les 46 pages hors `/guides` ne changent pas.

Deux endroits demandent un regard humain le jour venu : le pilier « Externaliser et déléguer », dont la grille passe à un affichage par rubrique, et l’index des guides, qui s’allonge.

## RISQUE DE CANNIBALISATION

**Faible entre les nouvelles pages et l’existant.** Sur 119 idées, les 40 classées en doublon ou en risque fort ont toutes été écartées. Aucune page de la série ne partage sa requête principale avec une autre. Mesurées sur leur texte complet, les nouvelles pages ne sont pas plus proches de leurs voisines que les guides existants ne le sont entre eux : cosinus médian de 0,26, contre 0,29.

**Trois points à surveiller**, par ordre d’importance :

1. **La page de référence elle-même.** Douze pages de la série ont « secrétariat » dans leur title. Chacune vise une question plus étroite, et la page de référence en cite neuf ; mais c’est sur ses requêtes à elle qu’un déplacement se verrait d’abord. D’où la publication par lots et le critère de passage d’un lot au suivant.
2. **La paire `obligation-de-vigilance-prestataire-independant` / `dossier-permanent-entreprise`**, la plus proche de toute la bibliothèque par le vocabulaire (0,50). Les lecteurs sont opposés — celui qui demande la pièce, celui qui la fournit — et les deux pages se citent. Si l’une prenait la place de l’autre dans les résultats, la réponse serait de resserrer les titles.
3. **Les 31 pages retenues en risque moyen.** Chacune porte sa démonstration écrite (`03`). Une démonstration n’est pas une mesure : c’est la Search Console qui dira si elle tenait.

## PROCHAINES PAGES À PUBLIER

Le lot A : les dix pages P0. Le propriétaire les a validées le 6 octobre 2026 ; leur mise en ligne, répétée sur une copie, attend sa demande.

| # | Page | Dossier | Source officielle à ouvrir |
| --- | --- | --- | --- |
| 1 | `inconvenients-secretariat-externalise` | Externaliser et déléguer | — |
| 2 | `mission-ponctuelle-de-secretariat` | Externaliser et déléguer | — |
| 3 | `periode-d-essai-assistante-independante` | Externaliser et déléguer | Service-Public (2) |
| 4 | `cahier-des-charges-secretariat-externalise` | Modèles et checklists | — |
| 5 | `comparer-devis-secretariat-externalise` | Modèles et checklists | — |
| 6 | `tva-prestataire-en-franchise-en-base` | Devis, factures et relances | Ministère de l’Économie, impots.gouv.fr |
| 7 | `delais-de-reponse-assistante-externalisee` | Externaliser et déléguer | Service-Public (1) |
| 8 | `forfait-secretariat-externalise-depassement` | Externaliser et déléguer | — |
| 9 | `absence-de-son-assistante-independante` | Situations de dirigeant | — |
| 10 | `obligation-de-vigilance-prestataire-independant` | Confidentialité, accès et outils | Urssaf, Service-Public (2) |

Pour les voir avant publication : `npm run build:apercu`, puis `npm run servir`, et ouvrir `http://127.0.0.1:4322/guides/<slug>`.

---

## Critères d’acceptation

| Critère | État |
| --- | --- |
| Exactement 50 nouvelles intentions sélectionnées | Oui — 50 retenues sur 119 idées |
| Différentes des 104 guides existants | Oui — `03`, puis vérification sur le texte dans `07` |
| Différentes des pages métier et de prestation | Oui — prises en compte dans le jugement d’intention ; trois idées écartées pour ce motif (C060, C076, C097) |
| `cadrage.motCle` unique | Oui — 142 requêtes distinctes pour 142 fiches cadrées ; contrôle bloquant |
| Pas de slug, de title, de H1, de description en double | Oui — contrôles bloquants du gate éditorial et de l’audit |
| Pas de lien interne cassé | Oui — 0 dans les deux builds |
| Build d’aperçu et QA d’aperçu réussis | Oui |
| Aucune régression des pages existantes | Oui — production identique à l’octet près |
| CSP stricte | Oui — présente sur les 201 pages, sans `unsafe-inline` ni `unsafe-eval` |
| Sitemap publié cohérent | Oui — 149 URL, inchangé |
| Brouillons en `noindex` | Oui — `noindex,follow`, bandeau « brouillon », hors sitemap |
| Toute page marquée « relue » a une validation humaine traçable | Oui — aucune page n’est marquée relue sur le site ; les 50 pages validées portent la validation du propriétaire, datée et nommée |
| Aucune donnée inventée | Oui — ni chiffre, ni témoignage, ni cas client ; les exemples sont signalés comme illustratifs |
| Aucune source réglementaire non vérifiée | Oui pour le contenu : chaque règle a été lue à sa source. Une URL sur 47 n’a pas pu être rouverte par programme (voir NON TESTÉ) |
| La page de référence est préservée | Oui — seule une rubrique de liens, invisible pour l’instant, lui a été ajoutée |
| Les 50 pages ne sont pas publiées d’un coup | Oui — aucune n’est publiée ; quatre lots proposés |
| Les pages validées par une personne sont enregistrées dans `relectures.mjs` | Oui — 50 pages, dans la liste `validations`, au nom du propriétaire. Pas dans l’objet `relectures` : il afficherait « Relu par Brittany Dreano » |

## Relecture : état au 6 octobre 2026

```
RELECTURE_IA                  = FAITE       (50 pages)
QA_AUTOMATIQUE                = PASS        (50 pages)
RELECTURE_HUMAINE             = FAITE       (50 pages)  par le propriétaire, selon sa déclaration
VALIDATION_HUMAINE            = DONNÉE      (50 pages)  Axel Dreano, 6 octobre 2026, 19 h 19
RELECTURE PAR BRITTANY DREANO = EN_ATTENTE  (50 pages)  aucune mention « Relu par » sur le site
PUBLICATION                   = AUCUNE      (50 brouillons)
```

Ce que `RELECTURE_HUMAINE = FAITE` veut dire ici, et rien de plus : le propriétaire du site a écrit « c'est bon j'ai tout checker », et cette phrase est enregistrée telle quelle, avec son nom et la date. L’outil ne peut pas dire ce que la vérification a couvert. « Tout » a été lu comme les cinquante pages ; si la validation ne visait que le lot A, la ligne devient FAITE pour 10 pages et EN_ATTENTE pour 40.

Elle ne veut pas dire que Brittany Dreano a relu ces pages. Le site n’affiche aucune mention de relecture, et n’en affichera une que pour une page qu’elle aura relue elle-même.

Le détail est dans `11_HUMAN_REVIEW_CHECKLIST.md`, section « Décisions de relecture » ; la marche à suivre pour publier, dans `05_PUBLICATION_PLAN.md`.
