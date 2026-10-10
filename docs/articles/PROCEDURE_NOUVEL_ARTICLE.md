# Procédure « Fais un nouvel article »

Procédure obligatoire pour tout agent (ou toute personne) qui ajoute un article à la rubrique `/articles`. Elle est appelée par [AGENTS.md](../../AGENTS.md), par [.github/copilot-instructions.md](../../.github/copilot-instructions.md) et par la commande Copilot `/nouvel-article` ([.github/prompts/nouvel-article.prompt.md](../../.github/prompts/nouvel-article.prompt.md)).

## Ce que fait chaque outil

| Outil | Rôle | Ce qu'il ne fait pas |
| --- | --- | --- |
| L'agent (VS Code, Claude Code…) | Cherche les actualités, ouvre les sources, rédige, décide | — |
| `npm run article:nouveau` | État de la rubrique : date du jour, créneau, dernière fiche, semaine déjà traitée | Ne cherche rien sur le web |
| `npm run article:nouveau -- --verifier "…"` | Pages existantes les plus proches d'une intention (anti-cannibalisation) | Ne juge pas la qualité |
| `npm run article:nouveau -- --creer …` | Crée une fiche squelette `SOURCES_A_VERIFIER` et l'inscrit au plan ; refuse une semaine déjà traitée ou future ; ne réécrit jamais une fiche existante | N'écrit pas l'article |
| `npm run articles:check` | Contrôle toutes les fiches, le registre et le plan (règles de `src/data/articles.mjs`) | — |
| `npm run article:publier -- --slug …` | Simulation : dit si la fiche peut être publiée aujourd'hui | — |
| `npm run article:publier -- --slug … --confirmer` | Inscrit la page dans `publications.mjs` à la date du jour, passe la fiche à `PUBLIE`, met à jour le plan ; annule tout en cas d'échec ; ne fait rien si déjà publié | Ne pousse pas, ne déploie pas, ne déclare aucune relecture |
| `npm run build` | Ne génère que les articles inscrits ; **échoue** si un article inscrit enfreint une règle | — |

Aucun outil du dépôt n'appelle d'API d'IA ni de service payant.

## A. Comprendre la demande

1. Lire `AGENTS.md`, cette procédure, les fiches de `src/content/articles/` et `docs/articles/plan-editorial-2026.json`.
2. `npm run article:nouveau` : la date affichée est la date réelle à Paris. Elle détermine le créneau (S01 = 1er–7 janvier 2026, puis tous les sept jours ; S42 commence le 15 octobre 2026).
3. Si le créneau du jour est déjà traité, ne pas créer de second article : soit traiter un créneau passé resté sans fiche (liste affichée), soit s'arrêter et le dire.

## B. Rechercher

1. Chercher 2 à 5 actualités **datées de la période du créneau** (publication d'un texte, annonce, alerte, ouverture d'un dispositif, entrée en vigueur). Sources par priorité : officielles françaises, puis européennes, puis communiqués des organismes concernés, puis presse spécialisée en complément.
2. **Ouvrir chaque page.** Relever : URL exacte, titre, organisme, date de publication (pas la date de mise à jour), date d'effet, date de consultation, un extrait reformulé.
3. Écarter : ce qui n'est connu que par un résumé de moteur ; ce qui a été publié après la période (sauf comme « ce qui a changé depuis », à part) ; la politique, les faits divers, la finance de marché.
4. Contradiction entre sources : lire le texte primaire, le citer, signaler l'incertitude dans l'article.
5. Choisir le candidat le plus utile **et** le plus distinct : `npm run article:nouveau -- --verifier "intention envisagée"`. Au-delà de 0,5, l'intention est probablement déjà couverte par un guide ou un article : changer d'angle ou renoncer.
6. Aucune actualité sérieuse : statut `SOURCES_INSUFFISANTES` dans le plan, avec la raison. Pas d'article forcé.

## C. Rédiger

```bash
npm run article:nouveau -- --creer --slug <slug-descriptif> --categorie <id> --sensibilite <reglementaire|standard> [--semaine Sxx]
```

Catégories : `formalites`, `facturation`, `social`, `fiscalite`, `donnees-securite`, `outils-ia`, `deplacements`, `territoire`.
Sensibilité : `reglementaire` pour tout sujet juridique, fiscal, social ou créant une obligation ; `standard` sinon.

### Le frontmatter (schéma : `src/content.config.ts`)

| Champ | Règle |
| --- | --- |
| `title` | ≤ 70 caractères, finit par « · BrittAssist », unique sur le site |
| `description` | 70 à 165 caractères, informative, unique |
| `h1`, `summary` | Titre visible et chapô |
| `intention` | Requête principale, unique (comparée aux `motCle` des guides) |
| `semaineEditoriale`, `periodeDebut`, `periodeFin` | Posés par le script ; S41 peut finir le 10 ou le 14 octobre 2026 |
| `dateEvenement` | Jour de l'actualité, **dans** la période |
| `dateEffet` | Entrée en vigueur, si elle diffère |
| `sources[]` | `titre`, `organisme`, `url` (https), `type` (`primaire`, `officielle`, `presse`, `autre`), `datePublication`, `ouverte`, `consulteeLe` (si ouverte), `extrait` |
| `createdAt` | Jour de rédaction |
| `datePublished` | **Absent** tant que l'article n'est pas publié ; posé par `article:publier` |
| `dateModified` | Seulement après une modification significative, avec la même date dans `MODIFICATIONS_ARTICLES` (`src/data/dates.mjs`) |
| `editorialStatus` | `SOURCES_A_VERIFIER` → `BROUILLON` → `A_RELIRE` → `QA_PASS` / `APPROUVE` → `PUBLIE` |
| `reviewedAt` | Seulement si `relectures.mjs` porte la même date pour la page |
| `approvedBy` | Seulement si une validation du propriétaire est inscrite dans `relectures.mjs` |
| `relatedGuides` | Au moins un guide **publié** |
| `notesInternes` | Jamais affiché |

