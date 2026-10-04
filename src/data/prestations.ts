/**
 * Pages de prestation — une par domaine des accompagnements BrittAssist.
 *
 * Ces pages visent des recherches longue traîne (« déléguer la facturation »,
 * « faire organiser mes déplacements professionnels »…). Chacune doit apporter
 * un contenu réellement distinct : des pages sœurs quasi identiques seraient
 * traitées comme des pages satellites et desserviraient tout le domaine.
 *
 * Elles ne vendent jamais un volume horaire : le périmètre se définit au devis.
 */

export interface Prestation {
  slug: string;
  univers: string;
  /** Ligne exacte du périmètre affiché sur l'accueil */
  perimetre: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  /** Le problème tel qu'un dirigeant le vit */
  probleme: { titre: string; paragraphes: string[] };
  /** Ce qui est réellement pris en charge */
  absorbe: string[];
  /** Ce qui reste chez le dirigeant — la franchise fait partie du service */
  reste: string[];
  /** Exemple illustratif, jamais présenté comme une mission réelle */
  exemple: { demande: string; prise: string; resultat: string };
  faq: { q: string; a: string }[];
  cloture: string;
}

export const prestations: Prestation[] = [
  {
    slug: 'gestion-administrative',
    univers: 'Executive Admin',
    perimetre: 'Administratif',
    title: 'Déléguer la gestion administrative de son entreprise · BrittAssist',
    description:
      "Confier l’administratif de son entreprise à un Private Office externalisé : documents, échéances, classement, préparation comptable. Dès 590 € / mois.",
    h1: 'Déléguer la gestion administrative de votre entreprise.',
    lede:
      "L'administratif ne fait jamais tomber une entreprise d'un coup. Il l'érode : une pièce introuvable un mardi, une échéance ratée un mois plus tard, une heure perdue chaque semaine à chercher ce qui aurait dû être classé.",
    probleme: {
      titre: 'Ce n’est pas difficile. C’est incessant.',
      paragraphes: [
        "Aucune de ces tâches ne demande votre niveau de compétence. Prises séparément, elles se règlent en quelques minutes. C'est leur accumulation qui pose problème : elles arrivent en continu, elles interrompent, et elles finissent toujours par revenir au dirigeant parce que personne d'autre n'a le contexte.",
        "Un Private Office externalisé ne vous rend pas l'administratif plus rapide. Il le sort de votre champ de vision.",
      ],
    },
    absorbe: [
      'Classement et archivage des pièces, avec une logique que vous retrouvez seul',
      'Suivi des échéances : renouvellements, assurances, abonnements, obligations',
      'Préparation et transmission des éléments au comptable',
      'Notes de frais et justificatifs, rassemblés au fil de l’eau',
      'Rédaction et mise en forme des courriers et attestations',
      'Suivi des démarches auprès des organismes',
      'Mise à jour des documents de référence de l’entreprise',
      'Relance des pièces manquantes auprès de vos interlocuteurs',
    ],
    reste: [
      'Les décisions qui engagent l’entreprise',
      'La signature',
      'La tenue comptable et les déclarations fiscales, qui relèvent de votre expert-comptable',
    ],
    exemple: {
      demande: '« Je ne retrouve pas l’attestation de vigilance pour l’appel d’offres, et je crois qu’une assurance arrive à échéance. »',
      prise:
        "Récupération de l'attestation auprès de l'organisme, vérification de sa validité à la date du dépôt, revue de l'ensemble des contrats d'assurance et identification des deux échéances des soixante prochains jours, avec les conditions de reconduction.",
      resultat:
        "Le document est arrivé le jour même. Les deux échéances ont été traitées avant leur date, sans qu'il ait fallu y penser.",
    },
    faq: [
      {
        q: 'Faut-il me donner accès à mes outils ?',
        a: "Seulement à ce qui est nécessaire au périmètre convenu, et rien de plus. Les accès sont définis au démarrage, limités, et révocables à tout moment. La confidentialité est contractuelle et reste en vigueur cinq ans après la fin de la collaboration.",
      },
      {
        q: 'Est-ce que cela remplace un expert-comptable ?',
        a: "Non. La tenue comptable et les déclarations fiscales sont expressément hors périmètre. En revanche, la préparation et la transmission des pièces à votre comptable, elles, sont prises en charge — c'est souvent ce qui coince.",
      },
    ],
    cloture: 'L’administratif ne devrait jamais être ce qui occupe votre lundi matin.',
  },

  {
    slug: 'facturation',
    univers: 'Executive Admin',
    perimetre: 'Facturation',
    title: 'Déléguer sa facturation et ses relances · BrittAssist',
    description:
      "Confier l’émission des factures, le suivi des encaissements et les relances d’impayés à un Private Office externalisé. Pour dirigeants, dès 590 € / mois.",
    h1: 'Confier votre facturation et vos relances.',
    lede:
      "Facturer est le geste le plus rentable de votre semaine, et c'est presque toujours celui qu'on repousse. Relancer un client en retard l'est encore plus, et c'est celui qu'on repousse le plus longtemps.",
    probleme: {
      titre: 'Le retard de facturation coûte plus cher que le retard de paiement.',
      paragraphes: [
        "Une facture émise avec deux semaines de décalage, c'est deux semaines de trésorerie perdues sur chaque dossier. Une relance qu'on n'ose pas envoyer, c'est un encours qui vieillit jusqu'à devenir difficile à récupérer.",
        "Le blocage est rarement technique. Il est dans le fait que ce soit vous qui deviez le faire, entre deux rendez-vous, et qu'une relance signée de votre main engage la relation commerciale d'une façon qu'une relance administrative n'engage pas.",
      ],
    },
    absorbe: [
      'Émission des factures à date, selon le rythme convenu',
      'Vérification des montants et des mentions obligatoires avant envoi',
      'Suivi des encaissements et rapprochement avec les règlements reçus',
      'Relances graduées des impayés, à l’écrit puis par téléphone',
      'Alerte sur les encours qui vieillissent, avant qu’ils ne deviennent un sujet',
      'Établissement et suivi des devis',
      'Préparation des éléments de facturation pour le comptable',
      'Point régulier sur ce qui est encaissé, en attente, ou bloqué',
    ],
    reste: [
      'Le montant et les conditions commerciales',
      'La décision d’engager une procédure de recouvrement',
      'Les remises et les gestes commerciaux',
    ],
    exemple: {
      demande: '« Je ne sais plus qui m’a payé, ce que j’ai signé, ni ce que je dois relancer. »',
      prise:
        "Reprise de l'ensemble des factures des douze derniers mois, rapprochement avec les encaissements, identification des impayés et de leur ancienneté, relances envoyées par ordre de priorité, et mise en place d'un suivi unique des échéances.",
      resultat:
        "Les encours ont cessé d'être une inconnue. Les relances partent maintenant à date sans qu'il faille y penser, et les blocages réels remontent avec une recommandation.",
    },
    faq: [
      {
        q: 'Utilisez-vous mon logiciel de facturation ?',
        a: "Oui. L'objectif n'est pas de vous faire changer d'outil mais de reprendre celui que vous utilisez déjà. Si vous n'en avez pas, je peux en proposer un simple et le mettre en place.",
      },
      {
        q: 'Jusqu’où vont les relances ?',
        a: "Jusqu'à la mise en demeure, qui reste votre décision. Au-delà, le recouvrement contentieux relève d'un professionnel du droit — je vous oriente et j'assure la coordination, sans me substituer à lui.",
      },
    ],
    cloture: 'Vos factures partent à date. Vos relances aussi.',
  },

  {
    slug: 'gestion-des-contrats',
    univers: 'Executive Admin',
    perimetre: 'Contrats',
    title: 'Déléguer la préparation et le suivi de ses contrats · BrittAssist',
    description:
      "Préparation, envoi, suivi des signatures et des échéances contractuelles par un Private Office externalisé. Pour dirigeants, dès 590 € / mois.",
    h1: 'Préparer, envoyer et suivre vos contrats.',
    lede:
      "Un contrat non signé est un accord qui n'existe pas. Un contrat signé mais jamais relu est un engagement qu'on découvre au mauvais moment.",
    probleme: {
      titre: 'Entre l’accord verbal et la signature, il y a un couloir où tout se perd.',
      paragraphes: [
        "Le client a dit oui. Le document doit être préparé, personnalisé, envoyé, puis suivi jusqu'à la signature. Chacune de ces étapes prend quelques minutes et aucune n'est urgente — c'est précisément pour ça qu'elles s'étalent sur trois semaines.",
        "Le même mécanisme joue à l'autre bout : les clauses de reconduction tacite, les préavis, les dates de fin. Personne ne les regarde jusqu'au jour où il est trop tard pour agir.",
      ],
    },
    absorbe: [
      'Préparation des contrats à partir de vos modèles',
      'Personnalisation et vérification avant envoi',
      'Envoi en signature électronique et suivi jusqu’à la signature',
      'Relance des signataires qui n’ont pas répondu',
      'Classement des contrats signés, accessibles quand il faut',
      'Suivi des dates de fin, de reconduction et de préavis',
      'Alerte en amont des échéances, avec le temps d’agir',
      'Suivi des avenants et des modifications',
    ],
    reste: [
      'La négociation et les termes commerciaux',
      'La rédaction juridique et la validation des clauses, qui relèvent d’un avocat',
      'La signature',
    ],
    exemple: {
      demande: '« Envoie le contrat à ce client, et vérifie où en sont les trois autres. »',
      prise:
        "Contrat préparé à partir du modèle, personnalisé, envoyé en signature le jour même. Revue des trois dossiers en cours : un signé et classé, un en attente depuis onze jours et relancé, un bloqué sur une question du client qui vous est remontée avec la réponse suggérée.",
      resultat:
        "Un seul retour, trois statuts clairs, et une seule question qui méritait réellement votre attention.",
    },
    faq: [
      {
        q: 'Rédigez-vous les contrats ?',
        a: "Non. Je travaille à partir de vos modèles existants ou de ceux fournis par votre conseil. La rédaction juridique et la validation des clauses relèvent d'un avocat — je prépare, j'envoie, je relance et je suis les échéances.",
      },
      {
        q: 'Comment sont gérées les reconductions tacites ?',
        a: "Chaque contrat entre dans un suivi d'échéances avec sa date de préavis. L'alerte vous arrive suffisamment tôt pour décider, pas le jour où la reconduction est déjà acquise.",
      },
    ],
    cloture: 'Aucun contrat ne reste en attente parce que personne ne l’a relancé.',
  },

  {
    slug: 'coordination',
    univers: 'Agenda & Coordination',
    perimetre: 'Coordination',
    title: 'Déléguer la coordination de ses interlocuteurs · BrittAssist',
    description:
      "Faire coordonner ses interlocuteurs, ses réunions et ses suites à donner par un Private Office externalisé. Pour dirigeants, dès 590 € / mois.",
    h1: 'Coordonner vos interlocuteurs sans y passer vos journées.',
    lede:
      "Réunir quatre personnes autour d'une décision demande souvent plus de temps que la décision elle-même. C'est l'un des coûts les plus invisibles du métier de dirigeant.",
    probleme: {
      titre: 'Vous n’êtes pas le point de passage. Vous l’êtes devenu.',
      paragraphes: [
        "À mesure qu'une activité grandit, le dirigeant se retrouve au centre d'un réseau qu'il n'a pas choisi : le client attend une réponse du prestataire, le prestataire attend une validation, l'équipe attend un créneau, et tout transite par vous parce que vous êtes le seul à voir l'ensemble.",
        "Le problème n'est pas le volume de messages. C'est que chacun vous oblige à recharger un contexte différent, dix fois par jour.",
      ],
    },
    absorbe: [
      'Coordination entre plusieurs participants pour trouver un créneau réel',
      'Interface avec vos clients, vos prestataires et vos équipes sur un sujet donné',
      'Circulation de l’information entre des interlocuteurs qui ne se parlent pas',
      'Suivi des suites à donner après une réunion',
      'Relance de ceux qui n’ont pas répondu, autant de fois qu’il le faut',
      'Préparation des éléments dont chacun a besoin avant l’échange',
      'Reprogrammation complète quand un imprévu casse la chaîne',
      'Point de synthèse sur ce qui avance et ce qui bloque',
    ],
    reste: [
      'Les arbitrages qui engagent la relation commerciale',
      'Les décisions qui dépendent d’une information que vous seul avez',
      'Les relations que vous voulez continuer à porter vous-même',
    ],
    exemple: {
      demande: '« Il faut caler le point avec le client, l’architecte et l’installateur avant la fin de la semaine. »',
      prise:
        "Disponibilités collectées auprès des trois parties, créneau arbitré en fonction du temps de trajet de chacun, invitation envoyée avec l'ordre du jour, documents rassemblés en amont, et relance des deux participants qui n'avaient pas confirmé.",
      resultat:
        'Le point a eu lieu avant la fin de semaine. Vous avez reçu un message : la date, le lieu, et ce qui vous attend.',
    },
    faq: [
      {
        q: 'Écrivez-vous en mon nom ?',
        a: "Selon ce que vous décidez au démarrage. Certains dirigeants préfèrent que je me présente comme leur assistante, d'autres que les échanges partent de leur adresse. Les deux fonctionnent, et le choix se fige dès le premier mois pour rester cohérent.",
      },
      {
        q: 'Et si un interlocuteur insiste pour me parler directement ?',
        a: "Il vous parle. Mon travail n'est pas de faire écran mais de filtrer ce qui n'a pas besoin de vous. Ce qui exige votre voix vous revient, avec le contexte déjà rassemblé.",
      },
    ],
    cloture: 'Une seule personne tient les fils. Ce n’est plus vous.',
  },

  {
    slug: 'gestion-agenda',
    univers: 'Agenda & Coordination',
    perimetre: 'Agenda',
    title: 'Déléguer la gestion de son agenda · BrittAssist',
    description:
      "Confier la tenue de son agenda, ses rendez-vous et ses confirmations à un Private Office externalisé. Pour dirigeants et entrepreneurs, à partir de 590 € / mois.",
    h1: 'Confier la tenue de votre agenda.',
    lede:
      "Un agenda mal tenu ne se voit pas dans les cases. Il se voit dans les trajets impossibles, les journées sans respiration et les rendez-vous qu'on décale trois fois.",
    probleme: {
      titre: 'Le problème n’est pas de poser un rendez-vous. C’est de tenir l’ensemble.',
      paragraphes: [
        "Prendre un rendez-vous prend trente secondes. Vérifier qu'il est compatible avec le précédent, qu'il laisse le temps du trajet, qu'il ne tombe pas le jour où vous êtes déjà à trois cents kilomètres — c'est autre chose.",
        "Un agenda est un système. Chaque ajout modifie l'équilibre, et c'est cet arbitrage permanent, plus que la prise de rendez-vous, qui consomme l'attention.",
      ],
    },
    absorbe: [
      'Prise et confirmation des rendez-vous',
      'Arbitrage des créneaux selon vos priorités réelles',
      'Vérification des temps de trajet et de la faisabilité d’une journée',
      'Reprogrammation complète en cas d’imprévu',
      'Rappels utiles, au moment où ils servent',
      'Préparation de la journée la veille, avec ce qu’il faut avoir en tête',
      'Protection des plages que vous voulez garder libres',
      'Coordination avec les agendas de vos interlocuteurs',
    ],
    reste: [
      'La décision de dire oui ou non à un rendez-vous',
      'Vos priorités, que je tiens sans les fixer',
      'Ce que vous choisissez de garder hors agenda',
    ],
    exemple: {
      demande: '« Cale le rendez-vous de Nantes, mais pas le jeudi, j’ai déjà Bordeaux le matin. »',
      prise:
        "Vérification du retour de Bordeaux et du temps de trajet réel, proposition de deux créneaux compatibles, arbitrage avec l'interlocuteur, confirmation envoyée, et déplacement du point interne qui tombait au même moment.",
      resultat: 'Un rendez-vous posé, un conflit évité, et une journée qui tient debout.',
    },
    faq: [
      {
        q: 'Quel outil d’agenda utilisez-vous ?',
        a: "Le vôtre. Google Agenda, Outlook ou autre : je travaille dans l'outil que vous utilisez déjà, avec un accès limité à l'agenda concerné.",
      },
      {
        q: 'Puis-je garder la main sur certaines plages ?',
        a: "Oui, et c'est même recommandé. Les plages que vous voulez protéger sont définies au démarrage et ne sont jamais remplies sans votre accord explicite.",
      },
    ],
    cloture: 'Votre semaine tient debout, et vous n’avez pas eu à la construire.',
  },

  {
    slug: 'organisation-deplacements',
    univers: 'Travel',
    perimetre: 'Déplacements',
    title: 'Faire organiser ses déplacements professionnels · BrittAssist',
    description:
      "Organisation complète des déplacements professionnels : vols, trains, hôtels, transferts et itinéraires, par un Private Office externalisé. À partir de 990 € / mois.",
    h1: 'Faire organiser vos déplacements professionnels.',
    lede:
      "Un déplacement de deux jours, c'est une quinzaine de micro-décisions : l'horaire, la correspondance, l'hôtel, le transfert, la table du soir, et tout ce qu'il faut refaire quand un train est supprimé.",
    probleme: {
      titre: 'Ce n’est pas la réservation qui coûte. C’est l’arbitrage.',
      paragraphes: [
        "Réserver un train prend trois minutes. Choisir le bon suppose de savoir où est le rendez-vous, combien de temps prend le transfert, à quelle heure vous voulez être rentré, et si vous préférez partir tôt ou dormir sur place. Ce sont ces arbitrages qui prennent du temps, pas les clics.",
        "Et il y a la partie invisible : la modification de dernière minute, la correspondance ratée, l'hôtel qui a perdu la réservation. C'est là qu'un déplacement mal organisé coûte une demi-journée.",
      ],
    },
    absorbe: [
      'Recherche et comparaison des trajets, sur le temps réel de porte à porte',
      'Réservation des vols et des trains selon vos préférences connues',
      'Sélection de l’hôtel en fonction du lieu exact du rendez-vous',
      'Transferts aéroport, gare et sur place',
      'Location de véhicule quand c’est la meilleure option',
      'Itinéraire complet envoyé avant le départ',
      'Centralisation de toutes les confirmations en un seul endroit',
      'Modification et suivi pendant le déplacement, y compris en cas d’imprévu',
    ],
    reste: [
      'La décision d’y aller',
      'Le budget et les arbitrages de confort',
      'Les rendez-vous eux-mêmes',
    ],
    exemple: {
      demande: '« Je dois être à Madrid mardi avant 14 h. Retour jeudi soir. Hôtel calme près du rendez-vous. Dîner client mercredi. Budget 1 200 €. »',
      prise:
        "Comparaison des vols et des trains sur le temps de porte à porte, hôtel retenu à sept minutes à pied du rendez-vous, transferts réservés dans les deux sens, table retenue pour le dîner du mercredi, confirmations centralisées et itinéraire complet envoyé la veille.",
      resultat:
        "Un seul message envoyé, aucun arbitrage à reprendre, et un déplacement qui s'est déroulé sans qu'une seule question ne remonte.",
    },
    faq: [
      {
        q: 'Que se passe-t-il si mon vol est annulé pendant le déplacement ?',
        a: "Vous m'envoyez un message et je reprends la main : recherche des alternatives, rebooking, ajustement de l'hôtel et des transferts, information des personnes que vous deviez voir. Vous recevez la nouvelle version, pas la liste des options.",
      },
      {
        q: 'Faut-il vous donner accès à ma carte bancaire ?',
        a: "Pas nécessairement. Selon ce qui vous convient, les réservations se font sur un moyen de paiement dédié, sur un compte professionnel, ou vous validez chaque paiement. Les frais engagés pour votre compte sont refacturés à l'euro près, sur justificatifs.",
      },
    ],
    cloture: 'Vous partez. Le reste a été organisé.',
  },

  {
    slug: 'reservations',
    univers: 'Travel',
    perimetre: 'Réservations',
    title: 'Déléguer ses réservations pro et personnelles · BrittAssist',
    description:
      "Restaurants, hôtels, billetterie, activités : déléguer ses réservations à un Private Office externalisé. Pour dirigeants et entrepreneurs, à partir de 990 € / mois.",
    h1: 'Déléguer vos réservations, professionnelles et personnelles.',
    lede:
      "Une table pour un dîner client, une salle pour un séminaire, deux places pour un spectacle : ce sont des demandes de quelques minutes, qui n'arrivent jamais au moment où vous avez ces quelques minutes.",
    probleme: {
      titre: 'Le bon endroit, au bon moment, demande de connaître les deux.',
      paragraphes: [
        "Réserver un restaurant est simple. Réserver le bon, celui qui convient à l'occasion, à l'interlocuteur, au quartier du rendez-vous et à l'heure à laquelle vous serez réellement libre, demande de tenir compte de tout cela en même temps.",
        "Une réservation qui compte est toujours contrainte. C'est ce qui la rend chronophage, et c'est ce qui la rend déléguable — à condition que la personne connaisse vos préférences sans avoir à les redemander.",
      ],
    },
    absorbe: [
      'Réservation de restaurants, adaptée à l’occasion et à l’interlocuteur',
      'Organisation de dîners clients, du choix du lieu à la confirmation',
      'Hôtels, en déplacement comme pour un séjour personnel',
      'Billetterie, spectacles et événements',
      'Recherche et réservation d’activités',
      'Salles de réunion et espaces de travail ponctuels',
      'Commandes et livraisons suivies jusqu’à réception',
      'Annulation et report quand le programme change',
    ],
    reste: [
      'Le choix final quand plusieurs options se valent',
      'Le budget',
      'Les invitations elles-mêmes',
    ],
    exemple: {
      demande: '« Dîner à quatre jeudi, près de la Bourse, calme, pas trop long. »',
      prise:
        "Trois adresses retenues dans le quartier selon le critère de calme, une réservée pour 20 h après vérification du niveau sonore et de la durée moyenne d'un service, confirmation obtenue et transmise, allergie d'un des convives signalée à l'établissement.",
      resultat: 'Une réponse en fin de journée : le nom, l’adresse, l’heure. Rien d’autre à décider.',
    },
    faq: [
      {
        q: 'Comment connaissez-vous mes préférences ?',
        a: "Elles se construisent au fil des premières semaines et je les tiens à jour. C'est la différence principale avec une plateforme où l'interlocuteur change : au bout d'un mois, il n'y a plus grand-chose à réexpliquer.",
      },
      {
        q: 'Prenez-vous en charge les réservations personnelles ?',
        a: "Oui. Le périmètre traverse le professionnel et le personnel, parce que votre agenda ne les sépare pas. C'est précisément ce qui distingue un Private Office d'une assistance uniquement administrative.",
      },
    ],
    cloture: 'Quatre-vingt-dix secondes de votre côté. Tout le reste du mien.',
  },

  {
    slug: 'organisation-personnelle',
    univers: 'Private Coordination',
    perimetre: 'Organisation personnelle',
    title: 'Déléguer son organisation personnelle · BrittAssist',
    description:
      "Démarches, rendez-vous, abonnements, organisation familiale : déléguer sa vie logistique personnelle à un Private Office externalisé. À partir de 990 € / mois.",
    h1: 'Faire prendre en charge votre organisation personnelle.',
    lede:
      "La charge mentale d'un dirigeant ne s'arrête pas à la porte de l'entreprise. Elle continue avec le contrôle technique, le rendez-vous médical à décaler et l'abonnement qu'on paie depuis deux ans sans l'utiliser.",
    probleme: {
      titre: 'Ce que vous repoussez le plus longtemps n’est presque jamais professionnel.',
      paragraphes: [
        "Les sujets personnels n'ont pas d'échéance imposée par un client. Ils se décalent donc indéfiniment, jusqu'à devenir urgents ou coûteux : l'assurance reconduite au mauvais tarif, le rendez-vous pris trop tard, la démarche administrative qui aurait pris dix minutes six mois plus tôt.",
        "Ils occupent pourtant la même place dans votre tête qu'un dossier client. Souvent davantage, parce qu'ils traînent.",
      ],
    },
    absorbe: [
      'Démarches administratives personnelles',
      'Prise de rendez-vous médicaux et administratifs',
      'Gestion des abonnements et des contrats du foyer',
      'Comparaison et renégociation des assurances et fournisseurs',
      'Organisation familiale ponctuelle',
      'Recherches et comparatifs pour un achat',
      'Suivi des commandes, livraisons, retours et garanties',
      'Dates à ne pas manquer, anniversaires et attentions',
    ],
    reste: [
      'Toutes les décisions',
      'Ce que vous préférez garder pour vous — le périmètre personnel est le vôtre, il se définit et se restreint librement',
    ],
    exemple: {
      demande: '« Il faut faire le contrôle technique et je crois que la mutuelle a augmenté. »',
      prise:
        "Créneau de contrôle technique réservé à proximité, sur une plage compatible avec votre agenda. Revue du contrat de mutuelle, comparaison de trois offres équivalentes, et présentation de l'écart réel avec la recommandation associée.",
      resultat:
        "Le contrôle a été fait sans y penser. Le changement de mutuelle vous a été présenté comme une décision de deux minutes, avec les chiffres.",
    },
    faq: [
      {
        q: 'Jusqu’où va le périmètre personnel ?',
        a: "Jusqu'où vous le décidez, et pas plus loin. Certains dirigeants confient toute la logistique du foyer, d'autres uniquement les démarches administratives. Le périmètre est défini au démarrage et se modifie quand vous le souhaitez.",
      },
      {
        q: 'La confidentialité s’applique-t-elle aussi aux sujets privés ?',
        a: "De la même manière et avec la même force. L'engagement de confidentialité est contractuel, ne distingue pas le professionnel du personnel, et reste en vigueur cinq ans après la fin de la collaboration.",
      },
    ],
    cloture: 'Ce qui traîne depuis six mois peut être clos cette semaine.',
  },

  {
    slug: 'suivi-prestataires',
    univers: 'Private Coordination',
    perimetre: 'Suivi prestataires',
    title: 'Déléguer le suivi de ses prestataires · BrittAssist',
    description:
      "Recherche, devis, coordination des interventions et relances : faire suivre ses prestataires jusqu’au résultat par un Private Office. Dès 990 € / mois.",
    h1: 'Faire suivre vos prestataires jusqu’au résultat.',
    lede:
      "Un prestataire qui ne répond pas n'est pas un problème technique. C'est un sujet ouvert qui reste dans votre tête jusqu'à ce que quelqu'un le referme.",
    probleme: {
      titre: 'Relancer coûte peu. Se souvenir de relancer coûte cher.',
      paragraphes: [
        "Le devis promis pour mardi, l'intervention reportée deux fois, l'artisan qui devait rappeler : aucun de ces sujets ne demande de compétence particulière. Ils demandent de la constance, et de garder en tête une dizaine de fils simultanés.",
        "C'est exactement le type de charge qui n'apparaît nulle part dans une journée de travail, et qui explique pourtant qu'on finisse la semaine avec le sentiment de n'avoir rien terminé.",
      ],
    },
    absorbe: [
      'Recherche et présélection de prestataires selon vos critères',
      'Demande et comparaison des devis',
      'Prise de rendez-vous et coordination des interventions',
      'Relances jusqu’à obtention d’une réponse',
      'Suivi de l’avancement des travaux ou de la prestation',
      'Vérification que ce qui était prévu a bien été fait',
      'Gestion des reports, des litiges et des reprises',
      'Retour avec des solutions et une recommandation quand ça bloque',
    ],
    reste: [
      'Le choix du prestataire',
      'La validation des devis et des dépenses',
      'La décision d’arrêter une collaboration',
    ],
    exemple: {
      demande: '« Le prestataire ne répond pas depuis dix jours. »',
      prise:
        "Reprise de l'historique des échanges, relance écrite puis appel, obtention d'une date ferme. En parallèle, deux prestataires équivalents contactés pour disposer d'une alternative chiffrée si la date n'était pas tenue.",
      resultat:
        'Un retour unique : la date obtenue, et le plan B déjà chiffré. Pas un transfert de message.',
    },
    faq: [
      {
        q: 'Que se passe-t-il si le prestataire reste injoignable ?',
        a: "Le sujet ne reste pas en suspens. Il vous revient avec un statut « bloqué », les alternatives déjà identifiées et chiffrées, et une recommandation. C'est le principe de la boucle fermée : vous recevez une décision à prendre, jamais un problème à reprendre.",
      },
      {
        q: 'Cela concerne-t-il aussi les prestataires personnels ?',
        a: "Oui. Travaux à domicile, dépannages, interventions courantes : le suivi fonctionne de la même manière, dans le périmètre que vous avez défini.",
      },
    ],
    cloture: 'Un sujet confié est un sujet qui ne revient pas vous chercher.',
  },

  {
    slug: 'support-equipes',
    univers: 'Agenda & Coordination',
    perimetre: 'Support ponctuel aux équipes',
    title: 'Un renfort administratif ponctuel pour ses équipes · BrittAssist',
    description:
      "Renfort ponctuel pour une équipe sans assistante : coordination, préparation de dossiers, suivi. Par un Private Office externalisé, à partir de 590 € / mois.",
    h1: 'Un renfort ponctuel pour vos équipes.',
    lede:
      "Beaucoup de structures sont trop petites pour un poste d'assistante et trop chargées pour s'en passer. Le travail retombe alors sur ceux dont ce n'est pas le métier — ou sur vous.",
    probleme: {
      titre: 'Le poste n’existe pas, mais le travail, si.',
      paragraphes: [
        "Recruter une assistante à temps plein suppose un volume constant, un encadrement et une visibilité que peu de structures de moins de vingt personnes ont réellement. Alors on répartit : un commercial fait de la relance, un technicien monte un dossier, et chacun avance moins vite sur ce pour quoi il a été recruté.",
        "Un renfort externe résout le problème par l'autre bout : la compétence est disponible quand elle sert, sans créer de poste à occuper.",
      ],
    },
    absorbe: [
      'Préparation de dossiers et de documents pour un projet donné',
      'Coordination interne sur un sujet ponctuel',
      'Prise de relais pendant une absence ou un pic d’activité',
      'Mise en forme et relecture de livrables',
      'Suivi des relances et des retours',
      'Organisation logistique d’un événement ou d’un séminaire interne',
      'Rassemblement des informations dispersées entre plusieurs personnes',
      'Point de synthèse sur ce qui avance et ce qui bloque',
    ],
    reste: [
      'Le management de vos équipes',
      'Les arbitrages de priorité entre projets',
      'Tout ce qui relève d’une décision d’entreprise',
    ],
    exemple: {
      demande: '« L’équipe monte un dossier pour vendredi et personne n’a le temps de le mettre au propre. »',
      prise:
        "Éléments rassemblés auprès des trois contributeurs, pièces manquantes relancées, document mis en forme selon votre modèle, cohérence des chiffres vérifiée entre les sections, et version finale envoyée pour relecture le jeudi matin.",
      resultat:
        'Le dossier est parti à l’heure. Les trois contributeurs ont passé leur semaine sur leur propre travail.',
    },
    faq: [
      {
        q: 'Mes équipes peuvent-elles vous solliciter directement ?',
        a: "Oui, dans le périmètre que vous avez défini et sur les sujets que vous avez ouverts. Cela évite que chaque demande transite par vous, ce qui est précisément le point à supprimer.",
      },
      {
        q: 'Est-ce que cela remplace un recrutement ?',
        a: "Pour une structure dont le besoin n'est pas constant, souvent oui. Si le volume devient régulier et important, un Private Office prend le relais, ou un recrutement devient pertinent — et je le dis quand c'est le cas.",
      },
    ],
    cloture: 'La compétence est là quand elle sert. Pas un poste de plus à occuper.',
  },

  {
    slug: 'recherches',
    univers: 'Lifestyle',
    perimetre: 'Recherches',
    title: 'Déléguer ses recherches et ses comparatifs · BrittAssist',
    description:
      "Faire réaliser ses recherches, comparatifs et repérages par un Private Office externalisé, avec une synthèse et une recommandation. À partir de 590 € / mois.",
    h1: 'Déléguer vos recherches et vos comparatifs.',
    lede:
      "Comparer trois offres demande vingt minutes. Comparer trois offres correctement, en lisant ce qui est réellement inclus, en demande deux heures. C'est pour ça que la décision attend.",
    probleme: {
      titre: 'L’information existe. Le temps de la trier, non.',
      paragraphes: [
        "Choisir un logiciel, un fournisseur, un lieu de séminaire ou un équipement suppose de rassembler des offres, de les rendre comparables, d'écarter celles qui ne tiennent pas et de retenir ce qui compte réellement. C'est un travail méthodique qui n'exige pas votre expertise, mais qui exige du temps continu — celui dont vous disposez le moins.",
        "Résultat : la décision se prend soit trop vite, sur la première option acceptable, soit pas du tout.",
      ],
    },
    absorbe: [
      'Recherche et présélection selon vos critères réels',
      'Comparatifs rendus lisibles, sur les points qui comptent',
      'Vérification de ce qui est effectivement inclus dans chaque offre',
      'Prise de contact et demande de devis',
      'Repérage de lieux, de fournisseurs ou de prestataires',
      'Synthèse écrite, courte, avec une recommandation argumentée',
      'Vérification des avis et de la fiabilité des interlocuteurs',
      'Suivi jusqu’à la mise en place de l’option retenue',
    ],
    reste: [
      'La décision finale',
      'Les critères, que je peux vous aider à formuler mais pas à fixer',
      'L’arbitrage budgétaire',
    ],
    exemple: {
      demande: '« Il me faut un lieu pour un séminaire de deux jours, quinze personnes, en septembre, à moins de deux heures de Nantes. »',
      prise:
        "Onze lieux identifiés, sept écartés sur la capacité réelle ou les disponibilités, quatre retenus et contactés. Devis obtenus, ce qui est inclus vérifié ligne à ligne, temps de trajet réel calculé depuis Nantes, et synthèse d'une page avec une recommandation.",
      resultat:
        "Une décision prise en dix minutes, sur des éléments comparables. Le lieu a été réservé dans la foulée.",
    },
    faq: [
      {
        q: 'Sous quelle forme arrive le résultat ?',
        a: "Une synthèse courte, jamais un dossier. Les options retenues, ce qui les distingue réellement, et une recommandation. Le travail de tri a été fait en amont — c'est tout l'intérêt de l'avoir délégué.",
      },
      {
        q: 'Sur quels sujets pouvez-vous chercher ?',
        a: "Sur tout ce qui relève de l'organisation, de l'achat ou du repérage. Sur un sujet qui demande une expertise réglementée — juridique, comptable, technique — j'identifie le bon interlocuteur plutôt que de produire une analyse que je ne suis pas en position de garantir.",
      },
    ],
    cloture: 'Vous recevez une décision à prendre, pas un dossier à lire.',
  },

  {
    slug: 'assistanat-anglais',
    univers: 'International',
    perimetre: 'Échanges en anglais',
    title: 'Assistante bilingue anglais pour dirigeant · BrittAssist',
    description:
      "Échanges écrits et téléphoniques en anglais, coordination avec vos interlocuteurs étrangers, par un Private Office externalisé. Dès 590 € / mois.",
    h1: 'Faire gérer vos échanges en anglais.',
    lede:
      "Un e-mail en anglais qu'on repousse à demain devient un client étranger qui attend trois jours. La barrière n'est pas toujours le niveau : c'est le temps que ça prend d'écrire correctement.",
    probleme: {
      titre: 'Comprendre l’anglais et l’écrire vite sont deux choses différentes.',
      paragraphes: [
        "Beaucoup de dirigeants lisent l'anglais sans difficulté et le parlent suffisamment. Rédiger un message qui engage l'entreprise, relancer un fournisseur étranger avec le bon ton, ou tenir un échange téléphonique dans un fuseau décalé demande autre chose — et prend trois fois plus de temps qu'en français.",
        "Ce surcoût est invisible mais réel : il ralentit chaque dossier international, et il finit par restreindre ceux qu'on accepte.",
      ],
    },
    absorbe: [
      'Rédaction et envoi de vos e-mails professionnels en anglais',
      'Relecture et mise au propre de vos propres messages',
      'Échanges téléphoniques avec des interlocuteurs anglophones',
      'Coordination avec des prestataires et fournisseurs étrangers',
      'Réservations et démarches à l’international',
      'Gestion des fuseaux horaires et des créneaux compatibles',
      'Suivi des formalités liées à un déplacement à l’étranger',
      'Relances à l’international, jusqu’à obtention d’une réponse',
    ],
    reste: [
      'La négociation et les termes commerciaux',
      'Les échanges que vous voulez porter vous-même',
      'La traduction juridique certifiée, qui relève d’un traducteur assermenté',
    ],
    exemple: {
      demande: '« Réponds au fournisseur britannique, et cale un call avec eux la semaine prochaine. »',
      prise:
        "Réponse rédigée en anglais, soumise à votre validation avant envoi. Créneaux proposés en tenant compte du décalage horaire et de vos plages protégées, échange confirmé, invitation envoyée avec l'ordre du jour, et rappel des points en suspens transmis la veille.",
      resultat:
        "Le fournisseur a eu une réponse le jour même. Le call était calé avant la fin de la journée.",
    },
    faq: [
      {
        q: 'Quel est votre niveau d’anglais ?',
        a: "Un anglais professionnel courant, à l'écrit comme à l'oral, suffisant pour tenir des échanges commerciaux et administratifs. Sur un document juridique ou technique qui engage, je recommande un traducteur spécialisé plutôt que de produire une version dont je ne peux pas garantir la précision.",
      },
      {
        q: 'Les messages partent-ils de mon adresse ou de la vôtre ?',
        a: "Comme vous le décidez au démarrage. Dans les deux cas, tout message qui engage l'entreprise vous est soumis avant envoi, sauf si vous préférez explicitement l'inverse sur certains sujets courants.",
      },
    ],
    cloture: 'Un interlocuteur étranger ne devrait jamais attendre parce que le message est en anglais.',
  },

  {
    slug: 'reporting',
    univers: 'Executive Admin',
    perimetre: 'Reporting',
    title: 'Faire produire son reporting d’activité · BrittAssist',
    description:
      "Recevoir un reporting clair et régulier sur son activité, ses encours et ses échéances, sans le construire. Private Office externalisé, dès 590 € / mois.",
    h1: 'Recevoir un reporting clair, sans le construire.',
    lede:
      "La plupart des dirigeants savent où en est leur activité. Peu ont sous les yeux, au même moment, ce qui est encaissé, ce qui est en attente et ce qui arrive à échéance.",
    probleme: {
      titre: 'Les chiffres existent. Ils sont juste éparpillés.',
      paragraphes: [
        "Le suivi est dans le logiciel de facturation, les échéances dans une boîte mail, les devis en attente dans un dossier, et le reste dans votre tête. Rien n'est perdu, mais rien n'est réuni — et réunir prend une demi-journée qu'on ne prend jamais.",
        "Un reporting utile n'est pas un tableau de bord complexe. C'est une page, à date fixe, qui répond à trois questions : qu'est-ce qui est rentré, qu'est-ce qui est en attente, qu'est-ce qui arrive.",
      ],
    },
    absorbe: [
      'Consolidation des éléments dispersés entre vos outils',
      'Suivi de la facturation émise, encaissée et en attente',
      'État des devis en cours et de leur ancienneté',
      'Échéances contractuelles et administratives à venir',
      'Point sur les sujets en cours, bloqués ou clos',
      'Reporting écrit à date fixe, sur une page',
      'Mise en évidence de ce qui a bougé depuis la fois précédente',
      'Alerte immédiate quand un élément ne peut pas attendre le prochain point',
    ],
    reste: [
      'L’analyse stratégique et les décisions qui en découlent',
      'La comptabilité analytique et les états financiers, qui relèvent de votre comptable',
      'Le choix des indicateurs, que je propose mais que vous validez',
    ],
    exemple: {
      demande: '« J’aimerais savoir où j’en suis, sans avoir à ouvrir quatre outils. »',
      prise:
        "Définition de six indicateurs réellement utiles, consolidation mensuelle des sources, et envoi d'une page à date fixe : encaissé, en attente, devis en cours, échéances des soixante prochains jours, sujets bloqués, et ce qui a changé depuis le mois précédent.",
      resultat:
        "Dix minutes de lecture le premier lundi du mois, et la fin de l'impression diffuse de ne pas savoir où on en est.",
    },
    faq: [
      {
        q: 'À quelle fréquence arrive le reporting ?',
        a: "Le plus souvent mensuel, parfois hebdomadaire quand l'activité le justifie. La fréquence se cale au démarrage et s'ajuste : un reporting trop fréquent finit par ne plus être lu.",
      },
      {
        q: 'Est-ce un document comptable ?',
        a: "Non. C'est un état de suivi opérationnel destiné à vous, pas un document financier. La comptabilité et les états financiers relèvent de votre expert-comptable — le reporting sert à piloter entre deux points avec lui.",
      },
    ],
    cloture: 'Une page, à date fixe. Et la fin de l’à-peu-près.',
  },
];

export const parSlug = (slug: string) => prestations.find((p) => p.slug === slug);
