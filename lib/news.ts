import type { NewsArticle } from "./editorial-types";

export const news: readonly NewsArticle[] = [
  {
    slug: "un-nouveau-regard-sur-lmg",

    title: "Un nouveau regard sur LMG.",

    category: "Vie du groupe",

    publishedAt: "2026-09-27",

    intro:
      "Legacy Music Group présente son portail : un point d’entrée commun pour découvrir sa vision, ses métiers et ses projets.",

    sections: [
      {
        title:
          "Une porte d’entrée sur le groupe",

        text:
          "Le portail LMG réunit la présentation du groupe, ses deux pôles et une sélection de projets. Il permet de comprendre les liens entre musique, live et création, puis de rejoindre l’univers qui correspond à son besoin.",
      },

      {
        title:
          "Deux expertises complémentaires",

        text:
          "LMG Music accompagne les artistes et les projets musicaux, de leur développement aux expériences live, au booking et aux showcases. LMG Agency intervient sur la stratégie, la direction créative, la communication et le digital. Ensemble, ces deux pôles structurent les activités de Legacy Music Group.",
      },

      {
        title:
          "Des projets pour entrer dans nos univers",

        text:
          "FLY de LAAM et l’expérience digitale de Deepa Be Yourself font partie de la première sélection présentée sur le portail. Leurs pages ouvrent respectivement la découverte des univers LMG Music et LMG Agency.",
      },
    ],
  },
] as const;