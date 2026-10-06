/**
 * Dossier « Modèles et checklists ».
 *
 * Des trames à reprendre. Chaque page donne le modèle lui-même, dans la page,
 * sans téléchargement ni formulaire : rien n'est échangé contre une adresse
 * e-mail. Une trame n'est utile que remplie ; chaque page dit donc aussi
 * comment la tenir, et qui peut le faire.
 */
import type { Guide } from '../guides.ts';

const DATE = '2026-10-03';
const DOSSIER = 'modeles-et-checklists';

export const modeles: Guide[] = [
  {
    slug: 'modeles-et-checklists',
    type: 'pilier',
    dossier: DOSSIER,
    categorie: 'Dossier',
    nom: 'Modèles et checklists pour l’administratif',
    title: 'Modèles et checklists administratifs à reprendre · BrittAssist',
    description:
      "Tableaux de suivi, fiches, notes de passation, listes de contrôle : des trames administratives à reprendre telles quelles, sans téléchargement.",
    h1: 'Des modèles à reprendre, et la façon de les faire vivre.',
    lede:
      "Un modèle ne résout rien tant qu’il reste vide. Sa valeur tient à deux choses : il vous évite de partir d’une page blanche, et il donne à quelqu’un d’autre une forme à remplir. Les trames de cette rubrique sont données dans la page, sans formulaire à remplir pour les obtenir.",
    reponseCourte: [
      "Cette rubrique réunit des trames prêtes à l’emploi : tableaux de suivi, fiches, checklists, notes.",
      "Chaque modèle est donné en entier dans sa page : il se recopie dans un tableur ou un document, en cinq minutes.",
      "Un modèle n’a d’intérêt que s’il est tenu à jour : chaque page dit par qui, et à quel rythme.",
      "Adaptez-les : une colonne qui ne vous sert pas se supprime.",
    ],
    sections: [
      {
        h2: 'Les modèles, par usage',
        blocs: [
          {
            tableau: {
              legende: 'Les modèles de la rubrique',
              colonnes: ['Vous voulez', 'Le modèle', 'Rythme de mise à jour'],
              lignes: [
                ['Savoir qui vous doit de l’argent', 'Tableau de suivi des factures', 'À chaque facture, relu chaque semaine'],
                ['Mesurer votre temps administratif', 'Relevé du temps administratif', 'Deux semaines, une fois'],
                ['Ne plus répéter vos préférences', 'Fiche de préférences du dirigeant', 'À chaque nouveauté'],
                ['Préparer la clôture', 'Checklist de clôture annuelle', 'Une fois par an'],
                ['Suivre un prestataire', 'Fiche prestataire', 'À chaque échange important'],
                ['Transmettre un poste ou un dossier', 'Note de passation', 'À chaque absence ou départ'],
                ['Voir la semaine d’un coup d’œil', 'Tableau de bord hebdomadaire', 'Chaque semaine'],
                ['Ouvrir un dossier client complet', 'Checklist d’ouverture de dossier', 'À chaque nouveau client'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Reprendre un modèle',
        blocs: [
          {
            etapes: [
              "Recopiez la trame dans votre outil habituel : tableur, document, outil de suivi.",
              "Supprimez ce qui ne vous concerne pas avant de commencer.",
              "Remplissez-la avec trois cas réels : c’est le test. Si une colonne reste vide trois fois, elle est de trop.",
              "Désignez la personne qui la tient.",
              "Relisez-la au bout d’un mois, et ajustez.",
            ],
          },
        ],
      },
      {
        h2: 'Pourquoi tant de modèles finissent abandonnés',
        blocs: [
          {
            liste: [
              "Ils sont trop riches : vingt colonnes dont six servent.",
              "Personne n’est chargé de les tenir.",
              "Ils font double emploi avec un autre outil.",
              "Ils demandent une saisie au mauvais moment, quand on n’a pas l’information.",
            ],
          },
          {
            paragraphes: [
              "Le remède est le même dans les quatre cas : moins de colonnes, un responsable, un seul endroit, une saisie au moment où l’information existe.",
            ],
          },
        ],
      },
      {
        h2: 'Qui remplit le modèle',
        blocs: [
          {
            paragraphes: [
              "Ces trames décrivent, en creux, un travail de suivi. Elles prennent leur pleine valeur quand ce n’est pas le dirigeant qui les remplit. Vous donnez l’information une fois ; quelqu’un tient le tableau, et vous le consultez quand vous en avez besoin.",
            ],
          },
        ],
      },
    ],
    limites: [
      "Ces modèles sont des trames d’organisation. Ils ne remplacent ni un logiciel de comptabilité, ni un document à valeur juridique.",
    ],
    faq: [
      {
        q: 'Peut-on télécharger ces modèles ?',
        a: "Ils sont donnés dans les pages, à recopier. Aucun formulaire, aucune adresse e-mail demandée : une trame de dix colonnes se reconstitue en quelques minutes, dans l’outil que vous utilisez déjà.",
      },
      {
        q: 'Puis-je les modifier ?',
        a: "Oui, et c’est recommandé. Un modèle est un point de départ ; le bon tableau est celui qui correspond à votre activité.",
      },
      {
        q: 'Dans quel outil les tenir ?',
        a: "Un tableur partagé convient à tous. L’important est qu’il n’y ait qu’un exemplaire, accessible à la personne qui le tient et à vous.",
      },
    ],
    liens: [
      { href: '/guides/modele-brief-assistante-externalisee', label: 'Modèle de brief pour déléguer' },
      { href: '/guides/modele-tableau-de-suivi-des-factures', label: 'Modèle de tableau de suivi des factures' },
      { href: '/guides/modele-note-de-passation', label: 'Modèle de note de passation' },
      { href: '/private-office', label: 'Le fonctionnement d’un Private Office' },
    ],
    cloture: 'Un modèle vide est une bonne intention. Un modèle tenu est une organisation.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'navigation',
      motCle: 'modèles administratifs entreprise',
      variantes: ['modèles de tableaux de suivi', 'checklists administratives', 'trames organisation administrative'],
      persona: 'Dirigeant ou assistante qui cherche une trame prête à l’emploi',
      objectif: 'Orienter vers le bon modèle et dire comment le faire vivre',
      difference: 'Modèles donnés dans la page, sans formulaire ni adresse e-mail à fournir',
    },
  },

  {
    slug: 'modele-tableau-de-suivi-des-factures',
    type: 'modele',
    dossier: DOSSIER,
    categorie: 'Modèle',
    nom: 'Modèle de tableau de suivi des factures',
    title: 'Tableau de suivi des factures clients : le modèle · BrittAssist',
    description:
      "Onze colonnes pour savoir, chaque lundi, ce qui est facturé, ce qui est échu, ce qui a été relancé, et ce qui vous est dû.",
    h1: 'Le tableau de suivi des factures : savoir chaque lundi qui vous doit quoi.',
    lede:
      "« Combien vous doit-on aujourd’hui ? » Si la réponse demande d’ouvrir trois fichiers et la banque, c’est que le suivi n’existe pas. Un tableau de onze colonnes y répond en une ligne de total.",
    reponseCourte: [
      "Le tableau de suivi liste chaque facture émise avec sa date d’échéance, son statut de paiement et l’historique de ses relances.",
      "Il se relit une fois par semaine : c’est cette lecture qui déclenche les relances.",
      "Il donne trois chiffres : ce qui est facturé et non échu, ce qui est échu, ce qui est échu depuis plus de trente jours.",
    ],
    sections: [
      {
        h2: 'Le modèle',
        blocs: [
          {
            tableau: {
              legende: 'Colonnes du tableau de suivi des factures',
              colonnes: ['Colonne', 'Contenu', 'Remarque'],
              lignes: [
                ['N° de facture', 'Numéro unique', 'Dans l’ordre d’émission'],
                ['Date d’émission', 'Jour de la facture', '—'],
                ['Client', 'Dénomination exacte', 'Celle de la facture'],
                ['Objet', 'Prestation ou chantier', 'En quelques mots'],
                ['Montant TTC', 'Total à payer', '—'],
                ['Date d’échéance', 'Écrite sur la facture', 'C’est elle qui pilote tout'],
                ['Statut', 'À échoir · Échue · Payée · Litige', 'Liste fermée'],
                ['Date de paiement', 'Jour de l’encaissement', 'Vide tant que non payée'],
                ['Relance 1', 'Date et canal', '—'],
                ['Relance 2', 'Date et canal', '—'],
                ['Commentaire', 'Ce que le client a répondu', 'Daté'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Le lire chaque semaine',
        blocs: [
          {
            etapes: [
              "Pointez les encaissements de la semaine avec le relevé bancaire.",
              "Passez en « Échue » ce qui a dépassé sa date.",
              "Relancez tout ce qui est échu et n’a pas été relancé depuis sept jours.",
              "Notez la réponse obtenue, avec sa date.",
              "Relevez les trois totaux : à échoir, échu, échu de plus de trente jours.",
            ],
          },
        ],
      },
      {
        h2: 'Les trois totaux',
        blocs: [
          {
            paragraphes: [
              "Le premier — à échoir — est votre trésorerie à venir. Le deuxième — échu — est ce qui devrait déjà être sur le compte. Le troisième — échu depuis plus de trente jours — est celui qui demande une décision : relance ferme, mise en demeure, échéancier. Regardé chaque semaine, il ne grossit pas en silence.",
            ],
          },
        ],
      },
      {
        h2: 'Tableau ou logiciel ?',
        blocs: [
          {
            paragraphes: [
              "Si votre logiciel de facturation affiche déjà les factures échues et l’historique des relances, il est votre tableau : ne le doublez pas. Le modèle sert à ceux dont l’outil ne le fait pas, ou qui facturent encore à partir de documents isolés.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Ne pas renseigner la date d’échéance : le tableau devient une simple liste.",
      "Relancer de mémoire, sans noter : le client dira qu’il n’a jamais rien reçu.",
      "Laisser « Litige » comme statut définitif, sans prochaine étape.",
    ],
    faq: [
      {
        q: 'Qui tient ce tableau ?',
        a: "La personne qui émet et relance les factures. C’est une tâche type de délégation : elle est régulière, vérifiable, et ne demande aucune décision.",
      },
      {
        q: 'Faut-il y inscrire les acomptes ?',
        a: "Oui : une facture d’acompte est une facture. Ajoutez une colonne « Type » si vous en émettez souvent.",
      },
      {
        q: 'Que faire des factures très anciennes ?',
        a: "Les inscrire quand même, puis décider pour chacune : relance, mise en demeure, ou abandon assumé avec votre expert-comptable. Un tableau qui commence aujourd’hui en laissant le passé dans l’ombre ne dit pas la vérité.",
      },
    ],
    liens: [
      { href: '/guides/relancer-une-facture-impayee', label: 'Relancer une facture impayée' },
      { href: '/guides/delais-de-paiement-et-penalites-de-retard', label: 'Délais de paiement et pénalités de retard' },
      { href: '/guides/devis-factures-relances', label: 'Le circuit complet, du devis à l’encaissement' },
      { href: '/services/facturation', label: 'Confier sa facturation et ses relances' },
    ],
    cloture: 'Ce qu’on regarde chaque lundi ne vieillit pas trois mois.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'modèle',
      motCle: 'tableau de suivi des factures',
      variantes: ['modèle suivi factures clients', 'tableau suivi encaissements', 'suivi des impayés tableau'],
      persona: 'Dirigeant ou indépendant sans outil de suivi des encaissements',
      objectif: 'Fournir un tableau prêt à recopier et la routine de lecture',
      difference: 'Onze colonnes, trois totaux, et une routine hebdomadaire qui déclenche les relances',
    },
  },

  {
    slug: 'modele-releve-du-temps-administratif',
    type: 'modele',
    dossier: DOSSIER,
    categorie: 'Modèle',
    nom: 'Modèle de relevé du temps administratif',
    title: 'Relevé du temps administratif : la grille sur 2 semaines · BrittAssist',
    description:
      "Une grille à tenir deux semaines pour mesurer le temps que vous prend l’administratif, repérer ce qui revient et décider de ce qui peut partir.",
    h1: 'Mesurer son temps administratif : une grille, deux semaines.',
    lede:
      "Tout dirigeant a l’impression que l’administratif lui prend « trop de temps ». Très peu savent combien, ni à quoi. Tant que ce n’est qu’une impression, on ne peut ni la chiffrer, ni décider quoi en faire.",
    reponseCourte: [
      "Le relevé consiste à noter, pendant deux semaines, chaque tâche qui n’est ni votre métier, ni une décision.",
      "Cinq colonnes suffisent : la tâche, le domaine, la durée, la fréquence, et si elle exigeait vraiment que ce soit vous.",
      "Au bout de deux semaines, il donne un volume, une liste de tâches récurrentes, et le périmètre d’une éventuelle délégation.",
    ],
    sections: [
      {
        h2: 'La grille',
        blocs: [
          {
            tableau: {
              legende: 'Colonnes du relevé',
              colonnes: ['Colonne', 'Ce qu’on y note', 'Exemple'],
              lignes: [
                ['Tâche', 'Ce que vous avez fait, en quelques mots', 'Relancer la facture Durand'],
                ['Domaine', 'Administratif, facturation, agenda, déplacement, prestataires, personnel', 'Facturation'],
                ['Durée', 'À la louche : 5, 15, 30 minutes, 1 heure', '15 min'],
                ['Fréquence', 'Ponctuelle, hebdomadaire, mensuelle', 'Hebdomadaire'],
                ['Fallait-il que ce soit moi ?', 'Oui, non, en partie', 'Non'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Le tenir sans que cela devienne une tâche de plus',
        blocs: [
          {
            etapes: [
              "Gardez la grille ouverte sur votre téléphone ou un carnet.",
              "Notez au moment où vous terminez la tâche, pas le soir.",
              "N’arrondissez pas vers le bas : dix minutes à chercher un document comptent.",
              "Ne notez pas votre métier : seulement ce qui l’entoure.",
              "Tenez deux semaines, dont une ordinaire.",
            ],
          },
        ],
      },
      {
        h2: 'Le lire',
        blocs: [
          {
            liste: [
              "Le total, ramené au mois : c’est le volume.",
              "La répartition par domaine : c’est là que se trouve le sujet.",
              "Les tâches récurrentes où la dernière colonne dit « non » : c’est le périmètre déléguable.",
              "Les tâches où elle dit « en partie » : la préparation peut partir, la décision reste.",
            ],
          },
          {
            paragraphes: [
              "Le résultat surprend souvent, dans un sens ou dans l’autre. Certains découvrent qu’ils y passent bien plus qu’ils ne pensaient ; d’autres, que le volume est modeste mais très morcelé — et que c’est le morcellement qui fatigue.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que vous en faites',
        blocs: [
          {
            paragraphes: [
              "Trois issues sont possibles. Le volume est faible : simplifiez, regroupez, et gardez. Le volume est réel et régulier : c’est un périmètre de délégation, que cette grille décrit déjà. Le volume est réel mais vient d’un outil ou d’un processus inutile : supprimez la cause avant de déléguer la conséquence.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Remplir la grille de mémoire en fin de semaine.",
      "Ne relever qu’une semaine exceptionnelle.",
      "Compter comme administratif le cœur de votre métier.",
    ],
    limites: [
      "Ce relevé donne un ordre de grandeur personnel. Il ne permet aucune comparaison avec une moyenne : il n’en existe pas qui vous corresponde.",
    ],
    faq: [
      {
        q: 'Pourquoi deux semaines ?',
        a: "Une seule peut être atypique. Deux suffisent à faire apparaître ce qui revient chaque semaine, et un mois complet découragerait beaucoup de gens.",
      },
      {
        q: 'À quoi sert ce relevé si je fais appel à une assistante ?',
        a: "Il devient le point de départ du devis : le périmètre, le volume et les domaines sont décrits par vos propres notes plutôt que par une estimation.",
      },
      {
        q: 'Et si je n’ai pas le temps de le tenir ?',
        a: "C’est en soi une information. Une version allégée — la tâche et la durée, rien d’autre — reste utile.",
      },
    ],
    liens: [
      { href: '/guides/quand-prendre-une-assistante', label: 'Quand prendre une assistante' },
      { href: '/guides/rentabilite-assistante-externalisee', label: 'Calculer la rentabilité d’une assistante' },
      { href: '/guides/quelles-taches-deleguer-a-une-assistante', label: 'Quelles tâches déléguer' },
      { href: '/contact', label: 'Échanger à partir de votre relevé' },
      { href: '/guides/cahier-des-charges-secretariat-externalise', label: 'Du relevé au cahier des charges' },
    ],
    cloture: 'Deux semaines de notes valent mieux qu’un an d’impressions.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'modèle',
      motCle: 'mesurer son temps administratif',
      variantes: ['grille de relevé de temps dirigeant', 'combien de temps prend l’administratif', 'audit de son temps de travail'],
      persona: 'Dirigeant qui veut objectiver sa charge administrative',
      objectif: 'Fournir une grille de relevé et sa lecture',
      difference: 'La colonne « fallait-il que ce soit moi ? », qui transforme le relevé en périmètre',
    },
  },

  {
    slug: 'modele-fiche-de-preferences-dirigeant',
    type: 'modele',
    dossier: DOSSIER,
    categorie: 'Modèle',
    nom: 'Modèle de fiche de préférences',
    title: 'Fiche de préférences du dirigeant : le modèle · BrittAssist',
    description:
      "Transports, hôtels, restaurants, rendez-vous, contacts : la fiche qui évite de répéter vos préférences à chaque réservation.",
    h1: 'La fiche de préférences : dire une fois ce que vous répétez toujours.',
    lede:
      "Côté couloir, pas trop tôt le matin, jamais de correspondance de moins de quarante minutes. Vous l’avez dit dix fois. Tant que ce n’est écrit nulle part, vous le redirez — ou vous vous retrouverez côté fenêtre, à six heures.",
    reponseCourte: [
      "Une fiche de préférences consigne ce qu’une personne doit savoir pour organiser à votre place : transports, hébergement, repas, rendez-vous, contacts.",
      "Elle se remplit en une demi-heure, puis s’enrichit à chaque remarque.",
      "Elle contient des informations personnelles : elle se range dans un espace à accès restreint.",
    ],
    sections: [
      {
        h2: 'Le modèle',
        blocs: [
          {
            modele: {
              titre: 'Fiche de préférences — trame',
              lignes: [
                "TRAIN : classe · place (couloir, fenêtre, sens de la marche) · carte de réduction ou d’abonnement · gare de départ habituelle.",
                "AVION : compagnies préférées · siège · bagage · programme de fidélité · aéroport de départ.",
                "VOITURE : véhicule personnel ou location · catégorie · permis.",
                "HÔTEL : gamme · emplacement (près du rendez-vous, calme) · lit · petit-déjeuner · à éviter.",
                "REPAS : régime, allergies · ce que vous aimez pour un déjeuner d’affaires · à éviter.",
                "RENDEZ-VOUS : jours et heures préférés · durée par défaut · marge entre deux · ce qui ne se déplace jamais.",
                "CONTACTS : les personnes qui passent toujours · celles à orienter · proches à joindre en cas d’urgence.",
                "DOCUMENTS : pièce d’identité et passeport (numéros, dates d’expiration) · permis.",
                "DIVERS : ce qui vous agace, ce qui vous facilite la vie.",
              ],
            },
          },
        ],
      },
      {
        h2: 'La remplir',
        blocs: [
          {
            etapes: [
              "Répondez à ce que vous savez ; laissez le reste vide.",
              "Regardez vos trois derniers déplacements : ce qui vous a convenu, ce qui vous a gêné.",
              "Ajoutez les dates d’expiration de vos documents : elles serviront à l’échéancier.",
              "Faites-la relire par la personne qui l’utilisera : elle posera les questions qui manquent.",
            ],
          },
        ],
      },
      {
        h2: 'La faire vivre',
        blocs: [
          {
            paragraphes: [
              "La fiche s’enrichit par les remarques faites en passant : « cet hôtel était parfait », « plus jamais ce restaurant ». C’est à la personne qui organise de les noter, pas à vous de mettre la fiche à jour. Au bout de quelques mois, elle contient ce que vous n’auriez pas su formuler au départ.",
            ],
          },
        ],
      },
      {
        h2: 'La protéger',
        blocs: [
          {
            liste: [
              "Rangez-la dans un dossier à accès restreint.",
              "N’y mettez pas de mots de passe ni de numéros de carte bancaire.",
              "Les numéros de pièces d’identité y figurent pour les réservations : limitez l’accès à qui en a besoin.",
              "Prévoyez sa restitution ou sa suppression en fin de collaboration.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Vouloir la remplir entièrement avant de s’en servir.",
      "La laisser dans la boîte de réception de quelqu’un.",
      "Y consigner des moyens de paiement.",
    ],
    faq: [
      {
        q: 'Est-ce utile si je voyage peu ?',
        a: "La partie rendez-vous et contacts sert à tout le monde. La partie voyage se remplit en dix minutes et évite les erreurs le jour où un déplacement se présente.",
      },
      {
        q: 'Qui la tient à jour ?',
        a: "La personne qui organise pour vous. Dans un Private Office, c’est le principe : les préférences sont mémorisées, et n’ont pas à être redemandées.",
      },
      {
        q: 'Peut-on en faire une pour un collaborateur ?',
        a: "Oui, pour toute personne dont on organise les déplacements, avec son accord, puisqu’elle contient des informations personnelles.",
      },
    ],
    liens: [
      { href: '/services/organisation-deplacements', label: 'Faire organiser ses déplacements' },
      { href: '/services/reservations', label: 'Déléguer ses réservations' },
      { href: '/guides/organiser-un-deplacement-professionnel', label: 'Organiser un déplacement professionnel' },
      { href: '/guides/tenir-un-agenda-de-dirigeant', label: 'Tenir un agenda de dirigeant' },
    ],
    cloture: 'Une préférence écrite une fois n’a plus jamais à être rappelée.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'modèle',
      motCle: 'fiche de préférences dirigeant',
      variantes: ['profil voyageur modèle', 'préférences de voyage dirigeant', 'fiche de renseignements assistante de direction'],
      persona: 'Dirigeant qui fait organiser ses déplacements et rendez-vous',
      objectif: 'Fournir une trame et dire comment elle s’enrichit',
      difference: 'Couvre aussi rendez-vous et contacts, et traite la protection des informations personnelles',
    },
  },

  {
    slug: 'checklist-cloture-annuelle-administrative',
    type: 'modele',
    dossier: DOSSIER,
    categorie: 'Checklist',
    nom: 'Checklist de clôture annuelle',
    title: 'Clôture annuelle : la checklist administrative · BrittAssist',
    description:
      "Pièces manquantes, inventaire, contrats, immobilisations, archivage : la liste de ce qu’il faut réunir avant de remettre l’exercice au cabinet comptable.",
    h1: 'La clôture annuelle : ce qu’il faut réunir avant d’appeler le comptable.',
    lede:
      "La clôture se passe en deux temps : celui où le cabinet travaille, et celui, plus long, où il attend vos pièces. Le second dépend entièrement de vous. Il se prépare avec une liste, pas avec une semaine de recherches.",
    reponseCourte: [
      "Avant la clôture, six familles d’éléments sont à réunir : les pièces de l’exercice, la banque, les clients, les fournisseurs, les immobilisations et les événements de l’année.",
      "La liste précise vient de votre expert-comptable : demandez-la un mois avant la date de clôture.",
      "La clôture est aussi le moment de l’archivage et de la revue des contrats.",
    ],
    sections: [
      {
        h2: 'La checklist',
        blocs: [
          {
            tableau: {
              legende: 'Éléments à réunir avant la clôture',
              colonnes: ['Famille', 'À réunir', 'Fait'],
              lignes: [
                ['Pièces de l’exercice', 'Toutes les factures de vente et d’achat, dans l’ordre ; les justificatifs manquants signalés', '☐'],
                ['Banque', 'Relevés de tous les comptes à la date de clôture ; emprunts et tableaux d’amortissement', '☐'],
                ['Clients', 'Factures non encaissées à la date de clôture ; créances douteuses, avec ce que vous en savez', '☐'],
                ['Fournisseurs', 'Factures non parvenues pour des prestations déjà reçues ; dettes en cours', '☐'],
                ['Stock et travaux en cours', 'Inventaire à la date de clôture, si votre activité en comporte', '☐'],
                ['Immobilisations', 'Achats et cessions de matériel, véhicules, logiciels dans l’année', '☐'],
                ['Personnel', 'Congés et primes à provisionner : éléments transmis au cabinet', '☐'],
                ['Événements de l’année', 'Nouveaux contrats, baux, emprunts, subventions, litiges', '☐'],
                ['Juridique', 'Décisions prises dans l’année ; préparation de l’assemblée', '☐'],
              ],
            },
          },
          {
            paragraphes: [
              "Cette liste est générique. Celle de votre cabinet tient compte de votre régime et de votre activité : c’est elle qui fait foi.",
            ],
          },
        ],
      },
      {
        h2: 'Le calendrier',
        blocs: [
          {
            etapes: [
              "Un mois avant la date de clôture : demander sa liste au cabinet ; lancer la chasse aux justificatifs manquants.",
              "À la date de clôture : inventaire s’il y a lieu ; relevés bancaires arrêtés.",
              "Dans le mois qui suit : transmettre le dossier complet, avec un mot sur ce qui est inhabituel.",
              "Ensuite : répondre aux questions du cabinet dans la semaine, pas dans le mois.",
            ],
          },
        ],
      },
      {
        h2: 'Profiter de la clôture pour ranger',
        blocs: [
          {
            liste: [
              "Archiver l’exercice clos, avec son année de destruction possible.",
              "Passer en revue les contrats : lesquels renégocier, lesquels arrêter.",
              "Mettre à jour le dossier permanent.",
              "Créer les dossiers du nouvel exercice.",
              "Noter ce qui a manqué cette année, pour le collecter au fil de l’eau la suivante.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Attendre la demande du cabinet pour commencer à chercher.",
      "Oublier les factures reçues dans des espaces clients en ligne.",
      "Ne pas signaler un événement inhabituel : le cabinet le découvrira trop tard.",
    ],
    limites: [
      "L’établissement des comptes et des déclarations relève de votre expert-comptable. Cette liste aide à lui remettre un dossier complet ; elle ne dit rien du traitement comptable.",
    ],
    faq: [
      {
        q: 'Que peut préparer une assistante pour la clôture ?',
        a: "Toute la collecte : pièces, relevés, justificatifs manquants, liste des factures non encaissées, récapitulatif des événements de l’année. Elle remet un dossier complet ; elle ne fait ni écriture, ni déclaration.",
      },
      {
        q: 'Comment éviter la course de fin d’année ?',
        a: "En transmettant chaque mois. Une clôture préparée sur douze envois mensuels ne laisse que l’inventaire et les événements exceptionnels à traiter.",
      },
      {
        q: 'Faut-il conserver les brouillons et documents de travail ?',
        a: "Conservez ce qui justifie les comptes, selon les durées légales. Les documents de travail sans valeur probante peuvent être écartés, avec l’accord de votre cabinet.",
      },
    ],
    liens: [
      { href: '/guides/pieces-pour-l-expert-comptable', label: 'Préparer les pièces pour l’expert-comptable' },
      { href: '/guides/duree-de-conservation-documents-entreprise', label: 'Combien de temps conserver les documents' },
      { href: '/guides/suivi-des-contrats-et-abonnements', label: 'Suivre ses contrats et abonnements' },
      { href: '/services/gestion-administrative', label: 'Confier sa gestion administrative' },
      { href: '/guides/assemblee-generale-annuelle-retroplanning', label: 'Après la clôture : l’assemblée et le dépôt' },
    ],
    cloture: 'Une clôture se gagne en douze envois mensuels, pas en une semaine de janvier.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'modèle',
      motCle: 'checklist clôture annuelle',
      variantes: ['préparer la clôture comptable', 'documents à fournir pour le bilan', 'clôture exercice checklist'],
      persona: 'Dirigeant de TPE à l’approche de la clôture',
      objectif: 'Fournir la liste des éléments à réunir et le calendrier',
      difference: 'Traite la part du dirigeant, pas celle du cabinet, et fait de la clôture un moment de rangement',
    },
  },

  {
    slug: 'modele-fiche-prestataire',
    type: 'modele',
    dossier: DOSSIER,
    categorie: 'Modèle',
    nom: 'Modèle de fiche prestataire',
    title: 'Fiche prestataire : le modèle de suivi fournisseur · BrittAssist',
    description:
      "Contacts, contrat, tarifs, échéances, incidents : une fiche par prestataire pour ne plus chercher le numéro du plombier ni la date du contrat.",
    h1: 'La fiche prestataire : tout savoir d’un fournisseur en une page.',
    lede:
      "La chaudière tombe en panne. Qui l’entretient, déjà ? Le contrat est-il encore valable ? Quel est le numéro d’urgence ? Ces trois questions, posées un lundi matin, prennent vingt minutes. Une fiche les règle en dix secondes.",
    reponseCourte: [
      "Une fiche prestataire réunit, pour chaque fournisseur récurrent : ses contacts, l’objet et les conditions du contrat, les échéances et l’historique des interventions.",
      "Elle sert le jour d’un incident, d’une renégociation, ou quand quelqu’un d’autre doit prendre le relais.",
      "Les fiches alimentent le registre des contrats et l’échéancier.",
    ],
    sections: [
      {
        h2: 'Le modèle',
        blocs: [
          {
            modele: {
              titre: 'Fiche prestataire — trame',
              lignes: [
                "PRESTATAIRE : raison sociale · activité · site ou adresse.",
                "CONTACTS : interlocuteur habituel (nom, téléphone direct, e-mail) · contact d’urgence · contact comptabilité.",
                "OBJET : ce qu’il fait pour nous, en une phrase.",
                "CONTRAT : référence · date d’effet · échéance · reconduction · préavis · emplacement du document.",
                "CONDITIONS : tarif · mode et délai de règlement · ce qui est inclus, ce qui est facturé en plus.",
                "ACCÈS : clés, codes, badges remis · comptes ouverts dans nos outils.",
                "PIÈCES : attestations d’assurance et de vigilance, avec leur date de validité.",
                "HISTORIQUE : interventions, incidents, renégociations, datés.",
                "APPRÉCIATION : ce qui va bien, ce qui est à surveiller.",
              ],
            },
          },
        ],
      },
      {
        h2: 'Pour qui ouvrir une fiche',
        blocs: [
          {
            liste: [
              "Tout prestataire sous contrat : maintenance, ménage, informatique, téléphonie.",
              "Ceux dont on a besoin dans l’urgence : plombier, électricien, serrurier, dépanneur.",
              "Les sous-traitants réguliers, dont les attestations doivent être suivies.",
              "Les conseils : expert-comptable, avocat, assureur, banque.",
            ],
          },
          {
            paragraphes: [
              "Inutile d’en créer pour un achat ponctuel. Une vingtaine de fiches couvrent en général l’essentiel d’une petite entreprise.",
            ],
          },
        ],
      },
      {
        h2: 'L’historique',
        blocs: [
          {
            paragraphes: [
              "C’est la rubrique qui donne sa valeur à la fiche. Trois lignes par événement : la date, ce qui s’est passé, ce qui a été convenu. Le jour de la renégociation, vous n’arrivez pas avec une impression — « ils sont souvent en retard » — mais avec quatre dates.",
            ],
          },
        ],
      },
      {
        h2: 'Les tenir',
        blocs: [
          {
            etapes: [
              "Créez les fiches à partir du registre des contrats.",
              "Complétez l’historique à chaque intervention notable.",
              "Mettez à jour les contacts dès qu’un interlocuteur change.",
              "Relisez l’ensemble une fois par an, lors de la revue des contrats.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Noter le numéro du standard plutôt que la ligne directe.",
      "Garder ces informations dans le téléphone d’une seule personne.",
      "Ne rien consigner des incidents, puis n’avoir aucun argument à la renégociation.",
    ],
    faq: [
      {
        q: 'Quelle différence avec le registre des contrats ?',
        a: "Le registre est un tableau : une ligne par contrat, pour voir les échéances d’un coup d’œil. La fiche est le détail d’un prestataire : contacts, historique, appréciation.",
      },
      {
        q: 'Qui remplit l’historique ?',
        a: "La personne qui suit les prestataires. Si ce suivi est délégué, la fiche se remplit d’elle-même, au fil des échanges.",
      },
      {
        q: 'Faut-il une fiche pour les prestataires de la sphère personnelle ?',
        a: "Si vous les faites suivre par quelqu’un, oui : artisans du domicile, gardien, jardinier. Le principe est identique, dans un dossier séparé.",
      },
    ],
    liens: [
      { href: '/services/suivi-prestataires', label: 'Faire suivre ses prestataires' },
      { href: '/guides/suivi-des-contrats-et-abonnements', label: 'Suivre ses contrats et abonnements' },
      { href: '/guides/dossier-permanent-entreprise', label: 'Constituer le dossier permanent' },
      { href: '/services/organisation-personnelle', label: 'Faire prendre en charge son organisation personnelle' },
    ],
    cloture: 'Le bon numéro, le jour de la panne : c’est tout ce qu’on demande à une fiche.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'modèle',
      motCle: 'fiche prestataire modèle',
      variantes: ['fiche fournisseur modèle', 'suivi des prestataires entreprise', 'fiche de suivi fournisseur'],
      persona: 'Dirigeant ou responsable administratif qui suit plusieurs prestataires',
      objectif: 'Fournir une trame de fiche et dire pour qui en ouvrir une',
      difference: 'Donne à l’historique daté le rôle d’argument de renégociation',
    },
  },

  {
    slug: 'modele-note-de-passation',
    type: 'modele',
    dossier: DOSSIER,
    categorie: 'Modèle',
    nom: 'Modèle de note de passation',
    title: 'Note de passation : le modèle pour transmettre un poste · BrittAssist',
    description:
      "Tâches récurrentes, dossiers en cours, contacts, accès, pièges : la trame d’une note de passation qui permet à quelqu’un de prendre le relais.",
    h1: 'La note de passation : ce qu’il faut écrire avant de passer la main.',
    lede:
      "Une passation ratée ne se voit pas le jour du départ. Elle se voit trois semaines après, quand une échéance tombe et que personne ne savait qu’elle existait. La note de passation sert à transmettre ce que seule une personne avait en tête.",
    reponseCourte: [
      "Une note de passation décrit ce qu’une personne faisait, où en sont ses dossiers, où se trouvent les choses et à qui s’adresser.",
      "Elle se rédige avant un départ, une absence longue, ou la fin d’une prestation.",
      "Sa rubrique la plus utile est celle des pièges : ce qui n’est écrit nulle part et que l’on apprend en se trompant.",
    ],
    sections: [
      {
        h2: 'Le modèle',
        blocs: [
          {
            modele: {
              titre: 'Note de passation — trame',
              lignes: [
                "1. PÉRIMÈTRE : ce dont je m’occupais, en cinq lignes.",
                "2. TÂCHES RÉCURRENTES : pour chacune — quoi, quand, avec quel outil, pour qui.",
                "3. CALENDRIER : les échéances des trois prochains mois.",
                "4. DOSSIERS EN COURS : pour chacun — où il en est, la prochaine étape, qui attend quoi.",
                "5. CONTACTS : interlocuteurs internes et externes, et ce qu’il faut savoir de chacun.",
                "6. EMPLACEMENTS : où sont les documents, les modèles, les procédures.",
                "7. ACCÈS : la liste des outils utilisés (sans les mots de passe).",
                "8. PIÈGES : ce qui surprend, ce qui se fait autrement qu’on ne croirait, ce qui a déjà mal tourné.",
                "9. EN SUSPENS : ce que je n’ai pas eu le temps de finir.",
              ],
            },
          },
        ],
      },
      {
        h2: 'Écrire les tâches récurrentes',
        blocs: [
          {
            tableau: {
              legende: 'Exemple de tableau des tâches récurrentes',
              colonnes: ['Tâche', 'Rythme', 'Outil', 'Pour qui', 'Remarque'],
              lignes: [
                ['Émettre les factures', 'Chaque vendredi', 'Logiciel de facturation', 'Clients', 'Vérifier les bons de commande des grands comptes'],
                ['Transmettre les pièces', 'Le 5 du mois', 'Dossier partagé du cabinet', 'Expert-comptable', 'Il relance le 8 si rien n’est arrivé'],
                ['Renouveler l’attestation de vigilance', 'Tous les six mois', 'Espace Urssaf', 'Donneurs d’ordre', 'Trois clients la réclament'],
              ],
            },
          },
        ],
      },
      {
        h2: 'La rubrique des pièges',
        blocs: [
          {
            paragraphes: [
              "C’est celle qu’on oublie et qu’on ne peut pas deviner. « Ce client paie toujours en retard, mais toujours. » « Cette facture doit porter un numéro de commande, sinon elle est rejetée. » « Ne pas appeler ce fournisseur avant dix heures. » Dix lignes de ce genre épargnent trois mois d’apprentissage.",
            ],
          },
        ],
      },
      {
        h2: 'Mener la passation',
        blocs: [
          {
            etapes: [
              "La note est écrite par la personne qui part, deux à quatre semaines avant.",
              "Elle est lue par celle qui reprend, qui note ses questions.",
              "Un temps de travail commun, sur les tâches réelles, complète la note.",
              "Les accès sont transférés ou fermés, à partir de la liste.",
              "La note est rangée avec les procédures : elle servira à la prochaine passation.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Rédiger la note le dernier jour.",
      "Y inscrire des mots de passe.",
      "Décrire les tâches sans dire où en sont les dossiers.",
    ],
    faq: [
      {
        q: 'Quand rédiger une note de passation ?',
        a: "Avant tout départ, tout congé long, et à la fin d’une prestation externalisée. Elle est aussi utile à froid : écrire sa propre note révèle ce qui repose sur soi seul.",
      },
      {
        q: 'Une prestataire remet-elle une note de passation ?',
        a: "Elle le devrait. C’est le document qui vous permet de reprendre la main ou de confier la suite à quelqu’un d’autre. Prévoyez-le dans les conditions de fin de mission.",
      },
      {
        q: 'Quelle longueur ?',
        a: "Deux à quatre pages pour un poste administratif. Au-delà, elle n’est plus lue ; en deçà, il manque le calendrier ou les dossiers en cours.",
      },
    ],
    liens: [
      { href: '/guides/fin-de-collaboration-assistante-externalisee', label: 'Terminer une collaboration proprement' },
      { href: '/guides/remplacer-une-assistante-absente', label: 'Remplacer une assistante absente' },
      { href: '/guides/rediger-une-procedure-interne', label: 'Rédiger une procédure interne' },
      { href: '/guides/preparer-son-absence', label: 'Préparer son absence' },
      { href: '/services/support-equipes', label: 'Un renfort ponctuel pour vos équipes' },
    ],
    cloture: 'Ce qui n’est pas écrit avant le départ se réapprend après, au prix fort.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'modèle',
      motCle: 'note de passation modèle',
      variantes: ['passation de poste modèle', 'document de passation de dossiers', 'transmettre un poste administratif'],
      persona: 'Salarié, prestataire ou dirigeant qui transmet un poste',
      objectif: 'Fournir une trame complète et la méthode de passation',
      difference: 'La rubrique « pièges », et la séparation nette entre liste des accès et mots de passe',
    },
  },

  {
    slug: 'modele-tableau-de-bord-hebdomadaire',
    type: 'modele',
    dossier: DOSSIER,
    categorie: 'Modèle',
    nom: 'Modèle de tableau de bord hebdomadaire',
    title: 'Tableau de bord hebdomadaire du dirigeant : une page · BrittAssist',
    description:
      "Trésorerie attendue, factures échues, échéances, décisions en attente : le tableau de bord d’une page à recevoir chaque lundi matin.",
    h1: 'Le tableau de bord hebdomadaire : une page, chaque lundi.',
    lede:
      "Un dirigeant de petite entreprise pilote souvent à l’intuition, et son intuition est souvent bonne. Elle a un angle mort : ce qui ne fait pas de bruit. La facture qui vieillit, le contrat qui se reconduit, la décision que quelqu’un attend.",
    reponseCourte: [
      "Un tableau de bord hebdomadaire tient sur une page et répond à cinq questions : combien doit-on encaisser, qu’est-ce qui est en retard, qu’est-ce qui arrive à échéance, qu’attend-on de moi, que se passe-t-il cette semaine.",
      "Il ne contient que des éléments qui appellent une action ou une vigilance.",
      "Il est préparé par quelqu’un d’autre que vous : vous le lisez, vous ne le construisez pas.",
    ],
    sections: [
      {
        h2: 'Le modèle',
        blocs: [
          {
            modele: {
              titre: 'Tableau de bord — semaine du [date]',
              lignes: [
                "ENCAISSEMENTS : à échoir [montant] · échu [montant] · échu de plus de 30 jours [montant, noms].",
                "FACTURATION : émis la semaine dernière [nombre, montant] · restant à facturer [liste].",
                "DEVIS : en attente de réponse [nombre] · à relancer cette semaine [liste].",
                "ÉCHÉANCES À 30 JOURS : [contrat, déclaration, attestation — avec date limite d’action].",
                "DÉCISIONS ATTENDUES DE VOUS : [sujet — options — recommandation].",
                "SEMAINE À VENIR : déplacements, rendez-vous sensibles, absences.",
                "ALERTES : ce qui sort de l’ordinaire.",
              ],
            },
          },
        ],
      },
      {
        h2: 'Les règles de construction',
        blocs: [
          {
            etapes: [
              "Une page, pas davantage : ce qui ne tient pas n’est pas prioritaire.",
              "Des chiffres comparables d’une semaine à l’autre : mêmes rubriques, même ordre.",
              "Rien qui n’appelle ni action ni vigilance : l’information de confort est retirée.",
              "Les noms à côté des montants : « 4 200 € échus » ne dit rien ; « Durand, 4 200 €, 45 jours » dit quoi faire.",
              "Une recommandation à côté de chaque décision demandée.",
            ],
          },
        ],
      },
      {
        h2: 'D’où viennent les chiffres',
        blocs: [
          {
            tableau: {
              legende: 'Sources du tableau de bord',
              colonnes: ['Rubrique', 'Source'],
              lignes: [
                ['Encaissements', 'Tableau de suivi des factures, relevé bancaire'],
                ['Facturation', 'Logiciel de facturation, liste des prestations terminées'],
                ['Devis', 'Suivi des devis'],
                ['Échéances', 'Échéancier administratif'],
                ['Décisions', 'Suivi des demandes en attente'],
                ['Semaine à venir', 'Agenda'],
              ],
            },
          },
          {
            paragraphes: [
              "Le tableau de bord ne crée aucune donnée : il rassemble ce que les autres suivis contiennent déjà. S’il est difficile à produire, c’est que l’un de ces suivis manque.",
            ],
          },
        ],
      },
      {
        h2: 'Le lire',
        blocs: [
          {
            paragraphes: [
              "Dix minutes, le lundi matin, avant d’ouvrir la messagerie. Vous y répondez par vos décisions, d’une ligne chacune. C’est le support naturel du point hebdomadaire : on y parcourt les décisions, puis les alertes, et l’on passe à la semaine.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Ajouter une rubrique chaque mois, jusqu’à trois pages.",
      "Y mettre des indicateurs que personne ne regarde.",
      "Le construire soi-même le dimanche soir.",
    ],
    limites: [
      "Ce tableau de bord est un outil d’organisation. Les indicateurs financiers et la situation comptable relèvent de votre expert-comptable.",
    ],
    faq: [
      {
        q: 'Quelle différence avec un reporting comptable ?',
        a: "Le reporting comptable décrit ce qui s’est passé, avec exactitude. Le tableau de bord hebdomadaire dit ce qui demande votre attention cette semaine. Les deux se complètent.",
      },
      {
        q: 'Qui le prépare ?',
        a: "La personne qui tient les suivis. Dans un Private Office, c’est une ligne du périmètre : un reporting clair et régulier, que vous recevez sans avoir à le construire.",
      },
      {
        q: 'Faut-il un outil particulier ?',
        a: "Non. Un message structuré ou un document d’une page suffit. La régularité compte plus que la présentation.",
      },
    ],
    liens: [
      { href: '/services/reporting', label: 'Recevoir un reporting sans le construire' },
      { href: '/guides/point-hebdomadaire-avec-son-assistante', label: 'Le point hebdomadaire' },
      { href: '/guides/modele-tableau-de-suivi-des-factures', label: 'Modèle de tableau de suivi des factures' },
      { href: '/guides/echeancier-administratif-entreprise', label: 'Construire son échéancier administratif' },
      { href: '/guides/evaluer-un-secretariat-externalise', label: 'Cinq indicateurs pour évaluer la prestation' },
    ],
    cloture: 'Un tableau de bord utile ne dit pas tout. Il dit ce qui ne peut pas attendre lundi prochain.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'modèle',
      motCle: 'tableau de bord hebdomadaire dirigeant',
      variantes: ['reporting hebdomadaire TPE', 'tableau de bord dirigeant modèle', 'suivi hebdomadaire entreprise'],
      persona: 'Dirigeant de TPE ou PME qui pilote à l’intuition',
      objectif: 'Fournir une trame d’une page et ses règles de construction',
      difference: 'Ne garde que ce qui appelle une action, et montre de quels suivis viennent les chiffres',
    },
  },

  {
    slug: 'checklist-ouverture-dossier-client',
    type: 'modele',
    dossier: DOSSIER,
    categorie: 'Checklist',
    nom: 'Checklist d’ouverture de dossier client',
    title: 'Ouverture d’un dossier client : la checklist · BrittAssist',
    description:
      "Identité, interlocuteurs, contrat, facturation, accès : ce qu’il faut réunir à l’arrivée d’un client pour ne pas le lui redemander au moment de facturer.",
    h1: 'Ouvrir un dossier client : tout demander une fois, au début.',
    lede:
      "La première facture d’un nouveau client est souvent en retard pour une raison simple : il manque son adresse de facturation, son numéro Siren, ou le nom de la personne qui valide les paiements. Tout cela se demande le premier jour, quand le client est le mieux disposé à répondre.",
    reponseCourte: [
      "À l’ouverture d’un dossier client, cinq familles d’informations sont à réunir : identité, interlocuteurs, contrat, facturation, modalités pratiques.",
      "Les informations de facturation sont les plus souvent oubliées, et celles qui retardent le paiement.",
      "Le numéro Siren du client devient une mention obligatoire des factures avec la facturation électronique : collectez-le dès maintenant.",
    ],
    sections: [
      {
        h2: 'La checklist',
        blocs: [
          {
            tableau: {
              legende: 'Informations à réunir à l’ouverture d’un dossier client',
              colonnes: ['Famille', 'À réunir', 'Fait'],
              lignes: [
                ['Identité', 'Dénomination exacte, forme juridique, numéro Siren, adresse du siège', '☐'],
                ['Interlocuteurs', 'Décideur, contact opérationnel, contact comptabilité — nom, téléphone direct, e-mail', '☐'],
                ['Contrat', 'Devis ou contrat signé, conditions générales acceptées, bon de commande', '☐'],
                ['Facturation', 'Adresse de facturation, adresse e-mail ou plateforme de réception, numéro de commande exigé, numéro de TVA', '☐'],
                ['Paiement', 'Délai convenu, mode de règlement, circuit de validation chez le client', '☐'],
                ['Pratique', 'Canal d’échange préféré, horaires, accès aux locaux ou aux outils', '☐'],
                ['Confidentialité', 'Accord de confidentialité, autorisation de citer le client comme référence', '☐'],
                ['Classement', 'Dossier créé dans l’arborescence, fiche créée dans l’outil de facturation', '☐'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les questions de facturation à poser d’emblée',
        blocs: [
          {
            modele: {
              titre: 'Message au contact comptabilité',
              lignes: [
                "Bonjour,",
                "Afin que nos factures soient traitées sans retard, pourriez-vous me confirmer :",
                "— la dénomination et l’adresse de facturation exactes ;",
                "— votre numéro Siren et votre numéro de TVA ;",
                "— l’adresse ou la plateforme sur laquelle vous recevez vos factures ;",
                "— si un numéro de bon de commande doit figurer sur la facture ;",
                "— le nom de la personne à contacter en cas de question.",
                "Je vous en remercie.",
              ],
            },
          },
          {
            paragraphes: [
              "Ce message, envoyé à la signature, épargne en général un mois de délai sur la première facture.",
            ],
          },
        ],
      },
      {
        h2: 'Le faire à chaque fois',
        blocs: [
          {
            etapes: [
              "La checklist est déclenchée par la signature du devis.",
              "Les informations manquantes sont demandées dans la semaine.",
              "Le dossier n’est « ouvert » que lorsque la ligne facturation est complète.",
              "La fiche est mise à jour à chaque changement d’interlocuteur.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que cela change',
        blocs: [
          {
            paragraphes: [
              "Un dossier ouvert proprement se voit à trois moments : la première facture part complète, la première relance s’adresse à la bonne personne, et le jour où votre contact change de poste, vous savez à qui parler.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Facturer au nom commercial plutôt qu’à la dénomination sociale.",
      "N’avoir qu’un seul contact, qui part en congé le jour de la relance.",
      "Découvrir l’exigence d’un bon de commande au rejet de la première facture.",
    ],
    faq: [
      {
        q: 'N’est-ce pas trop demander à un nouveau client ?',
        a: "C’est l’inverse : un message clair, envoyé une fois, donne une image de sérieux. Ce qui agace un client, c’est d’être sollicité quatre fois pour quatre informations.",
      },
      {
        q: 'Qui s’en charge ?',
        a: "C’est une tâche d’ouverture de dossier, qui se délègue entièrement : envoi du message, relance, création de la fiche et du dossier.",
      },
      {
        q: 'Faut-il l’adapter aux particuliers ?',
        a: "Oui : l’identité et la facturation se simplifient, et les règles de protection du consommateur et des données personnelles s’appliquent. Demandez seulement ce dont vous avez besoin.",
      },
    ],
    liens: [
      { href: '/guides/mentions-obligatoires-facture', label: 'Les mentions obligatoires d’une facture' },
      { href: '/guides/facturation-electronique-tpe', label: 'La facturation électronique pour une TPE' },
      { href: '/guides/arborescence-dossiers-entreprise', label: 'Bâtir une arborescence de dossiers' },
      { href: '/services/facturation', label: 'Confier sa facturation et ses relances' },
      { href: '/guides/collecter-des-pieces-aupres-de-ses-clients', label: 'Obtenir les pièces qui manquent encore' },
    ],
    sources: [
      { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F31808', label: 'Service-Public Entreprendre — Mentions obligatoires sur une facture' },
    ],
    cloture: 'Ce qu’on demande le premier jour n’a plus à être réclamé le jour de la facture.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'modèle',
      motCle: 'ouverture dossier client checklist',
      variantes: ['fiche client informations à demander', 'onboarding client administratif', 'création dossier nouveau client'],
      persona: 'Consultant, agence ou prestataire de services qui démarre avec un nouveau client',
      objectif: 'Fournir la liste des informations à réunir et le message à envoyer',
      difference: 'Centre l’ouverture sur les informations de facturation, cause réelle des premiers retards de paiement',
    },
  },
];
