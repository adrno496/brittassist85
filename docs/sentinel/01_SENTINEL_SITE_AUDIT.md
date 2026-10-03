# 01 — Audit SENTINEL du site

Cible : site BrittAssist, commit `df48fb4`. Audit de référence du 3 octobre 2026, avant modification. Le ré-audit après corrections figure en fin de document.

Colonne « SENTINEL utilisé » : **oui** = le résultat vient d'un module SENTINEL réellement exécuté ; **non** = contrôle fait avec un autre outil, nommé dans la colonne Preuve ; **bloqué** = module lancé, mais refusé par sa propre politique.

Priorités : P0 à corriger avant mise en ligne · P1 important · P2 utile · P3 confort.

## Résultat d'ensemble

| Module SENTINEL | Verdict rendu par l'outil | Lecture |
| --- | --- | --- |
| BR360 V3 (`audit`) | 3 PASS, 6 PARTIAL, 2 FAIL, 97 NOT_TESTED, 17 NOT_APPLICABLE ; maturité 1 « AD_HOC » ; couverture 10 % | Seuls les 15 contrôles automatiques parlent. Le niveau de maturité bas traduit l'absence de tests et de preuves de terrain, pas un défaut du site. |
| RECURSIVE `stack` | `BLOCKED` ; qualité 85,71 ; couverture de preuve 58,33 % | `BLOCKED` vient des scanners externes refusés, pas d'un défaut trouvé. |
| RECURSIVE `web-check` | `COMPLETE_WITH_WARNINGS` | Un avertissement : pas d'en-tête CSP dans `vercel.json`. |
| Vibe security `inventory` | `COMPLETE_WITH_WARNINGS` : 75 fichiers, 16 sources classées, 2 candidats statiques | Les candidats sont le cookie de consentement et le formulaire : comportement attendu. |
| Audit web `security-audit` (production) | 95/100, couverture 100 % | Un risque élevé (en-tête CSP), un mineur (DMARC). |
| Audit web `audit-seo` | 91/100 en local, 99/100 en production — **une seule page explorée** | Note de la page d'accueil seule ; voir les limites. |
| Audit web `audit-pages` (build local) | 48 pages, moyenne 92/100 | Constats réels : descriptions et titres longs. |
| Audit web `audit-browser` (build local) | 96 et 98/100, 0 violation axe, 0 erreur console | Sur deux pages. |

## Contrôles

