"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { useLanguage } from "@/components/LanguageProvider";

export default function SiteHeader() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();

  const [expanded, setExpanded] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const header = useRef<HTMLElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const mobileToggle = useRef<HTMLButtonElement>(null);

  const sections = [
    {
      id: "about",
      label: t.navigation.about,
      path: "/groupe",
      title: t.about.title,
      intro: t.about.intro,
      links: [
        ["/groupe", t.about.group, t.about.groupDescription],
        ["/groupe#vision", t.about.vision, t.about.visionDescription],
        [
          "/groupe#ecosysteme",
          t.about.ecosystem,
          t.about.ecosystemDescription,
        ],
        [
          "/groupe#approche",
          t.about.approach,
          t.about.approachDescription,
        ],
        [
          "/groupe#direction",
          t.about.leadership,
          t.about.leadershipDescription,
        ],
        ["/presse", t.about.press, t.about.pressDescription],
      ],
    },
    {
      id: "businesses",
      label: t.navigation.businesses,
      path: "/poles",
      title: t.businesses.title,
      intro: t.businesses.intro,
      links: [
        [
          "/poles",
          t.businesses.all,
          t.businesses.allDescription,
        ],
        [
          "/poles/music",
          t.businesses.music,
          t.businesses.musicDescription,
        ],
        [
          "/poles/agency",
          t.businesses.agency,
          t.businesses.agencyDescription,
        ],
      ],
    },
    {
      id: "projects",
      label: t.navigation.projects,
      path: "/projets",
      title: t.projects.title,
      intro: t.projects.intro,
      links: [
        [
          "/projets",
          t.projects.all,
          t.projects.allDescription,
        ],
      ],
    },
    {
      id: "news",
      label: t.navigation.news,
      path: "/actualites",
      title: t.news.title,
      intro: t.news.intro,
      links: [
        [
          "/actualites",
          t.news.all,
          t.news.allDescription,
        ],
      ],
    },
  ] as const;

  const closeAll = () => {
    setExpanded(null);
    setMobileOpen(false);
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      if (expanded) {
        setExpanded(null);
        lastTrigger.current?.focus();
        return;
      }

      if (mobileOpen) {
        setMobileOpen(false);
        mobileToggle.current?.focus();
      }
    };

    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) {
        setExpanded(null);
        setMobileOpen(false);
      }
    };

    const focusOutside = (event: FocusEvent) => {
      if (!header.current?.contains(event.target as Node)) {
        setExpanded(null);
        setMobileOpen(false);
      }
    };

    const breakpoint = window.matchMedia("(max-width: 800px)");

    const resize = () => {
      setExpanded(null);
      setMobileOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", outside);
    document.addEventListener("focusin", focusOutside);
    breakpoint.addEventListener("change", resize);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("focusin", focusOutside);
      breakpoint.removeEventListener("change", resize);
    };
  }, [expanded, mobileOpen]);

  const active = (path: string) =>
    pathname === path ||
    pathname.startsWith(`${path}/`) ||
    (path === "/groupe" && pathname === "/presse");

  const toggleSection = (
    id: string,
    target: HTMLButtonElement
  ) => {
    lastTrigger.current = target;
    setExpanded((current) => (current === id ? null : id));
  };

  const closePanel = () => {
    setExpanded(null);
    lastTrigger.current?.focus();
  };

  const changeLanguage = (language: "en" | "fr") => {
    setLocale(language);
    setExpanded(null);
  };

  return (
    <header ref={header} className="site-header">
      <Link
        href="/"
        className="brand"
        aria-label="LMG Group, Home"
        onClick={closeAll}
      >
        <Image
          className="lmg-logo"
          src="/images/lmg-group-blue.webp"
          alt="Legacy Music Group"
          width={64}
          height={64}
          priority
        />
      </Link>

      <nav
        className="desktop-nav"
        aria-label={
          locale === "en"
            ? "Main navigation"
            : "Navigation principale"
        }
      >
        {sections.map((section) => (
          <div className="nav-section" key={section.id}>
            <button
              type="button"
              className={`nav-trigger${
                active(section.path) ? " is-current" : ""
              }`}
              aria-expanded={expanded === section.id}
              aria-controls={`desktop-${section.id}`}
              onClick={(event) =>
                toggleSection(section.id, event.currentTarget)
              }
            >
              {section.label}

              <span aria-hidden="true">
                {expanded === section.id ? "−" : "+"}
              </span>
            </button>

            <div
              id={`desktop-${section.id}`}
              className="mega-panel"
              hidden={expanded !== section.id}
            >
              <button
                type="button"
                className="panel-close"
                aria-label={
                  locale === "en"
                    ? "Close submenu"
                    : "Fermer le sous-menu"
                }
                onClick={closePanel}
              >
                ×
              </button>

              <div className="mega-intro">
                <span>LMG GROUP</span>
                <h2>{section.title}</h2>
                <p>{section.intro}</p>
              </div>

              <ul className="mega-links">
                {section.links.map(
                  ([href, label, description]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        aria-current={
                          pathname === href ? "page" : undefined
                        }
                        onClick={closeAll}
                      >
                        <span>
                          <strong>{label}</strong>
                          <small>{description}</small>
                        </span>

                        <span aria-hidden="true">↗</span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        ))}

        <Link
          href="/contact"
          className={`nav-trigger${
            active("/contact") ? " is-current" : ""
          }`}
          aria-current={
            pathname === "/contact" ? "page" : undefined
          }
          onClick={closeAll}
        >
          {t.navigation.contact}
        </Link>
      </nav>

      <div
        className="language-switcher"
        aria-label={
          locale === "en" ? "Language" : "Langue"
        }
      >
        <button
          type="button"
          className={locale === "en" ? "is-active" : ""}
          aria-pressed={locale === "en"}
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>

        <span aria-hidden="true">/</span>

        <button
          type="button"
          className={locale === "fr" ? "is-active" : ""}
          aria-pressed={locale === "fr"}
          onClick={() => changeLanguage("fr")}
        >
          FR
        </button>
      </div>

      <Link
        href="/recherche"
        className="header-search"
        aria-current={
          pathname === "/recherche" ? "page" : undefined
        }
        aria-label={t.navigation.search}
        onClick={closeAll}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 5 5" />
        </svg>
      </Link>

      <button
        ref={mobileToggle}
        type="button"
        className="menu-toggle"
        aria-expanded={mobileOpen}
        aria-controls="mobile-menu"
        onClick={() => {
          setMobileOpen((current) => !current);
          setExpanded(null);
        }}
      >
        {mobileOpen
          ? t.navigation.close
          : t.navigation.menu}

        <span aria-hidden="true">
          {mobileOpen ? "−" : "+"}
        </span>
      </button>

      <nav
        id="mobile-menu"
        className="mobile-menu"
        aria-label={
          locale === "en"
            ? "Mobile navigation"
            : "Navigation mobile"
        }
        hidden={!mobileOpen}
      >
        {sections.map((section, index) => (
          <div className="mobile-section" key={section.id}>
            <button
              type="button"
              className={`mobile-section-trigger${
                active(section.path) ? " is-current" : ""
              }`}
              aria-expanded={expanded === section.id}
              aria-controls={`mobile-${section.id}`}
              onClick={(event) =>
                toggleSection(section.id, event.currentTarget)
              }
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              {section.label}

              <span aria-hidden="true">
                {expanded === section.id ? "−" : "+"}
              </span>
            </button>

            <ul
              id={`mobile-${section.id}`}
              className="mobile-submenu"
              hidden={expanded !== section.id}
            >
              {section.links.map(
                ([href, label, description]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={
                        pathname === href ? "page" : undefined
                      }
                      onClick={closeAll}
                    >
                      <span>
                        <strong>{label}</strong>
                        <small>{description}</small>
                      </span>

                      <span aria-hidden="true">↗</span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}

        <Link
          href="/contact"
          className="mobile-contact-link"
          aria-current={
            pathname === "/contact" ? "page" : undefined
          }
          onClick={closeAll}
        >
          <span>05</span>
          {t.navigation.contact}
        </Link>

        <div
          className="mobile-language-switcher"
          aria-label={
            locale === "en" ? "Language" : "Langue"
          }
        >
          <button
            type="button"
            className={locale === "en" ? "is-active" : ""}
            aria-pressed={locale === "en"}
            onClick={() => changeLanguage("en")}
          >
            EN
          </button>

          <span aria-hidden="true">/</span>

          <button
            type="button"
            className={locale === "fr" ? "is-active" : ""}
            aria-pressed={locale === "fr"}
            onClick={() => changeLanguage("fr")}
          >
            FR
          </button>
        </div>

        <p>{t.tagline}</p>
      </nav>
    </header>
  );
}