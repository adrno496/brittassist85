# 01 — Inventaire du site

Date : 3 octobre 2026 · Dépôt : `/Users/dreano/Document/brittassist85` · Branche `main`, commit `df48fb4` · État avant toute modification.

Chaque ligne indique comment le fait a été établi : **inspecté** (lecture du code), **exécuté** (commande lancée), **mesuré en direct** (requête sur la production).

## Ce qu'est ce site

BrittAssist est le site vitrine de Brittany Dreano, assistante de direction indépendante basée à La Roche-sur-Yon (Vendée). L'offre : un « Private Office » externalisé pour dirigeants, à partir de 700 € par mois, plus des missions sur devis. Le site ne vend rien en ligne : il doit amener une prise de contact (formulaire ou Calendly).

## Stack et exécution

| Élément | Constat | Preuve |
| --- | --- | --- |
| Framework | Astro 5.18.2, sortie statique, `build.format: 'file'`, `trailingSlash: 'never'` | inspecté (`astro.config.mjs`), exécuté (`npm ls`) |
| Intégrations | `@astrojs/sitemap` 3.7.3 | exécuté (`npm ls`) |
| Runtime local | Node 24.16.0, npm 11.13.0 | exécuté |
| Gestionnaire de paquets | npm, `package-lock.json` présent | inspecté |
| Langages | Astro, TypeScript (données), CSS pur, JavaScript sans framework | inspecté |
| Rendu | 100 % pré-rendu : aucun composant hydraté, aucune île | inspecté |
| Hébergement | Vercel, projet `brittassist85` | inspecté (`.vercel/repo.json`), mesuré en direct (`server: Vercel`) |
| CI/CD | Aucun workflow dans le dépôt ; déploiement par l'intégration Git de Vercel (déduit) | inspecté — pas de `.github/` |
| Variables d'environnement | Aucune utilisée par le code ; pas de fichier `.env` | inspecté |
| Base de données, authentification, paiement, stockage, API, fonctions serverless, middleware | **Aucun** | inspecté |
| PWA, manifest, service worker | **Aucun** | inspecté |
| Tests, lint, typecheck | **Aucun script** : `package.json` ne contient que `dev`, `start`, `build`, `preview`, `astro` | inspecté |
| Monitoring | Aucun, hors Google Analytics après consentement | inspecté |

## Architecture du code

```
src/
├── layouts/BaseLayout.astro      head, SEO, JSON-LD global, en-tête, pied de page
├── components/                   Header, Footer, Button, Monogram, WorkDemo
├── data/
│   ├── guides.ts                 12 guides          (1 208 lignes)
│   ├── metiers.ts                 8 pages métier    (625 lignes)
│   ├── prestations.ts            13 prestations     (708 lignes)
│   ├── zones.ts                   5 zones           (394 lignes)
│   └── dates.mjs                 dates de mise à jour, source unique sitemap + JSON-LD
├── pages/                        11 pages fixes + 4 gabarits dynamiques
└── styles/global.css             1 652 lignes, une seule feuille
public/                           robots.txt, llms.txt, consent.js, axdia-forms.js, images, security.txt
```

Le contenu des pages en série vit dans des fichiers de données typés, rendus par quatre gabarits. C'est une bonne base : ajouter une page revient à ajouter une entrée, pas un fichier.

## Routes construites : 49 pages

Établi par exécution (`npm run build`) puis analyse de `dist/` (`scripts/seo-audit.mjs`).

| Famille | Nombre | URL | Mots (moyenne) |
| --- | --- | --- | --- |
| Pages principales | 7 | `/`, `/private-office`, `/services`, `/tarifs`, `/guides`, `/a-propos`, `/contact` | 150 à 1 728 |
| Prestations | 13 | `/services/<slug>` | 517 |
| Métiers | 8 | `/assistante/<slug>` | 942 |
| Zones | 5 | `/assistante-independante/<slug>` | 796 |
| Guides | 12 | `/guides/<slug>` | 967 |
| Légales | 3 | `/mentions-legales`, `/cgv`, `/politique-confidentialite` | 302 à 1 036 |
| Non indexable | 1 | `/questionnaire` (`noindex,nofollow`, hors sitemap, hors navigation) | 228 |

