import { pageMetadata } from "@/lib/metadata";
import PageIntro from "@/components/PageIntro";
import ProjectGallery from "@/components/ProjectGallery";
import NextStep from "@/components/NextStep";

export default function Page(){return <main id="contenu"><PageIntro label="Projets" title={"La création,\nen mouvement."} description="Une sélection de projets à la croisée de nos métiers. Des univers singuliers, de la musique à l’expérience digitale."/><ProjectGallery/><NextStep/></main>}

export const metadata = pageMetadata("Projets","Découvrez une sélection de projets musicaux et digitaux du groupe LMG.","/projets");
