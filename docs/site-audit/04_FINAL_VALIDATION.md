# 04 — Validation finale

Date : 3 octobre 2026, entre 17 h 35 et 18 h 01 (heure de Paris). État testé : arbre de travail modifié, non commité.

Deux builds ont été validés :

- **production** (`npm run build`) : ce qui serait déployé aujourd'hui — 52 pages ;
- **aperçu** (`npm run build:apercu`) : production plus les 99 pages en attente de relecture — 151 pages.

Statuts : **PASS**, **PARTIAL**, **FAIL**, **NON TESTÉ**, **NON APPLICABLE**. Aucun PASS sans commande exécutée.

## Synthèse

| # | Contrôle | Production | Aperçu | Référence (avant) |
| --- | --- | --- | --- | --- |
| 1 | Build | PASS — 52 pages | PASS — 151 pages | PASS — 49 pages |
| 2 | Lint | NON APPLICABLE | NON APPLICABLE | NON APPLICABLE |
| 3 | Typecheck | PASS — 0 erreur | — | NON APPLICABLE (absent) |
| 4 | Tests unitaires | PASS — 16 sur 16 | — | NON APPLICABLE (absents) |
| 5 | Gate éditorial | PASS — 0 blocage | PASS | Absent |
| 6 | Audit SEO strict | PASS — 0 blocage, 2 avertissements | PASS — 0 blocage, 2 avertissements | PARTIAL — 1 règle bloquante, 30 avertissements |
| 7 | Liens internes | PASS | PASS | PASS |
| 8 | Sitemap, robots, canonical | PASS | PASS | PASS |
| 9 | Données structurées | PASS | PASS | PARTIAL |
| 10 | Navigateur réel, 5 écrans | PASS — 260 chargements | PASS — 755 chargements | PASS — 245 chargements |
| 11 | Accessibilité axe-core | PASS — 0 violation | PASS — 0 violation | FAIL — 8 violations |
| 12 | Thème clair | PASS — 15 pages, 0 violation | PASS | NON TESTÉ |
| 13 | Parcours clavier, menu, consentement | PASS — 4 sur 4 | PASS — 4 sur 4 | PASS — 4 sur 4 |
| 14 | Performance en laboratoire | PASS — 99 à 100 | — | PASS — 93 à 99 |
| 15 | Non-régression visuelle | PASS avec écarts expliqués | — | — |
| 16 | Liens externes | PARTIAL — 34 OK, 2 non concluants, 1 délai dépassé | — | PARTIAL |
| 17 | Vulnérabilités des dépendances | PARTIAL — 4 avis restants, dont 1 critique | — | FAIL — 10 avis |
| 18 | Secrets | PASS | — | PASS |
| 19 | SENTINEL, ré-audit | PARTIAL — aucune régression | — | PARTIAL |
| 20 | En-têtes et redirections chez l'hébergeur | NON TESTÉ | — | PARTIAL |
| 21 | Envoi réel des formulaires | NON TESTÉ | — | NON TESTÉ |
| 22 | E2E | NON APPLICABLE | — | NON APPLICABLE |

## Détail

### 1. Build — PASS

| | Référence | Production | Aperçu |
| --- | --- | --- | --- |
| Commande | `npm run build` | `npm run build` | `npm run build:apercu` |
| Pages | 49 | 52 | 151 |
| Durée annoncée par Astro | 2,15 s | 2,99 s | 3,37 s |
| Durée totale | 3,97 s | 5,84 s (avec le gate éditorial) | 5,00 s |
| Mémoire maximale | 456 Mo | 488 Mo | 520 Mo |
| Taille de `dist/` | 2,9 Mo, 71 fichiers | 3,6 Mo, 97 fichiers | 6,4 Mo, 196 fichiers |

Tripler le nombre de pages ajoute environ une seconde au build. Le site reste entièrement statique : ni rendu à la demande, ni fonction serveur, donc aucun effet sur le coût d'hébergement ni sur le temps de réponse.

### 3 à 5. Typecheck, tests, gate éditorial — PASS

- `npm run check` — 17 h 51 : `Result (54 files): 0 errors, 0 warnings, 0 hints`.
- `npm test` — 17 h 51 : `tests 16, pass 16, fail 0`.
- `node scripts/content-gate.mjs` — 17 h 51 : 104 guides, 14 métiers, 8 dossiers ; 92 requêtes principales distinctes pour les 92 nouveaux guides ; `Blocages : 0 · avertissements : 0`.

