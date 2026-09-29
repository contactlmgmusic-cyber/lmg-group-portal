export type Locale = "en" | "fr";

export const defaultLocale: Locale = "en";

export const translations = {
  en: {
    navigation: {
      about: "About LMG Group",
      businesses: "Businesses & Products",
      projects: "Projects",
      news: "News",
      contact: "Contact Us",
      search: "Search",
      menu: "Menu",
      close: "Close",
    },

    about: {
      title: "About LMG Group",
      intro:
        "Discover the vision, expertise and people shaping Legacy Music Group.",

      group: "About the Group",
      groupDescription: "Discover Legacy Music Group",

      vision: "Our Vision",
      visionDescription: "What drives Legacy Music Group",

      ecosystem: "The LMG Ecosystem",
      ecosystemDescription: "One group, complementary expertise",

      approach: "Our Approach",
      approachDescription: "Understand, connect, build",

      leadership: "Leadership",
      leadershipDescription: "The team leading Legacy Music Group",

      press: "Press & Media",
      pressDescription: "Company profile, logos and press contact",
    },

    businesses: {
      title: "Businesses & Products",
      intro:
        "Explore the businesses and expertise within Legacy Music Group.",

      all: "Our Businesses",
      allDescription: "Explore the LMG ecosystem",

      music: "LMG Music",
      musicDescription:
        "Music, artist development & live entertainment",

      agency: "LMG Agency",
      agencyDescription: "Strategy, creative & digital",
    },

    projects: {
      title: "Projects",
      intro:
        "Discover selected projects and initiatives across Legacy Music Group.",
      all: "All Projects",
      allDescription: "Explore selected LMG projects",
    },

    news: {
      title: "Newsroom",
      intro:
        "Latest news, announcements and stories from across Legacy Music Group.",
      all: "All News",
      allDescription: "Latest from Legacy Music Group",
    },

    tagline: "Create. Develop. Build.",
  },

  fr: {
    navigation: {
      about: "À propos de LMG Group",
      businesses: "Activités & Expertises",
      projects: "Projets",
      news: "Actualités",
      contact: "Nous contacter",
      search: "Rechercher",
      menu: "Menu",
      close: "Fermer",
    },

    about: {
      title: "À propos de LMG Group",
      intro:
        "Découvrez la vision, les expertises et les personnes qui façonnent Legacy Music Group.",

      group: "Découvrir le groupe",
      groupDescription: "Découvrez Legacy Music Group",

      vision: "Notre vision",
      visionDescription: "Ce qui anime Legacy Music Group",

      ecosystem: "L'écosystème LMG",
      ecosystemDescription:
        "Un groupe, des expertises complémentaires",

      approach: "Notre approche",
      approachDescription: "Comprendre, relier, construire",

      leadership: "La direction",
      leadershipDescription: "L'équipe à la tête du groupe",

      press: "Presse & Médias",
      pressDescription:
        "Présentation du groupe, logos et contact presse",
    },

    businesses: {
      title: "Activités & Expertises",
      intro:
        "Découvrez les activités et les expertises de Legacy Music Group.",

      all: "Nos activités",
      allDescription: "Découvrez l'écosystème LMG",

      music: "LMG Music",
      musicDescription:
        "Musique, développement artistique & live entertainment",

      agency: "LMG Agency",
      agencyDescription: "Stratégie, création & digital",
    },

    projects: {
      title: "Projets",
      intro:
        "Découvrez une sélection de projets et d'initiatives portés par Legacy Music Group.",
      all: "Tous les projets",
      allDescription: "Découvrez la sélection LMG",
    },

    news: {
      title: "Actualités",
      intro:
        "Les dernières actualités, annonces et histoires de Legacy Music Group.",
      all: "Toutes les actualités",
      allDescription: "Les dernières nouvelles de LMG",
    },

    tagline: "Créer. Développer. Construire.",
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}