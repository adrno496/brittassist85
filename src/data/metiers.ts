/**
 * Pages « pour qui » — une par typologie de dirigeant.
 *
 * Elles visent les recherches où le métier précède le besoin
 * (« assistante pour artisan du bâtiment », « assistante de direction pour PME »,
 * « assistante pour consultant indépendant »). Une page de prestation répond à
 * « quoi » ; celles-ci répondent à « pour qui », avec le vocabulaire, les
 * échéances et les frictions réelles de chaque métier.
 *
 * Chaque page doit être vérifiable dans son secteur : les termes employés
 * (attestation de vigilance, retenue de garantie, CRA, DPC…) sont ceux du
 * métier. Une page générique déguisée en page sectorielle ne sert personne.
 */

export interface Metier {
  slug: string;
  /** Eyebrow : la famille de métiers */
  secteur: string;
  /** Nom court, utilisé dans les index et le fil d'Ariane */
  nom: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  /** Le quotidien du métier, tel qu'il est réellement vécu */
  constat: { titre: string; paragraphes: string[] };
  /** Ce qui revient toutes les semaines dans ce métier — phrases courtes */
  frictions: string[];
  /** Ce qui est réellement pris en charge, avec le vocabulaire du secteur */
  absorbe: string[];
  /** Ce qui reste chez le dirigeant ou relève d'un autre professionnel */
  reste: string[];
  exemple: { demande: string; prise: string; resultat: string };
  faq: { q: string; a: string }[];
  /** Slugs de prestations les plus utilisées par ce métier */
  liens: string[];
  cloture: string;
}

