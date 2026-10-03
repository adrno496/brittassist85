#!/usr/bin/env node
/**
 * Génère les variantes WebP des photos affichées sur le site.
 *
 * À relancer à la main quand une photo change : `node scripts/images.mjs`.
 * Les fichiers produits sont versionnés dans public/images ; le build ne les
 * recalcule pas, pour ne faire traiter aucune image par la chaîne de build.
 * Les JPEG d'origine restent en place : ils servent de repli aux navigateurs
 * sans WebP et d'image de partage.
 */
import { statSync } from 'node:fs';
import sharp from 'sharp';

/** [fichier source, largeurs à produire] — la plus grande est la largeur d'origine. */
const PHOTOS = [
  ['tanymac.jpeg', [640, 1080]],
  ['portrait-brittany.jpg', [480, 760]],
  ['tany.jpeg', [480, 941]],
  ['portrait-brittany-parcours.jpg', [640, 1000]],
  ['bureau-portable.jpg', [640, 1320]],
];

for (const [fichier, largeurs] of PHOTOS) {
  const source = `public/images/${fichier}`;
  const base = fichier.replace(/\.(jpe?g|png)$/, '');
  for (const largeur of largeurs) {
    const sortie = `public/images/${base}-${largeur}.webp`;
    await sharp(source).resize({ width: largeur, withoutEnlargement: true }).webp({ quality: 78 }).toFile(sortie);
    console.log(`${sortie.padEnd(58)} ${String(Math.round(statSync(sortie).size / 1024)).padStart(4)} Ko   (source : ${Math.round(statSync(source).size / 1024)} Ko)`);
  }
}
