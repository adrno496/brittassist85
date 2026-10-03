# 03 — Corrections et ajouts réalisés

Date : 3 octobre 2026. Point de départ : commit `df48fb4`, branche `main`.

**Rien n'a été déployé.** Les modifications — 28 fichiers modifiés et 77 fichiers nouveaux sous `docs/`, `scripts/`, `src/` et `public/` — sont commitées sur la branche `seo/audit-sentinel-100-pages`, poussée le 3 octobre au soir sur le dépôt `brittassist-refonte`. `main` n'est pas modifié : il porte une refonte « V5 » postérieure au point de départ de ce chantier (voir le rapport final).

## Retour arrière

```bash
# Revenir à l'état d'avant le chantier
git switch main                   # le main local est resté sur df48fb4
npm install                       # rétablit node_modules selon son package-lock.json

# Annuler un seul fichier sur la branche
git restore --source=df48fb4 src/styles/global.css
```

`outils/` et `.plugcode/`, qui étaient déjà non suivis avant ce chantier, ne sont dans aucun commit.

Pour les prochains commits : `outils/` contient près de 200 Mo d'outils et de supports, dont des jeux d'essai de faux secrets (59 détections `gitleaks`, toutes dans ce dossier). Un `git add -A` l'embarquerait. Ajouter les fichiers par dossier, ou inscrire `outils/` dans `.gitignore`.

## 1. Corrections de défauts existants

