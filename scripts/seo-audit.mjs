#!/usr/bin/env node
/**
 * Audit SEO / qualité du build statique — zéro dépendance.
 *
 * Il lit le dossier `dist/` tel qu'il sera servi, jamais les sources : ce qui
 * est contrôlé est ce que Google et les lecteurs reçoivent réellement.
 *
 * Usages :
 *   node scripts/seo-audit.mjs                     résumé console
 *   node scripts/seo-audit.mjs --strict            code de sortie 1 si une règle bloquante échoue
 *   node scripts/seo-audit.mjs --json rapport.json rapport complet, page par page
 *   node scripts/seo-audit.mjs --md rapport.md     tableau Markdown par URL
 *
 * Le même module est appelé par le quality gate branché sur le build
 * (scripts/quality-gate.mjs), pour qu'une page défaillante ne parte pas en ligne.
 *
 * Limite assumée : l'extraction se fait par expressions régulières sur un HTML
 * que nous générons nous-mêmes. Ce n'est pas un parseur HTML généraliste.
 */
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://www.brittassist.fr';

/** Seuils. Ils sont calibrés sur le site, pas repris d'une grille générique. */
export const SEUILS = {
  titleMax: 70,
  titleMin: 20,
  descriptionMax: 165,
  descriptionMin: 70,
  /** En dessous, la page est signalée comme mince (avertissement, pas blocage). */
  motsMin: 300,
  /** Similarité de Jaccard sur des 5-grammes du contenu principal. */
  similariteAvertissement: 0.3,
  similariteBlocage: 0.5,
  /** Une page indexable doit être atteinte en trois clics au plus depuis l'accueil. */
  profondeurMax: 3,
};

const ANCRES_GENERIQUES = new Set([
  'cliquez ici', 'ici', 'en savoir plus', 'lire la suite', 'voir plus', 'plus', 'lien', 'cette page',
]);

// ── Outils ────────────────────────────────────────────────────────────────

function lister(dossier) {
  const fichiers = [];
  for (const nom of readdirSync(dossier)) {
    const chemin = join(dossier, nom);
    if (statSync(chemin).isDirectory()) fichiers.push(...lister(chemin));
    else fichiers.push(chemin);
  }
  return fichiers;
}

const ENTITES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', rsquo: '’', laquo: '«', raquo: '»', hellip: '…', mdash: '—', ndash: '–', middot: '·', bull: '•', eacute: 'é', egrave: 'è', agrave: 'à', ccedil: 'ç' };
function decoder(texte) {
  return texte
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&([a-z]+);/gi, (m, n) => ENTITES[n.toLowerCase()] ?? m);
}

function texteBrut(html) {
  return decoder(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<!--[\s\S]*?-->/g, ' ')
      .replace(/<[^>]+>/g, ' '),
  )
    .replace(/\s+/g, ' ')
    .trim();
}

