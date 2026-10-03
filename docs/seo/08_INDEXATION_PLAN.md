# 08 — Plan d'indexation

Date : 3 octobre 2026.

## État au moment de la livraison

| Élément | État |
| --- | --- |
| Code | Commité sur la branche `seo/audit-sentinel-100-pages`, **non fusionné dans `main`, non déployé** |
| Production | Inchangée ; elle sert une version antérieure au dépôt |
| Branche `main` distante | Porte une refonte « V5 » absente du point de départ de ce chantier : à trancher avant tout déploiement (voir le rapport final) |
| Pages indexables après déploiement, sans autre action | 50 : les 48 existantes, plus `/assistante` et `/assistante-independante` |
| Pages prêtes, en attente de relecture | 99 : 92 guides, 6 pages métier, la page de méthode éditoriale |
| Demande d'indexation à Google ou Bing | **Aucune.** Aucun accès à Search Console ni à Bing Webmaster Tools |

Rien n'a été soumis à un moteur de recherche. Tout ce qui suit est à faire par une personne.

## Pourquoi publier par vagues

Trois raisons, par ordre d'importance.

1. **La relecture est obligatoire.** Google demande que tout contenu préparé avec une IA soit vérifié par une personne avant publication. Relire cent pages d'un coup n'est pas relire.
2. **Passer de 50 à 150 pages en un jour** est le profil exact d'une production en série. Un rythme régulier, par dossier, ressemble à ce qu'il est : un travail éditorial.
3. **Mesurer.** Publier un dossier, regarder ce qu'il produit, puis décider du suivant.

## Ordre de publication proposé

L'ordre repose sur un raisonnement, pas sur des données de recherche : il devra être revu dès que Search Console en fournira.

| Vague | Contenu | Pages | Pourquoi d'abord |
| --- | --- | --- | --- |
| 0 | Déploiement des corrections et des deux hubs | 2 | Corrige deux erreurs 404 ; aucun contenu à relire |
| 1 | Dossier « Devis, factures et relances » + page de méthode éditoriale | 14 | Sujet d'actualité (facturation électronique), sources officielles vérifiées, mène à une prestation claire |
| 2 | Dossier « Externaliser et déléguer » | 15 | Prolonge les douze guides existants ; au plus près de l'offre |
| 3 | Dossier « Administratif d'entreprise » | 12 | Premier univers du périmètre |
| 4 | Dossier « Confidentialité, accès et outils » | 11 | Lève le frein principal à la délégation |
| 5 | Dossier « Agenda, e-mails et réunions » | 12 | — |
| 6 | Pages métier | 6 | Écrites à la première personne : c'est la relecture la plus exigeante |
| 7 | Dossiers « Situations », « Déplacements », « Modèles » | 29 | — |

Un rythme d'une vague toutes les deux à trois semaines laisse le temps de relire et d'observer.

**Règle de cohérence** : publier le pilier d'un dossier en même temps que ses premières pages. Un pilier publié seul afficherait un dossier vide ; des pages publiées sans leur pilier perdraient leur fil d'Ariane à trois niveaux. Le site reste cohérent dans les deux cas — les liens vers des pages non publiées sont retirés automatiquement — mais le dossier est plus lisible complet.

## Marche à suivre pour chaque vague

```bash
# 1. Lire les pages
npm run build:apercu && npm run preview        # http://localhost:4321

# 2. Corriger le texte dans src/data/dossiers/<dossier>.ts, si besoin

# 3. Inscrire les pages relues dans src/data/relectures.mjs
#    '/guides/mentions-obligatoires-facture': '2026-10-06',

# 4. Contrôler
npm run qa                                      # gate éditorial + build + audit strict
npm run servir &                                # serveur local avec les en-têtes de vercel.json
PLAYWRIGHT_ROOT=… node scripts/browser-check.mjs --base http://127.0.0.1:4322
node scripts/check-sources.mjs                  # les liens officiels répondent-ils encore ?

# 5. Régénérer les documents de suivi, puis commiter et déployer
npm run docs:seo
```

