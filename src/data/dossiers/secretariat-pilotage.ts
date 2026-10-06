/**
 * Série « secrétariat externalisé » — faire fonctionner et piloter dans la durée.
 *
 * Les guides existants couvrent le démarrage (brief, premier mois, canal, point
 * hebdomadaire). Ceux-ci traitent ce qui vient après : les délais convenus, le
 * forfait qui ne colle plus, l'évaluation, la revue du périmètre, l'absence de
 * la prestataire, l'erreur, le changement de prestataire, le retour en interne.
 *
 * Ce qui décrit BrittAssist reprend les conditions générales publiées (/cgv) :
 * plages de traitement, congés annoncés, préavis, avenant, obligation de moyens,
 * plafond de responsabilité. Rien n'est ajouté à ce que le site publie déjà.
 */
import type { Guide } from '../guides.ts';
import { lot } from './secretariat-lots.ts';

const EXTERNALISER = 'externaliser-son-assistanat';
const AGENDA = 'agenda-emails-reunions';
const SITUATIONS = 'situations-de-dirigeant';

const SOURCE_INDEPENDANT = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F1691', label: 'Service-Public Entreprendre — Comment différencier un travailleur indépendant d’un salarié' };
const SOURCE_SIMULATEUR = { href: 'https://mon-entreprise.urssaf.fr/assistants', label: 'Urssaf — simulateur du coût total d’une embauche' };
const SOURCE_ASSURANCES = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F37365', label: 'Service-Public Entreprendre — Assurances de la société' };

