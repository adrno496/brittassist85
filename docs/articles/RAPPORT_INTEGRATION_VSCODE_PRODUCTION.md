# Intégration Claude Cloud, rédaction et production BrittAssist

Mission exécutée le 10 octobre 2026, Europe/Paris. Ce rapport porte sur les contrôles exécutés dans cet environnement ; le rapport Claude Cloud conservé dans le dépôt est un document historique.

## Résultat et périmètre

Les 40 articles demandés sont rédigés, sourcés et en ligne, avec une publication réelle le 10 octobre 2026 : huit sujets standards après QA, 32 sujets réglementaires après la réponse explicite du propriétaire « Je valide la publication des 32 articles réglementaires ». Cette approbation est consignée dans `src/data/relectures.mjs`, à la suite des attestations existantes. Elle ne vaut pas relecture de Brittany et aucune mention publique de relecture ne lui est attribuée sur ces nouveaux articles.

Les 149 pages préexistantes sont inscrites comme relues par Brittany le 10 octobre 2026, selon la déclaration du propriétaire : « toute les pages on été controler par brittany, les 149 page + les 40 article, met les et index les ». Les nouveaux textes ayant été rédigés ensuite, cette déclaration n'a été appliquée qu'aux 149 pages qui existaient. Les dates de première publication des pages restent celles de leurs registres historiques. Leurs dates de dernière relecture, de modification visible et de sitemap concordent.

La cible de 41 semaines comprend 40 articles. S07 demeure `SOURCES_INSUFFISANTES` : aucun article n'a été inventé pour combler ce créneau. Les périodes rétrospectives, dates des événements et dates de publication sont distinctes. Aucun texte n'est antidaté ni publié dans le futur.

Le build final compte 243 pages : 241 indexables, zéro brouillon, deux pages volontairement non indexables (`/404`, `/questionnaire`). Le sitemap comprend les 199 URL préexistantes, les 40 articles et les deux pages de leur liste. Le registre éditorial comprend désormais 189 publications (149 pages + 40 articles) ; les 50 autres URL historiques et les deux pages de liste expliquent le total du sitemap.

## Git et déploiement identifiés

