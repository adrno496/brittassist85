### 6 octobre 2026 — validation du propriétaire, 50 pages

| | |
| --- | --- |
| Qui | Axel Dreano, propriétaire du site |
| Quand | 6 octobre 2026, 19 h 19 (heure de Paris) |
| Ses mots | « c'est bon j'ai tout checker » |
| En réponse à | Le rapport final de la série, qui demandait la relecture du lot A et rappelait que le site affiche « Relu par Brittany Dreano » |
| Pages couvertes | Les 50 pages de la série, lots A à D |
| Enregistré dans | `src/data/relectures.mjs`, liste `validations` |

**Comment « tout » a été lu.** Comme les cinquante pages de la série : ce sont les seules pages soumises à relecture, et ce document les liste toutes. C’était d’abord une lecture de l’outil. Le propriétaire l’a confirmée à 20 h 07 en écrivant que toutes les pages avaient été relues (voir plus bas).

**Ce que cette validation dit.** Que le propriétaire déclare avoir tout vérifié, et qu’il accepte les pages. L’outil n’a aucun moyen de savoir ce que la vérification a couvert : le registre garde la phrase, il ne la traduit pas en « lu en entier, sources ouvertes ».

**Ce qu’elle ne dit pas.** Que Brittany Dreano a relu ces pages. L’objet `relectures` reste vide : aucune page n’affiche « Relu par Brittany Dreano », aucune donnée structurée ne déclare `reviewedBy`.

**Ce qu’elle ne fait pas.** Elle ne publie rien. Les cinquante pages restent des brouillons — `noindex`, hors sitemap, absentes du build de production — jusqu’à leur inscription, lot par lot, dans `publications.mjs`.

**Contenu validé.** Celui des fichiers `src/data/dossiers/secretariat-*.ts` dans l’état où ils étaient à 18 h 50 le 6 octobre 2026, leur dernière modification avant la déclaration. Une page modifiée ensuite n’est plus couverte par cette validation pour ce qui a changé.

**Restés ouverts après la déclaration.**

- La page de référence dit « une obligation de résultat sur chaque sujet » ; les conditions générales, article 6, disent « obligation de moyens, non de résultat ». Non corrigé : la déclaration ne dit pas quoi en faire, et la page est protégée.
- Le nom affiché par le site reste celui de Brittany Dreano. Faire apparaître un autre relecteur demanderait de modifier le gabarit et les données structurées : rien n’a été demandé en ce sens.
- La source `economie.gouv.fr` de la page `tva-prestataire-en-franchise-en-base` refuse les outils, navigateur automatisé compris (HTTP 403, page de vérification). L’outil ne sait pas si elle a été ouverte pendant la vérification du propriétaire. Les règles qu’elle appuie ont été lues sur impots.gouv.fr et le BOFiP. Son adresse a été corrigée avant la mise en ligne (voir plus bas).

### 6 octobre 2026, 19 h 42 — mise en ligne du lot A : répétée, non faite

À 19 h 42, le propriétaire a demandé de préparer le commit et le push finaux. Aucune de ses deux phrases ne demande la mise en ligne d’un lot, et l’outil n’est pas autorisé à préparer une mise en production de sa propre initiative. Le lot A n’a donc pas été inscrit dans `publications.mjs` : les cinquante pages sont toujours des brouillons, et le commit préparé ne change rien à ce que le site sert.

La mise en ligne du lot A a été répétée sur une copie du dépôt, sans toucher au dépôt réel : 161 pages, 159 URL au sitemap, aucun blocage. Chiffres dans `data/repetition-lot-a.json`, lecture dans `09_TEST_REPORT.md`. Elle attend une demande explicite du propriétaire.

### 6 octobre 2026, 20 h 07 — mise en ligne des 50 pages, sur décision du propriétaire

| | |
| --- | --- |
| Qui | Axel Dreano, propriétaire du site |
| Quand | 6 octobre 2026, 20 h 07 (heure de Paris) |
| Ses mots | « fait pour qu'il y est les 199page indexable au sitemap, toute les pages on ete relu, corrige les brouille, puis commit push sur le main » |
| Ce qui a été fait | Les 50 pages de la série inscrites dans `src/data/publications.mjs`, datées du 6 octobre 2026 |
| Enregistré dans | `publications.mjs` pour la mise en ligne ; `relectures.mjs`, liste `validations`, pour la déclaration de relecture |

