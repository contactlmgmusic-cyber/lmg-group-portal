"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import type { NewsArticle } from "@/lib/editorial-types";

export default function NewsCard({
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
          signature: (
            <>
              Create.
              <br />
              Develop.
              <br />
              Build.
            </>
          ),
          journal: "THE GROUP JOURNAL",
          read: "Read article",
        }
      : {
          signature: (
            <>
              Créer.
              <br />
              Développer.
              <br />
              Construire.
            </>
          ),
          journal: "LE JOURNAL DU GROUPE",
          read: "Lire l’article",
        };

  return (
    <Link
      href={`/actualites/${article.slug}`}
      className="news-card"
    >
      <div
        className="news-card-art"
        aria-hidden="true"
      >
        <span>LMG GROUP</span>

        <strong>
          {content.signature}
        </strong>

        <span>
          {content.journal} ↗
        </span>
      </div>

      <div className="news-card-content">
        <p className="eyebrow">
          {article.category}
        </p>

        <time dateTime={article.publishedAt}>
  {formattedDate}
</time>

        <h3>
          {article.title}
        </h3>

        <p>
          {article.intro}
        </p>

        <span className="text-link">
          {content.read}{" "}
          <span aria-hidden="true">
            ↗
          </span>
        </span>
      </div>
    </Link>
  );
}