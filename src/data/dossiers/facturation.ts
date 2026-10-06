/**
 * Dossier « Devis, factures et relances ».
 *
 * Pages à forte teneur réglementaire : chaque règle citée renvoie à sa source
 * officielle, consultée le 3 octobre 2026. Les taux et montants qui changent
 * chaque semestre ne sont pas recopiés ; la page donne la règle et le lien.
 * BrittAssist prépare, envoie, suit et relance : elle ne tient pas la
 * comptabilité et ne rédige pas d'acte juridique. Aucune page ne doit laisser
 * entendre le contraire.
 */
import type { Guide } from '../guides.ts';

const DATE = '2026-10-03';
const DOSSIER = 'devis-factures-relances';

const SOURCE_MENTIONS = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F31808', label: 'Service-Public Entreprendre — Mentions obligatoires sur une facture' };
const SOURCE_DELAIS = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F23211', label: 'Service-Public Entreprendre — Délais de paiement entre professionnels et pénalités de retard' };
const SOURCE_EFACTURE = { href: 'https://www.impots.gouv.fr/professionnel/je-decouvre-la-facturation-electronique', label: 'impots.gouv.fr — Je découvre la facturation électronique' };
const SOURCE_RECOUVREMENT = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F38586', label: 'Service-Public Entreprendre — Recouvrement amiable : relance et mise en demeure de payer' };
const SOURCE_DEVIS = { href: 'https://entreprendre.service-public.gouv.fr/vosdroits/F31144', label: 'Service-Public Entreprendre — Devis obligatoire : activités concernées' };

