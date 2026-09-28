"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";

export default function SitemapPage() {
  const { locale } = useLanguage();
  const isFr = locale === "fr";

  const sections = [
    {
      title: isFr ? "Legacy Music Group" : "Legacy Music Group",
      links: [
        {
          href: "/",
          label: isFr ? "Accueil" : "Home",
        },
        {
          href: "/groupe",
          label: isFr ? "Notre vision" : "Our Vision",
        },
        {
          href: "/poles",
          label: isFr ? "Nos activités" : "Our Businesses",
        },
      ],
    },
    {
      title: isFr ? "Nos activités" : "Our Businesses",
      links: [
        {
          href: "/poles/music",
          label: "LMG Music",
        },
        {
          href: "/poles/agency",
          label: "LMG Agency",
        },
      ],
    },
    {
      title: isFr ? "Découvrir" : "Discover",
      links: [
        {
          href: "/projets",
          label: isFr ? "Projets" : "Projects",
        },
        {
          href: "/actualites",
          label: isFr ? "Actualités" : "News",
        },
        {
          href: "/presse",
          label: isFr ? "Presse & médias" : "Press & Media",
        },
        {
          href: "/contact",
          label: "Contact",
        },
        {
          href: "/recherche",
          label: isFr ? "Rechercher" : "Search",
        },
      ],
    },
    {
      title: isFr
        ? "Informations légales"
        : "Legal information",
      links: [
        {
          href: "/mentions-legales",
          label: isFr
            ? "Mentions légales"
            : "Legal Notice",
        },
        {
          href: "/confidentialite",
          label: isFr
            ? "Politique de confidentialité"
            : "Privacy Policy",
        },
        {
          href: "/cookies",
          label: isFr
            ? "Politique de cookies"
            : "Cookie Policy",
        },
        {
          href: "/accessibilite",
          label: isFr
            ? "Accessibilité"
            : "Accessibility",
        },
        {
          href: "/plan-du-site",
          label: isFr
            ? "Plan du site"
            : "Site Map",
        },
      ],
    },
  ];

  return (
    <main className="bg-white text-black">
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Legacy Music Group
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
            {isFr ? "Plan du site" : "Site Map"}
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
            {isFr
              ? "Accédez rapidement aux principales sections du site Legacy Music Group."
              : "Quickly access the main sections of the Legacy Music Group website."}
          </p>
        </div>
      </section>

      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="border-t border-black pt-5 text-lg font-semibold tracking-[-0.02em]">
                  {section.title}
                </h2>

                <ul className="mt-7 space-y-4">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-600 transition hover:text-black"
                      >
                        {link.label} ↗
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}