#!/usr/bin/env node
/**
 * Vérifie que les liens externes du site répondent.
 *
 * Les adresses sont relevées dans le build (dist/), donc telles que le lecteur
 * les recevra. Un code 403, 429, 500 ou 999 renvoyé à un script ne prouve pas
 * que le lien est mort : beaucoup de sites publics bloquent les robots. Ces cas
 * sont classés « non concluant » et doivent être ouverts à la main.
 *
 * Usage : node scripts/check-sources.mjs [--json rapport.json]
 */
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { auditer } from './seo-audit.mjs';

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';
const pages = auditer('dist').pages;
const liens = new Map();
for (const p of pages) for (const l of p.liensExternes) liens.set(l, [...(liens.get(l) ?? []), p.chemin]);

/** curl suit les redirections et négocie TLS comme un navigateur : moins de faux échecs qu'une requête HEAD. */
function tester(url) {
  try {
    const sortie = execFileSync('curl', ['-s', '-o', '/dev/null', '-L', '-m', '30', '-A', UA, '-H', 'Accept-Language: fr-FR,fr', '-w', '%{http_code} %{url_effective}', url], { encoding: 'utf8' });
    const [statut, final] = sortie.trim().split(' ');
    return { statut: Number(statut), final };
  } catch (e) {
    return { statut: 0, final: String(e.message).split('\n')[0] };
  }
}

const resultats = [];
for (const [url, depuis] of liens) {
  const r = tester(url);
  const verdict = r.statut >= 200 && r.statut < 300 ? 'OK' : [401, 403, 429, 500, 503, 999].includes(r.statut) ? 'NON CONCLUANT' : 'À VÉRIFIER';
  resultats.push({ url, ...r, verdict, redirige: r.final && r.final !== url && !String(r.final).startsWith(url) ? r.final : null, pages: depuis.length, exemple: depuis[0] });
}
resultats.sort((a, b) => a.verdict.localeCompare(b.verdict));
const compte = {};
for (const r of resultats) compte[r.verdict] = (compte[r.verdict] ?? 0) + 1;
console.log(`${resultats.length} liens externes distincts — ${Object.entries(compte).map(([k, v]) => `${k} : ${v}`).join(' · ')}`);
for (const r of resultats.filter((x) => x.verdict !== 'OK' || x.redirige)) console.log(`  ${r.verdict.padEnd(14)} ${r.statut}  ${r.url}${r.redirige ? `\n${' '.repeat(22)}→ ${r.redirige}` : ''}   (${r.pages} page(s), ex. ${r.exemple})`);
if (process.argv.includes('--json')) writeFileSync(process.argv[process.argv.indexOf('--json') + 1], JSON.stringify(resultats, null, 2));
process.exit(resultats.some((r) => r.verdict === 'À VÉRIFIER') ? 1 : 0);
