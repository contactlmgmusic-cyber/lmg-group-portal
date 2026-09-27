import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";
import { getEditorial } from "@/lib/editorial.server";
export const dynamic = "force-dynamic";
import { divisions } from "@/lib/content";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
 const {projects,news}=await getEditorial();
 return ["", "/groupe", "/poles", "/projets", "/contact", "/presse", "/actualites", ...news.map(article=>`/actualites/${article.slug}`), ...divisions.map(d=>`/poles/${d.slug}`), ...projects.map(p=>`/projets/${p.slug}`)].map(path=>({url:new URL(path || "/",siteUrl).href}));
}
