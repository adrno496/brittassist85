# Audit SEO et GEO — BrittAssist — 27 septembre 2026

## Périmètre et niveau de preuve

Audit du dépôt Astro, du build statique et d'une lecture publique de `https://www.brittassist.fr` le 27 septembre 2026. Le dossier `outils` a été inventorié (AXDIA RECURSIVE, Business Readiness 360 et Formation). Pour ce sujet, les contrôles **BR360-GROW-001 à 005**, en particulier **BR360-GROW-003** (indexabilité, métadonnées, découvrabilité), et la règle de preuve de RECURSIVE ont été retenus. Ces outils ne fournissent pas de données de positionnement ni d'accès aux comptes Google/Bing : une absence de mesure reste inconnue, jamais « validée ».

**Note indicative de préparation SEO/GEO du code après corrections : 8/10.** C'est une appréciation éditoriale et technique, pas un score Google, un relevé Lighthouse ni une promesse de classement. L'indexation réelle, les requêtes, les clics, les avis et les Core Web Vitals terrain ne sont pas accessibles dans ce dépôt. Une note de visibilité réelle serait donc inventée.

## Inventaire

- 49 pages HTML construites, dont 48 indexables et une page `questionnaire` en `noindex`.
- 5 pages de zones : base réelle à La Roche-sur-Yon, Vendée, Les Sables-d'Olonne, Nantes et accompagnement à distance. Aucune autre implantation n'est revendiquée.
- 8 pages par métier, 13 pages de prestation, 12 guides, un index des guides et les pages principales.
- Site statique, contenu principal présent dans le HTML, title, description, canonical, Open Graph et JSON-LD sur les pages.
- `robots.txt` ouvert et sitemap généré à la compilation. `llms.txt` décrit l'offre mais ne remplace ni l'indexation ni les liens internes.
- Contrôle local après build : un `<h1>`, un `<title>`, une description et un canonical par page ; aucun lien interne manquant trouvé.

## Constats classés par priorité

| Priorité | Constat et preuve | Action |
| --- | --- | --- |
| Résolu hors dépôt | Au premier contrôle, le certificat `www` était invalide. Au nouveau contrôle, `https://www.brittassist.fr/` répond en 200 avec un certificat valide et `https://brittassist.fr/` redirige en 308 vers `www`. | Le code, les canoniques, le sitemap, `robots.txt`, `llms.txt` et les retours de formulaire sont alignés sur `www`. Le CNAME historique fonctionne ; Vercel recommande sa migration, sans l'imposer aujourd'hui. |
| P1 | L'ancienne page `/assistante-administrative-vendee` renvoyait vers `/services`, moins pertinente pour l'intention locale. | Redirection mise à jour vers `/assistante-independante/vendee` dans `vercel.json`. À contrôler après déploiement. |
| P1 | Les blocs `.reveal` et les étapes de l'accueil étaient invisibles en CSS sans JavaScript. Leur texte existait dans le HTML, mais l'expérience et certains rendus automatisés pouvaient être dégradés. | CSS rendu visible par défaut ; animation activée seulement si le script et `IntersectionObserver` sont disponibles. |
| P1 | Le sitemap excluait les trois pages légales alors qu'elles étaient indexables. | Sitemap aligné sur les pages indexables ; seul le questionnaire privé en est exclu. |
| P1 | Les guides nouveaux doivent porter des dates réelles et identiques dans le sitemap, le `WebPage` et l'`Article`. | Deux guides datés du 27/09/2026 ; date de publication distincte de la dernière modification ; index des guides mis à jour. |
| P2 | Aucun cas client réel publiable n'est disponible à ce jour. | L'accueil signale désormais explicitement que ses scénarios sont illustratifs. Publier ultérieurement des cas réels seulement avec des faits et un accord client. |
| Corrigé dans le code | Le guide « prix » comportait des fourchettes de marché non sourcées et le guide « salariée ou indépendante » des ordres de grandeur sociaux génériques. | Fourchettes retirées, comparaison recentrée sur les devis réels et le prix BrittAssist ; références Urssaf et Service-Public ajoutées ; dates de modification mises à jour. |
| P2 | Le balisage `FAQPage` existe sur les guides, mais Google a arrêté l'affichage des résultats enrichis FAQ en 2026. | Garder les réponses utiles aux lecteurs ; ne pas compter sur ce balisage pour obtenir un extrait enrichi. [Historique de la documentation Google](https://developers.google.com/search/updates) |
| P2 | Aucune donnée Search Console, Bing Webmaster Tools, profil Google Business ou Core Web Vitals terrain n'a été fournie. | Mesurer couverture, requêtes, clics, conversions et performance avant de décider de nouvelles pages. |

## Pages ajoutées

1. `/tarifs` : prix de départ, formules sur devis, périmètre, frais, TVA, durée et préparation de la proposition, en cohérence avec les CGV.
2. `/guides/confidentialite-assistante-externalisee` : accès limités, données personnelles, contrat et sortie de mission. Références CNIL visibles.
3. `/guides/premier-mois-assistante-externalisee` : plan sur quatre semaines, premières demandes et critères de suivi.
4. `/guides/choisir-assistante-externalisee` : questions concrètes pour comparer périmètre, devis, suivi et confidentialité.
5. `/guides/modele-brief-assistante-externalisee` : canevas de demande avec résultat, échéance, autonomie et exemple fictif explicite.
6. `/guides/suivi-demandes-assistante-externalisee` : tableau minimal et méthode de suivi des décisions et blocages.

