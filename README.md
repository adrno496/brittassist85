# BrittAssist — site vitrine

Site de [brittassist.fr](https://www.brittassist.fr) : assistance de direction externalisée (« Private Office ») par Brittany Dreano, à La Roche-sur-Yon.

Site statique Astro 5, déployé sur Vercel. Une fonction serveur `/api/contact` achemine les formulaires via Brevo. Aucune base de données. Configuration : [docs/BREVO.md](docs/BREVO.md).

## Commandes

```bash
npm install
npm run dev            # développement, http://localhost:4321
npm run build          # build de production : seules les pages relues sont générées
npm run build:apercu   # build d’aperçu : y compris les brouillons, en noindex (aucun à ce jour)
npm run preview        # sert le dernier build
npm run servir         # sert dist/ en appliquant vercel.json (en-têtes, redirections, 404)

npm run check          # contrôle de types (astro check)
npm test               # tests des registres de publication et de relecture, et de l’audit
npm run qa             # gate éditorial + build + audit SEO strict
npm run qa:apercu      # la même chose sur le build d’aperçu
npm run qa:navigateur  # contrôles en navigateur réel (voir plus bas)
npm run qa:similarite  # similarité champ par champ sur la série « secrétariat externalisé »
npm run docs:seo       # régénère docs/seo/02, 03 et 09
npm run docs:secretariat  # régénère les tableaux de docs/seo-secretariat-50/

npm run articles:check    # rubrique Articles : fiches, registre, plan des 41 semaines
npm run article:nouveau   # « Fais un nouvel article » : état, --verifier, --creer (voir AGENTS.md)
npm run article:publier   # simulation de publication ; --confirmer pour inscrire au registre
npm run docs:articles     # régénère docs/articles/PLAN_EDITORIAL_2026.md et SOURCES_VERIFIEES.md
npm run qa:menu           # menu et lien « Articles » en navigateur réel (Playwright)
```

## Structure

```
src/
├── layouts/BaseLayout.astro      head, SEO, JSON-LD global, en-tête, pied de page
├── components/                   Header, Footer, Fil (fil d’Ariane), Blocs, Button, Monogram, WorkDemo, ListeArticles, CarteArticle
├── content.config.ts             collection Astro « articles » : schéma des fiches
├── content/articles/*.md         les articles, un fichier par article (le nom du fichier est le slug)
├── lib/articles.ts               chargement des articles pour les gabarits, garde-fou de build
├── lib/seo.ts                    sérialisation JSON-LD, ancres, fil d’Ariane, dates
├── data/
│   ├── guides.ts                 les 12 premiers guides + le modèle de contenu
│   ├── dossiers/*.ts             les guides d’octobre 2026, un fichier par dossier
│   ├── dossiers/secretariat-*.ts la série « secrétariat externalisé » : 50 guides, rangés dans les dossiers existants
│   ├── dossiers/secretariat-lots.ts  les quatre lots de publication de la série, et leur date
│   ├── bibliotheque.ts           réunit tous les guides ; dossiers, piliers, pages voisines
│   ├── metiers.ts                pages métier — metiers-publies.ts filtre celles du build
│   ├── prestations.ts, zones.ts  pages de prestation et de zone
│   ├── publications.mjs          registre des pages mises en ligne sans relecture préalable
│   ├── relectures.mjs            registre des pages relues, et liste des validations du propriétaire (voir ci-dessous)
│   ├── publication.mjs           qui est publié, qui est brouillon
│   ├── mode.mjs                  lecture de BROUILLONS=1, et rien d’autre
│   ├── dates.mjs                 dates de mise à jour : sitemap et JSON-LD
│   ├── articles.mjs              calendrier des créneaux et règles de publication des articles
│   ├── regles-editoriales.mjs    formulations interdites, communes aux guides et aux articles
├── pages/                        pages fixes, hubs et gabarits dynamiques
└── styles/                       global.css, refonte-v5.css ; articles.css pour la seule rubrique Articles
api/contact.js                    fonction Vercel : validation et envoi Brevo
public/                           polices, images, robots.txt, llms.txt, consent.js
scripts/                          contrôles de qualité (voir ci-dessous)
docs/                             audits, stratégie SEO, rapports
```

## Publier une page : deux registres

Les guides et pages métier ajoutés en octobre 2026 ont été préparés avec l’aide d’un outil d’IA. Deux fichiers décident de leur sort, et ils ne disent pas la même chose.

| Registre | Ce qu’il affirme | Effet |
| --- | --- | --- |
| `src/data/publications.mjs` | « Cette page est en ligne » | La page est générée, indexable et au sitemap. Aucune mention de relecture |
| `src/data/relectures.mjs` | « Cette page a été relue par une personne, à cette date » | Affiche « Relu par Brittany Dreano le … », ajoute `reviewedBy` aux données structurées, met le `<lastmod>` à cette date |

**État au 3 octobre 2026 :** les 99 pages nouvelles sont inscrites dans `publications.mjs`, sur décision du propriétaire, sans relecture préalable. Le registre des relectures est vide : aucune page ne se déclare relue.

**État au 6 octobre 2026 :** les 50 pages de la série « secrétariat externalisé » y sont inscrites à leur tour, sur décision du propriétaire. Le site compte 199 pages indexables.

`relectures.mjs` porte aussi une liste `validations` : la trace d’une validation donnée par le propriétaire du site — son nom, la date, ses mots, les pages visées. Elle n’a aucun effet sur le site : une page validée n’est ni mise en ligne, ni présentée comme relue. Aucun gabarit ne lit cette liste.

Une page absente des deux registres reste un brouillon :

- `npm run build` ne la génère pas ;
- `npm run build:apercu` la génère en `noindex`, avec un bandeau « brouillon », hors sitemap.

C’est le sort de toute page ajoutée par la suite, tant qu’elle n’est inscrite nulle part.

### La série « secrétariat externalisé »

Cinquante guides ajoutés le 6 octobre 2026 autour de `/guides/secretariat-externalise`. Le propriétaire les a validés, puis a décidé de les mettre en ligne le même jour, d’un seul coup. Ils ne créent aucun dossier : chacun rejoint l’un des huit dossiers existants. Un plan de publication par lots — A, B, C, D — était prévu ; il n’a pas été suivi : [docs/seo-secretariat-50/05_PUBLICATION_PLAN.md](docs/seo-secretariat-50/05_PUBLICATION_PLAN.md) le dit et garde les lots comme repère. La liste des pages, avec leurs sources à ouvrir et la trace des décisions, est dans [11_HUMAN_REVIEW_CHECKLIST.md](docs/seo-secretariat-50/11_HUMAN_REVIEW_CHECKLIST.md).

Deux effets à connaître :

- les liens ajoutés vers ces pages — sur la page de référence, rubrique « Pour approfondir », et dans une quarantaine de guides — ne s’affichent que si leur cible est publiée. Retirer une page de `publications.mjs` fait disparaître les liens qui la citent ;
- au-delà de trente pages, la grille d’un pilier est découpée par rubrique, avec un sommaire. Seul le dossier « Externaliser et déléguer » franchit ce seuil.

Relire une page :

1. La lire en entier, ouvrir chaque lien de sa rubrique « Références ».
2. Corriger ce qui doit l’être dans son fichier de `src/data/dossiers/` (ou `metiers.ts`).
3. Ajouter une ligne dans l’objet `relectures` de `src/data/relectures.mjs` :
   ```js
   '/guides/mentions-obligatoires-facture': '2026-10-06',
   ```
4. `npm run qa`.

N’inscrire dans l’objet `relectures` qu’une page relue par Brittany Dreano : c’est une déclaration publique faite en son nom. Une validation donnée par une autre personne s’ajoute à la liste `validations`, qui ne s’affiche nulle part. Pour retirer une page de l’index, supprimer sa ligne de `publications.mjs`.

Publier un pilier (`/guides/<slug-du-dossier>`) fait apparaître le dossier dans l’index des guides et dans le pied de page. La page `/methode-editoriale` passe elle aussi par les registres.

## La rubrique « Articles »

Une actualité datée par semaine, utile aux dirigeants, indépendants et TPE : `/articles` (liste) et `/articles/<slug>` (article). Lien « Articles » dans le menu, après « Guides ».

- Chaque article est une fiche Markdown de `src/content/articles/`, validée par le schéma de `src/content.config.ts`.
- **Même règle de publication que les guides** : un article n'est généré par `npm run build` que s'il est inscrit dans `publications.mjs` (ou `relectures.mjs`). Sinon, c'est un brouillon : `npm run build:apercu` seulement, en `noindex`, hors sitemap.
- Les dates ne se confondent pas : semaine couverte (`periodeDebut`, `periodeFin`), jour de l'actualité (`dateEvenement`), rédaction (`createdAt`), mise en ligne (`datePublished`, égale à la date du registre). Un article écrit après sa semaine s'affiche comme une rétrospective.
- Un article inscrit au registre qui enfreint une règle (source primaire non ouverte, sujet réglementaire sans validation, date incohérente) **fait échouer le build**.
- Sans article publié, `/articles` est en `noindex,follow` et hors sitemap.
- Plan des 41 semaines (1er janvier – 8 octobre 2026) : [docs/articles/PLAN_EDITORIAL_2026.md](docs/articles/PLAN_EDITORIAL_2026.md). Procédure « Fais un nouvel article » : [AGENTS.md](AGENTS.md) et [docs/articles/PROCEDURE_NOUVEL_ARTICLE.md](docs/articles/PROCEDURE_NOUVEL_ARTICLE.md).

**État au 10 octobre 2026 :** huit articles rédigés en brouillon (`SOURCES_A_VERIFIER`), aucun publié. Leurs sources ont été repérées par moteur de recherche mais n'ont pas pu être ouvertes ; voir [docs/articles/RAPPORT_IMPLEMENTATION.md](docs/articles/RAPPORT_IMPLEMENTATION.md).

## Contrôles de qualité

| Script | Ce qu’il vérifie |
| --- | --- |
| `scripts/content-gate.mjs` | Les fiches, avant le build : requêtes principales distinctes, cadrage complet, liens vers des routes existantes, règle de droit sans source, promesses de résultat |
| `scripts/seo-audit.mjs` | Le HTML construit : titres, descriptions, H1, canonical, Open Graph, JSON-LD (dont `BlogPosting` : dates cohérentes, visibles, non futures), CSP, liens et ancres, pages orphelines, profondeur, similarité, sitemap (dont `<lastmod>` des articles), robots, redirections |
| `scripts/quality-gate.mjs` | Branche l’audit sur le build : un blocage fait échouer `npm run build` |
| `scripts/browser-check.mjs` | Navigateur réel, cinq largeurs d’écran : console, CSP, débordement, axe-core WCAG 2.2 AA, clavier, consentement |
| `scripts/check-sources.mjs` | Les liens externes répondent-ils encore ? |
| `scripts/similarity-check.mjs` | Les fiches, champ par champ : titres, chapôs, corps, FAQ, clôtures trop proches, phrases reprises, questions répétées, pages au même sujet. Sert aussi à rapprocher une liste d’idées de pages de l’existant (`--candidats`) |
| `scripts/serve-dist.mjs` | Sert le build avec les règles de `vercel.json` |
| `scripts/images.mjs` | Régénère les variantes WebP des photos |
| `scripts/docs-seo.mjs` | Régénère les tableaux de `docs/seo/` |
| `scripts/docs-secretariat.mjs` | Régénère les tableaux de `docs/seo-secretariat-50/` |
| `scripts/articles-check.mjs` | Les articles avant le build : dates, semaine, sources ouvertes, statut et registre, relecture et approbation attestées, unicité avec les guides, plan des 41 semaines |
| `scripts/articles-new.mjs` | État de la rubrique, proximité d'une intention avec l'existant, création idempotente d'une fiche squelette |
| `scripts/articles-publier.mjs` | Inscription contrôlée d'un article au registre, à la date du jour ; rien sans `--confirmer` |
| `scripts/docs-articles.mjs` | Régénère le plan éditorial et le tableau des sources |
| `scripts/menu-check.mjs` | Menu et lien « Articles » : largeurs 320 à 1920 px, zoom 200 %, clavier |

Le quality gate tourne aussi sur Vercel, puisqu’il fait partie du build. Contournement d’urgence, à ne pas laisser en place : `SEO_GATE=off npm run build`.

`browser-check.mjs` a besoin de Playwright et d’axe-core, qui ne sont pas des dépendances du site :

```bash
npm run servir &
PLAYWRIGHT_ROOT=/chemin/vers/un/dossier/avec/node_modules node scripts/browser-check.mjs --base http://127.0.0.1:4322
```

## Règles à respecter

- **Domaine canonique : `https://www.brittassist.fr`.** Le domaine nu redirige vers `www`.
- **Content-Security-Policy** : générée par Astro (`experimental.csp`) en balise `<meta>`, avec empreintes. Pas d’attribut `style=""`, pas de script en ligne. L’en-tête CSP de `vercel.json` ne porte que `frame-ancestors`, `base-uri` et `object-src` : ne jamais y ajouter `script-src` ni `style-src`, les deux politiques se cumuleraient.
- **Aucune preuve inventée** : ni témoignage, ni chiffre, ni cas client sans accord écrit. Les exemples sont illustratifs et signalés comme tels. Voir `CAS_CLIENTS_A_DOCUMENTER.md`.
- **Toute règle de droit citée renvoie à sa source officielle.** Le gate éditorial le vérifie.
- **Pas de page par ville.** Une seule implantation ; cinq pages de zone, pas davantage.

## Documentation

- `docs/final/FINAL_REPORT.md` — rapport d’ensemble du chantier d’octobre 2026
- `docs/site-audit/` — inventaire, état de référence, corrections, validation finale
- `docs/seo/` — intentions, matrice des 100 pages, maillage, audit technique, indexation
- `docs/seo-secretariat-50/` — la série « secrétariat externalisé » : état initial, inventaire, vivier d’idées, cannibalisation, plan des 50 pages, publication par lots, maillage, similarité, rapports
- `docs/sentinel/` — audits réalisés avec la boîte à outils SENTINEL
- `docs/articles/` — rubrique Articles : plan des 41 semaines, procédure, sources, dossiers de recherche, rapport de mise en place

— Site conçu et développé par Axel Dreano · [axdia.fr](https://www.axdia.fr)
