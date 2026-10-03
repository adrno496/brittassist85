# 00 — Découverte de SENTINEL

Date : 3 octobre 2026 · Dossier inspecté : `/Users/dreano/Downloads/SENTINEL` · Cible : le site du workspace courant, `/Users/dreano/Document/brittassist85`.

## À lire en premier

- **La cible n'est pas le site AXDIA.** Le prompt est intitulé « AXDIA », mais le workspace courant contient le site **BrittAssist** (assistance de direction externalisée, Astro 5 statique). Le prompt désigne « le site présent dans le workspace courant » : c'est donc BrittAssist qui a été audité, et les exemples du prompt (audit, sécurité, outil) ont été adaptés à son activité réelle.
- **SENTINEL a été réellement exécuté**, mais sur un périmètre partiel. Une grande partie du dossier est un moteur d'assurance qui se qualifie lui-même sur ses propres jeux d'essai (fixtures) : ces commandes ne disent rien d'un site tiers et n'ont pas été lancées.
- **Aucun module SENTINEL ne certifie le site.** Les outils le disent eux-mêmes : un contrôle non exécuté reste `NOT_TESTED`, jamais `PASS`.
- **SENTINEL a tourné sur un instantané**, pas dans le dépôt : une copie des 54 fichiers suivis par Git, plus le build `dist/`, placée dans un dossier temporaire hors projet. Raisons : le moteur écrit ses rapports dans `.recursive/` à l'intérieur de la cible, et le dossier non suivi `outils/` (une copie des mêmes outils) aurait faussé l'inventaire. Les fichiers audités sont identiques octet pour octet à ceux du dépôt.

## Fichiers réellement inspectés

Lus intégralement avant toute exécution :

| Fichier | Ce qu'il apprend |
| --- | --- |
| `OPTIMISATION_V2_README.md` | Structure du pack : RECURSIVE, FORMATION, Audit 360, couche « API & External Intelligence » V8 ; règle « pas de preuve = pas de PASS ». |
| `DATA_EXFILTRATION_SECURITY_README.md` | Commandes `axdia_vibe_security.py` et `axdia_data_exfiltration.py` ; aucun code de la cible n'est exécuté ; budgets d'analyse. |
| `SUPABASE_SECURITY_README.md` | Assurance Supabase (RLS, grants) ; le transport distant est `NOT_AVAILABLE`. |
| `PERIODIC_REAUDIT_README.md` | Inventaire périodique du pack lui-même. |
| `EXECUTION_V4_V5_V5_1.md`, `CONTINUATION_V4_V5_V5_1.md` | Qualifications sur fixtures ; « le runtime refuse les audits de cibles clients réelles ». |
| `docs/HARDENING_7_DOMAINS.md` | Qualification locale sous Docker ; une cible arbitraire reste `UNTESTED`. |
| `RECURSIVE/README.md` | Commandes `doctor`, `inspect`, `web-check`, `stack`, `security-full`, `capabilities`, `release-check` ; niveaux de preuve E0 à E7. |
| `AXDIA_FRAMEWORK_audit-360-security/README.md`, `RULES.md`, `Audit_360/README.md`, `Audit_360/USAGE_VSCODE_CHAT.md`, `01-audit-360-security/CONTROL_SCOPE.md` | Moteur BR360 V3 : 125 contrôles, dont 15 automatisés ; lecture seule ; rapport à écrire hors du projet. |
| `AXDIA_OS/package.json`, `AXDIA_OS/START_HERE_V7.md` | Liste des scripts npm ; CLI `sentinel/cli/sentinel.mjs`. |
| `AXDIA_OS/engines/audit/README.md`, `CLAUDE.md`, en-tête de `seoaudit.sh` | Suite d'audit web par URL : `security-audit`, `audit-seo`, `audit-pages`, `audit-browser` ; Nuclei et ZAP interdits sans autorisation explicite. |
| Les dix points d'entrée Python à la racine (`axdia_audit.py`, `axdia_vibe_security.py`, `axdia_hardening.py`…) | Simples lanceurs vers `RECURSIVE/runtime/…`. |
| `vibe-security-policy.json`, `supabase-security-target.example.json` | Politique stricte : egress refusé, exécution distante refusée. |
| `AXDIA_OS/orchestrator/commands/audit.mjs`, `security-universal.mjs`, `sentinel/cli/shims/curl` | Lanceurs ; les `curl` du moteur passent par une passerelle de sortie réseau. |

Parcourus par leur structure seulement (noms de fichiers, pas le contenu) : `RECURSIVE/runtime/` (99 entrées), `docs/sentinel-v8*`, `FORMATION/`, `tests/`, `tools/`, `prompts/`, `.recursive/`.

