export const dynamic = "force-dynamic";
import { pageMetadata } from "@/lib/metadata";
import DivisionPage from "@/components/DivisionPage";

export default function Page() { return <DivisionPage slug="agency"/>; }

export const metadata = pageMetadata("LMG Agency","Stratégie, identité, contenus et expériences digitales : découvrez le pôle créatif de LMG.","/poles/agency");
