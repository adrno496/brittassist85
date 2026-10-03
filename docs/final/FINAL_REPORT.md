GLOBAL STATUS: PARTIAL

# Rapport final — audit SENTINEL, refonte SEO/GEO et 100 pages

Site : BrittAssist (`https://www.brittassist.fr`) · Dépôt : `/Users/dreano/Document/brittassist85` · 3 octobre 2026.

## Pourquoi PARTIAL, en quatre lignes

1. **Le site audité est BrittAssist, pas AXDIA.** Le cahier des charges est intitulé « AXDIA », mais il désigne « le site du workspace courant », qui est celui de BrittAssist. Les exemples (audit, sécurité, outil) ont été transposés à son activité réelle.
2. **Les 100 pages sont écrites et passent tous les contrôles automatiques, mais 98 ne sont pas indexables aujourd'hui.** Elles attendent une relecture humaine, que Google exige pour tout contenu préparé avec une IA. C'est un choix délibéré, expliqué plus bas, et réversible page par page.
3. **Le site en ligne n'a pas changé.** Tout a été validé en local ; le comportement chez l'hébergeur n'est pas testé. Le travail est poussé sur le dépôt `brittassist-refonte`, dans `main`, le 3 octobre au soir. Ce dépôt n'alimente pas `www.brittassist.fr` (voir la mise à jour ci-dessous).
4. **Une vulnérabilité critique de dépendance subsiste** (Astro), dont la correction demande une montée de version majeure.

Ce qui est acquis : aucune régression constatée, zéro défaut bloquant sur 151 pages, zéro violation d'accessibilité, une performance de laboratoire de 99 à 100, deux erreurs 404 corrigées.

## Mise à jour du 3 octobre au soir : refonte V5, thème clair unique

**Les sections plus bas décrivent l'audit mené sur l'ancien design. Pour le site tel qu'il est sur la branche `seo/audit-sentinel-100-pages-v5`, ce sont les mesures de cette mise à jour qui font foi.**

### Ce qui s'est passé

- Au moment de pousser, la branche `main` du dépôt `brittassist-refonte` portait cinq commits du 29 septembre 2026 absents du dépôt local : une refonte visuelle « V5 » (navigation, accueil reconstruit, feuille `refonte-v5.css`, thème clair, sélecteur de thème supprimé). Je n'avais pas interrogé le dépôt distant avant de commencer : l'audit et les validations du reste de ce rapport portent sur le commit `df48fb4`, antérieur à cette refonte.
- La V5 seule, soumise au contrôle en navigateur, présentait un contraste insuffisant sur 45 de ses 49 pages et un débordement horizontal sur `/` et `/a-propos`. Cause : l'accueil avait été redessiné en clair, mais les pages intérieures gardaient leurs bandes sombres, avec un accent et des chapôs prévus pour le clair.
- Décision du propriétaire, le 3 octobre : **garder le visuel de la V5, en clair, sur toutes les pages.**

### Ce qui a été fait

Sur la branche `seo/audit-sentinel-100-pages-v5`, qui réunit la V5 et le travail d'audit :

| Changement | Détail | Fichiers |
| --- | --- | --- |
| Toutes les pages en clair | Les bandes sombres des pages intérieures deviennent blanc chaud et rose pâle. Le changement passe par les tokens de couleur, pas par les gabarits : aucune page n'a été réécrite | `refonte-v5.css` |
| Le sombre, réservé | Appel final, pied de page, bandeau de cookies, offre principale, bulle de message de `/private-office`, et les deux sections sombres de l'accueil (périmètre, appel final) | `refonte-v5.css` |
| Contrastes | L'accent fonce d'un ton sur les fonds rosés et s'éclaircit sur les fonds sombres ; les chapôs ne sont plus semi-transparents | `refonte-v5.css` |
| Trois défauts de la V5 | Sur l'accueil, trois boutons sombres sur fond sombre (offre principale, périmètre, appel final) et le lien « Préparer mon besoin », illisibles ; débordement horizontal du cadre des portraits | `refonte-v5.css` |
| Offres | Même parti que sur l'accueil : cartes claires, offre principale en aubergine | `refonte-v5.css` |
| Formulaires | Champs clairs, bordures et cases à cocher lisibles sur fond rosé | `refonte-v5.css` |
| Restes de l'ancien or | Remplacés par l'accent de la V5 | `refonte-v5.css`, `global.css` |
| Ancien sélecteur de thème | Retiré : règles CSS mortes (environ 75 lignes), script et son empreinte CSP, parcours de test correspondant | `global.css`, `astro.config.mjs`, `theme-init.mjs` (supprimé), `browser-check.mjs` |
| Photos de l'accueil | Servies en WebP, JPEG en repli : 168 Ko → 17 à 36 Ko pour la photo principale. Six variantes produites pour l'ancien accueil, plus utilisées, sont supprimées | `index.astro`, `images.mjs`, `public/images/` |