La page Tarifs apparaît dans la navigation, l'accueil, les services et le pied de page. Les guides sont reliés depuis l'index, le pied de page, les guides voisins et `llms.txt`. Les six URL figurent dans le sitemap généré. Le contenu opérationnel reste à relire par Brittany avant publication pour confirmer qu'il décrit bien sa pratique.

## Améliorations visibles réalisées dans le code

- Accueil : métier décrit en français dès le titre principal, identité de Brittany et base à La Roche-sur-Yon visibles, lien direct vers les tarifs.
- Accueil : les six situations du « point de bascule » se déplient en démonstrations animées et accessibles, avec étapes concrètes et liens vers les prestations. Ces simulations sont clairement distinguées de missions client.
- Private Office : parcours de mise en route, de la définition du périmètre aux premières demandes, avec liens vers les guides pratiques.
- Local : origine réelle et fonctionnement à distance explicités sur l'accueil et le contact, sans inventer d'implantation supplémentaire.
- Preuve : exemples de l'accueil clairement présentés comme illustratifs ; aucun résultat client inventé.
- Domaine : toutes les URL canoniques générées utilisent `https://www.brittassist.fr`, conformément à la redirection Vercel observée.

## Stratégie de contenu pour progresser vers 10/10

### 1. Publier les changements et mesurer l'indexation

Après déploiement, inspecter dans Google Search Console l'accueil, les deux nouveaux guides, `/assistante-independante/vendee` et la redirection historique ; soumettre `sitemap-index.xml`, examiner les URL exclues et les canoniques choisies. Importer ou enregistrer le site dans Bing Webmaster Tools et y vérifier le même sitemap. Un sitemap signale des URL, il ne garantit pas leur indexation. [Google Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start) · [Bing Webmaster Tools](https://www2.bing.com/webmasters/help/sitemaps-3b5cf6ed)

### 2. Renforcer les preuves d'expérience

Ajouter des cas réels anonymisés seulement avec autorisation, une méthode expliquée par Brittany et des éléments vérifiables : type de demande, délai ou fréquence *si mesuré*, décision conservée par le client, résultat obtenu. Mettre à jour la page À propos avec les éléments de parcours qu'elle souhaite rendre publics. Des preuves originales sont plus utiles qu'un volume de pages répétitives. [Contenu utile selon Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

### 3. Développer le local sans pages satellites

Conserver une seule implantation déclarée à La Roche-sur-Yon. Créer d'autres pages ville uniquement lorsqu'il existe un service réellement distinct, une connaissance locale vérifiable et un contenu original. Les pages villes similaires destinées surtout à capter des requêtes sont visées par les règles Google sur les pages satellites. Vérifier l'éligibilité d'une fiche Google Business Profile, son adresse ou sa zone de service réelle, sa catégorie, ses horaires et ses liens ; ne pas créer plusieurs fiches pour des villes sans établissement. [Règles anti-spam Google](https://developers.google.com/search/docs/essentials/spam-policies) · [Règles Business Profile](https://support.google.com/business/answer/3038177)

### 4. Répondre aux questions réellement recherchées

À partir des requêtes et pages de Search Console, améliorer d'abord les pages déjà visibles mais peu cliquées. Ajouter un guide uniquement si la question a une intention distincte et si Brittany peut y apporter une réponse originale : par exemple limites de délégation, organisation multi-sociétés ou comparaison d'outils. Documenter les réponses courtes, les limites, les sources et la date des données. Pour les résultats IA de Google, aucune balise ni fichier spécial n'est exigé : l'indexation et les fondamentaux SEO restent la base. [Google, fonctionnalités IA](https://developers.google.com/search/docs/appearance/ai-features)

### 5. Mesurer l'expérience et les demandes

Suivre LCP, INP et CLS en données terrain dans Search Console ou PageSpeed Insights ; objectifs Google : LCP inférieur à 2,5 s, INP inférieur à 200 ms et CLS inférieur à 0,1. Vérifier les principales pages sur mobile. Définir une mesure respectueuse du consentement : source du contact, clic Calendly, formulaire envoyé et demandes qualifiées. La mesure actuelle n'est pas prouvée par la seule présence d'un script Analytics. [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)

## Critères de sortie après déploiement

- Les quatre variantes `http/https` et `www/sans-www` aboutissent à `https://www.brittassist.fr/` avec certificat valide.
- L'ancienne URL vendéenne mène en une redirection à la page Vendée.
- La page Tarifs et les cinq nouveaux guides répondent en 200, sont dans le sitemap, portent leur propre canonical et ne sont pas exclus de l'index.
- Search Console et Bing montrent le traitement du sitemap et les éventuelles exclusions ; les problèmes sont corrigés à partir de ces données.
- Les Core Web Vitals et les conversions sont observés sur plusieurs semaines avant d'attribuer un effet aux nouvelles pages.

**Limite essentielle :** personne ne peut garantir une note de 10/10, une indexation « partout » ou une position donnée. Le contenu doit rester exact et utile aux visiteurs ; les moteurs choisissent ensuite ce qu'ils explorent, indexent et affichent.
