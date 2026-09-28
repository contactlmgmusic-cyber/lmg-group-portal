import CookiePolicyContent from "@/components/CookiePolicyContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Cookie Policy",
  "Learn how Legacy Music Group uses cookies and similar technologies.",
  "/cookies"
);

export default function Page() {
  return <CookiePolicyContent />;
}