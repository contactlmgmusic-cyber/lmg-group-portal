"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function SitemapPage() {
  const { locale } = useLanguage();
  const isFr = locale === "fr";

  const sections = [
    {
      title: "Legacy Music Group",
      links: [
        {
          label: isFr ? "Accueil" : "Home",
          href: "/",
        },
        {
          label: isFr ? "Le Groupe" : "The Group",
          href: "/groupe",
        },
        {
          label: isFr ? "Nos activités" : "Our Businesses",
          href: "/poles",
        },
      ],
    },
    {
      title: isFr ? "Activités" : "Businesses",
      links: [
        {
          label: "LMG Music",
          href: "/poles/music",
        },
        {
          label: "LMG Agency",
          href: "/poles/agency",
        },
      ],
    },
    {
      title: isFr ? "Découvrir" : "Discover",
      links: [
        {
          label: isFr ? "Projets" : "Projects",
          href: "/projets",
        },
        {
          label: isFr ? "Actualités" : "News",
          href: "/actualites",
        },
        {
          label: "Press",
          href: "/press",
        },
        {
          label: "Contact",
          href: "/contact",
        },
        {
          label: isFr ? "Recherche" : "Search",
          href: "/recherche",
        },
      ],
    },
    {
      title: isFr ? "Informations légales" : "Legal",
      links: [
        {
          label: isFr ? "Mentions légales" : "Legal Notice",
          href: "/mentions-legales",
        },
        {
          label: isFr
            ? "Politique de confidentialité"
            : "Privacy Policy",
          href: "/confidentialite",
        },
        {
          label: isFr
            ? "Politique de cookies"
            : "Cookie Policy",
          href: "/cookies",
        },
        {
          label: isFr ? "Accessibilité" : "Accessibility",
          href: "/accessibilite",
        },
        {
          label: isFr ? "Plan du site" : "Site Map",
          href: "/plan-du-site",
        },
      ],
    },
  ];

  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="legal-hero-copy">
            <p className="legal-eyebrow">
              {isFr ? "Navigation" : "Navigation"}
            </p>

            <h1>
              {isFr ? "Plan du site" : "Site Map"}
            </h1>

            <p className="legal-intro">
              {isFr
                ? "Retrouvez les principales pages et ressources du site officiel de Legacy Music Group."
                : "Explore the main pages and resources available on the official Legacy Music Group website."}
            </p>
          </div>
        </div>
      </section>

      <section className="sitemap-body">
        <div className="sitemap-grid">
          {sections.map((section) => (
            <div
              className="sitemap-group"
              key={section.title}
            >
              <h2>{section.title}</h2>

              <ul>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}