48 pages indexables, 48 URL dans le sitemap : les deux listes coïncident.

## SEO existant

| Élément | État | Preuve |
| --- | --- | --- |
| `<title>` et meta description | Présents et uniques sur les 49 pages | exécuté |
| H1 | Un seul par page, tous distincts | exécuté |
| Canonical | Absolu, en `https://www.brittassist.fr`, sans extension, auto-référent | exécuté |
| Open Graph et Twitter | Complets sur toutes les pages, image de partage unique | exécuté |
| `lang="fr"` | Partout ; pas de hreflang, à juste titre (une seule langue) | exécuté |
| Sitemap | `sitemap-index.xml` + `sitemap-0.xml`, `<lastmod>` sur chaque URL ; `/sitemap.xml` réécrit vers l'index | inspecté, mesuré en direct (200) |
| `robots.txt` | Tout autorisé ; robots d'IA nommés explicitement ; ligne `Sitemap` correcte | inspecté, mesuré en direct |
| `llms.txt` | Présent, 103 lignes, décrit l'offre et les pages | inspecté |
| Données structurées globales | `WebSite`, `ProfessionalService` + `LocalBusiness`, `Person`, `WebPage` sur chaque page | exécuté (JSON valide sur 49 pages) |
| Données structurées par gabarit | `Service` + `FAQPage` + `BreadcrumbList` (prestations, métiers, zones) ; `Article` + `FAQPage` + `BreadcrumbList` (guides) ; `CollectionPage` + `ItemList` (index des guides) | exécuté |
| Redirections | 6 redirections 301 dans `vercel.json` ; `cleanUrls`, pas de barre finale | inspecté |
| Vérification Search Console | Fichier `google69ea2a7caaddce27.html` présent | inspecté |

## Sécurité et confidentialité

| Élément | État | Preuve |
| --- | --- | --- |
| En-têtes Vercel | `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security` (2 ans, preload) | inspecté, mesuré en direct |
| Content-Security-Policy | Générée par Astro (`experimental.csp`) et injectée en `<meta>`, avec empreintes SHA-256 ; ni `unsafe-inline` ni `unsafe-eval`. **Aucun en-tête HTTP CSP.** | inspecté, mesuré en direct |
| Cache | `immutable`, un an, sur `/images/` et `/_astro/` | inspecté |
| Secrets | Aucun dans l'arbre de travail ni dans les 25 commits | exécuté (`gitleaks`) |
| `security.txt` | Présent, expire le 14/06/2027 ; son champ `Canonical` désigne le domaine sans `www` | inspecté |
| Consentement | Bandeau maison ; Google Analytics (`G-23YNXWSP1S`) chargé seulement après acceptation, Consent Mode v2, refus par défaut | inspecté, exécuté (aucun cookie `_ga` avant choix) |
| Formulaires | `/contact` et `/questionnaire`, envoyés à FormSubmit (e-mail) et, en parallèle, à AxdiaOS (`axdiaos.vercel.app`) ; case RGPD obligatoire ; `_captcha` désactivé, **pas de champ piège anti-spam** | inspecté |
| Sous-traitants déclarés | Vercel, FormSubmit, Calendly, Google Analytics, AxdiaOS, Bunny Fonts — tous cités dans la politique de confidentialité | inspecté |

## Médias et polices

- 11 fichiers dans `public/images/` (1,3 Mo). Cinq sont affichés par une balise `<img>`, tous avec `alt`, `width`, `height` et un `loading` adapté. Formats : JPEG uniquement, sans `srcset`.
- Quatre images ne sont référencées nulle part dans `src/` : `blazer.jpeg`, `brittany-enthousiaste.jpg`, `brittany-pro-1.jpg`, `brittany-pro-2.jpg` (654 Ko au total). Elles sont publiées mais inutilisées. Non supprimées : la décision appartient au propriétaire.
- Polices Instrument Serif et Manrope servies par `fonts.bunny.net` : une feuille de style externe bloquante, plus deux préchargements.

## Écarts entre le dépôt et la production

