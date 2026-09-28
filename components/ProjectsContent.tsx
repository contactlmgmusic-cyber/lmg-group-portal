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
            title: "Creativity,\nin motion.",
            description:
              "A selection of projects at the intersection of our expertise. Distinct worlds spanning music, live entertainment and digital experiences.",
          },

          nextStep: {
            title: "Have a project in mind?",
            description:
              "Music, live entertainment, brand or digital experience: connect with the LMG team that can help bring it to life.",
            label: "Get in touch",
          },
        }
      : {
          intro: {
            label: "Projets",
            title: "La création,\nen mouvement.",
            description:
              "Une sélection de projets à la croisée de nos métiers. Des univers singuliers, de la musique au live jusqu’à l’expérience digitale.",
          },

          nextStep: {
            title: "Un projet en tête ?",
            description:
              "Musique, live, marque ou expérience digitale : échangez avec l’équipe LMG qui peut lui donner vie.",
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