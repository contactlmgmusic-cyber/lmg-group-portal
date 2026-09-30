import "server-only";

import { cache } from "react";

import { projects as initialProjects } from "./content";
import type {
  NewsArticle,
  Project,
} from "./editorial-types";
import { news as initialNews } from "./news";
import { projectStories } from "./project-stories";

function normalizeProjectDivision(
  division: unknown
): Project["division"] {
  const value = String(
    division ?? ""
  ).toLowerCase();

  if (
    value.includes("group")
  ) {
    return "Group";
  }

  if (
    value.includes("agency")
  ) {
    return "Agency";
  }

  /*
   * Music remains the fallback for legacy content.
   * Legacy Entertainment content belongs to LMG Music.
   */
  return "Music";
}

export const getEditorial = cache(
  async (): Promise<{
    projects: readonly Project[];
    news: readonly NewsArticle[];
  }> => {
    if (
      process.env.PORTAL_CMS_ENABLED !==
      "true"
    ) {
      const projects: readonly Project[] =
        initialProjects.map(
          (project) => ({
            ...project,

            sections:
              projectStories[
                project.slug as keyof typeof projectStories
              ]?.chapters.map(
                (chapter) => ({
                  title: chapter[1],
                  text: chapter[2],
                })
              ),
          })
        );

      return {
        projects,
        news: initialNews,
      };
    }

    const url =
      process.env
        .NEXT_PUBLIC_SUPABASE_URL;

    const key =
      process.env
        .NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !key) {
      throw new Error(
        "Portal CMS configuration is missing."
      );
    }

    const endpoint = new URL(
      "/rest/v1/portal_content",
      url
    );

    endpoint.searchParams.set(
      "select",
      "kind,slug,data"
    );

    endpoint.searchParams.set(
      "status",
      "eq.published"
    );

    endpoint.searchParams.set(
      "order",
      "created_at.desc"
    );

    const response = await fetch(
      endpoint,
      {
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
        },

        cache: "no-store",

        signal:
          AbortSignal.timeout(8000),
      }
    );

    if (!response.ok) {
      throw new Error(
        "Portal content is temporarily unavailable."
      );
    }

    const rows =
      (await response.json()) as {
        kind: string;
        slug: string;
        data: Record<
          string,
          unknown
        >;
      }[];

    const projects = rows
      .filter(
        (row) =>
          row.kind === "project"
      )
      .map((row) => {
        const data =
          row.data as unknown as Project;

        return {
          ...data,
          slug: row.slug,

          division:
            normalizeProjectDivision(
              data.division
            ),
        };
      });

    const news = rows
      .filter(
        (row) =>
          row.kind === "news"
      )
      .map((row) => {
        const data =
          row.data as unknown as NewsArticle;

        return {
          ...data,
          slug: row.slug,
        };
      })
      .sort((a, b) =>
        b.publishedAt.localeCompare(
          a.publishedAt
        )
      );

    return {
      projects,
      news,
    };
  }
);