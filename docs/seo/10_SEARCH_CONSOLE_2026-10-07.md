# Search Console — rapport d'indexation du 7 octobre 2026

Point de départ : la propriété `https://www.brittassist.fr/` compte **56 pages indexées et 25 non indexées**, pour trois motifs. Le site en déclare 199 dans son sitemap : Google n'a donc encore exploré qu'une partie des pages publiées les 3 et 6 octobre.

## Contrôle du build (7 octobre)

| Contrôle | Résultat |
| --- | --- |
| Pages construites | 201, dont 199 indexables (`/404` et `/questionnaire` sont en `noindex`) |
| Sitemap | 199 URL, toutes en 200 sous les règles de `vercel.json` (`npm run servir`) |
| Canonical | Présent partout, absolu, égal à l'adresse de la page : aucune page indexable ne désigne une autre URL |
| Liens internes vers une redirection | Aucun |
| `noindex`, `X-Robots-Tag`, `Disallow` accidentels | Aucun |
| Profondeur | 2 clics au plus depuis l'accueil |
| Similarité entre pages (5-grammes) | Aucune paire au-dessus du seuil d'alerte (0,3) |
| Audit SEO strict | 0 blocage, 2 avertissements (`/contact` courte, `/mentions-legales` liée seulement depuis le pied de page) |

Les 22 pages « explorées, non indexées » ne se distinguent pas des autres : 750 mots en moyenne (876 pour les autres), 22 liens contextuels entrants en moyenne (15 pour les autres), profondeur 1,5. Le maillage et la technique ne les désavantagent pas.

## Motif par motif

### Page avec redirection — 2 pages : normal, rien à corriger

| URL | Redirige vers | Origine |
| --- | --- | --- |
| `/assistante-administrative-vendee` | `/assistante-independante/vendee` (308) | Ancienne adresse, conservée pour ne pas perdre les liens existants |
| `/questionnaire.html` | `/questionnaire` (308) | Ancienne forme avec extension, exploration du 16 juin |

Une adresse qui redirige n'est jamais indexée : c'est sa cible qui l'est. Aucun lien du site ne pointe vers elles. Google les gardera dans ce rapport quelque temps, puis les oubliera. **Ne pas cliquer « Valider la correction »** : il n'y a rien à corriger.

### Autre page avec balise canonique correcte — `/services`

Le build actuel déclare `<link rel="canonical" href="https://www.brittassist.fr/services">` sur `/services` : la page se désigne elle-même. L'exploration date du 4 octobre. À cette date, la production servait une version antérieure du dépôt (voir `05_TECHNICAL_SEO_AUDIT.md`, « Écart entre la production et le dépôt »), et `/services` a redirigé ailleurs par le passé (vers `/domaines-intervention` en juin).

À faire dans Search Console : inspecter `https://www.brittassist.fr/services`, cliquer **« Tester l'URL en ligne »**, lire « URL canonique déclarée par l'utilisateur ». Si elle vaut bien `https://www.brittassist.fr/services`, cliquer **« Demander une indexation »**, puis « Valider la correction » sur ce motif.

### Explorée, actuellement non indexée — 22 pages : décision de Google, pas une erreur

Google a téléchargé ces pages le 5 ou le 6 octobre, deux jours après leur mise en ligne, et a choisi de ne pas les indexer **pour l'instant**. Aucun réglage technique ne l'en empêche (voir le contrôle ci-dessus). Ce motif traduit un jugement de valeur et de priorité :

- **domaine jeune et 150 pages publiées en quatre jours** : Google indexe par paliers. Il attend des signaux (liens externes, clics) avant d'en prendre davantage ;
- **pages proches d'autres pages du site** : les fiches `/services/*` et `/assistante/*` suivent un même gabarit, et plusieurs guides traitent des sujets voisins ;
- **pages sans intention de recherche** : `/politique-confidentialite` et `/methode-editoriale` ne répondent à aucune requête. Il est normal qu'elles restent hors de l'index.

**Ne pas valider la correction tout de suite** : rien n'a changé dans ces pages, la validation échouerait. Ce qui fait bouger ce motif :

1. **Demander l'indexation** des pages qui comptent, une par une, dans « Inspection de l'URL » (quota d'une dizaine par jour) : d'abord `/services/gestion-administrative`, `/services/coordination`, `/assistante-independante/a-distance`, `/services/organisation-deplacements`, puis les `/assistante/*`.
2. **Les rendre plus singulières** : un exemple vécu, une photo propre, un chiffre réel, une relecture inscrite dans `relectures.mjs`. C'est la première piste si elles restent exclues.
3. **Obtenir des liens externes** : fiche Google Business Profile, LinkedIn, Instagram, annuaires locaux (CCI, Pages Jaunes), partenaires. Ce sont eux qui décident Google à explorer davantage un domaine récent.
4. **Attendre trois à six semaines** avant de conclure, sans republier en masse entre-temps.

## Correction apportée au dépôt

`vercel.json` redirige désormais tout `https://brittassist.fr/<chemin>` vers `https://www.brittassist.fr/<chemin>` en 308, quel que soit le réglage des domaines chez Vercel. Si l'apex y est déjà déclaré en redirection, ce réglage passe avant et la règle ne sert pas. Elle garantit seulement qu'aucune page ne sera jamais servie en double sur le domaine nu. `npm run servir` applique la condition d'hôte, pour vérifier la règle en local :

```bash
curl -sI -H 'Host: brittassist.fr' http://127.0.0.1:4322/services   # 308 → https://www.brittassist.fr/services
```

## Réglages à vérifier hors du dépôt

1. **Vercel → Settings → Domains** : `www.brittassist.fr` en domaine principal, `brittassist.fr` en « Redirect to www.brittassist.fr » avec le code **308** (et non 307, qui est temporaire).
2. **Search Console** : ajouter une propriété **Domaine** `brittassist.fr` (vérification DNS). Elle réunit `http`, `https`, apex et `www` dans un seul rapport, et montre ce que Google voit sur le domaine nu.
3. **Sitemaps** : `https://www.brittassist.fr/sitemap-index.xml` doit afficher « Réussite » et 199 URL découvertes.

Contrôles en production après déploiement :

```bash
curl -sI https://brittassist.fr/services | grep -iE '^(HTTP|location)'        # 308 → https://www.brittassist.fr/services
curl -sI https://www.brittassist.fr/services | grep -iE '^HTTP'               # 200
curl -s https://www.brittassist.fr/services | grep -o '<link rel="canonical"[^>]*>'
curl -s https://www.brittassist.fr/sitemap-0.xml | grep -o '<loc>' | wc -l    # 199
```
