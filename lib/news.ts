import type { NewsArticle } from "./editorial-types";

export const news: readonly NewsArticle[] = [
  {
    slug: "un-nouveau-regard-sur-lmg",

    title: "Un nouveau regard sur LMG.",

    category: "Vie du groupe",

    publishedAt: "2026-09-27",

    intro:
      "Legacy Music Group présente son portail : un point d’entrée commun pour découvrir sa vision, son écosystème, ses activités et ses projets.",

    sections: [
      {
        title:
          "Une porte d’entrée sur le groupe",

        text:
          "Le portail LMG devient le point d’entrée de l’écosystème du groupe. Il présente sa vision, ses activités actuelles et une sélection de projets, tout en offrant un cadre capable d’accueillir les prochaines initiatives développées par LMG.",
      },

      {
        title:
          "Un écosystème en développement",

        text:
          "LMG Music et LMG Agency constituent aujourd’hui les deux activités principales du groupe. Music développe les artistes et les projets musicaux, tandis qu’Agency intervient sur la stratégie, la création, la communication et le digital. Cette première structure forme la base d’un écosystème pensé pour évoluer avec le développement de LMG.",
      },

      {
        title:
          "Des projets qui racontent l’écosystème",

        text:
          "FLY de LAAM et l’expérience digitale de Deepa Be Yourself font partie de la première sélection présentée sur le portail. À travers ses projets, LMG donne à voir les différentes activités, initiatives et réalisations qui composent progressivement son écosystème.",
      },
    ],
  },
] as const;