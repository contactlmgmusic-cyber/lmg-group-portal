import type {
  NewsArticle,
  Project,
} from "./editorial-types";

export type SearchEntry = {
  title: string;
  href: string;
  category:
    | "The Group"
    | "Businesses"
    | "Projects"
    | "News";
  description: string;
  keywords: string;
};

const coreEntries: SearchEntry[] = [
  {
    title: "About LMG Group",
    href: "/groupe",
    category: "The Group",
    description:
      "Vision, approach, leadership and structure of Legacy Music Group.",
    keywords:
      "LMG Legacy Music Group groupe group about à propos vision approach approche leadership direction Joseph Kayaya Yliana Faidherbe founders fondateurs équipe team values valeurs",
  },

  {
    title: "Businesses & Products",
    href: "/poles",
    category: "The Group",
    description:
      "Discover LMG Music and LMG Agency, the two core businesses of Legacy Music Group.",
    keywords:
      "business businesses products activités métiers expertises pôles divisions music musique agency agence live entertainment creative création digital",
  },

  {
    title: "LMG Music",
    href: "/poles/music",
    category: "Businesses",
    description:
      "Artist development, music projects, artistic direction and live entertainment.",
    keywords:
      "LMG Music musique artist artiste artists artistes artist development développement artistique music projects projets musicaux artistic direction direction artistique release strategy stratégie sortie live entertainment booking showcase showcases concert concerts",
  },

  {
    title: "LMG Agency",
    href: "/poles/agency",
    category: "Businesses",
    description:
      "Strategy, branding, creative direction, communication and digital experiences.",
    keywords:
      "LMG Agency agence strategy stratégie branding brand identité identity creative création direction créative communication content contenus digital web website site experiences expériences",
  },

  {
    title: "Contact Us",
    href: "/contact",
    category: "The Group",
    description:
      "Find the right Legacy Music Group contact for your inquiry.",
    keywords:
      "contact email mail inquiry demande partnership partenariat music musique agency agence press presse",
  },

  {
    title: "Press & Media",
    href: "/presse",
    category: "The Group",
    description:
      "LMG Group profile, logos, media resources and press contact.",
    keywords:
      "press presse media médias interview resources ressources logo logos brand assets identité visuelle communication download télécharger",
  },
];

export function buildSearchEntries(
  projects: readonly Project[],
  news: readonly NewsArticle[]
): SearchEntry[] {
  const projectEntries: SearchEntry[] =
    projects.map((project) => ({
      title: project.title,
      href: `/projets/${project.slug}`,
      category: "Projects",
      description: project.intro,
      keywords: [
        project.division,
        project.category,
        project.body,
        project.context,

        // Entertainment is now part of LMG Music.
        project.division
          ?.toLowerCase()
          .includes("entertainment")
          ? "LMG Music music musique live entertainment booking showcase"
          : "",
      ]
        .filter(Boolean)
        .join(" "),
    }));

  const newsEntries: SearchEntry[] =
    news.map((article) => ({
      title: article.title,
      href: `/actualites/${article.slug}`,
      category: "News",
      description: article.intro,
      keywords: [
        article.category,
        article.sections
          .map(
            (section) =>
              `${section.title} ${section.text}`
          )
          .join(" "),
      ]
        .filter(Boolean)
        .join(" "),
    }));

  return [
    ...coreEntries,
    ...projectEntries,
    ...newsEntries,
  ];
}

export function normalizeSearch(
  value: string
) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}