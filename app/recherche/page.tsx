import { getEditorial } from "@/lib/editorial.server";
import { buildSearchEntries } from "@/lib/search";
import { pageMetadata } from "@/lib/metadata";

import SearchContent from "@/components/SearchContent";

export const dynamic = "force-dynamic";

export const metadata = {
  ...pageMetadata(
    "Search",
    "Search Legacy Music Group businesses, projects, news and company information.",
    "/recherche"
  ),
  robots: {
    index: false,
    follow: true,
  },
};

export default async function Page() {
  const { projects, news } = await getEditorial();

  const searchEntries = buildSearchEntries(
    projects,
    news
  );

  return (
    <SearchContent
      searchEntries={searchEntries}
    />
  );
}