Le gate éditorial a servi : à sa première exécution il a relevé 13 titres trop longs, une règle de droit citée sans source et 13 pages sans lien vers une offre. Tout a été corrigé. Ses règles sur les « promesses » ont aussi produit des faux positifs (« retenue de garantie », « la meilleure façon ») : elles ont été resserrées sur les formulations réellement commerciales.

### 6 à 9. Audit SEO — PASS

Commande : `node scripts/seo-audit.mjs --strict`.

| | Référence | Production | Aperçu |
| --- | --- | --- | --- |
| Pages | 49 | 52 | 151 |
| Indexables | 48 | 50 | 50 |
| Brouillons | — | 0 | 99 |
| URL au sitemap | 48 | 50 | 50 |
| Blocages | 49 (une règle) | 0 | 0 |
| Avertissements | 30 | 2 | 2 |
| Profondeur maximale | 2 | 2 | 2 |

Avertissements restants, attendus : `/contact` (150 mots, page de formulaire) et `/mentions-legales` (liée depuis le pied de page seulement).

En aperçu, les 99 brouillons sont contrôlés comme des pages publiées : titre, description, H1, canonical, données structurées, liens, similarité. Aucun ne figure au sitemap.

### 10 à 13. Navigateur réel — PASS

Commande : `PLAYWRIGHT_ROOT=…/SENTINEL/AXDIA_OS/engines/audit node scripts/browser-check.mjs --base http://127.0.0.1:4322`.

Le site est servi par `scripts/serve-dist.mjs`, qui applique les en-têtes de `vercel.json`. La Content-Security-Policy est donc active deux fois, en en-tête et en balise, comme elle le sera en ligne.

| | Référence | Production | Aperçu |
| --- | --- | --- | --- |
| Heure | 16 h 08 | 17 h 58 | 17 h 42 |
| Pages × écrans | 49 × 5 | 52 × 5 | 151 × 5 |
| Chargements | 245 | 260 | 755 |
| Erreurs console, exceptions | 0 | 0 | 0 |
| Violations CSP | 0 | 0 | 0 |
| Requêtes échouées | 0 | 0 | 0 |
| Débordement horizontal | 0 | 0 | 0 |
| Violations axe-core (WCAG 2.0, 2.1, 2.2, niveaux A et AA) | 8, sur 4 pages | 0 | 0 |
| Thème clair, échantillon | non testé | 15 pages, 0 violation | 15 pages, 0 violation |
| Parcours | 4 sur 4 | 4 sur 4 | 4 sur 4 |

Écrans : 320, 390, 768, 1366 et 1920 pixels de large.

Parcours : la première tabulation atteint le lien d'évitement ; le menu mobile s'ouvre au clic et se ferme à Échap ; le thème clair est rétabli au chargement d'une autre page ; le bandeau de consentement s'affiche et aucun cookie de mesure n'est posé avant le choix.

**Limites de ce contrôle.** axe-core détecte une partie seulement des défauts d'accessibilité. N'ont pas été testés : un lecteur d'écran réel, le zoom à 200 %, la taille des cibles tactiles au niveau AA (24 × 24 px). L'outil SENTINEL relève 53 cibles sous 44 × 44 px, seuil du niveau AAA.

### 14. Performance en laboratoire — PASS

Lighthouse 13.5.0, émulation mobile, réseau bridé, serveur local `astro preview`. Mêmes conditions avant et après.

| Page | Perf. avant → après | Premier affichage (FCP) | Plus grand élément (LCP) | Speed Index | CLS | Poids |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | 93 → 99 | 1,9 → 1,4 s | 2,4 → 2,1 s | 5,2 → 1,4 s | 0 → 0 | 225 → 193 Ko |
| `/guides/comment-deleguer` | 99 → 100 | 1,7 → 1,2 s | 1,8 → 1,5 s | 1,7 → 1,2 s | 0,001 → 0 | 112 → 110 Ko |
| `/services/facturation` | 99 → 100 | 1,7 → 1,2 s | 1,9 → 1,4 s | 1,7 → 1,2 s | 0,001 → 0,001 | 102 → 100 Ko |
| `/assistante` (nouvelle) | 100 | 1,2 s | 1,5 s | 1,2 s | 0,001 | 100 Ko |
| `/a-propos` | 99 (non mesurée avant) | 1,2 s | 2,0 s | 1,2 s | 0,001 | 143 Ko |

Accessibilité, bonnes pratiques et SEO : 100 partout, avant comme après.

