/**
 * Rubrique « Articles » : calendrier des 41 semaines, règles de publication,
 * dates, sources, relecture, outils de création et de publication.
 *
 * Les fiches de test sont écrites dans un dossier temporaire ; aucun test ne
 * modifie le contenu réel ni les registres du site.
 */
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, writeFileSync, copyFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import {
  CRENEAUX_RETROSPECTIFS,
  controlerArticle,
  controlerCollection,
  creneau,
  creneauDeDate,
  estDateIso,
  estRetrospectif,
  programmeRetrospectif,
  tempsDeLecture,
} from '../../src/data/articles.mjs';
import { estBrouillon, estPubliee, articlesInscrits } from '../../src/data/publication.mjs';
import { lastmodPour, publicationPour } from '../../src/data/dates.mjs';
import { relectures } from '../../src/data/relectures.mjs';
import { analyserFiche } from '../lib/articles-fichiers.mjs';
import { controlerRubrique, PLAN } from '../articles-check.mjs';
import { creer, etat } from '../articles-new.mjs';
import { publier } from '../articles-publier.mjs';

// ── Calendrier ────────────────────────────────────────────────────────────

test('le programme compte exactement 41 créneaux, du jeudi 1er janvier au jeudi 8 octobre 2026', () => {
  const p = programmeRetrospectif();
  assert.equal(p.length, 41);
  assert.equal(CRENEAUX_RETROSPECTIFS, 41);
  assert.deepEqual(p[0], { id: 'S01', numero: 1, debut: '2026-01-01', fin: '2026-01-07' });
  assert.equal(p[40].debut, '2026-10-08');
  assert.equal(p[40].fin, '2026-10-10', 'le dernier créneau est évalué au 10 octobre');
  assert.equal(new Set(p.map((c) => c.id)).size, 41);
  for (let i = 0; i < p.length; i++) {
    assert.equal(new Date(`${p[i].debut}T00:00:00Z`).getUTCDay(), 4, `${p[i].id} commence un jeudi`);
    if (i > 0) assert.equal(Date.parse(p[i].debut) - Date.parse(p[i - 1].debut), 7 * 86_400_000);
    if (i < 40) assert.equal(Date.parse(p[i + 1].debut) - Date.parse(p[i].fin), 86_400_000, 'aucun trou, aucun chevauchement');
  }
});

test('le calendrier continue après le programme : S42 commence le 15 octobre 2026', () => {
  assert.deepEqual(creneau(42), { id: 'S42', numero: 42, debut: '2026-10-15', fin: '2026-10-21' });
  assert.equal(creneauDeDate('2026-10-12').id, 'S41');
  assert.equal(creneauDeDate('2026-01-07').id, 'S01');
  assert.equal(creneauDeDate('2025-12-31'), null);
});

test('les dates calendaires impossibles sont refusées', () => {
  assert.equal(estDateIso('2026-02-28'), true);
  assert.equal(estDateIso('2026-02-30'), false);
  assert.equal(estDateIso('2026-13-01'), false);
  assert.equal(estDateIso('10/10/2026'), false);
});

test('le plan éditorial du dépôt contient les 41 créneaux, sans doublon de slug', () => {
  const plan = JSON.parse(readFileSync(PLAN, 'utf8'));
  assert.equal(plan.creneaux.length, 41);
  assert.deepEqual(plan.creneaux.map((c) => [c.semaine, c.debut, c.fin]), programmeRetrospectif().map((c) => [c.id, c.debut, c.fin]));
  const slugs = plan.creneaux.map((c) => c.slug).filter(Boolean);
  assert.equal(new Set(slugs).size, slugs.length);
  // Une semaine sans actualité vérifiable le dit, au lieu d'être remplie de force.
  for (const c of plan.creneaux.filter((x) => x.statut === 'SOURCES_INSUFFISANTES')) assert.equal(c.slug, null, c.semaine);
});

// ── Règles d'une fiche ────────────────────────────────────────────────────

const CORPS = `Introduction de l’actualité, datée.

## Ce qui a été annoncé

Texte. Voir le [guide de l’échéancier](/guides/echeancier-administratif-entreprise).

## Ce que cela change pour vous

${'Explication utile et concrète pour un dirigeant. '.repeat(60)}

## Checklist

1. Première action.
2. Seconde action.

## Exemple fictif : un cas

Cas inventé.
`;

