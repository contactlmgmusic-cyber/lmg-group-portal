import GroupContent from "@/components/GroupContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About LMG Group",
  "Discover the vision, businesses, approach and leadership of Legacy Music Group.",
  "/groupe"
);

export default function Page() {
  return <GroupContent />;
}