**Ce que cette décision change.** Les cinquante pages sont en ligne d’un coup : 199 pages indexables, 199 adresses au sitemap. Le plan par lots de `05_PUBLICATION_PLAN.md` n’a pas été suivi, et les critères de passage d’un lot au suivant n’ont pas été appliqués. C’est le choix du propriétaire, qui avait lui-même demandé une publication par lots au départ de la mission.

**Ce que « toutes les pages ont été relues » a changé, et n’a pas changé.** La phrase est enregistrée telle quelle dans la liste `validations`, comme seconde déclaration du propriétaire. Elle a été lue comme visant les cinquante pages de la série, les seules encore en brouillon. Elle ne dit pas qui a relu. L’objet `relectures` est donc resté vide : aucune page n’affiche « Relu par Brittany Dreano », aucune donnée structurée ne déclare `reviewedBy`. Si Brittany Dreano a relu ces pages elle-même, il suffit de le dire pour qu’elles y soient inscrites.

**Ce que « corriger les brouillons » a été compris comme.** Lever le statut de brouillon : retirer le `noindex`, le bandeau et la mise à l’écart du sitemap, ce que fait l’inscription dans `publications.mjs`. Aucun texte n’a été réécrit.

**La seule correction de contenu.** L’adresse de la source `economie.gouv.fr` de la page `tva-prestataire-en-franchise-en-base`. Une recherche limitée au site du ministère ne renvoie pas l’ancienne adresse ; la page de même titre, « Entreprises : pouvez-vous bénéficier de la franchise de TVA ? », y figure à une adresse plus longue, qui a été retenue. L’outil n’a pu ouvrir ni l’une ni l’autre : le site refuse les requêtes automatisées. Cette correction est postérieure à la validation du propriétaire ; elle ne touche qu’un lien de la rubrique « Références ».

**La page de référence.** Elle gagne sa rubrique « Pour approfondir », quatorze liens, et sa date de mise à jour passe au 6 octobre 2026. Title, H1, slug et texte ne changent pas. La phrase « une obligation de résultat sur chaque sujet », qui contredit l’article 6 des conditions générales, n’a pas été touchée.

**À surveiller.** Clics, impressions et position de `/guides/secretariat-externalise` dans la Search Console, sur une période identique avant et après le 6 octobre 2026. Si une page de la série apparaît à sa place sur une requête qu’elle tenait : renforcer le lien de cette page vers la page de référence, resserrer son title, et en dernier recours retirer sa ligne de `publications.mjs`.

### 6 octobre 2026, après la mise en ligne — source du ministère de l’Économie : ouverte par le propriétaire

Les outils n’avaient pu ouvrir cette page ni à l’ancienne adresse ni à la nouvelle. Le propriétaire l’a ouverte et en a transmis le texte : « Entreprises : pouvez-vous bénéficier de la franchise de TVA ? », page datée du 4 novembre 2025. Ce que le guide `tva-prestataire-en-franchise-en-base` affirme en s’appuyant sur elle a été confronté à ce texte, phrase par phrase.

| Ce que dit le guide | Ce que dit la page du ministère | Verdict |
| --- | --- | --- |
| Une entreprise en franchise ne facture pas la TVA | Elle est exonérée du paiement de la TVA, n’en est pas redevable et n’a pas de déclaration de TVA à faire | Conforme |
| Elle ne déduit pas la TVA de ses achats | Elle ne peut pas déduire la TVA payée sur ses achats, ni la récupérer sur ses investissements | Conforme |
| Ses factures portent la mention « TVA non applicable, article 293 B du CGI » | Mention à faire figurer : « TVA non applicable - article 293 B du CGI » | Conforme ; la page écrit la mention avec un tiret, le guide avec une virgule |
| Le régime est ouvert sous des seuils de chiffre d’affaires, qui évoluent | Seuils par nature d’opération ; une réforme prévue pour 2025 a été supprimée par une loi du 3 novembre 2025, qui maintient les seuils | Conforme. Le guide ne cite aucun chiffre |
| Au-delà des seuils, l’entreprise devient redevable de la TVA, selon des règles de date | Passé le plafond de l’année en cours, la franchise cesse pour les opérations faites à compter de la date de dépassement | Conforme |

Aucune correction n’en découle. Le guide ne reprend pas l’option pour la TVA que la page décrit : c’est un choix de périmètre, non une erreur. Aucune autre page du site ne cite de seuil chiffré.

L’outil ne sait pas par quelle adresse le propriétaire a ouvert la page : si c’est par le lien du guide, la nouvelle adresse est confirmée du même coup. L’outil, lui, reçoit toujours une réponse 403.

