# Rapport d'implémentation — rubrique « Articles »

Date : 10 octobre 2026 (Europe/Paris). Branche : `claude/practical-galileo-p8gh9f`. Commit de base : `d41dcd4` (6 octobre 2026). Astro 5.18.2, @astrojs/sitemap 3.7.3, Node 22.22.0, npm 10.9.4.

Ce rapport distingue ce qui a été **écrit**, ce qui a été **exécuté et vérifié**, et ce qui **n'a pas pu l'être**.

## 1. Résumé honnête

- La rubrique existe dans le code : lien « Articles » dans le menu (ordinateur et mobile), page `/articles`, pages `/articles/<slug>`, collection de contenu Astro, données structurées `BlogPosting`, intégration aux registres de publication, au sitemap et aux contrôles existants.
- Le plan des **41 semaines** (1er janvier – 8 octobre 2026) est complet : 40 créneaux avec des pistes repérées, 1 créneau (S07) en `SOURCES_INSUFFISANTES`.
- **8 articles rédigés, 0 publié (0/41).** Aucune page source n'a pu être ouverte : l'environnement d'exécution refusait l'accès réseau aux sites sources. Les pistes viennent uniquement du moteur de recherche (titres, URL, résumés), ce qui ne suffit pas à établir un fait. Les huit articles restent des brouillons `SOURCES_A_VERIFIER`, hors index et hors production ; les contrôles empêchent techniquement leur publication en l'état.
- La commande « Fais un nouvel article » est enregistrée dans le dépôt (AGENTS.md, CLAUDE.md, instructions Copilot, fichier de commande, procédure, scripts).
- Aucune régression mesurée sur le build de production : mêmes 199 URL indexables, sitemap identique octet pour octet, 82/82 tests, 0 blocage d'audit, 0 violation axe-core sur 210 pages × 5 largeurs.

## 2. État initial (mesuré avant toute modification)

| Contrôle | Résultat |
| --- | --- |
| `git status` | arbre propre, branche `claude/practical-galileo-p8gh9f` = `d41dcd4` |
| `npm test` | 52/52 |
| `node scripts/content-gate.mjs` | 0 blocage, 0 avertissement (154 guides, 14 métiers, 8 dossiers) |
| `npm run build` | 201 pages, 199 indexables, 0 brouillon, 0 blocage, 2 avertissements |
| `seo-audit --strict` | 0 blocage ; avertissements : `/contact` mince (150 mots), `/mentions-legales` sans lien contextuel |
| `npm run check` | 0 erreur (75 fichiers) |
| `qa:similarite` | 0 blocage |
| Sitemap | 199 URL (copie conservée pour comparaison) |
| Production `https://www.brittassist.fr` | **non joignable depuis l'environnement** (proxy : HTTP 403 au CONNECT) |

## 3. Blocage d'accès aux sources

Constaté le 10 octobre 2026 :

- `curl` vers entreprendre.service-public.gouv.fr, cnil.fr, urssaf.fr, legifrance.gouv.fr, cybermalveillance.gouv.fr, impots.gouv.fr : échec (code 000, proxy).
- L'outil de lecture de pages web : `getaddrinfo ENOTFOUND` sur tous les domaines essayés, y compris docs.astro.build.
- Seul le moteur de recherche répondait. Quatre recherches parallèles (S01-S10, S11-S20, S21-S31, S32-S41) ont produit les dossiers de `docs/articles/recherche/`, puis le quota de recherches de la session a été épuisé.

