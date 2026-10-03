/**
 * Script d'initialisation du thème, exécuté avant le premier affichage.
 *
 * Il doit rester en ligne et bloquant : chargé plus tard, il laisserait voir le
 * thème sombre une fraction de seconde aux lecteurs qui ont choisi le clair.
 * Un script en ligne n'est accepté par la Content-Security-Policy que si son
 * empreinte y figure. Le texte est donc défini ici, une seule fois, et lu par :
 *  - BaseLayout.astro, qui l'écrit dans la page ;
 *  - astro.config.mjs, qui en déclare l'empreinte SHA-256 dans la CSP.
 * Les deux ne peuvent pas diverger.
 */
import { createHash } from 'node:crypto';

export const THEME_INIT = `try{if(localStorage.getItem('brittassist-theme')==='light'){document.documentElement.dataset.theme='light';document.querySelector('meta[name="theme-color"]')?.setAttribute('content','#F8F6F2')}}catch(_){}`;

export const THEME_INIT_HASH = `sha256-${createHash('sha256').update(THEME_INIT, 'utf8').digest('base64')}`;
