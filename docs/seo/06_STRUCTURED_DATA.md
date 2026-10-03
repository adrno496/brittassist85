# 06 — Données structurées

Date : 3 octobre 2026. Format : JSON-LD, dans le `<head>`, sérialisé par l'utilitaire `jsonLd()` de `src/lib/seo.ts`.

## Règles suivies

1. **Rien qui ne soit visible sur la page.** Une donnée structurée décrit le contenu affiché ; elle ne le complète pas.
2. **Rien d'inventé** : ni note, ni avis, ni nombre de clients, ni récompense. Aucun `AggregateRating`, aucun `Review`.
3. **Un type par réalité** : un guide est un `Article`, un hub est une `CollectionPage`, une page de prestation est un `Service`.
4. **Une seule source** pour le fil d'Ariane visible et le `BreadcrumbList`.
5. **Aucune promesse de résultat enrichi.** Le balisage aide les moteurs à comprendre la page ; il ne garantit aucun affichage particulier.

## Ce qui est publié, par gabarit

| Gabarit | Types | Remarque |
| --- | --- | --- |
| Toutes les pages (`BaseLayout`) | `WebSite`, `ProfessionalService` + `LocalBusiness`, `Person`, `WebPage` | Inchangé, sauf `lastReviewed` et `reviewedBy` ajoutés à `WebPage` quand la page est inscrite au registre de relecture |
| Guides `/guides/<slug>` | `Article`, `FAQPage`, `BreadcrumbList` | Nouveaux guides : fil à trois niveaux (Guides → dossier → page) |
| Piliers | `Article`, `ItemList`, `FAQPage`, `BreadcrumbList` | `ItemList` : les pages du dossier présentes dans le build |
| Index `/guides` | `CollectionPage`, `ItemList`, `BreadcrumbList` | Inchangé dans son principe |
| Hubs `/assistante`, `/assistante-independante` | `CollectionPage`, `ItemList`, `FAQPage`, `BreadcrumbList` | Nouveaux |
| Pages métier, pages de zone | `Service`, `FAQPage`, `BreadcrumbList` | Fil corrigé (voir plus bas) |
| Pages de prestation | `Service`, `FAQPage`, `BreadcrumbList` | Inchangé |
| `/methode-editoriale` | `AboutPage`, `BreadcrumbList` | Nouvelle, soumise au registre de relecture |

## Changements

### 1. Fil d'Ariane : le visible et le structuré disent la même chose

Avant, sur les 8 pages métier et les 5 pages de zone :

- le fil **affiché** disait « Services · [page] » ;
- le `BreadcrumbList` disait « Pour qui » ou « Zones d'intervention », et pointait vers une **ancre** (`/services#pour-qui`, `/services#zones`).

Les deux divergeaient, et le niveau intermédiaire n'était pas une page.

Après : la fonction `filDAriane()` et le composant `Fil.astro` partent de la même liste d'étapes. Le niveau intermédiaire est une vraie page — `/assistante` ou `/assistante-independante`. L'audit bloque tout fil dont une étape ne correspond à aucune page construite.

### 2. Auteur des nouveaux guides

Les douze premiers guides gardent `author` : Brittany Dreano (`Person`).

Les guides d'octobre 2026 ont été préparés avec l'aide d'un outil d'IA. Les attribuer à une personne qui ne les a pas écrits serait inexact. Leur `author` est donc l'entreprise (`#business`), et la relecture est portée séparément : `WebPage.reviewedBy` (Brittany Dreano) et `WebPage.lastReviewed` (date de relecture), **uniquement** quand la page figure au registre. La même information s'affiche sous la réponse courte.

### 3. Sérialisation sûre

`JSON.stringify()` n'échappe pas le chevron ouvrant : un texte contenant `</script>` aurait refermé la balise. `jsonLd()` l'échappe. Aucun contenu actuel n'était concerné ; c'est une protection pour la suite.

### 4. `FAQPage`

Le balisage est conservé sur les pages qui affichent réellement des questions et leurs réponses. Google n'affiche plus de résultat enrichi FAQ pour ce type de site : il ne faut rien en attendre de ce côté. Il reste une description exacte de la page pour tout moteur qui lit le balisage. L'audit vérifie que chaque question balisée figure dans le texte visible.

## Ce qui a été vérifié

| Contrôle | Méthode | Résultat |
| --- | --- | --- |
| JSON valide | Analyse de chaque bloc des 151 pages de l'aperçu | 0 erreur |
| `BreadcrumbList` : chaque étape mène à une page existante | `seo-audit.mjs` | 0 écart (13 avant) |
| `Article` : `headline`, `datePublished`, `dateModified`, `author` présents | `seo-audit.mjs` | 0 écart |
| `Article.headline` égal au H1 | `seo-audit.mjs` | 0 écart |
| `FAQPage` : chaque question présente dans le texte visible | `seo-audit.mjs` | 0 écart |
| Dates cohérentes entre sitemap, `WebPage` et `Article` | Source unique `dates.mjs` ; test unitaire | Conforme |
| Identifiants `@id` stables | Lecture du code | `#website`, `#business`, `#brittany-dreano`, `#webpage`, `#article`, `#faq`, `#fil` |

## Ce qui n'a pas été vérifié

- **Test des résultats enrichis de Google** et **validateur schema.org** : outils en ligne, non utilisés. À faire après déploiement sur une page de chaque gabarit.
- Rapport « Améliorations » de Search Console : sans accès.

## Points laissés en l'état, à examiner

| Point | Constat | Priorité |
| --- | --- | --- |
| `LocalBusiness.address` | Ville et département seulement, sans rue ni code postal. Exact, mais incomplet pour un affichage local | P3 — à décider avec la propriétaire : publier ou non l'adresse |
| `areaServed` | Contient « International (à distance) » en `Place`, formulation inhabituelle | P3 |
| `Offer.price` « 700 » | Prix de départ ; `priceSpecification` avec un prix minimal serait plus exact | P3 |
| `sameAs` | Trois profils. L'adresse LinkedIn (`/in/brittassit85/`) est à vérifier à la main : le site répond 999 aux robots, et l'identifiant ne comporte qu'un « s » | P2 |

Aucun de ces points n'a été modifié : ils touchent à l'identité publique de l'entreprise, qui se décide avec elle.