Ce qui n'a pas été touché : la composition de l'accueil V5, la navigation, la palette, les textes.

### Mesures, le 3 octobre 2026

| Contrôle | Résultat | Statut |
| --- | --- | --- |
| Types (`npm run check`) | 0 erreur | PASS |
| Tests | 16 sur 16 | PASS |
| Contrôle éditorial | 0 blocage | PASS |
| Build de production | 52 pages, 0 blocage, 2 avertissements attendus | PASS |
| Build d'aperçu | 151 pages, 0 blocage | PASS |
| Navigateur, 151 pages × 5 largeurs (755 chargements) | 0 erreur console, 0 violation CSP, 0 débordement, 0 violation axe-core | PASS |
| Parcours : lien d'évitement, menu mobile, bandeau de consentement | 3 sur 3 | PASS |
| Lighthouse en local, accueil | 100 ; premier affichage 1,0 s ; plus grand élément 1,6 s ; 177 Kio | PASS (laboratoire) |
| Lighthouse en local, guide et prestation | 100 et 100 ; 127 et 117 Kio | PASS (laboratoire) |
| Relecture visuelle | Par captures : 15 pages à 1 366 px de large, 2 à 390 px ; les 136 autres pages partagent les mêmes gabarits mais n'ont pas été regardées une à une | PARTIAL |
| États de survol et de focus | Non contrôlés par axe-core ; non relus un par un | NON TESTÉ |
| Re-audit SENTINEL sur cette branche | — | NON TESTÉ |
| Rendu chez l'hébergeur | — | NON TESTÉ |

Avant correction, sur la fusion brute : contraste insuffisant sur 47 pages sur 52, débordement sur 2 pages.

Les mesures Lighthouse sont faites sur le même serveur local que celles de l'ancien design (accueil : 99, 193 Kio). Ce sont des mesures de laboratoire, pas des données d'utilisateurs.

### Où en est le dépôt, où en est le site en ligne

- La branche de travail `seo/audit-sentinel-100-pages-v5` est poussée et fusionnée en avance rapide dans `main` du dépôt `brittassist-refonte`, à la demande du propriétaire, le 3 octobre 2026.
- **Le site en ligne n'en est pas modifié.** Vérifié le même soir : `www.brittassist.fr` sert encore l'ancien accueil, redirige `/tarifs` vers l'accueil et répond 404 sur `/assistante`. Ce contenu correspond au commit `3912e0e`, celui de la branche `main` du dépôt `bdassisttest`. Le `main` de `brittassist-refonte` portait la V5 depuis le 29 septembre sans qu'elle soit en ligne : j'en déduis que ce dépôt n'alimente pas la production. C'est une déduction, pas une vérification du réglage chez l'hébergeur.
- Mettre ce travail en ligne reste donc une action à part, non faite.

### Ce qui reste à décider

- **Relire le rendu à l'œil** avant de fusionner dans `main` : un contrôle automatique vérifie le contraste, pas le goût.
- Les titres de liste en capitales espacées (`.universe__name`), hérités de la V5, tiennent mal sur l'index des guides, où les titres sont longs. Laissé tel quel : c'est un choix de la V5.

---

## Réellement inspecté