Pour lever le blocage, le propriétaire peut ouvrir l'accès réseau de l'environnement (paramètres de l'environnement cloud, rubrique *Network access*, domaines officiels autorisés), ou relancer « Fais un nouvel article » depuis VS Code avec un agent qui dispose d'un accès web.

## 4. Fichiers

### Ajoutés

| Fichier | Rôle |
| --- | --- |
| `src/content.config.ts` | Collection `articles`, schéma Zod strict |
| `src/content/articles/*.md` | 8 brouillons (S02, S03, S13, S18, S25, S35, S38, S41) |
| `src/data/articles.mjs` | Calendrier (41 créneaux, suite S42…), règles de publication, contrôle d'une fiche et de la collection |
| `src/data/regles-editoriales.mjs` | Formulations interdites, partagées avec le gate des guides |
| `src/lib/articles.ts` | Chargement des articles ; **garde-fou de build** |
| `src/pages/articles.astro`, `src/pages/articles/[slug].astro`, `src/pages/articles/page/[page].astro` | Liste, article, pagination (24 par page) |
| `src/components/ListeArticles.astro`, `src/components/CarteArticle.astro` | Liste, cartes |
| `src/styles/articles.css` | Styles de la rubrique (tokens existants, aucune ressource externe) |
| `scripts/articles-check.mjs` | Contrôle des fiches, du registre et du plan |
| `scripts/articles-new.mjs`, `scripts/articles-publier.mjs` | Commande « Fais un nouvel article » : état, anti-cannibalisation, création idempotente ; publication contrôlée |
| `scripts/docs-articles.mjs` | Régénère le plan et le tableau des sources |
| `scripts/menu-check.mjs` | Menu en navigateur réel |
| `scripts/lib/articles-fichiers.mjs` | Lecture des fiches hors d'Astro |
| `scripts/tests/articles.test.mjs` | 26 tests |
| `AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md`, `.github/prompts/nouvel-article.prompt.md` | Instructions persistantes |
| `docs/articles/` | Plan (JSON + Markdown), procédure, sources, ce rapport, dossiers de recherche |

### Modifiés

| Fichier | Modification |
| --- | --- |
| `src/components/Header.astro` | Lien « Articles » après « Guides » ; menu mobile : focus sur le premier lien à l'ouverture, retour au bouton après Échap |
| `src/layouts/BaseLayout.astro` | `datePublished` du WebPage omis quand il n'existe pas (brouillon) ; props `ogImageAlt` et `suivreLiens` (noindex,follow) |
| `src/data/publication.mjs` | Les articles passent par les registres ; `articlesInscrits()` |
| `src/data/dates.mjs` | `lastmod` et date de publication des articles et de la liste ; `MODIFICATIONS_ARTICLES` |
| `src/data/publications.mjs` | Commentaire de section « Articles » (aucune ligne ajoutée) |
| `astro.config.mjs` | Sitemap : une page de liste sans article publié en est exclue |
| `scripts/seo-audit.mjs` | `BlogPosting` complet, dates contradictoires entre nœuds, date future, date visible, `<lastmod>` = `dateModified` pour les articles, un seul nœud article |
| `scripts/content-gate.mjs` | Règles importées du module partagé ; route `/articles` connue |
| `scripts/tests/seo-audit.test.mjs` | 4 tests `BlogPosting` |
| `package.json`, `package-lock.json` | Scripts `articles:check`, `article:nouveau`, `article:publier`, `docs:articles`, `qa:menu` ; `articles:check` ajouté à `qa` et `qa:apercu` ; `js-yaml` 4.3.2 déclaré en dépendance de développement (déjà installé via Astro : une ligne ajoutée au lockfile, `npm ci` vérifié) |
| `README.md` | Rubrique Articles, commandes, contrôles |

Non modifiés (vérifié par `git diff`) : `vercel.json`, `api/`, `public/` (dont `robots.txt`, `consent.js`), `src/data/relectures.mjs`, `global.css`, `refonte-v5.css`, la CSP.

## 5. Garanties techniques

- **Brouillon jamais en production** : un article n'est généré par `npm run build` que s'il est inscrit dans `publications.mjs` ou `relectures.mjs` (même mécanisme que les guides). En aperçu, il est en `noindex`, avec la balise `statut-editorial`, sans `BlogPosting` ni `datePublished`, hors sitemap.
- **Échec du build plutôt que publication fautive** : tout article inscrit au registre est recontrôlé pendant le build ; une source primaire non ouverte, une date de publication différente du registre, un sujet réglementaire sans validation, du HTML dans le corps… font échouer le build.
- **Pas d'antidatage** : `datePublished` doit égaler la date du registre, qui ne peut précéder `createdAt` ni dépasser la date du jour ; `dateEvenement` est un champ distinct, dans la semaine couverte. Un article publié après sa semaine affiche un encadré « Rétrospective de la semaine du … ».
- **Pas de fausse relecture** : `reviewedAt` exige la même date dans `relectures.mjs`, `approvedBy` une validation inscrite ; un test vérifie qu'aucun article n'est déclaré relu.
- **Sitemap honnête** : `<lastmod>` d'un article = sa date de publication, ou de modification significative inscrite dans `MODIFICATIONS_ARTICLES` ; l'audit bloque toute divergence avec le `dateModified` déclaré.
- **Échappement** : JSON-LD sérialisé par `jsonLd()` (chevrons échappés) ; HTML interdit dans le Markdown ; liens `javascript:` refusés ; liens externes en `noopener noreferrer`.
- **Idempotence** : `article:nouveau --creer` ne réécrit jamais une fiche et refuse une seconde fiche pour la même semaine ; `article:publier` ne fait rien sur un article déjà inscrit et restaure les fichiers en cas d'échec d'écriture.
- **Résilience** : une fiche illisible est signalée par `articles:check` sans interrompre le contrôle des autres. En production, une fiche brouillon fautive sur le fond n'empêche pas le build ; une fiche au frontmatter invalide (schéma) le fait échouer, ce qui protège la mise en ligne.

## 6. Commandes exécutées et résultats (état final)

| Commande | Résultat |
| --- | --- |
| `npm test` | **82/82** (52 existants + 26 articles + 4 audit `BlogPosting`) |
| `npm run check` | 0 erreur, 0 avertissement (91 fichiers) |
| `npm run articles:check` | 0 blocage ; 29 avertissements attendus (sources non ouvertes, approbation requise) |
| `npm run qa:similarite` | 0 blocage, 5 alertes existantes inchangées |
| `npm run qa:apercu` | 0 blocage ; 210 pages (199 indexables, 8 brouillons) |
| `npm run qa` | 0 blocage ; 202 pages, 199 indexables, sitemap 199 URL |
| Comparaison des routes avant/après (production) | 202 → 203 fichiers HTML ; aucune route disparue ; seule ajoutée : `/articles` (noindex,follow) |
| Comparaison du sitemap avant/après | **identique** (URL et `lastmod`) |
| `browser-check.mjs`, aperçu complet | 210 pages × 5 largeurs = 1 050 chargements : 0 page en défaut, 0 violation axe-core (WCAG 2.0/2.1/2.2 A et AA), lien d'évitement, menu mobile, consentement : PASS |
| `menu-check.mjs` | 26/26 : une ligne sans débordement de 921 à 1920 px ; 320 px, 390 px et zoom 200 % : menu ouvert lisible, focus dans le menu, « Articles » atteint au clavier avec focus visible, Échap rend le focus, Entrée mène à `/articles`, `aria-current` |

Simulations réalisées dans une **copie jetable** du dépôt (jamais versée) :

- **Publication** : un brouillon passé à `QA_PASS` avec une source marquée ouverte *uniquement pour le test*, publié par `article:publier --confirmer`, puis `npm run qa` : 0 blocage, 201 pages indexables, article et `/articles` au sitemap avec `lastmod` 2026-10-10, `BlogPosting` complet, dates visibles cohérentes, les 7 autres brouillons absents.
- **Pagination** : 31 fiches → `/articles` (24 articles) et `/articles/page/2` ; page 2 sans article publié en `noindex` et hors sitemap.

Avant ces correctifs, le contrôle du menu avait relevé un défaut antérieur : à l'ouverture du menu mobile, `Tab` partait vers la page, sous le menu. Le défaut est corrigé dans `Header.astro`.

Incident en cours de travail : un `git stash` lancé pour comparer avec l'état initial a été aussitôt annulé (`git stash pop`), sans perte, mais il a invalidé un premier contrôle navigateur complet. Ce contrôle a été arrêté puis relancé ; seul le second résultat est rapporté.

## 7. Ce qui n'a pas pu être fait ou vérifié

| Point | Statut | Raison / suite |
| --- | --- | --- |
| Ouverture des sources | **Non fait** | Accès réseau refusé ; voir § 3 |
| Publication d'articles | **0/41** | Aucune preuve ouverte ; 5 des 8 brouillons (S03, S18, S35, S38, S41) sont en outre réglementaires et attendent une validation du propriétaire |
| Déclenchement réel de `/nouvel-article` dans VS Code Copilot | **NON TESTÉ** | Pas de VS Code dans l'environnement ; le fichier suit le format des prompt files (`.github/prompts/*.prompt.md`) |
| Vercel / production | **DEPLOIEMENT_NON_CONFIRME** | Production non joignable depuis l'environnement ; un push sur cette branche ne met pas à jour la production, qui dépend de la branche de production configurée dans Vercel |
| Automatisation hebdomadaire | Non mise en place | Facultative ; décrite dans la procédure, à créer sur demande |
| SENTINEL | **SENTINEL NON UTILISÉ** | Aucun exécutable présent (pas de dossier `outils/`, aucun binaire) ; `docs/sentinel/` ne contient que les comptes rendus d'un audit antérieur |
| `/methode-editoriale` | Inchangée | Elle décrit les guides ; une mention des articles est à ajouter quand le premier article sera publié |

## 8. Pour publier les premiers articles

1. Ouvrir l'accès réseau aux sites officiels, ou travailler depuis VS Code avec un agent qui dispose d'un accès web.
2. Pour chaque brouillon, suivre [SOURCES_VERIFIEES.md](SOURCES_VERIFIEES.md) : ouvrir les sources, corriger le texte, renseigner `ouverte` et `consulteeLe`.
3. Sujets standard (S02, S13, S25) : `QA_PASS`, puis `npm run article:publier -- --slug … --confirmer`.
4. Sujets réglementaires (S03, S18, S35, S38, S41) : validation du propriétaire, inscrite dans `relectures.mjs` (liste `validations`), fiche en `APPROUVE`, puis publication.
5. `npm run qa`, commit ciblé, push, vérification de la page servie.

## 9. Retour arrière

- Retirer la rubrique de la navigation : supprimer la ligne `{ href: '/articles', … }` de `Header.astro`.
- Dépublier un article : supprimer sa ligne de `publications.mjs`.
- Annuler l'ensemble : `git revert <commit>` (aucune réécriture d'historique).
