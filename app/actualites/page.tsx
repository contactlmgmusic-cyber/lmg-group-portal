import { getEditorial } from "@/lib/editorial.server";
import { pageMetadata } from "@/lib/metadata";

import NewsContent from "@/components/NewsContent";

export const dynamic = "force-dynamic";

export const metadata = pageMetadata(
  "News",
  "Latest news from Legacy Music Group, its projects and businesses.",
  "/actualites"
);

export default async function Page() {
  const { news } = await getEditorial();

  return <NewsContent news={news} />;
}