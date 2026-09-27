"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import { contactEmail } from "@/lib/content";

export default function SiteFooter() {
  const { locale } = useLanguage();

  const content =
    locale === "en"
      ? {
          ariaHome: "LMG Group, Home",

          tagline: (
            <>
              Music, live entertainment and creative.
              <br />
              Distinct expertise.
              <br />
              One shared ambition.
            </>
          ),

          group: "The Group",
          vision: "Our Vision",
          businesses: "Our Businesses",
          projects: "Our Projects",
          news: "News",
          press: "Press & Media",
          contact: "Contact",
          search: "Search",

          divisions: "Our Businesses",
          music: "LMG Music",
          agency: "LMG Agency",

          follow: "Follow Us",
          musicInstagram: "Music",
          entertainmentInstagram: "Entertainment",
          agencyInstagram: "Agency",

          instagramNewTab:
            " on Instagram (opens in a new tab)",

          backToTop: "Back to top ↑",
        }
      : {
          ariaHome: "LMG Group, accueil",

          tagline: (
            <>
              Musique, live et création.
              <br />
              Des métiers singuliers.
              <br />
              Une ambition commune.
            </>
          ),

          group: "Le groupe",
          vision: "Notre vision",
          businesses: "Nos activités",
          projects: "Nos projets",
          news: "Actualités",
          press: "Presse & médias",
          contact: "Contact",
          search: "Rechercher",

          divisions: "Nos pôles",
          music: "LMG Music",
          agency: "LMG Agency",

          follow: "Suivez-nous",
          musicInstagram: "Music",
          entertainmentInstagram: "Entertainment",
          agencyInstagram: "Agency",

          instagramNewTab:
            " sur Instagram (nouvel onglet)",

          backToTop: "Haut de page ↑",
        };

  const socialLinks = [
    {
      account: "music.lmg",
      label: content.musicInstagram,
    },
    {
      account: "entertainment.lmg",
      label: content.entertainmentInstagram,
    },
    {
      account: "agency.lmg",
      label: content.agencyInstagram,
    },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link
            href="/"
            className="brand"
            aria-label={content.ariaHome}
          >
            <Image
              className="lmg-logo"
              src="/images/lmg-group-white.webp"
              alt=""
              width={80}
              height={80}
            />

            <span className="brand-label">
              LMG
              <span>LEGACY MUSIC GROUP</span>
            </span>
          </Link>

          <p>{content.tagline}</p>
        </div>

        <div className="footer-links">
          <strong>{content.group}</strong>

          <Link href="/groupe">
            {content.vision}
          </Link>

          <Link href="/poles">
            {content.businesses}
          </Link>

          <Link href="/projets">
            {content.projects}
          </Link>

          <Link href="/actualites">
            {content.news}
          </Link>

          <Link href="/presse">
            {content.press}
          </Link>

          <Link href="/contact">
            {content.contact}
          </Link>

          <Link href="/recherche">
            {content.search}
          </Link>
        </div>

        <div className="footer-links">
          <strong>{content.divisions}</strong>

          <Link href="/poles/music">
            {content.music}
          </Link>

          <Link href="/poles/agency">
            {content.agency}
          </Link>
        </div>

        <div className="footer-links">
          <strong>{content.follow}</strong>

          {socialLinks.map(({ account, label }) => (
            <a
              key={account}
              href={`https://www.instagram.com/${account}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label} ↗
              <span className="sr-only">
                {content.instagramNewTab}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Legacy Music Group
        </span>

        <a href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>

        <a href="#contenu">
          {content.backToTop}
        </a>
      </div>
    </footer>
  );
}