export const dynamic = "force-dynamic";
import { pageMetadata } from "@/lib/metadata";
import DivisionPage from "@/components/DivisionPage";

export default function Page() { return <DivisionPage slug="agency"/>; }

export const metadata = pageMetadata(
  "LMG Agency",
  "Strategy, branding, content and digital experiences: discover the creative agency of Legacy Music Group.",
  "/poles/agency"
);