import { pageMetadata } from "@/lib/metadata";
import DivisionPage from "@/components/DivisionPage";

export default function Page() { return <DivisionPage slug="entertainment"/>; }

export const metadata = pageMetadata("LMG Entertainment","Booking, programmation et coordination artistique : découvrez LMG Entertainment.","/poles/entertainment");
