#!/usr/bin/env node
/**
 * Mise en ligne d'un article — après contrôle, jamais avant.
 *
 *   npm run article:publier -- --slug <slug>              simulation : dit si l'article peut être publié aujourd'hui
 *   npm run article:publier -- --slug <slug> --confirmer  publie : registre, fiche et plan, en une fois
 *
 * Publier, c'est inscrire la page dans src/data/publications.mjs (publication
 * sans relecture) à la date du jour, passer la fiche au statut PUBLIE avec cette
 * date, et reporter l'état dans le plan. Rien d'autre : aucune relecture n'est
 * déclarée (c'est le rôle de relectures.mjs, réservé à une relecture réelle), et
 * rien n'est poussé ni déployé.
 *
 * Refusé si la fiche n'est pas au statut QA_PASS (sujet standard) ou APPROUVE
 * (sujet réglementaire, ou tout sujet validé), ou si elle ne passe pas les règles
 * de src/data/articles.mjs en se supposant publiée aujourd'hui : source primaire non ouverte, sujet réglementaire
 * sans validation du propriétaire, fiche inachevée, dates incohérentes…
 * Idempotent : un article déjà inscrit n'est pas modifié.
 *
 * Options de test : --date AAAA-MM-JJ, --dossier <dir>, --plan <fichier>, --registre <fichier>.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { bibliotheque } from '../src/data/bibliotheque.ts';
import { aujourdhuiParis, cheminArticle, controlerArticle } from '../src/data/articles.mjs';
import { dateDeRelecture, datePublicationSansRelecture, estPubliee, validationDuProprietaire } from '../src/data/publication.mjs';
import { DOSSIER_ARTICLES, analyserFiche, lireArticles } from './lib/articles-fichiers.mjs';
import { PLAN } from './articles-check.mjs';

export const REGISTRE = 'src/data/publications.mjs';

/** Date d'inscription d'un chemin dans le texte d'un registre, ou null. */
function dateDansRegistre(texte, chemin) {
  const m = texte.match(new RegExp(`'${chemin.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')}':\\s*'(\\d{4}-\\d{2}-\\d{2})'`));
  return m ? m[1] : null;
}

/**
 * @returns {{ publie: boolean, simulation?: boolean, deja?: string, blocages: {regle: string, detail: string}[] }}
 */
export function publier({ slug, confirmer = false, aujourdhui = aujourdhuiParis(), dossier = DOSSIER_ARTICLES, plan = PLAN, registre = REGISTRE }) {
  const chemin = cheminArticle(slug ?? '');
  const fichier = join(dossier, `${slug}.md`);
  if (!slug || !existsSync(fichier)) throw new Error(`fiche introuvable : ${fichier}`);
  const texteRegistre = readFileSync(registre, 'utf8');
  const deja = dateDansRegistre(texteRegistre, chemin) ?? dateDeRelecture(chemin);
  if (deja) return { publie: false, deja, blocages: [] };

  const texteFiche = readFileSync(fichier, 'utf8');
  const { data, corps } = analyserFiche(texteFiche);
  const slugs = new Set(lireArticles(dossier).map((f) => f.slug));
  const supposee = { ...data, editorialStatus: 'PUBLIE', datePublished: aujourdhui };
  const { blocages } = controlerArticle({ slug, data: supposee, corps }, {
    aujourdhui,
    datePublication: (c) => (c === chemin ? aujourdhui : datePublicationSansRelecture(c)),
    dateRelecture: dateDeRelecture,
    validation: validationDuProprietaire,
    guidePublie: (s) => bibliotheque.some((g) => g.slug === s) && estPubliee(`/guides/${s}`),
    articleExiste: (s) => slugs.has(s),
  });
  // Le circuit éditorial est passé : contrôles réussis (QA_PASS), et approbation humaine pour un sujet réglementaire (APPROUVE).
  const prets = data.sensibilite === 'reglementaire' ? ['APPROUVE'] : ['QA_PASS', 'APPROUVE'];
  if (!prets.includes(data.editorialStatus)) blocages.push({ regle: 'statut-non-pret', detail: `statut ${data.editorialStatus}, attendu ${prets.join(' ou ')}` });
  if (blocages.length || !confirmer) return { publie: false, simulation: !confirmer, blocages };

  // Écritures : la fiche, le registre, le plan. En cas d'échec, tout est remis en l'état.
  const avant = new Map([[fichier, texteFiche], [registre, texteRegistre]]);
  if (plan && existsSync(plan)) avant.set(plan, readFileSync(plan, 'utf8'));
  try {
    const fiche = texteFiche
      .replace(/^editorialStatus: .*$/m, 'editorialStatus: "PUBLIE"')
      .replace(/^(createdAt: .*)$/m, `$1\ndatePublished: "${aujourdhui}"`);
    writeFileSync(fichier, fiche);
    const fin = texteRegistre.trimEnd().lastIndexOf('};');
    writeFileSync(registre, `${texteRegistre.slice(0, fin)}  '${chemin}': '${aujourdhui}',\n};\n`);
    if (avant.has(plan)) {
      const contenu = JSON.parse(avant.get(plan));
      const ligne = [...contenu.creneaux, ...(contenu.suite ?? [])].find((p) => p.slug === slug);
      if (ligne) Object.assign(ligne, { statut: 'PUBLIE', datePublication: aujourdhui, indexable: true, deploiement: 'DEPLOIEMENT_NON_CONFIRME' });
      writeFileSync(plan, JSON.stringify(contenu, null, 2) + '\n');
    }
  } catch (e) {
    for (const [f, t] of avant) writeFileSync(f, t);
    throw e;
  }
  return { publie: true, blocages: [] };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const option = (nom) => (args.includes(nom) ? args[args.indexOf(nom) + 1] : undefined);
  try {
    const r = publier({
      slug: option('--slug'),
      confirmer: args.includes('--confirmer'),
      aujourdhui: option('--date') ?? aujourdhuiParis(),
      dossier: option('--dossier') ?? DOSSIER_ARTICLES,
      plan: option('--plan') ?? PLAN,
      registre: option('--registre') ?? REGISTRE,
    });
    if (r.deja) console.log(`Déjà publié le ${r.deja} : rien n’est modifié.`);
    else if (r.blocages.length) {
      console.log(`Publication refusée : ${r.blocages.length} blocage(s).`);
      for (const b of r.blocages) console.log(`  ${b.regle.padEnd(32)} ${b.detail}`);
      process.exit(1);
    } else if (r.simulation) console.log('Simulation : l’article peut être publié aujourd’hui. Relancer avec --confirmer pour l’inscrire au registre.');
    else console.log('Inscrit au registre, fiche et plan mis à jour. Étapes suivantes : npm run qa, puis commit et push (voir AGENTS.md).');
  } catch (e) {
    console.error(`Erreur : ${e.message}`);
    process.exit(1);
  }
}