export const facturation: Guide[] = [
  {
    slug: 'devis-factures-relances',
    type: 'pilier',
    dossier: DOSSIER,
    categorie: 'Dossier',
    nom: 'Devis, factures et relances : le circuit complet',
    title: 'Devis, factures, relances : le circuit complet · BrittAssist',
    description:
      "Du devis envoyé à la facture encaissée : les étapes, les règles à connaître et les points où le circuit se bloque dans une petite entreprise.",
    h1: 'Du devis à l’encaissement : le circuit complet, étape par étape.',
    lede:
      "Une petite entreprise manque rarement de travail à facturer. Elle manque de temps pour le facturer, et de constance pour le réclamer. Ce dossier suit le trajet d’une vente, du premier devis au dernier euro encaissé, et s’arrête sur chaque endroit où l’argent prend du retard.",
    reponseCourte: [
      "Le circuit tient en six étapes : devis, accord, facture, envoi, suivi de l’échéance, relance. Un retard à l’une d’elles se retrouve tel quel dans la trésorerie.",
      "Trois règles pèsent sur tout le circuit : les mentions obligatoires de la facture, les délais de paiement entre professionnels, et la facturation électronique, obligatoire en réception depuis le 1er septembre 2026.",
      "Ce qui fait perdre de l’argent n’est pas la règle mal connue, c’est la facture émise dix jours après la fin du travail et la relance qui n’a jamais été envoyée.",
      "Tout le circuit se délègue, sauf trois décisions : le prix, la remise et le passage au contentieux.",
    ],
    sections: [
      {
        h2: 'Les six étapes, et ce qui se joue à chacune',
        blocs: [
          {
            tableau: {
              legende: 'Le circuit de facturation, étape par étape',
              colonnes: ['Étape', 'Ce qui doit être fait', 'Où le retard s’installe'],
              lignes: [
                ['1. Devis', 'Chiffrer, dater, indiquer la durée de validité, envoyer', 'Le devis promis lundi part le vendredi'],
                ['2. Accord', 'Obtenir une acceptation écrite et, s’il y a lieu, l’acompte', 'Un accord oral, jamais confirmé'],
                ['3. Facture', 'Émettre dès la livraison ou la fin de la prestation', 'Les factures sont faites « en fin de mois »'],
                ['4. Envoi', 'Adresser la facture au bon service, au bon format', 'La facture attend dans la mauvaise boîte'],
                ['5. Échéance', 'Noter la date de règlement et la surveiller', 'Personne ne regarde ce qui est échu'],
                ['6. Relance', 'Relancer à dates fixes, puis décider de la suite', 'La relance gêne, donc elle attend'],
              ],
            },
          },
          {
            paragraphes: [
              "Aucune de ces étapes n’est difficile. Leur faiblesse commune est de reposer sur la disponibilité du dirigeant, c’est-à-dire sur la ressource la plus rare de l’entreprise. C’est pour cela qu’elles se regroupent, se décalent, puis s’oublient.",
            ],
          },
        ],
      },
      {
        h2: 'Les trois règles qui encadrent le circuit',
        blocs: [
          {
            h3: 'Les mentions obligatoires',
            paragraphes: [
              "Une facture entre professionnels doit porter une série de mentions : date d’émission, numéro unique, identité des deux parties, désignation et décompte, totaux, date d’échéance, taux des pénalités de retard et indemnité forfaitaire de 40 €. Une facture incomplète donne au client une raison de la retourner, et repousse d’autant le paiement.",
            ],
          },
          {
            h3: 'Les délais de paiement',
            paragraphes: [
              "Sans accord particulier, le délai est de 30 jours après la réception de la marchandise ou l’exécution de la prestation. Il peut être négocié, dans la limite de 60 jours après l’émission de la facture, ou de 45 jours fin de mois. Passé l’échéance, les pénalités de retard sont dues sans qu’un rappel soit nécessaire.",
            ],
          },
          {
            h3: 'La facturation électronique',
            paragraphes: [
              "Depuis le 1er septembre 2026, toutes les entreprises assujetties à la TVA doivent pouvoir recevoir des factures électroniques par l’intermédiaire d’une plateforme agréée. L’obligation d’émettre s’applique aux grandes entreprises et aux entreprises de taille intermédiaire depuis cette date, et aux PME et micro-entreprises à partir du 1er septembre 2027.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qui se délègue, et ce qui reste chez vous',
        blocs: [
          {
            liste: [
              "Se délèguent : la mise en forme et l’envoi des devis à partir de vos chiffres, l’émission des factures, le contrôle des mentions, le suivi des échéances, les relances amiables, la préparation des pièces pour l’expert-comptable.",
              "Restent chez vous : le prix, les remises, l’accord donné à un délai de paiement, la décision de suspendre une prestation ou d’engager une procédure.",
              "Relèvent d’un autre professionnel : la tenue comptable et les déclarations (expert-comptable), la mise en demeure à portée juridique et le contentieux (avocat, commissaire de justice).",
            ],
          },
        ],
      },
      {
        h2: 'Par où commencer',
        blocs: [
          {
            etapes: [
              "Listez les factures émises et non réglées, avec leur date d’échéance. C’est l’état des lieux : il prend une heure et dit tout de suite où est l’argent.",
              "Fixez un jour de facturation par semaine, et non par mois : une facture émise à J+2 est payée plus tôt qu’une facture émise à J+20, à délai de paiement égal.",
              "Écrivez votre séquence de relance une fois pour toutes : à quelle date, par quel canal, avec quel message.",
              "Vérifiez que votre outil de facturation est compatible avec une plateforme agréée de facturation électronique.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Facturer en fin de mois par habitude : chaque prestation terminée le 3 attend alors quatre semaines avant même de commencer à courir.",
      "Envoyer la facture à l’interlocuteur opérationnel plutôt qu’au service qui paie.",
      "Relancer une seule fois, puis ne plus oser.",
      "Laisser le devis sans durée de validité, puis devoir honorer un prix vieux de huit mois.",
    ],
    limites: [
      "Ce dossier ne remplace pas votre expert-comptable pour le traitement de la TVA, ni un avocat pour un impayé contesté.",
      "Les taux de pénalités changent chaque semestre : reportez-vous à la page officielle citée en référence.",
    ],
    faq: [
      {
        q: 'Peut-on déléguer sa facturation sans donner accès à sa comptabilité ?',
        a: "Oui. Émettre et suivre des factures demande un accès à l’outil de facturation et à la liste des prestations réalisées, pas à la comptabilité. Les écritures, la TVA et les déclarations restent chez l’expert-comptable. Le périmètre et les accès se définissent au devis.",
      },
      {
        q: 'À partir de quand une facture est-elle en retard ?',
        a: "Dès le lendemain de la date d’échéance inscrite sur la facture. En l’absence de date convenue, le délai est de 30 jours après la réception de la marchandise ou l’exécution de la prestation. Les pénalités de retard sont alors exigibles sans rappel préalable.",
      },
      {
        q: 'Faut-il changer de logiciel à cause de la facturation électronique ?',
        a: "Pas forcément. Il faut vérifier que votre outil est relié à une plateforme agréée, ou qu’il en est une. Depuis le 1er septembre 2026, une facture en PDF simple envoyée par e-mail ne répond plus à l’obligation pour les entreprises tenues d’émettre en électronique ; pour les PME et micro-entreprises, l’obligation d’émission arrive le 1er septembre 2027.",
      },
    ],
    liens: [
      { href: '/services/facturation', label: 'Confier sa facturation et ses relances' },
      { href: '/guides/mentions-obligatoires-facture', label: 'Les mentions obligatoires d’une facture' },
      { href: '/guides/relancer-une-facture-impayee', label: 'Relancer une facture impayée' },
      { href: '/guides/facturation-electronique-tpe', label: 'La facturation électronique pour une TPE' },
      { href: '/assistante/artisans-btp', label: 'L’administratif d’une entreprise du bâtiment' },
      { href: '/guides/assistante-commerciale-externalisee', label: 'Ce que prend en charge une assistante commerciale' },
    ],
    sources: [SOURCE_MENTIONS, SOURCE_DELAIS, SOURCE_EFACTURE],
    cloture: 'L’argent dû n’est pas de la trésorerie tant que personne ne le réclame.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'navigation',
      motCle: 'circuit de facturation petite entreprise',
      variantes: ['du devis à la facture', 'processus de facturation TPE', 'gestion des devis et factures'],
      persona: 'Dirigeant de TPE ou artisan qui facture lui-même',
      objectif: 'Donner la vue d’ensemble et orienter vers la page qui traite le point bloquant',
      difference: 'Suit le trajet de l’argent et nomme l’endroit précis où chaque étape prend du retard',
    },
  },

  {
    slug: 'mentions-obligatoires-facture',
    type: 'reference',
    dossier: DOSSIER,
    categorie: 'Repère',
    nom: 'Les mentions obligatoires d’une facture',
    title: 'Mentions obligatoires d’une facture : la liste · BrittAssist',
    description:
      "La liste des mentions obligatoires sur une facture entre professionnels, les mentions particulières, et celles qu’ajoute la facturation électronique.",
    h1: 'Les mentions obligatoires d’une facture : la liste à vérifier avant l’envoi.',
    lede:
      "Une facture incomplète n’est pas seulement en infraction. Elle est surtout contestable : le client qui cherche un délai n’a qu’à la renvoyer pour correction. Voici la liste à passer en revue avant chaque envoi, telle que la donne l’administration.",
    reponseCourte: [
      "Une facture entre professionnels porte dix mentions générales : date d’émission, numéro unique, date de la vente ou de la prestation, identité du vendeur, identité du client, numéro de bon de commande s’il existe, numéro de TVA, désignation, décompte détaillé, totaux hors taxes et toutes taxes.",
      "S’y ajoutent quatre mentions de paiement : date d’échéance, taux des pénalités de retard, indemnité forfaitaire de 40 € pour frais de recouvrement, et conditions d’escompte.",
      "La facturation électronique ajoute quatre mentions, dont le numéro Siren du client : depuis le 1er septembre 2026 pour les grandes entreprises et les ETI, à partir du 1er septembre 2027 pour les PME et micro-entreprises.",
    ],
    sections: [
      {
        h2: 'Les mentions générales',
        blocs: [
          {
            tableau: {
              legende: 'Mentions générales d’une facture entre professionnels',
              colonnes: ['Mention', 'Ce qu’il faut y mettre'],
              lignes: [
                ['Date d’émission', 'Le jour où la facture est établie'],
                ['Numéro de facture', 'Un numéro unique, dans une suite chronologique continue'],
                ['Date de la vente ou de la prestation', 'Le jour de la livraison ou de la fin du travail'],
                ['Identité du vendeur', 'Nom ou dénomination, numéro Siren, adresse ; forme juridique et capital pour une société'],
                ['Identité du client', 'Nom ou dénomination et adresse'],
                ['Bon de commande', 'Son numéro, s’il a été établi au préalable'],
                ['Numéro de TVA', 'Numéro d’identification à la TVA, sauf pour une facture d’un montant hors taxes inférieur ou égal à 150 €'],
                ['Désignation', 'La nature précise du produit ou de la prestation'],
                ['Décompte détaillé', 'Quantité, dénomination, prix unitaire hors taxes, taux de TVA'],
                ['Totaux', 'Somme totale hors taxes et toutes taxes comprises'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les mentions relatives au paiement',
        blocs: [
          {
            liste: [
              "La date d’échéance : la date à laquelle le règlement doit intervenir.",
              "Le taux des pénalités de retard applicables en cas de non-paiement à l’échéance.",
              "L’indemnité forfaitaire pour frais de recouvrement, de 40 €, due par les clients professionnels.",
              "Les conditions d’escompte en cas de paiement anticipé ; en l’absence d’escompte, la mention « Escompte pour paiement anticipé : néant ».",
            ],
          },
          {
            paragraphes: [
              "Ces quatre lignes sont celles qui servent le jour où la facture est en retard. Une facture qui ne les porte pas complique la relance : il devient difficile de réclamer des pénalités dont le taux n’a jamais été annoncé.",
            ],
          },
        ],
      },
      {
        h2: 'Les mentions particulières, selon votre situation',
        blocs: [
          {
            liste: [
              "Franchise en base de TVA : « TVA non applicable, art. 293 B du code général des impôts ».",
              "Autoliquidation : la mention correspondante lorsque c’est le client qui est redevable de la TVA.",
              "Artisans et micro-entrepreneurs soumis à une assurance professionnelle obligatoire : l’assurance souscrite, les coordonnées de l’assureur et la couverture géographique.",
              "Certains produits : éco-participation ou rémunération pour copie privée.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que la facturation électronique ajoute',
        blocs: [
          {
            paragraphes: [
              "Quatre mentions nouvelles entrent en vigueur avec la réforme : le numéro Siren du client, l’adresse de livraison des biens lorsqu’elle diffère de celle du client, la nature des opérations (livraison de biens, prestation de services, ou les deux), et la mention de l’option pour le paiement de la TVA d’après les débits lorsqu’elle s’applique.",
              "Elles s’imposent depuis le 1er septembre 2026 aux grandes entreprises et aux entreprises de taille intermédiaire, et à partir du 1er septembre 2027 aux PME et aux micro-entreprises. Le Siren du client mérite d’être collecté dès maintenant : c’est la mention qui manque le plus souvent dans un fichier clients.",
            ],
          },
        ],
      },
      {
        h2: 'La vérification avant envoi, en une minute',
        blocs: [
          {
            etapes: [
              "Le numéro suit-il le précédent, sans trou ni doublon ?",
              "Le client est-il désigné par sa dénomination exacte, avec son adresse de facturation ?",
              "La date d’échéance est-elle écrite en clair, et non déduite d’une formule ?",
              "Les trois lignes de paiement — pénalités, indemnité de 40 €, escompte — sont-elles présentes ?",
              "Le numéro de bon de commande exigé par le client figure-t-il sur la facture ?",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Écrire « paiement à réception » sans date : le client ne sait pas quand il est en retard, et vous non plus.",
      "Oublier le numéro de bon de commande d’un grand compte : la facture est rejetée par son service comptable, sans que personne ne vous prévienne.",
      "Modifier une facture déjà envoyée au lieu d’émettre un avoir.",
    ],
    limites: [
      "Cette liste couvre la facture entre professionnels. La vente à un particulier obéit à d’autres règles.",
      "Certaines professions ont des mentions propres : votre expert-comptable ou votre organisation professionnelle les connaît.",
    ],
    faq: [
      {
        q: 'Que risque-t-on avec une facture incomplète ?',
        a: "Sur le plan pratique, un rejet par le client et un paiement retardé. Sur le plan légal, des sanctions sont prévues par les textes ; leur détail figure sur la page officielle citée en référence. Le risque quotidien reste le premier : une facture renvoyée pour correction repart de zéro.",
      },
      {
        q: 'Un micro-entrepreneur a-t-il les mêmes obligations ?',
        a: "Oui pour les mentions générales et de paiement. S’il bénéficie de la franchise en base de TVA, il ajoute « TVA non applicable, art. 293 B du code général des impôts » et ne fait apparaître aucune TVA.",
      },
      {
        q: 'Une assistante peut-elle contrôler les mentions à ma place ?',
        a: "Oui, c’est un contrôle de forme : il ne demande aucune décision. Le contrôle porte sur la présence et la cohérence des mentions, à partir d’un modèle validé une fois par vous ou par votre expert-comptable.",
      },
    ],
    liens: [
      { href: '/guides/numerotation-des-factures-et-avoirs', label: 'Numéroter ses factures et corriger par un avoir' },
      { href: '/guides/delais-de-paiement-et-penalites-de-retard', label: 'Délais de paiement et pénalités de retard' },
      { href: '/guides/facturation-electronique-tpe', label: 'La facturation électronique pour une TPE' },
      { href: '/services/facturation', label: 'Confier sa facturation et ses relances' },
      { href: '/guides/tva-prestataire-en-franchise-en-base', label: 'Recevoir une facture sans TVA : ce que cela change' },
    ],
    sources: [SOURCE_MENTIONS, SOURCE_EFACTURE],
    cloture: 'Une facture complète est une facture que personne ne peut vous renvoyer.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'référence',
      motCle: 'mentions obligatoires facture',
      variantes: ['mentions légales facture', 'que doit contenir une facture', 'mentions facture professionnel'],
      persona: 'Dirigeant ou indépendant qui émet ses propres factures',
      objectif: 'Fournir la liste exacte, à jour, sous forme de contrôle avant envoi',
      difference: 'Présente la liste officielle comme une vérification en une minute, et y intègre les mentions de la facture électronique',
    },
  },

  {
    slug: 'facturation-electronique-tpe',
    type: 'guide',
    dossier: DOSSIER,
    categorie: 'Comprendre',
    nom: 'La facturation électronique pour une TPE',
    title: 'Facturation électronique : ce qui change pour une TPE · BrittAssist',
    description:
      "Réception obligatoire depuis le 1er septembre 2026, émission le 1er septembre 2027 pour les PME et micro-entreprises : ce qu’il faut préparer.",
    h1: 'Facturation électronique : ce qui change vraiment pour une petite entreprise.',
    lede:
      "La réforme est en vigueur depuis le 1er septembre 2026. Pour une petite entreprise, elle se résume à deux dates et à une idée simple : une facture n’est plus un document qu’on envoie, c’est une donnée qui transite par une plateforme.",
    reponseCourte: [
      "Depuis le 1er septembre 2026, toute entreprise assujettie à la TVA et établie en France doit pouvoir recevoir des factures électroniques, quelle que soit sa taille.",
      "L’obligation d’émettre s’applique depuis cette date aux grandes entreprises et aux ETI, et à partir du 1er septembre 2027 aux PME et aux micro-entreprises.",
      "Les entreprises en franchise en base de TVA et les micro-entrepreneurs sont concernés.",
      "Une facture électronique n’est pas un PDF envoyé par e-mail : elle est émise dans un format structuré et passe par une plateforme agréée.",
    ],
    sections: [
      {
        h2: 'Le calendrier',
        blocs: [
          {
            tableau: {
              legende: 'Calendrier de la facturation électronique',
              colonnes: ['Obligation', 'Entreprises concernées', 'Date'],
              lignes: [
                ['Recevoir des factures électroniques', 'Toutes les entreprises assujetties à la TVA', '1er septembre 2026'],
                ['Émettre des factures électroniques', 'Grandes entreprises et entreprises de taille intermédiaire', '1er septembre 2026'],
                ['Émettre des factures électroniques', 'PME et micro-entreprises', '1er septembre 2027'],
              ],
            },
          },
          {
            paragraphes: [
              "La transmission de données à l’administration, appelée e-reporting, suit le même calendrier. Elle concerne les opérations qui ne donnent pas lieu à une facture électronique entre entreprises françaises : ventes à des particuliers, opérations avec l’étranger, et données de paiement.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qu’est une facture électronique, et ce qu’elle n’est pas',
        blocs: [
          {
            paragraphes: [
              "Une facture électronique est émise, transmise et reçue sous une forme structurée, lisible par un logiciel. Les formats admis sont l’UBL, le CII, ou un format mixte associant un fichier de données structurées et une image lisible de la facture.",
              "Une facture papier numérisée, un PDF ordinaire ou un document envoyé par e-mail ne répondent pas à cette définition : l’administration précise qu’ils ne seront plus conformes pour les opérations entrant dans le champ de la réforme.",
            ],
          },
          {
            h3: 'La plateforme agréée',
            paragraphes: [
              "Les factures transitent par une plateforme agréée : une entreprise privée immatriculée par l’État, qui assure la transmission entre le fournisseur et son client et envoie les données à l’administration. Votre logiciel de facturation peut être lui-même une plateforme agréée, ou être relié à l’une d’elles.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qu’une petite entreprise doit faire maintenant',
        blocs: [
          {
            etapes: [
              "Vérifier par quelle plateforme agréée vous recevez vos factures fournisseurs : l’obligation de réception est déjà en vigueur.",
              "Demander à votre éditeur de logiciel de facturation comment il traite l’émission, et à quelle date.",
              "Compléter votre fichier clients : le numéro Siren de chaque client professionnel devient une mention obligatoire.",
              "Prévenir la personne qui fait vos factures, en interne ou en externe : son circuit d’envoi change.",
              "Faire valider le dispositif par votre expert-comptable, qui connaît votre régime de TVA.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que la réforme change dans le quotidien',
        blocs: [
          {
            liste: [
              "La facture arrive chez le client par la plateforme : la question « l’avez-vous bien reçue ? » perd de son objet.",
              "Les statuts de la facture — déposée, reçue, rejetée, payée — deviennent visibles, ce qui rend la relance plus factuelle.",
              "Un rejet pour mention manquante est immédiat : la qualité du fichier clients compte davantage qu’avant.",
              "Les factures fournisseurs n’arrivent plus par cinq canaux différents, mais par un seul.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Croire qu’une petite structure n’est pas concernée : l’obligation de réception vaut pour toutes les entreprises assujetties à la TVA.",
      "Confondre « PDF » et « facture électronique ».",
      "Attendre l’été 2027 pour collecter les numéros Siren de ses clients.",
    ],
    limites: [
      "Le choix d’une plateforme et le traitement de la TVA relèvent de vous et de votre expert-comptable.",
      "Le calendrier et les modalités peuvent évoluer : la page de l’administration fiscale citée en référence fait foi.",
    ],
    faq: [
      {
        q: 'Un micro-entrepreneur en franchise de TVA est-il concerné ?',
        a: "Oui. L’administration fiscale indique que la réforme s’applique à toutes les entreprises assujetties à la TVA, y compris celles qui bénéficient de la franchise en base, et que les micro-entrepreneurs sont donc concernés.",
      },
      {
        q: 'Puis-je encore envoyer mes factures en PDF par e-mail ?',
        a: "Pour une PME ou une micro-entreprise, l’obligation d’émettre en électronique commence le 1er septembre 2027. À partir de cette date, un PDF ordinaire envoyé par e-mail ne sera plus conforme pour les factures adressées à d’autres entreprises françaises assujetties à la TVA.",
      },
      {
        q: 'Une assistante externalisée peut-elle encore émettre mes factures ?',
        a: "Oui. Elle les émet depuis votre outil, avec un accès que vous lui ouvrez ; c’est l’outil qui transmet à la plateforme. Ce qui change pour elle, c’est le contrôle en amont : un Siren manquant ou une mention absente provoque un rejet.",
      },
    ],
    liens: [
      { href: '/guides/mentions-obligatoires-facture', label: 'Les mentions obligatoires d’une facture' },
      { href: '/guides/choisir-un-logiciel-de-facturation', label: 'Choisir un logiciel de facturation' },
      { href: '/guides/circuit-des-factures-fournisseurs', label: 'Le circuit des factures fournisseurs' },
      { href: '/services/facturation', label: 'Confier sa facturation et ses relances' },
    ],
    sources: [SOURCE_EFACTURE, SOURCE_MENTIONS],
    cloture: 'La réforme ne change pas ce que vous facturez. Elle change le chemin que prend la facture.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'informationnelle',
      motCle: 'facturation électronique TPE',
      variantes: ['facture électronique 2026 2027', 'réforme facturation électronique petite entreprise', 'facture électronique micro-entrepreneur'],
      persona: 'Dirigeant de TPE, artisan ou indépendant',
      objectif: 'Dire ce qui est obligatoire aujourd’hui, ce qui le sera en 2027, et quoi préparer',
      difference: 'Traduit la réforme en cinq actions concrètes et en effets sur le circuit quotidien',
    },
  },

  {
    slug: 'relancer-une-facture-impayee',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Relancer une facture impayée',
    title: 'Relancer une facture impayée : étapes et messages types · BrittAssist',
    description:
      "Quand relancer, par quel canal, avec quels mots : une séquence de relance amiable en quatre temps, et trois messages à reprendre.",
    h1: 'Relancer une facture impayée : la séquence, et les mots pour le dire.',
    lede:
      "Beaucoup de factures en retard ne sont pas des impayés. Ce sont des factures que personne n’a réclamées. La relance est le geste le plus rentable de tout le circuit, et le plus souvent remis au lendemain, parce qu’elle met mal à l’aise celui qui a fait le travail.",
    reponseCourte: [
      "Une relance amiable suit une séquence fixe : un rappel avant l’échéance, une première relance quelques jours après, une seconde plus ferme, puis un appel.",
      "La relance n’est pas une étape obligatoire en droit ; elle est simplement ce qui, le plus souvent, règle un retard sans conflit.",
      "Si la relance amiable échoue, l’étape suivante est la mise en demeure, par lettre recommandée avec accusé de réception.",
      "Une relance écrite à l’avance et envoyée par quelqu’un d’autre que vous part à l’heure : c’est tout son intérêt.",
    ],
    sections: [
      {
        h2: 'La séquence en quatre temps',
        blocs: [
          {
            tableau: {
              legende: 'Séquence de relance amiable',
              colonnes: ['Moment', 'Canal', 'Ton', 'Objectif'],
              lignes: [
                ['Quelques jours avant l’échéance', 'E-mail', 'Neutre, informatif', 'Vérifier que la facture est bien dans le circuit de paiement'],
                ['Quelques jours après l’échéance', 'E-mail', 'Courtois, factuel', 'Signaler le retard, redonner la facture et le RIB'],
                ['Deux semaines après l’échéance', 'E-mail puis téléphone', 'Ferme', 'Obtenir une date de paiement'],
                ['Un mois après l’échéance', 'Téléphone, puis décision', 'Direct', 'Savoir s’il y a un litige, et décider de la suite'],
              ],
            },
          },
          {
            paragraphes: [
              "Les intervalles sont à adapter à votre activité. Ce qui compte n’est pas le nombre de jours, c’est que la séquence soit écrite, datée, et suivie pour chaque facture sans exception. Un client relancé une fois sur trois apprend qu’il peut attendre.",
            ],
          },
        ],
      },
      {
        h2: 'Trois messages à reprendre',
        blocs: [
          {
            modele: {
              titre: 'Rappel avant échéance',
              lignes: [
                "Objet : Facture n° [numéro] — échéance du [date]",
                "Bonjour [prénom],",
                "La facture n° [numéro], d’un montant de [montant], arrive à échéance le [date]. Je vous la remets en pièce jointe.",
                "Pouvez-vous me confirmer qu’elle est bien enregistrée de votre côté ? S’il manque une information pour la traiter, dites-le-moi.",
                "Bien cordialement,",
              ],
            },
          },
          {
            modele: {
              titre: 'Première relance',
              lignes: [
                "Objet : Facture n° [numéro] — échue depuis le [date]",
                "Bonjour [prénom],",
                "Sauf erreur de ma part, la facture n° [numéro] de [montant], échue le [date], n’a pas encore été réglée.",
                "Vous la trouverez en pièce jointe, avec nos coordonnées bancaires. Pourriez-vous m’indiquer la date de règlement prévue ?",
                "Bien cordialement,",
              ],
            },
          },
          {
            modele: {
              titre: 'Seconde relance',
              lignes: [
                "Objet : Facture n° [numéro] — second rappel",
                "Bonjour [prénom],",
                "Je reviens vers vous au sujet de la facture n° [numéro] de [montant], échue le [date], restée sans règlement malgré mon message du [date].",
                "Je vous remercie de procéder au paiement sous huit jours, ou de m’indiquer ce qui s’y oppose. Les conditions de la facture prévoient des pénalités de retard et une indemnité forfaitaire de 40 € ; je préférerais ne pas avoir à les appliquer.",
                "Bien cordialement,",
              ],
            },
          },
        ],
      },
      {
        h2: 'Ce qu’il faut savoir avant de relancer',
        blocs: [
          {
            liste: [
              "À qui écrire : le service qui paie, pas l’interlocuteur qui a commandé. Les deux en copie si le premier ne répond pas.",
              "Ce qui bloque le plus souvent : un bon de commande manquant, une facture adressée à la mauvaise entité, une validation interne en attente.",
              "Ce qu’il faut toujours joindre : la facture et le RIB. Une relance sans pièce jointe produit une demande de pièce jointe.",
              "Ce qu’il faut noter : chaque relance, sa date et la réponse obtenue. Ce journal sert le jour où il faut aller plus loin.",
            ],
          },
        ],
      },
      {
        h2: 'Quand la relance amiable ne suffit plus',
        blocs: [
          {
            paragraphes: [
              "L’étape suivante est la mise en demeure : un courrier recommandé avec accusé de réception, rédigé dans des termes clairs et formels, qui demande le paiement dans un délai précis. Elle n’est pas toujours obligatoire, mais elle prépare une éventuelle procédure. En cas d’échec, la procédure d’injonction de payer permet de saisir le tribunal.",
              "Ce passage est une décision de dirigeant, pas une tâche administrative : il engage la relation commerciale. Une assistante prépare le dossier — factures, relances, échanges —, elle ne décide pas d’engager la procédure et ne rédige pas d’acte juridique.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Attendre que le retard soit gênant pour relancer : plus une facture vieillit, moins elle a de chances d’être payée sans discussion.",
      "S’excuser de relancer. Réclamer un paiement dû n’est pas une faveur demandée.",
      "Menacer dès le premier message, puis ne rien faire.",
      "Relancer par un seul canal un interlocuteur qui ne lit pas ses e-mails.",
    ],
    limites: [
      "Ces messages sont des trames de relance amiable. Ils ne constituent pas une mise en demeure.",
      "Un impayé contesté, ou un client en difficulté, appelle l’avis d’un avocat ou d’un commissaire de justice.",
    ],
    faq: [
      {
        q: 'Une assistante peut-elle relancer mes clients à ma place ?',
        a: "Oui, et c’est souvent plus simple : la relance vient d’un tiers, sur un ton constant, sans que la relation commerciale soit engagée. Les messages sont validés une fois par vous ; les cas sensibles vous remontent avant tout envoi.",
      },
      {
        q: 'Faut-il appliquer les pénalités de retard ?',
        a: "Elles sont dues de plein droit dès le lendemain de l’échéance, sans rappel préalable. Les réclamer effectivement est un choix commercial qui vous appartient. Les mentionner dans la seconde relance suffit souvent.",
      },
      {
        q: 'Au bout de combien de temps une facture est-elle perdue ?',
        a: "Il n’y a pas de seuil universel, et les délais de prescription relèvent d’un conseil juridique. En pratique, une facture qui dépasse deux mois de retard sans réponse doit faire l’objet d’une décision : mise en demeure, négociation d’un échéancier, ou abandon assumé.",
      },
    ],
    liens: [
      { href: '/guides/mise-en-demeure-et-injonction-de-payer', label: 'Après l’amiable : mise en demeure et injonction de payer' },
      { href: '/guides/delais-de-paiement-et-penalites-de-retard', label: 'Délais de paiement et pénalités de retard' },
      { href: '/guides/modele-tableau-de-suivi-des-factures', label: 'Modèle de tableau de suivi des factures' },
      { href: '/services/facturation', label: 'Confier sa facturation et ses relances' },
    ],
    sources: [SOURCE_RECOUVREMENT, SOURCE_DELAIS],
    cloture: 'Une relance qui part à date fixe n’a plus besoin de courage.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'relancer une facture impayée',
      variantes: ['relance facture impayée modèle', 'mail de relance facture', 'comment relancer un client qui ne paie pas'],
      persona: 'Dirigeant ou indépendant gêné de réclamer son dû',
      objectif: 'Donner une séquence datée et trois messages prêts à l’emploi',
      difference: 'Traite la relance comme une séquence écrite et tenue par un tiers, pas comme un acte de courage',
    },
  },

  {
    slug: 'delais-de-paiement-et-penalites-de-retard',
    type: 'reference',
    dossier: DOSSIER,
    categorie: 'Repère',
    nom: 'Délais de paiement et pénalités de retard',
    title: 'Délais de paiement et pénalités de retard entre pros · BrittAssist',
    description:
      "30 jours par défaut, 60 jours au plus, pénalités dues sans rappel et indemnité de 40 € : les règles de paiement entre professionnels, sourcées.",
    h1: 'Délais de paiement et pénalités de retard : les règles entre professionnels.',
    lede:
      "Beaucoup d’entreprises accordent à leurs clients des délais que la loi ne leur impose pas, et renoncent à des pénalités qu’elle leur donne. Voici ce que disent les textes, tels que les résume l’administration.",
    reponseCourte: [
      "Sans accord entre les parties, le délai de paiement est de 30 jours après la réception de la marchandise ou l’exécution de la prestation.",
      "Un délai négocié ne peut pas dépasser 60 jours après l’émission de la facture, ou 45 jours fin de mois.",
      "Les pénalités de retard sont exigibles dès le lendemain de l’échéance, sans qu’un rappel soit nécessaire. Leur taux ne peut pas être inférieur à trois fois le taux d’intérêt légal.",
      "Tout retard ouvre droit, en plus, à une indemnité forfaitaire de 40 € par facture pour frais de recouvrement.",
    ],
    sections: [
      {
        h2: 'Les délais',
        blocs: [
          {
            tableau: {
              legende: 'Délais de paiement entre professionnels',
              colonnes: ['Situation', 'Délai', 'Point de départ'],
              lignes: [
                ['Aucun délai convenu', '30 jours', 'Réception de la marchandise ou exécution de la prestation'],
                ['Délai négocié, cas général', '60 jours au plus', 'Émission de la facture'],
                ['Délai négocié, variante', '45 jours fin de mois', 'Émission de la facture'],
              ],
            },
          },
          {
            paragraphes: [
              "Certains secteurs et certaines opérations ont des délais particuliers : la page officielle les détaille. Le délai applicable doit figurer sur la facture et dans les conditions générales de vente.",
            ],
          },
        ],
      },
      {
        h2: 'Les pénalités de retard',
        blocs: [
          {
            liste: [
              "Elles courent dès le lendemain de la date d’échéance inscrite sur la facture.",
              "Elles sont dues sans qu’un rappel ou une mise en demeure soit nécessaire.",
              "Leur taux est fixé par vos conditions générales ou votre facture ; il ne peut pas être inférieur à trois fois le taux d’intérêt légal.",
              "Si aucun taux n’est prévu, s’applique le taux de refinancement de la Banque centrale européenne majoré de dix points.",
            ],
          },
          {
            paragraphes: [
              "Ces taux sont révisés chaque semestre. Plutôt que de les recopier ici, où ils seraient vite faux, reportez-vous à la page de l’administration : elle affiche les valeurs en vigueur.",
            ],
          },
        ],
      },
      {
        h2: 'L’indemnité forfaitaire de 40 €',
        blocs: [
          {
            paragraphes: [
              "Tout professionnel en retard de paiement doit à son créancier une indemnité forfaitaire de 40 € pour frais de recouvrement. Elle est due par facture payée en retard, une seule fois, quelle que soit la durée du retard, et s’ajoute aux pénalités. Si les frais réels de recouvrement sont supérieurs, une indemnisation complémentaire peut être demandée sur justification.",
              "Sa mention sur la facture est obligatoire. Elle ne s’applique pas aux clients particuliers.",
            ],
          },
        ],
      },
      {
        h2: 'Ce que cela change dans vos documents',
        blocs: [
          {
            etapes: [
              "Écrivez la date d’échéance en clair sur chaque facture.",
              "Indiquez le taux de vos pénalités de retard dans vos conditions générales et sur la facture.",
              "Ajoutez la mention de l’indemnité forfaitaire de 40 €.",
              "Vérifiez que le délai que vous accordez ne dépasse pas le plafond légal : un délai trop long expose à une sanction, même s’il vous est imposé par un client.",
            ],
          },
          {
            paragraphes: [
              "Le non-respect des délais de paiement est passible d’une amende administrative pouvant atteindre 75 000 € pour une personne physique et 2 millions d’euros pour une société.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Calculer le délai à partir de la réception de la facture par le client : le point de départ est l’émission de la facture, ou la livraison en l’absence d’accord.",
      "Croire qu’il faut une mise en demeure pour que les pénalités courent.",
      "Accepter « 90 jours » d’un donneur d’ordre parce qu’il est gros.",
    ],
    limites: [
      "Les montants et les taux cités ici proviennent de la page officielle consultée le 3 octobre 2026 ; ils peuvent changer.",
      "L’application à un contrat précis — marché public, secteur à délai dérogatoire, client étranger — relève d’un conseil juridique.",
    ],
    faq: [
      {
        q: 'Puis-je réclamer les pénalités si je ne les ai pas mentionnées ?',
        a: "Les pénalités sont dues de plein droit. Mais l’absence de mention sur la facture est en elle-même une irrégularité, et elle rend la réclamation plus difficile à faire accepter. La première chose à faire est de corriger vos modèles.",
      },
      {
        q: 'L’indemnité de 40 € s’applique-t-elle à un particulier ?',
        a: "Non. Elle ne concerne que les clients professionnels.",
      },
      {
        q: 'Qui calcule les pénalités dans une petite entreprise ?',
        a: "En pratique, personne, et c’est pourquoi elles ne sont jamais réclamées. Le calcul est simple une fois le taux fixé : il peut être tenu dans le tableau de suivi des factures, par la personne qui suit les échéances.",
      },
    ],
    liens: [
      { href: '/guides/relancer-une-facture-impayee', label: 'Relancer une facture impayée' },
      { href: '/guides/mentions-obligatoires-facture', label: 'Les mentions obligatoires d’une facture' },
      { href: '/guides/modele-tableau-de-suivi-des-factures', label: 'Modèle de tableau de suivi des factures' },
      { href: '/services/facturation', label: 'Confier sa facturation et ses relances' },
    ],
    sources: [SOURCE_DELAIS, SOURCE_MENTIONS],
    cloture: 'Un délai de paiement que vous n’avez pas écrit, c’est le client qui le choisit.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'référence',
      motCle: 'délais de paiement entre professionnels',
      variantes: ['pénalités de retard facture', 'indemnité forfaitaire 40 euros', 'délai de paiement légal facture'],
      persona: 'Dirigeant qui accorde ou subit des délais de paiement',
      objectif: 'Donner les règles exactes et leur traduction dans les documents commerciaux',
      difference: 'Renvoie aux taux officiels au lieu de les figer, et dit quoi modifier dans la facture et les CGV',
    },
  },

  {
    slug: 'mise-en-demeure-et-injonction-de-payer',
    type: 'guide',
    dossier: DOSSIER,
    categorie: 'Comprendre',
    nom: 'Mise en demeure et injonction de payer',
    title: 'Mise en demeure, injonction de payer : après la relance · BrittAssist',
    description:
      "Ce qui se passe quand la relance amiable échoue : la mise en demeure, l’injonction de payer, le dossier à préparer et le rôle de chacun.",
    h1: 'Après la relance amiable : mise en demeure, puis injonction de payer.',
    lede:
      "Quand les relances restent sans effet, le dossier change de nature. Il ne s’agit plus de rappeler, mais de formaliser. Cette page explique les deux étapes suivantes, ce qu’il faut avoir sous la main, et où s’arrête le travail administratif.",
    reponseCourte: [
      "La mise en demeure est un courrier recommandé avec accusé de réception qui demande le paiement en termes clairs et formels. Elle n’est pas toujours obligatoire, mais elle marque le passage du rappel à la réclamation.",
      "Si elle reste sans effet, la procédure d’injonction de payer permet de saisir le tribunal : le tribunal de commerce pour une créance commerciale, le tribunal judiciaire dans les autres cas.",
      "Ces étapes se gagnent sur pièces : devis accepté, bon de livraison, facture, relances. Un dossier complet fait une grande part du travail.",
      "Décider d’y aller est une décision de dirigeant. Rédiger l’acte relève d’un avocat ou d’un commissaire de justice.",
    ],
    sections: [
      {
        h2: 'La mise en demeure',
        blocs: [
          {
            paragraphes: [
              "La mise en demeure est l’acte par lequel le créancier demande formellement à son débiteur d’exécuter son obligation. Elle est adressée par lettre recommandée avec accusé de réception et doit contenir une interpellation suffisante : des termes assez clairs et assez formels pour qu’aucun doute ne subsiste sur ce qui est demandé.",
            ],
          },
          {
            h3: 'Ce qu’elle contient en pratique',
            liste: [
              "L’identité des deux parties.",
              "Le rappel de la créance : numéro, date et montant de la facture, date d’échéance.",
              "La demande de paiement, dans un délai précis.",
              "Le rappel des relances déjà envoyées.",
              "Ce que vous comptez faire à défaut de paiement.",
            ],
          },
        ],
      },
      {
        h2: 'L’injonction de payer',
        blocs: [
          {
            paragraphes: [
              "Si la phase amiable échoue, vous pouvez demander au tribunal une injonction de payer. C’est une procédure écrite : le juge statue sur les pièces que vous lui remettez, sans que le débiteur soit convoqué à ce stade. Si la demande est fondée, il rend une ordonnance qui devra être portée à la connaissance du débiteur.",
              "Le tribunal compétent dépend de la nature de la créance : le président du tribunal de commerce pour une créance commerciale, quel qu’en soit le montant ; le tribunal judiciaire dans les autres cas.",
            ],
          },
        ],
      },
      {
        h2: 'Le dossier à préparer',
        blocs: [
          {
            etapes: [
              "Le devis accepté, le bon de commande ou le contrat : la preuve que le travail a été demandé.",
              "La preuve de l’exécution : bon de livraison, procès-verbal de réception, compte rendu, échanges confirmant la prestation.",
              "La facture, complète, avec sa date d’échéance.",
              "Le journal des relances : dates, canaux, réponses obtenues.",
              "Les conditions générales acceptées par le client, pour les pénalités et l’indemnité forfaitaire.",
            ],
          },
          {
            paragraphes: [
              "Réunir ces pièces est un travail de classement et de suivi. C’est exactement ce qui peut être confié : le dossier est constitué au fil de l’eau, et il est prêt le jour où vous en avez besoin, au lieu d’être reconstitué dans l’urgence.",
            ],
          },
        ],
      },
      {
        h2: 'Qui fait quoi',
        blocs: [
          {
            tableau: {
              legende: 'Répartition des rôles dans le recouvrement',
              colonnes: ['Qui', 'Ce qui lui revient'],
              lignes: [
                ['Le dirigeant', 'Décider d’engager la procédure, de négocier un échéancier ou de renoncer'],
                ['L’assistance administrative', 'Tenir le journal des relances, réunir et classer les pièces, préparer le dossier'],
                ['L’avocat ou le commissaire de justice', 'Rédiger et signifier les actes, conseiller sur la procédure'],
                ['L’expert-comptable', 'Traiter comptablement la créance douteuse ou irrécouvrable'],
              ],
            },
          },
        ],
      },
    ],
    erreurs: [
      "Envoyer une « mise en demeure » par simple e-mail, sans termes formels ni preuve de réception.",
      "Lancer une procédure sans devis signé ni preuve de livraison.",
      "Laisser passer des mois entre la dernière relance et la décision.",
    ],
    limites: [
      "Cette page décrit le déroulement général. Elle ne constitue pas un conseil juridique et ne remplace pas un avocat ou un commissaire de justice.",
      "BrittAssist ne rédige pas d’actes juridiques : son rôle s’arrête à la préparation du dossier.",
    ],
    faq: [
      {
        q: 'La mise en demeure est-elle obligatoire avant de saisir le tribunal ?',
        a: "Pas dans tous les cas : l’administration indique qu’elle n’est obligatoire que dans des situations particulières. Elle reste recommandée, parce qu’elle fixe une date et montre que la voie amiable a été tentée.",
      },
      {
        q: 'Faut-il un avocat pour une injonction de payer ?',
        a: "La réponse dépend du tribunal et du montant en jeu ; c’est une question à poser à un professionnel du droit. La page officielle citée en référence décrit la procédure et ses formulaires.",
      },
      {
        q: 'Que peut préparer une assistante dans ce dossier ?',
        a: "Tout ce qui est factuel : la chronologie, les pièces, les relances, le calcul des sommes dues à partir de vos conditions. Elle ne qualifie pas la situation en droit et ne signe rien.",
      },
    ],
    liens: [
      { href: '/guides/relancer-une-facture-impayee', label: 'Relancer une facture impayée' },
      { href: '/guides/delais-de-paiement-et-penalites-de-retard', label: 'Délais de paiement et pénalités de retard' },
      { href: '/guides/ce-qu-une-assistante-externalisee-ne-fait-pas', label: 'Ce qu’une assistante externalisée ne fait pas' },
      { href: '/services/facturation', label: 'Confier sa facturation et ses relances' },
    ],
    sources: [
      SOURCE_RECOUVREMENT,
      { href: 'https://www.justice.fr/fiche/recouvrement-judiciaire-injonction-payer-france-europe', label: 'Justice.fr — Recouvrement judiciaire : injonction de payer' },
    ],
    cloture: 'Un impayé se plaide sur pièces. Les pièces se rangent bien avant le litige.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'informationnelle',
      motCle: 'mise en demeure facture impayée',
      variantes: ['injonction de payer', 'que faire après relance facture impayée', 'recouvrement facture professionnel'],
      persona: 'Dirigeant dont les relances restent sans réponse',
      objectif: 'Expliquer les deux étapes suivantes et le dossier à réunir, sans donner de conseil juridique',
      difference: 'Sépare nettement la décision, la préparation du dossier et l’acte juridique',
    },
  },

  {
    slug: 'relancer-un-devis-sans-reponse',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Relancer un devis sans réponse',
    title: 'Relancer un devis resté sans réponse : quand et comment · BrittAssist',
    description:
      "Un devis sans réponse n’est pas un refus. Quand relancer, quoi écrire, et à quel moment clore le dossier sans insister.",
    h1: 'Relancer un devis resté sans réponse, sans insister.',
    lede:
      "Un devis envoyé et jamais relancé est un devis laissé au hasard. Le client hésitait, comparait, ou l’avait simplement perdu dans sa boîte de réception. Dans les trois cas, un message court suffit souvent à le faire décider.",
    reponseCourte: [
      "Relancez une première fois quelques jours après l’envoi, une seconde fois une à deux semaines plus tard, puis clôturez par un dernier message avant la fin de validité du devis.",
      "La bonne relance ne demande pas « avez-vous eu le temps de regarder ? » : elle apporte quelque chose — une précision, une date, une réponse à une objection probable.",
      "Un devis doit porter une durée de validité : c’est elle qui donne une raison naturelle de relancer.",
      "Trois relances sans réponse valent une réponse. Clore le dossier proprement vaut mieux qu’un quatrième message.",
    ],
    sections: [
      {
        h2: 'Pourquoi un devis reste sans réponse',
        blocs: [
          {
            liste: [
              "Il est arrivé au mauvais moment, et il a été recouvert par d’autres messages.",
              "Le client attend un autre devis pour comparer.",
              "Un point n’est pas clair, et il n’ose pas ou ne prend pas le temps de le demander.",
              "La décision dépend de quelqu’un d’autre.",
              "Le projet est reporté, sans que personne ne pense à vous prévenir.",
            ],
          },
          {
            paragraphes: [
              "Aucune de ces raisons n’est un refus. Chacune se traite par une question simple, à condition qu’elle soit posée.",
            ],
          },
        ],
      },
      {
        h2: 'La séquence',
        blocs: [
          {
            etapes: [
              "À l’envoi : annoncez dans le message la date à laquelle vous reviendrez vers le client. La relance devient attendue.",
              "Première relance, quelques jours plus tard : vérifiez la bonne réception et proposez d’éclaircir un point.",
              "Seconde relance, une à deux semaines après : donnez une information utile — disponibilité, délai de mise en œuvre, date de fin de validité.",
              "Dernier message, avant l’expiration : indiquez que le devis arrive à son terme et que vous clôturez le dossier, sauf nouvelle de sa part.",
            ],
          },
        ],
      },
      {
        h2: 'Deux messages à reprendre',
        blocs: [
          {
            modele: {
              titre: 'Première relance',
              lignes: [
                "Objet : Votre devis du [date] — [objet]",
                "Bonjour [prénom],",
                "Je m’assure que le devis envoyé le [date] vous est bien parvenu.",
                "Si un point mérite d’être précisé ou ajusté, je peux le reprendre avec vous cette semaine : [créneau] ou [créneau] vous conviendrait-il ?",
                "Bien cordialement,",
              ],
            },
          },
          {
            modele: {
              titre: 'Dernier message',
              lignes: [
                "Objet : Devis du [date] — fin de validité le [date]",
                "Bonjour [prénom],",
                "Le devis que je vous ai adressé le [date] arrive à échéance le [date].",
                "Sans retour de votre part d’ici là, je considérerai que le projet n’est plus d’actualité et je clôturerai le dossier. Je reste bien sûr disponible si vous souhaitez le rouvrir plus tard.",
                "Bien cordialement,",
              ],
            },
          },
        ],
      },
      {
        h2: 'Tenir le suivi',
        blocs: [
          {
            paragraphes: [
              "La relance ne tient pas à la mémoire. Elle tient à un tableau : devis, client, date d’envoi, date de fin de validité, date de chaque relance, issue. Dix lignes suffisent pour voir, chaque lundi, ce qui attend une réponse. C’est aussi ce qui permet de confier la relance : la personne qui la fait n’a pas besoin de connaître le dossier, seulement de savoir où il en est.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Relancer avec « je me permets de revenir vers vous » et rien d’autre.",
      "Baisser le prix à la première relance, avant même que le client ait formulé une objection.",
      "Envoyer un devis sans durée de validité, et se retrouver sans motif pour le clore.",
    ],
    faq: [
      {
        q: 'Combien de fois relancer un devis ?',
        a: "Deux relances et un message de clôture conviennent à bien des situations. Au-delà, l’insistance coûte plus qu’elle ne rapporte. L’important est de clore explicitement : un dossier ouvert indéfiniment encombre le suivi.",
      },
      {
        q: 'Peut-on faire relancer ses devis par quelqu’un d’autre ?',
        a: "Oui, pour la relance de suivi : bonne réception, proposition de créneau, rappel de la date de validité. La négociation du prix ou du contenu reste chez vous ; elle vous est transmise dès que le client répond.",
      },
      {
        q: 'Quelle durée de validité indiquer sur un devis ?',
        a: "Celle pendant laquelle vous pouvez tenir votre prix et vos délais. Elle dépend de votre activité : la volatilité de vos coûts et votre plan de charge. L’essentiel est qu’elle soit écrite.",
      },
    ],
    liens: [
      { href: '/guides/devis-contenu-et-validite', label: 'Ce que doit contenir un devis' },
      { href: '/guides/acompte-ou-arrhes', label: 'Acompte ou arrhes' },
      { href: '/services/facturation', label: 'Confier sa facturation et ses relances' },
      { href: '/assistante/artisans-btp', label: 'L’administratif d’une entreprise du bâtiment' },
      { href: '/guides/traiter-les-demandes-de-devis-entrantes', label: 'Répondre vite aux demandes de devis entrantes' },
    ],
    cloture: 'Un devis non relancé est une vente confiée au hasard.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'relancer un devis sans réponse',
      variantes: ['mail de relance devis', 'relance devis client', 'devis sans réponse que faire'],
      persona: 'Artisan, consultant ou dirigeant de TPE qui envoie des devis',
      objectif: 'Donner une séquence courte et des messages qui apportent quelque chose',
      difference: 'Fait de la date de validité l’outil de relance, et assume la clôture du dossier',
    },
  },

  {
    slug: 'devis-contenu-et-validite',
    type: 'reference',
    dossier: DOSSIER,
    categorie: 'Repère',
    nom: 'Ce que doit contenir un devis',
    title: 'Devis : contenu, validité et valeur d’engagement · BrittAssist',
    description:
      "Quand le devis est obligatoire, ce qu’il doit contenir, combien de temps il est valable et à partir de quand il engage chaque partie.",
    h1: 'Le devis : ce qu’il doit contenir, et à partir de quand il engage.',
    lede:
      "Un devis est une offre de contrat. Tant qu’il n’est pas accepté, il n’engage que celui qui l’a émis ; une fois signé, il engage les deux. Cette mécanique simple explique bien des litiges : un devis flou produit un désaccord précis.",
    reponseCourte: [
      "Le devis n’est obligatoire que pour certaines activités, notamment les travaux et dépannages, le déménagement, les services à la personne et quelques secteurs réglementés. Entre professionnels, il reste d’usage et fortement recommandé.",
      "Il précise au minimum la date, la durée de validité, l’identité des parties, la nature exacte de la prestation, le décompte détaillé et le total à payer, hors taxes et toutes taxes.",
      "Il engage le professionnel dès que le client l’accepte, et le client à partir du moment où il le signe, avec une mention telle que « bon pour accord ».",
    ],
    sections: [
      {
        h2: 'Quand le devis est-il obligatoire ?',
        blocs: [
          {
            paragraphes: [
              "L’obligation ne vise que des activités listées par les textes : travaux et dépannage dans le bâtiment et l’équipement de la maison, déménagement, location de véhicules, optique médicale, appareillage auditif, services à la personne au-delà d’un certain montant, chirurgie esthétique, prestations funéraires. Pour ces activités, ne pas remettre de devis expose à une amende administrative pouvant atteindre 3 000 € pour une personne physique et 15 000 € pour une société.",
              "En dehors de ces cas, rien n’impose un devis entre deux professionnels. Mais sans lui, il n’existe aucune trace écrite de ce qui a été convenu.",
            ],
          },
        ],
      },
      {
        h2: 'Ce qu’un devis doit contenir',
        blocs: [
          {
            liste: [
              "La date de rédaction et la durée de validité de l’offre.",
              "Le nom, l’adresse et les coordonnées de l’entreprise.",
              "Le nom du client et le lieu d’exécution de la prestation.",
              "La nature exacte du travail ou de la prestation.",
              "Le décompte détaillé : quantités, prix unitaires, main-d’œuvre, frais de déplacement s’il y en a.",
              "La somme globale à payer, hors taxes et toutes taxes, avec le taux de TVA.",
              "Les modalités de paiement, et l’acompte demandé s’il y en a un.",
            ],
          },
          {
            paragraphes: [
              "Les mentions exigées varient selon le secteur. Dans une activité réglementée, vérifiez le modèle auprès de votre organisation professionnelle.",
            ],
          },
        ],
      },
      {
        h2: 'À partir de quand le devis engage-t-il ?',
        blocs: [
          {
            tableau: {
              legende: 'Valeur d’engagement du devis',
              colonnes: ['Moment', 'Qui est engagé'],
              lignes: [
                ['Devis envoyé, pas encore accepté', 'Le professionnel, sur son prix, pendant la durée de validité'],
                ['Devis signé avec « bon pour accord »', 'Les deux parties : le devis vaut contrat'],
                ['Durée de validité dépassée', 'Plus personne : le professionnel peut réviser son offre'],
              ],
            },
          },
          {
            paragraphes: [
              "Une acceptation par e-mail peut suffire à prouver l’accord, mais elle se discute plus facilement qu’un devis signé. Quand l’enjeu le justifie, demandez la signature, manuscrite ou électronique.",
            ],
          },
        ],
      },
      {
        h2: 'Les précisions qui évitent les litiges',
        blocs: [
          {
            liste: [
              "Ce qui n’est pas compris dans le prix, écrit noir sur blanc.",
              "Le délai d’exécution, et ce dont il dépend.",
              "Le traitement des demandes supplémentaires : un avenant chiffré, pas un accord oral.",
              "Les conditions d’annulation, et le sort de l’acompte.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Chiffrer « un forfait » sans décrire ce qu’il contient.",
      "Oublier la durée de validité.",
      "Commencer le travail sur un accord oral, puis découvrir un désaccord sur le périmètre.",
    ],
    limites: [
      "La liste des activités soumises à devis obligatoire provient d’une page officielle vérifiée en septembre 2022 par l’administration ; consultez-la pour votre cas précis.",
      "La rédaction de conditions générales ou de clauses particulières relève d’un conseil juridique.",
    ],
    faq: [
      {
        q: 'Un devis peut-il être payant ?',
        a: "Oui, selon les secteurs, à condition que le client en soit informé avant son établissement. Il est gratuit dans de nombreux cas ; la règle dépend de l’activité.",
      },
      {
        q: 'Une assistante peut-elle rédiger mes devis ?',
        a: "Elle peut les mettre en forme, les envoyer et les suivre à partir des éléments que vous lui donnez. Le chiffrage — le prix, les quantités, le choix technique — reste le vôtre : c’est votre métier et votre responsabilité.",
      },
      {
        q: 'Que faire si le client demande une modification après signature ?',
        a: "Établir un avenant : un document daté, chiffré, signé, qui décrit la modification et son prix. C’est ce qui évite la facture contestée en fin de chantier ou de mission.",
      },
    ],
    liens: [
      { href: '/guides/relancer-un-devis-sans-reponse', label: 'Relancer un devis sans réponse' },
      { href: '/guides/acompte-ou-arrhes', label: 'Acompte ou arrhes' },
      { href: '/guides/signature-electronique-niveaux-et-usages', label: 'La signature électronique : niveaux et usages' },
      { href: '/services/gestion-des-contrats', label: 'Faire préparer et suivre ses contrats' },
    ],
    sources: [SOURCE_DEVIS],
    cloture: 'Un devis précis coûte dix minutes. Un devis flou coûte la marge du chantier.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'référence',
      motCle: 'mentions obligatoires devis',
      variantes: ['que doit contenir un devis', 'durée de validité devis', 'devis signé engagement'],
      persona: 'Artisan, prestataire de services ou dirigeant de TPE',
      objectif: 'Clarifier le contenu, la validité et la valeur d’engagement d’un devis',
      difference: 'Centre la page sur le moment où chacun est engagé, source des litiges réels',
    },
  },

  {
    slug: 'acompte-ou-arrhes',
    type: 'comparatif',
    dossier: DOSSIER,
    categorie: 'Comparer',
    nom: 'Acompte ou arrhes',
    title: 'Acompte ou arrhes : la différence, et laquelle écrire · BrittAssist',
    description:
      "L’acompte engage définitivement les deux parties ; les arrhes laissent une porte de sortie. La différence, et le mot à écrire sur vos devis.",
    h1: 'Acompte ou arrhes : un mot sur le devis, deux conséquences.',
    lede:
      "Les deux mots désignent une somme versée à la commande, et on les emploie souvent l’un pour l’autre. Leur effet est pourtant opposé : l’un verrouille le contrat, l’autre permet d’en sortir.",
    reponseCourte: [
      "Un acompte est un premier paiement sur un contrat ferme : il engage les deux parties, et aucune ne peut se désister sans conséquence.",
      "Des arrhes laissent au client la possibilité de renoncer, en abandonnant la somme versée.",
      "Le mot écrit sur le devis décide du régime : écrivez celui que vous voulez réellement.",
    ],
    sections: [
      {
        h2: 'La différence, en un tableau',
        blocs: [
          {
            tableau: {
              legende: 'Acompte et arrhes',
              colonnes: ['', 'Acompte', 'Arrhes'],
              lignes: [
                ['Nature', 'Premier paiement d’un contrat ferme', 'Somme versée avec faculté de se dédire'],
                ['Le client peut-il renoncer ?', 'Non, sauf accord ou clause contraire', 'Oui, en perdant la somme versée'],
                ['Effet pour le professionnel', 'La commande est acquise', 'La commande peut être annulée, la somme lui reste'],
                ['À privilégier quand', 'Vous engagez des frais ou réservez une capacité', 'Vous acceptez qu’une réservation soit annulée'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Lequel choisir',
        blocs: [
          {
            paragraphes: [
              "Si vous commandez des matériaux, bloquez une équipe ou refusez d’autres clients pour honorer la commande, c’est un acompte qu’il vous faut : il traduit le fait que le contrat est conclu. Si vous prenez une réservation dont l’annulation ne vous coûte presque rien, les arrhes suffisent.",
              "Dans les contrats conclus avec des particuliers, des règles protectrices s’appliquent ; elles ne sont pas les mêmes qu’entre professionnels. Faites valider vos modèles par un professionnel du droit si vous vendez aux deux.",
            ],
          },
        ],
      },
      {
        h2: 'Comment l’écrire et le facturer',
        blocs: [
          {
            etapes: [
              "Écrivez le mot exact sur le devis : « acompte de 30 % à la commande », et non « versement ».",
              "Indiquez ce qui advient en cas d’annulation.",
              "Émettez une facture d’acompte à l’encaissement : elle porte les mêmes mentions qu’une facture ordinaire.",
              "Déduisez l’acompte sur la facture finale, en rappelant le numéro et la date de la facture d’acompte.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Écrire « arrhes » par habitude, puis s’étonner que le client annule sans autre conséquence que la perte de la somme.",
      "Encaisser un acompte sans émettre de facture d’acompte.",
      "Oublier de déduire l’acompte sur la facture finale, ou le déduire deux fois.",
    ],
    limites: [
      "Cette page donne le principe. Le régime exact, notamment face à un consommateur, relève du droit de la consommation et d’un conseil juridique.",
      "Le traitement de la TVA sur les acomptes est à voir avec votre expert-comptable.",
    ],
    faq: [
      {
        q: 'Que se passe-t-il si le devis ne précise rien ?',
        a: "La qualification dépend alors des règles applicables au contrat et à la qualité du client, ce qui est précisément la situation à éviter. Écrire le mot lève le doute.",
      },
      {
        q: 'Faut-il une facture pour un acompte ?',
        a: "Oui : l’encaissement d’un acompte donne lieu à une facture d’acompte, numérotée dans la même suite que vos autres factures.",
      },
      {
        q: 'Qui suit les acomptes dans une petite entreprise ?',
        a: "C’est une ligne du suivi de facturation : acompte demandé, reçu, facturé, déduit. Elle se tient dans le même tableau que les factures, par la personne qui suit les encaissements.",
      },
    ],
    liens: [
      { href: '/guides/devis-contenu-et-validite', label: 'Ce que doit contenir un devis' },
      { href: '/guides/numerotation-des-factures-et-avoirs', label: 'Numéroter ses factures et corriger par un avoir' },
      { href: '/guides/devis-factures-relances', label: 'Le circuit complet, du devis à l’encaissement' },
      { href: '/services/facturation', label: 'Confier sa facturation et ses relances' },
    ],
    sources: [SOURCE_DEVIS],
    cloture: 'Le mot que vous écrivez décide de ce qui se passe le jour où le client change d’avis.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'comparaison',
      motCle: 'acompte ou arrhes',
      variantes: ['différence acompte arrhes', 'acompte devis', 'facture d’acompte'],
      persona: 'Artisan ou prestataire qui demande un versement à la commande',
      objectif: 'Faire choisir le bon mot en connaissance de cause',
      difference: 'Relie le choix du mot à la réalité de l’entreprise : frais engagés ou simple réservation',
    },
  },

  {
    slug: 'numerotation-des-factures-et-avoirs',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Numéroter ses factures et corriger par un avoir',
    title: 'Numérotation des factures et avoirs : la règle, les cas · BrittAssist',
    description:
      "Une suite chronologique continue, sans trou ni doublon : comment numéroter ses factures, et comment corriger une erreur par un avoir.",
    h1: 'Numéroter ses factures, et corriger une erreur sans tout casser.',
    lede:
      "Le numéro d’une facture est la seule mention que l’on ne peut pas rattraper après coup. Un trou dans la suite, un doublon, une facture modifiée après envoi : chacun de ces accidents se voit, et chacun se corrige d’une seule manière.",
    reponseCourte: [
      "Chaque facture porte un numéro unique, dans une suite chronologique continue : pas de trou, pas de doublon, pas de retour en arrière.",
      "Vous pouvez utiliser plusieurs séries distinctes, par exemple par année, à condition que chacune soit continue.",
      "Une facture envoyée ne se modifie pas et ne se supprime pas : elle se corrige par un avoir, puis par une nouvelle facture si nécessaire.",
    ],
    sections: [
      {
        h2: 'La règle',
        blocs: [
          {
            paragraphes: [
              "L’administration demande un numéro unique fondé sur une séquence chronologique continue. Concrètement : la facture n° 2026-041 est suivie de la 2026-042, émise le même jour ou après, jamais avant.",
            ],
          },
          {
            h3: 'Trois formats courants',
            liste: [
              "Une suite simple : 0001, 0002, 0003.",
              "Une suite préfixée par l’année : 2026-001, 2026-002, avec remise à zéro au 1er janvier.",
              "Une suite préfixée par l’année et le mois : 2026-10-001.",
            ],
          },
          {
            paragraphes: [
              "Choisissez un format, écrivez-le, et n’en changez pas en cours d’exercice. Un logiciel de facturation tient la suite pour vous ; un tableur ou un traitement de texte ne le fait pas, et c’est là que naissent les doublons.",
            ],
          },
        ],
      },
      {
        h2: 'Corriger une facture : l’avoir',
        blocs: [
          {
            paragraphes: [
              "Une facture émise est un document comptable. Une erreur de prix, de quantité, de client ou de TVA ne se corrige pas en rééditant la facture : on émet un avoir, qui annule tout ou partie de la facture d’origine, puis une nouvelle facture correcte si besoin.",
            ],
          },
          {
            etapes: [
              "Émettez un avoir qui cite le numéro et la date de la facture corrigée.",
              "Numérotez-le dans votre suite, ou dans une série d’avoirs distincte et continue.",
              "Si la vente tient toujours, émettez une nouvelle facture, avec un nouveau numéro.",
              "Envoyez les deux documents ensemble, avec une phrase d’explication.",
            ],
          },
        ],
      },
      {
        h2: 'Les cas qui posent question',
        blocs: [
          {
            tableau: {
              legende: 'Cas fréquents de numérotation',
              colonnes: ['Situation', 'Ce qu’il faut faire'],
              lignes: [
                ['Facture créée par erreur, jamais envoyée', 'Selon votre outil : la conserver comme annulée, ou émettre un avoir. Ne pas réutiliser le numéro'],
                ['Deux factures portant le même numéro', 'Le signaler à l’expert-comptable et corriger par avoir et nouvelle facture'],
                ['Trou dans la suite', 'Documenter la raison et le conserver avec les pièces de l’exercice'],
                ['Changement de logiciel en cours d’année', 'Ouvrir une nouvelle série clairement identifiée, et garder la trace de la bascule'],
                ['Facture d’acompte', 'Même suite que les autres factures'],
              ],
            },
          },
        ],
      },
    ],
    erreurs: [
      "Tenir la numérotation à la main dans un modèle de traitement de texte.",
      "Antidater une facture pour « combler » un trou.",
      "Supprimer une facture envoyée parce que le client l’a contestée.",
    ],
    limites: [
      "Les exigences propres aux logiciels de caisse et à certains régimes relèvent de votre expert-comptable.",
      "En cas de doute sur une correction, demandez-lui avant d’émettre quoi que ce soit.",
    ],
    faq: [
      {
        q: 'Peut-on recommencer la numérotation chaque année ?',
        a: "Oui, si le numéro contient l’année : la suite reste alors unique et continue à l’intérieur de chaque série.",
      },
      {
        q: 'Peut-on avoir une série par activité ou par établissement ?',
        a: "Des séries distinctes sont admises lorsque les conditions d’exercice le justifient, à condition que chacune soit continue et identifiable par un préfixe. Voyez le détail avec votre expert-comptable.",
      },
      {
        q: 'Qui vérifie la continuité de la suite ?',
        a: "Le logiciel d’abord. Un contrôle mensuel rapide — première et dernière facture du mois, nombre de pièces — suffit ensuite à repérer un trou avant la transmission au cabinet comptable.",
      },
    ],
    liens: [
      { href: '/guides/mentions-obligatoires-facture', label: 'Les mentions obligatoires d’une facture' },
      { href: '/guides/choisir-un-logiciel-de-facturation', label: 'Choisir un logiciel de facturation' },
      { href: '/guides/pieces-pour-l-expert-comptable', label: 'Préparer les pièces pour l’expert-comptable' },
      { href: '/services/facturation', label: 'Confier sa facturation et ses relances' },
    ],
    sources: [SOURCE_MENTIONS],
    cloture: 'Une facture ne s’efface pas. Elle se corrige, et la correction se voit.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'numérotation des factures',
      variantes: ['numéro de facture règle', 'facture d’avoir', 'corriger une facture erronée'],
      persona: 'Indépendant ou dirigeant de TPE qui facture sans service comptable',
      objectif: 'Expliquer la règle de continuité et la bonne façon de corriger',
      difference: 'Traite les cas concrets : doublon, trou, bascule de logiciel, facture non envoyée',
    },
  },

  {
    slug: 'facture-de-situation-et-retenue-de-garantie',
    type: 'guide',
    dossier: DOSSIER,
    categorie: 'Comprendre',
    nom: 'Facture de situation et retenue de garantie',
    title: 'Facture de situation et retenue de garantie (bâtiment) · BrittAssist',
    description:
      "Facturer un chantier à l’avancement, et récupérer la retenue de garantie de 5 % un an après la réception : le suivi que personne ne fait.",
    h1: 'Factures de situation et retenue de garantie : le suivi d’un chantier.',
    lede:
      "Dans le bâtiment, une partie de la marge reste chez le client pendant un an. Ce n’est pas un impayé, c’est une retenue de garantie. Elle redevient un impayé le jour où plus personne ne se souvient qu’il faut la réclamer.",
    reponseCourte: [
      "Une facture de situation facture l’avancement d’un chantier à une date donnée : elle évite d’attendre la fin des travaux pour être payé.",
      "Dans un marché privé de travaux, le maître d’ouvrage peut retenir au plus 5 % du montant des acomptes pour garantir l’exécution : c’est la retenue de garantie, encadrée par la loi du 16 juillet 1971.",
      "La retenue est libérée à l’expiration d’un délai d’un an à compter de la réception des travaux, sauf opposition motivée du maître d’ouvrage.",
      "L’entreprise peut l’éviter en fournissant une caution d’un établissement financier pour le même montant.",
    ],
    sections: [
      {
        h2: 'La facture de situation',
        blocs: [
          {
            paragraphes: [
              "Sur un chantier long, facturer à la fin revient à financer le client pendant des mois. La facture de situation règle le problème : à échéances convenues, souvent mensuelles, l’entreprise facture ce qui a été réalisé depuis la situation précédente.",
            ],
          },
          {
            h3: 'Ce qu’elle doit faire apparaître',
            liste: [
              "Le montant total du marché, avenants compris.",
              "Le pourcentage d’avancement, lot par lot ou ligne par ligne.",
              "Le cumul facturé jusqu’à cette situation, et le montant des situations précédentes.",
              "Le montant de la situation en cours.",
              "La retenue de garantie pratiquée, s’il y en a une.",
              "Les mentions obligatoires de toute facture.",
            ],
          },
        ],
      },
      {
        h2: 'La retenue de garantie',
        blocs: [
          {
            paragraphes: [
              "La loi permet au maître d’ouvrage de retenir, sur chaque paiement, une somme égale au plus à 5 % de son montant. Cette retenue garantit contractuellement l’exécution des travaux, pour satisfaire aux réserves faites à la réception. Elle doit être prévue par le contrat, et la somme retenue doit être consignée.",
              "L’entreprise peut remplacer la retenue par une caution personnelle et solidaire d’un établissement financier, d’un montant égal. Elle est alors payée en totalité au fil des situations.",
            ],
          },
          {
            h3: 'La libération',
            paragraphes: [
              "À l’expiration d’un délai d’un an à compter de la date de réception des travaux, faite avec ou sans réserve, la caution est libérée ou les sommes consignées sont versées à l’entrepreneur, sauf si le maître d’ouvrage a notifié une opposition motivée par l’inexécution des obligations de l’entreprise.",
            ],
          },
        ],
      },
      {
        h2: 'Le suivi à tenir, chantier par chantier',
        blocs: [
          {
            etapes: [
              "À la signature : notez si le marché prévoit une retenue, à quel taux, et si une caution est possible.",
              "À chaque situation : enregistrez le montant retenu, pour connaître le cumul.",
              "À la réception : notez la date, c’est elle qui déclenche le délai d’un an. Listez les réserves.",
              "Dès que les réserves sont levées : faites-le constater par écrit.",
              "Onze mois après la réception : préparez la demande de libération, pour qu’elle parte à la date anniversaire.",
            ],
          },
          {
            paragraphes: [
              "Ce suivi tient dans un tableau de cinq colonnes. Il est rarement tenu, parce qu’il porte sur de l’argent dû dans un an, à une date où le chantier est sorti des esprits.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Ne pas noter la date de réception, et ne plus savoir quand la retenue est exigible.",
      "Laisser des réserves ouvertes sans constat de levée.",
      "Oublier de réclamer : la retenue n’est pas versée spontanément par tous les maîtres d’ouvrage.",
    ],
    limites: [
      "Cette page concerne les marchés privés de travaux. Les marchés publics obéissent au code de la commande publique.",
      "Un désaccord sur les réserves ou une opposition du maître d’ouvrage relève d’un conseil juridique.",
    ],
    faq: [
      {
        q: 'La retenue de garantie est-elle automatique ?',
        a: "Non. Elle doit être stipulée dans le contrat. Sans clause, le maître d’ouvrage ne peut pas la pratiquer.",
      },
      {
        q: 'Peut-on dépasser 5 % ?',
        a: "Non : la loi fixe ce plafond pour les marchés privés de travaux.",
      },
      {
        q: 'Une assistante peut-elle suivre les situations et les retenues ?',
        a: "Oui : préparer la situation à partir de l’avancement que vous validez, tenir le cumul des retenues, surveiller la date anniversaire de la réception et préparer la demande de libération. Le métré et l’avancement restent les vôtres.",
      },
    ],
    liens: [
      { href: '/assistante/artisans-btp', label: 'L’administratif d’une entreprise du bâtiment' },
      { href: '/guides/mentions-obligatoires-facture', label: 'Les mentions obligatoires d’une facture' },
      { href: '/guides/modele-tableau-de-suivi-des-factures', label: 'Modèle de tableau de suivi des factures' },
      { href: '/services/facturation', label: 'Confier sa facturation et ses relances' },
    ],
    sources: [
      { href: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000687670', label: 'Légifrance — Loi n° 71-584 du 16 juillet 1971 sur les retenues de garantie en matière de marchés de travaux' },
      SOURCE_MENTIONS,
    ],
    cloture: 'Cinq pour cent de chaque chantier vous attendent dans un an. Encore faut-il un agenda qui s’en souvienne.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'informationnelle',
      motCle: 'retenue de garantie bâtiment',
      variantes: ['facture de situation', 'libération retenue de garantie', 'retenue de garantie 5 %'],
      persona: 'Artisan ou dirigeant d’entreprise du bâtiment',
      objectif: 'Expliquer le mécanisme et donner le suivi qui évite d’oublier la libération',
      difference: 'Transforme une règle juridique en cinq dates à noter par chantier',
    },
  },

  {
    slug: 'choisir-un-logiciel-de-facturation',
    type: 'comparatif',
    dossier: DOSSIER,
    categorie: 'Choisir',
    nom: 'Choisir un logiciel de facturation',
    title: 'Choisir un logiciel de facturation : les vrais critères · BrittAssist',
    description:
      "Compatibilité avec la facturation électronique, relances, accès délégué, export comptable : les critères qui comptent, sans comparatif de marques.",
    h1: 'Choisir un logiciel de facturation : sept critères, aucun nom de marque.',
    lede:
      "Les comparatifs de logiciels vieillissent en six mois et sont souvent écrits par ceux qui les vendent. Cette page ne recommande aucun produit. Elle donne les questions à poser, dans l’ordre où elles éliminent des candidats.",
    reponseCourte: [
      "Le premier critère est la facturation électronique : l’outil doit être une plateforme agréée, ou relié à l’une d’elles.",
      "Viennent ensuite la numérotation continue, les relances, les accès séparés pour une personne tierce et l’export vers le cabinet comptable.",
      "Le bon outil est celui que votre expert-comptable sait reprendre et que la personne qui facture sait utiliser.",
    ],
    sections: [
      {
        h2: 'Les sept critères, par ordre d’élimination',
        blocs: [
          {
            tableau: {
              legende: 'Critères de choix d’un logiciel de facturation',
              colonnes: ['Critère', 'La question à poser à l’éditeur'],
              lignes: [
                ['Facturation électronique', 'Êtes-vous plateforme agréée, ou à laquelle êtes-vous relié ? Depuis quand ?'],
                ['Numérotation', 'La suite est-elle verrouillée ? Peut-on supprimer une facture émise ?'],
                ['Devis et acomptes', 'Un devis accepté devient-il facture, acompte déduit, sans ressaisie ?'],
                ['Relances', 'Peut-on programmer une séquence de relance et en garder l’historique ?'],
                ['Accès', 'Peut-on créer un utilisateur distinct, avec des droits limités ?'],
                ['Export comptable', 'Dans quel format, et mon cabinet sait-il le reprendre ?'],
                ['Réversibilité', 'Comment récupère-t-on toutes ses données en cas de départ ?'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Les deux critères sous-estimés',
        blocs: [
          {
            h3: 'Les accès séparés',
            paragraphes: [
              "Dès qu’une autre personne que vous facture — un salarié, une assistante, un associé — il lui faut son propre identifiant, avec les droits nécessaires et pas davantage. Un outil qui n’offre qu’un seul compte vous oblige à partager votre mot de passe, ce qui interdit de savoir qui a fait quoi et de retirer un accès proprement.",
            ],
          },
          {
            h3: 'La réversibilité',
            paragraphes: [
              "Vous changerez de logiciel un jour. Ce jour-là, il faudra emporter vos clients, vos factures et vos pièces. Vérifiez avant de signer qu’un export complet existe, dans un format lisible ailleurs.",
            ],
          },
        ],
      },
      {
        h2: 'Comment décider',
        blocs: [
          {
            etapes: [
              "Demandez à votre expert-comptable quels outils il reprend sans retraitement : cela réduit la liste d’emblée.",
              "Posez les sept questions à deux ou trois éditeurs, par écrit.",
              "Testez avec un vrai dossier : un devis, un acompte, une facture, un avoir, une relance.",
              "Faites tester la personne qui facturera au quotidien.",
              "Choisissez l’outil le plus simple qui passe les sept critères, pas le plus complet.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Choisir sur le prix mensuel, puis payer la différence en ressaisies.",
      "Prendre un outil que son cabinet comptable ne sait pas importer.",
      "Rester sur un tableur parce que « ça marche » : il ne tient ni la numérotation, ni le format électronique.",
    ],
    limites: [
      "BrittAssist n’édite, ne revend et ne recommande aucun logiciel, et ne perçoit aucune commission.",
      "Le paramétrage comptable et fiscal de l’outil se fait avec votre expert-comptable.",
    ],
    faq: [
      {
        q: 'Une assistante externalisée s’adapte-t-elle à mon logiciel ?',
        a: "Oui : le travail se fait dans vos outils, avec un accès que vous ouvrez. C’est une raison de plus de choisir un outil qui gère des utilisateurs distincts.",
      },
      {
        q: 'Faut-il un logiciel si l’on émet dix factures par an ?',
        a: "L’obligation d’émettre en électronique concernera toutes les entreprises assujetties à la TVA à partir du 1er septembre 2027, quel que soit le volume. Un outil relié à une plateforme agréée deviendra nécessaire, même pour dix factures.",
      },
      {
        q: 'Quel est le critère le plus souvent oublié ?',
        a: "La réversibilité. On choisit un outil en pensant à l’entrée, rarement à la sortie.",
      },
    ],
    liens: [
      { href: '/guides/facturation-electronique-tpe', label: 'La facturation électronique pour une TPE' },
      { href: '/guides/numerotation-des-factures-et-avoirs', label: 'Numéroter ses factures et corriger par un avoir' },
      { href: '/guides/partager-un-mot-de-passe-en-securite', label: 'Partager un accès sans partager son mot de passe' },
      { href: '/services/facturation', label: 'Confier sa facturation et ses relances' },
    ],
    sources: [SOURCE_EFACTURE],
    cloture: 'Le meilleur logiciel est celui dont vous pouvez sortir.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'comparaison',
      motCle: 'choisir un logiciel de facturation',
      variantes: ['logiciel de facturation TPE critères', 'logiciel facture électronique', 'quel logiciel de facturation'],
      persona: 'Dirigeant de TPE qui doit s’équiper ou changer d’outil',
      objectif: 'Donner une grille de questions indépendante de toute marque',
      difference: 'Aucun produit cité, aucun lien d’affiliation ; met en avant les accès délégués et la réversibilité',
    },
  },

  {
    slug: 'circuit-des-factures-fournisseurs',
    type: 'methode',
    dossier: DOSSIER,
    categorie: 'Méthode',
    nom: 'Le circuit des factures fournisseurs',
    title: 'Factures fournisseurs : un circuit de validation simple · BrittAssist',
    description:
      "Recevoir, vérifier, valider, payer, classer : un circuit en cinq étapes pour ne plus payer deux fois, ni en retard, ni sans contrôle.",
    h1: 'Les factures fournisseurs : cinq étapes, une seule personne qui décide.',
    lede:
      "On parle beaucoup des factures qu’on envoie, rarement de celles qu’on reçoit. C’est pourtant là que se logent les doubles paiements, les pénalités subies et les abonnements que plus personne n’utilise.",
    reponseCourte: [
      "Un circuit de factures fournisseurs tient en cinq étapes : réception en un point unique, vérification, validation, paiement, classement.",
      "La vérification et la préparation du paiement se délèguent. La validation reste chez la personne qui a commandé, et le paiement chez celle qui détient les moyens de paiement.",
      "Depuis le 1er septembre 2026, les factures électroniques arrivent par une plateforme agréée : c’est l’occasion d’avoir enfin un point d’entrée unique.",
    ],
    sections: [
      {
        h2: 'Les cinq étapes',
        blocs: [
          {
            etapes: [
              "Réception : toutes les factures arrivent au même endroit — la plateforme, une adresse e-mail dédiée, une bannette pour le papier restant.",
              "Vérification : la facture correspond-elle à une commande, à une livraison, au prix convenu ? Est-elle déjà enregistrée ?",
              "Validation : la personne qui a commandé confirme, par un oui explicite.",
              "Paiement : préparé à la date d’échéance, exécuté par la personne habilitée.",
              "Classement : la facture rejoint le dossier de l’exercice, avec la preuve de son paiement.",
            ],
          },
        ],
      },
      {
        h2: 'Les trois contrôles qui évitent l’essentiel des erreurs',
        blocs: [
          {
            liste: [
              "Le doublon : même fournisseur, même numéro, même montant. C’est le contrôle le plus simple et celui qui évite le plus de pertes.",
              "Le rapprochement : commande, livraison, facture. Si l’un des trois manque, la facture attend.",
              "Les coordonnées bancaires : tout changement de RIB annoncé par e-mail se vérifie par un appel au fournisseur, à un numéro déjà connu.",
            ],
          },
          {
            paragraphes: [
              "Ce dernier point n’est pas une précaution théorique : la fraude au changement de RIB vise précisément les circuits où la personne qui paie n’est pas celle qui connaît le fournisseur.",
            ],
          },
        ],
      },
      {
        h2: 'Qui fait quoi',
        blocs: [
          {
            tableau: {
              legende: 'Répartition des rôles sur les factures fournisseurs',
              colonnes: ['Étape', 'Peut être déléguée', 'Reste chez le dirigeant'],
              lignes: [
                ['Réception et enregistrement', 'Oui', '—'],
                ['Vérification et rapprochement', 'Oui', 'Les arbitrages en cas d’écart'],
                ['Validation', 'Non', 'Le « bon à payer »'],
                ['Préparation du paiement', 'Oui', 'L’exécution du virement'],
                ['Classement et transmission au cabinet', 'Oui', '—'],
              ],
            },
          },
        ],
      },
      {
        h2: 'Le rythme',
        blocs: [
          {
            paragraphes: [
              "Un passage par semaine suffit dans bien des petites structures : un jour pour enregistrer et vérifier, un jour pour valider et payer. Le rythme fixe a un effet secondaire utile : vos fournisseurs savent quand ils seront payés, et vous cessez de recevoir leurs relances.",
            ],
          },
        ],
      },
    ],
    erreurs: [
      "Laisser arriver les factures dans la boîte personnelle de chaque collaborateur.",
      "Payer « à réception » sans rapprochement, par manque de temps.",
      "Confier à la même personne la saisie du RIB et l’exécution du virement, sans contrôle.",
    ],
    limites: [
      "L’enregistrement comptable des factures relève de votre expert-comptable ou de votre service comptable.",
      "BrittAssist n’exécute pas de paiement à la place du dirigeant : la préparation est déléguée, la signature ne l’est pas.",
    ],
    faq: [
      {
        q: 'Peut-on déléguer la validation des factures ?',
        a: "La vérification, oui. La validation — le « bon à payer » — est une décision d’engagement : elle reste chez la personne responsable de la dépense. Elle peut être réduite à un oui hebdomadaire sur une liste préparée.",
      },
      {
        q: 'Que change la facturation électronique pour les factures reçues ?',
        a: "Les factures de vos fournisseurs français arrivent par votre plateforme agréée, dans un format structuré. Le point d’entrée devient unique et le rapprochement plus simple. Les factures hors champ — fournisseurs étrangers, par exemple — continuent d’arriver autrement.",
      },
      {
        q: 'Comment éviter de payer deux fois la même facture ?',
        a: "Par un enregistrement unique à la réception, avec contrôle du couple fournisseur et numéro de facture. Un outil le fait automatiquement ; un tableau le fait aussi, s’il est tenu.",
      },
    ],
    liens: [
      { href: '/guides/fraude-au-faux-rib-et-au-president', label: 'Fraude au faux RIB et au président : la parade' },
      { href: '/guides/facturation-electronique-tpe', label: 'La facturation électronique pour une TPE' },
      { href: '/guides/pieces-pour-l-expert-comptable', label: 'Préparer les pièces pour l’expert-comptable' },
      { href: '/services/gestion-administrative', label: 'Confier sa gestion administrative' },
      { href: '/guides/acces-bancaire-pour-son-assistante', label: 'Le niveau d’accès bancaire à ouvrir' },
    ],
    sources: [SOURCE_EFACTURE],
    cloture: 'Payer juste et à l’heure, c’est d’abord savoir ce qu’on a reçu.',
    datePublished: DATE,
    dateModified: DATE,
    cadrage: {
      intention: 'méthode',
      motCle: 'circuit de validation factures fournisseurs',
      variantes: ['traitement des factures fournisseurs', 'bon à payer', 'éviter double paiement facture'],
      persona: 'Dirigeant de TPE ou PME sans service comptable interne',
      objectif: 'Installer un circuit de réception, contrôle, validation et paiement',
      difference: 'Sépare ce qui se délègue de ce qui engage, et intègre la parade à la fraude au RIB',
    },
  },
];