function fiche(sur = {}) {
  return {
    title: 'Un titre d’article suffisamment long · BrittAssist',
    description: 'Une description d’article qui dépasse soixante-dix caractères et reste sous la limite haute, comme il se doit.',
    h1: 'Un titre visible pour l’article de test',
    summary: 'Un chapô qui présente l’actualité et son intérêt pour le dirigeant.',
    category: 'formalites',
    audience: ['TPE'],
    intention: 'intention de test unique',
    keywords: ['test'],
    semaineEditoriale: 'S02',
    periodeDebut: '2026-01-08',
    periodeFin: '2026-01-14',
    dateEvenement: '2026-01-14',
    natureEvenement: 'Communiqué',
    sources: [
      { titre: 'Source primaire de test', organisme: 'Insee', url: 'https://www.insee.fr/fr/information/test', type: 'primaire', datePublication: '2026-01-14', ouverte: true, consulteeLe: '2026-10-10', extrait: 'Ce que la source établit.' },
      { titre: 'Source officielle de test', organisme: 'Gouvernement', url: 'https://www.info.gouv.fr/test', type: 'officielle', datePublication: '2026-01-21', ouverte: true, consulteeLe: '2026-10-10', extrait: 'Relais de la source.' },
    ],
    createdAt: '2026-10-10',
    editorialStatus: 'PUBLIE',
    datePublished: '2026-10-10',
    author: 'BrittAssist',
    sensibilite: 'standard',
    relatedGuides: ['echeancier-administratif-entreprise'],
    relatedArticles: [],
    ...sur,
  };
}

function ctx(sur = {}) {
  return {
    aujourdhui: '2026-10-10',
    datePublication: (c) => (c === '/articles/test' ? '2026-10-10' : null),
    dateRelecture: () => null,
    validation: () => null,
    routeExiste: (c) => c.startsWith('/guides/') || c === '/articles',
    guidePublie: (s) => s === 'echeancier-administratif-entreprise',
    articleExiste: () => false,
    ...sur,
  };
}
const regles = (r) => r.blocages.map((b) => b.regle);

test('une fiche complète, sourcée et inscrite au registre passe tous les contrôles', () => {
  const r = controlerArticle({ slug: 'test', data: fiche(), corps: CORPS }, ctx());
  assert.deepEqual(r.blocages, []);
  assert.equal(r.inscrit, true);
  assert.equal(r.publiable, true);
});

test('la date de publication est celle du registre, jamais celle de l’actualité (pas d’antidatage)', () => {
  const antidatee = controlerArticle({ slug: 'test', data: fiche({ datePublished: '2026-01-14' }), corps: CORPS }, ctx());
  assert.ok(regles(antidatee).includes('date-publication-incoherente'));
  const registreAntidate = controlerArticle({ slug: 'test', data: fiche({ datePublished: '2026-01-14' }), corps: CORPS }, ctx({ datePublication: () => '2026-01-14' }));
  assert.ok(regles(registreAntidate).includes('publication-avant-redaction'), 'publié avant d’avoir été écrit');
});

test('aucune publication future, ni modification antérieure à la publication', () => {
  const future = controlerArticle({ slug: 'test', data: fiche({ datePublished: '2026-10-20' }), corps: CORPS }, ctx({ datePublication: () => '2026-10-20' }));
  assert.ok(regles(future).includes('publication-future'));
  const inversee = controlerArticle({ slug: 'test', data: fiche({ dateModified: '2026-10-09' }), corps: CORPS }, ctx());
  assert.ok(regles(inversee).includes('modification-avant-publication'));
});

test('statut et registre doivent dire la même chose', () => {
  const publieSansRegistre = controlerArticle({ slug: 'test', data: fiche(), corps: CORPS }, ctx({ datePublication: () => null }));
  assert.ok(regles(publieSansRegistre).includes('statut-incoherent'));
  assert.ok(regles(publieSansRegistre).includes('date-publication-sans-publication'));
  const brouillonInscrit = controlerArticle({ slug: 'test', data: fiche({ editorialStatus: 'BROUILLON' }), corps: CORPS }, ctx());
  assert.ok(regles(brouillonInscrit).includes('statut-incoherent'));
});