- **SENTINEL** (`/Users/dreano/Downloads/SENTINEL`) : structure complète ; documentation lue avant exécution — huit fichiers à la racine, README de RECURSIVE, d'Audit 360 et de la suite d'audit web ; les dix points d'entrée Python ; les politiques. Les coffres de clés n'ont pas été ouverts. Détail : [00_SENTINEL_DISCOVERY.md](../sentinel/00_SENTINEL_DISCOVERY.md).
- **Le site** : les 27 fichiers source, la configuration Astro, Vercel et TypeScript, les fichiers publics, l'audit SEO du 27 septembre déjà présent dans le dépôt. Détail : [01_SITE_INVENTORY.md](../site-audit/01_SITE_INVENTORY.md).
- **La production**, en lecture seule : codes de réponse, redirections, en-têtes.
- **La documentation Google**, consultée en direct : règles anti-spam (mise à jour le 28 août 2026), contenu et IA générative (1er octobre 2026), fonctionnalités d'IA (10 décembre 2025).
- **Les sources officielles** des pages qui citent une règle : Service-Public Entreprendre, impots.gouv.fr, Urssaf, CNIL, ANSSI, France Num, ministère du Travail, Cybermalveillance.gouv.fr, justice.fr.

## Réellement exécuté

Commandes principales ; la liste complète, avec heures et sorties, est dans [02_BASELINE_BEFORE.md](../site-audit/02_BASELINE_BEFORE.md) et [04_FINAL_VALIDATION.md](../site-audit/04_FINAL_VALIDATION.md).

```sh
# État des lieux
git status ; git branch --show-current ; git log -1 --oneline
npm ls --depth=0 ; npm outdated ; npm audit ; npm audit --json
gitleaks detect --source . --no-banner --redact
curl -sI https://www.brittassist.fr/        # et une vingtaine d'autres adresses de la production

# Build et contrôles
npm run build ; npm run build:apercu
npm run check ; npm test ; npm run qa
node scripts/content-gate.mjs
node scripts/seo-audit.mjs --strict --json … --md …
PLAYWRIGHT_ROOT=…/SENTINEL/AXDIA_OS/engines/audit node scripts/browser-check.mjs --base http://127.0.0.1:4322
node scripts/check-sources.mjs
node scripts/serve-dist.mjs --port 4322
npx -y lighthouse@latest <url> --only-categories=performance,accessibility,best-practices,seo

# Corrections
npm audit fix
npm install --save-dev @astrojs/check typescript
node scripts/images.mjs
node scripts/docs-seo.mjs
```

## SENTINEL réellement utilisé

| Module | Commande | Résultat avant | Résultat après |
| --- | --- | --- | --- |
| Audit 360 / BR360 | `br360_engine.py selftest`, `audit`, `compare` | 3 PASS, 6 PARTIAL, 2 FAIL, 97 non testés | Identique ; écart de score nul |
| RECURSIVE | `doctor`, `inspect`, `capabilities`, `web-check`, `stack`, `security-full`, `release-check` | CSP : WARN ; qualité 85,71 | CSP : PASS ; qualité 100 |
| Vibe security | `inventory`, `dependency-provenance`, `ci-trust`, `known-incidents` | 2 candidats | 2 candidats, les mêmes |
| Audit web — sécurité | `dist/cli.js`, production, passif | 95/100 ; en-têtes 80 | En-têtes 98, en local |
| Audit web — pages | `dist/cli-pages.js` | 48 pages, moyenne 92 | 149 pages, moyenne 100 |
| Audit web — navigateur | `dist/cli-browser.js` | 96 et 98, 0 violation | 98, 0 violation |
| Audit web — SEO | `dist/cli-seo.js` | 91 (une seule page explorée) | 91 |
| Playwright et axe-core de SENTINEL | via `scripts/browser-check.mjs` | 8 violations | 0 violation |

SENTINEL a tourné sur un instantané des fichiers, hors du dépôt. Non utilisés, et pourquoi : assurance Supabase et contrôles mobiles (sans objet), qualifications sur jeux d'essai (elles éprouvent l'outil, pas le site), Nuclei, ZAP et scanner profond (contrôles actifs), intelligence externe (envoi du domaine à des tiers). `security-full` a été lancé et s'est déclaré `BLOCKED`.

Limites de l'outil constatées : son audit SEO n'explore qu'une page et annonce à tort « aucun JSON-LD ». Un constat critique est apparu puis a été levé — c'était un faux positif, analysé dans [01_SENTINEL_SITE_AUDIT.md](../sentinel/01_SENTINEL_SITE_AUDIT.md).

## Réellement modifié

28 fichiers modifiés, 77 fichiers nouveaux (dont 23 documents, 13 fichiers de polices et 10 images). Commité le 3 octobre au soir ; la version fusionnée avec la V5 est dans `main` du dépôt `brittassist-refonte`. Détail et retour arrière : [03_FIXES_IMPLEMENTED.md](../site-audit/03_FIXES_IMPLEMENTED.md).