**Non ouverts, volontairement :** `AXDIA_OS/config/keys.env`, `AXDIA_OS/engines/audit/aeo-keys.env` et `PRIVATE_KEYS_INCLUDED.txt`. Ce sont des coffres de clés ; la documentation SENTINEL interdit de les lire et rien dans cet audit n'en avait besoin.

## Capacités détectées et usage

| Capacité | Commande | Pertinence pour ce site | Utilisée |
| --- | --- | --- | --- |
| Audit 360 / BR360 V3 (125 contrôles, 15 détecteurs automatiques) | `br360_engine.py selftest` puis `audit --project … --out …` | Oui : secrets, en-têtes, dépendances, accessibilité, performance | **Oui** |
| RECURSIVE — profil et environnement | `recursive.py doctor`, `inspect`, `capabilities` | Oui : détection de la stack et des outils | **Oui** |
| RECURSIVE — contrôles web statiques | `recursive.py web-check` | Oui : en-têtes `vercel.json`, secrets publics, XSS plausibles | **Oui** |
| RECURSIVE — rapport consolidé | `recursive.py stack` | Oui | **Oui** |
| RECURSIVE — sécurité étendue (Trivy, OSV, Semgrep) | `recursive.py security-full` | Oui | **Lancée, résultat BLOCKED** (voir limites) |
| RECURSIVE — licence et distribution | `recursive.py release-check` | Faible (site vitrine, pas un produit distribué) | Lancée, BLOCKED |
| Vibe security — inventaire des flux de données | `axdia_vibe_security.py inventory` | Oui : formulaires, cookies, tiers | **Oui** |
| Vibe security — provenance des dépendances, confiance CI, familles d'incidents | `dependency-provenance`, `ci-trust`, `known-incidents` | Partielle | **Oui** |
| Audit web — sécurité par URL | `engines/audit/dist/cli.js` | Oui : en-têtes servis, TLS, DNS, cookies, exposition | **Oui**, sur la production, en lecture seule |
| Audit web — SEO | `dist/cli-seo.js` | Oui | **Oui**, local et production |
| Audit web — page par page | `dist/cli-pages.js` | Oui | **Oui**, sur le build local |
| Audit web — navigateur (axe-core, métriques, console) | `dist/cli-browser.js` | Oui | **Oui**, sur le build local |
| Playwright et axe-core embarqués | `engines/audit/node_modules` | Oui : utilisés par `scripts/browser-check.mjs` du site | **Oui** |
| Assurance Supabase | `axdia_supabase_security.py` | Non : aucune base de données | Non — non applicable |
| Contrôles Capacitor / mobile | `recursive.py capacitor-check` | Non | Non — non applicable |
| Qualifications sur fixtures (`axdia_audit.py qualify`, `axdia_frontier.py`, `axdia_hardening.py qualify`, `axdia_orchestrator.py run-fixture`) | — | Non : elles éprouvent le moteur, pas la cible | Non |
| Boucle d'auto-amélioration (`recursive.py self-recurse`, `continuous_improvement.py`) | — | Non : elle modifie l'état de SENTINEL | Non |
| Scanner profond distant (`security-deep-hunt --universal-scanner`), Nuclei, ZAP actif | — | Exclu : contrôles actifs, autorisation et profils d'engagement requis | Non |
| Intelligence externe (Shodan, SecurityTrails, urlscan, CrUX, PageSpeed) | `--intelligence-mode`, `--psi` | Utile, mais envoie le domaine à des tiers avec des clés privées | Non — désactivée (`--intelligence-mode off`) |
| Prospection, missions, proposition commerciale | `npm run prospect`, `mission`… | Hors sujet | Non |

## Commandes réellement exécutées (phase de référence)

Toutes lancées le 3 octobre 2026 entre 15 h 59 et 16 h 12 (heure de Paris). `$SNAP` désigne l'instantané temporaire, `$OUT` le dossier de rapports temporaire, tous deux hors du dépôt.

