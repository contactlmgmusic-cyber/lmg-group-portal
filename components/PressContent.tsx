"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import CopyEmail from "@/components/CopyEmail";
import PageIntro from "@/components/PageIntro";
import { contactEmail } from "@/lib/content";

export default function PressContent() {
  const { locale } = useLanguage();

  const content =
    locale === "en"
      ? {
          intro: {
            label: "Press & Media",
            title: "The essentials.\nThe resources.\nThe right contact.",
            description:
              "Company information and resources for articles, profiles and media coverage involving Legacy Music Group.",
          },

          navigation: {
            aria: "Press resources",
            presentation: "Company Profile",
            logos: "Logos",
            contact: "Press Contact",
          },

          overview: {
            eyebrow: "01 / ABOUT LMG",
            title: (
              <>
                One group.
                <br />
                Two core businesses.
              </>
            ),
            discover: "Discover the Group",

            description:
              "Legacy Music Group (LMG) is an independent group developing brands, projects and solutions across culture, creativity and innovation. Its current activities are structured primarily around two core businesses: LMG Music, dedicated to artist development, music projects and live entertainment; and LMG Agency, focused on strategy, creative direction, communication and digital experiences. The Group is built as an evolving ecosystem designed to support the development of new projects, solutions and activities over time.",

            download: "Download company profile",

            businesses: [
              {
                name: "LMG Music",
                field:
                  "Music · Artist Development · Live Entertainment",
              },
              {
                name: "LMG Agency",
                field: "Strategy · Creative · Digital",
              },
            ],
          },

          identity: {
            eyebrow: "02 / VISUAL IDENTITY",
            title: "LMG Group logos.",

            intro:
              "The logo versions used across the Group portal are available below for web use. For print, large-format or transparent files, please contact the Group.",

            logos: [
              {
                name: "Blue Logo",
                file: "lmg-group-blue.webp",
                background: "light",
                description:
                  "LMG Group logo for use on light backgrounds.",
                download: "Download blue logo",
              },
              {
                name: "White Logo",
                file: "lmg-group-white.webp",
                background: "dark",
                description:
                  "LMG Group logo for use on dark blue backgrounds.",
                download: "Download white logo",
              },
            ],

            fileInfo:
              "WebP · 256 × 256 px · background included",
          },

          press: {
            eyebrow: "03 / PRESS INQUIRIES",
            title: (
              <>
                Let's prepare
                <br />
                your story.
              </>
            ),

            description:
              "Interview, company profile, additional visual assets or information about a project: tell us about your publication, your story and your expected publication date.",

            button: "Contact the press team",

            subject: "LMG Group — Press inquiry",

            note:
              "For photography, credits and specific formats, please include the intended use in your message.",
          },

          continue: {
            eyebrow: "KEEP EXPLORING",
            title: "Inside the Group.",

            newsLabel: "The LMG Journal",
            newsTitle: "Our News",

            projectsLabel: "Projects & Initiatives",
            projectsTitle: "Our Projects",
          },
        }
      : {
          intro: {
            label: "Presse & médias",
            title: "Les repères.\nLes ressources.\nLe bon contact.",
            description:
              "Une présentation du groupe et des ressources pour vos articles, portraits et prises de parole autour de Legacy Music Group.",
          },

          navigation: {
            aria: "Ressources presse",
            presentation: "Présentation",
            logos: "Logos",
            contact: "Contact presse",
          },

          overview: {
            eyebrow: "01 / À PROPOS DE LMG",
            title: (
              <>
                Un groupe.
                <br />
                Deux pôles.
              </>
            ),
            discover: "Découvrir le groupe",

            description:
              "Legacy Music Group (LMG) est un groupe indépendant qui développe des marques, des projets et des solutions à la croisée de la culture, de la création et de l’innovation. Ses activités s’articulent aujourd’hui principalement autour de deux pôles : LMG Music, consacré au développement artistique, aux projets musicaux et au live entertainment ; et LMG Agency, dédié à la stratégie, à la direction créative, à la communication et aux expériences digitales. Le groupe est construit comme un écosystème évolutif, pensé pour accompagner le développement de nouveaux projets, solutions et activités au fil du temps.",

            download: "Télécharger la présentation",

            businesses: [
              {
                name: "LMG Music",
                field:
                  "Musique · Développement artistique · Live Entertainment",
              },
              {
                name: "LMG Agency",
                field: "Stratégie · Création · Digital",
              },
            ],
          },

          identity: {
            eyebrow: "02 / IDENTITÉ VISUELLE",
            title: "Les logos LMG Group.",

            intro:
              "Les déclinaisons utilisées sur le portail du groupe sont disponibles ci-dessous au format web. Pour une impression, un grand format ou un fichier transparent, contactez le groupe.",

            logos: [
              {
                name: "Logo bleu",
                file: "lmg-group-blue.webp",
                background: "light",
                description:
                  "Logo LMG Group destiné aux fonds clairs.",
                download: "Télécharger le logo bleu",
              },
              {
                name: "Logo blanc",
                file: "lmg-group-white.webp",
                background: "dark",
                description:
                  "Logo LMG Group destiné aux fonds bleu nuit.",
                download: "Télécharger le logo blanc",
              },
            ],

            fileInfo:
              "WebP · 256 × 256 px · fond inclus",
          },

          press: {
            eyebrow: "03 / DEMANDES PRESSE",
            title: (
              <>
                Préparons
                <br />
                votre sujet.
              </>
            ),

            description:
              "Interview, présentation du groupe, visuel complémentaire ou information sur un projet : indiquez votre média, votre sujet et votre date de publication envisagée.",

            button: "Écrire pour une demande presse",

            subject: "LMG Group — Demande presse",

            note:
              "Pour les photos, crédits et formats spécifiques, précisez l’utilisation prévue dans votre message.",
          },

          continue: {
            eyebrow: "POUR POURSUIVRE",
            title: "La vie du groupe.",

            newsLabel: "Le journal LMG",
            newsTitle: "Nos actualités",

            projectsLabel: "Projets & initiatives",
            projectsTitle: "Nos projets",
          },
        };

  return (
    <main id="contenu">
      <PageIntro
        label={content.intro.label}
        title={content.intro.title}
        description={content.intro.description}
      />

      <nav
        className="press-nav"
        aria-label={content.navigation.aria}
      >
        <a href="#presentation">
          {content.navigation.presentation}{" "}
          <span aria-hidden="true">↓</span>
        </a>

        <a href="#logos">
          {content.navigation.logos}{" "}
          <span aria-hidden="true">↓</span>
        </a>

        <a href="#contact-presse">
          {content.navigation.contact}{" "}
          <span aria-hidden="true">↓</span>
        </a>
      </nav>

      <section
        id="presentation"
        className="section press-overview"
      >
        <div>
          <p className="eyebrow">
            {content.overview.eyebrow}
          </p>

          <h2>
            {content.overview.title}
          </h2>

          <Link
            href="/groupe"
            className="text-link"
          >
            {content.overview.discover}{" "}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div>
          <p className="press-description">
            {content.overview.description}
          </p>

          <a
            href="/presse/presentation-lmg-group.txt"
            download="LMG-Group-Presentation.txt"
            className="text-link"
          >
            {content.overview.download}{" "}
            <span className="press-format">
              TXT
            </span>
            <span aria-hidden="true">↓</span>
          </a>

          <dl className="press-facts">
            {content.overview.businesses.map(
              (business) => (
                <div key={business.name}>
                  <dt>
                    {business.name}
                  </dt>

                  <dd>
                    {business.field}
                  </dd>
                </div>
              )
            )}
          </dl>
        </div>
      </section>

      <section
        id="logos"
        className="section section-ice"
      >
        <div className="section-heading">
          <p className="eyebrow">
            {content.identity.eyebrow}
          </p>

          <h2>
            {content.identity.title}
          </h2>
        </div>

        <p className="press-intro">
          {content.identity.intro}
        </p>

        <div className="press-logos">
          {content.identity.logos.map((logo) => (
            <article key={logo.file}>
              <div
                className={`press-logo-preview press-logo-${logo.background}`}
              >
                <Image
                  src={`/images/${logo.file}`}
                  alt={`${logo.name} LMG Group`}
                  width={160}
                  height={160}
                />
              </div>

              <div className="press-logo-details">
                <h3>
                  {logo.name}
                </h3>

                <p>
                  {logo.description}
                </p>

                <p className="press-file-info">
                  {content.identity.fileInfo}
                </p>

                <a
                  href={`/images/${logo.file}`}
                  download={logo.file}
                  className="text-link"
                >
                  {logo.download}{" "}
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact-presse"
        className="section press-contact"
      >
        <div>
          <p className="eyebrow">
            {content.press.eyebrow}
          </p>

          <h2>
            {content.press.title}
          </h2>

          <p className="body-copy">
            {content.press.description}
          </p>
        </div>

        <div className="press-contact-details">
          <a
            className="button button-white"
            href={`mailto:${contactEmail}?subject=${encodeURIComponent(
              content.press.subject
            )}`}
          >
            {content.press.button}{" "}
            <span aria-hidden="true">↗</span>
          </a>

          <a
            className="press-email"
            href={`mailto:${contactEmail}`}
          >
            {contactEmail}
          </a>

          <CopyEmail />

          <p>
            {content.press.note}
          </p>
        </div>
      </section>

      <section className="section sibling-section">
        <p className="eyebrow">
          {content.continue.eyebrow}
        </p>

        <h2>
          {content.continue.title}
        </h2>

        <div className="sibling-links">
          <Link href="/actualites">
            <span>
              {content.continue.newsLabel}
            </span>

            <strong>
              {content.continue.newsTitle}
            </strong>

            <b aria-hidden="true">↗</b>
          </Link>

          <Link href="/projets">
            <span>
              {content.continue.projectsLabel}
            </span>

            <strong>
              {content.continue.projectsTitle}
            </strong>

            <b aria-hidden="true">↗</b>
          </Link>
        </div>
      </section>
    </main>
  );
}