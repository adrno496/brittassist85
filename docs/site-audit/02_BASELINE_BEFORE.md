# 02 — État de référence avant modification

Dépôt au commit `df48fb4`, branche `main`, arbre de travail propre (deux dossiers non suivis : `.plugcode/`, `outils/`). Toutes les commandes ont été lancées le 3 octobre 2026, heure de Paris.

Statuts : **PASS** (testé, conforme), **PARTIAL** (testé, écarts mineurs), **FAIL** (testé, non conforme), **NON TESTÉ**, **NON APPLICABLE**.

## Synthèse

| # | Contrôle | Statut | Résultat en une ligne |
| --- | --- | --- | --- |
| 1 | Dépendances installées | PASS | 2 dépendances directes, arbre cohérent |
| 2 | Build | PASS | 49 pages en 2,15 s |
| 3 | Lint | NON APPLICABLE | aucun outil de lint dans le projet |
| 4 | Typecheck | NON APPLICABLE | `tsconfig` strict présent, mais aucun vérificateur installé |
| 5 | Tests unitaires, d'intégration, E2E | NON APPLICABLE | aucun test dans le projet |
| 6 | Vulnérabilités des dépendances | FAIL | 10 avis : 1 critique, 8 élevés, 1 faible |
| 7 | Secrets | PASS | aucun secret dans l'arbre ni dans l'historique |
| 8 | Audit SEO du build (49 pages) | PARTIAL | 0 défaut SEO bloquant ; 1 fragilité CSP ; 30 avertissements |
| 9 | Liens internes | PASS | 0 lien cassé, 0 ancre cassée, 0 page orpheline |
| 10 | Sitemap et robots | PASS | 48 URL, toutes indexables, canoniques et datées |
| 11 | Données structurées | PARTIAL | JSON valide partout ; fil d'Ariane vers des ancres sur 13 pages |
| 12 | Navigateur réel, 5 largeurs d'écran | PASS | 245 chargements, 0 erreur console, 0 débordement |
| 13 | Accessibilité (axe-core, WCAG 2.2 AA) | FAIL | contraste insuffisant sur 4 pages |
| 14 | Parcours clavier et consentement | PASS | 4 parcours sur 4 |
| 15 | Performance en laboratoire (Lighthouse) | PASS | 93, 99 et 99 sur trois pages types |
| 16 | Production : redirections et statuts | PARTIAL | hôtes corrects ; 2 hubs en 404 ; production en retard sur le dépôt |
| 17 | Production : en-têtes, TLS, DNS (SENTINEL) | PARTIAL | 95/100 ; pas d'en-tête CSP ; pas de DMARC |
| 18 | Audits SENTINEL sur le code | PARTIAL | voir [01_SENTINEL_SITE_AUDIT.md](../sentinel/01_SENTINEL_SITE_AUDIT.md) |
| 19 | Core Web Vitals de terrain, indexation réelle | NON TESTÉ | aucun accès Search Console ni CrUX |

## Détail des contrôles

### 1. Dépendances — PASS

- Commande : `npm ls --depth=0` — 15 h 59.
- Résultat : `@astrojs/sitemap@3.7.3`, `astro@5.18.2`. Aucune dépendance manquante ou en conflit.
- `npm outdated` : `@astrojs/sitemap` 3.7.3 → 3.7.4 ; `astro` 5.18.2, dernière version 7.3.5 (deux versions majeures de retard).

### 2. Build — PASS

- Commande : `/usr/bin/time -l npm run build` — 15 h 59.
- Résultat : `49 page(s) built in 2.15s`, sitemap généré. Temps total 3,97 s ; mémoire résidente maximale 456 Mo.
- Sortie : 2,9 Mo, 71 fichiers, une feuille CSS de 43 Ko.

### 3 à 5. Lint, typecheck, tests — NON APPLICABLE

- Aucun script, aucune configuration, aucun fichier de test. `tsconfig.json` étend `astro/tsconfigs/strict`, mais `@astrojs/check` n'est pas installé : le typage n'est jamais vérifié.
- Impact : aucune protection automatique contre une régression. C'est le premier manque à combler avant d'ajouter du contenu en volume.

### 6. Vulnérabilités des dépendances — FAIL

- Commande : `npm audit` et `npm audit --json` — 15 h 59.
- Résultat : 10 paquets concernés.

