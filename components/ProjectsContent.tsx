"use client";

import { useLanguage } from "@/components/LanguageProvider";
import NextStep from "@/components/NextStep";
import PageIntro from "@/components/PageIntro";
import ProjectGallery from "@/components/ProjectGallery";

type ProjectsContentProps = {
  projects: readonly any[];
};

export default function ProjectsContent({
  projects,
}: ProjectsContentProps) {
  const { locale } = useLanguage();

  const content =
    locale === "en"
      ? {
          intro: {
            label: "Projects",
            title: "Ideas,\nbrought to life.",
            description:
              "A selection of projects, initiatives and solutions developed across the LMG ecosystem. Different ideas, different fields, brought together by the ambition to build and create.",
          },

          nextStep: {
            title: "Building something new?",
            description:
              "A project, a brand, an initiative or a new solution: connect with LMG and explore how we can help bring it to life.",
            label: "Get in touch",
          },
        }
      : {
          intro: {
            label: "Projets",
            title: "Des idées,\nqui prennent vie.",
            description:
              "Une sélection de projets, d’initiatives et de solutions développés au sein de l’écosystème LMG. Des idées et des univers différents, réunis par une même ambition : construire et créer.",
          },

          nextStep: {
            title: "Une nouvelle idée à construire ?",
            description:
              "Un projet, une marque, une initiative ou une nouvelle solution : échangez avec LMG pour imaginer comment lui donner vie.",
            label: "Entrer en contact",
          },
        };

  return (
    <main id="contenu">
      <PageIntro
        label={content.intro.label}
        title={content.intro.title}
        description={content.intro.description}
      />

      <ProjectGallery projects={projects} />

      <NextStep
        title={content.nextStep.title}
        description={content.nextStep.description}
        href="/contact"
        label={content.nextStep.label}
      />
    </main>
  );
}