| Domaine | Changements |
| --- | --- |
| Défauts corrigés | Deux hubs en 404 ; fil d'Ariane incohérent sur 13 pages ; empreinte CSP du script de thème ; contraste sur fond rose ; page 404 ; 16 titres et descriptions trop longs ; `security.txt` ; un lien officiel redirigé |
| Sécurité | En-tête CSP limité ; champ piège sur les formulaires ; polices auto-hébergées ; six dépendances mises à jour |
| Performance | Polices servies par le site ; photos en WebP |
| Outillage | Audit SEO, quality gate branché sur le build, gate éditorial, contrôles en navigateur, 16 tests, contrôle de types |
| Architecture | Modèle de contenu étendu, huit dossiers, registre de relecture, gabarit des guides refondu |
| Contenu | 2 hubs, 92 guides, 6 pages métier, 1 page de méthode éditoriale |

## Réellement testé

| Contrôle | Résultat |
| --- | --- |
| Build de production | 52 pages, 0 blocage |
| Build d'aperçu | 151 pages, 0 blocage |
| Contrôle de types | 0 erreur |
| Tests | 16 sur 16 |
| Gate éditorial | 0 blocage sur 104 guides et 14 pages métier |
| Navigateur réel | 755 chargements sur cinq écrans : 0 erreur console, 0 violation CSP, 0 débordement |
| Accessibilité | 0 violation axe-core sur 151 pages ; 0 en thème clair sur 15 |
| Parcours | 4 sur 4 |
| Non-régression visuelle | Identique au pixel sur les pages sans photo |
| Liens externes | 34 sur 37 répondent ; 2 refusent les robots ; 1 délai dépassé |

## Les 100 pages

| | Nombre |
| --- | --- |
| Prévues | 100 |
| Créées | 100 |
| Rejetées par le quality gate | 0 |
| Indexables au prochain déploiement | **2** — les hubs `/assistante` et `/assistante-independante` |
| Non indexables, en attente de relecture | **98** — 92 guides et 6 pages métier |

Répartition : 8 piliers, 2 hubs, 35 méthodes, 11 guides, 11 situations, 11 modèles, 8 repères sourcés, 8 comparatifs, 6 pages métier. Aucune page locale nouvelle. Matrice : [02_100_PAGE_CONTENT_MAP.md](../seo/02_100_PAGE_CONTENT_MAP.md).

Mesures sur les 100 pages : de 591 à 1 679 mots, médiane 786 ; au moins 7 liens entrants depuis le contenu d'autres pages ; 2 clics au plus depuis l'accueil ; 100 requêtes principales distinctes ; paire la plus proche à 4 % de contenu commun.

### Pourquoi 98 pages ne sont pas indexables

Ce n'est pas un échec de qualité. C'est une condition de publication.

- **Google le demande.** Sa documentation indique qu'il faut vérifier à la main tout contenu généré par IA avant de le publier, et que produire de nombreuses pages sans valeur ajoutée relève de l'abus de contenu à grande échelle.
- **Les pages parlent au nom de quelqu'un.** Les pages métier sont écrites à la première personne. Personne ne peut signer à la place de Brittany Dreano.
- **Certaines citent le droit.** Les règles ont été rapprochées de leurs sources officielles ce jour ; elles doivent l'être à nouveau par une personne, le jour de la publication.

Le mécanisme est un registre, `src/data/relectures.mjs`. Une page qui n'y figure pas n'est pas générée par le build de production. Pour la publier : la relire, ajouter une ligne, déployer. Une page par ligne, à son rythme.

**Si vous jugez cette précaution excessive**, inscrire les 98 chemins dans le registre les rend toutes indexables en une fois. Je le déconseille : passer de 50 à 150 pages en un jour, sans relecture, est exactement le profil que les règles anti-spam décrivent.

## SEO technique

| | Avant | Après |
| --- | --- | --- |
| Défauts bloquants de l'audit | 1 règle, 49 pages | 0 |
| Avertissements | 30 | 2, attendus |
| Hubs en 404 | 2 | 0 |
| Fils d'Ariane vers une ancre | 13 | 0 |
| Titres et descriptions hors limites | 15 | 0 |
| Liens entrants vers les pages de prestation | 2 à 10 | 5 à 35 en aperçu |
| Garde-fou | Aucun | Le build échoue sur un lien cassé, un doublon, une page orpheline, un JSON-LD invalide |

