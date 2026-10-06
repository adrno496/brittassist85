/**
 * Dossier « Situations de dirigeant ».
 *
 * Des pages d'entrée par le problème : le lecteur ne cherche pas une méthode,
 * il décrit ce qui lui arrive. Chaque page nomme la situation, donne un ordre
 * d'action, et dit honnêtement quand une assistance externalisée n'est pas la
 * bonne réponse.
 *
 * Aucun cas client n'est raconté : les exemples sont des situations types.
 */
import type { Guide } from '../guides.ts';

const DATE = '2026-10-03';
const DOSSIER = 'situations-de-dirigeant';

export const situations: Guide[] = [
  {
    slug: 'situations-de-dirigeant',
    type: 'pilier',
    dossier: DOSSIER,
    categorie: 'Dossier',
    nom: 'Situations de dirigeant : par où commencer',
    title: 'Débordé par l’administratif : par où commencer ? · BrittAssist',
    description:
      "Retard accumulé, absence, reprise, saison, première embauche : dix situations où l’administratif bloque, et la première chose à faire dans chacune.",
    h1: 'Quand l’administratif bloque : dix situations, et par où commencer.',
    lede:
      "On ne cherche pas « une méthode d’organisation ». On cherche comment sortir d’une situation précise : trois mois de papiers en retard, une assistante qui part, une saison qui arrive. Cette page part de là où vous êtes.",
    reponseCourte: [
      "Dix situations reviennent : le retard accumulé, le dirigeant par qui tout passe, l’absence d’une assistante, la reprise d’une entreprise, le pic saisonnier, la première embauche, le déménagement, l’appel d’offres, les déplacements fréquents, le changement d’outil.",
      "Dans chacune, la première chose à faire n’est pas de tout traiter : c’est de savoir ce qui est urgent, ce qui coûte, et ce qui peut attendre.",
      "Certaines se règlent par une mission ponctuelle, d’autres par une organisation durable. Quelques-unes ne relèvent pas d’une assistance.",
    ],
    sections: [
      {
        h2: 'Reconnaître sa situation',
        blocs: [
          {
            tableau: {
              legende: 'Dix situations et leur premier geste',
              colonnes: ['Ce que vous vivez', 'Le premier geste', 'La forme de réponse'],
              lignes: [
                ['Des mois de retard administratif', 'Trier par conséquence, pas par ancienneté', 'Mission ponctuelle, puis suivi'],
                ['Tout passe par vous', 'Lister ce qui vous est demandé en une semaine', 'Organisation durable'],
                ['Votre assistante est absente ou part', 'Sécuriser les échéances des trente prochains jours', 'Relais temporaire'],
                ['Vous reprenez une entreprise', 'Faire l’inventaire des contrats et des accès', 'Mission ponctuelle'],
                ['La saison arrive', 'Préparer avant, alléger pendant', 'Renfort saisonnier'],
                ['Vous embauchez pour la première fois', 'Poser le calendrier des formalités', 'Appui ponctuel, avec votre expert-comptable'],
                ['Vous déménagez vos bureaux', 'Dresser la liste de qui prévenir', 'Mission ponctuelle'],
                ['Vous répondez à un appel d’offres', 'Réunir les pièces avant de rédiger', 'Appui ponctuel'],
                ['Vous êtes toujours en déplacement', 'Créer un point de chute unique', 'Organisation durable'],
                ['Vous changez d’outil', 'Décider de ce qui est repris, et de ce qui ne l’est pas', 'Mission ponctuelle'],
              ],
            },
          },
        ],
      },
      {
        h2: 'La règle commune : trier avant de traiter',
        blocs: [
          {
            paragraphes: [
              "Dans une situation tendue, le réflexe est de s’attaquer à la pile par le haut. C’est l’ordre le plus inefficace. Tout ce qui attend n’a pas le même prix : une échéance fiscale, une facture non émise et un classement en retard ne se valent pas.",
            ],
            etapes: [
              "Ce qui a une date et une sanction : à traiter d’abord.",
              "Ce qui fait rentrer de l’argent : ensuite.",
              "Ce qui débloque quelqu’un d’autre : puis.",
              "Le reste : planifié, sans culpabilité.",
            ],
          },
        ],
      },
      {
        h2: 'Mission ponctuelle ou organisation durable',
        blocs: [
          {
            paragraphes: [
              "Certaines situations ont un début et une fin : un retard à rattraper, un déménagement, une reprise. Une mission délimitée, au devis, y répond. D’autres sont permanentes : être le point de passage de tout, voyager sans cesse. Elles appellent une organisation qui dure, sinon le désordre revient au bout de trois mois.",
              "Une situation ponctuelle révèle souvent un besoin durable. Un retard de six mois n’est pas un accident : c’est le signe que personne n’a le temps de tenir l’administratif au fil de l’eau.",
            ],
          },
        ],
      },
      {
        h2: 'Quand ce n’est pas une question d’assistance',
        blocs: [
          {
            liste: [
              "Un litige, un contrôle, une mise en demeure : c’est d’abord l’affaire d’un avocat ou de votre expert-comptable.",
              "Une difficulté de trésorerie : parlez-en à votre expert-comptable et à votre banque avant tout.",
              "Un problème de personne ou de management : aucune organisation administrative ne le règle.",
              "Un outil inadapté : il faut le changer, pas le faire tenir par quelqu’un.",
            ],
          },
        ],
      },
    ],
    limites: [
      "Les situations décrites sont des cas types, non des témoignages. Votre cas a ses particularités : un échange permet de les prendre en compte.",
    ],
    faq: [
      {
        q: 'Ma situation n’est pas dans la liste. Que faire ?',
        a: "Décrivez-la : ce qui s’accumule, ce qui a une date, ce que vous n’arrivez plus à faire. La méthode reste la même — trier par conséquence — et un échange suffit à dire ce qui peut être pris en charge.",
      },
      {
        q: 'Peut-on faire appel à BrittAssist pour une seule mission ?',
        a: "Oui. Les missions ponctuelles existent, sur devis, lorsque le besoin a un résultat et un périmètre délimités.",
      },
      {
        q: 'Faut-il attendre que la situation soit réglée pour déléguer ?',
        a: "Non. C’est souvent pendant la remise en ordre que la future organisation se dessine : ce qui doit être suivi chaque mois apparaît de lui-même.",
      },
    ],
    liens: [
      { href: '/guides/rattraper-un-retard-administratif', label: 'Rattraper un retard administratif' },
      { href: '/guides/dirigeant-goulot-d-etranglement', label: 'Quand tout passe par le dirigeant' },
      { href: '/guides/quand-prendre-une-assistante', label: 'Quand prendre une assistante' },
      { href: '/tarifs', label: 'Les formules et les missions ponctuelles' },
      { href: '/contact', label: 'Décrire votre situation' },
    ],
    cloture: 'On ne sort pas d’un débordement en travaillant plus vite, mais en décidant quoi traiter d’abord.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'navigation',
      motCle: 'débordé par l’administratif entreprise',
      variantes: ['dirigeant débordé que faire', 'administratif qui s’accumule', 'par où commencer administratif en retard'],
      persona: 'Dirigeant en situation de débordement',
      objectif: 'Faire reconnaître sa situation et orienter vers la page qui la traite',
      difference: 'Entrée par le problème vécu, avec le premier geste et la forme de réponse pour chaque cas',
    },
  },

  {
    slug: 'rattraper-un-retard-administratif',
    type: 'situation',
    dossier: DOSSIER,
    categorie: 'Situation',
    nom: 'Rattraper un retard administratif',
    title: 'Rattraper un retard administratif en 4 semaines · BrittAssist',
    description:
      "Plusieurs mois de papiers en retard : comment trier par conséquence, traiter l’urgent, remettre le circuit en route et résorber le reste sans s’épuiser.",
    h1: 'Rattraper un retard administratif : un plan en quatre semaines.',
    lede:
      "Le retard administratif a une propriété désagréable : plus il grossit, moins on a envie de l’ouvrir. Et moins on l’ouvre, plus il grossit. On n’en sort pas par un week-end héroïque, mais par un ordre.",
    reponseCourte: [
      "On ne rattrape pas un retard par ordre chronologique, mais par ordre de conséquence : ce qui a une date et une sanction passe en premier.",
      "Le plan tient en quatre semaines : état des lieux, urgences, remise en route du circuit, résorption du reste.",
      "La règle qui sauve : tout ce qui arrive à partir d’aujourd’hui est traité à l’heure, même si l’ancien attend.",
    ],
    sections: [
      {
        h2: 'Semaine 1 : l’état des lieux',
        blocs: [
          {
            etapes: [
              "Rassemblez tout au même endroit : papier, e-mails marqués, pièces jointes, espaces en ligne.",
              "Ne traitez rien. Triez en quatre piles.",
              "Pile 1 : ce qui porte une date limite ou vient d’une administration, d’un tribunal, d’un assureur.",
              "Pile 2 : ce qui fait rentrer de l’argent — factures à émettre, relances, devis à envoyer.",
              "Pile 3 : ce que quelqu’un attend — comptable, client, fournisseur.",
              "Pile 4 : le reste — classement, mises à jour, archives.",
            ],
          },
          {
            paragraphes: [
              "À la fin de la semaine, vous savez ce que contient le retard. C’est déjà la moitié du soulagement : l’inconnu pèse plus que le travail.",
            ],
          },
        ],
      },
      {
        h2: 'Semaine 2 : les urgences et l’argent',
        blocs: [
          {
            paragraphes: [
              "Traitez la pile 1 en entier, en commençant par les dates dépassées : un appel pour demander un délai vaut mieux qu’un silence. Puis la pile 2 : chaque facture émise et chaque relance envoyée paie le temps que vous y passez.",
              "Si une échéance fiscale ou sociale est manquée, prévenez votre expert-comptable avant d’agir : il sait ce qui se régularise et comment.",
            ],
          },
        ],
      },
      {
        h2: 'Semaine 3 : remettre le circuit en route',
        blocs: [
          {
            liste: [
              "Un point de chute unique pour tout ce qui arrive.",
              "Un jour fixe par semaine pour traiter.",
              "Un échéancier, même court, des dates à venir.",
              "Un envoi mensuel au cabinet comptable.",
            ],
          },
          {
            paragraphes: [
              "C’est l’étape qu’on est tenté de sauter, et la seule qui empêche le retard de revenir. Sans circuit, vous serez au même point dans six mois.",
            ],
          },
        ],
      },
      {
        h2: 'Semaine 4 et après : résorber le reste',
        blocs: [
          {
            paragraphes: [
              "Les piles 3 et 4 se traitent par tranches d’une heure, à rythme fixe. Commencez par ce qui débloque quelqu’un. Pour le classement ancien, n’allez pas plus loin que nécessaire : l’exercice en cours et les contrats actifs d’abord ; le reste peut être rangé par année, sans tri fin.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Commencer par le classement parce que c’est le moins désagréable.",
      "Tout traiter dans l’ordre d’arrivée.",
      "Rattraper sans remettre de circuit : le retard se reforme.",
    ],
    limites: [
      "En cas d’échéance fiscale ou sociale manquée, de courrier d’huissier ou de mise en demeure, consultez d’abord votre expert-comptable ou un avocat.",
    ],
    faq: [
      {
        q: 'Peut-on confier un rattrapage à quelqu’un d’extérieur ?',
        a: "Oui : c’est un cas type de mission ponctuelle. Le tri, l’inventaire, la préparation des pièces, les relances et la remise en route du circuit se délèguent. Les décisions et les signatures restent les vôtres.",
      },
      {
        q: 'Combien de temps faut-il ?',
        a: "Cela dépend du volume et de ce qu’il contient. Quatre semaines est un repère pour reprendre la main ; la résorption complète peut s’étaler davantage, sans que cela soit grave, une fois les urgences traitées.",
      },
      {
        q: 'Faut-il tout garder ?',
        a: "Non. Une part du retard est faite de documents sans suite à donner. Le tri par conséquence fait apparaître ce qui peut simplement être classé ou jeté, dans le respect des durées de conservation.",
      },
    ],
    liens: [
      { href: '/guides/organiser-l-administratif-de-son-entreprise', label: 'Organiser l’administratif de son entreprise' },
      { href: '/guides/echeancier-administratif-entreprise', label: 'Construire son échéancier administratif' },
      { href: '/guides/pieces-pour-l-expert-comptable', label: 'Préparer les pièces pour l’expert-comptable' },
      { href: '/services/gestion-administrative', label: 'Confier sa gestion administrative' },
      { href: '/guides/mission-ponctuelle-de-secretariat', label: 'Confier le rattrapage comme une mission ponctuelle' },
    ],
    cloture: 'Un retard se rattrape dans l’ordre de ce qu’il coûte, pas dans l’ordre où il est arrivé.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'problème-solution',
      motCle: 'rattraper un retard administratif',
      variantes: ['retard de papiers entreprise', 'administratif en retard que faire', 'se remettre à jour administrativement'],
      persona: 'Dirigeant ou indépendant avec plusieurs mois de retard',
      objectif: 'Donner un plan daté qui commence par le tri',
      difference: 'Tri par conséquence en quatre piles, et remise en route du circuit avant la fin du rattrapage',
    },
  },

  {
    slug: 'dirigeant-goulot-d-etranglement',
    type: 'situation',
    dossier: DOSSIER,
    categorie: 'Situation',
    nom: 'Quand tout passe par le dirigeant',
    title: 'Dirigeant goulot d’étranglement : en sortir · BrittAssist',
    description:
      "Chaque question, chaque validation, chaque relance revient vers vous : comment repérer ce qui n’a pas besoin de vous, et le faire sortir de votre bureau.",
    h1: '« Tout passe par moi » : sortir du rôle de goulot d’étranglement.',
    lede:
      "Vous êtes compétent, disponible, et vous connaissez tous les dossiers. C’est exactement le problème. Chacun a pris l’habitude de passer par vous, parce que c’est plus sûr et plus rapide. Résultat : rien n’avance quand vous n’êtes pas là, et vous n’êtes jamais vraiment là.",
    reponseCourte: [
      "Un dirigeant devient goulot d’étranglement quand il est le seul à détenir une information, un accès ou un droit de décider.",
      "La sortie passe par trois gestes : relever ce qui vous est demandé, classer chaque demande, et transférer l’information, l’accès ou la règle qui manquait.",
      "Beaucoup de sollicitations ne demandent pas une décision : elles demandent une information que vous seul avez.",
    ],
    sections: [
      {
        h2: 'Le relevé d’une semaine',
        blocs: [
          {
            paragraphes: [
              "Pendant cinq jours, notez chaque sollicitation : qui, sur quoi, et ce que vous avez répondu. Pas besoin d’outil, une liste suffit. À la fin de la semaine, vous avez la carte de ce qui passe par vous.",
            ],
          },
        ],
      },
      {
        h2: 'Classer chaque sollicitation',
        blocs: [
          {
            tableau: {
              legende: 'Les quatre natures de sollicitation',
              colonnes: ['Nature', 'Exemple', 'La réponse durable'],
              lignes: [
                ['Une information', '« Où est le contrat Durand ? »', 'Rendre l’information accessible : classement, registre'],
                ['Un accès', '« Tu peux me renvoyer la facture ? »', 'Ouvrir l’accès à la bonne personne'],
                ['Une règle', '« Je peux accorder ce délai ? »', 'Écrire la règle, avec un plafond'],
                ['Une vraie décision', '« On prend ce client ? »', 'Elle reste chez vous'],
              ],
            },
          },
          {
            paragraphes: [
              "Bien souvent, la dernière ligne est la moins fournie. Les trois premières se règlent une fois, et cessent de revenir.",
            ],
          },
        ],
      },
      {
        h2: 'Faire sortir ce qui peut sortir',
        blocs: [
          {
            etapes: [
              "Les informations : un espace partagé où chacun trouve sans vous demander.",
              "Les accès : des comptes nominatifs, plutôt que vous comme intermédiaire.",
              "Les règles : dix règles écrites — remises, délais, dépenses, priorités — avec leurs plafonds.",
              "Le suivi : quelqu’un d’autre que vous relance, confirme, vérifie.",
              "Les décisions : groupées, préparées, prises à heure fixe plutôt qu’au fil de l’eau.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qui résiste',
        blocs: [
          {
            paragraphes: [
              "Le plus difficile n’est pas d’organiser, c’est de laisser faire. La première fois qu’une décision est prise sans vous, elle ne sera pas exactement celle que vous auriez prise. Si elle reste dans le cadre que vous avez fixé, c’est une réussite. Reprendre la main à ce moment-là apprend à tout le monde qu’il vaut mieux continuer à vous demander.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Répondre plus vite, pour désengorger : vous confirmez que vous êtes le bon guichet.",
      "Déléguer la tâche sans transférer l’information ou l’accès nécessaires.",
      "Écrire des règles, puis les contredire au premier cas.",
    ],
    faq: [
      {
        q: 'Est-ce un problème d’organisation ou de management ?',
        a: "Les deux. La partie organisation — information, accès, règles, suivi — se traite avec des outils simples et peut être confiée. La partie management — faire confiance, accepter une décision différente — vous revient.",
      },
      {
        q: 'Une assistante peut-elle réduire ce goulot ?',
        a: "Sur ce qui relève de l’information, du suivi et de la coordination, oui : elle devient le point de passage des demandes d’organisation, et vous ne voyez plus que ce qui demande votre avis.",
      },
      {
        q: 'Par quoi commencer ?',
        a: "Par le relevé d’une semaine. Sans lui, vous agirez sur l’impression la plus récente, pas sur ce qui pèse réellement.",
      },
    ],
    liens: [
      { href: '/guides/niveaux-d-autonomie-delegation', label: 'Les niveaux d’autonomie' },
      { href: '/guides/filtrer-les-appels-et-messages', label: 'Filtrer les appels et les sollicitations' },
      { href: '/guides/rediger-une-procedure-interne', label: 'Rédiger une procédure interne' },
      { href: '/assistante/dirigeants-pme', label: 'Assistance pour dirigeants de PME' },
    ],
    cloture: 'Si rien n’avance sans vous, ce n’est pas que vous êtes indispensable. C’est que tout est rangé dans votre tête.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'problème-solution',
      motCle: 'dirigeant goulot d’étranglement',
      variantes: ['tout passe par moi dirigeant', 'dirigeant indispensable entreprise', 'dirigeant sollicité en permanence'],
      persona: 'Dirigeant de TPE ou PME par qui tout transite',
      objectif: 'Faire distinguer ce qui demande une décision de ce qui demande une information, un accès ou une règle',
      difference: 'Classe les sollicitations en quatre natures, dont une seule est une vraie décision',
    },
  },

  {
    slug: 'remplacer-une-assistante-absente',
    type: 'situation',
    dossier: DOSSIER,
    categorie: 'Situation',
    nom: 'Remplacer une assistante absente',
    title: 'Assistante absente ou sur le départ : assurer le relais · BrittAssist',
    description:
      "Congé maternité, arrêt, démission : comment sécuriser les échéances, récupérer le savoir-faire et tenir l’intérim sans recruter dans l’urgence.",
    h1: 'Votre assistante est absente, ou s’en va : tenir le relais.',
    lede:
      "On mesure ce que faisait une assistante le jour où elle n’est plus là. Les factures qui partaient toutes seules, les rendez-vous qui se plaçaient, les relances qui étaient faites : tout cela reposait sur une personne, et sur ce qu’elle avait en tête.",
    reponseCourte: [
      "Premier geste : sécuriser les échéances des trente prochains jours — paie, déclarations, factures, rendez-vous.",
      "Deuxième geste : récupérer le savoir-faire tant qu’il est disponible — note de passation, accès, procédures.",
      "Troisième geste : choisir la forme du relais — collègue, intérim, prestataire externalisée — selon la durée et le besoin de présence.",
      "Une absence prévue se prépare un mois avant. Une absence soudaine se traite par ordre de conséquence.",
    ],
    sections: [
      {
        h2: 'Si l’absence est prévue',
        blocs: [
          {
            etapes: [
              "Un mois avant : demandez une note de passation — tâches récurrentes, calendrier, contacts, emplacements.",
              "Trois semaines avant : faites-la relire par la personne qui prendra le relais, qui pose ses questions.",
              "Deux semaines avant : un temps de travail en doublon, sur les tâches réelles.",
              "La dernière semaine : transfert des accès, vérification de l’échéancier.",
              "Pendant l’absence : un point court, à intervalles fixes, entre vous et le relais.",
            ],
          },
        ],
      },
      {
        h2: 'Si l’absence est soudaine',
        blocs: [
          {
            liste: [
              "Récupérez les accès : messagerie professionnelle, outils, espaces partagés, selon ce que permet votre organisation.",
              "Regardez l’agenda et la boîte de réception des deux dernières semaines : ils disent ce qui est en cours.",
              "Listez les échéances du mois : paie, déclarations, factures à émettre, paiements à faire.",
              "Prévenez les interlocuteurs habituels : expert-comptable, principaux clients et fournisseurs.",
              "Notez ce que vous découvrez : c’est la note de passation que vous n’avez pas eue.",
            ],
          },
          {
            paragraphes: [
              "L’accès à la messagerie d’un salarié absent obéit à des règles : faites-vous conseiller si vous n’avez pas prévu ce cas.",
            ],
          },
        ],
      },
      {
        h2: 'Les formes de relais',
        blocs: [
          {
            tableau: {
              legende: 'Comparer les formes de relais',
              colonnes: ['Forme', 'Elle convient si', 'Sa limite'],
              lignes: [
                ['Répartition en interne', 'L’absence est courte et la charge modérée', 'Surcharge des collègues'],
                ['Intérim ou contrat à durée déterminée', 'Une présence sur site est nécessaire', 'Délai de recrutement et de prise en main'],
                ['Assistante externalisée', 'Le travail peut se faire à distance, sur un périmètre défini', 'Pas de présence physique ni d’accueil'],
                ['Combinaison', 'Une part sur site, une part à distance', 'Demande de répartir clairement'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Ce que l’absence révèle',
        blocs: [
          {
            paragraphes: [
              "Une absence difficile à compenser signale que trop de choses n’étaient écrites nulle part. Le retour ou le remplacement est le bon moment pour y remédier : procédures courtes, accès nominatifs, échéancier partagé. Non par défiance envers la personne, mais pour que son absence ne mette plus l’entreprise en difficulté.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Recruter dans l’urgence, sur le premier profil disponible.",
      "Répartir la charge sans dire qui fait quoi.",
      "Attendre le dernier jour pour la passation.",
    ],
    limites: [
      "Le remplacement d’un salarié absent obéit au droit du travail : motif du contrat, durée, formalités. Ces points relèvent de votre expert-comptable ou d’un conseil en droit social.",
    ],
    faq: [
      {
        q: 'Une assistante externalisée peut-elle assurer un remplacement de congé maternité ?',
        a: "Sur la part du poste qui se fait à distance, oui : administratif, facturation, agenda, coordination. Ce qui exige une présence — accueil, courrier physique, logistique du site — demande une autre solution. Le périmètre se définit au devis.",
      },
      {
        q: 'Et au retour de la personne ?',
        a: "La prestation s’arrête, ou se réduit à ce qui gagnait à rester externalisé. Une note de passation est remise, dans l’autre sens.",
      },
      {
        q: 'Combien de temps faut-il pour prendre le relais ?',
        a: "Avec une note de passation et des accès prêts, les tâches récurrentes sont reprises en quelques jours. Sans eux, il faut reconstituer : comptez davantage.",
      },
    ],
    liens: [
      { href: '/guides/modele-note-de-passation', label: 'Modèle de note de passation' },
      { href: '/services/support-equipes', label: 'Un renfort ponctuel pour vos équipes' },
      { href: '/guides/assistante-independante-ou-salariee', label: 'Indépendante ou salariée' },
      { href: '/guides/registre-des-acces-entreprise', label: 'Tenir un registre des accès' },
      { href: '/guides/absence-de-son-assistante-independante', label: 'Si c’est votre prestataire indépendante qui s’absente' },
      { href: '/guides/temps-partage-interim-alternance-ou-prestataire', label: 'Intérim, temps partagé, alternance : comparer' },
    ],
    cloture: 'Une absence bien préparée ne se remarque pas. Une absence subie apprend ce qu’il aurait fallu écrire.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'problème-solution',
      motCle: 'remplacer une assistante absente',
      variantes: ['remplacement assistante congé maternité', 'assistante en arrêt que faire', 'intérim assistante de direction'],
      persona: 'Dirigeant dont l’assistante salariée s’absente ou démissionne',
      objectif: 'Donner l’ordre d’action et comparer les formes de relais',
      difference: 'Distingue absence prévue et soudaine, et dit ce qu’une assistante à distance ne peut pas reprendre',
    },
  },

  {
    slug: 'reprise-d-entreprise-administratif',
    type: 'situation',
    dossier: DOSSIER,
    categorie: 'Situation',
    nom: 'Reprendre une entreprise : l’administratif',
    title: 'Reprise d’entreprise : remettre l’administratif à plat · BrittAssist',
    description:
      "Contrats, accès, échéances, habitudes de l’ancien dirigeant : l’inventaire administratif à mener dans les cent premiers jours d’une reprise.",
    h1: 'Reprendre une entreprise : l’inventaire administratif des cent premiers jours.',
    lede:
      "L’audit d’acquisition a regardé les comptes, les contrats majeurs, les risques. Il n’a pas regardé où se trouvent les mots de passe, qui connaît le code de l’alarme, ni quel abonnement se renouvelle le mois prochain. C’est pourtant ce qui occupera vos premières semaines.",
    reponseCourte: [
      "Après une reprise, quatre inventaires sont à mener : les contrats et abonnements, les accès, les échéances, et les habitudes non écrites.",
      "Les accès sont le plus urgent : beaucoup sont encore au nom, à l’adresse ou sur le téléphone de l’ancien dirigeant.",
      "L’ancien dirigeant est la meilleure source, tant qu’il est disponible : interrogez-le avec une liste.",
    ],
    sections: [
      {
        h2: 'Les quatre inventaires',
        blocs: [
          {
            tableau: {
              legende: 'Inventaires administratifs d’une reprise',
              colonnes: ['Inventaire', 'Ce qu’on cherche', 'Où le trouver'],
              lignes: [
                ['Contrats et abonnements', 'Tout ce qui engage l’entreprise, avec échéances et préavis', 'Dossiers, relevés bancaires sur douze mois'],
                ['Accès', 'Comptes, administrateurs, seconds facteurs, adresses de récupération', 'Chaque outil, l’ancien dirigeant'],
                ['Échéances', 'Déclarations, assurances, contrôles, renouvellements', 'Expert-comptable, contrats, courriers'],
                ['Habitudes', 'Ce qui se fait « comme ça » sans être écrit', 'Les salariés, l’ancien dirigeant'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les accès d’abord',
        blocs: [
          {
            etapes: [
              "Listez tous les outils et espaces en ligne : banque, impôts, Urssaf, messagerie, nom de domaine, site, réseaux sociaux, logiciels métier.",
              "Pour chacun : qui est administrateur, quelle adresse de récupération, quel téléphone reçoit les codes.",
              "Transférez l’administration à votre nom, et remplacez les adresses et numéros personnels de l’ancien dirigeant.",
              "Changez les mots de passe partagés.",
              "Tenez le registre : il n’existait probablement pas.",
            ],
          },
          {
            paragraphes: [
              "Le nom de domaine et la messagerie sont les deux accès à sécuriser en premier : ils commandent la réinitialisation de tous les autres.",
            ],
          },
        ],
      },
      {
        h2: 'La liste de questions à l’ancien dirigeant',
        blocs: [
          {
            modele: {
              titre: 'À lui demander tant qu’il est disponible',
              lignes: [
                "Quels contrats renégociez-vous chaque année, et avec qui ?",
                "Quels clients et fournisseurs ont un arrangement particulier, non écrit ?",
                "Qu’est-ce qui revient à date fixe et que personne d’autre ne connaît ?",
                "Où sont les originaux : statuts, baux, titres, polices ?",
                "Quels comptes en ligne sont à votre nom personnel ?",
                "Qu’est-ce que vous faisiez vous-même, que je ne vois dans aucune fiche de poste ?",
              ],
            },
          },
        ],
      },
      {
        h2: 'Ce qu’il ne faut pas changer tout de suite',
        blocs: [
          {
            paragraphes: [
              "Une reprise donne envie de tout remettre en ordre. Résistez pendant quelques semaines : observez d’abord ce qui fonctionne. Un classement étrange mais connu de tous vaut mieux, au début, qu’un classement logique que personne ne sait utiliser. Inventoriez d’abord, réorganisez ensuite.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Laisser les accès au nom de l’ancien dirigeant « en attendant ».",
      "Découvrir un contrat à sa reconduction.",
      "Réorganiser le classement avant d’avoir compris l’existant.",
    ],
    limites: [
      "Les formalités juridiques de la reprise, les transferts de contrats et les déclarations relèvent de vos conseils. Cette page traite de l’organisation qui vient après.",
    ],
    faq: [
      {
        q: 'Cet inventaire ne fait-il pas partie de l’audit d’acquisition ?',
        a: "L’audit porte sur ce qui a une incidence sur le prix et les risques. Il descend rarement jusqu’aux accès, aux abonnements et aux usages du quotidien.",
      },
      {
        q: 'Peut-on confier cet inventaire ?',
        a: "Oui, c’est un travail méthodique qui se délègue : recensement, registre des contrats et des accès, échéancier. Les entretiens avec l’ancien dirigeant et les décisions restent les vôtres.",
      },
      {
        q: 'Quand commencer ?',
        a: "Dès la première semaine pour les accès. Le reste s’étale sur les cent premiers jours, pendant la période d’accompagnement par le cédant quand elle existe.",
      },
    ],
    liens: [
      { href: '/guides/suivi-des-contrats-et-abonnements', label: 'Suivre ses contrats et abonnements' },
      { href: '/guides/registre-des-acces-entreprise', label: 'Tenir un registre des accès' },
      { href: '/guides/echeancier-administratif-entreprise', label: 'Construire son échéancier administratif' },
      { href: '/services/gestion-administrative', label: 'Confier sa gestion administrative' },
    ],
    cloture: 'On reprend une entreprise avec ses comptes. On la dirige avec ses accès.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'problème-solution',
      motCle: 'reprise d’entreprise organisation administrative',
      variantes: ['reprendre une entreprise premiers jours', 'administratif après rachat d’entreprise', 'checklist reprise d’entreprise'],
      persona: 'Repreneur de TPE ou PME dans ses premières semaines',
      objectif: 'Donner les quatre inventaires à mener et l’ordre de priorité',
      difference: 'Traite ce que l’audit d’acquisition ne regarde pas : accès, abonnements, usages',
    },
  },

  {
    slug: 'pic-d-activite-saisonnier',
    type: 'situation',
    dossier: DOSSIER,
    categorie: 'Situation',
    nom: 'Absorber un pic d’activité saisonnier',
    title: 'Activité saisonnière : l’administratif de la saison · BrittAssist',
    description:
      "Avant, pendant, après : comment répartir l’administratif d’une activité saisonnière pour que la haute saison ne se paie pas en retard à l’automne.",
    h1: 'Activité saisonnière : l’administratif se joue avant et après, pas pendant.',
    lede:
      "Quatre mois où il est impossible de faire autre chose que produire, huit mois pour tout le reste. L’erreur est de traiter l’administratif comme s’il devait être fait au fil de l’eau : pendant la saison, il ne le sera pas.",
    reponseCourte: [
      "L’administratif d’une activité saisonnière se répartit en trois temps : préparer avant, réduire au minimum pendant, clôturer après.",
      "Pendant la saison, seul l’indispensable est traité : la paie, les encaissements, les obligations à date.",
      "Tout ce qui peut être préparé à l’avance doit l’être : contrats, plannings, modèles, commandes.",
      "Un renfort limité à la saison est une forme d’assistance courante.",
    ],
    sections: [
      {
        h2: 'Les trois temps',
        blocs: [
          {
            tableau: {
              legende: 'L’administratif d’une saison',
              colonnes: ['Temps', 'Ce qui se fait', 'Ce qui ne doit pas s’y trouver'],
              lignes: [
                ['Avant', 'Recrutements, contrats, fournisseurs, tarifs, modèles, assurances', 'Rien de ce qui peut attendre l’après-saison'],
                ['Pendant', 'Encaissements, paie, obligations à date, imprévus', 'Classement, renégociations, projets'],
                ['Après', 'Clôture, bilan, relances, renégociations, classement', 'La culpabilité de ne pas l’avoir fait plus tôt'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Avant : tout ce qui peut être prêt',
        blocs: [
          {
            etapes: [
              "Les recrutements et leurs formalités : dossiers complets, contrats préparés.",
              "Les fournisseurs : tarifs confirmés, conditions de livraison, contacts d’urgence.",
              "Les documents types : devis, factures, confirmations de réservation, réponses fréquentes.",
              "Les échéances de la saison, relevées et inscrites.",
              "Les assurances et contrôles obligatoires, vérifiés.",
              "Un point avec l’expert-comptable : ce qu’il lui faut, et quand.",
            ],
          },
        ],
      },
      {
        h2: 'Pendant : le minimum, sans faute',
        blocs: [
          {
            liste: [
              "Un point de chute unique pour tout ce qui arrive : rien n’est traité, mais rien n’est perdu.",
              "Un passage hebdomadaire d’une heure, ou confié : ce qui a une date, et seulement cela.",
              "Les encaissements suivis : c’est la trésorerie de l’année.",
              "Les variables de paie transmises à temps.",
            ],
          },
          {
            paragraphes: [
              "C’est le moment où un renfort extérieur a le plus de valeur : il ne vous demande rien. Vous envoyez une phrase, le sujet est pris en charge.",
            ],
          },
        ],
      },
      {
        h2: 'Après : clôturer la saison',
        blocs: [
          {
            etapes: [
              "Relancer ce qui reste dû.",
              "Rassembler les pièces de la période pour le cabinet comptable.",
              "Faire le bilan : ce qui a manqué, ce qui a coûté trop cher, ce qu’il faut préparer plus tôt.",
              "Renégocier les contrats, tant que la saison est fraîche dans les mémoires.",
              "Noter les améliorations : dans huit mois, vous aurez oublié.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Compter rattraper l’administratif « pendant les jours calmes » de la saison.",
      "Signer les contrats des saisonniers la veille de leur arrivée.",
      "Reprendre la saison suivante sans avoir fait le bilan de la précédente.",
    ],
    limites: [
      "Les contrats de travail saisonniers et leurs formalités relèvent de votre expert-comptable ou d’un conseil en droit social.",
    ],
    faq: [
      {
        q: 'Peut-on faire appel à une assistance uniquement pendant la saison ?',
        a: "Oui, c’est une demande courante sur les territoires saisonniers. Le plus efficace est de commencer un peu avant : la préparation fait gagner plus de temps que le renfort en pleine saison.",
      },
      {
        q: 'Que faire des e-mails qui s’accumulent en saison ?',
        a: "Un tri, pas un traitement : ce qui a une date, ce qui concerne un client en cours, et le reste, qui attend l’automne. Un tiers peut le faire pour vous.",
      },
      {
        q: 'Quand faire le bilan ?',
        a: "Dans les deux semaines qui suivent la fin de la saison. Au-delà, la mémoire des difficultés s’efface, et avec elle les améliorations.",
      },
    ],
    liens: [
      { href: '/assistante-independante/les-sables-d-olonne', label: 'Une assistance qui tient pendant la saison' },
      { href: '/guides/premiere-embauche-formalites-administratives', label: 'Embaucher : l’administratif à prévoir' },
      { href: '/guides/echeancier-administratif-entreprise', label: 'Construire son échéancier administratif' },
      { href: '/services/support-equipes', label: 'Un renfort ponctuel pour vos équipes' },
      { href: '/guides/forfait-secretariat-externalise-depassement', label: 'Adapter le forfait à une activité qui varie' },
    ],
    cloture: 'La saison se gagne en mai et se referme en octobre. Entre les deux, on produit.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'problème-solution',
      motCle: 'gestion administrative activité saisonnière',
      variantes: ['administratif haute saison', 'organisation entreprise saisonnière', 'préparer la saison touristique administratif'],
      persona: 'Dirigeant d’une activité saisonnière : tourisme, restauration, nautisme, commerce',
      objectif: 'Répartir l’administratif sur l’année plutôt que de le subir en saison',
      difference: 'Assume que rien ne se fait pendant la saison, et organise tout autour de cette réalité',
    },
  },

  {
    slug: 'premiere-embauche-formalites-administratives',
    type: 'reference',
    dossier: DOSSIER,
    categorie: 'Repère',
    nom: 'Embaucher : l’administratif à prévoir',
    title: 'Première embauche : les formalités administratives · BrittAssist',
    description:
      "DPAE, contrat, registre du personnel, information du salarié, visite médicale : les formalités d’une embauche et leur calendrier, d’après Service-Public.",
    h1: 'Première embauche : les formalités, et le calendrier à tenir.',
    lede:
      "Recruter votre premier salarié fait de vous un employeur, avec des obligations qui ont chacune leur délai. Aucune n’est compliquée. Le risque est de les découvrir une par une, après la date.",
    reponseCourte: [
      "L’embauche d’un salarié s’accompagne de formalités obligatoires : déclaration préalable à l’embauche, contrat de travail, registre unique du personnel, information du salarié, visite d’information et de prévention, affiliation aux caisses de retraite complémentaire.",
      "La déclaration préalable à l’embauche se fait avant la prise de poste, au plus tôt dans les huit jours qui précèdent.",
      "Le salarié doit recevoir des informations écrites sur la relation de travail au plus tard le septième jour, puis au plus tard un mois après l’embauche, selon leur nature.",
      "Le contrat, la paie et les déclarations se préparent avec votre expert-comptable.",
    ],
    sections: [
      {
        h2: 'Les formalités',
        blocs: [
          {
            tableau: {
              legende: 'Formalités d’embauche d’un salarié du secteur privé',
              colonnes: ['Formalité', 'Quand', 'Remarque'],
              lignes: [
                ['Déclaration préalable à l’embauche (DPAE)', 'Avant la prise de fonction, au plus tôt 8 jours avant', 'Une copie ou l’accusé de réception est remis au salarié'],
                ['Contrat de travail écrit', 'À l’embauche', 'Obligatoire selon la nature du contrat'],
                ['Inscription au registre unique du personnel', 'Dès le premier salarié', 'Tenu à jour à chaque entrée et sortie'],
                ['Information du salarié sur la relation de travail', 'Au plus tard le 7e jour, puis au plus tard 1 mois après l’embauche', 'Selon la nature des informations'],
                ['Visite d’information et de prévention, ou examen médical d’aptitude', 'À organiser par l’employeur', 'Auprès du service de prévention et de santé au travail'],
                ['Affiliation aux institutions de retraite complémentaire', 'Par la déclaration sociale nominative', '—'],
              ],
            },
          },
          {
            paragraphes: [
              "D’autres obligations peuvent s’ajouter selon votre convention collective et votre activité : complémentaire santé, prévoyance, document unique d’évaluation des risques. Votre expert-comptable vous donne la liste applicable.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que fait la première DPAE',
        blocs: [
          {
            paragraphes: [
              "Pour un premier salarié, la déclaration préalable à l’embauche déclenche plusieurs démarches à la fois : l’immatriculation de l’employeur au régime général, l’affiliation à l’assurance chômage, la demande d’adhésion à un service de prévention et de santé au travail, et la demande de visite. Elle se fait en ligne.",
            ],
          },
        ],
      },
      {
        h2: 'Le calendrier pratique',
        blocs: [
          {
            etapes: [
              "Trois semaines avant : arrêter avec l’expert-comptable le contrat, la rémunération, la convention collective applicable.",
              "Deux semaines avant : réunir les pièces du salarié — identité, numéro de sécurité sociale, RIB, justificatifs.",
              "Dans les huit jours qui précèdent : faire la DPAE.",
              "Le jour de l’arrivée : contrat signé, registre du personnel complété, documents d’information remis.",
              "Dans le premier mois : compléter l’information due au salarié, organiser la visite, vérifier les affiliations.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qui se délègue, et ce qui ne se délègue pas',
        blocs: [
          {
            liste: [
              "Se délègue : réunir les pièces, tenir le calendrier, préparer le dossier du salarié, organiser son arrivée, tenir le registre à jour, transmettre les éléments au cabinet.",
              "Relève du cabinet comptable ou d’un conseil : le contrat, la paie, les déclarations sociales.",
              "Reste chez vous : le choix du candidat, la rémunération, la signature.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Faire la DPAE après le premier jour de travail.",
      "Commencer sans contrat signé.",
      "Oublier le registre du personnel, parce qu’il n’y a qu’un salarié.",
    ],
    limites: [
      "Cette page reprend les formalités listées par Service-Public, page vérifiée par l’administration le 1er juin 2026. Elle ne remplace ni votre expert-comptable, ni un conseil en droit social. BrittAssist n’établit ni contrats de travail, ni bulletins de paie.",
    ],
    faq: [
      {
        q: 'Peut-on faire la DPAE le jour même de l’embauche ?',
        a: "Elle doit être faite avant la prise de fonction ou le début de la période d’essai. La faire quelques jours avant évite tout risque.",
      },
      {
        q: 'Une assistante peut-elle effectuer la DPAE ?',
        a: "La déclaration engage l’employeur ; elle est souvent réalisée par le cabinet comptable ou par l’entreprise elle-même. Une assistante prépare les éléments, tient le calendrier et s’assure que rien n’est oublié.",
      },
      {
        q: 'Que préparer pour l’arrivée, au-delà des formalités ?',
        a: "Le poste de travail, les accès, les contacts utiles, le programme de la première semaine. C’est la part de l’accueil qui ne figure dans aucun texte, et celle dont le salarié se souviendra.",
      },
    ],
    liens: [
      { href: '/guides/registre-des-acces-entreprise', label: 'Tenir un registre des accès' },
      { href: '/guides/assistante-independante-ou-salariee', label: 'Assistante indépendante ou salariée' },
      { href: '/guides/echeancier-administratif-entreprise', label: 'Construire son échéancier administratif' },
      { href: '/services/support-equipes', label: 'Un renfort ponctuel pour vos équipes' },
      { href: '/guides/recruter-apres-avoir-externalise', label: 'Créer le poste après avoir externalisé' },
      { href: '/guides/depart-d-un-salarie-checklist-administrative', label: 'Le jour où un salarié s’en va' },
    ],
    sources: [
      { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F23107', label: 'Service-Public Entreprendre — Démarches et formalités d’embauche d’un salarié du secteur privé' },
      { href: 'https://www.urssaf.fr/accueil/employeur/embaucher-gerer-salaries/embaucher/declaration-prealable-embauche.html', label: 'Urssaf — Réaliser la déclaration préalable à l’embauche' },
    ],
    cloture: 'Une embauche réussie commence par une date que personne n’a manquée.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'référence',
      motCle: 'formalités embauche premier salarié',
      variantes: ['DPAE délai', 'démarches administratives embauche', 'checklist embauche salarié'],
      persona: 'Dirigeant qui recrute pour la première fois',
      objectif: 'Donner la liste officielle et un calendrier pratique',
      difference: 'Transforme la liste officielle en calendrier, et sépare ce qui se délègue de ce qui relève du cabinet',
    },
  },

  {
    slug: 'demenagement-de-bureaux',
    type: 'situation',
    dossier: DOSSIER,
    categorie: 'Situation',
    nom: 'Déménager ses bureaux',
    title: 'Déménagement de bureaux : la checklist administrative · BrittAssist',
    description:
      "Formalités, contrats à transférer, interlocuteurs à prévenir, documents à mettre à jour : la liste administrative d’un déménagement d’entreprise.",
    h1: 'Déménager ses bureaux : tout ce qui change avec l’adresse.',
    lede:
      "Les cartons sont la partie facile. Ce qui prend du temps, c’est l’adresse : elle figure sur vos statuts, vos factures, vos contrats, votre site et dans les fichiers de trois cents interlocuteurs. Chacun doit être prévenu, dans le bon ordre.",
    reponseCourte: [
      "Un déménagement d’entreprise comporte quatre volets administratifs : les formalités légales, les contrats à transférer ou résilier, les interlocuteurs à prévenir, les documents à mettre à jour.",
      "Le transfert du siège est une formalité à part entière, à préparer avec votre conseil avant le déménagement.",
      "Les préavis des anciens contrats — bail, énergie, télécommunications — commandent le calendrier.",
    ],
    sections: [
      {
        h2: 'Les quatre volets',
        blocs: [
          {
            tableau: {
              legende: 'Volets administratifs d’un déménagement de bureaux',
              colonnes: ['Volet', 'Exemples', 'Qui'],
              lignes: [
                ['Formalités légales', 'Transfert du siège ou de l’établissement, modification des statuts si nécessaire', 'Dirigeant, avec avocat ou expert-comptable'],
                ['Contrats', 'Bail, énergie, internet, téléphonie, assurance, ménage, alarme', 'Suivi délégable, décisions au dirigeant'],
                ['Interlocuteurs', 'Clients, fournisseurs, banque, administrations, La Poste', 'Délégable'],
                ['Documents', 'Factures, devis, signature d’e-mail, site, papeterie, fiches en ligne', 'Délégable'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Le calendrier',
        blocs: [
          {
            etapes: [
              "Trois mois avant : relever les préavis des contrats actuels ; lancer les consultations pour le nouveau local.",
              "Deux mois avant : préparer la formalité de transfert avec votre conseil ; commander la connexion internet du nouveau local, dont le délai est souvent le plus long.",
              "Un mois avant : prévenir les principaux interlocuteurs ; organiser le transfert du courrier.",
              "Deux semaines avant : assurance du nouveau local, accès, clés, alarme.",
              "La semaine du déménagement : mise à jour des documents, du site, des fiches en ligne.",
              "Le mois suivant : vérifier que plus rien n’arrive à l’ancienne adresse ; solder les anciens contrats.",
            ],
          },
        ],
      },
      {
        h2: 'Qui prévenir',
        blocs: [
          {
            liste: [
              "Les administrations : la formalité de transfert en informe une partie ; vérifiez vos espaces en ligne.",
              "La banque et les assureurs.",
              "Les clients et fournisseurs, avec la date d’effet.",
              "Les organismes sociaux, les caisses, la médecine du travail.",
              "Les abonnements et les comptes en ligne où l’adresse figure.",
              "Les salariés, par écrit, selon ce que prévoient leurs contrats.",
            ],
          },
        ],
      },
      {
        h2: 'Les documents à mettre à jour',
        blocs: [
          {
            modele: {
              titre: 'Liste de contrôle',
              lignes: [
                "Modèles de devis, de factures et de courriers.",
                "Conditions générales et mentions légales du site.",
                "Signatures d’e-mail de toute l’équipe.",
                "Fiches d’établissement en ligne et annuaires.",
                "Cartes de visite, papeterie, tampons.",
                "Dossier permanent : extrait d’immatriculation, statuts, RIB, attestations.",
              ],
            },
          },
        ],
      },
    ],
    erreurs: [
      "Commander la connexion internet deux semaines avant.",
      "Oublier un préavis, et payer deux loyers ou deux abonnements.",
      "Émettre des factures à l’ancienne adresse pendant trois mois.",
    ],
    limites: [
      "Les formalités de transfert de siège, la modification des statuts et les conséquences pour les contrats de travail relèvent de votre avocat ou de votre expert-comptable.",
    ],
    faq: [
      {
        q: 'Par quoi commencer ?',
        a: "Par les préavis des contrats en cours : ce sont eux qui fixent la date la plus proche à laquelle vous pouvez partir sans payer deux fois.",
      },
      {
        q: 'Qu’est-ce qui se délègue dans un déménagement ?',
        a: "Presque tout le volet administratif : relevé des contrats, consultations, information des interlocuteurs, mise à jour des documents, suivi du calendrier. Les formalités légales et les signatures restent chez vous et vos conseils.",
      },
      {
        q: 'Combien de temps dure le « sillage » d’un déménagement ?',
        a: "Plusieurs mois : des courriers continuent d’arriver à l’ancienne adresse. Un suivi de courrier et une vérification mensuelle permettent de corriger les derniers fichiers.",
      },
    ],
    liens: [
      { href: '/guides/suivi-des-contrats-et-abonnements', label: 'Suivre ses contrats et abonnements' },
      { href: '/guides/dossier-permanent-entreprise', label: 'Constituer le dossier permanent' },
      { href: '/services/suivi-prestataires', label: 'Faire suivre ses prestataires' },
      { href: '/services/coordination', label: 'Faire coordonner ses interlocuteurs' },
      { href: '/guides/mentions-obligatoires-courriers-et-emails', label: 'Signatures et en-têtes à corriger après un changement de siège' },
    ],
    cloture: 'On déménage en un week-end. On change d’adresse en trois mois.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'problème-solution',
      motCle: 'déménagement de bureaux checklist',
      variantes: ['déménagement d’entreprise démarches', 'changement d’adresse entreprise qui prévenir', 'organiser un déménagement de bureaux'],
      persona: 'Dirigeant de TPE ou PME qui change de locaux',
      objectif: 'Donner la liste administrative complète et son calendrier',
      difference: 'Se concentre sur l’adresse et ses conséquences, pas sur les cartons',
    },
  },

  {
    slug: 'appel-d-offres-dossier-de-candidature',
    type: 'reference',
    dossier: DOSSIER,
    categorie: 'Repère',
    nom: 'Constituer un dossier d’appel d’offres',
    title: 'Appel d’offres : constituer le dossier de candidature · BrittAssist',
    description:
      "Candidature, offre, DUME ou formulaires DC1 et DC2, attestations : les pièces d’une réponse à un marché public, et ce qui se prépare à l’avance.",
    h1: 'Répondre à un appel d’offres : le dossier administratif, sans y passer la nuit.',
    lede:
      "Une réponse à un marché public se perd rarement sur le prix à minuit moins cinq. Elle se perd sur une attestation périmée ou une pièce manquante, découvertes au moment de déposer. Cette part du dossier se prépare bien avant la consultation.",
    reponseCourte: [
      "Un dossier de réponse comprend deux parties : la candidature, qui présente l’entreprise et ses capacités, et l’offre, qui répond au besoin.",
      "Pour la candidature, l’entreprise peut utiliser le document unique de marché européen (DUME), ou les formulaires DC1 et DC2.",
      "Le DC1 est la lettre de candidature, avec la déclaration sur l’honneur ; le DC2 présente le candidat et ses capacités économiques, financières, techniques et professionnelles.",
      "Les pièces administratives sont les mêmes d’une consultation à l’autre : elles se tiennent prêtes.",
    ],
    sections: [
      {
        h2: 'Les deux parties du dossier',
        blocs: [
          {
            tableau: {
              legende: 'Candidature et offre',
              colonnes: ['Partie', 'Ce qu’elle contient', 'Qui la produit'],
              lignes: [
                ['Candidature', 'Identité de l’entreprise, déclaration sur l’honneur, capacités, références, attestations', 'Largement préparable à l’avance'],
                ['Offre', 'Acte d’engagement, prix, mémoire technique, planning', 'Le dirigeant et ses équipes, pour chaque consultation'],
              ],
            },
          },
          {
            paragraphes: [
              "La liste exacte des pièces figure dans le règlement de la consultation : c’est lui qui fait foi, et il varie d’un acheteur à l’autre.",
            ],
          },
        ],
      },
      {
        h2: 'Les pièces de la candidature',
        blocs: [
          {
            liste: [
              "Le DUME, ou les formulaires DC1 et DC2.",
              "La déclaration sur l’honneur de ne pas être dans un cas d’interdiction de soumissionner.",
              "Le chiffre d’affaires des trois derniers exercices disponibles.",
              "Les références, les moyens humains et matériels, les qualifications.",
              "Les attestations fiscales et sociales, les attestations d’assurance, selon ce qu’exige le règlement et le stade de la procédure.",
            ],
          },
        ],
      },
      {
        h2: 'Le dossier permanent des marchés',
        blocs: [
          {
            etapes: [
              "Tenez à jour un dossier contenant les pièces qui reviennent : extrait d’immatriculation, attestations, assurances, RIB.",
              "Préparez une présentation de l’entreprise, des moyens et des références, à adapter.",
              "Gardez un modèle rempli de DC1 et DC2, ou votre DUME, avec les informations stables.",
              "Inscrivez à l’échéancier les dates de validité des attestations.",
              "Conservez chaque dossier déposé : il sert de base au suivant.",
            ],
          },
        ],
      },
      {
        h2: 'Le calendrier d’une réponse',
        blocs: [
          {
            paragraphes: [
              "Dès la lecture du règlement, dressez la liste des pièces demandées et cochez celles qui sont prêtes. Ce qui manque se demande tout de suite : une attestation ou une référence signée ne s’obtiennent pas la veille. Prévoyez de déposer la veille de la date limite : les plateformes de dépôt refusent les dossiers en retard, à la minute près.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Découvrir le règlement de la consultation trois jours avant l’échéance.",
      "Joindre une attestation qui a expiré.",
      "Déposer dans la dernière heure, sur une plateforme que l’on découvre.",
    ],
    limites: [
      "Cette page décrit la part administrative. Le prix, le mémoire technique et la stratégie de réponse sont votre métier. Les règles de la commande publique sont celles publiées par l’administration ; pour un marché important, un accompagnement spécialisé peut se justifier.",
    ],
    faq: [
      {
        q: 'DUME ou formulaires DC1 et DC2 ?',
        a: "Les deux sont admis pour présenter sa candidature. Le DUME est un formulaire électronique standardisé au niveau européen. Le règlement de la consultation précise ce que l’acheteur attend.",
      },
      {
        q: 'Qu’est-ce qui se délègue dans une réponse ?',
        a: "Le relevé des pièces demandées, la collecte et la vérification des attestations, la mise en forme, le dépôt sur la plateforme et le suivi des questions. Le contenu technique et le prix restent les vôtres.",
      },
      {
        q: 'Faut-il une signature électronique ?',
        a: "Cela dépend de ce que demande le règlement et du stade de la procédure. Vérifiez-le dès la lecture du dossier : obtenir un certificat de signature prend du temps.",
      },
    ],
    liens: [
      { href: '/guides/dossier-permanent-entreprise', label: 'Constituer le dossier permanent' },
      { href: '/guides/signature-electronique-niveaux-et-usages', label: 'La signature électronique : niveaux et usages' },
      { href: '/assistante/artisans-btp', label: 'L’administratif d’une entreprise du bâtiment' },
      { href: '/services/gestion-administrative', label: 'Confier sa gestion administrative' },
    ],
    sources: [
      { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F32144', label: 'Service-Public Entreprendre — Répondre à un marché public : préparer sa candidature' },
    ],
    cloture: 'Un marché se gagne sur l’offre. Il se perd sur une pièce oubliée.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'référence',
      motCle: 'dossier de candidature appel d’offres',
      variantes: ['répondre à un marché public pièces', 'DC1 DC2 DUME', 'dossier administratif appel d’offres'],
      persona: 'Dirigeant de TPE ou PME qui répond à des marchés publics',
      objectif: 'Expliquer la partie administrative et ce qui se prépare à l’avance',
      difference: 'Sépare la candidature, préparable et délégable, de l’offre, qui reste le métier du dirigeant',
    },
  },

  {
    slug: 'dirigeant-souvent-en-deplacement',
    type: 'situation',
    dossier: DOSSIER,
    categorie: 'Situation',
    nom: 'Diriger en étant souvent en déplacement',
    title: 'Dirigeant en déplacement : tenir l’administratif · BrittAssist',
    description:
      "Courrier qui attend, signatures en retard, décisions prises dans un train : comment organiser l’administratif quand on n’est presque jamais au bureau.",
    h1: 'Toujours en déplacement : un administratif qui ne dépend plus du bureau.',
    lede:
      "Pour celui qui passe trois jours par semaine sur la route, le bureau n’est plus un lieu de travail. C’est un endroit où le courrier s’empile et où les parapheurs attendent. Tant que l’administratif dépend d’un lieu, il prendra du retard.",
    reponseCourte: [
      "Quand on est rarement au bureau, l’administratif doit pouvoir se traiter de n’importe où : documents numérisés, signature à distance, validation depuis un téléphone.",
      "Il faut un point fixe : une personne ou un circuit qui reçoit, trie, prépare, et ne vous transmet que ce qui demande votre action.",
      "Les décisions se groupent : un créneau fixe, plutôt que des validations éparpillées entre deux rendez-vous.",
    ],
    sections: [
      {
        h2: 'Les trois dépendances à supprimer',
        blocs: [
          {
            tableau: {
              legende: 'Ce qui retient l’administratif au bureau',
              colonnes: ['Dépendance', 'Le symptôme', 'La réponse'],
              lignes: [
                ['Le papier', 'Le courrier attend votre retour', 'Numérisation à l’arrivée, originaux classés'],
                ['La signature', 'Les documents attendent votre passage', 'Signature électronique, parapheur numérique'],
                ['Votre présence', 'Les décisions attendent une réunion', 'Dossiers préparés, validés à distance'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Le point fixe',
        blocs: [
          {
            paragraphes: [
              "Quand le dirigeant bouge, quelque chose doit rester immobile. Ce point fixe reçoit tout ce qui arrive — courrier, appels, demandes —, trie, traite ce qui peut l’être, et vous envoie un résumé. Il peut être une personne sur place, une assistante à distance, ou les deux : l’une numérise, l’autre traite.",
            ],
          },
        ],
      },
      {
        h2: 'Le résumé quotidien',
        blocs: [
          {
            modele: {
              titre: 'Message de fin de journée',
              lignes: [
                "À signer : 2 documents dans le parapheur — un devis, un bon de commande.",
                "À décider : la demande de délai de M. Bernard. Recommandation : accepter jusqu’au 15.",
                "Pour information : courrier de l’assureur, simple avis d’échéance, inscrit à l’échéancier.",
                "Demain : départ 7 h 12, feuille de route en pièce jointe.",
              ],
            },
          },
          {
            paragraphes: [
              "Lu en trois minutes dans un train, ce message remplace une demi-journée de présence. Vous répondez par trois mots ; le reste suit.",
            ],
          },
        ],
      },
      {
        h2: 'Le créneau de décision',
        blocs: [
          {
            etapes: [
              "Fixez un créneau quotidien court, toujours à la même heure, pour valider et signer.",
              "Faites préparer chaque décision : le contexte en deux lignes, les options, une recommandation.",
              "Signez à distance ce qui peut l’être.",
              "Réservez à votre présence ce qui l’exige réellement : un entretien, une négociation, un original à signer.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Traiter l’administratif « au retour » : il y a toujours un autre départ.",
      "Valider dans la précipitation, entre deux rendez-vous, ce qui mérite cinq minutes.",
      "Garder des circuits qui exigent une signature manuscrite sans raison.",
    ],
    faq: [
      {
        q: 'Une assistante à distance peut-elle traiter du courrier papier ?',
        a: "Oui, s’il est numérisé à l’arrivée, par une personne sur place ou un service dédié. Le tri, le traitement et le suivi se font ensuite à distance.",
      },
      {
        q: 'Que faire des documents qui exigent un original signé ?',
        a: "Ils sont regroupés et préparés pour votre prochain passage, avec la liste de ce qu’il faut signer. Ils sont peu nombreux une fois la signature électronique en place.",
      },
      {
        q: 'Cela fonctionne-t-il à l’étranger ?',
        a: "Oui : le résumé et le créneau de décision s’adaptent au fuseau horaire. C’est l’un des cas où un point fixe à distance est le plus utile.",
      },
    ],
    liens: [
      { href: '/assistante-independante/a-distance', label: 'Travailler à distance, partout en France' },
      { href: '/guides/signature-electronique-niveaux-et-usages', label: 'La signature électronique : niveaux et usages' },
      { href: '/guides/traitement-du-courrier-entrant', label: 'Traiter le courrier entrant' },
      { href: '/services/organisation-deplacements', label: 'Faire organiser ses déplacements' },
      { href: '/guides/domiciliation-ou-secretariat-externalise', label: 'Courrier numérisé par un domiciliataire : qui le traite' },
    ],
    cloture: 'Quand le dirigeant bouge, c’est l’organisation qui doit rester en place.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'problème-solution',
      motCle: 'dirigeant souvent en déplacement organisation',
      variantes: ['gérer son entreprise à distance', 'administratif dirigeant nomade', 'dirigeant jamais au bureau'],
      persona: 'Dirigeant commercial ou multi-sites, souvent sur la route',
      objectif: 'Supprimer la dépendance de l’administratif au bureau',
      difference: 'Nomme trois dépendances — papier, signature, présence — et y répond par un point fixe',
    },
  },

  {
    slug: 'changer-d-outil-de-gestion',
    type: 'situation',
    dossier: DOSSIER,
    categorie: 'Situation',
    nom: 'Changer d’outil de gestion',
    title: 'Changer de logiciel de gestion : préparer la bascule · BrittAssist',
    description:
      "Facturation, gestion commerciale, stockage : comment préparer un changement d’outil, décider de ce qui est repris, et basculer sans perdre de données.",
    h1: 'Changer d’outil de gestion : préparer la bascule.',
    lede:
      "Un changement de logiciel échoue rarement à cause du logiciel. Il échoue parce que les anciennes données ont été déversées telles quelles, doublons compris, et que personne ne sait plus laquelle des deux listes de clients est la bonne.",
    reponseCourte: [
      "Un changement d’outil se prépare en quatre décisions : ce qu’on reprend, ce qu’on nettoie, la date de bascule, et ce qu’on garde de l’ancien.",
      "On ne reprend pas tout : les fiches actives, les documents en cours, et l’historique strictement utile.",
      "La bascule se fait à une date nette, de préférence un début de mois ou d’exercice.",
      "L’ancien outil reste consultable le temps des durées de conservation.",
    ],
    sections: [
      {
        h2: 'Les quatre décisions',
        blocs: [
          {
            tableau: {
              legende: 'Décisions à prendre avant la bascule',
              colonnes: ['Décision', 'La question', 'La règle courante'],
              lignes: [
                ['Reprendre', 'Quelles données entrent dans le nouvel outil ?', 'Les clients et fournisseurs actifs, les documents en cours'],
                ['Nettoyer', 'Dans quel état entrent-elles ?', 'Doublons fusionnés, fiches complétées, inactifs écartés'],
                ['Dater', 'Quand bascule-t-on ?', 'À une date nette : début de mois ou d’exercice'],
                ['Conserver', 'Que devient l’ancien outil ?', 'Export complet, accès en lecture pendant la durée de conservation'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Nettoyer avant de migrer',
        blocs: [
          {
            etapes: [
              "Exportez les fichiers clients et fournisseurs de l’ancien outil.",
              "Fusionnez les doublons, corrigez les intitulés, complétez ce qui manque : adresse de facturation, numéro Siren, contact.",
              "Écartez ce qui est inactif depuis longtemps : il reste dans l’export d’archive.",
              "Faites valider la liste par la personne qui connaît les clients.",
              "Importez dans le nouvel outil un fichier propre.",
            ],
          },
          {
            paragraphes: [
              "C’est le travail le plus ingrat et le plus rentable du projet. Un fichier propre fait la différence entre un outil adopté et un outil subi.",
            ],
          },
        ],
      },
      {
        h2: 'La bascule',
        blocs: [
          {
            liste: [
              "Une date, annoncée à tous.",
              "Avant cette date : tout dans l’ancien outil. Après : tout dans le nouveau. Jamais les deux.",
              "Pour la facturation : une nouvelle série de numérotation, clairement identifiée, et la trace de la bascule.",
              "Les documents en cours — devis ouverts, factures impayées — repris un par un, pas en masse.",
              "Un test complet avant : un devis, une facture, un avoir, un export.",
            ],
          },
        ],
      },
      {
        h2: 'Après la bascule',
        blocs: [
          {
            paragraphes: [
              "Gardez un export complet de l’ancien outil, dans un format lisible sans lui, et rangez-le dans le dossier de l’exercice. Vérifiez la durée pendant laquelle l’accès en lecture reste possible, et à quel prix. Revoyez enfin les accès : qui utilise le nouvel outil, avec quels droits. C’est le bon moment pour ne pas reproduire les comptes partagés de l’ancien.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Migrer dix ans de données sans tri.",
      "Utiliser les deux outils en parallèle pendant trois mois.",
      "Résilier l’ancien outil avant d’avoir exporté.",
    ],
    limites: [
      "Le paramétrage technique et comptable du nouvel outil relève de son éditeur, de votre prestataire informatique et de votre expert-comptable. BrittAssist n’intègre pas de logiciels.",
    ],
    faq: [
      {
        q: 'Qui peut faire le nettoyage des données ?',
        a: "C’est un travail administratif minutieux, qui se délègue : dédoublonnage, complétion, mise en forme, sous le contrôle de quelqu’un qui connaît les clients. Il gagne à être fait avant l’intervention de l’intégrateur.",
      },
      {
        q: 'Quelle est la meilleure date pour basculer ?',
        a: "Le début d’un exercice ou d’un mois, hors période de forte activité. Une bascule en pleine saison cumule deux difficultés.",
      },
      {
        q: 'Faut-il reprendre l’historique des factures ?',
        a: "Rarement dans le nouvel outil. Les factures passées doivent rester accessibles et conservées, ce que permet un export ; elles n’ont pas besoin d’y être ressaisies.",
      },
    ],
    liens: [
      { href: '/guides/choisir-un-logiciel-de-facturation', label: 'Choisir un logiciel de facturation' },
      { href: '/guides/numerotation-des-factures-et-avoirs', label: 'Numéroter ses factures et corriger par un avoir' },
      { href: '/guides/duree-de-conservation-documents-entreprise', label: 'Combien de temps conserver les documents' },
      { href: '/guides/registre-des-acces-entreprise', label: 'Tenir un registre des accès' },
      { href: '/services/gestion-administrative', label: 'Confier sa gestion administrative' },
    ],
    cloture: 'Un nouvel outil ne range pas les données. Il range celles qu’on lui donne propres.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'problème-solution',
      motCle: 'changer de logiciel de gestion',
      variantes: ['migration logiciel de facturation', 'reprise de données changement de logiciel', 'changer d’outil de gestion entreprise'],
      persona: 'Dirigeant de TPE qui change de logiciel de facturation ou de gestion',
      objectif: 'Faire préparer la bascule par quatre décisions',
      difference: 'Met le nettoyage des données avant la migration, et impose une date de bascule nette',
    },
  },
];