| Contrôle | SENTINEL utilisé | Résultat | Preuve | Priorité | Correction |
| --- | --- | --- | --- | --- | --- |
| Secrets dans le code distribué | oui — BR360-SEC-002 | PASS | « Built-in high-confidence secret scan found no matches » ; recoupé par `gitleaks` sur 25 commits | — | Aucune |
| Fichiers `.env` | oui — vibe `inventory` | PASS | Aucun fichier `.env` dans l'inventaire ; `.gitignore` les exclut | — | Aucune |
| En-têtes de sécurité déclarés | oui — BR360-SEC-005, RECURSIVE `web-check` | PARTIAL | HSTS, nosniff, Referrer-Policy, protection anti-cadre : PASS. CSP : WARN, absente de `vercel.json` | P2 | Ajouter un en-tête CSP limité aux directives qu'une balise `<meta>` ne peut pas porter |
| En-têtes réellement servis | oui — `security-audit`, module headers | PARTIAL | Score 80 : `content-security-policy` absent de la réponse HTTP | P2 | Même correction |
| Content-Security-Policy (contenu) | non — `scripts/seo-audit.mjs` | PARTIAL | Politique stricte en `<meta>`, sans `unsafe-inline`. Empreinte du script de thème absente sur 49 pages | P1 | Déclarer l'empreinte dans la configuration Astro |
| TLS | oui — `security-audit`, module tls | PASS | Score 100 ; certificat valide sur `www` et sur le domaine nu | — | Aucune |
| DNS : SPF, DMARC, CAA | oui — `security-audit`, module dns | PARTIAL | Score 92 : DMARC non détecté, aucun CAA | P2 | Action manuelle chez le registraire |
| Cookies avant consentement | oui — `security-audit`, module cookies | PASS | Score 100 ; aucun cookie posé avant choix | — | Aucune |
| Exposition de fichiers sensibles | oui — `security-audit`, module exposure | PASS | Score 100 ; `/wp-admin` et `/wp-login.php` en 403, sans contenu | — | Aucune |
| XSS et sources navigateur | oui — RECURSIVE `web-check`, règle `browser-source` | PASS | « Bounded browser source inspection complete » (heuristique, preuve E1) | — | Aucune |
| Injection, sorties non échappées | oui — BR360-SEC-003 | NON TESTÉ | Contrôle semi-automatique, sans preuve fournie | P3 | Sans objet tant que le site n'a ni entrée serveur ni rendu dynamique |
| Authentification, sessions, autorisations | oui — BR360-SEC-004, profil RECURSIVE | NON APPLICABLE | Aucun compte, aucune session ; `"auth": []` dans le profil détecté | — | Aucune |
| API, CORS, CSRF, SSRF, traversée de chemins, redirections ouvertes | oui — profil RECURSIVE `inspect` | NON APPLICABLE | Aucun point d'accès serveur ; surfaces : `["web"]` | — | Aucune |
| Base de données, RLS, stockage, envois de fichiers | oui — RECURSIVE `stack` (Supabase : non détecté) | NON APPLICABLE | `"database": []` | — | Aucune |
| Inventaire des dépendances reproductible | oui — BR360-SC-001, RECURSIVE `supply-chain` | PASS | Manifeste et fichier de verrouillage présents | — | Aucune |
| Vulnérabilités des dépendances | bloqué — `security-full` (`sandbox_unavailable`) | FAIL | Hors SENTINEL, `npm audit` : 1 critique, 8 élevées, 1 faible | P1 | `npm audit fix` pour six paquets ; montée d'Astro en version 7 à planifier |
| Provenance des dépendances | oui — vibe `dependency-provenance` | PARTIAL | `STATICALLY_CHECKED`, aucun constat ; provenance en direct `NOT_AVAILABLE` | P3 | Aucune |
| Confiance de la chaîne CI | oui — vibe `ci-trust`, RECURSIVE `ci-security` | NON APPLICABLE | Aucun workflow dans le dépôt | P2 | Ajouter un contrôle automatique avant déploiement |
| Flux de données personnelles, sorties réseau | oui — vibe `inventory` | PARTIAL | 16 sources classées, toutes dans `consent.js` et `axdia-forms.js` ; propriétaire et durée de conservation « UNKNOWN » pour l'outil | P3 | Les destinataires sont déjà nommés dans la politique de confidentialité |
| Formulaires | non — lecture du code | PARTIAL | Envoi vers FormSubmit et AxdiaOS ; consentement obligatoire ; captcha désactivé, pas de champ piège | P2 | Ajouter un champ piège |
| Agents IA, prompts, exfiltration | oui — vibe `known-incidents` | NON APPLICABLE | Le site n'embarque aucun agent ni appel à un modèle | — | Aucune |
| Configuration d'environnement | oui — BR360-RUN-001 | PARTIAL | « Some explicit environment configuration exists » | P3 | Sans objet : aucune variable d'environnement |
| Mode debug en production | oui — BR360-RUN-004 | PARTIAL | Aucun motif de debug ; pas d'assertion explicite | P3 | Sans objet pour un build statique |
| Cartes de sources exposées | non — inspection de `dist/` | PASS | Aucun fichier `.map` dans le build | — | Aucune |
| Accessibilité, résultat d'analyse disponible | oui — BR360-A11Y-002 | PARTIAL | « no result artifact was available » | P1 | Rapport axe-core désormais produit par `scripts/browser-check.mjs` |
| Accessibilité, violations | oui — `audit-browser` (axe-core de SENTINEL) | PARTIAL | 0 violation sur les deux pages testées par SENTINEL. Avec le même axe-core sur les 49 pages : contraste insuffisant sur 4 pages | P1 | Assombrir le sur-titre sur fond rose |
| Cibles tactiles | oui — `audit-browser` | PARTIAL | 53 à 54 cibles sous 44 × 44 px (critère de niveau AAA) | P3 | Le niveau AA (24 × 24 px) reste à vérifier |
| Performance, comparaison à une référence | oui — BR360-PERF-004 | PARTIAL | « baseline/budget is missing » | P2 | Mesures Lighthouse avant et après désormais consignées |
| Performance mesurée | oui — `audit-browser` | PASS | LCP 356 ms et 248 ms sur le serveur local, sans bridage | — | Voir Lighthouse pour une mesure bridée |
| Images surdimensionnées | oui — `audit-browser` | PARTIAL | 1 image servie à plus de deux fois sa taille d'affichage sur l'accueil | P2 | Variantes adaptées et format moderne |
| SEO de la page d'accueil | oui — `audit-seo` | PARTIAL | 91/100 en local ; description de 183 caractères, titre de 66 | P2 | Raccourcir |
| SEO de toutes les pages | oui — `audit-pages` (48 pages) | PARTIAL | 8 descriptions longues, 4 titres longs | P2 | Raccourcir |
| Indexabilité, sitemap, canonical, doublons | non — `scripts/seo-audit.mjs` | PASS | Voir [02_BASELINE_BEFORE.md](../site-audit/02_BASELINE_BEFORE.md) | — | Aucune |
| Données structurées | oui — `audit-seo` | **faux positif** | L'outil annonce « Aucun JSON-LD » ; le HTML contient un `@graph` valide sur chaque page | — | Aucune sur le site |
| Licence du projet | oui — BR360-LIC-001, `release-check` | FAIL (peu pertinent) | Aucun fichier LICENSE | P3 | Site vitrine privé, non distribué : pas d'action, sauf choix du propriétaire |
| Schémas de données explicites | oui — BR360-DATA-001 | FAIL (non pertinent) | L'outil déduit une « surface de données persistantes » des formulaires | — | Aucune : le site ne stocke rien |
| Timeouts et reprises | oui — BR360-RES-001 | PARTIAL (non pertinent) | Signal trouvé dans `package-lock.json` seulement | — | Aucune |
| Frontières et propriété des dépendances | oui — BR360-ARCH-004 | PARTIAL | Pas de document d'architecture | P3 | README remis à jour |
| Scanners Trivy, Semgrep, OSV | bloqué | NON TESTÉ | `security-full` : `BLOCKED`, bac à sable indisponible ou outil absent | P3 | — |
| Nuclei, ZAP, scanner profond distant | non lancé | NON TESTÉ | Contrôles actifs, exclus sans engagement d'audit autorisé | — | — |

