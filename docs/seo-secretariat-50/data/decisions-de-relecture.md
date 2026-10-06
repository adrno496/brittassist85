### 6 octobre 2026 — validation du propriétaire, 50 pages

| | |
| --- | --- |
| Qui | Axel Dreano, propriétaire du site |
| Quand | 6 octobre 2026, 19 h 19 (heure de Paris) |
| Ses mots | « c'est bon j'ai tout checker » |
| En réponse à | Le rapport final de la série, qui demandait la relecture du lot A et rappelait que le site affiche « Relu par Brittany Dreano » |
| Pages couvertes | Les 50 pages de la série, lots A à D |
| Enregistré dans | `src/data/relectures.mjs`, liste `validations` |

**Comment « tout » a été lu.** Comme les cinquante pages de la série : ce sont les seules pages soumises à relecture, et ce document les liste toutes. Cette lecture est celle de l’outil qui a enregistré la déclaration, non une précision donnée par le propriétaire. Si la validation ne visait que le lot A, retirer les quarante autres lignes de la liste `validations`.

**Ce que cette validation dit.** Que le propriétaire déclare avoir tout vérifié, et qu’il accepte les pages. L’outil n’a aucun moyen de savoir ce que la vérification a couvert : le registre garde la phrase, il ne la traduit pas en « lu en entier, sources ouvertes ».

**Ce qu’elle ne dit pas.** Que Brittany Dreano a relu ces pages. L’objet `relectures` reste vide : aucune page n’affiche « Relu par Brittany Dreano », aucune donnée structurée ne déclare `reviewedBy`.

**Ce qu’elle ne fait pas.** Elle ne publie rien. Les cinquante pages restent des brouillons — `noindex`, hors sitemap, absentes du build de production — jusqu’à leur inscription, lot par lot, dans `publications.mjs`.

**Contenu validé.** Celui des fichiers `src/data/dossiers/secretariat-*.ts` dans l’état où ils étaient à 18 h 50 le 6 octobre 2026, leur dernière modification avant la déclaration. Une page modifiée ensuite n’est plus couverte par cette validation pour ce qui a changé.

**Restés ouverts après la déclaration.**

- La page de référence dit « une obligation de résultat sur chaque sujet » ; les conditions générales, article 6, disent « obligation de moyens, non de résultat ». Non corrigé : la déclaration ne dit pas quoi en faire, et la page est protégée.
- Le nom affiché par le site reste celui de Brittany Dreano. Faire apparaître un autre relecteur demanderait de modifier le gabarit et les données structurées : rien n’a été demandé en ce sens.
- La source `economie.gouv.fr` de la page `tva-prestataire-en-franchise-en-base` refuse les outils, navigateur automatisé compris (HTTP 403, page de vérification). L’outil ne sait pas si elle a été ouverte pendant la vérification du propriétaire. Les règles qu’elle appuie ont été lues sur impots.gouv.fr et le BOFiP.

### 6 octobre 2026 — mise en ligne du lot A : répétée, non faite

Après sa validation, le propriétaire a demandé de préparer le commit et le push finaux. Aucune de ses deux phrases ne demande la mise en ligne d’un lot, et l’outil n’est pas autorisé à préparer une mise en production de sa propre initiative. Le lot A n’a donc pas été inscrit dans `publications.mjs` : les cinquante pages sont toujours des brouillons, et le commit préparé ne change rien à ce que le site sert.

La mise en ligne du lot A a été répétée sur une copie du dépôt, sans toucher au dépôt réel : 161 pages, 159 URL au sitemap, aucun blocage. Chiffres dans `data/repetition-lot-a.json`, lecture dans `09_TEST_REPORT.md`. Elle attend une demande explicite du propriétaire.
