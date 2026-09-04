/**
 * Pages de zone — où le Private Office intervient, et ce que la géographie
 * change réellement.
 *
 * Attention : ce sont les pages les plus faciles à rater. Une série de pages
 * villes identiques au nom près est une ferme de pages satellites, pénalisée
 * comme telle. Chacune doit donc dire quelque chose de vrai et de spécifique
 * sur ce territoire : son tissu économique, les distances réelles, ce que le
 * présentiel change ou ne change pas, et les profils de dirigeants concernés.
 *
 * BrittAssist est basée à La Roche-sur-Yon (Vendée) et travaille à distance
 * partout en France. Aucune page ne doit laisser croire à une implantation
 * locale qui n'existe pas.
 */

export interface Zone {
  slug: string;
  /** Eyebrow : le territoire administratif */
  eyebrow: string;
  /** Nom court, pour le fil d'Ariane et les index */
  nom: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  /** Le tissu économique local et ce qu'il implique */
  contexte: { titre: string; paragraphes: string[] };
  /** Ce que la distance change concrètement */
  proximite: { titre: string; paragraphes: string[] };
  /** Profils de dirigeants typiques de ce territoire */
  profils: { nom: string; desc: string }[];
  exemple: { demande: string; prise: string; resultat: string };
  faq: { q: string; a: string }[];
  /** Renseigne areaServed dans le JSON-LD */
  schema: { type: 'City' | 'AdministrativeArea' | 'Country'; nom: string; region?: string };
  cloture: string;
}

