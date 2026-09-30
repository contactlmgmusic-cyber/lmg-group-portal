"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import NextStep from "@/components/NextStep";
import PageIntro from "@/components/PageIntro";

export default function BusinessesContent() {
  const { locale } = useLanguage();

  const content =
    locale === "en"
      ? {
          intro: {
            label: "Businesses & Products",
            title: "Our businesses.\nOne ecosystem.",
            description:
              "LMG Group currently develops its activities through two core businesses, LMG Music and LMG Agency, while also building new projects and products designed to extend the Group’s ecosystem.",
          },

          businesses: [
            {
              number: "01",
              slug: "music",
              name: "MUSIC",
              field:
                "MUSIC · ARTIST DEVELOPMENT · LIVE ENTERTAINMENT",
              description:
                "LMG Music develops artists and music projects from artistic direction to audience connection, bringing together recorded music, artist development and live entertainment.",
              skills: [
                "Artist Development",
                "Music Strategy",
                "Artistic Direction",
                "Release Strategy",
                "Live Entertainment",
                "Booking & Showcases",
              ],
              link: "Discover LMG Music",
            },
            {
              number: "02",
              slug: "agency",
              name: "AGENCY",
              field: "STRATEGY · CREATIVE · DIGITAL",
              description:
                "LMG Agency supports brands, projects and talents in building strong identities, communication strategies and digital experiences.",
              skills: [
                "Brand Strategy",
                "Brand Identity",
                "Creative Direction",
                "Communication",
                "Digital",
                "Web & Experiences",
              ],
              link: "Discover LMG Agency",
            },
          ],

          product: {
            label: "COMING NEXT / PRODUCT",
            name: "LMG OS",
            tagline: "Built inside LMG. Designed to go beyond it.",
            description:
              "LMG OS is a business management platform initially developed to support and centralize the operations of LMG Group. The platform is now evolving toward a broader version designed for businesses and teams beyond the LMG ecosystem.",
            status: "COMING SOON",
          },

          nextStep: {
            title: "An ecosystem built to evolve.",
            description:
              "From its current businesses to new products and initiatives, LMG Group continues to develop an ecosystem designed to grow, evolve and explore new opportunities.",
            label: "Get in touch",
          },
        }
      : {
          intro: {
            label: "Activités & Produits",
            title: "Nos activités.\nUn même écosystème.",
            description:
              "LMG Group développe aujourd’hui ses activités à travers deux pôles principaux, LMG Music et LMG Agency, tout en construisant de nouveaux projets et produits destinés à faire évoluer l’écosystème du groupe.",
          },

          businesses: [
            {
              number: "01",
              slug: "music",
              name: "MUSIC",
              field:
                "MUSIQUE · DÉVELOPPEMENT ARTISTIQUE · LIVE ENTERTAINMENT",
              description:
                "LMG Music développe les artistes et les projets musicaux, de la direction artistique jusqu’à la rencontre avec le public, en réunissant musique enregistrée, développement artistique et live entertainment.",
              skills: [
                "Développement artistique",
                "Stratégie musicale",
                "Direction artistique",
                "Stratégie de sortie",
                "Live Entertainment",
                "Booking & Showcases",
              ],
              link: "Découvrir LMG Music",
            },
            {
              number: "02",
              slug: "agency",
              name: "AGENCY",
              field: "STRATÉGIE · CRÉATION · DIGITAL",
              description:
                "LMG Agency accompagne les marques, les projets et les talents dans la construction de leur identité, de leur communication et de leurs expériences digitales.",
              skills: [
                "Stratégie de marque",
                "Identité visuelle",
                "Direction créative",
                "Communication",
                "Digital",
                "Web & Expériences",
              ],
              link: "Découvrir LMG Agency",
            },
          ],

          product: {
            label: "PROCHAINEMENT / PRODUIT",
            name: "LMG OS",
            tagline: "Né au sein de LMG. Pensé pour aller plus loin.",
            description:
              "LMG OS est une plateforme de gestion d’entreprise initialement développée pour accompagner et centraliser les opérations de LMG Group. La plateforme évolue aujourd’hui vers une version plus large, pensée pour des entreprises et des équipes au-delà de l’écosystème LMG.",
            status: "BIENTÔT DISPONIBLE",
          },

          nextStep: {
            title: "Un écosystème conçu pour évoluer.",
            description:
              "De ses activités actuelles à ses nouveaux produits et initiatives, LMG Group continue de développer un écosystème pensé pour grandir, évoluer et explorer de nouvelles opportunités.",
            label: "Entrer en contact",
          },
        };

  return (
    <main id="contenu">
      <PageIntro
        label={content.intro.label}
        title={content.intro.title}
        description={content.intro.description}
      />

      <section className="section activities">
        {content.businesses.map((business) => (
          <article key={business.slug}>
            <div className="activity-title">
              <span className="index">
                {business.number} / 02
              </span>

              <h2>
                LMG
                <br />
                {business.name}
              </h2>
            </div>

            <div>
              <p className="eyebrow">
                {business.field}
              </p>

              <p className="body-copy">
                {business.description}
              </p>

              <ul>
                {business.skills.map((skill) => (
                  <li key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>

              <Link
                href={`/poles/${business.slug}`}
                className="text-link"
              >
                {business.link}{" "}
                <span aria-hidden="true">
                  ↗
                </span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="section">
        <article className="lmg-os-teaser">
          <div className="lmg-os-teaser-heading">
            <p className="eyebrow">{content.product.label}</p>
            <h2>{content.product.name}</h2>
          </div>

          <div className="lmg-os-teaser-content">
            <p className="lmg-os-teaser-tagline">
              {content.product.tagline}
            </p>

            <p className="body-copy">
              {content.product.description}
            </p>

            <span className="lmg-os-status">
              {content.product.status}
            </span>
          </div>
        </article>
      </section>

      <NextStep
        title={content.nextStep.title}
        description={content.nextStep.description}
        href="/contact"
        label={content.nextStep.label}
      />
    </main>
  );
}
