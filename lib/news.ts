import type { NewsArticle } from "./editorial-types";
export const news: readonly NewsArticle[] = [
  {
    slug: "un-nouveau-regard-sur-lmg",
    title: "Un nouveau regard sur LMG.",
    category: "Vie du groupe",
    publishedAt: "2026-09-27",
    dateLabel: "27 septembre 2026",
    intro: "Legacy Music Group présente son portail : un point d’entrée commun pour découvrir sa vision, ses métiers et ses projets.",
    sections: [
      { title: "Une porte d’entrée sur le groupe", text: "Le portail LMG réunit la présentation du groupe, ses trois pôles et une sélection de projets. Il permet de comprendre les liens entre musique, divertissement et création, puis de rejoindre l’univers qui correspond à son besoin." },
      { title: "Trois expertises à découvrir", text: "LMG Music accompagne les projets artistiques. LMG Entertainment relie les talents aux événements et au public. LMG Agency intervient sur la stratégie, la création et le digital. Le portail présente ces métiers et donne accès à leurs espaces dédiés." },
      { title: "Des projets pour entrer dans nos univers", text: "FLY de LAAM et l’expérience digitale de Deepa Be Yourself font partie de la première sélection présentée sur le portail. Leurs pages ouvrent la découverte des univers Music et Agency." },
    ],
  },
] as const;