test('un brouillon non inscrit n’est pas bloqué par les conditions de mise en ligne, mais n’est pas publiable', () => {
  const r = controlerArticle({ slug: 'test', data: fiche({ editorialStatus: 'SOURCES_A_VERIFIER', datePublished: undefined, sources: fiche().sources.map((s) => ({ ...s, ouverte: false, consulteeLe: undefined })) }), corps: CORPS }, ctx({ datePublication: () => null }));
  assert.deepEqual(r.blocages, []);
  assert.equal(r.publiable, false);
  assert.ok(r.avertissements.some((a) => a.regle === 'preuve-absente'));
});

test('un article inscrit sans source primaire ouverte et datée de la semaine est refusé', () => {
  const nonOuverte = fiche({ sources: fiche().sources.map((s) => ({ ...s, ouverte: false, consulteeLe: undefined })) });
  assert.ok(regles(controlerArticle({ slug: 'test', data: nonOuverte, corps: CORPS }, ctx())).includes('preuve-absente'));
  // Une source publiée après la semaine ne prouve pas que l'actualité existait à l'époque.
  const posterieure = fiche({ sources: [{ ...fiche().sources[0], datePublication: '2026-02-01' }] });
  assert.ok(regles(controlerArticle({ slug: 'test', data: posterieure, corps: CORPS }, ctx())).includes('preuve-absente'));
  const presseSeule = fiche({ sources: [{ ...fiche().sources[0], type: 'presse' }] });
  assert.ok(regles(controlerArticle({ slug: 'test', data: presseSeule, corps: CORPS }, ctx())).includes('preuve-absente'));
});

test('une source se déclare ouverte avec sa date de consultation, jamais dans le futur', () => {
  const sansDate = fiche({ sources: [{ ...fiche().sources[0], consulteeLe: undefined }] });
  assert.ok(regles(controlerArticle({ slug: 'test', data: sansDate, corps: CORPS }, ctx())).includes('source-sans-date-de-consultation'));
  const future = fiche({ sources: [{ ...fiche().sources[0], consulteeLe: '2026-12-01' }] });
  assert.ok(regles(controlerArticle({ slug: 'test', data: future, corps: CORPS }, ctx())).includes('consultation-future'));
  const http = fiche({ sources: [{ ...fiche().sources[0], url: 'http://www.insee.fr/x' }] });
  assert.ok(regles(controlerArticle({ slug: 'test', data: http, corps: CORPS }, ctx())).includes('source-url-invalide'));
});

test('l’actualité est datée dans sa semaine, et la semaine correspond au calendrier', () => {
  assert.ok(regles(controlerArticle({ slug: 'test', data: fiche({ dateEvenement: '2026-01-20' }), corps: CORPS }, ctx())).includes('evenement-hors-semaine'));
  assert.ok(regles(controlerArticle({ slug: 'test', data: fiche({ periodeDebut: '2026-01-09' }), corps: CORPS }, ctx())).includes('semaine-incoherente'));
  assert.ok(regles(controlerArticle({ slug: 'test', data: fiche({ dateEvenement: '2026-02-30' }), corps: CORPS }, ctx())).includes('date-invalide'));
});

test('un sujet réglementaire n’est publié qu’avec une validation du propriétaire ou une relecture', () => {
  const sans = controlerArticle({ slug: 'test', data: fiche({ sensibilite: 'reglementaire' }), corps: CORPS }, ctx());
  assert.ok(regles(sans).includes('approbation-requise'));
  const avec = controlerArticle({ slug: 'test', data: fiche({ sensibilite: 'reglementaire', approvedBy: 'Brittany Dreano' }), corps: CORPS }, ctx({ validation: () => ({ par: 'Brittany Dreano', date: '2026-10-10' }) }));
  assert.deepEqual(avec.blocages, []);
});