Ce sont des mesures de laboratoire, sur un serveur local. Elles ne valent pas des Core Web Vitals de terrain, qui ne se lisent que dans Search Console ou CrUX. L'INP, en particulier, ne se mesure pas en laboratoire ; le temps de blocage total, qui en est le meilleur indice, est de 0 ms.

### 15. Non-régression visuelle — PASS avec écarts expliqués

Comparaison au pixel du haut de dix pages existantes, en 1366 et 390 px, entre le build de référence et le build actuel.

| Pages | Écart | Explication |
| --- | --- | --- |
| `/tarifs`, `/services`, `/contact`, `/guides/comment-deleguer`, `/services/facturation` | 0,00 % | Rendu identique : les polices auto-hébergées sont les mêmes fichiers |
| `/`, `/a-propos`, `/private-office` | 1,6 à 29,8 % de pixels légèrement différents ; au plus 0,13 % d'écart marqué | Photos passées du JPEG au WebP : différences de compression, invisibles à l'œil |
| `/assistante/artisans-btp`, `/assistante-independante/nantes` | jusqu'à 22,8 % sur mobile | Fil d'Ariane corrigé : « Par métier » remplace « Services », et passe sur deux lignes à 390 px |

Le texte de chaque page existante a aussi été comparé avant et après : hors pied de page (trois liens ajoutés), fil d'Ariane, colonne « autres guides » et la phrase sur les polices, il est identique. Titres, descriptions, canonical et meta robots : seuls changent les seize titres et descriptions raccourcis.

### 16. Liens externes — PARTIAL

Commande : `node scripts/check-sources.mjs` — 17 h 23. 37 liens distincts.

| Verdict | Nombre | Détail |
| --- | --- | --- |
| Répond 200 | 34 | Dont toutes les sources Service-Public, impots.gouv.fr, CNIL, Urssaf, ministères |
| Non concluant | 2 | LinkedIn (999) et Légifrance (403) refusent les robots. À ouvrir à la main |
| Délai dépassé | 1 | Calendly, lien existant de `/contact` : 200 à 16 h 15, sans réponse à 17 h 23. À revérifier |

### 17. Vulnérabilités — PARTIAL

`npm audit` : 10 avis avant, 4 après `npm audit fix`.

| Reste | Gravité | Correctif |
| --- | --- | --- |
| `astro` | Critique | Astro 7.3.5, version majeure |
| `sharp` | Élevée | Idem |
| `http-cache-semantics` | Élevée | Idem |
| `esbuild` | Faible | Idem |

L'avis critique concerne l'optimisation d'images AVIF par Astro. Le site n'utilise pas cette fonction : aucune image ne passe par la chaîne de build, les variantes WebP sont produites à part par `scripts/images.mjs` à partir des photos du dépôt. L'exposition d'un visiteur est nulle — le site est statique. Le risque porte sur le poste de build, s'il traitait une image non fiable. Il reste réel : la montée de version est recommandée en priorité 1.

### 18. Secrets — PASS

`gitleaks` : aucun secret dans l'historique (25 commits), ni dans `src/`, `public/`, `scripts/`, `docs/`. Les 59 détections d'un balayage complet du dossier sont toutes dans `outils/`, dossier non suivi qui contient des jeux d'essai.

### 19. SENTINEL — PARTIAL, aucune régression

Voir [01_SENTINEL_SITE_AUDIT.md](../sentinel/01_SENTINEL_SITE_AUDIT.md), section « Ré-audit ».

### 20 à 22. Non testé

- **Chez l'hébergeur** : en-têtes, redirections, page 404 et cache n'ont été vérifiés qu'en local. Rien n'est déployé.
- **Formulaires** : un envoi réel déclencherait un e-mail et une écriture dans le back-office. Le champ piège n'a donc pas été éprouvé de bout en bout.
- **Tests de bout en bout applicatifs** : sans objet, le site n'a pas de parcours transactionnel.

## Régressions

**Aucune régression constatée** sur ce qui a été testé.

Changements de comportement voulus, à connaître :

1. `npm run build` échoue si l'audit trouve un défaut bloquant.
2. Le pied de page compte trois liens de plus, vers les hubs et l'index des guides.
3. Le fil d'Ariane des pages métier et zone affiche « Par métier » et « Zones d'intervention » au lieu de « Services ».
4. La colonne « Les autres guides » ne propose plus les quatre mêmes guides partout.
5. Les polices ne viennent plus de `fonts.bunny.net`.

## Preuves conservées

`docs/site-audit/data/` : audits SEO avant et après, contrôles en navigateur avant et après, mesures Lighthouse, vérification des liens externes.
