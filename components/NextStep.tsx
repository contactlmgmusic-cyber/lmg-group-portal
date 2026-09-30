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
            "A project, a brand, an initiative or a new idea to develop? Connect with LMG and let’s build what comes next.",
          label: "Get in touch",
        }
      : {
          eyebrow: "LE PROCHAIN CHAPITRE",
          title: "Construisons la suite.",
          description:
            "Un projet, une marque, une initiative ou une nouvelle idée à développer ? Échangeons avec LMG pour construire la suite.",
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