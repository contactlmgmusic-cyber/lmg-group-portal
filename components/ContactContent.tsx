"use client";

import Link from "next/link";

import CopyEmail from "@/components/CopyEmail";
import { useLanguage } from "@/components/LanguageProvider";
import { contactEmail } from "@/lib/content";

export default function ContactContent() {
  const { locale } = useLanguage();

  const content =
    locale === "en"
      ? {
          home: "Home",
          contact: "Contact Us",
          breadcrumbAria: "Breadcrumb",

          intro:
            "To contact LMG, choose the category that best matches your inquiry. You can connect with the relevant business or contact the Group directly.",

          categories: [
            {
              id: "music",
              title: "Music, artists & live entertainment",
              description:
                "LMG Music — Artist development, music projects, booking, showcases and live experiences.",
              href: "mailto:",
              label: "Contact LMG Music",
              subject: "LMG Music — Inquiry",
              external: false,
            },
            {
              id: "agency",
              title: "Strategy, creative & digital",
              description:
                "LMG Agency — Strategy, brand identity, communication, content and digital experiences.",
              href: "https://agency.legacymusicgroup.fr",
              label: "LMG Agency Website",
              subject: "",
              external: true,
            },
          ],

          newTab: " (opens in a new tab)",

          press: {
            title: "Press & Media",
            description:
              "Company information, logos, interview requests and resources for media coverage.",
            destination: "Press Area",
          },

          group: {
            title: "Group, partnerships & other inquiries",
            description:
              "Questions about Legacy Music Group, partnership opportunities or inquiries involving more than one LMG business.",
            destination: "Contact by email",
            subject: "LMG Group — General inquiry",
          },

          help: {
            title: "Not sure who to contact?",
            description:
              "Briefly introduce your inquiry, the relevant LMG business if you know it, and your contact details.",

            exchangeTitle: "Help us understand your inquiry",
            exchangeDescription:
              "Use a clear subject line and include any links that may help us understand your project. Email contact links will open your default email application.",
          },
        }
      : {
          home: "Accueil",
          contact: "Nous contacter",
          breadcrumbAria: "Fil d’Ariane",

          intro:
            "Pour contacter LMG, choisissez la catégorie qui correspond à votre demande. Vous pourrez rejoindre le pôle concerné ou écrire directement au groupe.",

          categories: [
            {
              id: "music",
              title: "Musique, artistes & live entertainment",
              description:
                "LMG Music — Développement artistique, projets musicaux, booking, showcases et expériences live.",
              href: "mailto:",
              label: "Contacter LMG Music",
              subject: "LMG Music — Prise de contact",
              external: false,
            },
            {
              id: "agency",
              title: "Stratégie, création & digital",
              description:
                "LMG Agency — Stratégie, identité de marque, communication, contenus et expériences digitales.",
              href: "https://agency.legacymusicgroup.fr",
              label: "Site LMG Agency",
              subject: "",
              external: true,
            },
          ],

          newTab: " (nouvel onglet)",

          press: {
            title: "Presse & médias",
            description:
              "Présentation du groupe, logos, demandes d’interview et ressources pour vos publications.",
            destination: "Espace presse",
          },

          group: {
            title: "Groupe, partenariats & autres demandes",
            description:
              "Une question sur Legacy Music Group, une proposition de partenariat ou une demande qui concerne plusieurs activités du groupe.",
            destination: "Contact par e-mail",
            subject: "LMG Group — Demande générale",
          },

          help: {
            title: "Vous ne savez pas à qui vous adresser ?",
            description:
              "Présentez brièvement votre demande, le pôle concerné si vous le connaissez et vos coordonnées.",

            exchangeTitle: "Pour faciliter l’échange",
            exchangeDescription:
              "Indiquez un objet précis et partagez les liens utiles à la compréhension de votre projet. Les liens de contact par e-mail ouvrent votre application de messagerie.",
          },
        };

  return (
    <main
      id="contenu"
      className="contact-directory-page"
    >
      <div className="contact-breadcrumbs">
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

          <span aria-current="page">
            {content.contact}
          </span>
        </nav>
      </div>

      <section className="section contact-directory">
        <header>
          <p className="eyebrow">
            LEGACY MUSIC GROUP
          </p>

          <h1>
            {content.contact}
          </h1>

          <p>
            {content.intro}
          </p>
        </header>

        <ul className="contact-category-list">
          {content.categories.map((category) => {
            const href =
              category.href === "mailto:"
                ? `mailto:${contactEmail}?subject=${encodeURIComponent(
                    category.subject
                  )}`
                : category.href;

            return (
              <li
                id={category.id}
                key={category.id}
              >
                <a
                  href={href}
                  target={
                    category.external
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    category.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <span aria-hidden="true">
                    ›
                  </span>

                  {category.title}

                  <span className="sr-only">
                    {" — "}
                    {category.label}
                    {category.external
                      ? content.newTab
                      : ""}
                  </span>
                </a>

                <p>
                  {category.description}
                </p>

                <span className="contact-destination">
                  {category.label}

                  <span aria-hidden="true">
                    {" "}
                    {category.external
                      ? "↗"
                      : "→"}
                  </span>
                </span>
              </li>
            );
          })}

          <li id="presse">
            <Link href="/presse">
              <span aria-hidden="true">
                ›
              </span>

              {content.press.title}
            </Link>

            <p>
              {content.press.description}
            </p>

            <span className="contact-destination">
              {content.press.destination}{" "}
              <span aria-hidden="true">
                →
              </span>
            </span>
          </li>

          <li id="groupe">
            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                content.group.subject
              )}`}
            >
              <span aria-hidden="true">
                ›
              </span>

              {content.group.title}
            </a>

            <p>
              {content.group.description}
            </p>

            <span className="contact-destination">
              {content.group.destination}{" "}
              <span aria-hidden="true">
                →
              </span>
            </span>
          </li>
        </ul>

        <aside
          className="contact-directory-help"
          aria-labelledby="contact-help-title"
        >
          <div>
            <h2 id="contact-help-title">
              {content.help.title}
            </h2>

            <p>
              {content.help.description}
            </p>

            <a
              className="contact-directory-email"
              href={`mailto:${contactEmail}`}
            >
              {contactEmail}
            </a>

            <CopyEmail />
          </div>

          <div>
            <h3>
              {content.help.exchangeTitle}
            </h3>

            <p>
              {content.help.exchangeDescription}
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}