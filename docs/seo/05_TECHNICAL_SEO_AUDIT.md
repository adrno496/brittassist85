# 05 — Audit SEO technique

Date : 3 octobre 2026. « Avant » : commit `df48fb4`, 49 pages. « Après » : arbre de travail modifié, build de production, 52 pages.

Statut de chaque ligne : **TESTÉ** (commande exécutée), **VÉRIFIÉ EN DIRECT** (requête sur la production), **INSPECTÉ** (lecture du code), **NON TESTÉ**.

Outils : `scripts/seo-audit.mjs` sur le dossier `dist/` ; `curl` sur la production et sur un serveur local qui applique `vercel.json` (`scripts/serve-dist.mjs`) ; Playwright pour le rendu.

## Synthèse avant / après

| Sujet | Avant | Après | Statut |
| --- | --- | --- | --- |
| Pages construites | 49 | 52 en production · 151 en aperçu | TESTÉ |
| Pages indexables | 48 | 50 | TESTÉ |
| URL dans le sitemap | 48 | 50 | TESTÉ |
| Blocages de l'audit | 1 règle sur 49 pages (empreinte CSP) | 0 | TESTÉ |
| Avertissements de l'audit | 30 | 2 | TESTÉ |
| Hubs en erreur 404 | 2 (`/assistante`, `/assistante-independante`) | 0 | VÉRIFIÉ EN DIRECT avant · TESTÉ en local après |
| Fils d'Ariane structurés vers une ancre | 13 | 0 | TESTÉ |
| Meta descriptions de plus de 165 caractères | 11 | 0 | TESTÉ |
| Titres de plus de 70 caractères | 4 | 0 | TESTÉ |
| Liens internes cassés | 0 | 0 | TESTÉ |
| Pages orphelines | 0 | 0 | TESTÉ |
| Profondeur maximale depuis l'accueil | 2 clics | 2 clics | TESTÉ |
| Page 404 personnalisée | Non | Oui, en `noindex` | TESTÉ |

