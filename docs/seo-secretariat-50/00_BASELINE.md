# 00 — État initial avant toute modification

Relevé le 6 octobre 2026, avant la première modification de fichier. Chaque statut ci-dessous correspond à une commande réellement lancée ; la sortie complète a été conservée pendant la mission pour la comparaison finale (voir `09_TEST_REPORT.md`).

Statuts utilisés : PASS · PARTIAL · FAIL · NON TESTÉ · NON APPLICABLE.

## Dépôt

| Élément | Valeur relevée |
| --- | --- |
| Dossier | dépôt local `brittassist85` |
| Branche | `seo/audit-sentinel-100-pages-v5` |
| Commit de départ | `429c7ad` — « fix(contact): precise le diagnostic des refus Brevo » (4 octobre 2026, 19 h 07) |
| `git fetch --all` | Fait. Aucun dépôt distant n’est en avance sur le local |
| Écart avec la production | Aucun : `brittassist85/main` = `429c7ad`, soit exactement le commit de départ |
| Écart avec `brittassist-refonte/main` | Le local a 3 commits d’avance, 0 de retard |
| Fichiers suivis modifiés | Aucun |
| Fichiers non suivis déjà présents | `.plugcode/`, `docs/seo/11_SITEMAP_VERIFICATION_2026-10-04.md`, `outils/` — laissés tels quels, non touchés par la mission |

Conséquence : tout ce que cette mission modifie se lit en comparant au commit `429c7ad`. Pendant la mission, rien n’a été commité ni poussé ; le travail forme ensuite un seul commit, fait à la demande du propriétaire.

## Environnement

| Élément | Valeur |
| --- | --- |
| Node.js | v24.16.0 |
| npm | 11.13.0 |
| Astro (installé) | 5.18.2 |
| @astrojs/sitemap (installé) | 3.7.3 |
| Système | macOS (Darwin 24.6.0) |

## Commandes de référence

| Contrôle | Statut | Commande | Résultat réel |
| --- | --- | --- | --- |
| Installation propre | PASS | `npm ci` | 362 paquets installés, code de sortie 0 |
| Types | PASS | `npm run check` | 66 fichiers, 0 erreur, 0 avertissement, 0 indication |
| Tests unitaires | PASS | `npm test` | 42 tests, 42 réussis, 0 échec |
| Gate éditorial | PASS | `node scripts/content-gate.mjs` (dans `npm run qa`) | 104 guides (92 nouveaux), 14 métiers, 8 dossiers · 92 requêtes principales distinctes · 0 blocage, 0 avertissement |
| Build de production | PASS | `npm run build` (dans `npm run qa`) | 151 pages construites |
| Audit SEO strict | PASS | `node scripts/seo-audit.mjs --strict` (dans `npm run qa`) | 149 indexables, 0 brouillon, 2 non indexables · sitemap : 149 URL · 0 blocage, 2 avertissements |
| Chaîne complète | PASS | `npm run qa` | Code de sortie 0 |

### Les deux avertissements déjà présents

Ils existaient avant la mission et ne sont pas de son ressort :

| Règle | Page | Détail |
| --- | --- | --- |
| `contenu-mince` | `/contact` | 150 mots |
| `sans-lien-contextuel` | `/mentions-legales` | liée seulement depuis la navigation ou le pied de page |

### Dépendances : alertes déjà présentes

`npm ci` signale 5 alertes de sécurité (1 faible, 3 élevées, 1 critique). Elles existaient avant la mission.

| Paquet | Gravité | Dépendance directe | Correction proposée par npm |
| --- | --- | --- | --- |
| `astro` | critique | oui | passage à Astro 7.3.6 — changement de version majeure |
| `sharp` | élevée | non | via le passage à Astro 7 |
| `esbuild` | faible | non | via le passage à Astro 7 |
| `http-cache-semantics` | élevée | non | `npm audit fix` |
| `source-map-js` | élevée | non | `npm audit fix` |

