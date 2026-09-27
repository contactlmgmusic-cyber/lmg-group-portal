import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";
import { news } from "@/lib/news";
import { divisions, projects } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
 return ["", "/groupe", "/poles", "/projets", "/contact", "/presse", "/actualites", ...news.map(article=>`/actualites/${article.slug}`), ...divisions.map(d=>`/poles/${d.slug}`), ...projects.map(p=>`/projets/${p.slug}`)].map(path=>({url:new URL(path || "/",siteUrl).href}));
}