| Paquet | Gravité | Avis principal | Correctif |
| --- | --- | --- | --- |
| `astro` (direct) | **Critique** | Exécution de code à distance par l'optimisation d'images AVIF (GHSA-26w7-cxv4-gfx2, < 7.2.8) ; plus 9 avis XSS, SSRF et îles serveur | `astro@7.3.5`, version majeure |
| `sharp` | Élevée | Failles héritées de libvips et libheif | via Astro 7 |
| `http-cache-semantics` | Élevée | Divulgation de réponses en cache | via Astro 7 |
| `esbuild` | Faible | Lecture de fichiers par le serveur de développement sous Windows | via Astro 7 |
| `devalue`, `js-yaml`, `nanoid`, `postcss`, `smol-toml`, `svgo` | Élevée | Déni de service ou lecture de fichiers `.map` | `npm audit fix`, sans rupture |

- Impact réel, **déduit** de l'architecture : le site est entièrement statique. Il n'y a ni rendu serveur, ni île serveur, ni point d'accès d'optimisation d'images en production, et le code n'utilise ni `define:vars`, ni transitions de vue, ni propriétés étalées sur des données externes. Les failles Astro ne sont donc pas atteignables par un visiteur. Elles concernent la chaîne de build et le serveur de développement. Le risque est limité, mais il existe : il ne faut pas faire traiter d'images non fiables par cette version.

### 7. Secrets — PASS

- Commande : `gitleaks detect --source . --no-banner --redact` — 15 h 59.
- Résultat : `25 commits scanned`, `no leaks found`.
- Recoupement SENTINEL : `BR360-SEC-002` PASS.

### 8. Audit SEO du build — PARTIAL

- Commande : `node scripts/seo-audit.mjs --json … --md …` — 16 h 03. Le script a été écrit pour cet audit ; il lit le dossier `dist/`.
- Résultat : 49 pages, 48 indexables, 776 mots en moyenne, profondeur maximale 2 clics.

Bloquant :

| Règle | Pages | Détail |
| --- | --- | --- |
| `csp-empreinte` | 49 | Le script de thème en ligne (`sha256-m/iijG6H…`) est absent de la liste `script-src`. Il s'exécute quand même, car il précède la balise CSP dans le `<head>`. Fragilité, pas panne. |

