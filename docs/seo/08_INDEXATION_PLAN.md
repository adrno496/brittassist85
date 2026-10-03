# 08 — Plan d'indexation

Date : 3 octobre 2026, mis à jour le soir même après la décision de publier toutes les pages.

## État

| Élément | État |
| --- | --- |
| Pages construites par `npm run build` | 151 |
| Pages indexables, toutes au sitemap | 149 : les 48 existantes, 2 hubs, 98 pages nouvelles, la page de méthode éditoriale |
| Pages en `noindex`, hors sitemap | 2 : `/404` et `/questionnaire` |
| Pages publiées sans relecture humaine préalable | 99 : 92 guides, 6 pages métier, la page de méthode éditoriale |
| Pages relues par une personne, parmi ces 99 | 0 |
| Design | Refonte « V5 », en clair sur toutes les pages (voir le rapport final) |
| Site en ligne (`www.brittassist.fr`) | Inchangé : il sert une version antérieure, 39 adresses au sitemap, qui correspond au commit `3912e0e` du dépôt `bdassisttest` |
| Demande d'indexation à Google ou Bing | **Aucune.** Aucun accès à Search Console ni à Bing Webmaster Tools |

Rien n'a été soumis à un moteur de recherche. « Indexable » veut dire que rien, dans le site, n'empêche l'indexation ; cela ne dit pas que Google indexera la page.

## La décision du 3 octobre, et ce qu'elle engage

Le plan d'origine proposait de publier par vagues, chaque page après relecture. Le 3 octobre 2026, le propriétaire a décidé de rendre les 149 pages indexables en une fois.

Ce que cela implique, sans l'atténuer :

1. **Le site passe de 39 à 149 pages en un déploiement.** Les règles de Google sur le contenu produit à grande échelle visent le contenu sans valeur ajoutée, pas un nombre de pages. Aucun contrôle de ce dépôt ne permet de prédire comment ces pages seront jugées.
2. **Google demande qu'un contenu préparé avec une IA soit vérifié par une personne.** Ce n'est pas fait pour 99 pages.
3. **Plusieurs pages citent une règle de droit** (liste plus bas). Une erreur y serait publiée sous le nom de BrittAssist.
4. **Six pages métier parlent à la première personne**, à la place de Brittany Dreano, qui ne les a pas lues.

Ce qui a été fait pour que le site ne dise rien de faux :

- Aucune page ne se déclare relue : ni mention « Relu par Brittany Dreano », ni `reviewedBy` dans les données structurées. Vérifié sur le build : 0 occurrence.
- La page `/methode-editoriale` a été réécrite : elle dit que les guides sont préparés avec un outil d'IA et qu'un guide sans la mention n'a pas encore été relu.
- La publication et la relecture sont tenues dans deux registres distincts : `src/data/publications.mjs` et `src/data/relectures.mjs`.

Retour arrière, page par page : supprimer la ligne de la page dans `src/data/publications.mjs`. Elle redevient un brouillon, absente du build et du sitemap.

## Relire après publication : ordre proposé

L'ordre repose sur un raisonnement, pas sur des données de recherche : il devra être revu dès que Search Console en fournira.

| Priorité | Pages | Pourquoi d'abord |
| --- | --- | --- |
| 1 | Les pages sensibles du tableau suivant | Droit, montants, engagements pris au nom de Brittany Dreano |
| 2 | Les huit piliers | Ce sont les pages les plus liées : une erreur s'y voit le plus |
| 3 | Dossier « Devis, factures et relances » | Réforme de la facturation électronique en cours |
| 4 | Dossiers « Externaliser et déléguer » et « Confidentialité, accès et outils » | Au plus près de l'offre |
| 5 | Le reste | — |

Pages sensibles, à relire en premier :

| Page | Raison |
| --- | --- |
| `/guides/requalification-assistante-independante-salariat` | Droit du travail |
| `/guides/mise-en-demeure-et-injonction-de-payer` | Procédure judiciaire |
| `/guides/delais-de-paiement-et-penalites-de-retard` | Montants d'amendes |
| `/guides/facturation-electronique-tpe` | Réforme en cours, calendrier susceptible d'évoluer |
| `/guides/duree-de-conservation-documents-entreprise` | Loi du 25 juin 2026 |
| `/guides/facture-de-situation-et-retenue-de-garantie` | Loi de 1971 ; lien Légifrance non vérifiable par script (403) |
| `/guides/premiere-embauche-formalites-administratives` | Droit social |
| `/guides/mentions-obligatoires-facture` | Mentions légales et dates d'entrée en vigueur |
| Les six pages métier nouvelles | Réponses écrites à la première personne |
| `/methode-editoriale` | Engagements pris au nom de Brittany Dreano |

