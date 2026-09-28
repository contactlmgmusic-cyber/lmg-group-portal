"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";

export default function PageIntro({
  label,
  title,
  description,
  parent,
}: {
  label: string;
  title: string;
  description: string;
  parent?: {
    label: string;
    href: string;
  };
}) {
  const { locale } = useLanguage();

  const content =
    locale === "en"
      ? {
          home: "Home",
          breadcrumbAria: "Breadcrumb",
        }
      : {
          home: "Accueil",
          breadcrumbAria: "Fil d’Ariane",
        };

  return (
    <section className="page-intro">
      <nav
        className="breadcrumbs"
        aria-label={content.breadcrumbAria}
      >
        <Link href="/">
          {content.home}
        </Link>

        <span aria-hidden="true">
          /
        </span>

        {parent && (
          <>
            <Link href={parent.href}>
              {parent.label}
            </Link>

            <span aria-hidden="true">
              /
            </span>
          </>
        )}

        <span aria-current="page">
          {label}
        </span>
      </nav>

      <div className="intro-heading">
        <p className="eyebrow">
          LMG GROUP / {label}
        </p>

        <h1>
          {title}
        </h1>

        <p className="intro-description">
          {description}
        </p>
      </div>
    </section>
  );
}