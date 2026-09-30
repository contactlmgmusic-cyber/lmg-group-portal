import ContactContent from "@/components/ContactContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact Us",
  "Contact Legacy Music Group, LMG Music or LMG Agency for projects, partnerships, press inquiries and new opportunities.",
  "/contact"
);

export default function Page() {
  return <ContactContent />;
}