Un second signalement (« canonical de l'accueil différent du sitemap ») était un faux positif du script : `https://www.brittassist.fr` et `https://www.brittassist.fr/` désignent la même URL. Le script a été corrigé.

Avertissements :

| Règle | Pages | Détail |
| --- | --- | --- |
| `fil-ariane-ancre` | 13 | Le `BreadcrumbList` des pages métier et zone pointe vers `/services#pour-qui` et `/services#zones` |
| `description-longue` | 11 | de 167 à 194 caractères |
| `title-long` | 4 | de 72 à 81 caractères |
| `contenu-mince` | 1 | `/contact`, 150 mots — normal pour une page de formulaire |
| `sans-lien-contextuel` | 1 | `/mentions-legales`, liée depuis le pied de page seulement — normal |

### 9. Liens internes — PASS

- Même commande. 0 lien cassé, 0 ancre cassée, 0 page orpheline, 0 page inatteignable.
- Point faible mesuré : les pages de prestation reçoivent de 2 à 10 pages entrantes, contre 48 pour les pages listées dans le pied de page.
- Liens externes : 11 domaines contrôlés par `curl` à 16 h 15. Neuf répondent 200. `linkedin.com` répond 999 (blocage des robots, non concluant). La page Urssaf sur la DPAE répond 500. `service-public.fr` redirige vers `service-public.gouv.fr`.

### 10. Sitemap et robots — PASS

- 48 URL dans `sitemap-0.xml`, toutes sur `https://www.brittassist.fr`, toutes construites, indexables et égales à leur canonical ; toutes portent un `<lastmod>` valide et non futur.
- `robots.txt` : `Allow: /`, ligne `Sitemap` sur le bon hôte.
- Mesuré en direct : `/robots.txt`, `/sitemap.xml`, `/sitemap-index.xml`, `/sitemap-0.xml`, `/llms.txt` répondent 200.

### 11. Données structurées — PARTIAL

- 49 pages, tous les blocs JSON-LD sont du JSON valide.
- Les questions du balisage `FAQPage` sont toutes présentes dans le texte visible. Les `Article` ont titre, dates et auteur.
- Écart : 13 fils d'Ariane structurés désignent une ancre au lieu d'une page, et diffèrent du fil affiché.
- Non testé : le test de résultats enrichis de Google (outil en ligne).

### 12. Navigateur réel — PASS

- Commande : `PLAYWRIGHT_ROOT=…/SENTINEL/AXDIA_OS/engines/audit node scripts/browser-check.mjs` — 16 h 08, sur `astro preview`.
- 49 pages × 5 écrans (320, 390, 768, 1366 et 1920 px) = 245 chargements en 135 s.
- 0 erreur console, 0 exception JavaScript, 0 requête échouée, 0 violation CSP, 0 débordement horizontal, H1 visible partout.

### 13. Accessibilité — FAIL

- Même commande ; axe-core, règles `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa`, en mobile et en bureau.
- 8 violations, une seule règle : `color-contrast` (grave), sur `/`, `/a-propos`, `/private-office` et `/tarifs`. Élément : le sur-titre `.eyebrow` dans les sections à fond rose (`#8A6A2E` sur `#F4E9E7`, soit 4,2:1 pour 4,5:1 exigé).
- 45 pages sans aucune violation.
- Une première passe annonçait 91 violations : c'était une erreur de mesure du script (contraste relevé pendant l'animation d'apparition). Corrigée avant de retenir un chiffre.
- Non testé : lecteur d'écran réel, zoom à 200 %.

### 14. Parcours — PASS

| Parcours | Résultat |
| --- | --- |
| La première tabulation atteint le lien d'évitement | PASS |
| Menu mobile : ouverture au clic, fermeture à Échap, `aria-expanded` à jour | PASS |
| Thème clair rétabli au chargement d'une autre page | PASS |
| Bandeau de consentement affiché, aucun cookie de mesure avant le choix | PASS |

### 15. Performance en laboratoire — PASS

- Commande : `npx -y lighthouse@latest <url> --only-categories=performance,accessibility,best-practices,seo --chrome-flags="--headless=new"` — 16 h 12. Lighthouse 13.5.0, émulation mobile, réseau bridé, sur le serveur local.

| Page | Perf. | Access. | Bonnes pratiques | SEO | FCP | LCP | TBT | CLS | Poids |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | 93 | 100 | 100 | 100 | 1,9 s | 2,4 s | 0 ms | 0 | 225 Ko |
| `/guides/comment-deleguer` | 99 | 100 | 100 | 100 | 1,7 s | 1,8 s | 0 ms | 0,001 | 112 Ko |
| `/services/facturation` | 99 | 100 | 100 | 100 | 1,7 s | 1,9 s | 0 ms | 0,001 | 102 Ko |

- Pistes relevées : ressources bloquant le rendu (gain estimé de 0,96 à 1,12 s, feuille de polices externe en tête) ; images de l'accueil (69 Ko à gagner).
- Ce sont des mesures de laboratoire sur un serveur local. Elles ne valent pas des Core Web Vitals de terrain.

### 16. Production : redirections et statuts — PARTIAL

- Commande : `curl -sI` et `curl -s -o /dev/null -w …` — 16 h 00.

| URL | Réponse |
| --- | --- |
| `https://www.brittassist.fr/` | 200 |
| `https://brittassist.fr/` | 308 → `https://www.brittassist.fr/` |
| `http://brittassist.fr/` | 308 → `https://brittassist.fr/` (puis vers `www` : deux sauts) |
| `http://www.brittassist.fr/` | 308 → `https://www.brittassist.fr/` |
| `/guides/` | 308 → `/guides` |
| `/index.html` | 308 → `/` |
| `/assistante`, `/assistante-independante` | **404** |
| `/tarifs` | 308 → `/#accompagnement` (version déployée antérieure au dépôt) |
| `/Tarifs` | 404 — les URL sont sensibles à la casse, comportement attendu |
| `/page-inexistante-xyz` | 404, page par défaut de l'hébergeur |

### 17. Production : en-têtes, TLS, DNS — PARTIAL

- Commande SENTINEL : `node dist/cli.js https://www.brittassist.fr --intelligence-mode off -o json` — 16 h 11. Contrôles passifs seulement.
- Score de posture 95/100, couverture 100 % des cinq modules demandés.

| Module | Score | Constats |
| --- | --- | --- |
| En-têtes | 80 | En-tête `Content-Security-Policy` absent (la CSP est en balise `<meta>`) |
| TLS | 100 | — |
| DNS | 92 | DMARC absent ; aucun enregistrement CAA (information) |
| Cookies | 100 | Aucun cookie avant consentement |
| Exposition | 100 | `/wp-admin` et `/wp-login.php` répondent 403 (information) |

### 19. Non testé

- Core Web Vitals de terrain (CrUX), couverture d'indexation, requêtes, clics et positions : aucun accès à Search Console ni à Bing Webmaster Tools.
- Test de résultats enrichis de Google.
- Envoi réel des formulaires.
- Scanners Trivy, Semgrep et OSV : bloqués par la politique de bac à sable de SENTINEL ou absents de la machine.
