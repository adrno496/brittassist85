/**
 * Registres de publication et de relecture : une page absente des deux ne doit
 * jamais être publiée, une page publiée avant les registres ne doit jamais
 * disparaître, et une page publiée sans relecture ne doit jamais se dire relue.
 * Une validation du propriétaire n'est ni l'un ni l'autre : elle ne publie rien
 * et ne déclare aucune relecture.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { dateDeRelecture, datePublicationSansRelecture, estBrouillon, estPubliee, liensVisibles, validationDuProprietaire, APERCU } from '../../src/data/publication.mjs';
import { lastmodPour, publicationPour } from '../../src/data/dates.mjs';
import { publications } from '../../src/data/publications.mjs';
import { relectures, validations } from '../../src/data/relectures.mjs';

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

test('un nouveau guide n’est publié que s’il figure dans un registre', () => {
  const chemin = '/guides/mentions-obligatoires-facture';
  const inscrit = Boolean(relectures[chemin]) || Boolean(publications[chemin]);
  assert.equal(estPubliee(chemin), inscrit);
  assert.equal(estBrouillon(chemin), !inscrit);
  assert.equal(estPubliee('/guides/une-page-qui-n-existe-pas'), false);
  assert.equal(estPubliee('/assistante/un-metier-inconnu'), false);
});

test('la page de méthode éditoriale passe elle aussi par un registre', () => {
  const chemin = '/methode-editoriale';
  assert.equal(estPubliee(chemin), Boolean(relectures[chemin]) || Boolean(publications[chemin]));
});

test('publier sans relecture ne déclare jamais une relecture', () => {
  for (const [chemin, date] of Object.entries(publications)) {
    assert.match(date, /^\d{4}-\d{2}-\d{2}$/, chemin);
    assert.ok(Date.parse(date) <= Date.now(), `${chemin} : date dans le futur`);
    assert.equal(datePublicationSansRelecture(chemin), date);
    // La mention « Relu par » et reviewedBy ne dépendent que de relectures.mjs.
    assert.equal(dateDeRelecture(chemin), relectures[chemin] ?? null, chemin);
    assert.equal(lastmodPour(chemin), relectures[chemin] ?? date, chemin);
    assert.equal(publicationPour(chemin), date, chemin);
  }
});

test('les registres ne contiennent que des chemins des familles prévues', () => {
  for (const chemin of [...Object.keys(publications), ...Object.keys(relectures), ...validations.flatMap((v) => v.pages)]) {
    assert.match(chemin, /^\/(guides|assistante)\/[a-z0-9-]+$|^\/methode-editoriale$/, chemin);
  }
});

test('une validation du propriétaire dit qui, quand et en quels mots', () => {
  for (const v of validations) {
    assert.match(v.date, /^\d{4}-\d{2}-\d{2}$/, v.date);
    assert.ok(Date.parse(v.date) <= Date.now(), `${v.date} : date dans le futur`);
    assert.ok(v.par.trim(), `${v.date} : validation sans nom`);
    assert.ok(v.declaration.trim(), `${v.date} : validation sans déclaration`);
    assert.ok(v.pages.length > 0, `${v.date} : validation sans page`);
    assert.equal(new Set(v.pages).size, v.pages.length, `${v.date} : page citée deux fois`);
    // Une relecture de Brittany Dreano s'inscrit dans `relectures` : elle seule s'affiche sur le site.
    assert.doesNotMatch(v.par, /brittany/i, `${v.date} : à inscrire dans relectures`);
  }
  assert.deepEqual(validations.map((v) => v.date), validations.map((v) => v.date).sort(), 'validations à ajouter à la suite, par date');
});

test('valider une page ne la publie pas et ne la déclare pas relue', () => {
  for (const v of validations) {
    for (const chemin of v.pages) {
      assert.equal(validationDuProprietaire(chemin)?.pages.includes(chemin), true, chemin);
      assert.equal(validationDuProprietaire(`${chemin}.html`), validationDuProprietaire(chemin), chemin);
      // La mention « Relu par » et reviewedBy ne dépendent que de `relectures`.
      assert.equal(dateDeRelecture(chemin), relectures[chemin] ?? null, chemin);
      // Les pages validées à ce jour sont toutes postérieures aux registres : hors registre, elles restent des brouillons.
      if (!relectures[chemin] && !publications[chemin]) assert.equal(estBrouillon(chemin), true, chemin);
    }
  }
  assert.equal(validationDuProprietaire('/guides/une-page-qui-n-existe-pas'), null);
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