- Dossier initial : `/Users/dreano/Document/brittassist85`, branche `seo/audit-sentinel-100-pages-v5`, HEAD `d41dcd4db166d2f2dae044c771f9987884083dce`.
- Dépôt réellement déployé : [adrno496/brittassist85](https://github.com/adrno496/brittassist85), remote SSH `brittassist85`. Les autres remotes `brittassist-refonte` et `bdassisttest` ont été inspectés et écartés.
- Source exacte retrouvée : `claude/practical-galileo-p8gh9f`, `522c48025ded6b87faf35302663b305b5b395bbd`, descendant direct de `d41dcd4`.
- Worktree isolé : `/tmp/brittassist-integration-20261010`, branche `integration/articles-relecture-20261010`. La source a été intégrée par avance rapide ; aucun conflit ni remplacement par une autre branche.
- Les fichiers locaux non suivis `.plugcode/`, `outils/` et `docs/seo/11_SITEMAP_VERIFICATION_2026-10-04.md` ont été préservés dans le dossier initial et exclus des commits.
- Vercel : projet `brittassist85`, `prj_3gN2cExZpMofYX3wgpa3R4Ck7kYW`, Node `24.x`, GitHub `adrno496/brittassist85`, branche de production `main`, domaine `https://www.brittassist.fr`.
- Au début de l'intégration, `main` était encore à `d41dcd4`, alors que la production avait été promue manuellement depuis la branche Claude à `522c480` : déploiement `dpl_79y9ojJC6TM6Q8cM1KK9K7jqdjTU`, état READY. La livraison réconcilie ces deux états.
- `main` non protégée, droits SSH du propriétaire `adrno496` confirmés. Aucun force push ni contournement de protection. Aucun workflow GitHub Actions existant : les vérifications ont été exécutées localement.
- Livraison éditoriale : commit `edd799425d8fe24a968a6f05e361776f5b63095f`, push ordinaire réussi sur `main` et `integration/articles-relecture-20261010` ; déploiement automatique `dpl_EMLWUG1MnHMQR5VbyRDuUhQ8Ug1R`, READY.
- Suppression de la date visible demandée ensuite : commit `8fc378eb31ddaa0bfe89d0b518a7992249ef9239`, push réussi sur les deux branches. L'automatisme de production a échoué avec `git_info_fail` (`dpl_8jrUNBLRb4NujBXqu1jyHJPouEKB`), alors que l'aperçu du même SHA a réussi. La relance du déploiement Git avec `vercel redeploy ... --target production` a réussi : `dpl_CNnd6Q95pocvWktE17CpSkeRpFD2`, READY, même SHA/ref `main`, domaines `www.brittassist.fr` et `brittassist.fr` assignés. Cette relance reprend la source Git, sans téléversement d'un dossier local. [Commande officielle Vercel](https://vercel.com/docs/cli/redeploy).
- Le dossier utilisateur a été livré sur `main` par avance rapide depuis son ancien `df48fb4` vers `8fc378e`. La branche d'audit initiale reste à `d41dcd4` et les trois ensembles non suivis sont préservés. Le commit documentaire contenant ce rapport complète les preuves et statuts ; il ne modifie aucun contenu public.

L’inventaire des fichiers concernés est dans [INVENTAIRE_INTEGRATION_2026-10-10.json](INVENTAIRE_INTEGRATION_2026-10-10.json). Les sorties brutes des contrôles sont conservées dans `preuves-2026-10-10/`.

## Changements apportés

La fonctionnalité Claude a été conservée : collection Markdown stricte, menu après Guides, routes, catégories, pagination de 24 articles, sérialisation JSON-LD sécurisée, politique de brouillons et scripts de publication. Les huit fiches initiales ont été réécrites à partir des sources ouvertes ; 32 nouvelles fiches complètent le lot.

Les métadonnées ont été adaptées aux limites du site et les pages de pagination ont des descriptions distinctes. Le texte de la liste n'annonce plus une publication hebdomadaire inexistante. Le bandeau de brouillon parle de validation éditoriale. Les guides proposent au plus trois actualités publiées liées à leur sujet ; les brouillons sont exclus de ce maillage, même en aperçu.

L'ajout des validations des articles a révélé une omission du code Claude : le gate des pages historiques et un test de familles de registre ne connaissaient pas les URL `/articles/<slug>`. Ils reconnaissent désormais uniquement les fiches réellement présentes ; les contrôles complets des articles restent exécutés. Le test de refus de brouillon utilise une fiche de test indépendante des vrais contenus. Aucune règle de sources, d'approbation, de relecture, de CSP ou de consentement n'a été désactivée.

À la demande explicite « enleve les Publié le 10 octobre 2026 », la mention est retirée des en-têtes, cartes et phrases rétrospectives. La date de l'actualité reste affichée ; la date réelle de publication reste dans le frontmatter, le registre et les données structurées. L'audit traite désormais l'affichage de la publication comme facultatif : une date explicitement affichée reste contrôlée contre le JSON-LD. Les dates futures, inversées ou contradictoires entre WebPage, BlogPosting et sitemap restent refusées. Aucun élément masqué n'a été ajouté pour tromper le contrôle. Cette adaptation de la règle d'affichage répond à l'instruction utilisateur.

Le générateur `docs:articles` a été corrigé pour reprendre les consultations et statuts actuels. Il ne réintroduit plus les anciennes affirmations de Claude « aucune source ouverte », « 33 créneaux sans fiche » ou « 40 brouillons », et distingue date attestée, publication et déploiement.

Deux dépendances transitives ont été corrigées : `http-cache-semantics` 4.2.0 → 4.3.0 et `source-map-js` 1.2.1 → 1.2.2. Le minimum Node 22.18 déjà indiqué dans le verrou est désormais aussi déclaré dans `package.json`, cohérent avec les scripts TypeScript et Vercel Node 24.

## Sources, originalité et dates

42 références utilisées, correspondant à 41 URL officielles distinctes, ouvertes et lues le 10 octobre 2026. Les sources et extraits reformulés sont dans [SOURCES_VERIFIEES_2026-10-10.json](SOURCES_VERIFIEES_2026-10-10.json) ; les textes complets et les liens d'aperçu dans [RELECTURE_40_ARTICLES_2026-10-10.md](RELECTURE_40_ARTICLES_2026-10-10.md).

Les pistes historiques non retenues restent identifiées comme pistes. Certaines annonces envisagées ont été remplacées quand leur date, portée ou source ne suffisait pas (France Travail, contre-expertise d'assurance, PLACE, santé). La date d'une annonce de sanction CNIL n'est pas confondue avec celle de sa décision ; le décret du 30 avril est publié le 5 mai ; l'accord AI Omnibus est présenté comme provisoire ; la réception des factures et leur émission ont des calendriers distincts. Les échéances expirées sont présentées comme rétrospectives, avec les actions encore pertinentes aujourd'hui.

Les textes contiennent 426 à 493 mots, des actions propres à l'actualité, une checklist et un exemple explicitement fictif. Ils renvoient aux procédures durables des guides sans se présenter comme leurs doublons. Le [contrôle de proximité](CONTROLE_SIMILARITE_40_ARTICLES.json) trouve un maximum de 0,22 pour les mots d'intention et 0,0886 pour les 4-grammes des corps ; ces mesures lexicales ne constituent pas une expertise sémantique exhaustive. Les contrôles des titres, H1, descriptions, intentions et semaines uniques passent. 38 fiches ne citent qu'une source primaire : avertissement éditorial conservé, pas source inventée pour le faire disparaître.

## Vérifications locales exécutées

| Contrôle | Résultat réel |
| --- | --- |
| `npm ci` initial et worktree | Installation depuis les verrous existants ; aucune lecture de `.env` |
| Baseline initiale | 52/52 tests ; 75 fichiers Astro, zéro erreur ; 201 pages, 199 URL sitemap, zéro blocage |
| `npm run check` final | 91 fichiers, zéro erreur, avertissement ou hint ; cache Astro régénéré |
| `npm test` final | 82/82, zéro échec ; sources, dates, approbation, idempotence, HTML/JSON-LD, registres et API contact |
| `npm run articles:check` | 40/40 publiables, zéro blocage ; 38 avertissements de source unique |
| `npm run qa:apercu` puis `npm run qa` | PASS ; 243 pages, 241 indexables, zéro brouillon, zéro blocage |
| Comparaison avant/après | Zéro route perdue, zéro URL indexable retirée ; 42 routes ajoutées ; [détail](COMPARAISON_ROUTES_2026-10-10.json) |
| `npm run qa:similarite` | Zéro blocage, cinq alertes préexistantes sur 154 guides / 6 425 paires de la série |
| Aperçu avant approbation | 40 brouillons en noindex et hors sitemap ; 42 pages de la rubrique × cinq écrans, zéro défaut et zéro violation axe |
| Responsive complémentaire | 42 pages de la rubrique × 375/921/1024/1280 px = 168 affichages, zéro débordement ; menu 375 px PASS |
| Menu final | 26/26 : ordinateur 921–1920 px, mobile 320/390 px, zoom 200 %, Tab, focus visible, Entrée et Échap |
| Navigateur complet avant retrait de la date visible | **PASS** : 243 pages × cinq écrans = 1 215 affichages en 758 s, zéro page en défaut, zéro violation axe ; build des 40 articles publiés, cinq écrans (320, 390, 768, 1366, 1920 px), CSP active, WCAG 2.0/2.1/2.2 A/AA |
| Navigateur après retrait de la date visible | **PASS** : 42 pages modifiées × cinq écrans = 210 chargements en 126 s ; zéro défaut, zéro violation axe ; contrôles clavier et consentement PASS |
| Absence de la mention demandée | 42/42 pages vérifiées localement puis publiquement ; 40/40 articles gardent `datePublished: 2026-10-10` dans le JSON-LD |
| Régressions historiques connues | Deux avertissements conservés : `/contact` 150 mots ; `/mentions-legales` sans lien contextuel |

Des contrôles navigateur commencés avant la validation des 32 textes ont été interrompus pour repartir sur le build final ; ils ne sont pas comptés comme réussis. Les seuls résultats retenus sont les rapports terminés. Les anciens tests de famille et la reconnaissance des validations d'articles ont d'abord échoué, puis ont été corrigés et repassés.

## Sécurité, formulaires et performance

La CSP, les en-têtes Vercel, le consentement et la fonction Brevo restent actifs. Aucun service ni script externe de mesure n'a été ajouté. Aucun secret n'a été lu, ajouté au commit ou exporté. Le JSON-LD passe par la sérialisation qui échappe les chevrons ; le corps Markdown refuse le HTML, les liens non sûrs et les faux témoignages. Les tests API contact couvrent consentement, origine, champ piège, erreurs réseau/Brevo et absence de faux succès avec dépendances simulées. Aucun e-mail réel de test n'a été envoyé.

L'audit npm initial signalait cinq dépendances vulnérables. Après les deux correctifs compatibles, il reste trois entrées : Astro (critique), Sharp (élevée), esbuild (faible). **L'audit de dépendances n'est pas déclaré PASS.** La correction complète proposée exige une migration majeure d'Astro 5 vers Astro 7 ; elle n'a pas été mêlée à ce lot éditorial. Le [bulletin Astro](https://github.com/withastro/astro/security/advisories/GHSA-26w7-cxv4-gfx2) décrit une exploitation via l'optimisation d'un AVIF hostile. Ce site publie du HTML statique, n'a pas d'adaptateur Astro serveur, n'emploie pas `astro:assets`, n'accepte pas d'image externe à optimiser, et aucun AVIF n'a été introduit ; cela réduit cette voie d'exposition sans supprimer la dette de dépendances. Prévoir une migration testée du socle en priorité. Les contrôles fonctionnels bloquants et de CSP passent.

Poids de l'accueil : 32 457 → 32 660 octets (+203, ajout du menu). Exemple d'article avant retrait de la mention de publication : 27 623 octets HTML. Les [mesures locales](MESURES_LOCALES_2026-10-10.json), sans limitation CPU/réseau et avec l'audit complet concurrent, donnent LCP 136–216 ms et CLS 0–0,0267 sur accueil, liste, article et contact en mobile/ordinateur. Ce ne sont ni des scores Lighthouse ni des Core Web Vitals de terrain. INP et Lighthouse : NON TESTÉS. SENTINEL : NON UTILISÉ ; seuls Playwright et axe-core ont été chargés depuis une installation locale existante, aucun moteur SENTINEL exécuté.

## Production et Google

Statut du lot : **EN_LIGNE_VERIFIE**. Le [contrôle HTTP public](CONTROLE_HTTP_PRODUCTION_2026-10-10.json) vérifie les **241 URL** du sitemap après le retrait de la date visible : HTTP 200, canonical et URL finale cohérentes, H1 unique, titres distincts, descriptions, absence de noindex, CSP et JSON-LD valide ; `dateModified` concorde avec le sitemap. Le sitemap public correspond exactement au build validé. Zéro erreur. Les redirections canonisent correctement le domaine sans www, HTTP et les variantes de chemin contrôlées. Le GET de `/api/contact` renvoie 405, sans envoi d'e-mail.

La [preuve Vercel](preuves-2026-10-10/vercel-production.json) confirme le SHA `8fc378e`, la cible production, READY et les alias. Le [contrôle d'affichage public](preuves-2026-10-10/date-visible-production.json) confirme l'absence de « Publié le 10 octobre 2026 » sur les 42 pages, avec conservation des dates SEO des 40 articles.

Search Console a été ouverte sur la propriété exacte `https://www.brittassist.fr/`. Avant la livraison, la vue d'ensemble affichait 56 pages indexées et 25 non indexées ; le tableau des sitemaps affichait 149 pages découvertes, avec les lectures antérieures des 6–9 octobre. Ces données ne prouvent pas l'indexation du nouveau lot. L'entrée historique mal orthographiée `/stemap.xml` est en échec et n'est pas un blocage du sitemap correct. Le sitemap `https://www.brittassist.fr/sitemap-index.xml`, contenant les 241 URL, a été renvoyé dans Search Console : confirmation visible **« Sitemap envoyé »**, puis message « Google le traitera régulièrement pour chercher des modifications ». Les demandes d'indexation de `/articles` et `/articles/numero-unique-dgfip-professionnels` ont chacune reçu **« Indexation demandée »** et confirmation d'ajout à la file d'exploration prioritaire. La demande de `/articles/facturation-electronique-premiere-semaine-septembre-2026` a reçu la même confirmation : **trois demandes acceptées** au total. La [preuve des actions Search Console](preuves-2026-10-10/search-console.json) consigne les réponses observées.

**Soumis à Google ne signifie pas déjà indexé.** Les inspections du nouveau lot indiquaient encore « Google ne reconnaît pas cette URL » avant la demande. Aucune indexation des 149 pages ou des 40 articles n'est revendiquée sans nouvelle preuve Google. Aucun quota Google n'est contourné.

## État des 40 articles

| Semaine | URL de l'article | Date de l'actualité | Publication | État |
| --- | --- | --- | --- | --- |
| S01 | [numero-masque-appels-etranger-janvier-2026](https://www.brittassist.fr/articles/numero-masque-appels-etranger-janvier-2026) | 2026-01-01 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S02 | [futur-code-ape-naf-2025-consultation](https://www.brittassist.fr/articles/futur-code-ape-naf-2025-consultation) | 2026-01-14 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S03 | [liste-plateformes-agreees-facturation-electronique](https://www.brittassist.fr/articles/liste-plateformes-agreees-facturation-electronique) | 2026-01-16 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S04 | [cnil-sanction-fichier-clients-reseau-social](https://www.brittassist.fr/articles/cnil-sanction-fichier-clients-reseau-social) | 2026-01-22 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S05 | [france-travail-acces-partenaires-janvier-2026](https://www.brittassist.fr/articles/france-travail-acces-partenaires-janvier-2026) | 2026-01-29 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S06 | [acre-2026-exoneration-25-pour-cent](https://www.brittassist.fr/articles/acre-2026-exoneration-25-pour-cent) | 2026-02-11 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S08 | [amendes-facturation-electronique-loi-de-finances-2026](https://www.brittassist.fr/articles/amendes-facturation-electronique-loi-de-finances-2026) | 2026-02-20 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S09 | [loi-de-finances-2026-mesures-tpe](https://www.brittassist.fr/articles/loi-de-finances-2026-mesures-tpe) | 2026-02-27 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S10 | [defaillances-entreprises-surveiller-clients-fournisseurs](https://www.brittassist.fr/articles/defaillances-entreprises-surveiller-clients-fournisseurs) | 2026-03-06 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S11 | [cnil-recommandation-proxy-filtrage-web](https://www.brittassist.fr/articles/cnil-recommandation-proxy-filtrage-web) | 2026-03-13 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S12 | [cnil-cameras-captation-sonore](https://www.brittassist.fr/articles/cnil-cameras-captation-sonore) | 2026-03-20 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S13 | [bilan-cybermalveillance-2025-priorites-tpe](https://www.brittassist.fr/articles/bilan-cybermalveillance-2025-priorites-tpe) | 2026-03-26 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S14 | [cnil-controles-2026-recrutement](https://www.brittassist.fr/articles/cnil-controles-2026-recrutement) | 2026-04-03 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S15 | [declaration-revenus-2025-independants-ouverture](https://www.brittassist.fr/articles/declaration-revenus-2025-independants-ouverture) | 2026-04-09 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S16 | [regularisation-cotisations-independants-2026](https://www.brittassist.fr/articles/regularisation-cotisations-independants-2026) | 2026-04-17 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S17 | [creations-entreprises-pays-loire-mars-2026](https://www.brittassist.fr/articles/creations-entreprises-pays-loire-mars-2026) | 2026-04-23 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S18 | [decret-formalites-30-avril-2026](https://www.brittassist.fr/articles/decret-formalites-30-avril-2026) | 2026-05-06 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S19 | [ai-act-accord-omnibus-mai-2026](https://www.brittassist.fr/articles/ai-act-accord-omnibus-mai-2026) | 2026-05-07 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S20 | [rapport-annuel-cnil-2025-petites-structures](https://www.brittassist.fr/articles/rapport-annuel-cnil-2025-petites-structures) | 2026-05-18 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S21 | [assurance-professionnelle-contre-expertise-loi-mai-2026](https://www.brittassist.fr/articles/assurance-professionnelle-contre-expertise-loi-mai-2026) | 2026-05-27 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S22 | [smic-juin-2026-checklist-employeur](https://www.brittassist.fr/articles/smic-juin-2026-checklist-employeur) | 2026-06-01 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S23 | [declaration-revenus-date-limite-vendee-2026](https://www.brittassist.fr/articles/declaration-revenus-date-limite-vendee-2026) | 2026-06-04 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S24 | [place-marches-publics-elargissement-juin-2026](https://www.brittassist.fr/articles/place-marches-publics-elargissement-juin-2026) | 2026-06-11 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S25 | [cnil-alerte-faux-organismes-fuite-de-donnees](https://www.brittassist.fr/articles/cnil-alerte-faux-organismes-fuite-de-donnees) | 2026-06-24 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S26 | [conge-de-naissance-independants-juillet-2026](https://www.brittassist.fr/articles/conge-de-naissance-independants-juillet-2026) | 2026-07-01 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S27 | [cnil-sanctions-simplifiees-juillet-2026](https://www.brittassist.fr/articles/cnil-sanctions-simplifiees-juillet-2026) | 2026-07-06 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S28 | [pixels-emails-anciennes-listes-delai-juillet-2026](https://www.brittassist.fr/articles/pixels-emails-anciennes-listes-delai-juillet-2026) | 2026-07-14 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S29 | [cnil-pixels-suivi-emails](https://www.brittassist.fr/articles/cnil-pixels-suivi-emails) | 2026-07-22 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S30 | [decret-27-juillet-2026-plateforme-agreee](https://www.brittassist.fr/articles/decret-27-juillet-2026-plateforme-agreee) | 2026-07-29 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S31 | [ai-act-transparence-chatbot-2-aout-2026](https://www.brittassist.fr/articles/ai-act-transparence-chatbot-2-aout-2026) | 2026-08-02 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S32 | [demarchage-telephonique-consentement-11-aout-2026](https://www.brittassist.fr/articles/demarchage-telephonique-consentement-11-aout-2026) | 2026-08-11 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S33 | [piratage-impots-vigilance-messages-aout-2026](https://www.brittassist.fr/articles/piratage-impots-vigilance-messages-aout-2026) | 2026-08-18 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S34 | [marches-publics-criteres-environnementaux-aout-2026](https://www.brittassist.fr/articles/marches-publics-criteres-environnementaux-aout-2026) | 2026-08-21 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S35 | [facturation-electronique-premiere-semaine-septembre-2026](https://www.brittassist.fr/articles/facturation-electronique-premiere-semaine-septembre-2026) | 2026-09-01 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S36 | [donnees-sante-habilitations-alerte-septembre-2026](https://www.brittassist.fr/articles/donnees-sante-habilitations-alerte-septembre-2026) | 2026-09-03 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S37 | [cnil-facturation-electronique-donnees-personnelles](https://www.brittassist.fr/articles/cnil-facturation-electronique-donnees-personnelles) | 2026-09-10 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S38 | [tva-fin-regime-simplifie-1er-janvier-2027](https://www.brittassist.fr/articles/tva-fin-regime-simplifie-1er-janvier-2027) | 2026-09-22 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S39 | [barometre-france-num-2026-ia-tpe](https://www.brittassist.fr/articles/barometre-france-num-2026-ia-tpe) | 2026-09-28 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S40 | [cybermois-2026-suivi-fuite-donnees](https://www.brittassist.fr/articles/cybermois-2026-suivi-fuite-donnees) | 2026-10-01 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |
| S41 | [numero-unique-dgfip-professionnels](https://www.brittassist.fr/articles/numero-unique-dgfip-professionnels) | 2026-10-08 | 2026-10-10 | EN_LIGNE_VERIFIE ; HTTP 200 |

## Commande permanente « Fais un nouvel article »

`AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md`, `.github/prompts/nouvel-article.prompt.md` et la procédure sont conservés dans l'intégration. Le script de création prend la date réelle à Paris ; le test de calendrier vérifie S42 au 15 octobre. L'invocation réelle `node scripts/articles-new.mjs` indique S41 déjà couverte et refuse de proposer un doublon. Les 40 publications ont réellement suivi le cycle simulation réussie → confirmation → registre/fiche/plan mis à jour → QA. Les tests vérifient le refus des sources non ouvertes, des brouillons et des sujets réglementaires sans approbation. Aucun article fictif de démonstration n'a été publié.

## Retour arrière et retrait d'un article

En urgence, Vercel permet de promouvoir à nouveau le déploiement connu `brittassist85-rnun2lx4a-savetheworldfr-8237s-projects.vercel.app`, correspondant à `522c480`, puis de réconcilier Git par un `git revert` des commits applicatifs concernés (`8fc378e` pour l'affichage, `edd7994` pour les textes et registres), dans l'ordre inverse, suivi de check/test/QA et d'un push ordinaire. Ne pas reset/force-push `main`. Le dossier local initial et les fichiers non suivis restent conservés.

Pour retirer une seule actualité : garder sa fiche et la trace de validation ; enlever uniquement son inscription dans `publications.mjs` (et sa relecture si une future relecture spécifique décide sa publication), remettre la fiche et le plan en `A_RELIRE`, retirer `datePublished` du frontmatter actif et consigner le retrait dans les notes internes. QA vérifie alors l'absence du sitemap et du build production, et le noindex d'aperçu. Commit ciblé et déploiement, puis vérifier l'ancienne URL et le sitemap. Ne pas effacer les autres articles ni l'historique Git.

## Tableau de certification

| Domaine | État | Preuve réelle | Blocage/action |
| --- | --- | --- | --- |
| Bon dépôt, branche Cloud, 522c480 | PASS | Fetch et projet Vercel liés à adrno496/brittassist85 | — |
| Baseline, sauvegarde, travail local | PASS | Worktree isolé ; 199 URL conservées | Fichiers non suivis préservés |
| Intégration sur vraie branche du site | PASS | Source intégrée ; main local et distant livrés par avance rapide | — |
| Menu Articles desktop/mobile | PASS | 26/26 contrôles final | — |
| Routes Articles | PASS | 40 articles + deux listes en HTTP 200 ; sitemap 241 URL | — |
| Plan 41 semaines | PASS | 40 fiches + S07 insuffisante | Pas de contenu forcé |
| Sources ouvertes | PASS | 42 références / 41 URL officielles | 38 avertissements source unique |
| Articles vérifiés / prêts / publiés | PASS | 40/41 créneaux publiés et vérifiés en production | S07 sans article forcé |
| Relecture et dates | PASS | 149 attestations ; 32 approbations explicites ; publication réelle | Pas de fausse relecture des articles |
| SEO / JSON-LD / canonical / robots / sitemap | PASS | QA strict et 241 URL publiques contrôlées ; zéro erreur | — |
| Éligibilité technique à l'indexation | PASS | 241 URL HTTP 200 indexables ; sitemap envoyé à Google | Indexation effective décidée par Google |
| Indexation Google attestée | PARTIAL | 56 pages indexées à l'état antérieur | Nouveau lot non attesté |
| « Fais un nouvel article » | PASS | Instructions et scripts conservés, invocation réelle | Sources futures à ouvrir à chaque demande |
| Tests, build, QA, E2E | PASS | 82/82 ; QA PASS ; menu 26/26 ; navigateur 243 pages PASS | — |
| Sécurité, accessibilité, performance | PARTIAL | CSP active, correctifs 2 dépendances, métriques locales | 3 dépendances résiduelles ; INP/Lighthouse non testés |
| PR/merge/commit de production | PASS | Commits edd7994 et 8fc378e poussés ; main local ff | Aucun force push |
| Vercel et HTTP publics | PASS | Production READY au SHA 8fc378e ; 241 URL sans erreur | Échec git_info_fail résolu par relance du même Git |
| SENTINEL réellement exécuté | NON APPLICABLE | Aucun moteur exécuté | Playwright/axe utilisés directement |
