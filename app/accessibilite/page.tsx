import AccessibilityContent from "@/components/AccessibilityContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Accessibility",
  "Learn about Legacy Music Group's approach to digital accessibility and inclusive website experiences.",
  "/accessibilite"
);

export default function Page() {
  return <AccessibilityContent />;
}