import SitemapContent from "@/components/SitemapContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Site Map",
  "Explore the main pages, businesses, projects and resources available on the Legacy Music Group website.",
  "/plan-du-site"
);

export default function Page() {
  return <SitemapContent />;
}