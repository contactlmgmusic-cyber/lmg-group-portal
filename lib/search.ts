import { divisions } from "./content";
import type { Project, NewsArticle } from "./editorial-types";
export function buildSearchEntries(projects: readonly Project[], news: readonly NewsArticle[]) { return [
  { title: "About LMG Group", href: "/groupe", category: "Le groupe", description: "La vision, l’approche et la direction de Legacy Music Group.", keywords: "Joseph Kayaya Yliana Faidherbe fondateur équipe valeurs" },
  { title: "Businesses & products", href: "/poles", category: "Le groupe", description: "Les trois pôles et les métiers de LMG.", keywords: "activités expertises" },
  { title: "Contact us", href: "/contact", category: "Le groupe", description: "Trouver le bon contact pour votre demande.", keywords: "email mail partenariat question" },
  { title: "Presse & médias", href: "/presse", category: "Le groupe", description: "Présentation du groupe, logos à télécharger et contact presse.", keywords: "interview ressources communication" },
  ...divisions.map(d => ({ title: `LMG ${d.name}`, href: `/poles/${d.slug}`, category: "Pôles", description: d.description, keywords: `${d.field} ${d.skills.flat().join(" ")}` })),
  ...projects.map(p => ({ title: p.title, href: `/projets/${p.slug}`, category: "Projets", description: p.intro, keywords: `${p.division} ${p.category} ${p.body} ${p.context}` })),
  ...news.map(n => ({ title: n.title, href: `/actualites/${n.slug}`, category: "Actualités", description: n.intro, keywords: `${n.category} ${n.sections.map(s => `${s.title} ${s.text}`).join(" ")}` })),
]; }
export type SearchEntry = ReturnType<typeof buildSearchEntries>[number];
export function normalizeSearch(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}