export const secretariatPilotage: Guide[] = [
  {
    slug: 'delais-de-reponse-assistante-externalisee',
    type: 'methode',
    dossier: EXTERNALISER,
    categorie: 'Organiser',
    nom: 'Disponibilité et délais de réponse',
    title: 'Assistante externalisée : délais de réponse à convenir · BrittAssist',
    description:
      "Vu, pris en charge, clos : les trois délais à convenir avec une assistante externalisée, par niveau de priorité, sans lui imposer des horaires.",
    h1: 'Disponibilité et délais de réponse : ce qu’il faut convenir par écrit.',
    lede:
      "« Elle est réactive » ne veut rien dire tant qu’on n’a pas dit en combien de temps. La déception la plus courante avec un secrétariat externalisé ne tient pas à la qualité du travail : elle tient à un délai que chacun avait en tête, et que personne n’avait écrit.",
    reponseCourte: [
      "Trois délais sont à distinguer : celui où la demande est vue, celui où elle est prise en charge, celui où elle est close.",
      "Ils se fixent par niveau de priorité, pas par demande : trois niveaux suffisent.",
      "On convient de délais, pas d’horaires : imposer des heures de présence à une indépendante relève du salariat.",
      "Chez BrittAssist, les demandes sont traitées du lundi au vendredi, en journée ; celles qui arrivent en dehors sont prises en charge le jour ouvré suivant.",
    ],
    sections: [
      {
        h2: 'Trois délais, pas un',
        blocs: [
          {
            paragraphes: [
              "Quand vous dites « j’attends une réponse rapide », vous pouvez attendre trois choses différentes. Savoir que la demande a été vue. Savoir qu’elle est en cours. Ou l’avoir terminée entre les mains. Une assistante peut accuser réception en dix minutes d’un sujet qui demandera trois jours, et c’est très bien ainsi — à condition que vous sachiez lequel des trois délais vous venez d’obtenir.",
              "Un retour utile contient donc toujours une date : « vu, je reviens vers vous jeudi avec les deux options ».",
            ],
          },
        ],
      },
      {
        h2: 'Trois niveaux de priorité',
        blocs: [
          {
            tableau: {
              legende: 'Niveaux de priorité et délais à convenir',
              colonnes: ['Niveau', 'Exemples', 'Ce qui se convient'],
              lignes: [
                ['Immédiat', 'Un train annulé, un rendez-vous dans l’heure', 'Une liste fermée de cas, et un canal réservé : l’appel'],
                ['Dans la journée', 'Confirmer un rendez-vous, envoyer un document, répondre à un client', 'Prise en charge le jour même, aux heures de traitement'],
                ['Dans la semaine', 'Un comparatif, un dossier, une recherche', 'Une date de retour annoncée à la réception'],
              ],
            },
          },
          {
            paragraphes: [
              "Le premier niveau doit rester étroit. Une liste de dix cas urgents est une liste où plus rien ne l’est. Le troisième niveau est celui où se loge l’essentiel du travail, et celui qu’on oublie de dater.",
            ],
          },
        ],
      },
      {
        h2: 'Des délais, pas des horaires',
        blocs: [
          {
            paragraphes: [
              "Une prestataire indépendante organise elle-même son travail. Lui fixer des heures de présence, exiger qu’elle soit connectée de neuf heures à dix-huit heures ou contrôler son emploi du temps sont des marques de subordination, que Service-Public range parmi les indices d’un contrat de travail.",
              "Ce que vous pouvez convenir, en revanche, c’est un niveau de service : les jours et les plages où les demandes sont traitées, et le délai de prise en charge par niveau de priorité. La nuance n’est pas de pure forme. Elle vous oblige à dire ce dont vous avez réellement besoin — une réponse dans la journée — plutôt que ce à quoi vous êtes habitué — quelqu’un dans le bureau d’à côté.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que publie BrittAssist',
        blocs: [
          {
            liste: [
              "Les demandes sont traitées du lundi au vendredi, en journée.",
              "Celles qui sont reçues en dehors de ces plages sont prises en charge le jour ouvré suivant.",
              "Une disponibilité renforcée, une prise en charge en soirée ou le week-end relèvent du Private Office et se définissent dans la proposition.",
              "Les périodes de congés sont annoncées avec un préavis raisonnable.",
            ],
          },
          {
            paragraphes: [
              "Ces points figurent dans les conditions générales. Ce qui est propre à votre organisation — vos cas d’urgence, votre canal, vos échéances fixes — se précise dans la proposition.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Marquer « urgent » sur tout : le mot perd son sens en une semaine.",
      "Envoyer une demande le vendredi à dix-neuf heures et compter sur le lundi huit heures.",
      "Ne donner aucune échéance, puis trouver que cela traîne.",
    ],
    faq: [
      {
        q: 'Puis-je exiger une réponse dans l’heure ?',
        a: "Pour une liste courte de cas définis à l’avance, oui, si le contrat le prévoit. Pour toutes les demandes, non : ce serait acheter une présence continue, ce qui est un autre service et un autre prix.",
      },
      {
        q: 'Une assistante externalisée travaille-t-elle le week-end ?',
        a: "Seulement si c’est convenu. Les conditions générales de BrittAssist prévoient un traitement du lundi au vendredi ; au-delà, les modalités se définissent dans la proposition.",
      },
      {
        q: 'Comment signaler une vraie urgence ?',
        a: "Par le canal réservé à cet usage, en général un appel, et seulement pour les cas listés ensemble. Une urgence envoyée dans le fil des demandes courantes sera lue avec elles.",
      },
    ],
    liens: [
      { href: '/guides/canal-pour-transmettre-ses-demandes', label: 'Par quel canal transmettre ses demandes' },
      { href: '/guides/contrat-de-prestation-assistante-independante', label: 'Le contrat de prestation avec une assistante' },
      { href: '/guides/requalification-assistante-independante-salariat', label: 'Le risque de requalification en salariat' },
      { href: '/guides/absence-de-son-assistante-independante', label: 'Congés et maladie de la prestataire : la continuité' },
      { href: '/cgv', label: 'Les conditions générales de BrittAssist' },
      { href: '/private-office', label: 'Comment une demande est prise en charge' },
    ],
    sources: [SOURCE_INDEPENDANT],
    cloture: 'Un délai écrit se tient ou se discute. Un délai supposé ne fait que décevoir.',
    ...lot('A'),
    cadrage: {
      intention: 'méthode',
      motCle: 'délai de réponse assistante externalisée',
      variantes: ['disponibilité assistante indépendante', 'horaires secrétariat externalisé', 'réactivité assistante à distance', 'engagement de service secrétariat externalisé'],
      persona: 'Dirigeant qui veut savoir sous quel délai ses demandes seront traitées',
      objectif: 'Faire convenir trois délais par niveau de priorité, sans imposer d’horaires',
      difference: 'Seule page consacrée au niveau de service : elle distingue vu, pris en charge et clos, et sépare le délai de l’horaire',
    },
  },

  {
    slug: 'forfait-secretariat-externalise-depassement',
    type: 'methode',
    dossier: EXTERNALISER,
    categorie: 'Piloter',
    nom: 'Ajuster un forfait trop juste ou trop large',
    title: 'Forfait de secrétariat : dépassement, sous-utilisation · BrittAssist',
    description:
      "Forfait d’heures ou forfait au périmètre : ce qui se passe quand le volume dépasse ou reste en dessous, et comment rediscuter le cadre avec des faits.",
    h1: 'Forfait trop juste ou trop large : comment l’ajuster sans se fâcher.',
    lede:
      "Un forfait est une estimation faite un jour donné. Six mois plus tard, l’activité a changé, et le forfait ne correspond plus à rien : trop étroit, il produit des suppléments ou des demandes qui attendent ; trop large, il coûte sans servir. Dans les deux cas, le sujet se traite, et il se traite mieux avec des faits qu’avec une impression.",
    reponseCourte: [
      "Un forfait d’heures et un forfait au périmètre ne débordent pas de la même façon : le premier se compte, le second se rediscute.",
      "Un écart d’un mois est un pic. Un écart de trois mois de suite est un nouveau volume.",
      "La discussion se prépare avec la liste des demandes du trimestre, classées par domaine.",
      "Chez BrittAssist, un volume qui excède durablement celui de la proposition fait l’objet d’un échange préalable et, le cas échéant, d’un avenant ; rien n’est facturé en plus sans accord écrit.",
    ],
    sections: [
      {
        h2: 'Deux forfaits, deux façons de déborder',
        blocs: [
          {
            tableau: {
              legende: 'Ce qui se passe selon le type de forfait',
              colonnes: ['Situation', 'Forfait d’heures', 'Forfait au périmètre'],
              lignes: [
                ['Le volume dépasse', 'Heures supplémentaires facturées, ou travail reporté : lire la clause', 'Le périmètre se rediscute'],
                ['Le volume reste en dessous', 'Heures reportées ou perdues, selon le contrat', 'Le prix ne change pas : le périmètre est-il le bon ?'],
                ['Un pic ponctuel', 'Il consomme le mois', 'Il se signale avant, et s’absorbe ou se chiffre à part'],
              ],
            },
          },
          {
            paragraphes: [
              "Le forfait d’heures a un avantage : il prévient tôt, puisque le compteur se voit. Il a un défaut : il incite à compter avant de demander. Le forfait au périmètre supprime ce frein, mais suppose que les deux parties se disent franchement quand le périmètre a changé.",
            ],
          },
        ],
      },
      {
        h2: 'Les signaux d’un forfait trop juste',
        blocs: [
          {
            liste: [
              "Des demandes de la troisième priorité qui attendent d’un mois sur l’autre.",
              "Des domaines entiers ajoutés depuis la signature, sans que personne l’ait décidé.",
              "Une prestataire qui vous demande de plus en plus souvent ce qui doit passer d’abord.",
              "Votre propre réticence à envoyer une demande de plus.",
            ],
          },
        ],
      },
      {
        h2: 'Les signaux d’un forfait trop large',
        blocs: [
          {
            liste: [
              "Des semaines sans aucune demande de votre part.",
              "Des domaines prévus à l’origine que vous traitez finalement vous-même.",
              "Une activité qui a baissé, ou qui s’est concentrée sur quelques mois de l’année.",
            ],
          },
          {
            paragraphes: [
              "Un forfait sous-utilisé n’est pas toujours trop large. Il arrive que le besoin existe, et que vous ne délégiez pas : par habitude, ou parce qu’expliquer semble plus long que faire. Avant de réduire, demandez-vous ce que vous avez gardé, et pourquoi.",
            ],
          },
        ],
      },
      {
        h2: 'La conversation, avec des faits',
        blocs: [
          {
            etapes: [
              "Sortez du suivi la liste des demandes des trois derniers mois, regroupées par domaine.",
              "Comparez-la au périmètre écrit dans la proposition : ce qui est entré, ce qui n’est plus demandé.",
              "Choisissez entre trois issues : retirer un domaine, en ajouter un, ou changer de niveau d’accompagnement.",
              "Faites écrire le résultat : un avenant ou une proposition révisée, avec sa date d’effet.",
            ],
          },
          {
            paragraphes: [
              "Les conditions générales de BrittAssist posent la règle ainsi : le forfait couvre le périmètre décrit dans la proposition ; une demande manifestement extérieure, ou un volume qui l’excède durablement, donne lieu à un échange préalable et, le cas échéant, à un avenant. Aucune prestation supplémentaire n’est facturée sans accord écrit préalable.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Laisser déborder sans rien dire, puis découvrir un supplément ou un retard.",
      "Réduire un forfait sur la foi d’un mois calme.",
      "Discuter du prix avant d’avoir regardé la liste des demandes.",
    ],
    limites: [
      "La suspension d’un accompagnement pendant une période creuse n’est pas une règle générale : elle dépend du contrat, et se demande avant de signer plutôt qu’au milieu de l’été.",
    ],
    faq: [
      {
        q: 'Les heures non utilisées d’un forfait sont-elles reportées ?',
        a: "Cela dépend entièrement du contrat. Certains prestataires reportent, d’autres non, d’autres plafonnent le report. C’est une ligne à lire avant de signer, pas à découvrir en fin de mois.",
      },
      {
        q: 'À partir de quand un dépassement est-il durable ?',
        a: "Il n’existe pas de définition légale. Un repère pratique : un mois chargé est un pic, trois mois consécutifs au-dessus du volume prévu dessinent un nouveau besoin.",
      },
      {
        q: 'Peut-on changer de formule en cours d’année ?',
        a: "Oui, par accord écrit des deux parties. Un changement de niveau prend effet à une date convenue, en général au début d’un mois.",
      },
    ],
    liens: [
      { href: '/guides/prix-assistante-de-direction-externalisee', label: 'Combien coûte une assistante externalisée' },
      { href: '/guides/suivi-demandes-assistante-externalisee', label: 'Suivre les demandes déléguées' },
      { href: '/guides/revue-trimestrielle-assistance-externalisee', label: 'La revue trimestrielle du périmètre' },
      { href: '/tarifs', label: 'Les trois niveaux d’accompagnement' },
      { href: '/cgv', label: 'Les conditions générales de BrittAssist' },
    ],
    cloture: 'Un forfait n’est pas un engagement à consommer. C’est une estimation, et une estimation se révise.',
    ...lot('A'),
    cadrage: {
      intention: 'méthode',
      motCle: 'forfait secrétariat externalisé dépassement',
      variantes: ['heures non utilisées forfait secrétariat', 'dépassement forfait assistante', 'ajuster forfait assistante externalisée', 'forfait d’heures secrétariat report'],
      persona: 'Client d’un secrétariat externalisé dont le volume ne correspond plus au forfait',
      objectif: 'Faire reconnaître un écart durable et le traiter par un avenant fondé sur la liste des demandes',
      difference: 'Traite la vie du forfait après la signature, alors que le guide sur le prix aide à choisir un modèle de tarification',
    },
  },

  {
    slug: 'evaluer-un-secretariat-externalise',
    type: 'methode',
    dossier: EXTERNALISER,
    categorie: 'Piloter',
    nom: 'Évaluer un secrétariat externalisé',
    title: 'Évaluer un secrétariat externalisé : cinq indicateurs · BrittAssist',
    description:
      "Demandes closes à la date dite, demandes rouvertes, questions évitables, sujets en attente de vous, tâches reprises : cinq indicateurs lus chaque mois.",
    h1: 'Évaluer un secrétariat externalisé : cinq indicateurs qui se lisent en dix minutes.',
    lede:
      "On juge souvent un secrétariat externalisé à l’impression qu’il laisse : « ça se passe bien », « ça traîne un peu ». L’impression se trompe dans les deux sens. Cinq chiffres simples, tirés du suivi des demandes, disent la même chose plus sûrement — et deux d’entre eux parlent de vous.",
    reponseCourte: [
      "Un secrétariat externalisé s’évalue sur des demandes closes, non sur des heures.",
      "Cinq indicateurs suffisent : tenue des dates, demandes rouvertes, questions évitables, sujets en attente de vous, tâches que vous avez reprises.",
      "On lit une tendance, pas une valeur : ce qui compte est le sens de l’évolution d’un mois sur l’autre.",
      "Deux de ces indicateurs mesurent la qualité de vos demandes, non celle du travail rendu.",
    ],
    sections: [
      {
        h2: 'Les cinq indicateurs',
        blocs: [
          {
            tableau: {
              legende: 'Indicateurs de suivi d’un secrétariat externalisé',
              colonnes: ['Indicateur', 'Ce qu’il mesure', 'Ce qu’il révèle quand il se dégrade'],
              lignes: [
                ['Demandes closes à la date annoncée', 'La fiabilité des délais', 'Une charge trop forte, ou des dates annoncées trop tôt'],
                ['Demandes rouvertes', 'Ce qui a dû être repris après clôture', 'Un résultat attendu mal compris'],
                ['Questions évitables', 'Les demandes revenues avec une question', 'Des demandes incomplètes au départ'],
                ['Sujets en attente de vous', 'Ce qui est bloqué sur une décision', 'Votre propre disponibilité'],
                ['Tâches que vous avez reprises', 'Ce que vous refaites vous-même', 'Une confiance qui ne s’est pas installée'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les deux qui parlent de vous',
        blocs: [
          {
            paragraphes: [
              "Les questions évitables et les sujets en attente sont des indicateurs de la délégation, pas de la prestataire. Si une demande sur trois revient avec une question, vos messages manquent d’une information : l’échéance, le budget, ou jusqu’où elle peut décider. Si dix sujets attendent votre réponse depuis une semaine, le goulot n’est pas de son côté.",
              "C’est la partie désagréable de l’exercice, et la plus rentable : corriger sa façon de demander améliore tous les autres chiffres.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qu’il ne faut pas mesurer',
        blocs: [
          {
            liste: [
              "Les heures passées : elles mesurent un effort, pas un résultat.",
              "Le nombre de messages échangés : un bon mois en compte peu.",
              "Le temps de réponse à la minute : il pousse à accuser réception vite plutôt qu’à traiter bien.",
              "Le nombre de demandes traitées, seul : il récompense les sujets découpés en morceaux.",
            ],
          },
        ],
      },
      {
        h2: 'La lecture mensuelle',
        blocs: [
          {
            etapes: [
              "La prestataire tire les cinq chiffres du suivi des demandes, une fois par mois.",
              "Vous les lisez à côté de ceux du mois précédent : qu’est-ce qui a bougé ?",
              "Pour l’indicateur qui s’est le plus dégradé, vous cherchez ensemble un exemple précis.",
              "Vous changez une chose, une seule, et vous regardez le mois suivant.",
            ],
          },
          {
            paragraphes: [
              "Dix minutes y suffisent. Si cette lecture devient une réunion d’une heure, c’est qu’on y traite les demandes elles-mêmes, ce qui est l’objet du point hebdomadaire.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Fixer des objectifs chiffrés dès le premier mois, avant de savoir ce qui est normal.",
      "Lire un mauvais chiffre comme une faute, sans chercher l’exemple qui l’explique.",
      "Suivre dix indicateurs : aucun ne sera lu.",
    ],
    faq: [
      {
        q: 'Faut-il fixer des objectifs chiffrés à sa prestataire ?',
        a: "Pas au départ. Observez trois mois pour connaître votre niveau habituel, puis fixez, si vous y tenez, un seuil pour l’indicateur qui vous importe le plus. Un objectif posé trop tôt mesure surtout l’optimisme du jour où il a été écrit.",
      },
      {
        q: 'Qui tient les indicateurs de suivi ?',
        a: "La prestataire, puisqu’ils sortent du suivi qu’elle tient. Vous n’avez rien à saisir : vous lisez, et vous dites ce qui vous surprend.",
      },
      {
        q: 'Que faire si un indicateur se dégrade deux mois de suite ?',
        a: "En parler, avec un exemple. Dans la plupart des cas, la cause est une règle qui manque ou un volume qui a changé, et elle se traite par un ajustement du cadre plutôt que par un reproche.",
      },
    ],
    liens: [
      { href: '/guides/suivi-demandes-assistante-externalisee', label: 'Suivre les demandes déléguées' },
      { href: '/guides/point-hebdomadaire-avec-son-assistante', label: 'Le point hebdomadaire' },
      { href: '/guides/modele-tableau-de-bord-hebdomadaire', label: 'Modèle de tableau de bord hebdomadaire' },
      { href: '/guides/revue-trimestrielle-assistance-externalisee', label: 'Revoir le cadre une fois par trimestre' },
      { href: '/services/reporting', label: 'Le reporting d’activité' },
    ],
    cloture: 'On n’évalue pas une assistante. On évalue ce qui se passe entre une demande et son résultat.',
    ...lot('B'),
    cadrage: {
      intention: 'méthode',
      motCle: 'évaluer un secrétariat externalisé',
      variantes: ['indicateurs qualité assistante externalisée', 'mesurer l’efficacité d’une assistante', 'évaluer un prestataire administratif', 'qualité de service secrétariat externalisé'],
      persona: 'Dirigeant qui travaille depuis quelques mois avec une prestataire et veut un jugement fondé',
      objectif: 'Remplacer l’impression par cinq indicateurs lus en tendance',
      difference: 'Propose des indicateurs d’évaluation et sépare ceux qui mesurent la prestataire de ceux qui mesurent le client',
    },
  },

  {
    slug: 'revue-trimestrielle-assistance-externalisee',
    type: 'methode',
    dossier: EXTERNALISER,
    categorie: 'Piloter',
    nom: 'La revue trimestrielle du périmètre',
    title: 'Revue trimestrielle d’une assistance externalisée · BrittAssist',
    description:
      "Une heure par trimestre pour revoir le périmètre, les accès, le volume et les trois mois à venir : l’ordre du jour de la revue, et son compte rendu.",
    h1: 'La revue trimestrielle : une heure pour remettre le périmètre d’équerre.',
    lede:
      "Le point hebdomadaire traite les demandes. Personne ne traite le cadre. Il glisse donc tout seul : un domaine s’ajoute, un accès reste ouvert, un prix fixé pour un volume en couvre un autre. Une heure par trimestre suffit à le remettre droit.",
    reponseCourte: [
      "La revue trimestrielle porte sur le cadre de la collaboration, non sur les demandes en cours.",
      "Son ordre du jour tient en six points : ce qui est entré, ce qui est sorti, l’autonomie, les accès, le volume et le prix, les trois mois à venir.",
      "Elle se conclut par un écrit de six lignes, qui met à jour le périmètre.",
      "Elle se tient même quand tout va bien : c’est alors qu’elle coûte le moins.",
    ],
    sections: [
      {
        h2: 'L’ordre du jour',
        blocs: [
          {
            etapes: [
              "Ce qui est entré dans le périmètre sans avoir été décidé : on l’officialise, ou on le retire.",
              "Ce qui n’est plus demandé : on le raye du périmètre écrit.",
              "L’autonomie : quelles demandes peuvent désormais partir sans validation préalable ?",
              "Les accès : lesquels ne servent plus, lesquels manquent.",
              "Le volume et le prix : le forfait correspond-il encore à ce qui est traité ?",
              "Les trois mois à venir : échéances, absences de chacun, périodes chargées.",
            ],
          },
        ],
      },
      {
        h2: 'La préparer',
        blocs: [
          {
            paragraphes: [
              "La revue ne vaut que par ce qu’on y apporte. La prestataire vient avec la liste des demandes du trimestre regroupées par domaine, et la liste des accès qu’elle détient. Vous venez avec votre calendrier des trois prochains mois et une question : qu’est-ce que je fais encore moi-même, et que je ne devrais plus faire ?",
              "Sans ces pièces, la revue devient une conversation agréable dont il ne sort rien.",
            ],
          },
        ],
      },
      {
        h2: 'Le compte rendu, en six lignes',
        blocs: [
          {
            modele: {
              titre: 'Compte rendu de revue trimestrielle',
              lignes: [
                "Ajouté au périmètre : …",
                "Retiré du périmètre : …",
                "Demandes qui passent en autonomie : …",
                "Accès retirés ou ouverts : …",
                "Forfait : inchangé, ou révisé à compter du …",
                "À prévoir d’ici la prochaine revue : …",
              ],
            },
          },
          {
            paragraphes: [
              "Ce compte rendu se range avec la proposition d’origine. Au bout d’un an, les quatre comptes rendus racontent ce que la collaboration est devenue, ce qu’aucune des deux parties ne saurait reconstituer de mémoire.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qu’elle évite',
        blocs: [
          {
            liste: [
              "Le glissement silencieux : un périmètre qui a doublé sans que le prix ni les priorités aient été rediscutés.",
              "Les accès dormants : des droits ouverts pour une mission terminée depuis six mois.",
              "La surprise de calendrier : des congés qui tombent la semaine d’une clôture.",
              "Le reproche tardif : une gêne qui aurait pris cinq minutes à dire en mars, et qui pèse en septembre.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Fondre la revue dans un point hebdomadaire : les demandes urgentes mangent toujours le temps du cadre.",
      "La tenir sans écrit à la sortie.",
      "L’annuler parce que tout va bien.",
    ],
    faq: [
      {
        q: 'Pourquoi une revue tous les trois mois ?',
        a: "C’est un intervalle assez long pour qu’une évolution se voie, et assez court pour qu’un écart ne s’installe pas. Une activité très saisonnière peut préférer une revue avant et une après la saison.",
      },
      {
        q: 'Qui prend l’initiative de la revue trimestrielle ?',
        a: "Peu importe, pourvu que la date soit fixée à l’avance. Le plus simple est de poser les quatre rendez-vous de l’année dès le démarrage.",
      },
      {
        q: 'Que faire si la revue conclut à un changement de forfait ?',
        a: "L’écrire, avec une date d’effet. Selon les conditions générales de BrittAssist, un volume qui excède durablement le périmètre prévu fait l’objet d’un échange préalable et, le cas échéant, d’un avenant.",
      },
    ],
    liens: [
      { href: '/guides/point-hebdomadaire-avec-son-assistante', label: 'Le point hebdomadaire' },
      { href: '/guides/niveaux-d-autonomie-delegation', label: 'Les niveaux d’autonomie' },
      { href: '/guides/registre-des-acces-entreprise', label: 'Tenir un registre des accès' },
      { href: '/guides/forfait-secretariat-externalise-depassement', label: 'Quand le forfait ne correspond plus au volume' },
      { href: '/private-office', label: 'Le fonctionnement d’un Private Office' },
    ],
    cloture: 'Le quotidien se règle chaque semaine. Le cadre, lui, ne se règle que si quelqu’un y pense.',
    ...lot('C'),
    cadrage: {
      intention: 'méthode',
      motCle: 'revue trimestrielle prestataire',
      variantes: ['bilan trimestriel assistante externalisée', 'point d’étape prestataire administratif', 'réviser le périmètre d’une prestation', 'revue de contrat prestataire'],
      persona: 'Dirigeant engagé dans une collaboration durable avec une prestataire',
      objectif: 'Installer un rendez-vous trimestriel consacré au cadre, conclu par un écrit',
      difference: 'Porte sur le cadre — périmètre, accès, forfait — quand le point hebdomadaire porte sur les demandes',
    },
  },

  {
    slug: 'changer-d-assistante-externalisee',
    type: 'methode',
    dossier: EXTERNALISER,
    categorie: 'Organiser',
    nom: 'Changer de prestataire de secrétariat',
    title: 'Changer de prestataire de secrétariat sans rupture · BrittAssist',
    description:
      "Préavis, note de passation, accès, interlocuteurs à prévenir : l’ordre des opérations pour changer de prestataire de secrétariat sans rien laisser tomber.",
    h1: 'Changer de prestataire de secrétariat : organiser le relais entre l’ancienne et la nouvelle.',
    lede:
      "Mettre fin à une collaboration et en commencer une autre sont deux opérations. Entre les deux, il y a un passage où vos factures doivent continuer à partir et vos rendez-vous à se tenir. C’est ce passage qui se prépare.",
    reponseCourte: [
      "Récupérez d’abord ce qui vous appartient : liste des accès, documents, procédures, sujets en cours.",
      "Les accès de la nouvelle prestataire sont créés par vous ; ceux de l’ancienne sont retirés par vous, à la date de fin.",
      "Un chevauchement de quelques jours est l’idéal. À défaut, le relais passe par vous, et par un écrit.",
      "Ne transmettez pas à la nouvelle les habitudes qui vous ont fait partir.",
    ],
    sections: [
      {
        h2: 'L’ordre des opérations',
        blocs: [
          {
            etapes: [
              "Relisez le contrat en cours : préavis, restitution des documents, sort des accès.",
              "Demandez une note de passation : tâches récurrentes, échéances, interlocuteurs, emplacements, sujets ouverts.",
              "Dressez la liste des accès détenus par la prestataire sortante, outil par outil.",
              "Créez vous-même les accès de la nouvelle, nominatifs, limités au périmètre.",
              "Prévenez les interlocuteurs qui échangeaient directement avec l’ancienne.",
              "Retirez les accès de l’ancienne à la date de fin, et changez les mots de passe des comptes partagés.",
              "Un mois plus tard, relevez ce qui s’est perdu en route, et complétez.",
            ],
          },
        ],
      },
      {
        h2: 'Avec ou sans chevauchement',
        blocs: [
          {
            tableau: {
              legende: 'Deux façons d’organiser le relais',
              colonnes: ['Relais', 'Comment il se passe', 'Ce qu’il exige'],
              lignes: [
                ['Avec chevauchement', 'Les deux prestataires travaillent quelques jours en parallèle, chacune avec ses accès', 'L’accord de la sortante, et deux factures sur la période'],
                ['Sans chevauchement', 'La note de passation et vos explications tiennent lieu de relais', 'Une note complète, et du temps de votre part la première semaine'],
              ],
            },
          },
          {
            paragraphes: [
              "Le chevauchement n’est pas toujours possible, ni toujours souhaité par la prestataire qui s’en va. Il ne se décrète pas. Quand il n’a pas lieu, c’est l’écrit qui porte tout : raison de plus pour demander la note de passation dès l’annonce, et non la dernière semaine.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qu’il ne faut pas retransmettre',
        blocs: [
          {
            paragraphes: [
              "Un changement de prestataire est le seul moment où l’on peut remettre à plat sans rien casser. Avant de transmettre vos procédures à la nouvelle, relisez-les avec une question : est-ce ainsi que je veux que cela se passe, ou est-ce ainsi que cela s’est installé ?",
              "Écrivez aussi, pour vous, ce qui n’allait pas. Des retours trop tardifs, un périmètre jamais clair, des délais flous : chacune de ces phrases devient une ligne du nouveau cadre. Changer de personne sans changer de cadre reproduit le plus souvent la même situation.",
            ],
          },
        ],
      },
      {
        h2: 'Si la séparation se passe mal',
        blocs: [
          {
            paragraphes: [
              "Traitez les accès avant tout le reste : c’est la seule chose qui ne peut pas attendre. Demandez ensuite, par écrit, la restitution de vos documents. La suite relève du contrat. Selon les conditions générales de BrittAssist, les documents et livrables produits pour le client lui appartiennent après paiement intégral de la prestation : c’est le genre de clause qu’on est content d’avoir lue avant.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Annoncer la fin avant d’avoir la liste des accès.",
      "Laisser à la prestataire sortante le soin de créer les accès de celle qui arrive.",
      "Compter sur la mémoire de chacun pour les sujets en cours.",
    ],
    faq: [
      {
        q: 'Faut-il prévenir ses clients quand on change de prestataire ?',
        a: "Ceux qui échangeaient directement avec la prestataire, oui : un message court, qui présente la nouvelle interlocutrice et sa date d’arrivée. Les autres n’ont pas à connaître votre organisation.",
      },
      {
        q: 'Que deviennent les modèles et les documents créés par l’ancienne prestataire ?',
        a: "Cela dépend du contrat. La règle la plus courante, et celle des conditions générales de BrittAssist, est qu’ils appartiennent au client une fois la prestation payée. Vérifiez la vôtre avant d’en avoir besoin.",
      },
      {
        q: 'Combien de temps faut-il pour que la nouvelle soit à l’aise ?',
        a: "Moins qu’au premier démarrage, si la note de passation existe : le cadre, les procédures et les modèles sont déjà là. Il reste à apprendre vos interlocuteurs et vos préférences, ce qui prend le temps de voir revenir les demandes.",
      },
    ],
    liens: [
      { href: '/guides/fin-de-collaboration-assistante-externalisee', label: 'Terminer une collaboration proprement' },
      { href: '/guides/modele-note-de-passation', label: 'Modèle de note de passation' },
      { href: '/guides/registre-des-acces-entreprise', label: 'Tenir un registre des accès' },
      { href: '/guides/choisir-assistante-externalisee', label: 'Choisir une assistante externalisée' },
      { href: '/guides/presenter-son-assistante-a-ses-clients', label: 'Présenter son assistante à ses clients' },
      { href: '/contact', label: 'Parler de votre situation' },
    ],
    cloture: 'Ce qui se transmet d’une prestataire à l’autre, c’est ce qui était écrit. Le reste part avec elle.',
    ...lot('B'),
    cadrage: {
      intention: 'méthode',
      motCle: 'changer de prestataire de secrétariat',
      variantes: ['changer d’assistante externalisée', 'remplacer sa secrétaire indépendante', 'transition entre deux prestataires administratifs', 'reprendre un secrétariat externalisé'],
      persona: 'Dirigeant qui quitte une prestataire pour une autre',
      objectif: 'Organiser le relais entre deux prestataires sans interruption de service',
      difference: 'Traite le passage entre la sortante et l’entrante, alors que la page sur la fin de collaboration traite la sortie seule',
    },
  },

  {
    slug: 'recruter-apres-avoir-externalise',
    type: 'guide',
    dossier: EXTERNALISER,
    categorie: 'Décider',
    nom: 'Recruter après avoir externalisé',
    title: 'Après l’externalisation : quand recruter une assistante · BrittAssist',
    description:
      "Besoin de présence, volume stable, équipe à encadrer : les signes qu’il est temps de créer le poste, et comment se servir de la prestation pour bien recruter.",
    h1: 'Passer de l’externalisation au recrutement : les signes, et la marche à suivre.',
    lede:
      "Externaliser son secrétariat n’est pas un choix définitif. Il arrive qu’une entreprise grandisse jusqu’au point où un poste se justifie. Ce n’est pas un échec de la formule : c’est souvent la prestation qui a permis de savoir, avec précision, quel poste créer.",
    reponseCourte: [
      "Trois signes indiquent qu’un poste se justifie : un besoin de présence apparu, un volume stable et élevé sur plusieurs trimestres, une équipe qui a besoin d’un appui quotidien.",
      "La prestation vous a donné ce qui manque à la plupart des recrutements : une liste de tâches observées, des procédures et des accès en ordre.",
      "Le coût se simule avec vos propres données avant de décider.",
      "Le passage se prépare : préavis de la prestation, note de passation, et ce que vous choisissez de garder externalisé.",
    ],
    sections: [
      {
        h2: 'Les signes',
        blocs: [
          {
            liste: [
              "Une part croissante du travail exige d’être sur place : accueil, logistique d’un site, matériel.",
              "Le volume est resté stable et élevé pendant plusieurs trimestres, sans creux.",
              "Vos collaborateurs sollicitent l’assistance toute la journée, pour des sujets qui demandent une présence dans l’équipe.",
              "Vous avez désormais le temps, et l’envie, d’encadrer quelqu’un.",
            ],
          },
          {
            paragraphes: [
              "Le dernier point est le plus souvent oublié. Un poste se manage : priorités, entretiens, congés, formation. Un dirigeant qui recrute pour ne plus s’occuper de rien retrouve, sous une autre forme, la charge qu’il voulait quitter.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que la prestation vous a déjà donné',
        blocs: [
          {
            tableau: {
              legende: 'Ce qu’un suivi de prestation apporte à un recrutement',
              colonnes: ['Ce que vous avez', 'Ce que cela devient'],
              lignes: [
                ['La liste des demandes, par domaine et par rythme', 'Une fiche de poste fondée sur des tâches réelles'],
                ['Des procédures écrites', 'Le dossier de prise de poste'],
                ['Un registre des accès', 'La liste des droits à ouvrir le premier jour'],
                ['Des modèles et des réponses types', 'Un poste qui ne part pas de zéro'],
              ],
            },
          },
          {
            paragraphes: [
              "La plupart des fiches de poste d’assistante sont écrites en imaginant ce que la personne fera. La vôtre peut l’être en regardant ce qui a été fait, mois après mois.",
            ],
          },
        ],
      },
      {
        h2: 'La marche à suivre',
        blocs: [
          {
            etapes: [
              "Extrayez du suivi les domaines traités et leur volume sur les six derniers mois.",
              "Rédigez la fiche de poste à partir de cette liste, en y ajoutant ce que la distance empêchait.",
              "Simulez le coût complet du poste avec vos données, et faites vérifier le résultat par votre expert-comptable.",
              "Annoncez votre projet à la prestataire assez tôt pour organiser le préavis et la passation.",
              "Décidez de ce qui reste externalisé, s’il y a lieu.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qu’on garde parfois externalisé',
        blocs: [
          {
            paragraphes: [
              "Le recrutement ne reprend pas toujours tout. Certaines entreprises conservent à l’extérieur ce qui touche à la sphère personnelle du dirigeant, qu’il ne souhaite pas confier à une personne de l’équipe, ou un renfort lors des périodes chargées. Le périmètre se réduit alors, il ne disparaît pas.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Recruter pour faire baisser une facture, sans simuler le coût complet du poste.",
      "Prévenir la prestataire le jour de l’arrivée de la personne recrutée.",
      "Écrire la fiche de poste sans rouvrir le suivi des demandes.",
    ],
    limites: [
      "Les formalités d’une embauche, le contrat de travail et la paie relèvent de votre expert-comptable ou de votre cabinet de paie.",
    ],
    faq: [
      {
        q: 'La prestataire peut-elle aider au recrutement ?',
        a: "Pour la logistique, oui : mise au propre de la fiche de poste, coordination des entretiens, préparation de la passation. Le choix de la personne et la décision d’embaucher restent les vôtres.",
      },
      {
        q: 'Peut-on garder une part externalisée après avoir recruté ?',
        a: "Oui. Un périmètre réduit, centré sur ce que vous ne voulez pas confier en interne ou sur les périodes de pointe, se définit comme n’importe quel autre.",
      },
      {
        q: 'Quand prévenir sa prestataire d’un projet de recrutement ?',
        a: "Dès que la décision est prise, sans attendre la fin du recrutement. Le préavis court à partir de l’annonce écrite, et une passation préparée à l’avance sert d’abord la personne qui arrive.",
      },
    ],
    liens: [
      { href: '/guides/assistante-independante-ou-salariee', label: 'Assistante indépendante ou salariée' },
      { href: '/guides/premiere-embauche-formalites-administratives', label: 'Embaucher : l’administratif à prévoir' },
      { href: '/guides/modele-note-de-passation', label: 'Modèle de note de passation' },
      { href: '/guides/fin-de-collaboration-assistante-externalisee', label: 'Terminer une collaboration proprement' },
      { href: '/services/support-equipes', label: 'Un renfort ponctuel pour vos équipes' },
    ],
    sources: [SOURCE_SIMULATEUR],
    cloture: 'Une bonne prestation prépare aussi le jour où l’on n’en aura plus besoin.',
    ...lot('C'),
    cadrage: {
      intention: 'informationnelle',
      motCle: 'recruter après avoir externalisé',
      variantes: ['réinternaliser son secrétariat', 'passer d’une assistante freelance à une salariée', 'fiche de poste assistante à partir d’une prestation', 'internaliser un poste d’assistante'],
      persona: 'Dirigeant dont l’entreprise a grandi et qui envisage de créer le poste',
      objectif: 'Faire reconnaître le moment de recruter et utiliser le suivi de la prestation pour écrire le poste',
      difference: 'Traite le retour en interne après une externalisation, étape absente du parcours décrit par le dossier',
    },
  },

  {
    slug: 'assistante-partagee-entre-associes',
    type: 'methode',
    dossier: EXTERNALISER,
    categorie: 'Organiser',
    nom: 'Une assistante pour plusieurs associés',
    title: 'Une assistante pour plusieurs associés : les règles · BrittAssist',
    description:
      "Deux associés, deux urgences, une seule assistante : arbitre désigné, file unique, clé de priorité, périmètre par personne. Les quatre règles qui évitent le conflit.",
    h1: 'Une assistante pour plusieurs associés : qui demande, qui arbitre.',
    lede:
      "Partager une assistante à plusieurs semble une économie évidente. Le coût apparaît le premier jour où deux associés ont chacun une urgence. Sans règle, c’est l’assistante qui tranche — et elle tranchera toujours contre quelqu’un.",
    reponseCourte: [
      "Une assistante partagée a besoin d’un arbitre désigné, d’une file de demandes unique et d’une règle de priorité écrite.",
      "L’assistante applique la règle ; elle ne choisit pas entre deux associés.",
      "Chaque associé a son périmètre, et sa sphère personnelle reste cloisonnée.",
      "La répartition du coût se décide entre associés, avant de démarrer.",
    ],
    sections: [
      {
        h2: 'Les quatre règles',
        blocs: [
          {
            etapes: [
              "Un arbitre : un associé désigné tranche les conflits de priorité. À tour de rôle si nécessaire, mais un seul à la fois.",
              "Une file unique : toutes les demandes arrivent au même endroit, visible de tous ceux qui en déposent.",
              "Une clé de priorité : écrite une fois, elle départage sans discussion la plupart des cas.",
              "Un périmètre par personne : ce que chacun peut demander, et ce qui relève du cabinet ou de la société.",
            ],
          },
        ],
      },
      {
        h2: 'La clé de priorité',
        blocs: [
          {
            tableau: {
              legende: 'Conflits types et règle qui les tranche',
              colonnes: ['Conflit', 'Règle possible'],
              lignes: [
                ['Deux demandes pour le même jour', 'L’échéance imposée de l’extérieur passe avant l’échéance choisie'],
                ['Un sujet client et un sujet interne', 'Le client d’abord, sauf échéance légale côté interne'],
                ['Une demande de la structure et une demande d’un associé', 'La structure d’abord : elle engage tout le monde'],
                ['Deux demandes de même rang', 'La première déposée ; au-delà, l’arbitre'],
              ],
            },
          },
          {
            paragraphes: [
              "Ces règles ne sont que des exemples. L’important est que les vôtres existent, qu’elles tiennent en quelques lignes et que l’assistante puisse les montrer quand on lui demande pourquoi un sujet est passé avant un autre.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qui reste cloisonné',
        blocs: [
          {
            paragraphes: [
              "Une assistante partagée voit plusieurs agendas, plusieurs messageries, parfois plusieurs vies privées. Trois précautions suffisent. Les demandes personnelles d’un associé ne figurent pas dans la file commune. Les accès sont ouverts par personne, non pour le groupe. Et ce qu’elle apprend de l’un ne se dit pas à l’autre : c’est l’application ordinaire de son engagement de confidentialité, mais il vaut mieux l’avoir dit.",
            ],
          },
        ],
      },
      {
        h2: 'La question du coût',
        blocs: [
          {
            paragraphes: [
              "La facture est en général adressée à la structure. Sa répartition entre associés — à parts égales, au prorata de l’usage, ou portée par la structure — est une décision qui vous appartient. Elle se prend avant de commencer, et se revoit quand l’usage d’un associé s’écarte nettement de celui des autres. Le suivi des demandes donne la mesure, si vous voulez la faire.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Laisser chaque associé envoyer ses demandes par son propre canal.",
      "Demander à l’assistante d’arbitrer « au mieux ».",
      "Mêler dans la même file les sujets de la structure et les sujets privés.",
    ],
    faq: [
      {
        q: 'L’assistante peut-elle arbitrer elle-même ?',
        a: "Elle applique la clé de priorité, ce qui règle la plupart des cas. Quand la règle ne suffit pas, elle remonte la question à l’arbitre, avec les deux échéances. Lui faire porter la décision reviendrait à lui faire choisir un associé contre l’autre.",
      },
      {
        q: 'Faut-il un accompagnement distinct par associé ?',
        a: "Pas nécessairement. Un périmètre commun suffit tant que les besoins se ressemblent. Si l’un des associés a un usage très différent, notamment une forte part personnelle, deux périmètres sont plus lisibles.",
      },
      {
        q: 'Et quand les associés ne sont pas d’accord entre eux ?',
        a: "Ce n’est plus une question d’assistance. Une assistante ne peut pas compenser un désaccord sur les priorités de la structure ; elle le rend seulement visible plus tôt.",
      },
    ],
    liens: [
      { href: '/guides/niveaux-d-autonomie-delegation', label: 'Les niveaux d’autonomie' },
      { href: '/guides/suivi-demandes-assistante-externalisee', label: 'Suivre les demandes déléguées' },
      { href: '/guides/canal-pour-transmettre-ses-demandes', label: 'Par quel canal transmettre ses demandes' },
      { href: '/assistante/professions-liberales', label: 'L’assistance pour les cabinets libéraux' },
      { href: '/services/support-equipes', label: 'Un renfort ponctuel pour vos équipes' },
    ],
    cloture: 'Une assistante peut servir trois associés. Elle ne peut pas avoir trois priorités.',
    ...lot('B'),
    cadrage: {
      intention: 'méthode',
      motCle: 'assistante partagée entre associés',
      variantes: ['une assistante pour plusieurs dirigeants', 'secrétariat partagé cabinet', 'assistante mutualisée associés', 'partager une secrétaire à plusieurs'],
      persona: 'Associés d’un cabinet ou d’une petite société qui partagent une assistante',
      objectif: 'Faire poser un arbitre, une file unique et une clé de priorité avant le premier conflit',
      difference: 'Traite le cas de plusieurs donneurs d’ordre, que les autres guides, écrits pour un dirigeant seul, n’abordent pas',
    },
  },

  {
    slug: 'presenter-son-assistante-a-ses-clients',
    type: 'modele',
    dossier: AGENDA,
    categorie: 'Modèle',
    nom: 'Présenter son assistante à ses clients',
    title: 'Présenter son assistante à ses clients : les messages · BrittAssist',
    description:
      "Quelle adresse, quelle signature, quels mots : le message pour présenter une assistante externalisée à ses clients et partenaires, et les trois choix d’identité.",
    h1: 'Présenter son assistante externalisée à ses clients et partenaires.',
    lede:
      "Un message qui arrive d’une inconnue, au sujet d’une facture ou d’un rendez-vous, est ignoré dans le meilleur des cas, pris pour une fraude dans le pire. Avant qu’elle écrive à vos interlocuteurs, votre assistante doit leur avoir été présentée. Cela tient en un e-mail, et en un choix : au nom de qui écrit-elle ?",
    reponseCourte: [
      "Présentez votre assistante à vos interlocuteurs réguliers avant son premier message, par un e-mail court envoyé de votre adresse.",
      "Trois identités sont possibles : sa propre adresse, une adresse à votre nom de domaine, ou votre boîte par délégation.",
      "Dans les trois cas, elle signe de son nom et dit pour le compte de qui elle écrit.",
      "Présentez-la pour ce qu’elle est : une prestataire, non une salariée.",
    ],
    sections: [
      {
        h2: 'Les trois choix d’identité',
        blocs: [
          {
            tableau: {
              legende: 'D’où écrit votre assistante',
              colonnes: ['Option', 'Ce que voit le destinataire', 'À prévoir'],
              lignes: [
                ['Sa propre adresse professionnelle', 'Une personne extérieure, qui écrit pour vous', 'L’annonce préalable : sans elle, le message inquiète'],
                ['Une adresse à votre nom de domaine', 'Une interlocutrice de votre organisation', 'La création du compte, et sa suppression à la fin'],
                ['Votre boîte, par délégation', 'Un message « envoyé de la part de »', 'La délégation de messagerie, et une signature claire'],
              ],
            },
          },
          {
            paragraphes: [
              "Aucune option n’est la bonne dans l’absolu. La première est la plus simple à mettre en place et à défaire. La deuxième rassure les interlocuteurs qui se méfient des adresses inconnues. La troisième convient quand elle répond à des messages qui vous étaient adressés.",
            ],
          },
        ],
      },
      {
        h2: 'Le message d’annonce',
        blocs: [
          {
            modele: {
              titre: 'À envoyer de votre adresse, à vos interlocuteurs réguliers',
              lignes: [
                "Objet : Votre nouvelle interlocutrice pour le suivi administratif",
                "Bonjour,",
                "À compter du [date], [Prénom Nom] m’accompagne pour le suivi administratif de [société] : rendez-vous, factures, pièces et relances.",
                "Elle vous écrira depuis l’adresse [adresse]. Vous pouvez lui répondre directement ; elle me tient informé.",
                "Pour toute question de fond, je reste votre interlocuteur.",
                "Bien cordialement, [Vous]",
              ],
            },
          },
          {
            paragraphes: [
              "Trois informations suffisent : qui, à partir de quand, pour quoi. La dernière phrase compte autant que les autres : elle dit à votre client que vous ne vous éloignez pas.",
            ],
          },
        ],
      },
      {
        h2: 'La signature',
        blocs: [
          {
            modele: {
              titre: 'Signature d’une assistante externalisée',
              lignes: [
                "[Prénom Nom]",
                "Assistante de [Votre prénom Nom] — [Société]",
                "[Téléphone] · [adresse e-mail]",
              ],
            },
          },
          {
            paragraphes: [
              "Elle signe de son nom, jamais du vôtre. Un message signé de vous et écrit par une autre finit toujours par être remarqué, et la confiance y perd davantage qu’elle n’aurait perdu à une présentation honnête.",
            ],
          },
        ],
      },
      {
        h2: 'À qui l’annoncer en premier',
        blocs: [
          {
            liste: [
              "Votre expert-comptable et son collaborateur, qui recevront des pièces et des questions.",
              "Votre banque, si elle est amenée à échanger avec elle.",
              "Vos principaux clients, pour la facturation et les rendez-vous.",
              "Vos fournisseurs et prestataires habituels.",
            ],
          },
          {
            paragraphes: [
              "L’annonce est aussi une précaution contre la fraude. Un fournisseur qui sait qui est habilité à lui écrire pour vous repère plus facilement celui qui ne l’est pas.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "La laisser écrire sans annonce, en comptant sur la signature pour expliquer.",
      "La présenter comme une salariée de l’entreprise.",
      "Oublier de prévenir les mêmes interlocuteurs le jour où la collaboration s’arrête.",
    ],
    faq: [
      {
        q: 'Faut-il préciser qu’elle est externe à l’entreprise ?',
        a: "Vous n’avez pas à détailler son statut, mais vous ne devez pas le travestir. « Elle m’accompagne pour… » est exact et suffit. La dire salariée ne l’est pas.",
      },
      {
        q: 'Mon assistante peut-elle signer de mon nom ?',
        a: "Non. Elle peut écrire pour votre compte, depuis votre boîte si vous l’y avez autorisée, mais sous son propre nom. Ce qui part sous le vôtre engage votre parole.",
      },
      {
        q: 'Que faire si un client refuse de passer par mon assistante ?',
        a: "Respecter son choix, pour lui. Certaines relations se portent en direct, et c’est très bien. Elle peut préparer ce que vous lui direz, sans apparaître.",
      },
    ],
    liens: [
      { href: '/guides/deleguer-sa-boite-mail', label: 'Déléguer sa boîte mail' },
      { href: '/guides/delegation-d-acces-messagerie-et-agenda', label: 'La délégation de messagerie et d’agenda' },
      { href: '/guides/fraude-au-faux-rib-et-au-president', label: 'Fraude au faux RIB et au président' },
      { href: '/services/coordination', label: 'La coordination de vos interlocuteurs' },
      { href: '/guides/changer-d-assistante-externalisee', label: 'Changer de prestataire de secrétariat' },
    ],
    cloture: 'Une assistante présentée est écoutée. Une assistante qui surgit est vérifiée.',
    ...lot('B'),
    cadrage: {
      intention: 'modèle',
      motCle: 'présenter son assistante à ses clients',
      variantes: ['annoncer une assistante externalisée', 'mail de présentation assistante', 'signature mail assistante pour le compte de', 'adresse e-mail pour son assistante'],
      persona: 'Dirigeant qui démarre avec une assistante et se demande comment l’annoncer',
      objectif: 'Faire envoyer un message d’annonce et choisir l’identité sous laquelle l’assistante écrit',
      difference: 'Traite l’annonce aux tiers et l’identité visible, non le tri de la boîte ni la technique de délégation',
    },
  },

  {
    slug: 'absence-de-son-assistante-independante',
    type: 'situation',
    dossier: SITUATIONS,
    categorie: 'Situation',
    nom: 'Quand votre assistante indépendante s’absente',
    title: 'Assistante indépendante absente : la continuité · BrittAssist',
    description:
      "Congés, maladie : une assistante indépendante n’a pas de remplaçante d’office. Ce qui doit tenir pendant son absence, et les questions à poser avant de signer.",
    h1: 'Congés, maladie : que se passe-t-il quand votre assistante indépendante s’absente ?',
    lede:
      "C’est la première objection faite à une indépendante qui travaille seule : et si elle n’est pas là ? L’objection est fondée. Une personne seule prend des congés et tombe parfois malade. La réponse ne consiste pas à promettre qu’elle sera toujours disponible, mais à organiser ce qui se passe quand elle ne l’est pas.",
    reponseCourte: [
      "Une indépendante qui travaille seule n’a pas de remplaçante d’office : son absence se prépare, elle ne se nie pas.",
      "Une absence prévue se règle avant : échéances avancées, demandes mises en attente, cas d’urgence listés.",
      "Une absence imprévue se supporte si trois choses sont restées chez vous : les accès, le suivi des demandes, l’échéancier.",
      "Chez BrittAssist, les périodes de congés sont annoncées au client avec un préavis raisonnable.",
    ],
    sections: [
      {
        h2: 'Ce qui doit tenir pendant une absence',
        blocs: [
          {
            tableau: {
              legende: 'Continuité pendant l’absence d’une prestataire',
              colonnes: ['Sujet', 'Ce qui se fait avant', 'Ce qui se passe pendant'],
              lignes: [
                ['Échéances datées', 'Avancées, ou confiées à quelqu’un de nommé', 'Aucune ne tombe sans que quelqu’un l’ait en charge'],
                ['Demandes courantes', 'Traitées avant le départ, ou mises en attente avec une date', 'Vous savez ce qui attend, et jusqu’à quand'],
                ['Urgences', 'Une liste fermée de cas, et qui s’en occupe', 'Le cas se traite par la voie prévue'],
                ['Accès', 'Vous conservez les vôtres sur chaque outil', 'Rien n’est bloqué derrière un compte qu’elle seule détient'],
              ],
            },
          },
        ],
      },
      {
        h2: 'L’absence prévue',
        blocs: [
          {
            etapes: [
              "La date est annoncée assez tôt pour être inscrite à votre agenda.",
              "Deux semaines avant, vous regardez ensemble l’échéancier de la période.",
              "Ce qui peut être fait d’avance l’est : factures préparées, réservations confirmées, relances envoyées.",
              "Ce qui ne peut pas attendre reçoit un nom : le vôtre, celui d’un collaborateur, ou celui d’un relais convenu.",
              "Au retour, un point court reprend ce qui s’est accumulé.",
            ],
          },
          {
            paragraphes: [
              "Bien préparés, des congés passent inaperçus. La situation est la même qu’avec une personne salariée, à ceci près qu’ici le calendrier se discute entre deux entreprises.",
            ],
          },
        ],
      },
      {
        h2: 'L’absence imprévue',
        blocs: [
          {
            paragraphes: [
              "Une maladie ne prévient pas. Ce qui vous protège alors n’est pas une clause, c’est une organisation : le suivi des demandes tenu dans un espace auquel vous avez accès, les procédures écrites, l’échéancier partagé. Avec ces trois éléments, vous savez en dix minutes ce qui était en cours et ce qui arrive à échéance. Sans eux, vous découvrez les sujets à mesure qu’ils se manifestent.",
              "C’est la raison pour laquelle rien ne doit vivre uniquement dans la tête ou dans la boîte de la prestataire. Ce principe vaut pour toute personne à qui vous confiez un travail ; il est seulement plus visible quand elle travaille seule.",
            ],
          },
        ],
      },
      {
        h2: 'Trois questions à poser avant de signer',
        blocs: [
          {
            modele: {
              titre: 'Questions sur la continuité',
              lignes: [
                "Combien de temps à l’avance vos congés sont-ils annoncés ?",
                "Si vous êtes absente une semaine sans l’avoir prévu, comment suis-je informé, et que devient ce qui était en cours ?",
                "Avez-vous un relais ? Si oui, qui est-ce, et dans quelles conditions intervient-il ?",
              ],
            },
          },
          {
            paragraphes: [
              "La troisième question appelle une réponse nette. Un relais est une autre personne qui accède à vos informations : il se décide avec vous, pas sans vous.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Découvrir les congés de sa prestataire par un message d’absence.",
      "Laisser un outil accessible par son seul compte.",
      "Supposer qu’un relais existe, sans avoir demandé qui c’est.",
    ],
    limites: [
      "Cette page traite l’absence d’une prestataire indépendante. L’absence d’une assistante salariée, avec ses règles propres, fait l’objet d’une autre page.",
    ],
    faq: [
      {
        q: 'Une assistante indépendante a-t-elle une remplaçante ?',
        a: "Pas nécessairement. Certaines travaillent avec une consœur, d’autres non. Ce n’est pas un défaut en soi, à condition que ce soit dit, et que l’organisation permette de tenir une absence.",
      },
      {
        q: 'Suis-je facturé pendant les congés de ma prestataire ?',
        a: "Cela dépend du contrat et du type de forfait. Un accompagnement au périmètre est en général pensé sur l’année, congés compris ; un forfait d’heures suit sa propre règle. La question se pose avant de signer.",
      },
      {
        q: 'Que faire si l’absence de la prestataire se prolonge ?',
        a: "Au-delà de quelques semaines, il ne s’agit plus de continuité mais de relais : une autre prestataire, pour un temps ou pour de bon. La note de passation et la liste des accès sont alors ce qui permet de ne pas repartir de zéro.",
      },
    ],
    liens: [
      { href: '/guides/remplacer-une-assistante-absente', label: 'Remplacer une assistante salariée absente' },
      { href: '/guides/preparer-son-absence', label: 'Préparer sa propre absence' },
      { href: '/guides/echeancier-administratif-entreprise', label: 'Construire son échéancier administratif' },
      { href: '/guides/sous-traitance-par-son-assistante', label: 'Votre assistante peut-elle sous-traiter ?' },
      { href: '/cgv', label: 'Les conditions générales de BrittAssist' },
      { href: '/private-office', label: 'Un interlocuteur unique : le fonctionnement' },
    ],
    cloture: 'La continuité ne tient pas à la présence d’une personne. Elle tient à ce qui reste lisible quand elle n’est pas là.',
    ...lot('A'),
    cadrage: {
      intention: 'problème-solution',
      motCle: 'assistante indépendante absente',
      variantes: ['congés assistante freelance continuité', 'secrétaire indépendante malade que faire', 'continuité de service secrétariat externalisé', 'assistante externalisée en congé'],
      persona: 'Dirigeant qui hésite à dépendre d’une prestataire seule, ou dont la prestataire s’absente',
      objectif: 'Faire organiser la continuité avant l’absence, et poser les bonnes questions avant de signer',
      difference: 'Traite l’absence de la prestataire indépendante ; la page voisine traite celle d’une assistante salariée de l’entreprise',
    },
  },

  {
    slug: 'erreur-de-son-assistante-externalisee',
    type: 'situation',
    dossier: SITUATIONS,
    categorie: 'Situation',
    nom: 'Une erreur de votre prestataire',
    title: 'Erreur de votre assistante externalisée : que faire · BrittAssist',
    description:
      "Un envoi au mauvais destinataire, une date manquée : arrêter les conséquences, établir les faits, corriger, puis changer une règle. Et ce que dit le contrat.",
    h1: 'Une erreur a été commise par votre prestataire : l’ordre des gestes.',
    lede:
      "Un devis parti chez le mauvais client, une réservation à la mauvaise date, une échéance passée : toute personne qui travaille commet un jour une erreur. Ce qui distingue une collaboration solide n’est pas qu’il n’y en ait jamais. C’est ce qui se passe dans l’heure, puis dans la semaine qui suit.",
    reponseCourte: [
      "D’abord arrêter les conséquences, ensuite seulement comprendre.",
      "Les faits s’établissent ensemble : quelle demande, quelle consigne, quel écart.",
      "Une erreur se conclut par une règle changée — un contrôle, un modèle, un niveau d’autonomie —, non par dix.",
      "La responsabilité se lit dans le contrat ; pour un préjudice important, un avocat doit le lire avec vous.",
    ],
    sections: [
      {
        h2: 'L’ordre des gestes',
        blocs: [
          {
            etapes: [
              "Arrêter : prévenir le destinataire, rappeler le message si l’outil le permet, annuler la réservation, bloquer le paiement.",
              "Établir les faits, à deux : ce qui a été demandé, ce qui a été fait, à quel moment l’écart s’est produit.",
              "Corriger, et informer ceux qui doivent l’être, avec des mots simples.",
              "Chercher la cause : une consigne ambiguë, une information manquante, une inattention, un outil.",
              "Changer une chose pour que cela ne se reproduise pas.",
              "L’écrire, en trois lignes, dans le suivi.",
            ],
          },
        ],
      },
      {
        h2: 'Quatre causes, quatre réponses',
        blocs: [
          {
            tableau: {
              legende: 'Cause d’une erreur et correction adaptée',
              colonnes: ['Cause', 'Ce qui s’est passé', 'Ce qu’on change'],
              lignes: [
                ['Consigne ambiguë', 'La demande pouvait se lire de deux façons', 'La formulation, ou un modèle de demande'],
                ['Information manquante', 'Elle ne pouvait pas savoir', 'Ce qui est transmis au départ'],
                ['Inattention', 'Elle savait, et s’est trompée', 'Un contrôle avant envoi sur ce type d’acte'],
                ['Outil', 'Un automatisme a fait ce qu’on ne voulait pas', 'Le réglage, ou la procédure autour'],
              ],
            },
          },
          {
            paragraphes: [
              "Les deux premières causes vous concernent autant qu’elle. Les reconnaître n’excuse rien ; cela dit où se trouve la correction.",
            ],
          },
        ],
      },
      {
        h2: 'Erreur isolée, ou tendance',
        blocs: [
          {
            paragraphes: [
              "Une erreur ne dit rien. Trois erreurs du même genre disent quelque chose. Avant de conclure, regardez le suivi : combien de demandes ont été rouvertes ce trimestre, et sur quels sujets ? Une erreur sur cent demandes traitées et une erreur sur dix ne décrivent pas la même situation, même si la première vous a coûté davantage.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que dit le contrat',
        blocs: [
          {
            paragraphes: [
              "Qui supporte les conséquences d’une erreur dépend de ce qui a été signé. Les conditions générales de BrittAssist, par exemple, inscrivent la relation dans une obligation de moyens, limitent la responsabilité au montant facturé pour la prestation concernée, et excluent les dommages indirects ainsi que les défaillances de prestataires tiers réservés pour le compte du client.",
              "Si la prestataire a souscrit une assurance de responsabilité civile professionnelle, c’est à elle de lui déclarer le sinistre. Cette assurance n’est imposée par les textes qu’à certaines professions : demandez, avant de signer, si elle en dispose. Pour un préjudice important, la lecture du contrat par un avocat est la seule réponse sérieuse.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Chercher le responsable avant d’avoir arrêté les conséquences.",
      "Réagir par message, à chaud.",
      "Reprendre tout le périmètre en main à la première faute.",
    ],
    limites: [
      "Cette page décrit la conduite à tenir, non vos droits. La portée d’une clause de responsabilité s’apprécie au cas par cas : seul un avocat peut vous dire ce qu’elle vaut dans votre situation.",
    ],
    faq: [
      {
        q: 'Faut-il tout revérifier après une erreur ?',
        a: "Non. Un contrôle ciblé sur le type d’acte en cause suffit, pour un temps défini. Tout revérifier revient à refaire le travail, et installe une défiance dont la collaboration ne se remet pas.",
      },
      {
        q: 'Une erreur justifie-t-elle de rompre le contrat ?',
        a: "Rarement une seule. Les conditions générales de BrittAssist prévoient qu’en cas de manquement grave, le contrat peut être résilié quinze jours après une mise en demeure restée sans effet. La plupart des erreurs n’en relèvent pas et se règlent par un ajustement.",
      },
      {
        q: 'Comment parler d’une erreur sans abîmer la relation ?',
        a: "De vive voix, avec les faits, et en commençant par ce qui a été réparé. Une prestataire sérieuse vous aura le plus souvent prévenu elle-même : c’est ce réflexe-là qu’il faut encourager.",
      },
    ],
    liens: [
      { href: '/guides/erreurs-de-delegation', label: 'Les erreurs de délégation, côté dirigeant' },
      { href: '/guides/niveaux-d-autonomie-delegation', label: 'Les niveaux d’autonomie' },
      { href: '/guides/contrat-de-prestation-assistante-independante', label: 'Le contrat de prestation avec une assistante' },
      { href: '/guides/evaluer-un-secretariat-externalise', label: 'Erreur isolée ou tendance : les indicateurs' },
      { href: '/cgv', label: 'Les conditions générales de BrittAssist' },
      { href: '/private-office', label: 'La boucle fermée, de la demande au retour' },
    ],
    sources: [SOURCE_ASSURANCES],
    cloture: 'On juge une prestataire moins à l’erreur qu’à l’heure qui la suit.',
    ...lot('B'),
    cadrage: {
      intention: 'problème-solution',
      motCle: 'erreur de son assistante externalisée',
      variantes: ['erreur prestataire administratif que faire', 'responsabilité assistante indépendante erreur', 'faute d’une secrétaire indépendante', 'assistante freelance erreur conséquences'],
      persona: 'Dirigeant confronté à une erreur commise par sa prestataire',
      objectif: 'Donner l’ordre des gestes, puis ramener l’erreur à une cause et à une règle',
      difference: 'Traite l’erreur de la prestataire et la responsabilité contractuelle, quand la page sur les erreurs de délégation traite celles du dirigeant',
    },
  },
];
