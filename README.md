# BrittAssist — Refonte 2026

Refonte du site [brittassist.fr](https://www.brittassist.fr) avec repositionnement :
**assistance digitale humaine + IA** pour entrepreneurs, artisans, commerçants et TPE.

> *"Je vous aide à gagner du temps grâce à une assistance digitale humaine, soutenue par l'intelligence artificielle."*

---

## Ce qui change par rapport à l'ancien site

- ✅ Nouveau positionnement : assistance digitale humaine + IA
- ✅ Vouvoiement (cible TPE / artisans)
- ✅ Suppression des 3 forfaits figés (Starter / Essentiel / Premium)
- ✅ Nouvelle page **/domaines-intervention** (7 domaines sans prix)
- ✅ Nouvelle page **/methode** (parcours en 4 temps)
- ✅ Nouvelle page **/ecosysteme** (passerelle vers Axdia + partenaires)
- ✅ Architecture éditoriale (sections § numérotées, registry bar, timeline)
- ✅ Migration HTML statique → Astro 5 (composants partagés)

---

## Stack

- **Astro 5** (statique, output `file`)
- **CSS pur** (palette rose pastel / jaune / crème conservée)
- **Cormorant Garamond + DM Sans** (typographies conservées)
- Déploiement **Vercel**
- Formulaires via **Formsubmit** (zéro backend)
- Sitemap auto-généré par `@astrojs/sitemap`

---

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build production

```bash
npm run build    # → dist/
npm run preview  # prévisualiser le build
```

---

## Structure

```
src/
├── layouts/
│   └── BaseLayout.astro       # SEO, JSON-LD, header, footer, registry bar
├── components/
│   ├── Header.astro           # Navigation + dark mode + menu mobile
│   ├── Footer.astro           # 4 colonnes : brand / nav / écosystème / contact
│   ├── RegistryBar.astro      # Bandeau fixe haut
│   ├── SectionMark.astro      # § pilcrow + numéro de section
│   └── Button.astro           # Boutons (primary/outline/outline-dark)
├── pages/
│   ├── index.astro                                # Accueil
│   ├── domaines-intervention.astro                # 7 domaines, sans prix
│   ├── methode.astro                              # 4 étapes
│   ├── ecosysteme.astro                           # Axdia + partenaires
│   ├── a-propos.astro                             # Brittany + IA
│   ├── contact.astro                              # Formsubmit + Calendly
│   ├── questionnaire.astro                        # Questionnaire de découverte
│   ├── assistante-administrative-vendee.astro     # Landing SEO locale
│   ├── mentions-legales.astro
│   ├── cgv.astro
│   └── politique-confidentialite.astro
└── styles/
    └── global.css             # Design system complet
public/
├── images/                    # Photos Brittany + posts + logo
├── favicon.ico
├── robots.txt
└── consent.js                 # Cookie consent (optionnel)
vercel.json                    # Headers CSP/HSTS + redirects 301
```

---

## Redirects en place (vercel.json)

- `/services` et `/services.html` → `/domaines-intervention` (301)
- `/questionnaires` → `/questionnaire` (301)
- Toutes les anciennes URLs `.html` redirigent vers les nouvelles versions sans extension

---

## Validation client

Cette branche est destinée à être validée par Brittany avant mise en ligne sur
la production. La preview Vercel est disponible à l'URL fournie séparément.

— Refonte conçue et développée par Axel Dreano · [axdia.fr](https://www.axdia.fr)
