"use client";

import { useLanguage } from "@/components/LanguageProvider";

import PageIntro from "@/components/PageIntro";
import SiteSearch from "@/components/SiteSearch";

export default function SearchContent({
  searchEntries,
}: {
  searchEntries: any[];
}) {
  const { locale } = useLanguage();

  const content =
    locale === "en"
      ? {
          label: "Search",
          title: "Explore LMG.",
          description:
            "The Group, its businesses, projects and stories — all in one place.",
        }
      : {
          label: "Recherche",
          title: "Explorer LMG.",
          description:
            "Les pages du groupe, ses métiers, ses projets et ses actualités, à portée de recherche.",
        };

  return (
    <main id="contenu">
      <PageIntro
        label={content.label}
        title={content.title}
        description={content.description}
      />

      <SiteSearch
        searchEntries={searchEntries}
      />
    </main>
  );
}