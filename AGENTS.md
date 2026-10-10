# Instructions pour les agents — site BrittAssist

Ce fichier est lu par les agents de code (Copilot dans VS Code, Claude Code, Codex et autres) qui ouvrent ce dépôt. Il complète le [README](README.md), qui reste la référence technique. En cas de doute, le README et les registres du dépôt l'emportent sur une habitude d'agent.

## Le site en bref

- Site statique Astro 5, déployé sur Vercel ; une fonction `/api/contact` (Brevo). Domaine canonique : `https://www.brittassist.fr`.
- BrittAssist : assistance de direction externalisée (« Private Office ») de Brittany Dreano, à La Roche-sur-Yon. Ne jamais inventer de service, de prix, de garantie, de témoignage ni de résultat client.
- Deux registres décident de la mise en ligne des pages éditoriales : `src/data/publications.mjs` (« en ligne, sans relecture ») et `src/data/relectures.mjs` (« relu par Brittany Dreano, à cette date »). Une page absente des deux est un brouillon : générée seulement par `npm run build:apercu`, en `noindex`, hors sitemap.
- **N'inscrire dans `relectures.mjs` qu'une page réellement relue par Brittany Dreano.** C'est une déclaration publique faite en son nom.
- Ne pas affaiblir la CSP, le consentement, `vercel.json`, `api/contact.js`, les contrôles de qualité ni la politique de relecture pour faire passer un contenu. `SEO_GATE=off` est un contournement d'urgence, jamais une solution.
- Ne jamais lire ni afficher `.env` ou un secret.

## Contrôles à lancer avant tout commit

```bash
npm run check          # types
npm test               # registres, audit, articles, formulaires
npm run qa             # gate éditorial + contrôle des articles + build + audit SEO strict
npm run qa:apercu      # idem avec les brouillons (aucun ne doit devenir indexable)
```

`npm run qa:navigateur` et `npm run qa:menu` demandent Playwright (voir README) : sans lui, ils répondent « NON TESTÉ », ce qui n'est pas un succès.

---

## Commande « Fais un nouvel article »

Quand le propriétaire écrit **« Fais un nouvel article »** (ou une variante : « nouvel article », « article de la semaine »), cela veut dire :

> Rechercher les informations fiables les plus récentes utiles à la clientèle de BrittAssist depuis le dernier créneau couvert, choisir un sujet distinct des pages existantes, rédiger un article original et sourcé, exécuter les contrôles, et le publier **si c'est autorisé et techniquement possible** ; sinon laisser un brouillon et dire précisément ce qui bloque.

La procédure complète, avec les commandes, est dans [docs/articles/PROCEDURE_NOUVEL_ARTICLE.md](docs/articles/PROCEDURE_NOUVEL_ARTICLE.md). Elle est obligatoire. Résumé :

1. **Comprendre** : lire ce fichier, la procédure, `src/content/articles/`, `docs/articles/plan-editorial-2026.json`. Prendre la **date réelle du jour** (Europe/Paris), jamais une date figée. `npm run article:nouveau` donne le créneau du jour, la dernière fiche et dit si la semaine est déjà traitée. Une semaine déjà traitée ne reçoit pas de second article sans raison explicite.
2. **Rechercher** : 2 à 5 actualités candidates datées de la période, d'abord sur les sources officielles (entreprendre.service-public.gouv.fr, service-public.gouv.fr, economie.gouv.fr, impots.gouv.fr, urssaf.fr, legifrance.gouv.fr, cnil.fr, cybermalveillance.gouv.fr, cyber.gouv.fr, insee.fr, europa.eu, CCI/CMA/Région Pays de la Loire). **Ouvrir chaque source** : un résumé de moteur de recherche n'est pas une source consultée. Relever URL, titre, organisme, date de publication (pas de mise à jour), date d'effet, date de consultation. Vérifier l'angle avec `npm run article:nouveau -- --verifier "intention"`.
3. **Rédiger** : `npm run article:nouveau -- --creer --slug <slug> --categorie <id> --sensibilite <reglementaire|standard>` crée la fiche squelette. La compléter : français clair, ce qui change / pour qui / à partir de quand / quoi faire, rubriques « Ce que cela change pour vous » et « Checklist… », exemple signalé « fictif », liens vers des guides publiés, sources avec `ouverte: true` et `consulteeLe` **uniquement si la page a réellement été ouverte**. Aucune actualité inventée, aucune mesure présentée comme en vigueur avant sa date.
4. **Contrôler** : `npm run articles:check`, `npm test`, `npm run qa:apercu`, puis `npm run qa`. Corriger l'article, jamais le contrôle.
5. **Publier** :
   - sujet **standard** (cybersécurité pratique, outils, organisation, information locale) : passer la fiche à `QA_PASS` une fois les contrôles réussis, puis `npm run article:publier -- --slug <slug>` (simulation) et `-- --confirmer`.
   - sujet **réglementaire** (juridique, fiscal, social, obligation) : laisser la fiche en `A_RELIRE` et **demander la validation du propriétaire**. Après validation explicite, l'inscrire dans la liste `validations` de `relectures.mjs` (ses mots, la date, la page), passer la fiche à `APPROUVE` avec `approvedBy`, puis publier.
   - la date de publication est **le jour réel de la mise en ligne**, posée par le script. Jamais antidatée.
6. **Livrer** : `git add` ciblé (la fiche, `publications.mjs`, le plan ; jamais `git add -A`), commit, push sur la branche autorisée, **sans force push**. Vercel déploie depuis Git : ne dire « en ligne » qu'après avoir vu la page servie (HTTP 200, contenu attendu). Sinon : `DEPLOIEMENT_NON_CONFIRME`. Conflit, droits absents, CI rouge, revue requise : ne pas contourner, le dire.
7. **Rendre compte** : titre, date de l'actualité, sources ouvertes, URL locale et de production (si vérifiée), date de publication, contrôles exécutés et résultats, commit/push réels, statut (`BROUILLON`, `PUBLIE_LOCAL`, `DEPLOIEMENT_NON_CONFIRME`, `EN_LIGNE_VERIFIE`), ce qui attend une validation humaine.

**Si l'agent n'a pas d'accès web réel** : ne rien inventer. Créer la fiche au statut `SOURCES_A_VERIFIER`, avec les pistes et leurs URL marquées `ouverte: false`, et le signaler. Les scripts du dépôt ne naviguent pas et n'écrivent pas d'actualités : ils préparent, contrôlent et publient.

Le statut des 41 semaines rétrospectives (1er janvier – 8 octobre 2026) est dans [docs/articles/PLAN_EDITORIAL_2026.md](docs/articles/PLAN_EDITORIAL_2026.md).
