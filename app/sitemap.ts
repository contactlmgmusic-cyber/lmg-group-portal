import type { MetadataRoute } from "next";

import { divisions } from "@/lib/content";
import { getEditorial } from "@/lib/editorial.server";
import { siteUrl } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { projects, news } = await getEditorial();

  const staticPages = [
    "/",
    "/groupe",
    "/poles",
    "/projets",
    "/actualites",
    "/presse",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
    "/cookies",
    "/accessibilite",
    "/plan-du-site",
  ];

  const businessPages = divisions.map(
  (division) => `/poles/${division.slug}`
);

  const newsPages = news.map(
    (article) => `/actualites/${article.slug}`
  );

  const projectPages = projects.map(
    (project) => `/projets/${project.slug}`
  );

  const paths = [
    ...staticPages,
    ...businessPages,
    ...newsPages,
    ...projectPages,
  ];

  return paths.map((path) => ({
    url: new URL(path, siteUrl).href,
  }));
}