Les deux avertissements restants sont attendus : `/contact` compte 150 mots (c'est un formulaire) et `/mentions-legales` n'est liée que depuis le pied de page.

## Exploration et indexabilité

| Contrôle | Résultat | Statut |
| --- | --- | --- |
| Codes de réponse | `/`, pages principales, sitemap, `robots.txt`, `llms.txt`, `security.txt` : 200 | VÉRIFIÉ EN DIRECT |
| `robots.txt` | `Allow: /` pour tous ; robots d'IA nommés ; `Sitemap:` sur `https://www.brittassist.fr` ; aucun `Disallow` | TESTÉ |
| Meta robots | `noindex,nofollow` sur `/questionnaire` et `/404` ; `noindex,follow` sur les brouillons, en aperçu seulement ; rien ailleurs | TESTÉ |
| En-tête `X-Robots-Tag` | Absent de la réponse de production | VÉRIFIÉ EN DIRECT |
| `noindex` accidentel | Aucun : les 50 pages indexables n'ont pas de meta robots | TESTÉ |
| Canonical | Présent sur chaque page, absolu, en `https://www.brittassist.fr`, égal à l'adresse de la page, sans extension ni barre finale | TESTÉ |
| Canonical en double ou croisé | Aucun | TESTÉ |
| Contenu accessible seulement en JavaScript | Aucun : le site est entièrement pré-rendu, sans composant hydraté | INSPECTÉ |
| Liens | Uniquement des balises `<a href>` ; aucune navigation par script | INSPECTÉ |
| Pagination | Sans objet : aucune liste paginée | INSPECTÉ |
| Paramètres d'URL | Un seul : `?sent=true` après l'envoi d'un formulaire. Le canonical de `/contact` l'ignore | INSPECTÉ |
| `http` → `https` | 308 | VÉRIFIÉ EN DIRECT |
| Domaine nu → `www` | 308 | VÉRIFIÉ EN DIRECT |
| Redirections en chaîne | **Une** : `http://brittassist.fr` → `https://brittassist.fr` → `https://www.brittassist.fr`. Deux sauts au lieu d'un. Réglage du domaine chez l'hébergeur | VÉRIFIÉ EN DIRECT |
| Boucles de redirection | Aucune ; le quality gate bloque toute chaîne ou cible morte dans `vercel.json` | TESTÉ |
| Barre finale | `/guides/` → 308 → `/guides` | VÉRIFIÉ EN DIRECT |
| Extension `.html` | `/index.html` → 308 → `/` | VÉRIFIÉ EN DIRECT |
| Casse | `/Tarifs` → 404. Les adresses sont en minuscules partout ; aucun lien interne en majuscules | VÉRIFIÉ EN DIRECT |
| Adresse inconnue | 404, avec la page par défaut de l'hébergeur avant ; avec `404.astro` après | VÉRIFIÉ EN DIRECT avant · TESTÉ en local après |

### Écart entre la production et le dépôt

La production servait, le 3 octobre, une version antérieure au dépôt local : `/tarifs` y redirige vers `/#accompagnement` alors que la page existe dans le code, et `/assistante-administrative-vendee` y mène à `/services` et non à la page Vendée. **Rien de ce chantier n'a été déployé.** Les contrôles « après » sont donc faits en local.

## Métadonnées

Contrôlées sur les 50 pages indexables et, en aperçu, sur les 99 brouillons.

| Élément | Règle | Résultat |
| --- | --- | --- |
| `<title>` | Présent, unique, 70 caractères au plus | 0 écart |
| Meta description | Présente, unique, 70 à 165 caractères | 0 écart |
| `<h1>` | Exactement un, unique sur le site | 0 écart |
| Hiérarchie des titres | Aucun saut de niveau | 0 écart |
| Canonical | Voir plus haut | 0 écart |
| Open Graph | `og:title`, `og:description`, `og:url`, `og:image`, `og:type` présents ; `og:url` égal au canonical | 0 écart |
| Twitter | `twitter:card` présent | 0 écart |
| Langue | `lang="fr"` | 0 écart |
| `hreflang` | Absent, à juste titre : une seule langue | Sans objet |

### Titres et descriptions raccourcis

Seize métadonnées de pages existantes ont été réécrites pour tenir dans les limites, sans changer le sens. Le détail, avant et après, est dans [03_FIXES_IMPLEMENTED.md](../site-audit/03_FIXES_IMPLEMENTED.md).

## HTML

| Contrôle | Résultat | Statut |
| --- | --- | --- |
| Repères | `<nav>` nommées, `<main id="main-content">`, `<footer>` | INSPECTÉ, TESTÉ (axe-core) |
| Lien d'évitement | Premier élément atteint au clavier | TESTÉ |
| Contenu principal dans le HTML | Oui, sans script | INSPECTÉ |
| Tableaux | `<caption>`, `<th scope>` ; défilement dans leur cadre, jamais de la page | TESTÉ |
| Ancres du sommaire | Chaque intertitre des nouveaux guides a un identifiant ; aucune ancre cassée | TESTÉ |
| Attributs `style=""` | 0 — interdits par la CSP, et bloqués par l'audit | TESTÉ |

## Sitemap

| Contrôle | Résultat |
| --- | --- |
| Fichiers | `sitemap-index.xml` → `sitemap-0.xml` ; `/sitemap.xml` réécrit vers l'index |
| Contenu | 50 URL : toutes construites, indexables, égales à leur canonical |
| Exclusions | `/questionnaire`, `/404`, tous les brouillons |
| `<lastmod>` | Présent sur chaque URL, valide, jamais dans le futur ; même source que le `dateModified` des données structurées |
| `<priority>`, `<changefreq>` | Absents : Google les ignore |
| Cohérence | Une page indexable absente du sitemap, ou une page en `noindex` présente, fait échouer le build |

Les dates : `/assistante`, `/assistante-independante` et `/guides` portent le 3 octobre 2026, date de leur création ou de leur réorganisation réelle. Les pages dont seules les métadonnées ou le pied de page ont changé gardent leur date. Une page relue portera la date de sa relecture.

## Images

| Contrôle | Avant | Après |
| --- | --- | --- |
| Attribut `alt` | Présent sur les 5 images | Inchangé |
| `width` et `height` | Présents | Inchangés |
| `loading` | `eager` + `fetchpriority="high"` sur l'image principale, `lazy` ailleurs | Inchangé |
| Format | JPEG seul | WebP en deux largeurs, JPEG en repli (`<picture>`) |
| Poids de l'image principale de l'accueil sur mobile | 81 Ko | 27 Ko |
| Variantes déclarées dans `srcset` | — | Leur existence est vérifiée par l'audit |

## Ce qui n'a pas été testé

- La couverture d'indexation réelle, les canoniques retenus par Google, les exclusions : Search Console.
- Le rendu par Googlebot : outil d'inspection d'URL.
- Les en-têtes et redirections **après déploiement** : les contrôles « après » sont locaux.
- Les journaux du serveur et le budget d'exploration : sans accès.
