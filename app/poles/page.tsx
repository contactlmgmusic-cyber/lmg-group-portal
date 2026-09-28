import BusinessesContent from "@/components/BusinessesContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Businesses & Products",
  "Discover LMG Music and LMG Agency, the two core businesses of Legacy Music Group.",
  "/poles"
);

export default function Page() {
  return <BusinessesContent />;
}