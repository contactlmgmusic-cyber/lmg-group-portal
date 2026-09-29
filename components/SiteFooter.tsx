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

          legalNotice: "Legal Notice",
          privacy: "Privacy Policy",
          cookies: "Cookie Policy",
          manageCookies: "Customize Cookies",
          accessibility: "Accessibility",
          sitemap: "Site Map",

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

          legalNotice: "Mentions légales",
          privacy: "Politique de confidentialité",
          cookies: "Politique de cookies",
          manageCookies: "Gérer mes cookies",
          accessibility: "Accessibilité",
          sitemap: "Plan du site",

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

  function openCookieSettings() {
    window.dispatchEvent(
      new Event("lmg:open-cookie-settings")
    );
  }

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

          <a
  href="https://lmgmusic.fr"
  target="_blank"
  rel="noopener noreferrer"
>
  {content.music} ↗
</a>

<a
  href="https://lmgagency.fr"
  target="_blank"
  rel="noopener noreferrer"
>
  {content.agency} ↗
</a>
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

      <div className="footer-legal">
        <button
  type="button"
  className="footer-cookie-trigger"
  onClick={openCookieSettings}
  aria-label={
    locale === "fr"
      ? "Gérer mes préférences de cookies"
      : "Customize cookie preferences"
  }
  title={
    locale === "fr"
      ? "Gérer mes cookies"
      : "Customize Cookies"
  }
>
  <svg
    viewBox="0 0 32 32"
    aria-hidden="true"
  >
    <path
      d="M26.5 16.8A7 7 0 0 1 18.2 7a8.8 8.8 0 1 0 8.3 9.8Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="11.2" cy="13" r="1.3" fill="currentColor" />
    <circle cx="13.8" cy="20.2" r="1.3" fill="currentColor" />
    <circle cx="19.2" cy="17.2" r="1.3" fill="currentColor" />
  </svg>
</button>
        <nav
          className="footer-legal-links"
          aria-label={
            locale === "fr"
              ? "Informations légales"
              : "Legal information"
          }
        >
          <Link href="/mentions-legales">
            {content.legalNotice}
          </Link>

          <Link href="/confidentialite">
            {content.privacy}
          </Link>

          <Link href="/cookies">
            {content.cookies}
          </Link>

          <button
            type="button"
            onClick={openCookieSettings}
          >
            {content.manageCookies}
          </button>

          <Link href="/accessibilite">
            {content.accessibility}
          </Link>

          <Link href="/plan-du-site">
            {content.sitemap}
          </Link>
        </nav>

        <span className="footer-copyright">
          © {new Date().getFullYear()} Legacy Music Group
        </span>
      </div>
    </footer>
  );
}