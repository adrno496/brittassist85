/**
 * Dossier « Confidentialité, accès et outils ».
 *
 * Sécurité pratique pour un dirigeant qui délègue : partager un accès sans
 * partager un mot de passe, choisir un outil, protéger ses paiements. Les
 * recommandations citées sont celles de la CNIL, de l'ANSSI, de France Num et
 * de Cybermalveillance.gouv.fr, consultées le 3 octobre 2026.
 *
 * Aucune page ne recommande un produit : seuls des critères sont donnés.
 * BrittAssist n'est pas un prestataire informatique ; ces pages ne remplacent
 * ni un audit de sécurité, ni un délégué à la protection des données.
 */
import type { Guide } from '../guides.ts';

const DATE = '2026-10-03';
const DOSSIER = 'confidentialite-acces-et-outils';

const SOURCE_CNIL_MDP = { href: 'https://www.cnil.fr/fr/mots-de-passe-recommandations-pour-maitriser-sa-securite', label: 'CNIL — Mots de passe : recommandations pour maîtriser sa sécurité' };
const SOURCE_CNIL_AUTH = { href: 'https://www.cnil.fr/fr/securite-authentifier-les-utilisateurs', label: 'CNIL — Sécurité : authentifier les utilisateurs' };
const SOURCE_CYBER_MDP = { href: 'https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/mots-de-passe', label: 'Cybermalveillance.gouv.fr — Les mots de passe : bonnes pratiques' };
const SOURCE_CNIL_IA = { href: 'https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative', label: 'CNIL — Questions-réponses sur l’utilisation d’un système d’IA générative' };
const SOURCE_CNIL_SOUS_TRAITANCE = { href: 'https://www.cnil.fr/fr/securite-gerer-la-sous-traitance', label: 'CNIL — Sécurité : gérer la sous-traitance' };