## Ce que SENTINEL n'a pas pu dire

- Il ne mesure ni l'indexation réelle, ni les positions, ni les Core Web Vitals de terrain sans clé d'API tierce.
- Son audit SEO n'a exploré qu'une page : la couverture des 49 pages vient d'un script propre au dépôt.
- Aucun de ses verdicts ne vaut certification. Les niveaux de preuve obtenus sont E1 (inspection statique) à E4 (exécution locale), et E7 (observation passive de la production) pour les en-têtes, TLS et DNS.

## Ré-audit après modifications

Date : 3 octobre 2026, 17 h 48 à 17 h 58. Cible : un nouvel instantané de l'arbre de travail modifié (211 fichiers, sources et build), hors `node_modules`, `.git` et `outils/`. Mêmes commandes qu'à l'audit de référence.

### Avant / après

| Module SENTINEL | Avant | Après | Lecture |
| --- | --- | --- | --- |
| BR360 `audit` | 3 PASS · 6 PARTIAL · 2 FAIL · 97 NOT_TESTED | Identique | Aucun contrôle n'a régressé. `compare` : écart de score nul |
| RECURSIVE `web-check`, en-tête CSP | WARN | **PASS** | L'en-tête `Content-Security-Policy` est désormais déclaré dans `vercel.json` |
| RECURSIVE `web-check`, autres en-têtes | PASS | PASS | — |
| RECURSIVE `stack`, score de qualité | 85,71 | **100** | Plus aucun avertissement parmi les contrôles exécutés |
| RECURSIVE `stack`, statut | BLOCKED | BLOCKED | Inchangé : il vient des scanners externes refusés par la politique de l'outil |
| RECURSIVE `stack`, couverture de preuve | 58,33 % | 58,33 % | Inchangé |
| Vibe security `inventory` | COMPLETE_WITH_WARNINGS, 2 candidats | COMPLETE_WITH_WARNINGS, 2 candidats | Les deux mêmes : le stockage local du bandeau de consentement |
| Vibe security `dependency-provenance`, `ci-trust` | Aucun constat | Aucun constat | — |
| Audit web `audit-pages` | 48 pages, moyenne 92 | **149 pages, moyenne 100** | Aperçu complet, serveur local avec en-têtes ; plus aucun titre ni description hors limites |
| Audit web `audit-browser` | 96 et 98, 0 violation | 98 sur trois pages nouvelles, 0 violation, 0 erreur console | — |
| Audit web `security-audit`, module en-têtes | 80 (production) | **98** (serveur local appliquant `vercel.json`) | Reste : « CSP sans directive `script-src` dans l'en-tête ». C'est voulu : cette directive est portée par la balise |
| Audit web `audit-seo` | 91 | 91 | Mêmes artefacts du serveur local, même faux positif sur le JSON-LD |

### Un constat critique apparu en cours de route, puis levé

