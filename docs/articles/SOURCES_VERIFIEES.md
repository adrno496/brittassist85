# Sources vérifiées — rubrique Articles

> Fichier généré par `npm run docs:articles` le 2026-10-10. Il reprend les sources déclarées dans chaque fiche ; la colonne « Ouverte » dit si la page a réellement été lue.

## Bilan

- Sources déclarées dans les fiches : 20.
- **Sources ouvertes et vérifiées : 0.**
- Raison : le 10 octobre 2026, l'environnement d'exécution de l'agent ne pouvait ouvrir aucune page externe (résolution DNS et proxy refusés pour entreprendre.service-public.gouv.fr, cnil.fr, urssaf.fr, impots.gouv.fr, legifrance.gouv.fr, cybermalveillance.gouv.fr, economie.gouv.fr…). Seul le moteur de recherche répondait, avec des titres, des URL et des résumés. Ces résumés ont servi à **repérer** les pistes, jamais à **établir** un fait : aucune source n'est déclarée ouverte.
- Conséquence : aucun article n'est publiable. Le contrôle `preuve-absente` le garantit techniquement.

## Pour vérifier une fiche

1. Ouvrir chaque URL ; corriger l'URL si elle a changé.
2. Relever la date de publication réelle (pas la date de mise à jour) et la comparer à la période de la fiche.
3. Relire chaque affirmation de l'article contre la source ; supprimer ou corriger ce qui n'y figure pas.
4. Dans la fiche : `ouverte: true`, `consulteeLe: "AAAA-MM-JJ"`, extrait reformulé exact.
5. `npm run articles:check`, puis `npm run docs:articles`.

## Fiches

### S13 — Bilan 2025 de Cybermalveillance.gouv.fr : ce qu’une petite structure en retient

Fiche : [`bilan-cybermalveillance-2025-priorites-tpe.md`](../../src/content/articles/bilan-cybermalveillance-2025-priorites-tpe.md) · statut `SOURCES_A_VERIFIER` · actualité du 2026-03-26 (Publication d’un rapport d’activité)

