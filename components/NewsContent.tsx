"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { NewsArticle } from "@/lib/editorial-types";

import NewsCard from "@/components/NewsCard";
import NextStep from "@/components/NextStep";
import PageIntro from "@/components/PageIntro";

export default function NewsContent({
  news,
}: {
  news: readonly NewsArticle[];
}) {
  const { locale } = useLanguage();

  const content =
    locale === "en"
      ? {
          intro: {
            label: "News",
            title: "The Group,\nthrough its projects.",
            description:
              "Latest news from LMG, milestones in the Group's development and the projects bringing its expertise to life.",
          },

          list: {
            ariaLabel: "Latest publications",
            eyebrow: "THE JOURNAL / LATEST STORIES",
            empty:
              "The latest news from Legacy Music Group will be published here.",
          },

          nextStep: {
            title: "Explore the projects.",
            description:
              "Discover the artistic worlds, live experiences and digital projects developed across the Group.",
            label: "Explore Projects",
          },
        }
      : {
          intro: {
            label: "Actualités",
            title: "Le groupe,\nau fil des projets.",
            description:
              "Les nouvelles de LMG, les étapes de son développement et les projets qui donnent vie à ses métiers.",
          },

          list: {
            ariaLabel: "Dernières publications",
            eyebrow:
              "LE JOURNAL / DERNIÈRES PUBLICATIONS",
            empty:
              "Les prochaines actualités du groupe seront à retrouver ici.",
          },

          nextStep: {
            title: "Entrez dans les projets.",
            description:
              "Découvrez les univers artistiques, les expériences live et les projets digitaux présentés par le groupe.",
            label: "Explorer les projets",
          },
        };

  return (
    <main id="contenu">
      <PageIntro
        label={content.intro.label}
        title={content.intro.title}
        description={content.intro.description}
      />

      <section
        className="section news-list"
        aria-label={content.list.ariaLabel}
      >
        <p className="eyebrow">
          {content.list.eyebrow}
        </p>

        {!news.length && (
          <p className="body-copy">
            {content.list.empty}
          </p>
        )}

        {news.map((article) => (
          <NewsCard
            key={article.slug}
            article={article}
          />
        ))}
      </section>

      <NextStep
        title={content.nextStep.title}
        description={content.nextStep.description}
        href="/projets"
        label={content.nextStep.label}
      />
    </main>
  );
}