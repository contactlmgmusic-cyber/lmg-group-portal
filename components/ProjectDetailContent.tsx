"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import type { Project } from "@/lib/editorial-types";

import NextStep from "@/components/NextStep";
import PageIntro from "@/components/PageIntro";
import ProjectCard from "@/components/ProjectCard";

type ProjectDetailContentProps = {
  project: Project;
  relatedProject: Project | null;
};

export default function ProjectDetailContent({
  project,
  relatedProject,
}: ProjectDetailContentProps) {
  const { locale } = useLanguage();

  const content =
    locale === "en"
      ? {
          projects: "Projects",

          division: "Business",
          universe: "Universe",
          focus: "Focus",

          projectEyebrow: "THE PROJECT",
          newTab: " (opens in a new tab)",

          detailEyebrow: "A CLOSER LOOK",
          detailTitle: "The project in detail.",

          relatedEyebrow: "KEEP EXPLORING",
          relatedTitle: (
            <>
              Another perspective
              <br />
              on the Group.
            </>
          ),
          allProjects: "All Projects",

          nextStepTitle: "Your project, with LMG.",
          nextStepDescription:
            "Let's talk about your world, your ambitions and what comes next.",
          nextStepLabel: "Let's talk about your project",
        }
      : {
          projects: "Projets",

          division: "Pôle",
          universe: "Univers",
          focus: "Focus",

          projectEyebrow: "LE PROJET",
          newTab: " (nouvel onglet)",

          detailEyebrow: "REGARD SUR LE PROJET",
          detailTitle: "Le projet en détail.",

          relatedEyebrow: "CONTINUER LA DÉCOUVERTE",
          relatedTitle: (
            <>
              Un autre regard
              <br />
              sur le groupe.
            </>
          ),
          allProjects: "Tous les projets",

          nextStepTitle: "Votre projet, avec LMG.",
          nextStepDescription:
            "Échangeons sur votre univers, vos ambitions et les prochaines étapes.",
          nextStepLabel: "Parlons de votre projet",
        };

  /*
   * On normalise ici l'ancien champ division.
   * Si une ancienne donnée éditoriale utilise encore
   * Entertainment, elle est désormais rattachée à Music.
   */
  const divisionSlug =
    project.division.toLowerCase() === "entertainment"
      ? "music"
      : project.division.toLowerCase();

  const divisionName =
    divisionSlug === "music"
      ? "Music"
      : divisionSlug === "agency"
        ? "Agency"
        : project.division;

  return (
    <main id="contenu">
      <PageIntro
        label={project.title}
        parent={{
          href: "/projets",
          label: content.projects,
        }}
        title={project.title}
        description={project.intro}
      />

      <div
        className={`project-cover project-${project.slug}`}
      >
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="100vw"
          preload
        />
      </div>

      <section className="section project-story">
        <aside>
          <dl>
            <dt>
              {content.division}
            </dt>

            <dd>
              <Link href={`/poles/${divisionSlug}`}>
                LMG {divisionName} ↗
              </Link>
            </dd>

            <dt>
              {content.universe}
            </dt>

            <dd>
              {project.context}
            </dd>

            <dt>
              {content.focus}
            </dt>

            <dd>
              {project.focus}
            </dd>
          </dl>
        </aside>

        <div>
          <p className="eyebrow">
            {content.projectEyebrow}
          </p>

          <h2>
            {project.heading}
          </h2>

          <p className="body-copy">
            {project.body}
          </p>

          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            {project.linkLabel}{" "}
            <span aria-hidden="true">
              ↗
            </span>

            <span className="sr-only">
              {content.newTab}
            </span>
          </a>
        </div>
      </section>

      {Boolean(project.sections?.length) && (
        <section className="section project-detail">
          <div className="section-heading">
            <p className="eyebrow">
              {content.detailEyebrow}
            </p>

            <h2>
              {content.detailTitle}
            </h2>
          </div>

          <div className="expertise-grid">
            {project.sections?.map(
              (section, index) => (
                <article key={index}>
                  <span className="index">
                    0{index + 1}
                  </span>

                  <h3>
                    {section.title}
                  </h3>

                  <p>
                    {section.text}
                  </p>
                </article>
              )
            )}
          </div>
        </section>
      )}

      {relatedProject && (
        <section className="section section-ice related-project">
          <div>
            <p className="eyebrow">
              {content.relatedEyebrow}
            </p>

            <h2>
              {content.relatedTitle}
            </h2>

            <Link
              href="/projets"
              className="text-link"
            >
              {content.allProjects}{" "}
              <span aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>

          <ProjectCard
            project={relatedProject}
          />
        </section>
      )}

      <NextStep
        title={content.nextStepTitle}
        description={content.nextStepDescription}
        href={`/contact#${divisionSlug}`}
        label={content.nextStepLabel}
      />
    </main>
  );
}