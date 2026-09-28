import ContactContent from "@/components/ContactContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact Us",
  "Contact Legacy Music Group for music, live entertainment, creative, digital, press, partnerships and general inquiries.",
  "/contact"
);

export default function Page() {
  return <ContactContent />;
}