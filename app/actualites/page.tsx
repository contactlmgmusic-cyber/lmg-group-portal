import { pageMetadata } from "@/lib/metadata";
import { getEditorial } from "@/lib/editorial.server";
export const dynamic = "force-dynamic";
import PageIntro from "@/components/PageIntro";
import NewsCard from "@/components/NewsCard";
import NextStep from "@/components/NextStep";
export const metadata = pageMetadata("Actualités", "Les nouvelles de Legacy Music Group : vie du groupe, projets et regards sur nos métiers.", "/actualites");
export default async function Page() {
  const {news}=await getEditorial();
  return <main id="contenu"><PageIntro label="Actualités" title={"Le groupe,\nau fil des projets."} description="Les nouvelles de LMG, les étapes de son développement et les projets qui donnent vie à ses métiers." /><section className="section news-list" aria-label="Dernières publications"><p className="eyebrow">LE JOURNAL / DERNIÈRES PUBLICATIONS</p>{!news.length && <p className="body-copy">Les prochaines actualités du groupe seront à retrouver ici.</p>}{news.map(article => <NewsCard key={article.slug} article={article} />)}</section><NextStep title="Entrez dans les projets." description="Découvrez les univers artistiques et les expériences digitales présentés par le groupe." href="/projets" label="Explorer les projets" /></main>;
}
