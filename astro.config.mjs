import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { lastmodPour } from './src/data/dates.mjs';
import { estBrouillon } from './src/data/publication.mjs';
import { qualityGate } from './scripts/quality-gate.mjs';

export default defineConfig({
  site: 'https://www.brittassist.fr',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  // Content-Security-Policy stricte, sans 'unsafe-inline' ni 'unsafe-eval'.
  // Astro calcule à chaque build les hashes SHA-256 de tous les <script> et
  // <style> inline qu'il génère, et injecte la CSP via <meta http-equiv>.
  // Les autres en-têtes de sécurité (HSTS, X-Frame-Options…) restent dans vercel.json.
  experimental: {
    csp: {
      algorithm: 'SHA-256',
      directives: [
        "default-src 'self'",
        "img-src 'self' data: https:",
        "font-src 'self' data:",
        "connect-src 'self' https://axdiaos.vercel.app https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://formsubmit.co https://*.formsubmit.co",
        "form-action 'self' https://www.brittassist.fr https://formsubmit.co https://*.formsubmit.co",
        "base-uri 'self'",
        "object-src 'none'",
        "upgrade-insecure-requests",
      ],
      styleDirective: {
        resources: ["'self'"],
      },
      scriptDirective: {
        resources: [
          "'self'",
          'https://www.googletagmanager.com',
          'https://www.google-analytics.com',
        ],
      },
    },
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const chemin = new URL(page).pathname;
        // Page de préparation transmise après un premier échange : noindex,
        // hors navigation, donc hors sitemap.
        if (chemin.includes('/questionnaire')) return false;
        // La page d'erreur n'est pas une destination.
        if (chemin === '/404') return false;
        // Les brouillons n'existent qu'en aperçu et ne sont jamais proposés à l'indexation.
        return !estBrouillon(chemin);
      },
      // <lastmod> sur chaque URL : c'est le signal que Google utilise pour
      // décider s'il re-télécharge le sitemap. Sans lui, une publication met
      // beaucoup plus longtemps à être découverte.
      serialize(item) {
        const { pathname } = new URL(item.url);
        item.lastmod = new Date(`${lastmodPour(pathname)}T00:00:00Z`).toISOString();
        return item;
      },
    }),
    // Après le sitemap : le contrôle lit le build complet, sitemap compris.
    qualityGate(),
  ],
});
