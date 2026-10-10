---
mode: agent
description: "Fais un nouvel article : rechercher une actualité vérifiable utile aux clients de BrittAssist, rédiger, contrôler, publier si autorisé."
---

# Fais un nouvel article

Applique strictement la procédure de [docs/articles/PROCEDURE_NOUVEL_ARTICLE.md](../../docs/articles/PROCEDURE_NOUVEL_ARTICLE.md) et les règles de [AGENTS.md](../../AGENTS.md).

1. Lance `npm run article:nouveau` et lis le résultat : date du jour, créneau, dernière fiche, semaine déjà traitée ou non.
2. Recherche 2 à 5 actualités datées de la période, sur les sources officielles d'abord, et **ouvre chaque page** avant de t'en servir. Sans accès web réel : ne rien inventer, créer un brouillon `SOURCES_A_VERIFIER` et le dire.
3. Vérifie l'angle (`npm run article:nouveau -- --verifier "…"`), crée la fiche (`-- --creer --slug … --categorie … --sensibilite …`), rédige-la.
4. Lance `npm run articles:check`, `npm test`, `npm run qa:apercu`, `npm run qa` ; corrige l'article, jamais les contrôles.
5. Publie seulement si autorisé : sujet standard → `QA_PASS` puis `npm run article:publier -- --slug … --confirmer` ; sujet réglementaire → demande d'abord la validation du propriétaire.
6. Commit ciblé, push sans force ; vérifie le déploiement avant de dire « en ligne ».
7. Termine par le compte rendu demandé dans la procédure (titre, dates, sources, contrôles, commit, statut, attentes).

Contexte facultatif donné par l'utilisateur : ${input:precision:Thème, semaine ou contrainte particulière (laisser vide sinon)}