Détail : [05_TECHNICAL_SEO_AUDIT.md](../seo/05_TECHNICAL_SEO_AUDIT.md).

## GEO / recherche par IA

Amélioré réellement : réponse directe en tête de chaque guide, reprise dans les données structurées ; questions et réponses visibles ; tableaux et étapes ; faits sourcés et datés ; auteur et relecteur explicites ; maillage par dossier ; page de transparence sur la méthode.

Non fait, volontairement : texte écrit pour les modèles, passages calibrés sur un nombre de mots, balisage sans contenu visible. Google indique qu'aucune optimisation spéciale n'est nécessaire, et qu'il suffit d'être indexé et éligible à un extrait.

Reste à tester : toute présence effective dans une réponse d'IA. Rien ne permet de la garantir. Détail : [07_AI_SEARCH_GEO_READINESS.md](../seo/07_AI_SEARCH_GEO_READINESS.md).

## Performance

Mesures de laboratoire Lighthouse, mêmes conditions avant et après.

| Page | Score | Premier affichage | Plus grand élément | Poids |
| --- | --- | --- | --- | --- |
| Accueil | 93 → 99 | 1,9 → 1,4 s | 2,4 → 2,1 s | 225 → 193 Ko |
| Guide | 99 → 100 | 1,7 → 1,2 s | 1,8 → 1,5 s | 112 → 110 Ko |
| Prestation | 99 → 100 | 1,7 → 1,2 s | 1,9 → 1,4 s | 102 → 100 Ko |

Build : 49 pages en 2,2 s avant ; 151 pages en 3,4 s en aperçu. Les Core Web Vitals de terrain ne sont pas mesurés.

## Sécurité

- Secrets : aucun dans le dépôt ni dans son historique.
- En-têtes : CSP ajoutée en en-tête, sans affaiblir la politique à empreintes ; vérifié en navigateur sur 755 chargements.
- Dépendances : 10 avis → 4. **Reste 1 critique** (Astro, exécution de code par l'optimisation d'images AVIF). Le site n'utilise pas cette fonction et un visiteur n'y est pas exposé ; le poste de build le serait s'il traitait une image non fiable.
- Formulaires : champ piège ajouté ; envoi réel non testé.
- La sécurité n'a pas régressé : aucun contrôle SENTINEL ne s'est dégradé.

## Accessibilité

axe-core, règles WCAG 2.0, 2.1 et 2.2, niveaux A et AA : 8 violations de contraste sur 4 pages avant, 0 sur 151 pages après, thème clair compris. Clavier, lien d'évitement, menu mobile : conformes. Non testé : lecteur d'écran réel, zoom à 200 %, taille des cibles tactiles.

## Régressions

Aucune constatée. Cinq changements de comportement voulus sont listés dans [04_FINAL_VALIDATION.md](../site-audit/04_FINAL_VALIDATION.md) ; le principal : **`npm run build` échoue désormais sur un défaut bloquant**, y compris chez l'hébergeur.

## Non testé

- Le site une fois déployé : en-têtes, redirections, page 404, cache, cohabitation des deux CSP chez l'hébergeur.
- L'indexation, les positions, les clics, les Core Web Vitals de terrain.
- Les volumes de recherche et la concurrence : la carte des intentions repose sur un raisonnement, pas sur des données.
- L'envoi réel des formulaires.
- Le test des résultats enrichis de Google.
- Un lecteur d'écran réel.
- Les scanners Trivy, Semgrep et OSV ; Nuclei et ZAP.
- Deux liens externes que les robots ne peuvent pas ouvrir (LinkedIn, Légifrance), et le lien Calendly, qui n'a pas répondu au second essai.
- **L'exactitude du fond des 98 pages par une personne.** C'est le point le plus important de cette liste.

## Recommandations

### P0 — avant toute mise en ligne

1. **Relire les pages avant de les inscrire au registre**, en commençant par celles qui citent le droit et par les pages métier. Liste et grille de relecture : [08_INDEXATION_PLAN.md](../seo/08_INDEXATION_PLAN.md).
2. **Faire valider par Brittany Dreano** les seize titres et descriptions raccourcis, les deux hubs et la page de méthode éditoriale : ce sont ses mots.
3. **Ne pas commiter `outils/`** : près de 200 Mo d'outils et de supports, dont de faux secrets de test. Ajouter les fichiers par dossier, ou l'inscrire dans `.gitignore`.
4. **Après déploiement, ouvrir le site console ouverte** : aucune erreur de Content-Security-Policy ne doit apparaître.

