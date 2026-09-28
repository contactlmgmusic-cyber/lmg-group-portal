"use client";

import { useState } from "react";

import { useLanguage } from "@/components/LanguageProvider";
import type { Project } from "@/lib/editorial-types";

import ProjectCard from "./ProjectCard";

export default function ProjectGallery({
  projects,
}: {
  projects: readonly Project[];
}) {
  const { locale } = useLanguage();

  const allFilter = "__all__";
  const [filter, setFilter] = useState(allFilter);

  const content =
    locale === "en"
      ? {
          all: "All",
          ariaLabel: "Filter projects by business",
          project: "project",
          projects: "projects",
          empty:
            "No projects have been published in this selection yet.",
        }
      : {
          all: "Tous",
          ariaLabel: "Filtrer les projets par pôle",
          project: "projet",
          projects: "projets",
          empty:
            "Aucun projet publié dans cette sélection pour le moment.",
        };

  const divisions = Array.from(
    new Set(projects.map((project) => project.division))
  );

  const filtered =
    filter === allFilter
      ? projects
      : projects.filter(
          (project) => project.division === filter
        );

  return (
    <section className="section gallery">
      <div
        className="filter-bar"
        role="group"
        aria-label={content.ariaLabel}
      >
        <button
          type="button"
          aria-pressed={filter === allFilter}
          onClick={() => setFilter(allFilter)}
        >
          {content.all}
        </button>

        {divisions.map((division) => (
          <button
            key={division}
            type="button"
            aria-pressed={filter === division}
            onClick={() => setFilter(division)}
          >
            {division}
          </button>
        ))}

        <span aria-live="polite">
          {filtered.length}{" "}
          {filtered.length === 1
            ? content.project
            : content.projects}
        </span>
      </div>

      {!filtered.length && (
        <p className="body-copy">
          {content.empty}
        </p>
      )}

      <div className="project-grid">
        {filtered.map((project) => (
          <div
            id={project.slug}
            key={project.slug}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}