## Ce que la relecture doit vérifier

Pour chaque page, par la personne dont le nom figurera dessus :

- [ ] Ce qui est dit du fonctionnement de BrittAssist est-il exact ?
- [ ] Les règles citées correspondent-elles à la page officielle, **aujourd'hui** ? Ouvrir chaque lien de la rubrique « Références ».
- [ ] Les montants, délais et dates sont-ils toujours en vigueur ?
- [ ] Y a-t-il un exemple vécu à ajouter, sans nommer personne ?
- [ ] Le ton est-il le sien ?
- [ ] La page dit-elle quelque chose qu'elle n'aurait pas dit ?

Les pages les plus sensibles, à relire en priorité et avec le plus de soin :

| Page | Raison |
| --- | --- |
| `/guides/requalification-assistante-independante-salariat` | Droit du travail |
| `/guides/mise-en-demeure-et-injonction-de-payer` | Procédure judiciaire |
| `/guides/delais-de-paiement-et-penalites-de-retard` | Montants d'amendes |
| `/guides/facturation-electronique-tpe` | Réforme en cours, calendrier susceptible d'évoluer |
| `/guides/duree-de-conservation-documents-entreprise` | Loi du 25 juin 2026 |
| `/guides/facture-de-situation-et-retenue-de-garantie` | Loi de 1971 ; lien Légifrance non vérifiable par script (403) |
| `/guides/premiere-embauche-formalites-administratives` | Droit social |
| Les six pages métier | Réponses écrites à la première personne |
| `/methode-editoriale` | Engagements pris au nom de Brittany Dreano |

## Actions manuelles après le premier déploiement

### Google Search Console

1. Vérifier que la propriété couvre `https://www.brittassist.fr` (le fichier de vérification est déjà dans `public/`).
2. Soumettre `https://www.brittassist.fr/sitemap-index.xml`.
3. Inspecter `/assistante` et `/assistante-independante`, puis demander leur indexation.
4. Vérifier que `/tarifs` répond 200 et n'est plus redirigée.
5. Vérifier que `/assistante-administrative-vendee` mène en un saut à `/assistante-independante/vendee`.
6. Relever, comme point de départ : pages indexées, pages exclues et leur motif, requêtes, clics, impressions.

### Bing Webmaster Tools

1. Ajouter le site, ou l'importer depuis Search Console.
2. Soumettre le même sitemap.

### Après chaque vague

1. Inspecter le pilier publié et demander son indexation ; le sitemap suffit pour les autres pages.
2. À trois semaines : les pages sont-elles indexées ? Sinon, lire le motif d'exclusion avant de publier la vague suivante.
3. À six semaines : quelles requêtes amènent des impressions ? Ajuster titres et descriptions des pages vues mais peu cliquées.

### Contrôles à faire sur la production

Les contrôles de ce chantier ont été faits en local. À refaire après déploiement :

```bash
curl -sI https://www.brittassist.fr/ | grep -i -E 'content-security|strict-transport|x-frame'
curl -s -o /dev/null -w '%{http_code}\n' https://www.brittassist.fr/assistante
curl -s -o /dev/null -w '%{http_code}\n' https://www.brittassist.fr/une-page-qui-n-existe-pas
curl -sI https://www.brittassist.fr/fonts/manrope-latin-400-normal.woff2 | grep -i cache-control
```

Puis ouvrir le site dans un navigateur, console ouverte : aucune erreur de Content-Security-Policy ne doit apparaître. C'est le seul contrôle qui confirme que l'en-tête CSP et la balise CSP cohabitent chez l'hébergeur comme en local.

## Ce qu'il ne faut pas attendre

- Une indexation garantie : un sitemap signale des adresses, il ne les impose pas.
- Un classement donné, ni une présence dans les réponses d'IA.
- Un effet immédiat : une page nouvelle sur un domaine récent met des semaines à trouver sa place.