export const metiers: Metier[] = [
  {
    slug: 'artisans-btp',
    secteur: 'Bâtiment & artisanat',
    nom: 'Artisans et entreprises du bâtiment',
    title: 'Assistante administrative pour artisan du bâtiment · BrittAssist',
    description:
      "Devis, factures de situation, attestations, appels d’offres et relances : déléguer l’administratif d’une entreprise du bâtiment. Dès 700 € / mois.",
    h1: 'L’administratif d’une entreprise du bâtiment, pris en charge.',
    lede:
      "Vous êtes sur chantier de sept heures à dix-huit heures. L’administratif attend le soir, et le devis promis lundi part le vendredi suivant — quand il part.",
    constat: {
      titre: 'Le devis qui traîne coûte plus cher que le chantier raté.',
      paragraphes: [
        "Dans le bâtiment, le délai de réponse fait la moitié de la décision. Un particulier qui demande trois devis retient rarement le troisième arrivé. Un donneur d’ordre qui attend une attestation de vigilance pour clôturer un dossier finit par relancer quelqu’un d’autre. Ce n’est pas une question de compétence technique : c’est une question de disponibilité au bureau, exactement la ressource dont un patron d’entreprise du bâtiment dispose le moins.",
        "S’ajoute une couche qui n’existe presque nulle part ailleurs : la conformité permanente. Décennale à jour, attestation URSSAF de moins de six mois, pièces du dossier de sous-traitance, PPSPS, DOE en fin de chantier. Chaque pièce est simple à obtenir. Les tenir toutes valides en même temps, sur plusieurs chantiers et plusieurs clients, est un travail de suivi à part entière.",
        "Et pendant ce temps, les factures de situation ne partent pas, la retenue de garantie n’est réclamée par personne, et la trésorerie encaisse le décalage.",
      ],
    },
    frictions: [
      'Un devis promis lundi, envoyé le vendredi.',
      'Une attestation de vigilance périmée le jour du dépôt.',
      'Une situation de travaux facturée avec trois semaines de retard.',
      'Une retenue de garantie que personne n’a réclamée.',
      'Un fournisseur qui n’a jamais renvoyé son prix.',
    ],
    absorbe: [
      'Mise en forme et envoi des devis à partir de vos métrés et de vos prix',
      'Relance systématique des devis restés sans réponse',
      'Émission des factures de situation selon l’avancement convenu',
      'Suivi des encaissements, des acomptes et des retenues de garantie',
      'Constitution et mise à jour du dossier administratif : décennale, RC pro, attestation de vigilance, Kbis, qualifications',
      'Montage des dossiers de candidature pour les marchés et les appels d’offres',
      'Demandes de prix aux fournisseurs et comparaison des offres reçues',
      'Coordination des rendez-vous de chantier, des livraisons et des sous-traitants',
      'Suivi des levées de réserves après réception',
      'Préparation et transmission des pièces à votre comptable',
    ],
    reste: [
      'Les prix, les métrés et les choix techniques',
      'La conduite de chantier et les décisions de sécurité',
      'La signature des marchés et des sous-traitances',
      'Les déclarations sociales et fiscales, qui relèvent de votre cabinet comptable',
    ],
    exemple: {
      demande:
        '« Il me faut le dossier pour l’appel d’offres de la mairie pour vendredi, et je crois que la vigilance URSSAF est périmée. »',
      prise:
        "Attestation de vigilance renouvelée le jour même auprès de l’URSSAF, décennale et RC pro vérifiées à la date de remise, Kbis de moins de trois mois obtenu, pièces administratives du dossier constituées et assemblées dans l’ordre demandé par le règlement de consultation, avec la liste des éléments techniques restant à votre main.",
      resultat:
        "Le dossier était complet le mercredi. Il ne restait que le mémoire technique et les prix — la seule partie que vous étiez le seul à pouvoir écrire.",
    },
    faq: [
      {
        q: 'Travaillez-vous dans mon logiciel de devis et de facturation ?',
        a: "Oui. Batigest, EBP, Obat, Tolteck, Axonaut ou un simple tableur : je reprends l’outil que vous utilisez déjà, avec un accès limité à ce qui est nécessaire. Changer de logiciel pendant une saison chargée est rarement une bonne idée, et ce n’est jamais un préalable.",
      },
      {
        q: 'Est-ce que vous chiffrez les devis ?',
        a: "Non. Les métrés, les prix et les choix techniques restent chez vous — c’est votre métier et votre responsabilité. Je mets en forme, je complète les mentions obligatoires, j’envoie, je relance et je suis la réponse. Le temps que vous économisez est celui de la mise au propre et du suivi, pas celui du chiffrage.",
      },
      {
        q: 'Pouvez-vous répondre au téléphone à la place de mon standard ?',
        a: "La permanence téléphonique en continu n’est pas le service : je ne suis pas un centre d’appels. En revanche, les appels sortants — relancer un fournisseur, obtenir une date d’intervention, confirmer une livraison, rappeler un client sur un devis — font partie du périmètre, et ce sont souvent ceux que personne n’a le temps de passer.",
      },
      {
        q: 'Mon activité est très saisonnière. Est-ce adapté ?',
        a: "Le forfait mensuel absorbe les variations : une semaine calme et une semaine à trois dossiers de candidature se compensent sur le mois. C’est précisément l’intérêt d’un forfait plutôt que d’un volume d’heures à consommer avant le 30.",
      },
    ],
    liens: ['facturation', 'gestion-administrative', 'suivi-prestataires', 'gestion-des-contrats'],
    cloture: 'Vos devis partent le jour où vous les avez chiffrés.',
  },

  {
    slug: 'dirigeants-pme',
    secteur: 'PME & ETI',
    nom: 'Dirigeants de PME',
    title: 'Assistante de direction externalisée pour PME · BrittAssist',
    description:
      "Agenda, comité de direction, reporting, déplacements, coordination : une assistante de direction externalisée, sans créer le poste. Dès 700 € / mois.",
    h1: 'Une assistante de direction, sans créer le poste.',
    lede:
      "Entre dix et cinquante salariés, il existe une zone inconfortable : le dirigeant a clairement besoin d’une assistante de direction, et n’a clairement pas de quoi en occuper une à plein temps.",
    constat: {
      titre: 'Le travail existe. Il est juste réparti sur les mauvaises personnes.',
      paragraphes: [
        "Faute de poste dédié, la charge se disperse. Le responsable administratif prépare le comité de direction en plus de sa paie. Le commercial monte les dossiers d’appel d’offres au lieu de vendre. La comptable relance les impayés parce qu’elle est la seule à voir les encours. Et tout ce qui ne trouve personne remonte au dirigeant, généralement après dix-neuf heures.",
        "Le calcul du recrutement, lui, ne tombe jamais juste. Une assistante de direction expérimentée représente un coût employeur de l’ordre de quarante à soixante mille euros par an, auquel s’ajoutent le recrutement, les trois à six mois de montée en compétence, le poste de travail et — le plus cher — votre temps d’encadrement. Pour un besoin réel de deux à trois jours par semaine, la décision reste bloquée pendant des années.",
        "Un Private Office externalisé résout le problème par l’autre bout : la fonction existe, le poste non. Vous avez un interlocuteur unique qui connaît votre entreprise, sans lien de subordination à gérer ni charge fixe à porter.",
      ],
    },
    frictions: [
      'Un comité de direction préparé la veille au soir.',
      'Trois relances d’impayés que personne n’a envoyées.',
      'Un déplacement à réserver entre deux réunions.',
      'Un reporting reconstruit à la main chaque mois.',
      'Une échéance contractuelle découverte trop tard.',
    ],
    absorbe: [
      'Tenue de votre agenda et arbitrage des créneaux selon vos priorités',
      'Préparation des réunions de direction : ordre du jour, documents, relevé de décisions',
      'Suivi des décisions prises et relance des responsables jusqu’à exécution',
      'Reporting mensuel consolidé : facturation émise, encaissée, en attente, échéances à venir',
      'Organisation complète des déplacements et des rendez-vous extérieurs',
      'Interface avec vos partenaires : banque, cabinet comptable, avocat, assureur, prestataires',
      'Suivi des échéances contractuelles, des renouvellements et des préavis',
      'Renfort ponctuel de vos équipes sur un dossier ou pendant une absence',
      'Préparation des dossiers de candidature et des réponses aux appels d’offres',
    ],
    reste: [
      'Le management, les entretiens et les décisions RH',
      'La paie et les déclarations sociales, qui relèvent de votre cabinet',
      'Les arbitrages de priorité entre projets',
      'Tout ce qui engage l’entreprise et sa stratégie',
    ],
    exemple: {
      demande:
        '« Le CODIR est jeudi, je n’ai rien de préparé, et il faut que je sois à Lyon mercredi. »',
      prise:
        "Ordre du jour reconstruit à partir des décisions du comité précédent et de leur état d’avancement, éléments demandés aux quatre responsables et relancés, dossier consolidé envoyé le mardi soir. En parallèle : train Lyon réservé sur un horaire compatible avec le retour, hôtel à proximité du rendez-vous, et deux points internes déplacés pour libérer le mercredi.",
      resultat:
        "Le comité a démarré sur un document complet, et les deux sujets non traités depuis un mois y sont revenus avec leur historique.",
    },
    faq: [
      {
        q: 'Est-ce moins cher qu’un recrutement ?',
        a: "Pour un besoin non constant, presque toujours. Un forfait mensuel n’a ni charges patronales, ni congés payés, ni période d’essai, ni matériel, ni coût de recrutement, ni temps d’encadrement. Si votre besoin devient un vrai temps plein régulier, un recrutement redevient pertinent — et je vous le dis quand j’observe que c’est le cas.",
      },
      {
        q: 'Mes équipes peuvent-elles vous solliciter directement ?',
        a: "Oui, sur les sujets que vous avez ouverts et dans le périmètre défini au démarrage. C’est même l’intérêt principal : cela supprime le goulet d’étranglement que vous êtes devenu. Vous restez informé, sans être le point de passage obligatoire.",
      },
      {
        q: 'Et si nous avons déjà une assistante en interne ?',
        a: "Cela fonctionne très bien, et c’est fréquent. Elle garde l’interne — l’accueil, la vie du site, les équipes. Je prends la direction : votre agenda, vos déplacements, la coordination externe, le reporting. Le partage se cale au démarrage pour qu’aucun sujet ne tombe entre les deux.",
      },
      {
        q: 'La confidentialité est-elle contractuelle ?',
        a: "Oui, et elle est large : elle couvre les données de l’entreprise comme les sujets personnels, sans distinction, et reste en vigueur cinq ans après la fin de la collaboration.",
      },
    ],
    liens: ['gestion-agenda', 'reporting', 'coordination', 'support-equipes'],
    cloture: 'La fonction, sans le poste.',
  },

  {
    slug: 'consultants-independants',
    secteur: 'Conseil & freelance',
    nom: 'Consultants indépendants',
    title: 'Assistante pour consultant indépendant et freelance · BrittAssist',
    description:
      "Facturation, CRA, notes de frais, déplacements et propales : déléguer son administratif quand chaque heure non facturable coûte une journée de mission.",
    h1: 'Chaque heure d’administratif vous coûte le prix d’une heure de mission.',
    lede:
      "Un consultant à sept cents euros par jour qui passe six heures par semaine sur son administratif s’ampute d’environ un jour facturable par semaine. Le calcul est brutal, et il est rarement fait.",
    constat: {
      titre: 'Le temps non facturable ne se voit pas dans le chiffre d’affaires. Il se voit dans son plafond.',
      paragraphes: [
        "Un indépendant en conseil vend du temps disponible. Tout ce qui n’est pas de la mission — la facturation, le compte rendu d’activité à envoyer au client ou à la société de portage, les notes de frais, les réservations de train, la proposition commerciale à mettre en forme, la relance de l’appel d’offres — vient directement en déduction de ce qu’il peut vendre.",
        "Le piège est que ce temps est fractionné. Vingt minutes ici, quarante là, jamais assez pour paraître un problème, et suffisamment pour transformer un vendredi en journée blanche. C’est ce qui explique qu’un consultant très bien payé ait souvent le sentiment de ne jamais avoir de marge.",
        "Il y a un second effet, plus coûteux encore : le développement commercial passe toujours après l’administratif du client en cours. La prospection s’arrête pendant les missions longues, et le trou apparaît trois mois après leur fin.",
      ],
    },
    frictions: [
      'Un CRA envoyé avec dix jours de retard.',
      'Une facture émise le 12 au lieu du 1er.',
      'Des notes de frais reconstituées à partir de photos de tickets.',
      'Une propale prête, mais jamais mise au propre.',
      'Une relance de prospect oubliée depuis six semaines.',
    ],
    absorbe: [
      'Émission des factures à date, selon le rythme et les conditions de chaque client',
      'Comptes rendus d’activité préparés et transmis aux clients ou à la société de portage',
      'Suivi des encaissements et relance graduée des impayés',
      'Notes de frais rassemblées au fil de l’eau, avec les justificatifs',
      'Organisation des déplacements clients : trains, hôtels, transferts, itinéraires',
      'Mise en forme des propositions commerciales à partir de vos éléments',
      'Suivi des propales envoyées et relance de celles restées sans réponse',
      'Veille et montage des dossiers de candidature sur les plateformes de missions',
      'Préparation des éléments pour votre comptable et suivi des échéances',
      'Tenue de votre agenda et protection des plages de production',
    ],
    reste: [
      'Le contenu des missions et des livrables',
      'Les prix, le TJM et les conditions commerciales',
      'La relation client et la négociation',
      'Les déclarations fiscales et sociales',
    ],
    exemple: {
      demande:
        '« Fin de mois : trois CRA à envoyer, deux factures, et il faut que je réponde à l’appel d’offres avant mardi. »',
      prise:
        "Comptes rendus d’activité reconstitués à partir de votre agenda, soumis à votre validation puis envoyés aux trois clients. Factures émises le jour ouvré prévu par chaque contrat, avec les mentions et les références de commande exigées. Dossier de candidature assemblé : pièces administratives à jour, références mises en forme, planning de réponse envoyé le vendredi pour qu’il ne reste que la partie méthodologique.",
      resultat:
        "Le mois s’est clôturé le 2 au lieu du 12. La réponse est partie avec deux jours d’avance, sur le seul temps de rédaction utile.",
    },
    faq: [
      {
        q: 'Je suis seul. Un forfait mensuel est-il justifié ?',
        a: "Posez-le en jours de mission. À sept cents euros par jour, un forfait de sept cents euros correspond à une journée facturable ; il n’a besoin de vous en libérer qu’un peu plus d’une pour être neutre. La question n’est donc pas le coût mensuel, mais le nombre d’heures que vous passez réellement hors mission — et c’est un chiffre qu’il vaut la peine de mesurer une semaine.",
      },
      {
        q: 'Travaillez-vous avec les sociétés de portage salarial ?',
        a: "Oui. Les comptes rendus d’activité, les notes de frais et les justificatifs suivent le format et les délais imposés par votre société de portage. Le contrat de portage lui-même et la relation salariale restent entre elle et vous.",
      },
      {
        q: 'Pouvez-vous prospecter à ma place ?',
        a: "Je ne vends pas vos missions : la relation commerciale reste la vôtre, et elle est votre principal actif. En revanche, tout ce qui l’entoure entre dans le périmètre — mise en forme des propositions, suivi et relance de celles qui sont sans réponse, veille sur les appels d’offres, préparation des dossiers de candidature, tenue de votre fichier de contacts.",
      },
      {
        q: 'Mon activité s’arrête l’été. Puis-je suspendre ?',
        a: "Le rythme se cale au démarrage et se révise. Sur une activité franchement saisonnière, il vaut souvent mieux un forfait ajusté qu’un engagement à volume constant qui ne correspondrait à la réalité d’aucun des deux côtés.",
      },
    ],
    liens: ['facturation', 'organisation-deplacements', 'gestion-administrative', 'reporting'],
    cloture: 'Votre journée facturable n’a pas à financer votre administratif.',
  },

  {
    slug: 'professions-liberales',
    secteur: 'Professions libérales',
    nom: 'Professions libérales',
    title: 'Assistante pour profession libérale et cabinet · BrittAssist',
    description:
      "Agenda contraint, conventions, honoraires à relancer, échéances ordinales : une assistance administrative confidentielle pour cabinets libéraux.",
    h1: 'Une assistance confidentielle pour une profession qui l’exige.',
    lede:
      "Un cabinet libéral produit deux choses en parallèle : de la matière intellectuelle, et une quantité d’administratif qui ne peut être confiée à n’importe qui.",
    constat: {
      titre: 'La contrainte n’est pas le volume. C’est la confiance.',
      paragraphes: [
        "Un avocat, un architecte, un expert ou un conseil travaille en permanence sur des informations sensibles : identités, montants, litiges, projets non rendus publics. Déléguer suppose donc autre chose qu’une compétence administrative — cela suppose un cadre. C’est la raison pour laquelle beaucoup de professionnels libéraux continuent d’assurer eux-mêmes un travail de secrétariat qu’ils facturent, en temps, plusieurs centaines d’euros de l’heure.",
        "S’y ajoute une structure d’agenda que peu de métiers connaissent : des créneaux imposés de l’extérieur — audiences, réunions de chantier, expertises, commissions — autour desquels tout le reste doit s’organiser, et qui se déplacent sans prévenir.",
        "Et il y a le sujet dont personne n’aime parler : les honoraires impayés. Relancer un client avec qui l’on entretient une relation de confiance intuitu personae est inconfortable. Une relance qui part d’une administration, à date, sur un ton neutre, ne pose pas le même problème — et c’est souvent la seule qui parte.",
      ],
    },
    frictions: [
      'Une audience déplacée qui fait tomber trois rendez-vous.',
      'Une convention d’honoraires jamais renvoyée signée.',
      'Des honoraires impayés depuis quatre mois, jamais relancés.',
      'Une formation obligatoire à valider avant le 31 décembre.',
      'Des pièces réclamées trois fois au même interlocuteur.',
    ],
    absorbe: [
      'Tenue de l’agenda autour des créneaux imposés : audiences, expertises, réunions, commissions',
      'Reprogrammation complète de la semaine quand une date extérieure se déplace',
      'Préparation, envoi et suivi de signature des conventions et lettres de mission',
      'Émission des notes d’honoraires et suivi des encaissements',
      'Relance des honoraires impayés, à l’écrit puis par téléphone',
      'Collecte et relance des pièces auprès des clients et des tiers',
      'Classement et archivage des dossiers selon votre logique de cabinet',
      'Suivi des échéances : assurances, cotisations ordinales, obligations de formation',
      'Organisation des déplacements et des rendez-vous extérieurs',
      'Interface avec vos confrères, vos prestataires et vos fournisseurs',
    ],
    reste: [
      'Le fond des dossiers, l’analyse et le conseil',
      'La stratégie, la plaidoirie et les actes',
      'Les honoraires et leurs conditions',
      'Tout ce qui relève du secret professionnel dans son exercice',
    ],
    exemple: {
      demande:
        '« L’audience du 14 est renvoyée, et il y a trois notes d’honoraires que je n’ai jamais relancées. »',
      prise:
        "Semaine du 14 reconstruite : deux rendez-vous replacés, un déplacement annulé sans frais, et la nouvelle date positionnée avec la marge de préparation nécessaire. En parallèle, revue des honoraires en attente, ancienneté de chacun établie, relances envoyées par ordre de priorité et sur un ton neutre, avec un point d’étape à quinze jours.",
      resultat:
        "Deux des trois notes ont été réglées dans le mois. La troisième est revenue avec une contestation identifiée, que vous avez traitée en connaissance de cause.",
    },
    faq: [
      {
        q: 'Comment la confidentialité est-elle garantie ?',
        a: "Par un engagement contractuel de confidentialité, signé avant tout accès, qui ne distingue pas les données professionnelles des données personnelles et reste en vigueur cinq ans après la fin de la collaboration. Les accès sont limités au strict périmètre convenu et révocables à tout moment. Cet engagement ne se substitue pas au secret professionnel qui vous lie : il l’encadre du côté du prestataire.",
      },
      {
        q: 'Touchez-vous au fond des dossiers ?',
        a: "Jamais. Je n’émets aucune analyse, aucun conseil et aucun acte. Mon périmètre est l’organisation, le suivi et l’administration du cabinet — ce qui gravite autour du dossier, jamais son contenu.",
      },
      {
        q: 'Assurez-vous l’accueil téléphonique des clients ?',
        a: "Non, et c’est une distinction importante : la permanence téléphonique en continu relève d’un télésecrétariat, un métier différent. Les appels sortants, eux, font partie du périmètre — relances, prises de rendez-vous, coordination avec les greffes, les experts, les confrères et les prestataires.",
      },
      {
        q: 'Je travaille en cabinet à plusieurs associés. Est-ce adapté ?',
        a: "Oui, à condition de définir au démarrage qui peut solliciter quoi. Le plus souvent, un associé porte la relation et le périmètre couvre les sujets communs du cabinet, chaque associé conservant ses dossiers propres.",
      },
    ],
    liens: ['gestion-agenda', 'gestion-des-contrats', 'facturation', 'gestion-administrative'],
    cloture: 'Votre temps vaut trop cher pour être passé à relancer des pièces.',
  },

  {
    slug: 'agents-immobiliers',
    secteur: 'Immobilier',
    nom: 'Agents immobiliers et mandataires',
    title: 'Assistante pour agent immobilier et mandataire · BrittAssist',
    description:
      "Dossiers de vente, relance des notaires et des courtiers, diagnostics, annonces : le suivi de vos dossiers pendant que vous êtes en visite.",
    h1: 'Le suivi de vos dossiers pendant que vous êtes en visite.',
    lede:
      "Entre le compromis et l’acte, il y a trois mois pendant lesquels un dossier n’avance que si quelqu’un le pousse. Ce quelqu’un, c’est vous — entre deux visites.",
    constat: {
      titre: 'Vous êtes payé sur des actes signés, et vos journées passent en relances.',
      paragraphes: [
        "Un agent immobilier gagne sa vie sur deux moments : rentrer un mandat, et faire signer. Entre les deux s’étale une longue chaîne administrative — diagnostics à commander, pièces à réunir, dossier à transmettre au notaire, conditions suspensives à suivre, courtier à relancer, acquéreur à rassurer — qui ne rapporte rien et qui, si personne ne la tient, fait perdre des ventes.",
        "Le problème est structurel : vos heures productives sont exactement celles où les autres sont joignables. Vous êtes en visite quand le notaire décroche, en rendez-vous d’estimation quand le diagnostiqueur rappelle, et vous traitez le tout à vingt heures, quand plus personne ne répond.",
        "Le résultat est toujours le même : des dossiers qui prennent trois semaines de plus que nécessaire, et des acquéreurs qui perdent confiance parce que personne ne leur a donné de nouvelles.",
      ],
    },
    frictions: [
      'Un notaire injoignable depuis trois semaines.',
      'Un diagnostic commandé trop tard pour la date de compromis.',
      'Un acquéreur sans nouvelles qui commence à douter.',
      'Une offre de prêt dont personne ne connaît l’avancement.',
      'Un mandat qui arrive à échéance sans avoir été renouvelé.',
    ],
    absorbe: [
      'Constitution du dossier de vente : pièces du vendeur, diagnostics, documents de copropriété',
      'Commande et suivi des diagnostics jusqu’à réception',
      'Transmission du dossier au notaire et relance jusqu’à la date d’acte',
      'Suivi des conditions suspensives : dépôt du dossier de prêt, offre, délais de rétractation',
      'Point d’avancement régulier envoyé au vendeur et à l’acquéreur',
      'Coordination des visites et de l’agenda entre plusieurs interlocuteurs',
      'Mise en ligne et actualisation des annonces sur vos portails',
      'Suivi des mandats : dates d’échéance, renouvellements, exclusivités',
      'Relance des acquéreurs passés en visite et des estimations sans suite',
      'Suivi de vos honoraires et des états de commission',
    ],
    reste: [
      'La négociation, l’estimation et le conseil au client',
      'Les visites et la relation de confiance',
      'La rédaction des actes, qui relève du notaire',
      'Les décisions commerciales et le montant des honoraires',
    ],
    exemple: {
      demande:
        '« Où en sont mes quatre compromis ? Je n’ai plus le temps d’appeler les notaires. »',
      prise:
        "Reprise des quatre dossiers, appel à chaque étude, état réel obtenu pour chacun : deux en attente de pièces d’urbanisme, un bloqué sur une offre de prêt jamais transmise par le courtier, un prêt à signer. Pièces manquantes réclamées aux bons interlocuteurs, courtier relancé, et acquéreurs informés de l’avancement dans la journée.",
      resultat:
        "Une synthèse en quatre lignes, une date d’acte confirmée, et un blocage identifié quinze jours avant qu’il ne devienne un report.",
    },
    faq: [
      {
        q: 'Je suis mandataire indépendant sous réseau. Est-ce compatible ?',
        a: "Oui. Le back-office d’un réseau couvre le cadre juridique et les outils ; il ne relance ni votre notaire, ni votre courtier, ni vos acquéreurs. C’est exactement l’espace que je prends, en travaillant dans les outils de votre réseau et sans interférer avec vos obligations contractuelles envers lui.",
      },
      {
        q: 'Pouvez-vous faire les visites ou prendre des mandats ?',
        a: "Non. La transaction, l’entremise et la négociation sont réservées aux titulaires de la carte professionnelle ou à leurs habilités. Mon périmètre est strictement administratif et organisationnel : je prépare, je coordonne, je suis et je relance.",
      },
      {
        q: 'Travaillez-vous le samedi ?',
        a: "Le rythme habituel est du lundi au vendredi. Les demandes reçues le week-end sont traitées à la reprise, et un besoin ponctuel sur une période tendue — une signature, un dossier à boucler — s’organise à l’avance. Une disponibilité élargie de façon régulière relève d’un Private Office sur mesure.",
      },
      {
        q: 'Comment suivez-vous mes dossiers sans accès à mon logiciel ?',
        a: "Le plus souvent avec un accès limité à votre outil métier. À défaut, un suivi partagé unique est mis en place au démarrage : l’essentiel est qu’il n’existe qu’un seul endroit où l’état réel de chaque dossier est à jour.",
      },
    ],
    liens: ['suivi-prestataires', 'coordination', 'gestion-agenda', 'gestion-administrative'],
    cloture: 'Aucun dossier ne dort parce que personne n’a rappelé.',
  },

  {
    slug: 'e-commerce',
    secteur: 'Commerce & marques',
    nom: 'E-commerçants et marques',
    title: 'Assistante pour e-commerçant et marque en ligne · BrittAssist',
    description:
      "Service client, litiges transporteurs, fournisseurs, retours et pics saisonniers : déléguer l’exploitation d’une boutique en ligne. Anglais inclus.",
    h1: 'L’exploitation quotidienne d’une boutique, prise en charge.',
    lede:
      "Une marque en ligne ne meurt pas d’un mauvais produit. Elle s’épuise sur trois cents micro-sujets par mois : un colis perdu, un fournisseur muet, un retour à rembourser, un avis à traiter.",
    constat: {
      titre: 'Le fondateur devient le service après-vente de sa propre marque.',
      paragraphes: [
        "Dans les premières années, tout remonte au fondateur : la réclamation client, le litige transporteur, la relance du fournisseur, la commande de réassort, le suivi du prestataire logistique. Chacun de ces sujets se règle en quelques minutes, mais ils arrivent en continu et ils sont interruptifs par nature — le client attend une réponse, pas un délai.",
        "Le coût réel n’est pas le temps passé : c’est ce qui ne se fait pas. Les décisions qui font grandir une marque — un produit, une gamme, un canal, un partenariat — demandent des blocs de concentration que trois cents interruptions par mois rendent impossibles.",
        "S’ajoute une contrainte propre au secteur : une grande partie des fournisseurs et des plateformes travaille en anglais, et les échanges avec un fournisseur asiatique ou un support de marketplace se font sur un fuseau qui n’est pas le vôtre.",
      ],
    },
    frictions: [
      'Un colis livré nulle part et un client qui attend.',
      'Un litige transporteur ouvert depuis six semaines.',
      'Un fournisseur qui n’a pas répondu depuis dix jours.',
      'Un retour reçu, jamais remboursé.',
      'Un réassort lancé trop tard pour la haute saison.',
    ],
    absorbe: [
      'Traitement des demandes clients à l’écrit, sur vos modèles de réponse',
      'Suivi des commandes anormales : retards, colis perdus, adresses erronées',
      'Ouverture et suivi des litiges transporteurs jusqu’à indemnisation',
      'Gestion des retours, des échanges et des remboursements',
      'Relation fournisseurs, en français comme en anglais, jusqu’à obtention d’une réponse',
      'Suivi des commandes de réassort et des délais de production',
      'Coordination avec le prestataire logistique et suivi des anomalies de stock',
      'Suivi administratif des comptes marketplace et des réclamations de plateforme',
      'Préparation des périodes de pic : Black Friday, Noël, opérations commerciales',
      'Facturation, suivi des encaissements et préparation des éléments comptables',
    ],
    reste: [
      'Le produit, les prix et le positionnement de la marque',
      'La création et le contenu éditorial',
      'L’acquisition payante et le pilotage des campagnes',
      'Le développement technique de la boutique',
    ],
    exemple: {
      demande:
        '« Trente-quatre réclamations en attente, un fournisseur muet depuis dix jours, et Black Friday dans trois semaines. »',
      prise:
        "Réclamations traitées par ordre d’ancienneté sur vos modèles, quatre litiges transporteurs ouverts avec les preuves de livraison, sept remboursements exécutés. Fournisseur relancé par écrit puis par téléphone sur son fuseau, date de production ferme obtenue. Rétroplanning du pic établi : dates limites de réassort, capacité du prestataire logistique confirmée, et modèles de réponse enrichis des cas les plus fréquents.",
      resultat:
        "La file d’attente est revenue à zéro en quatre jours. Le réassort est arrivé onze jours avant l’opération.",
    },
    faq: [
      {
        q: 'Répondez-vous aux clients en mon nom ?',
        a: "Comme vous le décidez au démarrage. Le plus souvent, les réponses partent de l’adresse du service client de la marque, sur des modèles validés par vous. Les cas sortant du cadre — un geste commercial important, un litige qui monte — vous reviennent avec une recommandation avant réponse.",
      },
      {
        q: 'Utilisez-vous mes outils ?',
        a: "Oui : Shopify, WooCommerce, Gorgias, Zendesk, Crisp ou une simple boîte partagée. Je reprends votre environnement existant, avec des accès limités au périmètre convenu.",
      },
      {
        q: 'Gérez-vous les fournisseurs étrangers ?',
        a: "Oui, en anglais, à l’écrit comme au téléphone, y compris sur des fuseaux décalés. La relance d’un fournisseur asiatique ou d’un support de marketplace fait partie des sujets les plus fréquemment confiés.",
      },
      {
        q: 'Que se passe-t-il pendant un pic de volume ?',
        a: "Il s’anticipe. Le rétroplanning se construit plusieurs semaines à l’avance et, si le volume attendu dépasse le périmètre habituel, on le dit avant plutôt que de le découvrir pendant. Un pic saisonnier peut aussi faire l’objet d’une mission ponctuelle, en complément du forfait.",
      },
    ],
    liens: ['assistanat-anglais', 'suivi-prestataires', 'facturation', 'recherches'],
    cloture: 'Vous redevenez le fondateur, pas le service après-vente.',
  },

  {
    slug: 'dirigeants-multi-societes',
    secteur: 'Holdings & groupes',
    nom: 'Dirigeants de plusieurs sociétés',
    title: 'Assistante pour dirigeant de plusieurs sociétés · BrittAssist',
    description:
      "Plusieurs structures, plusieurs échéances, plusieurs cabinets : centraliser le suivi administratif et juridique courant d’un groupe de sociétés.",
    h1: 'Plusieurs sociétés, un seul suivi.',
    lede:
      "Trois structures, ce n’est pas trois fois plus de travail. C’est trois fois plus d’échéances, de comptes, d’interlocuteurs et d’endroits où une information peut se perdre.",
    constat: {
      titre: 'Rien n’est compliqué. Tout est multiplié.',
      paragraphes: [
        "Une holding et deux filiales, c’est trois exercices à clôturer, trois assemblées générales à tenir, trois dépôts de comptes, trois jeux d’assurances, souvent plusieurs banques et parfois plusieurs cabinets comptables. Chaque obligation prise isolément est banale. Leur superposition sur un même calendrier crée une charge de suivi permanente que personne, en pratique, ne tient à jour.",
        "Le symptôme le plus courant est l’absence de vue d’ensemble. Vous savez comment va chaque société, mais personne ne peut vous dire au même instant ce qui est encaissé, ce qui est dû, ce qui arrive à échéance et où en est chaque formalité — parce que l’information est répartie entre quatre outils et trois cabinets.",
        "Le second symptôme est le temps de bascule. Passer d’une structure à l’autre demande de recharger un contexte entier : les interlocuteurs, l’exercice, les conventions, les particularités. Fait dix fois par semaine, c’est un coût d’attention considérable et totalement invisible.",
      ],
    },
    frictions: [
      'Une assemblée générale tenue en retard, chaque année.',
      'Un dépôt de comptes découvert hors délai.',
      'Une convention intragroupe jamais formalisée.',
      'Deux assurances qui couvrent la même chose.',
      'Une facture inter-sociétés que personne n’a émise.',
    ],
    absorbe: [
      'Calendrier consolidé des échéances de toutes les structures',
      'Préparation des assemblées générales annuelles : convocations, documents, coordination avec votre conseil',
      'Suivi des formalités juridiques courantes et des dépôts, en lien avec le cabinet compétent',
      'Suivi des refacturations et des flux inter-sociétés',
      'Interface unique avec vos cabinets comptables, banques, assureurs et avocats',
      'Classement documentaire structuré par entité, avec une logique commune',
      'Reporting consolidé : facturation, encaissements, échéances par structure',
      'Suivi des contrats, des reconductions et des préavis de chaque société',
      'Agenda unique tenu à travers l’ensemble de vos structures',
      'Préparation des éléments de clôture pour chaque cabinet comptable',
    ],
    reste: [
      'La stratégie du groupe et les décisions d’investissement',
      'Les opérations juridiques : statuts, cessions, restructurations, qui relèvent d’un avocat',
      'La comptabilité, la consolidation et les liasses fiscales',
      'La signature et les engagements de chaque structure',
    ],
    exemple: {
      demande:
        '« Je ne sais plus quelle AG a été tenue, ni quels comptes ont été déposés. »',
      prise:
        "État établi structure par structure : dates de clôture, assemblées tenues et procès-verbaux existants, dépôts effectués, éléments manquants. Deux formalités en retard identifiées et régularisées avec le cabinet, calendrier consolidé des douze prochains mois mis en place, et convocation de l’assemblée à venir préparée six semaines à l’avance.",
      resultat:
        "Une page qui répond, pour chaque société, à ce qui est fait, ce qui manque et ce qui arrive. Et une année où plus rien n’a été tenu en retard.",
    },
    faq: [
      {
        q: 'Le forfait couvre-t-il toutes mes sociétés ?',
        a: "Le périmètre se définit au devis, en fonction du nombre de structures et de leur volumétrie réelle. Deux sociétés dont l’une est une holding patrimoniale peu active n’ont rien à voir avec trois sociétés d’exploitation. Au-delà d’un certain volume, c’est un Private Office sur mesure qui prend le relais.",
      },
      {
        q: 'Réalisez-vous les formalités juridiques ?',
        a: "Je prépare, je rassemble les pièces, je coordonne et je suis les délais. L’acte juridique lui-même — la rédaction des procès-verbaux qui engagent, les dépôts, les modifications statutaires — reste réalisé par votre avocat ou votre expert-comptable. Ce qui change, c’est que quelqu’un tient le calendrier et relance.",
      },
      {
        q: 'Puis-je avoir un reporting par société et un reporting consolidé ?',
        a: "Oui. Le format le plus utilisé est une page par structure, plus une page de synthèse, à date fixe. Les indicateurs se choisissent au démarrage et se réduisent souvent après deux mois : un reporting trop large n’est plus lu.",
      },
      {
        q: 'Mes structures ont des cabinets comptables différents. Est-ce un problème ?',
        a: "Non, c’est même le cas le plus fréquent et l’un des plus utiles à confier. Vous conservez vos cabinets ; je deviens leur interlocuteur pour la transmission des pièces et le suivi des demandes, ce qui vous retire une navette permanente.",
      },
    ],
    liens: ['reporting', 'gestion-des-contrats', 'gestion-administrative', 'coordination'],
    cloture: 'Une seule vue, sur toutes vos structures.',
  },

  {
    slug: 'professionnels-sante',
    secteur: 'Santé libérale',
    nom: 'Professionnels de santé libéraux',
    title: 'Assistante pour professionnel de santé libéral · BrittAssist',
    description:
      "Cotisations, contrats de remplacement, fournisseurs, DPC, SCM et SELARL : la gestion administrative d’un cabinet libéral. Hors secrétariat médical.",
    h1: 'La gestion de votre cabinet, pas votre secrétariat médical.',
    lede:
      "Un praticien libéral est aussi un chef d’entreprise. La différence, c’est que sa journée est déjà pleine avant que la partie chef d’entreprise ne commence.",
    constat: {
      titre: 'Le cabinet tourne. Son administration, elle, attend le dimanche.',
      paragraphes: [
        "Cotisations et déclarations aux caisses, assurance responsabilité civile professionnelle, contrats de collaboration ou de remplacement, commandes de matériel et de consommables, maintenance des équipements, obligations de développement professionnel continu, comptabilité à préparer pour l’association de gestion, vie de la SCM ou de la SELARL : la charge est réelle et elle est régulière.",
        "Elle a une particularité : elle ne peut pas se faire pendant les consultations, c’est-à-dire pendant la quasi-totalité du temps disponible. Elle se reporte donc sur les soirées et les week-ends, et elle est le premier poste sacrifié quand la patientèle augmente.",
        "Cette page ne parle pas de secrétariat médical. La prise de rendez-vous des patients et la permanence téléphonique relèvent d’un télésecrétariat médical, un métier distinct, avec ses propres exigences. Ce qui est décrit ici, c’est l’administration du cabinet en tant qu’entreprise — et l’organisation du praticien en tant que dirigeant.",
      ],
    },
    frictions: [
      'Une déclaration à la caisse faite au dernier jour.',
      'Un contrat de remplacement improvisé la veille.',
      'Un DPC à valider avant le 31 décembre.',
      'Un devis de matériel jamais comparé.',
      'Un local dont le bail se reconduit sans qu’on l’ait relu.',
    ],
    absorbe: [
      'Suivi des échéances : cotisations, caisses, assurances, obligations annuelles',
      'Préparation et suivi des contrats de collaboration et de remplacement',
      'Constitution et mise à jour du dossier administratif du praticien et du cabinet',
      'Commandes de matériel et de consommables, comparaison des fournisseurs',
      'Suivi des contrats de maintenance et des interventions techniques',
      'Recherche et inscription aux formations, suivi du DPC et des justificatifs',
      'Préparation des pièces pour l’expert-comptable ou l’association de gestion',
      'Suivi administratif de la SCM ou de la société d’exercice : échéances, appels de fonds, assemblées',
      'Organisation des déplacements, congrès et formations',
      'Organisation personnelle et démarches privées du praticien',
    ],
    reste: [
      'Tout ce qui touche aux patients : dossiers, rendez-vous, appels, données de santé',
      'Le secrétariat médical et la permanence téléphonique, qui relèvent d’un télésecrétariat',
      'La cotation, la facturation des actes et les télétransmissions',
      'Les décisions médicales et l’exercice professionnel',
    ],
    exemple: {
      demande:
        '« Je pars trois semaines en août, il me faut un remplaçant et je n’ai rien préparé. »',
      prise:
        "Contrat de remplacement préparé à partir du modèle de votre conseil ordinal, pièces du remplaçant réunies et vérifiées, échanges avec lui pour caler les modalités pratiques, information des organismes concernés, et dossier d’accueil constitué : accès, matériel, fournisseurs, contacts utiles et particularités du cabinet.",
      resultat:
        "Le remplacement a été cadré trois semaines avant le départ, sans un seul aller-retour de dernière minute.",
    },
    faq: [
      {
        q: 'Prenez-vous les rendez-vous des patients ?',
        a: "Non, et c’est volontaire. La prise de rendez-vous et la permanence téléphonique relèvent d’un télésecrétariat médical, qui a ses propres compétences et son propre cadre. Mon périmètre s’arrête au dirigeant et à son cabinet en tant qu’entreprise.",
      },
      {
        q: 'Avez-vous accès à des données de santé ?',
        a: "Aucune. Le périmètre est construit pour qu’aucune donnée de santé à caractère personnel ne transite par moi : ni dossiers patients, ni actes, ni télétransmissions. C’est une ligne nette, posée au démarrage.",
      },
      {
        q: 'Travaillez-vous avec mon association de gestion agréée ?',
        a: "Oui, comme avec n’importe quel cabinet comptable : rassemblement des pièces, transmission dans le format attendu, suivi des demandes et des relances. La tenue comptable et la déclaration restent chez eux.",
      },
      {
        q: 'Je suis en exercice regroupé. Le périmètre peut-il être partagé ?',
        a: "Oui, à condition de définir précisément ce qui relève de la structure commune et ce qui reste propre à chaque praticien. Le plus souvent, un praticien porte la relation pour les sujets de la SCM, et chacun garde son périmètre personnel.",
      },
    ],
    liens: ['gestion-administrative', 'gestion-des-contrats', 'organisation-personnelle', 'suivi-prestataires'],
    cloture: 'Le dimanche soir n’est pas un créneau administratif.',
  },
];

export const metierParSlug = (slug: string) => metiers.find((m) => m.slug === slug);
