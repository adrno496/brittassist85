/**
 * Dossier « Administratif d'entreprise ».
 *
 * Des méthodes d'organisation : classer, nommer, conserver, suivre. Les deux
 * pages qui citent des règles (durées de conservation, attestation de vigilance)
 * renvoient à leur source officielle, consultée le 3 octobre 2026.
 */
import type { Guide } from '../guides.ts';

const DATE = '2026-10-03';
const DOSSIER = 'organiser-l-administratif-de-son-entreprise';

const SOURCE_CONSERVATION = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F10029', label: 'Service-Public Entreprendre — Délais de conservation des documents pour les entreprises' };
const SOURCE_CONSERVATION_FISCALE = { href: 'https://entreprendre.service-public.gouv.fr/actualites/A18906', label: 'Service-Public Entreprendre — Modification de la durée de conservation des documents fiscaux (juin 2026)' };
const SOURCE_VIGILANCE = { href: 'https://www.urssaf.fr/accueil/attestation-vigilance.html', label: 'Urssaf — Obtenir et vérifier une attestation de vigilance' };

export const administratif: Guide[] = [
  {
    slug: 'organiser-l-administratif-de-son-entreprise',
    type: 'pilier',
    dossier: DOSSIER,
    categorie: 'Dossier',
    nom: 'Organiser l’administratif de son entreprise',
    title: 'Organiser l’administratif de son entreprise · BrittAssist',
    description:
      "Classer, nommer, conserver, suivre les échéances, préparer les pièces : les cinq chantiers qui remettent l’administratif d’une petite entreprise en ordre.",
    h1: 'Organiser l’administratif de son entreprise : les cinq chantiers.',
    lede:
      "L’administratif ne fait jamais tomber une entreprise d’un coup. Il la freine : une pièce introuvable, une échéance découverte la veille, un document demandé trois fois. Le remettre en ordre ne demande pas un grand soir, mais cinq chantiers, à mener dans l’ordre.",
    reponseCourte: [
      "Un administratif tenu repose sur cinq choses : un classement que tout le monde comprend, des noms de fichiers stables, des durées de conservation connues, un échéancier, et un circuit pour les pièces comptables.",
      "L’ordre compte : on ne peut pas suivre des échéances dans un classement où l’on ne retrouve rien.",
      "Le but n’est pas la perfection. C’est qu’une autre personne que vous puisse retrouver un document en moins d’une minute.",
    ],
    sections: [
      {
        h2: 'Les cinq chantiers, dans l’ordre',
        blocs: [
          {
            tableau: {
              legende: 'Les cinq chantiers de l’organisation administrative',
              colonnes: ['Chantier', 'Ce qu’il règle', 'Le signe qu’il manque'],
              lignes: [
                ['1. Le classement', 'Où se trouve chaque document', 'Vous cherchez la même pièce deux fois par mois'],
                ['2. Le nommage', 'Comment retrouver un fichier sans l’ouvrir', 'Des fichiers « scan_0042 » et « devis final v3 bis »'],
                ['3. La conservation', 'Ce qu’on garde, et combien de temps', 'Vous gardez tout, ou vous ne savez pas ce que vous avez jeté'],
                ['4. L’échéancier', 'Ce qui revient, et quand', 'Une échéance découverte la veille'],
                ['5. Les pièces comptables', 'Ce que le cabinet attend, chaque mois', 'Votre comptable vous relance'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Le principe qui tient les cinq : un seul endroit',
        blocs: [
          {
            paragraphes: [
              "Beaucoup de désordres administratifs ont la même origine : les documents arrivent par six canaux et restent là où ils sont arrivés. Une facture dans une boîte e-mail, un contrat dans les téléchargements, une attestation sur le téléphone, un courrier dans la voiture.",
              "La règle de base est donc un point de chute unique : tout document entrant rejoint le même espace partagé, dans la semaine. Le reste — arborescence, noms, échéances — n’est possible qu’à partir de là.",
            ],
          },
        ],
      },
      {
        h2: 'Par où commencer quand tout est en vrac',
        blocs: [
          {
            etapes: [
              "Créez l’arborescence cible, vide. Ne triez pas l’existant tout de suite.",
              "Faites-y entrer tout ce qui arrive à partir d’aujourd’hui : le nouveau est rangé, l’ancien attend.",
              "Reprenez l’ancien par ordre d’utilité : l’exercice en cours, puis les contrats actifs, puis le reste.",
              "Listez les échéances au fur et à mesure que vous croisez les contrats.",
              "Fixez un rendez-vous mensuel avec vous-même, ou avec la personne à qui vous confiez le suivi.",
            ],
          },
          {
            paragraphes: [
              "Cette méthode évite l’erreur classique : bloquer un week-end pour tout trier, s’arrêter à mi-chemin, et se retrouver avec deux classements au lieu d’un.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qui se délègue',
        blocs: [
          {
            paragraphes: [
              "L’organisation administrative est le domaine qui se délègue le mieux : il est répétitif, vérifiable, et ne demande aucune décision. Ce qui reste chez vous tient en peu de choses : valider l’arborescence une fois, signer, et dire ce qui a changé dans l’entreprise. La tenue comptable et les déclarations, elles, restent chez votre expert-comptable.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Vouloir tout trier avant de commencer à bien ranger ce qui arrive.",
      "Construire un classement que vous seul comprenez.",
      "Tenir les échéances de mémoire.",
    ],
    limites: [
      "Ce dossier traite de l’organisation, pas des obligations comptables et fiscales elles-mêmes, qui relèvent de votre expert-comptable.",
    ],
    faq: [
      {
        q: 'Faut-il tout numériser ?',
        a: "Non. Numérisez ce que vous consultez et ce que vous devez transmettre ; gardez en papier les originaux qui doivent l’être. Les conditions dans lesquelles une copie numérique remplace un original varient selon les documents : voyez-les avec votre expert-comptable.",
      },
      {
        q: 'Combien de temps faut-il pour remettre de l’ordre ?',
        a: "Le nouveau circuit se met en place en quelques jours. La reprise de l’existant dépend du volume ; elle se fait par tranches, sans bloquer l’activité.",
      },
      {
        q: 'Peut-on confier cette remise en ordre ?',
        a: "Oui. C’est une mission type : état des lieux, arborescence proposée, reprise de l’existant, échéancier, puis tenue au fil de l’eau. Elle peut être ponctuelle ou s’inscrire dans un accompagnement mensuel.",
      },
    ],
    liens: [
      { href: '/services/gestion-administrative', label: 'Confier sa gestion administrative' },
      { href: '/guides/arborescence-dossiers-entreprise', label: 'Bâtir une arborescence de dossiers' },
      { href: '/guides/echeancier-administratif-entreprise', label: 'Construire son échéancier administratif' },
      { href: '/guides/rattraper-un-retard-administratif', label: 'Rattraper un retard administratif' },
    ],
    cloture: 'Un administratif en ordre, c’est un document retrouvé par quelqu’un d’autre que vous.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'navigation',
      motCle: 'organiser l’administratif de son entreprise',
      variantes: ['organisation administrative TPE', 'gérer l’administratif d’une petite entreprise', 'mettre de l’ordre dans ses papiers d’entreprise'],
      persona: 'Dirigeant de TPE dont l’administratif s’est accumulé',
      objectif: 'Donner un ordre de marche et orienter vers chaque chantier',
      difference: 'Cinq chantiers ordonnés et une méthode de reprise qui range d’abord le nouveau',
    },
  },

  {
    slug: 'arborescence-dossiers-entreprise',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Bâtir une arborescence de dossiers',
    title: 'Arborescence de dossiers d’entreprise : un modèle simple · BrittAssist',
    description:
      "Sept dossiers au premier niveau, trois niveaux au plus, une règle par dossier : un modèle d’arborescence pour une petite entreprise.",
    h1: 'Une arborescence de dossiers que tout le monde comprend.',
    lede:
      "Un bon classement ne se juge pas à son élégance, mais à un test : quelqu’un qui ne l’a jamais vu retrouve-t-il la police d’assurance en moins d’une minute ? Si la réponse est non, c’est un classement personnel, pas un classement d’entreprise.",
    reponseCourte: [
      "Sept dossiers au premier niveau suffisent à une petite entreprise : juridique, finances, clients, fournisseurs, personnel, fonctionnement, direction.",
      "Trois niveaux de profondeur au plus : au-delà, plus personne ne sait où ranger.",
      "On classe par nature de document puis par année, pas par humeur du jour.",
      "Un dossier « À classer » unique, vidé chaque semaine, vaut mieux que dix dossiers provisoires.",
    ],
    sections: [
      {
        h2: 'Le modèle',
        blocs: [
          {
            modele: {
              titre: 'Arborescence type — premier et deuxième niveaux',
              lignes: [
                "00 — À classer (vidé chaque semaine)",
                "01 — Juridique : statuts, Kbis, assemblées, baux, assurances, marques",
                "02 — Finances : banque, comptabilité par exercice, fiscalité, financements",
                "03 — Clients : un dossier par client — contrat, devis, factures, échanges utiles",
                "04 — Fournisseurs : un dossier par fournisseur — contrat, factures, attestations",
                "05 — Personnel : un dossier par salarié, accès restreint",
                "06 — Fonctionnement : locaux, véhicules, informatique, abonnements",
                "07 — Direction : stratégie, tableaux de bord, notes, accès restreint",
              ],
            },
          },
          {
            paragraphes: [
              "Les numéros en tête figent l’ordre d’affichage, quel que soit l’outil. Adaptez les intitulés à votre activité ; gardez le principe.",
            ],
          },
        ],
      },
      {
        h2: 'Les quatre règles',
        blocs: [
          {
            etapes: [
              "Un document n’a qu’une place. S’il peut aller à deux endroits, la règle de classement est floue : précisez-la.",
              "Trois niveaux au plus. Client, puis année, puis type de document : cela suffit.",
              "Par nature avant par date. On cherche « le bail », pas « ce qu’on a reçu en mars ».",
              "Une règle écrite par dossier, en une ligne, dans un fichier « Lisez-moi » à la racine.",
            ],
          },
        ],
      },
      {
        h2: 'Les droits d’accès',
        blocs: [
          {
            paragraphes: [
              "L’arborescence sert aussi à dire qui voit quoi. Les dossiers Personnel et Direction ne s’ouvrent pas à tout le monde. Une assistante externalisée a besoin des dossiers qui relèvent de son périmètre, et de ceux-là seulement : c’est plus simple à régler quand le classement suit la nature des documents.",
            ],
          },
        ],
      },
      {
        h2: 'Migrer sans tout casser',
        blocs: [
          {
            liste: [
              "Créez la nouvelle arborescence à côté de l’ancienne.",
              "Rangez-y tout ce qui arrive, dès maintenant.",
              "Déplacez l’ancien par blocs, en commençant par l’exercice en cours.",
              "Archivez l’ancienne arborescence en lecture seule pendant quelques mois, puis supprimez-la.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Un dossier « Divers » : c’est le premier à déborder.",
      "Des dossiers au nom d’une personne (« Dossier Marc ») : ils deviennent incompréhensibles le jour de son départ.",
      "Classer par date au premier niveau : on ne se souvient jamais de la date.",
    ],
    faq: [
      {
        q: 'Faut-il classer par client ou par année ?',
        a: "Par client d’abord, par année ensuite, pour tout ce qui relève de la relation commerciale. Par exercice d’abord pour la comptabilité, parce que c’est ainsi que le cabinet la demande.",
      },
      {
        q: 'Quel outil de stockage utiliser ?',
        a: "Celui que vous avez déjà, s’il permet de gérer des droits par dossier. L’arborescence est indépendante de l’outil.",
      },
      {
        q: 'Qui tient le classement à jour ?',
        a: "Une seule personne, de préférence. Le classement se dégrade dès que chacun range à sa manière ; il tient quand quelqu’un en est responsable.",
      },
    ],
    liens: [
      { href: '/guides/regles-de-nommage-des-fichiers', label: 'Nommer ses fichiers' },
      { href: '/guides/duree-de-conservation-documents-entreprise', label: 'Combien de temps conserver les documents' },
      { href: '/guides/choisir-un-espace-de-stockage-partage', label: 'Choisir un espace de stockage partagé' },
      { href: '/services/gestion-administrative', label: 'Confier sa gestion administrative' },
    ],
    cloture: 'Un classement est réussi quand il n’a plus besoin de son auteur.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'arborescence dossiers entreprise',
      variantes: ['plan de classement entreprise', 'organiser ses dossiers numériques', 'classement documents TPE'],
      persona: 'Dirigeant ou office manager qui remet à plat un espace partagé',
      objectif: 'Fournir un modèle réutilisable et les règles qui le font tenir',
      difference: 'Un modèle en sept dossiers, testé par la question « un inconnu retrouve-t-il le document ? »',
    },
  },

  {
    slug: 'regles-de-nommage-des-fichiers',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Nommer ses fichiers',
    title: 'Nommer ses fichiers : une convention qui tient · BrittAssist',
    description:
      "Date, tiers, type, objet : une convention de nommage en quatre éléments pour retrouver n’importe quel document sans l’ouvrir.",
    h1: 'Nommer ses fichiers : quatre éléments, toujours dans le même ordre.',
    lede:
      "Un fichier bien nommé se retrouve par une recherche, se trie tout seul et se comprend sans être ouvert. Un fichier mal nommé oblige à l’ouvrir, puis à ouvrir le suivant. La différence tient à une convention de quinze secondes.",
    reponseCourte: [
      "Un nom de fichier utile contient quatre éléments, dans cet ordre : la date, le tiers, le type de document, l’objet.",
      "La date s’écrit année-mois-jour, pour que le tri alphabétique soit aussi un tri chronologique.",
      "Pas d’accents, pas d’espaces, pas de « final » ni de « v2 bis » : un numéro de version quand il en faut un.",
    ],
    sections: [
      {
        h2: 'La convention',
        blocs: [
          {
            modele: {
              titre: 'Format et exemples',
              lignes: [
                "Format : AAAA-MM-JJ_tiers_type_objet",
                "2026-10-03_durand_devis_renovation-cuisine.pdf",
                "2026-10-03_durand_facture_2026-041.pdf",
                "2026-09-15_axa_attestation_rc-pro.pdf",
                "2026-01-01_bailleur_bail_bureaux-la-roche.pdf",
                "2026-10_urssaf_declaration.pdf (document mensuel : pas de jour)",
              ],
            },
          },
        ],
      },
      {
        h2: 'Pourquoi cet ordre',
        blocs: [
          {
            liste: [
              "La date en premier : dans un dossier, les fichiers se rangent d’eux-mêmes du plus ancien au plus récent.",
              "Le tiers ensuite : une recherche sur son nom ramène tout ce qui le concerne.",
              "Le type de document : devis, facture, contrat, attestation, courrier. Une liste fermée de dix mots.",
              "L’objet en dernier : c’est la partie libre, celle qui lève l’ambiguïté.",
            ],
          },
        ],
      },
      {
        h2: 'Les règles de forme',
        blocs: [
          {
            tableau: {
              legende: 'Règles de forme pour les noms de fichiers',
              colonnes: ['Règle', 'Pourquoi'],
              lignes: [
                ['Minuscules, sans accents', 'Certains outils et transferts les altèrent'],
                ['Tirets entre les mots, soulignés entre les éléments', 'Le nom reste lisible et se découpe facilement'],
                ['Date complète en chiffres', 'Le tri fonctionne partout'],
                ['Versions numérotées : v1, v2', '« final » n’est jamais final'],
                ['Aucun nom de personne interne', 'Le fichier survit au départ de son auteur'],
              ],
            },
          },
        ],
      },
      {
        h2: 'La mise en place',
        blocs: [
          {
            etapes: [
              "Écrivez la convention sur une demi-page, avec cinq exemples tirés de vos vrais documents.",
              "Fixez la liste des types de documents.",
              "Appliquez-la à tout ce qui entre à partir d’aujourd’hui.",
              "Ne renommez l’ancien que lorsque vous le rouvrez : inutile de reprendre dix ans d’archives.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Écrire la date en jour-mois-année : le tri range alors tous les « 01 » ensemble, mois confondus.",
      "Laisser le nom par défaut du scanner ou du téléphone.",
      "Multiplier les versions sans jamais supprimer les précédentes.",
    ],
    faq: [
      {
        q: 'Quelle date mettre : celle du document ou celle du classement ?',
        a: "Celle du document : la date de la facture, du contrat, du courrier. C’est celle qu’on cherchera.",
      },
      {
        q: 'Faut-il renommer les fichiers reçus ?',
        a: "Oui, à l’arrivée. C’est quinze secondes, et c’est ce qui évite de rouvrir le fichier pour savoir ce qu’il contient.",
      },
      {
        q: 'Cela vaut-il pour les e-mails ?',
        a: "Les e-mails ne se renomment pas, mais leurs pièces jointes importantes doivent sortir de la messagerie et rejoindre le classement, sous un nom conforme.",
      },
    ],
    liens: [
      { href: '/guides/arborescence-dossiers-entreprise', label: 'Bâtir une arborescence de dossiers' },
      { href: '/guides/traitement-du-courrier-entrant', label: 'Traiter le courrier entrant' },
      { href: '/guides/pieces-pour-l-expert-comptable', label: 'Préparer les pièces pour l’expert-comptable' },
      { href: '/services/gestion-administrative', label: 'Confier sa gestion administrative' },
    ],
    cloture: 'Quinze secondes à l’entrée, zéro minute à la recherche.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'nommage des fichiers',
      variantes: ['convention de nommage fichiers', 'comment nommer ses documents', 'règle de nommage documents entreprise'],
      persona: 'Toute personne qui range des documents d’entreprise',
      objectif: 'Donner une convention courte, applicable le jour même',
      difference: 'Quatre éléments ordonnés avec exemples réels, et une règle de mise en place sans reprise du passé',
    },
  },

  {
    slug: 'duree-de-conservation-documents-entreprise',
    type: 'reference',
    dossier: DOSSIER,
    categorie: 'Repère',
    nom: 'Combien de temps conserver les documents',
    title: 'Durée de conservation des documents d’entreprise · BrittAssist',
    description:
      "Factures, contrats, bulletins de paie, documents fiscaux : les durées de conservation, et le passage de 6 à 10 ans pour les documents fiscaux.",
    h1: 'Combien de temps conserver les documents de l’entreprise.',
    lede:
      "Deux réflexes coexistent dans les entreprises : tout garder, par peur, ou tout jeter, par lassitude. Les deux coûtent. Les durées légales sont connues, et elles tiennent en un tableau.",
    reponseCourte: [
      "Les pièces comptables — livres, factures, bons de commande — se conservent 10 ans à partir de la clôture de l’exercice.",
      "Les contrats et la correspondance commerciale se conservent 5 ans ; les documents liés à un bien immobilier, 30 ans.",
      "Les documents fiscaux se conservaient 6 ans. Une loi du 25 juin 2026 porte ce délai à 10 ans pour les documents dont le délai de conservation expire après le 1er janvier 2027.",
      "L’employeur conserve le double des bulletins de paie 5 ans, et bien plus longtemps lorsqu’ils sont dématérialisés.",
    ],
    sections: [
      {
        h2: 'Les durées, par catégorie',
        blocs: [
          {
            tableau: {
              legende: 'Durées de conservation des principaux documents d’entreprise',
              colonnes: ['Document', 'Durée', 'Point de départ'],
              lignes: [
                ['Livres et registres comptables', '10 ans', 'Clôture de l’exercice'],
                ['Pièces justificatives : factures, bons de commande et de livraison', '10 ans', 'Clôture de l’exercice'],
                ['Contrats et correspondance commerciale', '5 ans', '—'],
                ['Documents bancaires : relevés, talons de chèques', '5 ans', '—'],
                ['Contrat conclu par voie électronique, à partir de 120 €', '10 ans', 'Livraison ou prestation'],
                ['Acquisition ou cession de biens immobiliers', '30 ans', '—'],
                ['Police d’assurance', '2 ans', 'Résiliation du contrat'],
                ['Comptes annuels', '10 ans', 'Clôture de l’exercice'],
                ['Statuts de la société', '5 ans', 'Perte de la personnalité morale'],
                ['Bulletin de paie, double papier', '5 ans', '—'],
                ['Registre unique du personnel', '5 ans', 'Départ du salarié'],
                ['Documents relatifs aux charges sociales', '3 ans', '—'],
              ],
            },
          },
          {
            paragraphes: [
              "Ce tableau reprend les principales lignes de la page officielle ; elle en compte davantage, et fait foi.",
            ],
          },
        ],
      },
      {
        h2: 'Le changement de 2026 sur les documents fiscaux',
        blocs: [
          {
            paragraphes: [
              "Jusqu’ici, les livres, registres et pièces sur lesquels l’administration peut exercer son droit de contrôle devaient être conservés 6 ans. L’article 36 de la loi n° 2026-534 du 25 juin 2026 relative à la lutte contre la fraude sociale et fiscale porte ce délai à 10 ans.",
              "La mesure s’applique aux documents dont le délai de conservation expire après le 1er janvier 2027. Ceux dont le délai s’achevait avant cette date restent soumis à l’ancienne règle. En pratique : ne détruisez plus de documents fiscaux sur la base des 6 ans sans avoir vérifié leur date.",
            ],
          },
        ],
      },
      {
        h2: 'Organiser la conservation',
        blocs: [
          {
            etapes: [
              "Classez par exercice : la durée court le plus souvent à partir de la clôture.",
              "Inscrivez sur chaque dossier d’archives l’année à partir de laquelle il pourra être détruit.",
              "Faites une revue annuelle, après la clôture : ce qui peut partir, ce qui doit rester.",
              "Détruisez de façon sûre ce qui contient des données personnelles ou confidentielles.",
            ],
          },
        ],
      },
      {
        h2: 'Durée légale et durée utile',
        blocs: [
          {
            paragraphes: [
              "La durée légale est un minimum. Certains documents méritent d’être gardés plus longtemps parce qu’ils servent encore : un contrat en cours, une garantie, un plan, un titre de propriété. À l’inverse, conserver des données personnelles au-delà de ce qui est nécessaire n’est pas neutre : le règlement sur la protection des données impose de limiter leur durée de conservation.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Compter la durée à partir de la date du document, quand elle court à partir de la clôture de l’exercice.",
      "Détruire des documents fiscaux de plus de 6 ans sans tenir compte de la nouvelle règle.",
      "Garder indéfiniment des dossiers de candidats ou d’anciens clients, « au cas où ».",
    ],
    limites: [
      "Les durées citées proviennent de la page officielle, vérifiée par l’administration le 1er juillet 2024, et de l’actualité publiée le 26 juin 2026. En cas de doute sur un document précis, interrogez votre expert-comptable.",
    ],
    faq: [
      {
        q: 'Peut-on conserver les documents sous forme numérique ?',
        a: "Beaucoup de documents peuvent être conservés sous forme électronique, à des conditions qui dépendent de leur nature. Pour les factures, ces conditions sont précises : faites-les valider par votre expert-comptable avant de détruire un original papier.",
      },
      {
        q: 'Que change concrètement le passage de 6 à 10 ans ?',
        a: "Les documents fiscaux dont le délai de conservation devait expirer après le 1er janvier 2027 doivent désormais être gardés 10 ans. Les pièces comptables étaient déjà soumises à un délai de 10 ans ; l’écart entre les deux régimes disparaît.",
      },
      {
        q: 'Qui tient le calendrier de destruction ?',
        a: "C’est une tâche d’archivage, qui se délègue : une étiquette par dossier, une revue par an. La décision de détruire, elle, se valide une fois par an avec vous.",
      },
    ],
    liens: [
      { href: '/guides/arborescence-dossiers-entreprise', label: 'Bâtir une arborescence de dossiers' },
      { href: '/guides/checklist-cloture-annuelle-administrative', label: 'Checklist de clôture annuelle' },
      { href: '/guides/pieces-pour-l-expert-comptable', label: 'Préparer les pièces pour l’expert-comptable' },
      { href: '/services/gestion-administrative', label: 'Confier sa gestion administrative' },
    ],
    sources: [SOURCE_CONSERVATION, SOURCE_CONSERVATION_FISCALE],
    cloture: 'Conserver, c’est savoir à l’avance quel jour on pourra jeter.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'référence',
      motCle: 'durée de conservation documents entreprise',
      variantes: ['combien de temps garder les factures', 'délai de conservation documents comptables', 'archivage documents entreprise durée'],
      persona: 'Dirigeant ou responsable administratif',
      objectif: 'Donner les durées officielles et intégrer le changement de juin 2026',
      difference: 'À jour de la loi du 25 juin 2026, avec une méthode d’étiquetage par année de destruction',
    },
  },

  {
    slug: 'echeancier-administratif-entreprise',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Construire son échéancier administratif',
    title: 'Échéancier administratif d’entreprise : la méthode · BrittAssist',
    description:
      "Contrats, assurances, déclarations, abonnements : comment recenser ses échéances et bâtir un échéancier qui prévient avant, pas le jour même.",
    h1: 'L’échéancier administratif : savoir trois mois avant, pas la veille.',
    lede:
      "Une échéance manquée est rarement un simple oubli. C’est une date qui n’était écrite nulle part ailleurs que dans le contrat. L’échéancier consiste à sortir ces dates des documents et à les mettre devant quelqu’un.",
    reponseCourte: [
      "Un échéancier recense tout ce qui revient à date fixe : contrats, assurances, déclarations, abonnements, attestations, contrôles.",
      "Pour chaque ligne, trois dates : l’échéance, la date limite pour agir, et la date d’alerte.",
      "C’est la date d’alerte qui compte : un préavis de trois mois se prépare quatre mois avant.",
      "Il se construit une fois, à partir des documents, puis se tient à jour à chaque nouveau contrat.",
    ],
    sections: [
      {
        h2: 'Ce qu’il faut recenser',
        blocs: [
          {
            tableau: {
              legende: 'Familles d’échéances à recenser',
              colonnes: ['Famille', 'Exemples', 'Où trouver la date'],
              lignes: [
                ['Contrats à reconduction', 'Bail, maintenance, téléphonie, leasing', 'Clause de durée et de préavis'],
                ['Assurances', 'Responsabilité civile, locaux, véhicules, décennale', 'Avis d’échéance, conditions particulières'],
                ['Obligations déclaratives', 'TVA, déclarations sociales, liasse fiscale', 'Calendrier fourni par l’expert-comptable'],
                ['Attestations à renouveler', 'Attestation de vigilance, attestation fiscale', 'Date de validité du document'],
                ['Abonnements', 'Logiciels, noms de domaine, licences', 'Compte client de chaque service'],
                ['Contrôles et vérifications', 'Extincteurs, installations, véhicules', 'Rapport précédent'],
                ['Vie de la société', 'Assemblée annuelle, dépôt des comptes', 'Statuts, expert-comptable'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les trois dates',
        blocs: [
          {
            paragraphes: [
              "Une ligne d’échéancier qui ne contient que l’échéance prévient trop tard. Il en faut trois.",
            ],
            liste: [
              "L’échéance : la date à laquelle le contrat se renouvelle ou la déclaration est due.",
              "La date limite d’action : le dernier jour pour résilier, renégocier ou déposer. C’est l’échéance moins le préavis.",
              "La date d’alerte : le jour où quelqu’un ouvre le dossier. C’est la date limite moins le temps nécessaire pour décider.",
            ],
          },
          {
            modele: {
              titre: 'Exemple',
              lignes: [
                "Contrat de maintenance — échéance : 31 décembre.",
                "Préavis de résiliation : trois mois — date limite d’action : 30 septembre.",
                "Temps pour comparer deux offres : un mois — date d’alerte : 1er septembre.",
              ],
            },
          },
        ],
      },
      {
        h2: 'Le construire',
        blocs: [
          {
            etapes: [
              "Rassemblez les contrats actifs : c’est l’occasion de vérifier qu’ils sont tous classés.",
              "Relevez, pour chacun, l’échéance, la durée de reconduction et le préavis.",
              "Ajoutez les obligations récurrentes : demandez leur calendrier à votre expert-comptable.",
              "Saisissez le tout dans un tableau, puis reportez les dates d’alerte dans un agenda partagé.",
              "Désignez la personne qui reçoit l’alerte et celle qui décide.",
            ],
          },
        ],
      },
      {
        h2: 'Le tenir',
        blocs: [
          {
            paragraphes: [
              "Un échéancier meurt le jour où un nouveau contrat est signé sans y être inscrit. La règle est simple : aucun contrat n’est classé tant que sa ligne n’est pas créée. Une revue trimestrielle suffit ensuite à corriger les dérives.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Inscrire l’échéance sans le préavis : l’alerte arrive quand il est trop tard pour résilier.",
      "Tenir l’échéancier dans un agenda personnel que personne d’autre ne voit.",
      "Oublier les abonnements payés par carte, qui se renouvellent sans courrier.",
    ],
    limites: [
      "Le calendrier de vos obligations fiscales et sociales dépend de votre régime : il se demande à votre expert-comptable, il ne se déduit pas d’une page générale.",
    ],
    faq: [
      {
        q: 'Tableau ou agenda ?',
        a: "Les deux. Le tableau est la référence : il contient toutes les informations du contrat. L’agenda porte les alertes. L’un sans l’autre ne suffit pas.",
      },
      {
        q: 'Combien de lignes compte un échéancier de petite entreprise ?',
        a: "Cela dépend de l’activité. Ce qui surprend toujours, c’est le nombre de contrats à reconduction tacite que l’on découvre en les recensant.",
      },
      {
        q: 'Qui doit recevoir les alertes ?',
        a: "La personne qui prépare le dossier, pas celle qui décide. Elle arrive devant le dirigeant avec les éléments : le contrat, le coût, les options.",
      },
    ],
    liens: [
      { href: '/guides/suivi-des-contrats-et-abonnements', label: 'Suivre ses contrats et abonnements' },
      { href: '/guides/dossier-permanent-entreprise', label: 'Constituer le dossier permanent' },
      { href: '/services/gestion-des-contrats', label: 'Faire préparer et suivre ses contrats' },
      { href: '/services/gestion-administrative', label: 'Confier sa gestion administrative' },
    ],
    cloture: 'Une échéance connue trois mois avant est une décision. La veille, c’est une urgence.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'échéancier administratif entreprise',
      variantes: ['calendrier des échéances entreprise', 'suivi des échéances administratives', 'tableau échéances contrats'],
      persona: 'Dirigeant qui découvre ses échéances au dernier moment',
      objectif: 'Faire construire un échéancier qui alerte à temps',
      difference: 'Trois dates par ligne — échéance, date limite, alerte — au lieu d’une seule',
    },
  },

  {
    slug: 'pieces-pour-l-expert-comptable',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Préparer les pièces pour l’expert-comptable',
    title: 'Préparer les pièces pour son expert-comptable · BrittAssist',
    description:
      "Factures, relevés, justificatifs, notes de frais : la liste mensuelle à transmettre au cabinet comptable, et le circuit qui évite les relances.",
    h1: 'Préparer les pièces pour l’expert-comptable, sans relance.',
    lede:
      "Votre expert-comptable ne vous relance pas par plaisir. Il le fait parce qu’il lui manque, chaque mois, les mêmes trois justificatifs. Le travail qui lui évite ces relances n’est pas comptable : c’est de la collecte et du classement.",
    reponseCourte: [
      "Chaque mois, le cabinet a besoin de quatre familles de pièces : les factures de vente, les factures d’achat, les relevés bancaires, les justificatifs des dépenses.",
      "Le circuit tient en trois gestes : collecter au fil de l’eau, rapprocher avec la banque, transmettre à date fixe.",
      "Préparer les pièces n’est pas tenir la comptabilité : la saisie, la TVA et les déclarations restent au cabinet.",
    ],
    sections: [
      {
        h2: 'La liste mensuelle',
        blocs: [
          {
            tableau: {
              legende: 'Pièces à transmettre chaque mois',
              colonnes: ['Famille', 'Ce qui est attendu', 'Ce qui manque le plus souvent'],
              lignes: [
                ['Ventes', 'Toutes les factures et avoirs émis, dans l’ordre de numérotation', 'L’avoir émis en marge'],
                ['Achats', 'Toutes les factures fournisseurs', 'Les factures reçues sur un espace client en ligne'],
                ['Banque', 'Relevés de tous les comptes, cartes comprises', 'Le relevé de la carte à débit différé'],
                ['Dépenses', 'Un justificatif par ligne de carte ou d’espèces', 'Tickets de restaurant, péages, abonnements'],
                ['Notes de frais', 'Le récapitulatif et ses justificatifs', 'Les frais kilométriques sans détail'],
                ['Divers', 'Emprunts, subventions, contrats nouveaux', 'Le tableau d’amortissement du nouveau prêt'],
              ],
            },
          },
          {
            paragraphes: [
              "Demandez à votre cabinet sa propre liste et son format : certains travaillent par dépôt sur une plateforme, d’autres par connexion bancaire automatique.",
            ],
          },
        ],
      },
      {
        h2: 'Le circuit',
        blocs: [
          {
            etapes: [
              "Collecter au fil de l’eau : chaque pièce rejoint un dossier du mois, dès qu’elle existe.",
              "Rapprocher : pour chaque ligne du relevé bancaire, une pièce. Les lignes sans pièce forment la liste de ce qu’il faut retrouver.",
              "Réclamer : les justificatifs manquants se demandent tout de suite, tant que la dépense est fraîche.",
              "Transmettre à date fixe, avec un mot sur ce qui sort de l’ordinaire.",
            ],
          },
        ],
      },
      {
        h2: 'Le mot d’accompagnement',
        blocs: [
          {
            modele: {
              titre: 'Message mensuel au cabinet',
              lignes: [
                "Objet : Pièces de [mois] — [société]",
                "Bonjour,",
                "Vous trouverez les pièces de [mois] dans le dossier habituel : [nombre] factures de vente (n° … à …), [nombre] factures d’achat, relevés des comptes [liste].",
                "À signaler : [nouveau contrat, emprunt, immobilisation, client douteux, dépense inhabituelle].",
                "Manquant, en cours de récupération : [liste].",
                "Bien cordialement,",
              ],
            },
          },
          {
            paragraphes: [
              "Ces trois lignes — ce qui est transmis, ce qui est inhabituel, ce qui manque — évitent bien des allers-retours.",
            ],
          },
        ],
      },
      {
        h2: 'Qui fait quoi',
        blocs: [
          {
            liste: [
              "Vous : payer avec les bons moyens, garder ou photographier le justificatif, signaler ce qui est inhabituel.",
              "L’assistance administrative : collecter, rapprocher, réclamer, transmettre, tenir le suivi.",
              "Le cabinet comptable : saisir, contrôler, déclarer, conseiller.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Attendre la clôture pour tout rassembler : les justificatifs de janvier sont introuvables en décembre.",
      "Mêler dépenses personnelles et professionnelles sur le même compte.",
      "Transmettre en vrac, sans dire ce qui manque.",
    ],
    limites: [
      "BrittAssist ne réalise ni tenue comptable, ni déclaration fiscale. La préparation des pièces s’arrête à la porte du cabinet.",
    ],
    faq: [
      {
        q: 'Mon cabinet récupère déjà mes relevés automatiquement. Que reste-t-il à faire ?',
        a: "Les justificatifs. La connexion bancaire donne les mouvements, pas les pièces qui les expliquent. C’est précisément ce que le cabinet réclame.",
      },
      {
        q: 'À quelle fréquence transmettre ?',
        a: "Chaque mois le plus souvent, à une date convenue avec le cabinet. Un rythme régulier vaut mieux qu’un gros envoi trimestriel.",
      },
      {
        q: 'Une assistante a-t-elle besoin d’accéder à mes comptes bancaires ?',
        a: "Un accès en consultation suffit pour le rapprochement, et il n’est pas toujours nécessaire : les relevés peuvent lui être transmis. Aucun pouvoir de paiement n’est requis pour préparer des pièces.",
      },
    ],
    liens: [
      { href: '/guides/notes-de-frais-justificatifs', label: 'Tenir ses notes de frais' },
      { href: '/guides/circuit-des-factures-fournisseurs', label: 'Le circuit des factures fournisseurs' },
      { href: '/guides/checklist-cloture-annuelle-administrative', label: 'Checklist de clôture annuelle' },
      { href: '/services/gestion-administrative', label: 'Confier sa gestion administrative' },
    ],
    cloture: 'Un comptable qui ne relance plus est un comptable à qui il ne manque rien.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'préparer les pièces pour l’expert-comptable',
      variantes: ['documents à fournir au comptable chaque mois', 'préparation comptable TPE', 'transmettre ses pièces comptables'],
      persona: 'Dirigeant relancé par son cabinet comptable',
      objectif: 'Donner la liste et le circuit qui suppriment les relances',
      difference: 'Montre ce qui manque le plus souvent dans chaque famille, et fournit le message d’accompagnement',
    },
  },

  {
    slug: 'notes-de-frais-justificatifs',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Tenir ses notes de frais',
    title: 'Notes de frais : un circuit simple pour ne rien perdre · BrittAssist',
    description:
      "Photographier, étiqueter, regrouper, transmettre : un circuit de notes de frais en quatre gestes, pour un dirigeant comme pour une petite équipe.",
    h1: 'Les notes de frais : quatre gestes, et plus un ticket perdu.',
    lede:
      "La note de frais est la plus petite tâche administrative, et celle qui se reporte le plus longtemps. Elle finit en enveloppe de tickets pâlis, vidée un soir de clôture. Le remède n’est pas un logiciel, c’est un geste fait au bon moment.",
    reponseCourte: [
      "Une dépense professionnelle doit être appuyée par un justificatif qui identifie le fournisseur, la date, le montant et la nature de la dépense.",
      "Le circuit tient en quatre gestes : photographier le justificatif sur place, noter le motif, regrouper par mois, transmettre.",
      "Le motif — avec qui, pour quoi — se note le jour même : trois semaines plus tard, plus personne ne s’en souvient.",
    ],
    sections: [
      {
        h2: 'Les quatre gestes',
        blocs: [
          {
            etapes: [
              "Photographier le justificatif au moment du paiement, avant de le plier.",
              "Noter le motif : le client rencontré, le projet, le trajet.",
              "Déposer la photo dans le dossier du mois, sous un nom lisible.",
              "En fin de mois, le récapitulatif se construit tout seul à partir du dossier.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que le justificatif doit permettre de savoir',
        blocs: [
          {
            liste: [
              "Qui a été payé : le nom du fournisseur.",
              "Quand : la date.",
              "Combien : le montant, et la TVA quand elle figure.",
              "Pour quoi : la nature de la dépense.",
              "Dans quel but professionnel : c’est le motif, que le ticket ne dit jamais.",
            ],
          },
          {
            paragraphes: [
              "Les règles de déduction, de plafonds et de récupération de la TVA dépendent de la nature du frais et de votre situation. Elles relèvent de votre expert-comptable : demandez-lui une fois sa liste, et appliquez-la.",
            ],
          },
        ],
      },
      {
        h2: 'Le récapitulatif mensuel',
        blocs: [
          {
            modele: {
              titre: 'Colonnes du récapitulatif',
              lignes: [
                "Date — Fournisseur — Nature (repas, transport, hébergement, fournitures…) — Motif — Montant TTC — TVA — Moyen de paiement — Justificatif joint (oui / non)",
              ],
            },
          },
          {
            paragraphes: [
              "La dernière colonne est la plus utile : elle fait apparaître d’un coup d’œil les dépenses sans pièce, pendant qu’il est encore possible de demander un duplicata.",
            ],
          },
        ],
      },
      {
        h2: 'Avec une équipe',
        blocs: [
          {
            liste: [
              "Une règle écrite, en une page : ce qui est remboursé, sur quelle base, dans quel délai.",
              "Un seul canal de dépôt des justificatifs.",
              "Une date limite mensuelle, et un remboursement à date fixe.",
              "Une personne qui vérifie, une autre qui valide.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Garder les tickets papier « pour plus tard » : l’encre thermique s’efface en quelques mois.",
      "Payer des frais professionnels avec une carte personnelle sans le signaler.",
      "Reconstituer les motifs de mémoire en fin d’année.",
    ],
    limites: [
      "Cette page décrit un circuit d’organisation. Le traitement fiscal et social des frais professionnels relève de votre expert-comptable.",
    ],
    faq: [
      {
        q: 'Une photo du ticket suffit-elle ?',
        a: "La conservation numérique des justificatifs est admise à des conditions précises. Avant de jeter les originaux, faites valider votre pratique par votre expert-comptable.",
      },
      {
        q: 'Faut-il une application dédiée ?',
        a: "Pas nécessairement. Un dossier partagé et un tableau suffisent à un dirigeant seul. Une application devient utile quand plusieurs personnes déposent des frais.",
      },
      {
        q: 'Peut-on déléguer ses notes de frais ?',
        a: "Oui : vous photographiez et notez le motif, le reste — classement, récapitulatif, relance des pièces manquantes, transmission — se fait sans vous.",
      },
    ],
    liens: [
      { href: '/guides/pieces-pour-l-expert-comptable', label: 'Préparer les pièces pour l’expert-comptable' },
      { href: '/guides/politique-voyage-petite-entreprise', label: 'Une politique voyage pour une petite entreprise' },
      { href: '/guides/regles-de-nommage-des-fichiers', label: 'Nommer ses fichiers' },
      { href: '/services/gestion-administrative', label: 'Confier sa gestion administrative' },
    ],
    cloture: 'Un ticket photographié le jour même est une note de frais déjà faite.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'gérer ses notes de frais',
      variantes: ['note de frais justificatif', 'organiser ses notes de frais', 'circuit note de frais TPE'],
      persona: 'Dirigeant ou indépendant qui accumule les tickets',
      objectif: 'Installer un geste simple qui supprime le rattrapage',
      difference: 'Met l’accent sur le motif à noter le jour même, que le justificatif ne porte jamais',
    },
  },

  {
    slug: 'suivi-des-contrats-et-abonnements',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Suivre ses contrats et abonnements',
    title: 'Suivre ses contrats et abonnements : le registre · BrittAssist',
    description:
      "Un registre de dix colonnes pour savoir ce que l’entreprise a signé, ce que cela coûte, et quand il est encore temps de résilier ou renégocier.",
    h1: 'Le registre des contrats : savoir ce que l’entreprise a signé.',
    lede:
      "Demandez à un dirigeant combien de contrats engagent son entreprise : il en cite une dizaine. Le relevé bancaire en révèle le double. Entre les deux se trouvent les abonnements oubliés, les reconductions tacites et les prestations que plus personne n’utilise.",
    reponseCourte: [
      "Un registre des contrats recense, pour chaque engagement : le cocontractant, l’objet, le coût, la date d’effet, l’échéance, le préavis et l’emplacement du document.",
      "Il se construit à partir de deux sources : les contrats classés, et les prélèvements du relevé bancaire.",
      "Il sert à trois choses : ne pas manquer un préavis, renégocier à temps, supprimer ce qui ne sert plus.",
    ],
    sections: [
      {
        h2: 'Le registre',
        blocs: [
          {
            modele: {
              titre: 'Les dix colonnes',
              lignes: [
                "1. Cocontractant — 2. Objet — 3. Référence du contrat — 4. Coût annuel",
                "5. Date d’effet — 6. Échéance — 7. Mode de reconduction (tacite ou non) — 8. Préavis",
                "9. Date limite de résiliation — 10. Emplacement du document signé",
                "En option : utilisateur interne, interlocuteur chez le fournisseur, dernière renégociation.",
              ],
            },
          },
        ],
      },
      {
        h2: 'Le construire en partant de la banque',
        blocs: [
          {
            etapes: [
              "Relevez, sur douze mois de relevés, tous les prélèvements et paiements récurrents.",
              "Pour chacun, retrouvez le contrat ou les conditions acceptées en ligne.",
              "Complétez le registre ; marquez d’un signe les lignes sans document.",
              "Demandez à chaque utilisateur interne si le service sert encore.",
              "Classez les contrats retrouvés à leur place, sous un nom conforme.",
            ],
          },
          {
            paragraphes: [
              "Partir de la banque plutôt que des dossiers est ce qui fait apparaître les contrats que personne ne se rappelle avoir signés.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que le registre permet',
        blocs: [
          {
            liste: [
              "Résilier dans les délais ce qui ne sert plus.",
              "Renégocier avant l’échéance, et non après la reconduction.",
              "Regrouper des contrats redondants : deux outils qui font la même chose, trois forfaits pour deux lignes.",
              "Répondre en deux minutes à la question de l’assureur, du banquier ou d’un repreneur.",
            ],
          },
        ],
      },
      {
        h2: 'La revue annuelle',
        blocs: [
          {
            paragraphes: [
              "Une fois par an, parcourez le registre ligne par ligne avec une seule question : le reprendrait-on aujourd’hui, à ce prix ? La revue prend une heure quand le registre existe. Elle ne se fait jamais quand il n’existe pas.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Ne recenser que les contrats signés sur papier, en oubliant ceux acceptés d’un clic.",
      "Confondre la date d’échéance et la date limite de résiliation.",
      "Laisser les abonnements sur la carte d’un collaborateur parti.",
    ],
    limites: [
      "L’interprétation d’une clause de résiliation ou de reconduction contestée relève d’un conseil juridique.",
    ],
    faq: [
      {
        q: 'Quelle différence avec l’échéancier ?',
        a: "Le registre décrit les contrats ; l’échéancier porte les dates et les alertes de tout ce qui revient, contrats compris. Le registre alimente l’échéancier.",
      },
      {
        q: 'Un tableur suffit-il ?',
        a: "Oui, pour une petite entreprise. L’outil compte moins que la règle : aucun contrat n’est classé sans sa ligne.",
      },
      {
        q: 'Qui peut tenir ce registre ?',
        a: "C’est un travail de suivi, qui se délègue entièrement. Les décisions — résilier, renégocier, renouveler — reviennent au dirigeant, sur un dossier préparé.",
      },
    ],
    liens: [
      { href: '/guides/echeancier-administratif-entreprise', label: 'Construire son échéancier administratif' },
      { href: '/services/gestion-des-contrats', label: 'Faire préparer et suivre ses contrats' },
      { href: '/services/suivi-prestataires', label: 'Faire suivre ses prestataires' },
      { href: '/guides/modele-fiche-prestataire', label: 'Modèle de fiche prestataire' },
    ],
    cloture: 'On ne renégocie pas un contrat dont on a oublié l’existence.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'suivi des contrats entreprise',
      variantes: ['registre des contrats', 'tableau de suivi des contrats fournisseurs', 'gérer ses abonnements entreprise'],
      persona: 'Dirigeant qui ne sait plus ce que son entreprise a signé',
      objectif: 'Faire construire un registre exhaustif et l’exploiter',
      difference: 'Part du relevé bancaire pour retrouver les contrats oubliés',
    },
  },

  {
    slug: 'traitement-du-courrier-entrant',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Traiter le courrier entrant',
    title: 'Courrier entrant : un circuit en quatre décisions · BrittAssist',
    description:
      "Papier, recommandés, espaces clients, boîtes génériques : un circuit pour que chaque courrier administratif soit ouvert, daté, attribué et suivi.",
    h1: 'Le courrier entrant : ouvert, daté, attribué, suivi.',
    lede:
      "Le courrier administratif a une particularité : il fait courir des délais. Une mise en demeure, un avis de contrôle, une notification de l’administration ne deviennent pas moins urgents parce qu’ils sont restés trois semaines dans une bannette.",
    reponseCourte: [
      "Tout courrier entrant passe par quatre décisions : à qui est-il destiné, quel délai fait-il courir, quelle action demande-t-il, où sera-t-il classé.",
      "Le courrier arrive aujourd’hui par quatre portes : la boîte aux lettres, les recommandés, les boîtes e-mail génériques et les espaces en ligne des administrations et fournisseurs.",
      "La date de réception se note toujours : c’est elle qui fait courir les délais.",
    ],
    sections: [
      {
        h2: 'Les quatre portes d’entrée',
        blocs: [
          {
            tableau: {
              legende: 'Canaux d’arrivée du courrier administratif',
              colonnes: ['Canal', 'Ce qui y arrive', 'Le risque'],
              lignes: [
                ['Boîte aux lettres', 'Courriers, avis, chèques', 'L’enveloppe non ouverte'],
                ['Recommandés', 'Mises en demeure, résiliations, notifications', 'L’avis de passage oublié'],
                ['Boîtes e-mail génériques', 'contact@, compta@, factures@', 'Personne ne se sent responsable'],
                ['Espaces en ligne', 'Impôts, Urssaf, banque, fournisseurs', 'Aucune alerte si personne ne se connecte'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Le circuit',
        blocs: [
          {
            etapes: [
              "Relever toutes les portes à rythme fixe : chaque jour pour le papier et les boîtes génériques, chaque semaine pour les espaces en ligne.",
              "Ouvrir, dater : inscrire la date de réception sur le document ou dans son nom de fichier.",
              "Qualifier : simple information, action à mener, délai à respecter, décision à prendre.",
              "Attribuer : une personne, une échéance.",
              "Numériser et classer, puis suivre jusqu’à la réponse.",
            ],
          },
        ],
      },
      {
        h2: 'Les courriers qui ne doivent jamais attendre',
        blocs: [
          {
            liste: [
              "Tout recommandé, quel qu’en soit l’expéditeur.",
              "Les courriers de l’administration fiscale et des organismes sociaux.",
              "Les courriers d’un avocat, d’un commissaire de justice ou d’un tribunal.",
              "Les avis d’échéance et les notifications de résiliation.",
              "Les réclamations de clients.",
            ],
          },
          {
            paragraphes: [
              "Ces courriers remontent au dirigeant le jour même, avec une phrase de résumé et la date limite repérée. Ce qu’il convient d’y répondre ne se délègue pas ; s’en apercevoir à temps, si.",
            ],
          },
        ],
      },
      {
        h2: 'Les espaces en ligne',
        blocs: [
          {
            paragraphes: [
              "De plus en plus de courriers n’arrivent plus : ils sont déposés dans un espace professionnel, avec au mieux un e-mail d’alerte. Recensez ces espaces, vérifiez à quelle adresse partent les alertes, et inscrivez leur consultation dans la routine hebdomadaire.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Laisser les alertes des espaces en ligne partir vers l’adresse d’un ancien collaborateur.",
      "Classer un courrier avant d’avoir traité ce qu’il demande.",
      "Ne pas aller chercher un recommandé « parce que ce sont sûrement de mauvaises nouvelles ».",
    ],
    limites: [
      "La réponse à un courrier juridique ou fiscal relève du dirigeant et de ses conseils. Le circuit décrit ici garantit seulement qu’il est vu à temps.",
    ],
    faq: [
      {
        q: 'Une assistante à distance peut-elle traiter le courrier papier ?',
        a: "Oui, s’il lui parvient : numérisation par une personne sur place, service de réexpédition ou de numérisation du courrier. Le tri, la qualification et le suivi se font ensuite à distance.",
      },
      {
        q: 'Faut-il garder les enveloppes ?',
        a: "Pour un recommandé ou un courrier dont la date d’envoi peut compter, oui : l’enveloppe porte le cachet. Agrafez-la au document ou numérisez-la avec lui.",
      },
      {
        q: 'Comment éviter que les boîtes génériques ne soient orphelines ?',
        a: "En leur donnant un responsable nommé, et un suppléant. Une boîte lue par tout le monde n’est traitée par personne.",
      },
    ],
    liens: [
      { href: '/guides/echeancier-administratif-entreprise', label: 'Construire son échéancier administratif' },
      { href: '/guides/organiser-sa-boite-mail-de-dirigeant', label: 'Organiser sa boîte mail de dirigeant' },
      { href: '/guides/regles-de-nommage-des-fichiers', label: 'Nommer ses fichiers' },
      { href: '/services/gestion-administrative', label: 'Confier sa gestion administrative' },
    ],
    cloture: 'Un courrier n’est pas traité quand il est lu. Il l’est quand quelqu’un en a la charge.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'traitement du courrier entrant entreprise',
      variantes: ['gestion du courrier administratif', 'circuit du courrier entreprise', 'traiter le courrier d’une petite entreprise'],
      persona: 'Dirigeant ou responsable administratif de petite structure',
      objectif: 'Installer un circuit qui garantit qu’aucun courrier à délai n’attend',
      difference: 'Traite les quatre portes d’entrée, dont les espaces en ligne que personne ne relève',
    },
  },

  {
    slug: 'dossier-permanent-entreprise',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Constituer le dossier permanent',
    title: 'Dossier permanent d’entreprise : les pièces à jour · BrittAssist',
    description:
      "Kbis, statuts, attestations, assurances, RIB : les documents qu’on vous demande dix fois par an, à tenir à jour dans un seul dossier.",
    h1: 'Le dossier permanent : les pièces qu’on vous demande dix fois par an.',
    lede:
      "Un client grand compte, une banque, un assureur, un appel d’offres : tous demandent les mêmes documents. Les retrouver et vérifier qu’ils sont à jour prend à chaque fois une demi-heure. Les tenir prêts en prend dix, une fois par trimestre.",
    reponseCourte: [
      "Le dossier permanent réunit les pièces d’identité de l’entreprise : extrait d’immatriculation, statuts, attestations sociales et fiscales, assurances, RIB, pièce d’identité du dirigeant.",
      "Chaque pièce porte sa date de validité ; les attestations se renouvellent à dates fixes.",
      "Tout donneur d’ordre doit obtenir une attestation de vigilance de son cocontractant pour un contrat d’au moins 5 000 € hors taxes, à la conclusion puis tous les six mois.",
    ],
    sections: [
      {
        h2: 'Le contenu',
        blocs: [
          {
            tableau: {
              legende: 'Pièces du dossier permanent',
              colonnes: ['Pièce', 'Où l’obtenir', 'À renouveler'],
              lignes: [
                ['Extrait d’immatriculation (Kbis ou équivalent)', 'Registre compétent, en ligne', 'À chaque demande : on exige souvent un extrait récent'],
                ['Statuts à jour', 'Dossier juridique', 'À chaque modification'],
                ['Attestation de vigilance', 'Espace en ligne de l’Urssaf', 'Tous les six mois'],
                ['Attestation de régularité fiscale', 'Espace professionnel des impôts', 'Selon la demande'],
                ['Attestations d’assurance', 'Assureur', 'Chaque année'],
                ['RIB', 'Banque', 'En cas de changement'],
                ['Pièce d’identité du dirigeant', '—', 'À expiration'],
                ['Qualifications et certifications', 'Organisme concerné', 'Selon leur durée de validité'],
              ],
            },
          },
        ],
      },
      {
        h2: 'L’attestation de vigilance',
        blocs: [
          {
            paragraphes: [
              "C’est la pièce la plus demandée. Elle certifie qu’une entreprise est à jour de ses déclarations et paiements auprès de l’Urssaf. Tout indépendant ou employeur doit la présenter à ses clients et donneurs d’ordre lors de la signature d’un contrat d’un montant au moins égal à 5 000 € hors taxes — montant global de la prestation, même payée en plusieurs fois — puis tous les six mois jusqu’à la fin du contrat.",
              "L’obligation joue dans les deux sens. Si vous faites appel à un sous-traitant, c’est à vous de la lui demander et d’en vérifier la validité. À défaut, vous pouvez être tenu solidairement de ses dettes sociales et fiscales s’il a eu recours au travail dissimulé.",
            ],
          },
        ],
      },
      {
        h2: 'Tenir le dossier à jour',
        blocs: [
          {
            etapes: [
              "Créez un dossier « Dossier permanent », avec un sous-dossier « Archives » pour les versions périmées.",
              "Nommez chaque pièce avec sa date d’émission.",
              "Inscrivez à l’échéancier le renouvellement des attestations.",
              "Tenez une courte liste de qui a reçu quoi, et quand : elle évite d’envoyer une pièce périmée.",
            ],
          },
        ],
      },
      {
        h2: 'Côté fournisseurs et sous-traitants',
        blocs: [
          {
            paragraphes: [
              "Le même dossier existe en miroir : pour chaque sous-traitant, ses attestations, son assurance, son extrait d’immatriculation. Un tableau des dates de validité, relu chaque mois, suffit à ne jamais travailler avec une attestation expirée.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Envoyer l’attestation de l’an dernier parce qu’elle était la première dans le dossier.",
      "Demander l’attestation de vigilance à la signature, puis ne plus jamais la redemander.",
      "Conserver les mots de passe des espaces en ligne dans la tête d’une seule personne.",
    ],
    limites: [
      "Les pièces exigées varient selon l’activité et le donneur d’ordre. Les règles sur l’attestation de vigilance sont celles publiées par l’Urssaf, consultées le 3 octobre 2026.",
    ],
    faq: [
      {
        q: 'Comment obtient-on une attestation de vigilance ?',
        a: "Depuis l’espace en ligne de l’entreprise sur le site de l’Urssaf. Elle comporte un code de sécurité qui permet à celui qui la reçoit d’en vérifier l’authenticité.",
      },
      {
        q: 'Quelqu’un d’autre que le dirigeant peut-il la télécharger ?',
        a: "Oui, avec un accès délégué à l’espace en ligne. C’est l’une des tâches qui se confient le plus naturellement : elle revient tous les six mois, à date fixe.",
      },
      {
        q: 'Faut-il un dossier par client ?',
        a: "Non : un seul dossier permanent, et une liste des envois. Ce sont les mêmes pièces pour tout le monde.",
      },
    ],
    liens: [
      { href: '/guides/appel-d-offres-dossier-de-candidature', label: 'Constituer un dossier d’appel d’offres' },
      { href: '/guides/echeancier-administratif-entreprise', label: 'Construire son échéancier administratif' },
      { href: '/assistante/artisans-btp', label: 'L’administratif d’une entreprise du bâtiment' },
      { href: '/services/gestion-administrative', label: 'Confier sa gestion administrative' },
    ],
    sources: [SOURCE_VIGILANCE, { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F31422', label: 'Service-Public Entreprendre — Comment obtenir une attestation de vigilance' }],
    cloture: 'La pièce qu’on vous demandera demain existe déjà. Il reste à savoir où.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'dossier permanent entreprise',
      variantes: ['attestation de vigilance', 'documents administratifs entreprise à jour', 'pièces justificatives entreprise'],
      persona: 'Dirigeant sollicité par des donneurs d’ordre, artisan du bâtiment',
      objectif: 'Faire constituer le dossier et tenir les attestations valides',
      difference: 'Associe à chaque pièce sa source et son rythme de renouvellement, et traite le miroir côté sous-traitants',
    },
  },

  {
    slug: 'rediger-une-procedure-interne',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Rédiger une procédure interne',
    title: 'Rédiger une procédure interne qui sera lue · BrittAssist',
    description:
      "Une page, un déclencheur, des étapes numérotées, un responsable : la trame d’une procédure que quelqu’un d’autre peut appliquer sans vous appeler.",
    h1: 'Écrire une procédure que quelqu’un appliquera vraiment.',
    lede:
      "Dans une petite entreprise, les procédures existent : elles sont dans la tête d’une personne. Elles deviennent un problème le jour où cette personne est absente, ou quand elle doit les expliquer pour la quatrième fois.",
    reponseCourte: [
      "Une procédure utile tient sur une page et répond à cinq questions : quand la déclencher, qui la mène, quelles étapes, quel résultat attendu, que faire en cas d’écart.",
      "Elle s’écrit en regardant faire, pas en imaginant comment il faudrait faire.",
      "Elle est testée par quelqu’un qui ne connaît pas la tâche : s’il doit poser une question, il manque une ligne.",
    ],
    sections: [
      {
        h2: 'La trame',
        blocs: [
          {
            modele: {
              titre: 'Trame de procédure — une page',
              lignes: [
                "Titre : un verbe et un objet (« Émettre une facture client »).",
                "Déclencheur : ce qui lance la procédure (« Dès qu’une prestation est terminée »).",
                "Responsable : la fonction qui la mène, et son suppléant.",
                "Étapes : numérotées, une action par ligne, avec l’outil et l’emplacement.",
                "Résultat attendu : ce qui prouve que c’est fait (« Facture envoyée, ligne créée au suivi »).",
                "Cas particuliers : les deux ou trois écarts fréquents, et quoi faire.",
                "Dernière mise à jour : date et auteur.",
              ],
            },
          },
        ],
      },
      {
        h2: 'L’écrire',
        blocs: [
          {
            etapes: [
              "Faites faire la tâche par la personne qui la connaît, et notez chaque geste.",
              "Supprimez ce qui va de soi ; gardez ce qui se trompe.",
              "Écrivez les étapes à l’infinitif, une action par ligne.",
              "Donnez la procédure à quelqu’un d’autre et regardez-le l’appliquer, sans intervenir.",
              "Corrigez chaque point où il a hésité.",
            ],
          },
        ],
      },
      {
        h2: 'Lesquelles écrire en premier',
        blocs: [
          {
            liste: [
              "Celles qui reposent sur une seule personne.",
              "Celles qui reviennent rarement, et qu’on réapprend à chaque fois : clôture annuelle, renouvellement d’une attestation.",
              "Celles où une erreur coûte : paiement fournisseur, changement de coordonnées bancaires.",
              "Celles que vous comptez déléguer.",
            ],
          },
        ],
      },
      {
        h2: 'Les garder vivantes',
        blocs: [
          {
            paragraphes: [
              "Une procédure fausse est pire qu’une absence de procédure. La règle : la personne qui l’applique la corrige dès qu’elle constate un écart, et date sa correction. Une revue annuelle suffit pour le reste. Quand une tâche est confiée à une assistante, c’est elle qui écrit la procédure à partir de vos explications ; vous la relisez.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Écrire dix pages pour une tâche de cinq minutes.",
      "Décrire le processus idéal au lieu du processus réel.",
      "Ranger les procédures là où personne ne les trouvera au moment d’en avoir besoin.",
    ],
    faq: [
      {
        q: 'Faut-il des captures d’écran ?',
        a: "Seulement là où l’écran prête à confusion. Elles vieillissent à chaque mise à jour du logiciel ; un texte précis tient plus longtemps.",
      },
      {
        q: 'Combien de procédures faut-il à une petite entreprise ?',
        a: "Une dizaine couvrent l’essentiel : facturer, relancer, payer un fournisseur, traiter le courrier, accueillir et faire partir un collaborateur, préparer la clôture.",
      },
      {
        q: 'Où les ranger ?',
        a: "Dans un dossier unique de l’espace partagé, avec un sommaire. Et un lien depuis l’endroit où la tâche se fait.",
      },
    ],
    liens: [
      { href: '/guides/modele-note-de-passation', label: 'Modèle de note de passation' },
      { href: '/guides/arborescence-dossiers-entreprise', label: 'Bâtir une arborescence de dossiers' },
      { href: '/guides/quelles-taches-deleguer-a-une-assistante', label: 'Quelles tâches déléguer' },
      { href: '/services/support-equipes', label: 'Un renfort ponctuel pour vos équipes' },
    ],
    cloture: 'Une procédure est bien écrite quand elle rend son auteur remplaçable.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'rédiger une procédure interne',
      variantes: ['modèle de procédure entreprise', 'écrire un mode opératoire', 'comment rédiger une procédure'],
      persona: 'Dirigeant dont le savoir-faire administratif repose sur une personne',
      objectif: 'Fournir une trame d’une page et une méthode de rédaction par observation',
      difference: 'Une page, testée par quelqu’un qui ne connaît pas la tâche',
    },
  },

  {
    slug: 'administratif-a-la-creation-d-entreprise',
    type: 'guide',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Poser l’administratif à la création',
    title: 'Création d’entreprise : poser l’administratif · BrittAssist',
    description:
      "Compte dédié, classement, facturation, échéancier : les dix réglages à faire dans le premier mois pour ne pas avoir à tout reprendre dans un an.",
    h1: 'Création d’entreprise : dix réglages administratifs à faire le premier mois.',
    lede:
      "Personne ne crée une entreprise pour faire de l’administratif. C’est pourtant pendant les premières semaines, quand il y a peu de volume, que les bonnes habitudes coûtent le moins cher à installer.",
    reponseCourte: [
      "Le premier mois, dix réglages suffisent : séparer les comptes, choisir un outil de facturation, créer le classement, nommer les fichiers, ouvrir les espaces en ligne, lister les échéances, fixer un circuit de pièces avec le cabinet comptable.",
      "Chacun prend moins d’une heure quand l’entreprise est vide ; le même travail prend des jours avec un an d’arriéré.",
      "Les formalités de création elles-mêmes relèvent du guichet unique et de vos conseils : cette page commence après l’immatriculation.",
    ],
    sections: [
      {
        h2: 'Les dix réglages',
        blocs: [
          {
            etapes: [
              "Un compte bancaire consacré à l’activité, et une carte qui ne sert qu’à elle.",
              "Un outil de facturation qui tient la numérotation et sait émettre au format électronique.",
              "Un modèle de devis et de facture complet, validé par votre expert-comptable.",
              "Un espace de stockage partagé, avec son arborescence.",
              "Une convention de nommage des fichiers.",
              "Une adresse e-mail professionnelle, et une adresse générique pour les factures.",
              "L’activation de vos espaces en ligne : impôts, Urssaf, banque, et la vérification de l’adresse des alertes.",
              "Un échéancier, même court : assurance, déclarations, abonnements.",
              "Un rendez-vous de cadrage avec l’expert-comptable : quelles pièces, à quelle date, sous quelle forme.",
              "Un dossier permanent : extrait d’immatriculation, statuts, RIB, attestations.",
            ],
          },
        ],
      },
      {
        h2: 'Les trois qui comptent le plus',
        blocs: [
          {
            h3: 'Séparer les comptes',
            paragraphes: [
              "Mélanger dépenses personnelles et professionnelles sur un même compte est la source du plus gros travail de rattrapage. Un compte et une carte consacrés à l’activité règlent la question dès le premier jour.",
            ],
          },
          {
            h3: 'Le cadrage avec le cabinet',
            paragraphes: [
              "Trente minutes pour demander : quelles pièces voulez-vous, quand, comment ? Cette conversation fixe votre routine mensuelle et évite un an de relances.",
            ],
          },
          {
            h3: 'Les espaces en ligne',
            paragraphes: [
              "L’administration écrit de plus en plus dans des espaces professionnels. Les activer et vérifier où partent les alertes évite de découvrir un courrier trois mois après son dépôt.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qui peut attendre',
        blocs: [
          {
            liste: [
              "Les procédures écrites : elles viendront avec le volume.",
              "Les outils sophistiqués : un tableur bien tenu vaut mieux qu’un logiciel mal paramétré.",
              "L’archivage : rien n’est encore ancien.",
            ],
          },
        ],
      },
      {
        h2: 'Seul ou accompagné',
        blocs: [
          {
            paragraphes: [
              "À la création, le volume ne justifie pas toujours une assistance mensuelle. Une mission ponctuelle de mise en place — classement, modèles, échéancier — peut suffire, quitte à passer plus tard à un accompagnement régulier quand l’activité le demande.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Facturer sur un modèle bricolé, puis devoir tout renuméroter.",
      "Remettre le classement « à quand il y aura du volume ».",
      "Laisser les alertes des espaces en ligne partir vers une adresse personnelle peu consultée.",
    ],
    limites: [
      "Cette page ne traite ni du choix du statut, ni des formalités d’immatriculation, ni des obligations fiscales et sociales : ce sont les sujets de vos conseils et des sites officiels.",
    ],
    faq: [
      {
        q: 'Faut-il un expert-comptable dès la création ?',
        a: "Ce n’est pas obligatoire pour toutes les formes d’entreprise, mais c’est avec lui que se règlent les modèles de facture, le régime de TVA et le calendrier des obligations. La question se pose à lui, ou à un organisme d’accompagnement à la création.",
      },
      {
        q: 'Quel est le premier réglage à faire ?',
        a: "Le compte bancaire consacré à l’activité. Tout le reste en dépend : le rapprochement, les justificatifs, la préparation des pièces.",
      },
      {
        q: 'Combien de temps tout cela prend-il ?',
        a: "Quelques heures réparties sur le premier mois, tant que l’entreprise est vide. C’est le moment où le rapport entre l’effort et le bénéfice est le meilleur.",
      },
    ],
    liens: [
      { href: '/guides/arborescence-dossiers-entreprise', label: 'Bâtir une arborescence de dossiers' },
      { href: '/guides/choisir-un-logiciel-de-facturation', label: 'Choisir un logiciel de facturation' },
      { href: '/guides/dossier-permanent-entreprise', label: 'Constituer le dossier permanent' },
      { href: '/assistante/consultants-independants', label: 'Assistance pour consultants indépendants' },
    ],
    cloture: 'Ce qui se règle en une heure aujourd’hui se rattrape en une semaine dans un an.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'informationnelle',
      motCle: 'organisation administrative création d’entreprise',
      variantes: ['administratif nouvelle entreprise', 'bien démarrer l’administratif de son entreprise', 'checklist administrative après création'],
      persona: 'Créateur d’entreprise après l’immatriculation',
      objectif: 'Donner les réglages à faire tant que le volume est faible',
      difference: 'Commence après les formalités de création, et dit aussi ce qui peut attendre',
    },
  },
];
