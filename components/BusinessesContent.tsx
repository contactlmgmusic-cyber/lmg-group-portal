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
              "LMG Group currently develops its activities through two core businesses: LMG Music and LMG Agency. Each has its own identity, expertise and field of action within the wider Group ecosystem.",
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

          nextStep: {
            title: "Explore our businesses.",
            description:
              "Discover LMG Music and LMG Agency, the two businesses currently shaping the Group’s activities and development.",
            label: "Get in touch",
          },
        }
      : {
          intro: {
            label: "Nos activités",
            title: "Nos activités.\nUn même écosystème.",
            description:
              "LMG Group développe aujourd’hui ses activités à travers deux pôles principaux : LMG Music et LMG Agency. Chacun possède sa propre identité, ses expertises et son champ d’action au sein de l’écosystème du groupe.",
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

          nextStep: {
            title: "Explorer nos activités.",
            description:
              "Découvrez LMG Music et LMG Agency, les deux activités qui structurent aujourd’hui le développement du groupe.",
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

      <NextStep
        title={content.nextStep.title}
        description={content.nextStep.description}
        href="/contact"
        label={content.nextStep.label}
      />
    </main>
  );
}