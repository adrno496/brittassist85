/**
 * Série « secrétariat externalisé » — téléphone, boîtes partagées, relation
 * commerciale, événements.
 *
 * Le guide /guides/secretariat-externalise distingue le télésecrétariat, qui
 * décroche, de l'assistance, qui traite. Ces pages décrivent ce qui se passe à
 * la jonction : les appels manqués, l'annonce du répondeur, la boîte partagée,
 * le relais entre télésecrétariat et assistante. S'y ajoutent la chaîne
 * commerciale entre la demande et la facture, la logistique d'un recrutement
 * et d'un salon, et un modèle de note de décision.
 *
 * BrittAssist n'assure pas de permanence téléphonique : chaque page qui touche
 * au téléphone le redit, et renvoie vers le métier qui s'en charge.
 */
import type { Guide } from '../guides.ts';
import { lot } from './secretariat-lots.ts';

const AGENDA = 'agenda-emails-reunions';
const DEPLACEMENTS = 'deplacements-et-evenements-professionnels';
const FACTURATION = 'devis-factures-relances';
const MODELES = 'modeles-et-checklists';

const SOURCE_CNIL_RECRUTEMENT = { href: 'https://www.cnil.fr/fr/recrutement-et-donnees-personnelles-dans-les-tpepme-cinq-questions-incontournables-se-poser', label: 'CNIL — Recrutement et données personnelles dans les TPE/PME : cinq questions à se poser' };

