"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import NextStep from "@/components/NextStep";
import PageIntro from "@/components/PageIntro";
import ProjectCard from "@/components/ProjectCard";

type DivisionContentProps = {
  slug: "music" | "agency";
  project: any | null;
};

export default function DivisionContent({
  slug,
  project,
}: DivisionContentProps) {
  const { locale } = useLanguage();

  const translations = {
    en: {
      common: {
        parent: "Businesses & Products",
        expertiseEyebrow: "OUR EXPERTISE",
        expertiseTitle: (
          <>
            One expertise.
            <br />
            Multiple dimensions.
          </>
        ),
        projectsEyebrow: "IN OUR PROJECTS",
        allProjects: "All Projects",
        ecosystem: "THE LMG ECOSYSTEM",
        exploreOther: "Explore our other business.",
        visitWebsite: "Visit the website",
        newTab: " (opens in a new tab)",
        contact: "Find the right contact",
      },

      music: {
        number: "01",
        name: "Music",
        field:
          "MUSIC · ARTIST DEVELOPMENT · LIVE ENTERTAINMENT",

        headline:
          "Develop artists.\nBuild worlds.\nCreate moments.",

        description:
          "LMG Music develops artists and music projects across recorded music and live entertainment, connecting artistic vision, strategy and audience.",

        website: "https://lmgmusic.fr",

        skills: [
          [
            "Artist Development",
            "Building a coherent artistic direction and supporting each project through its development.",
          ],
          [
            "Music Strategy",
            "Defining positioning, priorities and the roadmap surrounding an artist or music project.",
          ],
          [
            "Release Strategy",
            "Structuring releases and the moments that connect music with its audience.",
          ],
          [
            "Live Entertainment",
            "Extending artistic projects into live experiences, showcases and events.",
          ],
          [
            "Booking",
            "Connecting artists, DJs and live formats with relevant events and opportunities.",
          ],
          [
            "Artistic Experiences",
            "Designing live formats that connect talent, context and audience.",
          ],
        ],

        projectTitle: (
          <>
            Creativity
            <br />
            takes shape.
          </>
        ),

        contact:
          "An artist, music project or live experience to develop?",
      },

      agency: {
        number: "02",
        name: "Agency",
        field: "STRATEGY · CREATIVE · DIGITAL",

        headline:
          "Build identities.\nShape ideas.\nCreate impact.",

        description:
          "LMG Agency supports brands, projects and talents through strategy, creative direction, communication and digital experiences.",

        website: "https://lmgagency.fr",

        skills: [
          [
            "Strategy",
            "Clarifying positioning, objectives and the direction a project needs to take.",
          ],
          [
            "Brand Identity",
            "Creating distinctive visual identities built around the project's personality.",
          ],
          [
            "Creative Direction",
            "Building a coherent visual and creative language across every touchpoint.",
          ],
          [
            "Communication",
            "Turning positioning into clear, relevant and consistent communication.",
          ],
          [
            "Content",
            "Creating content designed around the identity, audience and objectives of the project.",
          ],
          [
            "Digital Experiences",
            "Designing websites and digital experiences that extend the brand and its story.",
          ],
        ],

        projectTitle: (
          <>
            From ideas
            <br />
            to experiences.
          </>
        ),

        contact:
          "A brand, identity or digital experience to build?",
      },
    },

    fr: {
      common: {
        parent: "Nos activités",
        expertiseEyebrow: "NOS MÉTIERS",
        expertiseTitle: (
          <>
            Une expertise.
            <br />
            Plusieurs dimensions.
          </>
        ),
        projectsEyebrow: "DANS LES PROJETS",
        allProjects: "Tous les projets",
        ecosystem: "L’ÉCOSYSTÈME LMG",
        exploreOther: "Explorer notre autre pôle.",
        visitWebsite: "Visiter le site du pôle",
        newTab: " (nouvel onglet)",
        contact: "Trouver le bon contact",
      },

      music: {
        number: "01",
        name: "Music",
        field:
          "MUSIQUE · DÉVELOPPEMENT ARTISTIQUE · LIVE ENTERTAINMENT",

        headline:
          "Développer les artistes.\nConstruire des univers.\nCréer des moments.",

        description:
          "LMG Music développe les artistes et les projets musicaux autour de la musique enregistrée et du live, en reliant vision artistique, stratégie et rencontre avec le public.",

        website: "https://lmgmusic.fr",

        skills: [
          [
            "Développement artistique",
            "Construire une direction artistique cohérente et accompagner chaque projet dans son développement.",
          ],
          [
            "Stratégie musicale",
            "Définir le positionnement, les priorités et la trajectoire d’un artiste ou d’un projet musical.",
          ],
          [
            "Stratégie de sortie",
            "Structurer les sorties et les moments qui permettent à la musique de rencontrer son public.",
          ],
          [
            "Live Entertainment",
            "Prolonger les projets artistiques à travers des expériences live, showcases et événements.",
          ],
          [
            "Booking",
            "Connecter artistes, DJs et formats live aux événements et opportunités pertinents.",
          ],
          [
            "Expériences artistiques",
            "Imaginer des formats live qui relient talent, contexte et public.",
          ],
        ],

        projectTitle: (
          <>
            La création
            <br />
            prend forme.
          </>
        ),

        contact:
          "Un artiste, un projet musical ou une expérience live à développer ?",
      },

      agency: {
        number: "02",
        name: "Agency",
        field: "STRATÉGIE · CRÉATION · DIGITAL",

        headline:
          "Construire des identités.\nDonner forme aux idées.\nCréer de l’impact.",

        description:
          "LMG Agency accompagne les marques, les projets et les talents à travers la stratégie, la direction créative, la communication et les expériences digitales.",

        website: "https://lmgagency.fr",

        skills: [
          [
            "Stratégie",
            "Clarifier le positionnement, les objectifs et la direction à donner au projet.",
          ],
          [
            "Identité de marque",
            "Créer des identités visuelles distinctives construites autour de la personnalité du projet.",
          ],
          [
            "Direction créative",
            "Construire un langage visuel et créatif cohérent sur l’ensemble des points de contact.",
          ],
          [
            "Communication",
            "Transformer le positionnement en une communication claire, pertinente et cohérente.",
          ],
          [
            "Contenus",
            "Créer des contenus pensés autour de l’identité, du public et des objectifs du projet.",
          ],
          [
            "Expériences digitales",
            "Concevoir des sites et expériences digitales qui prolongent la marque et son histoire.",
          ],
        ],

        projectTitle: (
          <>
            Des idées
            <br />
            à l’expérience.
          </>
        ),

        contact:
          "Une marque, une identité ou une expérience digitale à construire ?",
      },
    },
  };

  const language = translations[locale];
  const division = language[slug];

  const sibling =
    slug === "music"
      ? language.agency
      : language.music;

  const siblingSlug =
    slug === "music"
      ? "agency"
      : "music";

  return (
    <main id="contenu">
      <PageIntro
        label={`LMG ${division.name}`}
        parent={{
          href: "/poles",
          label: language.common.parent,
        }}
        title={division.headline}
        description={division.description}
      />

      <div className="division-bar">
        <span>
          {division.number} / 02
        </span>

        <strong>
          {division.field}
        </strong>

        {division.website !== "#" && (
          <a
            href={division.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {language.common.visitWebsite}
            <span aria-hidden="true">
              ↗
            </span>

            <span className="sr-only">
              {language.common.newTab}
            </span>
          </a>
        )}
      </div>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">
            {language.common.expertiseEyebrow}
          </p>

          <h2>
            {language.common.expertiseTitle}
          </h2>
        </div>

        <div className="expertise-grid">
          {division.skills.map(
            ([title, description], i) => (
              <article key={title}>
                <span className="index">
                  0{i + 1}
                </span>

                <h3>
                  {title}
                </h3>

                <p>
                  {description}
                </p>
              </article>
            )
          )}
        </div>
      </section>

      {project && (
        <section className="section section-ice featured-project">
          <div>
            <p className="eyebrow">
              {language.common.projectsEyebrow}
            </p>

            <h2>
              {division.projectTitle}
            </h2>

            <p className="body-copy">
              {project.intro}
            </p>

            <Link
              href="/projets"
              className="text-link"
            >
              {language.common.allProjects}{" "}
              <span aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>

          <ProjectCard project={project} />
        </section>
      )}

      <section className="section sibling-section">
        <p className="eyebrow">
          {language.common.ecosystem}
        </p>

        <h2>
          {language.common.exploreOther}
        </h2>

        <div className="sibling-links">
          <Link href={`/poles/${siblingSlug}`}>
            <span>
              {sibling.field}
            </span>

            <strong>
              LMG {sibling.name}
            </strong>

            <b aria-hidden="true">
              ↗
            </b>
          </Link>
        </div>
      </section>

      <NextStep
        title={division.contact}
        href={`/contact#${slug}`}
        label={language.common.contact}
      />
    </main>
  );
}