Mesuré en direct le 3 octobre 2026 à 16 h 00.

| Constat | Détail |
| --- | --- |
| Le domaine canonique est bien `www` | `https://www.brittassist.fr/` → 200 ; `https://brittassist.fr/` → 308 vers `www` ; `http://` → 308 vers `https://`. |
| La production est en retard sur le dépôt | En-tête `last-modified: 30 sept. 2026`. `/tarifs` y renvoie encore vers `/#accompagnement` alors que la page existe en local ; `/assistante-administrative-vendee` y mène à `/services`, pas à la page Vendée. `main` a deux commits d'avance sur le dépôt distant `bdassisttest` et un historique différent de `brittassist85/main`. |
| Trois dépôts distants | `bdassisttest`, `brittassist-refonte`, `brittassist85`. Lequel déclenche le déploiement n'est pas établi depuis le code. |

## Défauts détectés

| # | Défaut | Gravité | Preuve |
| --- | --- | --- | --- |
| 1 | `/assistante` et `/assistante-independante` renvoient **404** alors que 13 pages vivent sous ces chemins | Moyenne | mesuré en direct ; aucune page `index` dans `src/pages/assistante*/` |
| 2 | Fil d'Ariane incohérent sur 13 pages : le fil visible affiche « Services », le `BreadcrumbList` annonce « Pour qui » ou « Zones d'intervention » et pointe vers une ancre (`/services#pour-qui`) | Moyenne | inspecté, exécuté |
| 3 | Pas de page 404 personnalisée : l'hébergeur affiche la sienne | Faible | inspecté |
| 4 | Le script de thème en ligne n'a pas son empreinte dans la CSP. Il fonctionne aujourd'hui parce qu'il précède la balise CSP dans le `<head>` ; il casserait si l'ordre changeait ou si la CSP passait en en-tête HTTP | Moyenne (latente) | exécuté : empreinte absente sur 49 pages, thème pourtant rétabli en navigateur |
| 5 | Contraste insuffisant du sur-titre doré sur fond rose : 4,2:1 pour 4,5:1 exigé (WCAG 1.4.3) | Moyenne | exécuté (axe-core, 4 pages : `/`, `/a-propos`, `/private-office`, `/tarifs`) |
| 6 | 11 meta descriptions dépassent 165 caractères, 4 titres dépassent 70 caractères | Faible | exécuté |
| 7 | Les 13 pages de prestation reçoivent peu de liens : de 2 à 10 pages les citent, 8 sont à deux clics de l'accueil | Moyenne | exécuté |
| 8 | Le pied de page liste les 12 guides sur toutes les pages : ce bloc ne tiendra pas avec dix fois plus de contenus | Structurelle | inspecté |
| 9 | « Les autres guides » affiche toujours les quatre mêmes premiers guides, quel que soit le sujet de la page | Faible | inspecté (`autres.slice(0, 4)`) |
| 10 | 10 vulnérabilités dans les dépendances de build, dont 1 critique dans Astro | Voir le rapport de référence | exécuté (`npm audit`) |
| 11 | README obsolète : il décrit des pages et des composants qui n'existent plus (`/methode`, `/ecosysteme`, `RegistryBar`…) | Faible | inspecté |
| 12 | Lien `service-public.fr` redirigé vers `service-public.gouv.fr` ; lien Urssaf sur la DPAE en erreur 500 au moment du test | Faible | exécuté (`curl`) |
| 13 | Aucun DMARC sur `brittassist.fr` | Faible | exécuté (SENTINEL, module DNS) |

**Non détecté** après contrôle : lien interne cassé (0), page orpheline (0), titre, description ou H1 en double (0), page indexable absente du sitemap (0), erreur console (0 sur 245 chargements), débordement horizontal (0 sur cinq largeurs d'écran), JSON-LD invalide (0), contenu fortement similaire entre deux pages (aucune paire au-dessus de 30 %).

**Non testé** à ce stade : Core Web Vitals de terrain, couverture d'indexation réelle, positions et clics (pas d'accès à Search Console), lecteur d'écran réel, envoi effectif des formulaires (il déclencherait un e-mail et une écriture dans AxdiaOS).
