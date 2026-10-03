/**
 * Utilitaires SEO partagés par les gabarits.
 */

export const SITE_URL = 'https://www.brittassist.fr';

/**
 * Sérialise des données structurées pour une balise <script type="application/ld+json">.
 * Le chevron ouvrant est échappé : un texte contenant « </script> » ne peut pas
 * refermer la balise et injecter du HTML.
 */
export function jsonLd(donnees: unknown): string {
  return JSON.stringify(donnees).replace(/</g, '\\u003c');
}

/** Identifiant d'ancre stable à partir d'un intertitre : « Ce que ça coûte » → « ce-que-ca-coute ». */
export function ancre(texte: string): string {
  return texte
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Fil d'Ariane : la même liste alimente le fil visible et le BreadcrumbList. */
export interface Etape {
  nom: string;
  /** Chemin interne ; absent pour la page courante dans le fil visible */
  href: string;
}

export function filDAriane(url: string, etapes: Etape[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#fil`,
    itemListElement: [{ nom: 'Accueil', href: '/' }, ...etapes].map((e, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: e.nom,
      item: e.href === '/' ? `${SITE_URL}/` : `${SITE_URL}${e.href}`,
    })),
  };
}

/** « 2026-10-03 » → « 3 octobre 2026 » ; « mois » ne garde que « octobre 2026 ». */
export function dateLisible(iso: string, precision: 'jour' | 'mois' = 'jour'): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    ...(precision === 'jour' ? { day: 'numeric' } : {}),
    timeZone: 'UTC',
  });
}