### Le corps (Markdown, sans HTML)

- Pas de `#` (le titre est le seul h1). Intertitres `##` et `###`.
- Rubriques exigées : `## Ce que cela change pour vous` et `## Checklist…`.
- Un exemple inventé est annoncé comme tel : `## Exemple fictif : …`.
- Ce qui a changé après la semaine couverte va dans une section à part (« Ce qui a changé depuis »).
- Liens internes vers des pages existantes ; liens externes en https.
- Pas de promesse de résultat, pas de statistique sans source, pas de superlatif commercial (liste dans `src/data/regles-editoriales.mjs`).
- Conclusion BrittAssist discrète, cohérente avec le sujet, sans service inventé.

## D. Contrôler

```bash
npm run articles:check   # règles de la rubrique, registre, plan
npm test
npm run qa:apercu        # build avec brouillons : la page est générée en noindex
npm run qa               # build de production
```

Corriger la fiche, jamais le contrôle. Puis passer la fiche à `QA_PASS` (sujet standard) ou `A_RELIRE` (sujet réglementaire).

## E. Publier

- **Sujet standard**, contrôles réussis, au moins une source primaire ou officielle ouverte et publiée au plus tard le dernier jour de la période :
  ```bash
  npm run article:publier -- --slug <slug>              # simulation
  npm run article:publier -- --slug <slug> --confirmer  # inscription
  npm run qa
  ```
- **Sujet réglementaire** : demander au propriétaire sa validation, en lui donnant le lien d'aperçu et les sources. Après sa réponse explicite :
  1. ajouter une entrée à la liste `validations` de `src/data/relectures.mjs` (`date`, `par`, `declaration` = ses mots, `pages`) ;
  2. passer la fiche à `APPROUVE`, `approvedBy: "<nom>"` ;
  3. `article:publier … --confirmer`, puis `npm run qa`.
- Relecture par Brittany Dreano elle-même : ligne dans l'objet `relectures` et `reviewedAt` à la même date. Jamais sans relecture réelle.

## F. Livrer

```bash
git status
git add src/content/articles/<slug>.md src/data/publications.mjs docs/articles/plan-editorial-2026.json   # + relectures.mjs si validation
git commit -m "feat(articles): publie <titre court>"
git push -u origin <branche autorisée>
```

- Jamais `git add -A` à l'aveugle, jamais de force push, jamais `git reset --hard`.
- Vercel déploie depuis Git. « En ligne » seulement après avoir vu `https://www.brittassist.fr/articles/<slug>` répondre 200 avec le bon contenu. Sinon : `DEPLOIEMENT_NON_CONFIRME`, et le plan garde cet état.
- Retour arrière : supprimer la ligne de `publications.mjs` (la page redevient un brouillon), ou `git revert <commit>`.

## G. Rendre compte

| Rubrique | Contenu |
| --- | --- |
| Titre et URL | locale (`npm run servir` → `http://127.0.0.1:4322/articles/<slug>`) et de production si vérifiée |
| Actualité | date, nature, période couverte |
| Sources | liste, avec date de consultation |
| Publication | date réelle, ou « non publié » |
| Contrôles | commandes lancées et résultats exacts |
| Git | commit et push réellement effectués |
| Statut | `BROUILLON`, `PUBLIE_LOCAL`, `DEPLOIEMENT_NON_CONFIRME` ou `EN_LIGNE_VERIFIE` |
| En attente | validation humaine, vérification de source, déploiement |

## Exemple d'exécution (sans accès web, 10 octobre 2026)

```text
$ npm run article:nouveau
Date du jour : 2026-10-10 · créneau du jour : S41 (2026-10-08 → 2026-10-14)
Ce créneau est déjà traité par « numero-unique-dgfip-professionnels » : ne pas créer de second article sans raison.
Dernière fiche : numero-unique-dgfip-professionnels (S41, SOURCES_A_VERIFIER) · 8 fiche(s)

$ npm run article:publier -- --slug numero-unique-dgfip-professionnels
Publication refusée : 3 blocage(s).
  preuve-absente     aucune source primaire ou officielle ouverte, datée au plus tard de la fin de la semaine
  approbation-requise  sujet juridique, fiscal ou social : validation du propriétaire ou relecture exigée
  statut-non-pret    statut SOURCES_A_VERIFIER, attendu APPROUVE
```

Compte rendu attendu dans ce cas : statut `BROUILLON` ; blocage = sources non ouvertes faute d'accès web, et validation du propriétaire requise (sujet fiscal).

## Automatisation hebdomadaire

Non mise en place. Un workflow GitHub Actions planifié pourrait, une fois par semaine, ouvrir une issue « Article de la semaine Sxx » rappelant cette procédure. Il ne publierait rien : la recherche et la rédaction demandent un agent avec accès web réel et une décision humaine pour les sujets réglementaires. À créer seulement sur demande du propriétaire.