Aucune n’a été corrigée ici : passer d’Astro 5 à Astro 7 est un chantier à part, hors du périmètre « créer 50 pages sans régression ». C’est consigné dans les recommandations du rapport final.

## Photographie du site publié

Chiffres tirés de l’audit du build de production (`node scripts/seo-audit.mjs --json`).

| Mesure | Valeur |
| --- | --- |
| Pages HTML construites | 151 |
| Pages indexables | 149 |
| Pages volontairement en `noindex` | 2 (`/404`, `/questionnaire`) |
| URL dans le sitemap | 149 |
| Guides (`/guides/<slug>`) | 104 — 12 antérieurs aux registres, 92 d’octobre 2026 |
| Pages métier (`/assistante/<slug>`) | 14 |
| Pages de prestation (`/services/<slug>`) | 13 |
| Pages de zone | 5 |
| Mots par guide (contenu principal) | de 611 à 1 655, moyenne 831 |
| Profondeur maximale depuis l’accueil | 2 clics |
| Paires de pages au-dessus du seuil d’alerte de similarité (30 % de 5-grammes communs) | 0 |
| Poids total du HTML | 3 987 976 octets |
| Poids du dossier `dist/` | 5 731 275 octets, 192 fichiers — dont un `.DS_Store` créé par macOS dans `public/`, que le dépôt ignore. Le site lui-même : 191 fichiers, 5 725 127 octets |

### La page à protéger : `/guides/secretariat-externalise`

| Mesure | Valeur avant mission |
| --- | --- |
| Title | `Secrétariat externalisé : cinq formes, un choix · BrittAssist` |
| H1 | `Secrétariat externalisé : cinq métiers derrière un seul mot.` |
| Date de mise à jour déclarée | 2026-09-04 |
| Mots (contenu principal) | 901 |
| Poids HTML | 25 949 octets |
| Liens internes sur la page | 60 |
| Pages qui la citent dans leur contenu | 10 |
| Sections | 2 · FAQ : 3 questions · Références : aucune |

### Registres

| Registre | État |
| --- | --- |
| `src/data/publications.mjs` | 99 lignes : 92 guides, 6 pages métier, la page de méthode — toutes datées du 3 octobre 2026 |
| `src/data/relectures.mjs` | vide : aucune page ne se déclare relue par une personne |

## Empreintes pour le contrôle de non-régression

Avant toute modification, l’empreinte SHA-256 de chacun des 158 fichiers servis (`.html`, `.xml`, `.txt`) du build de production a été relevée, et une copie complète de ce build — 192 fichiers — a été mise de côté. En fin de mission, le build de production est reconstruit et comparé fichier par fichier : c’est la preuve utilisée dans `09_TEST_REPORT.md` pour affirmer que les pages existantes n’ont pas changé.

## Search Console

`SEARCH_CONSOLE = NON TESTÉ`.

Ce qui a été vérifié, sans résultat :

- aucun export Search Console (CSV, JSON) dans le dépôt ni dans `docs/` ;
- aucune variable d’environnement de type Google, GSC ou SEO dans la session ;
- le connecteur de données disponible dans la session (Windsor.ai) n’a qu’un compte Instagram relié — pas de propriété Search Console ;
- pas d’outil en ligne de commande Google configuré sur le poste.

Aucune donnée Search Console n’a donc été lue, et aucune n’est citée dans les documents de cette mission. Le signal « la page `/guides/secretariat-externalise` génère beaucoup de clics » est repris tel que le propriétaire l’a formulé, sans chiffre.

À noter pour la suite : d’après `docs/seo/11_SITEMAP_VERIFICATION_2026-10-04.md`, la propriété `https://www.brittassist.fr/` n’existe dans Search Console que depuis le 4 octobre 2026 au soir. L’historique de clics de la page se trouve dans l’ancienne propriété, sans `www`.