| Source | Organisme | Type | Publiée le | Ouverte | Ce qu'elle établirait |
| --- | --- | --- | --- | --- | --- |
| [Communiqué de presse — rapport d’activité 2025 de Cybermalveillance.gouv.fr](https://www.cybermalveillance.gouv.fr/medias/2026/03/CP-RA2026.pdf) | Cybermalveillance.gouv.fr (GIP ACYMA) | primaire | 2026-03-26 | **non** | Présente le bilan 2025 : plus de 500 000 victimes assistées, en hausse d’environ 20 % sur un an (selon l’extrait du moteur de recherche). |
| [Rapport d’activité 2025 de Cybermalveillance.gouv.fr](https://www.vie-publique.fr/files/rapport/pdf/302708.pdf) | Vie-publique.fr (DILA) | officielle | non relevée | **non** | Version intégrale du rapport, mise à disposition par la DILA (date de mise en ligne non relevée). |

À vérifier : Sources non ouvertes. Ne citer que les chiffres du communiqué officiel. Les tendances par type de menace (hameçonnage en tête, violations de données en hausse) ne viennent que d’une source secondaire : ne pas les reprendre sans lecture du rapport.

### S25 — Après une fuite de données, la seconde arnaque : l’alerte de la CNIL du 24 juin 2026

Fiche : [`cnil-alerte-faux-organismes-fuite-de-donnees.md`](../../src/content/articles/cnil-alerte-faux-organismes-fuite-de-donnees.md) · statut `SOURCES_A_VERIFIER` · actualité du 2026-06-24 (Alerte publiée par la CNIL)

| Source | Organisme | Type | Publiée le | Ouverte | Ce qu'elle établirait |
| --- | --- | --- | --- | --- | --- |
| [Victimes de violations de données : restez vigilants face aux offres d’accompagnement](https://cnil.fr/fr/vigilance-accompagnement-violation-de-donnees) | CNIL | primaire | 2026-06-24 | **non** | Alerte sur des courriels de prétendus organismes qui proposent aux victimes de fuites de faire supprimer leurs données ; conseils de ne pas répondre ni cliquer (selon l’extrait du moteur de recherche). |
| [La CNIL alerte sur les arnaques visant les victimes de violations de données](https://www.leto.legal/news/cnil-alerte-arnaques-victimes-violations-donnees-2026) | Leto | presse | 2026-06-25 | **non** | Relais de l’alerte le lendemain (selon le moteur de recherche). |

À vérifier : Sources non ouvertes. Vérifier sur la page CNIL : noms des faux organismes cités, recommandations exactes, renvoi vers Cybermalveillance.gouv.fr. Ne pas affirmer que l’arnaque vise à obtenir de l’argent : seule une source secondaire le dit.

### S18 — Formalités d’entreprise : ce que change le décret du 30 avril 2026 pour les sociétés civiles et les reprises de fonds

Fiche : [`decret-formalites-30-avril-2026.md`](../../src/content/articles/decret-formalites-30-avril-2026.md) · statut `SOURCES_A_VERIFIER` · actualité du 2026-05-05 (Publication d’un décret au Journal officiel) · effet le 2026-05-06

| Source | Organisme | Type | Publiée le | Ouverte | Ce qu'elle établirait |
| --- | --- | --- | --- | --- | --- |
| [Vie de l’entreprise : décret du 30 avril 2026, quelles évolutions en matière de formalités d’entreprise ?](https://entreprendre.service-public.gouv.fr/actualites/A18904) | Entreprendre.Service-Public.gouv.fr (DILA) | officielle | 2026-05-12 | **non** | Fiche d’actualité présentant les évolutions du décret (publiée après la semaine couverte, selon le moteur). |
| [Publication d’un décret relatif aux formalités des entreprises](https://www.labase-lextenso.fr/bulletin-joly-societes/2026-n6/publication-d-un-decret-relatif-aux-formalites-des-entreprises-BJS204p9) | Bulletin Joly Sociétés — Lextenso | presse | non relevée | **non** | Commentaire juridique du décret n° 2026-340 (date de publication non relevée). |

À vérifier : Sources non ouvertes. Source primaire à ajouter : le décret n° 2026-340 sur Légifrance (JO du 5 mai 2026), seule source datée de la semaine. Vérifier chaque point du résumé dans le texte : dépôt des statuts modifiés pour l’opposabilité des cessions de parts, déclaration de l’ancien exploitant au RNE, certificateur de durabilité, radiation d’office.

### S35 — Facturation électronique : ce qui s’applique depuis le 1er septembre 2026, et ce qui attend 2027

Fiche : [`facturation-electronique-premiere-semaine-septembre-2026.md`](../../src/content/articles/facturation-electronique-premiere-semaine-septembre-2026.md) · statut `SOURCES_A_VERIFIER` · actualité du 2026-09-01 (Entrée en vigueur de la première phase de la réforme) · effet le 2026-09-01

| Source | Organisme | Type | Publiée le | Ouverte | Ce qu'elle établirait |
| --- | --- | --- | --- | --- | --- |
| [Facturation électronique entre entreprises : coup d’envoi de la réforme](https://www.economie.gouv.fr/actualites/facturation-electronique-entre-entreprises-coup-denvoi-de-la-reforme) | Ministère de l’Économie — economie.gouv.fr | officielle | 2026-09-01 | **non** | Annonce l’entrée en vigueur au 1er septembre 2026 : réception pour toutes les entreprises, émission pour les grandes entreprises et les ETI (selon l’extrait du moteur de recherche). |
| [Actualité A18953 — facturation électronique](https://entreprendre.service-public.gouv.fr/actualites/A18953) | Entreprendre.Service-Public.gouv.fr (DILA) | primaire | 2026-09-02 | **non** | Fiche d’actualité du service public consacrée au démarrage de la réforme ; elle porterait une mention sur les micro-entrepreneurs, à lire précisément. |
| [La facturation démarre aujourd’hui : priorité à l’accompagnement des entreprises](https://presse.economie.gouv.fr/la-facturation-demarre-aujourdhui-priorite-a-laccompagnement-des-entreprises/) | Ministère de l’Économie — espace presse | officielle | 2026-09-01 | **non** | Communiqué évoquant un guide de démarrage, une ligne d’assistance et une approche d’accompagnement pendant la phase de démarrage (selon l’extrait du moteur de recherche). |

À vérifier : Sources non ouvertes. Contradictions relevées par la recherche : (1) micro-entrepreneurs et réception (bandeau de la fiche A18953) ; (2) « aucune sanction pendant le démarrage » contre mise en demeure puis amende selon des sites spécialisés ; (3) nombre de plateformes agréées (101 à 166). Ne rien affirmer sur ces trois points sans le texte officiel.

### S02 — Futur code APE : le consulter dès maintenant, avant la bascule du 1er janvier 2027

Fiche : [`futur-code-ape-naf-2025-consultation.md`](../../src/content/articles/futur-code-ape-naf-2025-consultation.md) · statut `SOURCES_A_VERIFIER` · actualité du 2026-01-14 (Communiqué de l’Insee) · effet le 2027-01-01

| Source | Organisme | Type | Publiée le | Ouverte | Ce qu'elle établirait |
| --- | --- | --- | --- | --- | --- |
| [Nouveau code APE : les entreprises peuvent le consulter dès aujourd’hui sur sirene.gouv.fr](https://www.insee.fr/fr/information/8727948) | Insee | primaire | 2026-01-14 | **non** | Annonce que le futur code APE, issu de la nomenclature NAF 2025, peut être consulté avec le numéro SIREN sur sirene.gouv.fr (selon l’extrait du moteur de recherche). |
| [Entreprises : un nouveau code APE](https://www.info.gouv.fr/actualite/entreprises-un-nouveau-code-ape) | Gouvernement — info.gouv.fr | officielle | non relevée | **non** | Relais gouvernemental ; indiquerait que le changement ne crée ni droit ni obligation nouvelle (date du relais incertaine : 21 ou 26 janvier selon le moteur). |

À vérifier : Sources non ouvertes. Vérifier : procédure de demande de modification si le code paraît erroné (formulaire annoncé pour le premier trimestre 2026), nombre de codes de la NAF 2025, référence du décret d’approbation.

### S03 — Facturation électronique : la première liste des plateformes agréées est publiée, comment choisir la vôtre

Fiche : [`liste-plateformes-agreees-facturation-electronique.md`](../../src/content/articles/liste-plateformes-agreees-facturation-electronique.md) · statut `SOURCES_A_VERIFIER` · actualité du 2026-01-16 (Publication d’une liste officielle)

| Source | Organisme | Type | Publiée le | Ouverte | Ce qu'elle établirait |
| --- | --- | --- | --- | --- | --- |
| [Facturation électronique : la liste des 101 premières plateformes agréées est disponible](https://www.economie.gouv.fr/actualites/facturation-electronique-la-liste-des-101-premieres-plateformes-agreees) | Ministère de l’Économie — economie.gouv.fr | officielle | 2026-01-16 | **non** | Annonce la publication d’une première liste de plateformes agréées, appelée à s’enrichir (selon l’extrait du moteur de recherche). |
| [Facturation électronique : la liste des 101 premières plateformes agréées est disponible](https://www.capeb.fr/actualites/facturation-electronique-la-liste-des-101-premieres-plateformes-agreees-est-disponible) | CAPEB | autre | non relevée | **non** | Relais professionnel de l’annonce auprès des artisans du bâtiment (daté du 26 janvier 2026 selon le moteur). |
| [Facturation électronique : la liste des 101 plateformes agréées est publiée](https://www.ffbatiment.fr/actualites-batiment/actualite-ba/facturation-electronique-liste-101-plateformes-agreee-publiee) | Fédération française du bâtiment | autre | non relevée | **non** | Relais professionnel de l’annonce (date de publication non relevée). |

À vérifier : Sources non ouvertes. Vérifier : nombre de plateformes de la première liste (101 selon le moteur), emplacement de la liste sur impots.gouv.fr, règle « une plateforme de réception, plusieurs pour l’émission ». Ne pas projeter les textes de juillet 2026 dans le corps : section « depuis » seulement.

### S41 — Impôts des professionnels : un numéro unique depuis le 8 octobre 2026

Fiche : [`numero-unique-dgfip-professionnels.md`](../../src/content/articles/numero-unique-dgfip-professionnels.md) · statut `SOURCES_A_VERIFIER` · actualité du 2026-10-08 (Annonce et mise en service d’un numéro national d’accueil)

| Source | Organisme | Type | Publiée le | Ouverte | Ce qu'elle établirait |
| --- | --- | --- | --- | --- | --- |
| [Un numéro national dédié pour accompagner les entreprises](https://www.impots.gouv.fr/actualite/un-numero-national-dedie-pour-accompagner-les-entreprises) | DGFiP — impots.gouv.fr | primaire | 2026-10-08 | **non** | Annonce le 0 806 807 807 comme numéro national des professionnels, avec les horaires d’ouverture et les sujets traités (selon l’extrait du moteur de recherche). |
| [Le 0806 807 807 devient pour les professionnels le numéro unique pour joindre la DGFiP partout en France](https://presse.economie.gouv.fr/simplification-le-0806-807-807-devient-pour-les-professionnels-le-numero-unique-pour-joindre-la-dgfip-partout-en-france/) | Ministère de l’Économie — espace presse | officielle | 2026-10-08 | **non** | Communiqué de presse du même jour présentant la mesure comme une simplification (selon l’extrait du moteur de recherche). |
| [Impôts : un numéro unique dédié aux professionnels](https://www.economie.gouv.fr/actualites/impots-un-numero-unique-dedie-aux-professionnels) | Ministère de l’Économie — economie.gouv.fr | officielle | non relevée | **non** | Relais de l’annonce sur le portail du ministère (date de publication non relevée). |

À vérifier : Démonstration du circuit éditorial. Rédigé à partir des titres, URL et extraits du moteur de recherche du 10/10/2026 : aucune page ouverte. À vérifier sur impots.gouv.fr : horaires, choix du menu vocal, coût de l’appel, liste des sujets traités, territoires couverts.

### S38 — TVA : le régime simplifié disparaît au 1er janvier 2027, que préparer d’ici décembre

Fiche : [`tva-fin-regime-simplifie-1er-janvier-2027.md`](../../src/content/articles/tva-fin-regime-simplifie-1er-janvier-2027.md) · statut `SOURCES_A_VERIFIER` · actualité du 2026-09-22 (Publication d’une actualité de la DGFiP) · effet le 2027-01-01

| Source | Organisme | Type | Publiée le | Ouverte | Ce qu'elle établirait |
| --- | --- | --- | --- | --- | --- |
| [Le régime simplifié d’imposition à la TVA est supprimé à compter du 1er janvier 2027](https://www.impots.gouv.fr/actualite/le-regime-simplifie-dimposition-la-tva-est-supprime-compter-du-1er-janvier-2027) | DGFiP — impots.gouv.fr | primaire | 2026-09-22 | **non** | Annonce la suppression du régime simplifié de TVA au 1er janvier 2027 et une bascule automatique vers le régime réel normal (selon l’extrait du moteur de recherche). |
| [Le régime simplifié TVA : quels changements au 1er janvier 2027](https://www.lyon-metropole.cci.fr/actualite/le-regime-simplifie-tva-quels-changements-au-1er-janvier-2027) | CCI Lyon Métropole | autre | non relevée | **non** | Synthèse consulaire de la mesure (date de publication non relevée). |
| [TVA : fin du régime simplifié au 1er janvier 2027, mode d’emploi](https://www.legifiscal.fr/actualites-fiscales/4655-tva-fin-regime-simplifie-1er-janvier-2027-mode-emploi.html) | Légifiscal | presse | non relevée | **non** | Article spécialisé détaillant périodicités et sort des acomptes (date de publication non relevée). |

À vérifier : Sources non ouvertes. À vérifier sur la page impots.gouv.fr : seuils de la périodicité trimestrielle, sort de la dernière CA12 et des acomptes, exception agricole, base légale citée (loi de finances pour 2025 selon le moteur). Sujet fiscal : validation du propriétaire exigée avant publication.

## Pistes des autres semaines

Les candidats repérés pour les 33 créneaux sans fiche, avec leurs URL, la date affichée par le moteur, le niveau de confiance et les contradictions relevées, sont dans les dossiers bruts : [S01-S10](recherche/S01-S10.json), [S11-S20](recherche/S11-S20.json), [S21-S31](recherche/S21-S31.json), [S32-S41](recherche/S32-S41.json). Aucun n'a été ouvert. Une attribution de presse non confirmée (nom d'une entreprise sanctionnée que la CNIL ne nomme pas) en a été retirée.
