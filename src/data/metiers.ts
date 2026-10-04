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
      "Devis, factures de situation, attestations, appels d’offres et relances : déléguer l’administratif d’une entreprise du bâtiment. Dès 590 € / mois.",
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
      "Agenda, comité de direction, reporting, déplacements, coordination : une assistante de direction externalisée, sans créer le poste. Dès 590 € / mois.",
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
        a: "Le rythme habituel est du lundi au vendredi. Les demandes reçues le week-end sont traitées à la reprise, et un besoin ponctuel sur une période tendue — une signature, un dossier à boucler — s’organise à l’avance. Une disponibilité élargie de façon régulière relève d’un Private Office.",
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
        a: "Le périmètre se définit au devis, en fonction du nombre de structures et de leur volumétrie réelle. Deux sociétés dont l’une est une holding patrimoniale peu active n’ont rien à voir avec trois sociétés d’exploitation. Au-delà d’un certain volume, c’est un Private Office qui prend le relais.",
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
  // ── Pages ajoutées en octobre 2026 ────────────────────────────────────────
  // Publiées le 3 octobre 2026 sans relecture préalable, sur décision du
  // propriétaire (publications.mjs). Les réponses à la première personne engagent
  // Brittany Dreano : elles restent à relire par elle (relectures.mjs).
  {
    slug: 'organismes-de-formation',
    secteur: 'Formation professionnelle',
    nom: 'Organismes de formation et formateurs',
    title: 'Assistante pour organisme de formation et formateur · BrittAssist',
    description:
      "Conventions, convocations, émargements, attestations, dossiers de financement : déléguer l’administratif d’un organisme de formation. Dès 590 € / mois.",
    h1: 'L’administratif d’une formation, de la convention à l’attestation.',
    lede:
      "Vous vendez une journée de formation. Vous en livrez une, plus trois heures de papier : la convention avant, les émargements pendant, les attestations après. Multiplié par chaque session, c’est une part de votre semaine que personne ne vous paie.",
    constat: {
      titre: 'Chaque session traîne son dossier.',
      paragraphes: [
        "Une action de formation n’existe, aux yeux d’un financeur, que si son dossier est complet : convention ou contrat signé, programme, convocations, feuilles d’émargement, évaluations, certificat de réalisation. Chaque pièce est simple. C’est leur nombre, et le fait qu’elles reviennent à chaque session, qui pèse.",
        "La certification Qualiopi a rendu ces pièces incontournables. Depuis le 1er janvier 2022, elle est obligatoire pour les prestataires qui veulent accéder aux fonds publics et mutualisés. Elle repose sur des preuves : ce qui a été fait doit pouvoir être montré, dossier par dossier, le jour de l’audit.",
        "S’y ajoutent les demandes de prise en charge auprès des financeurs, leurs pièces et leurs relances, le bilan pédagogique et financier à établir chaque année, et la logistique : salles, déplacements, supports. Le formateur indépendant fait tout cela le soir ; le petit organisme le répartit entre des personnes dont ce n’est pas le métier.",
      ],
    },
    frictions: [
      'Une convention signée la veille de la session.',
      'Une feuille d’émargement restée dans une sacoche.',
      'Un dossier de financement relancé trois fois pour une pièce.',
      'Des attestations envoyées trois semaines après.',
      'Un audit qui approche, et des preuves à reconstituer.',
    ],
    absorbe: [
      'Préparation et envoi des conventions et contrats de formation, suivi des signatures',
      'Convocations, programmes et informations pratiques adressés aux participants',
      'Feuilles d’émargement préparées, puis collectées et classées par session',
      'Envoi et collecte des questionnaires d’évaluation et de satisfaction',
      'Certificats de réalisation et attestations, émis dès la fin de la session',
      'Constitution et suivi des dossiers de prise en charge auprès des financeurs',
      'Facturation des sessions et relance des règlements',
      'Classement des preuves, session par session, dans l’ordre attendu pour un audit',
      'Réservation des salles, organisation des déplacements du formateur',
      'Rassemblement des éléments nécessaires au bilan pédagogique et financier',
    ],
    reste: [
      'Le contenu pédagogique, les programmes et l’animation',
      'La démarche qualité elle-même et les choix qu’elle suppose',
      'La relation commerciale et la fixation des prix',
      'La tenue comptable et la déclaration du bilan pédagogique et financier, qui engagent l’organisme',
    ],
    exemple: {
      demande:
        '« J’ai six sessions le mois prochain et aucune convention n’est partie. »',
      prise:
        "Conventions préparées à partir de vos modèles et envoyées en signature, convocations adressées aux participants avec le programme et les informations pratiques, feuilles d’émargement prêtes pour chaque journée, dossier créé pour chaque session avec la liste des pièces attendues.",
      resultat:
        "Chaque session s’ouvre avec un dossier complet, et se referme avec ses attestations envoyées dans la semaine.",
    },
    faq: [
      {
        q: 'Connaissez-vous les exigences de Qualiopi ?',
        a: "Je connais les pièces qu’un dossier de session doit contenir et la logique de preuve du référentiel. La démarche qualité, ses indicateurs et les réponses à l’auditeur restent de votre responsabilité : mon rôle est que chaque preuve existe et se retrouve.",
      },
      {
        q: 'Travaillez-vous dans notre outil de gestion de la formation ?',
        a: "Oui. Le travail se fait dans vos outils, avec un accès à mon nom. Si vous n’en avez pas, un classement rigoureux et des modèles suffisent pour un volume modeste.",
      },
      {
        q: 'Pouvez-vous déposer les dossiers de financement ?',
        a: "Je les prépare, je réunis les pièces et je suis les demandes auprès des financeurs. Les engagements pris au nom de l’organisme et les signatures restent les vôtres.",
      },
      {
        q: 'Je suis formateur indépendant, seul. Est-ce adapté ?',
        a: "Cela dépend de votre volume de sessions. Le périmètre se définit au devis ; pour quelques sessions par an, une mission ponctuelle de mise en ordre des modèles et du classement peut suffire.",
      },
    ],
    liens: ['gestion-administrative', 'facturation', 'gestion-des-contrats', 'organisation-deplacements'],
    cloture: 'Une formation est terminée quand son dossier l’est aussi.',
  },
  {
    slug: 'architectes-maitres-d-oeuvre',
    secteur: 'Architecture & maîtrise d’œuvre',
    nom: 'Architectes et maîtres d’œuvre',
    title: 'Assistante pour architecte et maître d’œuvre · BrittAssist',
    description:
      "Comptes rendus de chantier, dossiers de consultation, situations, attestations des entreprises : déléguer l’administratif d’une agence. Dès 590 € / mois.",
    h1: 'Le suivi administratif d’une agence, entre deux réunions de chantier.',
    lede:
      "Le compte rendu de la réunion de mardi doit partir avant celle de la semaine suivante. Il part souvent la veille, écrit tard, parce que la journée a été prise par trois autres chantiers.",
    constat: {
      titre: 'Un projet se dessine une fois, et s’administre pendant deux ans.',
      paragraphes: [
        "La conception occupe une part du temps d’une agence. Le reste, c’est du suivi : diffuser les comptes rendus, tenir la liste des entreprises et de leurs attestations, assembler un dossier de consultation, vérifier que les situations de travaux arrivent avec leurs pièces, relancer celui qui n’a pas répondu.",
        "Ce suivi a une particularité : il engage. Un compte rendu qui tarde, c’est une décision de chantier qui n’est pas tracée. Une attestation d’assurance périmée dans le dossier d’une entreprise, c’est un risque que personne n’a vu. La tâche est administrative ; sa conséquence ne l’est pas.",
        "Dans une petite agence, ce travail retombe sur l’architecte lui-même, ou sur un collaborateur qui devrait dessiner. Il se fait le soir, par à-coups, et prend du retard précisément quand les chantiers s’accumulent.",
      ],
    },
    frictions: [
      'Un compte rendu de chantier diffusé avec une semaine de retard.',
      'Un dossier de consultation assemblé dans l’urgence.',
      'Une entreprise dont l’attestation décennale a expiré.',
      'Des notes d’honoraires qui ne partent pas à l’avancement.',
      'Un dossier des ouvrages exécutés réclamé pièce par pièce.',
    ],
    absorbe: [
      'Mise en forme et diffusion des comptes rendus de chantier à partir de vos notes',
      'Convocations aux réunions de chantier, tenue de la liste des intervenants',
      'Assemblage des dossiers de consultation à partir des pièces que vous produisez',
      'Collecte et suivi des attestations d’assurance et de vigilance des entreprises',
      'Suivi de l’arrivée des situations de travaux et de leurs pièces, avant votre visa',
      'Collecte des documents des entreprises en fin de chantier, relances',
      'Émission des notes d’honoraires selon l’avancement que vous validez, relances',
      'Dossier administratif des candidatures aux consultations et concours',
      'Tenue de l’agenda, des déplacements et des rendez-vous de chantier',
      'Préparation des pièces pour l’expert-comptable',
    ],
    reste: [
      'La conception, les plans, les pièces écrites techniques',
      'Le contenu des comptes rendus et les décisions de chantier',
      'Le visa des situations et tout ce qui engage votre responsabilité professionnelle',
      'Les relations avec le maître d’ouvrage sur le fond du projet',
    ],
    exemple: {
      demande:
        '« La réunion de chantier est demain et le compte rendu de la précédente n’est pas parti. »',
      prise:
        "Vos notes dictées sont mises en forme dans le modèle de l’agence, avec la liste des présents, les décisions et les actions par entreprise. Le compte rendu vous est soumis, puis diffusé à tous les intervenants ; les points restés ouverts sont repris en tête de l’ordre du jour suivant.",
      resultat:
        "Le compte rendu part dans les quarante-huit heures qui suivent chaque réunion, et les entreprises arrivent à la suivante en sachant ce qui est attendu d’elles.",
    },
    faq: [
      {
        q: 'Rédigez-vous les comptes rendus de chantier ?',
        a: "Je les mets en forme et je les diffuse à partir de vos notes, écrites ou dictées. Leur contenu — constats, décisions, réserves — est le vôtre : il engage votre responsabilité, et il vous est soumis avant tout envoi.",
      },
      {
        q: 'Pouvez-vous vérifier les situations de travaux ?',
        a: "Je vérifie qu’elles arrivent, complètes, avec les pièces attendues, et je vous les présente dans l’ordre. La vérification de l’avancement et le visa relèvent de votre métier.",
      },
      {
        q: 'Assistez-vous aux réunions de chantier ?',
        a: "Non. Le fonctionnement est à distance : le suivi se fait à partir de ce que vous transmettez après la réunion. Une prise de notes à distance, en visioconférence, peut s’envisager pour des réunions qui s’y prêtent.",
      },
      {
        q: 'Travaillez-vous avec les marchés publics ?',
        a: "Sur le volet administratif : pièces de candidature, attestations, dépôt sur les plateformes. Le mémoire technique et l’offre restent les vôtres.",
      },
    ],
    liens: ['coordination', 'gestion-administrative', 'facturation', 'suivi-prestataires'],
    cloture: 'Un chantier bien suivi est d’abord un chantier bien écrit.',
  },
  {
    slug: 'hotellerie-restauration',
    secteur: 'Hôtellerie & restauration',
    nom: 'Hôteliers et restaurateurs',
    title: 'Assistante administrative pour hôtel et restaurant · BrittAssist',
    description:
      "Fournisseurs, dossiers du personnel, devis de groupes, échéances et contrôles : déléguer l’administratif d’un hôtel ou d’un restaurant. Dès 590 € / mois.",
    h1: 'L’administratif d’un établissement, traité pendant que vous êtes en salle.',
    lede:
      "Entre deux services, il reste une heure. Elle sert à commander, à recevoir un fournisseur, à souffler. Elle ne sert jamais aux papiers : ceux-là attendent le jour de fermeture, quand il y en a un.",
    constat: {
      titre: 'Le métier se fait debout. Les papiers attendent qu’on s’assoie.',
      paragraphes: [
        "Un établissement produit une quantité étonnante de documents : factures de fournisseurs par dizaines, bons de livraison, contrats de maintenance, dossiers des salariés et des saisonniers, devis pour les groupes et les événements, déclarations, contrôles périodiques des installations.",
        "Aucun n’est difficile. Mais l’exploitation ne laisse aucune plage calme pour les traiter : le service commande l’emploi du temps. L’administratif se fait donc en retard, par blocs, et les erreurs qui en découlent sont concrètes — une facture payée deux fois, un devis de groupe envoyé trop tard pour être retenu, un contrôle dépassé.",
        "En saison, le phénomène s’aggrave : c’est au moment où le volume de papier est le plus élevé qu’il y a le moins de temps pour s’en occuper.",
      ],
    },
    frictions: [
      'Un devis de groupe envoyé quatre jours après la demande.',
      'Une pile de factures fournisseurs non rapprochées.',
      'Des dossiers de saisonniers incomplets à leur arrivée.',
      'Un contrôle périodique dont la date est passée.',
      'Un expert-comptable qui relance pour les pièces du mois.',
    ],
    absorbe: [
      'Réception, vérification et classement des factures fournisseurs, préparation des paiements',
      'Préparation et envoi des devis pour groupes, séminaires et événements, puis relances',
      'Suivi des acomptes et des soldes des réservations de groupes',
      'Constitution des dossiers administratifs du personnel et des saisonniers, pièces à réunir',
      'Échéancier des contrats, assurances, contrôles et vérifications périodiques',
      'Suivi des prestataires : maintenance, blanchisserie, entretien, interventions',
      'Préparation des pièces pour l’expert-comptable et le cabinet de paie',
      'Recherche et comparaison de fournisseurs et de devis',
      'Organisation personnelle et démarches du dirigeant',
    ],
    reste: [
      'L’exploitation : service, cuisine, accueil, réservations au quotidien',
      'L’hygiène et la sécurité alimentaire, et les documents qui s’y rapportent',
      'Les plannings et le management des équipes',
      'Les contrats de travail, la paie et les déclarations sociales, qui relèvent de votre cabinet',
      'Les réponses publiques aux avis et la communication de l’établissement',
    ],
    exemple: {
      demande:
        '« On m’a demandé un devis pour un repas de quarante personnes, et je n’ai pas eu une minute. »',
      prise:
        "Le devis est établi à partir de vos menus et de vos tarifs de groupe, envoyé le jour même avec les conditions d’acompte, puis relancé. À l’accord, la facture d’acompte est émise, la réservation inscrite, et les informations utiles — effectif, régimes, horaires — vous sont transmises une semaine avant.",
      resultat:
        "La demande reçoit une réponse dans la journée, et vous ne vous en occupez qu’au moment de dresser les tables.",
    },
    faq: [
      {
        q: 'Prenez-vous les réservations de la clientèle ?',
        a: "Non. La réservation au quotidien fait partie de l’exploitation et demande une présence continue. Je traite les demandes de groupes et d’événements, qui se gèrent par écrit et sur plusieurs jours.",
      },
      {
        q: 'Peut-on travailler ensemble uniquement en saison ?',
        a: "Oui. Le plus efficace est de commencer un peu avant l’ouverture : dossiers du personnel, fournisseurs et échéancier se préparent mieux quand vous avez encore le temps de répondre à mes questions.",
      },
      {
        q: 'Vous occupez-vous des documents d’hygiène et de sécurité ?',
        a: "Non. Ces documents relèvent de votre responsabilité d’exploitant et de vos formations. Je peux tenir l’échéancier des contrôles périodiques et des contrats de maintenance, pas leur contenu.",
      },
      {
        q: 'Travaillez-vous avec notre logiciel de caisse ou de réservation ?',
        a: "Je travaille dans vos outils dès lors qu’ils permettent un accès distinct et limité. Je n’ai pas besoin d’accéder à la caisse pour traiter les factures fournisseurs et les devis.",
      },
    ],
    liens: ['gestion-administrative', 'facturation', 'suivi-prestataires', 'recherches'],
    cloture: 'Un établissement se tient en salle. Ses papiers peuvent se tenir ailleurs.',
  },
  {
    slug: 'fondateurs-de-startup',
    secteur: 'Start-up & jeunes entreprises',
    nom: 'Fondateurs de start-up',
    title: 'Assistante pour fondateur de start-up · BrittAssist',
    description:
      "Agenda investisseurs, comités, recrutements, déplacements, outils : une executive assistant externalisée pour fondateur, sans créer le poste. Dès 590 € / mois.",
    h1: 'Une executive assistant pour fondateur, avant d’avoir de quoi recruter.',
    lede:
      "Votre agenda est rempli par des investisseurs, des candidats et des clients qui ont tous besoin de vous cette semaine. Vous êtes aussi celui qui réserve les trains, relance les signatures et cherche pourquoi la facture du logiciel a doublé.",
    constat: {
      titre: 'Le fondateur est le poste le plus cher, et celui qui fait le plus de logistique.',
      paragraphes: [
        "Dans une jeune entreprise, tout ce qui n’a pas de propriétaire revient au fondateur. Coordonner dix entretiens de recrutement, préparer la logistique d’un comité, tenir l’agenda d’une levée de fonds, répondre aux demandes de pièces d’un investisseur, gérer vingt abonnements à des outils : rien de cela n’est son métier, et tout passe par lui.",
        "Le coût n’est pas seulement le temps. C’est le rythme : une levée de fonds se joue sur des semaines où chaque rendez-vous déplacé ou chaque document envoyé en retard se voit. Et c’est la dispersion : dix sujets d’organisation ouverts en permanence, au moment où il faudrait penser au produit.",
        "Recruter une assistante de direction est rarement la première embauche d’une start-up, et c’est compréhensible. Le besoin, lui, existe bien avant que le poste se justifie.",
      ],
    },
    frictions: [
      'Trois rendez-vous d’investisseurs à replacer en une matinée.',
      'Un comité dont les documents partent la veille au soir.',
      'Dix candidats à coordonner avec quatre interviewers.',
      'Des abonnements à des outils que plus personne n’utilise.',
      'Une demande de pièces restée sans réponse pendant une semaine.',
    ],
    absorbe: [
      'Tenue de l’agenda : investisseurs, clients, candidats, équipe, avec vos règles de priorité',
      'Logistique des comités et réunions d’associés : convocations, ordre du jour, envoi des documents',
      'Coordination des entretiens de recrutement entre candidats et interviewers',
      'Collecte et classement des pièces demandées par un investisseur ou un conseil',
      'Organisation des déplacements, salons et rendez-vous à l’étranger',
      'Suivi des signatures et des documents en circulation',
      'Inventaire et suivi des abonnements et des outils',
      'Notes de frais et pièces pour le cabinet comptable',
      'Échanges en anglais avec des interlocuteurs étrangers',
      'Organisation personnelle du fondateur',
    ],
    reste: [
      'La négociation avec les investisseurs et le contenu des documents présentés',
      'Les actes juridiques, qui relèvent de vos avocats',
      'La comptabilité, la paie et le pilotage financier',
      'Les décisions de recrutement',
      'Le produit, la technique et l’intégration des outils',
    ],
    exemple: {
      demande:
        '« J’ai douze rendez-vous d’investisseurs à caser sur deux semaines, et un comité au milieu. »',
      prise:
        "Les créneaux sont proposés selon vos règles — pas plus de trois par jour, jamais deux d’affilée —, les confirmations envoyées avec le lien ou l’adresse, les déplacements organisés autour. Pour le comité, les convocations partent, les documents que vous fournissez sont assemblés et adressés à l’avance, et le relevé de décisions est mis en forme après.",
      resultat:
        "Vous arrivez à chaque rendez-vous en sachant qui vous voyez et pourquoi, et aucun n’a été déplacé deux fois.",
    },
    faq: [
      {
        q: 'Pouvez-vous gérer la data room d’une levée de fonds ?',
        a: "Je peux collecter les documents, les classer dans la structure fixée par vos conseils, suivre ce qui manque et relancer. Le contenu, sa validation et les questions juridiques restent chez vous et vos avocats.",
      },
      {
        q: 'Travaillez-vous en anglais ?',
        a: "Oui. Les échanges écrits et téléphoniques en anglais, et la coordination avec des interlocuteurs étrangers, font partie du périmètre.",
      },
      {
        q: 'Notre équipe peut-elle vous solliciter aussi ?',
        a: "Le périmètre de base est celui du fondateur. Un renfort pour l’équipe — organisation d’un séminaire, coordination d’un recrutement — se prévoit au devis.",
      },
      {
        q: 'Le forfait est-il adapté à une entreprise qui change tous les trois mois ?',
        a: "Le périmètre se révise. L’accompagnement mensuel est résiliable avec un préavis d’un mois, et son contenu s’ajuste quand vos priorités bougent.",
      },
    ],
    liens: ['gestion-agenda', 'coordination', 'organisation-deplacements', 'assistanat-anglais'],
    cloture: 'Votre temps est la ressource la plus rare de l’entreprise. Il ne devrait pas servir à réserver des trains.',
  },
  {
    slug: 'agences-et-studios',
    secteur: 'Agences & studios',
    nom: 'Agences et studios créatifs',
    title: 'Assistante administrative pour agence et studio créatif · BrittAssist',
    description:
      "Devis, bons de commande, facturation à l’avancement, indépendants, relances : déléguer l’administratif d’une agence ou d’un studio. Dès 590 € / mois.",
    h1: 'L’administratif d’une agence, pendant que l’équipe produit.',
    lede:
      "Le projet est livré, le client est content, et la facture n’est pas partie. Elle partira à la fin du mois, avec celles des trois autres projets, quand quelqu’un aura retrouvé les bons de commande.",
    constat: {
      titre: 'Dans une agence, personne n’a été recruté pour facturer.',
      paragraphes: [
        "Une agence ou un studio est composé de gens qui conçoivent, produisent et gèrent des projets. L’administratif — devis, bons de commande, facturation, relances, contrats des indépendants — n’appartient à personne. Il échoit au dirigeant, ou au chef de projet le plus consciencieux.",
        "La facturation y est plus délicate qu’ailleurs : acomptes à la commande, jalons, dépassements à faire valider, frais techniques à refacturer. Chaque projet a ses règles. Sans suivi, des jalons ne sont pas facturés, des dépassements sont offerts faute d’avoir été chiffrés à temps, et les indépendants sont payés avant que le client n’ait réglé.",
        "S’y ajoute le suivi des prestataires extérieurs : contrats, factures, et, pour les collaborations importantes, les attestations que tout donneur d’ordre doit demander.",
      ],
    },
    frictions: [
      'Un jalon atteint depuis trois semaines, pas encore facturé.',
      'Un bon de commande client introuvable au moment de facturer.',
      'Des heures supplémentaires jamais chiffrées.',
      'Un indépendant qui relance pour sa facture.',
      'Un dirigeant qui fait les relances le dimanche.',
    ],
    absorbe: [
      'Mise en forme et envoi des devis à partir du chiffrage des chefs de projet, suivi des accords',
      'Collecte des bons de commande et des informations de facturation des clients',
      'Facturation des acomptes, des jalons et des soldes, selon l’avancement validé',
      'Relance des factures échues, tenue du tableau des encaissements',
      'Contrats et bons de commande des indépendants, suivi de leurs factures',
      'Collecte des attestations des sous-traitants pour les contrats qui l’exigent',
      'Suivi des abonnements, licences et outils',
      'Organisation des déplacements, tournages, réunions clients',
      'Préparation des pièces pour l’expert-comptable',
    ],
    reste: [
      'Le chiffrage des projets et la négociation commerciale',
      'La création, la production et la direction de projet',
      'Les clauses de cession de droits et les contrats sur mesure, qui relèvent d’un conseil juridique',
      'La communication et la production éditoriale de l’agence',
    ],
    exemple: {
      demande:
        '« Nous avons quatre projets en cours et je ne sais plus ce qui a été facturé. »',
      prise:
        "Un tableau est établi par projet : montant du devis, acompte, jalons, ce qui est facturé, ce qui est encaissé. Les jalons atteints et non facturés sont émis après votre validation, les factures échues relancées, et un point hebdomadaire vous indique ce qui est à facturer la semaine suivante.",
      resultat:
        "Chaque lundi, vous savez ce qui a été facturé, ce qui est dû, et ce qui reste à émettre, sans ouvrir un seul dossier.",
    },
    faq: [
      {
        q: 'Travaillez-vous dans notre outil de gestion de projet ?',
        a: "Oui, avec un accès à mon nom. J’ai besoin d’y voir l’avancement et les jalons, pas d’intervenir sur la production.",
      },
      {
        q: 'Pouvez-vous chiffrer les devis ?',
        a: "Non : le chiffrage est votre métier. Je mets le devis en forme à partir de vos éléments, je l’envoie, je le suis et je le relance.",
      },
      {
        q: 'Gérez-vous les contrats de cession de droits ?',
        a: "Je prépare les documents à partir des modèles établis par votre conseil, je suis les signatures et je les classe. La rédaction des clauses relève d’un avocat.",
      },
      {
        q: 'Rédigez-vous nos contenus ou gérez-vous nos réseaux sociaux ?',
        a: "Non. La production éditoriale et la présence en ligne ne font pas partie de mon périmètre.",
      },
    ],
    liens: ['facturation', 'gestion-des-contrats', 'suivi-prestataires', 'reporting'],
    cloture: 'Un projet n’est pas terminé à la livraison. Il l’est à l’encaissement.',
  },
  {
    slug: 'organisateurs-d-evenements',
    secteur: 'Événementiel & réception',
    nom: 'Organisateurs d’événements et traiteurs',
    title: 'Assistante pour organisateur d’événements et traiteur · BrittAssist',
    description:
      "Devis, acomptes, rétroplannings, prestataires, feuilles de route : déléguer l’administratif d’une activité événementielle. Dès 590 € / mois.",
    h1: 'L’administratif d’un événement, tenu pendant que vous êtes sur le terrain.',
    lede:
      "Le samedi, vous êtes sur un mariage. Pendant ce temps, trois demandes de devis sont arrivées, un prestataire attend sa confirmation, et l’acompte de l’événement du mois prochain n’a pas été réclamé.",
    constat: {
      titre: 'Chaque événement se prépare pendant qu’un autre se déroule.',
      paragraphes: [
        "L’événementiel a un rythme impitoyable : les demandes arrivent en semaine, les événements ont lieu le week-end, et la préparation de l’un chevauche l’exécution de l’autre. Le temps de bureau, celui où l’on répond, chiffre et confirme, est précisément celui qui disparaît en haute saison.",
        "Or le délai de réponse fait une grande part de la décision. Un client qui organise un mariage ou un séminaire consulte plusieurs prestataires ; celui qui répond le premier, avec un devis clair, prend une longueur d’avance. Celui qui répond la semaine suivante arrive après la décision.",
        "Chaque événement traîne ensuite sa chaîne administrative : acompte à réclamer, prestataires à confirmer, rétroplanning à tenir, feuille de route à envoyer, solde à facturer, parfois des déclarations ou des autorisations à obtenir. Un oubli, et c’est le jour J qui le révèle.",
      ],
    },
    frictions: [
      'Une demande de devis restée cinq jours sans réponse.',
      'Un acompte jamais réclamé, découvert à la veille de l’événement.',
      'Un prestataire qui n’avait pas reçu l’heure d’installation.',
      'Un solde facturé un mois après la date.',
      'Des demandes d’information qui s’accumulent le lundi.',
    ],
    absorbe: [
      'Réponse aux demandes entrantes, qualification, envoi des devis à partir de vos tarifs',
      'Relance des devis et suivi des accords',
      'Factures d’acompte, suivi des échéances, facturation des soldes et relances',
      'Tenue du rétroplanning de chaque événement et rappel des échéances',
      'Confirmation des prestataires : lieux, technique, location, transport',
      'Feuilles de route envoyées aux équipes et aux prestataires',
      'Collecte des informations auprès du client : effectif, régimes, horaires, plan',
      'Suivi des contrats, assurances et documents demandés par les lieux',
      'Préparation des pièces pour l’expert-comptable',
    ],
    reste: [
      'La conception de l’événement, la cuisine, la production et la présence sur place',
      'Le chiffrage et la négociation',
      'Le recrutement et les contrats du personnel en extra, qui relèvent de votre cabinet',
      'Les règles d’hygiène et de sécurité propres à votre activité',
      'Les déclarations et autorisations qui engagent l’organisateur : je les prépare, vous les signez',
    ],
    exemple: {
      demande:
        '« J’ai trois événements dans le mois et je ne sais plus qui a été confirmé. »',
      prise:
        "Un tableau est établi par événement : prestataires, statut de chaque confirmation, acompte reçu ou non, informations client manquantes. Les confirmations en attente sont obtenues, les acomptes réclamés, et une feuille de route est envoyée à chaque intervenant une semaine avant, avec les horaires d’installation et le contact sur place.",
      resultat:
        "La semaine de l’événement, chaque intervenant a reçu ses horaires et vous n’avez plus à vous demander ce qui a été confirmé.",
    },
    faq: [
      {
        q: 'Répondez-vous aux demandes le week-end ?',
        a: "Les demandes sont traitées dans la journée ouvrée. Une disponibilité étendue, par exemple en haute saison, se prévoit au devis dans une formule sur mesure.",
      },
      {
        q: 'Êtes-vous présente sur les événements ?',
        a: "Non. Le travail se fait à distance, en amont et en aval. Le jour de l’événement, votre équipe est sur place avec une feuille de route complète.",
      },
      {
        q: 'Pouvez-vous établir les devis ?',
        a: "À partir de vos tarifs et de vos formules, oui. Dès qu’une demande sort de la grille, elle vous est soumise : le prix reste votre décision.",
      },
      {
        q: 'Mon activité s’arrête l’hiver. Puis-je suspendre ?',
        a: "L’accompagnement mensuel est résiliable avec un préavis d’un mois. Une activité saisonnière peut aussi se traiter par un accompagnement limité à la saison, à définir au devis.",
      },
    ],
    liens: ['facturation', 'coordination', 'suivi-prestataires', 'reservations'],
    cloture: 'Un événement réussi se joue le jour J. Il se perd dans les trois semaines qui précèdent.',
  },
];

export const metierParSlug = (slug: string) => metiers.find((m) => m.slug === slug);
