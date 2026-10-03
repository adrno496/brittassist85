# 01 — Carte des intentions de recherche

Date : 3 octobre 2026 · Site : BrittAssist (`https://www.brittassist.fr`).

## Ce que cette carte est, et ce qu'elle n'est pas

- Elle part de l'offre réelle du site et des questions qu'un client se pose avant, pendant et après une délégation.
- **Elle ne repose sur aucune donnée de volume ni de positionnement.** Aucun outil de mots-clés, aucun accès à Search Console ou à Bing Webmaster Tools n'était disponible. Les « mots-clés principaux » sont des formulations de requête plausibles, pas des requêtes mesurées.
- **Aucune analyse de pages de résultats n'a été menée.** La recherche web a servi à vérifier les règles citées dans les pages (sources officielles), pas à étudier la concurrence. La concurrence est donc **non testée**.
- Conséquence : l'ordre de publication proposé dans [08_INDEXATION_PLAN.md](08_INDEXATION_PLAN.md) devra être corrigé par les données réelles dès qu'elles existeront.

## L'offre réelle

Établi par lecture du site (`/`, `/private-office`, `/services`, `/tarifs`, `/cgv`, `llms.txt`).

| Élément | Constat |
| --- | --- |
| Qui | Brittany Dreano, assistante de direction indépendante, sept ans d'assistance en entreprise |
| Quoi | Un « Private Office » externalisé : administratif, agenda, déplacements, réservations, coordination de prestataires, organisation personnelle, échanges en anglais |
| Formules | Executive Private Office à partir de 700 € par mois ; sur mesure sur devis ; mission ponctuelle sur devis |
| Hors périmètre, explicitement | Tenue comptable et déclarations fiscales, conseil juridique et rédaction d'actes, développement technique, production éditoriale |
| Où | Une seule implantation, La Roche-sur-Yon (Vendée) ; travail à distance, France et international ; français et anglais |
| Pour qui | Entrepreneurs, dirigeants de TPE et PME, artisans, professions libérales, indépendants |
| Conversion attendue | Une prise de contact : formulaire ou rendez-vous en ligne. Rien ne se vend sur le site |

Ce que le site **ne peut pas** revendiquer, faute de preuve publiable : cas clients, témoignages, chiffres de résultat (voir `CAS_CLIENTS_A_DOCUMENTER.md`).

## Ce que les 49 pages existantes couvraient déjà

| Famille | Pages | Intention couverte |
| --- | --- | --- |
| Prestations `/services/<slug>` | 13 | Transactionnelle : « déléguer sa facturation », « faire organiser ses déplacements » |
| Métiers `/assistante/<slug>` | 8 | Commerciale, entrée par le métier |
| Zones `/assistante-independante/<slug>` | 5 | Locale |
| Guides `/guides/<slug>` | 12 | Décision : statut, prix, définition, choix, démarrage |
| Pages principales | 7 | Marque, offre, tarifs, contact |

Trous constatés, avant ce chantier :

1. **Aucune page sur le « comment faire »** de l'administratif : facturer, relancer, classer, conserver. C'est pourtant ce que recherche un dirigeant bien avant de songer à déléguer.
2. **Rien sur ce qui suit la décision** : contrat, risque juridique, fin de collaboration.
3. **Rien sur les outils et la sécurité** : accès, mots de passe, signature électronique, IA.
4. **Aucune entrée par la situation** : retard accumulé, absence, reprise, saison.
5. **Deux hubs manquants** : `/assistante` et `/assistante-independante` répondaient 404.

## Les dix familles d'intentions retenues

| Famille | Nature de l'intention | Pages nouvelles | Pourquoi BrittAssist est légitime | Vers quelle offre |
| --- | --- | --- | --- | --- |
| Externaliser et déléguer | Décision, comparaison, méthode | 15 | C'est le métier exercé | Contact, tarifs |
| Administratif d'entreprise | Méthode, référence | 12 | Premier univers du périmètre (« Executive Admin ») | `/services/gestion-administrative` |
| Devis, factures et relances | Référence sourcée, méthode | 13 | Ligne « facturation » du périmètre | `/services/facturation` |
| Agenda, e-mails et réunions | Méthode, modèle | 12 | Univers « Agenda & Coordination » | `/services/gestion-agenda` |
| Déplacements et événements | Méthode, modèle | 9 | Univers « Travel » et missions ponctuelles | `/services/organisation-deplacements` |
| Confidentialité, accès et outils | Problème-solution, référence | 11 | Condition de toute délégation ; question posée à chaque premier échange | `/private-office` |
| Situations de dirigeant | Problème-solution | 11 | Entrée par le vécu, avant toute idée de prestation | Contact |
| Modèles et checklists | Modèle | 9 | Les trames d'un suivi délégué | `/private-office` |
| Par métier | Commerciale | 6 pages + 1 hub | Même périmètre, vocabulaire du secteur | Contact |
| Par zone | Navigation | 1 hub | Une seule implantation, à dire clairement | Contact |

Total : **100 pages**. La matrice complète, avec le mot-clé, le persona et la différenciation de chacune, est dans [02_100_PAGE_CONTENT_MAP.md](02_100_PAGE_CONTENT_MAP.md).

