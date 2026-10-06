/**
 * Bibliothèque des guides — l'ensemble des pages servies sous /guides/<slug>.
 *
 * Les douze premiers guides restent dans guides.ts. Les suivants sont rangés par
 * dossier dans ./dossiers/, un fichier par thème : chaque dossier s'ouvre sur un
 * pilier (une page de synthèse) et réunit les pages qui en détaillent un point.
 *
 * La série « secrétariat externalisé » (fichiers secretariat-*.ts) ne crée aucun
 * dossier : ses pages rejoignent les huit dossiers existants, selon leur sujet.
 * Elles sont ajoutées en fin de liste, donc après les pages déjà en place dans
 * chaque dossier.
 *
 * Les imports portent l'extension .ts pour que les scripts de contrôle puissent
 * charger ce module directement avec Node, sans passer par le build.
 */
import { guides as premiersGuides } from './guides.ts';
import type { Guide } from './guides.ts';
import { externaliser } from './dossiers/externaliser.ts';
import { administratif } from './dossiers/administratif.ts';
import { facturation } from './dossiers/facturation.ts';
import { agenda } from './dossiers/agenda.ts';
import { deplacements } from './dossiers/deplacements.ts';
import { confidentialite } from './dossiers/confidentialite.ts';
import { situations } from './dossiers/situations.ts';
import { modeles } from './dossiers/modeles.ts';
import { secretariatDecision } from './dossiers/secretariat-decision.ts';
import { secretariatPilotage } from './dossiers/secretariat-pilotage.ts';
import { secretariatRisques } from './dossiers/secretariat-risques.ts';
import { secretariatProcessus } from './dossiers/secretariat-processus.ts';
import { secretariatRelation } from './dossiers/secretariat-relation.ts';
import { estBrouillon, estGeneree, estPubliee } from './publication.mjs';

export interface Dossier {
  /** Slug du pilier : la page /guides/<slug> ouvre le dossier */
  slug: string;
  nom: string;
  resume: string;
  /** Appel à l'action de fin de page, propre au thème */
  action: { titre: string; texte: string; href: string; label: string };
}

export const dossiers: Dossier[] = [
  {
    slug: 'externaliser-son-assistanat',
    nom: 'Externaliser et déléguer',
    resume: 'Décider, choisir, contractualiser et faire fonctionner une assistance externalisée.',
    action: {
      titre: 'Une réponse générale ne remplace pas un avis sur votre situation.',
      texte: 'Trente minutes suffisent à savoir si un Private Office est la bonne réponse pour vous — et à le dire franchement si ce n’est pas le cas.',
      href: '/contact',
      label: 'Échanger avec Brittany',
    },
  },
  {
    slug: 'organiser-l-administratif-de-son-entreprise',
    nom: 'Administratif d’entreprise',
    resume: 'Classer, nommer, conserver, suivre les échéances et préparer les pièces.',
    action: {
      titre: 'L’administratif peut sortir de vos soirées.',
      texte: 'Classement, échéances, pièces pour l’expert-comptable : c’est une ligne du périmètre BrittAssist, définie au devis.',
      href: '/services/gestion-administrative',
      label: 'Voir la prise en charge administrative',
    },
  },
  {
    slug: 'devis-factures-relances',
    nom: 'Devis, factures et relances',
    resume: 'Du devis envoyé à la facture encaissée : règles, circuit et relances.',
    action: {
      titre: 'Une facture qui part à temps, une relance qui part tout court.',
      texte: 'Préparer, envoyer, suivre et relancer : ce circuit se confie, sans toucher à votre comptabilité ni à vos décisions.',
      href: '/services/facturation',
      label: 'Voir la prise en charge de la facturation',
    },
  },
  {
    slug: 'agenda-emails-reunions',
    nom: 'Agenda, e-mails et réunions',
    resume: 'Tenir son temps : messagerie, rendez-vous, réunions et absences.',
    action: {
      titre: 'Votre agenda peut être tenu sans vous.',
      texte: 'Rendez-vous, confirmations, arbitrages d’horaires et préparation des réunions font partie de ce qui se délègue le mieux.',
      href: '/services/gestion-agenda',
      label: 'Voir la gestion d’agenda',
    },
  },
  {
    slug: 'deplacements-et-evenements-professionnels',
    nom: 'Déplacements et événements',
    resume: 'Préparer un déplacement, un séminaire ou une réception sans rien oublier.',
    action: {
      titre: 'Un déplacement réussi est un déplacement auquel vous n’avez pas pensé.',
      texte: 'Transports, hébergement, feuille de route et imprévus : l’organisation complète peut être prise en charge.',
      href: '/services/organisation-deplacements',
      label: 'Voir l’organisation des déplacements',
    },
  },
  {
    slug: 'confidentialite-acces-et-outils',
    nom: 'Confidentialité, accès et outils',
    resume: 'Partager des accès, protéger des données et choisir ses outils de travail.',
    action: {
      titre: 'Déléguer ne veut pas dire tout ouvrir.',
      texte: 'Le périmètre, les accès et leur retrait se définissent avant la première demande. C’est la première étape d’un Private Office.',
      href: '/private-office',
      label: 'Voir le fonctionnement',
    },
  },
  {
    slug: 'situations-de-dirigeant',
    nom: 'Situations de dirigeant',
    resume: 'Retard accumulé, absence, reprise, saison : par où commencer selon votre cas.',
    action: {
      titre: 'Votre situation n’est sans doute pas exactement celle de la page.',
      texte: 'Décrivez-la en quelques lignes : vous saurez en trente minutes ce qui peut être pris en charge, et ce qui ne le peut pas.',
      href: '/contact',
      label: 'Décrire votre situation',
    },
  },
  {
    slug: 'modeles-et-checklists',
    nom: 'Modèles et checklists',
    resume: 'Des trames à reprendre : tableaux de suivi, fiches, listes de contrôle.',
    action: {
      titre: 'Un modèle aide. Quelqu’un qui le tient à jour aide davantage.',
      texte: 'Ces trames sont celles d’un suivi délégué : elles prennent leur valeur quand quelqu’un les remplit à votre place.',
      href: '/private-office',
      label: 'Voir le fonctionnement',
    },
  },
];

