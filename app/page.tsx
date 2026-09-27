import HomeContent from "@/components/HomeContent";
import { getEditorial } from "@/lib/editorial.server";
import { pageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { projects, news } = await getEditorial();

  return (
    <HomeContent
      projects={projects}
      news={news}
    />
  );
}

export const metadata = pageMetadata(
  "Home - LMG Group Portal",
  "Discover Legacy Music Group, an independent group connecting music, live entertainment, strategy and creative expertise.",
  "/"
);