test('aucune relecture ni approbation ne se déclare sans trace dans relectures.mjs', () => {
  assert.ok(regles(controlerArticle({ slug: 'test', data: fiche({ reviewedAt: '2026-10-10' }), corps: CORPS }, ctx())).includes('relecture-non-attestee'));
  assert.ok(regles(controlerArticle({ slug: 'test', data: fiche({ approvedBy: 'Brittany Dreano' }), corps: CORPS }, ctx())).includes('approbation-non-attestee'));
  // Le registre réel ne déclare aucun article relu.
  assert.deepEqual(Object.keys(relectures).filter((c) => c.startsWith('/articles/')), []);
});

test('le corps refuse le HTML, les liens javascript:, un second h1 et les rubriques manquantes', () => {
  assert.ok(regles(controlerArticle({ slug: 'test', data: fiche(), corps: CORPS + '\n<script>alert(1)</script>' }, ctx())).includes('html-dans-le-corps'));
  assert.ok(regles(controlerArticle({ slug: 'test', data: fiche(), corps: CORPS + '\n[piège](javascript:alert(1))' }, ctx())).includes('lien-dangereux'));
  assert.ok(regles(controlerArticle({ slug: 'test', data: fiche(), corps: '# Titre\n' + CORPS }, ctx())).includes('h1-dans-le-corps'));
  assert.ok(regles(controlerArticle({ slug: 'test', data: fiche(), corps: CORPS.replace('## Checklist', '## Actions') }, ctx())).includes('rubrique-manquante'));
  assert.ok(regles(controlerArticle({ slug: 'test', data: fiche(), corps: CORPS.replace('Exemple fictif', 'Exemple') }, ctx())).includes('exemple-non-signale'));
  assert.ok(regles(controlerArticle({ slug: 'test', data: fiche(), corps: CORPS + '\n[x](/guides/inconnu-du-site)' }, ctx({ routeExiste: () => false }))).includes('lien-vers-route-inconnue'));
});

test('formulations interdites, fiche inachevée et maillage sont contrôlés', () => {
  assert.ok(regles(controlerArticle({ slug: 'test', data: fiche(), corps: CORPS + '\nRésultats garantis.' }, ctx())).includes('formulation-interdite'));
  assert.ok(regles(controlerArticle({ slug: 'test', data: fiche({ h1: 'À COMPLÉTER' }), corps: CORPS }, ctx())).includes('fiche-inachevee'));
  assert.ok(regles(controlerArticle({ slug: 'test', data: fiche({ relatedGuides: [] }), corps: CORPS }, ctx())).includes('aucun-guide-lie'));
  assert.ok(regles(controlerArticle({ slug: 'test', data: fiche({ relatedGuides: ['guide-en-brouillon'] }), corps: CORPS }, ctx())).includes('guide-lie-non-publie'));
  assert.ok(regles(controlerArticle({ slug: 'test', data: fiche({ relatedArticles: ['test'] }), corps: CORPS }, ctx())).includes('lien-vers-soi-meme'));
});

test('titre, H1, description, intention et semaine sont uniques, guides compris', () => {
  const a = { slug: 'a', data: fiche() };
  const b = { slug: 'b', data: fiche({ title: 'Autre titre d’article assez long · BrittAssist', h1: 'Autre h1', description: 'x'.repeat(80), intention: 'autre' }) };
  assert.ok(controlerCollection([a, b]).some((x) => x.regle === 'semaine-en-double'));
  const guide = { slug: 'g', title: fiche().title, h1: 'h', description: 'd', intention: 'i' };
  assert.ok(controlerCollection([a], [guide]).some((x) => x.regle === 'title-duplique'));
});

test('rétrospective et temps de lecture sont calculés, pas déclarés', () => {
  assert.equal(estRetrospectif(fiche(), '2026-10-10'), true);
  assert.equal(estRetrospectif(fiche({ periodeFin: '2026-10-14', datePublished: '2026-10-10' }), '2026-10-10'), false);
  assert.equal(tempsDeLecture('mot '.repeat(400)), 2);
});

// ── Registres et dates du site ────────────────────────────────────────────

test('un article non inscrit est un brouillon, sans date de publication', () => {
  assert.equal(estPubliee('/articles/un-article-inconnu'), false);
  assert.equal(estBrouillon('/articles/un-article-inconnu'), true);
  assert.equal(publicationPour('/articles/un-article-inconnu'), null);
  // La liste reste une page du site, publiée.
  assert.equal(estPubliee('/articles'), true);
  assert.match(lastmodPour('/articles'), /^\d{4}-\d{2}-\d{2}$/);
});