## Répartition par nature, et écart avec la répartition suggérée

| Nature | Suggéré | Retenu | Raison de l'écart |
| --- | --- | --- | --- |
| Piliers et hubs | 10 | 10 | 8 piliers thématiques, 2 hubs |
| Problèmes / solutions | 20 | 11 | Seules les situations où une assistance apporte une réponse distincte ont été gardées. Le reste aurait répété les pages de méthode sous un autre titre |
| Guides pratiques et méthodes | 15 | 46 | C'est le cœur de la demande réelle : « comment faire ». Chaque méthode a un objet distinct |
| Cas d'usage / métiers | 15 | 6 | Une page métier n'a de valeur que si son vocabulaire est celui du secteur. Six secteurs ont pu être traités sérieusement ; au-delà, les pages seraient devenues des variantes |
| Comparatifs / « comment choisir » | 10 | 8 | Comparatifs de critères, jamais de marques : aucun produit n'est cité |
| Sécurité / conformité | 10 | 8 repères sourcés, plus le dossier « Confidentialité » | Limité à ce qu'une source officielle permet d'affirmer |
| Ressources / modèles | 10 | 11 | — |
| Pages locales | 10 | **0** nouvelle page, 1 hub | BrittAssist a une seule implantation. Toute page de ville supplémentaire aurait été une page satellite |

## Critères d'évaluation appliqués à chaque sujet

Chaque sujet candidat a été confronté à six questions. Un « non » à l'une des trois premières l'écartait.

1. **Adéquation** : le sujet touche-t-il un univers du périmètre, ou une question qui précède la délégation ?
2. **Réponse meilleure ou différente** : le site peut-il dire autre chose que la page officielle — un ordre d'action, un modèle, ce qui se délègue ?
3. **Vérifiabilité** : tout fait cité peut-il être rattaché à une source officielle, ou la page peut-elle s'en passer ?
4. **Intention distincte** : une autre page, existante ou prévue, vise-t-elle déjà cette requête ?
5. **Chemin vers une action** : la page mène-t-elle naturellement à une prestation ou à un contact ?
6. **Risque** : le sujet expose-t-il à un conseil juridique ou comptable que BrittAssist ne donne pas ?

## Sujets écartés, et pourquoi

| Sujet envisagé | Motif du rejet |
| --- | --- |
| Pages par ville (Challans, Les Herbiers, Angers, Rennes…) | Pages satellites : rien de vrai et de spécifique à y dire |
| « Devenir assistante indépendante » | Mauvaise audience : attire des candidates au métier, pas des clients |
| Comparatifs de logiciels par marque | Faits non vérifiables durablement, risque d'erreur, soupçon d'affiliation |
| « Combien de temps perd un dirigeant en administratif » | Exigeait une statistique. Remplacé par une grille pour mesurer son propre temps |
| Crédit d'impôt et services à la personne | Régime qui ne concerne pas l'assistance aux entreprises ; risque de fausse promesse fiscale |
| Préparer un contrôle fiscal ou Urssaf | Conseil juridique et comptable, hors périmètre |
| Numérisation et valeur probante des copies | Règles précises et techniques ; renvoyé à l'expert-comptable dans les pages concernées |
| Office manager ou assistante de direction | Déjà traité dans le guide existant « Le métier d'executive assistant » |
| Assistante à l'heure ou au forfait | Déjà traité dans le guide existant sur les prix |
| Conseillers en gestion de patrimoine, courtiers | Métiers très réglementés : le risque d'inexactitude dépassait le bénéfice |
| RGPD : clauses de sous-traitance | Trop proche du guide existant sur la confidentialité ; traité comme section du guide sur le contrat |

## Intentions par étape du parcours

| Étape | Question type | Pages qui y répondent |
| --- | --- | --- |
| Avant d'y penser | « Comment relancer une facture ? », « Combien de temps garder mes papiers ? » | Dossiers Facturation, Administratif, Agenda, Déplacements |
| Le problème devient visible | « Je suis débordé », « tout passe par moi » | Dossier Situations |
| Envisager de déléguer | « Quand prendre une assistante ? », « Est-ce rentable ? » | Dossier Externaliser, guides existants |
| Comparer | « Indépendante ou salariée ? », « IA ou assistante ? », « conciergerie ? » | Comparatifs, guides existants |
| Lever les freins | « Je lui donne mes mots de passe ? », « et la requalification ? » | Dossier Confidentialité, repères juridiques |
| Décider | « Pour mon métier ? », « à quel prix ? » | Pages métier, `/tarifs`, `/private-office` |
| Faire fonctionner | « Comment briefer, suivre, faire le point ? » | Méthodes et modèles |
| Sortir | « Comment arrêter proprement ? » | Fin de collaboration, note de passation |

## Ce qui reste à mesurer

- Volumes et requêtes réelles : **non testé**.
- Concurrence sur chaque intention : **non testé**.
- Pages existantes déjà visibles mais peu cliquées : **non testé** — c'est la première chose à regarder dans Search Console, avant de publier quoi que ce soit.
