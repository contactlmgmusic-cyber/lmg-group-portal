import "server-only";
import { projectStories } from "./project-stories";
import { cache } from "react";
import { projects as initialProjects } from "./content";
import { news as initialNews } from "./news";
import type { Project, NewsArticle } from "./editorial-types";

// Explicit activation prevents a partially configured CMS from changing the public site.
export const getEditorial = cache(async (): Promise<{ projects: readonly Project[]; news: readonly NewsArticle[] }> => {
  if (process.env.PORTAL_CMS_ENABLED !== "true") return { projects: initialProjects.map(p=>({...p,sections:projectStories[p.slug as keyof typeof projectStories]?.chapters.map(c=>({title:c[1],text:c[2]}))})), news: initialNews };
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error("Portal CMS configuration is missing.");
  const endpoint = new URL("/rest/v1/portal_content", url);
  endpoint.searchParams.set("select", "kind,slug,data");
  endpoint.searchParams.set("status", "eq.published");
  endpoint.searchParams.set("order", "created_at.desc");
  const response = await fetch(endpoint, { headers: { apikey: key, Authorization: `Bearer ${key}` }, cache: "no-store", signal: AbortSignal.timeout(8000) });
  if (!response.ok) throw new Error("Portal content is temporarily unavailable.");
  const rows = await response.json() as { kind: string; slug: string; data: Record<string, unknown> }[];
  const projects = rows.filter(row => row.kind === "project").map(row => ({ ...row.data, slug: row.slug }) as Project);
  const news = rows.filter(row => row.kind === "news").map(row => ({ ...row.data, slug: row.slug, dateLabel: new Intl.DateTimeFormat("fr-FR", { dateStyle: "long", timeZone: "UTC" }).format(new Date(String(row.data.publishedAt))) }) as NewsArticle).sort((a,b) => b.publishedAt.localeCompare(a.publishedAt));
  return { projects, news };
});
