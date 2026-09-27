import PageIntro from "@/components/PageIntro";
import SiteSearch from "@/components/SiteSearch";
import { pageMetadata } from "@/lib/metadata";
export const metadata = { ...pageMetadata("Recherche", "Retrouvez les pôles, les projets, les actualités et les informations de Legacy Music Group.", "/recherche"), robots: { index: false, follow: true } };
export default function Page() { return <main id="contenu"><PageIntro label="Recherche" title="Explorer LMG." description="Les pages du groupe, ses métiers et ses projets, à portée de recherche." /><SiteSearch /></main>; }
