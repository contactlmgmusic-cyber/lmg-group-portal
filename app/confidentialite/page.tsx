import PrivacyContent from "@/components/PrivacyContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Privacy Policy",
  "Learn how Legacy Music Group processes and protects personal data.",
  "/confidentialite"
);

export default function Page() {
  return <PrivacyContent />;
}