test('les routes historiques ne changent pas de statut avec la rubrique', () => {
  for (const c of ['/', '/guides', '/guides/comment-deleguer', '/assistante/artisans-btp', '/contact', '/tarifs']) assert.equal(estPubliee(c), true, c);
  // Le maillage de cette page a été complété lors de l'intégration des articles.
  assert.equal(lastmodPour('/guides/secretariat-externalise'), '2026-10-10');
  assert.equal(publicationPour('/'), '2026-08-20');
});

test('le contenu réel du dépôt passe le contrôle de la rubrique', () => {
  const r = controlerRubrique();
  assert.deepEqual(r.blocages, []);
  assert.equal(r.creneaux, 41);
  // Tout article inscrit au registre est réellement publiable ; aucun n'est publié sans preuve.
  for (const f of r.fiches.filter((x) => x.inscrit)) assert.equal(f.publiable, true, f.slug);
  assert.equal(articlesInscrits().length, r.fiches.filter((x) => x.inscrit).length);
});

test('le menu principal mène à /articles, juste après les guides', () => {
  const header = readFileSync('src/components/Header.astro', 'utf8');
  const guides = header.indexOf("{ href: '/guides', label: 'Guides' }");
  const articles = header.indexOf("{ href: '/articles', label: 'Articles' }");
  assert.ok(guides > 0 && articles > guides);
  for (const lien of ['/private-office', '/services', '/tarifs', '/a-propos', '/contact']) assert.ok(header.includes(`'${lien}'`) || header.includes(`"${lien}"`), lien);
});

// ── Résilience et outils ──────────────────────────────────────────────────

function bacASable() {
  const dir = mkdtempSync(join(tmpdir(), 'articles-'));
  const dossier = join(dir, 'articles');
  const plan = join(dir, 'plan.json');
  const registre = join(dir, 'publications.mjs');
  // mkdir via écriture d'un fichier factice
  writeFileSync(registre, "export const publications = {\n  '/guides/x': '2026-10-03',\n};\n");
  copyFileSync(PLAN, plan);
  return { dir, dossier, plan, registre };
}

test('une fiche illisible ou un registre orphelin sont signalés sans interrompre le contrôle', async () => {
  const { dossier, plan } = bacASable();
  const { mkdirSync } = await import('node:fs');
  mkdirSync(dossier);
  writeFileSync(join(dossier, 'cassee.md'), 'pas de frontmatter');
  const r = controlerRubrique({ dossier, plan, registre: { datePublication: () => null, dateRelecture: () => null, validation: () => null, inscrits: ['/articles/fantome'] } });
  assert.ok(r.blocages.some((b) => b.regle === 'fiche-illisible'));
  assert.ok(r.blocages.some((b) => b.regle === 'registre-sans-fiche'));
});

test('article:nouveau crée une fiche une seule fois, et refuse une seconde fiche pour la même semaine', async () => {
  const { dossier, plan } = bacASable();
  const { mkdirSync } = await import('node:fs');
  mkdirSync(dossier);
  const premier = creer({ slug: 'essai-numero-un', semaine: 'S07', aujourdhui: '2026-10-10', dossier, plan });
  assert.equal(premier.cree, true);
  const contenu = readFileSync(premier.fichier, 'utf8');
  const { data } = analyserFiche(contenu);
  assert.equal(data.editorialStatus, 'SOURCES_A_VERIFIER');
  assert.equal(data.periodeDebut, '2026-02-12');
  assert.equal(data.datePublished, undefined, 'une fiche créée n’a pas de date de publication');
  // Idempotence : relancer ne réécrit rien.
  const second = creer({ slug: 'essai-numero-un', semaine: 'S07', aujourdhui: '2026-10-10', dossier, plan });
  assert.equal(second.cree, false);
  assert.equal(readFileSync(premier.fichier, 'utf8'), contenu);
  assert.throws(() => creer({ slug: 'essai-numero-deux', semaine: 'S07', aujourdhui: '2026-10-10', dossier, plan }), /déjà traitée/);
  assert.throws(() => creer({ slug: 'essai-futur', semaine: 'S45', aujourdhui: '2026-10-10', dossier, plan }), /semaine future/);
  assert.throws(() => creer({ slug: 'facturation-electronique-tpe', semaine: 'S08', aujourdhui: '2026-10-10', dossier, plan }), /guide/);
  // Le squelette reste un brouillon bloqué tant qu'il n'est pas rédigé.
  const r = controlerRubrique({ dossier, plan, registre: { datePublication: () => null, dateRelecture: () => null, validation: () => null, inscrits: [] } });
  assert.ok(r.blocages.some((b) => b.regle === 'fiche-inachevee'));
  // Après le 10 octobre, un créneau suivant s'ajoute à la suite du plan.
  const suivant = creer({ slug: 'essai-octobre', aujourdhui: '2026-10-16', dossier, plan });
  assert.equal(suivant.cree, true);
  const p = JSON.parse(readFileSync(plan, 'utf8'));
  assert.equal(p.creneaux.length, 41);
  assert.equal(p.suite.at(-1).semaine, 'S42');
  assert.equal(etat({ aujourdhui: '2026-10-16', dossier, plan }).creneauDuJourDejaTraite, 'essai-octobre');
});

