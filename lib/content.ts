import type { Project } from "./editorial-types";

export const divisions = [
  {
    slug: "music",
    name: "Music",
    number: "01",

    field:
      "Music · Artist Development · Live Entertainment",

    headline:
      "Develop artists.\nBuild worlds.\nCreate moments.",

    description:
      "LMG Music develops artists and music projects from artistic direction to release strategy, while bringing talent and audiences together through booking, showcases and live experiences.",

    skills: [
      [
        "Artist Development",
        "Build the artistic identity, positioning and long-term direction of each artist.",
      ],
      [
        "Music Projects & Releases",
        "Connect music, image and key release moments into one coherent story.",
      ],
      [
        "Live Entertainment",
        "Connect artists, organizers and audiences through booking, showcases and live experiences.",
      ],
    ],

    contact: "Present a music or live project",
    subject: "LMG Music — Music & Live Inquiry",

    website: "https://lmgmusic.fr",

    project: "fly",
  },

  {
    slug: "agency",
    name: "Agency",
    number: "02",

    field:
      "Strategy · Creative · Digital",

    headline:
      "Give ambition\na clear form.",

    description:
      "LMG Agency supports brands, companies and talents through strategy, creative direction, communication and digital experiences.",

    skills: [
      [
        "Strategy",
        "Clarify positioning, messages and communication priorities.",
      ],
      [
        "Identity & Content",
        "Build recognizable identities and content across every touchpoint.",
      ],
      [
        "Digital Experiences",
        "Design websites and digital journeys around the people who use them.",
      ],
    ],

    contact: "Talk about your brand",
    subject: "LMG Agency — Brand & Digital Inquiry",

    website:
      "https://lmgagency.fr",

    project: "deepa",
  },
] as const;

export const projects: readonly Project[] = [
  {
    slug: "fly",
    title: "LAAM — FLY",
    division: "Music",
    category: "Projet artistique",

    image: "/images/laam-fly.png",
    alt: "Visuel du projet FLY de LAAM",

    intro:
      "Un projet musical à découvrir dans l’univers de LMG Music.",

    heading:
      "Une voix. Un univers.",

    body:
      "FLY met à l’honneur LAAM au sein du pôle musical du groupe. Cette sélection donne un premier regard sur le projet et son identité visuelle.",

    context: "Musique",
    focus: "Projet & univers artistique",

    href: "https://legacymusicgroup.fr",
    linkLabel: "Explorer LMG Music",
  },

  {
    slug: "deepa",
    title: "Deepa Be Yourself",
    division: "Agency",
    category: "Expérience digitale",

    image: "/images/deepa.jpg",
    alt:
      "Univers de la maison de parfums Deepa Be Yourself",

    intro:
      "L’univers d’une maison de parfums, prolongé dans une expérience digitale.",

    heading:
      "Une maison. Une expérience.",

    body:
      "Pour Deepa Be Yourself, le projet digital relie la collection, les pages produit et le parcours client. L’enjeu : faire découvrir les parfums dans un univers cohérent et faciliter le passage de la découverte à l’achat.",

    context: "Parfumerie",
    focus: "Site & parcours client",

    href: "https://www.deepabeyourself.com",
    linkLabel: "Visiter Deepa Be Yourself",
  },
] as const;

export const contactEmail =
  "contact@legacymusicgroup.fr";