## Marche à suivre pour relire une page

```bash
# 1. Lire la page
npm run build && npm run preview                # http://localhost:4321

# 2. Corriger le texte dans src/data/dossiers/<dossier>.ts, si besoin

# 3. Inscrire la page relue dans src/data/relectures.mjs
#    '/guides/mentions-obligatoires-facture': '2026-10-06',

# 4. Contrôler
npm run qa                                      # contrôle éditorial + build + audit strict
node scripts/check-sources.mjs                  # les liens officiels répondent-ils encore ?

# 5. Régénérer les documents de suivi, puis commiter et déployer
npm run docs:seo
```

Ce que la relecture doit vérifier, par la personne dont le nom figurera sur la page :

- [ ] Ce qui est dit du fonctionnement de BrittAssist est-il exact ?
- [ ] Les règles citées correspondent-elles à la page officielle, **aujourd'hui** ? Ouvrir chaque lien de la rubrique « Références ».
- [ ] Les montants, délais et dates sont-ils toujours en vigueur ?
- [ ] Y a-t-il un exemple vécu à ajouter, sans nommer personne ?
- [ ] Le ton est-il le sien ?
- [ ] La page dit-elle quelque chose qu'elle n'aurait pas dit ?

## Actions manuelles après le déploiement

### Google Search Console

1. Vérifier que la propriété couvre `https://www.brittassist.fr` (le fichier de vérification est déjà dans `public/`).
2. Soumettre `https://www.brittassist.fr/sitemap-index.xml`.
3. Inspecter `/assistante`, `/assistante-independante` et les huit piliers, puis demander leur indexation. Le sitemap suffit pour les autres pages.
4. Vérifier que `/tarifs` répond 200 et n'est plus redirigée.
5. Vérifier que `/assistante-administrative-vendee` mène en un saut à `/assistante-independante/vendee`.
6. Relever, comme point de départ : pages indexées, pages exclues et leur motif, requêtes, clics, impressions.

### Bing Webmaster Tools

1. Ajouter le site, ou l'importer depuis Search Console.
2. Soumettre le même sitemap.

### Dans les semaines qui suivent

1. À trois semaines : combien de pages sont indexées ? Lire le motif d'exclusion des autres dans le rapport « Pages ». « Explorée, actuellement non indexée » en grand nombre est le signe que Google ne juge pas ces pages assez utiles : relire et enrichir avant d'en ajouter.
2. À six semaines : quelles requêtes amènent des impressions ? Ajuster titres et descriptions des pages vues mais peu cliquées.

### Contrôles à faire sur la production

Les contrôles de ce chantier ont été faits en local. À refaire après déploiement :

```bash
curl -sI https://www.brittassist.fr/ | grep -i -E 'content-security|strict-transport|x-frame'
curl -s -o /dev/null -w '%{http_code}\n' https://www.brittassist.fr/assistante
curl -s -o /dev/null -w '%{http_code}\n' https://www.brittassist.fr/une-page-qui-n-existe-pas
curl -s https://www.brittassist.fr/sitemap-0.xml | grep -o '<loc>' | wc -l      # 149 attendues
curl -sI https://www.brittassist.fr/fonts/manrope-latin-400-normal.woff2 | grep -i cache-control
```

Puis ouvrir le site dans un navigateur, console ouverte : aucune erreur de Content-Security-Policy ne doit apparaître. C'est le seul contrôle qui confirme que l'en-tête CSP et la balise CSP cohabitent chez l'hébergeur comme en local.

## Ce qu'il ne faut pas attendre

- Une indexation garantie : un sitemap signale des adresses, il ne les impose pas.
- Un classement donné, ni une présence dans les réponses d'IA.
- Un effet immédiat : une page nouvelle sur un domaine récent met des semaines à trouver sa place.
