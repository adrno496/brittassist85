# BrittAssist — site vitrine

Site de [brittassist.fr](https://www.brittassist.fr) : assistance de direction externalisée (« Private Office ») par Brittany Dreano, à La Roche-sur-Yon.

Site statique Astro 5, déployé sur Vercel. Aucun backend, aucune base de données, aucune variable d’environnement.

## Commandes

```bash
npm install
npm run dev            # développement, http://localhost:4321
npm run build          # build de production : seules les pages relues sont générées
npm run build:apercu   # build d’aperçu : toutes les pages, brouillons en noindex
npm run preview        # sert le dernier build
npm run servir         # sert dist/ en appliquant vercel.json (en-têtes, redirections, 404)

npm run check          # contrôle de types (astro check)
npm test               # tests du registre de relecture et de l’audit
npm run qa             # gate éditorial + build + audit SEO strict
npm run qa:apercu      # la même chose sur le build d’aperçu
npm run qa:navigateur  # contrôles en navigateur réel (voir plus bas)
npm run docs:seo       # régénère docs/seo/02, 03 et 09
```

## Structure

```
src/
├── layouts/BaseLayout.astro      head, SEO, JSON-LD global, en-tête, pied de page
├── components/                   Header, Footer, Fil (fil d’Ariane), Blocs, Button, Monogram, WorkDemo
├── lib/seo.ts                    sérialisation JSON-LD, ancres, fil d’Ariane, dates
├── data/
│   ├── guides.ts                 les 12 premiers guides + le modèle de contenu
│   ├── dossiers/*.ts             les guides d’octobre 2026, un fichier par dossier
│   ├── bibliotheque.ts           réunit tous les guides ; dossiers, piliers, pages voisines
│   ├── metiers.ts                pages métier — metiers-publies.ts filtre celles du build
│   ├── prestations.ts, zones.ts  pages de prestation et de zone
│   ├── relectures.mjs            registre des pages relues (voir ci-dessous)
│   ├── publication.mjs           qui est publié, qui est brouillon
│   ├── mode.mjs                  lecture de BROUILLONS=1, et rien d’autre
│   ├── dates.mjs                 dates de mise à jour : sitemap et JSON-LD
├── pages/                        pages fixes, hubs et gabarits dynamiques
└── styles/global.css             une seule feuille
public/                           polices, images, robots.txt, llms.txt, consent.js
scripts/                          contrôles de qualité (voir ci-dessous)
docs/                             audits, stratégie SEO, rapports
```

## Publier une page : le registre de relecture

Les guides et pages métier ajoutés en octobre 2026 ont été préparés avec l’aide d’un outil d’IA. Ils ne sont **pas publiés** tant qu’une personne ne les a pas relus : Google le demande, et ces pages parlent au nom de Brittany Dreano.

Tant qu’une page n’est pas inscrite dans `src/data/relectures.mjs` :

- `npm run build` ne la génère pas — elle n’existe pas en ligne ;
- `npm run build:apercu` la génère en `noindex`, avec un bandeau « brouillon », hors sitemap.

Pour publier une page :

1. `npm run build:apercu && npm run preview`, puis lire la page en entier.
2. Corriger ce qui doit l’être dans son fichier de `src/data/dossiers/` (ou `metiers.ts`).
3. Ajouter une ligne dans `src/data/relectures.mjs` :
   ```js
   '/guides/mentions-obligatoires-facture': '2026-10-06',
   ```
4. `npm run qa` : si le contrôle passe, la page est prête à être déployée.

La date inscrite devient la date de publication, le `<lastmod>` du sitemap, et s’affiche sur la page (« Relu par Brittany Dreano le … »). N’y inscrire qu’une page réellement relue.

Publier un pilier (`/guides/<slug-du-dossier>`) fait apparaître le dossier dans l’index des guides et dans le pied de page. La page `/methode-editoriale` passe elle aussi par le registre.

## Contrôles de qualité

| Script | Ce qu’il vérifie |
| --- | --- |
| `scripts/content-gate.mjs` | Les fiches, avant le build : requêtes principales distinctes, cadrage complet, liens vers des routes existantes, règle de droit sans source, promesses de résultat |
| `scripts/seo-audit.mjs` | Le HTML construit : titres, descriptions, H1, canonical, Open Graph, JSON-LD, CSP, liens et ancres, pages orphelines, profondeur, similarité, sitemap, robots, redirections |
| `scripts/quality-gate.mjs` | Branche l’audit sur le build : un blocage fait échouer `npm run build` |
| `scripts/browser-check.mjs` | Navigateur réel, cinq largeurs d’écran : console, CSP, débordement, axe-core WCAG 2.2 AA, clavier, consentement |
| `scripts/check-sources.mjs` | Les liens externes répondent-ils encore ? |
| `scripts/serve-dist.mjs` | Sert le build avec les règles de `vercel.json` |
| `scripts/images.mjs` | Régénère les variantes WebP des photos |
| `scripts/docs-seo.mjs` | Régénère les tableaux de `docs/seo/` |

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
- `docs/sentinel/` — audits réalisés avec la boîte à outils SENTINEL

— Site conçu et développé par Axel Dreano · [axdia.fr](https://www.axdia.fr)
