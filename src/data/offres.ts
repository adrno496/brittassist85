/** Accompagnements mensuels : contenu fourni par Brittany. */
export const offres = [
  {
    id: 'executive-essentials',
    nom: 'Executive Essentials',
    prix: '590 à 790 € / mois',
    minimum: 590,
    maximum: 790,
    tag: 'Le quotidien professionnel',
    principale: false,
    description: 'Pour le dirigeant qui souhaite déléguer son back-office et une partie de son organisation quotidienne.',
    prestations: [
      'Gestion administrative récurrente',
      'Gestion d’agenda et coordination',
      'Suivi des échéances et des documents',
      'Traitement des demandes ponctuelles',
      'Reporting hebdomadaire',
    ],
  },
  {
    id: 'executive-lifestyle-premium',
    nom: 'Executive & Lifestyle Premium',
    prix: '990 à 1 490 € / mois',
    minimum: 990,
    maximum: 1490,
    tag: 'Mon offre cœur de gamme',
    principale: true,
    description: 'Mon offre cœur de gamme, pensée pour les dirigeants qui souhaitent déléguer davantage, aussi bien sur le plan professionnel que personnel.',
    prestations: [
      'Toutes les prestations Executive Essentials',
      'Organisation des déplacements',
      'Réservations de restaurants, événements et activités',
      'Coordination professionnelle et personnelle',
      'Gestion des préférences et habitudes du dirigeant',
      'Priorité de traitement supérieure',
      'Suivi plus poussé des prestataires et des demandes',
    ],
  },
  {
    id: 'private-office',
    nom: 'Private Office',
    prix: 'À partir de 1 800 € / mois',
    minimum: 1800,
    maximum: undefined,
    tag: 'Un accompagnement sur mesure',
    principale: false,
    description: 'Un accompagnement sur mesure pour les dirigeants ayant un volume important de demandes ou des besoins organisationnels complexes.',
    prestations: [
      'Coordination quotidienne professionnelle et personnelle',
      'Gestion de plusieurs sociétés ou projets',
      'Organisation de déplacements fréquents',
      'Coordination de nombreux prestataires',
      'Reporting personnalisé et sur mesure',
      'Niveau de disponibilité et de personnalisation défini contractuellement',
    ],
  },
];

export const approche = [
  'L’objectif n’est pas simplement de déléguer des tâches administratives, mais de libérer du temps, de l’attention et de la charge mentale.',
  'Je prends en charge les sujets qui mobilisent inutilement votre énergie au quotidien, afin de vous permettre de rester concentré sur vos priorités, vos décisions et le développement de vos activités.',
  'Chaque accompagnement est adapté à votre organisation, au volume de vos besoins et au niveau de délégation souhaité.',
  'Les tarifs reflètent donc le périmètre et le niveau d’accompagnement, plutôt qu’un simple nombre d’heures de secrétariat.',
];

/** Une fourchette ou un minimum, sans présenter le prix d’entrée comme un prix fixe. */
export function offreStructuree(offre: (typeof offres)[number]) {
  return {
    '@type': 'Offer',
    name: offre.nom,
    description: `${offre.description} ${offre.prix}. Périmètre défini dans la proposition personnalisée.`,
    url: `https://www.brittassist.fr/tarifs#${offre.id}`,
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      minPrice: offre.minimum,
      ...(offre.maximum ? { maxPrice: offre.maximum } : {}),
      priceCurrency: 'EUR',
      unitCode: 'MON',
    },
    eligibleDuration: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
  };
}
