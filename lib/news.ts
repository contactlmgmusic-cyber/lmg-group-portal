import type { NewsArticle } from "./editorial-types";

export const news: readonly NewsArticle[] = [
  {
    slug: "lmg-os-bientot-au-dela-de-lmg",

    title: "LMG OS, bientôt au-delà de LMG.",
    titleEn: "LMG OS, built to go beyond LMG.",

    category: "Produit",
    categoryEn: "Product",

    publishedAt: "2026-09-30",

    intro:
      "Initialement développé pour accompagner les opérations de LMG Group, LMG OS évolue aujourd’hui vers une plateforme de gestion d’entreprise pensée pour aller au-delà de l’écosystème LMG.",

    introEn:
      "Initially developed to support the operations of LMG Group, LMG OS is now evolving into a business management platform designed to go beyond the LMG ecosystem.",

    sections: [
      {
        title: "Un outil né des besoins de LMG",
        titleEn: "Built from LMG's own needs",

        text:
          "LMG OS est né d’un besoin interne : disposer d’un environnement capable d’accompagner l’organisation et le développement des activités de LMG Group. Pensée au départ pour répondre aux besoins du groupe, la plateforme s’est progressivement développée jusqu’à devenir un projet à part entière.",

        textEn:
          "LMG OS was born from an internal need: to create an environment capable of supporting the organization and development of LMG Group's activities. Initially designed around the Group's own operations, the platform gradually evolved into a project of its own.",
      },

      {
        title: "Pensé pour aller plus loin",
        titleEn: "Designed to go further",

        text:
          "LMG OS évolue désormais avec une ambition plus large : devenir une plateforme de gestion d’entreprise capable d’accompagner des structures et des équipes au-delà de LMG. Cette évolution implique de repenser le produit pour des usages, des organisations et des environnements différents de ceux du groupe.",

        textEn:
          "LMG OS is now evolving with a broader ambition: to become a business management platform capable of supporting organizations and teams beyond LMG. This next stage means adapting the product to different ways of working, organizational structures and business environments.",
      },

      {
        title: "Une nouvelle étape en développement",
        titleEn: "A new stage in development",

        text:
          "La version destinée à un usage extérieur est actuellement en développement. LMG OS n’est donc pas encore annoncé comme un produit disponible au public. Cette première présentation marque plutôt le début d’une nouvelle étape : transformer un outil développé au sein de LMG en une solution pensée pour d’autres entreprises.",

        textEn:
          "The version intended for external use is currently in development. LMG OS is therefore not yet being announced as a publicly available product. This first introduction marks the beginning of a new stage: transforming a tool developed within LMG into a solution designed for other businesses.",
      },

      {
        title: "La suite prochainement",
        titleEn: "More to come",

        text:
          "Le développement de LMG OS se poursuit. Son fonctionnement, son positionnement et les modalités de sa future mise à disposition seront présentés progressivement à mesure que la plateforme avancera vers sa version destinée aux entreprises et équipes extérieures à l’écosystème LMG.",

        textEn:
          "Development of LMG OS continues. More about the platform, its positioning and its future availability will be shared progressively as it moves toward a version designed for businesses and teams outside the LMG ecosystem.",
      },
    ],
  },

  {
    slug: "un-nouveau-regard-sur-lmg",

    title: "Un nouveau regard sur LMG.",
    titleEn: "A new perspective on LMG.",

    category: "Vie du groupe",
    categoryEn: "Group",

    publishedAt: "2026-09-27",

    intro:
      "Legacy Music Group présente son portail : un point d’entrée commun pour découvrir sa vision, son écosystème, ses activités et ses projets.",

    introEn:
      "Legacy Music Group introduces its Group portal: a common entry point to discover its vision, ecosystem, businesses and projects.",

    sections: [
      {
        title: "Une porte d’entrée sur le groupe",
        titleEn: "A gateway to the Group",

        text:
          "Le portail LMG devient le point d’entrée de l’écosystème du groupe. Il présente sa vision, ses activités actuelles et une sélection de projets, tout en offrant un cadre capable d’accueillir les prochaines initiatives développées par LMG.",

        textEn:
          "The LMG portal becomes the gateway to the Group's ecosystem. It presents its vision, current businesses and a selection of projects while providing a framework capable of welcoming the next initiatives developed by LMG.",
      },

      {
        title: "Un écosystème en développement",
        titleEn: "A growing ecosystem",

        text:
          "LMG Music et LMG Agency constituent aujourd’hui les deux activités principales du groupe. Music développe les artistes et les projets musicaux, tandis qu’Agency intervient sur la stratégie, la création, la communication et le digital. Cette première structure forme la base d’un écosystème pensé pour évoluer avec le développement de LMG.",

        textEn:
          "LMG Music and LMG Agency currently form the Group's two core businesses. Music develops artists and music projects, while Agency works across strategy, creative, communication and digital. Together, they form the foundation of an ecosystem designed to evolve as LMG develops.",
      },

      {
        title: "Des projets qui racontent l’écosystème",
        titleEn: "Projects that reflect the ecosystem",

        text:
          "FLY de LAAM et l’expérience digitale de Deepa Be Yourself font partie de la première sélection présentée sur le portail. À travers ses projets, LMG donne à voir les différentes activités, initiatives et réalisations qui composent progressivement son écosystème.",

        textEn:
          "LAAM's FLY and the digital experience developed for Deepa Be Yourself are part of the first selection featured on the portal. Through its projects, LMG highlights the different activities, initiatives and work progressively shaping its ecosystem.",
      },
    ],
  },
] as const;
