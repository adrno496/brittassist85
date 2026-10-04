/**
 * Dossier « Externaliser et déléguer ».
 *
 * Il prolonge les douze premiers guides (guides.ts), qui restent les pages de
 * référence sur le prix, le statut et le choix. Les pages ci-dessous traitent
 * ce qu'ils ne couvraient pas : le contrat, le risque de requalification, les
 * niveaux d'autonomie, la fin de collaboration, les limites du métier.
 *
 * Ce qui décrit BrittAssist reprend uniquement ce que le site publie déjà :
 * périmètre, hors-périmètre, tarif de départ, préavis des CGV.
 */
import type { Guide } from '../guides.ts';

const DATE = '2026-10-03';
const DOSSIER = 'externaliser-son-assistanat';

const SOURCE_INDEPENDANT = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F1691', label: 'Service-Public Entreprendre — Comment différencier un travailleur indépendant d’un salarié' };
const SOURCE_RECOURS_ABUSIF = { href: 'https://travail-emploi.gouv.fr/le-recours-abusif-aux-travailleurs-independants', label: 'Ministère du Travail — Le recours abusif aux travailleurs indépendants' };
const SOURCE_CNIL_SOUS_TRAITANCE = { href: 'https://www.cnil.fr/fr/securite-gerer-la-sous-traitance', label: 'CNIL — Sécurité : gérer la sous-traitance' };
const SOURCE_CNIL_IA = { href: 'https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative', label: 'CNIL — Questions-réponses sur l’utilisation d’un système d’IA générative' };