test('article:publier refuse un brouillon et ne modifie alors aucun fichier', async () => {
  const { dossier, plan, registre } = bacASable();
  const { mkdirSync } = await import('node:fs');
  mkdirSync(dossier);
  // Le test reste indépendant de l'état éditorial des vrais articles du site.
  const d = fiche({ editorialStatus: 'BROUILLON', datePublished: undefined });
  d.sources = d.sources.map((s) => ({ ...s, ouverte: false, consulteeLe: undefined }));
  const yaml = (await import('js-yaml')).default;
  const fichier = join(dossier, 'brouillon-sans-source.md');
  writeFileSync(fichier, `---\n${yaml.dump(d)}---\n${CORPS}`);
  const avant = [readFileSync(fichier, 'utf8'), readFileSync(registre, 'utf8'), readFileSync(plan, 'utf8')];
  const r = publier({ slug: 'brouillon-sans-source', confirmer: true, aujourdhui: '2026-10-10', dossier, plan, registre });
  assert.equal(r.publie, false);
  assert.ok(r.blocages.some((b) => b.regle === 'preuve-absente'));
  assert.ok(r.blocages.some((b) => b.regle === 'statut-non-pret'));
  assert.deepEqual([readFileSync(fichier, 'utf8'), readFileSync(registre, 'utf8'), readFileSync(plan, 'utf8')], avant);
});

test('article:publier inscrit un article prêt une fois, à la date du jour, puis ne fait plus rien', async () => {
  const { dossier, plan, registre } = bacASable();
  const { mkdirSync } = await import('node:fs');
  mkdirSync(dossier);
  const d = fiche({ editorialStatus: 'QA_PASS', datePublished: undefined, intention: 'intention fictive de test' });
  const yaml = (await import('js-yaml')).default;
  writeFileSync(join(dossier, 'test-pret.md'), `---\n${yaml.dump(d)}---\n${CORPS}`);
  const simulation = publier({ slug: 'test-pret', aujourdhui: '2026-10-10', dossier, plan, registre });
  assert.equal(simulation.publie, false);
  assert.equal(simulation.simulation, true);
  assert.deepEqual(simulation.blocages, []);
  const r = publier({ slug: 'test-pret', confirmer: true, aujourdhui: '2026-10-10', dossier, plan, registre });
  assert.equal(r.publie, true);
  assert.match(readFileSync(registre, 'utf8'), /'\/articles\/test-pret': '2026-10-10',\n\};\n$/);
  const { data } = analyserFiche(readFileSync(join(dossier, 'test-pret.md'), 'utf8'));
  assert.equal(data.editorialStatus, 'PUBLIE');
  assert.equal(data.datePublished, '2026-10-10');
  const encore = publier({ slug: 'test-pret', confirmer: true, aujourdhui: '2026-10-11', dossier, plan, registre });
  assert.equal(encore.deja, '2026-10-10');
  assert.equal((readFileSync(registre, 'utf8').match(/test-pret/g) ?? []).length, 1);
});