export const confidentialite: Guide[] = [
  {
    slug: 'confidentialite-acces-et-outils',
    type: 'pilier',
    dossier: DOSSIER,
    categorie: 'Dossier',
    nom: 'Confidentialité, accès et outils partagés',
    title: 'Confidentialité, accès, outils : déléguer en sécurité · BrittAssist',
    description:
      "Donner un accès sans donner un mot de passe, savoir qui voit quoi, pouvoir tout retirer : les principes de sécurité d’un dirigeant qui délègue.",
    h1: 'Déléguer en sécurité : accès, confidentialité et outils partagés.',
    lede:
      "La question arrive toujours au deuxième rendez-vous : « mais concrètement, je lui donne mes mots de passe ? » Non. Déléguer en sécurité repose sur une idée simple : on ne partage pas un secret, on ouvre un accès — nominatif, limité, et que l’on peut refermer.",
    reponseCourte: [
      "Un accès bien délégué est nominatif, limité à ce qui est nécessaire, tracé, et révocable en un geste.",
      "On ne communique pas son mot de passe : on utilise la délégation prévue par l’outil, ou un gestionnaire de mots de passe.",
      "La liste des accès ouverts se tient à jour depuis le premier jour : c’est elle qui permet de tout refermer.",
      "Les données personnelles de tiers que vous confiez restent sous votre responsabilité : le contrat doit le prévoir.",
    ],
    sections: [
      {
        h2: 'Les quatre principes',
        blocs: [
          {
            tableau: {
              legende: 'Les quatre principes d’un accès délégué',
              colonnes: ['Principe', 'Ce qu’il veut dire', 'En pratique'],
              lignes: [
                ['Nominatif', 'Chaque personne a son propre identifiant', 'Un compte utilisateur à son nom, pas le vôtre'],
                ['Minimal', 'Elle voit ce dont elle a besoin, pas plus', 'Des droits par dossier, par fonction, par outil'],
                ['Tracé', 'On peut savoir qui a fait quoi', 'L’historique de l’outil, impossible avec un compte partagé'],
                ['Révocable', 'L’accès se retire en un geste', 'Une désactivation, sans changer tous vos mots de passe'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Commencer par le périmètre',
        blocs: [
          {
            paragraphes: [
              "La première question n’est pas technique. Avant de parler d’outils, dites ce que la personne doit faire : émettre des factures, tenir votre agenda, préparer des pièces. Les accès en découlent, et ils sont souvent moins nombreux qu’on ne le craignait.",
              "Tout ce qui n’est pas nécessaire au périmètre reste fermé. Ce n’est pas de la défiance : c’est ce qui permet d’ouvrir le reste sans arrière-pensée.",
            ],
          },
        ],
      },
      {
        h2: 'Les trois façons d’ouvrir un accès',
        blocs: [
          {
            liste: [
              "Le compte utilisateur : l’outil permet d’ajouter une personne avec des droits. C’est la meilleure solution quand elle existe.",
              "La délégation : messagerie et agenda permettent à quelqu’un d’agir pour vous sans connaître votre mot de passe.",
              "Le gestionnaire de mots de passe : pour les outils qui n’offrent qu’un seul compte, il partage l’accès sans révéler le secret, et permet de le retirer.",
            ],
          },
          {
            paragraphes: [
              "Ce qu’il ne faut jamais faire : envoyer un mot de passe par e-mail, par SMS ou par messagerie instantanée.",
            ],
          },
        ],
      },
      {
        h2: 'Le registre des accès',
        blocs: [
          {
            paragraphes: [
              "Tenez la liste de ce qui est ouvert : quel outil, à qui, avec quels droits, depuis quand. Dix lignes dans un tableau. Sans elle, une fin de collaboration ou le départ d’un salarié laisse des accès actifs que personne ne pense à fermer.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Partager son propre identifiant « pour aller plus vite ».",
      "Ouvrir tout l’espace de stockage quand un seul dossier suffit.",
      "Ne pas savoir, six mois plus tard, qui a accès à quoi.",
    ],
    limites: [
      "Ce dossier donne des principes d’organisation. Il ne remplace ni un prestataire informatique, ni un audit de sécurité, ni l’avis d’un délégué à la protection des données.",
    ],
    faq: [
      {
        q: 'Faut-il un contrat particulier pour donner des accès ?',
        a: "L’engagement de confidentialité et le traitement des données personnelles doivent figurer au contrat de prestation. La CNIL décrit ce que doit prévoir un contrat avec un sous-traitant.",
      },
      {
        q: 'Que faire si un outil ne permet qu’un seul utilisateur ?',
        a: "Passer par un gestionnaire de mots de passe, qui partage l’accès sans dévoiler le mot de passe, et activer la double authentification. Si l’outil est central, c’est aussi une raison d’en changer.",
      },
      {
        q: 'Qui porte la responsabilité en cas d’incident ?',
        a: "Vous restez responsable des données que vous confiez ; le prestataire répond de ses propres manquements, dans les limites du contrat. C’est une raison de plus pour limiter les accès au nécessaire.",
      },
    ],
    liens: [
      { href: '/guides/confidentialite-assistante-externalisee', label: 'Confidentialité et accès à distance' },
      { href: '/guides/partager-un-mot-de-passe-en-securite', label: 'Partager un accès sans partager son mot de passe' },
      { href: '/guides/registre-des-acces-entreprise', label: 'Tenir un registre des accès' },
      { href: '/guides/delegation-d-acces-messagerie-et-agenda', label: 'La délégation de messagerie et d’agenda' },
      { href: '/private-office', label: 'Le fonctionnement d’un Private Office' },
    ],
    sources: [SOURCE_CNIL_AUTH, SOURCE_CNIL_SOUS_TRAITANCE],
    cloture: 'On ne confie pas une clé. On ouvre une porte, et on garde le moyen de la refermer.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'navigation',
      motCle: 'donner des accès à une assistante en sécurité',
      variantes: ['sécurité des accès délégation', 'confidentialité outils partagés entreprise', 'déléguer sans donner ses mots de passe'],
      persona: 'Dirigeant qui hésite à ouvrir ses outils à un tiers',
      objectif: 'Poser les principes et orienter vers chaque cas pratique',
      difference: 'Quatre principes — nominatif, minimal, tracé, révocable — plutôt qu’une liste de précautions',
    },
  },

  {
    slug: 'partager-un-mot-de-passe-en-securite',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Partager un accès sans partager son mot de passe',
    title: 'Partager un mot de passe en sécurité : la méthode · BrittAssist',
    description:
      "Compte utilisateur, délégation, gestionnaire de mots de passe : trois façons de donner un accès sans jamais envoyer un mot de passe par message.",
    h1: 'Partager un accès sans jamais envoyer un mot de passe.',
    lede:
      "Un mot de passe envoyé par e-mail reste dans deux boîtes de réception, pour toujours. Celui dicté au téléphone finit sur un papier. Dans les deux cas, vous ne savez plus qui le connaît. Il existe trois meilleures façons de faire, et aucune n’est compliquée.",
    reponseCourte: [
      "Préférez toujours un compte utilisateur distinct : chacun a son identifiant et son mot de passe.",
      "À défaut, utilisez un gestionnaire de mots de passe : il partage l’accès sans révéler le secret.",
      "La CNIL recommande l’usage d’un gestionnaire de mots de passe, et déconseille les comptes partagés ; quand ils sont inévitables, leur usage doit être tracé et le mot de passe renouvelé.",
      "N’envoyez jamais un mot de passe par e-mail, SMS ou messagerie instantanée.",
    ],
    sections: [
      {
        h2: 'Les trois méthodes, par ordre de préférence',
        blocs: [
          {
            tableau: {
              legende: 'Trois façons de donner un accès',
              colonnes: ['Méthode', 'Quand l’utiliser', 'Ce qu’elle permet'],
              lignes: [
                ['Compte utilisateur distinct', 'L’outil permet d’ajouter des utilisateurs', 'Droits limités, historique nominatif, retrait immédiat'],
                ['Délégation', 'Messagerie, agenda', 'Agir pour vous sans connaître votre mot de passe'],
                ['Gestionnaire de mots de passe', 'L’outil n’offre qu’un seul compte', 'Partage sans révélation, retrait du partage, journal des accès'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Le gestionnaire de mots de passe',
        blocs: [
          {
            paragraphes: [
              "Un gestionnaire de mots de passe est un coffre chiffré qui génère et conserve des mots de passe solides et différents pour chaque service. Vous n’en retenez qu’un seul, celui du coffre. Beaucoup permettent de partager une entrée avec une autre personne : elle peut se connecter, sans forcément voir le mot de passe, et vous retirez le partage quand vous le décidez.",
            ],
          },
          {
            h3: 'Ce qu’il faut vérifier avant d’en choisir un',
            liste: [
              "Le partage d’entrées individuelles ou de dossiers, avec des droits.",
              "La possibilité de masquer le mot de passe à la personne qui l’utilise.",
              "Un journal des accès.",
              "La double authentification sur le coffre lui-même.",
              "L’export de vos données, pour pouvoir en changer.",
            ],
          },
        ],
      },
      {
        h2: 'Si un compte doit vraiment être partagé',
        blocs: [
          {
            etapes: [
              "Partagez-le par le gestionnaire, jamais par message.",
              "Notez qui y a accès, dans le registre des accès.",
              "Activez la double authentification, sur un moyen que vous maîtrisez.",
              "Changez le mot de passe à chaque départ, et à intervalles réguliers.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qui ne se partage pas',
        blocs: [
          {
            liste: [
              "Le mot de passe de votre messagerie principale : il permet de réinitialiser tous les autres.",
              "Les identifiants de votre banque avec pouvoir de paiement.",
              "Le mot de passe maître de votre gestionnaire.",
              "Vos moyens d’authentification personnels : téléphone, clé de sécurité.",
            ],
          },
          {
            paragraphes: [
              "Pour ces accès, la bonne réponse est toujours une délégation ou un compte distinct, jamais le partage du secret.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Réutiliser le même mot de passe sur plusieurs services.",
      "Tenir les mots de passe dans un tableur ou un carnet.",
      "Ne pas changer un mot de passe partagé après la fin d’une collaboration.",
    ],
    limites: [
      "Aucun gestionnaire n’est recommandé ici. Le choix d’un outil de sécurité se fait avec votre prestataire informatique, selon votre activité.",
    ],
    faq: [
      {
        q: 'Un gestionnaire de mots de passe est-il vraiment plus sûr ?',
        a: "La CNIL en recommande l’usage : il permet d’avoir des mots de passe longs et différents partout, ce qu’aucune mémoire ne peut faire. Sa sécurité repose sur un mot de passe maître solide et sur la double authentification.",
      },
      {
        q: 'Que faire des mots de passe déjà envoyés par e-mail ?',
        a: "Les changer. Un mot de passe qui a circulé en clair doit être considéré comme connu.",
      },
      {
        q: 'Une assistante externalisée a-t-elle besoin de mes mots de passe ?',
        a: "Non. Elle a besoin d’accès : un compte à son nom, une délégation, ou un partage par gestionnaire. C’est la première chose à régler au démarrage.",
      },
    ],
    liens: [
      { href: '/guides/double-authentification-et-delegation', label: 'Double authentification et délégation' },
      { href: '/guides/delegation-d-acces-messagerie-et-agenda', label: 'La délégation de messagerie et d’agenda' },
      { href: '/guides/registre-des-acces-entreprise', label: 'Tenir un registre des accès' },
      { href: '/guides/confidentialite-assistante-externalisee', label: 'Confidentialité et accès à distance' },
      { href: '/private-office', label: 'Le fonctionnement d’un Private Office' },
    ],
    sources: [SOURCE_CNIL_MDP, SOURCE_CNIL_AUTH, SOURCE_CYBER_MDP],
    cloture: 'Un mot de passe qui a voyagé par message n’est plus un secret.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'partager un mot de passe en sécurité',
      variantes: ['comment partager un mot de passe', 'gestionnaire de mots de passe entreprise partage', 'donner un accès sans donner son mot de passe'],
      persona: 'Dirigeant qui doit donner un accès à un collaborateur ou un prestataire',
      objectif: 'Remplacer l’envoi de mots de passe par trois méthodes sûres',
      difference: 'Classe les méthodes par ordre de préférence et dit ce qui ne se partage jamais',
    },
  },

  {
    slug: 'delegation-d-acces-messagerie-et-agenda',
    type: 'guide',
    dossier: DOSSIER,
    categorie: 'Comprendre',
    nom: 'La délégation de messagerie et d’agenda',
    title: 'Délégation de messagerie et d’agenda : comment ça marche · BrittAssist',
    description:
      "Lire, répondre et planifier au nom de quelqu’un sans connaître son mot de passe : le principe de la délégation dans les messageries professionnelles.",
    h1: 'La délégation de messagerie et d’agenda : agir pour vous, sans votre mot de passe.',
    lede:
      "Les messageries professionnelles ont une fonction faite exactement pour cela, et que peu de dirigeants connaissent : la délégation. Elle permet à une personne de lire, répondre et planifier en votre nom, depuis son propre compte.",
    reponseCourte: [
      "La délégation permet à une autre personne d’accéder à votre boîte ou à votre agenda depuis son propre compte, sans connaître votre mot de passe.",
      "Elle est proposée par les principales messageries professionnelles, avec des niveaux de droits différents.",
      "Le délégué ne peut pas modifier votre mot de passe ni les réglages de sécurité de votre compte.",
      "Elle se retire en un clic, sans rien changer d’autre.",
    ],
    sections: [
      {
        h2: 'Ce que la délégation permet',
        blocs: [
          {
            tableau: {
              legende: 'Délégation de messagerie et d’agenda : ce qui est possible',
              colonnes: ['Fonction', 'Ce que le délégué peut faire', 'Ce qui reste hors de sa portée'],
              lignes: [
                ['Messagerie', 'Lire, classer, répondre et envoyer en votre nom ou de votre part', 'Changer le mot de passe et les réglages de sécurité'],
                ['Agenda', 'Voir, créer, modifier et répondre aux invitations', 'Les événements que vous marquez comme privés, selon le réglage'],
                ['Dossiers partagés', 'Accéder aux seuls dossiers que vous ouvrez', 'Le reste de votre boîte'],
              ],
            },
          },
          {
            paragraphes: [
              "Le détail dépend de votre messagerie et de votre abonnement. Dans un environnement d’entreprise, la délégation doit parfois être autorisée par l’administrateur du compte.",
            ],
          },
        ],
      },
      {
        h2: 'Les niveaux de droits de l’agenda',
        blocs: [
          {
            liste: [
              "Voir seulement si vous êtes libre ou occupé.",
              "Voir le détail des événements.",
              "Créer et modifier des événements.",
              "Gérer l’agenda et répondre aux invitations à votre place.",
            ],
          },
          {
            paragraphes: [
              "Pour une gestion d’agenda complète, c’est le dernier niveau qu’il faut. Les rendez-vous personnels peuvent être marqués comme privés : le créneau apparaît occupé, sans son objet.",
            ],
          },
        ],
      },
      {
        h2: 'Mettre en place la délégation',
        blocs: [
          {
            etapes: [
              "Vérifiez que la personne a un compte de messagerie à son nom.",
              "Dans les réglages de votre compte, ajoutez-la comme déléguée, pour la messagerie, l’agenda, ou les deux.",
              "Choisissez le niveau de droits.",
              "Convenez de la mention affichée : réponse « de la part de », ou en son nom propre.",
              "Faites un essai : un message, un rendez-vous.",
              "Notez la délégation dans le registre des accès.",
            ],
          },
          {
            paragraphes: [
              "La marche à suivre exacte figure dans l’aide officielle de l’éditeur de votre messagerie ; les deux principales sont citées en référence.",
            ],
          },
        ],
      },
      {
        h2: 'Délégation ou partage du mot de passe',
        blocs: [
          {
            paragraphes: [
              "Partager son mot de passe donne tout, sans limite et sans trace : la personne est vous, aux yeux de l’outil. La délégation donne ce qui est nécessaire, laisse apparaître qui a agi, et se retire sans conséquence. Il n’y a aucune situation où le partage du mot de passe de sa messagerie soit préférable.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Donner son mot de passe parce qu’on ignore que la délégation existe.",
      "Déléguer la messagerie entière quand l’agenda aurait suffi.",
      "Oublier de retirer la délégation à la fin d’une collaboration.",
    ],
    limites: [
      "Les fonctions décrites sont celles des messageries professionnelles courantes ; elles évoluent. L’aide de l’éditeur fait référence, et votre prestataire informatique reste l’interlocuteur pour la configuration.",
    ],
    faq: [
      {
        q: 'Mes correspondants voient-ils que quelqu’un d’autre répond ?',
        a: "Selon le réglage, la réponse part en votre nom, ou porte la mention qu’elle est envoyée par la personne déléguée de votre part. La transparence est généralement préférable.",
      },
      {
        q: 'Peut-on déléguer seulement l’agenda ?',
        a: "Oui. Les deux délégations sont indépendantes, et commencer par l’agenda est une bonne façon de démarrer.",
      },
      {
        q: 'La délégation fonctionne-t-elle avec une adresse gratuite ?',
        a: "Certaines messageries grand public la proposent avec des limites. Pour un usage professionnel durable, un compte professionnel offre des droits plus fins et une administration centralisée.",
      },
    ],
    liens: [
      { href: '/guides/deleguer-sa-boite-mail', label: 'Déléguer sa boîte mail : le cadre' },
      { href: '/guides/partager-un-mot-de-passe-en-securite', label: 'Partager un accès sans partager son mot de passe' },
      { href: '/guides/tenir-un-agenda-de-dirigeant', label: 'Tenir un agenda de dirigeant' },
      { href: '/services/gestion-agenda', label: 'Confier la tenue de son agenda' },
    ],
    sources: [
      { href: 'https://support.google.com/mail/answer/138350?hl=fr', label: 'Aide Gmail — Déléguer l’accès à sa messagerie et collaborer' },
      { href: 'https://support.microsoft.com/fr-fr/outlook/sharing/about-delegates-allow-someone-to-manage-your-mail-and-calendar-in-outlook', label: 'Support Microsoft — Autoriser une autre personne à gérer votre courrier et votre calendrier' },
    ],
    cloture: 'La délégation existe pour qu’on n’ait jamais à prêter son mot de passe.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'informationnelle',
      motCle: 'délégation de messagerie',
      variantes: ['déléguer l’accès à sa boîte mail', 'délégation d’agenda', 'donner accès à son calendrier'],
      persona: 'Dirigeant qui veut ouvrir sa messagerie ou son agenda à une assistante',
      objectif: 'Expliquer le mécanisme et ses limites, quel que soit l’outil',
      difference: 'Explique le principe indépendamment de la marque, et l’oppose au partage de mot de passe',
    },
  },

  {
    slug: 'double-authentification-et-delegation',
    type: 'guide',
    dossier: DOSSIER,
    categorie: 'Comprendre',
    nom: 'Double authentification et délégation',
    title: 'Double authentification : comment déléguer quand même · BrittAssist',
    description:
      "Le code arrive sur votre téléphone, et c’est quelqu’un d’autre qui se connecte : comment concilier double authentification et délégation.",
    h1: 'Double authentification : déléguer sans y renoncer.',
    lede:
      "Vous avez activé la double authentification, et vous avez bien fait. Puis vous avez confié un outil à quelqu’un, et le code arrive sur votre téléphone à chaque connexion. La tentation est de la désactiver. C’est la mauvaise réponse à une vraie question.",
    reponseCourte: [
      "La double authentification demande, en plus du mot de passe, une seconde preuve : un code, une application, une clé physique.",
      "Elle est recommandée par la CNIL comme par l’ANSSI, et ne doit pas être désactivée pour faciliter une délégation.",
      "Le problème disparaît quand chacun a son propre compte : chacun a alors son propre second facteur.",
      "Pour un compte réellement partagé, un code généré par une application et stocké dans un gestionnaire de mots de passe évite de dépendre d’un téléphone.",
    ],
    sections: [
      {
        h2: 'Ce qu’est la double authentification',
        blocs: [
          {
            paragraphes: [
              "L’authentification multifacteur repose sur au moins deux preuves de nature différente parmi trois : ce que l’on sait — un mot de passe —, ce que l’on possède — un téléphone, une clé —, ce que l’on est — une empreinte. Un mot de passe volé ne suffit plus à entrer.",
            ],
          },
        ],
      },
      {
        h2: 'Les solutions, par situation',
        blocs: [
          {
            tableau: {
              legende: 'Concilier double authentification et délégation',
              colonnes: ['Situation', 'Solution', 'Ce qu’il faut éviter'],
              lignes: [
                ['L’outil accepte plusieurs utilisateurs', 'Un compte par personne, chacun avec son second facteur', 'Le compte unique partagé'],
                ['Messagerie et agenda', 'La délégation : la personne se connecte à son propre compte', 'Lui confier votre mot de passe et vos codes'],
                ['Outil à compte unique', 'Code généré par application, enregistré dans le gestionnaire de mots de passe partagé', 'Le code par SMS sur votre téléphone personnel'],
                ['Banque et paiements', 'Un accès distinct en consultation ou en préparation', 'Partager le moyen de validation des paiements'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Le cas du code par SMS',
        blocs: [
          {
            paragraphes: [
              "Le code par SMS lie l’accès à un téléphone, donc à une personne. Il rend la délégation pénible : vous devez être joignable à chaque connexion. Quand l’outil le permet, remplacez-le par une application d’authentification : le code peut alors être partagé de façon sûre par un gestionnaire, et vous cessez d’être sollicité.",
            ],
          },
        ],
      },
      {
        h2: 'Les codes de secours',
        blocs: [
          {
            etapes: [
              "À l’activation, l’outil fournit des codes de secours : enregistrez-les dans votre gestionnaire de mots de passe.",
              "Ne les partagez pas : ils permettent de contourner le second facteur.",
              "Vérifiez qu’au moins deux moyens d’authentification sont enregistrés sur vos comptes essentiels.",
              "Notez, pour chaque compte partagé, où se trouve le second facteur et qui le détient.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Désactiver la double authentification parce qu’elle gêne.",
      "Transférer les codes reçus par SMS à la demande, dix fois par semaine.",
      "Perdre l’accès à un compte parce que le second facteur était sur un ancien téléphone.",
    ],
    limites: [
      "La configuration de l’authentification dépend de chaque service. Pour les comptes sensibles, faites-vous accompagner par votre prestataire informatique.",
    ],
    faq: [
      {
        q: 'La double authentification est-elle obligatoire ?',
        a: "Elle est exigée par certains services, notamment bancaires, et recommandée partout où elle est proposée. La CNIL a publié une recommandation consacrée à l’authentification multifacteur.",
      },
      {
        q: 'Peut-on recevoir les codes sur deux téléphones ?',
        a: "Cela dépend du service. Une application d’authentification dont le secret est conservé dans un gestionnaire partagé est une solution plus propre, quand le compte doit vraiment être commun.",
      },
      {
        q: 'Comment une assistante se connecte-t-elle à mes outils protégés ?',
        a: "Par un compte à son nom chaque fois que c’est possible : elle a alors son propre second facteur. Les rares comptes à identifiant unique se traitent par le gestionnaire de mots de passe.",
      },
    ],
    liens: [
      { href: '/guides/partager-un-mot-de-passe-en-securite', label: 'Partager un accès sans partager son mot de passe' },
      { href: '/guides/delegation-d-acces-messagerie-et-agenda', label: 'La délégation de messagerie et d’agenda' },
      { href: '/guides/registre-des-acces-entreprise', label: 'Tenir un registre des accès' },
      { href: '/guides/confidentialite-acces-et-outils', label: 'Déléguer en sécurité : les principes' },
      { href: '/services/gestion-agenda', label: 'Confier la tenue de son agenda' },
    ],
    sources: [SOURCE_CNIL_AUTH, SOURCE_CNIL_MDP],
    cloture: 'Quand la sécurité gêne la délégation, c’est le montage qu’il faut revoir, pas la sécurité.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'problème-solution',
      motCle: 'double authentification compte partagé',
      variantes: ['2FA et délégation', 'authentification à deux facteurs plusieurs utilisateurs', 'code SMS compte partagé'],
      persona: 'Dirigeant gêné par les codes à transmettre quand il délègue',
      objectif: 'Montrer comment déléguer sans désactiver la double authentification',
      difference: 'Traite un problème concret rarement expliqué : le second facteur dans un contexte de délégation',
    },
  },

  {
    slug: 'signature-electronique-niveaux-et-usages',
    type: 'reference',
    dossier: DOSSIER,
    categorie: 'Repère',
    nom: 'La signature électronique : niveaux et usages',
    title: 'Signature électronique : niveaux, valeur et usages · BrittAssist',
    description:
      "Simple, avancée, qualifiée : ce que vaut chaque niveau de signature électronique, et lequel choisir pour un devis, un contrat ou un acte important.",
    h1: 'La signature électronique : quel niveau pour quel document.',
    lede:
      "Signer en ligne n’est plus une question. La vraie question est de savoir si la signature que vous utilisez vaut ce que vous croyez, le jour où quelqu’un la conteste.",
    reponseCourte: [
      "Un écrit électronique a la même force probante qu’un écrit papier, à condition que son auteur puisse être identifié et que son intégrité soit garantie.",
      "Le règlement européen eIDAS distingue plusieurs niveaux : simple, avancée, avancée reposant sur un certificat qualifié, et qualifiée.",
      "Seule la signature qualifiée est assimilée à la signature manuscrite ; les autres sont recevables, mais leur fiabilité peut devoir être démontrée.",
      "Le niveau se choisit selon l’enjeu du document, pas par habitude.",
    ],
    sections: [
      {
        h2: 'Les niveaux',
        blocs: [
          {
            tableau: {
              legende: 'Niveaux de signature électronique',
              colonnes: ['Niveau', 'Ce qu’il garantit', 'Usage courant'],
              lignes: [
                ['Simple', 'Peu de garanties sur l’identité du signataire et l’intégrité', 'Documents internes, accusés de réception, engagements à faible enjeu'],
                ['Avancée', 'Signature liée au signataire, toute modification ultérieure est détectable', 'Devis, contrats commerciaux courants'],
                ['Avancée avec certificat qualifié', 'Identité du signataire vérifiée par un prestataire de confiance', 'Contrats à enjeu, marchés'],
                ['Qualifiée', 'Le niveau le plus élevé, assimilé à la signature manuscrite', 'Actes pour lesquels ce niveau est exigé'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Choisir le niveau',
        blocs: [
          {
            etapes: [
              "Demandez-vous ce qui se passe si le signataire conteste avoir signé.",
              "Vérifiez si un texte ou votre cocontractant impose un niveau.",
              "Pour un devis ou un contrat commercial courant, une signature avancée est le choix habituel.",
              "Pour un engagement lourd, montez d’un niveau, ou faites valider par votre conseil.",
            ],
          },
          {
            paragraphes: [
              "Un niveau trop élevé alourdit inutilement le parcours du signataire ; un niveau trop faible fragilise le document. Le bon niveau est celui que justifie l’enjeu.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qu’un outil de signature doit fournir',
        blocs: [
          {
            liste: [
              "L’indication claire du niveau de signature proposé.",
              "Un dossier de preuve : qui a signé, quand, par quel moyen d’identification.",
              "Un document signé qui signale toute modification ultérieure.",
              "La conservation ou l’export des documents et de leurs preuves.",
              "Un prestataire dont vous pouvez vérifier le statut.",
            ],
          },
        ],
      },
      {
        h2: 'Le circuit de signature',
        blocs: [
          {
            paragraphes: [
              "L’outil ne règle pas tout. Un document envoyé en signature doit encore être le bon, dans sa dernière version, adressé à la bonne personne, puis relancé, récupéré et classé. Préparer l’envoi, suivre les signatures, relancer les retardataires et ranger le document signé avec sa preuve : c’est un travail de suivi, qui se confie. Signer, lui, ne se délègue pas.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Considérer une image de signature collée dans un PDF comme une signature électronique.",
      "Ne pas conserver le dossier de preuve avec le document.",
      "Utiliser le même niveau pour un bon de commande et pour un acte engageant l’entreprise sur dix ans.",
    ],
    limites: [
      "Cette page résume des principes à partir de sources publiques. Le niveau requis pour un acte donné relève d’un conseil juridique.",
    ],
    faq: [
      {
        q: 'Une signature scannée a-t-elle une valeur ?',
        a: "C’est une image, sans garantie sur son auteur ni sur l’intégrité du document. Elle peut constituer un indice, pas une signature électronique au sens du règlement eIDAS.",
      },
      {
        q: 'Un juge peut-il refuser une signature électronique ?',
        a: "Pas au seul motif qu’elle est électronique. Sa force dépend du niveau de fiabilité : plus le niveau est élevé, moins vous aurez à démontrer.",
      },
      {
        q: 'Qui prépare les documents à signer ?',
        a: "La préparation et le suivi se délèguent : mise en forme, envoi dans l’outil, relances, classement. Le contenu du contrat relève de vous et de vos conseils.",
      },
    ],
    liens: [
      { href: '/services/gestion-des-contrats', label: 'Faire préparer et suivre ses contrats' },
      { href: '/guides/devis-contenu-et-validite', label: 'Ce que doit contenir un devis' },
      { href: '/guides/suivi-des-contrats-et-abonnements', label: 'Suivre ses contrats et abonnements' },
      { href: '/guides/duree-de-conservation-documents-entreprise', label: 'Combien de temps conserver les documents' },
    ],
    sources: [
      { href: 'https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/dematerialisation-des-documents/la-signature', label: 'France Num — La signature électronique : un outil devenu incontournable' },
      { href: 'https://cyber.gouv.fr/reglementation/reglementation-identite-confiance-numerique/securite-echanges-voie-electronique/reglement-eidas/selection-niveau-signatures-cachets-%C3%A9lectroniques/', label: 'ANSSI — Guide de sélection du niveau des signatures et des cachets électroniques' },
    ],
    cloture: 'Une signature vaut ce qu’elle permet de prouver le jour où on la conteste.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'référence',
      motCle: 'signature électronique valeur juridique',
      variantes: ['niveaux de signature électronique', 'signature électronique simple avancée qualifiée', 'signature électronique devis contrat'],
      persona: 'Dirigeant qui fait signer des devis et des contrats en ligne',
      objectif: 'Expliquer les niveaux et aider à choisir selon l’enjeu',
      difference: 'Relie le niveau à l’enjeu du document, et traite le circuit de signature autour de l’outil',
    },
  },

  {
    slug: 'ia-generative-et-donnees-confidentielles',
    type: 'guide',
    dossier: DOSSIER,
    categorie: 'Comprendre',
    nom: 'IA générative et données confidentielles',
    title: 'IA générative : quelles données peut-on y saisir ? · BrittAssist',
    description:
      "Contrats, fichiers clients, échanges internes : ce qu’il ne faut pas saisir dans un outil d’IA, et les cinq règles d’usage à poser dans une petite équipe.",
    h1: 'IA générative : ce qu’on peut y saisir, et ce qu’on n’y saisit pas.',
    lede:
      "Coller un contrat dans un assistant d’IA pour en obtenir le résumé prend dix secondes. Pendant ces dix secondes, le contrat a quitté l’entreprise. La question n’est pas de s’interdire ces outils : c’est de savoir ce qu’on leur donne.",
    reponseCourte: [
      "Ce que vous saisissez dans un outil d’IA est transmis à son fournisseur : cela revient à confier l’information à un tiers.",
      "La CNIL recommande de ne fournir à ces outils que des informations que l’on est autorisé à partager, et d’encadrer leur usage selon le mode de déploiement.",
      "Les données personnelles, les secrets d’affaires et les informations couvertes par une clause de confidentialité demandent un cadre : contrat, paramétrage, ou abstention.",
      "Cinq règles écrites suffisent à une petite équipe.",
    ],
    sections: [
      {
        h2: 'Ce qui pose problème',
        blocs: [
          {
            tableau: {
              legende: 'Types d’informations et précautions',
              colonnes: ['Information', 'Risque', 'Précaution'],
              lignes: [
                ['Données personnelles de clients, salariés, candidats', 'Vous en êtes responsable au sens du RGPD', 'Ne pas les saisir sans cadre contractuel adapté ; anonymiser'],
                ['Contrats, offres, tarifs', 'Secret d’affaires', 'Retirer les noms et les montants, ou s’abstenir'],
                ['Informations d’un client sous confidentialité', 'Vous violez votre propre engagement', 'S’abstenir, sauf accord du client'],
                ['Données financières et stratégiques', 'Fuite d’informations sensibles', 'Réserver à un outil dont les conditions sont maîtrisées'],
                ['Texte générique, reformulation, structure', 'Faible', 'Usage courant, avec relecture'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les questions à poser à un outil',
        blocs: [
          {
            liste: [
              "Les données saisies sont-elles conservées, et combien de temps ?",
              "Sont-elles réutilisées pour entraîner le modèle ? Peut-on s’y opposer ?",
              "Où sont-elles hébergées, et qui peut y accéder ?",
              "L’offre professionnelle prévoit-elle des engagements différents de l’offre gratuite ?",
              "Un contrat encadre-t-il le traitement des données personnelles ?",
            ],
          },
          {
            paragraphes: [
              "Les réponses figurent dans les conditions d’utilisation et la politique de confidentialité du fournisseur. Elles diffèrent beaucoup entre une version gratuite et une version professionnelle.",
            ],
          },
        ],
      },
      {
        h2: 'Cinq règles pour une petite équipe',
        blocs: [
          {
            modele: {
              titre: 'Règles d’usage — une demi-page',
              lignes: [
                "1. Outils autorisés : [liste]. Tout autre outil se demande avant.",
                "2. Jamais saisi : noms et coordonnées de personnes, données de santé, contrats et offres nominatives, informations d’un client sous confidentialité.",
                "3. Toujours relu : ce que l’outil produit est un brouillon. Les faits, dates, montants et règles sont vérifiés.",
                "4. Jamais envoyé tel quel : un texte généré est relu par la personne qui le signe.",
                "5. En cas de doute : on s’abstient, et on demande.",
              ],
            },
          },
        ],
      },
      {
        h2: 'Avec un prestataire',
        blocs: [
          {
            paragraphes: [
              "Si une personne extérieure travaille sur vos dossiers, demandez-lui comment elle utilise ces outils, quelles informations elle y saisit, et qui relit. Vous pouvez exiger par contrat qu’aucune donnée de vos dossiers ne soit saisie dans un outil d’IA sans votre accord. C’est une clause de confidentialité comme une autre.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Coller un fichier clients « juste pour le trier ».",
      "Croire que la version gratuite et la version professionnelle offrent les mêmes garanties.",
      "Reprendre un chiffre ou une règle cités par l’outil sans les vérifier.",
    ],
    limites: [
      "Cette page ne compare aucun outil et ne constitue pas une analyse de conformité. Pour un usage régulier sur des données personnelles, rapprochez-vous d’un délégué à la protection des données ou de la CNIL.",
    ],
    faq: [
      {
        q: 'Peut-on utiliser l’IA sur des documents anonymisés ?',
        a: "Retirer les noms, coordonnées et montants réduit fortement le risque. Vérifiez que le document ne reste pas identifiable par recoupement : un secteur, une ville et une date peuvent suffire à reconnaître un client.",
      },
      {
        q: 'Faut-il interdire ces outils dans l’entreprise ?',
        a: "Une interdiction non expliquée est contournée. Des règles courtes, qui disent ce qui est permis, sont plus efficaces et plus honnêtes.",
      },
      {
        q: 'Un texte produit par une IA peut-il contenir des erreurs ?',
        a: "Oui. Ces outils produisent un texte plausible, pas un texte vérifié. Tout fait, toute date, toute règle doit être contrôlé à la source avant usage.",
      },
    ],
    liens: [
      { href: '/guides/assistante-externalisee-et-ia', label: 'Assistante humaine ou assistant IA' },
      { href: '/guides/confidentialite-assistante-externalisee', label: 'Confidentialité et accès à distance' },
      { href: '/guides/contrat-de-prestation-assistante-independante', label: 'Le contrat de prestation avec une assistante' },
      { href: '/guides/confidentialite-acces-et-outils', label: 'Déléguer en sécurité : les principes' },
      { href: '/private-office', label: 'Le fonctionnement d’un Private Office' },
    ],
    sources: [SOURCE_CNIL_IA],
    cloture: 'Ce que vous saisissez dans un outil, vous le confiez à quelqu’un. Sachez à qui.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'informationnelle',
      motCle: 'IA générative données confidentielles entreprise',
      variantes: ['peut-on mettre des données clients dans ChatGPT', 'IA et RGPD petite entreprise', 'règles d’usage IA en entreprise'],
      persona: 'Dirigeant dont l’équipe utilise des assistants d’IA',
      objectif: 'Dire ce qui ne se saisit pas et fournir des règles d’usage',
      difference: 'Cinq règles prêtes à diffuser, et la clause à demander à un prestataire',
    },
  },

  {
    slug: 'choisir-un-outil-de-suivi-des-taches',
    type: 'comparatif',
    dossier: DOSSIER,
    categorie: 'Choisir',
    nom: 'Choisir un outil de suivi des tâches',
    title: 'Choisir un outil de suivi des tâches partagé · BrittAssist',
    description:
      "Liste, tableau, tableur : trois familles d’outils pour suivre des demandes à deux, et les six critères qui comptent quand on délègue.",
    h1: 'Choisir un outil de suivi des tâches, quand on travaille à deux.',
    lede:
      "Le meilleur outil de suivi est celui que vous ouvrirez. Les plus complets sont souvent abandonnés au bout de trois semaines, remplacés par un fil de messages où tout se perd à nouveau.",
    reponseCourte: [
      "Pour suivre des demandes entre un dirigeant et une assistante, trois familles suffisent : une liste partagée, un tableau à colonnes, ou un tableur.",
      "Le critère décisif est la simplicité de saisie : si ajouter une demande prend plus de dix secondes, l’outil ne sera pas utilisé.",
      "L’outil doit montrer un statut par demande, et permettre de retrouver ce qui est clos.",
    ],
    sections: [
      {
        h2: 'Les trois familles',
        blocs: [
          {
            tableau: {
              legende: 'Familles d’outils de suivi',
              colonnes: ['Famille', 'Elle convient si', 'Sa limite'],
              lignes: [
                ['Liste partagée', 'Les demandes sont courtes et indépendantes', 'Peu de contexte, pas de vue d’ensemble'],
                ['Tableau à colonnes', 'Vous aimez voir l’avancement d’un coup d’œil', 'Devient confus au-delà de cinquante cartes'],
                ['Tableur partagé', 'Vous voulez trier, filtrer, compter', 'Moins agréable sur téléphone'],
                ['Outil de gestion de projet', 'Plusieurs personnes, des dépendances, des échéances', 'Trop lourd pour un suivi à deux'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les six critères',
        blocs: [
          {
            etapes: [
              "Saisir une demande en dix secondes, depuis un téléphone.",
              "Afficher un statut clair par demande.",
              "Garder l’historique : ce qui a été dit, ce qui a été fait.",
              "Gérer des accès nominatifs, que l’on peut retirer.",
              "Exporter les données dans un format courant.",
              "Rester lisible quand il y a deux cents lignes.",
            ],
          },
        ],
      },
      {
        h2: 'Le piège de l’outil trop riche',
        blocs: [
          {
            paragraphes: [
              "Étiquettes, priorités, sous-tâches, automatisations : chaque fonction ajoute une décision à prendre au moment de saisir. Pour un suivi à deux, quatre informations suffisent : la demande, la date, le statut, la prochaine étape. Tout le reste est du réglage qui ne sera pas entretenu.",
            ],
          },
        ],
      },
      {
        h2: 'Qui tient l’outil',
        blocs: [
          {
            paragraphes: [
              "Dans une délégation qui fonctionne, ce n’est pas le dirigeant. Vous transmettez par le canal qui vous convient ; l’assistante enregistre la demande, met à jour le statut et vous dit quand c’est clos. Vous consultez l’outil quand vous voulez une vue d’ensemble, vous n’avez pas à le nourrir.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Choisir l’outil avant d’avoir fixé les statuts et le canal.",
      "En changer tous les six mois.",
      "Demander au dirigeant de saisir lui-même ses demandes dans l’outil.",
    ],
    limites: [
      "Aucun produit n’est cité : les offres évoluent, et le choix dépend de ce que vous utilisez déjà.",
    ],
    faq: [
      {
        q: 'Un simple tableur suffit-il ?',
        a: "Très souvent, oui. Il a l’avantage d’exister déjà, de s’exporter et d’être compris de tous. Son seul défaut est la saisie sur téléphone.",
      },
      {
        q: 'Faut-il que l’outil soit le même que celui de mes équipes ?',
        a: "Pas nécessairement. Le suivi entre vous et votre assistante est un espace à part ; le mélanger aux projets de l’équipe le rend illisible.",
      },
      {
        q: 'Où sont hébergées les données ?',
        a: "C’est un critère à vérifier, surtout si les demandes mentionnent des personnes. Les conditions du fournisseur indiquent le lieu d’hébergement et les garanties associées.",
      },
    ],
    liens: [
      { href: '/guides/suivi-demandes-assistante-externalisee', label: 'Suivre les demandes déléguées' },
      { href: '/guides/canal-pour-transmettre-ses-demandes', label: 'Par quel canal transmettre ses demandes' },
      { href: '/guides/choisir-un-espace-de-stockage-partage', label: 'Choisir un espace de stockage partagé' },
      { href: '/private-office', label: 'Le fonctionnement d’un Private Office' },
    ],
    cloture: 'L’outil de suivi parfait est celui dont vous oubliez l’existence, parce que quelqu’un le tient.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'comparaison',
      motCle: 'outil de suivi des tâches partagé',
      variantes: ['outil gestion de tâches à deux', 'suivi des demandes outil', 'quel outil pour déléguer'],
      persona: 'Dirigeant qui cherche comment suivre ce qu’il délègue',
      objectif: 'Faire choisir une famille d’outils sur des critères simples',
      difference: 'Compare des familles et non des marques, et rappelle que ce n’est pas au dirigeant de tenir l’outil',
    },
  },

  {
    slug: 'choisir-un-espace-de-stockage-partage',
    type: 'comparatif',
    dossier: DOSSIER,
    categorie: 'Choisir',
    nom: 'Choisir un espace de stockage partagé',
    title: 'Stockage partagé en entreprise : les critères de choix · BrittAssist',
    description:
      "Droits par dossier, liens de partage, hébergement, historique, sortie : sept critères pour choisir où ranger les documents de l’entreprise.",
    h1: 'Choisir un espace de stockage partagé : sept critères.',
    lede:
      "Les documents d’une entreprise finissent toujours quelque part : sur un ordinateur, dans une messagerie, dans trois espaces en ligne ouverts au fil des années. Choisir un seul endroit, et le bon, est la décision qui rend tout le reste possible.",
    reponseCourte: [
      "Un espace de stockage partagé se choisit sur sept critères : droits par dossier, comptes nominatifs, maîtrise des liens de partage, historique des versions, lieu d’hébergement, sauvegarde et réversibilité.",
      "Le critère le plus sous-estimé est la gestion des liens de partage : un lien public oublié est une fuite qui dure.",
      "Un seul espace vaut mieux que trois, même s’il n’est pas parfait.",
    ],
    sections: [
      {
        h2: 'Les sept critères',
        blocs: [
          {
            tableau: {
              legende: 'Critères de choix d’un espace de stockage partagé',
              colonnes: ['Critère', 'La question à poser'],
              lignes: [
                ['Droits par dossier', 'Peut-on donner accès à un dossier sans ouvrir les autres ?'],
                ['Comptes nominatifs', 'Chaque personne a-t-elle son identifiant, avec double authentification ?'],
                ['Liens de partage', 'Peut-on les lister, les limiter dans le temps, les désactiver ?'],
                ['Historique', 'Peut-on retrouver une version antérieure ou un fichier supprimé ?'],
                ['Hébergement', 'Où sont les données, et sous quelles garanties ?'],
                ['Sauvegarde', 'Une copie indépendante est-elle possible ?'],
                ['Réversibilité', 'Peut-on tout exporter, arborescence comprise ?'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les liens de partage',
        blocs: [
          {
            paragraphes: [
              "« Toute personne disposant du lien peut consulter » est le réglage le plus pratique et le plus dangereux. Ces liens se transmettent, se retrouvent dans des e-mails, et restent actifs des années.",
            ],
            liste: [
              "Partagez avec des personnes nommées plutôt que par lien public.",
              "Quand un lien public est nécessaire, donnez-lui une date d’expiration.",
              "Passez en revue les liens actifs deux fois par an.",
            ],
          },
        ],
      },
      {
        h2: 'L’hébergement',
        blocs: [
          {
            paragraphes: [
              "Vos documents contiennent des données personnelles : salariés, clients, fournisseurs. Le lieu d’hébergement et les garanties du fournisseur ne sont pas indifférents. Les conditions contractuelles indiquent où les données sont stockées et dans quel cadre elles peuvent être transférées. Si votre activité est sensible ou réglementée, cette vérification se fait avec un professionnel.",
            ],
          },
        ],
      },
      {
        h2: 'Passer de trois espaces à un seul',
        blocs: [
          {
            etapes: [
              "Recensez où se trouvent les documents aujourd’hui.",
              "Choisissez l’espace cible, et créez-y l’arborescence.",
              "Migrez par blocs, en commençant par ce qui est vivant.",
              "Passez les anciens espaces en lecture seule, puis fermez-les.",
              "Reprenez les droits : qui a accès à quoi dans le nouvel espace.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Laisser coexister un espace personnel et un espace professionnel pour les mêmes documents.",
      "Partager le dossier racine quand un sous-dossier suffisait.",
      "Compter sur la synchronisation comme sur une sauvegarde.",
    ],
    limites: [
      "Aucun fournisseur n’est recommandé. Pour des données sensibles ou réglementées, le choix se fait avec votre prestataire informatique.",
    ],
    faq: [
      {
        q: 'La synchronisation est-elle une sauvegarde ?',
        a: "Non. Une suppression ou une altération se propage à toutes les copies synchronisées. Une sauvegarde est une copie indépendante, que l’erreur n’atteint pas.",
      },
      {
        q: 'Faut-il un espace distinct pour un prestataire ?',
        a: "Non : un dossier partagé dans votre espace, avec des droits limités. Les documents doivent rester chez vous, pas dans l’espace du prestataire.",
      },
      {
        q: 'Peut-on garder son outil actuel ?',
        a: "Souvent, oui. Bien des désordres viennent de l’usage, pas de l’outil : arborescence absente, droits trop larges, liens oubliés.",
      },
    ],
    liens: [
      { href: '/guides/arborescence-dossiers-entreprise', label: 'Bâtir une arborescence de dossiers' },
      { href: '/guides/sauvegarde-des-documents-entreprise', label: 'Sauvegarder les documents de l’entreprise' },
      { href: '/guides/registre-des-acces-entreprise', label: 'Tenir un registre des accès' },
      { href: '/guides/confidentialite-acces-et-outils', label: 'Déléguer en sécurité : les principes' },
      { href: '/services/gestion-administrative', label: 'Confier sa gestion administrative' },
    ],
    cloture: 'Un seul endroit, bien réglé, vaut mieux que trois endroits parfaits.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'comparaison',
      motCle: 'choisir un stockage cloud entreprise',
      variantes: ['espace de stockage partagé TPE', 'partage de documents entreprise sécurisé', 'critères stockage en ligne professionnel'],
      persona: 'Dirigeant dont les documents sont éparpillés',
      objectif: 'Donner une grille de choix et une méthode de regroupement',
      difference: 'Met en avant le risque des liens de partage publics, et la différence entre synchronisation et sauvegarde',
    },
  },

  {
    slug: 'registre-des-acces-entreprise',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Tenir un registre des accès',
    title: 'Registre des accès : savoir qui a accès à quoi · BrittAssist',
    description:
      "Un tableau de huit colonnes pour savoir qui peut accéder à quel outil, avec quels droits — et tout refermer le jour d’un départ.",
    h1: 'Le registre des accès : savoir qui peut ouvrir quoi.',
    lede:
      "Le jour où un collaborateur ou un prestataire s’en va, une question se pose : à quoi avait-il accès ? Si la réponse demande une heure de recherche, des accès resteront ouverts. Le registre existe pour que la réponse tienne en une ligne par outil.",
    reponseCourte: [
      "Un registre des accès liste, pour chaque outil : qui y accède, avec quels droits, depuis quand, et comment l’accès se retire.",
      "Il se tient à jour à trois moments : une arrivée, un changement de rôle, un départ.",
      "Il sert à une revue périodique : les accès qui ne servent plus sont fermés.",
    ],
    sections: [
      {
        h2: 'Le registre',
        blocs: [
          {
            modele: {
              titre: 'Les huit colonnes',
              lignes: [
                "1. Outil ou service — 2. Personne — 3. Type d’accès (compte nominatif, délégation, partage par gestionnaire)",
                "4. Droits (lecture, modification, administration) — 5. Date d’ouverture — 6. Motif",
                "7. Second facteur : où il se trouve — 8. Comment retirer l’accès",
              ],
            },
          },
        ],
      },
      {
        h2: 'Recenser les outils',
        blocs: [
          {
            liste: [
              "Messagerie et agenda.",
              "Stockage de documents.",
              "Facturation, comptabilité, banque.",
              "Outils métier : gestion commerciale, planning, logiciel de devis.",
              "Espaces en ligne des administrations et des fournisseurs.",
              "Réseaux sociaux et site internet.",
              "Outils de réservation et comptes de voyage.",
              "Abonnements divers : téléphonie, signature électronique, visioconférence.",
            ],
          },
          {
            paragraphes: [
              "Le relevé bancaire aide à n’en oublier aucun : tout abonnement payé correspond à un compte, donc à un accès.",
            ],
          },
        ],
      },
      {
        h2: 'Les trois moments',
        blocs: [
          {
            tableau: {
              legende: 'Quand mettre à jour le registre',
              colonnes: ['Moment', 'Ce qu’il faut faire'],
              lignes: [
                ['Arrivée', 'Ouvrir les accès nécessaires au rôle, et seulement ceux-là ; les inscrire'],
                ['Changement de rôle', 'Retirer ce qui ne sert plus avant d’ajouter ce qui manque'],
                ['Départ', 'Fermer chaque ligne, changer les mots de passe partagés, vérifier les seconds facteurs'],
              ],
            },
          },
        ],
      },
      {
        h2: 'La revue',
        blocs: [
          {
            etapes: [
              "Deux fois par an, relisez le registre ligne par ligne.",
              "Pour chaque accès : la personne en a-t-elle encore besoin ?",
              "Vérifiez dans chaque outil la liste réelle des utilisateurs : elle doit correspondre.",
              "Fermez ce qui ne sert plus, et corrigez le registre.",
            ],
          },
          {
            paragraphes: [
              "L’écart entre le registre et la réalité est l’information la plus utile de la revue : c’est là que se trouvent les accès oubliés.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Noter les mots de passe dans le registre : il liste des accès, pas des secrets.",
      "Ne recenser que les outils « importants » : un compte de réservation contient une carte bancaire.",
      "Ouvrir des droits d’administration par commodité.",
    ],
    limites: [
      "Ce registre est un outil d’organisation. Il ne remplace pas la gestion des identités d’un système d’information, qui relève d’un prestataire informatique dans les structures plus importantes.",
    ],
    faq: [
      {
        q: 'Qui doit tenir le registre ?',
        a: "Une personne désignée, et le dirigeant doit pouvoir le lire. Dans une petite structure, c’est une tâche administrative qui se délègue, à condition que la personne ne tienne pas seule ses propres accès.",
      },
      {
        q: 'Faut-il y inscrire le dirigeant ?',
        a: "Oui. C’est souvent lui qui détient les droits d’administration, et il faut savoir où ils sont le jour où il est indisponible.",
      },
      {
        q: 'Est-ce une obligation légale ?',
        a: "La gestion des habilitations fait partie des mesures de sécurité attendues de tout organisme qui traite des données personnelles. Le registre en est une forme simple.",
      },
    ],
    liens: [
      { href: '/guides/fin-de-collaboration-assistante-externalisee', label: 'Terminer une collaboration proprement' },
      { href: '/guides/partager-un-mot-de-passe-en-securite', label: 'Partager un accès sans partager son mot de passe' },
      { href: '/guides/confidentialite-acces-et-outils', label: 'Déléguer en sécurité : les principes' },
      { href: '/guides/suivi-des-contrats-et-abonnements', label: 'Suivre ses contrats et abonnements' },
      { href: '/services/gestion-administrative', label: 'Confier sa gestion administrative' },
    ],
    sources: [SOURCE_CNIL_AUTH],
    cloture: 'Un accès qu’on ne peut pas nommer est un accès qu’on ne pourra pas fermer.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'modèle',
      motCle: 'registre des accès entreprise',
      variantes: ['gestion des habilitations TPE', 'qui a accès à quoi entreprise', 'tableau des accès informatiques'],
      persona: 'Dirigeant de petite structure sans service informatique',
      objectif: 'Fournir un registre simple et les moments où le mettre à jour',
      difference: 'Huit colonnes dont le second facteur et le mode de retrait, et une revue qui compare registre et réalité',
    },
  },

  {
    slug: 'fraude-au-faux-rib-et-au-president',
    type: 'situation',
    dossier: DOSSIER,
    categorie: 'Situation',
    nom: 'Fraude au faux RIB et au président',
    title: 'Fraude au faux RIB, fraude au président : la parade · BrittAssist',
    description:
      "Un fournisseur qui change de banque, un dirigeant qui demande un virement urgent : comment reconnaître ces fraudes et la vérification qui les arrête.",
    h1: 'Fraude au faux RIB et fraude au président : la vérification qui les arrête.',
    lede:
      "Le message est crédible : votre fournisseur habituel annonce un changement de banque, facture à l’appui. Ou votre dirigeant, en déplacement, demande un virement urgent et confidentiel. Ces fraudes ne visent pas l’informatique. Elles visent la personne qui paie.",
    reponseCourte: [
      "La fraude au changement de RIB consiste à se faire passer pour un fournisseur et à demander le paiement de ses factures sur un autre compte.",
      "La fraude au président consiste à se faire passer pour un dirigeant et à exiger un virement urgent et confidentiel.",
      "La parade tient en un geste : rappeler le fournisseur ou le dirigeant à un numéro déjà connu, jamais à celui indiqué dans le message.",
      "Aucune demande de paiement ne justifie de contourner la procédure, quelle que soit l’urgence invoquée.",
    ],
    sections: [
      {
        h2: 'Les deux scénarios',
        blocs: [
          {
            tableau: {
              legende: 'Fraude au faux RIB et fraude au président',
              colonnes: ['', 'Faux RIB', 'Fraude au président'],
              lignes: [
                ['L’escroc se fait passer pour', 'Un fournisseur, un bailleur, un prestataire', 'Le dirigeant, un avocat, un associé'],
                ['Ce qu’il demande', 'Régler les prochaines factures sur un nouveau compte', 'Un virement immédiat, souvent vers l’étranger'],
                ['Ses leviers', 'Un courrier ou une facture très bien imités', 'L’urgence, la confidentialité, l’autorité'],
                ['Sa cible', 'La personne qui enregistre les coordonnées bancaires', 'La personne qui a le pouvoir de virer'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les signaux',
        blocs: [
          {
            liste: [
              "Un changement de coordonnées bancaires annoncé par e-mail.",
              "Une adresse d’expéditeur presque identique à la vraie, à une lettre près.",
              "Une demande inhabituelle, présentée comme urgente.",
              "L’insistance sur la confidentialité : « n’en parlez à personne ».",
              "Un interlocuteur qui refuse d’être rappelé, ou donne un nouveau numéro.",
              "Un compte bancaire à l’étranger pour un fournisseur local.",
            ],
          },
        ],
      },
      {
        h2: 'La procédure',
        blocs: [
          {
            etapes: [
              "Tout changement de RIB est vérifié par un appel au fournisseur, à un numéro figurant déjà dans vos dossiers.",
              "La personne qui saisit les coordonnées bancaires n’est pas celle qui valide le paiement.",
              "Aucun virement inhabituel n’est exécuté sur la seule foi d’un e-mail ou d’un appel, même du dirigeant.",
              "Un mot ou une question convenus à l’avance permettent de vérifier une demande exceptionnelle.",
              "La procédure est écrite, connue, et s’applique aussi quand le dirigeant est pressé.",
            ],
          },
          {
            paragraphes: [
              "Le dernier point est le plus important. Ces fraudes réussissent parce qu’un collaborateur veut bien faire et n’ose pas contredire l’urgence. Il faut qu’il sache qu’il a le droit, et le devoir, de vérifier.",
            ],
          },
        ],
      },
      {
        h2: 'Si le virement est parti',
        blocs: [
          {
            etapes: [
              "Appelez votre banque immédiatement pour demander le rappel des fonds : chaque heure compte.",
              "Rassemblez les éléments : messages, numéros, coordonnées bancaires utilisées.",
              "Déposez plainte.",
              "Prévenez le vrai fournisseur, et vos autres interlocuteurs s’ils peuvent être visés.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Vérifier en appelant le numéro indiqué dans le message suspect.",
      "Faire une exception « parce que c’est le patron qui demande ».",
      "Confier à une seule personne la saisie du RIB et l’exécution du paiement.",
    ],
    limites: [
      "Cette page décrit des mesures d’organisation. En cas de fraude, votre banque, les forces de l’ordre et le dispositif Cybermalveillance.gouv.fr sont les interlocuteurs.",
    ],
    faq: [
      {
        q: 'Une petite entreprise est-elle vraiment visée ?',
        a: "Oui. Ces fraudes s’adressent à toute structure qui règle des factures par virement. Une petite équipe, où tout le monde se fait confiance et où les procédures ne sont pas écrites, est une cible commode.",
      },
      {
        q: 'Une assistante externalisée peut-elle être visée ?',
        a: "Toute personne qui prépare des paiements peut l’être. C’est une raison de séparer les rôles : la préparation se délègue, la validation et l’exécution restent chez le dirigeant.",
      },
      {
        q: 'Comment vérifier sans vexer un fournisseur ?',
        a: "En le disant : « nous vérifions systématiquement tout changement de coordonnées bancaires ». Un vrai fournisseur comprend, et s’en trouve plutôt rassuré.",
      },
    ],
    liens: [
      { href: '/guides/circuit-des-factures-fournisseurs', label: 'Le circuit des factures fournisseurs' },
      { href: '/guides/rediger-une-procedure-interne', label: 'Rédiger une procédure interne' },
      { href: '/guides/registre-des-acces-entreprise', label: 'Tenir un registre des accès' },
      { href: '/guides/confidentialite-acces-et-outils', label: 'Déléguer en sécurité : les principes' },
      { href: '/services/facturation', label: 'Confier sa facturation et ses relances' },
    ],
    sources: [
      { href: 'https://www.cybermalveillance.gouv.fr/medias/2023/05/240208_FicheReflexe_FraudeVirement.pdf', label: 'Cybermalveillance.gouv.fr — Fiche réflexe : la fraude au virement ou au faux RIB' },
    ],
    cloture: 'Un appel de deux minutes, à un numéro que vous connaissiez déjà. Toute la parade est là.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'problème-solution',
      motCle: 'fraude au faux RIB',
      variantes: ['fraude au président', 'faux ordre de virement', 'arnaque changement de RIB fournisseur'],
      persona: 'Dirigeant ou personne chargée des paiements dans une petite structure',
      objectif: 'Faire reconnaître les deux fraudes et installer la vérification',
      difference: 'Insiste sur le droit de vérifier même face au dirigeant, et sur la séparation préparation / validation',
    },
  },

  {
    slug: 'sauvegarde-des-documents-entreprise',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Sauvegarder les documents de l’entreprise',
    title: 'Sauvegarde des documents d’entreprise : la règle simple · BrittAssist',
    description:
      "Plusieurs copies, des supports différents, une copie hors des locaux, et un test de restauration : la sauvegarde d’une petite entreprise, sans jargon.",
    h1: 'Sauvegarder les documents de l’entreprise : quatre questions à se poser.',
    lede:
      "Une sauvegarde ne sert qu’un jour : celui où tout le reste a disparu. Ce jour-là, on découvre qu’elle date de huit mois, ou qu’elle était branchée sur l’ordinateur chiffré par le même logiciel malveillant.",
    reponseCourte: [
      "Une sauvegarde est une copie indépendante : une suppression ou une attaque sur l’original ne doit pas l’atteindre.",
      "Le repère courant : plusieurs copies, sur des supports différents, dont une hors des locaux.",
      "Une sauvegarde qui n’a jamais été testée n’est qu’un espoir : il faut avoir restauré un fichier au moins une fois.",
      "La synchronisation d’un espace en ligne n’est pas une sauvegarde.",
    ],
    sections: [
      {
        h2: 'Les quatre questions',
        blocs: [
          {
            etapes: [
              "Quoi ? La liste de ce qui doit pouvoir être retrouvé : documents, comptabilité, messagerie, données des outils métier.",
              "Où ? Sur un support distinct de l’original, et dans un lieu distinct pour au moins une copie.",
              "Quand ? À une fréquence qui correspond à ce que vous acceptez de perdre : un jour, une semaine.",
              "Qui vérifie ? Une personne nommée, qui contrôle que la sauvegarde a tourné et qui teste une restauration.",
            ],
          },
        ],
      },
      {
        h2: 'Sauvegarde, synchronisation, archivage',
        blocs: [
          {
            tableau: {
              legende: 'Trois notions souvent confondues',
              colonnes: ['Notion', 'Ce qu’elle fait', 'Ce qu’elle ne fait pas'],
              lignes: [
                ['Synchronisation', 'Garde les mêmes fichiers sur plusieurs appareils', 'Protéger d’une suppression : elle la propage'],
                ['Sauvegarde', 'Conserve une copie indépendante, à une date donnée', 'Organiser vos documents'],
                ['Archivage', 'Conserve durablement ce qui n’est plus utilisé', 'Permettre un retour rapide en cas d’incident'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les règles pratiques',
        blocs: [
          {
            liste: [
              "Déconnectez le support de sauvegarde une fois la copie faite : un disque branché en permanence subit le même sort que l’ordinateur.",
              "Gardez plusieurs versions, pas seulement la dernière.",
              "Protégez la sauvegarde : elle contient tout ce que vous avez de confidentiel.",
              "N’oubliez pas ce qui vit dans des outils en ligne : messagerie, facturation, gestion commerciale.",
              "Notez où sont les sauvegardes et comment restaurer, ailleurs que sur le poste sauvegardé.",
            ],
          },
        ],
      },
      {
        h2: 'Le test de restauration',
        blocs: [
          {
            paragraphes: [
              "Une fois par trimestre, choisissez un fichier au hasard et restaurez-le depuis la sauvegarde. Chronométrez. Si l’opération échoue ou prend une journée, vous venez d’apprendre quelque chose d’utile, à un moment où cela ne coûte rien.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Compter sur l’espace de stockage en ligne comme sur une sauvegarde.",
      "Laisser le disque de sauvegarde branché en permanence.",
      "Ne jamais avoir restauré un seul fichier.",
    ],
    limites: [
      "La mise en place technique d’une sauvegarde relève de votre prestataire informatique. Cette page vous donne les questions à lui poser.",
    ],
    faq: [
      {
        q: 'À quelle fréquence sauvegarder ?',
        a: "Selon ce que vous pouvez accepter de refaire. Si perdre une semaine de travail est supportable, une sauvegarde hebdomadaire suffit ; sinon, elle doit être quotidienne.",
      },
      {
        q: 'Mon fournisseur d’espace en ligne ne sauvegarde-t-il pas déjà ?',
        a: "Il protège son service contre ses propres pannes. Il ne vous protège pas forcément d’une suppression faite depuis votre compte, d’une erreur ou d’un compte compromis. Vérifiez ce que prévoit votre contrat.",
      },
      {
        q: 'Qui s’en occupe dans une petite structure ?',
        a: "La mise en place revient à un prestataire informatique. La vérification régulière — la sauvegarde a-t-elle tourné, le test a-t-il réussi — est un contrôle simple, qui peut être inscrit à l’échéancier administratif.",
      },
    ],
    liens: [
      { href: '/guides/choisir-un-espace-de-stockage-partage', label: 'Choisir un espace de stockage partagé' },
      { href: '/guides/duree-de-conservation-documents-entreprise', label: 'Combien de temps conserver les documents' },
      { href: '/guides/echeancier-administratif-entreprise', label: 'Construire son échéancier administratif' },
      { href: '/guides/confidentialite-acces-et-outils', label: 'Déléguer en sécurité : les principes' },
      { href: '/services/gestion-administrative', label: 'Confier sa gestion administrative' },
    ],
    sources: [
      { href: 'https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/sauvegardes', label: 'Cybermalveillance.gouv.fr — Les sauvegardes : bonnes pratiques' },
    ],
    cloture: 'On ne juge pas une sauvegarde à sa présence, mais au jour où l’on en a eu besoin.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'sauvegarde des données entreprise',
      variantes: ['sauvegarder ses documents professionnels', 'sauvegarde TPE bonnes pratiques', 'différence synchronisation sauvegarde'],
      persona: 'Dirigeant de TPE sans service informatique',
      objectif: 'Donner les quatre questions à se poser et à poser à son prestataire',
      difference: 'Sans jargon, centré sur le test de restauration et la confusion avec la synchronisation',
    },
  },
];