function attribut(balise, nom) {
  const m = balise.match(new RegExp(`\\s${nom}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  return m ? decoder(m[2] ?? m[3] ?? m[4] ?? '') : null;
}

function meta(html, cle, valeur) {
  const re = new RegExp(`<meta\\b[^>]*\\b${cle}\\s*=\\s*["']${valeur}["'][^>]*>`, 'i');
  const balise = html.match(re)?.[0];
  return balise ? attribut(balise, 'content') : null;
}

function normaliser(texte) {
  return texte
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function grammes(texte, n = 5) {
  const mots = normaliser(texte).split(' ').filter(Boolean);
  const ensemble = new Set();
  for (let i = 0; i + n <= mots.length; i++) ensemble.add(mots.slice(i, i + n).join(' '));
  return ensemble;
}

function jaccard(a, b) {
  if (a.size === 0 || b.size === 0) return 0;
  const [petit, grand] = a.size < b.size ? [a, b] : [b, a];
  let commun = 0;
  for (const g of petit) if (grand.has(g)) commun++;
  return commun / (a.size + b.size - commun);
}

/** `/guides/x.html` → `/guides/x` ; `/index.html` → `/`. */
function cheminDepuisFichier(dist, fichier) {
  const rel = '/' + relative(dist, fichier).split(sep).join('/');
  if (rel === '/index.html') return '/';
  return rel.replace(/\/index\.html$/, '').replace(/\.html$/, '');
}

/** Ramène un href interne à un chemin comparable, ou null s'il est externe. */
function cheminInterne(href, pageCourante) {
  if (!href || /^(mailto:|tel:|javascript:|data:)/i.test(href)) return null;
  let url;
  try {
    url = new URL(href, SITE + pageCourante);
  } catch {
    return null;
  }
  if (url.origin !== SITE) return null;
  const chemin = url.pathname.replace(/\.html$/, '').replace(/(.)\/$/, '$1');
  return { chemin, ancre: url.hash ? decodeURIComponent(url.hash.slice(1)) : null };
}

// ── Analyse d'une page ────────────────────────────────────────────────────

function analyserPage(dist, fichier) {
  const html = readFileSync(fichier, 'utf8');
  if (!/<html\b/i.test(html)) return null; // fichier de vérification, pas une page

  const chemin = cheminDepuisFichier(dist, fichier);
  const tete = html.match(/<head\b[\s\S]*?<\/head>/i)?.[0] ?? '';
  const principal = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] ?? '';

  const titre = decoder(tete.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? '');
  const description = meta(tete, 'name', 'description') ?? '';
  const robots = meta(tete, 'name', 'robots') ?? '';
  const canonical = attribut(tete.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i)?.[0] ?? '', 'href');
  const langue = attribut(html.match(/<html\b[^>]*>/i)?.[0] ?? '', 'lang');

  const titres = [...html.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => ({
    niveau: Number(m[1]),
    texte: texteBrut(m[2]),
  }));
  const h1 = titres.filter((t) => t.niveau === 1).map((t) => t.texte);

  // Sauts de niveau : un h3 qui suit directement un h1, par exemple.
  const sautsDeNiveau = [];
  for (let i = 1; i < titres.length; i++) {
    if (titres[i].niveau - titres[i - 1].niveau > 1) {
      sautsDeNiveau.push(`h${titres[i - 1].niveau} → h${titres[i].niveau} (« ${titres[i].texte.slice(0, 50)} »)`);
    }
  }

  // Données structurées.
  const jsonLd = [];
  const erreursJsonLd = [];
  for (const m of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      jsonLd.push(JSON.parse(m[1]));
    } catch (e) {
      erreursJsonLd.push(String(e.message).slice(0, 120));
    }
  }
  const noeuds = jsonLd.flatMap((bloc) => bloc['@graph'] ?? [bloc]);
  const types = [...new Set(noeuds.flatMap((n) => [].concat(n['@type'] ?? [])))];

  // Liens.
  const liens = [];
  for (const m of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const href = attribut(m[0].slice(0, m[0].indexOf('>') + 1), 'href');
    if (href === null) continue;
    const debut = m.index;
    const dansPrincipal = principal ? html.indexOf(principal) <= debut && debut < html.indexOf(principal) + principal.length : false;
    const balise = m[0].slice(0, m[0].indexOf('>') + 1);
    liens.push({
      href,
      texte: texteBrut(m[2]) || attribut(balise, 'aria-label') || '',
      dansPrincipal,
      cible: attribut(balise, 'target'),
      rel: attribut(balise, 'rel') ?? '',
    });
  }

  // Images.
  const images = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => ({
    src: attribut(m[0], 'src'),
    alt: attribut(m[0], 'alt'),
    largeur: attribut(m[0], 'width'),
    hauteur: attribut(m[0], 'height'),
    chargement: attribut(m[0], 'loading'),
  }));

  const variantes = [...html.matchAll(/\ssrcset\s*=\s*"([^"]+)"/gi)].flatMap((m) => m[1].split(',').map((v) => v.trim().split(/\s+/)[0]));

  // CSP : chaque script et chaque style inline doit avoir son empreinte dans la politique.
  const csp = attribut(tete.match(/<meta\b[^>]*http-equiv=["']content-security-policy["'][^>]*>/i)?.[0] ?? '', 'content') ?? '';
  const empreintesManquantes = [];
  if (csp) {
    const verifier = (motif, etiquette) => {
      for (const m of html.matchAll(motif)) {
        if (/\bsrc\s*=/.test(m[1]) || /application\/ld\+json/i.test(m[1])) continue;
        const empreinte = `sha256-${createHash('sha256').update(m[2], 'utf8').digest('base64')}`;
        if (!csp.includes(empreinte)) empreintesManquantes.push(`${etiquette} ${empreinte.slice(0, 22)}…`);
      }
    };
    verifier(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi, 'script');
    verifier(/<style\b([^>]*)>([\s\S]*?)<\/style>/gi, 'style');
  }

  const identifiants = new Set([...html.matchAll(/\sid\s*=\s*["']([^"']+)["']/gi)].map((m) => m[1]));
  const texte = texteBrut(principal);

  return {
    chemin,
    fichier: relative(dist, fichier),
    octets: Buffer.byteLength(html),
    langue,
    titre,
    description,
    robots,
    indexable: !/noindex/i.test(robots),
    // Page en attente de relecture, générée en aperçu : non indexable aujourd'hui,
    // mais contrôlée comme si elle l'était — c'est son état de publication qu'on valide.
    brouillon: meta(tete, 'name', 'statut-editorial') === 'brouillon',
    canonical,
    h1,
    titres,
    sautsDeNiveau,
    og: {
      title: meta(tete, 'property', 'og:title'),
      description: meta(tete, 'property', 'og:description'),
      url: meta(tete, 'property', 'og:url'),
      image: meta(tete, 'property', 'og:image'),
      type: meta(tete, 'property', 'og:type'),
    },
    twitterCard: meta(tete, 'name', 'twitter:card'),
    jsonLd: { blocs: jsonLd.length, erreurs: erreursJsonLd, types, noeuds },
    liens,
    images,
    variantes,
    stylesInline: (html.match(/<[a-z][^>]*\sstyle\s*=\s*["']/gi) ?? []).length,
    csp: { presente: Boolean(csp), empreintesManquantes },
    identifiants,
    texte,
    mots: texte ? texte.split(/\s+/).length : 0,
  };
}

// ── Audit du site ─────────────────────────────────────────────────────────

/**
 * @param {string} dist dossier du build
 * @returns rapport complet : pages, problèmes classés par gravité, similarités
 */
export function auditer(dist) {
  const fichiers = lister(dist);
  const pages = fichiers
    .filter((f) => f.endsWith('.html'))
    .map((f) => analyserPage(dist, f))
    .filter(Boolean);
  const parChemin = new Map(pages.map((p) => [p.chemin, p]));
  const statiques = new Set(fichiers.map((f) => '/' + relative(dist, f).split(sep).join('/')));

  const blocages = [];
  const avertissements = [];
  const bloquer = (regle, chemin, detail) => blocages.push({ regle, chemin, detail });
  const avertir = (regle, chemin, detail) => avertissements.push({ regle, chemin, detail });

  // Redirections déclarées côté hébergeur.
  let redirections = [];
  const vercel = join(dist, '..', 'vercel.json');
  if (existsSync(vercel)) redirections = JSON.parse(readFileSync(vercel, 'utf8')).redirects ?? [];
  const sourcesRedirigees = new Map(redirections.map((r) => [r.source, r.destination]));

  // 1. Contrôles page par page.
  for (const p of pages) {
    if (p.langue !== 'fr') bloquer('lang', p.chemin, `lang="${p.langue}"`);
    if (!p.titre) bloquer('title-absent', p.chemin, '');
    if (p.h1.length !== 1) bloquer('h1-unique', p.chemin, `${p.h1.length} h1`);
    if (p.jsonLd.erreurs.length) bloquer('json-ld-invalide', p.chemin, p.jsonLd.erreurs.join(' | '));
    if (p.stylesInline) bloquer('style-inline', p.chemin, `${p.stylesInline} attribut(s) style="" (interdits par la CSP)`);
    if (!p.csp.presente) bloquer('csp-absente', p.chemin, '');
    if (p.csp.empreintesManquantes.length) bloquer('csp-empreinte', p.chemin, p.csp.empreintesManquantes.join(', '));

    if (!p.canonical) bloquer('canonical-absent', p.chemin, '');
    else {
      const attendu = SITE + (p.chemin === '/' ? '/' : p.chemin);
      // Une page non indexable peut désigner une autre URL ; une page indexable se désigne elle-même.
      if ((p.indexable || p.brouillon) && p.canonical !== attendu) bloquer('canonical-incoherent', p.chemin, `${p.canonical} ≠ ${attendu}`);
      if (!/^https:\/\//.test(p.canonical)) bloquer('canonical-relatif', p.chemin, p.canonical);
    }

    if (!p.indexable && !p.brouillon) continue; // le reste ne concerne que les pages destinées à l'indexation

    if (!p.description) bloquer('description-absente', p.chemin, '');
    if (p.titre.length > SEUILS.titleMax) avertir('title-long', p.chemin, `${p.titre.length} caractères`);
    if (p.titre && p.titre.length < SEUILS.titleMin) avertir('title-court', p.chemin, `${p.titre.length} caractères`);
    if (p.description.length > SEUILS.descriptionMax) avertir('description-longue', p.chemin, `${p.description.length} caractères`);
    if (p.description && p.description.length < SEUILS.descriptionMin) avertir('description-courte', p.chemin, `${p.description.length} caractères`);
    if (p.sautsDeNiveau.length) avertir('hierarchie-titres', p.chemin, p.sautsDeNiveau.join(' ; '));
    if (p.mots < SEUILS.motsMin) avertir('contenu-mince', p.chemin, `${p.mots} mots`);
    for (const cle of ['title', 'description', 'url', 'image', 'type']) {
      if (!p.og[cle]) bloquer('open-graph', p.chemin, `og:${cle} absent`);
    }
    if (p.og.url && p.canonical && p.og.url !== p.canonical) bloquer('og-url', p.chemin, `${p.og.url} ≠ canonical`);
    if (!p.twitterCard) avertir('twitter-card', p.chemin, 'absente');

    for (const img of p.images) {
      if (img.alt === null) bloquer('image-alt', p.chemin, img.src);
      if (!img.largeur || !img.hauteur) avertir('image-dimensions', p.chemin, img.src);
      if (img.src?.startsWith('/') && !statiques.has(img.src)) bloquer('image-introuvable', p.chemin, img.src);
    }
    // Variantes déclarées dans un srcset : chacune doit exister, sinon le navigateur n'affiche rien.
    for (const variante of p.variantes) {
      if (variante.startsWith('/') && !statiques.has(variante)) bloquer('image-introuvable', p.chemin, variante);
    }

    // Les données structurées doivent décrire la page, pas une page voisine.
    for (const n of p.jsonLd.noeuds) {
      const type = [].concat(n['@type'] ?? []);
      if (type.includes('BreadcrumbList')) {
        for (const item of n.itemListElement ?? []) {
          const cible = cheminInterne(item.item, p.chemin);
          if (!cible) continue;
          if (!parChemin.has(cible.chemin)) bloquer('fil-ariane-cible', p.chemin, `${item.item} n'existe pas`);
          else if (cible.ancre) avertir('fil-ariane-ancre', p.chemin, `${item.item} désigne une ancre, pas une page`);
        }
      }
      if (type.includes('Article')) {
        for (const champ of ['headline', 'datePublished', 'dateModified', 'author']) {
          if (!n[champ]) bloquer('article-incomplet', p.chemin, `${champ} absent`);
        }
        if (n.headline && p.h1[0] && n.headline !== p.h1[0]) avertir('article-headline', p.chemin, 'headline ≠ h1');
      }
      if (type.includes('FAQPage')) {
        const visible = normaliser(p.texte);
        for (const q of n.mainEntity ?? []) {
          if (!visible.includes(normaliser(q.name ?? ''))) bloquer('faq-invisible', p.chemin, `question absente du contenu visible : ${String(q.name).slice(0, 60)}`);
        }
      }
    }
  }

  // 2. Liens internes : cibles, ancres, redirections, ancres génériques.
  const entrants = new Map(pages.map((p) => [p.chemin, { total: new Set(), contextuels: new Set() }]));
  for (const p of pages) {
    for (const l of p.liens) {
      const cible = cheminInterne(l.href, p.chemin);
      if (!cible) continue;
      const page = parChemin.get(cible.chemin);
      if (!page) {
        if (statiques.has(cible.chemin)) continue; // fichier servi tel quel (image, llms.txt…)
        if (sourcesRedirigees.has(cible.chemin)) avertir('lien-vers-redirection', p.chemin, `${l.href} → ${sourcesRedirigees.get(cible.chemin)}`);
        else bloquer('lien-casse', p.chemin, l.href);
        continue;
      }
      if (cible.ancre && !page.identifiants.has(cible.ancre)) bloquer('ancre-cassee', p.chemin, l.href);
      if (page.chemin !== p.chemin) {
        entrants.get(page.chemin).total.add(p.chemin);
        if (l.dansPrincipal) entrants.get(page.chemin).contextuels.add(p.chemin);
      }
      if (l.dansPrincipal && ANCRES_GENERIQUES.has(normaliser(l.texte))) avertir('ancre-generique', p.chemin, `« ${l.texte} » → ${l.href}`);
      if (!l.texte) avertir('lien-sans-texte', p.chemin, l.href);
    }
  }

  // 3. Profondeur de clic depuis l'accueil.
  const profondeur = new Map([['/', 0]]);
  const file = ['/'];
  while (file.length) {
    const courant = file.shift();
    for (const l of parChemin.get(courant)?.liens ?? []) {
      const cible = cheminInterne(l.href, courant);
      if (cible && parChemin.has(cible.chemin) && !profondeur.has(cible.chemin)) {
        profondeur.set(cible.chemin, profondeur.get(courant) + 1);
        file.push(cible.chemin);
      }
    }
  }

  const indexables = pages.filter((p) => p.indexable);
  const brouillons = pages.filter((p) => p.brouillon);
  /** Pages soumises aux contrôles de qualité : en ligne aujourd'hui, ou candidates à l'être. */
  const controlees = pages.filter((p) => p.indexable || p.brouillon);
  for (const p of controlees) {
    const e = entrants.get(p.chemin);
    if (p.chemin !== '/' && e.total.size === 0) bloquer('page-orpheline', p.chemin, 'aucun lien interne entrant');
    else if (p.chemin !== '/' && e.contextuels.size === 0) avertir('sans-lien-contextuel', p.chemin, 'liée seulement depuis la navigation ou le pied de page');
    if (!profondeur.has(p.chemin)) bloquer('inatteignable', p.chemin, 'introuvable en suivant les liens depuis l’accueil');
    else if (profondeur.get(p.chemin) > SEUILS.profondeurMax) avertir('profondeur', p.chemin, `${profondeur.get(p.chemin)} clics`);
  }

  // 4. Unicité des titres, descriptions et h1.
  for (const [regle, lire] of [['title-duplique', (p) => p.titre], ['description-dupliquee', (p) => p.description], ['h1-duplique', (p) => p.h1[0]]]) {
    const vus = new Map();
    for (const p of controlees) {
      const cle = normaliser(lire(p) ?? '');
      if (!cle) continue;
      if (vus.has(cle)) bloquer(regle, p.chemin, `identique à ${vus.get(cle)}`);
      else vus.set(cle, p.chemin);
    }
  }

  // 5. Similarité de contenu, deux à deux.
  const empreintes = controlees.map((p) => ({ chemin: p.chemin, g: grammes(p.texte) }));
  const similarites = [];
  for (let i = 0; i < empreintes.length; i++) {
    for (let j = i + 1; j < empreintes.length; j++) {
      const score = jaccard(empreintes[i].g, empreintes[j].g);
      if (score >= SEUILS.similariteAvertissement) similarites.push({ a: empreintes[i].chemin, b: empreintes[j].chemin, score: Number(score.toFixed(3)) });
    }
  }
  similarites.sort((x, y) => y.score - x.score);
  for (const s of similarites) {
    (s.score >= SEUILS.similariteBlocage ? bloquer : avertir)('contenu-similaire', s.a, `${Math.round(s.score * 100)} % commun avec ${s.b}`);
  }

  // 6. Sitemap et robots.txt.
  const sitemap = { urls: [], absent: false };
  const index = join(dist, 'sitemap-index.xml');
  if (!existsSync(index)) {
    sitemap.absent = true;
    bloquer('sitemap-absent', '/sitemap-index.xml', '');
  } else {
    for (const m of readFileSync(index, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)) {
      const fichier = join(dist, new URL(m[1]).pathname);
      if (!existsSync(fichier)) {
        bloquer('sitemap-fichier', m[1], 'référencé par l’index mais absent');
        continue;
      }
      for (const u of readFileSync(fichier, 'utf8').matchAll(/<url>([\s\S]*?)<\/url>/g)) {
        const loc = u[1].match(/<loc>([^<]+)<\/loc>/)?.[1];
        const lastmod = u[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] ?? null;
        sitemap.urls.push({ loc, lastmod });
      }
    }
    const dansSitemap = new Set(sitemap.urls.map((u) => new URL(u.loc).pathname.replace(/(.)\/$/, '$1')));
    for (const u of sitemap.urls) {
      const url = new URL(u.loc);
      const chemin = url.pathname.replace(/(.)\/$/, '$1');
      const page = parChemin.get(chemin);
      if (url.origin !== SITE) bloquer('sitemap-hote', u.loc, `hôte différent de ${SITE}`);
      if (!page) bloquer('sitemap-url-inconnue', u.loc, 'aucune page construite à cette adresse');
      else if (!page.indexable) bloquer('sitemap-noindex', u.loc, page.brouillon ? 'brouillon non relu' : 'page en noindex');
      // Comparaison après normalisation : « https://hôte » et « https://hôte/ » sont la même URL.
      else if (new URL(page.canonical).href !== url.href) bloquer('sitemap-canonical', u.loc, `canonical de la page : ${page.canonical}`);
      if (u.lastmod && Number.isNaN(Date.parse(u.lastmod))) bloquer('sitemap-lastmod', u.loc, u.lastmod);
      if (u.lastmod && Date.parse(u.lastmod) > Date.now() + 86_400_000) bloquer('sitemap-lastmod-futur', u.loc, u.lastmod);
    }
    for (const p of indexables) {
      if (!dansSitemap.has(p.chemin)) bloquer('absente-du-sitemap', p.chemin, '');
    }
  }

  const robots = join(dist, 'robots.txt');
  if (!existsSync(robots)) bloquer('robots-absent', '/robots.txt', '');
  else {
    const contenu = readFileSync(robots, 'utf8');
    if (!contenu.includes(`Sitemap: ${SITE}/sitemap-index.xml`)) bloquer('robots-sitemap', '/robots.txt', 'ligne Sitemap absente ou sur un autre hôte');
    if (/^Disallow:\s*\/\s*$/m.test(contenu)) bloquer('robots-disallow', '/robots.txt', 'Disallow: / bloque tout le site');
  }

  // 7. Redirections : pas de cible morte, pas de chaîne, pas de page masquée.
  for (const r of redirections) {
    const cible = r.destination.split('#')[0];
    if (cible.startsWith('/') && !parChemin.has(cible)) bloquer('redirection-cible', r.source, `→ ${r.destination} n'existe pas`);
    if (sourcesRedirigees.has(cible)) bloquer('redirection-chaine', r.source, `→ ${r.destination} → ${sourcesRedirigees.get(cible)}`);
    if (parChemin.has(r.source)) bloquer('redirection-masque-page', r.source, 'une page construite existe à cette adresse');
  }

  return {
    genere: new Date().toISOString(),
    seuils: SEUILS,
    totaux: {
      pages: pages.length,
      indexables: indexables.length,
      brouillons: brouillons.length,
      nonIndexables: pages.length - indexables.length - brouillons.length,
      urlsSitemap: sitemap.urls.length,
      blocages: blocages.length,
      avertissements: avertissements.length,
      motsMoyens: Math.round(controlees.reduce((s, p) => s + p.mots, 0) / Math.max(controlees.length, 1)),
      profondeurMax: Math.max(0, ...profondeur.values()),
    },
    blocages,
    avertissements,
    similarites,
    pages: pages.map((p) => ({
      chemin: p.chemin,
      indexable: p.indexable,
      brouillon: p.brouillon,
      titre: p.titre,
      longueurTitre: p.titre.length,
      description: p.description,
      longueurDescription: p.description.length,
      canonical: p.canonical,
      h1: p.h1[0] ?? '',
      nombreH1: p.h1.length,
      h2: p.titres.filter((t) => t.niveau === 2).length,
      mots: p.mots,
      octets: p.octets,
      schemas: p.jsonLd.types,
      liensInternes: p.liens.filter((l) => cheminInterne(l.href, p.chemin)).length,
      liensContextuels: p.liens.filter((l) => l.dansPrincipal && cheminInterne(l.href, p.chemin)).length,
      liensExternes: [...new Set(p.liens.filter((l) => /^https?:/i.test(l.href) && !l.href.startsWith(SITE)).map((l) => l.href))],
      entrants: entrants.get(p.chemin).total.size,
      entrantsContextuels: entrants.get(p.chemin).contextuels.size,
      // Listes détaillées, pour le graphe de liens : qui cite la page dans son contenu, et qui elle cite.
      citeePar: [...entrants.get(p.chemin).contextuels].sort(),
      cite: [...new Set(p.liens.filter((l) => l.dansPrincipal).map((l) => cheminInterne(l.href, p.chemin)?.chemin).filter((c) => c && c !== p.chemin && parChemin.has(c)))].sort(),
      profondeur: profondeur.get(p.chemin) ?? null,
      images: p.images.length,
    })),
  };
}

// ── Sorties ───────────────────────────────────────────────────────────────

function compter(liste) {
  const parRegle = new Map();
  for (const x of liste) parRegle.set(x.regle, (parRegle.get(x.regle) ?? 0) + 1);
  return [...parRegle.entries()].sort((a, b) => b[1] - a[1]);
}

export function resumer(rapport, { detail = 12 } = {}) {
  const t = rapport.totaux;
  const lignes = [
    `Pages : ${t.pages} (${t.indexables} indexables, ${t.brouillons} brouillons en attente de relecture, ${t.nonIndexables} non indexables) · sitemap : ${t.urlsSitemap} URL`,
    `Contenu principal : ${t.motsMoyens} mots en moyenne · profondeur maximale : ${t.profondeurMax} clic(s)`,
    `Blocages : ${t.blocages} · avertissements : ${t.avertissements}`,
  ];
  for (const [titre, liste] of [['BLOCAGES', rapport.blocages], ['AVERTISSEMENTS', rapport.avertissements]]) {
    if (!liste.length) continue;
    lignes.push('', `${titre} par règle :`);
    for (const [regle, n] of compter(liste)) {
      lignes.push(`  ${String(n).padStart(4)}  ${regle}`);
      for (const x of liste.filter((y) => y.regle === regle).slice(0, detail)) lignes.push(`          ${x.chemin}${x.detail ? ' — ' + x.detail : ''}`);
      const reste = liste.filter((y) => y.regle === regle).length - detail;
      if (reste > 0) lignes.push(`          … et ${reste} autre(s)`);
    }
  }
  return lignes.join('\n');
}

export function tableauMarkdown(rapport, filtre = () => true) {
  const fautes = new Map();
  for (const b of rapport.blocages) fautes.set(b.chemin, [...(fautes.get(b.chemin) ?? []), b.regle]);
  const lignes = [
    '| URL | Index. | Title (car.) | Desc. (car.) | H1 | H2 | Mots | Liens int. | Entrants (dont contextuels) | Clics | Schemas | Blocages |',
    '| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |',
  ];
  for (const p of rapport.pages.filter(filtre).sort((a, b) => a.chemin.localeCompare(b.chemin))) {
    lignes.push(
      `| ${p.chemin} | ${p.indexable ? 'oui' : p.brouillon ? 'brouillon' : 'non'} | ${p.longueurTitre} | ${p.longueurDescription} | ${p.nombreH1} | ${p.h2} | ${p.mots} | ${p.liensInternes} | ${p.entrants} (${p.entrantsContextuels}) | ${p.profondeur ?? '—'} | ${p.schemas.filter((s) => !['WebSite', 'ProfessionalService', 'LocalBusiness', 'Person', 'WebPage'].includes(s)).join(', ') || '—'} | ${(fautes.get(p.chemin) ?? []).join(', ') || 'aucun'} |`,
    );
  }
  return lignes.join('\n');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const option = (nom) => (args.includes(nom) ? args[args.indexOf(nom) + 1] : null);
  const dist = option('--dist') ?? 'dist';
  if (!existsSync(dist)) {
    console.error(`Dossier « ${dist} » introuvable : lancez d'abord « npm run build ».`);
    process.exit(2);
  }
  const rapport = auditer(dist);
  console.log(resumer(rapport));
  if (option('--json')) writeFileSync(option('--json'), JSON.stringify(rapport, null, 2));
  if (option('--md')) writeFileSync(option('--md'), tableauMarkdown(rapport) + '\n');
  if (args.includes('--strict') && rapport.totaux.blocages > 0) process.exit(1);
}