export const externaliser: Guide[] = [
  {
    slug: 'externaliser-son-assistanat',
    type: 'pilier',
    dossier: DOSSIER,
    categorie: 'Dossier',
    nom: 'Externaliser son assistanat : le parcours complet',
    title: 'Externaliser son assistanat : le parcours complet · BrittAssist',
    description:
      "De la décision au premier mois, puis à la fin de collaboration : les sept étapes d’une assistance externalisée, et le guide qui détaille chacune.",
    h1: 'Externaliser son assistanat : le parcours, de la décision à la sortie.',
    lede:
      "Confier une partie de son organisation à quelqu’un d’extérieur n’est pas un achat, c’est un trajet. Il a un début — la question « est-ce pour moi ? » — et une fin, qu’il vaut mieux avoir prévue. Cette page le parcourt dans l’ordre et renvoie, à chaque étape, au guide qui la traite à fond.",
    reponseCourte: [
      "Externaliser son assistanat consiste à confier un périmètre défini — administratif, agenda, déplacements, coordination — à une professionnelle indépendante, sans créer de poste.",
      "Le parcours compte sept étapes : décider, choisir une forme, comparer les prix, sélectionner, contractualiser, démarrer, puis faire vivre la collaboration et savoir la terminer.",
      "Ce qui fait réussir une externalisation n’est pas le prestataire seul : c’est un périmètre écrit, des accès maîtrisés et un rythme de suivi.",
      "L’externalisation ne convient pas à tout : un besoin constant, sur site, à plein temps relève d’un recrutement.",
    ],
    sections: [
      {
        h2: 'Les sept étapes',
        blocs: [
          {
            tableau: {
              legende: 'Le parcours d’une externalisation',
              colonnes: ['Étape', 'La question à trancher', 'Le guide'],
              lignes: [
                ['1. Décider', 'Est-ce le moment, et pour quelles tâches ?', 'Quand prendre une assistante · Quelles tâches déléguer'],
                ['2. Choisir une forme', 'Salariée, indépendante, télésecrétariat, Private Office ?', 'Indépendante ou salariée · Le secrétariat externalisé'],
                ['3. Comparer les prix', 'Que couvre réellement chaque devis ?', 'Prix d’une assistante externalisée · Rentabilité'],
                ['4. Sélectionner', 'Sur quels critères retenir une personne ?', 'Choisir une assistante externalisée'],
                ['5. Contractualiser', 'Que doit contenir le contrat ?', 'Le contrat de prestation · Le risque de requalification'],
                ['6. Démarrer', 'Quels accès, quelles premières demandes ?', 'Le premier mois · Confidentialité et accès'],
                ['7. Faire vivre et terminer', 'Comment suivre, ajuster, et sortir proprement ?', 'Le point hebdomadaire · La fin de collaboration'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Décider : le besoin avant la solution',
        blocs: [
          {
            paragraphes: [
              "La première erreur est de chercher un prestataire avant de savoir ce qu’on veut lui confier. Le bon point de départ est une semaine observée : ce qui revient, ce qui attend, ce qui finit toujours par vous retomber dessus. C’est de cette liste que sortent le périmètre, le volume et, par conséquent, la forme d’assistance qui convient.",
              "Le critère qui sépare le recrutement de l’externalisation est la régularité. Un besoin stable, quotidien, qui exige une présence dans vos locaux appelle un poste. Un besoin variable, traitable à distance, concentré sur quelques domaines appelle une prestation.",
            ],
          },
        ],
      },
      {
        h2: 'Contractualiser : trois écrits, pas un',
        blocs: [
          {
            liste: [
              "Le devis ou la proposition : il décrit le périmètre, le volume attendu, les limites et le prix.",
              "Les conditions de la prestation : durée, préavis, confidentialité, responsabilité, traitement des données personnelles.",
              "La liste des accès : quels outils, avec quels droits, ouverts à quelle date.",
            ],
          },
          {
            paragraphes: [
              "Une assistante indépendante n’est pas une salariée : elle organise elle-même son travail, sans lien de subordination. Le contrat et, surtout, la pratique quotidienne doivent respecter cette frontière.",
            ],
          },
        ],
      },
      {
        h2: 'Démarrer, puis tenir dans la durée',
        blocs: [
          {
            paragraphes: [
              "Le premier mois sert à apprendre vos habitudes, pas à tout prendre en charge d’un coup. Deux ou trois domaines suffisent pour commencer ; le périmètre s’élargit quand la confiance est installée. Ensuite, la collaboration tient à trois choses simples : un canal unique pour les demandes, un statut clair pour chacune, et un point régulier pour ajuster.",
              "Prévoir la sortie dès le départ n’a rien de pessimiste. Savoir comment les accès seront retirés et les dossiers restitués est ce qui permet d’en ouvrir beaucoup, sans arrière-pensée.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Choisir sur le tarif horaire sans comparer ce que chaque offre couvre.",
      "Démarrer sans périmètre écrit, puis découvrir des attentes différentes.",
      "Donner tous les accès le premier jour, ou n’en donner aucun.",
      "Traiter une prestataire indépendante comme une salariée : horaires imposés, instructions permanentes, exclusivité.",
    ],
    limites: [
      "Ce dossier décrit une démarche générale. Votre situation sociale et fiscale relève de votre expert-comptable ; un contrat sensible, d’un avocat.",
    ],
    faq: [
      {
        q: 'Combien de temps faut-il pour mettre en place une assistance externalisée ?',
        a: "Le cadrage — périmètre, accès, premières demandes — se fait en quelques échanges. La montée en autonomie, elle, prend plusieurs semaines : c’est le temps d’apprendre vos préférences, vos interlocuteurs et vos habitudes de décision.",
      },
      {
        q: 'Faut-il tout déléguer d’un coup ?',
        a: "Non. Commencer par deux ou trois domaines permet de régler la méthode avant d’élargir. Les domaines les plus simples à confier d’abord sont ceux qui se répètent et dont le résultat se vérifie facilement.",
      },
      {
        q: 'À partir de quel budget cela a-t-il un sens ?',
        a: "Cela dépend de la forme choisie. L’accompagnement BrittAssist démarre à 590 € par mois avec Executive Essentials, sur un périmètre défini au devis. D’autres formes — tarif horaire, forfait d’heures, mission ponctuelle — existent ; le guide sur les prix les compare.",
      },
    ],
    liens: [
      { href: '/guides/comment-deleguer', label: 'Commencer à déléguer' },
      { href: '/guides/prix-assistante-de-direction-externalisee', label: 'Le prix d’une assistante externalisée' },
      { href: '/guides/choisir-assistante-externalisee', label: 'Choisir une assistante externalisée' },
      { href: '/guides/premier-mois-assistante-externalisee', label: 'Le premier mois' },
      { href: '/tarifs', label: 'Les tarifs BrittAssist et le devis' },
    ],
    cloture: 'Une externalisation réussie se décide une fois, puis se règle chaque semaine.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'navigation',
      motCle: 'externaliser son assistanat',
      variantes: ['externaliser assistante de direction', 'assistance externalisée guide', 'comment externaliser son administratif'],
      persona: 'Dirigeant ou indépendant qui envisage de déléguer pour la première fois',
      objectif: 'Donner la vue d’ensemble du parcours et orienter vers le guide de chaque étape',
      difference: 'Présente l’externalisation comme un trajet en sept étapes, sortie comprise, et non comme un achat',
    },
  },

  {
    slug: 'quelles-taches-deleguer-a-une-assistante',
    type: 'guide',
    dossier: DOSSIER,
    categorie: 'Décider',
    nom: 'Quelles tâches déléguer à une assistante',
    title: 'Quelles tâches déléguer à une assistante ? La liste · BrittAssist',
    description:
      "Administratif, agenda, déplacements, prestataires, sphère personnelle : ce qui se délègue bien, ce qui se délègue mal, et le test pour trancher.",
    h1: 'Quelles tâches déléguer à une assistante — et lesquelles garder.',
    lede:
      "La question n’est jamais « que peut-elle faire ? ». Une assistante expérimentée peut faire beaucoup. La bonne question est : qu’est-ce qui, dans votre semaine, n’a pas besoin de vous pour être bien fait ?",
    reponseCourte: [
      "Se délègue bien ce qui est répétitif, vérifiable, et qui ne demande pas votre expertise de métier : suivi administratif, facturation, agenda, déplacements, relances, coordination de prestataires.",
      "Se délègue mal ce qui engage l’entreprise ou repose sur votre jugement : fixer un prix, signer, recruter, arbitrer un conflit, conseiller un client.",
      "Le test tient en une question : si le résultat était moyen, le verriez-vous tout de suite ? Si oui, la tâche se délègue sans risque.",
    ],
    sections: [
      {
        h2: 'Par domaine : ce qui part, ce qui reste',
        blocs: [
          {
            tableau: {
              legende: 'Tâches déléguables par domaine',
              colonnes: ['Domaine', 'Se délègue', 'Reste chez vous'],
              lignes: [
                ['Administratif', 'Classement, échéances, courriers, pièces pour le comptable', 'Les décisions et les signatures'],
                ['Facturation', 'Émission, envoi, suivi des encaissements, relances', 'Le prix, les remises, le contentieux'],
                ['Agenda', 'Prise de rendez-vous, confirmations, reports, préparation', 'Vos priorités et vos refus'],
                ['Déplacements', 'Transports, hébergement, feuille de route, imprévus', 'Le choix d’y aller'],
                ['Prestataires', 'Recherche, devis comparés, coordination, relances', 'Le choix final'],
                ['Sphère personnelle', 'Réservations, démarches, interventions à domicile', 'Ce qui touche à l’intime'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Le test en trois questions',
        blocs: [
          {
            etapes: [
              "La tâche revient-elle ? Ce qui se répète s’apprend une fois et se confie durablement.",
              "Le résultat se vérifie-t-il d’un coup d’œil ? Un rendez-vous confirmé, une facture partie, un billet réservé : oui.",
              "Une erreur est-elle rattrapable ? Un créneau mal placé se déplace. Un engagement pris à votre place, moins.",
            ],
          },
          {
            paragraphes: [
              "Trois oui : la tâche part dès la première semaine. Un non à la troisième question : elle se délègue en gardant la validation finale.",
            ],
          },
        ],
      },
      {
        h2: 'Par quoi commencer',
        blocs: [
          {
            paragraphes: [
              "Ne commencez pas par ce qui vous pèse le plus, mais par ce qui est le plus simple à décrire. Une tâche claire, confiée tôt, installe la méthode : comment vous transmettez, comment vous êtes tenu informé, comment un sujet se ferme. Les tâches plus délicates suivent, une fois ce cadre rodé.",
            ],
            liste: [
              "Premier lot : agenda et confirmations, relances de factures, réservations.",
              "Deuxième lot : suivi des échéances, préparation des pièces comptables, coordination de prestataires.",
              "Troisième lot : tri de la messagerie, organisation personnelle, sujets transverses.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Déléguer une étape au lieu d’un processus : « envoie ce devis » plutôt que « suis ce devis jusqu’à la réponse ».",
      "Garder pour soi les tâches qu’on aime, même quand elles ne demandent aucune compétence rare.",
      "Confier une décision en la déguisant en tâche.",
    ],
    limites: [
      "Une assistante externalisée ne tient pas la comptabilité, ne donne pas de conseil juridique et ne remplace pas un métier réglementé.",
    ],
    faq: [
      {
        q: 'Peut-on déléguer des tâches personnelles à une assistante professionnelle ?',
        a: "Oui, si c’est prévu au périmètre. Le Private Office BrittAssist couvre l’organisation personnelle du dirigeant : réservations, démarches, interventions à domicile. La frontière se fixe au devis.",
      },
      {
        q: 'Faut-il rédiger des procédures avant de déléguer ?',
        a: "Non. Il suffit d’expliquer une fois comment vous faites ; c’est à l’assistante d’en tirer la procédure, que vous relisez. Attendre d’avoir tout écrit est la meilleure façon de ne jamais commencer.",
      },
      {
        q: 'Comment savoir si une tâche est trop sensible ?',
        a: "Demandez-vous qui doit en répondre si elle est mal faite. Si la réponse est « moi, devant un client, un banquier ou un juge », gardez la décision et déléguez la préparation.",
      },
    ],
    liens: [
      { href: '/services', label: 'Les six univers de prise en charge' },
      { href: '/guides/comment-deleguer', label: 'Commencer à déléguer' },
      { href: '/guides/niveaux-d-autonomie-delegation', label: 'Les niveaux d’autonomie' },
      { href: '/guides/ce-qu-une-assistante-externalisee-ne-fait-pas', label: 'Ce qu’une assistante externalisée ne fait pas' },
    ],
    cloture: 'Déléguez ce qui n’a pas besoin de vous. Il en restera assez.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'informationnelle',
      motCle: 'quelles tâches déléguer à une assistante',
      variantes: ['tâches à déléguer assistante', 'que peut faire une assistante externalisée', 'liste tâches assistante de direction'],
      persona: 'Dirigeant qui ne sait pas par quoi commencer',
      objectif: 'Fournir une liste par domaine et un test de tri',
      difference: 'Donne un test en trois questions et un ordre de mise en route, pas un catalogue',
    },
  },

  {
    slug: 'quand-prendre-une-assistante',
    type: 'situation',
    dossier: DOSSIER,
    categorie: 'Décider',
    nom: 'Quand prendre une assistante',
    title: 'Quand prendre une assistante ? Les signaux qui comptent · BrittAssist',
    description:
      "Devis en retard, factures non relancées, soirées administratives : les signaux qui indiquent qu’il est temps de déléguer, et ceux qui trompent.",
    h1: 'Quand prendre une assistante : les signaux qui ne trompent pas.',
    lede:
      "Personne ne décide de déléguer un mardi matin, à tête reposée. On y vient après un devis parti trop tard, une échéance ratée, un dimanche de plus passé sur des papiers. Le moment juste se situe un peu avant.",
    reponseCourte: [
      "Il est temps quand l’administratif vous coûte du chiffre d’affaires : devis envoyés en retard, factures non émises, relances jamais faites.",
      "Il est temps quand vous êtes devenu le point de passage obligé de sujets qui ne demandent aucune décision.",
      "Il n’est pas encore temps si votre activité ne dégage pas de quoi financer la prestation, ou si le besoin tient en une heure par semaine.",
    ],
    sections: [
      {
        h2: 'Les signaux qui comptent',
        blocs: [
          {
            liste: [
              "Un devis promis part plusieurs jours après la date annoncée.",
              "Des prestations terminées attendent leur facture.",
              "Vous ne savez pas, sans chercher, qui vous doit de l’argent.",
              "Vos soirées ou vos week-ends servent de bureau administratif.",
              "Vous refusez ou reportez du travail faute de temps pour l’organiser.",
              "Des interlocuteurs vous relancent pour des réponses simples.",
            ],
          },
          {
            paragraphes: [
              "Les trois premiers touchent directement la trésorerie. Ce sont eux qui justifient la dépense : une facture émise dix jours plus tôt, sur douze mois, représente de l’argent déjà gagné qui cesse d’attendre.",
            ],
          },
        ],
      },
      {
        h2: 'Les faux signaux',
        blocs: [
          {
            liste: [
              "« Je suis débordé » : une semaine chargée n’est pas un besoin durable. Regardez sur deux mois.",
              "« Mes concurrents en ont une » : leur organisation n’est pas la vôtre.",
              "« Cela me ferait gagner du temps » : pour en faire quoi ? Si la réponse est floue, le gain le sera aussi.",
            ],
          },
        ],
      },
      {
        h2: 'Mesurer avant de décider',
        blocs: [
          {
            etapes: [
              "Pendant deux semaines, notez chaque tâche qui n’est ni votre métier, ni une décision.",
              "Estimez le temps passé, à la louche : un quart d’heure, une heure, une demi-journée.",
              "Marquez celles qui reviennent chaque semaine.",
              "Additionnez. Le total vous dit s’il y a un sujet ; la liste vous dit lequel.",
            ],
          },
          {
            paragraphes: [
              "Ce relevé n’a pas besoin d’être précis. Il a besoin d’exister : il remplace une impression par un chiffre, et il devient le périmètre de la future prestation.",
            ],
          },
        ],
      },
      {
        h2: 'Quand ce n’est pas la bonne réponse',
        blocs: [
          {
            paragraphes: [
              "Si le besoin est quotidien, exige une présence physique et occupe l’équivalent d’un poste, un recrutement est plus adapté. Si le problème vient d’un outil mal choisi ou d’un processus inutile, déléguer ne fera que déplacer le désordre. Et si l’activité est trop jeune pour dégager une marge, mieux vaut d’abord simplifier.",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Je travaille seul : est-ce prématuré ?',
        a: "Pas nécessairement. Pour un indépendant, chaque heure administrative est une heure non facturée ou non reposée. La question est de savoir si le temps libéré sera réemployé, et si l’activité peut porter le coût.",
      },
      {
        q: 'Vaut-il mieux attendre d’avoir beaucoup de travail à confier ?',
        a: "Non. Attendre que la situation soit critique revient à former quelqu’un en pleine tempête. Commencer avec un périmètre modeste, quand vous avez encore le temps d’expliquer, donne de meilleurs résultats.",
      },
      {
        q: 'Peut-on commencer par une mission ponctuelle ?',
        a: "Oui, si le besoin a un début et une fin : un déplacement à organiser, un retard administratif à rattraper, un événement. C’est aussi une façon de tester une collaboration avant de l’installer.",
      },
    ],
    liens: [
      { href: '/guides/modele-releve-du-temps-administratif', label: 'Modèle de relevé du temps administratif' },
      { href: '/guides/assistante-independante-ou-salariee', label: 'Indépendante ou salariée' },
      { href: '/guides/rentabilite-assistante-externalisee', label: 'Calculer la rentabilité d’une assistante' },
      { href: '/tarifs', label: 'Les tarifs et le devis' },
    ],
    cloture: 'Le bon moment, c’est quand vous avez encore le temps d’expliquer ce que vous voulez.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'problème-solution',
      motCle: 'quand prendre une assistante',
      variantes: ['faut-il prendre une assistante', 'besoin d’une assistante administrative', 'signes qu’il faut déléguer'],
      persona: 'Dirigeant ou indépendant qui hésite',
      objectif: 'Aider à reconnaître le bon moment, et à écarter les mauvaises raisons',
      difference: 'Distingue les signaux qui touchent la trésorerie des impressions, et dit quand ne pas le faire',
    },
  },

  {
    slug: 'contrat-de-prestation-assistante-independante',
    type: 'guide',
    dossier: DOSSIER,
    categorie: 'Contractualiser',
    nom: 'Le contrat de prestation avec une assistante',
    title: 'Contrat de prestation avec une assistante indépendante · BrittAssist',
    description:
      "Périmètre, prix, durée, préavis, confidentialité, données personnelles : les neuf points qu’un contrat avec une assistante indépendante doit régler.",
    h1: 'Le contrat avec une assistante indépendante : les neuf points à régler.',
    lede:
      "Un contrat de prestation ne sert pas à se protéger d’un prestataire malhonnête. Il sert à vérifier, avant de commencer, que deux personnes de bonne foi ont compris la même chose.",
    reponseCourte: [
      "Le contrat doit décrire le périmètre, le prix et ce qu’il couvre, la durée et le préavis, la confidentialité, les accès, le traitement des données personnelles, la responsabilité et la restitution en fin de mission.",
      "Il prend souvent la forme d’un devis ou d’une proposition acceptée, complété par des conditions générales.",
      "Il ne doit rien contenir qui ressemble à un contrat de travail : ni horaires imposés, ni exclusivité, ni pouvoir de sanction.",
    ],
    sections: [
      {
        h2: 'Les neuf points',
        blocs: [
          {
            tableau: {
              legende: 'Clauses essentielles d’un contrat de prestation d’assistance',
              colonnes: ['Point', 'Ce qu’il doit dire'],
              lignes: [
                ['Périmètre', 'Les domaines couverts, et ceux qui ne le sont pas'],
                ['Prix', 'Le montant, ce qu’il inclut, les frais refacturés, le régime de TVA'],
                ['Volume', 'L’ordre de grandeur attendu, et ce qui se passe s’il est dépassé'],
                ['Durée et préavis', 'Durée déterminée ou non, conditions et délai de résiliation'],
                ['Disponibilité', 'Délais de prise en charge habituels, canaux, périodes d’absence'],
                ['Confidentialité', 'Portée, durée après la fin de la mission'],
                ['Données personnelles', 'Rôle de chacun, mesures de sécurité, sort des données à la fin'],
                ['Responsabilité', 'Ce dont la prestataire répond, assurance éventuelle, décisions qui restent au client'],
                ['Fin de mission', 'Restitution des documents, retrait des accès, transmission'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Le périmètre : la clause qui évite tous les autres litiges',
        blocs: [
          {
            paragraphes: [
              "Un périmètre flou est la première cause de déception, des deux côtés. « Assistance administrative » ne dit rien ; « émission des factures, relance des impayés et préparation des pièces pour le cabinet comptable » dit tout. Une bonne clause de périmètre liste aussi ce qui est exclu : cela évite de découvrir, trois mois plus tard, qu’on attendait autre chose.",
              "Chez BrittAssist, par exemple, le hors-périmètre est écrit : pas de tenue comptable ni de déclaration fiscale, pas de conseil juridique ni de rédaction d’actes, pas de développement technique.",
            ],
          },
        ],
      },
      {
        h2: 'Les données personnelles',
        blocs: [
          {
            paragraphes: [
              "Une assistante qui accède à vos fichiers clients, à votre messagerie ou à vos dossiers de personnel traite des données personnelles pour votre compte. Le contrat doit le prévoir : nature des traitements, instructions, mesures de sécurité, confidentialité, sort des données en fin de mission. La CNIL décrit ce que doit contenir un contrat de sous-traitance.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qu’il ne faut pas y écrire',
        blocs: [
          {
            liste: [
              "Des horaires de travail fixes ou une présence obligatoire.",
              "Une clause d’exclusivité.",
              "Un pouvoir de contrôle ou de sanction de type hiérarchique.",
              "L’obligation d’utiliser exclusivement votre matériel et de suivre vos procédures internes comme un salarié.",
            ],
          },
          {
            paragraphes: [
              "Ces éléments sont des indices de salariat. Leur présence dans le contrat, ou dans la pratique, expose à une requalification de la relation.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Démarrer « à l’essai » sans rien d’écrit.",
      "Signer un contrat précis, puis faire tout autre chose au quotidien.",
      "Oublier la clause de fin de mission, jusqu’au jour où il faut récupérer des accès.",
    ],
    limites: [
      "Cette page liste les points à couvrir. Elle n’est pas un modèle de contrat et ne remplace pas la relecture d’un avocat pour un engagement important.",
    ],
    faq: [
      {
        q: 'Un devis signé suffit-il ?',
        a: "Souvent, oui, s’il renvoie à des conditions générales qui couvrent la durée, le préavis, la confidentialité et les données personnelles. C’est l’ensemble, devis et conditions, qui forme le contrat.",
      },
      {
        q: 'Quelle durée d’engagement prévoir ?',
        a: "Cela dépend de l’offre. Selon les conditions générales actuelles de BrittAssist, l’accompagnement mensuel est conclu pour une durée indéterminée et résiliable avec un préavis d’un mois, par e-mail.",
      },
      {
        q: 'La confidentialité doit-elle survivre à la fin du contrat ?',
        a: "Oui, c’est l’usage, pour une durée à fixer. Chez BrittAssist, l’engagement de confidentialité court cinq ans après la fin de la collaboration.",
      },
    ],
    liens: [
      { href: '/guides/requalification-assistante-independante-salariat', label: 'Le risque de requalification en salariat' },
      { href: '/guides/confidentialite-assistante-externalisee', label: 'Confidentialité et accès à distance' },
      { href: '/guides/fin-de-collaboration-assistante-externalisee', label: 'Terminer une collaboration proprement' },
      { href: '/cgv', label: 'Les conditions générales de BrittAssist' },
      { href: '/tarifs', label: 'Les tarifs et le devis' },
    ],
    sources: [SOURCE_CNIL_SOUS_TRAITANCE, SOURCE_INDEPENDANT],
    cloture: 'Un bon contrat ne se relit jamais. Il a servi le jour où il a été écrit.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'informationnelle',
      motCle: 'contrat de prestation assistante indépendante',
      variantes: ['contrat assistante freelance', 'contrat prestation de services secrétariat', 'clauses contrat assistante externalisée'],
      persona: 'Dirigeant sur le point de signer avec une assistante indépendante',
      objectif: 'Lister les points à régler par écrit avant de commencer',
      difference: 'Neuf points concrets, illustrés par les clauses réellement publiées par BrittAssist',
    },
  },

  {
    slug: 'requalification-assistante-independante-salariat',
    type: 'reference',
    dossier: DOSSIER,
    categorie: 'Repère',
    nom: 'Le risque de requalification en salariat',
    title: 'Assistante indépendante : le risque de requalification · BrittAssist',
    description:
      "Lien de subordination, faisceau d’indices, présomption d’indépendance : ce qui transforme une prestation en contrat de travail, et comment l’éviter.",
    h1: 'Assistante indépendante ou salariée déguisée : où passe la frontière.',
    lede:
      "Ce n’est pas le contrat qui fait l’indépendance, c’est la façon de travailler. Une prestataire à qui l’on impose ses horaires, ses outils et ses méthodes, et qui n’a qu’un seul client, peut être regardée comme une salariée — quel que soit le titre du document signé.",
    reponseCourte: [
      "Un travailleur indépendant immatriculé bénéficie d’une présomption d’indépendance. Elle tombe si les conditions réelles d’exécution révèlent un lien de subordination.",
      "Le lien de subordination se reconnaît à trois pouvoirs : donner des ordres, contrôler l’exécution, sanctionner.",
      "Les juges raisonnent par faisceau d’indices : aucun élément ne suffit seul, c’est leur accumulation qui compte.",
      "L’existence d’un contrat de prestation n’empêche pas la requalification si la relation a tous les traits du salariat.",
    ],
    sections: [
      {
        h2: 'Ce que dit la règle',
        blocs: [
          {
            paragraphes: [
              "Le code du travail présume qu’une personne régulièrement immatriculée comme indépendante n’est pas liée à son donneur d’ordre par un contrat de travail. Cette présomption peut être renversée : si, à l’issue d’une procédure engagée par le travailleur ou par l’administration, il apparaît que la prestation est exécutée dans un lien de subordination juridique permanent, la relation est requalifiée.",
              "Un contrat de travail se caractérise par une prestation, une rémunération et ce lien de subordination, c’est-à-dire le pouvoir de l’employeur de donner des ordres, d’en contrôler l’exécution et de sanctionner les manquements.",
            ],
          },
        ],
      },
      {
        h2: 'Les indices, côté pratique',
        blocs: [
          {
            tableau: {
              legende: 'Indices d’indépendance et indices de salariat',
              colonnes: ['Sujet', 'Relation de prestation', 'Indice de salariat'],
              lignes: [
                ['Horaires', 'La prestataire organise son temps', 'Horaires imposés, présence exigée'],
                ['Clients', 'Plusieurs clients', 'Un seul client, une exclusivité'],
                ['Méthode', 'Résultat convenu, moyens libres', 'Instructions détaillées et permanentes'],
                ['Outils', 'Ses propres moyens, accès à vos outils quand c’est nécessaire', 'Matériel fourni, intégration au service'],
                ['Contrôle', 'Compte rendu sur le résultat', 'Contrôle hiérarchique, sanctions'],
                ['Rémunération', 'Prix d’une prestation, sur facture', 'Montant fixe assimilable à un salaire, sans lien avec la prestation'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Comment travailler sans créer le risque',
        blocs: [
          {
            etapes: [
              "Commandez un résultat, pas une présence : « les factures du mois sont émises avant le 5 », et non « sois disponible de 9 h à 12 h ».",
              "Laissez la prestataire choisir sa méthode et son organisation.",
              "N’exigez pas d’exclusivité, et ne vous étonnez pas qu’elle ait d’autres clients.",
              "Faites le point sur ce qui est livré, pas sur la façon dont le temps a été occupé.",
              "Gardez des écrits cohérents : devis, factures, périmètre.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qu’une requalification entraîne',
        blocs: [
          {
            paragraphes: [
              "Les conséquences sont lourdes pour le donneur d’ordre : rappel de cotisations sociales, application du droit du travail à la relation, et, dans les cas les plus graves, poursuites pour travail dissimulé. Le détail dépend de chaque situation et relève d’un avocat ou de votre expert-comptable.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Croire que le statut de micro-entrepreneur protège à lui seul.",
      "Intégrer la prestataire à l’organigramme, avec une adresse e-mail de l’entreprise et des réunions d’équipe obligatoires.",
      "Remplacer un poste salarié par une prestataire unique, à temps plein, aux mêmes conditions.",
    ],
    limites: [
      "Cette page résume des principes généraux à partir de sources officielles. Elle ne constitue pas un conseil juridique : chaque situation s’apprécie au cas par cas.",
    ],
    faq: [
      {
        q: 'Travailler régulièrement pour le même client est-il risqué ?',
        a: "Non, en soi. Une collaboration durable n’est pas un indice de salariat. Ce qui compte, c’est l’autonomie réelle de la prestataire et l’absence de dépendance : plusieurs clients, liberté d’organisation, résultat convenu.",
      },
      {
        q: 'Qui peut demander la requalification ?',
        a: "Le travailleur lui-même, devant le conseil de prud’hommes, ou les organismes de contrôle à l’occasion d’une vérification.",
      },
      {
        q: 'Comment une assistante indépendante sérieuse s’en protège-t-elle ?',
        a: "En travaillant pour plusieurs clients, en fixant elle-même son organisation, et en vendant un périmètre plutôt qu’une présence. Un Private Office se définit par ce qui est pris en charge, non par des heures de disponibilité.",
      },
    ],
    liens: [
      { href: '/guides/contrat-de-prestation-assistante-independante', label: 'Le contrat de prestation avec une assistante' },
      { href: '/guides/assistante-independante-ou-salariee', label: 'Indépendante ou salariée : le vrai calcul' },
      { href: '/guides/externaliser-son-assistanat', label: 'Externaliser son assistanat : le parcours' },
      { href: '/private-office', label: 'Comment fonctionne un Private Office' },
    ],
    sources: [SOURCE_RECOURS_ABUSIF, SOURCE_INDEPENDANT],
    cloture: 'L’indépendance ne s’écrit pas dans un contrat. Elle se voit dans une semaine de travail.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'référence',
      motCle: 'requalification prestataire en salarié',
      variantes: ['lien de subordination freelance', 'salariat déguisé assistante', 'risque requalification indépendant'],
      persona: 'Dirigeant qui travaille avec une prestataire régulière',
      objectif: 'Expliquer le critère juridique et les pratiques qui évitent le risque',
      difference: 'Traduit le faisceau d’indices en gestes quotidiens : commander un résultat, pas une présence',
    },
  },

  {
    slug: 'niveaux-d-autonomie-delegation',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Les niveaux d’autonomie',
    title: 'Déléguer : les quatre niveaux d’autonomie à fixer · BrittAssist',
    description:
      "Exécuter, proposer, décider et informer, décider seule : quatre niveaux d’autonomie à attribuer, tâche par tâche, pour déléguer sans surprise.",
    h1: 'Les quatre niveaux d’autonomie : dire jusqu’où l’on délègue.',
    lede:
      "Bien des déceptions de délégation viennent d’un malentendu sur un seul point : jusqu’où pouvait-elle aller sans me demander ? L’un pense avoir confié une décision, l’autre attendait une validation. Il suffit de le dire.",
    reponseCourte: [
      "Chaque tâche confiée a un niveau d’autonomie : exécuter une consigne, proposer des options, décider puis informer, décider sans en référer.",
      "Le niveau se fixe par type de tâche, et non une fois pour toutes pour une personne.",
      "Il monte avec l’expérience commune : ce qui demandait une validation le premier mois peut être décidé seul au troisième.",
    ],
    sections: [
      {
        h2: 'Les quatre niveaux',
        blocs: [
          {
            tableau: {
              legende: 'Niveaux d’autonomie dans une délégation',
              colonnes: ['Niveau', 'Ce que cela veut dire', 'Exemple'],
              lignes: [
                ['1. Exécuter', 'Faire exactement ce qui est demandé', 'Réserver ce train, à cette heure'],
                ['2. Proposer', 'Préparer des options, vous choisissez', 'Trois hôtels comparés, avec une recommandation'],
                ['3. Décider et informer', 'Choisir, agir, puis vous le dire', 'Rendez-vous déplacé à jeudi, pour éviter le conflit avec votre déplacement'],
                ['4. Décider seule', 'Agir sans en rendre compte au cas par cas', 'Confirmer la veille tous les rendez-vous de la semaine'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Attribuer un niveau à chaque type de demande',
        blocs: [
          {
            etapes: [
              "Listez les dix demandes que vous confiez le plus souvent.",
              "Pour chacune, écrivez le niveau que vous souhaitez aujourd’hui.",
              "Ajoutez, quand c’est utile, un plafond : un montant, une durée, un type d’interlocuteur.",
              "Relisez la liste ensemble, et corrigez-la au bout d’un mois.",
            ],
          },
          {
            modele: {
              titre: 'Exemple de grille',
              lignes: [
                "Réservations de transport — niveau 3, jusqu’à [montant] ; au-delà, niveau 2.",
                "Rendez-vous clients — niveau 3 pour placer et déplacer ; niveau 2 pour refuser.",
                "Relances de factures — niveau 4 pour les deux premières ; niveau 2 pour la suivante.",
                "Choix d’un prestataire — niveau 2, toujours.",
                "Réponses aux e-mails — niveau 4 pour les accusés de réception ; niveau 2 pour le fond.",
              ],
            },
          },
        ],
      },
      {
        h2: 'Faire monter le niveau',
        blocs: [
          {
            paragraphes: [
              "Le niveau 2 a un coût : il vous ramène une décision. S’il reste la règle partout, vous avez délégué l’exécution et gardé la charge mentale. L’objectif est de faire passer le plus de tâches possible au niveau 3, où vous êtes informé sans être sollicité.",
              "Le passage se fait naturellement : chaque fois que vous validez une proposition sans la modifier, demandez-vous si la validation était nécessaire. Trois validations identiques de suite, et la tâche peut monter d’un cran.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Dire « fais au mieux » sans préciser si vous voulez être consulté.",
      "Reprocher une initiative prise de bonne foi dans un cadre qui n’avait pas été fixé.",
      "Garder le niveau 2 sur tout, par prudence, et redevenir le point de passage de tout.",
    ],
    faq: [
      {
        q: 'Que se passe-t-il quand une demande ne rentre dans aucune case ?',
        a: "Par défaut, le niveau 2 : une proposition, votre choix. C’est la règle la plus sûre pour tout ce qui est nouveau, et elle se lève dès que la situation se répète.",
      },
      {
        q: 'Peut-on donner un niveau 4 dès le départ ?',
        a: "Sur des tâches sans enjeu et faciles à vérifier, oui : confirmations de rendez-vous, accusés de réception, classement. C’est même souhaitable, pour ne pas encombrer les premiers échanges.",
      },
      {
        q: 'Comment reprendre la main sur un sujet ?',
        a: "En le disant, simplement : « sur ce dossier, je veux voir passer chaque étape ». Les niveaux ne sont pas des droits acquis ; ils décrivent ce que vous souhaitez à un moment donné.",
      },
    ],
    liens: [
      { href: '/guides/modele-brief-assistante-externalisee', label: 'Modèle de brief pour déléguer' },
      { href: '/guides/suivi-demandes-assistante-externalisee', label: 'Suivre les demandes déléguées' },
      { href: '/guides/erreurs-de-delegation', label: 'Les erreurs de délégation' },
      { href: '/private-office', label: 'Le fonctionnement d’un Private Office' },
    ],
    cloture: 'Déléguer, c’est dire quoi faire. Bien déléguer, c’est dire jusqu’où.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'niveaux de délégation',
      variantes: ['niveaux d’autonomie délégation', 'déléguer sans perdre le contrôle', 'degrés de délégation'],
      persona: 'Dirigeant qui délègue mais revalide tout',
      objectif: 'Donner un vocabulaire commun et une grille à remplir',
      difference: 'Quatre niveaux attribués par type de demande, avec plafonds et règle de montée en niveau',
    },
  },

  {
    slug: 'erreurs-de-delegation',
    type: 'guide',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Les erreurs de délégation',
    title: 'Déléguer : les huit erreurs qui font tout échouer · BrittAssist',
    description:
      "Brief incomplet, contrôle permanent, reprise en main au premier écart : les huit erreurs de délégation les plus courantes, et comment les corriger.",
    h1: 'Les huit erreurs qui font échouer une délégation.',
    lede:
      "Quand une délégation échoue, on dit que la personne n’était pas à la hauteur. C’est parfois vrai. Le plus souvent, l’échec était écrit dans la façon de confier le travail.",
    reponseCourte: [
      "Les erreurs les plus coûteuses sont de déléguer sans dire le résultat attendu, de reprendre la tâche au premier écart, et de contrôler chaque étape.",
      "Beaucoup viennent du même réflexe : confier un geste au lieu de confier un résultat.",
      "Elles se corrigent par trois habitudes : un brief en quatre lignes, un niveau d’autonomie explicite, un point régulier.",
    ],
    sections: [
      {
        h2: 'Les erreurs de départ',
        blocs: [
          {
            h3: '1. Confier un geste, pas un résultat',
            paragraphes: [
              "« Appelle le plombier » est un geste. « Le chauffe-eau est réparé avant vendredi » est un résultat. Le premier vous revient dès que le plombier ne répond pas ; le second est porté jusqu’au bout.",
            ],
          },
          {
            h3: '2. Ne pas dire l’échéance',
            paragraphes: [
              "« Quand tu peux » veut dire « jamais » pour une demande sans date, face à dix demandes qui en ont une.",
            ],
          },
          {
            h3: '3. Garder le contexte pour soi',
            paragraphes: [
              "Un rendez-vous à placer n’est pas le même selon qu’il s’agit d’un prospect à séduire ou d’un fournisseur à recadrer. Une phrase de contexte change la qualité du résultat.",
            ],
          },
        ],
      },
      {
        h2: 'Les erreurs de suivi',
        blocs: [
          {
            h3: '4. Contrôler chaque étape',
            paragraphes: [
              "Le contrôle permanent coûte autant de temps que de faire soi-même, et il apprend à l’autre à attendre votre accord.",
            ],
          },
          {
            h3: '5. Reprendre la tâche au premier écart',
            paragraphes: [
              "Corriger soi-même va plus vite une fois. Cela garantit de devoir corriger à chaque fois. Dire ce qui n’allait pas prend deux minutes et règle le sujet pour de bon.",
            ],
          },
          {
            h3: '6. Changer de canal sans cesse',
            paragraphes: [
              "Une demande par téléphone, une par SMS, une au détour d’un e-mail : aucune ne peut être suivie. Un canal unique est la condition d’un suivi fiable.",
            ],
          },
        ],
      },
      {
        h2: 'Les erreurs de fond',
        blocs: [
          {
            h3: '7. Déléguer ce qu’on n’a pas compris soi-même',
            paragraphes: [
              "Confier un sujet confus ne le clarifie pas. Si vous ne savez pas ce que vous voulez, demandez d’abord une proposition, pas une exécution.",
            ],
          },
          {
            h3: '8. Ne jamais dire que c’était bien',
            paragraphes: [
              "Un retour n’est pas une politesse. C’est l’information qui dit quoi reproduire. Sans lui, une assistante devine vos préférences ; avec lui, elle les connaît.",
            ],
          },
        ],
      },
      {
        h2: 'Les trois habitudes qui les préviennent',
        blocs: [
          {
            etapes: [
              "Le brief en quatre lignes : résultat attendu, échéance, contexte, niveau d’autonomie.",
              "Le canal unique : toutes les demandes au même endroit.",
              "Le point régulier : dix minutes pour dire ce qui a bien marché, ce qui doit changer, ce qui arrive.",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Que faire quand une tâche revient mal faite ?',
        a: "Regardez d’abord votre demande : le résultat attendu était-il dit ? Puis nommez l’écart, précisément. « Je voulais un comparatif de trois offres, j’en ai une seule » est exploitable ; « ce n’est pas ça » ne l’est pas.",
      },
      {
        q: 'Comment arrêter de tout vérifier ?',
        a: "En vérifiant moins, mais mieux : contrôlez le résultat, pas les étapes, et seulement sur les sujets qui le méritent. Sur le reste, laissez passer une erreur sans conséquence ; elle vous en apprendra plus qu’un contrôle.",
      },
      {
        q: 'Ces erreurs sont-elles propres à l’externalisation ?',
        a: "Non, elles valent pour toute délégation. Mais à distance, elles se paient plus vite : il n’y a pas de couloir où rattraper un malentendu.",
      },
    ],
    liens: [
      { href: '/guides/modele-brief-assistante-externalisee', label: 'Modèle de brief pour déléguer' },
      { href: '/guides/niveaux-d-autonomie-delegation', label: 'Les niveaux d’autonomie' },
      { href: '/guides/point-hebdomadaire-avec-son-assistante', label: 'Le point hebdomadaire' },
      { href: '/guides/comment-deleguer', label: 'Commencer à déléguer' },
      { href: '/private-office', label: 'Le fonctionnement d’un Private Office' },
    ],
    cloture: 'On ne délègue pas mal par manque de confiance. On délègue mal par manque de précision.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'problème-solution',
      motCle: 'erreurs de délégation',
      variantes: ['pourquoi ma délégation ne fonctionne pas', 'mal déléguer', 'erreurs à éviter quand on délègue'],
      persona: 'Dirigeant déçu par une première délégation',
      objectif: 'Faire reconnaître l’erreur commise et donner le correctif',
      difference: 'Classe les erreurs par moment — départ, suivi, fond — et les ramène à trois habitudes',
    },
  },

  {
    slug: 'fin-de-collaboration-assistante-externalisee',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Organiser',
    nom: 'Terminer une collaboration proprement',
    title: 'Fin de collaboration avec une assistante : la checklist · BrittAssist',
    description:
      "Préavis, dossiers en cours, restitution des documents, retrait des accès : la marche à suivre pour terminer une collaboration sans rien perdre.",
    h1: 'Terminer une collaboration avec une assistante, sans rien laisser en suspens.',
    lede:
      "Une collaboration se juge aussi à sa fin. Bien menée, elle laisse des dossiers à jour, des accès fermés et une organisation que vous savez reprendre. Mal menée, elle laisse des mots de passe actifs et des sujets dont plus personne ne sait où ils en sont.",
    reponseCourte: [
      "Une fin de collaboration se prépare en quatre temps : notifier dans le respect du préavis, faire l’état des dossiers en cours, récupérer les documents, retirer les accès.",
      "Le retrait des accès se fait à partir d’une liste tenue depuis le premier jour — c’est pour cela qu’elle doit exister.",
      "La confidentialité continue de s’appliquer après la fin du contrat, pour la durée prévue.",
    ],
    sections: [
      {
        h2: 'Les quatre temps',
        blocs: [
          {
            etapes: [
              "Notifier : par écrit, dans les formes et le délai prévus au contrat.",
              "Faire l’état des lieux : chaque sujet en cours, son statut, le prochain geste attendu, l’interlocuteur.",
              "Récupérer : documents, modèles, procédures, historique utile, dans un format que vous savez ouvrir.",
              "Fermer : retirer chaque accès, changer les mots de passe partagés, vérifier qu’il ne reste rien d’actif.",
            ],
          },
        ],
      },
      {
        h2: 'La note de passation',
        blocs: [
          {
            paragraphes: [
              "Le document le plus utile d’une fin de mission est une note de passation : ce qui a été pris en charge, où se trouvent les choses, ce qui revient à dates fixes, et les habitudes de chaque interlocuteur. Elle sert à la personne qui prendra la suite — vous, un salarié, un autre prestataire.",
            ],
            liste: [
              "Les sujets en cours, avec leur statut.",
              "Le calendrier des échéances récurrentes.",
              "L’emplacement des dossiers et la logique de classement.",
              "Les contacts utiles et leurs particularités.",
              "Les procédures écrites pendant la mission.",
            ],
          },
        ],
      },
      {
        h2: 'Le retrait des accès',
        blocs: [
          {
            tableau: {
              legende: 'Retrait des accès en fin de mission',
              colonnes: ['Type d’accès', 'Ce qu’il faut faire'],
              lignes: [
                ['Comptes nominatifs ouverts pour la mission', 'Les désactiver ou les supprimer'],
                ['Délégation de messagerie ou d’agenda', 'La révoquer dans les réglages du compte'],
                ['Mots de passe partagés', 'Les changer, puis retirer le partage dans le gestionnaire'],
                ['Dossiers partagés', 'Retirer les droits, vérifier les liens de partage publics'],
                ['Moyens de paiement, comptes fournisseurs', 'Retirer l’utilisatrice, vérifier les cartes enregistrées'],
                ['Double authentification', 'Retirer les appareils et numéros associés'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les données personnelles',
        blocs: [
          {
            paragraphes: [
              "Si la prestataire a traité des données personnelles pour votre compte, le contrat prévoit ce qu’elles deviennent à la fin : restitution ou suppression, selon votre choix. Demandez une confirmation écrite que c’est fait.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Couper les accès avant d’avoir récupéré l’état des dossiers.",
      "Oublier les accès « secondaires » : un outil de réservation, un compte fournisseur, un partage de calendrier.",
      "Laisser les dossiers dans l’espace de la prestataire plutôt que dans le vôtre.",
    ],
    faq: [
      {
        q: 'Quel préavis respecter ?',
        a: "Celui prévu au contrat. Selon les conditions générales actuelles de BrittAssist, l’accompagnement mensuel est résiliable avec un préavis d’un mois, par e-mail.",
      },
      {
        q: 'Et si je n’ai jamais tenu la liste des accès ?',
        a: "Reconstituez-la avant de notifier : messagerie, agenda, stockage, facturation, banque, réservation, comptes fournisseurs. Demandez aussi à la prestataire sa propre liste ; les deux se complètent.",
      },
      {
        q: 'La prestataire peut-elle conserver des documents ?',
        a: "Seulement ce que la loi ou le contrat lui impose de garder, par exemple ses propres factures. Le reste vous est restitué ou est supprimé, selon ce qui a été convenu.",
      },
    ],
    liens: [
      { href: '/guides/modele-note-de-passation', label: 'Modèle de note de passation' },
      { href: '/guides/registre-des-acces-entreprise', label: 'Tenir un registre des accès' },
      { href: '/guides/confidentialite-assistante-externalisee', label: 'Confidentialité et accès à distance' },
      { href: '/guides/contrat-de-prestation-assistante-independante', label: 'Le contrat de prestation' },
      { href: '/private-office', label: 'Le fonctionnement d’un Private Office' },
    ],
    sources: [SOURCE_CNIL_SOUS_TRAITANCE],
    cloture: 'On ouvre des accès sans crainte quand on sait déjà comment on les refermera.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'fin de collaboration assistante freelance',
      variantes: ['arrêter une prestation assistante', 'résilier contrat assistante indépendante', 'réversibilité prestataire'],
      persona: 'Dirigeant qui met fin à une prestation ou veut savoir comment en sortir',
      objectif: 'Donner la marche à suivre pour sortir sans perte ni accès oublié',
      difference: 'Traite la sortie comme une étape normale, avec note de passation et tableau de retrait des accès',
    },
  },

  {
    slug: 'ce-qu-une-assistante-externalisee-ne-fait-pas',
    type: 'guide',
    dossier: DOSSIER,
    categorie: 'Comprendre',
    nom: 'Ce qu’une assistante externalisée ne fait pas',
    title: 'Ce qu’une assistante externalisée ne fait pas · BrittAssist',
    description:
      "Comptabilité, conseil juridique, secrétariat médical, décisions d’engagement : les limites du métier, et le professionnel vers qui se tourner.",
    h1: 'Ce qu’une assistante externalisée ne fait pas, et qui le fait.',
    lede:
      "Un prestataire qui dit oui à tout mérite la méfiance. Les limites d’un métier ne sont pas une faiblesse commerciale : elles indiquent où commence le travail de quelqu’un d’autre, mieux armé pour le faire.",
    reponseCourte: [
      "Une assistante externalisée ne tient pas la comptabilité, ne fait pas de déclaration fiscale et ne donne pas de conseil juridique.",
      "Elle ne prend pas les décisions qui engagent l’entreprise : prix, signature, recrutement, contentieux.",
      "Elle n’exerce pas un métier réglementé à la place de son titulaire : secrétariat médical, gestion locative, conseil en investissement.",
      "Sur tous ces sujets, son rôle est de préparer, de coordonner et de suivre — ce qui suffit souvent à débloquer le professionnel concerné.",
    ],
    sections: [
      {
        h2: 'Le tableau des limites',
        blocs: [
          {
            tableau: {
              legende: 'Ce qui sort du périmètre, et vers qui se tourner',
              colonnes: ['Sujet', 'Ce que l’assistante fait', 'Ce qu’elle ne fait pas', 'Le bon interlocuteur'],
              lignes: [
                ['Comptabilité', 'Réunit, classe et transmet les pièces', 'Tenue des comptes, bilan, déclarations', 'Expert-comptable'],
                ['Droit', 'Prépare les dossiers, suit les signatures', 'Conseil juridique, rédaction d’actes', 'Avocat, notaire'],
                ['Paie et social', 'Rassemble les éléments variables', 'Bulletins de paie, déclarations sociales', 'Cabinet de paie'],
                ['Santé', 'Administre le cabinet comme une entreprise', 'Rendez-vous patients, données de santé', 'Télésecrétariat médical'],
                ['Informatique', 'Tient l’inventaire des accès et des abonnements', 'Développement, intégration, dépannage', 'Prestataire informatique'],
                ['Communication', 'Coordonne les prestataires et les plannings', 'Production éditoriale, gestion de marque', 'Agence, rédacteur'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Pourquoi ces limites existent',
        blocs: [
          {
            liste: [
              "Certaines activités sont réservées par la loi à des professions réglementées.",
              "D’autres engagent une responsabilité professionnelle qui suppose une assurance et une qualification propres.",
              "D’autres encore sont simplement un autre métier : savoir organiser un dossier n’est pas savoir le plaider.",
            ],
          },
          {
            paragraphes: [
              "Le périmètre publié par BrittAssist est explicite sur ces points : pas de tenue comptable ni de déclaration fiscale, pas de conseil juridique ni de rédaction d’actes, pas de développement technique, pas de production éditoriale.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que la préparation change',
        blocs: [
          {
            paragraphes: [
              "Dire « ce n’est pas mon métier » ne veut pas dire laisser le sujet en plan. Un expert-comptable qui reçoit des pièces complètes et classées travaille plus vite. Un avocat qui reçoit une chronologie et les documents utiles n’a pas à les reconstituer. La valeur d’une assistance est là : faire en sorte que chaque professionnel n’ait à fournir que son expertise.",
            ],
          },
        ],
      },
      {
        h2: 'Les décisions qui restent les vôtres',
        blocs: [
          {
            liste: [
              "Fixer un prix, accorder une remise, accepter un délai de paiement.",
              "Signer un contrat, un devis, un engagement bancaire.",
              "Recruter, sanctionner, se séparer d’un collaborateur.",
              "Engager une procédure ou y renoncer.",
              "Choisir entre deux prestataires, une fois les offres comparées.",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Une assistante peut-elle faire mes déclarations de TVA ?',
        a: "Non. Les déclarations fiscales relèvent de l’entreprise elle-même ou de son expert-comptable. Une assistante prépare et transmet les pièces dans les délais, ce qui est souvent le vrai goulot d’étranglement.",
      },
      {
        q: 'Peut-elle signer à ma place ?',
        a: "Non, sauf mandat exprès et limité, ce qui relève d’un cadre juridique à faire établir. En pratique, elle prépare le document, suit le circuit de signature et relance les signataires.",
      },
      {
        q: 'Et si ma demande est à la frontière ?',
        a: "Elle se discute. Beaucoup de sujets ont une part administrative déléguable et une part d’expertise qui ne l’est pas ; la frontière se trace au devis, cas par cas.",
      },
    ],
    liens: [
      { href: '/services', label: 'Le périmètre couvert par BrittAssist' },
      { href: '/guides/quelles-taches-deleguer-a-une-assistante', label: 'Quelles tâches déléguer' },
      { href: '/guides/pieces-pour-l-expert-comptable', label: 'Préparer les pièces pour l’expert-comptable' },
      { href: '/assistante/professionnels-sante', label: 'Assistance pour professionnels de santé' },
    ],
    cloture: 'Savoir où s’arrête son métier, c’est savoir à qui passer le relais.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'informationnelle',
      motCle: 'limites assistante externalisée',
      variantes: ['ce que ne fait pas une assistante administrative', 'assistante peut-elle faire la comptabilité', 'périmètre assistante indépendante'],
      persona: 'Dirigeant qui veut savoir ce qu’il pourra réellement confier',
      objectif: 'Fixer les attentes et orienter vers le bon professionnel',
      difference: 'Associe à chaque limite ce qui reste déléguable et l’interlocuteur compétent',
    },
  },

  {
    slug: 'rentabilite-assistante-externalisee',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Décider',
    nom: 'Calculer la rentabilité d’une assistante',
    title: 'Assistante externalisée : calculer si c’est rentable · BrittAssist',
    description:
      "Une méthode en quatre lignes pour estimer, avec vos propres chiffres, ce qu’une assistance externalisée rapporte et ce qu’elle coûte.",
    h1: 'Une assistante externalisée est-elle rentable ? Le calcul, avec vos chiffres.',
    lede:
      "On trouve partout des promesses de « dix heures gagnées par semaine ». Elles ne valent rien : personne ne connaît votre semaine. Le seul calcul sérieux se fait avec vos chiffres, et il tient en quatre lignes.",
    reponseCourte: [
      "La rentabilité se mesure en comparant le coût de la prestation à trois gains : le temps réemployé, l’argent encaissé plus tôt, et les pertes évitées.",
      "Le gain de temps ne compte que s’il est réemployé : une heure libérée qui ne sert à rien ne rapporte rien.",
      "Le gain le plus sous-estimé est la trésorerie : des factures émises et relancées à l’heure.",
      "Aucune moyenne publiée ne remplace votre propre relevé.",
    ],
    sections: [
      {
        h2: 'Les quatre lignes du calcul',
        blocs: [
          {
            tableau: {
              legende: 'Calcul de rentabilité à remplir',
              colonnes: ['Ligne', 'Comment l’estimer', 'Votre chiffre'],
              lignes: [
                ['A. Temps libéré', 'Heures par mois relevées sur deux semaines, multipliées par deux', '…'],
                ['B. Valeur de ce temps', 'A × ce qu’une heure de votre métier rapporte, pour la part réellement réemployée', '…'],
                ['C. Trésorerie et pertes évitées', 'Factures en retard d’émission, relances non faites, pénalités subies, devis non suivis', '…'],
                ['D. Coût de la prestation', 'Le montant du devis, frais compris', '…'],
              ],
            },
          },
          {
            paragraphes: [
              "Si B + C dépasse nettement D, la décision est simple. Si l’écart est faible, c’est le confort qui tranche — et c’est un critère légitime, à condition de le nommer.",
            ],
          },
        ],
      },
      {
        h2: 'La ligne qui trompe : le temps libéré',
        blocs: [
          {
            paragraphes: [
              "Multiplier des heures par un taux horaire donne toujours un beau résultat. Il est faux si ces heures ne sont pas vendues. Un consultant dont l’agenda est plein peut facturer le temps récupéré ; un artisan dont le carnet de commandes déborde aussi. Un dirigeant dont le facteur limitant est ailleurs — la demande, la capacité de production — récupère du confort, pas du chiffre d’affaires.",
              "Soyez honnête sur la part réemployée. La moitié est souvent une hypothèse plus juste que la totalité.",
            ],
          },
        ],
      },
      {
        h2: 'La ligne oubliée : la trésorerie',
        blocs: [
          {
            liste: [
              "Les factures émises en retard : comptez les jours entre la fin du travail et la facture, sur vos dix dernières factures.",
              "Les relances jamais faites : additionnez ce qui est échu depuis plus de trente jours.",
              "Les devis sans suite : combien n’ont reçu aucune relance ?",
              "Les frais subis : pénalités, abonnements inutiles, renouvellements non négociés.",
            ],
          },
          {
            paragraphes: [
              "Ces montants se lisent dans vos propres comptes. Ils ne dépendent d’aucune hypothèse.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que le calcul ne dit pas',
        blocs: [
          {
            paragraphes: [
              "Il ne mesure ni la charge mentale, ni les soirées rendues, ni la tranquillité de savoir qu’un sujet envoyé est pris en charge. Ce ne sont pas des arguments de vente : ce sont des réalités que chacun pèse à sa façon. Elles ne doivent pas remplacer le calcul ; elles s’y ajoutent.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Compter toutes les heures libérées comme des heures facturées.",
      "Comparer le prix d’une prestation au seul salaire brut d’un poste.",
      "Décider sur un chiffre lu ailleurs.",
    ],
    limites: [
      "Cette méthode donne un ordre de grandeur. Elle ne constitue ni une promesse de résultat, ni une étude financière.",
    ],
    faq: [
      {
        q: 'Existe-t-il une moyenne du temps gagné ?',
        a: "Aucune qui s’applique à vous. Le temps administratif varie énormément selon le métier, la taille et l’organisation. C’est pourquoi cette page ne cite aucun chiffre : le vôtre se mesure en deux semaines.",
      },
      {
        q: 'Au bout de combien de temps voit-on le résultat ?',
        a: "L’effet sur la trésorerie est le plus rapide à constater : il suffit de comparer les délais d’émission et d’encaissement avant et après. L’effet sur votre temps dépend de ce que vous confiez réellement.",
      },
      {
        q: 'Et si le calcul est négatif ?',
        a: "Alors ce n’est pas le moment, ou pas la bonne forme. Une mission ponctuelle, un périmètre plus étroit ou une simplification de vos outils peut être une meilleure réponse.",
      },
    ],
    liens: [
      { href: '/guides/modele-releve-du-temps-administratif', label: 'Modèle de relevé du temps administratif' },
      { href: '/guides/prix-assistante-de-direction-externalisee', label: 'Le prix d’une assistante externalisée' },
      { href: '/guides/quand-prendre-une-assistante', label: 'Quand prendre une assistante' },
      { href: '/tarifs', label: 'Les tarifs et le devis' },
    ],
    cloture: 'Le bon chiffre n’est pas celui qu’on vous annonce. C’est celui que vous avez mesuré.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'rentabilité assistante externalisée',
      variantes: ['retour sur investissement assistante', 'combien rapporte une assistante', 'assistante externalisée est-ce rentable'],
      persona: 'Dirigeant qui veut justifier la dépense',
      objectif: 'Fournir une méthode de calcul honnête, sans chiffre inventé',
      difference: 'Refuse les moyennes, introduit la part réellement réemployée et la ligne trésorerie',
    },
  },

  {
    slug: 'point-hebdomadaire-avec-son-assistante',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Organiser',
    nom: 'Le point hebdomadaire',
    title: 'Point hebdomadaire avec son assistante : l’ordre du jour · BrittAssist',
    description:
      "Quinze minutes par semaine, cinq rubriques : l’ordre du jour d’un point régulier entre un dirigeant et son assistante, et ce qu’il remplace.",
    h1: 'Le point hebdomadaire : quinze minutes qui remplacent cinquante messages.',
    lede:
      "Entre un dirigeant et son assistante, tout ne passe pas par des demandes. Il faut un moment pour parler de ce qui arrive, de ce qui coince et de ce qui pourrait être fait autrement. Sans ce moment, ces sujets se dispersent en messages, ou ne sont jamais dits.",
    reponseCourte: [
      "Un point hebdomadaire dure quinze minutes et suit toujours le même ordre : ce qui est clos, ce qui attend une décision, ce qui arrive, ce qui doit changer.",
      "Il ne sert pas à passer en revue chaque demande : le suivi écrit s’en charge.",
      "Il se tient à heure fixe, à distance, et se prépare par une liste envoyée la veille.",
    ],
    sections: [
      {
        h2: 'L’ordre du jour',
        blocs: [
          {
            modele: {
              titre: 'Ordre du jour type — 15 minutes',
              lignes: [
                "1. Clos cette semaine (2 min) — ce qui est terminé, sans commentaire sauf question.",
                "2. Décisions attendues (5 min) — les sujets bloqués en attente de votre choix, avec les options préparées.",
                "3. La semaine qui vient (4 min) — déplacements, échéances, rendez-vous sensibles, absences.",
                "4. Ce qui doit changer (3 min) — une habitude à ajuster, une préférence à noter, un irritant.",
                "5. Un sujet de fond, si nécessaire (1 min pour le nommer, à traiter à part).",
              ],
            },
          },
        ],
      },
      {
        h2: 'Ce qui le rend utile',
        blocs: [
          {
            liste: [
              "La liste arrive la veille : vous venez avec vos réponses, pas avec vos questions.",
              "Les décisions sont préparées : chaque sujet bloqué arrive avec deux options et une recommandation.",
              "Il est court : au-delà d’un quart d’heure, c’est une réunion, et elle sera annulée.",
              "Il est tenu même quand « il n’y a rien » : c’est souvent ce jour-là qu’on dit l’essentiel.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qu’il ne doit pas devenir',
        blocs: [
          {
            paragraphes: [
              "Le point n’est pas un compte rendu d’activité, ni un contrôle. Une assistante indépendante rend compte d’un résultat, pas de l’emploi de son temps. Si le point tourne à l’inventaire des tâches, c’est que le suivi écrit ne joue pas son rôle : c’est lui qu’il faut améliorer.",
            ],
          },
        ],
      },
      {
        h2: 'Le quatrième point, le plus rentable',
        blocs: [
          {
            paragraphes: [
              "« Ce qui doit changer » est la rubrique qu’on saute quand on est pressé. C’est celle qui fait progresser la collaboration : « je préfère les rendez-vous le matin », « ne me passe plus les appels de ce fournisseur », « ce compte rendu est trop long ». Trois minutes par semaine, et dans trois mois vos préférences n’ont plus besoin d’être répétées.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Annuler le point quand la semaine est chargée : c’est la semaine où il sert le plus.",
      "L’utiliser pour passer de nouvelles demandes à l’oral, sans trace.",
      "Le laisser dériver en revue de détail.",
    ],
    faq: [
      {
        q: 'Faut-il un point chaque semaine ?',
        a: "Le rythme dépend du volume. Hebdomadaire au démarrage, il peut s’espacer une fois la collaboration rodée. L’important est qu’il soit régulier et à heure fixe.",
      },
      {
        q: 'Par quel moyen le tenir ?',
        a: "Un appel suffit. L’écran partagé n’est utile que pour un sujet précis à regarder ensemble. Le compte rendu tient en trois lignes : les décisions prises.",
      },
      {
        q: 'Que faire des sujets de fond ?',
        a: "Les nommer pendant le point, et leur donner un créneau à part. Un sujet de fond traité en fin de point est un sujet mal traité.",
      },
    ],
    liens: [
      { href: '/guides/suivi-demandes-assistante-externalisee', label: 'Suivre les demandes déléguées' },
      { href: '/guides/niveaux-d-autonomie-delegation', label: 'Les niveaux d’autonomie' },
      { href: '/guides/modele-tableau-de-bord-hebdomadaire', label: 'Modèle de tableau de bord hebdomadaire' },
      { href: '/private-office', label: 'Le fonctionnement d’un Private Office' },
    ],
    cloture: 'Quinze minutes réglées valent mieux qu’une semaine de messages.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'point hebdomadaire assistante',
      variantes: ['réunion hebdomadaire dirigeant assistante', 'ordre du jour point hebdo', 'rituel de suivi assistante'],
      persona: 'Dirigeant qui travaille déjà avec une assistante',
      objectif: 'Donner un ordre du jour court et la discipline qui le fait tenir',
      difference: 'Cinq rubriques minutées, centrées sur les décisions et sur « ce qui doit changer »',
    },
  },

  {
    slug: 'assistante-externalisee-et-ia',
    type: 'comparatif',
    dossier: DOSSIER,
    categorie: 'Comparer',
    nom: 'Assistante humaine ou assistant IA',
    title: 'Assistante humaine ou IA : ce que chacun fait bien · BrittAssist',
    description:
      "Rédiger, résumer, trier : l’IA le fait vite. Relancer, arbitrer, porter un sujet jusqu’au bout : c’est un autre travail. Une comparaison sans parti pris.",
    h1: 'Assistante humaine ou assistant IA : la question est mal posée.',
    lede:
      "Les assistants d’intelligence artificielle rédigent, résument et trient à une vitesse qu’aucune personne n’égale. Ils ne décrochent pas un téléphone, ne relancent pas un fournisseur vexé et ne répondent de rien. La comparaison utile n’oppose pas l’un à l’autre : elle répartit le travail.",
    reponseCourte: [
      "Un outil d’IA est fort sur la production de texte : brouillons, synthèses, reformulations, premiers tris.",
      "Il est faible sur ce qui fait le cœur de l’assistanat : suivre un sujet dans le temps, relancer des personnes, arbitrer avec le contexte, répondre du résultat.",
      "Les deux se complètent : l’outil accélère certaines étapes, la personne porte le sujet jusqu’à ce qu’il soit clos.",
      "Confier des données d’entreprise à un outil d’IA demande des précautions : toutes les informations ne peuvent pas y être saisies.",
    ],
    sections: [
      {
        h2: 'Ce que chacun fait bien',
        blocs: [
          {
            tableau: {
              legende: 'Répartition des forces entre un outil d’IA et une assistante',
              colonnes: ['Tâche', 'Outil d’IA', 'Assistante'],
              lignes: [
                ['Rédiger un premier jet de courrier', 'Très rapide', 'Relit, ajuste le ton, connaît le destinataire'],
                ['Résumer un long document', 'Très rapide, à vérifier', 'Sait ce qui compte pour vous'],
                ['Trier une boîte de réception', 'Propose un classement', 'Décide de ce qui vous remonte'],
                ['Relancer un interlocuteur', 'Rédige le message', 'L’envoie, rappelle, obtient la réponse'],
                ['Organiser un déplacement', 'Suggère des options', 'Réserve, vérifie, gère l’imprévu'],
                ['Suivre un dossier sur trois semaines', 'Ne garde pas le fil seul', 'Porte le sujet jusqu’à sa clôture'],
                ['Répondre d’une erreur', 'Non', 'Oui'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les deux limites d’un outil d’IA',
        blocs: [
          {
            h3: 'Il peut se tromper avec assurance',
            paragraphes: [
              "Un modèle de langage produit une suite de mots plausible, pas une vérité vérifiée. Une date, un montant, une règle citée par l’outil doivent être contrôlés avant usage. Sur de l’administratif, une erreur plausible est plus dangereuse qu’une erreur grossière : personne ne la remarque.",
            ],
          },
          {
            h3: 'Il ne garde pas la responsabilité',
            paragraphes: [
              "Un outil n’a pas de devoir de suite. Si la relance n’a pas été envoyée, il ne s’en inquiète pas. Ce qui distingue une assistance d’un outil, c’est que quelqu’un sait qu’un sujet est ouvert et ne le lâche pas.",
            ],
          },
        ],
      },
      {
        h2: 'Les données : la question à poser avant tout',
        blocs: [
          {
            paragraphes: [
              "Saisir un contrat, un fichier clients ou un échange confidentiel dans un outil d’IA grand public revient à le transmettre à un tiers. La CNIL recommande de ne fournir à ces outils que des informations que l’on est autorisé à partager, et d’encadrer les usages en fonction du mode de déploiement de l’outil.",
            ],
            liste: [
              "Quelles données l’outil conserve-t-il, et pour combien de temps ?",
              "Sont-elles réutilisées pour entraîner le modèle ? Peut-on s’y opposer ?",
              "Où sont-elles hébergées ?",
              "Qui, dans l’entreprise, a le droit d’y saisir quoi ?",
            ],
          },
        ],
      },
      {
        h2: 'Les questions à poser à une assistante sur son usage de l’IA',
        blocs: [
          {
            liste: [
              "Utilisez-vous des outils d’IA dans votre travail, et pour quelles tâches ?",
              "Quelles informations de mes dossiers y sont saisies, et lesquelles ne le sont jamais ?",
              "Qui relit ce que l’outil produit avant que cela ne parte ?",
              "Puis-je demander qu’aucun outil d’IA ne soit utilisé sur certains sujets ?",
            ],
          },
          {
            paragraphes: [
              "Ce sont des questions légitimes, à poser à tout prestataire. Une réponse précise vaut mieux qu’un « ne vous inquiétez pas ».",
            ],
          },
        ],
      },
    ],
    limites: [
      "Cette page ne compare aucun produit et ne recommande aucun outil : ils évoluent trop vite pour qu’un avis reste juste.",
      "Les règles applicables aux données personnelles dépendent de votre activité ; votre délégué à la protection des données ou la CNIL sont les références.",
    ],
    faq: [
      {
        q: 'Une IA peut-elle remplacer une assistante ?',
        a: "Sur la production de texte, en partie. Sur le suivi, la relance, l’arbitrage et la responsabilité, non. Ce qui encombre un dirigeant n’est pas d’écrire un e-mail, c’est de devoir penser à l’envoyer et à en attendre la réponse.",
      },
      {
        q: 'Puis-je utiliser moi-même une IA pour mon administratif ?',
        a: "Oui, pour rédiger ou reformuler, en relisant tout ce qui en sort et sans y saisir de données confidentielles ou personnelles sans cadre adapté.",
      },
      {
        q: 'Une assistante qui utilise l’IA est-elle moins fiable ?',
        a: "Pas en soi. Ce qui compte est la relecture humaine et la maîtrise des données saisies. Posez les quatre questions de cette page : elles vous le diront.",
      },
    ],
    liens: [
      { href: '/guides/ia-generative-et-donnees-confidentielles', label: 'IA générative et données confidentielles' },
      { href: '/guides/assistante-virtuelle-ou-private-office', label: 'Assistante virtuelle ou Private Office' },
      { href: '/guides/confidentialite-assistante-externalisee', label: 'Confidentialité et accès à distance' },
      { href: '/private-office', label: 'Le fonctionnement d’un Private Office' },
    ],
    sources: [SOURCE_CNIL_IA],
    cloture: 'Un outil écrit vite. Une personne s’assure que c’est arrivé.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'comparaison',
      motCle: 'assistante ou intelligence artificielle',
      variantes: ['IA peut-elle remplacer une assistante', 'assistant IA dirigeant', 'assistante virtuelle IA ou humaine'],
      persona: 'Dirigeant qui se demande si un outil d’IA suffit',
      objectif: 'Répartir honnêtement ce que fait l’outil et ce que fait la personne',
      difference: 'Ne vend ni l’un ni l’autre ; donne les questions à poser à un prestataire sur son usage de l’IA',
    },
  },

  {
    slug: 'conciergerie-privee-ou-lifestyle-assistant',
    type: 'comparatif',
    dossier: DOSSIER,
    categorie: 'Comparer',
    nom: 'Conciergerie privée ou lifestyle assistant',
    title: 'Conciergerie privée ou lifestyle assistant ? · BrittAssist',
    description:
      "Une conciergerie répond à une demande ; une lifestyle assistant connaît vos habitudes. Deux services voisins, comparés sur ce qui les distingue.",
    h1: 'Conciergerie privée ou lifestyle assistant : deux services, deux logiques.',
    lede:
      "Les deux réservent une table, trouvent un artisan, organisent un week-end. De l’extérieur, rien ne les sépare. La différence tient à une question : qui se souvient de ce que vous aviez demandé la dernière fois ?",
    reponseCourte: [
      "Une conciergerie privée traite des demandes à l’unité, par une équipe, souvent avec un réseau de partenaires.",
      "Une lifestyle assistant est une personne attitrée, qui connaît vos préférences et suit vos sujets dans la durée.",
      "La conciergerie convient aux demandes ponctuelles et à l’accès à un réseau ; l’assistante, à une organisation personnelle continue.",
    ],
    sections: [
      {
        h2: 'La comparaison',
        blocs: [
          {
            tableau: {
              legende: 'Conciergerie privée et lifestyle assistant',
              colonnes: ['Critère', 'Conciergerie privée', 'Lifestyle assistant'],
              lignes: [
                ['Interlocuteur', 'Une équipe, parfois un référent', 'Une personne, toujours la même'],
                ['Mémoire', 'Celle d’un dossier client', 'Celle d’une personne qui vous connaît'],
                ['Demande type', '« Trouvez-moi une table pour samedi »', '« Organise le dîner de samedi, comme la dernière fois »'],
                ['Périmètre', 'Sphère personnelle et loisirs', 'Personnel et professionnel, sans couture'],
                ['Réseau', 'Souvent un atout : partenaires, accès', 'Dépend de la personne'],
                ['Tarification', 'Adhésion, abonnement ou à la demande', 'Forfait ou devis selon le périmètre'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Quand choisir une conciergerie',
        blocs: [
          {
            liste: [
              "Vos demandes sont occasionnelles et indépendantes les unes des autres.",
              "Vous cherchez un accès : une table difficile, un billet, un prestataire dans une ville inconnue.",
              "Vous voulez une disponibilité étendue, que seule une équipe peut assurer.",
            ],
          },
        ],
      },
      {
        h2: 'Quand choisir une lifestyle assistant',
        blocs: [
          {
            liste: [
              "Votre vie personnelle et votre vie professionnelle se mêlent : un déplacement d’affaires prolongé en week-end, un dîner qui est aussi un rendez-vous.",
              "Vous ne voulez pas réexpliquer vos préférences à chaque fois.",
              "Les sujets durent : des travaux à domicile, une démarche administrative, un prestataire à suivre.",
            ],
          },
          {
            paragraphes: [
              "C’est le positionnement d’un Private Office : le même interlocuteur pour l’agenda professionnel et l’organisation personnelle, parce que, pour un dirigeant, la frontière entre les deux n’existe pas vraiment.",
            ],
          },
        ],
      },
      {
        h2: 'La question qui tranche',
        blocs: [
          {
            paragraphes: [
              "Demandez-vous combien de vos demandes commencent par « comme d’habitude ». Si la réponse est « presque toutes », vous avez besoin de quelqu’un qui connaît l’habitude. Si chaque demande est nouvelle, une conciergerie fera très bien l’affaire.",
            ],
          },
        ],
      },
    ],
    limites: [
      "Les offres de conciergerie sont très diverses ; cette page décrit des logiques, pas des prestataires précis.",
    ],
    faq: [
      {
        q: 'BrittAssist est-elle une conciergerie ?',
        a: "Non. BrittAssist est un Private Office : une personne, Brittany Dreano, qui prend en charge l’organisation professionnelle et personnelle d’un dirigeant sur un périmètre défini au devis.",
      },
      {
        q: 'Une lifestyle assistant gère-t-elle les demandes urgentes ?',
        a: "Dans le cadre convenu. Les demandes sont traitées dans la journée ouvrée ; une disponibilité étendue ou renforcée se prévoit au devis, dans une formule sur mesure.",
      },
      {
        q: 'Peut-on combiner les deux ?',
        a: "Oui. Certains dirigeants gardent une conciergerie pour l’accès à un réseau, et confient à une assistante le suivi : c’est elle qui passe la demande à la conciergerie et s’assure du résultat.",
      },
    ],
    liens: [
      { href: '/services/organisation-personnelle', label: 'Faire prendre en charge son organisation personnelle' },
      { href: '/services/reservations', label: 'Déléguer ses réservations' },
      { href: '/guides/qu-est-ce-qu-un-private-office', label: 'Qu’est-ce qu’un Private Office' },
      { href: '/guides/modele-fiche-de-preferences-dirigeant', label: 'Modèle de fiche de préférences' },
    ],
    cloture: 'Une conciergerie exécute une demande. Une assistante se souvient de la précédente.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'comparaison',
      motCle: 'conciergerie privée ou assistante personnelle',
      variantes: ['lifestyle assistant définition', 'différence conciergerie assistante personnelle', 'conciergerie privée dirigeant'],
      persona: 'Dirigeant qui cherche à déléguer sa sphère personnelle',
      objectif: 'Faire choisir entre deux services proches',
      difference: 'Tranche par la mémoire et la continuité, avec une question simple : « comme d’habitude » ?',
    },
  },

  {
    slug: 'chief-of-staff-ou-executive-assistant',
    type: 'comparatif',
    dossier: DOSSIER,
    categorie: 'Comparer',
    nom: 'Chief of staff ou executive assistant',
    title: 'Chief of staff ou executive assistant : qui fait quoi · BrittAssist',
    description:
      "L’un pilote des projets à la place du dirigeant, l’autre organise son temps et ses sujets. Deux rôles souvent confondus, comparés point par point.",
    h1: 'Chief of staff ou executive assistant : deux rôles, souvent confondus.',
    lede:
      "Les deux travaillent au plus près d’un dirigeant, et les deux titres circulent dans les mêmes offres d’emploi. Ils ne répondent pourtant pas au même manque. Se tromper de rôle, c’est recruter quelqu’un de très bien pour le mauvais problème.",
    reponseCourte: [
      "Un chief of staff — directeur de cabinet — pilote des projets transverses et représente le dirigeant auprès des équipes : il agit sur le fond.",
      "Une executive assistant organise le temps, l’information et les sujets du dirigeant : elle agit sur le fonctionnement.",
      "Le premier répond à « je n’arrive plus à faire avancer mes chantiers » ; la seconde à « je n’arrive plus à tenir mes journées ».",
    ],
    sections: [
      {
        h2: 'Les deux rôles, côte à côte',
        blocs: [
          {
            tableau: {
              legende: 'Chief of staff et executive assistant',
              colonnes: ['Critère', 'Chief of staff', 'Executive assistant'],
              lignes: [
                ['Objet du travail', 'Les projets et les priorités de l’entreprise', 'Le temps et les sujets du dirigeant'],
                ['Posture', 'Agit au nom du dirigeant, sur le fond', 'Organise autour du dirigeant'],
                ['Interlocuteurs', 'Comité de direction, équipes, investisseurs', 'Tous ceux qui sollicitent le dirigeant'],
                ['Livrables', 'Notes de décision, suivi de chantiers, arbitrages préparés', 'Agenda tenu, dossiers prêts, demandes closes'],
                ['Profil', 'Généraliste de haut niveau, souvent ancien consultant ou opérationnel', 'Professionnelle de l’organisation et de la coordination'],
                ['Taille d’entreprise', 'Structures où les chantiers transverses se multiplient', 'Dès qu’un dirigeant est débordé'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Reconnaître son besoin',
        blocs: [
          {
            liste: [
              "Vos projets stratégiques n’avancent pas faute de quelqu’un pour les porter entre deux comités : c’est un besoin de chief of staff.",
              "Vos journées vous échappent, vos dossiers ne sont pas prêts, vos demandes se perdent : c’est un besoin d’executive assistant.",
              "Les deux à la fois : commencez par l’organisation. Un chief of staff qui passe son temps à gérer votre agenda est un recrutement coûteux et mal employé.",
            ],
          },
        ],
      },
      {
        h2: 'Là où les rôles se touchent',
        blocs: [
          {
            paragraphes: [
              "Dans une petite structure, les deux fonctions se confondent souvent en une seule personne, ou n’existent pas. Une executive assistant expérimentée prépare des décisions, filtre l’information, suit des sujets transverses. Elle ne décide pas à la place du dirigeant et ne pilote pas des équipes : c’est la limite.",
            ],
          },
        ],
      },
      {
        h2: 'Et en externalisé ?',
        blocs: [
          {
            paragraphes: [
              "Le rôle d’executive assistant s’externalise bien : il repose sur un périmètre, des accès et un canal. Celui de chief of staff s’externalise mal, parce qu’il suppose une présence au cœur de l’entreprise et une autorité déléguée sur des équipes. Un Private Office externalisé se situe clairement du premier côté.",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: 'BrittAssist propose-t-elle un service de chief of staff ?',
        a: "Non. BrittAssist est un Private Office : executive et lifestyle assistance. Le pilotage de projets stratégiques et la représentation du dirigeant auprès des équipes n’en font pas partie.",
      },
      {
        q: 'Une executive assistant peut-elle évoluer vers un rôle de chief of staff ?',
        a: "C’est un parcours qui existe en entreprise. Ce sont néanmoins deux métiers : l’un est centré sur l’organisation, l’autre sur le contenu des décisions.",
      },
      {
        q: 'Quel rôle recruter en premier ?',
        a: "Celui qui libère votre temps. Tant que votre agenda et vos dossiers ne sont pas tenus, un chief of staff passera son énergie à compenser ce désordre.",
      },
    ],
    liens: [
      { href: '/guides/executive-assistant-role', label: 'Le métier d’executive assistant' },
      { href: '/guides/qu-est-ce-qu-un-private-office', label: 'Qu’est-ce qu’un Private Office' },
      { href: '/assistante/dirigeants-pme', label: 'Assistance pour dirigeants de PME' },
      { href: '/guides/dirigeant-goulot-d-etranglement', label: 'Quand tout passe par le dirigeant' },
    ],
    cloture: 'L’un fait avancer vos projets. L’autre vous rend le temps de les décider.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'comparaison',
      motCle: 'chief of staff ou executive assistant',
      variantes: ['différence chief of staff assistante de direction', 'directeur de cabinet ou assistante de direction', 'chief of staff définition'],
      persona: 'Dirigeant de PME en croissance qui hésite entre deux recrutements',
      objectif: 'Clarifier deux rôles et dire lequel répond à quel manque',
      difference: 'Dit clairement ce que BrittAssist ne fait pas, et dans quel ordre traiter les deux besoins',
    },
  },

  {
    slug: 'canal-pour-transmettre-ses-demandes',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Organiser',
    nom: 'Par quel canal transmettre ses demandes',
    title: 'E-mail, messagerie, vocal : transmettre ses demandes · BrittAssist',
    description:
      "Un canal unique, des messages courts, des vocaux qui se retranscrivent : les règles simples pour transmettre ses demandes à une assistante.",
    h1: 'E-mail, messagerie ou message vocal : par où passer ses demandes.',
    lede:
      "Une demande envoyée par SMS, la suivante glissée dans un e-mail, la troisième dite au téléphone : chacune est claire, l’ensemble est ingérable. Le choix du canal n’est pas un détail technique, c’est ce qui rend le suivi possible.",
    reponseCourte: [
      "Choisissez un canal unique pour les demandes, et tenez-vous-y : c’est la condition pour qu’aucune ne se perde.",
      "La messagerie instantanée convient aux demandes courtes ; l’e-mail, aux demandes qui portent des pièces ou un historique.",
      "Un message vocal est le moyen le plus rapide pour vous ; il doit être transformé en demande écrite à la réception.",
      "Le canal des demandes n’est pas celui des urgences : prévoyez-en un second, réservé à ce qui ne peut pas attendre.",
    ],
    sections: [
      {
        h2: 'Les canaux, comparés',
        blocs: [
          {
            tableau: {
              legende: 'Canaux de transmission des demandes',
              colonnes: ['Canal', 'Il est fait pour', 'Sa limite'],
              lignes: [
                ['Messagerie instantanée', 'Une demande en une phrase, depuis un téléphone', 'Les fils s’emmêlent, les pièces se perdent'],
                ['E-mail', 'Une demande avec pièces jointes ou historique', 'Se noie dans la boîte de réception'],
                ['Message vocal', 'Une demande dictée entre deux rendez-vous', 'Doit être retranscrit pour être suivi'],
                ['Appel', 'Un sujet à nuances, une explication', 'Aucune trace sans compte rendu'],
                ['Outil de suivi partagé', 'La liste de référence des demandes', 'Trop lourd pour saisir une demande à la volée'],
              ],
            },
          },
        ],
      },
      {
        h2: 'La règle du canal unique',
        blocs: [
          {
            paragraphes: [
              "Le canal unique ne vous contraint pas, il vous libère : vous n’avez plus à vous demander où vous avez envoyé quoi. Le site de BrittAssist décrit ce principe ainsi : le dirigeant envoie une demande, souvent une seule phrase, par messagerie ou par e-mail, et elle est prise en charge jusqu’à son terme.",
              "En pratique, un canal principal et une tolérance : ce qui arrive ailleurs est recopié dans le suivi par l’assistante, pas par vous.",
            ],
          },
        ],
      },
      {
        h2: 'Écrire une demande qui n’appelle pas de question',
        blocs: [
          {
            modele: {
              titre: 'Trois demandes bien formulées',
              lignes: [
                "« Déjeuner avec M. Leroy la semaine du 12, plutôt mardi ou jeudi, près de son bureau. Tu choisis l’endroit. »",
                "« Relance la facture Durand, échue depuis le 20. S’il ne répond pas vendredi, dis-le-moi. »",
                "« Il me faut trois devis pour le ménage des bureaux d’ici la fin du mois. Budget actuel en pièce jointe. »",
              ],
            },
          },
          {
            paragraphes: [
              "Chacune dit le résultat attendu, une échéance, et jusqu’où l’assistante peut décider. C’est tout ce dont elle a besoin.",
            ],
          },
        ],
      },
      {
        h2: 'Les urgences',
        blocs: [
          {
            paragraphes: [
              "Convenez de ce qui est urgent — un vol annulé, un rendez-vous dans l’heure — et du moyen de le signaler, par exemple un appel. Si tout passe par le canal d’urgence, il n’y a plus d’urgence.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Mêler demandes professionnelles et conversation personnelle dans le même fil.",
      "Envoyer cinq demandes dans un seul message : l’une d’elles sera oubliée.",
      "Supposer qu’un vocal de trois minutes a été entendu jusqu’au bout.",
    ],
    faq: [
      {
        q: 'Quel est le meilleur canal ?',
        a: "Celui que vous utiliserez vraiment, depuis votre téléphone, sans y penser. Pour beaucoup de dirigeants, c’est une messagerie instantanée, doublée de l’e-mail pour les pièces.",
      },
      {
        q: 'Est-ce prudent de passer par une messagerie grand public ?',
        a: "Pour une demande d’organisation, le risque est limité. Les documents sensibles et les mots de passe ne doivent pas y transiter : ils passent par un espace partagé et un gestionnaire de mots de passe.",
      },
      {
        q: 'Qui tient la liste des demandes ?',
        a: "L’assistante. Vous transmettez ; elle enregistre, donne un statut et vous dit quand c’est clos.",
      },
    ],
    liens: [
      { href: '/guides/modele-brief-assistante-externalisee', label: 'Modèle de brief pour déléguer' },
      { href: '/guides/suivi-demandes-assistante-externalisee', label: 'Suivre les demandes déléguées' },
      { href: '/guides/partager-un-mot-de-passe-en-securite', label: 'Partager un accès sans partager son mot de passe' },
      { href: '/private-office', label: 'Le fonctionnement d’un Private Office' },
    ],
    cloture: 'Un seul endroit où demander, c’est un seul endroit où rien ne se perd.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'comment transmettre ses demandes à une assistante',
      variantes: ['communiquer avec son assistante à distance', 'canal de communication assistante', 'travailler avec une assistante par WhatsApp'],
      persona: 'Dirigeant qui démarre ou réorganise une collaboration à distance',
      objectif: 'Faire choisir un canal principal et formuler des demandes complètes',
      difference: 'Compare les canaux par usage et sépare le canal des demandes de celui des urgences',
    },
  },
];
