/**
 * Série « secrétariat externalisé » — risques, conformité et accès.
 *
 * Le dossier « Confidentialité, accès et outils » traite déjà les mots de passe,
 * la délégation de messagerie, le registre des accès. Ces pages-ci traitent ce
 * qui touche au droit et à l'argent : l'obligation de vigilance du client, le
 * contrat de sous-traitance RGPD, l'incident, la banque, les paiements, les
 * délégations auprès des organismes. Quatre situations de dirigeant les
 * complètent : indisponibilité soudaine, conjoint qui tient l'administratif,
 * contrôle Urssaf, départ d'un salarié.
 *
 * Chaque règle citée renvoie à sa source officielle. Les montants et les taux
 * qui changent ne sont pas recopiés : la page officielle les tient à jour.
 */
import type { Guide } from '../guides.ts';
import { lot } from './secretariat-lots.ts';

const CONFIDENTIALITE = 'confidentialite-acces-et-outils';
const SITUATIONS = 'situations-de-dirigeant';

const SOURCE_URSSAF_VIGILANCE = { href: 'https://www.urssaf.fr/accueil/attestation-vigilance.html', label: 'Urssaf — Obtenir et vérifier une attestation de vigilance' };
const SOURCE_SP_VIGILANCE = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F31422', label: 'Service-Public Entreprendre — Comment obtenir une attestation de vigilance ?' };
const SOURCE_SP_SOUS_TRAITANCE = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F36261', label: 'Service-Public Entreprendre — Recourir à la sous-traitance' };
const SOURCE_CNIL_QUALIFICATION = { href: 'https://www.cnil.fr/fr/qualification-juridique-sous-traitance', label: 'CNIL — Responsable de traitement ou sous-traitant : la qualification' };
const SOURCE_CNIL_BONNES_PRATIQUES = { href: 'https://www.cnil.fr/fr/responsable-de-traitement-et-sous-traitant-6-bonnes-pratiques-pour-respecter-les-donnees', label: 'CNIL — Responsable de traitement et sous-traitant : 6 bonnes pratiques' };
const SOURCE_CNIL_CLAUSES = { href: 'https://www.cnil.fr/fr/sous-traitance-exemple-de-clauses', label: 'CNIL — Sous-traitance : exemple de clauses' };
const SOURCE_CNIL_CHAPITRE_4 = { href: 'https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4', label: 'CNIL — RGPD, chapitre IV : responsable du traitement et sous-traitant' };
const SOURCE_CNIL_SOUS_TRAITANCE = { href: 'https://www.cnil.fr/fr/securite-gerer-la-sous-traitance', label: 'CNIL — Sécurité : gérer la sous-traitance' };
const SOURCE_CNIL_VIOLATIONS = { href: 'https://www.cnil.fr/fr/violations-de-donnees-personnelles-les-regles-suivre', label: 'CNIL — Violations de données personnelles : les règles à suivre' };
const SOURCE_CNIL_CYBERATTAQUE = { href: 'https://www.cnil.fr/fr/cyberattaque-le-sous-traitant-au-centre-de-la-crise', label: 'CNIL — Cyberattaque : le sous-traitant au centre de la crise' };
const SOURCE_IMPOTS_DELEGATION = { href: 'https://www.impots.gouv.fr/professionnel/questions/si-je-cree-un-espace-professionnel-serai-je-le-seul-habilite-gerer-les', label: 'impots.gouv.fr — Espace professionnel : qui peut gérer les services de l’entreprise ?' };
const SOURCE_URSSAF_TIERS = { href: 'https://www.urssaf.fr/accueil/actualites/acces-compte-expert-comptable.html', label: 'Urssaf — Donner accès à son compte à son expert-comptable sans partager ses identifiants' };
const SOURCE_LAPOSTE_PROCURATION = { href: 'https://www.laposte.fr/professionnel/conseils-pratiques/donner-procuration-pour-retirer-ou-recevoir-du-courrier', label: 'La Poste — La procuration pour les professionnels' };
const SOURCE_MANDAT_PROTECTION = { href: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F16670', label: 'Service-Public — Mandat de protection future' };
const SOURCE_SP_CONJOINT = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F32266', label: 'Service-Public Entreprendre — Conjoint du chef d’entreprise : quels sont les différents statuts ?' };
const SOURCE_URSSAF_CONJOINT = { href: 'https://www.urssaf.fr/accueil/independant/gerer-developper-activite/travailler-avec-conjoint.html', label: 'Urssaf — Travailler avec votre conjoint' };
const SOURCE_URSSAF_CONTROLE = { href: 'https://www.urssaf.fr/controle', label: 'Urssaf — Le contrôle Urssaf' };
const SOURCE_SP_FIN_CONTRAT = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F21789', label: 'Service-Public Entreprendre — Fin de contrat : documents à remettre au salarié' };
const SOURCE_CNIL_MESSAGERIE = { href: 'https://www.cnil.fr/fr/cnil-direct/question/messagerie-professionnelle-quelles-precautions-avant-de-fermer-le-compte-dun', label: 'CNIL — Messagerie professionnelle : précautions avant de fermer le compte d’un salarié' };

export const secretariatRisques: Guide[] = [
  {
    slug: 'obligation-de-vigilance-prestataire-independant',
    type: 'reference',
    dossier: CONFIDENTIALITE,
    categorie: 'Repère',
    nom: 'Obligation de vigilance : les pièces à demander',
    title: 'Obligation de vigilance : les pièces du prestataire · BrittAssist',
    description:
      "À partir de 5 000 € hors taxes, le client d’une prestataire indépendante doit lui demander une attestation de vigilance, puis tous les six mois. La marche à suivre.",
    h1: 'Obligation de vigilance : les pièces à demander à une prestataire indépendante.',
    lede:
      "On connaît l’attestation de vigilance quand un donneur d’ordre vous la réclame. On oublie qu’on est soi-même donneur d’ordre dès qu’on confie un travail régulier à une prestataire. Un secrétariat externalisé atteint vite le seuil qui déclenche l’obligation, et elle pèse sur le client.",
    reponseCourte: [
      "Pour tout contrat d’au moins 5 000 € hors taxes, le client professionnel doit se faire remettre par son prestataire une attestation de vigilance délivrée par l’Urssaf.",
      "Le montant s’apprécie sur l’ensemble de la prestation, même si elle est payée ou facturée en plusieurs fois.",
      "L’attestation se demande à la conclusion du contrat, puis tous les six mois jusqu’à la fin de son exécution, et son authenticité se vérifie en ligne.",
      "À défaut, si le prestataire a eu recours au travail dissimulé, le client peut être tenu de régler une part de ses impôts, taxes et cotisations.",
    ],
    sections: [
      {
        h2: 'Ce que dit la règle',
        blocs: [
          {
            paragraphes: [
              "L’Urssaf le formule ainsi : le donneur d’ordre doit demander à son cocontractant de lui fournir l’attestation de vigilance dès la conclusion du contrat, puis tous les six mois jusqu’à la fin du contrat, et en vérifier la validité. L’obligation vaut pour tout contrat d’un montant au moins égal à 5 000 € hors taxes, ce montant s’entendant de la prestation dans son ensemble, même réglée en plusieurs paiements.",
              "Les contrats de prestation de services, matérielle ou intellectuelle, figurent expressément dans la liste des contrats concernés. Un accompagnement administratif en fait partie.",
            ],
          },
        ],
      },
      {
        h2: 'Un secrétariat externalisé est-il concerné ?',
        blocs: [
          {
            paragraphes: [
              "Oui, dès que le montant global atteint le seuil. Un accompagnement mensuel y parvient en moins d’un an. Plutôt que de guetter le moment où il est franchi, demandez l’attestation à la signature : la prestataire la télécharge depuis son espace en ligne, y compris lorsqu’elle exerce seule, sans salarié.",
              "Pour une mission ponctuelle d’un montant inférieur, l’obligation ne joue pas. Rien n’interdit de demander la pièce quand même.",
            ],
          },
        ],
      },
      {
        h2: 'Le dossier à constituer',
        blocs: [
          {
            tableau: {
              legende: 'Pièces à réunir sur une prestataire indépendante',
              colonnes: ['Pièce', 'D’où elle vient', 'À renouveler'],
              lignes: [
                ['Attestation de vigilance', 'Espace en ligne Urssaf de la prestataire', 'Tous les six mois'],
                ['Justificatif d’immatriculation, lorsqu’elle est obligatoire', 'Extrait d’immatriculation, ou document professionnel portant nom, adresse et numéro', 'À la signature'],
                ['Attestation d’assurance de responsabilité civile professionnelle', 'Son assureur, si elle en a souscrit une', 'À chaque échéance annuelle'],
              ],
            },
          },
          {
            paragraphes: [
              "Les deux premières pièces relèvent de l’obligation de vigilance, telle que Service-Public la décrit. La troisième n’en fait pas partie : c’est une précaution, utile le jour où une erreur a des conséquences.",
            ],
          },
        ],
      },
      {
        h2: 'Vérifier, puis ne plus y penser',
        blocs: [
          {
            etapes: [
              "À réception, saisissez le code de sécurité de l’attestation dans l’outil de vérification de l’Urssaf.",
              "Classez la pièce dans le dossier du prestataire, avec sa date.",
              "Inscrivez dans votre échéancier une ligne de renouvellement à six mois.",
              "À l’échéance, redemandez la pièce, vérifiez-la, remplacez l’ancienne.",
            ],
          },
          {
            paragraphes: [
              "Tenu ainsi, le sujet coûte cinq minutes deux fois par an. C’est l’une des tâches qu’une assistante peut tenir pour l’ensemble de vos prestataires et sous-traitants — y compris, sans la moindre ironie, pour elle-même.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que l’on risque à ne rien demander',
        blocs: [
          {
            paragraphes: [
              "Les sanctions décrites par l’Urssaf ne jouent que si le prestataire a eu recours au travail dissimulé. Le client qui n’a pas rempli son obligation peut alors être tenu de payer ses impôts, taxes, cotisations de sécurité sociale et autres charges, à due proportion du chiffre d’affaires réalisé. Les exonérations et réductions de cotisations dont il bénéficie pour ses propres salariés peuvent aussi être annulées sur la période.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Demander l’attestation à la signature, et ne jamais la redemander.",
      "La classer sans en vérifier l’authenticité.",
      "Penser que l’obligation ne concerne que le bâtiment.",
    ],
    limites: [
      "Cette page résume une obligation décrite par l’Urssaf et Service-Public. La façon dont le seuil s’applique à un contrat particulier, notamment sans terme fixé, se vérifie avec votre expert-comptable.",
    ],
    faq: [
      {
        q: 'L’obligation s’applique-t-elle si je paie quelques centaines d’euros par mois ?',
        a: "Le seuil s’apprécie sur le montant global de la prestation, même payée en plusieurs fois, selon l’Urssaf. Pour un accompagnement mensuel sans terme fixé, le plus simple est de demander l’attestation dès la signature. En cas de doute sur votre situation, votre expert-comptable tranche.",
      },
      {
        q: 'Une micro-entrepreneuse sans salarié peut-elle fournir cette attestation ?',
        a: "Oui. L’Urssaf précise que l’attestation est due par le prestataire, qu’il soit travailleur indépendant ou employeur. Elle se télécharge depuis l’espace en ligne.",
      },
      {
        q: 'Que faire si la prestataire tarde à fournir l’attestation ?',
        a: "La relancer par écrit, en rappelant que la pièce vous est demandée à vous aussi. Une prestataire à jour l’obtient en quelques minutes ; un refus durable est une information en soi.",
      },
    ],
    liens: [
      { href: '/guides/dossier-permanent-entreprise', label: 'Constituer le dossier permanent' },
      { href: '/guides/modele-fiche-prestataire', label: 'Modèle de fiche prestataire' },
      { href: '/guides/contrat-de-prestation-assistante-independante', label: 'Le contrat de prestation avec une assistante' },
      { href: '/guides/echeancier-administratif-entreprise', label: 'Construire son échéancier administratif' },
      { href: '/guides/choisir-assistante-externalisee', label: 'Choisir une assistante externalisée' },
      { href: '/services/suivi-prestataires', label: 'Le suivi de vos prestataires' },
    ],
    sources: [SOURCE_URSSAF_VIGILANCE, SOURCE_SP_VIGILANCE, SOURCE_SP_SOUS_TRAITANCE],
    cloture: 'Demander une attestation n’est pas un geste de méfiance. C’est la part du client dans un contrat en règle.',
    ...lot('A'),
    cadrage: {
      intention: 'référence',
      motCle: 'obligation de vigilance prestataire indépendant',
      variantes: ['attestation de vigilance à demander à un prestataire', 'documents à demander à un auto-entrepreneur', 'obligation de vigilance 5 000 euros', 'vérifier un prestataire indépendant Urssaf'],
      persona: 'Dirigeant client d’une prestataire indépendante, qui ignore être donneur d’ordre',
      objectif: 'Faire demander, vérifier et renouveler l’attestation de vigilance',
      difference: 'Traite l’obligation du côté du client qui achète la prestation ; la page sur le dossier permanent la traite du côté de celui qui doit fournir la pièce',
    },
  },

  {
    slug: 'rgpd-sous-traitance-assistante-externalisee',
    type: 'reference',
    dossier: CONFIDENTIALITE,
    categorie: 'Repère',
    nom: 'RGPD : l’accord de sous-traitance',
    title: 'RGPD : l’accord de sous-traitance avec une assistante · BrittAssist',
    description:
      "Une assistante qui accède à vos fichiers traite des données pour votre compte. Les huit engagements que le RGPD impose d’écrire, traduits en gestes concrets.",
    h1: 'RGPD et assistante externalisée : ce que l’accord de sous-traitance doit contenir.',
    lede:
      "Une clause de confidentialité dit que rien ne sera répété. Le RGPD demande autre chose : que l’on écrive ce que la prestataire fait de vos données, sur quelles instructions, avec quelle sécurité, et ce qu’elles deviennent à la fin. Ce n’est pas le même document, et le second est obligatoire.",
    reponseCourte: [
      "Une assistante qui accède à votre fichier clients, à votre messagerie ou à vos dossiers de personnel traite des données personnelles pour votre compte : elle est, en général, sous-traitante au sens du RGPD.",
      "Un contrat écrit est alors obligatoire entre vous, responsable du traitement, et elle.",
      "Ce contrat décrit le traitement et contient huit engagements du sous-traitant, listés à l’article 28 du règlement.",
      "Il peut tenir dans les conditions générales, dans la proposition ou dans une annexe : la forme est libre, le contenu ne l’est pas.",
    ],
    sections: [
      {
        h2: 'Qui est qui',
        blocs: [
          {
            paragraphes: [
              "Le responsable du traitement est celui qui décide pourquoi et comment des données sont utilisées : vous, pour vos clients, vos salariés, vos prospects. Le sous-traitant est celui qui les traite pour le compte d’un autre, sur ses instructions. La CNIL consacre une page à cette qualification, qui dépend des faits et non du titre porté sur le contrat.",
              "Une assistante qui tient votre agenda, relance vos factures ou classe vos dossiers travaille sur vos données, pour vos finalités, selon vos demandes. Elle entre dans la seconde catégorie pour ces opérations.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que le contrat doit décrire',
        blocs: [
          {
            liste: [
              "L’objet et la durée du traitement.",
              "Sa nature et sa finalité : tenue d’agenda, facturation, relances, classement.",
              "Les catégories de données : coordonnées, données de facturation, pièces d’identité s’il y en a.",
              "Les catégories de personnes concernées : clients, fournisseurs, salariés, candidats.",
            ],
          },
          {
            paragraphes: [
              "Cette description n’a pas à être longue. Elle doit être exacte : c’est elle qui borne ce que la prestataire a le droit de faire.",
            ],
          },
        ],
      },
      {
        h2: 'Les huit engagements, traduits',
        blocs: [
          {
            tableau: {
              legende: 'Engagements du sous-traitant prévus par le RGPD',
              colonnes: ['Ce que prévoit le règlement', 'Ce que cela donne avec une assistante'],
              lignes: [
                ['Ne traiter les données que sur instruction documentée', 'Vos demandes écrites et le périmètre tiennent lieu d’instructions'],
                ['Assurer la confidentialité des personnes autorisées', 'Un engagement écrit, qui vaut aussi pour un éventuel relais'],
                ['Prendre des mesures de sécurité', 'Accès nominatifs, double authentification, poste de travail protégé'],
                ['Ne pas recourir à un autre sous-traitant sans autorisation écrite', 'Elle ne confie rien à un tiers sans votre accord'],
                ['Aider à répondre aux demandes des personnes', 'Elle vous transmet une demande d’accès ou d’effacement qu’elle reçoit'],
                ['Aider à la sécurité et à la gestion des incidents', 'Elle vous prévient sans attendre de toute violation'],
                ['Supprimer ou restituer les données à la fin', 'Restitution des documents, suppression des copies'],
                ['Tenir à disposition de quoi démontrer le respect de ces obligations', 'Elle peut vous montrer comment elle travaille'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Où l’écrire',
        blocs: [
          {
            paragraphes: [
              "Le règlement n’impose pas de modèle. Les engagements peuvent figurer dans les conditions générales, dans la proposition acceptée ou dans une annexe consacrée aux données. La CNIL publie un exemple de clauses, et renvoie aux clauses contractuelles types de la Commission européenne, qui peuvent être reprises telles quelles.",
              "Ce contrat ne règle pas tout. Votre propre conformité — informer les personnes, limiter les durées de conservation, tenir un registre si vous y êtes tenu — reste la vôtre. Faire appel à une prestataire ne la transfère pas.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Considérer qu’une clause de confidentialité couvre le sujet.",
      "Signer des clauses sans avoir décrit le traitement : elles ne s’appliquent alors à rien de précis.",
      "Oublier le sort des données à la fin, jusqu’au jour où la collaboration s’arrête.",
    ],
    limites: [
      "Cette page présente le contenu attendu d’un accord de sous-traitance. Elle ne constitue ni un modèle de contrat ni un avis juridique : pour des données sensibles ou un secteur réglementé, consultez un conseil.",
    ],
    faq: [
      {
        q: 'Mon assistante n’ouvre que mon agenda : suis-je concerné ?',
        a: "Un agenda contient des noms, des coordonnées et parfois l’objet des rendez-vous : ce sont des données personnelles. L’accord peut être bref, mais il doit exister.",
      },
      {
        q: 'Qui répond en cas de fuite de données ?',
        a: "Vis-à-vis des personnes concernées et de la CNIL, le responsable du traitement reste en première ligne. Le sous-traitant répond de ses propres obligations, dont celle de vous alerter. La répartition entre vous deux dépend de ce que le contrat prévoit.",
      },
      {
        q: 'Faut-il des clauses rédigées par un avocat ?',
        a: "Pas nécessairement pour une prestation courante : les clauses types existent pour cela. Dès que des données sensibles sont en jeu, ou que les volumes sont importants, une relecture se justifie.",
      },
    ],
    liens: [
      { href: '/guides/confidentialite-assistante-externalisee', label: 'Confidentialité et accès à distance' },
      { href: '/guides/contrat-de-prestation-assistante-independante', label: 'Le contrat de prestation avec une assistante' },
      { href: '/guides/incident-de-securite-chez-un-prestataire', label: 'Incident de sécurité chez un prestataire' },
      { href: '/guides/sous-traitance-par-son-assistante', label: 'Quand la prestataire confie le travail à un tiers' },
      { href: '/guides/confidentialite-acces-et-outils', label: 'Le dossier « Confidentialité, accès et outils »' },
      { href: '/private-office', label: 'Le fonctionnement d’un Private Office' },
    ],
    sources: [SOURCE_CNIL_QUALIFICATION, SOURCE_CNIL_BONNES_PRATIQUES, SOURCE_CNIL_CHAPITRE_4, SOURCE_CNIL_CLAUSES],
    cloture: 'La confidentialité promet de se taire. L’accord de sous-traitance dit ce qu’on a le droit de faire.',
    ...lot('B'),
    cadrage: {
      intention: 'référence',
      motCle: 'RGPD assistante externalisée sous-traitant',
      variantes: ['contrat de sous-traitance RGPD prestataire administratif', 'article 28 RGPD secrétariat externalisé', 'assistante indépendante données personnelles contrat', 'clauses RGPD prestation de secrétariat'],
      persona: 'Dirigeant qui ouvre des données personnelles à une prestataire et veut un contrat en règle',
      objectif: 'Faire vérifier la présence des huit engagements dans le contrat',
      difference: 'Détaille le contenu obligatoire de l’accord, là où les guides sur le contrat et la confidentialité ne lui consacrent qu’un paragraphe',
    },
  },

  {
    slug: 'incident-de-securite-chez-un-prestataire',
    type: 'situation',
    dossier: CONFIDENTIALITE,
    categorie: 'Situation',
    nom: 'Incident de sécurité chez un prestataire',
    title: 'Incident de sécurité chez un prestataire : que faire · BrittAssist',
    description:
      "Compte piraté, ordinateur perdu, message envoyé au mauvais destinataire : couper les accès, établir les faits, et notifier la CNIL sous 72 heures s’il le faut.",
    h1: 'Compte piraté, ordinateur perdu chez votre prestataire : les premières heures.',
    lede:
      "Votre assistante vous appelle : son ordinateur a été volé, ou sa messagerie a envoyé des messages qu’elle n’a pas écrits. Elle détient des accès à vos outils. Vous avez quelques heures pour faire trois choses dans le bon ordre, et un délai légal qui court déjà.",
    reponseCourte: [
      "Couper d’abord : retirer ses accès, changer les mots de passe partagés, fermer les sessions ouvertes.",
      "Établir ensuite ce qui a été exposé : quels comptes, quelles données, depuis quand.",
      "S’il s’agit d’une violation de données personnelles présentant un risque pour les personnes, c’est à vous, responsable du traitement, de la notifier à la CNIL, au plus tard 72 heures après en avoir eu connaissance.",
      "Dans tous les cas, l’incident se consigne : les faits, ses effets, les mesures prises.",
    ],
    sections: [
      {
        h2: 'Les premières heures',
        blocs: [
          {
            etapes: [
              "Retirez les accès nominatifs de la prestataire sur chaque outil, en vous aidant du registre des accès.",
              "Changez le mot de passe de tout compte partagé, et renouvelez les codes de secours.",
              "Fermez les sessions actives depuis les paramètres de sécurité de chaque service.",
              "Notez l’heure à laquelle vous avez été prévenu : c’est le point de départ des délais.",
              "Demandez à la prestataire un récit écrit : ce qui s’est passé, quand, ce qui était accessible depuis l’appareil ou le compte.",
              "Rouvrez les accès un par un, une fois la cause traitée.",
            ],
          },
        ],
      },
      {
        h2: 'Est-ce une violation de données ?',
        blocs: [
          {
            paragraphes: [
              "Il y a violation de données personnelles lorsque des données sont perdues, détruites, modifiées, ou rendues accessibles à quelqu’un qui n’aurait pas dû les voir. Un ordinateur volé dont le disque est chiffré et dont la session était verrouillée n’expose pas la même chose qu’une messagerie restée ouverte sur un poste non protégé.",
              "La question à trancher est celle du risque pour les personnes dont les données sont en cause : vos clients, vos salariés, vos contacts. C’est une appréciation, que vous devez pouvoir justifier.",
            ],
          },
        ],
      },
      {
        h2: 'Qui fait quoi, et sous quel délai',
        blocs: [
          {
            tableau: {
              legende: 'Obligations en cas de violation de données personnelles',
              colonnes: ['Qui', 'Quoi', 'Quand'],
              lignes: [
                ['La prestataire, sous-traitante', 'Vous informe de la violation', 'Dans les meilleurs délais après en avoir pris connaissance'],
                ['Vous, responsable du traitement', 'Notifiez la CNIL, si la violation présente un risque pour les personnes', 'Au plus tard 72 heures après en avoir eu connaissance'],
                ['Vous', 'Informez les personnes concernées, si le risque est élevé', 'Dans les meilleurs délais'],
                ['Vous', 'Consignez l’incident dans un registre des violations', 'Dans tous les cas, même sans notification'],
              ],
            },
          },
          {
            paragraphes: [
              "Ces règles sont celles que rappelle la CNIL. Si le délai de 72 heures est dépassé, la notification doit expliquer le retard. La CNIL recommande par ailleurs d’inscrire dans le contrat l’obligation, pour le sous-traitant, d’alerter sans délai.",
            ],
          },
        ],
      },
      {
        h2: 'Selon ce qui a été touché',
        blocs: [
          {
            liste: [
              "Une messagerie : vérifiez les règles de transfert et de réponse automatique, souvent ajoutées par l’intrus, et prévenez vos contacts si des messages frauduleux sont partis.",
              "Un accès bancaire, même en consultation : appelez votre banque sans attendre.",
              "Un espace de stockage : révoquez les liens de partage, et consultez l’historique des téléchargements s’il existe.",
              "Un gestionnaire de mots de passe : considérez tous les secrets qu’il contenait comme exposés, et renouvelez-les.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Chercher à comprendre avant d’avoir coupé les accès.",
      "Laisser passer le week-end : le délai de 72 heures ne s’interrompt pas.",
      "Ne rien écrire parce qu’« il ne s’est finalement rien passé ».",
    ],
    limites: [
      "Cette page donne l’ordre des gestes et les obligations générales. Pour une attaque en cours ou des données sensibles, faites-vous assister : votre prestataire informatique, puis un conseil.",
    ],
    faq: [
      {
        q: 'Qui notifie la CNIL : moi, ou la prestataire ?',
        a: "Vous. L’obligation de notifier pèse sur le responsable du traitement. Le rôle du sous-traitant est de vous alerter dans les meilleurs délais, et de vous aider à réunir les éléments.",
      },
      {
        q: 'Un ordinateur volé entraîne-t-il toujours une notification ?',
        a: "Non. Tout dépend de ce qu’il contenait et de sa protection. Un appareil chiffré et verrouillé réduit fortement le risque. L’incident se consigne dans tous les cas ; la notification dépend du risque pour les personnes.",
      },
      {
        q: 'Faut-il mettre fin à la collaboration après un incident ?',
        a: "Pas par principe. Un incident signalé dans l’heure, avec un récit clair, montre une prestataire qui fait ce qu’il faut. Celui qu’on vous cache une semaine pose une tout autre question.",
      },
    ],
    liens: [
      { href: '/guides/registre-des-acces-entreprise', label: 'Tenir un registre des accès' },
      { href: '/guides/partager-un-mot-de-passe-en-securite', label: 'Partager un accès sans partager son mot de passe' },
      { href: '/guides/fraude-au-faux-rib-et-au-president', label: 'Fraude au faux RIB et au président' },
      { href: '/guides/rgpd-sous-traitance-assistante-externalisee', label: 'Ce que le contrat prévoit en cas d’incident' },
      { href: '/guides/confidentialite-acces-et-outils', label: 'Le dossier « Confidentialité, accès et outils »' },
      { href: '/private-office', label: 'Le fonctionnement d’un Private Office' },
    ],
    sources: [SOURCE_CNIL_VIOLATIONS, SOURCE_CNIL_CYBERATTAQUE],
    cloture: 'Un incident ne se juge pas à ce qui est arrivé. Il se juge à ce qui a été fait dans les heures suivantes.',
    ...lot('C'),
    cadrage: {
      intention: 'problème-solution',
      motCle: 'incident de sécurité prestataire que faire',
      variantes: ['violation de données chez un sous-traitant', 'prestataire piraté que faire', 'notification CNIL 72 heures prestataire', 'compte compromis assistante accès'],
      persona: 'Dirigeant dont la prestataire signale un vol, une perte ou une compromission',
      objectif: 'Donner l’ordre des gestes et la répartition des obligations de notification',
      difference: 'Traite l’incident et ses délais ; les autres pages du dossier traitent la prévention',
    },
  },

  {
    slug: 'acces-bancaire-pour-son-assistante',
    type: 'guide',
    dossier: CONFIDENTIALITE,
    categorie: 'Comprendre',
    nom: 'Quel accès bancaire donner à son assistante',
    title: 'Banque en ligne : quel accès donner à son assistante · BrittAssist',
    description:
      "Aucun accès, consultation seule ou préparation des virements : les niveaux d’accès bancaire que l’on peut ouvrir à une assistante, et celui qui ne se délègue pas.",
    h1: 'Donner un accès bancaire à son assistante : consulter, préparer, jamais valider.',
    lede:
      "Rapprocher les encaissements des factures suppose de voir les relevés. Préparer les paiements des fournisseurs suppose d’approcher la banque. Entre « elle ne voit rien » et « elle a mes codes », il existe des niveaux intermédiaires, et un seul n’est jamais ouvert.",
    reponseCourte: [
      "Dans bien des cas, aucun accès n’est nécessaire : transmettre les relevés suffit.",
      "Un accès en consultation seule permet le rapprochement, sans aucun pouvoir sur l’argent.",
      "Un accès de préparation permet de saisir des opérations que vous seul validez.",
      "La validation d’un paiement ne se délègue pas à une prestataire, et vos identifiants personnels ne se communiquent à personne.",
    ],
    sections: [
      {
        h2: 'Les niveaux d’accès',
        blocs: [
          {
            tableau: {
              legende: 'Niveaux d’accès bancaire pour une assistante',
              colonnes: ['Niveau', 'Ce qu’il permet', 'Ce qu’il sert à faire', 'Ce qu’il expose'],
              lignes: [
                ['Aucun accès', 'Rien : vous transmettez les relevés', 'Rapprochement mensuel, pièces pour le comptable', 'Rien'],
                ['Consultation seule', 'Voir soldes, mouvements, relevés', 'Suivi des encaissements au fil de l’eau', 'L’information : soldes, noms des tiers'],
                ['Préparation', 'Saisir des opérations en attente de validation', 'Préparer un lot de virements', 'Une erreur de saisie, arrêtée par votre validation'],
                ['Validation', 'Exécuter un paiement', 'Rien qui se délègue à une prestataire', 'L’argent'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Comment ouvrir un accès limité',
        blocs: [
          {
            paragraphes: [
              "Un accès limité est un utilisateur distinct, à son nom, avec ses propres identifiants et des droits restreints. Beaucoup d’offres bancaires destinées aux entreprises prévoient des profils de ce type ; les modalités, et parfois le coût, dépendent de votre banque. La démarche commence donc par une question à votre conseiller : puis-je créer un utilisateur en consultation seule, ou en saisie sans validation ?",
              "Si la réponse est non, l’alternative n’est pas de prêter vos codes. C’est de rester au premier niveau : un export des relevés, transmis à rythme fixe.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que chaque niveau permet de confier',
        blocs: [
          {
            liste: [
              "Sans accès : le rapprochement mensuel à partir des relevés, la préparation des pièces pour l’expert-comptable.",
              "En consultation : le pointage des règlements clients dès qu’ils arrivent, donc des relances qui ne partent pas vers quelqu’un qui a déjà payé.",
              "En préparation : la saisie des paiements fournisseurs à partir des factures que vous avez approuvées, pour une validation groupée de votre part.",
            ],
          },
          {
            paragraphes: [
              "Le troisième niveau n’a d’intérêt que si la séparation est réelle. Celle qui prépare ne valide pas ; celui qui valide regarde ce qu’il valide. Un lot signé sans être lu ne protège de rien.",
            ],
          },
        ],
      },
      {
        h2: 'Les garde-fous',
        blocs: [
          {
            liste: [
              "Tout nouveau bénéficiaire est vérifié par un contre-appel, à un numéro déjà connu.",
              "Les alertes de la banque arrivent sur votre téléphone, non sur le sien.",
              "L’accès figure dans le registre des accès, avec son niveau et sa date d’ouverture.",
              "Il est revu une fois par trimestre, et retiré le jour où la collaboration s’arrête.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Communiquer son identifiant et son code « pour aller plus vite ».",
      "Confier le moyen d’authentification forte : téléphone, boîtier, carte.",
      "Ouvrir un accès de préparation, puis valider les lots sans les ouvrir.",
    ],
    limites: [
      "Les profils d’utilisateurs, leurs droits et leur coût varient d’une banque à l’autre : seul votre conseiller peut vous dire ce que votre contrat permet.",
    ],
    faq: [
      {
        q: 'Un accès en consultation présente-t-il un risque ?',
        a: "Il n’expose pas l’argent, mais il expose de l’information : soldes, noms des clients et des fournisseurs, montants. Il relève donc de la confidentialité, et se donne à une personne liée par un engagement écrit.",
      },
      {
        q: 'Que faire si ma banque ne propose qu’un seul utilisateur ?',
        a: "Rester à la transmission des relevés, ou changer d’offre si le besoin le justifie. Partager l’unique identifiant vous ferait perdre la trace de qui a fait quoi. Relisez aussi ce que vos conditions bancaires prévoient au sujet des identifiants personnels.",
      },
      {
        q: 'Une assistante peut-elle préparer les salaires ou les charges ?',
        a: "Elle peut saisir un lot à partir d’éléments fournis par votre cabinet de paie ou votre expert-comptable. Le calcul leur appartient, la validation vous appartient.",
      },
    ],
    liens: [
      { href: '/guides/circuit-des-factures-fournisseurs', label: 'Le circuit des factures fournisseurs' },
      { href: '/guides/fraude-au-faux-rib-et-au-president', label: 'Fraude au faux RIB et au président' },
      { href: '/guides/registre-des-acces-entreprise', label: 'Tenir un registre des accès' },
      { href: '/guides/moyens-de-paiement-delegues', label: 'Payer pour vous sans votre carte' },
      { href: '/services/facturation', label: 'La prise en charge de la facturation' },
    ],
    cloture: 'Elle peut voir, elle peut préparer. Le dernier clic reste le vôtre.',
    ...lot('B'),
    cadrage: {
      intention: 'informationnelle',
      motCle: 'accès bancaire assistante',
      variantes: ['donner accès à sa banque en ligne à une assistante', 'accès consultation compte professionnel', 'déléguer la préparation des virements', 'profil utilisateur banque professionnelle'],
      persona: 'Dirigeant qui veut déléguer le suivi des encaissements sans ouvrir ses comptes',
      objectif: 'Faire choisir un niveau d’accès limité et exclure la validation',
      difference: 'Seule page consacrée à la banque : quatre niveaux d’accès, là où les autres guides ne traitent la question qu’en une réponse de FAQ',
    },
  },

  {
    slug: 'moyens-de-paiement-delegues',
    type: 'methode',
    dossier: CONFIDENTIALITE,
    categorie: 'Méthode',
    nom: 'Payer pour vous sans votre carte',
    title: 'Payer pour vous sans votre carte : les solutions · BrittAssist',
    description:
      "Réserver un train ou un hôtel suppose de payer. Quatre solutions pour qu’une assistante règle une dépense sans détenir votre carte, et les règles autour.",
    h1: 'Quand votre assistante doit payer pour vous : quatre solutions, sans donner votre carte.',
    lede:
      "Un billet de train, une chambre d’hôtel, un abonnement à renouveler : la délégation bute sur la dernière étape, celle du paiement. La mauvaise réponse est connue, et courante : dicter son numéro de carte. Il en existe quatre meilleures.",
    reponseCourte: [
      "Quatre solutions existent : vous payez sur un panier préparé, vous créez une carte virtuelle plafonnée, vous ouvrez une carte dédiée, ou la prestataire avance et refacture.",
      "Aucune ne suppose de communiquer le numéro de votre carte principale.",
      "Toute dépense a un plafond convenu et un justificatif classé le jour même.",
      "Chez BrittAssist, les frais engagés pour le client sont réglés par lui ou refacturés à l’euro près, sur justificatifs.",
    ],
    sections: [
      {
        h2: 'Les quatre solutions',
        blocs: [
          {
            tableau: {
              legende: 'Solutions de paiement pour une dépense déléguée',
              colonnes: ['Solution', 'Elle convient pour', 'Sa limite'],
              lignes: [
                ['Vous payez sur un panier préparé', 'Les dépenses rares ou importantes', 'Vous devez être disponible au moment de payer'],
                ['Une carte virtuelle, à usage unique ou plafonnée', 'Les réservations en ligne', 'Votre banque doit le proposer'],
                ['Une carte dédiée, au plafond bas', 'Les dépenses fréquentes et modestes', 'Une carte de plus à suivre et à retirer'],
                ['L’avance par la prestataire, puis refacturation', 'Les petits montants, ponctuels', 'Elle porte votre trésorerie : à réserver à l’exception'],
              ],
            },
          },
          {
            paragraphes: [
              "La première solution reste la plus sûre, et elle est moins contraignante qu’il n’y paraît : la recherche, la comparaison et la saisie sont faites, il ne vous reste qu’à confirmer. La deuxième est la plus souple quand elle est disponible, puisque la carte créée ne sert qu’une fois ou dans une limite fixée.",
            ],
          },
        ],
      },
      {
        h2: 'Les règles autour',
        blocs: [
          {
            liste: [
              "Un plafond : jusqu’à quel montant une dépense peut être engagée sans vous consulter.",
              "Un justificatif par dépense, nommé et classé le jour même.",
              "Un récapitulatif mensuel : date, objet, montant, moyen de paiement.",
              "Aucun numéro de carte transmis par message, par e-mail ou par téléphone.",
            ],
          },
          {
            paragraphes: [
              "Le plafond est la règle qui rend la délégation utilisable. Sans lui, chaque billet de train vous revient pour accord, et vous avez seulement ajouté un intermédiaire.",
            ],
          },
        ],
      },
      {
        h2: 'Le cas des abonnements',
        blocs: [
          {
            paragraphes: [
              "Un abonnement souscrit pour vous doit l’être avec un moyen de paiement qui vous appartient, sur un compte ouvert à votre nom ou à celui de l’entreprise. S’il est réglé par la carte de la prestataire, ou rattaché à son adresse, la fin de la collaboration devient la fin du service : nom de domaine, logiciel, stockage. C’est une dépendance qui ne se voit que le jour où elle coûte.",
            ],
          },
        ],
      },
      {
        h2: 'Quand la prestataire avance les frais',
        blocs: [
          {
            paragraphes: [
              "L’avance de frais rend service pour une petite dépense imprévue. Elle n’est pas un mode de fonctionnement : une indépendante n’a pas à financer vos déplacements. Les conditions générales de BrittAssist prévoient que les frais engagés pour le compte du client — réservations, achats, prestations de tiers — sont réglés par le client ou refacturés à l’euro près, sur justificatifs.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Dicter son numéro de carte, puis l’oublier dans un fil de messages.",
      "Laisser un abonnement se souscrire avec la carte de quelqu’un d’autre.",
      "Refaire valider chaque dépense, faute de plafond.",
    ],
    limites: [
      "Les cartes virtuelles et les cartes supplémentaires dépendent de votre banque et de votre contrat : toutes ne les proposent pas.",
      "Le traitement comptable des frais refacturés se voit avec votre expert-comptable.",
    ],
    faq: [
      {
        q: 'Que faire quand un site exige un code reçu par SMS ?',
        a: "C’est la validation qui vous revient, et elle doit le rester. Soit vous payez vous-même sur le panier préparé, soit vous utilisez une carte virtuelle que vous avez générée. Transférer le code revient à transférer la validation.",
      },
      {
        q: 'L’avance de frais par la prestataire est-elle une bonne idée ?',
        a: "Pour une dépense isolée et modeste, oui. Comme règle, non : elle fait porter votre trésorerie par une petite entreprise, et allonge le circuit des justificatifs.",
      },
      {
        q: 'Comment sont justifiées les dépenses engagées pour moi ?',
        a: "Par la pièce d’origine — facture, confirmation de réservation — jointe au récapitulatif. Une refacturation à l’euro près, sur justificatifs, signifie qu’aucune marge n’est ajoutée et que chaque ligne se vérifie.",
      },
    ],
    liens: [
      { href: '/guides/niveaux-d-autonomie-delegation', label: 'Les niveaux d’autonomie' },
      { href: '/guides/notes-de-frais-justificatifs', label: 'Tenir ses notes de frais' },
      { href: '/guides/double-authentification-et-delegation', label: 'Double authentification et délégation' },
      { href: '/guides/acces-bancaire-pour-son-assistante', label: 'Quel accès bancaire donner à son assistante' },
      { href: '/services/reservations', label: 'La prise en charge de vos réservations' },
    ],
    cloture: 'Déléguer une réservation ne demande pas de confier sa carte. Seulement de décider qui clique en dernier.',
    ...lot('B'),
    cadrage: {
      intention: 'méthode',
      motCle: 'carte bancaire pour son assistante',
      variantes: ['carte virtuelle pour assistante', 'avance de frais prestataire refacturation', 'moyen de paiement délégué entreprise', 'réservations payées par une assistante'],
      persona: 'Dirigeant qui fait réserver déplacements et achats par une assistante',
      objectif: 'Faire choisir un moyen de paiement délégué et fixer un plafond',
      difference: 'Traite la dépense engagée pour le compte du dirigeant ; la page sur l’accès bancaire traite la consultation et les virements',
    },
  },

  {
    slug: 'delegations-aupres-des-organismes',
    type: 'guide',
    dossier: CONFIDENTIALITE,
    categorie: 'Comprendre',
    nom: 'Impôts, Urssaf, La Poste : les délégations officielles',
    title: 'Impôts, Urssaf, La Poste : déléguer sans mot de passe · BrittAssist',
    description:
      "Espace professionnel des impôts, compte Urssaf, recommandés à La Poste : les délégations prévues par chaque organisme, à utiliser à la place du mot de passe.",
    h1: 'Impôts, Urssaf, La Poste : les délégations officielles, à la place du mot de passe.',
    lede:
      "Télécharger une attestation, retirer un recommandé, suivre un dossier : ces gestes se confient volontiers. On les confie trop souvent en donnant son identifiant. Les organismes ont pourtant prévu autre chose : un tiers qui agit sous son propre nom, avec des droits que vous avez choisis.",
    reponseCourte: [
      "Les principaux organismes prévoient qu’un tiers agisse pour vous sans utiliser vos identifiants.",
      "Sur impots.gouv.fr, l’espace professionnel permet de désigner un administrateur suppléant ou des délégataires, service par service.",
      "L’Urssaf demande de ne pas partager ses identifiants, et met un tableau de bord à la disposition des tiers déclarants.",
      "À La Poste, une procuration permet à une personne désignée de recevoir ou de retirer vos recommandés.",
    ],
    sections: [
      {
        h2: 'Le principe',
        blocs: [
          {
            paragraphes: [
              "Un identifiant partagé fait de l’autre personne vous-même aux yeux du service : mêmes droits, aucune trace distincte, et un mot de passe à changer le jour où la collaboration s’arrête. Une délégation fait l’inverse. Elle donne des droits choisis, à une personne nommée, et se retire sans rien changer d’autre.",
              "Avant de transmettre un code, cherchez donc dans le service les mots « délégation », « habilitation », « procuration » ou « tiers ». Ils existent plus souvent qu’on ne le croit.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que prévoient trois organismes',
        blocs: [
          {
            tableau: {
              legende: 'Délégations prévues par trois organismes',
              colonnes: ['Organisme', 'Ce qui existe', 'Ce qu’il faut savoir'],
              lignes: [
                ['Impôts — espace professionnel', 'Administrateur suppléant et délégataires, désignés par l’administrateur titulaire', 'La personne désignée doit avoir créé son propre espace professionnel'],
                ['Urssaf', 'Un tableau de bord réservé aux tiers déclarants', 'L’Urssaf demande de ne pas partager ses identifiants'],
                ['La Poste', 'Une procuration au bénéfice de mandataires désignés', 'Elle est établie par le représentant légal, et se résilie à tout moment'],
              ],
            },
          },
          {
            paragraphes: [
              "Sur l’espace professionnel des impôts, les droits se règlent finement. Un délégataire reçoit un rôle : celui d’acteur lui permet seulement d’utiliser le service ; l’acteur délégant peut, en plus, désigner d’autres acteurs. Ni l’un ni l’autre ne peut modifier les coordonnées bancaires ou l’adresse électronique de l’entreprise.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qu’on peut confier, et ce qu’on ne confie pas',
        blocs: [
          {
            tableau: {
              legende: 'Répartition des gestes auprès des organismes',
              colonnes: ['Geste', 'Qui'],
              lignes: [
                ['Télécharger une attestation à jour', 'L’assistante, par délégation'],
                ['Relever la messagerie d’un espace en ligne', 'L’assistante, par délégation'],
                ['Retirer un recommandé', 'Une personne sur place, par procuration'],
                ['Établir et déposer une déclaration', 'Vous, ou votre expert-comptable'],
                ['Modifier un moyen de paiement', 'Vous'],
              ],
            },
          },
          {
            paragraphes: [
              "La frontière suit celle du métier. BrittAssist ne réalise ni déclarations fiscales ni déclarations sociales : ces actes relèvent de votre cabinet. Ce qui se confie, c’est la surveillance et la collecte — savoir qu’un message est arrivé, obtenir la pièce qu’on vous réclame.",
            ],
          },
        ],
      },
      {
        h2: 'Mettre les délégations en ordre',
        blocs: [
          {
            etapes: [
              "Listez les espaces en ligne de l’entreprise : impôts, Urssaf, caisses, banque, opérateurs.",
              "Pour chacun, regardez si une délégation existe, et qui la détient déjà.",
              "Retirez celles qui datent d’une collaboration terminée.",
              "Ouvrez celles qui sont utiles, au niveau de droits le plus bas qui suffit.",
              "Inscrivez-les au registre des accès, avec leur date.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Donner l’identifiant du dirigeant parce que la délégation « est compliquée à mettre en place ».",
      "Laisser en place les délégations d’un ancien cabinet ou d’un ancien salarié.",
      "Ouvrir des droits de déclaration à quelqu’un dont ce n’est pas le rôle.",
    ],
    limites: [
      "Les fonctions de délégation évoluent : la page de chaque organisme, citée en référence, fait foi.",
      "Une procuration postale suppose une personne qui se rend sur place : une assistante à distance ne retire pas un recommandé.",
    ],
    faq: [
      {
        q: 'Mon assistante doit-elle avoir son propre espace sur le site des impôts ?',
        a: "Oui, c’est la condition posée par l’administration : la personne à qui vous donnez accès doit au préalable avoir créé son propre espace professionnel. Vous lui attribuez ensuite des droits sur les services choisis.",
      },
      {
        q: 'Une délégation lui permet-elle de faire mes déclarations ?',
        a: "Techniquement, certains droits le permettraient. Ce n’est pas ce qu’on lui confie : une déclaration engage votre responsabilité et relève de votre expert-comptable. Limitez les droits à la consultation et aux attestations.",
      },
      {
        q: 'Comment retirer une délégation ?',
        a: "Depuis le même écran que celui qui a servi à l’ouvrir. C’est tout l’intérêt : vous retirez un droit, sans changer un mot de passe ni prévenir personne d’autre.",
      },
    ],
    liens: [
      { href: '/guides/delegation-d-acces-messagerie-et-agenda', label: 'La délégation de messagerie et d’agenda' },
      { href: '/guides/partager-un-mot-de-passe-en-securite', label: 'Partager un accès sans partager son mot de passe' },
      { href: '/guides/registre-des-acces-entreprise', label: 'Tenir un registre des accès' },
      { href: '/guides/dossier-permanent-entreprise', label: 'Constituer le dossier permanent' },
      { href: '/services/gestion-administrative', label: 'La prise en charge administrative' },
    ],
    sources: [SOURCE_IMPOTS_DELEGATION, SOURCE_URSSAF_TIERS, SOURCE_LAPOSTE_PROCURATION],
    cloture: 'Un mot de passe donné fait de l’autre vous-même. Une délégation en fait quelqu’un que vous avez autorisé.',
    ...lot('C'),
    cadrage: {
      intention: 'informationnelle',
      motCle: 'délégation espace professionnel impots.gouv',
      variantes: ['donner procuration à son assistante', 'déléguer l’accès à son compte Urssaf', 'procuration La Poste entreprise recommandé', 'accès espace en ligne administration tiers'],
      persona: 'Dirigeant qui partage ses identifiants d’espaces administratifs faute de connaître les délégations',
      objectif: 'Faire remplacer le partage d’identifiant par la délégation prévue par chaque organisme',
      difference: 'Traite les espaces des administrations et La Poste ; la page sur la délégation existante ne couvre que la messagerie et l’agenda',
    },
  },

  {
    slug: 'sous-traitance-par-son-assistante',
    type: 'guide',
    dossier: CONFIDENTIALITE,
    categorie: 'Comprendre',
    nom: 'Votre assistante peut-elle sous-traiter ?',
    title: 'Votre assistante peut-elle sous-traiter votre travail ? · BrittAssist',
    description:
      "Relais pendant un congé, renfort lors d’un pic, tâche confiée à une consœur : ce que le contrat doit prévoir pour que vous sachiez qui travaille sur vos dossiers.",
    h1: 'Votre assistante indépendante peut-elle sous-traiter ? Ce que le contrat doit dire.',
    lede:
      "Vous avez choisi une personne. Rien ne garantit, si le contrat est muet, que ce soit toujours elle qui ouvre vos dossiers. Se faire aider n’a rien d’illégitime pour une prestataire ; ne pas vous le dire en a.",
    reponseCourte: [
      "Une prestataire peut se faire aider, à condition que vous le sachiez et que vous l’ayez accepté.",
      "Pour les données personnelles, la règle est écrite : un sous-traitant ne recourt à un autre sous-traitant qu’avec l’autorisation écrite du responsable du traitement.",
      "Le contrat doit dire qui peut intervenir, avec quels accès et sous quels engagements.",
      "Chez BrittAssist, un besoin hors périmètre donne lieu à une orientation vers un partenaire, avec lequel le client contracte directement.",
    ],
    sections: [
      {
        h2: 'Trois situations',
        blocs: [
          {
            tableau: {
              legende: 'Quand une autre personne intervient',
              colonnes: ['Situation', 'Ce qui se passe', 'Ce qu’il faut régler'],
              lignes: [
                ['Un relais pendant une absence', 'Une consœur traite les urgences', 'Son identité, ses accès, sa confidentialité'],
                ['Un renfort lors d’un pic', 'Une partie du travail est confiée à un tiers', 'Votre accord préalable, et qui répond du résultat'],
                ['Une compétence qu’elle n’a pas', 'Elle vous oriente vers un spécialiste', 'Un contrat direct entre vous et lui'],
              ],
            },
          },
          {
            paragraphes: [
              "Les deux premières situations sont de la sous-traitance : le travail reste commandé à votre prestataire, et exécuté en partie par quelqu’un d’autre. La troisième n’en est pas : chacun a son propre contrat avec vous.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que disent les règles sur les données',
        blocs: [
          {
            paragraphes: [
              "Dès que des données personnelles sont en jeu — votre fichier clients, votre messagerie —, la CNIL rappelle une règle simple : le sous-traitant ne peut recruter un autre sous-traitant que sur autorisation écrite du responsable du traitement. Autrement dit, votre assistante ne peut pas ouvrir vos données à une tierce personne sans que vous l’ayez autorisé par écrit, et ce tiers doit offrir les mêmes garanties qu’elle.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que le contrat doit prévoir',
        blocs: [
          {
            liste: [
              "Le principe : sous-traitance interdite, ou possible avec votre accord écrit préalable.",
              "L’identité de la personne qui peut intervenir, quand elle est connue.",
              "Les mêmes engagements de confidentialité, pris par écrit.",
              "Des accès propres : aucun identifiant prêté.",
              "La responsabilité : votre prestataire reste votre interlocutrice, et répond du travail rendu.",
              "La fin de l’intervention : retrait des accès, restitution des documents.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que publie BrittAssist',
        blocs: [
          {
            paragraphes: [
              "Le site présente un interlocuteur unique : Brittany Dreano. Les conditions générales traitent le cas d’un besoin qui dépasse son périmètre : elle peut alors orienter le client vers un partenaire de confiance, et la relation contractuelle se noue directement entre le client et ce partenaire, selon les conditions de ce dernier. Elle peut en assurer la coordination, sans se substituer à lui.",
              "C’est le troisième cas du tableau : un contrat direct, et non une sous-traitance.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Signer un contrat qui ne dit rien de la sous-traitance, en supposant qu’il n’y en aura pas.",
      "Accepter un relais sans savoir qui il est.",
      "Laisser deux personnes se partager un même identifiant.",
    ],
    limites: [
      "Cette page ne traite pas des règles propres à la sous-traitance dans le bâtiment ou dans les marchés publics, qui obéissent à des textes particuliers.",
    ],
    faq: [
      {
        q: 'Comment savoir si mon travail est sous-traité ?',
        a: "En posant la question, et en lisant le contrat. Des retours d’un style différent, des horaires inhabituels ou une méconnaissance soudaine du contexte sont des indices ; aucun ne vaut une réponse écrite.",
      },
      {
        q: 'Un relais pendant les congés est-il une sous-traitance ?',
        a: "Oui, s’il accède à vos outils et traite vos demandes. Il se décide donc avec vous : qui, pour quoi, avec quels accès, et pour combien de temps.",
      },
      {
        q: 'Puis-je refuser toute sous-traitance ?',
        a: "Oui : il suffit de l’écrire. Vous acceptez alors que rien ne soit traité pendant les absences de votre prestataire, hors ce que vous aurez organisé vous-même.",
      },
    ],
    liens: [
      { href: '/guides/contrat-de-prestation-assistante-independante', label: 'Le contrat de prestation avec une assistante' },
      { href: '/guides/confidentialite-assistante-externalisee', label: 'Confidentialité et accès à distance' },
      { href: '/guides/absence-de-son-assistante-independante', label: 'Le relais pendant une absence' },
      { href: '/guides/rgpd-sous-traitance-assistante-externalisee', label: 'Les huit engagements de l’accord RGPD' },
      { href: '/guides/assistante-virtuelle-ou-private-office', label: 'Assistante virtuelle ou Private Office' },
      { href: '/private-office', label: 'Le fonctionnement d’un Private Office' },
    ],
    sources: [SOURCE_CNIL_BONNES_PRATIQUES, SOURCE_CNIL_SOUS_TRAITANCE],
    cloture: 'Vous avez choisi une personne. Le contrat doit dire si c’est toujours elle.',
    ...lot('D'),
    cadrage: {
      intention: 'informationnelle',
      motCle: 'assistante indépendante sous-traitance',
      variantes: ['secrétaire indépendante qui sous-traite', 'sous-traitance prestation de secrétariat', 'qui fait réellement le travail assistante externalisée', 'clause de sous-traitance prestataire administratif'],
      persona: 'Dirigeant qui veut savoir qui travaille réellement sur ses dossiers',
      objectif: 'Faire prévoir par contrat les conditions d’intervention d’un tiers',
      difference: 'Traite la sous-traitance décidée par la prestataire, question que ni le guide sur le contrat ni celui sur la confidentialité ne posent',
    },
  },

  {
    slug: 'dirigeant-indisponible-du-jour-au-lendemain',
    type: 'situation',
    dossier: SITUATIONS,
    categorie: 'Situation',
    nom: 'Dirigeant indisponible du jour au lendemain',
    title: 'Dirigeant indisponible du jour au lendemain : anticiper · BrittAssist',
    description:
      "Hospitalisation, accident : ce que l’entreprise doit pouvoir faire sans son dirigeant pendant trente jours. Le dossier d’urgence d’une page, et ses limites.",
    h1: 'Hospitalisé, injoignable : ce que l’entreprise doit pouvoir faire sans vous.',
    lede:
      "On prépare ses congés. On ne prépare pas son hospitalisation. Dans une petite entreprise, une absence soudaine du dirigeant arrête d’abord les choses simples : personne ne sait quelles échéances tombent, ni où se trouve le contrat d’assurance, ni qui appeler. Une page préparée à l’avance répond à ces trois questions.",
    reponseCourte: [
      "La continuité repose sur deux étages : un dossier pratique, que vous pouvez préparer seul, et des pouvoirs juridiques, qui se règlent avec un professionnel du droit.",
      "Le dossier d’urgence tient en une page : qui prévenir, quelles échéances dans les trente jours, où sont les accès, qui peut signer quoi.",
      "Une assistante peut le tenir à jour et l’appliquer ; elle ne peut ni payer ni signer à votre place.",
      "Un dossier jamais ouvert par quelqu’un d’autre que vous n’est pas un dossier d’urgence.",
    ],
    sections: [
      {
        h2: 'Le dossier d’urgence, en une page',
        blocs: [
          {
            modele: {
              titre: 'Dossier d’urgence du dirigeant',
              lignes: [
                "Qui prévenir d’abord : associé ou proche, expert-comptable, banque, assureur — nom et téléphone.",
                "Les échéances des trente prochains jours : salaires, charges, loyers, remboursements — et où se trouve l’échéancier.",
                "Les accès : où se trouve le gestionnaire de mots de passe, et qui détient l’accès de secours.",
                "Les pouvoirs existants : qui peut signer quoi, quelles procurations sont en place à la banque.",
                "Les affaires en cours : clients, chantiers ou dossiers ouverts, et qui les suit.",
                "Les contrats utiles : assurances, prévoyance, et le nom de l’interlocuteur.",
              ],
            },
          },
        ],
      },
      {
        h2: 'L’étage pratique et l’étage juridique',
        blocs: [
          {
            paragraphes: [
              "Le dossier dit quoi faire. Il ne donne à personne le droit de le faire. Payer un fournisseur, signer un contrat, représenter la société supposent un pouvoir : une procuration bancaire, une délégation de pouvoirs, un cogérant, ou, pour les situations graves, des dispositifs comme le mandat de protection future, par lequel une personne désigne à l’avance qui veillera sur ses intérêts si elle ne le peut plus.",
              "Ces dispositifs existent, et aucun n’est automatique : votre conjoint n’a pas, de ce seul fait, qualité pour agir au nom de l’entreprise. Les choisir relève d’un avocat ou d’un notaire, avec votre expert-comptable. Le dossier d’urgence, lui, se prépare dès cette semaine.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qu’une assistante peut tenir',
        blocs: [
          {
            tableau: {
              legende: 'Rôle d’une assistante en cas d’indisponibilité du dirigeant',
              colonnes: ['Elle peut', 'Elle ne peut pas'],
              lignes: [
                ['Tenir le dossier à jour, mois après mois', 'Signer à votre place'],
                ['Prévenir les personnes de la liste', 'Valider un paiement'],
                ['Reporter les rendez-vous et informer les interlocuteurs', 'Prendre une décision qui engage l’entreprise'],
                ['Signaler les échéances à la personne qui a pouvoir', 'Se substituer à votre conseil'],
              ],
            },
          },
          {
            paragraphes: [
              "Son rôle est d’éviter que le silence s’installe : un client prévenu attend, un client sans nouvelles s’inquiète.",
            ],
          },
        ],
      },
      {
        h2: 'Le tester',
        blocs: [
          {
            paragraphes: [
              "Une fois par an, donnez le dossier à la personne censée s’en servir, et demandez-lui ce qu’elle ferait le premier matin. Ses questions sont la liste de ce qui manque. L’exercice dure une demi-heure, et c’est le seul moyen de savoir si la page fonctionne sans vous — ce qui est son unique raison d’être.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Garder le dossier dans un espace que vous seul pouvez ouvrir.",
      "Y inscrire des mots de passe en clair, au lieu de dire où ils se trouvent.",
      "Le rédiger une fois, et ne jamais le mettre à jour.",
    ],
    limites: [
      "Cette page ne traite pas des pouvoirs juridiques, ni de la transmission de l’entreprise. Ces sujets relèvent d’un avocat, d’un notaire et de votre expert-comptable.",
    ],
    faq: [
      {
        q: 'Mon conjoint peut-il gérer l’entreprise à ma place ?',
        a: "Pas du seul fait qu’il est votre conjoint. Il lui faut un pouvoir, donné à l’avance ou obtenu ensuite par une procédure. C’est la question à poser à un avocat ou à un notaire tant que tout va bien.",
      },
      {
        q: 'Une assistante peut-elle payer les salaires si je suis hospitalisé ?',
        a: "Non, pas sans pouvoir bancaire, et ce n’est pas son rôle. Elle peut préparer le lot à partir des éléments du cabinet de paie, et alerter la personne habilitée à le valider.",
      },
      {
        q: 'Où ranger le dossier d’urgence ?',
        a: "Dans un espace partagé auquel la personne de confiance a accès, et en version papier chez elle si vous le souhaitez. Jamais uniquement sur votre ordinateur ou dans votre messagerie.",
      },
    ],
    liens: [
      { href: '/guides/preparer-son-absence', label: 'Préparer une absence prévue' },
      { href: '/guides/echeancier-administratif-entreprise', label: 'Construire son échéancier administratif' },
      { href: '/guides/registre-des-acces-entreprise', label: 'Tenir un registre des accès' },
      { href: '/guides/partager-un-mot-de-passe-en-securite', label: 'Partager un accès sans partager son mot de passe' },
      { href: '/services/gestion-administrative', label: 'La prise en charge administrative' },
    ],
    sources: [SOURCE_MANDAT_PROTECTION],
    cloture: 'Ce dossier ne sert qu’une fois. C’est pour cela qu’il faut qu’il serve.',
    ...lot('C'),
    cadrage: {
      intention: 'problème-solution',
      motCle: 'dirigeant indisponible continuité de l’entreprise',
      variantes: ['dirigeant hospitalisé que faire entreprise', 'absence imprévue du chef d’entreprise', 'dossier d’urgence dirigeant', 'qui gère l’entreprise si le dirigeant est empêché'],
      persona: 'Dirigeant de TPE dont l’entreprise repose sur lui seul',
      objectif: 'Faire préparer un dossier d’urgence d’une page et identifier les pouvoirs à régler avec un conseil',
      difference: 'Traite l’absence soudaine et subie ; la page sur les congés traite l’absence choisie et préparée',
    },
  },

  {
    slug: 'conjoint-qui-fait-l-administratif',
    type: 'reference',
    dossier: SITUATIONS,
    categorie: 'Repère',
    nom: 'Quand le conjoint tient l’administratif',
    title: 'Votre conjoint fait l’administratif : statut, relais · BrittAssist',
    description:
      "Le conjoint qui travaille régulièrement dans l’entreprise doit avoir un statut : collaborateur, associé ou salarié. La règle, et la question de la charge.",
    h1: 'Quand le conjoint tient l’administratif : le statut à choisir, et la charge à partager.',
    lede:
      "Dans beaucoup d’entreprises artisanales, l’administratif a un nom : celui du conjoint. Devis le soir, factures le dimanche, relances entre deux autres obligations. Cette organisation pose deux questions distinctes. La première est juridique, et elle a une réponse précise. La seconde est celle de la charge, et elle se pose rarement à voix haute.",
    reponseCourte: [
      "Le conjoint marié, pacsé ou en concubinage qui travaille activement et régulièrement dans l’entreprise doit choisir un statut : collaborateur, associé ou salarié.",
      "Le statut de conjoint collaborateur est limité à cinq ans ; au terme, le conjoint collaborateur déclaré passe automatiquement au statut de conjoint salarié.",
      "Le conjoint qui travaille dans l’entreprise sans rémunération et sans avoir été déclaré est automatiquement considéré comme conjoint salarié.",
      "Indépendamment du statut, une partie de ce travail peut être confiée à l’extérieur : émission des factures, relances, classement, pièces.",
    ],
    sections: [
      {
        h2: 'La règle',
        blocs: [
          {
            paragraphes: [
              "Service-Public la résume ainsi : la personne mariée, pacsée ou en concubinage avec un chef d’entreprise, qui travaille activement et de façon régulière dans l’entreprise, doit choisir entre trois statuts. La déclaration se fait auprès du guichet des formalités des entreprises.",
            ],
          },
          {
            tableau: {
              legende: 'Les trois statuts du conjoint, en bref',
              colonnes: ['Statut', 'Condition principale', 'À voir avec'],
              lignes: [
                ['Conjoint collaborateur', 'Ne pas être rémunéré, ne pas être associé ; cinq ans au plus', 'Votre expert-comptable'],
                ['Conjoint associé', 'Détenir des parts sociales de l’entreprise', 'Votre expert-comptable ou votre avocat'],
                ['Conjoint salarié', 'Un contrat de travail, et un salaire au moins égal au Smic', 'Votre cabinet de paie'],
              ],
            },
          },
          {
            paragraphes: [
              "Chaque statut emporte une protection sociale et un coût différents. Le choix dépend de la forme de l’entreprise, du régime matrimonial et de la situation de chacun : il ne se fait pas sur un tableau.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qui se passe sans déclaration, et au bout de cinq ans',
        blocs: [
          {
            paragraphes: [
              "Deux automatismes sont à connaître. Le conjoint qui n’est déclaré sous aucun des trois statuts, et qui travaille dans l’entreprise sans percevoir de rémunération, est automatiquement considéré comme conjoint salarié. Et le conjoint collaborateur déclaré bascule, au bout de cinq ans, dans le statut de conjoint salarié s’il n’a pas fait d’autre choix.",
              "Dans les deux cas, il vaut mieux décider que subir. Si votre conjoint tient vos papiers depuis des années sans que la question ait été posée, c’est le premier sujet à porter chez votre expert-comptable.",
            ],
          },
        ],
      },
      {
        h2: 'La charge, au-delà du statut',
        blocs: [
          {
            paragraphes: [
              "Un statut règle la situation juridique. Il ne règle pas la fatigue. Faites la liste, à deux, de ce que votre conjoint fait réellement en un mois.",
            ],
            tableau: {
              legende: 'Répartir ce que fait le conjoint',
              colonnes: ['Ce qui peut sortir', 'Ce qui reste, parce que la connaissance est là'],
              lignes: [
                ['Mise en forme et envoi des devis à partir des prix', 'Le chiffrage, quand le conjoint le fait'],
                ['Émission des factures, suivi des encaissements, relances', 'La relation avec les clients de longue date'],
                ['Classement, pièces pour le comptable, attestations à jour', 'Les décisions sur les paiements'],
                ['Suivi des échéances et des contrats', 'Tout ce que vous décidez à deux'],
              ],
            },
          },
          {
            paragraphes: [
              "Externaliser une part de ce travail ne retire rien au conjoint. Cela lui rend ses soirées, et lui laisse ce que personne d’autre ne sait faire.",
            ],
          },
        ],
      },
      {
        h2: 'Organiser le relais',
        blocs: [
          {
            etapes: [
              "Écrire ce qui est fait aujourd’hui, par tâche et par rythme.",
              "Choisir ce qui sort en premier : en général, ce qui est régulier et bien défini.",
              "Faire transmettre par le conjoint lui-même : c’est lui qui sait.",
              "Garder un point régulier à trois pendant les premiers mois.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Considérer que « donner un coup de main » dispense de toute déclaration, quand le travail est régulier.",
      "Laisser passer l’échéance des cinq ans sans avoir fait de choix.",
      "Externaliser sans associer le conjoint, qui détient toute la mémoire.",
    ],
    limites: [
      "BrittAssist ne donne pas de conseil sur le statut du conjoint. Ce choix, et ses conséquences sociales et fiscales, relèvent de votre expert-comptable.",
    ],
    faq: [
      {
        q: 'Mon conjoint m’aide quelques heures par mois : faut-il un statut ?',
        a: "La fiche officielle vise le travail actif et régulier. Où passe la limite dans votre situation, c’est une question pour votre expert-comptable, à qui il faut décrire ce qui est fait réellement.",
      },
      {
        q: 'Que se passe-t-il au bout de cinq ans de statut collaborateur ?',
        a: "Selon Service-Public, le conjoint collaborateur déclaré passe automatiquement au statut de conjoint salarié. Mieux vaut anticiper cette échéance et choisir en connaissance de cause.",
      },
      {
        q: 'Externaliser fait-il perdre la main au conjoint ?',
        a: "Non, si la répartition est écrite. Le conjoint garde ce qui demande sa connaissance de l’entreprise et des clients ; ce qui est répétitif part. Beaucoup y gagnent de pouvoir s’occuper de ce qui les intéressait.",
      },
    ],
    liens: [
      { href: '/assistante/artisans-btp', label: 'L’assistance pour les entreprises du bâtiment' },
      { href: '/guides/devis-factures-relances', label: 'Devis, factures et relances : le circuit complet' },
      { href: '/guides/quelles-taches-deleguer-a-une-assistante', label: 'Quelles tâches déléguer à une assistante' },
      { href: '/guides/premiere-embauche-formalites-administratives', label: 'Embaucher : l’administratif à prévoir' },
      { href: '/services/gestion-administrative', label: 'La prise en charge administrative' },
    ],
    sources: [SOURCE_SP_CONJOINT, SOURCE_URSSAF_CONJOINT],
    cloture: 'Le statut protège le conjoint. Partager la charge, c’est ce qui lui rend ses soirées.',
    ...lot('C'),
    cadrage: {
      intention: 'référence',
      motCle: 'conjoint qui fait l’administratif de l’entreprise',
      variantes: ['statut du conjoint qui travaille dans l’entreprise', 'conjoint collaborateur cinq ans', 'ma femme fait mes papiers d’entreprise statut', 'soulager son conjoint de l’administratif'],
      persona: 'Artisan ou dirigeant de TPE dont le conjoint tient l’administratif',
      objectif: 'Rappeler l’obligation de statut, puis faire répartir la charge',
      difference: 'Seule page écrite pour le couple qui tient l’entreprise à deux : elle lie la règle du statut à la question de la charge',
    },
  },

  {
    slug: 'controle-urssaf-preparer-les-pieces',
    type: 'situation',
    dossier: SITUATIONS,
    categorie: 'Situation',
    nom: 'Contrôle Urssaf : préparer les pièces',
    title: 'Contrôle Urssaf : préparer les pièces demandées · BrittAssist',
    description:
      "L’avis de contrôle arrive au moins trente jours avant la visite, avec la liste des documents. Le calendrier pour les réunir, et la répartition des rôles.",
    h1: 'Avis de contrôle Urssaf : trente jours pour réunir les pièces.',
    lede:
      "Un contrôle Urssaf n’est pas une accusation. C’est la contrepartie d’un système déclaratif. Il devient éprouvant pour une raison précise : il porte sur plusieurs années, et les pièces demandées sont rarement au même endroit. L’avis de contrôle vous laisse un mois. Voici comment l’employer.",
    reponseCourte: [
      "Pour un contrôle sur place, l’avis de contrôle est adressé au moins trente jours avant la visite de l’inspecteur.",
      "Il contient la liste des documents à préparer ; le contrôle remonte sur trois années civiles.",
      "Vous pouvez vous faire assister par votre conseil juridique ou votre cabinet comptable, pour la préparation comme pendant le contrôle.",
      "La réunion des pièces se délègue ; les réponses à l’inspecteur ne se délèguent pas.",
    ],
    sections: [
      {
        h2: 'Les trente jours',
        blocs: [
          {
            etapes: [
              "Le jour de la réception : prévenez votre expert-comptable et votre cabinet de paie, vérifiez la date et le lieu indiqués.",
              "La première semaine : transformez la liste de l’avis en tableau — pièce, année, emplacement, personne qui la détient, état.",
              "Les deux semaines suivantes : réunissez les pièces, année par année. Ce qui se trouve chez un tiers se demande dès le premier jour.",
              "La dernière semaine : relisez le dossier avec votre cabinet, et préparez un lieu de travail pour l’inspecteur.",
            ],
          },
          {
            paragraphes: [
              "L’Urssaf précise que la liste jointe à l’avis est une liste standard : certaines appellations peuvent ne pas correspondre à votre situation. Un message à l’inspecteur pour clarifier une demande est prévu, et bien perçu. Si la date ne convient pas ou si l’adresse est inexacte, il se contacte de la même façon.",
            ],
          },
        ],
      },
      {
        h2: 'Le tableau des pièces',
        blocs: [
          {
            tableau: {
              legende: 'Suivi des pièces demandées par l’avis de contrôle',
              colonnes: ['Colonne', 'À quoi elle sert'],
              lignes: [
                ['Pièce demandée', 'Reprendre l’intitulé exact de l’avis'],
                ['Année', 'Une ligne par année contrôlée'],
                ['Où elle se trouve', 'Espace partagé, logiciel, cabinet, archives papier'],
                ['Qui la détient', 'Vous, le cabinet comptable, le cabinet de paie, un ancien prestataire'],
                ['État', 'À demander, demandée, reçue, vérifiée'],
              ],
            },
          },
          {
            paragraphes: [
              "Ce tableau est le seul outil dont vous ayez besoin. Il montre chaque matin ce qui manque, et à qui le demander.",
            ],
          },
        ],
      },
      {
        h2: 'Qui fait quoi',
        blocs: [
          {
            tableau: {
              legende: 'Répartition des rôles pendant la préparation',
              colonnes: ['Qui', 'Son rôle'],
              lignes: [
                ['Le dirigeant', 'Répond à l’inspecteur, décide, signe'],
                ['Le cabinet comptable ou de paie', 'Explique les déclarations, assiste au contrôle si vous le souhaitez'],
                ['L’assistante', 'Tient le tableau, réunit et classe les pièces, relance les tiers'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Après la visite',
        blocs: [
          {
            paragraphes: [
              "Le contrôle se conclut par un entretien de restitution, puis par une lettre d’observations qui expose les constats de l’inspecteur. Vous disposez alors de trente jours pour y répondre par écrit. Cette réponse se prépare avec votre conseil : c’est un échange contradictoire, dont les termes comptent.",
              "Gardez le dossier constitué. Classé par année, il est devenu le meilleur état de vos archives sociales, et il vous évitera de recommencer la prochaine fois qu’une pièce vous sera demandée.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Attendre la troisième semaine pour réclamer une pièce à un ancien prestataire.",
      "Reconstituer après coup un document qui n’existe pas.",
      "Laisser l’inspecteur chercher lui-même dans des classeurs en désordre.",
    ],
    limites: [
      "Cette page traite la préparation matérielle d’un contrôle sur place. Vos droits et obligations figurent dans la charte du cotisant contrôlé, à laquelle renvoie l’Urssaf. Le fond du contrôle relève de votre expert-comptable ou de votre avocat.",
    ],
    faq: [
      {
        q: 'Peut-on demander à déplacer la date d’un contrôle Urssaf ?',
        a: "L’Urssaf invite à contacter l’inspecteur en cas d’indisponibilité à la date fixée. Faites-le dès la réception de l’avis, par écrit.",
      },
      {
        q: 'Une assistante peut-elle être l’interlocutrice de l’inspecteur ?',
        a: "Pour la logistique — transmettre une pièce, convenir d’un horaire —, oui. Pour les réponses sur le fond, non : elles engagent l’entreprise et reviennent au dirigeant, assisté de son cabinet.",
      },
      {
        q: 'Que faire d’une pièce introuvable avant un contrôle ?',
        a: "Le signaler à votre cabinet tout de suite, et chercher qui d’autre pourrait en détenir une copie : l’organisme émetteur, un ancien prestataire, la banque. Ne fabriquez jamais un document après coup.",
      },
    ],
    liens: [
      { href: '/guides/duree-de-conservation-documents-entreprise', label: 'Combien de temps conserver les documents' },
      { href: '/guides/arborescence-dossiers-entreprise', label: 'Bâtir une arborescence de dossiers' },
      { href: '/guides/pieces-pour-l-expert-comptable', label: 'Préparer les pièces pour l’expert-comptable' },
      { href: '/guides/rattraper-un-retard-administratif', label: 'Rattraper un retard administratif' },
      { href: '/services/gestion-administrative', label: 'La prise en charge administrative' },
    ],
    sources: [SOURCE_URSSAF_CONTROLE],
    cloture: 'Un contrôle bien préparé reste un contrôle. Mais on y répond à des questions, au lieu de chercher des papiers.',
    ...lot('C'),
    cadrage: {
      intention: 'problème-solution',
      motCle: 'contrôle Urssaf documents à préparer',
      variantes: ['avis de contrôle Urssaf que faire', 'préparer un contrôle Urssaf', 'pièces demandées contrôle Urssaf', 'contrôle Urssaf petite entreprise préparation'],
      persona: 'Dirigeant de TPE ou PME qui vient de recevoir un avis de contrôle',
      objectif: 'Organiser la réunion des pièces en trente jours et répartir les rôles',
      difference: 'Traite la logistique du contrôle et ce qui s’en délègue, sans entrer dans le fond, qui relève du cabinet',
    },
  },

  {
    slug: 'depart-d-un-salarie-checklist-administrative',
    type: 'situation',
    dossier: SITUATIONS,
    categorie: 'Situation',
    nom: 'Départ d’un salarié : la checklist administrative',
    title: 'Départ d’un salarié : la checklist administrative · BrittAssist',
    description:
      "Documents de fin de contrat, accès à retirer, messagerie à fermer, matériel à récupérer, dossiers à transmettre : les cinq volets du départ d’un salarié.",
    h1: 'Départ d’un salarié : documents, accès, messagerie, matériel.',
    lede:
      "On pense au pot de départ et au solde de tout compte. On oublie l’accès au logiciel de facturation, la boîte mail qui continue de recevoir des commandes, et l’ordinateur resté dans un coffre de voiture. Un départ se traite en cinq volets, dont un seul relève du cabinet de paie.",
    reponseCourte: [
      "À la fin du contrat, l’employeur remet au salarié un certificat de travail, un reçu pour solde de tout compte et une attestation destinée à France Travail.",
      "Les accès sont retirés le dernier jour, à partir du registre des accès.",
      "Le salarié est prévenu de la date de fermeture de sa messagerie, pour pouvoir en retirer ses messages privés ; l’adresse nominative est ensuite supprimée.",
      "Le matériel est restitué contre un inventaire signé, et les dossiers sont transmis avant le départ, non après.",
    ],
    sections: [
      {
        h2: 'La checklist',
        blocs: [
          {
            tableau: {
              legende: 'Départ d’un salarié : les cinq volets',
              colonnes: ['Volet', 'À faire', 'Par qui', 'Quand'],
              lignes: [
                ['Documents de fin de contrat', 'Certificat de travail, solde de tout compte, attestation France Travail', 'Le cabinet de paie, sous votre signature', 'À la fin du contrat'],
                ['Transmission', 'Note de passation, dossiers en cours, contacts', 'Le salarié, relu par son successeur', 'Avant le départ'],
                ['Accès', 'Retrait des comptes nominatifs, changement des mots de passe partagés', 'La personne qui tient le registre', 'Le dernier jour'],
                ['Messagerie', 'Information du salarié, message automatique indiquant le nouvel interlocuteur, fermeture', 'Vous, ou votre prestataire informatique', 'Selon la date annoncée'],
                ['Matériel', 'Ordinateur, téléphone, badges, clés, cartes', 'Vous, contre inventaire signé', 'Le dernier jour'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les documents',
        blocs: [
          {
            paragraphes: [
              "Service-Public en donne la liste : le certificat de travail, le reçu pour solde de tout compte, l’attestation France Travail et, lorsque l’entreprise a un dispositif d’épargne salariale, un état récapitulatif. Ces documents sont établis par l’employeur, en pratique par le cabinet de paie, et tenus à la disposition du salarié à la fin de son contrat.",
              "Votre rôle est de transmettre à temps au cabinet la date et le motif du départ, et les éléments variables du dernier mois. Un solde de tout compte en retard a presque toujours pour origine une information arrivée trop tard.",
            ],
          },
        ],
      },
      {
        h2: 'La messagerie',
        blocs: [
          {
            paragraphes: [
              "La CNIL rappelle deux obligations. L’employeur doit avertir le salarié de la date de fermeture de son compte, afin qu’il puisse retirer de sa messagerie ce qui relève de sa vie privée. Et l’adresse électronique nominative doit ensuite être supprimée : elle ne se conserve pas indéfiniment sous prétexte que des clients y écrivent encore.",
              "La transition se prépare donc avant le départ : prévenir les interlocuteurs de la nouvelle adresse, puis fermer. Les règles applicables figurent idéalement dans la charte informatique de l’entreprise, si elle en a une.",
            ],
          },
        ],
      },
      {
        h2: 'Les accès et le matériel',
        blocs: [
          {
            liste: [
              "Retirez d’abord les accès qui donnent sur l’argent et sur les clients : banque, facturation, fichier clients.",
              "Changez le mot de passe de chaque compte que le salarié partageait avec d’autres.",
              "Transférez la propriété des documents qu’il avait créés dans les espaces partagés.",
              "Récupérez le matériel contre un inventaire signé des deux parties.",
              "Résiliez ou réattribuez les licences nominatives.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qui se délègue',
        blocs: [
          {
            paragraphes: [
              "Une assistante peut tenir la checklist de bout en bout : relancer le cabinet de paie, préparer l’inventaire, dresser la liste des accès à retirer à partir du registre, prévenir les interlocuteurs externes. Les documents de paie, l’entretien de départ et toute décision relative au contrat restent chez vous et chez votre cabinet.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Retirer les accès une semaine après le départ, « quand on aura le temps ».",
      "Laisser la boîte mail ouverte et la relever soi-même, sans en avoir informé le salarié.",
      "Demander la note de passation le dernier après-midi.",
    ],
    limites: [
      "Cette page ne traite ni du motif de la rupture, ni des indemnités, ni de la procédure : ces questions relèvent de votre cabinet de paie ou d’un avocat en droit social.",
    ],
    faq: [
      {
        q: 'Peut-on garder ouverte la boîte mail d’un salarié parti ?',
        a: "Pas indéfiniment. La CNIL indique que l’adresse nominative doit être supprimée, après que le salarié a été averti de la date de fermeture. Prévenir les interlocuteurs avant le départ, puis laisser quelque temps un message automatique indiquant la nouvelle adresse, évite de perdre des demandes.",
      },
      {
        q: 'Qui prépare le solde de tout compte ?',
        a: "L’employeur, c’est-à-dire en pratique votre cabinet de paie ou votre expert-comptable. Une assistante peut réunir et transmettre les éléments, non établir le document.",
      },
      {
        q: 'Que faire si le départ du salarié est immédiat ?',
        a: "Les accès d’abord, le jour même. Le reste suit dans l’ordre de la checklist, avec une note de passation reconstituée à partir de la messagerie professionnelle et de l’agenda, dans le respect des règles rappelées par la CNIL.",
      },
    ],
    liens: [
      { href: '/guides/registre-des-acces-entreprise', label: 'Tenir un registre des accès' },
      { href: '/guides/modele-note-de-passation', label: 'Modèle de note de passation' },
      { href: '/guides/premiere-embauche-formalites-administratives', label: 'Embaucher : l’administratif à prévoir' },
      { href: '/guides/remplacer-une-assistante-absente', label: 'Remplacer une assistante absente' },
      { href: '/services/support-equipes', label: 'Un renfort ponctuel pour vos équipes' },
    ],
    sources: [SOURCE_SP_FIN_CONTRAT, SOURCE_CNIL_MESSAGERIE],
    cloture: 'Un départ se passe bien quand, une semaine après, personne ne cherche un mot de passe.',
    ...lot('D'),
    cadrage: {
      intention: 'problème-solution',
      motCle: 'départ d’un salarié checklist administrative',
      variantes: ['documents de fin de contrat à remettre', 'fermer la boîte mail d’un salarié parti', 'offboarding salarié petite entreprise', 'retirer les accès d’un salarié qui part'],
      persona: 'Dirigeant de petite structure confronté au départ d’un salarié',
      objectif: 'Faire traiter les cinq volets d’un départ, dont quatre échappent au cabinet de paie',
      difference: 'Miroir de la page sur l’embauche : elle couvre la sortie, messagerie et accès compris',
    },
  },
];
