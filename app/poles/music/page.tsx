export const dynamic = "force-dynamic";
import { pageMetadata } from "@/lib/metadata";
import DivisionPage from "@/components/DivisionPage";

export default function Page() { return <DivisionPage slug="music"/>; }

export const metadata = pageMetadata(
  "LMG Music",
  "Music, artist development and live entertainment: discover the music division of Legacy Music Group.",
  "/poles/music"
);