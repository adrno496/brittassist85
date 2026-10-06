/**
 * Le contrôle de similarité doit voir ce qu'il prétend voir : une phrase reprise,
 * une question posée deux fois, deux pages sur le même sujet — et ne rien voir
 * entre deux pages qui n'ont rien en commun.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { controler, cosinus, jaccard, grammes, phrases, racines, rapprocher, tfidf } from '../similarity-check.mjs';

function fiche(slug, { titre, corps, faq = [], lot, motCle, variantes = [] }) {
  return {
    slug,
    lot,
    nom: titre,
    title: `${titre} · BrittAssist`,
    h1: titre,
    // Chapô, réponses et clôture sont construits sur le slug : deux fiches d'essai n'y partagent aucun enchaînement de mots.
    lede: `${titre} ${slug}`,
    reponseCourte: [`${slug} alpha`, `${slug} beta`, `${slug} gamma`],
    sections: [{ h2: slug, blocs: [{ paragraphes: corps }] }],
    faq,
    liens: [],
    cloture: `${slug} fin`,
    dateModified: '2026-10-06',
    cadrage: motCle ? { intention: 'méthode', motCle, variantes, persona: 'x', objectif: 'x', difference: 'x' } : undefined,
  };
}

const FACTURE = ['Une facture se relance par écrit, puis par téléphone, selon un calendrier fixé à l’avance et tenu par la même personne.'];
const AGENDA = ['Un agenda de dirigeant protège des plages de travail et refuse les rendez-vous qui ne respectent pas les règles posées.'];

test('les outils de base', () => {
  assert.deepEqual(racines('Externaliser son secrétariat externalisé'), ['extern', 'secret', 'extern']);
  assert.equal(jaccard(new Set(['a', 'b']), new Set(['a', 'b'])), 1);
  assert.equal(jaccard(new Set(['a']), new Set(['b'])), 0);
  assert.equal(grammes('un deux trois quatre cinq', 4).size, 2);
  assert.equal(phrases('Trop court. Une phrase assez longue pour être retenue par le contrôle de similarité.').length, 1);
});

test('TF-IDF : un texte est identique à lui-même, étranger à un autre sujet', () => {
  const { vecteurs } = tfidf([FACTURE[0], FACTURE[0], AGENDA[0]]);
  assert.ok(cosinus(vecteurs[0], vecteurs[1]) > 0.999);
  assert.ok(cosinus(vecteurs[0], vecteurs[2]) < 0.2);
});

test('deux pages sans rapport ne produisent aucun constat', () => {
  const r = controler([
    fiche('factures', { titre: 'Relancer une facture impayée', corps: FACTURE, motCle: 'relancer une facture' }),
    fiche('agenda', { titre: 'Tenir un agenda de dirigeant', corps: AGENDA, motCle: 'agenda de dirigeant' }),
  ]);
  assert.deepEqual(r.blocages, []);
  assert.deepEqual(r.alertes, []);
});

test('une phrase reprise mot pour mot est signalée', () => {
  const r = controler([
    fiche('a', { titre: 'Relancer une facture impayée', corps: FACTURE }),
    fiche('b', { titre: 'Tenir un agenda de dirigeant', corps: [...AGENDA, ...FACTURE] }),
  ]);
  assert.equal(r.reprises.length, 1);
  assert.ok(r.blocages.some((c) => c.regle === 'phrase-reprise'));
});

test('une question de FAQ posée deux fois est un blocage', () => {
  const faq = [{ q: 'Faut-il un outil particulier ?', a: 'Non.' }];
  const r = controler([
    fiche('a', { titre: 'Relancer une facture impayée', corps: FACTURE, faq }),
    fiche('b', { titre: 'Tenir un agenda de dirigeant', corps: AGENDA, faq }),
  ]);
  assert.ok(r.blocages.some((c) => c.regle === 'question-identique'));
});

test('une requête principale reprise dans les variantes d’une autre page est un blocage', () => {
  const r = controler([
    fiche('a', { titre: 'Relancer une facture impayée', corps: FACTURE, motCle: 'relancer une facture impayée' }),
    fiche('b', { titre: 'Tenir un agenda de dirigeant', corps: AGENDA, motCle: 'agenda de dirigeant', variantes: ['Relancer une facture impayée'] }),
  ]);
  assert.ok(r.blocages.some((c) => c.regle === 'requete-en-variante'));
});

test('le mode --serie ne garde que les paires où figure un guide de la série', () => {
  const guides = [
    fiche('ancienne-1', { titre: 'Relancer une facture impayée', corps: FACTURE }),
    fiche('ancienne-2', { titre: 'Tenir un agenda de dirigeant', corps: AGENDA }),
    fiche('nouvelle', { titre: 'Préparer un salon professionnel', corps: ['Un salon se prépare trois mois avant, à partir du guide remis à chaque exposant par l’organisateur.'], lot: 'A' }),
  ];
  assert.equal(controler(guides).paires, 3);
  assert.equal(controler(guides, { serie: true }).paires, 2);
});

test('une idée de page est rapprochée de la page qui traite déjà le sujet', () => {
  const guides = [
    fiche('factures', { titre: 'Relancer une facture impayée', corps: FACTURE, motCle: 'relancer une facture impayée' }),
    fiche('agenda', { titre: 'Tenir un agenda de dirigeant', corps: AGENDA, motCle: 'agenda de dirigeant' }),
  ];
  const [idee] = rapprocher([{ id: 'C1', requete: 'relance facture impayée par téléphone', variantes: ['relancer un client qui ne paie pas'], probleme: 'calendrier de relance' }], guides);
  assert.equal(idee.motsCles.slug, 'factures');
  assert.equal(idee.sujet.slug, 'factures');
  assert.ok(idee.couverture.score > 0.5);
});
