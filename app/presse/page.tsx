import PressContent from "@/components/PressContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Press & Media",
  "Legacy Music Group company profile, brand assets and press contact.",
  "/presse"
);

export default function Page() {
  return <PressContent />;
}