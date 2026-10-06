/**
 * Série « secrétariat externalisé » — les travaux de secrétariat que la
 * bibliothèque ne décrivait pas encore.
 *
 * Le dossier « Administratif d'entreprise » couvre le classement, le courrier
 * entrant, les échéances, les contrats. Restaient des travaux qui font le
 * quotidien d'un secrétariat : le recommandé, les mentions des courriers, la
 * collecte de pièces, le fichier clients, l'assemblée annuelle, la
 * numérisation, le sinistre, les véhicules, la dictée, la routine du mois.
 *
 * Aucune de ces pages ne décrit un cas client. Les calendriers donnés en
 * exemple sont signalés comme tels. Les règles renvoient à leur source ; les
 * montants qui changent ne sont pas recopiés.
 */
import type { Guide } from '../guides.ts';
import { lot } from './secretariat-lots.ts';

const ADMINISTRATIF = 'organiser-l-administratif-de-son-entreprise';
const MODELES = 'modeles-et-checklists';

const SOURCE_SP_LRE = { href: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F31463', label: 'Service-Public — Une lettre recommandée électronique (LRE) a-t-elle une valeur légale ?' };
const SOURCE_LEGIFRANCE_L100 = { href: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033207397/', label: 'Légifrance — Code des postes et des communications électroniques, article L100' };
const SOURCE_SP_DOCS_SOCIETE = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F37371', label: 'Service-Public Entreprendre — Documents commerciaux d’une société' };
const SOURCE_SP_DOCS_EI = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F37370', label: 'Service-Public Entreprendre — Documents commerciaux d’une entreprise individuelle' };
const SOURCE_SP_DOCS_MICRO = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F36008', label: 'Service-Public Entreprendre — Documents commerciaux d’une micro-entreprise' };
const SOURCE_LEGIFRANCE_PAPIERS = { href: 'https://www.legifrance.gouv.fr/codes/id/LEGISCTA000006178891', label: 'Légifrance — Code de commerce, mentions sur les papiers d’affaires (articles R123-237 et R123-238)' };
const SOURCE_CNIL_COMMERCIAL = { href: 'https://www.cnil.fr/fr/questions-reponses-sur-les-referentiels-relatifs-la-gestion-des-activites-commerciales-et-des', label: 'CNIL — Questions-réponses sur le référentiel de gestion des activités commerciales' };
const SOURCE_SP_COMPTES = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F31214', label: 'Service-Public Entreprendre — Dépôt des comptes annuels d’une société' };
const SOURCE_BOFIP_CONSERVATION = { href: 'https://bofip.impots.gouv.fr/bofip/8877-PGP.html/identifiant=BOI-CF-COM-10-10-30-10-20180720', label: 'BOFiP — Délai et mode de conservation des documents' };
const SOURCE_SP_CONSERVATION = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F10029', label: 'Service-Public Entreprendre — Délais de conservation des documents pour les entreprises' };
const SOURCE_LEGIFRANCE_SINISTRE = { href: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035731302', label: 'Légifrance — Code des assurances, article L113-2' };
const SOURCE_SP_ASSURANCES = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F37365', label: 'Service-Public Entreprendre — Assurances de la société' };
const SOURCE_ANTAI = { href: 'https://www.antai.gouv.fr/designations/', label: 'ANTAI — Désigner un ou plusieurs conducteurs' };
const SOURCE_SP_DESIGNATION = { href: 'https://www.service-public.gouv.fr/particuliers/actualites/A15688', label: 'Service-Public — Non-désignation du conducteur d’un véhicule de société' };
const SOURCE_CNIL_IA = { href: 'https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative', label: 'CNIL — Questions-réponses sur l’utilisation d’un système d’IA générative' };

export const secretariatProcessus: Guide[] = [
  {
    slug: 'lettre-recommandee-electronique',
    type: 'reference',
    dossier: ADMINISTRATIF,
    categorie: 'Repère',
    nom: 'La lettre recommandée électronique',
    title: 'Lettre recommandée électronique : valeur et usages · BrittAssist',
    description:
      "La lettre recommandée électronique vaut un recommandé papier à certaines conditions. Lesquelles, pour quels courriers, et quelles preuves conserver.",
    h1: 'La lettre recommandée électronique : quand elle vaut un recommandé papier.',
    lede:
      "Envoyer un recommandé a longtemps signifié une file d’attente au guichet. Il existe aujourd’hui trois façons de s’en passer, qui portent des noms voisins et n’ont pas la même valeur. Les confondre ne se remarque qu’une fois : le jour où l’on a besoin de la preuve.",
    reponseCourte: [
      "Une lettre recommandée électronique équivaut à une lettre recommandée papier lorsqu’elle satisfait aux exigences du règlement européen eIDAS, ce qui suppose un prestataire qualifié.",
      "Si le destinataire n’est pas un professionnel, il doit avoir consenti à recevoir des envois recommandés électroniques.",
      "Le destinataire est informé de l’envoi et dispose de quinze jours pour l’accepter ou le refuser.",
      "Un e-mail avec accusé de lecture n’est pas une lettre recommandée électronique.",
    ],
    sections: [
      {
        h2: 'Trois envois à ne pas confondre',
        blocs: [
          {
            tableau: {
              legende: 'Trois façons d’envoyer un courrier « recommandé » sans se déplacer',
              colonnes: ['Envoi', 'Ce que c’est', 'Sa valeur'],
              lignes: [
                ['Lettre recommandée électronique qualifiée', 'Un envoi entièrement électronique, par un prestataire qualifié', 'Équivalente au recommandé papier, aux conditions prévues par la loi'],
                ['Recommandé déposé en ligne', 'Un courrier imprimé puis remis par voie postale', 'Celle d’un recommandé papier : seul le dépôt est en ligne'],
                ['E-mail avec accusé de lecture', 'Un message ordinaire, avec une confirmation d’ouverture', 'Aucune valeur comparable'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les conditions de l’équivalence',
        blocs: [
          {
            paragraphes: [
              "Le code des postes et des communications électroniques pose le principe : l’envoi recommandé électronique équivaut à l’envoi par lettre recommandée dès lors qu’il satisfait aux exigences de l’article 44 du règlement européen eIDAS. En pratique, il doit passer par un prestataire de services de confiance qualifié ; la liste en est tenue par l’ANSSI.",
              "Deux règles protègent le destinataire. S’il n’est pas un professionnel, il doit avoir exprimé à l’expéditeur son consentement à recevoir des envois recommandés électroniques. Et, dans tous les cas, le prestataire l’informe qu’un envoi lui est destiné : il a quinze jours, à compter du lendemain, pour l’accepter ou le refuser.",
            ],
          },
        ],
      },
      {
        h2: 'Pour quels courriers',
        blocs: [
          {
            liste: [
              "Entre professionnels, pour ce qui se notifiait jusque-là par recommandé : résiliation d’un contrat, mise en demeure, réclamation.",
              "Avec un particulier, seulement s’il y a consenti au préalable.",
              "Jamais sans avoir relu le contrat ou le texte qui impose le recommandé : certains exigent une forme précise.",
            ],
          },
          {
            paragraphes: [
              "La dernière ligne compte. Quand un contrat prévoit qu’une résiliation se fait « par lettre recommandée avec accusé de réception », un envoi électronique qualifié répond en principe à cette exigence. Quand un doute subsiste sur un acte important, la question se pose à un conseil avant l’envoi, pas après.",
            ],
          },
        ],
      },
      {
        h2: 'Les preuves à conserver',
        blocs: [
          {
            etapes: [
              "La preuve de dépôt, avec la date et l’heure de l’envoi.",
              "La preuve de réception, de refus ou de non-réclamation.",
              "Le contenu envoyé, tel qu’il a été envoyé.",
              "Le tout, classé dans le dossier concerné, sous un nom qui dit ce que c’est.",
            ],
          },
          {
            paragraphes: [
              "Ne comptez pas sur la plateforme du prestataire pour les garder aussi longtemps que vous en aurez besoin. Téléchargez-les à chaque envoi : une preuve qu’on ne retrouve pas n’en est plus une.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Croire qu’un e-mail avec accusé de lecture « fait foi ».",
      "Envoyer un recommandé électronique à un particulier qui n’y a pas consenti.",
      "Laisser les preuves sur la plateforme du prestataire, sans les télécharger.",
    ],
    limites: [
      "Cette page décrit les conditions générales de l’équivalence. Pour un acte dont dépend un délai ou un droit — congé, licenciement, procédure —, faites valider la forme de l’envoi par un conseil.",
      "Préparer et déposer un envoi se délègue. Décider de l’envoyer, et en arrêter le contenu, non.",
    ],
    faq: [
      {
        q: 'Faut-il un service particulier pour envoyer un recommandé électronique ?',
        a: "Oui : l’envoi doit passer par un prestataire qualifié. L’ANSSI tient la liste des services qualifiés. Vérifiez ce point avant de choisir un service sur la foi de son nom.",
      },
      {
        q: 'Un particulier peut-il refuser de recevoir un recommandé électronique ?',
        a: "Il doit y avoir consenti pour que vous puissiez lui en adresser un. Sans ce consentement, utilisez le recommandé papier, éventuellement déposé en ligne.",
      },
      {
        q: 'Une assistante peut-elle envoyer mes recommandés ?',
        a: "Elle peut préparer le courrier sur votre modèle, le déposer une fois votre accord donné, et classer les preuves. Le contenu d’une mise en demeure ou d’une résiliation, et la décision de l’envoyer, restent les vôtres.",
      },
    ],
    liens: [
      { href: '/guides/traitement-du-courrier-entrant', label: 'Traiter le courrier entrant' },
      { href: '/guides/signature-electronique-niveaux-et-usages', label: 'La signature électronique : niveaux et usages' },
      { href: '/guides/mise-en-demeure-et-injonction-de-payer', label: 'Mise en demeure et injonction de payer' },
      { href: '/guides/suivi-des-contrats-et-abonnements', label: 'Suivre ses contrats et abonnements' },
      { href: '/services/gestion-administrative', label: 'La prise en charge administrative' },
    ],
    sources: [SOURCE_SP_LRE, SOURCE_LEGIFRANCE_L100],
    cloture: 'Un recommandé ne sert pas à écrire. Il sert à prouver, plus tard, qu’on a écrit.',
    ...lot('C'),
    cadrage: {
      intention: 'référence',
      motCle: 'lettre recommandée électronique valeur juridique',
      variantes: ['LRE valeur légale', 'envoyer un recommandé en ligne', 'recommandé électronique consentement destinataire', 'lettre recommandée électronique entre professionnels'],
      persona: 'Dirigeant ou personne chargée du courrier qui veut cesser d’aller au guichet',
      objectif: 'Faire distinguer trois types d’envoi et connaître les conditions de l’équivalence',
      difference: 'Traite le courrier sortant recommandé ; la bibliothèque ne couvrait que le courrier entrant et la signature électronique',
    },
  },

  {
    slug: 'mentions-obligatoires-courriers-et-emails',
    type: 'reference',
    dossier: ADMINISTRATIF,
    categorie: 'Repère',
    nom: 'Les mentions des courriers et des e-mails',
    title: 'Mentions obligatoires : courriers et e-mails pro · BrittAssist',
    description:
      "Numéro d’identification, RCS, siège, forme et capital : les mentions que l’entreprise doit porter sur ses correspondances, et où les poser une fois pour toutes.",
    h1: 'Courriers, e-mails, papier à en-tête : les mentions que l’entreprise doit porter.',
    lede:
      "On vérifie les mentions de ses factures. On oublie que la règle vise plus large : les correspondances de l’entreprise aussi. Une signature d’e-mail réduite à un prénom et un numéro de portable ne suffit pas. La bonne nouvelle est que le sujet se règle une fois, en vingt minutes.",
    reponseCourte: [
      "Le code de commerce impose à toute personne immatriculée de faire figurer certaines mentions sur ses factures, tarifs et documents publicitaires, mais aussi sur toutes les correspondances concernant son activité.",
      "Ces mentions sont le numéro unique d’identification de l’entreprise, la mention RCS suivie de la ville du greffe, et le lieu du siège social.",
      "Une société y ajoute sa dénomination, sa forme juridique et le montant de son capital.",
      "Le plus simple est de les placer dans trois modèles : la signature d’e-mail, le papier à en-tête, le pied de page des documents.",
    ],
    sections: [
      {
        h2: 'Ce que dit la règle',
        blocs: [
          {
            paragraphes: [
              "Le texte vise les factures, notes de commande, tarifs et documents publicitaires, ainsi que toutes correspondances et tous récépissés concernant l’activité de l’entreprise et signés par elle ou en son nom. Service-Public range d’ailleurs les courriers, « papier ou emails commerciaux », parmi les documents commerciaux de l’entreprise.",
              "Le manquement est une contravention. Ce n’est pas le risque le plus lourd qui pèse sur une petite entreprise ; c’est en revanche l’un des plus simples à écarter.",
            ],
          },
          {
            tableau: {
              legende: 'Mentions à porter sur les correspondances',
              colonnes: ['Mention', 'Qui est concerné'],
              lignes: [
                ['Numéro unique d’identification de l’entreprise', 'Toute personne immatriculée'],
                ['Mention RCS suivie du nom de la ville du greffe', 'Toute personne immatriculée au registre du commerce et des sociétés'],
                ['Lieu du siège social', 'Toute personne immatriculée'],
                ['Dénomination sociale, forme juridique, montant du capital', 'Les sociétés'],
                ['État de liquidation, le cas échéant', 'Les sociétés en liquidation'],
              ],
            },
          },
          {
            paragraphes: [
              "Les entrepreneurs individuels et les micro-entrepreneurs ont leurs propres mentions. Service-Public tient une fiche pour chaque statut : ce sont elles qui font foi, et elles figurent en référence.",
            ],
          },
        ],
      },
      {
        h2: 'La signature d’e-mail',
        blocs: [
          {
            modele: {
              titre: 'Signature type d’une société',
              lignes: [
                "Prénom Nom — Fonction",
                "[Dénomination sociale], [forme juridique] au capital de [montant] €",
                "Siège social : [adresse complète]",
                "[Numéro d’identification] — RCS [Ville]",
                "[Téléphone] · [site]",
              ],
            },
          },
          {
            paragraphes: [
              "Cette signature se règle une fois dans l’outil de messagerie, pour chaque personne qui écrit au nom de l’entreprise — y compris une assistante externe, dont la signature précise pour le compte de qui elle écrit.",
            ],
          },
        ],
      },
      {
        h2: 'Les poser une fois pour toutes',
        blocs: [
          {
            etapes: [
              "Relevez les mentions exactes sur votre extrait d’immatriculation, sans les recopier de mémoire.",
              "Mettez à jour la signature d’e-mail de chaque utilisateur.",
              "Mettez à jour le modèle de courrier et le pied de page des devis et factures.",
              "Vérifiez les mentions légales du site, qui obéissent à leurs propres règles.",
              "Notez dans l’échéancier une vérification annuelle.",
            ],
          },
        ],
      },
      {
        h2: 'Quand elles changent',
        blocs: [
          {
            paragraphes: [
              "Un transfert de siège, une augmentation de capital, un changement de forme juridique ou de dénomination rendent fausses, le même jour, toutes vos signatures et tous vos modèles. C’est la suite la plus souvent oubliée d’une formalité : le greffe est à jour, les e-mails ne le sont pas. Ajoutez donc une ligne à la liste des suites de chaque modification : mettre à jour les trois modèles.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Signer ses e-mails professionnels d’un prénom et d’un numéro de portable.",
      "Recopier le capital ou l’adresse de mémoire, alors qu’ils ont changé.",
      "Corriger sa propre signature, et oublier celle des collaborateurs.",
    ],
    limites: [
      "Cette page résume la règle générale applicable aux correspondances. Les mentions propres à votre statut, à votre activité ou à une profession réglementée figurent dans les fiches officielles citées en référence.",
      "Les mentions d’une facture et celles d’un devis font l’objet de pages distinctes.",
    ],
    faq: [
      {
        q: 'Les mentions sont-elles vraiment exigées sur un e-mail ?',
        a: "Le texte vise « toutes correspondances » concernant l’activité, et Service-Public cite les e-mails commerciaux parmi les documents commerciaux. Une signature complète règle la question sans effort.",
      },
      {
        q: 'Quelles mentions pour un entrepreneur individuel ?',
        a: "Elles diffèrent de celles d’une société, et comprennent notamment la mention de l’exercice en entreprise individuelle. La fiche de Service-Public consacrée aux documents commerciaux d’une entreprise individuelle en donne la liste à jour.",
      },
      {
        q: 'Qui met à jour les signatures et les modèles de courrier ?',
        a: "C’est un travail de mise en forme, qui se confie : relever les mentions sur l’extrait d’immatriculation, corriger les modèles, vérifier chaque signature. Vous validez le résultat une fois.",
      },
    ],
    liens: [
      { href: '/guides/mentions-obligatoires-facture', label: 'Les mentions obligatoires d’une facture' },
      { href: '/guides/devis-contenu-et-validite', label: 'Ce que doit contenir un devis' },
      { href: '/guides/reponses-types-emails', label: 'Constituer des réponses types' },
      { href: '/guides/demenagement-de-bureaux', label: 'Déménager ses bureaux' },
      { href: '/services/gestion-administrative', label: 'La prise en charge administrative' },
    ],
    sources: [SOURCE_SP_DOCS_SOCIETE, SOURCE_SP_DOCS_EI, SOURCE_SP_DOCS_MICRO, SOURCE_LEGIFRANCE_PAPIERS],
    cloture: 'Trois modèles à jour, et le sujet disparaît de vos préoccupations pour un an.',
    ...lot('C'),
    cadrage: {
      intention: 'référence',
      motCle: 'mentions obligatoires e-mail professionnel',
      variantes: ['mentions obligatoires signature mail entreprise', 'mentions légales papier à en-tête', 'mentions obligatoires courrier commercial', 'SIREN RCS sur les e-mails'],
      persona: 'Dirigeant de société ou responsable administratif qui n’a jamais vérifié ses signatures',
      objectif: 'Faire poser les mentions dans trois modèles, et prévoir leur mise à jour',
      difference: 'Traite les correspondances et les e-mails ; les pages existantes ne traitent que la facture et le devis',
    },
  },

  {
    slug: 'collecter-des-pieces-aupres-de-ses-clients',
    type: 'methode',
    dossier: ADMINISTRATIF,
    categorie: 'Méthode',
    nom: 'Obtenir les pièces de ses clients',
    title: 'Obtenir les pièces de ses clients sans relancer dix fois · BrittAssist',
    description:
      "Une liste fermée, une date reliée à une conséquence, un seul endroit de dépôt, un tableau : la méthode pour obtenir les pièces d’un client sans s’épuiser.",
    h1: 'Obtenir les pièces de ses clients : une liste, une date, un seul endroit.',
    lede:
      "Le dossier est prêt, à une pièce près. Le client l’a promise deux fois. Vous relancez, il envoie autre chose, vous relancez encore. Ce va-et-vient n’a pas pour cause la mauvaise volonté du client. Il a pour cause une demande floue, sans date et sans adresse.",
    reponseCourte: [
      "Une demande de pièces efficace contient une liste fermée, une date reliée à une conséquence, et un seul endroit où déposer.",
      "Un tableau, pièce par pièce, dit à tout moment ce qui manque et depuis quand.",
      "La relance ne répète pas la demande : elle cite uniquement ce qui manque encore.",
      "C’est l’un des suivis qui se délèguent le mieux : il demande de la constance, non de l’expertise.",
    ],
    sections: [
      {
        h2: 'La demande',
        blocs: [
          {
            modele: {
              titre: 'Message de demande de pièces',
              lignes: [
                "Objet : Pièces à nous transmettre avant le [date] — dossier [référence]",
                "Bonjour,",
                "Pour déposer votre dossier le [date de dépôt], nous avons besoin de quatre pièces avant le [date limite] :",
                "1. [Pièce] — [précision : recto verso, moins de trois mois, toutes les pages]",
                "2. [Pièce] — [précision]",
                "3. [Pièce] — [précision]",
                "4. [Pièce] — [précision]",
                "Vous pouvez les déposer ici : [lien]. Une photo lisible convient pour les pièces 1 et 2.",
                "Passé le [date limite], le dépôt sera reporté au [date suivante].",
              ],
            },
          },
          {
            paragraphes: [
              "Trois choses font la différence. La liste est numérotée : le client peut cocher. La date est suivie de sa raison : il comprend pourquoi. Et la conséquence est dite sans menace : il sait ce qui se passera s’il tarde.",
            ],
          },
        ],
      },
      {
        h2: 'Rendre la pièce facile à fournir',
        blocs: [
          {
            liste: [
              "Dites où la trouver : « dans votre espace en ligne, rubrique Attestations ».",
              "Dites sous quelle forme : original, copie, photo, toutes les pages ou la première.",
              "Dites ce qui la rend valable : une date, une signature, une durée de validité.",
              "Proposez un seul moyen de dépôt, qui fonctionne depuis un téléphone.",
            ],
          },
          {
            paragraphes: [
              "Une pièce demandée sans précision revient incomplète une fois sur deux, et chaque retour coûte un échange de plus.",
            ],
          },
        ],
      },
      {
        h2: 'Le tableau de suivi',
        blocs: [
          {
            tableau: {
              legende: 'Suivi des pièces attendues',
              colonnes: ['Colonne', 'Ce qu’on y note'],
              lignes: [
                ['Dossier', 'Le client et la référence'],
                ['Pièce', 'Une ligne par pièce attendue'],
                ['Demandée le', 'La date de la première demande'],
                ['Reçue le', 'La date de réception'],
                ['Conforme', 'Oui, non, et pourquoi'],
                ['Prochaine relance', 'La date, fixée d’avance'],
              ],
            },
          },
        ],
      },
      {
        h2: 'La séquence de relance',
        blocs: [
          {
            etapes: [
              "Trois jours après la demande : un rappel court, qui cite seulement les pièces manquantes.",
              "Une semaine après : un appel. Il règle en deux minutes ce que trois e-mails n’ont pas réglé.",
              "À la date limite : un message qui annonce le report, avec la nouvelle date.",
              "Ensuite : le sujet remonte vers vous. C’est une décision, non plus une relance.",
            ],
          },
          {
            paragraphes: [
              "Les pièces sensibles — pièce d’identité, relevé d’identité bancaire, bulletins de salaire — ne voyagent pas par messagerie ordinaire. Ne demandez que ce dont le dossier a besoin, et supprimez ce qui n’a plus d’utilité une fois le dossier clos.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Demander « vos justificatifs », sans dire lesquels.",
      "Relancer en renvoyant la liste entière, pièces reçues comprises.",
      "Accepter les pièces par quatre canaux, puis ne plus savoir ce qui est arrivé où.",
    ],
    faq: [
      {
        q: 'Combien de fois relancer un client pour une pièce ?',
        a: "Trois fois, sur un calendrier annoncé. Au-delà, il ne s’agit plus d’un oubli : la question est de savoir si le client veut que le dossier avance, et elle vous revient.",
      },
      {
        q: 'Qui relance : moi, ou mon assistante ?',
        a: "Elle, pour les trois premières étapes. Un client accepte très bien d’être relancé par la personne qui suit son dossier, surtout si elle lui dit précisément ce qui manque.",
      },
      {
        q: 'Que faire d’une pièce illisible ou incomplète ?',
        a: "La signaler le jour même, en disant ce qui ne va pas : « il manque le verso », « la date n’est pas lisible ». Une pièce refusée sans explication revient identique.",
      },
    ],
    liens: [
      { href: '/guides/checklist-ouverture-dossier-client', label: 'Checklist d’ouverture de dossier client' },
      { href: '/guides/choisir-un-espace-de-stockage-partage', label: 'Choisir un espace de stockage partagé' },
      { href: '/guides/reponses-types-emails', label: 'Constituer des réponses types' },
      { href: '/assistante/professions-liberales', label: 'L’assistance pour les cabinets libéraux' },
      { href: '/services/gestion-administrative', label: 'La prise en charge administrative' },
    ],
    cloture: 'Un client qui sait exactement quoi envoyer, où et pour quand, l’envoie.',
    ...lot('C'),
    cadrage: {
      intention: 'méthode',
      motCle: 'relancer un client pour des pièces manquantes',
      variantes: ['obtenir les documents d’un client', 'collecte de pièces justificatives clients', 'mail de demande de pièces', 'dossier client incomplet relance'],
      persona: 'Cabinet, agence ou artisan dont les dossiers attendent des pièces de clients',
      objectif: 'Faire formuler une demande complète et tenir un suivi pièce par pièce',
      difference: 'Traite la collecte en cours de dossier, quand la checklist d’ouverture ne traite que le premier jour',
    },
  },

  {
    slug: 'tenir-son-fichier-clients-a-jour',
    type: 'methode',
    dossier: ADMINISTRATIF,
    categorie: 'Méthode',
    nom: 'Tenir son fichier clients à jour',
    title: 'Tenir son fichier clients à jour : la méthode · BrittAssist',
    description:
      "Un seul fichier, peu de champs obligatoires, une mise à jour au fil de l’eau et une revue par an : la méthode pour un fichier clients qui reste utilisable.",
    h1: 'Un fichier clients à jour : cinq règles de saisie, une revue par an.',
    lede:
      "Un fichier clients ne se dégrade pas d’un coup. Il se dégrade d’une ligne par semaine : un contact qui change de société, une adresse saisie deux fois, un numéro noté dans un coin d’e-mail. Au bout de trois ans, personne n’ose plus s’en servir pour un envoi.",
    reponseCourte: [
      "Un fichier clients reste fiable s’il est unique, si ses champs obligatoires sont peu nombreux et s’il est mis à jour au fil de l’eau.",
      "Une fiche correspond à une personne, rattachée à une société.",
      "Une revue annuelle écarte les contacts dont les données n’ont plus à être conservées.",
      "Pour un prospect qui n’est pas devenu client, la CNIL retient un repère de trois ans à compter de la collecte ou du dernier contact venant de lui.",
    ],
    sections: [
      {
        h2: 'Les cinq règles',
        blocs: [
          {
            etapes: [
              "Un seul fichier de référence. Les exports et les listes personnelles en sont des copies, jamais des sources.",
              "Une fiche par personne, rattachée à une société : c’est la société qui porte l’adresse de facturation.",
              "Cinq champs obligatoires, pas davantage : nom, société, e-mail, origine du contact, date du dernier échange.",
              "Une mise à jour au fil de l’eau : une nouvelle signature d’e-mail, c’est une fiche à corriger le jour même.",
              "Un responsable nommé, qui n’est pas forcément celui qui saisit.",
            ],
          },
          {
            paragraphes: [
              "La troisième règle est celle qu’on a envie d’enfreindre. Un fichier à vingt champs obligatoires est un fichier où dix-huit sont remplis par « à compléter ».",
            ],
          },
        ],
      },
      {
        h2: 'Dédoublonner',
        blocs: [
          {
            paragraphes: [
              "Les doublons naissent de trois façons : deux orthographes d’un même nom, deux adresses e-mail pour une même personne, une personne saisie sous deux sociétés. Avant de fusionner, choisissez la fiche qui fait foi — la plus récemment utilisée — et reportez-y ce que l’autre contenait de plus. Une fusion faite à la hâte détruit de l’historique, et ne se rattrape pas.",
            ],
          },
        ],
      },
      {
        h2: 'La revue annuelle',
        blocs: [
          {
            tableau: {
              legende: 'Trier les fiches lors de la revue annuelle',
              colonnes: ['Fiche', 'Ce qu’on en fait'],
              lignes: [
                ['Client actif', 'On vérifie les coordonnées et l’interlocuteur'],
                ['Client sans échange depuis longtemps', 'On se demande si la relation a pris fin, et depuis quand'],
                ['Prospect jamais devenu client', 'On regarde la date du dernier contact venant de lui'],
                ['Contact parti de sa société', 'On le détache, et on cherche son successeur'],
              ],
            },
          },
          {
            paragraphes: [
              "La CNIL donne des repères dans son référentiel sur la gestion des activités commerciales. Les données d’un prospect non client peuvent être conservées trois ans à compter de leur collecte ou du dernier contact émanant de lui. Celles d’un client peuvent l’être pendant la relation commerciale, puis trois ans à compter de sa fin, pour la prospection. Au terme, on reprend contact pour savoir si la personne souhaite encore être sollicitée ; sans réponse positive, on supprime ou on archive.",
              "D’autres durées s’appliquent aux pièces que la loi oblige à garder, comme les factures : la suppression d’une fiche de prospection n’efface pas ces obligations.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qui se délègue',
        blocs: [
          {
            liste: [
              "La saisie et la correction des fiches, à partir de vos échanges.",
              "Le dédoublonnage, avec une règle de fusion écrite.",
              "La préparation de la revue annuelle : la liste des fiches à trancher.",
            ],
          },
          {
            paragraphes: [
              "Ce qui reste chez vous : dire qui est un client à suivre, qui est un prospect à relancer, et qui ne l’est plus. Le fichier se tient ; le jugement commercial ne se délègue pas.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Tenir trois fichiers, et croire que l’un d’eux est à jour.",
      "Rendre vingt champs obligatoires.",
      "Fusionner des doublons sans avoir choisi la fiche qui fait foi.",
    ],
    limites: [
      "Les repères de conservation cités sont ceux du référentiel de la CNIL sur la gestion commerciale. Votre activité peut relever d’autres règles : le texte complet figure en référence.",
    ],
    faq: [
      {
        q: 'Tableur ou outil de gestion de la relation client ?',
        a: "Un tableur suffit tant qu’une seule personne saisit et que le fichier compte quelques centaines de lignes. Au-delà, ou dès que plusieurs personnes écrivent dedans, un outil qui trace les modifications évite les versions concurrentes.",
      },
      {
        q: 'Peut-on garder indéfiniment les coordonnées d’un ancien client ?',
        a: "Non. La CNIL retient, pour la prospection, trois ans à compter de la fin de la relation commerciale. Les pièces soumises à une obligation de conservation, elles, suivent leur propre durée.",
      },
      {
        q: 'Qui met le fichier à jour quand je rentre d’un rendez-vous ?',
        a: "Vous dictez ou transmettez trois lignes — qui, quoi, la suite prévue — et la personne qui tient le fichier fait le reste. C’est la seule façon de procéder qui dure au-delà de deux semaines.",
      },
    ],
    liens: [
      { href: '/guides/checklist-ouverture-dossier-client', label: 'Checklist d’ouverture de dossier client' },
      { href: '/guides/duree-de-conservation-documents-entreprise', label: 'Combien de temps conserver les documents' },
      { href: '/guides/dossier-de-rendez-vous', label: 'Préparer un dossier de rendez-vous' },
      { href: '/guides/sauvegarde-des-documents-entreprise', label: 'Sauvegarder les documents de l’entreprise' },
      { href: '/services/gestion-administrative', label: 'La prise en charge administrative' },
    ],
    sources: [SOURCE_CNIL_COMMERCIAL],
    cloture: 'Un fichier clients n’a pas à être complet. Il doit être exact sur ce qu’il contient.',
    ...lot('C'),
    cadrage: {
      intention: 'méthode',
      motCle: 'tenir son fichier clients à jour',
      variantes: ['mettre à jour sa base de contacts', 'nettoyer un fichier clients', 'dédoublonner fichier clients', 'durée de conservation fichier prospects'],
      persona: 'Dirigeant de TPE dont le fichier clients n’est plus fiable',
      objectif: 'Installer cinq règles de saisie et une revue annuelle',
      difference: 'Seule page consacrée au fichier clients, avec les repères de conservation de la CNIL',
    },
  },

  {
    slug: 'assemblee-generale-annuelle-retroplanning',
    type: 'methode',
    dossier: ADMINISTRATIF,
    categorie: 'Méthode',
    nom: 'Assemblée annuelle : le rétroplanning',
    title: 'Assemblée générale annuelle : le rétroplanning · BrittAssist',
    description:
      "Approbation des comptes dans les six mois de la clôture, dépôt au greffe dans le mois : le calendrier administratif de l’assemblée annuelle, et qui fait quoi.",
    h1: 'Approbation des comptes : le rétroplanning administratif de l’assemblée annuelle.',
    lede:
      "L’assemblée annuelle n’a rien de difficile, et elle se tient en retard dans beaucoup de petites sociétés. Non par négligence : parce que personne ne tient le calendrier. Les comptes sont prêts chez l’expert-comptable, la convocation n’est pas partie, et le délai court.",
    reponseCourte: [
      "Dans une SARL, une EURL ou une SA, les comptes doivent être approuvés dans les six mois qui suivent la clôture de l’exercice.",
      "Dans une SAS ou une SASU, le délai est fixé par les statuts ; il est de six mois en pratique.",
      "Les comptes sont ensuite déposés au greffe dans le mois qui suit leur approbation, ou dans les deux mois si le dépôt est fait par voie électronique.",
      "Le calendrier, les relances et le classement se délèguent ; les comptes et les actes relèvent de votre expert-comptable ou de votre avocat.",
    ],
    sections: [
      {
        h2: 'Les deux délais',
        blocs: [
          {
            tableau: {
              legende: 'Délais d’approbation et de dépôt des comptes',
              colonnes: ['Étape', 'Délai', 'Selon la forme de la société'],
              lignes: [
                ['Approbation des comptes', 'Dans les six mois de la clôture', 'SARL, EURL, SA'],
                ['Approbation des comptes', 'Dans le délai fixé par les statuts', 'SAS, SASU'],
                ['Dépôt des comptes au greffe', 'Dans le mois suivant l’approbation', 'Dépôt sur papier'],
                ['Dépôt des comptes au greffe', 'Dans les deux mois suivant l’approbation', 'Dépôt par voie électronique'],
              ],
            },
          },
          {
            paragraphes: [
              "Ces délais sont ceux que rappelle Service-Public. Le défaut de dépôt est sanctionné par une amende, et peut donner lieu à une astreinte. Les micro et petites entreprises peuvent joindre au dépôt une déclaration de confidentialité, pour que leurs comptes ne soient pas rendus publics.",
            ],
          },
        ],
      },
      {
        h2: 'Le rétroplanning',
        blocs: [
          {
            paragraphes: [
              "Exemple illustratif, pour un exercice clos le 31 décembre dans une SARL. Les dates se décalent d’autant pour une autre date de clôture.",
            ],
            etapes: [
              "Janvier à mars : les pièces de clôture sont transmises au cabinet, qui établit les comptes.",
              "Avril : les comptes sont arrêtés ; votre conseil prépare les documents de l’assemblée.",
              "Mai : les associés sont convoqués, dans les formes et les délais que prévoient les statuts.",
              "Juin, au plus tard le 30 : l’assemblée se tient, le procès-verbal est signé.",
              "Juillet : les comptes sont déposés au greffe, avec le procès-verbal.",
              "Ensuite : le procès-verbal est classé, et la date de l’année suivante inscrite à l’échéancier.",
            ],
          },
        ],
      },
      {
        h2: 'Qui fait quoi',
        blocs: [
          {
            tableau: {
              legende: 'Répartition des rôles pour l’assemblée annuelle',
              colonnes: ['Qui', 'Ce qui lui revient'],
              lignes: [
                ['L’expert-comptable', 'Les comptes annuels, et souvent le dépôt'],
                ['L’avocat ou le conseil', 'Les projets de résolutions, le procès-verbal, les formalités'],
                ['Le dirigeant', 'Arrêter les comptes, convoquer, présider, signer'],
                ['L’assistante', 'Tenir le calendrier, envoyer les convocations préparées, suivre les signatures, classer, alerter sur le dépôt'],
              ],
            },
          },
          {
            paragraphes: [
              "La ligne de l’assistante ne contient aucun acte juridique. BrittAssist ne rédige pas d’actes et ne donne pas de conseil juridique : son périmètre s’arrête à la logistique et au suivi. C’est précisément la part qui manque quand une assemblée se tient en retard.",
            ],
          },
        ],
      },
      {
        h2: 'Avec plusieurs sociétés',
        blocs: [
          {
            paragraphes: [
              "Trois sociétés, ce sont trois clôtures, trois assemblées, trois dépôts, parfois deux cabinets. Le sujet se tient avec un calendrier unique : une ligne par société, une colonne par étape, et la date limite de chacune. Regardé une fois par mois, il suffit à ce qu’aucune ne soit découverte hors délai.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Attendre que le cabinet relance pour s’occuper de la convocation.",
      "Tenir l’assemblée, et oublier le dépôt.",
      "Appliquer à une SAS le calendrier d’une SARL sans avoir relu ses statuts.",
    ],
    limites: [
      "Cette page décrit un calendrier administratif. Les règles de convocation, de quorum et de majorité, le contenu des documents et le formalisme propre aux sociétés à associé unique relèvent de vos statuts et de votre conseil.",
    ],
    faq: [
      {
        q: 'Une société à associé unique doit-elle tenir une assemblée ?',
        a: "L’approbation des comptes y prend la forme d’une décision de l’associé unique. Le formalisme exact dépend de la forme de la société et de la situation de l’associé : votre conseil vous l’indiquera.",
      },
      {
        q: 'Peut-on garder ses comptes confidentiels ?',
        a: "Les micro et petites entreprises peuvent joindre à leur dépôt une déclaration de confidentialité. Les conditions figurent sur la fiche de Service-Public citée en référence.",
      },
      {
        q: 'Que faire si le délai d’approbation ne peut pas être tenu ?',
        a: "En parler à votre conseil avant l’échéance, et non après : c’est à ce moment qu’il dispose encore de solutions.",
      },
    ],
    liens: [
      { href: '/assistante/dirigeants-multi-societes', label: 'L’assistance pour les dirigeants de plusieurs sociétés' },
      { href: '/guides/checklist-cloture-annuelle-administrative', label: 'Checklist de clôture annuelle' },
      { href: '/guides/echeancier-administratif-entreprise', label: 'Construire son échéancier administratif' },
      { href: '/guides/signature-electronique-niveaux-et-usages', label: 'La signature électronique : niveaux et usages' },
      { href: '/services/gestion-administrative', label: 'La prise en charge administrative' },
    ],
    sources: [SOURCE_SP_COMPTES],
    cloture: 'L’assemblée annuelle n’est pas un sujet juridique en retard. C’est un calendrier que personne ne tenait.',
    ...lot('C'),
    cadrage: {
      intention: 'méthode',
      motCle: 'assemblée générale annuelle approbation des comptes délai',
      variantes: ['rétroplanning assemblée générale ordinaire', 'délai dépôt des comptes annuels', 'préparer l’assemblée d’approbation des comptes', 'calendrier juridique annuel société'],
      persona: 'Dirigeant d’une ou de plusieurs petites sociétés',
      objectif: 'Faire tenir un calendrier de l’assemblée et du dépôt, et répartir les rôles',
      difference: 'Traite l’étape qui suit la clôture — assemblée et dépôt —, absente de la checklist de clôture annuelle',
    },
  },

  {
    slug: 'numeriser-ses-archives-papier',
    type: 'methode',
    dossier: ADMINISTRATIF,
    categorie: 'Méthode',
    nom: 'Numériser ses archives papier',
    title: 'Numériser ses papiers d’entreprise : trier d’abord · BrittAssist',
    description:
      "Trier avant de scanner, nommer, contrôler, et savoir ce qu’on peut jeter : la méthode pour numériser ses archives papier sans perdre une pièce utile.",
    h1: 'Numériser ses archives papier : trier, scanner, et savoir ce qu’on peut jeter.',
    lede:
      "Dix ans de classeurs dans une armoire, et l’idée de tout scanner pour s’en débarrasser. L’idée est bonne à moitié. Scanner est la partie facile. La partie qui compte vient avant — décider ce qui vaut d’être scanné — et après — savoir ce qu’on a le droit de détruire.",
    reponseCourte: [
      "On trie avant de numériser : une part des archives peut être détruite sans être scannée, une autre doit rester sur papier.",
      "Une facture papier peut être conservée sous forme numérisée, mais dans des conditions fixées par l’administration fiscale, qui garantissent une copie fidèle et intègre.",
      "Un scan ordinaire sert à consulter ; il ne dispense pas toujours de garder l’original.",
      "Le tri et la numérisation supposent d’avoir les papiers en main ; le plan de classement et le nommage se préparent à distance.",
    ],
    sections: [
      {
        h2: 'Trier avant de scanner',
        blocs: [
          {
            tableau: {
              legende: 'Les trois piles du tri',
              colonnes: ['Pile', 'Ce qu’elle contient', 'Ce qu’on en fait'],
              lignes: [
                ['À détruire', 'Ce dont la durée de conservation est écoulée, et ce qui n’a jamais eu à être gardé', 'Destruction, sans numérisation'],
                ['À conserver sur papier', 'Les originaux qui font preuve : contrats signés à la main, actes, titres', 'Rangement, avec une copie numérique pour consulter'],
                ['À numériser', 'Le reste : courriers, pièces courantes, documentation', 'Numérisation, puis décision sur le papier'],
              ],
            },
          },
          {
            paragraphes: [
              "La première pile est souvent la plus haute. Numériser ce qui devait être détruit, c’est payer deux fois pour garder ce qu’on n’avait plus à garder.",
            ],
          },
        ],
      },
      {
        h2: 'Le cas des factures',
        blocs: [
          {
            paragraphes: [
              "Pour les factures établies ou reçues sur papier, l’administration fiscale admet une conservation sous forme numérisée, à des conditions précises : la copie doit reproduire l’original à l’identique, en image comme en contenu ; elle doit être conservée dans un format du type PDF et assortie d’un dispositif qui en garantit l’intégrité — cachet serveur, empreinte numérique ou signature électronique. L’organisation de cet archivage doit être documentée.",
              "Un scan réalisé avec un téléphone et rangé dans un dossier ne remplit pas ces conditions. Dans ce cas, le papier se garde pendant la durée requise, et le fichier sert à retrouver l’information. Votre expert-comptable vous dira où vous en êtes.",
            ],
          },
        ],
      },
      {
        h2: 'Numériser, dans l’ordre',
        blocs: [
          {
            etapes: [
              "Constituez des lots homogènes : une année, une nature de document.",
              "Numérisez recto verso, en un fichier par document, non un fichier par page.",
              "Nommez chaque fichier selon votre convention, au moment où il est créé.",
              "Contrôlez un document sur dix : lisible, complet, à l’endroit.",
              "Rangez dans l’arborescence, puis décidez du sort du papier.",
            ],
          },
          {
            paragraphes: [
              "Le contrôle est l’étape qu’on saute et qu’on regrette. Une page manquante découverte trois ans plus tard, une fois le papier détruit, ne se reconstitue pas.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qui se fait sur place, ce qui se prépare à distance',
        blocs: [
          {
            paragraphes: [
              "Trier et scanner demandent d’avoir les papiers en main : c’est un travail sur place, à confier à quelqu’un qui s’y rend, ou un envoi de cartons à organiser. Une assistante qui travaille à distance ne le fait pas. Elle peut en revanche préparer ce qui rend l’opération utile : le plan de classement, la convention de nommage, la liste des durées de conservation, puis le rangement et le contrôle des fichiers au fur et à mesure qu’ils arrivent.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Tout scanner pour ne pas avoir à trier.",
      "Détruire des factures papier sur la foi d’un scan ordinaire.",
      "Produire trois mille fichiers nommés « scan » suivi d’un numéro.",
    ],
    limites: [
      "Les conditions de la numérisation des factures sont fixées par l’administration fiscale et évoluent : la doctrine citée en référence fait foi, et votre expert-comptable l’applique à votre cas.",
      "La valeur d’une copie numérique en cas de litige relève d’un conseil juridique.",
    ],
    faq: [
      {
        q: 'Peut-on jeter une facture papier après l’avoir scannée ?',
        a: "Seulement si la numérisation respecte les conditions fixées par l’administration fiscale. À défaut, conservez le papier pendant la durée requise.",
      },
      {
        q: 'Faut-il un scanner professionnel ?',
        a: "Pour quelques pièces par semaine, non. Pour des années d’archives, un appareil à chargeur, ou un prestataire de numérisation, épargne des journées entières.",
      },
      {
        q: 'Par où commencer devant dix ans de cartons ?',
        a: "Par l’année en cours, que vous numérisez au fil de l’eau, puis par les cartons les plus anciens, où se trouve ce qui peut être détruit. Le milieu attendra.",
      },
    ],
    liens: [
      { href: '/guides/duree-de-conservation-documents-entreprise', label: 'Combien de temps conserver les documents' },
      { href: '/guides/regles-de-nommage-des-fichiers', label: 'Nommer ses fichiers' },
      { href: '/guides/arborescence-dossiers-entreprise', label: 'Bâtir une arborescence de dossiers' },
      { href: '/guides/sauvegarde-des-documents-entreprise', label: 'Sauvegarder les documents de l’entreprise' },
      { href: '/services/gestion-administrative', label: 'La prise en charge administrative' },
    ],
    sources: [SOURCE_BOFIP_CONSERVATION, SOURCE_SP_CONSERVATION],
    cloture: 'Numériser ne range rien. Cela déplace le désordre, sauf si l’on a trié avant.',
    ...lot('D'),
    cadrage: {
      intention: 'méthode',
      motCle: 'numériser ses documents d’entreprise',
      variantes: ['numérisation des archives papier', 'scanner ses factures et jeter le papier', 'dématérialiser ses papiers d’entreprise', 'copie numérique fiable facture'],
      persona: 'Dirigeant de TPE devant des années d’archives papier',
      objectif: 'Faire trier avant de numériser et connaître les conditions propres aux factures',
      difference: 'Traite l’opération de numérisation ; la page sur les durées de conservation dit combien de temps garder, non comment basculer',
    },
  },

  {
    slug: 'declarer-un-sinistre-professionnel',
    type: 'methode',
    dossier: ADMINISTRATIF,
    categorie: 'Méthode',
    nom: 'Déclarer un sinistre professionnel',
    title: 'Déclarer un sinistre professionnel : le dossier · BrittAssist',
    description:
      "Dégât des eaux, vol, bris de matériel : déclarer dans le délai du contrat, puis constituer le dossier que l’assureur attend. L’ordre des gestes.",
    h1: 'Sinistre dans l’entreprise : déclarer à temps, avec un dossier complet.',
    lede:
      "Une fuite dans le local, un ordinateur volé, une vitrine brisée. Le premier jour, on gère l’urgence. Le troisième, on se souvient de l’assurance. Entre les deux, un délai a couru, et la moitié des pièces dont l’assureur aura besoin sont déjà plus difficiles à réunir.",
    reponseCourte: [
      "Un sinistre se déclare dès que l’on en a connaissance, et au plus tard dans le délai fixé par le contrat.",
      "Ce délai ne peut pas être inférieur à cinq jours ouvrés ; il est ramené à deux jours ouvrés en cas de vol.",
      "On photographie avant de toucher, on déclare, puis on constitue le dossier.",
      "Le dossier et les relances se délèguent ; le récit des faits et l’acceptation de l’offre restent les vôtres.",
    ],
    sections: [
      {
        h2: 'L’ordre des gestes',
        blocs: [
          {
            etapes: [
              "Mettre en sécurité, et limiter l’aggravation : couper l’eau, protéger le matériel.",
              "Photographier et filmer, avant tout déplacement ou nettoyage.",
              "Retrouver le contrat et le numéro de police.",
              "Déclarer par le canal prévu au contrat, dans le délai. En cas de vol, déposer plainte.",
              "Constituer le dossier, et l’envoyer en une fois plutôt que pièce à pièce.",
              "Suivre : numéro de dossier, expert, dates, relances.",
              "Clôturer : indemnité reçue, réparations faites, pièces classées.",
            ],
          },
        ],
      },
      {
        h2: 'Le délai',
        blocs: [
          {
            paragraphes: [
              "Le code des assurances impose à l’assuré de donner avis du sinistre dès qu’il en a eu connaissance, et au plus tard dans le délai fixé par le contrat. Ce délai ne peut être inférieur à cinq jours ouvrés. Il est ramené à deux jours ouvrés en cas de vol. Le contrat peut prévoir davantage ; c’est donc lui qu’il faut lire.",
              "Le même texte encadre la sanction d’un retard : la déchéance ne peut être opposée à l’assuré que si l’assureur établit que ce retard lui a causé un préjudice. Ce n’est pas une raison de tarder. C’est seulement la raison pour laquelle une déclaration tardive doit tout de même être faite.",
            ],
          },
        ],
      },
      {
        h2: 'Le dossier',
        blocs: [
          {
            tableau: {
              legende: 'Pièces d’un dossier de sinistre',
              colonnes: ['Pièce', 'Où la trouver'],
              lignes: [
                ['Récit daté des faits', 'Rédigé par vous, le jour même si possible'],
                ['Photographies et vidéos', 'Prises avant toute intervention'],
                ['Factures d’achat des biens touchés', 'Comptabilité, ou espace de classement'],
                ['Devis de réparation ou de remplacement', 'Demandés à deux prestataires'],
                ['Coordonnées des tiers impliqués', 'Voisin, bailleur, syndic, auteur présumé'],
                ['Dépôt de plainte, en cas de vol', 'Remis par le commissariat ou la gendarmerie'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Ce qui se prépare avant',
        blocs: [
          {
            liste: [
              "Un registre des contrats à jour, avec le numéro de police et le canal de déclaration de chaque assurance.",
              "Les factures d’achat du matériel, classées et retrouvables.",
              "Un inventaire en images des locaux et de l’équipement, refait une fois par an.",
            ],
          },
          {
            paragraphes: [
              "Ces trois éléments transforment une semaine de recherches en une heure d’envoi. Ils font partie de ce qu’une assistante tient pour vous, bien avant qu’il se passe quoi que ce soit.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Nettoyer et réparer avant d’avoir photographié.",
      "Déclarer par téléphone, sans trace écrite.",
      "Envoyer les pièces une à une, sur trois semaines.",
    ],
    limites: [
      "Les garanties, les franchises et les délais applicables sont ceux de votre contrat. En cas de désaccord avec l’assureur sur l’indemnisation, faites-vous conseiller.",
    ],
    faq: [
      {
        q: 'Que se passe-t-il si je déclare en retard ?',
        a: "Le contrat peut prévoir la perte du droit à indemnité, mais le code des assurances exige que l’assureur établisse que le retard lui a causé un préjudice. Déclarez sans attendre, même si le délai vous semble dépassé.",
      },
      {
        q: 'Faut-il attendre l’expert pour réparer ?',
        a: "Les mesures qui évitent l’aggravation se prennent tout de suite. Les réparations définitives attendent en général l’accord de l’assureur ou le passage de l’expert : posez la question par écrit.",
      },
      {
        q: 'Qui suit le dossier de sinistre ?',
        a: "Une assistante peut réunir les pièces, demander les devis, relancer l’assureur et coordonner les artisans. Le récit des circonstances et l’acceptation de l’offre d’indemnisation vous reviennent.",
      },
    ],
    liens: [
      { href: '/guides/suivi-des-contrats-et-abonnements', label: 'Suivre ses contrats et abonnements' },
      { href: '/guides/echeancier-administratif-entreprise', label: 'Construire son échéancier administratif' },
      { href: '/guides/modele-fiche-prestataire', label: 'Modèle de fiche prestataire' },
      { href: '/services/suivi-prestataires', label: 'Le suivi de vos prestataires' },
      { href: '/services/gestion-des-contrats', label: 'Le suivi de vos contrats' },
    ],
    sources: [SOURCE_LEGIFRANCE_SINISTRE, SOURCE_SP_ASSURANCES],
    cloture: 'Un sinistre bien déclaré tient en un envoi. Les autres tiennent en dix relances.',
    ...lot('D'),
    cadrage: {
      intention: 'méthode',
      motCle: 'déclarer un sinistre professionnel',
      variantes: ['déclaration de sinistre entreprise délai', 'dossier de sinistre assurance professionnelle', 'dégât des eaux local professionnel démarches', 'sinistre entreprise que faire'],
      persona: 'Dirigeant de TPE confronté à un dégât ou à un vol dans ses locaux',
      objectif: 'Faire déclarer dans le délai et constituer le dossier en une fois',
      difference: 'Traite un travail administratif absent de la bibliothèque : la déclaration et le suivi d’un sinistre',
    },
  },

  {
    slug: 'vehicules-de-societe-suivi-administratif',
    type: 'reference',
    dossier: ADMINISTRATIF,
    categorie: 'Repère',
    nom: 'Véhicules de société : le suivi administratif',
    title: 'Véhicules de société : le suivi administratif · BrittAssist',
    description:
      "Contrôle technique, assurance, entretien, et surtout l’avis de contravention : le conducteur doit être désigné dans les 45 jours. Le registre qui évite l’oubli.",
    h1: 'Véhicules de société : échéances, avis de contravention et désignation du conducteur.',
    lede:
      "Deux utilitaires et une voiture de fonction suffisent à produire une vingtaine d’échéances par an. La plupart se rattrapent. Une seule ne pardonne pas l’oubli : l’avis de contravention reçu au nom de la société, qui ouvre un délai pour dire qui conduisait.",
    reponseCourte: [
      "Lorsqu’une infraction est commise avec un véhicule immatriculé au nom d’une personne morale, son représentant légal doit désigner la personne qui conduisait.",
      "Il dispose de 45 jours pour le faire.",
      "À défaut, la société encourt une amende propre à la non-désignation, distincte de celle de l’infraction.",
      "Un registre des véhicules et un tableau d’affectation à jour rendent cette désignation immédiate.",
    ],
    sections: [
      {
        h2: 'La désignation du conducteur',
        blocs: [
          {
            paragraphes: [
              "Le code de la route impose au représentant légal d’une personne morale de désigner la personne physique qui conduisait le véhicule au moment de l’infraction. L’ANTAI rappelle que les représentants légaux disposent pour cela d’un délai de 45 jours, et met à leur disposition des démarches en ligne. Le point de départ du délai figure sur l’avis ; ne comptez pas au plus juste.",
              "La non-désignation est elle-même sanctionnée par une amende, à la charge de la société : les montants figurent sur les pages officielles citées en référence. Si le conducteur était le dirigeant lui-même, la marche à suivre est détaillée sur le site de l’ANTAI.",
            ],
          },
        ],
      },
      {
        h2: 'Le circuit d’un avis de contravention',
        blocs: [
          {
            etapes: [
              "L’avis arrive, par courrier ou par voie électronique : il est daté et enregistré le jour même.",
              "Le conducteur est identifié grâce au tableau d’affectation des véhicules.",
              "La désignation est préparée en ligne, puis validée par le représentant légal.",
              "Le conducteur est informé, et reçoit l’avis à son nom.",
              "L’avis et la preuve de la désignation sont classés dans le dossier du véhicule.",
            ],
          },
          {
            paragraphes: [
              "Le maillon fragile est le premier. Un avis qui attend dix jours dans une bannette ne laisse plus que cinq semaines, dont deux de congés.",
            ],
          },
        ],
      },
      {
        h2: 'Le registre des véhicules',
        blocs: [
          {
            tableau: {
              legende: 'Colonnes d’un registre des véhicules',
              colonnes: ['Colonne', 'Pourquoi'],
              lignes: [
                ['Immatriculation et modèle', 'Identifier le véhicule sur un avis'],
                ['Conducteur habituel', 'Désigner sans chercher'],
                ['Prochain contrôle technique', 'L’anticiper d’un mois'],
                ['Échéance d’assurance', 'Comparer avant la reconduction'],
                ['Prochain entretien', 'Le planifier hors période chargée'],
                ['Carte carburant, badge de télépéage', 'Savoir quoi récupérer en cas de départ'],
                ['Fin du contrat de location ou de crédit-bail', 'Préparer la restitution'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Le tableau d’affectation',
        blocs: [
          {
            paragraphes: [
              "Quand un véhicule est partagé, le registre ne suffit pas : il faut savoir qui l’avait tel jour, à telle heure. Un tableau d’affectation — date, véhicule, conducteur — tenu au fil de l’eau répond à la question. Sans lui, chaque avis de contravention ouvre une enquête dont le résultat est rarement certain.",
              "Tenir ce registre, préparer la désignation, rappeler les échéances : c’est un suivi qui se confie. La désignation elle-même engage le représentant légal, qui la valide.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Payer l’amende de l’infraction en pensant que cela clôt le dossier.",
      "Laisser les avis arriver chez un salarié, sans copie à l’entreprise.",
      "Ne tenir aucun tableau d’affectation pour un véhicule partagé.",
    ],
    limites: [
      "Les règles de désignation, les montants et les voies de contestation figurent sur le site de l’ANTAI, qui fait foi. Une contestation relève d’un conseil.",
    ],
    faq: [
      {
        q: 'Que se passe-t-il si personne ne sait qui conduisait ?',
        a: "L’obligation de désigner demeure, et l’absence de désignation est sanctionnée. C’est la raison d’être du tableau d’affectation : sans lui, la société ne peut ni désigner, ni démontrer qu’elle a cherché.",
      },
      {
        q: 'Une assistante peut-elle faire la désignation ?',
        a: "Elle peut identifier le conducteur, préparer la démarche en ligne et la soumettre à la validation du représentant légal. La désignation est faite au nom de celui-ci.",
      },
      {
        q: 'Faut-il un outil de gestion de flotte ?',
        a: "Pas pour quelques véhicules : un tableau à sept colonnes et une ligne par véhicule suffisent. L’outil se justifie quand le nombre de véhicules ou de conducteurs rend le tableau illisible.",
      },
    ],
    liens: [
      { href: '/guides/traitement-du-courrier-entrant', label: 'Traiter le courrier entrant' },
      { href: '/guides/echeancier-administratif-entreprise', label: 'Construire son échéancier administratif' },
      { href: '/guides/suivi-des-contrats-et-abonnements', label: 'Suivre ses contrats et abonnements' },
      { href: '/assistante/artisans-btp', label: 'L’assistance pour les entreprises du bâtiment' },
      { href: '/services/gestion-administrative', label: 'La prise en charge administrative' },
    ],
    sources: [SOURCE_ANTAI, SOURCE_SP_DESIGNATION],
    cloture: 'Un véhicule de société produit peu de papiers. Il suffit qu’un seul soit traité à temps.',
    ...lot('D'),
    cadrage: {
      intention: 'référence',
      motCle: 'désignation du conducteur véhicule de société',
      variantes: ['suivi administratif véhicules d’entreprise', 'avis de contravention véhicule de société', 'gestion flotte automobile petite entreprise', 'non-désignation du conducteur'],
      persona: 'Dirigeant de TPE ou d’entreprise artisanale qui possède quelques véhicules',
      objectif: 'Faire tenir un registre des véhicules et traiter l’avis de contravention dans le délai',
      difference: 'Traite un suivi absent de la bibliothèque, avec l’obligation de désignation et son délai',
    },
  },

  {
    slug: 'dicter-ses-courriers',
    type: 'methode',
    dossier: ADMINISTRATIF,
    categorie: 'Méthode',
    nom: 'Dicter ses courriers',
    title: 'Dicter ses courriers et les faire mettre en forme · BrittAssist',
    description:
      "Dicter entre deux rendez-vous, recevoir un courrier prêt à signer : le circuit de la dictée, les cinq règles pour bien dicter, et la part de l’outil.",
    h1: 'Dicter plutôt qu’écrire : faire mettre en forme ses courriers et ses notes.',
    lede:
      "La dictée est la plus ancienne tâche de secrétariat, et l’une des plus utiles à qui parle mieux qu’il n’écrit. Un courrier qui demande vingt minutes devant un écran se dicte en trois, dans une voiture à l’arrêt. À condition que ce qui est dit puisse être repris sans que l’on vous rappelle pour demander ce que vous vouliez dire.",
    reponseCourte: [
      "Le circuit tient en quatre temps : vous dictez, le texte est transcrit, il est mis en forme sur votre modèle, vous relisez.",
      "Une bonne dictée annonce le type de document et le destinataire, épelle les noms propres et dit ce qui reste à vérifier.",
      "Un outil de transcription fait gagner du temps sur la frappe ; il ne dispense pas d’une relecture humaine.",
      "Les enregistrements contiennent ce que contiennent vos courriers : ils se protègent de la même façon.",
    ],
    sections: [
      {
        h2: 'Le circuit',
        blocs: [
          {
            etapes: [
              "Vous dictez, depuis votre téléphone, en une prise.",
              "L’enregistrement est transcrit, par une personne ou par un outil.",
              "Le texte est repris : ponctuation, formules, mise en page sur le modèle de l’entreprise.",
              "Vous relisez et validez, ou vous corrigez en deux mots.",
              "Le courrier part, et sa copie est classée.",
            ],
          },
          {
            paragraphes: [
              "Le gain ne tient pas à la vitesse de frappe. Il tient à ce que vous ne faites que la part qui demande votre tête : dire ce qu’il faut dire.",
            ],
          },
        ],
      },
      {
        h2: 'Bien dicter',
        blocs: [
          {
            liste: [
              "Annoncez d’abord ce que c’est : « courrier à M. Leroy, société Aubin, objet : report de la livraison ».",
              "Épelez les noms propres et dites les chiffres deux fois.",
              "Faites une phrase par idée, et dites « à la ligne » quand vous changez de sujet.",
              "Signalez ce qui est à vérifier : « la date du contrat, je ne suis pas sûr, regarde dans le dossier ».",
              "Terminez par ce que vous attendez : un brouillon, ou un courrier prêt à signer.",
            ],
          },
          {
            modele: {
              titre: 'Une dictée qui se traite sans question',
              lignes: [
                "« Courrier à Mme Perrin, P-E-deux R-I-N, cabinet Lemaire. Objet : notre rendez-vous du douze. »",
                "« Madame, je vous confirme notre rendez-vous du douze mars à dix heures, dans vos locaux. À la ligne. »",
                "« Je viendrai avec le dossier complet. Vérifie que l’attestation est bien dans le dossier, sinon dis-le-moi. »",
                "« Formule de politesse habituelle. C’est à signer, je relis ce soir. »",
              ],
            },
          },
        ],
      },
      {
        h2: 'L’outil et la personne',
        blocs: [
          {
            tableau: {
              legende: 'Ce que fait un outil de transcription, et ce qu’il ne fait pas',
              colonnes: ['Il fait bien', 'Il fait mal'],
              lignes: [
                ['Transformer une parole claire en texte', 'Les noms propres, les sigles, les termes de métier'],
                ['Aller vite sur un long enregistrement', 'Les chiffres, les dates et les montants'],
                ['Restituer l’ordre de ce qui a été dit', 'Savoir ce qui était une consigne et ce qui était le courrier'],
              ],
            },
          },
          {
            paragraphes: [
              "La dernière ligne explique pourquoi la reprise reste humaine. Dans la dictée donnée plus haut, « vérifie que l’attestation est bien dans le dossier » n’est pas une phrase du courrier. Un outil l’y laisse.",
              "Reste la question des données. Un enregistrement envoyé à un service en ligne quitte votre entreprise : avant d’y dicter le nom d’un client ou un montant, sachez où il est traité et ce que le service en conserve. Les règles posées pour les assistants d’intelligence artificielle s’appliquent ici sans changement.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que la mise en forme ajoute',
        blocs: [
          {
            paragraphes: [
              "Un texte transcrit n’est pas un courrier. Il lui manque l’en-tête, les mentions de l’entreprise, la référence du dossier, les pièces jointes, la formule adaptée au destinataire, et le classement de la copie. C’est le travail qui distingue une assistante d’une transcription, et il se voit à ce que vous n’avez plus qu’à signer.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Dicter comme on pense, en revenant trois fois sur la même phrase.",
      "Mêler consignes et contenu sans les distinguer.",
      "Envoyer un texte transcrit par un outil sans que personne l’ait relu.",
    ],
    faq: [
      {
        q: 'Faut-il un dictaphone ?',
        a: "Non. L’enregistreur d’un téléphone suffit, pourvu que l’endroit soit calme et que le fichier parte par le canal convenu. Un message vocal convient pour un courrier court.",
      },
      {
        q: 'Puis-je dicter un compte rendu de rendez-vous ?',
        a: "Oui, et c’est l’un des meilleurs usages : dicté dans le quart d’heure qui suit, il est plus exact que rédigé trois jours après. Dites d’abord les décisions, puis les suites.",
      },
      {
        q: 'Qui relit un courrier dicté ?',
        a: "Deux personnes : celle qui met en forme relit le texte contre l’enregistrement, et vous relisez le sens. Aucune de ces deux relectures ne remplace l’autre.",
      },
    ],
    liens: [
      { href: '/guides/canal-pour-transmettre-ses-demandes', label: 'Par quel canal transmettre ses demandes' },
      { href: '/guides/reponses-types-emails', label: 'Constituer des réponses types' },
      { href: '/guides/ia-generative-et-donnees-confidentielles', label: 'IA générative et données confidentielles' },
      { href: '/guides/compte-rendu-de-reunion', label: 'Rédiger un compte rendu de réunion' },
      { href: '/services/gestion-administrative', label: 'La prise en charge administrative' },
    ],
    sources: [SOURCE_CNIL_IA],
    cloture: 'Dicter, c’est garder pour soi la seule part du courrier qui avait besoin de vous.',
    ...lot('D'),
    cadrage: {
      intention: 'méthode',
      motCle: 'dicter ses courriers à une assistante',
      variantes: ['retranscription de dictée secrétariat', 'frappe de courriers externalisée', 'dictée vocale mise en forme courrier', 'transcription audio secrétaire indépendante'],
      persona: 'Dirigeant ou professionnel libéral plus à l’aise à l’oral qu’à l’écrit',
      objectif: 'Installer un circuit de dictée et donner les règles qui évitent les allers-retours',
      difference: 'Traite la dictée de documents, non la transmission de demandes par message vocal déjà couverte ailleurs',
    },
  },

  {
    slug: 'checklist-administrative-mensuelle',
    type: 'modele',
    dossier: MODELES,
    categorie: 'Checklist',
    nom: 'Checklist administrative mensuelle',
    title: 'Checklist administrative mensuelle d’une entreprise · BrittAssist',
    description:
      "Facturer, encaisser, rapprocher, transmettre, vérifier les échéances, classer : la checklist administrative du mois, répartie sur quatre semaines.",
    h1: 'La checklist administrative du mois : quatre semaines, toujours les mêmes gestes.',
    lede:
      "L’administratif d’une petite entreprise ne comporte pas beaucoup de tâches. Il comporte les mêmes, qui reviennent. Ce qui épuise n’est pas de les faire, c’est de se demander chaque mois si on les a faites. Une liste répartie sur quatre semaines supprime la question.",
    reponseCourte: [
      "Une routine mensuelle tient en quatre semaines : l’argent qui entre, l’argent qui sort, les échéances, le rangement.",
      "Chaque ligne a une preuve : un fait que l’on peut constater, non une impression.",
      "La liste s’adapte une fois, puis ne change plus pendant un an.",
      "Elle ne contient aucune déclaration : celles-ci relèvent de votre expert-comptable.",
    ],
    sections: [
      {
        h2: 'La checklist',
        blocs: [
          {
            tableau: {
              legende: 'Checklist administrative mensuelle',
              colonnes: ['Semaine', 'À faire', 'La preuve que c’est fait'],
              lignes: [
                ['1 — Ce qui entre', 'Facturer les prestations du mois écoulé', 'Aucune prestation terminée sans facture'],
                ['1 — Ce qui entre', 'Pointer les encaissements reçus', 'Le tableau de suivi est à jour'],
                ['1 — Ce qui entre', 'Relancer les factures échues', 'Chaque facture échue a une date de relance'],
                ['2 — Ce qui sort', 'Rapprocher factures fournisseurs et paiements', 'Aucune facture sans statut'],
                ['2 — Ce qui sort', 'Rassembler les notes de frais du mois', 'Chaque dépense a son justificatif et son motif'],
                ['2 — Ce qui sort', 'Transmettre les pièces au cabinet comptable', 'L’envoi est daté, sans relance du cabinet'],
                ['3 — Ce qui arrive', 'Lire l’échéancier sur soixante jours', 'Chaque échéance a une personne et une date'],
                ['3 — Ce qui arrive', 'Vérifier les préavis des contrats', 'Aucune reconduction subie'],
                ['3 — Ce qui arrive', 'Renouveler les attestations qui expirent', 'Le dossier permanent est valide'],
                ['4 — Le rangement', 'Relever les boîtes génériques et les espaces en ligne', 'Aucun message de plus de sept jours non traité'],
                ['4 — Le rangement', 'Classer et nommer les documents du mois', 'Aucun fichier dans un dossier « à trier »'],
                ['4 — Le rangement', 'Mettre à jour les accès : arrivées, départs', 'Le registre correspond à la réalité'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Pourquoi quatre semaines',
        blocs: [
          {
            paragraphes: [
              "Une liste de douze lignes à faire « dans le mois » se fait le dernier jour, ou ne se fait pas. Répartie par semaine, elle devient quatre rendez-vous d’une heure. L’ordre suit l’importance : l’argent qui entre passe avant tout le reste, et le rangement, qui supporte un retard, vient en dernier.",
            ],
          },
        ],
      },
      {
        h2: 'L’adapter une fois',
        blocs: [
          {
            etapes: [
              "Rayez ce qui ne vous concerne pas : pas de salariés, pas de ligne sur les accès.",
              "Ajoutez ce qui est propre à votre métier : situations de travaux, attestations de formation, états de commission.",
              "Fixez le jour de chaque semaine, et tenez-le.",
              "Ne touchez plus à la liste pendant un an.",
            ],
          },
          {
            paragraphes: [
              "Une checklist qui change chaque mois n’est plus une routine. Notez les idées d’amélioration à part, et revoyez-les une fois par an, à la clôture.",
            ],
          },
        ],
      },
      {
        h2: 'Qui la tient',
        blocs: [
          {
            paragraphes: [
              "La liste est faite pour être confiée. Chaque ligne a une preuve précisément pour qu’une autre personne puisse la cocher sans vous consulter, et pour que vous puissiez vérifier en une minute. Ce qui vous revient tient en deux moments : la validation des paiements, et la lecture, en fin de mois, de ce qui n’a pas pu être fait et pourquoi.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Regrouper toute la liste sur la dernière semaine du mois.",
      "Cocher une ligne sans que la preuve soit constatée.",
      "Y ajouter une tâche à chaque incident, jusqu’à ce que plus personne ne la lise.",
    ],
    limites: [
      "Cette checklist ne contient ni déclarations fiscales ou sociales, ni paie : elles relèvent de votre expert-comptable et de votre cabinet de paie, selon leur propre calendrier.",
    ],
    faq: [
      {
        q: 'Une checklist est-elle utile dans une entreprise de trois personnes ?',
        a: "C’est là qu’elle l’est le plus : personne n’y a l’administratif pour métier, donc personne n’y pense par défaut. Douze lignes suffisent à ce que rien ne dépende de la mémoire de quelqu’un.",
      },
      {
        q: 'Que faire quand un mois saute ?',
        a: "Reprendre par la première semaine du mois en cours — l’argent qui entre — et rattraper le reste dans l’ordre. Ne cherchez pas à refaire le mois perdu ligne à ligne.",
      },
      {
        q: 'Peut-on confier entièrement la checklist mensuelle ?',
        a: "Presque. Tout se délègue, sauf la validation des paiements et les décisions que la lecture de l’échéancier fait apparaître : renégocier, résilier, renouveler.",
      },
    ],
    liens: [
      { href: '/guides/echeancier-administratif-entreprise', label: 'Construire son échéancier administratif' },
      { href: '/guides/pieces-pour-l-expert-comptable', label: 'Préparer les pièces pour l’expert-comptable' },
      { href: '/guides/modele-tableau-de-suivi-des-factures', label: 'Modèle de tableau de suivi des factures' },
      { href: '/guides/checklist-cloture-annuelle-administrative', label: 'Checklist de clôture annuelle' },
      { href: '/services/gestion-administrative', label: 'La prise en charge administrative' },
    ],
    cloture: 'Douze lignes par mois. Le reste de l’année, vous n’y pensez plus.',
    ...lot('D'),
    cadrage: {
      intention: 'modèle',
      motCle: 'checklist administrative mensuelle',
      variantes: ['tâches administratives mensuelles entreprise', 'routine administrative TPE', 'liste des tâches administratives récurrentes', 'calendrier mensuel administratif'],
      persona: 'Dirigeant de TPE qui veut une routine administrative que quelqu’un d’autre puisse tenir',
      objectif: 'Donner une checklist de douze lignes, chacune avec sa preuve',
      difference: 'Une routine mensuelle complète, là où les modèles existants portent chacun sur un seul suivi',
    },
  },
];
