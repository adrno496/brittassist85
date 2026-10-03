# 07 — Préparation aux moteurs de réponse (GEO)

Date : 3 octobre 2026. « GEO » désigne ici l'optimisation pour les moteurs génératifs : AI Overviews et AI Mode de Google, Copilot, assistants conversationnels.

## Ce qu'il faut savoir d'abord

**Il n'existe ni balise, ni fichier, ni réglage qui garantisse d'être cité.** Google l'écrit dans sa documentation, consultée le 3 octobre 2026 :

> « There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary. »
> « You don't need to create new machine readable files, AI text files, or markup to appear in these features. »
> « To be eligible to be shown as a supporting link in AI Overviews or AI Mode, a page must be indexed and eligible to be shown in Google Search with a snippet. »

La seule condition technique est donc d'être indexé et de pouvoir afficher un extrait. Tout le reste relève de la qualité du contenu et des fondamentaux du référencement. Ce document classe chaque action selon son niveau de preuve :

- **VÉRIFIÉ** — constaté dans une source officielle ou dans le code.
- **TESTÉ** — contrôlé par un test exécuté.
- **DÉDUIT** — conséquence logique, non mesurée.
- **RECOMMANDÉ** — bonne pratique, sans preuve d'effet sur ce site.
- **RESTE À TESTER** — ne peut être mesuré qu'après mise en ligne.

## Ce qui a été fait