| # | Défaut | Correction | Fichiers | Vérification |
| --- | --- | --- | --- | --- |
| 1 | `/assistante` et `/assistante-independante` en 404 | Deux pages hub créées | `src/pages/assistante/index.astro`, `src/pages/assistante-independante/index.astro` | 200 en local ; présentes au sitemap |
| 2 | Fil d'Ariane visible différent du fil structuré, lequel pointait vers une ancre (13 pages) | Composant `Fil.astro` et fonction `filDAriane()` alimentés par la même liste ; niveau intermédiaire = le hub | `src/components/Fil.astro`, `src/lib/seo.ts`, gabarits métier et zone | Audit : 0 `fil-ariane-ancre` (13 avant) |
| 3 | Empreinte du script de thème absente de la CSP (49 pages) | Texte du script défini une seule fois ; son empreinte SHA-256 est déclarée dans la configuration | `src/data/theme-init.mjs`, `astro.config.mjs`, `BaseLayout.astro` | Audit : 0 `csp-empreinte` ; thème rétabli en navigateur |
| 4 | Contraste insuffisant sur fond rose : 4,2:1 (sur-titres, numéros d'étape) | Or assombri `#7A5C24` sur fond rose : 5,2:1 | `src/styles/global.css` | axe-core : 0 violation (8 avant) |
| 5 | Pas de page 404 | Page créée, `noindex`, hors sitemap | `src/pages/404.astro` | Servie avec le code 404 en local |
| 6 | 11 descriptions et 4 titres trop longs | Réécrits (tableau plus bas) | `prestations.ts`, `guides.ts`, 4 pages | Audit : 0 avertissement de longueur |
| 7 | « Les autres guides » affichait toujours les quatre mêmes | Remplacé par les cinq pages suivantes du même dossier, en boucle | `bibliotheque.ts`, gabarit des guides | Chaque guide propose une suite différente |
| 8 | Pages de prestation peu citées (2 à 10 pages) | Chaque nouveau guide mène à la prestation de son dossier | Fiches et `bibliotheque.ts` | 5 à 35 pages en aperçu |
| 9 | `security.txt` : champ `Canonical` sur le domaine nu | Corrigé en `www` | `public/.well-known/security.txt` | Lecture |
| 10 | Lien `service-public.fr` redirigé | Mis à jour vers `service-public.gouv.fr` | `guides.ts` | `check-sources.mjs` : 200 |
| 11 | 6 dépendances vulnérables corrigibles sans rupture | `npm audit fix` | `package-lock.json` | 10 avis → 4 |
| 12 | README obsolète | Réécrit | `README.md` | Lecture |

## 2. Sécurité

| Changement | Détail | Vérification |
| --- | --- | --- |
| En-tête `Content-Security-Policy` | `frame-ancestors 'none'; base-uri 'self'; object-src 'none'`. Volontairement limité à ce qu'une balise `<meta>` ne peut pas porter. Il **ne contient ni `script-src` ni `style-src`** : la politique à empreintes reste celle générée par Astro | 755 chargements en navigateur sous les deux politiques, 0 violation ; RECURSIVE `web-check` : WARN → PASS |
| Champ piège anti-spam | Champ `_honey` masqué sur les deux formulaires ; `axdia-forms.js` n'envoie rien au back-office si le champ est rempli | Lecture du HTML ; axe-core : 0 violation. **L'envoi réel n'a pas été testé** |
| Polices | Servies par le site : plus aucune requête vers un tiers au chargement. `font-src` et `style-src` n'autorisent plus `fonts.bunny.net` | 0 requête échouée ; rendu identique au pixel près sur les pages sans photo |
| Politique de confidentialité | La phrase sur Bunny Fonts est corrigée : les polices sont servies par le site | Lecture |
| JSON-LD | Sérialisation qui échappe `<` | Lecture |
| Variable d'environnement | `BROUILLONS=1` est lue dans un seul module (`mode.mjs`) | SENTINEL vibe security : voir le rapport d'audit |

## 3. Performance

| Changement | Détail | Mesure en laboratoire |
| --- | --- | --- |
| Polices auto-hébergées | 12 fichiers WOFF2 (184 Ko au total, sous-ensembles latin et latin étendu), déclarés dans `global.css`, deux préchargés | Premier affichage : 1,9 s → 1,4 s sur l'accueil ; 1,7 s → 1,2 s sur un guide |
| Images WebP | Deux largeurs par photo, JPEG conservé en repli | Image principale de l'accueil sur mobile : 81 Ko → 27 Ko ; poids total de l'accueil : 225 → 193 Ko |
| Cache | `/fonts/` : un an, `immutable` | En-tête servi en local |

## 4. Outillage ajouté

| Fichier | Rôle |
| --- | --- |
| `scripts/seo-audit.mjs` | Audit du HTML construit : 40 règles environ, bloquantes ou d'avertissement |
| `scripts/quality-gate.mjs` | Branche l'audit sur le build : un blocage l'interrompt |
| `scripts/content-gate.mjs` | Contrôle des fiches avant le build |
| `scripts/browser-check.mjs` | Navigateur réel, cinq écrans, axe-core, parcours clavier, thème clair |
| `scripts/check-sources.mjs` | Liens externes |
| `scripts/serve-dist.mjs` | Sert `dist/` avec les règles de `vercel.json` |
| `scripts/images.mjs` | Variantes WebP |
| `scripts/docs-seo.mjs` | Régénère trois documents de `docs/seo/` |
| `scripts/tests/*.test.mjs` | 16 tests : registre de relecture, règles de l'audit |
| `@astrojs/check`, `typescript` | Dépendances de développement : contrôle de types |

Scripts npm ajoutés : `build:apercu`, `check`, `test`, `qa`, `qa:apercu`, `qa:navigateur`, `servir`, `docs:seo`. `tsconfig.json` exclut désormais `outils/`.

**Changement de comportement à connaître :** `npm run build` échoue maintenant si l'audit trouve un défaut bloquant. C'est voulu, et cela s'applique aussi au build de l'hébergeur. Contournement d'urgence : `SEO_GATE=off`.

## 5. Architecture éditoriale

| Élément | Fichiers |
| --- | --- |
| Modèle de contenu étendu : étapes, tableaux, modèles, erreurs, limites, fiche de cadrage | `src/data/guides.ts` |
| Huit dossiers, chacun avec son pilier | `src/data/dossiers/*.ts` |
| Bibliothèque : dossiers, piliers, pages voisines | `src/data/bibliotheque.ts` |
| Registre de relecture et statut de publication | `src/data/relectures.mjs`, `publication.mjs`, `mode.mjs`, `metiers-publies.ts` |
| Gabarit des guides : fil à trois niveaux, sommaire, blocs, pages du dossier, appel à l'action par dossier | `src/pages/guides/[slug].astro`, `src/components/Blocs.astro` |
| Index des guides : présentation par dossier dès qu'un pilier est publié | `src/pages/guides.astro` |
| Pied de page : liens vers les hubs ; dossiers à la place de la liste des guides dès qu'un pilier est publié | `src/components/Footer.astro` |
| Page de méthode éditoriale, soumise au registre | `src/pages/[editorial].astro` |
| Styles : fil, sommaire, étapes, tableaux, modèles, bandeau brouillon | `src/styles/global.css`, section 27 |

## 6. Contenu

| Contenu | Nombre | État |
| --- | --- | --- |
| Hubs | 2 | Publiés au prochain déploiement |
| Guides, dont 8 piliers | 92 | Rédigés, contrôlés, en attente de relecture |
| Pages métier | 6 | Rédigées, contrôlées, en attente de relecture |
| Page de méthode éditoriale | 1 | Rédigée, en attente de relecture |

## 7. Métadonnées réécrites

Le sens est conservé ; seule la longueur change.

| Page | Élément | Avant | Après |
| --- | --- | --- | --- |
| `/` | description | 183 car. | 163 |
| `/a-propos` | description | 183 | 156 |
| `/private-office` | description | 194 | 160 |
| `/services` | description | 179 | 146 |
| `/services/gestion-administrative` | description | 191 | 150 |
| `/services/facturation` | description | 178 | 153 |
| `/services/suivi-prestataires` | description | 171 | 151 |
| `/services/assistanat-anglais` | description | 169 | 145 |
| `/services/reporting` | description | 169 | 153 |
| `/services/coordination` | description | 167 | 142 |
| `/services/gestion-des-contrats` | description | 167 | 142 |
| `/guides/choisir-assistante-externalisee` | titre | 81 | 59 |
| `/guides/premier-mois-assistante-externalisee` | titre | 79 | 69 |
| `/guides/confidentialite-assistante-externalisee` | titre | 78 | 68 |
| `/services/reservations` | titre | 72 | 59 |

Dans les descriptions de prestation, « Pour dirigeants et entrepreneurs, à partir de 700 € / mois » est devenu « Pour dirigeants, dès 700 € / mois » ou « Dès 700 € / mois ». **À faire valider par la propriétaire** : ce sont ses phrases de présentation dans les résultats de recherche.

## 8. Ce qui n'a pas été modifié, volontairement

| Sujet | Raison |
| --- | --- |
| Montée d'Astro 5 vers 7 | Deux versions majeures d'écart ; l'API de la CSP a changé. À mener à part, avec ses propres tests. Voir les recommandations du rapport final |
| Les douze guides et les pages existantes, dans leur texte | Aucune phrase de contenu existant n'a été réécrite, hors métadonnées et une phrase de la politique de confidentialité |
| Données structurées de l'entreprise (adresse, zone, prix) | Identité publique : à décider avec la propriétaire |
| Images non utilisées dans `public/images/` | Non supprimées : la décision appartient au propriétaire |
| `.gitignore` | `outils/` et `.plugcode/` laissés tels quels |
| Enregistrements DNS (DMARC, CAA) | Hors du dépôt |