export const zones: Zone[] = [
  {
    slug: 'la-roche-sur-yon',
    eyebrow: 'Vendée · 85',
    nom: 'La Roche-sur-Yon',
    title: 'Assistante indépendante à La Roche-sur-Yon (85) · BrittAssist',
    description:
      "Private Office externalisé basé à La Roche-sur-Yon : administratif, agenda, facturation et coordination pour dirigeants et TPE vendéennes.",
    h1: 'Une assistante indépendante basée à La Roche-sur-Yon.',
    lede:
      "C’est ici que BrittAssist travaille. Pas une adresse de domiciliation ni une page ajoutée pour le référencement : le bureau est yonnais, et une partie des dirigeants accompagnés le sont aussi.",
    contexte: {
      titre: 'Une préfecture de PME, où presque personne n’a d’assistante de direction.',
      paragraphes: [
        "La Roche-sur-Yon et sa couronne concentrent un tissu dense de très petites et moyennes entreprises : artisans du bâtiment, entreprises de services, commerces indépendants, cabinets libéraux, sociétés industrielles familiales. Des structures solides, souvent rentables, et presque toutes dépourvues de fonction support dédiée à la direction.",
        "Le schéma se répète d’une entreprise à l’autre. Le dirigeant produit, vend et encadre, puis traite l’administratif en fin de journée. Il y a parfois une comptable, rarement une assistante, et jamais quelqu’un dont le travail consiste à tenir les échéances, relancer les devis, préparer les dossiers et suivre les prestataires jusqu’au résultat.",
        "Ce n’est pas un problème de moyens : beaucoup de ces entreprises pourraient largement financer le poste. C’est un problème de volume, de recrutement dans un bassin d’emploi tendu, et d’encadrement — trois raisons pour lesquelles la décision est reportée d’année en année.",
      ],
    },
    proximite: {
      titre: 'Pouvoir se voir change le démarrage, pas le quotidien.',
      paragraphes: [
        "Être sur place permet ce qui compte le plus au début : un premier échange en face à face, une reprise de dossiers autour d’une table, la découverte physique d’un classement papier qui n’a jamais été numérisé. Sur les premières semaines, c’est un gain de temps réel.",
        "Ensuite, le quotidien redevient ce qu’il est partout : un canal unique, des demandes envoyées en une phrase, des sujets rendus fermés. Un dirigeant yonnais n’est pas mieux servi qu’un dirigeant de Bordeaux — il a simplement pu commencer plus vite, et il peut demander un point sur place quand un sujet le mérite.",
      ],
    },
    profils: [
      {
        nom: 'Artisans et entreprises du bâtiment',
        desc: 'Devis à envoyer, attestations à tenir à jour, situations de travaux à facturer, appels d’offres publics à monter.',
      },
      {
        nom: 'Dirigeants de PME industrielles et de services',
        desc: 'Agenda, comité de direction, reporting, déplacements et coordination interne, sans poste d’assistante à créer.',
      },
      {
        nom: 'Professions libérales et cabinets',
        desc: 'Agenda contraint par des créneaux extérieurs, conventions à suivre, honoraires à relancer.',
      },
      {
        nom: 'Indépendants et consultants',
        desc: 'Facturation, comptes rendus d’activité, notes de frais et déplacements, sur un temps qui est du temps facturable.',
      },
    ],
    exemple: {
      demande:
        '« Vingt ans de papiers dans quatre classeurs, et je ne retrouve jamais rien quand le comptable demande. »',
      prise:
        "Reprise sur place du contenu des classeurs, tri par nature et par exercice, numérisation de ce qui doit l’être, mise en place d’un classement unique et intelligible sans moi. Puis, chaque mois, transmission des pièces au cabinet comptable et relance de ce qui manque.",
      resultat:
        "Le classement a été repris en une journée sur place. Depuis, le comptable ne relance plus, et rien n’est cherché deux fois.",
    },
    faq: [
      {
        q: 'Pouvons-nous nous rencontrer avant de commencer ?',
        a: "Oui, et sur La Roche-sur-Yon c’est le plus simple. Le premier échange se fait volontiers en face à face, sans engagement : il sert à comprendre votre organisation actuelle et à dire honnêtement si un Private Office est la bonne réponse pour vous.",
      },
      {
        q: 'Venez-vous travailler dans mes locaux ?',
        a: "Le fonctionnement est à distance : c’est ce qui permet de traiter vos sujets au fil de la journée plutôt que sur une demi-journée de présence. Un déplacement ponctuel reste possible pour un démarrage, une reprise de dossiers ou un point important.",
      },
      {
        q: 'Intervenez-vous ailleurs qu’à La Roche-sur-Yon ?',
        a: "Oui, partout en France et à l’international à distance. La Vendée, Nantes et le littoral sont simplement les territoires où la rencontre physique est facile.",
      },
    ],
    schema: { type: 'City', nom: 'La Roche-sur-Yon', region: 'Pays de la Loire' },
    cloture: 'Le bureau est ici. Le reste se passe où vous êtes.',
  },

  {
    slug: 'nantes',
    eyebrow: 'Loire-Atlantique · 44',
    nom: 'Nantes',
    title: 'Assistante indépendante à Nantes (44) · BrittAssist',
    description:
      "Assistance de direction externalisée pour dirigeants nantais : agenda, déplacements, facturation, coordination. À distance, rendez-vous possibles.",
    h1: 'Un Private Office externalisé pour dirigeants nantais.',
    lede:
      "Nantes est à une heure de route. Assez près pour se rencontrer quand c’est utile, assez loin pour que personne ne perde une demi-journée à se déplacer sans raison.",
    contexte: {
      titre: 'Une économie de services, des agendas denses, des déplacements permanents.',
      paragraphes: [
        "La métropole nantaise concentre une forte densité d’activités de conseil, d’agences, de sociétés technologiques, de cabinets libéraux et d’acteurs de l’immobilier. Ce sont des métiers où le dirigeant vend son temps ou son jugement, où l’agenda est saturé de rendez-vous, et où l’administratif ne bénéficie jamais de la priorité — parce qu’il ne facture rien.",
        "S’y ajoute une réalité de déplacements : Nantes est reliée à Paris en un peu plus de deux heures de train, ce qui rend les allers-retours quotidiens possibles, donc fréquents. Un dirigeant nantais passe régulièrement sa semaine entre deux gares, et c’est précisément dans ces interstices que l’administratif s’accumule.",
        "Enfin, la métropole a un revers pour les petites structures : le recrutement d’une assistante y est plus concurrentiel et plus cher qu’ailleurs dans la région, et beaucoup de sociétés de dix à trente personnes renoncent au poste tout en ayant clairement le besoin.",
      ],
    },
    proximite: {
      titre: 'À une heure : suffisamment proche pour que la question ne se pose pas.',
      paragraphes: [
        "Le premier échange peut se tenir à Nantes, comme les points qui méritent vraiment une table plutôt qu’un appel — un démarrage, une reprise de dossiers, une revue de fin d’année. Pour tout le reste, se déplacer coûterait deux heures de route à quelqu’un pour faire un travail qui se fait mieux depuis un bureau.",
        "C’est aussi ce qui rend l’organisation des déplacements particulièrement utile ici. Réserver un train, arbitrer un horaire de retour, tenir compte du temps réel entre la gare et le rendez-vous : sur une semaine à trois allers-retours, c’est une heure de décisions qui n’a aucune raison de rester chez vous.",
      ],
    },
    profils: [
      {
        nom: 'Consultants et cabinets de conseil',
        desc: 'Facturation, comptes rendus d’activité, notes de frais et déplacements clients, sur du temps directement facturable.',
      },
      {
        nom: 'Agences et sociétés de services',
        desc: 'Contrats et devis à suivre, relances d’impayés, coordination entre clients, freelances et prestataires.',
      },
      {
        nom: 'Dirigeants de PME de la métropole',
        desc: 'Assistance de direction sans créer le poste : agenda, réunions, reporting, interface avec les partenaires.',
      },
      {
        nom: 'Professionnels de l’immobilier',
        desc: 'Suivi des dossiers entre compromis et acte, relance des notaires et des courtiers, coordination des visites.',
      },
    ],
    exemple: {
      demande:
        '« Trois allers-retours à Paris cette semaine, et je n’ai encore rien réservé. »',
      prise:
        "Horaires choisis sur le temps réel de porte à porte depuis chaque rendez-vous, billets pris sur des tarifs échangeables au vu du risque de décalage, hôtel réservé pour la nuit du mardi à proximité du rendez-vous du mercredi matin, transferts calés, et itinéraire complet envoyé la veille de chaque départ.",
      resultat:
        "Trois déplacements organisés en une demande, un retour du jeudi avancé d’un train, et une soirée récupérée.",
    },
    faq: [
      {
        q: 'Êtes-vous basée à Nantes ?',
        a: "Non, le bureau est à La Roche-sur-Yon, à environ une heure. C’est une distance qui permet de se voir quand c’est utile sans facturer du déplacement inutile. Je préfère le dire clairement plutôt que d’afficher une adresse nantaise qui n’existerait que sur une page.",
      },
      {
        q: 'Peut-on se rencontrer sur Nantes ?',
        a: "Oui. Le premier échange, un démarrage ou un point important peuvent se tenir sur place. Le quotidien, lui, se traite à distance : c’est ce qui permet de vous répondre dans la journée plutôt que le jour de la visite.",
      },
      {
        q: 'Travaillez-vous avec des structures nantaises de plusieurs salariés ?',
        a: "Oui. C’est même une configuration fréquente : une équipe de dix à trente personnes, une comptable ou un office manager en interne, et un dirigeant sans aucun support pour sa propre organisation. Le partage des rôles se cale au démarrage pour qu’aucun sujet ne tombe entre les deux.",
      },
    ],
    schema: { type: 'City', nom: 'Nantes', region: 'Pays de la Loire' },
    cloture: 'À une heure de vous, disponible toute la journée.',
  },

  {
    slug: 'les-sables-d-olonne',
    eyebrow: 'Vendée · Littoral',
    nom: 'Les Sables-d’Olonne',
    title: 'Assistante indépendante aux Sables-d’Olonne · BrittAssist',
    description:
      "Assistance administrative pour dirigeants du littoral vendéen : saison courte, hôtellerie-restauration, nautisme, immobilier et locations.",
    h1: 'Une assistance qui tient pendant la saison.',
    lede:
      "Sur le littoral, une année ne se déroule pas en douze mois réguliers. Elle se joue sur quatre, pendant lesquels personne n’a le temps de faire autre chose que produire.",
    contexte: {
      titre: 'Quatre mois où tout arrive, huit mois où tout se rattrape.',
      paragraphes: [
        "L’économie des Sables-d’Olonne et de sa côte est saisonnière par construction : hôtellerie et restauration, commerces de bord de mer, nautisme et services portuaires, immobilier et locations, activités touristiques. Le chiffre d’affaires se concentre sur une période courte, et avec lui toute la charge d’exploitation.",
        "L’administratif, lui, ne se met pas en pause. Les factures fournisseurs arrivent, les contrats saisonniers doivent être établis dans les délais, les échéances tombent, les impayés vieillissent. Simplement, entre juin et septembre, plus personne ne les traite — et le rattrapage d’automne coûte beaucoup plus cher que le suivi au fil de l’eau n’aurait coûté.",
        "Le second effet est financier : dans une activité saisonnière, la trésorerie de l’hiver dépend entièrement de ce qui a été correctement facturé et encaissé pendant l’été. Une facturation en retard de trois semaines en août est un problème de trésorerie en janvier.",
      ],
    },
    proximite: {
      titre: 'Un renfort disponible exactement quand vous ne l’êtes plus.',
      paragraphes: [
        "L’intérêt d’une assistance externalisée sur un territoire saisonnier tient à un point : elle ne demande rien pendant que vous êtes débordé. Pas de brief long, pas d’encadrement, pas de formation à assurer en pleine saison. Vous envoyez une phrase, le sujet revient fermé.",
        "Les Sables sont à une quarantaine de minutes de La Roche-sur-Yon. Le cadrage se fait volontiers sur place, idéalement avant la saison — en mars ou en avril, c’est-à-dire au seul moment de l’année où un dirigeant du littoral a le temps de s’organiser pour les mois qui suivent.",
      ],
    },
    profils: [
      {
        nom: 'Hôtellerie, restauration et hébergement',
        desc: 'Contrats saisonniers, fournisseurs, réservations de groupes, échéances et facturation pendant la haute saison.',
      },
      {
        nom: 'Nautisme et services portuaires',
        desc: 'Devis, commandes de pièces, coordination des interventions, suivi des chantiers et des contrats d’entretien.',
      },
      {
        nom: 'Immobilier et location saisonnière',
        desc: 'Dossiers de vente, relance des notaires, coordination des prestataires, suivi des interventions entre deux locations.',
      },
      {
        nom: 'Commerces et activités de saison',
        desc: 'Facturation, relances, suivi des fournisseurs et préparation des périodes de pic.',
      },
    ],
    exemple: {
      demande:
        '« On est le 20 août, je n’ai pas facturé depuis trois semaines et je ne sais plus qui a payé. »',
      prise:
        "Reprise de l’ensemble des prestations non facturées depuis le début du mois, factures émises et envoyées sous deux jours, rapprochement avec les encaissements reçus, identification des impayés et de leur ancienneté, relances lancées par ordre de priorité. Et, pour la suite de la saison, une émission des factures à date fixe chaque semaine.",
      resultat:
        "Trois semaines de trésorerie récupérées en pleine saison, et plus une seule prestation oubliée jusqu’en octobre.",
    },
    faq: [
      {
        q: 'Peut-on ne travailler ensemble que sur la saison ?',
        a: "C’est possible sous forme de mission ponctuelle, calée à l’avance. Mais l’expérience va plutôt dans l’autre sens : ce qui rend une saison tenable, c’est ce qui a été mis en place en mars. Un accompagnement continu, même léger hors saison, coûte souvent moins cher qu’un renfort d’urgence en août.",
      },
      {
        q: 'Gérez-vous les réservations de clients et les plannings d’hébergement ?',
        a: "La gestion opérationnelle des réservations d’un établissement — son planning, son canal de réservation, sa relation client au quotidien — relève d’un métier différent. En revanche, tout ce qui l’entoure entre dans le périmètre : fournisseurs, contrats, facturation, échéances, prestataires, organisation du dirigeant.",
      },
      {
        q: 'Vous déplacez-vous aux Sables ?',
        a: "Pour un premier échange ou un cadrage d’avant-saison, volontiers : le trajet depuis La Roche-sur-Yon prend une quarantaine de minutes. Le quotidien se traite à distance, ce qui est justement la seule manière d’être disponible un 14 août.",
      },
    ],
    schema: { type: 'City', nom: 'Les Sables-d’Olonne', region: 'Pays de la Loire' },
    cloture: 'La saison ne devrait pas se payer en janvier.',
  },

  {
    slug: 'vendee',
    eyebrow: 'Pays de la Loire',
    nom: 'Vendée',
    title: 'Assistante administrative indépendante en Vendée (85) · BrittAssist',
    description:
      "Private Office externalisé pour dirigeants, artisans et PME familiales de Vendée : administratif, agenda, facturation et coordination.",
    h1: 'Un Private Office externalisé, au service des entreprises vendéennes.',
    lede:
      "La Vendée entreprend beaucoup et délègue peu. C’est une force, et c’est exactement ce qui finit par plafonner les dirigeants qui y réussissent.",
    contexte: {
      titre: 'Un département d’entreprises familiales, et une culture du « je le fais moi-même ».',
      paragraphes: [
        "Le tissu économique vendéen est particulier : une densité d’entreprises rare pour un département de cette taille, une forte proportion de sociétés familiales et indépendantes, des filières industrielles solides — agroalimentaire, plasturgie, ameublement, nautisme, bâtiment — et une base d’artisans considérable. Beaucoup de ces entreprises ont été construites par des dirigeants qui ont tout appris en faisant.",
        "C’est ce qui explique une réticence très locale à déléguer l’administratif. Non par manque de moyens, mais parce que le faire soi-même a longtemps été la méthode qui marchait. Elle marche encore — jusqu’au moment où le dirigeant devient le goulet d’étranglement de sa propre entreprise, généralement autour de dix à vingt salariés.",
        "S’y ajoute un facteur géographique. Une grande partie des donneurs d’ordre, des partenaires et des clients se trouvent à Nantes, à Paris ou à l’export. Les déplacements sont donc nombreux, souvent longs, et ils s’ajoutent à des journées déjà pleines.",
      ],
    },
    proximite: {
      titre: 'Un territoire connu, pas seulement desservi.',
      paragraphes: [
        "Travailler depuis la Vendée pour des entreprises vendéennes change quelques détails qui comptent : les distances réelles entre Fontenay, Challans, Les Herbiers et la côte, les périodes où le littoral se bloque, les habitudes de rendez-vous, le calendrier de saison. Ce sont de petites choses, mais elles évitent les arbitrages absurdes qu’un prestataire lointain ne peut pas anticiper.",
        "Pour autant, l’essentiel du travail se fait à distance, et c’est ce qui le rend utile : vous n’attendez pas une demi-journée de présence hebdomadaire pour qu’un sujet avance. Une rencontre sur place reste possible partout dans le département, pour un démarrage ou un point de fond.",
      ],
    },
    profils: [
      {
        nom: 'Entreprises familiales et industrielles',
        desc: 'Un dirigeant qui porte tout, pas d’assistante de direction, et un besoin réel de deux à trois jours par semaine.',
      },
      {
        nom: 'Artisans et entreprises du bâtiment',
        desc: 'Devis, attestations, situations de travaux, marchés publics et coordination de chantier.',
      },
      {
        nom: 'Indépendants et cabinets libéraux',
        desc: 'Facturation, agenda contraint, relances d’honoraires, échéances et démarches.',
      },
      {
        nom: 'Activités du littoral et du tourisme',
        desc: 'Saison courte, charge concentrée, et un administratif qui attend systématiquement l’automne.',
      },
    ],
    exemple: {
      demande:
        '« Je pars deux jours à Lyon voir un client, et je perds la journée à tout organiser. »',
      prise:
        "Trajet arbitré sur le temps réel de porte à porte depuis la Vendée — comparaison du train au départ de Nantes, du vol depuis Nantes et de la voiture, en tenant compte de l’heure du rendez-vous. Hôtel réservé à proximité, transferts calés, retour positionné pour ne pas perdre la matinée du lendemain, et itinéraire complet envoyé la veille.",
      resultat:
        "Un déplacement organisé en une demande, et un retour arrivé assez tôt pour que le jeudi reste une journée de travail.",
    },
    faq: [
      {
        q: 'Intervenez-vous dans tout le département ?',
        a: "Oui, sans distinction : La Roche-sur-Yon, Les Sables-d’Olonne, Challans, Les Herbiers, Fontenay-le-Comte, Montaigu, Luçon et le reste. Le travail est à distance, la rencontre est possible partout dans le département.",
      },
      {
        q: 'Faut-il être en Vendée pour travailler avec vous ?',
        a: "Non. Le Private Office fonctionne partout en France et à l’international à distance. La Vendée est simplement le territoire où le lien de proximité est le plus naturel — et où une partie des dirigeants accompagnés se trouve.",
      },
      {
        q: 'Quelle taille d’entreprise est concernée ?',
        a: "En pratique, de l’indépendant seul à la société d’une cinquantaine de salariés. Le critère n’est pas l’effectif mais la configuration : un dirigeant qui porte encore lui-même l’organisation, sans fonction support dédiée à sa direction.",
      },
      {
        q: 'Est-ce plus cher qu’une assistante à temps partagé en local ?',
        a: "Ce n’est pas la même chose. Un temps partagé achète des demi-journées de présence ; un Private Office achète une prise en charge continue, disponible tous les jours ouvrés, sans encadrement à assurer. Selon votre besoin réel, l’un ou l’autre est plus pertinent — et si c’est l’autre, je le dis.",
      },
    ],
    schema: { type: 'AdministrativeArea', nom: 'Vendée', region: 'Pays de la Loire' },
    cloture: 'Entreprendre seul est une qualité. Tout porter seul n’en est pas une.',
  },

  {
    slug: 'a-distance',
    eyebrow: 'France & international',
    nom: 'À distance, partout en France',
    title: 'Assistante indépendante à distance, partout en France · BrittAssist',
    description:
      "Comment fonctionne un Private Office à distance : canal unique, accès limités, confidentialité contractuelle, boucle fermée. Partout en France.",
    h1: 'À distance, partout en France — et pourquoi cela ne change rien.',
    lede:
      "La question revient à chaque premier échange : « est-ce que ça marche vraiment, sans être sur place ? » Elle est légitime. Voici comment cela fonctionne réellement, et ce que la distance change — ou non.",
    contexte: {
      titre: 'Ce qui bloque n’est presque jamais la distance.',
      paragraphes: [
        "Les trois réserves exprimées sont toujours les mêmes : la confiance — confier des accès et des sujets sensibles à quelqu’un que l’on ne voit pas ; la réactivité — la crainte d’attendre une réponse ; et la connaissance du contexte — l’idée qu’il faudrait être dans l’entreprise pour comprendre comment elle fonctionne.",
        "Les deux premières se règlent par le cadre. La confiance repose sur un engagement de confidentialité contractuel, des accès limités au strict nécessaire et révocables à tout moment, et le fait de n’avoir qu’un seul interlocuteur — jamais un pool de personnes qui change. La réactivité repose sur un canal unique et un fonctionnement en boucle fermée : un sujet confié revient avec un statut, il ne reste pas ouvert.",
        "La troisième se règle par le temps, et c’est la seule qui demande de la patience. Le premier mois est le plus exigeant : il faut expliquer, corriger, préciser. À partir du deuxième, il n’y a plus grand-chose à réexpliquer — et c’est exactement ce qui distingue un interlocuteur unique d’une plateforme où la personne change à chaque demande.",
      ],
    },
    proximite: {
      titre: 'Ce que le présentiel apporte vraiment, et ce qu’il coûte.',
      paragraphes: [
        "Une présence physique est utile trois fois : au démarrage, pour reprendre une organisation existante ; sur du papier, quand vingt ans d’archives n’ont jamais été numérisés ; et sur des points de fond, une ou deux fois par an. Le reste du temps, elle coûte plus qu’elle n’apporte — parce qu’une demi-journée de présence hebdomadaire signifie que vos sujets attendent le jour de la visite.",
        "À distance, ils n’attendent pas. Une demande envoyée le mardi à sept heures est traitée dans la journée, qu’elle vienne de Vendée, de Paris, de Marseille ou d’un déplacement à l’étranger. C’est ce décalage-là, entre disponibilité continue et présence intermittente, qui fait la différence dans la pratique.",
      ],
    },
    profils: [
      {
        nom: 'Dirigeants souvent en déplacement',
        desc: 'Un interlocuteur joignable où que vous soyez, sur le canal que vous utilisez déjà — WhatsApp le plus souvent.',
      },
      {
        nom: 'Structures sans bureau fixe',
        desc: 'Équipes distribuées, activité full remote, dirigeants entre deux sites : la distance est déjà le mode de fonctionnement normal.',
      },
      {
        nom: 'Entreprises à l’international',
        desc: 'Échanges écrits et téléphoniques en anglais, coordination avec des interlocuteurs étrangers, gestion des fuseaux horaires.',
      },
      {
        nom: 'Dirigeants hors des grandes métropoles',
        desc: 'Là où le recrutement d’une assistante expérimentée est difficile, la distance supprime purement et simplement la contrainte.',
      },
    ],
    exemple: {
      demande:
        '« Je suis en déplacement toute la semaine, mon vol de retour vient d’être annulé et j’ai un rendez-vous demain matin. »',
      prise:
        "Alternatives recherchées immédiatement, nouveau vol réservé avec une correspondance tenable, hôtel de la nuit prolongé, transferts ajustés dans les deux sens, et rendez-vous du lendemain décalé de deux heures après accord de l’interlocuteur, prévenu directement.",
      resultat:
        "Un message reçu vingt minutes après le vôtre : la nouvelle version, pas la liste des options. Vous n’avez rien eu à arbitrer depuis un aéroport.",
    },
    faq: [
      {
        q: 'Quels accès dois-je donner ?',
        a: "Uniquement ce que le périmètre convenu exige, et rien de plus : le plus souvent un accès à l’agenda concerné, à l’outil de facturation, et une adresse dédiée. Les accès sont définis au démarrage, limités, tracés et révocables à tout moment. Aucun accès n’est demandé « au cas où ».",
      },
      {
        q: 'Quel est le délai de réponse ?',
        a: "Les demandes sont traitées dans la journée ouvrée, et l’accusé de prise en charge est immédiat sur le canal convenu. Ce qui compte n’est pas la réponse instantanée mais la certitude qu’un sujet envoyé est pris : c’est ce qui permet de l’oublier.",
      },
      {
        q: 'Comment se passe le premier mois à distance ?',
        a: "Il est plus dense que les suivants. On cale le canal, les accès, les préférences et les priorités, et il y a plus de questions qu’ensuite. À partir du deuxième mois, le nombre d’allers-retours chute nettement — c’est le signe que le contexte est acquis.",
      },
      {
        q: 'Travaillez-vous avec des clients hors de France ?',
        a: "Oui, à distance, en français et en anglais. Les fuseaux horaires font partie des sujets pris en charge, pas des contraintes que vous avez à gérer.",
      },
    ],
    schema: { type: 'Country', nom: 'France' },
    cloture: 'Disponible tous les jours, plutôt que présente une demi-journée.',
  },
];

export const zoneParSlug = (slug: string) => zones.find((z) => z.slug === slug);