| Action | Niveau | Détail |
| --- | --- | --- |
| Les robots d'IA sont autorisés | VÉRIFIÉ | `robots.txt` nomme GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Bingbot, CCBot, tous en `Allow: /`. Inchangé |
| Le contenu est dans le HTML | VÉRIFIÉ | Site pré-rendu, aucun contenu chargé par script |
| Aucune page indexable ne bloque l'extrait | TESTÉ | Aucun `nosnippet`, `max-snippet` ni `noindex` sur les 50 pages indexables |
| Réponse directe en tête de page | TESTÉ | Chaque guide ouvre sur un bloc « En bref » de trois à cinq phrases, autonomes. Le gate éditorial refuse une page qui en a moins de trois |
| Réponse reprise dans les données structurées | VÉRIFIÉ | `Article.abstract` contient la réponse courte |
| Sections lisibles hors contexte | VÉRIFIÉ | Intertitres descriptifs (« Les pénalités de retard », « Ce qu'il faut recenser »), jamais « Introduction » ni « Conclusion » |
| Questions et réponses | TESTÉ | Trois questions au moins par page, balisées et visibles ; l'audit vérifie la présence de chaque question dans le texte |
| Tableaux pour les comparaisons et les règles | VÉRIFIÉ | Tableaux HTML avec légende et en-têtes, là où l'information est tabulaire |
| Étapes numérotées | VÉRIFIÉ | Listes ordonnées pour les marches à suivre |
| Faits sourcés | TESTÉ | Toute page qui énonce une règle de droit cite sa source officielle ; le gate éditorial bloque sinon. 34 liens externes sur 37 répondent 200 ; 2 bloquent les robots ; 1 a expiré pendant le test |
| Sources datées | VÉRIFIÉ | Les pages précisent la date de consultation quand un montant ou un taux est cité |
| Pas de chiffre inventé | TESTÉ | Le gate éditorial bloque les pourcentages sans source, les gains chiffrés, les superlatifs commerciaux |
| Entités nommées de façon constante | VÉRIFIÉ | « BrittAssist », « Brittany Dreano », « Private Office », « La Roche-sur-Yon » : mêmes formes partout ; identifiants `@id` stables |
| Auteur et relecteur explicites | VÉRIFIÉ | Mention « Relu par Brittany Dreano le … » sur les pages relues ; `reviewedBy` et `lastReviewed` dans les données structurées |
| Transparence sur la méthode | VÉRIFIÉ | Page `/methode-editoriale` : qui écrit, avec quel outil, d'où viennent les faits. Soumise au registre de relecture |
| Fraîcheur visible et honnête | TESTÉ | « Mis à jour en … » sur chaque guide ; même date dans le sitemap et les données structurées ; aucune date future |
| Adresses stables | VÉRIFIÉ | Aucune adresse existante n'a changé ; les redirections en place sont conservées |
| Maillage thématique | TESTÉ | Chaque nouvelle page reçoit au moins 7 liens depuis le contenu d'autres pages ; profondeur de 2 clics au plus |
| Hubs explorables par un humain | TESTÉ | 8 piliers, 2 hubs, index `/guides` ; aucune page atteignable par le seul sitemap |
| Limites dites clairement | VÉRIFIÉ | Rubrique « Ce que cette page ne remplace pas » ; page consacrée à ce qu'une assistante ne fait pas |
| Performance et accessibilité | TESTÉ | Lighthouse en laboratoire : 99 à 100 ; axe-core : 0 violation sur 151 pages |
| `llms.txt` | VÉRIFIÉ | Présent, complété des deux hubs. Google indique qu'aucun fichier de ce type n'est nécessaire : il est conservé sans rien en attendre |

## Ce qui n'a pas été fait, volontairement

| Pratique | Pourquoi elle a été écartée |
| --- | --- |
| Texte écrit « pour les modèles » : listes de mots-clés, questions artificielles, phrases répétées | C'est du contenu sans valeur pour le lecteur, donc un risque au titre des règles anti-spam |
| Passages calibrés sur un nombre de mots « optimal » | Un outil d'audit le suggère (« passages de 134 à 167 mots »). Aucune source officielle ne l'appuie : la recommandation n'a pas été suivie |
| Balisage de données structurées sans contenu visible correspondant | Contraire aux consignes |
| Fausses preuves d'autorité : avis, notes, « vu dans » | Interdit par le cahier des charges, et par l'honnêteté |
| Pages de ville supplémentaires | Pages satellites |

## Ce que Google demande pour un contenu préparé avec une IA

Documentation consultée le 3 octobre 2026 (mise à jour le 1er octobre 2026) :

> « Using generative AI tools or other similar tools to generate many pages without adding value for users may violate Google's spam policy on scaled content abuse. »
> Il faut « manually factcheck and review all AI-generated content for accuracy and trustworthiness before publishing ».

C'est la raison d'être du **registre de relecture**. Les 98 pages nouvelles préparées avec une IA existent, sont testées et prêtes ; aucune n'est publiée tant qu'une personne ne l'a pas relue. La relecture n'est pas une formalité : elle est la condition qui sépare un contenu utile, assumé par un professionnel, d'une production en série.

## Ce qui reste à tester

| Question | Comment le savoir |
| --- | --- |
| Les pages sont-elles indexées ? | Search Console, rapport d'indexation des pages |
| Apparaissent-elles avec un extrait ? | Search Console, inspection d'URL |
| Sont-elles reprises dans des réponses d'IA ? | Aucun outil officiel ne le mesure de façon fiable. Observation manuelle sur quelques questions, et trafic référent depuis les assistants dans les statistiques |
| Bing et Copilot les connaissent-ils ? | Bing Webmaster Tools |
| Le balisage est-il lu sans erreur ? | Test des résultats enrichis, après déploiement |

## Ce qui pèsera le plus, et qui ne dépend pas du code

1. **La relecture par Brittany Dreano**, avec ses propres exemples là où elle en a. Un guide enrichi d'une expérience vécue vaut plus que dix guides corrects.
2. **Des cas réels**, publiés avec accord, selon la fiche de `CAS_CLIENTS_A_DOCUMENTER.md`. C'est le signal d'expérience qui manque le plus au site.
3. **Des mentions extérieures** : annuaires professionnels, fiche d'établissement, articles, partenaires. L'autorité ne se fabrique pas depuis le site.
4. **La régularité** : publier par vagues relues, puis mettre à jour quand une règle change.
