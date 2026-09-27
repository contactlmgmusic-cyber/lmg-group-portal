import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";
import { divisions, projects } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
 return ["", "/groupe", "/poles", "/projets", "/contact", ...divisions.map(d=>`/poles/${d.slug}`), ...projects.map(p=>`/projets/${p.slug}`)].map(path=>({url:new URL(path || "/",siteUrl).href}));
}
