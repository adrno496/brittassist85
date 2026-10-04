/**
 * Guides — pages de fond répondant aux questions posées en amont de la décision.
 *
 * Objectif : les requêtes informationnelles et comparatives (« assistante
 * indépendante ou salariée », « combien coûte une assistante de direction
 * externalisée », « qu'est-ce qu'un private office »). Ces pages ne vendent
 * pas : elles répondent. C'est aussi le format le mieux repris par les moteurs
 * de réponse et les assistants IA, à condition que la réponse soit donnée haut
 * dans la page, en clair, et qu'elle soit exacte.
 *
 * Règle d'écriture : aucun chiffre présenté comme certain s'il dépend de la
 * situation du lecteur. Les ordres de grandeur sont annoncés comme tels, et
 * renvoyés à un expert-comptable quand c'est le bon interlocuteur.
 */

export interface Bloc {
  h3?: string;
  paragraphes?: string[];
  liste?: string[];
  /** Étapes à suivre dans l'ordre : rendues en liste numérotée */
  etapes?: string[];
  /** Tableau de référence. Chaque ligne a autant de cellules qu'il y a de colonnes. */
  tableau?: { legende: string; colonnes: string[]; lignes: string[][] };
  /** Texte à reprendre tel quel : message type, grille, clause. Une entrée par ligne. */
  modele?: { titre: string; lignes: string[] };
}

/** Nature de la page : elle détermine le sur-titre et quelques blocs du gabarit. */
export type TypeDeGuide = 'pilier' | 'guide' | 'methode' | 'comparatif' | 'reference' | 'situation' | 'modele';

/**
 * Fiche de cadrage d'une page : ce qu'elle vise et ce qui la distingue.
 * Elle sert au tableau de bord éditorial (docs/seo) et au contrôle d'unicité :
 * deux pages ne peuvent pas viser la même requête principale.
 */
export interface Cadrage {
  intention: 'informationnelle' | 'commerciale' | 'comparaison' | 'problème-solution' | 'méthode' | 'modèle' | 'référence' | 'navigation';
  motCle: string;
  variantes: string[];
  persona: string;
  objectif: string;
  difference: string;
}

export interface Section {
  h2: string;
  blocs: Bloc[];
}

export interface Guide {
  slug: string;
  /** Eyebrow */
  categorie: string;
  /** Titre court pour les index et le fil d'Ariane */
  nom: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  /** Réponse directe, en tête de page : ce qu'un moteur de réponse doit pouvoir citer */
  reponseCourte: string[];
  sections: Section[];
  /** Comparaison en deux colonnes, rendue avec le bloc .compare */
  comparaison?: { titre: string; intro?: string; lignes: { gauche: string; droite: string }[] };
  faq: { q: string; a: string }[];
  /** Maillage : guides et pages liés */
  liens: { href: string; label: string }[];
  sources?: { href: string; label: string }[];
  cloture: string;
  datePublished?: string;
  dateModified: string;
  /** Guides d'octobre 2026 et suivants. Absent sur les douze premiers guides. */
  type?: TypeDeGuide;
  /** Slug du pilier auquel la page est rattachée (un pilier se rattache à lui-même) */
  dossier?: string;
  /** Erreurs fréquentes : ce qui fait échouer la méthode décrite */
  erreurs?: string[];
  /** Ce que la page ne couvre pas, et vers qui se tourner */
  limites?: string[];
  cadrage?: Cadrage;
}

