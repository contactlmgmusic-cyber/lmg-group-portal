import LegalNoticeContent from "@/components/LegalNoticeContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Legal Notice",
  "Legal information relating to the Legacy Music Group website.",
  "/mentions-legales"
);

export default function Page() {
  return <LegalNoticeContent />;
}