const PREMIER_DOSSIER = dossiers[0].slug;

/** Toutes les pages, publiées ou non. L'ordre est celui de l'affichage dans les index. */
export const bibliotheque: Guide[] = [
  ...premiersGuides.map((g) => ({ ...g, dossier: g.dossier ?? PREMIER_DOSSIER })),
  ...externaliser,
  ...administratif,
  ...facturation,
  ...agenda,
  ...deplacements,
  ...confidentialite,
  ...situations,
  ...modeles,
  ...secretariatDecision,
  ...secretariatPilotage,
  ...secretariatRisques,
  ...secretariatProcessus,
  ...secretariatRelation,
];

export const cheminDuGuide = (g: Guide) => `/guides/${g.slug}`;
export const guideEstBrouillon = (g: Guide) => estBrouillon(cheminDuGuide(g));
export const guideEstPublie = (g: Guide) => estPubliee(cheminDuGuide(g));

/** Les pages réellement présentes dans le build en cours. */
export const guidesGeneres = (): Guide[] => bibliotheque.filter((g) => estGeneree(cheminDuGuide(g)));

export function dossierDe(g: Guide): Dossier {
  return dossiers.find((d) => d.slug === g.dossier) ?? dossiers[0];
}

/** Le pilier d'un dossier, s'il est présent dans le build. */
export function pilierDuDossier(slug: string): Guide | undefined {
  return guidesGeneres().find((g) => g.slug === slug && g.type === 'pilier');
}

/** Les pages d'un dossier présentes dans le build, pilier exclu. */
export function pagesDuDossier(slug: string): Guide[] {
  return guidesGeneres().filter((g) => g.dossier === slug && g.slug !== slug);
}

/**
 * Pages voisines : celles qui suivent la page dans son dossier, en boucle.
 * Chaque page propose ainsi une suite différente, et aucune n'est oubliée.
 */
export function voisins(g: Guide, nombre = 5): Guide[] {
  const fratrie = pagesDuDossier(g.dossier ?? PREMIER_DOSSIER);
  const position = fratrie.findIndex((x) => x.slug === g.slug);
  const autres = fratrie.filter((x) => x.slug !== g.slug);
  if (position === -1) return autres.slice(0, nombre);
  const depart = position % Math.max(autres.length, 1);
  return [...autres.slice(depart), ...autres.slice(0, depart)].slice(0, nombre);
}
