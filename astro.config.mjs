import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { lastmodPour } from './src/data/dates.mjs';

export default defineConfig({
  site: 'https://brittassist.fr',
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
        "font-src 'self' https://fonts.bunny.net data:",
        "connect-src 'self' https://axdiaos.vercel.app https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://formsubmit.co https://*.formsubmit.co",
        "form-action 'self' https://brittassist.fr https://www.brittassist.fr https://formsubmit.co https://*.formsubmit.co",
        "base-uri 'self'",
        "object-src 'none'",
        "upgrade-insecure-requests",
      ],
      styleDirective: {
        resources: ["'self'", 'https://fonts.bunny.net'],
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
      filter: (page) =>
        !page.includes('/mentions-legales') &&
        !page.includes('/cgv') &&
        !page.includes('/politique-confidentialite') &&
        // Page de préparation transmise après un premier échange : noindex,
        // hors navigation, donc hors sitemap.
        !page.includes('/questionnaire'),
      // <lastmod> sur chaque URL : c'est le signal que Google utilise pour
      // décider s'il re-télécharge le sitemap. Sans lui, une publication met
      // beaucoup plus longtemps à être découverte.
      serialize(item) {
        const { pathname } = new URL(item.url);
        item.lastmod = new Date(`${lastmodPour(pathname)}T00:00:00Z`).toISOString();
        return item;
      },
    }),
  ],
});
