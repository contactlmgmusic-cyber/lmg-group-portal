"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import NewsCard from "@/components/NewsCard";
import NextStep from "@/components/NextStep";
import ProjectCard from "@/components/ProjectCard";

type HomeContentProps = {
  projects: readonly any[];
  news: readonly any[];
};

export default function HomeContent({
  projects,
  news,
}: HomeContentProps) {
  const { locale } = useLanguage();
  const featured = projects[0];

  const content =
    locale === "en"
      ? {
          heroTitle: (
            <>
              Culture.
              <br />
              Talent.
              <br />
              <span>What comes next.</span>
            </>
          ),
          heroDescription:
            "Music, live entertainment and creative expertise. An independent group connecting disciplines to help projects grow.",
          discoverGroup: "Discover the Group",
          featured: "FEATURED",
          ecosystem: "ONE GROUP. TWO CORE BUSINESSES.",
          explore: "Explore",

          discover: "DISCOVER",
          group: "Group",
          groupNews: "LMG News",
          creation: "Creative",
          groupProjects: "Group Projects",

          groupEyebrow: "01 / THE GROUP",
          visionTitle: (
            <>
              Distinct expertise.
              <br />
              <span className="blue">One shared ambition.</span>
            </>
          ),
          visionDescription:
            "An artist builds a world. A live experience connects with its audience. A brand finds its voice. LMG brings together the expertise that helps each of these journeys move forward.",
          ourVision: "Our Vision",

          projectsEyebrow: "02 / PROJECTS",
          projectsTitle: (
            <>
              Ideas.
              <br />
              Brought to life.
            </>
          ),
          exploreProjects: "Explore Projects",

          newsEyebrow: "03 / NEWS",
          newsTitle: "Inside the Group.",
          allNews: "All News",
        }
      : {
          heroTitle: (
            <>
              La culture.
              <br />
              Les talents.
              <br />
              <span>Et la suite.</span>
            </>
          ),
          heroDescription:
            "Musique, live et création. Un groupe indépendant qui relie les expertises pour faire grandir les projets.",
          discoverGroup: "Découvrir le groupe",
          featured: "À DÉCOUVRIR",
          ecosystem: "UN GROUPE. DEUX PÔLES.",
          explore: "Explorer",

          discover: "À DÉCOUVRIR",
          group: "Groupe",
          groupNews: "Les actualités LMG",
          creation: "Création",
          groupProjects: "Les projets du groupe",

          groupEyebrow: "01 / LE GROUPE",
          visionTitle: (
            <>
              Des métiers singuliers.
              <br />
              <span className="blue">Une ambition commune.</span>
            </>
          ),
          visionDescription:
            "Un artiste développe son univers. Une expérience live rencontre son public. Une marque trouve sa voix. LMG réunit les expertises qui accompagnent ces trajectoires.",
          ourVision: "Notre vision",

          projectsEyebrow: "02 / LES PROJETS",
          projectsTitle: (
            <>
              Des idées.
              <br />
              Des expressions concrètes.
            </>
          ),
          exploreProjects: "Explorer les projets",

          newsEyebrow: "03 / ACTUALITÉS",
          newsTitle: "La vie du groupe.",
          allNews: "Toutes les actualités",
        };

  return (
    <main id="contenu">
      <section className="home-hero">
        <div className="hero-orbit" aria-hidden="true" />

        <div className="hero-copy">
          <p className="eyebrow">LEGACY MUSIC GROUP</p>

          <h1>{content.heroTitle}</h1>

          <p>{content.heroDescription}</p>

          <Link
            href="/groupe"
            className="button button-white"
          >
            {content.discoverGroup}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {featured && (
          <Link
            href={`/projets/${featured.slug}`}
            className="hero-story"
          >
            <div className="hero-story-image">
              <Image
                src={featured.image}
                alt={featured.alt}
                fill
                sizes="(max-width: 800px) 85vw, 38vw"
                priority
              />
            </div>

            <div>
              <span>
                {featured.division} / {content.featured}
              </span>

              <strong>
                {featured.title}{" "}
                <span aria-hidden="true">↗</span>
              </strong>
            </div>
          </Link>
        )}

        <div className="hero-bottom">
          <span>{content.ecosystem}</span>

          <a href="#vision">
            {content.explore}{" "}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <div className="news-strip">
        <span>{content.discover}</span>

        <Link href="/actualites">
          <b>{content.group}</b> {content.groupNews}{" "}
          <span aria-hidden="true">↗</span>
        </Link>

        <Link href="/projets">
          <b>{content.creation}</b> {content.groupProjects}{" "}
          <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <section
        className="section vision-section"
        id="vision"
      >
        <p className="eyebrow">
          {content.groupEyebrow}
        </p>

        <div>
          <h2>{content.visionTitle}</h2>

          <div className="vision-description">
            <p>{content.visionDescription}</p>

            <Link
              href="/groupe"
              className="text-link"
            >
              {content.ourVision}{" "}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">
            {content.projectsEyebrow}
          </p>

          <h2>{content.projectsTitle}</h2>

          <Link
            href="/projets"
            className="text-link"
          >
            {content.exploreProjects}{" "}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="project-grid">
          {projects
            .slice(0, 2)
            .map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
        </div>
      </section>

      {news[0] && (
        <section className="section section-ice">
          <div className="section-heading">
            <p className="eyebrow">
              {content.newsEyebrow}
            </p>

            <h2>{content.newsTitle}</h2>

            <Link
              href="/actualites"
              className="text-link"
            >
              {content.allNews}{" "}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <NewsCard article={news[0]} />
        </section>
      )}

      <NextStep />
    </main>
  );
}