export const dynamic = "force-dynamic";
import { pageMetadata } from "@/lib/metadata";
import DivisionPage from "@/components/DivisionPage";

export default function Page() { return <DivisionPage slug="music"/>; }

export const metadata = pageMetadata("LMG Music","Direction artistique, projets et développement : découvrez le pôle musical de LMG.","/poles/music");