export const secretariatRelation: Guide[] = [
  {
    slug: 'appels-manques-entreprise',
    type: 'situation',
    dossier: AGENDA,
    categorie: 'Situation',
    nom: 'Vous ratez des appels : que faire',
    title: 'Appels manqués : répondeur, rappel ou télésecrétariat ? · BrittAssist',
    description:
      "Avant de payer un télésecrétariat, mesurez une semaine d’appels : combien, à quelles heures, de qui. Trois réponses possibles selon ce que montre le relevé.",
    h1: 'Vous ratez des appels : mesurer d’abord, choisir ensuite.',
    lede:
      "Sur un toit, en rendez-vous, au volant : le téléphone sonne, et vous ne répondez pas. Le soir, six appels en absence, dont deux sans message. La tentation est d’acheter tout de suite une solution. Une semaine de relevé dit laquelle — et dit parfois qu’il n’en faut aucune.",
    reponseCourte: [
      "Avant de choisir, relevez une semaine d’appels : combien, à quelles heures, de qui, et combien ont été rappelés.",
      "Peu d’appels rappelés trop tard : une annonce claire et deux plages de rappel suffisent.",
      "Des demandes qui se traitent sans vous : elles passent à l’écrit, et quelqu’un les traite.",
      "Beaucoup d’appels dont chacun est un client possible : c’est le métier du télésecrétariat, non celui d’une assistante externalisée.",
    ],
    sections: [
      {
        h2: 'Une semaine de relevé',
        blocs: [
          {
            tableau: {
              legende: 'Relevé d’une semaine d’appels',
              colonnes: ['Colonne', 'Ce qu’elle apprend'],
              lignes: [
                ['Jour et heure', 'Les plages où vous êtes injoignable'],
                ['Qui appelait', 'Client, prospect, fournisseur, démarchage'],
                ['Message laissé ou non', 'Si votre annonce donne envie d’en laisser un'],
                ['Objet', 'Ce qui aurait pu se régler sans vous'],
                ['Rappelé, et quand', 'Le délai réel de vos rappels'],
              ],
            },
          },
          {
            paragraphes: [
              "Le journal d’appels de votre téléphone fournit les deux premières colonnes sans effort. Les trois autres demandent une minute par jour, pendant cinq jours. Presque toujours, le relevé surprend : moins d’appels importants qu’on ne le croyait, et davantage laissés sans rappel.",
            ],
          },
        ],
      },
      {
        h2: 'Trois situations, trois réponses',
        blocs: [
          {
            tableau: {
              legende: 'Choisir selon ce que montre le relevé',
              colonnes: ['Ce que montre le relevé', 'La réponse', 'Ce qu’elle demande'],
              lignes: [
                ['Peu d’appels, rappelés trop tard', 'Une annonce précise et deux plages de rappel par jour', 'De la discipline, aucun budget'],
                ['Des demandes qui ne vous concernent pas directement', 'Un passage à l’écrit, et quelqu’un qui traite', 'Un périmètre défini avec une assistante'],
                ['Beaucoup d’appels, aux heures où vous ne pouvez pas répondre', 'Un télésecrétariat, qui décroche à votre nom', 'Des consignes écrites, et un coût lié au volume'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Ce qu’une assistante externalisée ne fait pas',
        blocs: [
          {
            paragraphes: [
              "Une assistante externalisée ne décroche pas en continu. Le périmètre d’un Private Office couvre la coordination et le traitement des demandes ; la permanence téléphonique est un métier distinct, celui du télésecrétariat. Les deux se complètent : l’un prend le message, l’autre y donne suite.",
              "Ce qu’une assistante peut prendre, c’est la deuxième situation du tableau : la demande de rendez-vous, la question sur une facture, le fournisseur qui confirme une livraison. À condition que ces demandes lui parviennent par écrit — par un message transmis, un formulaire, une adresse dédiée.",
            ],
          },
        ],
      },
      {
        h2: 'Réduire les appels à la source',
        blocs: [
          {
            liste: [
              "Annoncez vos plages de rappel : sur le répondeur, dans votre signature, sur vos devis.",
              "Proposez la prise de rendez-vous par écrit à ceux qui appellent pour cela.",
              "Répondez d’avance aux trois questions qui reviennent : délais, zone d’intervention, moyens de paiement.",
              "Donnez une adresse pour les factures et les pièces, pour qu’on cesse de vous appeler à ce sujet.",
            ],
          },
          {
            paragraphes: [
              "Un appel évité n’est pas un client perdu. C’est une question à laquelle il a été répondu avant qu’elle soit posée.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Souscrire un télésecrétariat sans connaître son volume d’appels.",
      "Garder une annonce qui ne dit ni quand vous rappelez, ni quoi laisser.",
      "Promettre de rappeler « dès que possible », et rappeler le surlendemain.",
    ],
    limites: [
      "BrittAssist n’assure pas de permanence téléphonique. Si le relevé montre un besoin de décroché en continu, c’est vers un télésecrétariat qu’il faut se tourner.",
    ],
    faq: [
      {
        q: 'Combien d’appels manqués justifient un télésecrétariat ?',
        a: "Il n’y a pas de seuil. Raisonnez sur ce que vaut un appel : dans un métier où celui qui décroche le premier emporte le chantier, quelques appels par semaine suffisent. Dans un métier où le client attend volontiers un rappel, beaucoup d’appels ne le justifient pas.",
      },
      {
        q: 'Un répondeur fait-il fuir les clients ?',
        a: "Un répondeur muet, oui. Une annonce qui dit quand vous rappelez, et qui le tient, est très bien acceptée. Ce qui fait fuir, c’est l’absence de rappel.",
      },
      {
        q: 'Peut-on faire rappeler ses clients par quelqu’un d’autre ?',
        a: "Pour confirmer un rendez-vous, donner une information ou relancer une pièce, oui, si c’est prévu au périmètre et que la personne a été présentée. Pour discuter d’un prix ou d’un problème, c’est vous qu’ils veulent entendre.",
      },
    ],
    liens: [
      { href: '/guides/filtrer-les-appels-et-messages', label: 'Filtrer les appels et les messages' },
      { href: '/guides/secretariat-externalise', label: 'Les cinq formes du secrétariat externalisé' },
      { href: '/guides/annonce-de-repondeur-professionnel', label: 'L’annonce de répondeur professionnel' },
      { href: '/guides/telesecretariat-et-assistante-externalisee', label: 'Télésecrétariat et assistante : organiser le relais' },
      { href: '/assistante/artisans-btp', label: 'L’assistance pour les entreprises du bâtiment' },
      { href: '/services/coordination', label: 'La coordination de vos interlocuteurs' },
    ],
    cloture: 'On ne règle pas des appels manqués en décrochant plus. On les règle en sachant lesquels comptaient.',
    ...lot('B'),
    cadrage: {
      intention: 'problème-solution',
      motCle: 'appels manqués entreprise que faire',
      variantes: ['je rate des appels clients', 'ne plus manquer d’appels artisan', 'répondeur ou télésecrétariat', 'gérer les appels quand on est sur un chantier'],
      persona: 'Artisan ou indépendant injoignable une partie de la journée',
      objectif: 'Faire mesurer une semaine d’appels avant de choisir une solution',
      difference: 'Traite l’appel auquel on n’a pas répondu ; la page sur le filtrage traite l’appel qui interrompt',
    },
  },

  {
    slug: 'annonce-de-repondeur-professionnel',
    type: 'modele',
    dossier: AGENDA,
    categorie: 'Modèle',
    nom: 'L’annonce de répondeur professionnel',
    title: 'Annonce de répondeur professionnel : cinq textes · BrittAssist',
    description:
      "Qui vous êtes, quand vous rappelez, quoi laisser, par où passer sinon : les quatre éléments d’une annonce de répondeur, et cinq textes prêts à enregistrer.",
    h1: 'L’annonce de répondeur : vingt secondes qui disent quoi faire.',
    lede:
      "« Vous êtes bien sur le répondeur de… laissez un message. » L’appelant ne sait ni si vous écouterez, ni quand vous rappellerez, ni ce que vous attendez de lui. Il raccroche, et rappelle trois fois. Une annonce bien faite transforme un appel manqué en demande complète.",
    reponseCourte: [
      "Une annonce utile contient quatre éléments : qui vous êtes, quand vous rappelez, quoi laisser, et l’autre voie possible.",
      "Elle dure une vingtaine de secondes, pas davantage.",
      "Elle fait une promesse de rappel précise, que vous tenez.",
      "Elle change quand votre situation change : congés, chantier, horaires.",
    ],
    sections: [
      {
        h2: 'Les quatre éléments',
        blocs: [
          {
            tableau: {
              legende: 'Composition d’une annonce de répondeur',
              colonnes: ['Élément', 'Ce qu’il évite'],
              lignes: [
                ['Votre nom et celui de l’entreprise', 'Le doute sur le numéro composé'],
                ['Le moment où vous rappelez', 'Trois rappels dans l’heure'],
                ['Ce qu’il faut laisser : nom, numéro, objet', 'Le message « rappelez-moi », sans rien d’autre'],
                ['L’autre voie : e-mail, SMS, numéro d’urgence', 'L’attente pour ce qui se réglait par écrit'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Cinq textes',
        blocs: [
          {
            modele: {
              titre: 'Annonce de tous les jours',
              lignes: [
                "« Bonjour, vous êtes sur la messagerie de [Prénom Nom], [Entreprise]. Je rappelle chaque jour entre midi et treize heures, et après dix-sept heures. Laissez-moi votre nom, votre numéro et l’objet de votre appel. Pour un devis, vous pouvez aussi écrire à [adresse]. À très vite. »",
              ],
            },
          },
          {
            modele: {
              titre: 'En intervention ou sur chantier',
              lignes: [
                "« Bonjour, [Prénom Nom], [Entreprise]. Je suis en intervention et ne peux pas répondre. Je rappelle ce soir après dix-huit heures. Dites-moi votre nom, votre numéro et en une phrase ce dont il s’agit. »",
              ],
            },
          },
          {
            modele: {
              titre: 'Pendant les congés',
              lignes: [
                "« Bonjour, [Entreprise] est fermée jusqu’au [date] inclus. Les messages laissés ici seront écoutés à la réouverture. Pour une demande en cours, écrivez à [adresse] : elle est relevée pendant la fermeture. »",
              ],
            },
          },
          {
            modele: {
              titre: 'En dehors des horaires',
              lignes: [
                "« Bonjour, vous êtes bien chez [Entreprise]. Nous répondons du lundi au vendredi, de neuf heures à dix-sept heures. Laissez votre nom, votre numéro et l’objet de votre appel : vous serez rappelé le prochain jour ouvré. »",
              ],
            },
          },
          {
            modele: {
              titre: 'Avec une voie d’urgence',
              lignes: [
                "« Bonjour, [Prénom Nom]. Je ne peux pas répondre pour le moment. Pour une urgence sur une installation en cours, appelez le [numéro]. Pour toute autre demande, laissez un message : je rappelle dans la journée. »",
              ],
            },
          },
        ],
      },
      {
        h2: 'Ce qu’il vaut mieux éviter',
        blocs: [
          {
            liste: [
              "« Je vous rappelle dès que possible » : la formule ne promet rien, et l’appelant le sait.",
              "Une annonce de quarante secondes, que personne n’écoute jusqu’au bout.",
              "Une adresse e-mail longue ou difficile à épeler, dictée trop vite.",
              "Une annonce de congés encore en place trois semaines après le retour.",
            ],
          },
        ],
      },
      {
        h2: 'Tenir la promesse',
        blocs: [
          {
            paragraphes: [
              "Une annonce n’est rien d’autre qu’un engagement. Si elle dit « je rappelle après dix-sept heures », la plage de dix-sept heures doit figurer à votre agenda. Les messages s’écoutent tous, dans l’ordre, avec de quoi noter : nom, numéro, objet, suite à donner. Ceux qui ne vous demandent pas personnellement peuvent être transcrits et confiés à la personne qui traite vos demandes.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Garder l’annonce par défaut de l’opérateur.",
      "Annoncer un rappel « dans l’heure » qu’on ne tiendra pas.",
      "Oublier de changer l’annonce au départ et au retour de congés.",
    ],
    faq: [
      {
        q: 'Faut-il donner son adresse e-mail dans l’annonce ?',
        a: "Seulement si elle se retient à l’oreille. Une adresse courte convient ; une adresse longue se remplace par « écrivez-nous depuis le formulaire du site ».",
      },
      {
        q: 'Sa propre voix, ou une voix enregistrée ?',
        a: "La vôtre, pour une petite structure : l’appelant vient de composer votre numéro, il s’attend à vous entendre. Parlez lentement, et réécoutez-vous avant de valider.",
      },
      {
        q: 'Quelle longueur pour une annonce de répondeur ?',
        a: "Une vingtaine de secondes, soit quatre phrases. Au-delà, l’appelant décroche avant la fin et ne retient pas ce que vous lui demandiez de laisser.",
      },
    ],
    liens: [
      { href: '/guides/filtrer-les-appels-et-messages', label: 'Filtrer les appels et les messages' },
      { href: '/guides/preparer-son-absence', label: 'Préparer son absence' },
      { href: '/guides/appels-manques-entreprise', label: 'Vous ratez des appels : que faire' },
      { href: '/guides/gerer-les-demandes-de-rendez-vous', label: 'Gérer les demandes de rendez-vous' },
      { href: '/services/coordination', label: 'La coordination de vos interlocuteurs' },
    ],
    cloture: 'Vingt secondes bien dites valent mieux qu’un téléphone décroché à moitié.',
    ...lot('C'),
    cadrage: {
      intention: 'modèle',
      motCle: 'annonce répondeur professionnel',
      variantes: ['message répondeur professionnel exemple', 'texte messagerie vocale entreprise', 'message d’accueil téléphonique artisan', 'annonce répondeur congés'],
      persona: 'Indépendant ou artisan qui a conservé l’annonce par défaut de son téléphone',
      objectif: 'Faire enregistrer une annonce en quatre éléments, avec une promesse de rappel tenue',
      difference: 'Des textes d’annonce vocale prêts à enregistrer ; la page sur l’absence ne donne que le message d’absence par e-mail',
    },
  },

  {
    slug: 'boite-mail-partagee-entreprise',
    type: 'methode',
    dossier: AGENDA,
    categorie: 'Méthode',
    nom: 'Organiser une boîte mail partagée',
    title: 'Boîte mail partagée (contact@) : qui lit, qui répond · BrittAssist',
    description:
      "Alias, liste ou boîte partagée : ce qui les distingue, et les cinq règles pour qu’une adresse contact@ ou facturation@ ait toujours un responsable.",
    h1: 'contact@, facturation@ : organiser une boîte partagée pour que chaque message ait un responsable.',
    lede:
      "Une adresse générique lue par trois personnes n’est lue par personne. Chacune suppose que l’autre a répondu. Le client, lui, attend. Le problème ne vient pas de l’adresse, mais de ce qu’aucune règle ne dit à qui appartient un message une fois qu’il est arrivé.",
    reponseCourte: [
      "Un alias, une liste de diffusion et une boîte partagée ne sont pas la même chose : seule la boîte partagée montre qui a répondu.",
      "Chaque adresse générique a un responsable nommé, et un suppléant.",
      "Chaque message porte un état visible : à traiter, attribué, en attente, clos.",
      "On répond depuis l’adresse générique, et l’on signe de son nom.",
    ],
    sections: [
      {
        h2: 'Trois objets que l’on confond',
        blocs: [
          {
            tableau: {
              legende: 'Alias, liste de diffusion, boîte partagée',
              colonnes: ['Objet', 'Ce qui se passe', 'Sa limite'],
              lignes: [
                ['Alias', 'Le message est redirigé vers une ou plusieurs boîtes personnelles', 'Personne ne voit si un autre a répondu'],
                ['Liste de diffusion', 'Le message est copié à tous les membres', 'Chacun en a un exemplaire, sans suivi commun'],
                ['Boîte partagée', 'Un seul exemplaire, dans une boîte ouverte à plusieurs', 'Demande des règles d’attribution'],
              ],
            },
          },
          {
            paragraphes: [
              "Pour une adresse à laquelle des clients écrivent, la boîte partagée est la seule qui tienne. Elle garde un exemplaire unique, et laisse voir les réponses déjà parties.",
            ],
          },
        ],
      },
      {
        h2: 'Les cinq règles',
        blocs: [
          {
            etapes: [
              "Un responsable par adresse, et un suppléant pour ses absences.",
              "Un délai de première réponse annoncé, et tenu.",
              "Un état sur chaque message : à traiter, attribué à quelqu’un, en attente d’un tiers, clos.",
              "Une réponse envoyée depuis l’adresse générique, signée du nom de celui qui répond.",
              "Une revue hebdomadaire des messages restés sans propriétaire.",
            ],
          },
          {
            paragraphes: [
              "La troisième règle est celle qui change tout. Les catégories ou les libellés de n’importe quelle messagerie y suffisent : aucun outil supplémentaire n’est nécessaire pour savoir, d’un coup d’œil, ce qui reste à faire.",
            ],
          },
        ],
      },
      {
        h2: 'Lesquelles créer',
        blocs: [
          {
            liste: [
              "Une adresse de contact, pour les demandes entrantes.",
              "Une adresse de facturation, pour les factures de vos fournisseurs et les questions de vos clients sur les leurs.",
              "Éventuellement une adresse pour les candidatures, si vous recrutez régulièrement.",
            ],
          },
          {
            paragraphes: [
              "Pas davantage. Chaque adresse créée est une boîte à relever. Cinq adresses dont trois sont orphelines font plus de dégâts qu’une seule bien tenue.",
            ],
          },
        ],
      },
      {
        h2: 'L’ouvrir à une assistante',
        blocs: [
          {
            paragraphes: [
              "Une boîte partagée est le premier accès que l’on donne à une assistante, et le plus simple : elle y est ajoutée comme membre, sous son propre compte, sans que personne lui communique un mot de passe. Elle y tient les états, répond à ce qui relève de son périmètre et vous attribue ce qui demande votre décision.",
              "C’est aussi une bonne première étape pour qui hésite à ouvrir sa propre messagerie : la boîte générique contient les demandes, non votre correspondance.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Partager le mot de passe d’une boîte générique au lieu d’y ajouter des membres.",
      "Répondre depuis sa boîte personnelle : la réponse disparaît du suivi commun.",
      "Créer une adresse par besoin, puis n’en relever que deux.",
    ],
    faq: [
      {
        q: 'Alias ou boîte partagée ?',
        a: "Un alias convient à une personne seule qui veut une adresse plus présentable. Dès que deux personnes doivent répondre, il faut une boîte partagée : c’est le seul moyen de voir ce que l’autre a fait.",
      },
      {
        q: 'Faut-il une adresse par fonction dans une petite équipe ?',
        a: "Deux suffisent en général : une pour les demandes, une pour la facturation. Elles survivent aux changements de personnes, ce qu’une adresse nominative ne fait pas.",
      },
      {
        q: 'Que deviennent ces boîtes quand le responsable s’absente ?',
        a: "Le suppléant prend la suite, sans transfert ni mot de passe : il est déjà membre de la boîte. C’est l’avantage d’une boîte partagée sur une adresse personnelle.",
      },
    ],
    liens: [
      { href: '/guides/organiser-sa-boite-mail-de-dirigeant', label: 'Organiser sa boîte mail' },
      { href: '/guides/delegation-d-acces-messagerie-et-agenda', label: 'La délégation de messagerie et d’agenda' },
      { href: '/guides/traitement-du-courrier-entrant', label: 'Traiter le courrier entrant' },
      { href: '/guides/reponses-types-emails', label: 'Constituer des réponses types' },
      { href: '/services/coordination', label: 'La coordination de vos interlocuteurs' },
    ],
    cloture: 'Une adresse générique n’a pas besoin d’un outil. Elle a besoin d’un nom en face de chaque message.',
    ...lot('C'),
    cadrage: {
      intention: 'méthode',
      motCle: 'boîte mail partagée entreprise',
      variantes: ['organiser une adresse contact@', 'adresse e-mail générique entreprise', 'boîte aux lettres partagée qui répond', 'alias ou boîte partagée'],
      persona: 'Petite équipe dont l’adresse générique est lue par tous et traitée par personne',
      objectif: 'Faire choisir la boîte partagée et poser cinq règles d’attribution',
      difference: 'Traite la boîte commune à plusieurs personnes ; les guides existants traitent la boîte personnelle du dirigeant',
    },
  },

  {
    slug: 'telesecretariat-et-assistante-externalisee',
    type: 'methode',
    dossier: AGENDA,
    categorie: 'Méthode',
    nom: 'Télésecrétariat et assistante : le relais',
    title: 'Télésecrétariat et assistante : organiser le relais · BrittAssist',
    description:
      "L’un décroche, l’autre traite. La fiche de consignes à remettre au télésecrétariat, le format du message, et le circuit qui évite le double rappel.",
    h1: 'Télésecrétariat et assistante externalisée : qui décroche, qui traite.',
    lede:
      "Un télésecrétariat prend un message à dix heures. À midi, vous le lisez entre deux rendez-vous. À dix-huit heures, personne n’a rappelé. Le service a fonctionné, et le client attend toujours. Entre celui qui décroche et celui qui traite, il existe un passage que personne n’a organisé.",
    reponseCourte: [
      "Le télésecrétariat prend l’appel et rédige un message ; l’assistante y donne suite.",
      "Le message suit un format fixe : qui, quoi, pour quand, et ce qui a été dit à l’appelant.",
      "Les messages arrivent tous au même endroit, et chacun reçoit un état.",
      "Une fiche de consignes d’une page, remise au télésecrétariat, évite l’essentiel des ratés.",
    ],
    sections: [
      {
        h2: 'Le circuit',
        blocs: [
          {
            tableau: {
              legende: 'Qui fait quoi, de l’appel à la clôture',
              colonnes: ['Étape', 'Télésecrétariat', 'Assistante', 'Vous'],
              lignes: [
                ['L’appel', 'Décroche à votre nom, qualifie', '—', '—'],
                ['Le message', 'Le rédige au format convenu', 'Le reçoit, l’enregistre dans le suivi', '—'],
                ['La suite', '—', 'Traite ce qui relève de son périmètre', 'Rappelez ceux qui vous demandent'],
                ['La clôture', '—', 'Note ce qui a été répondu', 'Voyez ce qui reste ouvert'],
              ],
            },
          },
        ],
      },
      {
        h2: 'La fiche de consignes',
        blocs: [
          {
            modele: {
              titre: 'Consignes à remettre au télésecrétariat',
              lignes: [
                "Formule de décroché : « [Entreprise], bonjour. »",
                "Qui est transféré sans attendre : [liste courte de noms ou de cas].",
                "Ce qui est toujours demandé : nom, société, numéro, objet de l’appel, échéance.",
                "Ce qui n’est jamais promis : un prix, un délai d’intervention, un rappel dans l’heure.",
                "Ce qui est dit sur le rappel : « Vous serez rappelé [aujourd’hui avant dix-huit heures / demain matin]. »",
                "Où part le message : [adresse ou canal unique].",
                "En cas d’urgence définie ci-dessous : appeler le [numéro].",
              ],
            },
          },
          {
            paragraphes: [
              "La quatrième ligne protège tout le monde. Un opérateur qui veut rendre service promet volontiers un rappel « tout de suite » ; c’est vous qui ne le tenez pas, et c’est votre image qui en souffre.",
            ],
          },
        ],
      },
      {
        h2: 'Le format du message',
        blocs: [
          {
            modele: {
              titre: 'Message transmis après un appel',
              lignes: [
                "Appel du [date] à [heure].",
                "Qui : [nom, société, numéro].",
                "Quoi : [l’objet, en une phrase].",
                "Pour quand : [l’échéance exprimée par l’appelant].",
                "Ce qui lui a été dit : [la promesse faite, mot pour mot].",
              ],
            },
          },
        ],
      },
      {
        h2: 'Les trois ratés classiques',
        blocs: [
          {
            liste: [
              "Le message sans objet : « M. Martin a appelé, rappelez-le. » Il oblige à rappeler pour demander pourquoi.",
              "Le double rappel : l’assistante et vous rappelez tous les deux, faute d’un état sur le message.",
              "La promesse orpheline : un délai annoncé au téléphone, que personne n’a lu.",
            ],
          },
          {
            paragraphes: [
              "Les trois ont la même cause : un message qui n’est pas enregistré dans un suivi commun. Dès qu’il l’est, quelqu’un en est responsable, et les deux autres le voient.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Faire arriver les messages à la fois par e-mail, par SMS et sur une application.",
      "Laisser la fiche de consignes vieillir alors que les cas d’appel changent.",
      "Donner au télésecrétariat le droit de promettre un délai.",
    ],
    limites: [
      "BrittAssist n’assure pas de permanence téléphonique et ne propose pas de télésecrétariat. Cette page décrit comment faire travailler ensemble deux prestataires distincts.",
    ],
    faq: [
      {
        q: 'L’assistante peut-elle être l’interlocutrice du télésecrétariat ?',
        a: "Oui, et c’est le plus simple : elle met à jour les consignes, signale un message mal rédigé et règle les questions de fonctionnement. Vous n’intervenez que pour décider qui est transféré directement.",
      },
      {
        q: 'Faut-il ouvrir son agenda au télésecrétariat ?',
        a: "Seulement s’il pose lui-même des rendez-vous, et alors avec des droits limités à certaines plages. Sinon, il prend la demande, et l’assistante fixe le rendez-vous.",
      },
      {
        q: 'Un seul prestataire peut-il assurer télésecrétariat et assistance ?',
        a: "Certains le proposent. Ce sont deux organisations différentes : l’une est faite pour décrocher vite, l’autre pour suivre un sujet dans la durée. Vérifiez qui, concrètement, fera chacune des deux choses.",
      },
    ],
    liens: [
      { href: '/guides/secretariat-externalise', label: 'Les cinq formes du secrétariat externalisé' },
      { href: '/guides/filtrer-les-appels-et-messages', label: 'Filtrer les appels et les messages' },
      { href: '/guides/canal-pour-transmettre-ses-demandes', label: 'Par quel canal transmettre ses demandes' },
      { href: '/guides/appels-manques-entreprise', label: 'Mesurer ses appels manqués avant de choisir' },
      { href: '/assistante/professionnels-sante', label: 'L’assistance pour les professionnels de santé' },
      { href: '/services/coordination', label: 'La coordination de vos interlocuteurs' },
    ],
    cloture: 'Décrocher est un métier. Donner suite en est un autre. Il faut seulement que le message passe de l’un à l’autre.',
    ...lot('D'),
    cadrage: {
      intention: 'méthode',
      motCle: 'télésecrétariat et assistante externalisée',
      variantes: ['télésecrétariat ou assistante administrative', 'combiner permanence téléphonique et secrétariat', 'consignes télésecrétariat', 'transmission des messages télésecrétariat'],
      persona: 'Professionnel qui utilise un télésecrétariat et veut que les messages soient suivis d’effet',
      objectif: 'Organiser le passage du message entre celui qui décroche et celle qui traite',
      difference: 'Décrit le relais entre deux formes de secrétariat que le guide de référence se borne à distinguer',
    },
  },

  {
    slug: 'coordonner-des-entretiens-de-recrutement',
    type: 'methode',
    dossier: AGENDA,
    categorie: 'Méthode',
    nom: 'Coordonner des entretiens de recrutement',
    title: 'Entretiens de recrutement : organiser la logistique · BrittAssist',
    description:
      "Créneaux bloqués d’avance, messages types, tableau des candidats, réponse à chacun : la logistique d’un recrutement, et la durée de conservation des candidatures.",
    h1: 'Coordonner des entretiens de recrutement : dix candidats, quatre agendas, zéro oubli.',
    lede:
      "Recruter demande du jugement pendant une heure par candidat, et de la logistique pendant trois semaines. La logistique décide pourtant de l’image que vous laissez : un candidat sans nouvelles pendant dix jours se fait une opinion de l’entreprise bien avant le premier entretien.",
    reponseCourte: [
      "Les créneaux d’entretien se bloquent chez les intervieweurs avant de contacter le premier candidat.",
      "Quatre messages types couvrent tout le parcours : invitation, confirmation, report, réponse négative.",
      "Un tableau des candidats dit à tout moment qui en est où, et qui attend une réponse.",
      "Chaque candidat reçoit une réponse ; les dossiers non retenus ne se conservent pas indéfiniment.",
    ],
    sections: [
      {
        h2: 'Le circuit',
        blocs: [
          {
            etapes: [
              "Faites bloquer par chaque intervieweur des créneaux réservés au recrutement, sur trois semaines.",
              "Proposez à chaque candidat deux ou trois créneaux pris dans cette réserve.",
              "Confirmez par écrit : date, heure, lieu ou lien, durée, nom des personnes rencontrées.",
              "La veille, envoyez un rappel au candidat, et le dossier à l’intervieweur.",
              "Le jour même ou le lendemain, recueillez l’avis de chaque intervieweur.",
              "Répondez à chaque candidat, retenu ou non.",
            ],
          },
          {
            paragraphes: [
              "La première étape est celle qui fait gagner le plus de temps. Sans créneaux réservés, chaque entretien demande un aller-retour entre quatre agendas ; avec eux, il s’agit de choisir dans une liste.",
            ],
          },
        ],
      },
      {
        h2: 'Le tableau des candidats',
        blocs: [
          {
            tableau: {
              legende: 'Suivi des candidats',
              colonnes: ['Colonne', 'Ce qu’on y note'],
              lignes: [
                ['Candidat', 'Nom, et origine de la candidature'],
                ['Étape', 'Reçu, premier entretien, second entretien, décision'],
                ['Prochain rendez-vous', 'Date, heure, avec qui'],
                ['Avis attendus', 'De qui, et depuis quand'],
                ['Réponse envoyée le', 'La date à laquelle le candidat a été informé'],
              ],
            },
          },
          {
            paragraphes: [
              "La dernière colonne est la plus utile. Tant qu’elle est vide, quelqu’un attend.",
            ],
          },
        ],
      },
      {
        h2: 'Les données des candidats',
        blocs: [
          {
            paragraphes: [
              "Un curriculum vitae est un ensemble de données personnelles. La CNIL rappelle que le dossier d’un candidat non retenu ne peut être conservé pour constituer un vivier que si la personne en a été informée, et pour une durée qui ne dépasse pas deux ans après le dernier contact avec elle.",
              "En pratique : les candidatures se rangent dans un espace à accès restreint, non dans les boîtes personnelles de chacun, et une revue annuelle supprime celles qui ont dépassé la durée.",
            ],
          },
        ],
      },
      {
        h2: 'La part qui se confie, et celle qui reste',
        blocs: [
          {
            tableau: {
              legende: 'Répartition des rôles dans un recrutement',
              colonnes: ['Se confie', 'Reste chez vous'],
              lignes: [
                ['La réservation des créneaux et l’envoi des invitations', 'Le tri des candidatures sur le fond'],
                ['Les rappels, les reports, les confirmations', 'L’entretien'],
                ['La collecte des avis des intervieweurs', 'La décision'],
                ['L’envoi des réponses, sur vos modèles', 'L’annonce au candidat retenu, de vive voix'],
              ],
            },
          },
          {
            paragraphes: [
              "Les formalités de l’embauche elle-même, une fois la décision prise, relèvent de votre cabinet.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Contacter les candidats avant d’avoir bloqué les agendas des intervieweurs.",
      "Laisser sans réponse ceux qui n’ont pas été retenus.",
      "Garder dix ans de candidatures dans une boîte mail.",
    ],
    limites: [
      "Cette page traite la logistique des entretiens. Les règles de non-discrimination, le contenu des questions et les formalités d’embauche relèvent du droit du travail et de votre conseil.",
    ],
    faq: [
      {
        q: 'Qui répond aux candidats non retenus ?',
        a: "L’entreprise, par un message court et correct, envoyé dans les jours qui suivent la décision. Le texte se prépare une fois ; l’envoi se confie.",
      },
      {
        q: 'Peut-on proposer un lien de réservation aux candidats ?',
        a: "Oui, s’il ne montre que les créneaux réservés au recrutement. C’est commode pour un premier entretien ; pour un second, avec plusieurs personnes, une proposition écrite reste plus sûre.",
      },
      {
        q: 'Combien de temps garder les candidatures ?',
        a: "Pour un vivier, la CNIL retient deux ans au plus après le dernier contact, à condition que le candidat en ait été informé. Au-delà, supprimez.",
      },
    ],
    liens: [
      { href: '/guides/gerer-les-demandes-de-rendez-vous', label: 'Gérer les demandes de rendez-vous' },
      { href: '/guides/tenir-un-agenda-de-dirigeant', label: 'Tenir un agenda de dirigeant' },
      { href: '/guides/premiere-embauche-formalites-administratives', label: 'Embaucher : l’administratif à prévoir' },
      { href: '/assistante/fondateurs-de-startup', label: 'L’assistance pour les fondateurs de start-up' },
      { href: '/services/coordination', label: 'La coordination de vos interlocuteurs' },
    ],
    sources: [SOURCE_CNIL_RECRUTEMENT],
    cloture: 'Un candidat juge l’entreprise à la façon dont elle lui répond. Y compris quand la réponse est non.',
    ...lot('D'),
    cadrage: {
      intention: 'méthode',
      motCle: 'organiser des entretiens de recrutement',
      variantes: ['planifier les entretiens d’embauche', 'logistique recrutement petite entreprise', 'coordination entretiens candidats', 'conservation des CV durée'],
      persona: 'Dirigeant de TPE ou fondateur qui recrute sans service de ressources humaines',
      objectif: 'Faire organiser la logistique des entretiens et répondre à chaque candidat',
      difference: 'Traite la coordination des entretiens ; la page sur l’embauche ne traite que les formalités qui suivent la décision',
    },
  },

  {
    slug: 'participer-a-un-salon-professionnel',
    type: 'methode',
    dossier: DEPLACEMENTS,
    categorie: 'Méthode',
    nom: 'Exposer sur un salon professionnel',
    title: 'Exposer sur un salon professionnel : le rétroplanning · BrittAssist',
    description:
      "Inscription, guide de l’exposant, stand, invitations, feuille de route, suivi des contacts : le rétroplanning d’une participation à un salon professionnel.",
    h1: 'Exposer sur un salon professionnel : ce qui se prépare trois mois avant.',
    lede:
      "Un salon coûte un stand, trois jours et une équipe. Ce qu’il rapporte tient à deux choses que l’on néglige : les rendez-vous pris avant d’y aller, et les messages envoyés en revenant. Entre les deux, il y a une logistique faite de dates limites, toutes écrites dans un document que personne ne lit.",
    reponseCourte: [
      "Le guide de l’exposant fixe les dates limites de toutes les commandes : c’est le premier document à lire.",
      "Les rendez-vous se prennent avant le salon, par invitation des clients et des prospects.",
      "Sur place, une seule méthode de collecte des contacts, la même pour toute l’équipe.",
      "Le suivi se fait dans la semaine du retour : c’est là que la dépense trouve sa justification.",
    ],
    sections: [
      {
        h2: 'Le rétroplanning',
        blocs: [
          {
            etapes: [
              "Trois mois avant, ou plus : inscription, choix de l’emplacement, lecture du guide de l’exposant et report de ses dates limites dans l’échéancier.",
              "Deux mois avant : conception du stand, commandes techniques, transport du matériel, réservation des hébergements.",
              "Un mois avant : invitations aux clients et aux prospects, prise de rendez-vous sur le stand, planning de présence de l’équipe.",
              "Une semaine avant : feuille de route, vérification des colis, badges, supports imprimés.",
              "Pendant : collecte des contacts selon une méthode unique, point de fin de journée.",
              "Dans la semaine du retour : un message à chaque contact, et saisie dans le fichier clients.",
              "Un mois après : bilan — dépenses, contacts, suites données.",
            ],
          },
        ],
      },
      {
        h2: 'Le guide de l’exposant',
        blocs: [
          {
            paragraphes: [
              "L’organisateur remet à chaque exposant un dossier qui précise ce qui est fourni, ce qui se commande, et jusqu’à quelle date. Électricité, mobilier, connexion, badges, nettoyage, manutention : chaque ligne a son échéance, et souvent un tarif majoré une fois l’échéance passée.",
              "Ce document se lit le jour où il arrive, et ses dates se reportent une à une dans l’échéancier. C’est un travail d’une heure, qui évite des commandes passées dans l’urgence.",
            ],
          },
        ],
      },
      {
        h2: 'Les postes que l’on oublie',
        blocs: [
          {
            tableau: {
              legende: 'Postes de dépense d’une participation à un salon',
              colonnes: ['Poste', 'Ce qu’il recouvre'],
              lignes: [
                ['L’emplacement', 'La surface, et souvent des frais d’inscription'],
                ['Les commandes techniques', 'Électricité, mobilier, connexion, nettoyage'],
                ['Le stand', 'Conception, impression, montage et démontage'],
                ['Le transport', 'Matériel à l’aller et au retour, manutention sur place'],
                ['L’équipe', 'Trajets, hébergement, repas, et le temps non facturé'],
                ['Les supports', 'Documentation, échantillons, cartes'],
              ],
            },
          },
          {
            paragraphes: [
              "Aucun montant n’est donné ici : ils varient trop d’un salon à l’autre. La liste sert à ne pas présenter comme budget le seul prix de l’emplacement.",
            ],
          },
        ],
      },
      {
        h2: 'Le suivi, là où le salon se rentabilise',
        blocs: [
          {
            paragraphes: [
              "Sur le stand, chaque échange se note de la même façon : qui, quelle société, quel besoin, quelle suite promise. Une fiche papier ou une note sur téléphone conviennent, pourvu que toute l’équipe utilise la même.",
              "Au retour, chaque contact reçoit un message dans la semaine, avec ce qui lui a été promis. Passé ce délai, il ne se souvient plus de votre stand parmi quarante. C’est la partie qui se confie le mieux : la liste des contacts, les messages préparés sur vos modèles, la mise à jour du fichier.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Découvrir les dates limites du guide de l’exposant après les avoir dépassées.",
      "Compter sur le passage dans l’allée, sans avoir invité personne.",
      "Rentrer avec cent cartes de visite, et les retrouver six mois plus tard.",
    ],
    faq: [
      {
        q: 'Combien de temps à l’avance s’inscrire à un salon ?',
        a: "Cela dépend du salon : les dates figurent dans le dossier d’inscription, et les bons emplacements partent les premiers. Regardez-les dès que la participation est envisagée, non une fois qu’elle est décidée.",
      },
      {
        q: 'Qui tient le stand ?',
        a: "Des personnes qui connaissent l’offre et savent en parler : la logistique ne remplace pas cela. Une assistante à distance ne tient pas un stand ; elle prépare tout ce qui permet à ceux qui y sont de ne s’occuper que des visiteurs.",
      },
      {
        q: 'Que faire des cartes de visite au retour d’un salon ?',
        a: "Les saisir dans le fichier clients la semaine même, avec la note prise sur le stand, puis envoyer le message promis. Une carte sans note est un nom, non un contact.",
      },
    ],
    liens: [
      { href: '/guides/organiser-un-deplacement-professionnel', label: 'Organiser un déplacement professionnel' },
      { href: '/guides/feuille-de-route-de-deplacement', label: 'La feuille de route de déplacement' },
      { href: '/guides/organiser-un-seminaire-d-equipe', label: 'Organiser un séminaire d’équipe' },
      { href: '/guides/tenir-son-fichier-clients-a-jour', label: 'Tenir son fichier clients à jour' },
      { href: '/services/organisation-deplacements', label: 'L’organisation de vos déplacements' },
    ],
    cloture: 'Un salon se gagne un mois avant, et se rentabilise une semaine après.',
    ...lot('D'),
    cadrage: {
      intention: 'méthode',
      motCle: 'préparer un salon professionnel exposant',
      variantes: ['rétroplanning salon professionnel', 'organiser sa participation à un salon', 'checklist exposant salon', 'suivi des contacts après un salon'],
      persona: 'Dirigeant de TPE ou PME qui expose sans service dédié',
      objectif: 'Donner le rétroplanning d’une participation et insister sur le suivi des contacts',
      difference: 'Traite l’exposition sur un salon, absente du dossier qui ne couvrait que le déplacement, le séminaire et le dîner',
    },
  },

  {
    slug: 'modele-note-d-aide-a-la-decision',
    type: 'modele',
    dossier: MODELES,
    categorie: 'Modèle',
    nom: 'Modèle de note d’aide à la décision',
    title: 'Note d’aide à la décision : le modèle d’une page · BrittAssist',
    description:
      "Objet, échéance, options comparées sur les mêmes lignes, recommandation, ce qu’il faut de vous : le modèle de note qui permet de trancher en cinq minutes.",
    h1: 'La note d’aide à la décision : une page pour trancher en cinq minutes.',
    lede:
      "« Tu peux regarder pour un nouveau fournisseur ? » Trois jours plus tard, vous recevez douze liens et un tableau de quarante lignes. Le travail a été fait ; la décision vous revient entière. Une note d’aide à la décision fait l’inverse : elle vous rend une question à laquelle on répond par oui, par non, ou par une lettre.",
    reponseCourte: [
      "Une note d’aide à la décision tient en une page et sept rubriques.",
      "Elle présente deux ou trois options comparées sur les mêmes lignes, et une seule recommandation.",
      "Elle dit ce qui se passe si rien n’est décidé, et pour quand la décision est attendue.",
      "Elle se termine par la question exacte à laquelle vous devez répondre.",
    ],
    sections: [
      {
        h2: 'Le modèle',
        blocs: [
          {
            modele: {
              titre: 'Note d’aide à la décision',
              lignes: [
                "1. La décision à prendre, en une phrase.",
                "2. L’échéance, et ce qui se passe si rien n’est décidé d’ici là.",
                "3. Les options : deux ou trois, décrites sur les mêmes lignes — coût, délai, ce qui est inclus, risque.",
                "4. Les critères retenus, et celui qui a pesé le plus.",
                "5. La recommandation, et la raison en deux lignes.",
                "6. Ce qu’il faut de vous : « oui / non » ou « A / B ».",
                "7. Les pièces : devis, conditions, sources, en annexe.",
              ],
            },
          },
        ],
      },
      {
        h2: 'Rendre les options comparables',
        blocs: [
          {
            tableau: {
              legende: 'Exemple illustratif : choix d’un prestataire de ménage pour des bureaux',
              colonnes: ['Ligne', 'Option A', 'Option B'],
              lignes: [
                ['Prix mensuel', 'Le plus bas', 'Un peu plus élevé'],
                ['Ce qui est inclus', 'Sols et sanitaires', 'Sols, sanitaires, vitres une fois par mois'],
                ['Engagement', 'Un an', 'Sans durée minimale'],
                ['Délai de démarrage', 'Trois semaines', 'Une semaine'],
                ['Point faible', 'Vitres en supplément', 'Prix'],
              ],
            },
          },
          {
            paragraphes: [
              "Deux options ne se comparent que si elles sont décrites sur les mêmes lignes. La ligne « ce qui est inclus » est celle qui renverse le plus souvent le classement : une offre moins chère qui exclut ce dont vous avez besoin n’est pas moins chère.",
            ],
          },
        ],
      },
      {
        h2: 'Écrire la recommandation',
        blocs: [
          {
            paragraphes: [
              "Une note sans recommandation est un dossier. La personne qui a comparé les offres en sait plus que vous à cet instant : elle doit dire ce qu’elle ferait, et pourquoi. « Je recommande l’option B : elle coûte davantage, mais elle n’engage pas sur un an et inclut les vitres, que l’option A facture à part. »",
              "Elle doit dire aussi ce qui ferait changer d’avis : « Si l’engagement d’un an ne vous gêne pas, l’option A redevient la moins chère. » Vous décidez alors en connaissant le point sur lequel tout repose.",
            ],
          },
        ],
      },
      {
        h2: 'Quand ne pas en faire',
        blocs: [
          {
            liste: [
              "La décision est peu coûteuse et se corrige facilement : elle relève d’un niveau d’autonomie, non d’une note.",
              "Une seule option existe : c’est une information, pas un choix.",
              "Vous avez déjà décidé : demandez l’exécution, non une comparaison.",
            ],
          },
          {
            paragraphes: [
              "Une note prend du temps à écrire. Elle se justifie quand la décision engage une somme, une durée ou une relation.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Présenter cinq options : au-delà de trois, c’est le tri qui n’a pas été fait.",
      "Recommander sans dire ce qui ferait changer d’avis.",
      "Terminer par « qu’en pensez-vous ? » au lieu d’une question fermée.",
    ],
    faq: [
      {
        q: 'Quelle différence entre une note d’aide à la décision et un comparatif ?',
        a: "Un comparatif décrit. Une note conclut : elle porte une recommandation et une question. Le comparatif en est l’annexe.",
      },
      {
        q: 'Faut-il toujours trois options ?',
        a: "Non. Deux suffisent quand le choix est réellement binaire. Trois est un plafond : la troisième est souvent « ne rien changer », qui mérite d’être écrite.",
      },
      {
        q: 'Que devient la note après la décision ?',
        a: "Elle se classe dans le dossier du sujet, avec votre réponse et sa date. Un an plus tard, au moment du renouvellement, elle dit pourquoi ce choix avait été fait.",
      },
    ],
    liens: [
      { href: '/services/recherches', label: 'Vos recherches et vos comparatifs' },
      { href: '/guides/niveaux-d-autonomie-delegation', label: 'Les niveaux d’autonomie' },
      { href: '/guides/dossier-de-rendez-vous', label: 'Préparer un dossier de rendez-vous' },
      { href: '/guides/choisir-un-lieu-de-seminaire', label: 'Choisir un lieu de séminaire' },
      { href: '/guides/modeles-et-checklists', label: 'Tous les modèles et checklists' },
    ],
    cloture: 'Une bonne note ne vous apprend pas tout. Elle vous apprend ce qu’il faut pour répondre.',
    ...lot('D'),
    cadrage: {
      intention: 'modèle',
      motCle: 'note d’aide à la décision modèle',
      variantes: ['modèle note de synthèse décision', 'note de recommandation dirigeant', 'présenter des options pour décision', 'fiche de décision modèle'],
      persona: 'Dirigeant qui reçoit des comparatifs trop longs pour décider vite',
      objectif: 'Donner un format de note en sept rubriques, conclu par une question fermée',
      difference: 'Un modèle de note de décision, distinct de la note de préparation d’un rendez-vous',
    },
  },

  {
    slug: 'assistante-commerciale-externalisee',
    type: 'guide',
    dossier: FACTURATION,
    categorie: 'Comprendre',
    nom: 'L’assistante commerciale externalisée',
    title: 'Assistante commerciale externalisée : son périmètre · BrittAssist',
    description:
      "De la demande entrante à la facture payée : ce qu’une assistante commerciale externalisée prend en charge, étape par étape, et ce qui reste au dirigeant.",
    h1: 'Assistante commerciale externalisée : ce qu’elle prend entre le devis et la facture.',
    lede:
      "Entre « ce client est intéressé » et « la facture est payée », il se passe une douzaine de gestes dont aucun n’est de la vente. Accuser réception, mettre le devis au propre, relancer, obtenir l’accord écrit, ouvrir le dossier, facturer. C’est là que les affaires se perdent, et c’est exactement ce qu’une assistante commerciale prend en charge.",
    reponseCourte: [
      "Une assistante commerciale externalisée tient l’administration des ventes : ce qui entoure la vente, non la vente elle-même.",
      "Elle met en forme et envoie les devis à partir de vos prix, relance, recueille les accords, ouvre les dossiers, facture et suit les encaissements.",
      "Elle ne prospecte pas, ne chiffre pas et ne négocie pas : le prix et la relation commerciale restent les vôtres.",
      "Trois informations lui suffisent pour commencer : votre grille de prix, vos conditions, vos critères de qualification.",
    ],
    sections: [
      {
        h2: 'La chaîne, étape par étape',
        blocs: [
          {
            tableau: {
              legende: 'De la demande entrante à la facture payée',
              colonnes: ['Étape', 'Ce qui se confie', 'Ce qui reste chez vous'],
              lignes: [
                ['Demande entrante', 'Accusé de réception, qualification selon vos critères, prise de rendez-vous', 'La réponse sur le fond'],
                ['Devis', 'Mise en forme à partir de votre chiffrage, envoi, relance', 'Le prix et les choix techniques'],
                ['Commande', 'Recueil de l’accord écrit, facture d’acompte, ouverture du dossier', 'La négociation'],
                ['Exécution', 'Confirmations, planning, pièces à réunir', 'Le métier'],
                ['Facturation', 'Émission à date, suivi des encaissements, relances', 'Les remises et les gestes commerciaux'],
                ['Après-vente', 'Enregistrement des réclamations, suivi jusqu’à la réponse', 'La réponse elle-même, quand elle engage'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Ce qu’elle n’est pas',
        blocs: [
          {
            paragraphes: [
              "Le titre prête à confusion. Une assistante commerciale n’est pas une commerciale : elle ne démarche pas, ne présente pas l’offre en rendez-vous et ne négocie pas un prix. Les pages métier de BrittAssist le disent pour chaque secteur : les prix, le chiffrage et la relation client restent chez le dirigeant.",
              "Ce qu’elle fait, c’est empêcher qu’une vente déjà presque acquise s’égare dans un couloir administratif : le devis promis lundi et envoyé vendredi, l’accord verbal jamais confirmé par écrit, la facture émise trois semaines après la livraison.",
            ],
          },
        ],
      },
      {
        h2: 'Les trois informations à lui donner',
        blocs: [
          {
            liste: [
              "Votre grille de prix, ou la méthode de chiffrage : ce qui lui permet de mettre un devis au propre sans vous réinterroger sur chaque ligne.",
              "Vos conditions : durée de validité, acompte, délai de paiement, ce qui se négocie et ce qui ne se négocie pas.",
              "Vos critères de qualification : ce qui fait qu’une demande mérite un devis, et ce qui appelle une réponse courte.",
            ],
          },
          {
            paragraphes: [
              "Ces trois documents existent rarement par écrit. Les rédiger est le premier travail, et il sert bien au-delà de la délégation : c’est la première fois que vos règles commerciales sont dites ailleurs que dans votre tête.",
            ],
          },
        ],
      },
      {
        h2: 'À quoi l’on voit que cela fonctionne',
        blocs: [
          {
            liste: [
              "Le délai entre une demande et l’envoi du devis raccourcit, et devient régulier.",
              "Aucun devis ne reste sans relance au-delà de la date prévue.",
              "Les factures partent à la date convenue, non quand vous avez un moment.",
              "Vous savez, chaque lundi, ce qui est en attente d’accord et ce qui est en attente de paiement.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Attendre d’elle qu’elle trouve des clients.",
      "Lui demander de chiffrer sans grille : elle vous reposera la question à chaque devis.",
      "Garder la relance pour soi « parce que c’est délicat », et ne jamais la faire.",
    ],
    limites: [
      "La prospection, la négociation et la fixation des prix ne font pas partie du périmètre publié par BrittAssist.",
    ],
    faq: [
      {
        q: 'Une assistante commerciale peut-elle établir les devis ?',
        a: "Elle les met en forme et les envoie à partir de vos prix ou de votre chiffrage. Elle ne fixe pas le prix : c’est une décision qui engage votre marge et votre responsabilité.",
      },
      {
        q: 'Faut-il lui ouvrir l’outil de gestion commerciale ?',
        a: "Oui, par un accès nominatif limité à ce qu’elle traite : devis, factures, fiches clients. C’est la condition pour que le suivi vive au même endroit que le reste.",
      },
      {
        q: 'Assistante commerciale ou assistante administrative : quelle différence ?',
        a: "Le périmètre. La première suit la chaîne qui va de la demande à l’encaissement ; la seconde tient aussi le classement, les échéances, les fournisseurs. Dans une petite structure, c’est souvent la même personne, avec un périmètre écrit.",
      },
    ],
    liens: [
      { href: '/guides/devis-factures-relances', label: 'Devis, factures et relances : le circuit complet' },
      { href: '/guides/relancer-un-devis-sans-reponse', label: 'Relancer un devis sans réponse' },
      { href: '/guides/traiter-les-demandes-de-devis-entrantes', label: 'Traiter les demandes de devis entrantes' },
      { href: '/guides/checklist-ouverture-dossier-client', label: 'Checklist d’ouverture de dossier client' },
      { href: '/services/facturation', label: 'La prise en charge de la facturation' },
      { href: '/assistante/agences-et-studios', label: 'L’assistance pour les agences et studios' },
    ],
    cloture: 'Vendre est votre métier. Faire en sorte que la vente arrive jusqu’à la facture en est un autre.',
    ...lot('D'),
    cadrage: {
      intention: 'informationnelle',
      motCle: 'assistante commerciale externalisée',
      variantes: ['administration des ventes externalisée', 'assistante commerciale indépendante', 'externaliser le suivi des devis et commandes', 'assistante commerciale freelance missions'],
      persona: 'Dirigeant qui vend lui-même et perd des affaires entre le devis et la facture',
      objectif: 'Faire comprendre le périmètre d’une assistante commerciale et ses limites',
      difference: 'Décrit un rôle et son périmètre ; le dossier décrit le circuit des documents, étape par étape',
    },
  },

  {
    slug: 'traiter-les-demandes-de-devis-entrantes',
    type: 'methode',
    dossier: FACTURATION,
    categorie: 'Méthode',
    nom: 'Traiter les demandes de devis entrantes',
    title: 'Demandes de devis entrantes : répondre dans la journée · BrittAssist',
    description:
      "Accuser réception le jour même, poser cinq questions, chiffrer sur une fiche préparée : le circuit des demandes de devis entrantes, et le tableau qui le tient.",
    h1: 'Demandes de devis entrantes : accuser réception, qualifier, chiffrer.',
    lede:
      "Une demande de devis arrive un mardi par le formulaire du site. Vous la lisez le soir, vous la gardez pour le week-end, vous répondez le lundi suivant. Entre-temps, le client a reçu deux réponses. Le prix n’y est pour rien : vous n’étiez pas dans la comparaison.",
    reponseCourte: [
      "Une demande de devis reçoit un accusé de réception le jour même, qui dit ce qui va se passer et quand.",
      "Cinq questions de qualification évitent de chiffrer ce qui ne se fera pas.",
      "Le chiffrage reste chez vous ; la préparation de la fiche, la mise en forme et l’envoi se confient.",
      "Un tableau des demandes dit, pour chacune, où elle en est et quand elle sera relancée.",
    ],
    sections: [
      {
        h2: 'Les trois temps',
        blocs: [
          {
            etapes: [
              "Le jour même : accuser réception, annoncer le délai du devis, poser les questions qui manquent.",
              "Dès les réponses : préparer la fiche de chiffrage — ce qui est demandé, où, pour quand, avec quelles contraintes.",
              "Après votre chiffrage : mettre le devis en forme, l’envoyer, et noter la date de relance.",
            ],
          },
          {
            modele: {
              titre: 'Accusé de réception d’une demande de devis',
              lignes: [
                "Bonjour,",
                "Nous avons bien reçu votre demande concernant [objet], et vous en remercions.",
                "Pour vous adresser un devis précis, nous aurions besoin de deux informations : [question 1] et [question 2].",
                "Dès réception, votre devis vous sera envoyé sous [délai].",
                "Bien cordialement, [Prénom Nom], pour [Entreprise]",
              ],
            },
          },
        ],
      },
      {
        h2: 'Les cinq questions',
        blocs: [
          {
            tableau: {
              legende: 'Questions de qualification d’une demande de devis',
              colonnes: ['Question', 'Ce qu’elle évite'],
              lignes: [
                ['Que faut-il faire, précisément ?', 'Un devis à côté du besoin'],
                ['Où, et dans quelles conditions ?', 'Un déplacement ou une contrainte non chiffrés'],
                ['Pour quand ?', 'Un devis impossible à tenir dans le délai'],
                ['Dans quel ordre de grandeur de budget ?', 'Un chiffrage sans rapport avec ce qui est envisagé'],
                ['Qui décide, et quand ?', 'Une relance adressée à la mauvaise personne'],
              ],
            },
          },
          {
            paragraphes: [
              "Toutes n’ont pas à être posées à chaque fois, et certaines se posent mieux de vive voix. L’accusé de réception en pose deux, celles sans lesquelles vous ne pouvez pas chiffrer.",
            ],
          },
        ],
      },
      {
        h2: 'Le tableau des demandes',
        blocs: [
          {
            tableau: {
              legende: 'Suivi des demandes de devis',
              colonnes: ['Colonne', 'Pourquoi'],
              lignes: [
                ['Reçue le', 'Mesurer votre délai réel de réponse'],
                ['Origine', 'Formulaire, téléphone, recommandation : savoir d’où viennent les bonnes demandes'],
                ['Demande, en une ligne', 'La retrouver sans rouvrir l’e-mail'],
                ['Qualifiée', 'Oui, non, en attente d’une réponse'],
                ['Devis envoyé le', 'Le point de départ de la relance'],
                ['Relance prévue le', 'Une date, fixée à l’envoi'],
                ['Issue', 'Accepté, refusé, sans suite — et pourquoi, quand on le sait'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les demandes que l’on ne chiffre pas',
        blocs: [
          {
            modele: {
              titre: 'Réponse à une demande hors périmètre',
              lignes: [
                "Bonjour,",
                "Merci pour votre demande. Nous n’intervenons pas sur [zone / type de prestation] et ne pourrons pas vous adresser de devis.",
                "Nous vous souhaitons de trouver rapidement le professionnel qu’il vous faut.",
                "Bien cordialement, [Prénom Nom]",
              ],
            },
          },
          {
            paragraphes: [
              "Une demande hors zone, hors métier ou sans projet réel mérite une réponse, courte et le jour même. Elle ne coûte rien, et la personne qui la reçoit se souviendra qu’on lui a répondu.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Attendre d’avoir le temps de chiffrer pour répondre.",
      "Chiffrer toutes les demandes, y compris celles qui n’aboutiront pas.",
      "Envoyer un devis sans noter la date à laquelle il sera relancé.",
    ],
    faq: [
      {
        q: 'Faut-il répondre à toutes les demandes de devis ?',
        a: "Oui, mais pas par un devis. Une demande hors périmètre reçoit une réponse de trois lignes ; une demande floue reçoit des questions ; une demande claire reçoit un délai.",
      },
      {
        q: 'Un accusé de réception automatique suffit-il ?',
        a: "Il vaut mieux que rien : il dit que le message est arrivé. Il ne remplace pas la réponse d’une personne, qui pose les questions manquantes et annonce un délai tenu.",
      },
      {
        q: 'Quel délai annoncer pour le devis ?',
        a: "Celui que vous tenez. Un devis promis sous cinq jours et envoyé au quatrième vaut mieux qu’un devis promis sous quarante-huit heures et envoyé au sixième.",
      },
    ],
    liens: [
      { href: '/guides/devis-contenu-et-validite', label: 'Ce que doit contenir un devis' },
      { href: '/guides/relancer-un-devis-sans-reponse', label: 'Relancer un devis sans réponse' },
      { href: '/guides/reponses-types-emails', label: 'Constituer des réponses types' },
      { href: '/guides/assistante-commerciale-externalisee', label: 'L’assistante commerciale externalisée' },
      { href: '/assistante/organisateurs-d-evenements', label: 'L’assistance pour les organisateurs d’événements' },
      { href: '/services/facturation', label: 'La prise en charge de la facturation' },
    ],
    cloture: 'Le premier à répondre n’emporte pas toujours l’affaire. Celui qui ne répond pas ne l’emporte jamais.',
    ...lot('D'),
    cadrage: {
      intention: 'méthode',
      motCle: 'traiter les demandes de devis entrantes',
      variantes: ['répondre à une demande de devis', 'délai de réponse demande de devis', 'qualifier une demande client', 'accusé de réception demande de devis modèle'],
      persona: 'Artisan, prestataire ou dirigeant de TPE qui répond tard aux demandes de devis',
      objectif: 'Installer un circuit en trois temps et un tableau des demandes',
      difference: 'Traite ce qui précède l’envoi du devis ; les pages voisines traitent son contenu, puis sa relance',
    },
  },
];
