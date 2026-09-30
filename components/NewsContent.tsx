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
            title: "Inside the Group.\nWhat comes next.",
            description:
              "News, launches, projects and milestones shaping the development of LMG Group and its ecosystem.",
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
              "Discover the projects, initiatives and solutions developed across the LMG ecosystem.",
            label: "Explore Projects",
          },
        }
      : {
          intro: {
            label: "Actualités",
            title: "Dans le groupe.\nEt pour la suite.",
            description:
              "Actualités, lancements, projets et étapes clés qui accompagnent le développement de LMG Group et de son écosystème.",
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
              "Découvrez les projets, les initiatives et les solutions développés au sein de l’écosystème LMG.",
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