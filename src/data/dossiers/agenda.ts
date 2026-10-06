/**
 * Dossier « Agenda, e-mails et réunions ».
 *
 * Des méthodes d'organisation personnelle du dirigeant. Aucune règle légale
 * n'est en jeu ici : les pages ne citent donc pas de source externe, sauf
 * lorsqu'elles renvoient à une fonction d'un outil.
 */
import type { Guide } from '../guides.ts';

const DATE = '2026-10-03';
const DOSSIER = 'agenda-emails-reunions';

export const agenda: Guide[] = [
  {
    slug: 'agenda-emails-reunions',
    type: 'pilier',
    dossier: DOSSIER,
    categorie: 'Dossier',
    nom: 'Agenda, e-mails, réunions : tenir son temps',
    title: 'Agenda, e-mails, réunions : tenir son temps de dirigeant · BrittAssist',
    description:
      "Messagerie, rendez-vous, réunions, absences : les quatre endroits où le temps d’un dirigeant se perd, et la règle qui remet de l’ordre dans chacun.",
    h1: 'Agenda, e-mails, réunions : reprendre la main sur son temps.',
    lede:
      "Le temps d’un dirigeant ne se perd pas dans les grandes décisions. Il se perd entre elles : dans une boîte de réception consultée quarante fois, des rendez-vous placés là où il restait un trou, des réunions sans ordre du jour. Quatre endroits, quatre règles.",
    reponseCourte: [
      "Le temps d’un dirigeant fuit par quatre endroits : la messagerie, la prise de rendez-vous, les réunions et les absences mal préparées.",
      "Chacun se règle par une décision simple : des horaires de relève, des créneaux protégés, un ordre du jour obligatoire, une délégation écrite avant de partir.",
      "Ces quatre domaines sont aussi ceux où un tiers aide le plus : ils demandent de la constance, pas d’expertise.",
    ],
    sections: [
      {
        h2: 'Les quatre fuites',
        blocs: [
          {
            tableau: {
              legende: 'Où le temps se perd, et la règle qui y répond',
              colonnes: ['Domaine', 'Le symptôme', 'La règle'],
              lignes: [
                ['Messagerie', 'Une boîte consultée en continu, qui sert de liste de tâches', 'Deux ou trois relèves par jour, et une boîte qui se vide'],
                ['Rendez-vous', 'Un agenda rempli par les autres', 'Des créneaux protégés, placés avant tout le reste'],
                ['Réunions', 'Une heure à huit, sans décision', 'Pas d’ordre du jour, pas de réunion'],
                ['Absences', 'Trois jours de congé, deux semaines de rattrapage', 'Une délégation écrite et un message d’absence utile'],
              ],
            },
          },
        ],
      },
      {
        h2: 'L’agenda dit la vérité',
        blocs: [
          {
            paragraphes: [
              "Vos priorités ne sont pas ce que vous déclarez, mais ce qui figure dans votre agenda. Si le travail de fond n’y a pas de créneau, il se fera le soir. La première règle est donc de placer d’abord ce qui compte — production, réflexion, repos — puis d’ouvrir le reste aux rendez-vous.",
              "Un agenda tenu par quelqu’un d’autre respecte mieux cette règle que le vôtre : il est plus facile de défendre le créneau d’un autre que le sien.",
            ],
          },
        ],
      },
      {
        h2: 'La messagerie n’est pas une liste de tâches',
        blocs: [
          {
            paragraphes: [
              "Une boîte de réception mélange tout : l’information, la demande, la relance, la publicité. La lire en continu revient à laisser les autres ordonner votre journée. La méthode tient en trois gestes : relever à heures fixes, décider pour chaque message, sortir les actions de la boîte.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qui se confie',
        blocs: [
          {
            liste: [
              "La prise, la confirmation et le report des rendez-vous.",
              "Le tri de la messagerie, les réponses de routine, la remontée de ce qui demande votre avis.",
              "La préparation des réunions : ordre du jour, pièces, logistique ; puis le compte rendu et le suivi des actions.",
              "La préparation des absences, et la tenue de la maison pendant qu’elles durent.",
            ],
          },
          {
            paragraphes: [
              "Ce qui reste chez vous : vos priorités, vos refus, et ce que vous dites en réunion.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Garder la messagerie ouverte en permanence « pour être réactif ».",
      "Accepter tout rendez-vous qui tombe dans un créneau libre.",
      "Sortir d’une réunion sans savoir qui fait quoi.",
    ],
    faq: [
      {
        q: 'Par où commencer ?',
        a: "Par l’agenda : placez trois créneaux protégés dans la semaine, et tenez-les un mois. C’est la décision qui change le plus de choses avec le moins d’effort.",
      },
      {
        q: 'Déléguer son agenda suppose-t-il d’ouvrir sa messagerie ?',
        a: "Non. L’agenda peut être délégué seul, avec un accès à votre calendrier. L’accès à la messagerie est une étape distincte, utile mais pas obligatoire.",
      },
      {
        q: 'Ces méthodes valent-elles pour un indépendant ?',
        a: "Oui, à plus forte raison : sans équipe pour filtrer, tout arrive directement chez vous.",
      },
    ],
    liens: [
      { href: '/services/gestion-agenda', label: 'Confier la tenue de son agenda' },
      { href: '/guides/tenir-un-agenda-de-dirigeant', label: 'Tenir un agenda de dirigeant' },
      { href: '/guides/organiser-sa-boite-mail-de-dirigeant', label: 'Organiser sa boîte mail' },
      { href: '/guides/preparer-une-reunion', label: 'Préparer une réunion' },
      { href: '/services/coordination', label: 'Faire coordonner ses interlocuteurs' },
    ],
    cloture: 'Votre agenda est la seule description fidèle de vos priorités.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'navigation',
      motCle: 'gestion du temps dirigeant agenda e-mails',
      variantes: ['organisation du dirigeant', 'gérer son agenda et ses e-mails', 'mieux organiser son temps chef d’entreprise'],
      persona: 'Dirigeant dont les journées sont dictées par les sollicitations',
      objectif: 'Nommer les quatre fuites et orienter vers la méthode de chacune',
      difference: 'Ramène le sujet à quatre décisions concrètes plutôt qu’à des conseils de productivité',
    },
  },

  {
    slug: 'organiser-sa-boite-mail-de-dirigeant',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Organiser sa boîte mail',
    title: 'Organiser sa boîte mail de dirigeant : la méthode · BrittAssist',
    description:
      "Relever à heures fixes, décider pour chaque message, sortir les actions de la boîte : une méthode en quatre décisions pour une messagerie qui se vide.",
    h1: 'Organiser sa boîte mail : quatre décisions, et une boîte qui se vide.',
    lede:
      "Une boîte de réception n’est pas faite pour stocker. Elle est faite pour recevoir, puis se vider. Quand elle garde trois cents messages « à traiter », elle ne dit plus rien : l’urgent s’y cache au milieu du reste.",
    reponseCourte: [
      "Chaque message appelle une décision parmi quatre : supprimer, déléguer, répondre tout de suite si cela prend deux minutes, ou planifier.",
      "La boîte se relève à heures fixes, deux ou trois fois par jour, pas en continu.",
      "Les actions sortent de la boîte : elles vont dans l’agenda ou dans une liste de suivi.",
      "Trois dossiers suffisent : à traiter, en attente de réponse, archives.",
    ],
    sections: [
      {
        h2: 'Les quatre décisions',
        blocs: [
          {
            tableau: {
              legende: 'Que faire de chaque message',
              colonnes: ['Décision', 'Quand', 'Ce que devient le message'],
              lignes: [
                ['Supprimer ou archiver', 'Information lue, publicité, copie pour information', 'Il quitte la boîte'],
                ['Déléguer', 'Quelqu’un d’autre peut répondre ou agir', 'Transféré avec une consigne, puis rangé dans « En attente »'],
                ['Répondre', 'La réponse prend moins de deux minutes', 'Réponse envoyée, message archivé'],
                ['Planifier', 'Il faut du temps ou une information', 'Créneau dans l’agenda, message rangé dans « À traiter »'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les réglages',
        blocs: [
          {
            etapes: [
              "Coupez les notifications : c’est vous qui allez à la boîte, pas l’inverse.",
              "Fixez vos relèves : par exemple en début de matinée, après le déjeuner, en fin de journée.",
              "Créez trois dossiers : À traiter, En attente, Archives. La recherche fait le reste.",
              "Créez des règles pour ce qui n’a pas besoin de vous : lettres d’information, notifications d’outils, copies automatiques.",
              "Désabonnez-vous de ce que vous supprimez sans lire depuis trois mois.",
            ],
          },
        ],
      },
      {
        h2: 'Le dossier « En attente »',
        blocs: [
          {
            paragraphes: [
              "C’est le dossier le plus utile et le moins utilisé. Il contient tout ce pour quoi vous attendez une réponse : une demande déléguée, un devis demandé, une question posée. Relu une fois par semaine, il devient votre liste de relances — et vous cessez de garder ces sujets en tête.",
            ],
          },
        ],
      },
      {
        h2: 'Vider une boîte qui déborde',
        blocs: [
          {
            liste: [
              "Déplacez tout ce qui a plus d’un mois dans un dossier « Ancien » : rien n’est perdu, tout reste cherchable.",
              "Triez le dernier mois selon les quatre décisions.",
              "Ne retournez dans « Ancien » que sur relance : ce qui comptait reviendra.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Marquer « non lu » pour s’en souvenir : au bout de dix, le signal ne veut plus rien dire.",
      "Créer trente dossiers par client et par projet, puis ne plus classer.",
      "Répondre immédiatement à tout : vous apprenez à vos correspondants qu’ils peuvent vous interrompre.",
    ],
    faq: [
      {
        q: 'Deux ou trois relèves par jour, est-ce réaliste ?',
        a: "Souvent, oui : peu de messages exigent une réponse dans l’heure. Pour ceux-là, prévoyez un autre canal — un appel — connu de vos proches collaborateurs.",
      },
      {
        q: 'Faut-il viser une boîte vide ?',
        a: "Une boîte de réception vide en fin de relève, oui : chaque message a reçu sa décision. Cela ne veut pas dire que tout est traité, mais que rien n’est en suspens sans que vous le sachiez.",
      },
      {
        q: 'Et si quelqu’un d’autre triait à ma place ?',
        a: "C’est l’étape suivante : un tiers applique les quatre décisions et ne vous remonte que ce qui demande votre avis. Elle suppose une délégation d’accès et des règles claires.",
      },
    ],
    liens: [
      { href: '/guides/deleguer-sa-boite-mail', label: 'Déléguer sa boîte mail' },
      { href: '/guides/reponses-types-emails', label: 'Constituer des réponses types' },
      { href: '/guides/traitement-du-courrier-entrant', label: 'Traiter le courrier entrant' },
      { href: '/services/coordination', label: 'Faire coordonner ses interlocuteurs' },
      { href: '/guides/boite-mail-partagee-entreprise', label: 'Organiser une adresse partagée à plusieurs' },
    ],
    cloture: 'Une boîte de réception se juge à ce qu’il n’y reste plus.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'organiser sa boîte mail',
      variantes: ['gérer ses e-mails efficacement', 'boîte de réception vide', 'trier ses mails professionnels'],
      persona: 'Dirigeant submergé par sa messagerie',
      objectif: 'Donner une méthode de tri et de relève applicable seul',
      difference: 'Quatre décisions et trois dossiers, avec le rôle central du dossier « En attente »',
    },
  },

  {
    slug: 'deleguer-sa-boite-mail',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Déléguer sa boîte mail',
    title: 'Déléguer sa boîte mail à une assistante : le cadre · BrittAssist',
    description:
      "Quels messages elle traite, lesquels vous remontent, comment elle répond en votre nom : le cadre à poser avant d’ouvrir sa messagerie à une assistante.",
    h1: 'Déléguer sa boîte mail : le cadre à poser avant d’ouvrir l’accès.',
    lede:
      "Ouvrir sa messagerie à quelqu’un est la délégation qui fait le plus hésiter, et celle qui libère le plus. L’hésitation est saine : elle oblige à dire ce qui est attendu. C’est ce cadre, plus que la technique, qui fait la réussite.",
    reponseCourte: [
      "Déléguer sa boîte mail, c’est confier le tri, les réponses de routine et le suivi, en gardant pour soi les messages qui demandent votre jugement.",
      "L’accès se donne par la délégation prévue par votre messagerie, jamais en communiquant votre mot de passe.",
      "Trois règles se fixent au départ : ce qui est traité sans vous, ce qui vous remonte, et au nom de qui les réponses partent.",
    ],
    sections: [
      {
        h2: 'Les trois catégories de messages',
        blocs: [
          {
            tableau: {
              legende: 'Répartition des messages dans une boîte déléguée',
              colonnes: ['Catégorie', 'Exemples', 'Traitement'],
              lignes: [
                ['Traité sans vous', 'Prises de rendez-vous, confirmations, demandes de pièces, relances de routine', 'Réponse directe, vous n’êtes pas sollicité'],
                ['Préparé pour vous', 'Demandes clients, propositions, questions de fond', 'Un brouillon ou un résumé vous est soumis'],
                ['Remonté tel quel', 'Juridique, bancaire, ressources humaines, personnel', 'Signalé sans être traité'],
              ],
            },
          },
          {
            paragraphes: [
              "La liste se construit ensemble, pendant les deux premières semaines, à partir des messages réels. Elle bouge : ce qui était « préparé pour vous » passe souvent en « traité sans vous » quand vos réponses sont devenues prévisibles.",
            ],
          },
        ],
      },
      {
        h2: 'Au nom de qui répondre',
        blocs: [
          {
            liste: [
              "En son nom propre, depuis votre boîte : « [Prénom], assistante de M. Martin ». C’est le plus transparent.",
              "Depuis une adresse dédiée, en copie de laquelle arrivent les demandes d’organisation.",
              "En votre nom : uniquement sur des brouillons que vous validez, ou des réponses types convenues.",
            ],
          },
          {
            paragraphes: [
              "La première option est en général la bonne. Vos correspondants savent à qui ils parlent, et prennent vite l’habitude de s’adresser directement à l’assistante pour l’organisation.",
            ],
          },
        ],
      },
      {
        h2: 'Le point quotidien',
        blocs: [
          {
            modele: {
              titre: 'Résumé de fin de journée',
              lignes: [
                "Traité : 14 messages (rendez-vous, confirmations, 2 relances de factures).",
                "À valider : 3 brouillons dans le dossier « À valider ».",
                "À décider : la demande de report de M. Leroy — deux options proposées.",
                "Signalé : un courrier de la banque, non ouvert, dans « Personnel ».",
              ],
            },
          },
          {
            paragraphes: [
              "Quatre lignes, à heure fixe. Vous n’ouvrez plus la boîte pour savoir : vous lisez le résumé, et vous n’allez voir que ce qui vous attend.",
            ],
          },
        ],
      },
      {
        h2: 'Les garde-fous',
        blocs: [
          {
            etapes: [
              "Utilisez la délégation de la messagerie : chacun garde son identifiant, et l’accès se retire en un clic.",
              "Écrivez la liste des sujets qui ne se lisent pas : dossiers ou expéditeurs exclus.",
              "Prévoyez la confidentialité au contrat.",
              "Commencez par deux semaines en lecture et brouillons, avant d’autoriser l’envoi.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Donner son mot de passe « pour aller plus vite ».",
      "Ouvrir l’accès sans dire ce qui est attendu, puis s’étonner d’une initiative.",
      "Continuer à tout lire soi-même en parallèle : vous faites alors le travail deux fois.",
    ],
    limites: [
      "La marche à suivre technique dépend de votre messagerie ; l’aide officielle de l’éditeur fait référence.",
    ],
    faq: [
      {
        q: 'Est-ce prudent du point de vue de la confidentialité ?',
        a: "Le risque se maîtrise par trois choses : un accès délégué et révocable, un engagement de confidentialité écrit, et une liste de ce qui n’est pas à lire. Votre messagerie contient des données personnelles de tiers : l’accès doit être prévu au contrat.",
      },
      {
        q: 'Mes correspondants seront-ils gênés ?',
        a: "L’expérience courante est inverse : ils obtiennent une réponse plus vite. Annoncez-le simplement, une fois, dans votre signature ou par un message.",
      },
      {
        q: 'Peut-on déléguer seulement une partie de la boîte ?',
        a: "Oui : en faisant arriver certaines demandes sur une adresse dédiée, ou en partageant seulement certains dossiers. C’est une bonne façon de commencer.",
      },
    ],
    liens: [
      { href: '/guides/delegation-d-acces-messagerie-et-agenda', label: 'La délégation d’accès à la messagerie et à l’agenda' },
      { href: '/guides/organiser-sa-boite-mail-de-dirigeant', label: 'Organiser sa boîte mail' },
      { href: '/guides/confidentialite-assistante-externalisee', label: 'Confidentialité et accès à distance' },
      { href: '/services/coordination', label: 'Faire coordonner ses interlocuteurs' },
      { href: '/guides/presenter-son-assistante-a-ses-clients', label: 'Annoncer son assistante à ses interlocuteurs' },
    ],
    cloture: 'Ouvrir sa boîte, c’est accepter que quelqu’un sache ce qui vous attend avant vous.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'déléguer sa boîte mail',
      variantes: ['faire gérer ses e-mails par une assistante', 'délégation de messagerie dirigeant', 'assistante gestion boîte mail'],
      persona: 'Dirigeant qui hésite à ouvrir sa messagerie',
      objectif: 'Poser le cadre : catégories de messages, identité de réponse, garde-fous',
      difference: 'Traite le cadre et la confiance avant la technique, avec un modèle de résumé quotidien',
    },
  },

  {
    slug: 'tenir-un-agenda-de-dirigeant',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Tenir un agenda de dirigeant',
    title: 'Tenir un agenda de dirigeant : sept règles · BrittAssist',
    description:
      "Créneaux protégés, marges entre les rendez-vous, temps de trajet, règles d’acceptation : sept règles pour un agenda qui sert vos priorités.",
    h1: 'Un agenda de dirigeant : sept règles pour qu’il vous serve.',
    lede:
      "Un agenda vide n’est pas un agenda disponible. C’est un agenda que les autres vont remplir. La différence entre une semaine subie et une semaine tenue se joue avant le premier rendez-vous : dans ce qu’on a placé d’abord.",
    reponseCourte: [
      "Placez d’abord les créneaux protégés — travail de fond, pilotage, vie personnelle — puis ouvrez le reste aux rendez-vous.",
      "Prévoyez une marge entre deux rendez-vous, et inscrivez les trajets comme des événements.",
      "Fixez des règles d’acceptation : quels jours, quelle durée par défaut, qui peut réserver sans vous consulter.",
      "Un agenda se relit chaque semaine : c’est là qu’on rattrape ce qui a dérapé.",
    ],
    sections: [
      {
        h2: 'Les sept règles',
        blocs: [
          {
            etapes: [
              "Les créneaux protégés d’abord : deux à quatre plages par semaine, récurrentes, non négociables sans votre accord.",
              "Des plages ouvertes aux rendez-vous : par exemple certaines demi-journées, toujours les mêmes.",
              "Une durée par défaut courte : trente minutes plutôt qu’une heure, quarante-cinq plutôt qu’une heure et demie.",
              "Une marge entre deux rendez-vous : le temps de conclure, de noter, de se déplacer.",
              "Les trajets inscrits : un rendez-vous à l’extérieur occupe aussi l’aller et le retour.",
              "Un code clair : ce qui est ferme, ce qui est une option, ce qui est personnel.",
              "Une revue hebdomadaire : la semaine qui vient, puis les trois suivantes.",
            ],
          },
        ],
      },
      {
        h2: 'Les règles d’acceptation',
        blocs: [
          {
            paragraphes: [
              "Ce sont elles qui permettent de confier l’agenda. Une assistante ne peut pas placer un rendez-vous si elle doit vous demander à chaque fois. Avec des règles, elle décide.",
            ],
            modele: {
              titre: 'Exemple de règles',
              lignes: [
                "Rendez-vous clients : mardi et jeudi, entre 9 h et 17 h, 45 minutes.",
                "Fournisseurs et prestataires : vendredi matin, 30 minutes, à distance par défaut.",
                "Jamais de rendez-vous le lundi matin ni après 18 h, sauf accord.",
                "Déjeuners : deux par semaine au plus.",
                "Demande de plus d’une heure, ou hors de ces plages : me consulter.",
              ],
            },
          },
        ],
      },
      {
        h2: 'Ce qu’un agenda doit contenir',
        blocs: [
          {
            liste: [
              "Pour chaque rendez-vous : l’objet, les participants, le lieu ou le lien, et le document utile.",
              "Les échéances importantes, comme des événements d’une journée.",
              "Les absences de vos proches collaborateurs.",
              "Les rappels de préparation : le dossier à lire la veille.",
            ],
          },
          {
            paragraphes: [
              "Un rendez-vous intitulé « Point » sans autre information est une demi-heure perdue à se demander pourquoi on est là.",
            ],
          },
        ],
      },
      {
        h2: 'La revue hebdomadaire',
        blocs: [
          {
            paragraphes: [
              "Dix minutes, à jour fixe. La semaine suivante : tout est-il confirmé, préparé, atteignable physiquement ? Les trois suivantes : y a-t-il un conflit, une semaine trop pleine, un créneau protégé grignoté ? C’est dans cette revue que se prennent les décisions de report, à froid.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Enchaîner les rendez-vous sans marge : le premier retard se propage à toute la journée.",
      "Protéger un créneau, puis le céder à la première demande.",
      "Tenir deux agendas, professionnel et personnel, qui s’ignorent.",
    ],
    faq: [
      {
        q: 'Combien de créneaux protégés faut-il ?',
        a: "Assez pour que votre travail de fond ne se fasse pas le soir. Commencez par deux demi-journées, et observez si elles tiennent.",
      },
      {
        q: 'Faut-il partager son agenda avec ses équipes ?',
        a: "La disponibilité, oui ; le détail, pas forcément. De nombreux calendriers permettent de montrer « occupé » sans montrer l’objet.",
      },
      {
        q: 'Que change une assistante dans la tenue de l’agenda ?',
        a: "Elle applique vos règles avec plus de constance que vous, parce qu’elle n’est pas prise par l’interlocuteur. Et elle fait le travail invisible : confirmer, préparer, replacer.",
      },
    ],
    liens: [
      { href: '/services/gestion-agenda', label: 'Confier la tenue de son agenda' },
      { href: '/guides/gerer-les-demandes-de-rendez-vous', label: 'Gérer les demandes de rendez-vous' },
      { href: '/guides/dossier-de-rendez-vous', label: 'Préparer un dossier de rendez-vous' },
      { href: '/guides/delegation-d-acces-messagerie-et-agenda', label: 'La délégation d’accès à l’agenda' },
    ],
    cloture: 'Ce que vous ne placez pas dans votre agenda, quelqu’un d’autre le remplira.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'gérer son agenda de dirigeant',
      variantes: ['organiser son agenda professionnel', 'créneaux protégés agenda', 'gestion d’agenda chef d’entreprise'],
      persona: 'Dirigeant dont l’agenda est rempli par les autres',
      objectif: 'Donner des règles de construction et d’acceptation',
      difference: 'Formalise les règles d’acceptation, condition pour confier l’agenda à un tiers',
    },
  },

  {
    slug: 'preparer-une-reunion',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Préparer une réunion',
    title: 'Préparer une réunion : objectif, ordre du jour, pièces · BrittAssist',
    description:
      "Une réunion utile se décide avant : un objectif en une phrase, un ordre du jour minuté, les bonnes personnes, les pièces envoyées la veille.",
    h1: 'Préparer une réunion : tout se joue avant qu’elle commence.',
    lede:
      "Une réunion ratée se reconnaît à sa première minute : quelqu’un demande « alors, on parle de quoi ? ». Elle n’a pas manqué d’animation. Elle a manqué de préparation.",
    reponseCourte: [
      "Une réunion se prépare en cinq points : l’objectif, les participants, l’ordre du jour, les pièces, la logistique.",
      "L’objectif tient en une phrase et se termine par un verbe : décider, valider, répartir, informer.",
      "L’ordre du jour est minuté, et envoyé avec les pièces au moins la veille.",
      "Si l’objectif peut être atteint par un message, il n’y a pas lieu de se réunir.",
    ],
    sections: [
      {
        h2: 'Les cinq points',
        blocs: [
          {
            etapes: [
              "L’objectif : « À la fin, nous aurons décidé de… ». S’il n’y en a pas, la réunion est une habitude.",
              "Les participants : ceux qui décident, ceux qui savent, ceux qui feront. Personne d’autre.",
              "L’ordre du jour : chaque point avec sa durée et son porteur.",
              "Les pièces : ce qu’il faut avoir lu, envoyé assez tôt pour être lu.",
              "La logistique : lieu ou lien, durée, matériel, et qui prend les notes.",
            ],
          },
        ],
      },
      {
        h2: 'L’ordre du jour',
        blocs: [
          {
            modele: {
              titre: 'Ordre du jour type — 45 minutes',
              lignes: [
                "Objectif : décider du prestataire pour la refonte du site.",
                "1. Rappel du besoin et du budget (5 min) — Marie",
                "2. Présentation des trois offres comparées (15 min) — Paul",
                "3. Questions et points de vigilance (10 min) — tous",
                "4. Décision (10 min) — direction",
                "5. Prochaines étapes : qui fait quoi, pour quand (5 min)",
                "À lire avant : le tableau comparatif joint.",
              ],
            },
          },
          {
            paragraphes: [
              "Le dernier point est le plus important et le premier sacrifié. Réservez-lui cinq minutes fermes : une décision sans responsable ni date n’en est pas une.",
            ],
          },
        ],
      },
      {
        h2: 'Faut-il vraiment se réunir ?',
        blocs: [
          {
            tableau: {
              legende: 'Réunion ou autre format',
              colonnes: ['Objectif', 'Format adapté'],
              lignes: [
                ['Informer', 'Un message écrit, lu quand chacun le peut'],
                ['Recueillir des avis', 'Un document partagé, commenté'],
                ['Décider à plusieurs', 'Une réunion courte, préparée'],
                ['Résoudre un désaccord', 'Une réunion, en petit comité'],
                ['Faire le point sur un projet', 'Un point court, à ordre du jour fixe'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Ce qui se délègue',
        blocs: [
          {
            paragraphes: [
              "Tout, sauf l’objectif. Trouver le créneau commun, réserver la salle ou créer le lien, relancer ceux qui n’ont pas répondu, rassembler et envoyer les pièces, préparer l’ordre du jour à partir de vos trois lignes : c’est un travail de coordination. Il vous reste à dire ce que vous voulez obtenir.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Inviter « au cas où » : chaque participant de trop ralentit la décision.",
      "Envoyer les pièces dix minutes avant.",
      "Garder une réunion récurrente dont plus personne ne sait à quoi elle sert.",
    ],
    faq: [
      {
        q: 'Quelle durée prévoir ?',
        a: "La plus courte qui permette d’atteindre l’objectif. Une réunion remplit toujours le temps qu’on lui donne.",
      },
      {
        q: 'Qui doit rédiger l’ordre du jour ?',
        a: "Celui qui convoque en fixe l’objectif ; la rédaction peut être déléguée. L’essentiel est qu’il parte à l’avance, avec les pièces.",
      },
      {
        q: 'Comment traiter les réunions récurrentes ?',
        a: "En les réexaminant une fois par trimestre : objectif toujours valable, participants toujours utiles, fréquence toujours justifiée ? Sinon, on supprime ou on espace.",
      },
    ],
    liens: [
      { href: '/guides/compte-rendu-de-reunion', label: 'Rédiger un compte rendu de réunion' },
      { href: '/guides/reunions-et-fuseaux-horaires', label: 'Réunions et fuseaux horaires' },
      { href: '/services/coordination', label: 'Faire coordonner ses interlocuteurs' },
      { href: '/services/gestion-agenda', label: 'Confier la tenue de son agenda' },
    ],
    cloture: 'Une réunion sans objectif écrit est une conversation à plusieurs, payée par l’entreprise.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'préparer une réunion',
      variantes: ['ordre du jour réunion modèle', 'comment préparer une réunion efficace', 'organiser une réunion de travail'],
      persona: 'Dirigeant ou manager qui convoque des réunions',
      objectif: 'Donner la préparation en cinq points et un ordre du jour type',
      difference: 'Fait de l’objectif en une phrase le filtre de la réunion, et dit ce qui se délègue',
    },
  },

  {
    slug: 'compte-rendu-de-reunion',
    type: 'modele',
    dossier: DOSSIER,
    categorie: 'Modèle',
    nom: 'Rédiger un compte rendu de réunion',
    title: 'Compte rendu de réunion : le modèle en trois blocs · BrittAssist',
    description:
      "Décisions, actions, points ouverts : un modèle de compte rendu d’une page, à envoyer dans les vingt-quatre heures, et la façon de le tenir.",
    h1: 'Le compte rendu de réunion : trois blocs, une page, vingt-quatre heures.',
    lede:
      "Personne ne relit un compte rendu qui raconte la réunion. On relit celui qui dit ce qui a été décidé, et par qui ce sera fait. Le reste est de la littérature.",
    reponseCourte: [
      "Un compte rendu utile tient en trois blocs : les décisions prises, les actions à mener avec responsable et échéance, les points restés ouverts.",
      "Il tient sur une page et part dans les vingt-quatre heures.",
      "Il ne résume pas les échanges : il enregistre ce qui en sort.",
    ],
    sections: [
      {
        h2: 'Le modèle',
        blocs: [
          {
            modele: {
              titre: 'Compte rendu — trame',
              lignes: [
                "Réunion : [objet] — [date] — Présents : [noms] — Excusés : [noms]",
                "DÉCISIONS",
                "1. [Décision, formulée en une phrase complète.]",
                "2. […]",
                "ACTIONS",
                "— [Action] · [Responsable] · [Échéance]",
                "— […]",
                "POINTS OUVERTS",
                "— [Question non tranchée] · à traiter par [qui] · d’ici [date ou prochaine réunion]",
                "Prochaine réunion : [date], si elle est nécessaire.",
              ],
            },
          },
        ],
      },
      {
        h2: 'Écrire une décision',
        blocs: [
          {
            paragraphes: [
              "Une décision se lit seule, sans avoir assisté à la réunion. « OK pour l’offre B » ne veut rien dire dans trois mois. « L’offre de la société B est retenue pour la refonte du site, pour un budget de [montant], démarrage en novembre » se comprend toujours.",
            ],
          },
        ],
      },
      {
        h2: 'Écrire une action',
        blocs: [
          {
            liste: [
              "Un verbe à l’infinitif : envoyer, valider, relancer, chiffrer.",
              "Un seul responsable, nommé. « L’équipe » ne fera rien.",
              "Une date, et non « rapidement ».",
              "Un résultat vérifiable : on doit pouvoir dire si c’est fait.",
            ],
          },
        ],
      },
      {
        h2: 'Le tenir pendant la réunion',
        blocs: [
          {
            etapes: [
              "Préparez la trame avant, avec l’ordre du jour.",
              "Notez les décisions et les actions au fil de l’eau, pas les propos.",
              "À la fin de chaque point, relisez à voix haute ce que vous avez noté.",
              "Avant de se quitter, relisez la liste des actions : c’est le moment où les responsables se déclarent.",
              "Envoyez le jour même ou le lendemain.",
            ],
          },
          {
            paragraphes: [
              "Le compte rendu sert ensuite d’ouverture à la réunion suivante : on commence par la liste des actions, ligne par ligne.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Rédiger un procès-verbal de trois pages que personne ne lira.",
      "Noter « à voir » sans responsable.",
      "Envoyer le compte rendu une semaine plus tard, quand chacun a sa propre version des décisions.",
    ],
    limites: [
      "Ce modèle vaut pour les réunions de travail. Les procès-verbaux d’assemblée ou d’instances obéissent à des règles propres, à voir avec vos conseils.",
    ],
    faq: [
      {
        q: 'Qui doit rédiger le compte rendu ?',
        a: "Quelqu’un qui n’anime pas : on ne peut pas mener une discussion et la noter. La prise de notes se délègue très bien, y compris à une personne à distance qui assiste en visioconférence.",
      },
      {
        q: 'Faut-il faire valider le compte rendu ?',
        a: "Une relecture par celui qui a convoqué suffit. Laissez vingt-quatre heures aux participants pour signaler une erreur, puis il fait foi.",
      },
      {
        q: 'Un outil de transcription automatique suffit-il ?',
        a: "Il produit un texte, pas des décisions. Il peut aider à ne rien oublier, mais le tri — ce qui a été décidé, par qui, pour quand — reste un travail humain, et la transcription pose la question de la confidentialité des échanges.",
      },
    ],
    liens: [
      { href: '/guides/preparer-une-reunion', label: 'Préparer une réunion' },
      { href: '/guides/suivi-demandes-assistante-externalisee', label: 'Suivre les demandes déléguées' },
      { href: '/guides/ia-generative-et-donnees-confidentielles', label: 'IA générative et données confidentielles' },
      { href: '/services/coordination', label: 'Faire coordonner ses interlocuteurs' },
    ],
    cloture: 'Un compte rendu ne raconte pas la réunion. Il dit ce qu’elle a changé.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'modèle',
      motCle: 'modèle compte rendu de réunion',
      variantes: ['compte rendu réunion exemple', 'rédiger un compte rendu', 'relevé de décisions modèle'],
      persona: 'Toute personne chargée de consigner une réunion',
      objectif: 'Fournir une trame courte et les règles d’écriture d’une décision et d’une action',
      difference: 'Trois blocs seulement, et la consigne de noter ce qui sort de la réunion, pas ce qui s’y dit',
    },
  },

  {
    slug: 'reponses-types-emails',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Constituer des réponses types',
    title: 'Réponses types par e-mail : constituer sa bibliothèque · BrittAssist',
    description:
      "Les dix messages que vous écrivez chaque semaine, rédigés une fois : comment constituer une bibliothèque de réponses types sans sonner faux.",
    h1: 'Les réponses types : écrire une fois ce qu’on écrit chaque semaine.',
    lede:
      "Comptez les messages que vous avez rédigés cette semaine. Beaucoup existaient déjà, à quelques mots près, dans vos messages envoyés du mois dernier. Une réponse type n’est pas une réponse automatique : c’est un bon premier jet, déjà écrit.",
    reponseCourte: [
      "Une bibliothèque de réponses types couvre les messages récurrents : accusé de réception, proposition de créneau, envoi de devis, relance, refus poli.",
      "Elle se constitue à partir de vos messages envoyés : vous ne partez pas d’une page blanche.",
      "Chaque réponse a une partie fixe et une partie à personnaliser, signalée entre crochets.",
      "Elle permet surtout à quelqu’un d’autre d’écrire comme vous.",
    ],
    sections: [
      {
        h2: 'Les dix réponses à écrire en premier',
        blocs: [
          {
            liste: [
              "Accusé de réception d’une demande, avec un délai de réponse.",
              "Proposition de deux créneaux de rendez-vous.",
              "Confirmation de rendez-vous, avec lieu ou lien.",
              "Envoi d’un devis.",
              "Relance d’un devis sans réponse.",
              "Envoi d’une facture.",
              "Relance d’une facture échue.",
              "Demande de pièces manquantes.",
              "Refus d’une sollicitation commerciale.",
              "Message d’absence.",
            ],
          },
        ],
      },
      {
        h2: 'Les constituer',
        blocs: [
          {
            etapes: [
              "Ouvrez vos messages envoyés des trois derniers mois.",
              "Repérez ceux que vous avez écrits plus de trois fois.",
              "Pour chacun, gardez la meilleure version et retirez ce qui est propre au destinataire.",
              "Marquez entre crochets ce qui doit être personnalisé.",
              "Rangez-les dans les modèles de votre messagerie ou dans un document partagé.",
            ],
          },
        ],
      },
      {
        h2: 'Trois exemples',
        blocs: [
          {
            modele: {
              titre: 'Accusé de réception',
              lignes: [
                "Bonjour [prénom],",
                "Votre message est bien arrivé. Je reviens vers vous d’ici [jour] avec [la réponse / le devis / une proposition].",
                "Bien cordialement,",
              ],
            },
          },
          {
            modele: {
              titre: 'Proposition de créneaux',
              lignes: [
                "Bonjour [prénom],",
                "Avec plaisir. Je vous propose [jour] à [heure] ou [jour] à [heure], [au téléphone / en visioconférence / à nos bureaux].",
                "Si aucun de ces créneaux ne convient, indiquez-moi vos disponibilités de la semaine.",
                "Bien cordialement,",
              ],
            },
          },
          {
            modele: {
              titre: 'Refus d’une sollicitation',
              lignes: [
                "Bonjour,",
                "Merci pour votre message. Ce sujet n’est pas d’actualité pour nous ; je ne donnerai donc pas suite.",
                "Bonne continuation,",
              ],
            },
          },
        ],
      },
      {
        h2: 'Ne pas sonner faux',
        blocs: [
          {
            paragraphes: [
              "Une réponse type se trahit par deux choses : un ton qui n’est pas le vôtre, et l’absence de tout détail propre au destinataire. Le remède est simple. Écrivez les modèles avec vos mots, pas avec ceux d’un manuel, et obligez-vous à une phrase personnelle par message. Dix secondes suffisent, et la réponse redevient la vôtre.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Envoyer un modèle avec ses crochets.",
      "Empiler cinquante modèles : au-delà de quinze, plus personne ne cherche.",
      "Laisser les modèles vieillir : un tarif, un nom, une adresse qui ont changé.",
    ],
    faq: [
      {
        q: 'Où ranger ses réponses types ?',
        a: "Dans la fonction de modèles de votre messagerie si vous êtes seul à les utiliser ; dans un document partagé si une autre personne répond en votre nom.",
      },
      {
        q: 'En quoi cela aide-t-il à déléguer ?',
        a: "Une assistante qui dispose de vos formulations répond dans votre ton dès la première semaine. Sans elles, elle devine ; avec elles, elle sait.",
      },
      {
        q: 'Faut-il automatiser l’envoi ?',
        a: "Seulement l’accusé de réception et le message d’absence. Tout le reste gagne à être relu par une personne avant de partir.",
      },
    ],
    liens: [
      { href: '/guides/organiser-sa-boite-mail-de-dirigeant', label: 'Organiser sa boîte mail' },
      { href: '/guides/deleguer-sa-boite-mail', label: 'Déléguer sa boîte mail' },
      { href: '/guides/relancer-une-facture-impayee', label: 'Relancer une facture impayée' },
      { href: '/services/coordination', label: 'Faire coordonner ses interlocuteurs' },
    ],
    cloture: 'Ce que vous écrivez pour la quatrième fois mérite d’avoir été écrit une bonne fois.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'réponses types e-mail professionnel',
      variantes: ['modèles de mails professionnels', 'bibliothèque de réponses e-mail', 'mail type accusé de réception'],
      persona: 'Dirigeant ou indépendant qui réécrit les mêmes messages',
      objectif: 'Faire constituer une bibliothèque à partir des messages déjà envoyés',
      difference: 'Part des messages envoyés, limite la bibliothèque, et traite le risque de sonner faux',
    },
  },

  {
    slug: 'gerer-les-demandes-de-rendez-vous',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Gérer les demandes de rendez-vous',
    title: 'Demandes de rendez-vous : finir les allers-retours · BrittAssist',
    description:
      "Proposer deux créneaux, confirmer, rappeler, gérer les reports et les absences : un circuit de prise de rendez-vous qui tient en trois messages.",
    h1: 'Les demandes de rendez-vous : trois messages, pas douze.',
    lede:
      "« Quelles sont vos disponibilités ? » est la question qui coûte le plus cher en e-mails. Elle ouvre un échange de six messages pour fixer une demi-heure. Il suffit pourtant de répondre autrement.",
    reponseCourte: [
      "Proposez toujours deux ou trois créneaux précis, plutôt que de demander des disponibilités.",
      "Un rendez-vous est fixé en trois messages : la proposition, l’accord, la confirmation avec les informations pratiques.",
      "Confirmez la veille les rendez-vous importants : c’est ce qui réduit les absences.",
      "Un lien de réservation en ligne convient aux rendez-vous standardisés, moins aux interlocuteurs que vous voulez soigner.",
    ],
    sections: [
      {
        h2: 'Le circuit',
        blocs: [
          {
            etapes: [
              "La demande arrive : qualifiez-la — objet, durée nécessaire, format, urgence.",
              "Proposez deux ou trois créneaux, pris dans vos plages ouvertes, et bloquez-les provisoirement.",
              "À l’accord, libérez les créneaux non retenus et envoyez l’invitation.",
              "L’invitation contient tout : objet, lieu ou lien, durée, participants, document à lire.",
              "La veille, confirmez les rendez-vous qui le méritent.",
              "Après un report, replacez immédiatement : un rendez-vous « à refixer » ne se refixe jamais.",
            ],
          },
        ],
      },
      {
        h2: 'Créneaux proposés ou lien de réservation ?',
        blocs: [
          {
            tableau: {
              legende: 'Deux façons de fixer un rendez-vous',
              colonnes: ['Méthode', 'Elle convient pour', 'Sa limite'],
              lignes: [
                ['Deux ou trois créneaux proposés', 'Clients, partenaires, interlocuteurs à soigner', 'Demande un geste à chaque fois'],
                ['Lien de réservation en ligne', 'Rendez-vous de découverte, entretiens en série, support', 'Impersonnel ; expose vos plages'],
                ['Assistante qui coordonne', 'Réunions à plusieurs, agendas contraints', 'Suppose un accès à votre agenda'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les rendez-vous à plusieurs',
        blocs: [
          {
            paragraphes: [
              "À partir de trois agendas, l’e-mail ne suffit plus. Deux solutions : un sondage de dates, avec une échéance de réponse et une décision prise à la majorité ; ou un tiers qui appelle les agendas les plus contraints d’abord, puis propose aux autres. La seconde est plus rapide dès qu’un participant est difficile à joindre.",
            ],
          },
        ],
      },
      {
        h2: 'Les absences et les retards',
        blocs: [
          {
            liste: [
              "Confirmez la veille, par un message court, avec l’adresse ou le lien.",
              "Pour un déplacement, vérifiez le matin même que le rendez-vous tient.",
              "Notez les absences répétées : elles justifient de changer de format, ou d’interlocuteur.",
              "Prévoyez ce que vous ferez du créneau si le rendez-vous saute.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Répondre « quand vous voulez » : vous venez d’offrir toute votre semaine.",
      "Fixer un rendez-vous sans envoyer d’invitation.",
      "Proposer des créneaux sans les bloquer, et les donner à deux personnes.",
    ],
    faq: [
      {
        q: 'Combien de créneaux proposer ?',
        a: "Deux ou trois, sur deux jours différents. Un seul paraît rigide ; cinq obligent l’autre à choisir à votre place.",
      },
      {
        q: 'Un outil de réservation est-il nécessaire ?',
        a: "Non. Il est utile quand les demandes sont nombreuses et semblables. Pour une dizaine de rendez-vous par semaine, la proposition de créneaux reste plus soignée.",
      },
      {
        q: 'Qui confirme les rendez-vous ?',
        a: "C’est une tâche type de gestion d’agenda : elle revient chaque jour, ne demande aucune décision, et se délègue entièrement.",
      },
    ],
    liens: [
      { href: '/services/gestion-agenda', label: 'Confier la tenue de son agenda' },
      { href: '/guides/tenir-un-agenda-de-dirigeant', label: 'Tenir un agenda de dirigeant' },
      { href: '/guides/reponses-types-emails', label: 'Constituer des réponses types' },
      { href: '/guides/reunions-et-fuseaux-horaires', label: 'Réunions et fuseaux horaires' },
      { href: '/guides/coordonner-des-entretiens-de-recrutement', label: 'Le cas des entretiens de recrutement' },
    ],
    cloture: 'Proposer deux dates, c’est déjà avoir fixé le rendez-vous.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'gérer les demandes de rendez-vous',
      variantes: ['prise de rendez-vous professionnelle', 'proposer un créneau de rendez-vous', 'organiser ses rendez-vous clients'],
      persona: 'Dirigeant ou indépendant qui fixe lui-même ses rendez-vous',
      objectif: 'Réduire les allers-retours et les absences',
      difference: 'Un circuit en trois messages, et un arbitrage honnête entre créneaux proposés et lien de réservation',
    },
  },

  {
    slug: 'preparer-son-absence',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Préparer son absence',
    title: 'Préparer ses congés de dirigeant : la checklist · BrittAssist',
    description:
      "Qui décide de quoi, quelles urgences vous dérangent, quel message d’absence : la préparation qui permet à un dirigeant de vraiment partir.",
    h1: 'Préparer son absence : partir sans emporter l’entreprise.',
    lede:
      "Un dirigeant ne part pas en vacances : il déplace son bureau au bord de l’eau. Ce n’est pas une fatalité. C’est l’effet d’une absence qu’on n’a pas préparée, où personne ne sait ce qu’il peut décider seul.",
    reponseCourte: [
      "Une absence se prépare deux semaines avant, en quatre points : les sujets en cours, les délégations, la définition d’une urgence, le message d’absence.",
      "La délégation s’écrit : qui décide de quoi, jusqu’à quel montant, et qui appeler.",
      "Définir ce qu’est une urgence est ce qui vous protège : tout le reste attend votre retour.",
      "Le retour se prépare aussi : une note de synthèse vaut mieux que quatre cents messages.",
    ],
    sections: [
      {
        h2: 'Deux semaines avant',
        blocs: [
          {
            etapes: [
              "Listez les sujets en cours et leur prochaine étape : lesquels peuvent avancer sans vous, lesquels attendent.",
              "Avancez ce qui doit l’être : signatures, validations, paiements qui tombent pendant l’absence.",
              "Prévenez vos principaux interlocuteurs, avec vos dates et le nom de votre relais.",
              "Écrivez la délégation.",
              "Décidez de votre règle de connexion : jamais, ou un créneau fixe et court.",
            ],
          },
        ],
      },
      {
        h2: 'La délégation écrite',
        blocs: [
          {
            modele: {
              titre: 'Note de délégation — trame',
              lignes: [
                "Absence du [date] au [date]. Retour au bureau le [date].",
                "Relais opérationnel : [nom] — décide de [périmètre], jusqu’à [montant].",
                "Relais administratif : [nom] — traite le courrier, les factures, l’agenda.",
                "Ce qui attend mon retour : [liste].",
                "Ce qui justifie de m’appeler : [liste courte].",
                "Comment me joindre en cas d’urgence : [moyen], de préférence entre [heure] et [heure].",
              ],
            },
          },
        ],
      },
      {
        h2: 'Définir l’urgence',
        blocs: [
          {
            paragraphes: [
              "Sans définition, tout devient urgent pour celui qui hésite. Une liste courte lève le doute.",
            ],
            liste: [
              "Un accident, un sinistre, un incident grave touchant une personne ou les locaux.",
              "Un client majeur qui menace de partir.",
              "Un courrier d’huissier, d’avocat ou de l’administration assorti d’un délai court.",
              "Un problème de trésorerie immédiat.",
            ],
          },
          {
            paragraphes: [
              "Tout le reste est noté et vous attend.",
            ],
          },
        ],
      },
      {
        h2: 'Le message d’absence',
        blocs: [
          {
            modele: {
              titre: 'Message d’absence utile',
              lignes: [
                "Bonjour,",
                "Je suis absent jusqu’au [date] et ne consulte pas ma messagerie.",
                "Pour une question d’organisation ou un rendez-vous : [nom], [adresse].",
                "Pour un sujet urgent concernant [activité] : [nom], [téléphone].",
                "Je répondrai aux autres messages à partir du [date].",
              ],
            },
          },
        ],
      },
      {
        h2: 'Le retour',
        blocs: [
          {
            paragraphes: [
              "Demandez une note de synthèse pour le matin de votre retour : ce qui a été réglé, ce qui vous attend, classé par priorité. Bloquez cette première matinée : ne prenez aucun rendez-vous. Avec une messagerie triée pendant votre absence, le retour se fait en une demi-journée au lieu de trois.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Écrire « accès limité à mes e-mails » : chacun comprend que vous les lisez.",
      "Partir sans dire qui décide.",
      "Reprendre par une journée de rendez-vous.",
    ],
    faq: [
      {
        q: 'Et si je n’ai personne à qui déléguer ?',
        a: "C’est la situation de beaucoup d’indépendants. Une assistante externalisée peut tenir le relais administratif : trier la messagerie, répondre aux demandes de routine, noter le reste, et ne vous appeler que sur les cas convenus.",
      },
      {
        q: 'Faut-il prévenir ses clients ?',
        a: "Les principaux, oui, une à deux semaines avant. Ils préfèrent un délai annoncé à un silence inexpliqué.",
      },
      {
        q: 'Peut-on vraiment ne pas se connecter ?',
        a: "Oui, si l’urgence est définie et si quelqu’un trie pour vous. Sinon, choisissez un créneau fixe et court, plutôt qu’une consultation diffuse toute la journée.",
      },
    ],
    liens: [
      { href: '/guides/deleguer-sa-boite-mail', label: 'Déléguer sa boîte mail' },
      { href: '/guides/modele-note-de-passation', label: 'Modèle de note de passation' },
      { href: '/guides/niveaux-d-autonomie-delegation', label: 'Les niveaux d’autonomie' },
      { href: '/services/gestion-agenda', label: 'Confier la tenue de son agenda' },
      { href: '/guides/dirigeant-indisponible-du-jour-au-lendemain', label: 'Quand l’absence n’était pas prévue' },
      { href: '/guides/annonce-de-repondeur-professionnel', label: 'Le texte de l’annonce de répondeur' },
    ],
    cloture: 'On ne se repose pas d’une entreprise qu’on a emportée avec soi.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'préparer ses congés dirigeant',
      variantes: ['partir en vacances chef d’entreprise', 'message d’absence professionnel', 'délégation pendant les congés'],
      persona: 'Dirigeant ou indépendant qui ne décroche jamais',
      objectif: 'Donner la préparation, la note de délégation et le message d’absence',
      difference: 'Définit l’urgence par une liste fermée, et prépare aussi le retour',
    },
  },

  {
    slug: 'filtrer-les-appels-et-messages',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Filtrer les appels et les messages',
    title: 'Filtrer appels et sollicitations : qui passe, qui attend · BrittAssist',
    description:
      "Trois listes — qui passe toujours, qui est orienté, qui est écarté — pour qu’un dirigeant cesse d’être interrompu sans devenir injoignable.",
    h1: 'Filtrer les appels et les sollicitations, sans devenir injoignable.',
    lede:
      "Être joignable par tous, tout le temps, n’est pas de la disponibilité. C’est l’impossibilité de finir quoi que ce soit. Filtrer ne veut pas dire fermer la porte : cela veut dire décider qui entre, par où, et quand.",
    reponseCourte: [
      "Un filtrage repose sur trois listes : ceux qui passent toujours, ceux qui sont orientés vers quelqu’un d’autre, ceux qui sont écartés poliment.",
      "Chaque sollicitation reçoit une réponse, même quand ce n’est pas vous qui la donnez.",
      "Le filtrage s’applique aux appels comme aux messages, aux visiteurs et aux demandes sur les réseaux professionnels.",
    ],
    sections: [
      {
        h2: 'Les trois listes',
        blocs: [
          {
            tableau: {
              legende: 'Qui passe, qui est orienté, qui est écarté',
              colonnes: ['Liste', 'Qui', 'Traitement'],
              lignes: [
                ['Passe toujours', 'Famille, associés, quelques clients clés, banque, conseils', 'Transmis tout de suite, ou rappel dans l’heure'],
                ['Est orienté', 'Clients sur une question opérationnelle, fournisseurs, candidats', 'Dirigé vers la bonne personne, avec le contexte'],
                ['Prend rendez-vous', 'Partenaires, prospects, demandes de fond', 'Un créneau est proposé'],
                ['Est écarté', 'Démarchage, sollicitations sans rapport', 'Refus courtois, sans rappel'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les questions de qualification',
        blocs: [
          {
            modele: {
              titre: 'Trois questions, toujours les mêmes',
              lignes: [
                "« C’est à quel sujet ? »",
                "« Est-ce lié à un dossier en cours avec nous ? »",
                "« Pour quand avez-vous besoin d’une réponse ? »",
              ],
            },
          },
          {
            paragraphes: [
              "Ces trois réponses suffisent à classer la demande et à la transmettre avec ce qu’il faut. Un message transmis sans objet ni échéance oblige à rappeler pour demander.",
            ],
          },
        ],
      },
      {
        h2: 'Transmettre un message',
        blocs: [
          {
            liste: [
              "Qui : nom, société, numéro.",
              "Quoi : l’objet, en une phrase.",
              "Pour quand : l’échéance exprimée.",
              "Ce qui a été dit : « je lui ai indiqué que vous le rappelleriez demain matin ».",
            ],
          },
          {
            paragraphes: [
              "La dernière ligne est essentielle : vous savez ce qui a été promis en votre nom.",
            ],
          },
        ],
      },
      {
        h2: 'Les plages de rappel',
        blocs: [
          {
            paragraphes: [
              "Le filtrage ne tient que si les rappels sont faits. Réservez deux plages par jour pour rappeler, et tenez-les : un interlocuteur à qui l’on a dit « il vous rappelle cet après-midi » accepte très bien de ne pas vous avoir eu tout de suite. Il n’accepte pas d’être oublié.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Filtrer sans rappeler : la barrière devient un mur.",
      "Donner son numéro direct à tout le monde, puis s’en plaindre.",
      "Laisser la liste « passe toujours » grossir jusqu’à contenir tout le monde.",
    ],
    limites: [
      "La permanence téléphonique en continu est un métier distinct, celui du télésecrétariat. Une assistante externalisée ne remplace pas un standard.",
    ],
    faq: [
      {
        q: 'Une assistante externalisée peut-elle prendre mes appels ?',
        a: "Pas comme un standard. Le périmètre d’un Private Office couvre la coordination et le traitement des demandes, non la permanence téléphonique. Pour celle-ci, un télésecrétariat est la bonne réponse ; les deux peuvent se compléter.",
      },
      {
        q: 'Comment filtrer quand on est seul ?',
        a: "Par les outils : messagerie vocale avec une annonce claire, deux plages de rappel, et un numéro réservé aux proches. Le principe est le même, appliqué par vous.",
      },
      {
        q: 'Le filtrage ne fait-il pas mauvaise impression ?',
        a: "Ce qui fait mauvaise impression, c’est l’absence de réponse. Une demande reçue, qualifiée et suivie d’un rappel à l’heure dite laisse une meilleure image qu’un dirigeant qui décroche en étant ailleurs.",
      },
    ],
    liens: [
      { href: '/guides/secretariat-externalise', label: 'Le secrétariat externalisé : cinq formes' },
      { href: '/guides/dirigeant-goulot-d-etranglement', label: 'Quand tout passe par le dirigeant' },
      { href: '/guides/tenir-un-agenda-de-dirigeant', label: 'Tenir un agenda de dirigeant' },
      { href: '/services/coordination', label: 'Faire coordonner ses interlocuteurs' },
      { href: '/guides/appels-manques-entreprise', label: 'Les appels auxquels on n’a pas répondu' },
      { href: '/guides/telesecretariat-et-assistante-externalisee', label: 'Faire travailler ensemble télésecrétariat et assistante' },
    ],
    cloture: 'Filtrer, ce n’est pas refuser de répondre. C’est choisir quand.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'filtrer les appels du dirigeant',
      variantes: ['filtrage téléphonique', 'gérer les sollicitations dirigeant', 'limiter les interruptions au travail'],
      persona: 'Dirigeant interrompu en permanence',
      objectif: 'Donner une règle de filtrage en trois listes et un format de transmission',
      difference: 'Dit ce qu’un Private Office ne fait pas — la permanence téléphonique — et vers quoi se tourner',
    },
  },

  {
    slug: 'dossier-de-rendez-vous',
    type: 'modele',
    dossier: DOSSIER,
    categorie: 'Modèle',
    nom: 'Préparer un dossier de rendez-vous',
    title: 'Dossier de rendez-vous : la note d’une page à lire avant · BrittAssist',
    description:
      "Qui, pourquoi, où en est-on, que veut-on obtenir : la note d’une page qui permet d’arriver préparé à un rendez-vous, en cinq minutes de lecture.",
    h1: 'Le dossier de rendez-vous : une page, lue en cinq minutes.',
    lede:
      "Vous connaissez ce moment : dans l’ascenseur, à chercher dans vos messages ce qui avait été dit la dernière fois. Un rendez-vous important mérite mieux que la mémoire d’un trajet.",
    reponseCourte: [
      "Un dossier de rendez-vous est une note d’une page, prête la veille, qui répond à cinq questions : qui, pourquoi, où en est-on, que veut-on obtenir, quoi emporter.",
      "Il se prépare à partir de ce qui existe : échanges précédents, compte rendu, documents en cours.",
      "Il se termine par l’objectif du rendez-vous, en une phrase.",
    ],
    sections: [
      {
        h2: 'La trame',
        blocs: [
          {
            modele: {
              titre: 'Note de rendez-vous — une page',
              lignes: [
                "RENDEZ-VOUS : [nom, fonction, société] — [date, heure, lieu ou lien] — durée prévue",
                "QUI : son rôle, depuis quand vous êtes en relation, qui d’autre sera présent.",
                "POURQUOI : ce qui a déclenché le rendez-vous, et qui l’a demandé.",
                "OÙ EN EST-ON : dernier échange, engagements pris de part et d’autre, points en suspens.",
                "CHIFFRES UTILES : commande en cours, facture due, proposition en attente.",
                "OBJECTIF : ce que vous voulez avoir obtenu en sortant.",
                "À EMPORTER : documents, échantillons, contrat à signer.",
                "PRATIQUE : adresse, accès, stationnement, contact sur place.",
              ],
            },
          },
        ],
      },
      {
        h2: 'Où trouver l’information',
        blocs: [
          {
            liste: [
              "Les derniers e-mails échangés : ils disent où l’on en est.",
              "Le compte rendu du précédent rendez-vous, s’il existe.",
              "Le suivi commercial ou la facturation : ce qui est en cours, ce qui est dû.",
              "Le site ou le profil professionnel de l’interlocuteur, pour une première rencontre.",
            ],
          },
          {
            paragraphes: [
              "Rien de tout cela n’exige votre jugement : c’est un travail de collecte et de synthèse. Votre part se limite à l’objectif.",
            ],
          },
        ],
      },
      {
        h2: 'Pour quels rendez-vous',
        blocs: [
          {
            tableau: {
              legende: 'Niveau de préparation selon le rendez-vous',
              colonnes: ['Rendez-vous', 'Préparation'],
              lignes: [
                ['Premier contact avec un prospect', 'Note complète'],
                ['Client important, renouvellement, négociation', 'Note complète, avec chiffres'],
                ['Banque, investisseur, administration', 'Note complète et pièces vérifiées'],
                ['Point régulier avec un interlocuteur connu', 'Trois lignes : dernier échange, points ouverts, objectif'],
                ['Réunion interne', 'L’ordre du jour suffit'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Après le rendez-vous',
        blocs: [
          {
            paragraphes: [
              "La même page sert à la suite. Dictez ou écrivez trois lignes en sortant : ce qui a été dit, ce que chacun doit faire, la prochaine date. Ces trois lignes déclenchent les actions, et deviennent le « où en est-on » du prochain dossier.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Préparer dix pages : elles ne seront pas lues.",
      "Oublier la partie pratique, et arriver en retard faute d’avoir trouvé l’entrée.",
      "Ne rien noter en sortant.",
    ],
    faq: [
      {
        q: 'Quand la note doit-elle être prête ?',
        a: "La veille en fin de journée, dans l’invitation de l’agenda ou à l’endroit où vous la lirez réellement : le plus souvent, votre téléphone.",
      },
      {
        q: 'Qui la rédige ?',
        a: "Une assistante qui a accès à vos échanges et à votre suivi peut la préparer entièrement. Vous ajoutez l’objectif, ou vous le lui dictez en une phrase.",
      },
      {
        q: 'Est-ce utile pour un rendez-vous à distance ?',
        a: "Autant qu’en présentiel. Seule la partie pratique change : le lien, et la vérification qu’il fonctionne.",
      },
    ],
    liens: [
      { href: '/guides/tenir-un-agenda-de-dirigeant', label: 'Tenir un agenda de dirigeant' },
      { href: '/guides/compte-rendu-de-reunion', label: 'Rédiger un compte rendu de réunion' },
      { href: '/services/recherches', label: 'Déléguer ses recherches' },
      { href: '/services/gestion-agenda', label: 'Confier la tenue de son agenda' },
      { href: '/guides/modele-note-d-aide-a-la-decision', label: 'La note d’aide à la décision, autre format d’une page' },
      { href: '/guides/tenir-son-fichier-clients-a-jour', label: 'Mettre le fichier clients à jour après le rendez-vous' },
    ],
    cloture: 'Cinq minutes de lecture la veille valent mieux que vingt minutes d’improvisation sur place.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'modèle',
      motCle: 'préparer un rendez-vous professionnel',
      variantes: ['fiche de préparation rendez-vous client', 'note de briefing rendez-vous', 'préparer un rendez-vous commercial'],
      persona: 'Dirigeant qui enchaîne les rendez-vous sans temps de préparation',
      objectif: 'Fournir une trame d’une page et dire où trouver l’information',
      difference: 'Une seule page, graduée selon l’enjeu, réutilisée pour le suivi',
    },
  },

  {
    slug: 'reunions-et-fuseaux-horaires',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Réunions et fuseaux horaires',
    title: 'Réunions internationales : gérer les fuseaux horaires · BrittAssist',
    description:
      "Écrire l’heure dans les deux fuseaux, repérer les changements d’heure, trouver le créneau commun : les règles pour ne plus se tromper d’une heure.",
    h1: 'Planifier avec plusieurs fuseaux horaires, sans se tromper d’une heure.',
    lede:
      "Une réunion manquée d’une heure avec un interlocuteur étranger a souvent la même cause : chacun a lu « 15 h » dans son propre fuseau. L’erreur coûte un rendez-vous, parfois davantage. Elle s’évite par trois habitudes.",
    reponseCourte: [
      "Écrivez toujours l’heure dans les deux fuseaux, avec le nom de la ville : « 15 h Paris / 9 h New York ».",
      "Envoyez une invitation de calendrier : elle convertit l’heure pour chaque participant.",
      "Vérifiez les dates de changement d’heure : elles ne sont pas les mêmes partout, et certains pays n’en ont pas.",
      "Le créneau commun entre l’Europe et l’Amérique du Nord se situe l’après-midi, heure de Paris ; avec l’Asie, le matin.",
    ],
    sections: [
      {
        h2: 'Les trois habitudes',
        blocs: [
          {
            etapes: [
              "Dans le message, donnez l’heure pour chaque partie, avec une ville de référence plutôt qu’un sigle.",
              "Doublez toujours le message d’une invitation de calendrier.",
              "La veille, relisez l’heure telle qu’elle apparaît dans votre agenda, pas telle que vous vous en souvenez.",
            ],
          },
        ],
      },
      {
        h2: 'Le piège du changement d’heure',
        blocs: [
          {
            paragraphes: [
              "L’écart entre deux pays n’est pas constant toute l’année. L’Union européenne et l’Amérique du Nord ne changent pas d’heure aux mêmes dates : pendant quelques semaines, au printemps et à l’automne, l’écart habituel se réduit ou s’allonge d’une heure. De nombreux pays ne pratiquent aucun changement d’heure. Et dans l’hémisphère sud, les saisons sont inversées.",
              "Une réunion récurrente fixée en hiver peut donc se décaler au printemps. La parade : fixer la récurrence dans le fuseau de celui qui l’organise, et revérifier aux périodes de changement.",
            ],
          },
        ],
      },
      {
        h2: 'Trouver le créneau commun',
        blocs: [
          {
            tableau: {
              legende: 'Fenêtres de recouvrement depuis la France, à titre indicatif',
              colonnes: ['Zone de l’interlocuteur', 'Fenêtre confortable, heure de Paris', 'Remarque'],
              lignes: [
                ['Royaume-Uni, Portugal', 'Toute la journée', 'Une heure d’écart'],
                ['Côte est de l’Amérique du Nord', 'L’après-midi', 'Leur matinée'],
                ['Côte ouest de l’Amérique du Nord', 'La fin d’après-midi et le début de soirée', 'Fenêtre étroite'],
                ['Golfe, Inde', 'La matinée', 'Leur après-midi'],
                ['Asie de l’Est, Australie', 'Tôt le matin', 'Leur fin de journée'],
              ],
            },
          },
          {
            paragraphes: [
              "Les heures exactes varient selon la saison : vérifiez toujours avec un convertisseur ou votre calendrier avant de proposer.",
            ],
          },
        ],
      },
      {
        h2: 'Les égards',
        blocs: [
          {
            liste: [
              "Alternez l’inconfort : ce n’est pas toujours au même de se lever tôt.",
              "Vérifiez les jours fériés et les jours de repos hebdomadaire, qui diffèrent selon les pays.",
              "Indiquez la durée : « 30 minutes » engage moins qu’un créneau ouvert.",
              "Prévoyez un canal de secours si le lien ne fonctionne pas.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Écrire « 15 h » sans préciser de quel fuseau.",
      "Utiliser un sigle de fuseau ambigu, que votre interlocuteur ne lit pas comme vous.",
      "Oublier qu’une réunion récurrente se décale aux changements d’heure.",
    ],
    faq: [
      {
        q: 'Faut-il écrire l’heure au format 24 heures ?',
        a: "Entre francophones, oui. Avec un interlocuteur anglophone, précisez « am » ou « pm », ou écrivez les deux formats : « 15:00 / 3 pm ».",
      },
      {
        q: 'Quel outil utiliser pour convertir ?',
        a: "Votre calendrier suffit : beaucoup permettent d’afficher un second fuseau. Un convertisseur en ligne sert à vérifier une date précise.",
      },
      {
        q: 'Qui gère cela dans un Private Office ?',
        a: "L’assistante. Le site de BrittAssist le dit ainsi : les fuseaux horaires font partie des sujets pris en charge, pas des contraintes que vous avez à gérer.",
      },
    ],
    liens: [
      { href: '/services/assistanat-anglais', label: 'Faire gérer ses échanges en anglais' },
      { href: '/guides/gerer-les-demandes-de-rendez-vous', label: 'Gérer les demandes de rendez-vous' },
      { href: '/guides/deplacement-a-l-etranger-formalites', label: 'Préparer un déplacement à l’étranger' },
      { href: '/assistante-independante/a-distance', label: 'Travailler à distance, partout en France' },
    ],
    cloture: 'Une heure écrite dans un seul fuseau est une heure fausse pour la moitié des participants.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'réunion fuseaux horaires',
      variantes: ['planifier une réunion internationale', 'décalage horaire réunion', 'organiser une visioconférence avec l’étranger'],
      persona: 'Dirigeant qui travaille avec des interlocuteurs étrangers',
      objectif: 'Donner les habitudes qui évitent l’erreur d’une heure',
      difference: 'Explique le piège du changement d’heure non synchronisé, souvent ignoré',
    },
  },
];