```sh
# Instantané des fichiers suivis par Git, plus le build
git ls-files -z | rsync -a --from0 --files-from=- . $SNAP/ && rsync -a dist $SNAP/

# Audit 360 / BR360
.venv/bin/python AXDIA_FRAMEWORK_audit-360-security/Audit_360/runtime/br360_engine.py selftest
.venv/bin/python AXDIA_FRAMEWORK_audit-360-security/Audit_360/runtime/br360_engine.py audit --project $SNAP --out $OUT/br360.json

# RECURSIVE (depuis SENTINEL/RECURSIVE)
../.venv/bin/python recursive.py doctor $SNAP
../.venv/bin/python recursive.py inspect $SNAP
../.venv/bin/python recursive.py web-check $SNAP
../.venv/bin/python recursive.py stack $SNAP
../.venv/bin/python recursive.py security-full $SNAP
../.venv/bin/python recursive.py capabilities $SNAP
../.venv/bin/python recursive.py release-check $SNAP

# Vibe security (statique : ni machine hôte, ni Docker)
.venv/bin/python axdia_vibe_security.py inventory $SNAP --no-host --no-runtime
.venv/bin/python axdia_vibe_security.py dependency-provenance $SNAP --no-host --no-runtime
.venv/bin/python axdia_vibe_security.py ci-trust $SNAP --no-host --no-runtime
.venv/bin/python axdia_vibe_security.py known-incidents $SNAP --no-host --no-runtime

# Suite d'audit web (depuis SENTINEL/AXDIA_OS/engines/audit)
node dist/cli-browser.js http://127.0.0.1:4321/ -o json -f $OUT/browser-home.json --quiet
node dist/cli-browser.js http://127.0.0.1:4321/guides/comment-deleguer -o json -f $OUT/browser-guide.json --quiet
node dist/cli-seo.js http://127.0.0.1:4321 -m 60 -o json -f $OUT/seo-local.json --quiet
node dist/cli-pages.js http://127.0.0.1:4321 -m 60 -o json -f $OUT/pages-local.json --quiet
node dist/cli-seo.js https://www.brittassist.fr -m 60 -o json -f $OUT/seo-prod.json --quiet
node dist/cli.js https://www.brittassist.fr --intelligence-mode off -o json -f $OUT/security-prod.json --quiet
```

Les résultats sont détaillés dans [01_SENTINEL_SITE_AUDIT.md](01_SENTINEL_SITE_AUDIT.md).

## Limites constatées

| Limite | Preuve | Conséquence |
| --- | --- | --- |
| `security-full` renvoie `BLOCKED` | Sortie : `"reason": "sandbox_unavailable"` pour les commandes Trivy ; adaptateurs externes « opt-in réseau requis » | Trivy n'a pas tourné via SENTINEL. Les secrets et les dépendances ont été contrôlés hors SENTINEL, avec `gitleaks` et `npm audit`. |
| `audit-seo` n'explore qu'une page | `"pages_crawled": 1, "sitemap_urls": 0` sur le build local comme sur la production | Le moteur ne suit pas l'index de sitemaps du site. Sa note porte sur la page d'accueil seule. L'audit SEO de toutes les pages vient de `scripts/seo-audit.mjs`. |
| `audit-seo` annonce « Aucun JSON-LD » | Faux : chaque page contient un bloc `@graph` valide (WebSite, ProfessionalService, Person, WebPage), vérifié par analyse du HTML construit | Faux positif de l'outil, qui ne lit pas la forme `@graph`. Ne pas en tenir compte. |
| `audit-seo` détecte « Next.js » sur la production | Le dépôt est un site Astro | Détection de stack approximative ; sans incidence sur les autres contrôles. |
| Le build local ne sert pas les en-têtes de `vercel.json` | `astro preview` ignore la configuration Vercel | Les constats « HSTS absent », « site en HTTP », « canonical vers un autre hôte » obtenus en local sont des artefacts du serveur de test. Les en-têtes réels ont été mesurés sur la production. |
| BR360 : 97 contrôles sur 125 en `NOT_TESTED` | Sortie de l'audit | Normal : seuls 15 contrôles ont un détecteur automatique. Les autres exigent des preuves manuelles ou de terrain. |
| Deux constats BR360 hors sujet pour un site statique | `BR360-DATA-001` (« surface de données persistantes » déduite des formulaires) et `BR360-RES-001` (« timeouts ») | Classés non pertinents dans le rapport d'audit, avec justification. |
| Aucun module SENTINEL ne mesure les Core Web Vitals de terrain sans clé | CrUX et PageSpeed exigent une clé et un appel à Google | Non testé. Mesures de laboratoire obtenues avec Lighthouse, hors SENTINEL. |

## Dépendances et environnement

- Python 3.14.6 dans `SENTINEL/.venv` (jsonschema, pytest, hypothesis, z3…) : présent et fonctionnel.
- Node 24.16.0, npm 11.13.0, Docker 29.8.0 : présents.
- Présents sur la machine : `trivy`, `syft`, `grype`, `gitleaks`. Absents : `semgrep`, `osv-scanner`, `lighthouse` (lancé ensuite par `npx`), `cosign`.
- Playwright et les navigateurs Chromium, Firefox et WebKit sont installés ; axe-core est fourni par `engines/audit/node_modules`.
- Aucune dépendance manquante n'a empêché un contrôle pertinent, hormis le bac à sable exigé par `security-full`.

## Erreurs rencontrées

Aucune erreur d'exécution. Trois commandes RECURSIVE sortent avec le code 2 (`stack`, `security-full`, `release-check`) : ce code signale un statut `BLOCKED`, pas un plantage.
