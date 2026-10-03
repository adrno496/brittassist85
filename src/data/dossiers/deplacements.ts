/**
 * Dossier « Déplacements et événements ».
 *
 * Méthodes d'organisation. Seule la page sur les déplacements à l'étranger
 * renvoie à une source officielle (Conseils aux voyageurs) : les formalités
 * changent d'un pays à l'autre et d'un mois à l'autre, la page ne les fige pas.
 */
import type { Guide } from '../guides.ts';

const DATE = '2026-10-03';
const DOSSIER = 'deplacements-et-evenements-professionnels';

export const deplacements: Guide[] = [
  {
    slug: 'deplacements-et-evenements-professionnels',
    type: 'pilier',
    dossier: DOSSIER,
    categorie: 'Dossier',
    nom: 'Déplacements et événements professionnels',
    title: 'Déplacements et événements professionnels : s’organiser · BrittAssist',
    description:
      "Un déplacement, un séminaire, un dîner client : ce qui se prépare avant, ce qui se suit pendant, et ce qui se clôt après. La méthode commune.",
    h1: 'Déplacements et événements : la même méthode, du billet au bilan.',
    lede:
      "Un déplacement réussi est celui auquel on n’a pas eu à penser. Un séminaire réussi, celui dont personne ne remarque l’organisation. Dans les deux cas, le travail est invisible quand il est bien fait — et très visible quand il manque une réservation.",
    reponseCourte: [
      "Un déplacement ou un événement s’organise en trois temps : avant — le besoin, les réservations, la feuille de route ; pendant — le suivi et l’imprévu ; après — les justificatifs et le bilan.",
      "Le document central est la feuille de route : tout ce qu’il faut savoir, sur une page, accessible hors connexion.",
      "L’imprévu se prépare : un plan B pour chaque maillon fragile, et une personne joignable.",
      "Tout se délègue, sauf la décision de partir et le choix du budget.",
    ],
    sections: [
      {
        h2: 'Les trois temps',
        blocs: [
          {
            tableau: {
              legende: 'Les trois temps d’un déplacement ou d’un événement',
              colonnes: ['Temps', 'Ce qui se fait', 'Le document'],
              lignes: [
                ['Avant', 'Cadrer le besoin, comparer, réserver, confirmer', 'La feuille de route'],
                ['Pendant', 'Suivre les horaires, absorber les imprévus', 'Le canal de contact'],
                ['Après', 'Rassembler les justificatifs, payer les soldes, noter ce qui est à refaire ou à éviter', 'Le bilan de dix lignes'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Cadrer avant de réserver',
        blocs: [
          {
            paragraphes: [
              "Les mauvaises réservations viennent d’un besoin mal posé. Avant de chercher un billet, cinq questions : quel est l’objet du déplacement, quelles sont les heures qui ne bougent pas, quelle marge voulez-vous avant et après, quel budget, et quelles préférences — siège, hôtel, mode de transport.",
              "Ces préférences ne devraient être demandées qu’une fois. Une fiche les conserve ; chaque déplacement suivant s’organise sans vous reposer la question.",
            ],
          },
        ],
      },
      {
        h2: 'Le maillon fragile',
        blocs: [
          {
            paragraphes: [
              "Tout itinéraire a un point de rupture : la correspondance trop courte, le dernier train, la salle sans solution de repli. L’identifier à l’avance est déjà une bonne part de la gestion de l’imprévu. Pour chacun, une réponse prête : un horaire suivant repéré, un hôtel annulable, un numéro à appeler.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qui se confie',
        blocs: [
          {
            liste: [
              "La recherche et la comparaison des options.",
              "Les réservations, confirmations et modifications.",
              "La feuille de route, et sa mise à jour.",
              "Le suivi pendant le déplacement, et la réponse aux imprévus.",
              "La collecte des justificatifs au retour.",
            ],
          },
          {
            paragraphes: [
              "Restent chez vous : décider d’y aller, fixer le budget, et choisir entre deux options quand elles se valent.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Réserver le billet le moins cher, non modifiable, pour un rendez-vous qui risque de bouger.",
      "Partir avec les informations éparpillées dans six e-mails.",
      "Oublier le retour : les justificatifs, les soldes à payer, le bilan.",
    ],
    faq: [
      {
        q: 'À partir de combien de déplacements cela vaut-il la peine de déléguer ?',
        a: "Dès qu’un déplacement vous prend plus d’une heure à organiser, ou qu’il vous est déjà arrivé d’en manquer un détail. Le volume compte moins que le coût d’une erreur.",
      },
      {
        q: 'Faut-il passer par une agence de voyages ?',
        a: "Une agence apporte des tarifs négociés et une assistance ; elle convient aux volumes importants. Une assistante apporte la connaissance de vos habitudes et la coordination avec votre agenda. Les deux se combinent.",
      },
      {
        q: 'Qui paie les réservations ?',
        a: "L’entreprise, par ses propres moyens de paiement. L’organisation se délègue ; le moyen de paiement se confie dans un cadre précis, avec un plafond et un suivi.",
      },
    ],
    liens: [
      { href: '/services/organisation-deplacements', label: 'Faire organiser ses déplacements' },
      { href: '/services/reservations', label: 'Déléguer ses réservations' },
      { href: '/guides/organiser-un-deplacement-professionnel', label: 'Organiser un déplacement professionnel' },
      { href: '/guides/feuille-de-route-de-deplacement', label: 'La feuille de route de déplacement' },
    ],
    cloture: 'Un voyage bien préparé ne laisse qu’une chose à faire : y aller.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'navigation',
      motCle: 'organisation déplacements et événements professionnels',
      variantes: ['organiser voyages d’affaires et séminaires', 'gestion des déplacements professionnels', 'organisation événement d’entreprise'],
      persona: 'Dirigeant qui organise lui-même ses déplacements et événements',
      objectif: 'Donner la méthode commune et orienter vers chaque cas',
      difference: 'Unifie déplacements et événements autour de trois temps et d’un document central',
    },
  },

  {
    slug: 'organiser-un-deplacement-professionnel',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Organiser un déplacement professionnel',
    title: 'Organiser un déplacement professionnel : la checklist · BrittAssist',
    description:
      "Du besoin au retour : les étapes d’un déplacement professionnel, dans l’ordre, avec ce qu’il faut vérifier à chacune.",
    h1: 'Organiser un déplacement professionnel, étape par étape.',
    lede:
      "Organiser un déplacement n’a rien de compliqué. C’est une suite de petites décisions dont une seule, oubliée, suffit à gâcher la journée : le transfert depuis la gare, l’heure d’arrivée à l’hôtel, la salle réservée pour la mauvaise date.",
    reponseCourte: [
      "Un déplacement s’organise à rebours : on part de l’heure du premier rendez-vous et on remonte jusqu’au départ.",
      "L’ordre des réservations compte : d’abord ce qui est rare ou ferme, ensuite ce qui est flexible.",
      "Chaque réservation est confirmée par écrit, et reportée dans une feuille de route unique.",
      "Le retour fait partie du déplacement : justificatifs, soldes, notes pour la prochaine fois.",
    ],
    sections: [
      {
        h2: 'Les étapes',
        blocs: [
          {
            etapes: [
              "Cadrer : objet, dates, heures fixes, budget, préférences.",
              "Construire l’itinéraire à rebours, depuis le premier rendez-vous.",
              "Réserver le transport principal, en vérifiant les conditions de modification.",
              "Réserver l’hébergement, près du premier rendez-vous du lendemain plutôt que près de la gare.",
              "Prévoir les transferts : gare, aéroport, lieu de rendez-vous.",
              "Bloquer l’agenda : trajets compris.",
              "Rédiger la feuille de route.",
              "Confirmer la veille : horaires, réservations, rendez-vous.",
              "Au retour : justificatifs, soldes, bilan.",
            ],
          },
        ],
      },
      {
        h2: 'Les vérifications qui évitent les mauvaises surprises',
        blocs: [
          {
            tableau: {
              legende: 'Points de contrôle par réservation',
              colonnes: ['Réservation', 'À vérifier'],
              lignes: [
                ['Train ou avion', 'Conditions d’échange, durée de correspondance, gare ou terminal exact'],
                ['Hôtel', 'Heure limite d’arrivée, conditions d’annulation, petit-déjeuner, facture au nom de la société'],
                ['Voiture', 'Lieu et heure de restitution, franchise, conducteurs autorisés'],
                ['Salle ou restaurant', 'Date, heure, nombre de personnes, nom de la réservation'],
                ['Rendez-vous', 'Adresse précise, accès, interlocuteur à l’accueil'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les marges',
        blocs: [
          {
            paragraphes: [
              "Un itinéraire sans marge tient tant que tout est à l’heure. Prévoyez du temps entre l’arrivée et le premier rendez-vous, et entre le dernier rendez-vous et le départ. Si le rendez-vous est décisif, arrivez la veille : le coût d’une nuit d’hôtel est faible devant celui d’un retard.",
            ],
          },
        ],
      },
      {
        h2: 'Flexible ou non modifiable',
        blocs: [
          {
            paragraphes: [
              "Un billet non modifiable coûte moins cher, jusqu’au jour où le rendez-vous bouge. La règle : flexible quand la date dépend de quelqu’un d’autre, ferme quand elle dépend de vous. Notez les conditions dans la feuille de route : c’est la première chose qu’on cherche quand un plan change.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Réserver l’hôtel avant d’avoir confirmé le rendez-vous.",
      "Calculer le trajet sans le temps d’accès à la gare ou à l’aéroport.",
      "Faire établir la facture à son nom personnel.",
    ],
    faq: [
      {
        q: 'Combien de temps à l’avance faut-il organiser ?',
        a: "Dès que les dates sont fermes. Les tarifs et les disponibilités se dégradent à l’approche ; les préférences — horaire direct, hôtel proche — aussi.",
      },
      {
        q: 'Que faut-il communiquer pour déléguer l’organisation ?',
        a: "L’objet, les heures fixes, le budget, et vos préférences la première fois. Une phrase suffit ensuite : « Lyon mardi prochain, rendez-vous à 10 h chez Durand, retour le soir ».",
      },
      {
        q: 'Qui garde les justificatifs ?',
        a: "Ils sont demandés au nom de la société et rassemblés au retour dans le dossier du mois, avec les notes de frais.",
      },
    ],
    liens: [
      { href: '/guides/feuille-de-route-de-deplacement', label: 'La feuille de route de déplacement' },
      { href: '/guides/gerer-un-imprevu-en-deplacement', label: 'Gérer un imprévu en déplacement' },
      { href: '/guides/modele-fiche-de-preferences-dirigeant', label: 'Modèle de fiche de préférences' },
      { href: '/services/organisation-deplacements', label: 'Faire organiser ses déplacements' },
    ],
    cloture: 'Un itinéraire se construit à l’envers : depuis l’heure où il faut être là.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'organiser un déplacement professionnel',
      variantes: ['checklist déplacement professionnel', 'préparer un voyage d’affaires', 'organisation voyage professionnel'],
      persona: 'Dirigeant ou collaborateur qui organise ses propres déplacements',
      objectif: 'Donner l’ordre des étapes et les points de contrôle',
      difference: 'Construit l’itinéraire à rebours et tranche la question flexible ou non modifiable',
    },
  },

  {
    slug: 'feuille-de-route-de-deplacement',
    type: 'modele',
    dossier: DOSSIER,
    categorie: 'Modèle',
    nom: 'La feuille de route de déplacement',
    title: 'Feuille de route de déplacement : le modèle · BrittAssist',
    description:
      "Horaires, adresses, références, contacts, plan B : le modèle de feuille de route qui remplace six e-mails de confirmation, sur une seule page.",
    h1: 'La feuille de route : tout le déplacement sur une page.',
    lede:
      "Le matin d’un départ, personne ne veut fouiller sa messagerie pour retrouver une référence de réservation. La feuille de route réunit tout ce dont vous avez besoin, dans l’ordre où vous en aurez besoin.",
    reponseCourte: [
      "Une feuille de route présente le déplacement en ordre chronologique : chaque étape avec son heure, son lieu, sa référence et son contact.",
      "Elle tient sur une page, se lit sur un téléphone et reste accessible sans connexion.",
      "Elle contient aussi ce qu’on espère ne pas utiliser : conditions de modification, solution de repli, numéro à appeler.",
    ],
    sections: [
      {
        h2: 'Le modèle',
        blocs: [
          {
            modele: {
              titre: 'Feuille de route — trame',
              lignes: [
                "DÉPLACEMENT : [ville] — du [date] au [date] — objet : [objet]",
                "CONTACT EN CAS D’IMPRÉVU : [nom, téléphone]",
                "— JOUR 1 —",
                "07 h 12 · Départ [gare] · Train n° [numéro] · voiture [n°], place [n°] · réf. [code] · billet échangeable jusqu’au départ",
                "09 h 20 · Arrivée [gare] · Taxi réservé, [société], [téléphone] · ou métro ligne [n°], 15 min",
                "10 h 00 · Rendez-vous [nom, société] · [adresse complète, étage, code] · contact sur place : [nom, téléphone]",
                "12 h 30 · Déjeuner [restaurant] · [adresse] · réservation au nom de [nom], [nombre] personnes",
                "18 h 00 · Hôtel [nom] · [adresse] · réf. [code] · arrivée possible jusqu’à [heure] · annulable jusqu’à [date]",
                "— JOUR 2 —",
                "[…]",
                "SOLUTION DE REPLI : train suivant à [heure] ; hôtel prolongeable ; [autre].",
              ],
            },
          },
        ],
      },
      {
        h2: 'Ce qui fait une bonne feuille de route',
        blocs: [
          {
            liste: [
              "L’ordre chronologique strict : on la lit en avançant.",
              "Des adresses complètes, que l’on peut copier dans une application de navigation.",
              "Les références de réservation en clair.",
              "Un nom et un numéro à chaque étape où quelqu’un vous attend.",
              "Les conditions de modification à côté de chaque réservation.",
            ],
          },
        ],
      },
      {
        h2: 'Où la mettre',
        blocs: [
          {
            etapes: [
              "Dans l’événement « Déplacement » de l’agenda, en pièce jointe ou dans la description.",
              "En PDF sur le téléphone, consultable hors connexion.",
              "Chez la personne qui suit le déplacement à distance, dans sa dernière version.",
            ],
          },
          {
            paragraphes: [
              "Une seule version circule. Quand un horaire change, la feuille est mise à jour et renvoyée : jamais un correctif par message à côté.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Une feuille de route de quatre pages, avec les conditions générales de la compagnie.",
      "Des adresses approximatives : « près de la gare ».",
      "Deux versions qui circulent après un changement.",
    ],
    faq: [
      {
        q: 'Quand doit-elle être prête ?',
        a: "Dès que les réservations sont faites, et relue la veille du départ après confirmation de chaque étape.",
      },
      {
        q: 'Est-ce utile pour une simple journée ?',
        a: "Oui, en version courte : trois lignes suffisent. L’habitude compte plus que la longueur.",
      },
      {
        q: 'Qui la met à jour pendant le déplacement ?',
        a: "La personne qui suit à distance. Vous signalez le changement d’une phrase ; elle modifie les réservations et vous renvoie la feuille corrigée.",
      },
    ],
    liens: [
      { href: '/guides/organiser-un-deplacement-professionnel', label: 'Organiser un déplacement professionnel' },
      { href: '/guides/gerer-un-imprevu-en-deplacement', label: 'Gérer un imprévu en déplacement' },
      { href: '/services/organisation-deplacements', label: 'Faire organiser ses déplacements' },
      { href: '/services/reservations', label: 'Déléguer ses réservations' },
    ],
    cloture: 'La bonne feuille de route est celle qu’on consulte sans jamais avoir à chercher.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'modèle',
      motCle: 'feuille de route déplacement professionnel',
      variantes: ['modèle itinéraire voyage d’affaires', 'programme de déplacement modèle', 'planning de voyage professionnel'],
      persona: 'Dirigeant en déplacement, ou la personne qui prépare ses voyages',
      objectif: 'Fournir une trame prête à remplir',
      difference: 'Intègre conditions de modification et solution de repli dans la page elle-même',
    },
  },

  {
    slug: 'organiser-un-seminaire-d-equipe',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Organiser un séminaire d’équipe',
    title: 'Organiser un séminaire d’équipe : le rétroplanning · BrittAssist',
    description:
      "Objectif, budget, lieu, programme, logistique : le rétroplanning d’un séminaire d’équipe, de trois mois avant jusqu’au lendemain.",
    h1: 'Organiser un séminaire d’équipe : le rétroplanning.',
    lede:
      "Un séminaire coûte deux fois : ce qu’on paie au lieu qui l’accueille, et le temps de toute une équipe. Il ne se justifie que s’il produit quelque chose qu’une réunion n’aurait pas produit. Tout le reste — lieu, repas, activités — en découle.",
    reponseCourte: [
      "Un séminaire se prépare à partir de son objectif : décider, aligner, former ou souder. Le lieu et le programme en dépendent.",
      "Le rétroplanning commence environ trois mois avant, par le budget et la date.",
      "Trois postes concentrent les oublis : le transport des participants, les contraintes alimentaires, le matériel de la salle.",
      "L’organisation se délègue ; l’objectif et le contenu restent ceux de la direction.",
    ],
    sections: [
      {
        h2: 'Le rétroplanning',
        blocs: [
          {
            tableau: {
              legende: 'Rétroplanning indicatif d’un séminaire',
              colonnes: ['Échéance', 'Ce qui doit être fait'],
              lignes: [
                ['Trois mois avant', 'Fixer l’objectif, le budget, le nombre de participants ; arrêter deux dates possibles'],
                ['Dix semaines avant', 'Consulter trois lieux, comparer les devis, poser une option'],
                ['Deux mois avant', 'Confirmer le lieu, verser l’acompte, annoncer la date aux participants'],
                ['Six semaines avant', 'Construire le programme ; réserver intervenants et activités'],
                ['Un mois avant', 'Organiser les transports ; recueillir les contraintes alimentaires et les besoins particuliers'],
                ['Deux semaines avant', 'Envoyer le programme et les informations pratiques ; confirmer les effectifs au lieu'],
                ['La veille', 'Vérifier salle, matériel, restauration ; avoir la liste des présents'],
                ['Le lendemain', 'Remercier, envoyer le relevé de décisions, payer les soldes'],
              ],
            },
          },
          {
            paragraphes: [
              "Ces délais se raccourcissent pour une petite équipe et un lieu proche ; ils s’allongent en haute saison.",
            ],
          },
        ],
      },
      {
        h2: 'Le programme',
        blocs: [
          {
            liste: [
              "Des séquences courtes, avec un livrable chacune.",
              "Les sujets difficiles le matin.",
              "Des pauses longues : c’est souvent là que se disent les choses utiles.",
              "Un temps libre réel, pas une activité obligatoire de plus.",
              "Une dernière séquence consacrée aux décisions et à leur suite.",
            ],
          },
        ],
      },
      {
        h2: 'La logistique qui se voit quand elle manque',
        blocs: [
          {
            etapes: [
              "Transport : qui vient comment, à quelle heure, et qui ramène qui.",
              "Restauration : régimes, allergies, horaires des repas calés sur le programme.",
              "Salle : disposition, écran, connexion, prises, tableau, feutres qui marchent.",
              "Hébergement : liste des chambres, heure d’arrivée, facture unique.",
              "Accueil : un programme imprimé, un numéro à appeler.",
            ],
          },
        ],
      },
      {
        h2: 'Le budget',
        blocs: [
          {
            paragraphes: [
              "Demandez aux lieux un devis par personne et par poste : salle, restauration, hébergement, matériel. C’est la seule façon de comparer. Vérifiez les conditions d’annulation et la date à laquelle l’effectif devient ferme : c’est elle qui détermine ce que vous paierez si deux personnes se désistent.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Choisir le lieu avant d’avoir fixé l’objectif.",
      "Remplir le programme de 8 h à 22 h.",
      "Repartir sans relevé de décisions : dans un mois, il ne restera qu’un souvenir agréable.",
    ],
    faq: [
      {
        q: 'Combien de temps à l’avance faut-il s’y prendre ?',
        a: "Trois mois est un repère confortable pour une équipe de taille moyenne. Les lieux recherchés se réservent plus tôt en haute saison.",
      },
      {
        q: 'Peut-on déléguer l’organisation d’un séminaire ?',
        a: "Oui, entièrement pour la logistique : consultation des lieux, comparaison des devis, transports, restauration, informations aux participants, suivi le jour même. Le contenu reste celui de la direction.",
      },
      {
        q: 'Une mission ponctuelle suffit-elle ?',
        a: "Oui. L’organisation d’un événement est un cas type de mission ponctuelle, avec un début, une fin et un prix fixé au devis.",
      },
    ],
    liens: [
      { href: '/guides/choisir-un-lieu-de-seminaire', label: 'Choisir un lieu de séminaire' },
      { href: '/guides/preparer-une-reunion', label: 'Préparer une réunion' },
      { href: '/services/support-equipes', label: 'Un renfort ponctuel pour vos équipes' },
      { href: '/tarifs', label: 'Les missions ponctuelles et le devis' },
    ],
    cloture: 'Un séminaire se juge un mois après, à ce qui a changé.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'organiser un séminaire d’entreprise',
      variantes: ['rétroplanning séminaire', 'organisation séminaire d’équipe', 'préparer un séminaire PME'],
      persona: 'Dirigeant de PME qui organise un séminaire sans service dédié',
      objectif: 'Donner un rétroplanning et les postes où se logent les oublis',
      difference: 'Part de l’objectif, et insiste sur le relevé de décisions du lendemain',
    },
  },

  {
    slug: 'organiser-un-diner-client',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Organiser un dîner client',
    title: 'Organiser un dîner ou une réception client · BrittAssist',
    description:
      "Le lieu, la table, les invités, le déroulé, la note : ce qu’il faut régler pour qu’un dîner client se passe sans que vous ayez à vous en occuper.",
    h1: 'Organiser un dîner client : tout ce que vos invités ne doivent pas voir.',
    lede:
      "Un dîner client réussi tient à des détails que personne ne remarque : la table n’est pas près de la porte, on vous attend à votre nom, la note ne passe pas sur la table. C’est précisément parce qu’ils sont invisibles qu’ils doivent être réglés avant.",
    reponseCourte: [
      "Un dîner client se prépare en cinq points : l’objectif, le lieu, les invités, le déroulé, le règlement.",
      "Le lieu se choisit pour la conversation — calme, tables espacées — avant la réputation.",
      "Les contraintes des invités se demandent à l’avance : régimes, horaires, accès.",
      "La note se règle sans passer par la table : carte enregistrée ou facture adressée à la société.",
    ],
    sections: [
      {
        h2: 'Les cinq points',
        blocs: [
          {
            etapes: [
              "L’objectif : remercier, négocier, présenter, fidéliser. Il décide du format et du nombre.",
              "Le lieu : proche des invités, calme, avec une table où l’on s’entend.",
              "Les invités : la liste, les confirmations, les contraintes alimentaires, le plan de table au-delà de six.",
              "Le déroulé : heure d’arrivée, apéritif, durée, heure à laquelle chacun doit repartir.",
              "Le règlement : convenu avec le lieu avant, hors de la vue des invités.",
            ],
          },
        ],
      },
      {
        h2: 'Choisir et réserver le lieu',
        blocs: [
          {
            liste: [
              "Demandez une table précise : au calme, loin du passage, ou un salon si le sujet est confidentiel.",
              "Annoncez la nature du repas : le service s’adapte.",
              "Vérifiez les horaires de service et l’heure à laquelle la table doit être rendue.",
              "Confirmez la veille : nom, heure, nombre, demandes particulières.",
              "Repérez l’accès et le stationnement, et transmettez-les aux invités.",
            ],
          },
        ],
      },
      {
        h2: 'Les invités',
        blocs: [
          {
            modele: {
              titre: 'Message d’invitation',
              lignes: [
                "Bonjour [prénom],",
                "[Nom] serait heureux de vous recevoir à dîner le [date] à [heure], au restaurant [nom], [adresse].",
                "Pourriez-vous me confirmer votre présence, et m’indiquer toute contrainte alimentaire dont nous devrions tenir compte ?",
                "Un stationnement est disponible [précision]. Je reste à votre disposition pour toute question pratique.",
                "Bien cordialement,",
              ],
            },
          },
        ],
      },
      {
        h2: 'Les suites',
        blocs: [
          {
            paragraphes: [
              "Le lendemain, un message de remerciement, court et personnel. Dans la semaine, ce qui a été promis pendant le repas : le document, la mise en relation, la proposition. Un dîner qui ne produit aucune suite est un bon moment, pas un rendez-vous d’affaires.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Choisir un restaurant à la mode où l’on ne s’entend pas.",
      "Découvrir à table qu’un invité ne mange pas ce qui est servi.",
      "Laisser l’addition arriver devant le client.",
    ],
    faq: [
      {
        q: 'Faut-il prévoir un menu à l’avance ?',
        a: "À partir de huit convives, oui : le service est plus fluide et le budget maîtrisé. En dessous, la carte laisse plus de liberté.",
      },
      {
        q: 'Qui s’occupe des réservations dans un Private Office ?',
        a: "L’assistante : choix du lieu selon vos préférences, réservation, confirmation, informations aux invités, règlement organisé. Vous arrivez, on vous attend.",
      },
      {
        q: 'Et pour une réception plus large ?',
        a: "La méthode est la même, avec un traiteur ou un lieu privatisé, un rétroplanning et une liste d’invités suivie. Elle se traite comme une mission ponctuelle.",
      },
    ],
    liens: [
      { href: '/services/reservations', label: 'Déléguer ses réservations' },
      { href: '/guides/modele-fiche-de-preferences-dirigeant', label: 'Modèle de fiche de préférences' },
      { href: '/guides/conciergerie-privee-ou-lifestyle-assistant', label: 'Conciergerie privée ou lifestyle assistant' },
      { href: '/services/organisation-personnelle', label: 'Faire prendre en charge son organisation personnelle' },
    ],
    cloture: 'Un dîner est réussi quand vos invités ne se souviennent que de la conversation.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'organiser un dîner client',
      variantes: ['organiser un repas d’affaires', 'réception client entreprise', 'dîner d’affaires organisation'],
      persona: 'Dirigeant qui reçoit des clients ou des partenaires',
      objectif: 'Régler les détails invisibles d’un repas d’affaires',
      difference: 'Traite le règlement discret et les suites à donner, rarement abordés',
    },
  },

  {
    slug: 'politique-voyage-petite-entreprise',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Une politique voyage pour une petite entreprise',
    title: 'Politique voyage d’une petite entreprise : une page · BrittAssist',
    description:
      "Qui réserve, dans quelle classe, à quel plafond, avec quelle validation : une politique voyage d’une page pour une équipe de quelques personnes.",
    h1: 'Une politique voyage en une page, pour une petite équipe.',
    lede:
      "Dans une petite entreprise, la politique voyage est une conversation de couloir : « tu peux prendre la première ? » Elle tient tant que deux personnes voyagent. À cinq, elle produit des écarts, des malaises et des remboursements discutés.",
    reponseCourte: [
      "Une politique voyage répond à cinq questions : qui réserve, quelles règles de transport, quel plafond d’hébergement et de repas, quelle validation, comment sont remboursés les frais.",
      "Elle tient sur une page et s’applique à tous, dirigeant compris.",
      "Les montants sont les vôtres : ils dépendent de votre activité et de vos destinations.",
    ],
    sections: [
      {
        h2: 'La trame',
        blocs: [
          {
            modele: {
              titre: 'Politique voyage — une page',
              lignes: [
                "1. Réservation : par [personne ou outil], au moins [délai] avant le départ.",
                "2. Train : [classe] ; [classe supérieure] au-delà de [durée] ou sur validation.",
                "3. Avion : [classe] ; bagages et choix du siège selon [règle].",
                "4. Hébergement : plafond de [montant] par nuit en région, [montant] dans les grandes villes ; annulable de préférence.",
                "5. Repas : remboursement sur justificatif, dans la limite de [montant] par repas.",
                "6. Véhicule personnel : selon le barème en vigueur, trajet et motif notés.",
                "7. Validation : déplacement de plus de [montant] ou à l’étranger validé par [personne].",
                "8. Justificatifs : remis sous [délai], factures au nom de la société.",
                "9. Remboursement : le [jour] du mois suivant.",
              ],
            },
          },
        ],
      },
      {
        h2: 'Les trois arbitrages',
        blocs: [
          {
            h3: 'Le prix ou le temps',
            paragraphes: [
              "Le billet le moins cher avec deux correspondances coûte une demi-journée de travail. Écrivez la règle : à partir de quelle différence de prix accepte-t-on un trajet plus long ?",
            ],
          },
          {
            h3: 'Le flexible ou le ferme',
            paragraphes: [
              "Un billet modifiable coûte plus cher. Il est justifié quand la date dépend d’un tiers. Dites-le, plutôt que de laisser chacun décider.",
            ],
          },
          {
            h3: 'Le confort',
            paragraphes: [
              "Voyager quatre heures en travaillant n’est pas la même chose que voyager quarante minutes. Un seuil de durée, au-delà duquel la classe supérieure est admise, règle la question sans débat.",
            ],
          },
        ],
      },
      {
        h2: 'La faire vivre',
        blocs: [
          {
            liste: [
              "Diffusez-la, et rangez-la là où l’on réserve.",
              "Appliquez-la au dirigeant comme aux autres.",
              "Notez les exceptions : au-delà de trois par trimestre, la règle est à revoir.",
              "Relisez les plafonds une fois par an.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Des règles différentes selon les personnes, sans qu’elles soient écrites.",
      "Des plafonds fixés il y a cinq ans, devenus inapplicables.",
      "Une politique si détaillée que personne ne la lit.",
    ],
    limites: [
      "Le traitement social et fiscal des frais de déplacement et des indemnités relève de votre expert-comptable ; cette page ne donne aucun montant de référence.",
    ],
    faq: [
      {
        q: 'Faut-il une politique voyage quand on est trois ?',
        a: "Une demi-page suffit, mais elle évite les malentendus. Elle devient nécessaire dès qu’une autre personne que vous réserve.",
      },
      {
        q: 'Qui la rédige ?',
        a: "Le dirigeant fixe les montants et les arbitrages ; la mise en forme et la diffusion se délèguent.",
      },
      {
        q: 'En quoi aide-t-elle à déléguer les réservations ?',
        a: "Elle donne à la personne qui réserve le droit de décider. Sans règles, chaque réservation revient vers vous pour validation.",
      },
    ],
    liens: [
      { href: '/guides/notes-de-frais-justificatifs', label: 'Tenir ses notes de frais' },
      { href: '/guides/organiser-un-deplacement-professionnel', label: 'Organiser un déplacement professionnel' },
      { href: '/guides/niveaux-d-autonomie-delegation', label: 'Les niveaux d’autonomie' },
      { href: '/services/organisation-deplacements', label: 'Faire organiser ses déplacements' },
    ],
    cloture: 'Une règle écrite une fois évite la même discussion à chaque billet.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'modèle',
      motCle: 'politique voyage entreprise',
      variantes: ['politique de déplacement TPE', 'règles frais de déplacement salariés', 'politique voyage modèle'],
      persona: 'Dirigeant de petite équipe qui voyage',
      objectif: 'Fournir une trame d’une page à compléter avec ses propres montants',
      difference: 'Ne fixe aucun montant à la place du lecteur, et nomme les trois arbitrages à trancher',
    },
  },

  {
    slug: 'deplacement-a-l-etranger-formalites',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Préparer un déplacement à l’étranger',
    title: 'Déplacement professionnel à l’étranger : les formalités · BrittAssist',
    description:
      "Passeport, visa, assurance, santé, moyens de paiement, téléphone : la liste à vérifier avant un déplacement professionnel hors de France.",
    h1: 'Déplacement à l’étranger : ce qu’il faut vérifier avant de réserver.',
    lede:
      "Un déplacement à l’étranger échoue rarement à cause du vol. Il échoue au comptoir d’enregistrement, devant un passeport qui expire dans quatre mois ou un visa que l’on croyait inutile. Ces points se vérifient avant d’acheter le billet.",
    reponseCourte: [
      "Avant de réserver, vérifiez les conditions d’entrée du pays : validité du passeport, visa ou autorisation de voyage, formalités sanitaires.",
      "Les conditions changent : la référence est la fiche du pays sur le site Conseils aux voyageurs du ministère de l’Europe et des Affaires étrangères.",
      "Vérifiez ensuite l’assurance, les moyens de paiement et le téléphone.",
      "Un visa d’affaires peut demander plusieurs semaines : c’est lui qui fixe le calendrier.",
    ],
    sections: [
      {
        h2: 'La liste',
        blocs: [
          {
            tableau: {
              legende: 'Vérifications avant un déplacement à l’étranger',
              colonnes: ['Sujet', 'À vérifier', 'Quand'],
              lignes: [
                ['Passeport', 'Date d’expiration : de nombreux pays exigent une validité au-delà de la date de retour', 'Dès que le déplacement est envisagé'],
                ['Visa ou autorisation', 'Nécessaire ou non selon le motif du séjour ; délai d’obtention', 'Avant de réserver'],
                ['Formalités sanitaires', 'Vaccins exigés ou recommandés, documents à présenter', 'Plusieurs semaines avant'],
                ['Assurance', 'Couverture médicale et rapatriement dans le pays ; activité professionnelle couverte', 'Avant de réserver'],
                ['Paiement', 'Plafonds de carte, frais à l’étranger, carte de secours', 'Deux semaines avant'],
                ['Téléphone', 'Itinérance, forfait, accès aux outils professionnels depuis le pays', 'Deux semaines avant'],
                ['Sécurité', 'Recommandations pour la région visitée', 'Avant de réserver, puis la veille'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Où trouver l’information fiable',
        blocs: [
          {
            paragraphes: [
              "Le site Conseils aux voyageurs publie, pays par pays, les conditions d’entrée et de séjour, les recommandations sanitaires et de sécurité. C’est la source à consulter, et à reconsulter la veille du départ : les fiches sont mises à jour. Le service Ariane du même ministère permet de signaler son déplacement pour recevoir les alertes.",
              "Pour un visa, l’information de référence est celle du consulat du pays de destination. Un voyage d’affaires n’obéit pas toujours aux mêmes règles qu’un voyage touristique.",
            ],
          },
        ],
      },
      {
        h2: 'Le dossier à constituer',
        blocs: [
          {
            etapes: [
              "Copie du passeport et du visa, sur le téléphone et dans un espace partagé.",
              "Attestation d’assurance et numéro d’assistance.",
              "Lettre d’invitation ou justificatif du motif professionnel, si le pays l’exige.",
              "Coordonnées de l’ambassade ou du consulat de France sur place.",
              "Feuille de route, avec les contacts locaux.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qui se délègue',
        blocs: [
          {
            paragraphes: [
              "Vérifier les conditions d’entrée, constituer le dossier de visa, prendre les rendez-vous, suivre les délais, préparer les copies : c’est un travail de recherche et de suivi. La demande de visa elle-même se fait en votre nom, avec vos documents ; certaines démarches exigent votre présence.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Réserver les vols avant d’avoir vérifié le délai du visa.",
      "Découvrir à l’aéroport que le passeport n’a plus la validité exigée.",
      "Partir avec une seule carte bancaire.",
    ],
    limites: [
      "Cette page ne donne aucune règle par pays : elles changent trop souvent. Seules les sources officielles citées font foi.",
    ],
    faq: [
      {
        q: 'Combien de temps avant faut-il s’y prendre ?',
        a: "Dès que la destination est connue. Le renouvellement d’un passeport et l’obtention d’un visa sont les deux délais qui ne se compressent pas.",
      },
      {
        q: 'Mon assurance de carte bancaire suffit-elle ?',
        a: "Cela dépend du contrat, de la durée et du motif du séjour. Lisez les conditions, ou demandez à votre assureur une attestation pour le pays concerné.",
      },
      {
        q: 'Une assistante peut-elle gérer les échanges avec un interlocuteur étranger ?',
        a: "Oui. BrittAssist travaille en français et en anglais : les échanges avec les hôtels, prestataires et contacts locaux sont pris en charge.",
      },
    ],
    liens: [
      { href: '/services/assistanat-anglais', label: 'Faire gérer ses échanges en anglais' },
      { href: '/guides/feuille-de-route-de-deplacement', label: 'La feuille de route de déplacement' },
      { href: '/guides/reunions-et-fuseaux-horaires', label: 'Réunions et fuseaux horaires' },
      { href: '/services/organisation-deplacements', label: 'Faire organiser ses déplacements' },
    ],
    sources: [
      { href: 'https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/', label: 'Ministère de l’Europe et des Affaires étrangères — Conseils aux voyageurs' },
    ],
    cloture: 'À l’étranger, le premier rendez-vous est avec la police aux frontières.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'déplacement professionnel à l’étranger formalités',
      variantes: ['voyage d’affaires à l’étranger préparation', 'visa d’affaires démarches', 'checklist voyage professionnel international'],
      persona: 'Dirigeant qui part ponctuellement à l’étranger',
      objectif: 'Donner la liste des vérifications et la source officielle',
      difference: 'Ne fige aucune règle par pays et place les vérifications avant la réservation',
    },
  },

  {
    slug: 'gerer-un-imprevu-en-deplacement',
    type: 'situation',
    dossier: DOSSIER,
    categorie: 'Situation',
    nom: 'Gérer un imprévu en déplacement',
    title: 'Train annulé, vol retardé : gérer l’imprévu · BrittAssist',
    description:
      "Annulation, retard, correspondance manquée, rendez-vous déplacé : l’ordre des gestes quand un déplacement déraille, et ce qui se prépare avant.",
    h1: 'Train annulé, vol retardé : quoi faire, dans quel ordre.',
    lede:
      "Quand un train est annulé, cent personnes font la même chose : la queue au guichet. Pendant ce temps, les places du train suivant partent. L’imprévu ne se gère pas mieux en courant, mais en sachant quoi faire en premier.",
    reponseCourte: [
      "L’ordre des gestes : sécuriser une solution de transport, prévenir ceux qui vous attendent, ajuster l’hébergement, garder les preuves.",
      "La solution se cherche en ligne ou par téléphone avant de faire la queue.",
      "Prévenir tôt change tout : un rendez-vous décalé de deux heures se rattrape, une absence sans nouvelle se paie.",
      "Avec une personne qui suit à distance, vous ne faites qu’une chose : la prévenir.",
    ],
    sections: [
      {
        h2: 'L’ordre des gestes',
        blocs: [
          {
            etapes: [
              "Le transport : réservez la première solution acceptable, même imparfaite. Vous l’améliorerez ensuite.",
              "Les personnes : prévenez celles qui vous attendent, avec une heure d’arrivée réaliste.",
              "L’agenda : faites décaler ou basculer à distance ce qui peut l’être.",
              "L’hébergement : prolongez, annulez ou réservez selon le nouvel horaire.",
              "Les preuves : gardez le message d’annulation, les nouveaux billets, les dépenses engagées.",
            ],
          },
        ],
      },
      {
        h2: 'Selon la situation',
        blocs: [
          {
            tableau: {
              legende: 'Réponses types selon l’imprévu',
              colonnes: ['Imprévu', 'Premier geste', 'Second geste'],
              lignes: [
                ['Train annulé ou très en retard', 'Chercher le train suivant ou un autre itinéraire', 'Prévenir le rendez-vous, proposer un décalage ou une visioconférence'],
                ['Vol annulé', 'Demander le réacheminement par l’application ou le téléphone de la compagnie', 'Vérifier l’hôtel et le transfert à l’arrivée'],
                ['Correspondance manquée', 'Trouver le prochain départ', 'Faire valoir la continuité du trajet si les billets sont liés'],
                ['Rendez-vous annulé sur place', 'Proposer un autre créneau le jour même', 'Employer le temps : autre visite, travail, retour avancé'],
                ['Bagage ou matériel manquant', 'Le déclarer avant de quitter les lieux', 'Remplacer l’indispensable, garder les factures'],
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
              "Les applications des transporteurs, avec les billets et les notifications activées.",
              "Le train ou le vol suivant, repéré à l’avance et noté sur la feuille de route.",
              "Les conditions de modification de chaque réservation.",
              "Les numéros directs de ceux qui vous attendent.",
              "Une batterie de secours et un chargeur.",
            ],
          },
        ],
      },
      {
        h2: 'Avec quelqu’un qui suit à distance',
        blocs: [
          {
            paragraphes: [
              "C’est ici que la différence est la plus nette. Seul, vous cherchez un train, un téléphone à l’oreille, une valise à la main. Suivi à distance, vous envoyez « train annulé à Nantes » : pendant que vous marchez vers le quai, quelqu’un trouve la solution, prévient votre rendez-vous, déplace l’hôtel et vous renvoie la feuille de route corrigée.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Attendre d’en savoir plus avant de prévenir.",
      "Faire la queue une heure au guichet quand l’échange se fait en ligne.",
      "Jeter les justificatifs des dépenses imprévues.",
    ],
    limites: [
      "Les droits à indemnisation ou à prise en charge dépendent du transporteur, du trajet et de la cause : reportez-vous à ses conditions et aux sites officiels.",
    ],
    faq: [
      {
        q: 'Faut-il toujours prendre un billet modifiable ?',
        a: "Non, mais pour un déplacement dont le rendez-vous est décisif, la souplesse vaut son prix. C’est une décision à prendre à la réservation, pas au moment de l’incident.",
      },
      {
        q: 'Que dire à la personne qui attend ?',
        a: "L’essentiel : ce qui se passe, votre nouvelle heure d’arrivée, et ce que vous proposez. « Train annulé, j’arrive à 11 h 30 au lieu de 10 h. Souhaitez-vous décaler, ou commencer en visioconférence ? »",
      },
      {
        q: 'Le suivi pendant le déplacement est-il inclus dans un Private Office ?',
        a: "Le périmètre de BrittAssist couvre les itinéraires complets et le suivi pendant le déplacement. La disponibilité exacte — horaires étendus, week-end — se définit au devis.",
      },
    ],
    liens: [
      { href: '/guides/feuille-de-route-de-deplacement', label: 'La feuille de route de déplacement' },
      { href: '/guides/organiser-un-deplacement-professionnel', label: 'Organiser un déplacement professionnel' },
      { href: '/services/organisation-deplacements', label: 'Faire organiser ses déplacements' },
      { href: '/guides/dirigeant-souvent-en-deplacement', label: 'Diriger en étant souvent en déplacement' },
    ],
    cloture: 'Dans un imprévu, la première minute sert à trouver une solution. La seconde, à prévenir.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'problème-solution',
      motCle: 'train annulé déplacement professionnel que faire',
      variantes: ['vol annulé voyage d’affaires', 'imprévu en déplacement professionnel', 'correspondance manquée que faire'],
      persona: 'Dirigeant en déplacement confronté à une annulation',
      objectif: 'Donner l’ordre des gestes et ce qui se prépare avant',
      difference: 'Hiérarchise les gestes — solution, puis prévenir — et montre l’apport d’un suivi à distance',
    },
  },

  {
    slug: 'choisir-un-lieu-de-seminaire',
    type: 'comparatif',
    dossier: DOSSIER,
    categorie: 'Choisir',
    nom: 'Choisir un lieu de séminaire',
    title: 'Choisir un lieu de séminaire : comparer les devis · BrittAssist',
    description:
      "Accès, salle, hébergement, restauration, conditions d’annulation : la grille pour comparer trois lieux de séminaire sur les mêmes bases.",
    h1: 'Choisir un lieu de séminaire : comparer trois devis sur les mêmes bases.',
    lede:
      "Trois lieux, trois devis, trois façons de présenter le prix : au forfait, à la journée, par personne. Les comparer tels quels est impossible. Il faut d’abord poser les mêmes questions aux trois.",
    reponseCourte: [
      "Un lieu se choisit sur six critères : l’accès, la salle, l’hébergement, la restauration, le prix complet et les conditions d’annulation.",
      "Envoyez le même cahier des charges à trois lieux, et demandez un devis par personne et par poste.",
      "Le critère éliminatoire est souvent l’accès : un lieu superbe à trois heures de route ampute le séminaire d’une demi-journée.",
    ],
    sections: [
      {
        h2: 'Le cahier des charges à envoyer',
        blocs: [
          {
            modele: {
              titre: 'Demande de devis — trame',
              lignes: [
                "Objet : séminaire de [nombre] personnes, du [date] au [date] (dates alternatives : […]).",
                "Salle : plénière pour [nombre], disposition en [U / îlots / théâtre], lumière du jour, écran, connexion.",
                "Sous-commissions : [nombre] espaces pour [nombre] personnes.",
                "Hébergement : [nombre] chambres individuelles, [nombre] nuits.",
                "Restauration : [nombre] déjeuners, [nombre] dîners, pauses ; régimes particuliers à prévoir.",
                "Merci d’indiquer : le prix par personne et par poste, ce qui est inclus, les conditions d’annulation, la date limite de confirmation de l’effectif.",
              ],
            },
          },
        ],
      },
      {
        h2: 'La grille de comparaison',
        blocs: [
          {
            tableau: {
              legende: 'Grille de comparaison des lieux',
              colonnes: ['Critère', 'Ce qu’il faut regarder'],
              lignes: [
                ['Accès', 'Temps de trajet réel pour la majorité des participants ; gare ou aéroport proche ; stationnement'],
                ['Salle', 'Taille réelle, lumière, acoustique, matériel inclus, possibilité de réaménager'],
                ['Hébergement', 'Chambres sur place ou à proximité ; niveau homogène'],
                ['Restauration', 'Sur place ou non ; adaptation aux régimes ; horaires souples'],
                ['Prix complet', 'Total par personne, tout inclus, taxes comprises'],
                ['Annulation', 'Échelle de pénalités ; date à laquelle l’effectif devient ferme'],
                ['Exclusivité', 'Le groupe est-il seul, ou partage-t-il les espaces ?'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Ce que le devis ne dit pas',
        blocs: [
          {
            liste: [
              "La qualité réelle de la connexion : demandez-la, testez-la si une visite est possible.",
              "Le bruit : un mariage dans la salle voisine le samedi.",
              "La réactivité de l’interlocuteur pendant la phase de devis : elle annonce celle du jour J.",
              "Les suppléments : location de matériel, heures tardives, eau en salle.",
            ],
          },
        ],
      },
      {
        h2: 'Décider',
        blocs: [
          {
            paragraphes: [
              "Posez une option sur le lieu préféré, le temps de décider : beaucoup l’acceptent pour quelques jours. Comparez les totaux par personne, puis relisez les conditions d’annulation du lieu le moins cher : c’est souvent là que se trouve l’écart. Une visite, ou un appel vidéo depuis la salle, lève les derniers doutes.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Comparer un forfait tout compris à un prix de salle seule.",
      "Signer sans avoir lu l’échelle des pénalités d’annulation.",
      "Choisir sur photos une salle « lumineuse » qui donne sur un parking.",
    ],
    faq: [
      {
        q: 'Combien de lieux consulter ?',
        a: "Trois suffisent à comparer sans s’y perdre. Au-delà, la décision ralentit sans s’améliorer.",
      },
      {
        q: 'Faut-il visiter ?',
        a: "Pour un séminaire important, oui, ou à défaut demander une visite en visioconférence. Les photos commerciales ne montrent ni l’acoustique, ni l’accès.",
      },
      {
        q: 'Qui peut mener cette consultation ?',
        a: "C’est un travail de recherche et de comparaison qui se confie : cahier des charges, envoi, relances, tableau comparatif. La décision vous revient, sur un document d’une page.",
      },
    ],
    liens: [
      { href: '/guides/organiser-un-seminaire-d-equipe', label: 'Organiser un séminaire d’équipe' },
      { href: '/services/recherches', label: 'Déléguer ses recherches et comparatifs' },
      { href: '/services/suivi-prestataires', label: 'Faire suivre ses prestataires' },
      { href: '/guides/acompte-ou-arrhes', label: 'Acompte ou arrhes' },
    ],
    cloture: 'Trois devis ne se comparent que s’ils répondent à la même question.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'comparaison',
      motCle: 'choisir un lieu de séminaire',
      variantes: ['comparer devis séminaire', 'critères lieu séminaire entreprise', 'trouver un lieu pour un séminaire'],
      persona: 'Dirigeant ou office manager qui consulte des lieux',
      objectif: 'Rendre trois devis comparables',
      difference: 'Fournit le cahier des charges à envoyer, pour que les devis répondent à la même question',
    },
  },
];