### P1

5. **Monter Astro en version 7**, dans un chantier à part. Lève l'avis critique. L'API de la CSP a changé entre les versions : prévoir de reprendre `astro.config.mjs` et de relancer tous les contrôles.
6. **Ouvrir Search Console et Bing Webmaster Tools**, soumettre le sitemap, relever l'état de départ.
7. **Identifier quel dépôt distant déclenche le déploiement** : la production est en retard sur le code, et trois dépôts distants coexistent.
8. **Vérifier l'adresse LinkedIn** (`/in/brittassit85/`, avec un seul « s ») : elle figure sur toutes les pages et dans les données structurées.

### P2

9. Publier des cas réels, avec accord écrit : c'est le signal d'expérience qui manque le plus.
10. Ajouter un enregistrement DMARC sur `brittassist.fr`.
11. Corriger chez l'hébergeur la redirection en deux sauts depuis `http://brittassist.fr`.
12. Brancher `npm run qa` et le contrôle en navigateur dans une intégration continue.
13. Vérifier l'éligibilité d'une fiche d'établissement Google.

### P3

14. Générer `llms.txt` à partir des données, pour qu'il suive les publications.
15. Décider du sort des quatre photos inutilisées de `public/images/`.
16. Compléter l'adresse dans les données structurées, si la propriétaire souhaite la publier.
17. Supprimer `public/.DS_Store` du poste de travail.

## Actions manuelles

| Action | Où | Quand |
| --- | --- | --- |
| Relire et inscrire les pages au registre | `src/data/relectures.mjs` | Par vagues |
| Commiter et déployer | Git, Vercel | Après validation des P0 |
| Soumettre `sitemap-index.xml` | Search Console, Bing Webmaster Tools | Après le premier déploiement |
| Demander l'indexation des deux hubs | Search Console | Après le premier déploiement |
| Contrôler `/tarifs` et la redirection vendéenne | `curl`, navigateur | Après le premier déploiement |
| Tester une page de chaque gabarit | Test des résultats enrichis | Après le premier déploiement |
| Envoyer un message de test par chaque formulaire | Site en ligne | Après le premier déploiement |
| Suivre indexation, impressions, clics | Search Console | À trois puis six semaines après chaque vague |
| Suivre les Core Web Vitals de terrain | Search Console | Quand les données existent |
| Revérifier les règles citées | Pages « repères » | À chaque changement de règle, et une fois par an |

## Documents

| Document | Contenu |
| --- | --- |
| `docs/sentinel/00_SENTINEL_DISCOVERY.md` | Ce que contient SENTINEL, ce qui a été lancé |
| `docs/sentinel/01_SENTINEL_SITE_AUDIT.md` | Audit et ré-audit, contrôle par contrôle |
| `docs/site-audit/01_SITE_INVENTORY.md` | Inventaire du site |
| `docs/site-audit/02_BASELINE_BEFORE.md` | État de référence |
| `docs/site-audit/03_FIXES_IMPLEMENTED.md` | Corrections, fichiers, retour arrière |
| `docs/site-audit/04_FINAL_VALIDATION.md` | Validation finale |
| `docs/seo/01_KEYWORD_INTENT_MAP.md` | Intentions, sujets retenus et écartés |
| `docs/seo/02_100_PAGE_CONTENT_MAP.md` | Matrice des 100 pages |
| `docs/seo/03_INTERNAL_LINK_GRAPH.md` | Maillage interne |
| `docs/seo/04_DUPLICATION_AND_CANNIBALIZATION.md` | Doublons et cannibalisation |
| `docs/seo/05_TECHNICAL_SEO_AUDIT.md` | SEO technique, avant et après |
| `docs/seo/06_STRUCTURED_DATA.md` | Données structurées |
| `docs/seo/07_AI_SEARCH_GEO_READINESS.md` | Moteurs de réponse |
| `docs/seo/08_INDEXATION_PLAN.md` | Plan de publication et d'indexation |
| `docs/seo/09_FINAL_100_PAGE_QA.md` | Contrôle page par page |