À la première passe du ré-audit, `inventory` est passé en **FAIL** avec un constat nouveau :

| Règle | Gravité | Fichier | Chemin relevé |
| --- | --- | --- | --- |
| `SECRET_FIELD_EXPOSED` | CRITICAL | `src/data/publication.mjs`, ligne 58 | ENVIRONMENT → return |

**Analyse.** Le module lisait `process.env.BROUILLONS`, puis renvoyait un booléen qui en dépendait. L'outil suit toute valeur d'environnement comme un secret potentiel, et signale qu'elle atteint une valeur de retour. Ici, la variable est un interrupteur de build — `1` ou rien —, lue au moment de construire le site, jamais servie à un visiteur. **C'est un faux positif** : aucun secret n'est en jeu.

**Ce qui a été fait.** La lecture de la variable a été isolée dans un module à part, `src/data/mode.mjs`, qui ne fait que cela et l'explique. Le constat a disparu.

**Ce qu'il faut en retenir honnêtement.** Le constat a disparu parce que l'analyse de l'outil est bornée à chaque fichier — sa documentation le dit —, pas parce qu'un risque a été supprimé : il n'y en avait pas. Le bénéfice réel du changement est ailleurs : la seule lecture d'environnement du site tient désormais en une ligne, dans un fichier qui ne contient rien d'autre.

### Constat nouveau, sans conséquence en ligne

| Constat | Module | Analyse |
| --- | --- | --- |
| `.DS_Store` exposé | `security-audit`, exposition, sur le serveur local | Le fichier `public/.DS_Store` existe sur ce poste et se retrouve dans `dist/`. Il est ignoré par Git (`.gitignore`), donc absent d'un déploiement depuis le dépôt ; le même contrôle sur la production ne le trouve pas. À supprimer du poste par propreté |

### Contrôles SENTINEL qui restent ouverts

| Contrôle | Statut | Ce qu'il faudrait |
| --- | --- | --- |
| BR360-A11Y-002, BR360-PERF-004 | PARTIAL | L'outil cherche un artefact de résultat dans l'arbre du projet. Les rapports sont désormais conservés dans `docs/site-audit/data/` ; le détecteur ne les reconnaît pas sous cette forme |
| BR360-LIC-001 | FAIL | Un fichier de licence, si le propriétaire le souhaite |
| Scanners Trivy, Semgrep, OSV | BLOCKED / NOT_AVAILABLE | Un bac à sable accepté par la politique de RECURSIVE, ou une exécution hors SENTINEL |
| DMARC, CAA | Constat | Enregistrements DNS, hors du dépôt |
| 97 contrôles BR360 | NOT_TESTED | Preuves manuelles ou de terrain |

### Commandes du ré-audit

```sh
rsync -a --exclude node_modules --exclude .git --exclude outils --exclude .plugcode --exclude .astro --exclude .vercel --exclude .DS_Store ./ $SNAP2/

.venv/bin/python …/br360_engine.py audit --project $SNAP2 --out $OUT2/br360.json
.venv/bin/python …/br360_engine.py compare --before $OUT/br360.json --after $OUT2/br360.json --out $OUT2/br360-delta.json
../.venv/bin/python recursive.py web-check $SNAP2
../.venv/bin/python recursive.py stack $SNAP2
.venv/bin/python axdia_vibe_security.py inventory $SNAP2 --no-host --no-runtime
.venv/bin/python axdia_vibe_security.py dependency-provenance $SNAP2 --no-host --no-runtime
.venv/bin/python axdia_vibe_security.py ci-trust $SNAP2 --no-host --no-runtime

node dist/cli-pages.js http://127.0.0.1:4322 -m 200 -o json -f $OUT2/pages-apercu.json --quiet
node dist/cli-browser.js http://127.0.0.1:4322/guides/devis-factures-relances -o json …
node dist/cli-browser.js http://127.0.0.1:4322/guides/mentions-obligatoires-facture -o json …
node dist/cli-browser.js http://127.0.0.1:4322/assistante -o json …
node dist/cli-seo.js http://127.0.0.1:4322 -m 60 -o json …
node dist/cli.js http://127.0.0.1:4322 --intelligence-mode off --no-cookies -o json …
```

Le serveur local (`scripts/serve-dist.mjs`, port 4322) applique les en-têtes et redirections de `vercel.json`. Les modules DNS et TLS de `security-audit` n'ont pas de sens sur une adresse locale : leurs résultats du ré-audit ne sont pas retenus ; ceux de la production, à l'audit de référence, restent la mesure valable.
