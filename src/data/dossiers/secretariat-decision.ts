/**
 * Série « secrétariat externalisé » — décider, comparer, s'engager.
 *
 * Ces pages prolongent /guides/secretariat-externalise, qui décrit les cinq
 * formes du secrétariat externalisé. Elles traitent ce que cette page ne fait
 * qu'effleurer : les inconvénients du modèle, la façon de consulter et de
 * comparer des prestataires, les formes voisines, et ce qu'une facture sans
 * TVA change pour le client.
 *
 * Elles sont rangées dans les dossiers existants selon leur sujet : aucun
 * nouveau dossier n'est créé. Ce qui décrit BrittAssist reprend les conditions
 * générales publiées (/cgv) et rien d'autre.
 */
import type { Guide } from '../guides.ts';
import { lot } from './secretariat-lots.ts';

const EXTERNALISER = 'externaliser-son-assistanat';
const ADMINISTRATIF = 'organiser-l-administratif-de-son-entreprise';
const FACTURATION = 'devis-factures-relances';
const MODELES = 'modeles-et-checklists';

const SOURCE_INDEPENDANT = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F1691', label: 'Service-Public Entreprendre — Comment différencier un travailleur indépendant d’un salarié' };
const SOURCE_PERIODE_ESSAI = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F1643', label: 'Service-Public Entreprendre — Période d’essai pour un salarié' };
const SOURCE_GROUPEMENT = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F1694', label: 'Service-Public Entreprendre — Embauche d’un salarié par un groupement d’employeurs' };
const SOURCE_INTERIM = { href: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F11215', label: 'Service-Public — Contrat de travail temporaire (intérim)' };
const SOURCE_APPRENTISSAGE = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F2918', label: 'Service-Public Entreprendre — Contrat d’apprentissage' };
const SOURCE_CNIL_TRANSFERTS = { href: 'https://www.cnil.fr/fr/transferts-de-donnees-hors-ue-le-cadre-general-prevu-par-le-rgpd', label: 'CNIL — Transferts de données hors UE : le cadre général prévu par le RGPD' };
const SOURCE_CNIL_SOUS_TRAITANCE = { href: 'https://www.cnil.fr/fr/securite-gerer-la-sous-traitance', label: 'CNIL — Sécurité : gérer la sous-traitance' };
const SOURCE_CHARGES = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F31973', label: 'Service-Public Entreprendre — Charges déductibles du résultat fiscal d’une entreprise' };
const SOURCE_MICRO_FISCAL = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F23267', label: 'Service-Public Entreprendre — Régime fiscal de la micro-entreprise' };
const SOURCE_DOMICILIATION = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F37412', label: 'Service-Public Entreprendre — Domicilier une société et son activité' };
const SOURCE_FRANCHISE_TVA = { href: 'https://www.economie.gouv.fr/entreprises/gerer-sa-fiscalite-et-ses-impots/autres-impots-et-taxes/entreprises-pouvez-vous-beneficier-de-la-franchise-de-tva', label: 'Ministère de l’Économie — Entreprises : pouvez-vous bénéficier de la franchise de TVA ?' };
const SOURCE_REGIMES_TVA = { href: 'https://www.impots.gouv.fr/professionnel/les-regimes-dimposition-la-tva', label: 'impots.gouv.fr — Les régimes d’imposition à la TVA' };

export const secretariatDecision: Guide[] = [
  {
    slug: 'inconvenients-secretariat-externalise',
    type: 'guide',
    dossier: EXTERNALISER,
    categorie: 'Décider',
    nom: 'Les inconvénients du secrétariat externalisé',
    title: 'Secrétariat externalisé : les inconvénients réels · BrittAssist',
    description:
      "Pas de présence sur place, un temps de mise en route, une dépendance à une personne : les sept inconvénients du secrétariat externalisé, et ce qui les réduit.",
    h1: 'Secrétariat externalisé : sept inconvénients, et ce qu’ils coûtent vraiment.',
    lede:
      "Les pages qui vantent l’externalisation du secrétariat citent toutes les mêmes avantages. Les inconvénients existent pourtant, et ce sont eux qui décident si la formule vous conviendra. Les voici, sans les adoucir.",
    reponseCourte: [
      "Personne n’est dans vos locaux : l’accueil, le courrier papier et tout ce qui se manipule restent chez vous.",
      "Les premières semaines coûtent du temps au lieu d’en rendre : il faut transmettre le contexte avant d’être soulagé.",
      "Vous dépendez d’une personne ou d’une équipe que vous ne dirigez pas : ses absences, ses autres clients et ses méthodes ne sont pas à votre main.",
      "Presque tous ces inconvénients se réduisent par écrit, avant de signer. Deux d’entre eux ne se réduisent pas, et doivent parfois faire renoncer.",
    ],
    sections: [
      {
        h2: 'Les sept inconvénients',
        blocs: [
          {
            tableau: {
              legende: 'Inconvénients du secrétariat externalisé et parades',
              colonnes: ['Inconvénient', 'Ce qu’il produit au quotidien', 'Ce qui le réduit'],
              lignes: [
                ['Pas de présence physique', 'L’accueil, le courrier papier, le classeur restent chez vous', 'Numériser à la source ; garder sur place ce qui exige des mains'],
                ['Un temps de mise en route', 'Au début, vous expliquez plus que vous ne déléguez', 'Commencer par les demandes qui reviennent, pas par les exceptions'],
                ['Aucune autorité hiérarchique', 'Vous commandez un résultat, pas des horaires ni une méthode', 'Écrire le résultat attendu et l’échéance'],
                ['Une dépendance à une personne', 'Une absence ou un départ interrompt le service', 'Congés annoncés, suivi écrit, accès qui restent les vôtres'],
                ['Une disponibilité partagée', 'Votre demande passe parfois après celle d’un autre client', 'Des délais de prise en charge convenus à l’avance'],
                ['Des accès ouverts à un tiers', 'Une personne de plus peut voir vos données', 'Accès nominatifs, limités au périmètre, retirés à la fin'],
                ['Un coût devenu visible', 'Une facture chaque mois, là où votre propre temps ne se voyait pas', 'Le comparer à ce que coûtait le travail non fait'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les deux qui ne se négocient pas',
        blocs: [
          {
            h3: 'La présence',
            paragraphes: [
              "Aucune organisation ne remplace quelqu’un sur place. Si votre besoin consiste à accueillir des visiteurs, réceptionner des livraisons, ouvrir le courrier le matin même ou tenir un stock de fournitures, un secrétariat à distance ne le couvrira pas. Il peut en traiter la suite — le courrier une fois numérisé, la commande une fois décidée — mais pas le geste lui-même.",
            ],
          },
          {
            h3: 'La mise en route',
            paragraphes: [
              "Une assistante qui arrive ne connaît ni vos clients, ni vos habitudes, ni ce que vous entendez par « comme d’habitude ». Ce contexte se transmet, et c’est vous qui le transmettez. Pendant cette période, la délégation vous prend du temps au lieu de vous en rendre. Un dirigeant qui n’a réellement aucune heure à y consacrer ce mois-ci a intérêt à attendre le suivant plutôt qu’à démarrer mal.",
            ],
          },
        ],
      },
      {
        h2: 'Ceux qu’on surestime',
        blocs: [
          {
            paragraphes: [
              "La perte de contrôle est l’inconvénient le plus souvent cité, et le moins fondé. Une délégation écrite laisse plus de traces qu’une consigne donnée à voix haute dans un couloir : une demande, une date, un retour. Ce que vous perdez, c’est la possibilité de surveiller le travail en train de se faire. Ce que vous gagnez, c’est de savoir à tout moment où en est chaque sujet.",
              "La confidentialité inquiète à juste titre, mais le risque ne vient pas de la distance. Il vient d’accès trop larges, de mots de passe partagés et d’une fin de mission mal préparée — autant de défauts qui existent aussi avec une personne salariée.",
              "Quant au prix, il n’est un inconvénient que rapporté à un volume. Un secrétariat externalisé coûte plus cher à l’heure qu’un poste salarié ; il coûte moins cher qu’un poste dont on n’occupe que le tiers.",
            ],
          },
        ],
      },
      {
        h2: 'Quand il vaut mieux renoncer',
        blocs: [
          {
            liste: [
              "Le travail exige une présence quotidienne dans vos locaux.",
              "Le volume est stable, élevé, et occuperait une personne presque à temps plein.",
              "Vous attendez quelqu’un qui suive vos horaires et vos directives au fil de la journée : c’est la définition d’un poste salarié, pas d’une prestation.",
              "Vous ne pouvez dégager aucun moment pour transmettre le contexte dans les semaines qui viennent.",
            ],
          },
          {
            paragraphes: [
              "Dans ces cas, un recrutement, un temps partagé ou un renfort sur place répondent mieux. Le dire avant de signer évite une déception à tout le monde.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Lire la liste des avantages, et découvrir les inconvénients au troisième mois.",
      "Chercher à supprimer la dépendance en multipliant les prestataires : on multiplie surtout les explications à donner.",
      "Confondre l’absence de présence avec l’absence de suivi.",
    ],
    limites: [
      "Cette page décrit les inconvénients du modèle. Elle ne dit pas ce qu’une assistante externalisée refuse de faire : c’est l’objet de la page sur les limites du métier.",
    ],
    faq: [
      {
        q: 'Le secrétariat externalisé convient-il si je reçois du public ?',
        a: "Pour l’accueil lui-même, non. Pour tout ce qui l’entoure — confirmations de rendez-vous, préparation des dossiers, suites à donner — oui. Beaucoup de structures combinent une présence sur place réduite et un traitement à distance.",
      },
      {
        q: 'Est-ce plus risqué pour mes données qu’une salariée ?',
        a: "Pas par nature. Le risque dépend de l’étendue des accès, de leur caractère nominatif et de la façon dont ils sont retirés. Un contrat de prestation oblige à écrire ces points, ce qu’un contrat de travail fait rarement.",
      },
      {
        q: 'Que se passe-t-il si la prestataire arrête son activité ?',
        a: "Le service s’arrête au terme du préavis. C’est pourquoi le suivi des demandes, les procédures et la liste des accès doivent rester chez vous, à jour : ils permettent à quelqu’un d’autre de reprendre sans repartir de zéro.",
      },
    ],
    liens: [
      { href: '/guides/secretariat-externalise', label: 'Les cinq formes du secrétariat externalisé' },
      { href: '/guides/ce-qu-une-assistante-externalisee-ne-fait-pas', label: 'Ce qu’une assistante externalisée ne fait pas' },
      { href: '/guides/assistante-independante-ou-salariee', label: 'Assistante indépendante ou salariée' },
      { href: '/guides/absence-de-son-assistante-independante', label: 'Quand votre assistante indépendante s’absente' },
      { href: '/tarifs', label: 'Les trois accompagnements et leurs tarifs' },
    ],
    cloture: 'Un inconvénient connu avant de signer devient une clause. Découvert après, il devient un reproche.',
    ...lot('A'),
    cadrage: {
      intention: 'informationnelle',
      motCle: 'inconvénients secrétariat externalisé',
      variantes: ['secrétariat externalisé avantages inconvénients', 'limites de l’externalisation du secrétariat', 'risques externaliser son secrétariat', 'inconvénients secrétaire indépendante'],
      persona: 'Dirigeant qui compare les formules avant de s’engager',
      objectif: 'Faire connaître les inconvénients réels du modèle et distinguer ceux qui se réduisent de ceux qui doivent faire renoncer',
      difference: 'Traite les défauts du modèle — présence, mise en route, dépendance — et non la liste des tâches hors périmètre, déjà couverte ailleurs',
    },
  },

  {
    slug: 'mission-ponctuelle-de-secretariat',
    type: 'guide',
    dossier: EXTERNALISER,
    categorie: 'Décider',
    nom: 'Cadrer une mission ponctuelle de secrétariat',
    title: 'Mission ponctuelle de secrétariat : bien la cadrer · BrittAssist',
    description:
      "Rattrapage, dossier à monter, événement : une mission ponctuelle de secrétariat tient en quatre lignes — objet, livrable, date de fin, critère de fin.",
    h1: 'Une mission ponctuelle de secrétariat : quatre lignes à écrire avant de commencer.',
    lede:
      "Tous les besoins n’appellent pas un accompagnement au mois. Un retard à résorber, un dossier à déposer, un classement à reprendre : ce sont des travaux qui ont un début et une fin. Encore faut-il avoir écrit où se trouve la fin.",
    reponseCourte: [
      "Une mission ponctuelle convient à un travail fini : il se termine, et l’on sait à quoi on le verra.",
      "Elle se cadre en quatre lignes : l’objet, le livrable, la date de fin, et le critère qui permet de dire « c’est terminé ».",
      "Elle se paie au forfait, fixé avant de commencer. Chez BrittAssist, une mission ponctuelle est chiffrée sur devis, avec 30 % d’acompte à la commande et le solde à la livraison.",
      "Si le même besoin revient chaque mois, ce n’est plus une mission ponctuelle : c’est un périmètre.",
    ],
    sections: [
      {
        h2: 'Les quatre lignes',
        blocs: [
          {
            modele: {
              titre: 'Cadrage d’une mission ponctuelle',
              lignes: [
                "Objet : ce qui doit être fait, en une phrase, et ce qui n’en fait pas partie.",
                "Livrable : ce que vous recevrez — un dossier déposé, un tableau, un espace rangé, un événement tenu.",
                "Date de fin : une date, avec la raison qui la fixe (un dépôt, une clôture, un départ).",
                "Critère de fin : le fait observable qui permet de dire que c’est terminé.",
              ],
            },
          },
          {
            paragraphes: [
              "La quatrième ligne est celle qu’on oublie, et celle qui évite les fins de mission interminables. « Remettre de l’ordre dans la facturation » ne se termine jamais. « Toutes les prestations de janvier à juin sont facturées, et le tableau des encaissements est à jour » se constate en cinq minutes.",
            ],
          },
        ],
      },
      {
        h2: 'Quatre exemples, avec leur critère de fin',
        blocs: [
          {
            tableau: {
              legende: 'Exemples illustratifs de missions ponctuelles',
              colonnes: ['Mission', 'Livrable', 'Terminée quand'],
              lignes: [
                ['Rattrapage de facturation', 'Factures émises et tableau des encaissements', 'Toutes les prestations de la période sont facturées'],
                ['Dossier administratif d’une candidature', 'Pièces réunies dans l’ordre demandé', 'Le dossier est déposé avant la date limite'],
                ['Reprise d’un espace de documents', 'Arborescence et règles de nommage', 'Une personne extérieure retrouve un document sans aide'],
                ['Organisation d’un séminaire', 'Lieu réservé, feuille de route, suivi des inscrits', 'Le bilan est envoyé après l’événement'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Ce qui fait déraper une mission',
        blocs: [
          {
            liste: [
              "Le « tant que vous y êtes » : chaque ajout est raisonnable, leur somme double le travail. Un ajout se note, se chiffre, puis s’accepte ou se refuse.",
              "Les accès qui arrivent en retard : une mission de dix jours perd facilement trois jours à attendre un identifiant.",
              "Les pièces manquantes, que vous seul pouvez fournir. Mieux vaut en dresser la liste le premier jour que les découvrir une par une.",
              "L’absence d’interlocuteur pour trancher : une mission courte ne supporte pas une question restée sans réponse pendant une semaine.",
            ],
          },
        ],
      },
      {
        h2: 'Après la livraison',
        blocs: [
          {
            paragraphes: [
              "Une mission se clôt par une restitution : ce qui a été fait, ce qui reste hors mission, et où se trouvent les documents. Les accès ouverts pour l’occasion sont retirés. Selon les conditions générales de BrittAssist, une mission ponctuelle prend fin à la livraison : elle n’engage à rien pour la suite.",
              "C’est aussi le moment de regarder ce que la mission a révélé. Un retard de facturation rattrapé une fois se reconstituera si rien ne change dans le circuit. La mission traite le stock ; le flux, lui, relève d’une organisation.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Commander une mission sans date de fin, « pour voir ».",
      "Confier un rattrapage sans décider ce qui sera fait du flux une fois le stock traité.",
      "Élargir l’objet en cours de route sans le dire, puis s’étonner du délai.",
    ],
    faq: [
      {
        q: 'Peut-on confier une mission ponctuelle sans donner d’accès à ses outils ?',
        a: "Parfois. Un dossier à assembler ou une recherche se font à partir de pièces transmises. Un rattrapage de facturation suppose en général un accès au logiciel concerné, ouvert pour la durée de la mission et retiré ensuite.",
      },
      {
        q: 'Quand demander une mission ponctuelle ?',
        a: "Dès que l’objet est connu. Un dossier assorti d’une date limite se prépare à rebours : plus la demande arrive tard, plus la part consacrée à courir après les pièces grandit.",
      },
      {
        q: 'Une mission ponctuelle engage-t-elle pour la suite ?',
        a: "Non. Elle a son propre devis et se termine à la livraison. Si vous souhaitez ensuite un accompagnement régulier, il fait l’objet d’une proposition distincte.",
      },
    ],
    liens: [
      { href: '/tarifs', label: 'Les tarifs et le devis' },
      { href: '/guides/rattraper-un-retard-administratif', label: 'Rattraper un retard administratif' },
      { href: '/guides/situations-de-dirigeant', label: 'Situations de dirigeant : par où commencer' },
      { href: '/guides/periode-d-essai-assistante-independante', label: 'Tester une prestataire avant de s’engager' },
      { href: '/contact', label: 'Décrire votre mission' },
    ],
    cloture: 'Une mission bien cadrée se reconnaît à ceci : personne ne se demande si elle est finie.',
    ...lot('A'),
    cadrage: {
      intention: 'commerciale',
      motCle: 'mission ponctuelle de secrétariat',
      variantes: ['secrétariat ponctuel', 'secrétaire pour une mission ponctuelle', 'assistance administrative ponctuelle', 'secrétaire indépendante mission courte'],
      persona: 'Dirigeant qui a un travail administratif fini à faire faire, sans vouloir d’engagement mensuel',
      objectif: 'Faire écrire l’objet, le livrable, la date et le critère de fin avant de commander',
      difference: 'Centre la page sur le critère de fin, absent des pages qui opposent seulement mission ponctuelle et organisation durable',
    },
  },

  {
    slug: 'periode-d-essai-assistante-independante',
    type: 'guide',
    dossier: EXTERNALISER,
    categorie: 'Contractualiser',
    nom: 'Ce qui remplace une période d’essai',
    title: 'Période d’essai avec une assistante indépendante ? · BrittAssist',
    description:
      "La période d’essai relève du contrat de travail. Avec une indépendante, trois mécanismes en tiennent lieu : mission bornée, préavis court, point d’étape.",
    h1: 'Pas de période d’essai avec une indépendante : ce qui la remplace.',
    lede:
      "« On fait un essai d’un mois ? » La question est naturelle, mais le mot est emprunté au salariat. Entre deux entreprises, il n’existe pas de période d’essai : on est engagé par ce qu’on a signé. Reste à signer quelque chose qui permette de vérifier avant de s’installer.",
    reponseCourte: [
      "La période d’essai est une notion du contrat de travail : elle sert à l’employeur à évaluer un salarié, et au salarié à évaluer son poste.",
      "Un contrat de prestation n’en comporte pas par défaut. Trois mécanismes jouent le même rôle : une première mission bornée, un préavis court, ou un point d’étape daté.",
      "L’essai n’a de valeur que si ses critères sont écrits avant de commencer.",
      "Chez BrittAssist, l’accompagnement mensuel est à durée indéterminée et se résilie avec un mois de préavis : on peut donc en sortir sans attendre une échéance.",
    ],
    sections: [
      {
        h2: 'Pourquoi le mot ne convient pas',
        blocs: [
          {
            paragraphes: [
              "Service-Public définit la période d’essai comme le temps qui permet à l’employeur d’évaluer les compétences du salarié, et au salarié d’apprécier ses fonctions. Sa durée et son renouvellement sont encadrés par le droit du travail. Rien de cela ne s’applique à une prestataire indépendante, qui n’est ni recrutée ni subordonnée.",
              "Écrire « période d’essai » dans un contrat de prestation n’apporte donc aucune protection particulière, et emprunte le vocabulaire d’une relation que les deux parties ont précisément choisi de ne pas avoir. Mieux vaut décrire ce que l’on veut : pouvoir vérifier, et pouvoir arrêter.",
            ],
          },
        ],
      },
      {
        h2: 'Les trois mécanismes qui en tiennent lieu',
        blocs: [
          {
            tableau: {
              legende: 'Trois façons de vérifier avant de s’installer',
              colonnes: ['Mécanisme', 'Comment il fonctionne', 'Il convient si'],
              lignes: [
                ['Une première mission bornée', 'Un objet, une durée, un prix, puis une décision', 'Vous voulez juger sur un travail réel et fini'],
                ['Un préavis court', 'L’accompagnement démarre ; chacun peut y mettre fin rapidement', 'Le besoin est continu et ne se découpe pas en mission'],
                ['Un point d’étape daté', 'Une date est fixée pour comparer le travail aux critères écrits', 'Vous voulez un rendez-vous de décision, pas une sortie'],
              ],
            },
          },
          {
            paragraphes: [
              "Les trois se combinent : un accompagnement à préavis court, assorti d’un point d’étape au bout du premier mois, donne à la fois la porte de sortie et le moment où l’on décide de ne pas la prendre.",
            ],
          },
        ],
      },
      {
        h2: 'Écrire les critères avant de commencer',
        blocs: [
          {
            tableau: {
              legende: 'Ce qui s’évalue pendant le premier mois',
              colonnes: ['Critère', 'Comment le constater'],
              lignes: [
                ['Compréhension des demandes', 'Peu de demandes reviennent avec une question que le message contenait déjà'],
                ['Tenue des délais', 'Les demandes sont closes à la date annoncée, ou le retard est signalé avant'],
                ['Qualité du retour', 'Chaque retour dit ce qui est fait, ce qui reste et ce qui attend votre décision'],
                ['Usage des accès', 'Les accès servent au périmètre convenu, et à rien d’autre'],
                ['Votre propre charge', 'Vous expliquez moins d’une semaine sur l’autre'],
              ],
            },
          },
          {
            paragraphes: [
              "Le dernier critère est le plus parlant. Une collaboration qui fonctionne se reconnaît à ce que vous cessez d’y penser ; une collaboration qui ne fonctionne pas vous occupe davantage au bout d’un mois qu’au premier jour.",
            ],
          },
        ],
      },
      {
        h2: 'Si l’essai n’est pas concluant',
        blocs: [
          {
            paragraphes: [
              "Dites-le au point d’étape, avec les faits : telle demande, telle date, tel écart. Il arrive que la cause tienne à une consigne et se corrige en une semaine. Si ce n’est pas le cas, la sortie suit le contrat : préavis, restitution des documents, retrait des accès. Un essai qui se termine proprement n’a rien d’un échec ; c’est exactement ce pour quoi il était prévu.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Demander un travail réel non rémunéré « pour voir » : un travail se paie, et un exercice fictif ne prouve rien.",
      "Tester sur une tâche sans enjeu, puis confier d’emblée la plus sensible.",
      "Ne pas dire qu’il s’agit d’un essai, et arrêter sans explication au bout d’un mois.",
    ],
    limites: [
      "Cette page ne remplace pas la lecture du contrat qui vous est proposé. Pour un engagement important, faites-le relire par un avocat.",
    ],
    faq: [
      {
        q: 'Quelle durée prévoir pour une première mission ?',
        a: "Assez pour voir revenir les mêmes demandes. Un mois est un bon repère : c’est le rythme de la facturation, des relances et de la plupart des échéances récurrentes.",
      },
      {
        q: 'Le préavis vaut-il dans les deux sens ?',
        a: "Oui. Une prestataire peut elle aussi mettre fin à la collaboration, dans les mêmes conditions. Les conditions générales de BrittAssist prévoient un préavis d’un mois pour chacune des parties.",
      },
      {
        q: 'Peut-on commencer sans rien d’écrit, le temps de l’essai ?',
        a: "C’est le plus mauvais moment pour s’en passer : sans périmètre ni critères, il n’y a rien à évaluer. Une proposition acceptée par e-mail suffit, pourvu qu’elle dise ce qui est confié, à quel prix et comment on arrête.",
      },
    ],
    liens: [
      { href: '/guides/premier-mois-assistante-externalisee', label: 'Le premier mois avec une assistante externalisée' },
      { href: '/guides/contrat-de-prestation-assistante-independante', label: 'Le contrat de prestation avec une assistante' },
      { href: '/guides/fin-de-collaboration-assistante-externalisee', label: 'Terminer une collaboration proprement' },
      { href: '/guides/mission-ponctuelle-de-secretariat', label: 'Cadrer une mission ponctuelle de secrétariat' },
      { href: '/cgv', label: 'Les conditions générales de BrittAssist' },
      { href: '/tarifs', label: 'Les accompagnements et leur préavis' },
    ],
    sources: [SOURCE_PERIODE_ESSAI, SOURCE_INDEPENDANT],
    cloture: 'On n’essaie pas une personne. On vérifie, sur pièces, qu’un travail est fait.',
    ...lot('A'),
    cadrage: {
      intention: 'informationnelle',
      motCle: 'période d’essai assistante indépendante',
      variantes: ['période d’essai prestataire', 'tester une assistante freelance', 'mission test assistante externalisée', 'essai avant de s’engager secrétariat externalisé'],
      persona: 'Dirigeant qui veut vérifier avant de s’engager avec une prestataire',
      objectif: 'Remplacer l’idée de période d’essai par un mécanisme contractuel et des critères écrits',
      difference: 'Répond à la question juridique mal posée, puis donne les critères d’évaluation — là où la page sur le premier mois déroule un calendrier',
    },
  },

  {
    slug: 'temps-partage-interim-alternance-ou-prestataire',
    type: 'comparatif',
    dossier: EXTERNALISER,
    categorie: 'Comparer',
    nom: 'Temps partagé, intérim, alternance ou prestataire',
    title: 'Temps partagé, intérim, alternance ou prestataire ? · BrittAssist',
    description:
      "Groupement d’employeurs, intérim, alternance, prestataire indépendante : quatre façons de se faire aider sur l’administratif, et la question qui les départage.",
    h1: 'Temps partagé, intérim, alternance ou prestataire : quatre façons de se faire aider.',
    lede:
      "Entre recruter une assistante à temps plein et tout faire soi-même, il existe quatre formules intermédiaires. Elles sont souvent présentées comme des variantes d’un même service. Elles ne le sont pas : dans trois d’entre elles, quelqu’un est salarié — de vous, ou d’un autre.",
    reponseCourte: [
      "Le temps partagé, par un groupement d’employeurs, met à votre disposition une personne salariée du groupement, présente chez vous certains jours.",
      "L’intérim fournit une présence pour une durée limitée, dans les cas prévus par la loi.",
      "L’alternance vous fait employeur d’une personne en formation : c’est un investissement, pas un soulagement immédiat.",
      "La prestataire indépendante livre un résultat sur un périmètre, à distance, sans présence ni subordination.",
      "La question qui les départage : avez-vous besoin de quelqu’un sur place, ou d’un travail fait ?",
    ],
    sections: [
      {
        h2: 'Les quatre formules, côte à côte',
        blocs: [
          {
            tableau: {
              legende: 'Comparaison de quatre formules d’aide administrative',
              colonnes: ['Formule', 'Qui emploie la personne', 'Ce que vous obtenez', 'Ce que cela vous demande'],
              lignes: [
                ['Groupement d’employeurs', 'Le groupement, qui la met à disposition de ses adhérents', 'Une présence régulière, quelques jours par semaine ou par mois', 'Adhérer, et partager un calendrier avec d’autres entreprises'],
                ['Intérim', 'L’entreprise de travail temporaire', 'Une présence rapide, pour une durée limitée', 'Un motif de recours prévu par la loi, et une prise en main à chaque mission'],
                ['Alternance', 'Vous', 'Une personne en formation, présente selon son calendrier d’études', 'Du temps de tutorat et un maître d’apprentissage'],
                ['Prestataire indépendante', 'Elle-même', 'Un résultat sur un périmètre défini, à distance', 'Cadrer par écrit ce qui est confié'],
              ],
            },
          },
          {
            paragraphes: [
              "Service-Public décrit le groupement d’employeurs comme une structure constituée entre plusieurs entreprises pour embaucher des salariés et les mettre à disposition de ses membres ; le salarié partage alors son temps entre plusieurs adhérents. Le recours à l’intérim et le contrat d’apprentissage ont chacun leurs conditions : les fiches officielles, en référence, les détaillent.",
            ],
          },
        ],
      },
      {
        h2: 'La question qui trie : une présence, ou un résultat ?',
        blocs: [
          {
            paragraphes: [
              "Si le travail suppose d’être dans vos locaux — accueil, courrier du jour, logistique d’un site —, les trois premières formules répondent, et la quatrième non. Si le travail peut se faire de n’importe où — facturation, relances, agenda, dossiers —, la présence n’apporte rien, et vous payez des jours fixes pour un besoin qui, lui, arrive en continu.",
              "Le piège du temps partagé est là : vos sujets attendent le jour de présence. Celui de la prestation est symétrique : rien de ce qui se touche n’est traité.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que chaque formule vous laisse à faire',
        blocs: [
          {
            liste: [
              "Temps partagé : organiser les journées de présence, et accepter qu’un sujet urgent tombe un jour sans.",
              "Intérim : expliquer le poste à une personne nouvelle, parfois à chaque mission.",
              "Alternance : former. Une personne en apprentissage apprend son métier chez vous ; elle ne tient pas seule un poste.",
              "Prestation : écrire. Le périmètre, les priorités et les limites doivent être dits une fois, clairement.",
            ],
          },
          {
            paragraphes: [
              "Aucune de ces formules ne supprime votre part. Elles la déplacent : de l’encadrement quotidien vers le tutorat, ou vers la rédaction d’un cadre.",
            ],
          },
        ],
      },
      {
        h2: 'Les combiner',
        blocs: [
          {
            paragraphes: [
              "Les formules ne s’excluent pas. Une personne en alternance sur place et une prestataire à distance se répartissent bien le travail : la première tient ce qui exige d’être là, la seconde ce qui exige de la constance — relances, échéances, suivi. À condition que chacune sache ce qui relève de l’autre, et que ce partage soit écrit quelque part.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Choisir sur le prix horaire, sans compter le temps d’encadrement que la formule exige de vous.",
      "Prendre une personne en alternance pour être soulagé tout de suite.",
      "Traiter une prestataire indépendante comme une intérimaire : horaires, présence, directives au fil de l’eau.",
    ],
    limites: [
      "Les règles de l’intérim, de l’apprentissage et des groupements d’employeurs relèvent du droit du travail : votre expert-comptable ou un conseil en droit social vous dira ce qui s’applique à votre entreprise.",
    ],
    faq: [
      {
        q: 'Le temps partagé est-il une forme d’intérim ?',
        a: "Non. Dans un groupement d’employeurs, la personne est salariée du groupement et travaille durablement pour ses adhérents. L’intérim répond à un besoin temporaire, pour une mission dont la durée est limitée.",
      },
      {
        q: 'Une personne en alternance peut-elle tenir seule l’administratif ?',
        a: "Pas au début, et ce n’est pas ce que prévoit son contrat : elle est en formation, avec un maître d’apprentissage. Elle peut prendre en charge des tâches de plus en plus larges à mesure qu’elle progresse, si quelqu’un l’accompagne.",
      },
      {
        q: 'Peut-on passer d’une formule à l’autre ?',
        a: "Oui, et c’est fréquent. Une prestation externalisée sert souvent à mesurer le besoin réel avant de créer un poste ; à l’inverse, un poste devenu trop large peut être allégé par une prestation sur ce qui se traite à distance.",
      },
    ],
    liens: [
      { href: '/guides/assistante-independante-ou-salariee', label: 'Assistante indépendante ou salariée' },
      { href: '/guides/secretariat-externalise', label: 'Les cinq formes du secrétariat externalisé' },
      { href: '/guides/remplacer-une-assistante-absente', label: 'Remplacer une assistante absente' },
      { href: '/guides/requalification-assistante-independante-salariat', label: 'Le risque de requalification en salariat' },
      { href: '/tarifs', label: 'Les tarifs d’un accompagnement externalisé' },
    ],
    sources: [SOURCE_GROUPEMENT, SOURCE_INTERIM, SOURCE_APPRENTISSAGE],
    cloture: 'Avant de comparer des prix, demandez-vous qui sera l’employeur.',
    ...lot('D'),
    cadrage: {
      intention: 'comparaison',
      motCle: 'secrétaire à temps partagé ou prestataire',
      variantes: ['groupement d’employeurs secrétaire', 'secrétaire intérimaire ou indépendante', 'alternant ou assistante externalisée', 'assistante administrative temps partagé'],
      persona: 'Dirigeant de TPE qui hésite entre plusieurs formules d’aide sans créer un poste à temps plein',
      objectif: 'Faire distinguer les formules par l’employeur et par le besoin de présence',
      difference: 'Compare quatre formules intermédiaires par la question « qui emploie ? », là où le guide salariée ou indépendante oppose seulement deux statuts',
    },
  },

  {
    slug: 'secretariat-externalise-france-ou-offshore',
    type: 'comparatif',
    dossier: EXTERNALISER,
    categorie: 'Comparer',
    nom: 'Secrétariat en France ou offshore',
    title: 'Secrétariat externalisé en France ou offshore ? · BrittAssist',
    description:
      "Prix horaire, données personnelles, droit applicable, usages administratifs : ce qui distingue un secrétariat externalisé en France d’une offre offshore.",
    h1: 'Secrétariat en France ou offshore : ce que le prix ne dit pas.',
    lede:
      "Des prestataires établis hors de France, souvent hors de l’Union européenne, proposent un secrétariat francophone à un tarif horaire nettement plus bas. L’offre est sérieuse pour certaines tâches, et mal adaptée à d’autres. La différence ne tient pas à la compétence des personnes : elle tient au cadre.",
    reponseCourte: [
      "Le prix horaire affiché est plus bas offshore ; le coût réel dépend du temps que vous passez à expliquer et à reprendre.",
      "Confier des données personnelles à un prestataire établi hors de l’Union européenne est un transfert au sens du RGPD : il doit reposer sur un outil juridique prévu par le règlement.",
      "Le droit applicable et le tribunal compétent se lisent dans le contrat : ils ne sont pas toujours français.",
      "Une tâche qui se décrit entièrement en trois lignes voyage bien. Un sujet qui demande de connaître vos interlocuteurs voyage mal.",
    ],
    sections: [
      {
        h2: 'Les points à comparer',
        blocs: [
          {
            tableau: {
              legende: 'Prestataire en France ou hors de l’Union européenne',
              colonnes: ['Point', 'Prestataire établi en France', 'Prestataire établi hors de l’Union européenne'],
              lignes: [
                ['Prix horaire affiché', 'Plus élevé', 'Plus bas'],
                ['Données personnelles', 'Même cadre que le vôtre : le RGPD', 'Transfert hors UE, à encadrer par un outil juridique'],
                ['Droit et recours', 'Droit français, tribunal identifiable', 'À lire dans le contrat'],
                ['Usages administratifs français', 'Connus par la pratique', 'À vérifier sur pièces'],
                ['Horaires', 'Les vôtres', 'Selon le fuseau et l’organisation'],
                ['Facture et TVA', 'Régime français', 'Régime propre aux achats de services à l’étranger'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les données : la question à poser d’abord',
        blocs: [
          {
            paragraphes: [
              "Votre fichier clients, votre messagerie et vos dossiers de personnel contiennent des données personnelles. Les rendre accessibles à un prestataire établi dans un pays extérieur à l’Union européenne constitue un transfert. La CNIL rappelle qu’un tel transfert n’est possible que si un niveau de protection suffisant est assuré, au moyen de l’un des outils prévus par le RGPD : une décision d’adéquation de la Commission européenne pour le pays concerné, ou des clauses contractuelles types, par exemple.",
              "Concrètement, demandez dans quel pays se trouvent les personnes qui travailleront sur vos dossiers, où sont hébergés leurs outils, et quel document encadre le transfert. Un prestataire qui connaît son sujet répond en deux minutes.",
            ],
          },
        ],
      },
      {
        h2: 'Pour quelles tâches l’offshore se défend',
        blocs: [
          {
            liste: [
              "Les tâches à consigne complète : saisie, mise en forme, retranscription, tri selon une règle écrite.",
              "Les volumes importants et réguliers, où le prix horaire pèse réellement.",
              "Ce qui ne touche ni à des données sensibles ni à vos relations.",
            ],
          },
          {
            paragraphes: [
              "Il se défend moins dès qu’il faut du contexte : relancer un client en connaissant l’historique, arbitrer un agenda selon vos priorités, traiter avec une administration dont il faut connaître le vocabulaire et les usages. Ce n’est pas une question de langue. C’est une question de pratique accumulée.",
            ],
          },
        ],
      },
      {
        h2: 'Les questions à poser',
        blocs: [
          {
            modele: {
              titre: 'Six questions à un prestataire établi à l’étranger',
              lignes: [
                "Dans quel pays travaillent les personnes qui traiteront mes demandes ?",
                "Aurai-je un interlocuteur stable, ou plusieurs intervenants ?",
                "Quel document encadre le transfert de mes données hors de l’Union européenne ?",
                "Quel droit s’applique au contrat, et quel tribunal est compétent ?",
                "Sur quelles plages horaires, heure de Paris, mes demandes sont-elles traitées ?",
                "Comment se présente la facture, et quel est son régime de TVA ?",
              ],
            },
          },
        ],
      },
    ],
    erreurs: [
      "Comparer deux tarifs horaires sans compter le temps d’explication et de reprise.",
      "Ouvrir sa messagerie complète à un prestataire dont on ne sait pas où il se trouve.",
      "Supposer qu’un site en français désigne une entreprise française.",
    ],
    limites: [
      "Le régime de TVA d’une prestation achetée à l’étranger diffère de celui d’une facture française : c’est une question pour votre expert-comptable.",
      "BrittAssist est établie à La Roche-sur-Yon et travaille à distance depuis la France. Cette page n’est donc pas neutre par position ; elle s’efforce de l’être par les critères.",
    ],
    faq: [
      {
        q: 'Est-il permis de confier ses données à un prestataire hors d’Europe ?',
        a: "Oui, à condition que le transfert soit encadré par l’un des outils prévus par le RGPD. La CNIL en décrit le cadre général. La responsabilité de vérifier ce point vous revient, en tant que responsable du traitement.",
      },
      {
        q: 'Le prix bas d’une offre offshore se retrouve-t-il sur le coût final ?',
        a: "Pour une tâche simple et bien décrite, souvent oui. Pour un sujet qui demande plusieurs allers-retours, l’écart se réduit, et peut s’inverser si vous refaites une partie du travail.",
      },
      {
        q: 'Comment savoir où se trouve réellement la personne qui travaille ?',
        a: "En le demandant, et en le faisant écrire. Les mentions légales du site, l’adresse figurant sur le devis et la clause de sous-traitance du contrat donnent des indications ; aucune ne remplace une réponse claire.",
      },
    ],
    liens: [
      { href: '/guides/assistante-virtuelle-ou-private-office', label: 'Assistante virtuelle ou Private Office' },
      { href: '/guides/prix-assistante-de-direction-externalisee', label: 'Combien coûte une assistante externalisée' },
      { href: '/guides/confidentialite-assistante-externalisee', label: 'Confidentialité et accès à distance' },
      { href: '/guides/rgpd-sous-traitance-assistante-externalisee', label: 'RGPD : l’accord de sous-traitance' },
      { href: '/assistante-independante/a-distance', label: 'Travailler à distance, partout en France' },
    ],
    sources: [SOURCE_CNIL_TRANSFERTS, SOURCE_CNIL_SOUS_TRAITANCE],
    cloture: 'Le tarif horaire se lit sur le devis. Le cadre se lit dans le contrat, et c’est lui qui coûte ou qui protège.',
    ...lot('C'),
    cadrage: {
      intention: 'comparaison',
      motCle: 'secrétariat offshore',
      variantes: ['assistante virtuelle offshore', 'secrétariat externalisé à l’étranger', 'télésecrétariat offshore RGPD', 'assistante à distance en France ou à l’étranger'],
      persona: 'Dirigeant attiré par un tarif horaire bas proposé par un prestataire étranger',
      objectif: 'Faire comparer sur le cadre — données, droit, usages — et non sur le seul prix',
      difference: 'Traite le lieu d’établissement du prestataire et le transfert de données hors UE, que la comparaison assistante virtuelle ou Private Office n’aborde qu’en une phrase',
    },
  },

  {
    slug: 'secretariat-externalise-charge-deductible',
    type: 'reference',
    dossier: EXTERNALISER,
    categorie: 'Repère',
    nom: 'Le secrétariat externalisé, charge déductible',
    title: 'Secrétariat externalisé : une charge déductible ? · BrittAssist',
    description:
      "Une prestation de secrétariat se déduit comme toute charge engagée dans l’intérêt de l’entreprise, sous conditions. Les cinq points que regarde votre comptable.",
    h1: 'Le secrétariat externalisé est-il une charge déductible ?',
    lede:
      "La question arrive juste après celle du prix : cette dépense vient-elle en déduction du résultat ? La réponse de principe est oui. Elle comporte trois réserves, qu’il vaut mieux connaître avant de signer qu’au moment du bilan.",
    reponseCourte: [
      "Une dépense est déductible du résultat lorsqu’elle est engagée dans l’intérêt de l’entreprise, relève d’une gestion normale, est justifiée par une pièce et rattachée au bon exercice.",
      "Une prestation de secrétariat facturée à l’entreprise pour son activité entre dans ce cadre, comme toute charge externe.",
      "Au régime de la micro-entreprise, les charges réelles ne se déduisent pas : un abattement forfaitaire en tient lieu.",
      "La part d’une prestation qui sert votre vie personnelle n’est pas une dépense de l’entreprise : c’est le point à voir avec votre expert-comptable.",
    ],
    sections: [
      {
        h2: 'La règle générale',
        blocs: [
          {
            paragraphes: [
              "Service-Public rappelle les conditions qu’une charge doit réunir pour venir en déduction du résultat imposable : être engagée dans l’intérêt direct de l’entreprise et se rattacher à sa gestion normale, se traduire par une diminution de l’actif net, être comptabilisée au titre de l’exercice au cours duquel elle a été engagée, et pouvoir être justifiée par une facture ou une pièce comptable.",
              "Faire traiter sa facturation, ses relances, son agenda professionnel ou ses dossiers administratifs par une prestataire répond sans difficulté à la première condition. Le reste est affaire de pièces : une facture au nom de l’entreprise, pour une période identifiée.",
            ],
          },
        ],
      },
      {
        h2: 'Les cinq points que regardera votre comptable',
        blocs: [
          {
            tableau: {
              legende: 'Points de contrôle d’une facture de secrétariat externalisé',
              colonnes: ['Question', 'Pourquoi elle compte'],
              lignes: [
                ['La facture est-elle établie au nom de l’entreprise ?', 'C’est le justificatif de la charge'],
                ['La prestation sert-elle l’activité ?', 'C’est la condition d’intérêt de l’entreprise'],
                ['Comporte-t-elle une part personnelle ?', 'Cette part n’est pas une charge de l’entreprise'],
                ['La période facturée appartient-elle à l’exercice ?', 'Une charge se rattache à l’exercice où elle est engagée'],
                ['La facture porte-t-elle de la TVA ?', 'Sans TVA facturée, il n’y a rien à récupérer'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Trois situations à part',
        blocs: [
          {
            h3: 'Vous êtes au régime de la micro-entreprise',
            paragraphes: [
              "Dans ce régime, l’impôt se calcule sur le chiffre d’affaires diminué d’un abattement forfaitaire censé couvrir les charges : ce ne sont pas les charges réelles qui sont déduites. Une prestation de secrétariat ne réduit donc pas votre base imposable. Elle peut rester un bon calcul, mais pour d’autres raisons que fiscales.",
            ],
          },
          {
            h3: 'La prestation couvre aussi votre organisation personnelle',
            paragraphes: [
              "Certaines offres, dont celles de BrittAssist, prennent en charge des demandes professionnelles et personnelles. Une démarche privée, une réservation familiale ou la renégociation d’un contrat du foyer ne sont pas engagées dans l’intérêt de l’entreprise. La façon de traiter cette part se décide avec votre expert-comptable, avant la signature : c’est une question qui se pose bien plus simplement à l’avance qu’après une année de factures.",
            ],
          },
          {
            h3: 'La prestataire ne facture pas la TVA',
            paragraphes: [
              "Une prestataire en franchise en base de TVA émet des factures sans TVA. Les tarifs de BrittAssist sont dans ce cas, selon ses conditions générales. Vous n’avez alors aucune TVA à avancer, ni à récupérer.",
            ],
          },
        ],
      },
    ],
    limites: [
      "BrittAssist ne réalise ni tenue comptable ni déclaration fiscale, et ne donne pas de conseil fiscal. Le traitement de cette dépense dans vos comptes relève de votre expert-comptable.",
      "Le choix du compte de charges dans lequel la prestation est enregistrée appartient à votre comptable : plusieurs sont possibles selon la nature du travail.",
    ],
    faq: [
      {
        q: 'Dans quel compte se range une prestation de secrétariat ?',
        a: "Parmi les charges externes ; le compte précis dépend de la nature de la prestation et de la pratique de votre cabinet. C’est une décision de présentation des comptes, sans effet sur le principe de la déduction.",
      },
      {
        q: 'Je suis micro-entrepreneur : cela a-t-il un intérêt fiscal ?',
        a: "Non, puisque vos charges ne se déduisent pas une à une. L’intérêt se mesure autrement : en temps rendu à votre activité, et en factures émises et encaissées plus tôt.",
      },
      {
        q: 'Faut-il conserver autre chose que la facture ?',
        a: "La proposition acceptée, qui décrit le périmètre, est utile : elle montre à quoi correspond la dépense. Conservez-la avec le contrat, pour la même durée que vos pièces comptables.",
      },
    ],
    liens: [
      { href: '/guides/tva-prestataire-en-franchise-en-base', label: 'Lire une facture sans TVA' },
      { href: '/guides/prix-assistante-de-direction-externalisee', label: 'Combien coûte une assistante externalisée' },
      { href: '/guides/rentabilite-assistante-externalisee', label: 'Calculer la rentabilité d’une assistante' },
      { href: '/guides/pieces-pour-l-expert-comptable', label: 'Préparer les pièces pour l’expert-comptable' },
      { href: '/tarifs', label: 'Les tarifs et le devis' },
    ],
    sources: [SOURCE_CHARGES, SOURCE_MICRO_FISCAL, SOURCE_REGIMES_TVA],
    cloture: 'Déductible ne veut pas dire gratuit. Cela veut dire que la dépense doit pouvoir s’expliquer.',
    ...lot('D'),
    cadrage: {
      intention: 'référence',
      motCle: 'secrétariat externalisé charge déductible',
      variantes: ['prestation de secrétariat déductible', 'frais de secrétariat déduction entreprise', 'assistante indépendante frais professionnels', 'comptabiliser une prestation de secrétariat'],
      persona: 'Indépendant ou dirigeant de TPE qui se demande comment la dépense sera traitée dans ses comptes',
      objectif: 'Donner la règle de principe et les trois réserves à voir avec son expert-comptable',
      difference: 'Seule page qui traite le sort fiscal de la dépense, part personnelle et régime micro compris, sans donner de conseil fiscal',
    },
  },

  {
    slug: 'domiciliation-ou-secretariat-externalise',
    type: 'comparatif',
    dossier: ADMINISTRATIF,
    categorie: 'Comparer',
    nom: 'Domiciliation ou secrétariat externalisé',
    title: 'Domiciliation ou secrétariat externalisé ? · BrittAssist',
    description:
      "La domiciliation fournit une adresse, parfois un scan du courrier. Le secrétariat externalisé traite le travail. Ce que chacun fait, et comment les combiner.",
    h1: 'Domiciliation et secrétariat externalisé : deux services, souvent vendus ensemble.',
    lede:
      "Une recherche sur le secrétariat externalisé ramène presque toujours des offres de domiciliation. Les deux services se vendent côte à côte, parfois dans le même forfait. Ils ne répondent pourtant pas à la même question : l’un vous donne une adresse, l’autre fait le travail.",
    reponseCourte: [
      "La domiciliation fournit l’adresse du siège de l’entreprise. Les cabinets de domiciliation y ajoutent souvent la réception, la réexpédition ou la numérisation du courrier, parfois un standard.",
      "Le secrétariat externalisé traite des tâches : répondre, classer, facturer, relancer, tenir un agenda.",
      "Un courrier numérisé n’est pas un courrier traité : quelqu’un doit encore le lire, décider et répondre.",
      "Les deux se combinent bien, à condition de régler le passage de l’un à l’autre.",
    ],
    sections: [
      {
        h2: 'Qui fait quoi',
        blocs: [
          {
            tableau: {
              legende: 'Domiciliation et secrétariat externalisé, par besoin',
              colonnes: ['Besoin', 'Domiciliation', 'Secrétariat externalisé'],
              lignes: [
                ['Une adresse pour le siège', 'Oui, c’est son objet', 'Non'],
                ['Recevoir et numériser le courrier', 'Souvent, en option', 'Non : il faut une adresse où le recevoir'],
                ['Lire le courrier, répondre, classer, suivre', 'Non', 'Oui'],
                ['Répondre au téléphone', 'Parfois, par un standard en option', 'Selon la forme : c’est le métier du télésecrétariat'],
                ['Facturer, relancer, tenir l’agenda', 'Non', 'Oui'],
                ['Disposer d’un bureau ou d’une salle', 'Souvent, à la demande', 'Non'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Ce que recouvre la domiciliation',
        blocs: [
          {
            paragraphes: [
              "Service-Public présente le cabinet de domiciliation comme un centre d’affaires dont l’activité est de fournir une adresse à des entreprises. Il doit détenir un agrément préfectoral, et le contrat de domiciliation est conclu pour une durée d’au moins trois mois. La même fiche cite les services que ces cabinets proposent couramment : gestion du courrier — réception, réexpédition, numérisation —, standard téléphonique, accès à des bureaux ou à des salles de réunion.",
              "Ces services annexes ressemblent à du secrétariat, et n’en sont pas. Un standard prend un message ; il ne rappelle pas le fournisseur. Une numérisation dépose un fichier ; elle ne paie pas la facture qu’il contient.",
            ],
          },
        ],
      },
      {
        h2: 'Les faire fonctionner ensemble',
        blocs: [
          {
            etapes: [
              "Le domiciliataire numérise le courrier et le dépose dans un espace ou une boîte dédiée, toujours la même.",
              "L’assistante relève cet espace à un rythme convenu, nomme et classe chaque pièce.",
              "Elle traite ce qui peut l’être, et vous présente ce qui appelle une décision.",
              "Les recommandés suivent un circuit à part : qui est habilité à les recevoir, et sous quel délai vous en êtes informé.",
            ],
          },
          {
            paragraphes: [
              "Le point fragile est la troisième ligne du contrat de domiciliation : le délai de numérisation. Un courrier scanné une fois par semaine arrive trop tard pour une échéance à dix jours.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qu’il faut vérifier chez un domiciliataire',
        blocs: [
          {
            liste: [
              "L’agrément préfectoral, qu’il doit pouvoir vous présenter.",
              "La durée d’engagement et les conditions de sortie.",
              "Le rythme de relève et de numérisation du courrier.",
              "Le sort des originaux : conservés, réexpédiés, détruits ?",
              "La personne autorisée à recevoir un recommandé en votre nom.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Prendre un forfait « domiciliation et secrétariat » en pensant que le courrier sera traité.",
      "Laisser le courrier numérisé arriver dans une boîte que personne ne relève.",
      "Oublier de mettre à jour l’adresse du siège sur ses documents après une domiciliation.",
    ],
    limites: [
      "La domiciliation ne figure pas dans le périmètre publié par BrittAssist, qui travaille à distance et ne fournit pas d’adresse de siège.",
      "Le choix de l’adresse du siège a des conséquences juridiques et fiscales : voyez-le avec votre expert-comptable ou votre conseil.",
    ],
    faq: [
      {
        q: 'Un domiciliataire peut-il ouvrir mon courrier ?',
        a: "Seulement si le contrat le prévoit. L’option de numérisation suppose l’ouverture des plis : elle doit être écrite, avec le sort réservé aux originaux.",
      },
      {
        q: 'Puis-je domicilier ma société chez mon assistante ?',
        a: "Fournir une adresse de siège à des entreprises est l’activité des cabinets de domiciliation, qui doivent détenir un agrément préfectoral. Une assistante indépendante n’est pas, à ce titre, un domiciliataire.",
      },
      {
        q: 'Ai-je besoin d’une domiciliation et d’un secrétariat ?',
        a: "Seulement si vous avez les deux besoins. Une entreprise qui dispose de ses propres locaux n’a que faire d’une domiciliation ; une entreprise domiciliée dont le dirigeant traite lui-même son courrier n’a pas besoin de secrétariat.",
      },
    ],
    liens: [
      { href: '/guides/secretariat-externalise', label: 'Les cinq formes du secrétariat externalisé' },
      { href: '/guides/traitement-du-courrier-entrant', label: 'Traiter le courrier entrant' },
      { href: '/guides/dirigeant-souvent-en-deplacement', label: 'Diriger en étant souvent en déplacement' },
      { href: '/guides/administratif-a-la-creation-d-entreprise', label: 'Poser l’administratif à la création' },
      { href: '/services/gestion-administrative', label: 'La prise en charge administrative' },
    ],
    sources: [SOURCE_DOMICILIATION],
    cloture: 'Une adresse reçoit le courrier. Il faut encore quelqu’un pour l’ouvrir, au sens plein du mot.',
    ...lot('B'),
    cadrage: {
      intention: 'comparaison',
      motCle: 'domiciliation ou secrétariat externalisé',
      variantes: ['domiciliation et secrétariat', 'centre d’affaires secrétariat', 'domiciliation avec gestion du courrier', 'société de domiciliation services'],
      persona: 'Créateur ou dirigeant de petite structure qui confond les deux offres',
      objectif: 'Faire distinguer l’adresse du traitement, et régler le passage de l’un à l’autre',
      difference: 'Sépare deux services que les résultats de recherche présentent ensemble, et décrit le circuit du courrier entre domiciliataire et assistante',
    },
  },

  {
    slug: 'cahier-des-charges-secretariat-externalise',
    type: 'modele',
    dossier: MODELES,
    categorie: 'Modèle',
    nom: 'Modèle de cahier des charges pour un secrétariat externalisé',
    title: 'Cahier des charges pour externaliser son secrétariat · BrittAssist',
    description:
      "Le modèle en sept rubriques pour décrire son besoin de secrétariat externalisé : activité, demandes récurrentes, limites, contraintes, retour attendu, cadre.",
    h1: 'Le cahier des charges d’un secrétariat externalisé : une page, sept rubriques.',
    lede:
      "Deux prestataires à qui vous décrivez votre besoin au téléphone vous enverront deux devis qui ne se comparent pas. Le même besoin, écrit en une page et envoyé aux deux, produit deux réponses à la même question. C’est tout l’intérêt d’un cahier des charges, et il ne demande pas plus d’une heure.",
    reponseCourte: [
      "Un cahier des charges de secrétariat externalisé tient en une page et sept rubriques.",
      "Il décrit vos demandes, non des compétences : ce qui revient, à quel rythme, et ce que vous gardez.",
      "Il sert trois fois : pour consulter, pour comparer les devis, puis comme base du périmètre écrit.",
      "Il n’a pas besoin d’être complet. Il doit être exact sur ce qui revient le plus souvent.",
    ],
    sections: [
      {
        h2: 'Le modèle',
        blocs: [
          {
            modele: {
              titre: 'Cahier des charges, sept rubriques',
              lignes: [
                "1. Qui vous êtes : activité, nombre de personnes, outils utilisés (messagerie, agenda, facturation, stockage).",
                "2. Ce qui revient : les demandes récurrentes, avec leur rythme — chaque jour, chaque semaine, chaque mois.",
                "3. Ce qui est ponctuel : les dossiers prévus dans les six mois, avec leur date.",
                "4. Ce qui reste chez vous : les décisions, les signatures, les relations que vous gardez.",
                "5. Les contraintes : confidentialité particulière, outils imposés, langue, plages où vous êtes joignable.",
                "6. Le retour attendu : sous quelle forme, à quel rythme, par quel canal.",
                "7. Le cadre : date de démarrage souhaitée, durée envisagée, fourchette de budget si vous en avez une.",
              ],
            },
          },
        ],
      },
      {
        h2: 'Remplir la deuxième rubrique sans y passer la soirée',
        blocs: [
          {
            paragraphes: [
              "La rubrique des demandes récurrentes est la seule qui demande un effort, et vous n’avez pas à la tirer de votre mémoire. Ouvrez votre boîte d’envoi et votre agenda des quatre dernières semaines. Relevez tout ce que vous avez fait et qui ne demandait pas votre jugement : une confirmation de rendez-vous, une facture émise, une relance, une réservation, un document cherché.",
              "Regroupez ensuite par famille, et notez un rythme. « Facturation : une dizaine de factures en début de mois. Relances : chaque lundi. Déplacements : deux par mois. » Dix lignes de cette sorte décrivent mieux un besoin que trois paragraphes.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qu’un bon cahier des charges ne contient pas',
        blocs: [
          {
            liste: [
              "Une liste de cinquante tâches possibles : elle noie les dix qui comptent.",
              "Des horaires de présence ou un nombre d’heures par jour : vous consultez une prestataire, pas une salariée.",
              "Une méthode imposée, étape par étape : dites le résultat, laissez proposer le moyen.",
              "Des données confidentielles : un cahier des charges circule. Les noms de clients et les montants attendront.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que les réponses vous apprennent',
        blocs: [
          {
            paragraphes: [
              "Le document sert autant par les réponses qu’il provoque que par ce qu’il contient. Une prestataire qui pose des questions sur la rubrique quatre a compris où sont les risques. Celle qui dit d’elle-même ce qu’elle ne fait pas vous épargne une déception. Celle qui renvoie un tarif sans avoir rien demandé vous a répondu à côté.",
              "Une fois le choix fait, le cahier des charges ne se range pas : complété des réponses, il devient la première version du périmètre écrit dans la proposition.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Décrire le poste idéal plutôt que les demandes réelles du mois dernier.",
      "Envoyer le document à dix prestataires : vous passerez plus de temps à comparer qu’à décider.",
      "Taire son budget, puis écarter toutes les réponses pour une question de prix.",
    ],
    faq: [
      {
        q: 'Faut-il un cahier des charges quand on est une petite structure ?',
        a: "C’est là qu’il est le plus utile : une petite structure n’a personne pour trier des réponses dissemblables. Une page suffit, et elle vous servira de toute façon au moment de définir le périmètre.",
      },
      {
        q: 'À combien de prestataires envoyer le cahier des charges ?',
        a: "Deux ou trois. Au-delà, les réponses se ressemblent moins qu’elles ne vous fatiguent, et la décision recule.",
      },
      {
        q: 'Dois-je indiquer mon budget dans le cahier des charges ?',
        a: "Une fourchette, oui, si vous en avez une. Elle évite à chacun de perdre son temps, et permet à la prestataire de dire ce qui tient dans ce cadre et ce qui n’y tient pas.",
      },
    ],
    liens: [
      { href: '/guides/choisir-assistante-externalisee', label: 'Choisir une assistante externalisée' },
      { href: '/guides/modele-releve-du-temps-administratif', label: 'Modèle de relevé du temps administratif' },
      { href: '/guides/comparer-devis-secretariat-externalise', label: 'Comparer des devis de secrétariat externalisé' },
      { href: '/guides/modele-brief-assistante-externalisee', label: 'Modèle de brief pour déléguer' },
      { href: '/contact', label: 'Envoyer votre cahier des charges' },
    ],
    cloture: 'Un besoin écrit une fois se compare. Un besoin raconté trois fois change à chaque récit.',
    ...lot('A'),
    cadrage: {
      intention: 'modèle',
      motCle: 'cahier des charges secrétariat externalisé',
      variantes: ['cahier des charges externalisation administrative', 'modèle expression de besoin secrétariat', 'demande de devis secrétariat externalisé', 'cahier des charges assistante indépendante'],
      persona: 'Dirigeant qui s’apprête à consulter plusieurs prestataires',
      objectif: 'Faire écrire le besoin en une page avant de demander des devis',
      difference: 'Un document de consultation envoyé avant le choix, distinct du brief, qui porte sur une demande une fois la collaboration lancée',
    },
  },

  {
    slug: 'comparer-devis-secretariat-externalise',
    type: 'modele',
    dossier: MODELES,
    categorie: 'Modèle',
    nom: 'Grille de comparaison de devis de secrétariat',
    title: 'Comparer deux devis de secrétariat externalisé · BrittAssist',
    description:
      "Heure, forfait d’heures, périmètre, mission : la grille en douze lignes pour comparer des devis de secrétariat externalisé qui n’ont pas la même unité.",
    h1: 'Comparer des devis de secrétariat externalisé : la grille en douze lignes.',
    lede:
      "Un devis à l’heure, un forfait de vingt heures, un accompagnement au périmètre : trois prix, trois unités, aucun moyen de les ranger par ordre croissant. On ne compare pas des devis de secrétariat en regardant le total. On les compare ligne à ligne, sur ce que le total achète.",
    reponseCourte: [
      "Deux devis ne se comparent que ramenés à la même question : que coûterait, chez chacun, un mois type de vos demandes ?",
      "La grille tient en douze lignes ; trois d’entre elles font l’essentiel de l’écart réel : le dépassement, l’interlocuteur et les délais.",
      "Ce qu’un devis ne dit pas compte autant que ce qu’il dit : une ligne absente est une question à poser.",
      "Le régime de TVA change la comparaison selon que vous récupérez ou non la taxe.",
    ],
    sections: [
      {
        h2: 'La grille',
        blocs: [
          {
            tableau: {
              legende: 'Grille de comparaison de devis de secrétariat externalisé',
              colonnes: ['Ligne', 'La question à poser', 'Ce qui rend deux devis comparables'],
              lignes: [
                ['Unité de prix', 'Heure, forfait d’heures, périmètre ou mission ?', 'Le coût d’un même mois type chez chacun'],
                ['Inclus', 'Quelles demandes entrent dans le prix ?', 'La liste, écrite'],
                ['Exclu', 'Qu’est-ce qui n’y entre pas ?', 'La liste, écrite elle aussi'],
                ['Volume et dépassement', 'Que se passe-t-il si le volume dépasse ?', 'Le prix du dépassement, ou la règle de révision'],
                ['Heures non utilisées', 'Sont-elles reportées ou perdues ?', 'La règle, pour un forfait d’heures'],
                ['Frais', 'Comment sont refacturées les dépenses engagées pour vous ?', 'Au réel sur justificatif, ou avec une marge'],
                ['TVA', 'Le prix s’entend-il avec ou sans TVA ?', 'Le montant que vous supportez réellement'],
                ['Délais', 'Sous quel délai une demande est-elle prise en charge ?', 'Un engagement écrit, pas une formule'],
                ['Interlocuteur', 'Une seule personne, ou plusieurs ?', 'Le nom de qui traitera vos demandes'],
                ['Durée et préavis', 'Combien de temps êtes-vous engagé ?', 'Durée minimale et délai de sortie'],
                ['Confidentialité et données', 'Qu’est-ce qui est écrit, et pour combien de temps ?', 'La clause, et sa durée après la fin'],
                ['Fin de mission', 'Que récupérez-vous à la sortie ?', 'Restitution des documents, retrait des accès'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Ramener les prix à la même unité',
        blocs: [
          {
            etapes: [
              "Décrivez un mois type : vos demandes récurrentes, avec leur rythme. Dix lignes suffisent.",
              "Envoyez ce même mois à chaque prestataire, et demandez ce qu’il coûterait chez lui.",
              "Demandez ensuite ce que coûterait un mois chargé, avec un tiers de demandes en plus.",
              "Comparez les deux chiffres, et surtout l’écart entre eux : il mesure ce que vous paierez le jour où votre activité s’accélère.",
            ],
          },
          {
            paragraphes: [
              "Un tarif horaire bas peut produire le mois le plus cher, si les tâches prennent plus de temps que prévu. Un périmètre mensuel plus élevé peut produire le mois le moins cher, s’il absorbe sans supplément ce que l’autre facture à part.",
            ],
          },
        ],
      },
      {
        h2: 'Les trois lignes qui font l’écart réel',
        blocs: [
          {
            h3: 'Le dépassement',
            paragraphes: [
              "C’est la ligne la plus souvent absente, et celle qui pèse le plus au bout d’un an. Un devis qui ne dit rien du dépassement vous laisse découvrir la règle sur une facture.",
            ],
          },
          {
            h3: 'L’interlocuteur',
            paragraphes: [
              "Une personne qui suit vos dossiers d’un mois sur l’autre n’a pas à réapprendre votre contexte. Un devis fondé sur plusieurs intervenants achète autre chose : de la couverture, au prix d’explications répétées.",
            ],
          },
          {
            h3: 'Les délais',
            paragraphes: [
              "« Réactivité » n’est pas un délai. Demandez sous combien de temps une demande est vue, et sous combien de temps elle est traitée.",
            ],
          },
        ],
      },
      {
        h2: 'Lire ce qui n’est pas écrit',
        blocs: [
          {
            paragraphes: [
              "Une ligne de la grille restée sans réponse n’est pas un défaut du devis : c’est une question à poser avant de signer. La réponse vous renseigne deux fois, par son contenu et par le temps qu’elle met à venir.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Classer les devis par total, sans vérifier qu’ils couvrent la même chose.",
      "Comparer un prix avec TVA à un prix sans TVA, sans se demander si l’on récupère la taxe.",
      "Ne pas demander le prix d’un mois chargé.",
    ],
    faq: [
      {
        q: 'Un devis à l’heure et un forfait au périmètre sont-ils comparables ?',
        a: "Pas directement. Ils le deviennent quand chacun chiffre le même mois type. Le premier vous donnera une estimation, le second un prix ferme : cette différence fait elle-même partie de la comparaison.",
      },
      {
        q: 'Que faire quand un devis ne répond pas à une ligne de la grille ?',
        a: "Poser la question par écrit, et joindre la réponse au devis. Ce qui a été répondu par e-mail avant la signature fait partie de ce que vous avez accepté.",
      },
      {
        q: 'Combien de devis de secrétariat demander ?',
        a: "Deux ou trois, établis à partir du même document. Un quatrième apporte rarement une information nouvelle, et retarde la décision.",
      },
    ],
    liens: [
      { href: '/guides/prix-assistante-de-direction-externalisee', label: 'Combien coûte une assistante externalisée' },
      { href: '/guides/choisir-assistante-externalisee', label: 'Choisir une assistante externalisée' },
      { href: '/guides/cahier-des-charges-secretariat-externalise', label: 'Modèle de cahier des charges' },
      { href: '/guides/tva-prestataire-en-franchise-en-base', label: 'Comparer un devis avec TVA et un devis sans' },
      { href: '/tarifs', label: 'Les tarifs de BrittAssist' },
    ],
    cloture: 'Le bon devis n’est pas le moins cher. C’est celui dont vous savez, ligne à ligne, ce qu’il contient.',
    ...lot('A'),
    cadrage: {
      intention: 'modèle',
      motCle: 'comparer devis secrétariat externalisé',
      variantes: ['devis secrétariat externalisé', 'grille de comparaison prestataires administratifs', 'comparer tarifs assistante indépendante', 'lire un devis de secrétariat'],
      persona: 'Dirigeant qui a reçu plusieurs devis exprimés dans des unités différentes',
      objectif: 'Faire comparer ligne à ligne, à partir d’un même mois type',
      difference: 'Une grille à remplir devis en main, là où le guide sur le prix explique les modèles de tarification',
    },
  },

  {
    slug: 'tva-prestataire-en-franchise-en-base',
    type: 'reference',
    dossier: FACTURATION,
    categorie: 'Repère',
    nom: 'Un prestataire qui ne facture pas la TVA',
    title: 'Prestataire sans TVA : ce que cela change pour vous · BrittAssist',
    description:
      "Une assistante en franchise en base de TVA facture sans TVA. Ce que cela change pour le client, selon qu’il récupère ou non la taxe, et quoi vérifier.",
    h1: 'Un prestataire qui ne facture pas la TVA : ce que cela change, côté client.',
    lede:
      "Beaucoup d’assistantes indépendantes exercent en franchise en base de TVA : leurs factures n’en comportent pas. Selon votre propre situation, c’est sans effet ou c’est un avantage. Dans les deux cas, cela change la façon de comparer deux devis.",
    reponseCourte: [
      "Une entreprise en franchise en base ne facture pas la TVA, et ne la déduit pas sur ses propres achats.",
      "Ses factures portent la mention « TVA non applicable, article 293 B du CGI ».",
      "Si vous récupérez la TVA, comparez les devis hors taxes : le prix d’une prestataire en franchise est neutre pour vous.",
      "Si vous ne la récupérez pas, comparez ce que vous payez : à prix affiché égal, une facture sans TVA vous coûte moins.",
    ],
    sections: [
      {
        h2: 'La règle',
        blocs: [
          {
            paragraphes: [
              "La franchise en base de TVA est un régime ouvert aux entreprises dont le chiffre d’affaires ne dépasse pas certains seuils. Celles qui en bénéficient sont dispensées de facturer la taxe à leurs clients ; en contrepartie, elles ne peuvent pas déduire celle qu’elles paient sur leurs achats. Leurs factures doivent comporter la mention « TVA non applicable, article 293 B du CGI ».",
              "Les seuils et leurs conditions d’application évoluent : le ministère de l’Économie et l’administration fiscale les tiennent à jour sur les pages citées en référence.",
            ],
          },
        ],
      },
      {
        h2: 'Lire deux devis selon votre situation',
        blocs: [
          {
            tableau: {
              legende: 'Comparer un devis avec TVA et un devis sans TVA',
              colonnes: ['Votre situation', 'Le montant à comparer', 'Effet d’une prestataire sans TVA'],
              lignes: [
                ['Vous déduisez la TVA sur vos achats', 'Le prix hors taxes de chaque devis', 'Neutre : ni taxe à avancer, ni taxe à récupérer'],
                ['Vous ne la déduisez pas', 'Le prix que vous payez réellement', 'Favorable, à prix affiché égal'],
              ],
            },
          },
          {
            paragraphes: [
              "Le second cas concerne plus d’entreprises qu’on ne le pense : celles qui sont elles-mêmes en franchise, et celles dont l’activité est exonérée. Pour elles, la TVA d’un fournisseur est un coût définitif. Votre expert-comptable vous dira dans quelle situation vous vous trouvez.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qu’il faut vérifier sur la facture',
        blocs: [
          {
            liste: [
              "La mention de la franchise figure sur chaque facture.",
              "Aucune ligne de TVA n’apparaît, et aucun taux.",
              "Le montant à payer est celui du devis accepté.",
            ],
          },
          {
            paragraphes: [
              "Une facture qui porte à la fois la mention de la franchise et une ligne de TVA est une anomalie : signalez-la avant de payer.",
            ],
          },
        ],
      },
      {
        h2: 'Si la prestataire franchit le seuil',
        blocs: [
          {
            paragraphes: [
              "Une entreprise qui dépasse les seuils de la franchise devient redevable de la TVA, selon des règles de date fixées par les textes. Pour un client qui récupère la taxe, le changement est neutre. Pour les autres, le prix payé augmente si le contrat prévoit que la TVA s’ajoute au tarif convenu.",
              "La question se pose une fois, à la signature : le prix indiqué est-il un prix auquel la TVA s’ajouterait le cas échéant ? Les conditions générales de BrittAssist expriment les tarifs en euros, nets de TVA, au titre de la franchise.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Juger une prestataire moins établie parce qu’elle ne facture pas la TVA : le régime tient au chiffre d’affaires, pas au sérieux.",
      "Comparer un prix toutes taxes comprises à un prix sans TVA alors que l’on récupère la taxe.",
      "Chercher à déduire une TVA qui n’a pas été facturée.",
    ],
    limites: [
      "Cette page décrit la lecture d’un devis côté client. Votre propre régime de TVA, et le droit à déduction qui en découle, relèvent de votre expert-comptable.",
    ],
    faq: [
      {
        q: 'Une prestataire sans TVA est-elle moins fiable ?',
        a: "Non. La franchise en base est un régime fiscal lié au niveau de chiffre d’affaires. Elle ne dit rien de l’expérience, de la qualité du travail ni de la solidité de l’entreprise.",
      },
      {
        q: 'Puis-je récupérer la TVA sur une facture qui n’en comporte pas ?',
        a: "Non : aucune TVA n’a été facturée, il n’y a donc rien à déduire. Le montant de la facture est votre coût.",
      },
      {
        q: 'Le prix augmentera-t-il si la prestataire devient redevable de la TVA ?',
        a: "Cela dépend de ce que prévoit le contrat. Si vous récupérez la taxe, l’effet est neutre dans tous les cas. Sinon, posez la question avant de signer.",
      },
    ],
    liens: [
      { href: '/guides/mentions-obligatoires-facture', label: 'Les mentions obligatoires d’une facture' },
      { href: '/guides/comparer-devis-secretariat-externalise', label: 'La grille de comparaison des devis' },
      { href: '/guides/prix-assistante-de-direction-externalisee', label: 'Combien coûte une assistante externalisée' },
      { href: '/guides/secretariat-externalise-charge-deductible', label: 'Le secrétariat externalisé, charge déductible' },
      { href: '/cgv', label: 'Les conditions générales de BrittAssist' },
      { href: '/tarifs', label: 'Des tarifs exprimés nets de TVA' },
    ],
    sources: [SOURCE_FRANCHISE_TVA, SOURCE_REGIMES_TVA],
    cloture: 'Une facture sans TVA n’est ni un rabais ni un défaut. C’est un régime, et il se lit selon le vôtre.',
    ...lot('A'),
    cadrage: {
      intention: 'référence',
      motCle: 'prestataire sans TVA facture',
      variantes: ['facture sans TVA auto-entrepreneur client', 'TVA non applicable article 293 B', 'travailler avec un prestataire en franchise de TVA', 'comparer devis avec et sans TVA'],
      persona: 'Dirigeant ou indépendant qui reçoit le devis d’une prestataire en franchise de TVA',
      objectif: 'Faire lire un devis sans TVA selon que le client récupère ou non la taxe',
      difference: 'Traite la franchise du point de vue de celui qui paie, alors que les pages de facturation la traitent du point de vue de celui qui émet',
    },
  },
];
