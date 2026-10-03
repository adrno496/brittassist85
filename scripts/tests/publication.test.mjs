/**
 * Registre de relecture : une page non relue ne doit jamais être publiée,
 * et une page publiée avant le registre ne doit jamais disparaître.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { estBrouillon, estPubliee, liensVisibles, APERCU } from '../../src/data/publication.mjs';
import { lastmodPour, publicationPour } from '../../src/data/dates.mjs';
import { relectures } from '../../src/data/relectures.mjs';

test('les pages hors registre sont toujours publiées', () => {
  for (const chemin of ['/', '/guides', '/tarifs', '/services/facturation', '/assistante', '/assistante-independante/nantes', '/contact']) {
    assert.equal(estPubliee(chemin), true, chemin);
  }
});

test('les guides et métiers antérieurs au registre restent publiés', () => {
  for (const chemin of ['/guides/comment-deleguer', '/guides/suivi-demandes-assistante-externalisee', '/assistante/artisans-btp', '/assistante/professionnels-sante']) {
    assert.equal(estPubliee(chemin), true, chemin);
  }
});

test('un nouveau guide n’est publié que s’il figure au registre', () => {
  const chemin = '/guides/mentions-obligatoires-facture';
  assert.equal(estPubliee(chemin), Boolean(relectures[chemin]));
  assert.equal(estBrouillon(chemin), !relectures[chemin]);
  assert.equal(estPubliee('/guides/une-page-qui-n-existe-pas'), false);
  assert.equal(estPubliee('/assistante/un-metier-inconnu'), false);
});

test('la page de méthode éditoriale passe elle aussi par le registre', () => {
  assert.equal(estPubliee('/methode-editoriale'), Boolean(relectures['/methode-editoriale']));
});

test('le chemin est normalisé : extension, barre finale, ancre', () => {
  assert.equal(estPubliee('/guides/comment-deleguer.html'), true);
  assert.equal(estPubliee('/guides/comment-deleguer/'), true);
  assert.equal(estPubliee('/guides/comment-deleguer#faq'), true);
});

test('hors aperçu, les liens vers des brouillons sont retirés', { skip: APERCU }, () => {
  const liens = [
    { href: '/services/facturation', label: 'a' },
    { href: '/guides/comment-deleguer', label: 'b' },
    { href: '/guides/une-page-qui-n-existe-pas', label: 'c' },
    { href: 'https://www.service-public.gouv.fr/', label: 'd' },
  ];
  assert.deepEqual(liensVisibles(liens).map((l) => l.label), ['a', 'b', 'd']);
});

test('les dates de sitemap et de données structurées viennent de la même source', () => {
  assert.match(lastmodPour('/'), /^\d{4}-\d{2}-\d{2}$/);
  assert.equal(lastmodPour('/guides/comment-deleguer.html'), lastmodPour('/guides/comment-deleguer'));
  assert.equal(lastmodPour('/assistante'), '2026-10-03');
  assert.equal(publicationPour('/tarifs'), '2026-09-27');
  // Aucune date ne peut être dans le futur : elle perdrait toute valeur de signal.
  for (const chemin of ['/', '/guides', '/assistante', '/services/facturation', '/guides/comment-deleguer']) {
    assert.ok(Date.parse(lastmodPour(chemin)) <= Date.now(), chemin);
  }
});
