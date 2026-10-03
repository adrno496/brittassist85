/**
 * Quality gate branché sur le build Astro.
 *
 * À la fin de chaque build, le site construit est audité (scripts/seo-audit.mjs).
 * Si une règle bloquante échoue — lien cassé, page orpheline, titre ou H1 en
 * double, canonical incohérent, données structurées invalides, contenu trop
 * proche d'une autre page, sitemap incohérent — le build échoue, et rien ne part
 * en ligne. Les avertissements sont affichés sans bloquer.
 *
 * Contournement d'urgence, à ne pas laisser en place : SEO_GATE=off npm run build
 */
import { fileURLToPath } from 'node:url';
import { auditer, resumer } from './seo-audit.mjs';

export function qualityGate() {
  return {
    name: 'brittassist-quality-gate',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const rapport = auditer(fileURLToPath(dir));
        const { pages, indexables, brouillons, blocages, avertissements } = rapport.totaux;
        logger.info(`${pages} pages (${indexables} indexables, ${brouillons} brouillons) · ${blocages} blocage(s) · ${avertissements} avertissement(s)`);
        if (blocages === 0) return;

        const detail = resumer({ ...rapport, avertissements: [] }, { detail: 8 });
        if (process.env.SEO_GATE === 'off') {
          logger.warn(`Quality gate désactivé (SEO_GATE=off). Blocages ignorés :\n${detail}`);
          return;
        }
        throw new Error(`Quality gate : ${blocages} blocage(s). Le build est interrompu.\n${detail}`);
      },
    },
  };
}
