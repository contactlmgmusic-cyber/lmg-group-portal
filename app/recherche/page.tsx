import { getEditorial } from "@/lib/editorial.server";
import { buildSearchEntries } from "@/lib/search";
export const dynamic = "force-dynamic";
import PageIntro from "@/components/PageIntro";
import SiteSearch from "@/components/SiteSearch";
import { pageMetadata } from "@/lib/metadata";
export const metadata = { ...pageMetadata("Recherche", "Retrouvez les pôles, les projets, les actualités et les informations de Legacy Music Group.", "/recherche"), robots: { index: false, follow: true } };
export default async function Page() { const {projects,news}=await getEditorial();return <main id="contenu"><PageIntro label="Recherche" title="Explorer LMG." description="Les pages du groupe, ses métiers et ses projets, à portée de recherche." /><SiteSearch searchEntries={buildSearchEntries(projects,news)} /></main>; }