export const guides: Guide[] = [
  {
    slug: 'assistante-independante-ou-salariee',
    categorie: 'Décider',
    nom: 'Assistante indépendante ou salariée',
    title: 'Assistante indépendante ou salariée : le vrai calcul · BrittAssist',
    description:
      "Coût employeur, congés, recrutement, encadrement : comparer honnêtement une assistante salariée et une assistante indépendante externalisée.",
    h1: 'Assistante indépendante ou salariée : le calcul que personne ne fait.',
    lede:
      "La comparaison se fait presque toujours entre un salaire brut et un tarif de prestation. C’est la seule façon de se tromper à coup sûr, parce qu’un salaire ne représente qu’une partie du coût d’un poste — et parce qu’un poste n’achète pas la même chose qu’une prestation.",
    reponseCourte: [
      "Une assistante salariée coûte nettement plus que son salaire brut : il faut y ajouter les charges patronales, les congés payés, le matériel, le recrutement et le temps d’encadrement du dirigeant.",
      "Le client d’une assistante indépendante ne porte pas les charges d’un poste salarié, mais paie la prestation et ses éventuels frais ; il ne bénéficie pas d’une présence physique continue ni d’un lien de subordination.",
      "Le salariat devient pertinent lorsque le besoin est régulier, durable et demande une présence ou une disponibilité intégrée à l’entreprise.",
      "L’externalisation peut convenir à un périmètre plus souple, sans créer un poste ; le bon choix dépend du travail réel, du budget et du niveau de présence attendu.",
      "Le vrai critère n’est pas le prix mensuel, mais la régularité du besoin.",
    ],
    sections: [
      {
        h2: 'Ce que coûte réellement une assistante salariée',
        blocs: [
          {
            paragraphes: [
              "Le salaire brut est le point de départ, jamais le total. Pour un poste d’assistante administrative ou d’assistante de direction, le coût employeur complet se situe généralement bien au-dessus, une fois additionnés les éléments suivants.",
            ],
          },
          {
            h3: 'Les charges patronales',
            paragraphes: [
              "Le montant des cotisations patronales dépend de la rémunération, des allègements et de la situation de l’entreprise. Le simulateur Mon-entreprise de l’Urssaf permet d’estimer le coût total d’une embauche avec vos propres données ; faites vérifier le résultat pour votre cas par votre expert-comptable.",
            ],
          },
          {
            h3: 'Le temps réellement travaillé',
            paragraphes: [
              "Un salarié acquiert en principe cinq semaines de congés payés pour une année complète de travail. Les jours fériés, RTT éventuelles, formations et absences varient selon le contrat et l’entreprise. Pour comparer les options, partez de votre calendrier et de votre besoin de continuité plutôt que d’un nombre universel de jours travaillés.",
            ],
          },
          {
            h3: 'Le coût d’entrée',
            liste: [
              'Le recrutement : annonce, tri, entretiens, et le temps du dirigeant, qui est le poste le plus cher.',
              'La prise en main de vos outils, de vos interlocuteurs et de vos procédures, dont la durée varie selon le poste.',
              'Le poste de travail : matériel, licences logicielles, espace, téléphonie.',
              'Le risque d’échec du recrutement, qui remet le compteur à zéro.',
            ],
          },
          {
            h3: 'Le coût invisible : l’encadrement',
            paragraphes: [
              "Le temps d’encadrement compte aussi : priorités à donner, travail à vérifier, entretiens à tenir et absences à organiser. Son poids varie selon l’autonomie de la personne et la structure de l’entreprise ; il mérite d’être inclus dans la comparaison.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que coûte une assistante indépendante externalisée',
        blocs: [
          {
            paragraphes: [
              "Une prestation d’assistance externalisée se facture à l’heure, au forfait ou à la mission selon l’offre. Le client ne supporte pas les charges d’un poste salarié, mais doit comparer le prix du devis, les éventuels frais et le périmètre réellement couvert. Chez BrittAssist, les tarifs actuels sont nets de TVA selon les CGV : il n’y a donc pas de TVA facturée à récupérer sur cette prestation.",
              "Une prestataire indépendante organise son travail, mais le démarrage exige toujours un cadrage : priorités, accès, interlocuteurs et décisions qui restent au dirigeant. Ce temps fait partie de la comparaison.",
              "En contrepartie, vous n’achetez pas une présence : vous achetez un résultat sur un périmètre défini. Il n’y a ni exclusivité, ni disponibilité physique permanente, ni lien de subordination — et il ne peut pas y en avoir, sous peine de requalification de la relation.",
            ],
          },
        ],
      },
      {
        h2: 'Comment trancher, concrètement',
        blocs: [
          {
            paragraphes: [
              "La question n’est pas « lequel est le moins cher », mais « mon besoin est-il constant ? ». Trois indices suffisent à décider.",
            ],
            liste: [
              'Le volume : un besoin stable et durable peut justifier un poste ; une charge variable ou limitée à quelques domaines peut orienter vers l’externalisation.',
              'La présence : si le travail exige d’être physiquement dans vos locaux — accueil, gestion d’un site, manipulation de matériel — la question est tranchée d’avance.',
              'Votre disponibilité de manager : si vous n’avez pas de temps à consacrer à l’encadrement d’un nouveau poste, recruter aggravera votre situation avant de l’améliorer.',
            ],
          },
          {
            paragraphes: [
              "Une autre possibilité consiste à externaliser une partie du travail, puis à recruter si le besoin devient durable et clairement défini. Le suivi des demandes aide alors à écrire une fiche de poste à partir de tâches observées.",
            ],
          },
        ],
      },
    ],
    comparaison: {
      titre: 'Ce que chacune achète réellement',
      intro:
        "Les deux options ne sont pas deux prix pour le même service. Elles achètent des choses différentes.",
      lignes: [
        {
          gauche: 'Une assistante salariée',
          droite:
            'Une présence définie par le contrat de travail, une disponibilité intégrée à l’entreprise et des tâches encadrées par le poste. En échange : un coût employeur et un management à prévoir.',
        },
        {
          gauche: 'Une assistante indépendante',
          droite:
            'Une prise en charge sur un périmètre défini, sans créer de poste salarié. En échange : un devis à cadrer, une phase de mise en route et pas de présence physique continue.',
        },
        {
          gauche: 'Un Private Office externalisé',
          droite:
            'Une assistance indépendante, avec un interlocuteur unique et stable, un périmètre large — professionnel et personnel — et un fonctionnement en boucle fermée plutôt qu’à la tâche.',
        },
      ],
    },
    faq: [
      {
        q: 'Une assistante indépendante coûte-t-elle plus cher de l’heure ?',
        a: "Presque toujours, oui, et c’est normal : le tarif horaire d’un indépendant intègre ses charges, ses congés, son matériel, son assurance et ses périodes non facturées. La comparaison pertinente ne se fait pas de l’heure à l’heure, mais entre un coût annuel complet d’un côté et un coût annuel de prestation de l’autre — à volume de travail réellement équivalent.",
      },
      {
        q: 'Puis-je faire travailler une indépendante comme une salariée ?',
        a: "Non, et c’est un vrai risque juridique. Imposer des horaires, un lieu de travail, un lien de subordination ou une exclusivité de fait expose à une requalification en contrat de travail. Une prestation s’organise par périmètre et par résultat, pas par contrôle du temps de travail — c’est aussi ce qui la rend souple.",
      },
      {
        q: 'Et l’alternance ou le temps partagé ?',
        a: "Ce sont deux options intermédiaires réelles. Une alternance coûte peu mais demande beaucoup d’encadrement et de formation : c’est un investissement, pas un soulagement immédiat. Un temps partagé achète des demi-journées de présence chez vous, ce qui est pertinent si le travail exige d’être sur site, et moins si vous avez besoin d’une disponibilité répartie sur toute la semaine.",
      },
      {
        q: 'À partir de quel volume le recrutement devient-il plus rentable ?',
        a: "Il n’existe pas de seuil universel. Comparez un coût employeur simulé pour votre situation, le temps de travail réellement nécessaire et le devis d’externalisation à périmètre comparable.",
      },
    ],
    liens: [
      { href: '/guides/prix-assistante-de-direction-externalisee', label: 'Combien coûte une assistante externalisée' },
      { href: '/guides/comment-deleguer', label: 'Par quoi commencer quand on n’a jamais délégué' },
      { href: '/private-office', label: 'Comment fonctionne un Private Office' },
    ],
    sources: [
      { href: 'https://mon-entreprise.urssaf.fr/assistants', label: 'Urssaf — simulateur du coût total d’une embauche' },
      { href: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F2258', label: 'Service-Public — congés payés du salarié' },
      { href: 'https://www.urssaf.fr/accueil/employeur/embaucher-gerer-salaries/embaucher/declaration-prealable-embauche.html', label: 'Urssaf — lien de subordination et obligations d’embauche' },
    ],
    cloture: 'La bonne question n’est pas le prix. C’est la régularité du besoin.',
    dateModified: '2026-09-27',
  },

  {
    slug: 'prix-assistante-de-direction-externalisee',
    categorie: 'Décider',
    nom: 'Prix d’une assistante externalisée',
    title: 'Combien coûte une assistante de direction externalisée ? · BrittAssist',
    description:
      "Tarif horaire, forfait mensuel ou mission : comment comparer les devis d’assistance externalisée et comprendre le prix BrittAssist à partir de 590 € par mois.",
    h1: 'Combien coûte une assistante de direction externalisée ?',
    lede:
      "Un tarif horaire, un forfait d’heures et un accompagnement au périmètre ne couvrent pas le même service. Avant de comparer des montants, il faut comparer les demandes prises en charge, l’autonomie et la continuité attendues.",
    reponseCourte: [
      "Chez BrittAssist, Executive Essentials va de 590 à 790 € par mois, nets de TVA selon les CGV actuelles ; le périmètre exact figure dans une proposition personnalisée.",
      "Une mission ponctuelle et un accompagnement plus large sont chiffrés sur devis, avant le démarrage.",
      "Pour comparer d’autres offres, demandez ce qui est inclus, le niveau d’autonomie attendu, les frais éventuels et la façon dont les sujets sont suivis jusqu’au résultat.",
      "Il n’existe pas de prix de marché unique : le montant dépend de la durée, du périmètre, de l’expérience et du modèle de facturation.",
    ],
    sections: [
      {
        h2: 'Les quatre modèles de tarification, et ce qu’ils changent',
        blocs: [
          {
            h3: 'Le tarif horaire',
            paragraphes: [
              "C’est le plus lisible et le plus trompeur. Lisible, parce que vous savez ce que vous payez. Trompeur, parce qu’il crée un mauvais alignement : le prestataire est rémunéré au temps passé, et vous, vous voulez que le sujet soit clos vite. Il pousse aussi le client à compter, donc à hésiter avant chaque demande — ce qui annule une partie du bénéfice de la délégation.",
              "Il reste pertinent sur des tâches d’exécution simples, mesurables et sans continuité : de la saisie, du traitement de volume, une opération ponctuelle.",
            ],
          },
          {
            h3: 'Le forfait mensuel',
            paragraphes: [
              "Vous achetez un périmètre et une disponibilité, pas un compteur. L’intérêt est double : le prestataire a intérêt à ce que les choses soient bien faites du premier coup, et vous cessez de calculer avant d’envoyer une demande. C’est le modèle qui correspond à une prise en charge continue.",
              "Sa limite est réelle : un forfait suppose une volumétrie discutée honnêtement de part et d’autre. Si le périmètre déborde durablement, il doit être révisé plutôt que subi.",
            ],
          },
          {
            h3: 'Le forfait d’heures à consommer',
            paragraphes: [
              "Certains prestataires proposent un volume d’heures par mois. Vérifiez si les heures non utilisées sont reportées, si les dépassements sont facturés et quels sujets entrent dans le forfait. Ce modèle convient quand le volume se mesure facilement.",
            ],
          },
          {
            h3: 'La mission ponctuelle',
            paragraphes: [
              "Un prix fixe pour un objet défini : l’organisation d’un déplacement, la reprise d’un retard de facturation, un dossier de candidature, l’organisation d’un événement. C’est le bon format quand le besoin n’a pas vocation à se répéter, et c’est souvent une bonne façon de commencer.",
            ],
          },
        ],
      },
      {
        h2: 'Pourquoi les écarts de prix sont aussi importants',
        blocs: [
          {
            paragraphes: [
              "Trois facteurs aident à comprendre pourquoi deux devis peuvent être très différents.",
            ],
            liste: [
              'Le niveau d’autonomie. Exécuter une consigne précise et prendre en charge un sujet flou jusqu’à sa résolution ne demandent ni la même expérience ni le même jugement. Le premier se délègue à bas coût ; le second est ce que vous cherchez si vous êtes saturé.',
              'La continuité de l’interlocuteur. Un contact stable peut conserver votre contexte et vos préférences ; demandez comment chaque offre assure la transmission et le suivi des demandes.',
              'Le cadre de service. Comparez le contrat, la confidentialité, les accès aux données, les horaires convenus et les frais. Ces points doivent être vérifiés pour chaque prestataire, quel que soit son lieu d’exercice.',
            ],
          },
        ],
      },
      {
        h2: 'Comment estimer votre budget en dix minutes',
        blocs: [
          {
            paragraphes: [
              "Le calcul ne part pas d’un tarif mais de votre propre temps. Il tient en quatre étapes.",
            ],
            liste: [
              'Notez pendant une semaine tout ce que vous faites et qui ne demande pas votre niveau de compétence : classement, relances, réservations, mise en forme, recherches, prise de rendez-vous.',
              'Additionnez ces plages de temps pour obtenir votre propre volume de départ, sans supposer qu’il sera identique à celui d’une autre entreprise.',
              'Valorisez cette durée à votre propre coût horaire — celui de votre TJM, de votre marge horaire, ou du chiffre d’affaires que vous générez par heure travaillée.',
              'Comparez ensuite les devis sur un périmètre équivalent, en tenant compte du temps que vous garderez pour cadrer et valider les demandes.',
            ],
          },
          {
            paragraphes: [
              "Chez BrittAssist, Executive Essentials va de 590 à 790 € par mois, nets de TVA selon les CGV actuelles. Ce n’est ni un volume d’heures ni un catalogue : c’est un périmètre défini au premier échange, puis précisé dans la proposition personnalisée.",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Pourquoi ne pas afficher un nombre d’heures ?',
        a: "Parce qu’un compteur d’heures change le comportement du client : on hésite avant d’envoyer une demande, on garde les petits sujets, et on retrouve exactement la charge mentale qu’on voulait supprimer. Un périmètre clair, discuté honnêtement, rend le service utilisable.",
      },
      {
        q: 'Y a-t-il des frais en plus du forfait ?',
        a: "Les frais engagés pour votre compte — billets, hôtels, réservations, achats — sont refacturés à l’euro près, sur justificatifs, sans marge. Ils ne sont pas inclus dans le forfait et ne sont jamais engagés sans accord préalable.",
      },
      {
        q: 'Le forfait est-il engageant ?',
        a: "Les modalités exactes figurent au devis et aux conditions générales. Selon les CGV actuelles de BrittAssist, l’accompagnement mensuel est conclu pour une durée indéterminée et peut être résilié avec un préavis d’un mois par e-mail. Un périmètre qui ne correspond plus au besoin se rediscute.",
      },
      {
        q: 'Une offre horaire moins chère revient-elle toujours moins cher ?',
        a: "Cela dépend de la tâche et du temps de coordination que vous gardez. Pour un travail simple et bien défini, une offre horaire peut convenir. Pour des sujets qui demandent du contexte et des relances, comparez aussi le temps nécessaire pour expliquer, vérifier et reprendre le travail.",
      },
    ],
    liens: [
      { href: '/guides/assistante-independante-ou-salariee', label: 'Indépendante ou salariée : le vrai calcul' },
      { href: '/guides/assistante-virtuelle-ou-private-office', label: 'Assistante virtuelle ou Private Office' },
      { href: '/tarifs', label: 'Les tarifs et le devis BrittAssist' },
      { href: '/services', label: 'Le périmètre couvert' },
    ],
    sources: [
      { href: 'https://www.brittassist.fr/cgv', label: 'BrittAssist — conditions générales et modalités tarifaires' },
    ],
    cloture: 'Un prix se compare à ce qu’il libère, pas à un tarif horaire.',
    dateModified: '2026-09-27',
  },

  {
    slug: 'qu-est-ce-qu-un-private-office',
    categorie: 'Comprendre',
    nom: 'Qu’est-ce qu’un Private Office',
    title: 'Qu’est-ce qu’un Private Office externalisé ? · BrittAssist',
    description:
      "Définition, origine et fonctionnement d’un Private Office externalisé : ce que c’est, ce que ce n’est pas, et à qui cela s’adresse vraiment.",
    h1: 'Qu’est-ce qu’un Private Office externalisé ?',
    lede:
      "Le terme circule depuis quelques années sans définition stable. Il désigne pourtant quelque chose de précis, et assez différent de ce qu’on appelle habituellement une assistance administrative.",
    reponseCourte: [
      "Un Private Office est une fonction d’assistance privée, portée par un interlocuteur unique, qui prend en charge le quotidien d’un dirigeant de bout en bout — du côté professionnel comme du côté personnel.",
      "Externalisé, il donne le même niveau de prise en charge qu’un cabinet interne, sans créer de poste, sans encadrement et sans charge fixe.",
      "Il se distingue d’une assistance à la tâche par trois traits : un périmètre large, une continuité d’interlocuteur, et un fonctionnement en boucle fermée — un sujet confié revient résolu, pas commenté.",
      "Le terme vient du monde des family offices, où une structure privée gère l’ensemble des affaires d’une famille.",
      "Il s’adresse à des dirigeants dont la contrainte principale est le temps et l’attention, pas le budget.",
    ],
    sections: [
      {
        h2: 'D’où vient le terme',
        blocs: [
          {
            paragraphes: [
              "Le family office est une structure privée qui gère l’ensemble des affaires d’une famille fortunée : patrimoine, fiscalité, biens, personnel, déplacements, obligations. Son principe fondateur n’est pas la richesse mais la centralisation — une seule entité connaît tout, coordonne tout, et évite au principal intéressé d’avoir à faire l’interface entre quinze interlocuteurs.",
              "Le Private Office transpose ce principe à l’échelle d’un dirigeant d’entreprise, en le limitant à l’organisation et à l’exécution du quotidien. Il ne gère pas de patrimoine, ne conseille pas, n’administre pas de biens. Il tient l’ensemble de ce qui doit être fait, et le fait.",
            ],
          },
        ],
      },
      {
        h2: 'Les trois traits qui le définissent',
        blocs: [
          {
            h3: 'Un périmètre large, qui traverse le professionnel et le personnel',
            paragraphes: [
              "C’est la différence la plus visible avec un secrétariat externalisé. Le contrôle technique du véhicule, le rendez-vous médical à décaler, la mutuelle à renégocier occupent la même place dans la tête d’un dirigeant qu’un dossier client — souvent davantage, parce qu’ils traînent depuis des mois. Un Private Office les prend parce que votre agenda ne les sépare pas.",
            ],
          },
          {
            h3: 'Un interlocuteur unique et stable',
            paragraphes: [
              "Une même personne, qui apprend vos préférences, vos priorités, vos habitudes et vos interlocuteurs, et qui n’a plus à les redemander au bout d’un mois. C’est ce qui sépare structurellement un Private Office d’une plateforme où l’exécutant change à chaque demande : dans le second cas, le contexte est réexpliqué à chaque fois, et c’est vous qui payez ce temps.",
            ],
          },
          {
            h3: 'Une boucle fermée',
            paragraphes: [
              "Un sujet confié ne revient pas sous forme de question. Il revient avec un statut : terminé, en cours avec une date, en attente d’un tiers avec la prochaine relance déjà prévue, ou décision à prendre — auquel cas il arrive avec les options et une recommandation. C’est ce principe qui fait la différence entre déléguer et déplacer un problème.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que ce n’est pas',
        blocs: [
          {
            liste: [
              'Ce n’est pas une plateforme d’assistants virtuels : l’interlocuteur ne change pas.',
              'Ce n’est pas un forfait d’heures à consommer avant la fin du mois.',
              'Ce n’est pas un télésecrétariat : il n’y a pas de permanence téléphonique en continu.',
              'Ce n’est pas du conseil : un Private Office n’émet ni avis juridique, ni comptable, ni stratégique.',
              'Ce n’est pas une conciergerie de luxe : l’axe est l’organisation d’un dirigeant, pas l’accès à des privilèges.',
              'Ce n’est pas un outil ni une automatisation déguisée.',
            ],
          },
        ],
      },
      {
        h2: 'À qui cela s’adresse — et à qui cela ne s’adresse pas',
        blocs: [
          {
            paragraphes: [
              "Le profil type est un dirigeant, un indépendant ou un professionnel dont la ressource rare est l’attention, et qui a atteint le point où il devient lui-même le goulet d’étranglement de son activité. Cela se manifeste rarement par un manque de temps déclaré ; plutôt par des sujets qui traînent depuis des mois, des décisions repoussées faute d’éléments, et des semaines qui se terminent sans que rien n’ait été clos.",
              "À l’inverse, un Private Office n’est pas la bonne réponse si le besoin est une présence physique dans vos locaux, un accueil téléphonique permanent, un travail de production spécialisé — comptabilité, droit, développement, création — ou une charge de saisie massive et purement répétitive. Dans ces cas, d’autres solutions coûtent moins cher et font mieux.",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Quelle différence avec une assistante virtuelle ?',
        a: "L’assistance virtuelle est un modèle d’exécution à la tâche, souvent porté par une plateforme et un pool d’intervenants. Le Private Office est un modèle de prise en charge continue par un interlocuteur unique, sur un périmètre plus large et avec un niveau d’autonomie plus élevé. Ce sont deux réponses à deux problèmes différents.",
      },
      {
        q: 'Faut-il être une grande entreprise ?',
        a: "Non. La plupart des dirigeants concernés sont des indépendants, des professionnels libéraux ou des patrons de structures de moins de cinquante personnes — précisément ceux qui n’ont pas de fonction support et n’ont pas de quoi en créer une.",
      },
      {
        q: 'Le personnel est-il vraiment inclus ?',
        a: "Oui, dans les limites que vous fixez. Le périmètre personnel se définit au démarrage et se restreint librement : certains dirigeants confient toute la logistique du foyer, d’autres uniquement les démarches administratives, d’autres rien du tout.",
      },
      {
        q: 'Comment la confidentialité est-elle traitée ?',
        a: "Par un engagement contractuel signé avant tout accès, qui ne distingue pas les données professionnelles des données personnelles, avec des accès limités au périmètre convenu et révocables à tout moment. C’est un préalable, pas une option — un périmètre large sans cadre de confidentialité n’aurait aucun sens.",
      },
    ],
    liens: [
      { href: '/private-office', label: 'Comment fonctionne le Private Office, étape par étape' },
      { href: '/guides/assistante-virtuelle-ou-private-office', label: 'Assistante virtuelle ou Private Office' },
      { href: '/guides/executive-assistant-role', label: 'Le métier d’executive assistant' },
    ],
    cloture: 'Un cabinet privé, sans structure interne à créer.',
    dateModified: '2026-09-04',
  },

  {
    slug: 'assistante-virtuelle-ou-private-office',
    categorie: 'Comparer',
    nom: 'Assistante virtuelle ou Private Office',
    title: 'Assistante virtuelle ou Private Office ? · BrittAssist',
    description:
      "Plateforme d’assistants virtuels ou interlocuteur unique : ce que chaque modèle fait bien, ce qu’il fait mal, et comment choisir.",
    h1: 'Assistante virtuelle ou Private Office : lequel correspond à votre besoin ?',
    lede:
      "Les deux modèles sont présentés comme concurrents. Ils répondent en réalité à deux problèmes distincts, et le choix se fait moins sur le prix que sur la nature de ce que vous voulez confier.",
    reponseCourte: [
      "Une assistante virtuelle, généralement via une plateforme, exécute des tâches définies à la demande, souvent au tarif horaire et avec un intervenant qui peut changer.",
      "Un Private Office confie l’ensemble d’un périmètre à un interlocuteur unique et stable, au forfait, avec un niveau d’autonomie plus élevé.",
      "L’assistance virtuelle est plus efficace sur des tâches simples, répétitives, spécifiables en trois lignes et faciles à vérifier.",
      "Le Private Office est plus efficace sur des sujets flous, sensibles, qui demandent du contexte, de la relance et une décision finale claire.",
      "Le critère de choix : le temps qu’il vous faut pour briefer et vérifier. S’il approche du temps d’exécution, changez de modèle.",
    ],
    sections: [
      {
        h2: 'Ce que l’assistance virtuelle fait très bien',
        blocs: [
          {
            paragraphes: [
              "Il faut lui rendre justice : sur son terrain, elle est difficile à battre.",
            ],
            liste: [
              'Le prix. Selon la localisation, le tarif horaire peut être trois à cinq fois inférieur à celui d’une prestataire française.',
              'La montée en volume. Doubler la capacité sur un pic saisonnier se fait en quelques jours.',
              'La couverture horaire. Certaines plateformes couvrent des plages larges, y compris la nuit.',
              'Les tâches spécifiables. Saisie, recherche de contacts, mise en forme, tri de données, veille : si la consigne tient en trois lignes, le résultat est bon.',
            ],
          },
        ],
      },
      {
        h2: 'Où le modèle atteint sa limite',
        blocs: [
          {
            paragraphes: [
              "La limite n’est pas la compétence des personnes : elle est structurelle. Un modèle à la tâche, avec un intervenant potentiellement différent à chaque fois, ne peut pas accumuler de contexte. Trois conséquences en découlent.",
            ],
            liste: [
              'Le brief se répète. Ce que vous avez expliqué une fois doit l’être à nouveau, parce que la personne qui traite la demande n’est pas celle qui l’a traitée la fois précédente.',
              'L’exécution reste littérale. Une consigne appliquée à la lettre, sans jugement sur ce qui aurait dû être vérifié, produit un travail correct mais qui vous renvoie le problème dès que la réalité diverge de la consigne.',
              'La boucle reste ouverte. Un prestataire qui ne répond pas, une pièce manquante, une incohérence : dans un modèle à la tâche, cela revient vers vous sous forme de question. C’est exactement ce que vous vouliez éviter.',
            ],
          },
          {
            paragraphes: [
              "S’ajoutent deux points qui ne se voient qu’à l’usage : la confidentialité, quand le prestataire est établi hors de l’Union européenne et que le cadre juridique applicable devient difficile à faire valoir ; et la vérification, qui reste à votre charge et se paie en attention.",
            ],
          },
        ],
      },
      {
        h2: 'Le test des trois lignes',
        blocs: [
          {
            paragraphes: [
              "Il existe un test simple pour savoir quel modèle convient à une tâche donnée. Essayez de l’écrire en trois lignes, sans contexte, pour quelqu’un qui ne connaît ni votre entreprise ni vos habitudes.",
              "Si vous y arrivez — « extraire ces cinquante contacts », « mettre ce document au format », « comparer ces trois offres sur ces critères » — l’assistance virtuelle est un excellent choix, et souvent le plus économique.",
              "Si vous n’y arrivez pas — « fais en sorte que le dossier soit prêt vendredi », « le prestataire ne répond plus, débloque-le », « organise mon déplacement à Madrid » — alors la tâche exige du contexte et du jugement. Aucun brief court ne suffira, et vous passerez plus de temps à encadrer qu’à faire. C’est le terrain d’un Private Office.",
            ],
          },
        ],
      },
    ],
    comparaison: {
      titre: 'Les deux modèles, ligne à ligne',
      lignes: [
        {
          gauche: 'L’interlocuteur',
          droite:
            'Assistance virtuelle : variable, selon la disponibilité du pool. Private Office : une personne, stable, qui connaît votre contexte au bout d’un mois.',
        },
        {
          gauche: 'Le mode de facturation',
          droite:
            'Assistance virtuelle : à l’heure ou en crédits à consommer. Private Office : au forfait, sur un périmètre défini.',
        },
        {
          gauche: 'Le niveau d’autonomie',
          droite:
            'Assistance virtuelle : exécution d’une consigne. Private Office : prise en charge d’un objectif, jusqu’au résultat.',
        },
        {
          gauche: 'Ce qui revient vers vous',
          droite:
            'Assistance virtuelle : le livrable, et les questions restées ouvertes. Private Office : un statut, et une décision quand elle vous revient vraiment.',
        },
        {
          gauche: 'Le périmètre',
          droite:
            'Assistance virtuelle : professionnel, tâche par tâche. Private Office : professionnel et personnel, en continu.',
        },
      ],
    },
    faq: [
      {
        q: 'Peut-on combiner les deux ?',
        a: "Oui, et c’est souvent la configuration la plus rationnelle au-delà d’un certain volume : une plateforme pour le traitement de masse spécifiable, un interlocuteur unique pour tout ce qui demande du contexte et de la responsabilité. L’erreur est de vouloir faire faire l’un par l’autre.",
      },
      {
        q: 'Les plateformes ne proposent-elles pas un intervenant dédié ?',
        a: "Certaines le proposent, et cela règle une partie du problème du contexte. Restent alors trois différences : le mode de facturation à l’heure, l’étendue du périmètre — le personnel est rarement couvert — et le degré d’autonomie attendu sur un sujet flou.",
      },
      {
        q: 'Comment évaluer le coût réel d’un mauvais choix ?',
        a: "Mesurez sur deux semaines le temps que vous passez à briefer, relire, corriger et relancer. Rapporté au temps d’exécution de la tâche, ce ratio dit tout. Au-delà d’un tiers, le modèle n’est pas adapté à ce que vous confiez.",
      },
    ],
    liens: [
      { href: '/guides/qu-est-ce-qu-un-private-office', label: 'Qu’est-ce qu’un Private Office' },
      { href: '/guides/secretariat-externalise', label: 'Les formes de secrétariat externalisé' },
      { href: '/guides/prix-assistante-de-direction-externalisee', label: 'Les prix du marché' },
    ],
    cloture: 'Si le brief coûte autant que la tâche, ce n’est pas le bon modèle.',
    dateModified: '2026-09-04',
  },

  {
    slug: 'secretariat-externalise',
    categorie: 'Comprendre',
    nom: 'Le secrétariat externalisé',
    title: 'Secrétariat externalisé : cinq formes, un choix · BrittAssist',
    description:
      "Télésecrétariat, secrétariat administratif, office manager, assistance virtuelle, Private Office : cinq métiers derrière un mot, et lequel choisir.",
    h1: 'Secrétariat externalisé : cinq métiers derrière un seul mot.',
    lede:
      "« Secrétariat externalisé » désigne au moins cinq offres différentes, qui n’ont ni le même prix, ni le même fonctionnement, ni les mêmes cas d’usage. La plupart des déceptions viennent d’une confusion entre elles.",
    reponseCourte: [
      "Le télésecrétariat et la permanence téléphonique répondent aux appels entrants à votre place : c’est un métier de flux, facturé à l’appel ou au forfait d’appels.",
      "Le secrétariat administratif externalisé traite des tâches de gestion — saisie, courriers, classement, facturation — le plus souvent à l’heure.",
      "L’office manager à temps partagé vient dans vos locaux quelques demi-journées par semaine et gère la vie de la structure.",
      "L’assistance virtuelle exécute des tâches à la demande, souvent via une plateforme et un pool d’intervenants.",
      "Le Private Office prend en charge un périmètre complet — professionnel et personnel — avec un interlocuteur unique et une obligation de résultat sur chaque sujet.",
    ],
    sections: [
      {
        h2: 'Les cinq formes, en détail',
        blocs: [
          {
            h3: '1. Le télésecrétariat et la permanence téléphonique',
            paragraphes: [
              "Des opérateurs répondent à vos appels entrants sous votre nom, prennent les messages, filtrent, et parfois posent des rendez-vous dans votre agenda. C’est le métier du secteur médical, des artisans et de toutes les activités où un appel manqué est un client perdu.",
              "C’est un métier de flux : la valeur tient à la couverture horaire et à la constance du décroché. Facturation à l’appel, au forfait d’appels ou au temps de communication. Ce n’est pas une assistance de direction, et cela ne prétend pas l’être.",
            ],
          },
          {
            h3: '2. Le secrétariat administratif externalisé',
            paragraphes: [
              "Le traitement de tâches administratives identifiées : saisie, rédaction de courriers, classement, préparation de facturation, relances simples, gestion documentaire. Généralement à l’heure ou au forfait d’heures.",
              "C’est adapté à un besoin d’exécution : vous savez ce qu’il faut faire, il vous manque des bras. Cela l’est beaucoup moins quand ce qui vous manque, c’est quelqu’un qui décide de ce qu’il faut faire.",
            ],
          },
          {
            h3: '3. L’office manager à temps partagé',
            paragraphes: [
              "Une personne salariée d’un groupement d’employeurs ou indépendante, présente physiquement dans vos locaux une à trois demi-journées par semaine, qui gère la vie de la structure : fournisseurs, locaux, accueil, coordination interne, parfois RH administratif.",
              "C’est la bonne réponse quand le travail exige d’être sur place. Sa limite est symétrique : vos sujets attendent le jour de présence, ce qui convient mal à un dirigeant dont les demandes arrivent en continu.",
            ],
          },
          {
            h3: '4. L’assistance virtuelle',
            paragraphes: [
              "Des tâches confiées à la demande, souvent via une plateforme, avec un tarif horaire bas et un intervenant qui peut varier. Très efficace sur ce qui se spécifie en trois lignes, structurellement limité sur ce qui demande du contexte accumulé.",
            ],
          },
          {
            h3: '5. Le Private Office externalisé',
            paragraphes: [
              "Un périmètre complet confié à un interlocuteur unique et stable : administratif, agenda, déplacements, coordination, suivi des prestataires, et souvent une part personnelle. Facturation au forfait, sur un périmètre plutôt que sur un compteur, et un fonctionnement en boucle fermée.",
              "C’est le format le plus proche d’une assistante de direction interne, sans le poste, l’encadrement ni la charge fixe.",
            ],
          },
        ],
      },
      {
        h2: 'Comment choisir en une question',
        blocs: [
          {
            paragraphes: [
              "Demandez-vous ce qui manque réellement, et la réponse tombe presque toujours toute seule.",
            ],
            liste: [
              'Il manque quelqu’un pour décrocher → télésecrétariat.',
              'Il manque des bras sur des tâches connues → secrétariat administratif ou assistance virtuelle.',
              'Il manque quelqu’un sur place → office manager à temps partagé.',
              'Il manque quelqu’un qui décide de ce qu’il faut faire, et qui va jusqu’au bout → Private Office.',
            ],
          },
          {
            paragraphes: [
              "Un dernier repère, utile : si vous vous entendez dire « je n’ai même pas le temps d’expliquer ce que j’ai à faire faire », aucune offre facturée à l’heure ne vous soulagera. Ce que vous cherchez n’est pas de l’exécution, c’est de la prise en charge.",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Peut-on cumuler plusieurs de ces formes ?',
        a: "Oui, et c’est fréquent : un télésecrétariat pour les appels entrants, un Private Office pour l’organisation et le suivi. Ce sont des métiers complémentaires, avec des frontières nettes.",
      },
      {
        q: 'Le secrétariat externalisé est-il réservé aux petites structures ?',
        a: "Non. Des sociétés de plusieurs dizaines de salariés y ont recours, généralement pour la direction : une équipe administrative interne peut très bien exister sans que le dirigeant, lui, dispose du moindre support.",
      },
      {
        q: 'Comment vérifier le sérieux d’un prestataire ?',
        a: "Quatre points concrets : un numéro SIRET et une assurance responsabilité civile professionnelle, un engagement de confidentialité écrit, des conditions générales lisibles, et un interlocuteur nommé. Un prestataire qui refuse de dire ce qu’il ne fait pas mérite aussi qu’on s’en méfie.",
      },
    ],
    liens: [
      { href: '/guides/qu-est-ce-qu-un-private-office', label: 'Qu’est-ce qu’un Private Office' },
      { href: '/guides/assistante-virtuelle-ou-private-office', label: 'Assistante virtuelle ou Private Office' },
      { href: '/services', label: 'Le périmètre couvert par BrittAssist' },
    ],
    cloture: 'Le bon prestataire commence par vous dire ce qu’il ne fait pas.',
    dateModified: '2026-09-04',
  },

  {
    slug: 'comment-deleguer',
    categorie: 'Méthode',
    nom: 'Commencer à déléguer',
    title: 'Comment déléguer quand on n’a jamais délégué · BrittAssist',
    description:
      "Les quatre blocages qui empêchent de déléguer, la méthode pour identifier ce qui doit partir en premier, et ce que sont les trente premiers jours.",
    h1: 'Comment déléguer quand on n’a jamais délégué.',
    lede:
      "Presque tous les dirigeants savent ce qu’ils devraient déléguer. Très peu le font, et ce n’est pas une question de volonté : c’est qu’il manque une méthode pour la première fois.",
    reponseCourte: [
      "Commencez par les tâches à haute fréquence et à faible enjeu — pas par la plus lourde, qui est aussi la plus difficile à transmettre.",
      "Mesurez d’abord : notez pendant une semaine tout ce que vous faites et qui ne demande pas votre niveau de compétence.",
      "Déléguez un processus entier, jamais une étape isolée : une étape déléguée vous laisse toutes les autres.",
      "Acceptez que le premier mois soit moins efficace que de le faire vous-même. C’est un investissement, pas une perte.",
      "Ce qui ne se délègue pas : les décisions, la signature, la relation quand elle est le cœur de votre valeur.",
    ],
    sections: [
      {
        h2: 'Les quatre blocages, et ce qu’ils cachent',
        blocs: [
          {
            h3: '« C’est plus rapide de le faire moi-même »',
            paragraphes: [
              "C’est vrai la première fois, et faux à partir de la cinquième. Le raisonnement compare le coût de faire une fois au coût d’expliquer une fois, en oubliant que la tâche reviendra cinquante fois dans l’année. Le bon calcul n’est pas « expliquer ou faire », mais « expliquer une fois ou faire cinquante fois ».",
            ],
          },
          {
            h3: '« Personne ne le fera comme moi »',
            paragraphes: [
              "Souvent exact, et rarement important. La question utile n’est pas « est-ce que ce sera identique », mais « est-ce que ce sera suffisant ». Pour une réservation d’hôtel, une relance de devis ou un classement, un résultat à quatre-vingt-dix pour cent obtenu sans vous vaut mieux qu’un résultat parfait qui n’arrive jamais.",
            ],
          },
          {
            h3: '« C’est confidentiel »',
            paragraphes: [
              "C’est le blocage le plus légitime, et le seul qui se traite par le cadre plutôt que par la persuasion : engagement de confidentialité écrit et signé avant tout accès, accès limités au strict périmètre et révocables, interlocuteur unique et identifié. Beaucoup de dirigeants confient sans y penser leurs comptes à un cabinet et leurs dossiers à un avocat ; la différence n’est pas la sensibilité de l’information, c’est l’existence d’un cadre.",
            ],
          },
          {
            h3: '« Ça coûte trop cher »',
            paragraphes: [
              "Presque toujours faux quand on fait le calcul, et presque jamais fait. Valorisez les heures concernées à votre propre coût horaire, puis comparez. Le résultat surprend en général celui qui le fait — mais il faut avoir mesuré, et c’est l’étape que tout le monde saute.",
            ],
          },
        ],
      },
      {
        h2: 'La méthode, en quatre étapes',
        blocs: [
          {
            h3: 'Étape 1 — Mesurer une semaine',
            paragraphes: [
              "Pendant cinq jours, notez tout ce que vous faites et qui ne demande pas votre niveau de compétence. Une ligne, une durée approximative. Ne triez pas, ne jugez pas : notez. La plupart des dirigeants découvrent entre cinq et douze heures par semaine, réparties en fragments de dix minutes qui n’apparaissaient nulle part.",
            ],
          },
          {
            h3: 'Étape 2 — Trier sur deux axes',
            paragraphes: [
              "Classez chaque ligne selon deux critères : sa fréquence, et son enjeu en cas d’erreur.",
            ],
            liste: [
              'Fréquence élevée, enjeu faible → à déléguer en premier. Réservations, classement, relances de routine, prise de rendez-vous, mise en forme.',
              'Fréquence élevée, enjeu fort → à déléguer ensuite, avec une validation avant envoi. Facturation, courriers qui engagent, relances clients.',
              'Fréquence faible, enjeu faible → à déléguer aussi, mais sans urgence.',
              'Fréquence faible, enjeu fort → à garder. Ce sont vos décisions.',
            ],
          },
          {
            h3: 'Étape 3 — Confier un processus, pas une étape',
            paragraphes: [
              "L’erreur classique consiste à déléguer la partie visible d’un sujet — « envoie cette facture » — en gardant tout le reste : la vérification, l’émission suivante, le suivi de l’encaissement, la relance. Vous restez alors le coordinateur, ce qui est précisément la charge dont vous vouliez vous défaire.",
              "Confiez un processus complet, avec un résultat attendu et une limite claire : « la facturation part le 1er, les relances suivent, et tu me remontes uniquement les blocages ». La charge mentale disparaît seulement quand la boucle est fermée de bout en bout.",
            ],
          },
          {
            h3: 'Étape 4 — Accepter le premier mois',
            paragraphes: [
              "Le premier mois est toujours le moins rentable : il y a des questions, des corrections, des préférences à expliquer. C’est normal et c’est temporaire. À partir du deuxième mois, le nombre d’allers-retours chute nettement, et c’est le meilleur indicateur que le contexte est acquis. Abandonner au bout de trois semaines revient à payer l’investissement sans jamais toucher le retour.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qui ne se délègue pas',
        blocs: [
          {
            paragraphes: [
              "Une délégation saine se définit autant par ses limites que par son périmètre. Trois choses restent chez le dirigeant, toujours.",
            ],
            liste: [
              'Les décisions qui engagent : prix, conditions, recrutements, investissements, arbitrages stratégiques.',
              'La signature, et tout ce qui vaut engagement.',
              'La relation quand elle constitue votre valeur : un client important, un partenaire historique, une négociation en cours.',
            ],
          },
          {
            paragraphes: [
              "Tout le reste — c’est-à-dire l’essentiel de ce qui remplit une semaine — est délégable. La difficulté n’a jamais été de savoir quoi. Elle a toujours été de commencer.",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Par quoi commencer si je ne dois choisir qu’une chose ?',
        a: "La facturation et les relances, dans la quasi-totalité des cas. C’est fréquent, mesurable, immédiatement rentable, et c’est ce que les dirigeants repoussent le plus — alors que c’est le geste le plus directement lié à leur trésorerie.",
      },
      {
        q: 'Combien de temps avant de sentir la différence ?',
        a: "Sur des tâches simples, quelques jours. Sur une prise en charge large, comptez un mois pour le rodage et deux à trois pour l’effet réel : c’est le temps qu’il faut pour que le contexte soit acquis et que les allers-retours disparaissent.",
      },
      {
        q: 'Comment garder le contrôle sans tout vérifier ?',
        a: "Par le statut, pas par le contrôle. Un point régulier qui dit ce qui est terminé, ce qui est en cours, ce qui est en attente et ce qui appelle une décision remplace la vérification tâche par tâche — et prend dix minutes au lieu d’une heure.",
      },
      {
        q: 'Et si ça ne marche pas ?',
        a: "Cela arrive, et c’est presque toujours l’un de trois motifs : un périmètre mal défini, une étape déléguée au lieu d’un processus, ou un abandon avant la fin du rodage. Les trois se corrigent, à condition d’en parler au premier mois plutôt qu’au troisième.",
      },
    ],
    liens: [
      { href: '/guides/assistante-independante-ou-salariee', label: 'Indépendante ou salariée' },
      { href: '/guides/modele-brief-assistante-externalisee', label: 'Rédiger sa première demande' },
      { href: '/private-office', label: 'Le fonctionnement, étape par étape' },
      { href: '/contact', label: 'Faire le point sur votre organisation' },
    ],
    cloture: 'La difficulté n’a jamais été de savoir quoi déléguer.',
    dateModified: '2026-09-04',
  },

  {
    slug: 'executive-assistant-role',
    categorie: 'Comprendre',
    nom: 'Le métier d’executive assistant',
    title: 'Executive assistant : définition, rôle et différences · BrittAssist',
    description:
      "Ce que fait réellement une executive assistant, en quoi le métier diffère d’une assistante administrative, et ce que change l’exercice externalisé.",
    h1: 'Executive assistant : ce que recouvre réellement le métier.',
    lede:
      "Le titre est souvent employé comme une version anglaise d’« assistante de direction ». Le métier qu’il désigne dans la pratique est plus précis, et plus exigeant, que ce que le mot laisse entendre.",
    reponseCourte: [
      "Une executive assistant assiste une personne — un dirigeant — et non un service : son périmètre est défini par les besoins de cette personne, pas par une fonction de l’entreprise.",
      "Son travail principal n’est pas l’exécution mais l’arbitrage : décider de ce qui mérite l’attention du dirigeant et de ce qui n’en a pas besoin.",
      "Elle se distingue d’une assistante administrative, qui traite des processus, et d’un office manager, qui gère la vie d’une structure.",
      "Les compétences qui la définissent sont le jugement, la discrétion, l’anticipation et la capacité à fermer un sujet sans renvoyer la question.",
      "En externalisé, le métier est identique : ce qui change est le cadre contractuel, l’absence de présence physique et le mode de facturation.",
    ],
    sections: [
      {
        h2: 'Assister une personne, pas un service',
        blocs: [
          {
            paragraphes: [
              "C’est la caractéristique fondatrice du métier. Une assistante commerciale sert le service commercial ; une assistante de gestion sert la gestion. Une executive assistant sert un dirigeant, ce qui signifie que son périmètre suit les besoins de cette personne — quels qu’ils soient, et y compris quand ils traversent la frontière entre professionnel et personnel.",
              "Cela a une conséquence directe sur la nature du travail : il n’est pas répétitif. Une même semaine peut mêler la préparation d’un comité, l’organisation d’un déplacement à l’étranger, le déblocage d’un prestataire, la relance de trois impayés et la prise d’un rendez-vous médical. Ce qui est constant, ce n’est pas la tâche, c’est la personne servie.",
            ],
          },
        ],
      },
      {
        h2: 'Le cœur du métier : l’arbitrage',
        blocs: [
          {
            paragraphes: [
              "Ce qu’une bonne executive assistant apporte n’est pas de faire plus de choses. C’est de décider, en permanence, ce qui doit remonter au dirigeant et ce qui ne doit pas.",
              "Un dirigeant reçoit chaque jour des dizaines de sollicitations dont la grande majorité n’exige pas son jugement — mais consomme son attention rien qu’en étant lue. Filtrer suppose de comprendre ce qui compte réellement pour lui, ce qui n’est pas urgent malgré les apparences, et ce qui doit l’atteindre immédiatement même si personne ne l’a signalé comme important.",
              "C’est aussi ce qui explique que le métier ne s’apprenne pas en un mois. La compétence technique s’acquiert vite ; le jugement sur une personne donnée demande d’avoir observé ses arbitrages sur plusieurs dizaines de sujets.",
            ],
          },
        ],
      },
      {
        h2: 'Les quatre compétences réelles',
        blocs: [
          {
            liste: [
              'L’anticipation. Voir la conséquence d’un rendez-vous sur le reste de la semaine, l’échéance qui approche, la pièce qui manquera, le trajet qui ne tiendra pas.',
              'La discrétion. Le métier donne accès à des informations financières, commerciales et personnelles. Elle n’est pas un supplément de savoir-vivre : elle est la condition d’exercice.',
              'La capacité à fermer. Rendre un sujet clos, ou clos avec une décision unique à prendre. Un sujet renvoyé sous forme de question n’a pas été traité, il a été déplacé.',
              'La tenue de la relation. Représenter le dirigeant auprès de clients, de partenaires et d’équipes suppose un registre, un ton et une constance qui engagent son image.',
            ],
          },
        ],
      },
      {
        h2: 'Executive assistant, assistante administrative, office manager',
        blocs: [
          {
            paragraphes: [
              "Les trois métiers se recoupent en surface et diffèrent par leur objet.",
            ],
            liste: [
              'L’assistante administrative traite des processus : facturation, courriers, dossiers, saisie, classement. Son unité de travail est la tâche, et elle peut servir plusieurs personnes.',
              'L’office manager gère la vie d’une structure : locaux, fournisseurs, accueil, coordination interne, parfois administration RH. Son unité de travail est l’organisation, et elle exige en général une présence sur site.',
              'L’executive assistant sert une personne. Son unité de travail est le sujet, du besoin exprimé jusqu’à sa résolution, quel que soit le domaine.',
            ],
          },
        ],
      },
      {
        h2: 'Ce que change l’exercice en externalisé',
        blocs: [
          {
            paragraphes: [
              "Le métier est le même ; le cadre diffère sur quatre points, qu’il vaut mieux connaître avant de choisir.",
            ],
            liste: [
              'Pas de présence physique continue. Ce qui exige d’être sur site — accueil, gestion de locaux, manipulation de documents papier au quotidien — sort du périmètre.',
              'Pas d’exclusivité. Une prestataire indépendante accompagne plusieurs dirigeants, ce qui borne mécaniquement le nombre de clients qu’elle peut servir correctement.',
              'Pas de lien de subordination. Le travail s’organise par périmètre et par résultat, jamais par contrôle du temps de travail — c’est une exigence juridique autant qu’un mode de fonctionnement.',
              'Une réversibilité réelle. Pas de recrutement, pas de charge fixe, pas de rupture à gérer : l’engagement se révise dans les deux sens.',
            ],
          },
          {
            paragraphes: [
              "En contrepartie, l’externalisation supprime le principal obstacle rencontré par les structures qui auraient besoin d’une executive assistant sans pouvoir en salarier une : le volume. La fonction existe dès que le besoin apparaît, sans attendre qu’il justifie un poste à temps plein.",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Executive assistant et assistante de direction, est-ce la même chose ?',
        a: "En théorie oui, le terme anglais étant l’équivalent du terme français. En pratique, « executive assistant » désigne plus souvent un poste rattaché à une personne, avec un périmètre large et un niveau d’autonomie élevé, quand « assistante de direction » recouvre parfois un rôle plus administratif au service d’une direction.",
      },
      {
        q: 'Une executive assistant prend-elle des décisions ?',
        a: "Elle prend toutes les décisions d’exécution — quel créneau, quel hôtel, quel prestataire, quel ordre de priorité — et aucune décision d’engagement. Les prix, les conditions, les signatures et les arbitrages stratégiques restent au dirigeant. La frontière est nette, et elle se pose au démarrage.",
      },
      {
        q: 'Faut-il parler anglais dans ce métier ?',
        a: "Dès qu’il y a des interlocuteurs, des fournisseurs ou des déplacements à l’étranger, oui. Rédiger un message qui engage l’entreprise dans une langue étrangère prend trois fois plus de temps à quelqu’un qui n’en a pas l’habitude — c’est l’une des raisons les plus fréquentes de déléguer.",
      },
      {
        q: 'Combien de dirigeants une executive assistant externalisée peut-elle suivre ?',
        a: "Peu, si le travail est fait sérieusement. La qualité du service repose sur le contexte accumulé et la disponibilité réelle : au-delà d’un petit nombre d’accompagnements simultanés, l’un des deux se dégrade nécessairement. C’est une question qu’il est légitime de poser avant de s’engager.",
      },
    ],
    liens: [
      { href: '/guides/qu-est-ce-qu-un-private-office', label: 'Qu’est-ce qu’un Private Office' },
      { href: '/guides/secretariat-externalise', label: 'Les cinq formes de secrétariat externalisé' },
      { href: '/a-propos', label: 'Le parcours de Brittany Dreano' },
    ],
    cloture: 'Le métier ne consiste pas à faire plus. Il consiste à trier mieux.',
    dateModified: '2026-09-04',
  },
  {
    slug: 'confidentialite-assistante-externalisee',
    categorie: 'Organiser',
    nom: 'Confidentialité et accès à distance',
    title: 'Assistante externalisée et confidentialité : les accès · BrittAssist',
    description: "Documents, messagerie, agenda et données clients : comment cadrer les accès et la confidentialité d’une assistante externalisée, sans partager tous vos comptes.",
    h1: 'Comment travailler avec une assistante externalisée sans perdre le contrôle de vos données ?',
    lede: "Déléguer suppose de transmettre des informations. Cela ne suppose pas d’ouvrir toute votre messagerie, de partager votre mot de passe principal ou de laisser des accès actifs après la mission.",
    reponseCourte: [
      "Définissez les tâches confiées avant les accès : une personne ne reçoit que les documents et droits nécessaires à son périmètre.",
      "Privilégiez un compte nominatif avec des permissions limitées et une authentification renforcée quand l’outil le permet. Évitez les identifiants partagés.",
      "Prévoyez par écrit la confidentialité, les instructions de traitement des données personnelles et la fin des accès. Les clauses exactes dépendent de votre activité et se valident avec votre conseil.",
      "Au démarrage, testez l’organisation sur un petit nombre de dossiers. À la fin, retirez les accès et récupérez les livrables dans un format utilisable sans la prestataire.",
    ],
    sections: [
      {
        h2: 'Commencer par le périmètre, pas par les mots de passe',
        blocs: [
          { paragraphes: ["Listez les demandes à déléguer : tenir un agenda, préparer les pièces du comptable, émettre des factures, suivre des réservations. Pour chaque demande, indiquez quelles données sont indispensables et qui valide l’action finale. Ce tri rend les droits d’accès beaucoup plus simples à attribuer."] },
          { h3: 'Un exemple concret', paragraphes: ["Pour préparer des pièces comptables, un dossier partagé contenant les justificatifs utiles peut suffire. L’accès à toute la boîte mail du dirigeant, à l’ensemble du stockage et aux comptes bancaires n’est pas une condition normale de cette tâche. Si un outil impose des droits trop larges, convenez d’une autre façon de transmettre les éléments."] },
          { h3: 'Une limite explicite', paragraphes: ["BrittAssist ne réalise ni tenue comptable, ni déclaration fiscale, ni acte juridique. Les documents sont rassemblés et suivis en lien avec les professionnels compétents. Les décisions et signatures restent à votre main."] },
        ],
      },
      {
        h2: 'Créer des accès que vous pouvez contrôler et retirer',
        blocs: [
          { liste: [
            'Créer, quand c’est possible, un compte nominatif distinct pour la prestataire.',
            'Limiter chaque droit à l’outil, au dossier et à la durée nécessaires.',
            'Activer l’authentification multifacteur sur les outils qui le proposent.',
            'Tenir une liste des comptes, dossiers partagés et personnes qui peuvent y accéder.',
            'Prévoir la suppression ou la révocation de ces droits à la fin de la mission.',
          ] },
          { paragraphes: ["Pour l’agenda, la délégation ou le partage d’un calendrier est souvent préférable à l’envoi du mot de passe du compte principal. Pour les documents, un espace partagé réservé à la mission facilite à la fois le suivi et la sortie. Le bon réglage dépend des outils déjà utilisés dans votre entreprise."] },
        ],
      },
      {
        h2: 'Clarifier les données personnelles et la confidentialité',
        blocs: [
          { paragraphes: ["Si la mission implique de traiter des données personnelles pour votre compte, le rôle de chacun et les instructions de traitement doivent être examinés. La CNIL rappelle que la sous-traitance de données personnelles se cadre par contrat et par des garanties de sécurité adaptées. Une clause générale de confidentialité ne règle pas à elle seule tous les sujets de protection des données."] },
          { paragraphes: ["Posez les questions avant de transmettre un fichier : qui y accède, pour quelle tâche, où il est stocké, combien de temps il reste nécessaire et comment il sera restitué ou supprimé ? En cas de données sensibles ou de secteur réglementé, faites valider le dispositif par votre conseil et le responsable de la protection des données, s’il y en a un."] },
          { h3: 'Notre périmètre', paragraphes: ["Pour un cabinet de santé, BrittAssist intervient sur l’administration de l’entreprise et l’organisation du praticien, sans accès aux dossiers patients ni aux données de santé. Le cadrage initial sert aussi à tracer cette frontière."] },
        ],
      },
      {
        h2: 'Terminer la mission proprement',
        blocs: [
          { paragraphes: ["Une bonne sortie se prépare dès le départ. Réunissez les dossiers et échéances dans un emplacement qui vous appartient. Demandez un état des sujets terminés, en cours et en attente. Révoquez les accès nominatifs, vérifiez les partages de dossiers et décidez du sort des copies de travail selon le contrat."] },
          { paragraphes: ["Le résultat attendu est simple : votre activité doit continuer avec ses documents, ses échéances et ses historiques, même si la personne qui vous accompagne change."] },
        ],
      },
    ],
    faq: [
      { q: 'Faut-il donner accès à toute ma boîte mail ?', a: "Non. Selon la mission, un dossier partagé, une adresse dédiée, une délégation limitée ou un transfert ciblé peuvent suffire. L’accès global doit être justifié par un besoin réel et encadré." },
      { q: 'Puis-je transmettre mon mot de passe ?', a: "Évitez les identifiants partagés. Un compte distinct ou une fonction de délégation permet de savoir qui a fait quoi et de couper l’accès sans changer le mot de passe principal." },
      { q: 'Une clause de confidentialité suffit-elle pour le RGPD ?', a: "Pas nécessairement. Si la prestataire traite des données personnelles pour votre compte, il faut examiner les obligations de sous-traitance et les mesures de sécurité adaptées avec un professionnel compétent." },
      { q: 'Que se passe-t-il à la fin de la collaboration ?', a: "Les livrables et l’état des dossiers vous sont remis, les accès sont retirés et le sort des copies de travail est traité selon le contrat. Cette étape doit être prévue dès le démarrage." },
    ],
    liens: [
      { href: '/guides/premier-mois-assistante-externalisee', label: 'Organiser le premier mois' },
      { href: '/guides/choisir-assistante-externalisee', label: 'Choisir une assistante externalisée' },
      { href: '/guides/comment-deleguer', label: 'Choisir les premières tâches à déléguer' },
      { href: '/assistante-independante/a-distance', label: 'Comment fonctionne l’accompagnement à distance' },
    ],
    sources: [
      { href: 'https://www.cnil.fr/fr/qualification-juridique-sous-traitance', label: 'CNIL — qualification juridique de la sous-traitance' },
      { href: 'https://www.cnil.fr/fr/securite-gerer-la-sous-traitance', label: 'CNIL — sécurité et gestion de la sous-traitance' },
    ],
    cloture: 'Un accès utile est un accès précis, traçable et révocable.',
    datePublished: '2026-09-27',
    dateModified: '2026-09-27',
  },
  {
    slug: 'premier-mois-assistante-externalisee',
    categorie: 'Organiser',
    nom: 'Le premier mois avec une assistante externalisée',
    title: 'Premier mois avec une assistante externalisée : le plan · BrittAssist',
    description: "Un plan concret sur quatre semaines pour déléguer à une assistante externalisée : périmètre, accès, premières demandes, suivi et ajustement.",
    h1: 'Le premier mois avec une assistante externalisée : que préparer ?',
    lede: "Le démarrage n’exige pas un manuel de procédures. Il exige de savoir ce qui vous prend du temps, qui décide, où se trouvent les informations et à quoi ressemble une demande terminée.",
    reponseCourte: [
      "Semaine 1 : choisissez trois types de demandes récurrentes, les interlocuteurs concernés et les décisions que vous souhaitez conserver.",
      "Semaine 2 : mettez en place un canal de demande et des accès limités aux seuls dossiers utiles ; envoyez de vraies demandes de faible risque.",
      "Semaine 3 : vérifiez que chaque sujet revient avec un statut clair : terminé, en cours, en attente ou décision nécessaire.",
      "Semaine 4 : faites le point sur les demandes closes, les blocages, les accès et le périmètre du mois suivant.",
    ],
    sections: [
      {
        h2: 'Avant le premier échange : repérer les demandes qui reviennent',
        blocs: [
          { paragraphes: ["Pendant une semaine, notez les sujets qui reviennent sans chercher à les classer parfaitement : un rendez-vous à confirmer, un document à retrouver, un fournisseur à relancer, une facture à émettre, un trajet à organiser. Les tâches que vous remettez régulièrement au soir sont souvent de bons premiers candidats."] },
          { paragraphes: ["Choisissez ensuite trois catégories. Pour chacune, indiquez le résultat souhaité, la personne à contacter si une information manque et le moment où votre accord reste nécessaire. Cette liste de départ est plus utile qu’un inventaire de cinquante tâches théoriques."] },
        ],
      },
      {
        h2: 'Semaine 1 : fixer les limites et le rythme',
        blocs: [
          { liste: [
            'Désigner le canal où les demandes entrent et celui où les urgences se signalent.',
            'Définir ce qui peut être décidé sans vous et ce qui demande votre validation.',
            'Choisir un format court pour le suivi des sujets ouverts.',
            'Lister les outils et les documents nécessaires, puis créer les accès adaptés.',
          ] },
          { paragraphes: ["Une demande claire n’a pas besoin d’être longue. « Confirmez le rendez-vous avec le cabinet avant jeudi, puis ajoutez-le à mon agenda » contient déjà un objectif, un délai et un résultat vérifiable. Si un élément manque, la prestataire doit poser la question une fois et poursuivre."] },
        ],
      },
      {
        h2: 'Semaines 2 et 3 : travailler sur des cas réels',
        blocs: [
          { paragraphes: ["Commencez avec des sujets qui comptent mais dont l’erreur se corrige facilement : prise de rendez-vous, comparaison de trajets, préparation de pièces, relance d’un prestataire. Gardez les engagements financiers, les signatures et les accès sensibles pour une étape où la méthode est éprouvée."] },
          { paragraphes: ["Demandez un retour sur chaque dossier : terminé, en cours, en attente d’un tiers ou décision nécessaire de votre part. Si le statut « en cours » persiste sans prochaine action ni date, la demande n’est pas vraiment suivie. Le point hebdomadaire sert à lever ces blocages, pas à refaire toutes les demandes."] },
          { h3: 'Exemple de suivi', paragraphes: ["« Hôtel pour mardi : deux options comparées, option A recommandée pour sa proximité, réservation en attente de votre accord sur le budget avant vendredi 12 h. » Vous gardez l’arbitrage, sans refaire la recherche."] },
        ],
      },
      {
        h2: 'Semaine 4 : décider ce qui reste dans le périmètre',
        blocs: [
          { paragraphes: ["Reprenez les sujets confiés et demandez-vous lesquels ont été clos sans vous revenir, lesquels ont bloqué et pourquoi. Vérifiez aussi si les accès sont adaptés : ni insuffisants pour travailler, ni trop larges pour le périmètre réel."] },
          { paragraphes: ["Le mois suivant peut élargir une catégorie qui fonctionne, retirer une tâche rarement utile ou préciser les délais de réponse. Si votre besoin est devenu une présence physique quotidienne ou un poste à encadrer, il faut envisager une autre organisation. Le bon périmètre est celui qui tient dans la durée."] },
        ],
      },
    ],
    faq: [
      { q: 'Dois-je préparer toutes mes procédures avant de commencer ?', a: "Non. Trois catégories de demandes réelles, leurs résultats attendus et les décisions qui restent à votre main suffisent pour démarrer. La procédure utile se précise avec les premiers cas." },
      { q: 'Quelles tâches confier en premier ?', a: "Celles qui reviennent souvent, consomment votre attention et se terminent par un résultat clair : rendez-vous, relances, classement, pièces comptables, déplacements simples. Les sujets qui engagent votre entreprise restent soumis à votre validation." },
      { q: 'Comment vérifier que la délégation fonctionne ?', a: "Regardez les demandes effectivement closes, le nombre de décisions qui vous reviennent et les blocages encore ouverts. Un suivi court avec une prochaine action et une échéance donne plus d’information qu’un décompte d’heures." },
      { q: 'Et si mon besoin change après un mois ?', a: "Le premier mois sert aussi à ajuster le périmètre. Les tâches nouvelles, les pics de volume et les limites de disponibilité se discutent explicitement avant de modifier l’accompagnement." },
    ],
    liens: [
      { href: '/guides/comment-deleguer', label: 'Choisir quoi déléguer' },
      { href: '/guides/modele-brief-assistante-externalisee', label: 'Rédiger une demande claire' },
      { href: '/guides/suivi-demandes-assistante-externalisee', label: 'Suivre les demandes confiées' },
      { href: '/guides/confidentialite-assistante-externalisee', label: 'Cadrer les accès et la confidentialité' },
      { href: '/private-office', label: 'La méthode BrittAssist' },
    ],
    cloture: 'Le premier mois sert à installer une méthode que vous pourrez garder.',
    datePublished: '2026-09-27',
    dateModified: '2026-09-27',
  },
  {
    slug: 'choisir-assistante-externalisee',
    categorie: 'Décider',
    nom: 'Choisir une assistante externalisée',
    title: 'Comment choisir une assistante externalisée ? · BrittAssist',
    description: "Périmètre, autonomie, confidentialité, suivi et devis : les questions à poser avant de choisir une assistante de direction externalisée.",
    h1: 'Comment choisir une assistante de direction externalisée ?',
    lede: "Un bon échange commercial ne suffit pas à prévoir la collaboration. Demandez plutôt comment les demandes entrent, qui décide, ce qui est suivi et ce qui se passe si le périmètre change.",
    reponseCourte: [
      "Décrivez d’abord deux ou trois demandes réelles. Une prestataire doit pouvoir expliquer ce qu’elle prend en charge, ce qu’elle vous remonte et ce qui reste hors de son métier.",
      "Comparez les devis sur le périmètre, le mode de suivi, les délais convenus, les frais et les modalités de fin de mission, pas seulement sur le prix affiché.",
      "Vérifiez la confidentialité et les accès nécessaires avant de transmettre des documents. Les droits doivent pouvoir être limités et retirés.",
      "Demandez un exemple de compte rendu ou de statut de demande. Vous devez pouvoir voir ce qui est terminé, en attente et soumis à votre décision.",
    ],
    sections: [
      {
        h2: 'Partir de vos demandes, pas d’une liste de compétences',
        blocs: [
          { paragraphes: ["Préparez trois exemples : une demande récurrente, un imprévu et un sujet sensible. Pour chacun, indiquez le résultat attendu et le moment où vous souhaitez valider. Une réponse précise montre mieux la méthode de travail qu’une longue liste de tâches possibles."] },
          { liste: [
            'La personne comprend-elle le résultat attendu ou attend-elle des consignes pour chaque étape ?',
            'Sait-elle dire quelles décisions, signatures ou opérations spécialisées restent chez vous ou chez un professionnel compétent ?',
            'Avec qui échange-t-elle si une information manque : vous, votre équipe, votre comptable ou un autre prestataire ?',
          ] },
        ],
      },
      {
        h2: 'Comparer le fonctionnement prévu au contrat',
        blocs: [
          { paragraphes: ["Un tarif horaire, un forfait d’heures et un accompagnement mensuel ne couvrent pas nécessairement le même travail. Demandez ce qui déclenche une demande, le canal utilisé, les plages de disponibilité convenues, le mode de validation et le traitement d’une hausse de volume. Faites inscrire au devis ce qui compte pour votre activité."] },
          { h3: 'Les questions qui évitent les malentendus', liste: [
            'Quelles demandes sont incluses et lesquelles feront l’objet d’un devis distinct ?',
            'Qui paie les achats ou réservations effectués pour votre compte, et après quel accord ?',
            'Comment voit-on les sujets ouverts, leurs prochaines actions et leurs échéances ?',
            'Comment les documents et accès sont-ils restitués ou retirés à la fin ?',
          ] },
          { paragraphes: ["Une prestataire sérieuse peut aussi conclure qu’un besoin de présence quotidienne dans vos locaux appelle un recrutement ou une autre forme d’assistance. Cette limite est utile à connaître avant de signer."] },
        ],
      },
      {
        h2: 'Vérifier la confidentialité avec des gestes concrets',
        blocs: [
          { paragraphes: ["Demandez quels documents seront utilisés, quels comptes seront ouverts et qui conservera la maîtrise des accès. Un compte nominatif limité à la mission est préférable à un mot de passe partagé lorsque les outils le permettent. Si des données personnelles sont traitées pour votre compte, faites examiner le cadre contractuel et les mesures adaptées à votre activité."] },
          { paragraphes: ["Enfin, prévoyez un point de révision après les premières demandes. Ce point sert à corriger le périmètre et la méthode à partir du travail réel, sans supposer qu’un premier devis peut anticiper chaque exception."] },
        ],
      },
    ],
    faq: [
      { q: 'Faut-il demander une liste complète de toutes les tâches possibles ?', a: "Non. Deux ou trois demandes typiques, leurs limites et leur résultat attendu permettent une comparaison plus fiable qu’un catalogue. Le devis doit ensuite fixer le périmètre retenu." },
      { q: 'Le tarif le plus bas est-il le meilleur choix ?', a: "Pas forcément. Comparez aussi la continuité de l’interlocuteur, le temps de coordination qui vous reste, les frais et les limites de chaque offre." },
      { q: 'Peut-on commencer sans donner accès à tous les outils ?', a: "Oui, si les premières demandes le permettent. Définissez les tâches, puis ouvrez uniquement les accès utiles, avec des droits révocables." },
    ],
    liens: [
      { href: '/guides/prix-assistante-de-direction-externalisee', label: 'Comparer les modèles de prix' },
      { href: '/guides/confidentialite-assistante-externalisee', label: 'Cadrer les accès et la confidentialité' },
      { href: '/tarifs', label: 'Lire les tarifs et modalités BrittAssist' },
    ],
    sources: [
      { href: 'https://www.cnil.fr/fr/securite-gerer-la-sous-traitance', label: 'CNIL — sécurité et gestion de la sous-traitance' },
    ],
    cloture: 'Choisissez une façon de travailler que vous pourrez vérifier, pas une promesse générale.',
    datePublished: '2026-09-27',
    dateModified: '2026-09-27',
  },
  {
    slug: 'modele-brief-assistante-externalisee',
    categorie: 'Méthode',
    nom: 'Modèle de brief pour déléguer',
    title: 'Modèle de brief pour une assistante externalisée · BrittAssist',
    description: "Un modèle de demande prêt à adapter : résultat, échéance, contexte, budget, autorisation et retour attendu pour déléguer sans multiplier les échanges.",
    h1: 'Quel brief envoyer à une assistante externalisée ?',
    lede: "Une demande utile peut tenir en quelques lignes. Elle précise le résultat, le délai et les décisions que vous gardez, sans dicter chaque étape de la réalisation.",
    reponseCourte: [
      "Indiquez le résultat vérifiable : « rendez-vous confirmé et inscrit à l’agenda » plutôt que « occupe-toi du rendez-vous ».",
      "Ajoutez une échéance, les personnes ou documents utiles et les contraintes qui changent réellement la réponse.",
      "Fixez la limite d’autonomie : ce qui peut être envoyé ou réservé, le plafond éventuel et le point où votre accord est requis.",
      "Précisez le retour attendu : une confirmation finale, une recommandation entre options ou une question si une décision manque.",
    ],
    sections: [
      {
        h2: 'Un modèle court à copier et adapter',
        blocs: [
          { paragraphes: ["Ce canevas sert de départ. Supprimez les lignes inutiles pour une demande simple ; pour un sujet sensible, ajoutez le contexte et les validations nécessaires."] },
          { liste: [
            'Résultat attendu : ce qui doit être vrai lorsque la demande sera terminée.',
            'Échéance : date et heure utiles, ou niveau de priorité si aucune date n’est fixe.',
            'Contexte : interlocuteurs, documents, préférences et contraintes indispensables.',
            'Autonomie : ce qui peut être décidé, le budget maximal et ce qui nécessite mon accord.',
            'Retour : format souhaité et moment où me signaler un blocage.',
          ] },
          { h3: 'Exemple fictif', paragraphes: ["« Merci de trouver deux trajets en train pour mon rendez-vous à Nantes mardi avant 9 h 30. Départ de La Roche-sur-Yon ; retour le même jour. Budget maximum : 120 €. Envoie-moi les deux options avec horaires et conditions de modification avant jeudi 15 h. Ne réserve rien avant mon accord. » Cet exemple montre le format du brief ; il ne décrit pas une mission client."] },
        ],
      },
      {
        h2: 'Adapter le brief à la nature du sujet',
        blocs: [
          { h3: 'Une tâche répétée', paragraphes: ["Précisez la fréquence, l’événement qui déclenche le travail et l’endroit où le résultat doit être consigné. Après quelques cycles, la demande peut devenir une procédure courte plutôt qu’un nouveau brief chaque semaine."] },
          { h3: 'Une demande urgente', paragraphes: ["Dites ce qui rend l’échéance réelle : un client attend une réponse, un départ approche ou une option expire. Indiquez un canal de contact si la décision doit vous revenir rapidement. Le mot « urgent » seul ne dit ni l’action prioritaire ni la limite d’autonomie."] },
          { h3: 'Une demande sensible', paragraphes: ["N’envoyez que les informations nécessaires sur le canal convenu. Vérifiez les destinataires, les droits d’accès et l’étape de validation avant tout envoi externe ou engagement financier."] },
        ],
      },
      {
        h2: 'Laisser une marge de méthode, garder les arbitrages',
        blocs: [
          { paragraphes: ["Le brief décrit l’objectif et les contraintes ; il n’a pas besoin de prescrire chaque clic. Si plusieurs solutions sont acceptables, demandez une recommandation argumentée. Si une information manque, la prestataire peut formuler une question précise et continuer sur les étapes qui ne dépendent pas de votre réponse."] },
          { paragraphes: ["Le bon test est simple : une personne qui n’était pas dans votre tête peut-elle savoir quand le sujet est terminé et à quel moment elle doit vous demander de trancher ? Si oui, le brief est suffisant pour commencer."] },
        ],
      },
    ],
    faq: [
      { q: 'Faut-il écrire un long document pour chaque demande ?', a: "Non. Le résultat, l’échéance et la limite d’autonomie tiennent souvent en trois phrases. Gardez un document plus détaillé pour les processus répétitifs ou les sujets à risque." },
      { q: 'Puis-je envoyer une demande par message vocal ?', a: "Oui si ce canal est convenu. Reformulez par écrit les montants, dates, destinataires et validations qui pourraient être ambigus." },
      { q: 'Que faire si je ne connais pas la meilleure solution ?', a: "Décrivez le problème, vos contraintes et la décision que vous souhaitez garder. Demandez une recommandation avec les options pertinentes plutôt qu’une exécution déjà figée." },
    ],
    liens: [
      { href: '/guides/comment-deleguer', label: 'Choisir les premières tâches à déléguer' },
      { href: '/guides/suivi-demandes-assistante-externalisee', label: 'Suivre ensuite les demandes sans microgestion' },
      { href: '/guides/premier-mois-assistante-externalisee', label: 'Organiser le premier mois' },
    ],
    cloture: 'Un brief clair vous évite de reprendre la demande en cours de route.',
    datePublished: '2026-09-27',
    dateModified: '2026-09-27',
  },
  {
    slug: 'suivi-demandes-assistante-externalisee',
    categorie: 'Organiser',
    nom: 'Suivre les demandes déléguées',
    title: 'Suivi des demandes déléguées : tableau et méthode · BrittAssist',
    description: "Un tableau de suivi simple pour une assistante externalisée : statuts, prochaine action, échéance, blocage et décision attendue du dirigeant.",
    h1: 'Comment suivre les demandes confiées à une assistante externalisée ?',
    lede: "Suivre ne veut pas dire vérifier chaque geste. Un tableau court permet de savoir ce qui est clos, ce qui attend un tiers et ce qui demande réellement une décision de votre part.",
    reponseCourte: [
      "Tenez une ligne par sujet avec cinq informations : demande, responsable de la prochaine action, statut, échéance et blocage éventuel.",
      "Utilisez quatre statuts lisibles : à faire, en cours, en attente et terminé. Ajoutez « décision nécessaire » lorsque le prochain geste appartient au dirigeant.",
      "Pour chaque sujet en attente, notez de qui dépend la réponse et la date de relance prévue. Sans prochaine action, un statut n’aide pas à piloter.",
      "Faites un point à la fréquence adaptée au volume des demandes et aux échéances ; archivez les sujets clos pour garder une vue courte.",
    ],
    sections: [
      {
        h2: 'Le tableau minimal : cinq colonnes qui suffisent',
        blocs: [
          { liste: [
            'Sujet : un libellé reconnaissable, par exemple « devis fournisseur à confirmer ».',
            'Statut : à faire, en cours, en attente, décision nécessaire ou terminé.',
            'Prochaine action et responsable : « relancer le fournisseur mardi — Brittany » ou « valider l’option B — dirigeant ».',
            'Échéance : la date qui compte pour le client ou pour la prochaine action.',
            'Lien ou référence : le document ou l’échange qui permet de reprendre le dossier.',
          ] },
          { paragraphes: ["Un tableur, un outil de tâches ou un document partagé peut suffire. Choisissez celui que vous consultez déjà. La valeur vient d’une mise à jour régulière et de règles communes, pas d’un logiciel supplémentaire."] },
        ],
      },
      {
        h2: 'Distinguer un blocage d’une décision',
        blocs: [
          { paragraphes: ["« En attente » signifie qu’une réponse extérieure manque : fournisseur, client, cabinet ou administration. Indiquez la personne sollicitée et la relance prévue. « Décision nécessaire » signifie que plusieurs options sont prêtes mais que votre accord ou votre arbitrage manque. La distinction évite de vous adresser chaque retard comme une nouvelle tâche."] },
          { h3: 'Exemple fictif', paragraphes: ["« Déplacement client : deux trains compatibles identifiés ; option A moins chère mais non échangeable ; décision sur le billet attendue avant vendredi 12 h ; réservation après validation. » L’état du sujet et votre unique décision tiennent sur une ligne. Cet exemple illustre le format de suivi, pas un résultat de mission."] },
        ],
      },
      {
        h2: 'Lire le tableau pour améliorer la délégation',
        blocs: [
          { paragraphes: ["Lors d’un point régulier, commencez par les décisions qui vous appartiennent, puis les échéances proches et enfin les sujets bloqués. Les demandes terminées peuvent être regroupées dans un bref récapitulatif. Il n’est pas nécessaire de relire toutes les étapes d’un dossier clos."] },
          { paragraphes: ["Si les mêmes blocages reviennent, cherchez la cause : information manquante au brief, droit d’accès trop limité, validation trop tardive ou périmètre mal défini. Le tableau sert à corriger la méthode et à préciser le devis si la charge réelle a changé."] },
        ],
      },
    ],
    faq: [
      { q: 'Faut-il suivre les heures passées ?', a: "Cela dépend du contrat. Pour piloter les demandes, le statut, la prochaine action et l’échéance sont souvent plus utiles qu’un décompte de temps seul." },
      { q: 'À quelle fréquence recevoir un point ?', a: "Fixez une fréquence compatible avec le volume et les délais réels. Les décisions urgentes se signalent sur le canal convenu ; les sujets ordinaires peuvent être regroupés dans un point régulier." },
      { q: 'Comment éviter un tableau qui ne se met jamais à jour ?', a: "Gardez peu de colonnes, désignez la personne qui actualise chaque ligne et associez chaque sujet ouvert à une prochaine action datée." },
    ],
    liens: [
      { href: '/guides/modele-brief-assistante-externalisee', label: 'Rédiger une demande claire' },
      { href: '/guides/premier-mois-assistante-externalisee', label: 'Installer cette méthode au premier mois' },
      { href: '/services/reporting', label: 'Voir le périmètre du reporting BrittAssist' },
    ],
    cloture: 'Le bon suivi montre les décisions à prendre, puis laisse le travail avancer.',
    datePublished: '2026-09-27',
    dateModified: '2026-09-27',
  },
];

export const guideParSlug = (slug: string) => guides.find((g) => g.slug === slug);
