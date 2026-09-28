"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import type { NewsArticle } from "@/lib/editorial-types";

import NextStep from "@/components/NextStep";
import PageIntro from "@/components/PageIntro";

export default function NewsArticleContent({
  article,
}: {
  article: NewsArticle;
}) {
  const { locale } = useLanguage();
  const formattedDate = new Intl.DateTimeFormat(
  locale === "en" ? "en-GB" : "fr-FR",
  {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }
).format(
  new Date(`${article.publishedAt}T00:00:00Z`)
);

  const content =
    locale === "en"
      ? {
          news: "News",

          published: "Published on",
          editorial: "LMG Editorial",

          contentsEyebrow: "IN THIS ARTICLE",
          contentsAria: "Article contents",

          discoverEyebrow: "EXPLORE FURTHER",
          discoverGroup: "Discover LMG Group",
          discoverProjects: "Explore Group Projects",

          back: "← All News",

          nextStep: {
            title: "Discover what comes next.",
            description:
              "Explore the projects, expertise and people shaping Legacy Music Group.",
            label: "Discover the Group",
          },
        }
      : {
          news: "Actualités",

          published: "Publié le",
          editorial: "La rédaction LMG",

          contentsEyebrow: "DANS CET ARTICLE",
          contentsAria: "Sommaire de l’article",

          discoverEyebrow: "POUR ALLER PLUS LOIN",
          discoverGroup: "Découvrir LMG Group",
          discoverProjects: "Les projets du groupe",

          back: "← Toutes les actualités",

          nextStep: {
            title: "Découvrez la suite.",
            description:
              "Explorez les projets, les expertises et les personnes qui façonnent Legacy Music Group.",
            label: "Découvrir le groupe",
          },
        };

  return (
    <main id="contenu">
      <article>
        <PageIntro
          label={article.category}
          parent={{
            href: "/actualites",
            label: content.news,
          }}
          title={article.title}
          description={article.intro}
        />

        <div className="article-meta">
          <span>
            {article.category}
          </span>

          <span>
            {content.published}{" "}
            <time dateTime={article.publishedAt}>
  {formattedDate}
</time>
          </span>

          <span>
            {content.editorial}
          </span>
        </div>

        <div className="section article-layout">
          <aside>
            <p className="eyebrow">
              {content.contentsEyebrow}
            </p>

            <nav aria-label={content.contentsAria}>
              {article.sections.map(
                (section, index) => (
                  <a
                    key={section.title}
                    href={`#chapitre-${index + 1}`}
                  >
                    {section.title}
                  </a>
                )
              )}
            </nav>
          </aside>

          <div className="article-body">
            {article.sections.map(
              (section, index) => (
                <section
                  key={section.title}
                  id={`chapitre-${index + 1}`}
                >
                  <h2>
                    {section.title}
                  </h2>

                  <p>
                    {section.text}
                  </p>
                </section>
              )
            )}

            <div className="article-discover">
              <p className="eyebrow">
                {content.discoverEyebrow}
              </p>

              <Link href="/groupe">
                {content.discoverGroup}{" "}
                <span aria-hidden="true">
                  ↗
                </span>
              </Link>

              <Link href="/projets">
                {content.discoverProjects}{" "}
                <span aria-hidden="true">
                  ↗
                </span>
              </Link>
            </div>

            <Link
              href="/actualites"
              className="text-link"
            >
              {content.back}
            </Link>
          </div>
        </div>
      </article>

      <NextStep
        title={content.nextStep.title}
        description={content.nextStep.description}
        href="/groupe"
        label={content.nextStep.label}
      />
    </main>
  );
}