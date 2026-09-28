"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import { useLanguage } from "@/components/LanguageProvider";
import {
  normalizeSearch,
  type SearchEntry,
} from "@/lib/search";

type CategoryId =
  | "all"
  | "group"
  | "businesses"
  | "projects"
  | "news";

export default function SiteSearch({
  searchEntries,
}: {
  searchEntries: SearchEntry[];
}) {
  const { locale } = useLanguage();

  const [query, setQuery] = useState("");
  const [category, setCategory] =
    useState<CategoryId>("all");

  const input = useRef<HTMLInputElement>(null);

  const content =
    locale === "en"
      ? {
          label: "What are you looking for?",
          placeholder:
            "A project, a business, information…",
          clear: "Clear",
          help:
            "For example: Deepa, music, logos or contact.",

          filterAria: "Filter search results",

          categories: [
            {
              id: "all" as const,
              label: "All",
            },
            {
              id: "group" as const,
              label: "The Group",
            },
            {
              id: "businesses" as const,
              label: "Businesses",
            },
            {
              id: "projects" as const,
              label: "Projects",
            },
            {
              id: "news" as const,
              label: "News",
            },
          ],

          result: "result",
          results: "results",
          for: "for",
          explore: "to explore",

          emptyTitle:
            "No results for this search.",
          emptyDescription:
            "Try a shorter search term or another category.",
          contact: "Need more information?",

          categoryLabels: {
            "Le groupe": "The Group",
            Groupe: "The Group",
            Pôles: "Businesses",
            Projets: "Projects",
            Actualités: "News",

            "The Group": "The Group",
            Businesses: "Businesses",
            Projects: "Projects",
            News: "News",
          } as Record<string, string>,
        }
      : {
          label: "Que recherchez-vous ?",
          placeholder:
            "Un projet, un métier, une information…",
          clear: "Effacer",
          help:
            "Par exemple : Deepa, musique, logos ou contact.",

          filterAria: "Filtrer les résultats",

          categories: [
            {
              id: "all" as const,
              label: "Tout",
            },
            {
              id: "group" as const,
              label: "Le groupe",
            },
            {
              id: "businesses" as const,
              label: "Pôles",
            },
            {
              id: "projects" as const,
              label: "Projets",
            },
            {
              id: "news" as const,
              label: "Actualités",
            },
          ],

          result: "résultat",
          results: "résultats",
          for: "pour",
          explore: "à explorer",

          emptyTitle:
            "Aucun résultat pour cette recherche.",
          emptyDescription:
            "Essayez un terme plus court ou une autre catégorie.",
          contact: "Besoin d’un renseignement ?",

          categoryLabels: {
            "Le groupe": "Le groupe",
            Groupe: "Le groupe",
            Pôles: "Pôles",
            Projets: "Projets",
            Actualités: "Actualités",

            "The Group": "Le groupe",
            Businesses: "Pôles",
            Projects: "Projets",
            News: "Actualités",
          } as Record<string, string>,
        };

  const getCategoryId = (
    entryCategory: string
  ): Exclude<CategoryId, "all"> => {
    switch (entryCategory) {
      case "Le groupe":
      case "Groupe":
      case "The Group":
        return "group";

      case "Pôles":
      case "Businesses":
        return "businesses";

      case "Projets":
      case "Projects":
        return "projects";

      case "Actualités":
      case "News":
        return "news";

      default:
        return "group";
    }
  };

  const terms = normalizeSearch(query)
    .split(" ")
    .filter(Boolean);

  const normalizedQuery =
    normalizeSearch(query);

  const results = searchEntries
    .filter((entry) => {
      const matchesCategory =
        category === "all" ||
        getCategoryId(entry.category) ===
          category;

      const searchableContent =
        normalizeSearch(
          `${entry.title} ${entry.description} ${entry.keywords}`
        );

      const matchesTerms =
        terms.every((term) =>
          searchableContent.includes(term)
        );

      return (
        matchesCategory &&
        matchesTerms
      );
    })
    .sort(
      (a, b) =>
        Number(
          terms.length > 0 &&
            normalizeSearch(
              b.title
            ).includes(normalizedQuery)
        ) -
        Number(
          terms.length > 0 &&
            normalizeSearch(
              a.title
            ).includes(normalizedQuery)
        )
    );

  const resetSearch = () => {
    setQuery("");
    setCategory("all");
    input.current?.focus();
  };

  const getCategoryLabel = (
    entryCategory: string
  ) =>
    content.categoryLabels[
      entryCategory
    ] ?? entryCategory;

  return (
    <section className="section site-search">
      <form
        role="search"
        onSubmit={(event) =>
          event.preventDefault()
        }
      >
        <label htmlFor="site-query">
          {content.label}
        </label>

        <div className="search-input-row">
          <input
            ref={input}
            id="site-query"
            type="search"
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder={
              content.placeholder
            }
            autoComplete="off"
            maxLength={150}
            aria-describedby="search-help"
          />

          <button
            type="button"
            onClick={resetSearch}
          >
            {content.clear}
          </button>
        </div>

        <p id="search-help">
          {content.help}
        </p>
      </form>

      <div
        className="filter-bar search-filters"
        role="group"
        aria-label={content.filterAria}
      >
        {content.categories.map(
          (item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={
                category === item.id
              }
              onClick={() =>
                setCategory(item.id)
              }
            >
              {item.label}
            </button>
          )
        )}
      </div>

      <p
        className="search-count"
        role="status"
      >
        {results.length}{" "}
        {results.length === 1
          ? content.result
          : content.results}

        {query.trim()
          ? ` ${content.for} « ${query.trim()} »`
          : ` ${content.explore}`}
      </p>

      {results.length ? (
        <ul className="search-results">
          {results.map((result) => (
            <li key={result.href}>
              <Link href={result.href}>
                <span className="eyebrow">
                  {getCategoryLabel(
                    result.category
                  )}
                </span>

                <h2>
                  {result.title}
                  <span aria-hidden="true">
                    ↗
                  </span>
                </h2>

                <p>
                  {result.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="search-empty">
          <h2>
            {content.emptyTitle}
          </h2>

          <p>
            {content.emptyDescription}
          </p>

          <Link
            href="/contact"
            className="text-link"
          >
            {content.contact}{" "}
            <span aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      )}
    </section>
  );
}