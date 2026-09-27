"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";

type NextStepProps = {
  title?: string;
  description?: string;
  href?: string;
  label?: string;
};

export default function NextStep({
  title,
  description,
  href = "/contact",
  label,
}: NextStepProps) {
  const { locale } = useLanguage();

  const defaults =
    locale === "en"
      ? {
          eyebrow: "THE NEXT CHAPTER",
          title: "Let's build what comes next.",
          description:
            "An artistic project, a live experience or a brand ready to grow? Connect with the right LMG team.",
          label: "Get in touch",
        }
      : {
          eyebrow: "LE PROCHAIN CHAPITRE",
          title: "Construisons la suite.",
          description:
            "Un projet artistique, une expérience live ou une marque à faire grandir ? Échangeons avec la bonne équipe LMG.",
          label: "Entrer en contact",
        };

  return (
    <section className="next-step">
      <div>
        <p className="eyebrow">
          {defaults.eyebrow}
        </p>

        <h2>
          {title ?? defaults.title}
        </h2>

        <p>
          {description ?? defaults.description}
        </p>
      </div>

      <Link
        href={href}
        className="button button-white"
      >
        {label ?? defaults.label}

        <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}