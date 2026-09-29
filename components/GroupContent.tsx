"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import NextStep from "@/components/NextStep";
import PageIntro from "@/components/PageIntro";

export default function GroupContent() {
  const { locale } = useLanguage();

  const content =
    locale === "en"
      ? {
          intro: {
            label: "About LMG Group",
            title: "Independent in spirit.\nBuilt to evolve.",
            description:
              "Legacy Music Group is an independent group that develops brands, projects and solutions across culture, creativity and innovation. Its ecosystem is built to grow, evolve and open new fields of activity over time.",
          },

          chaptersLabel: "EXPLORE THE GROUP",

          chapters: [
            ["vision", "Our Vision"],
            ["ecosysteme", "Our Ecosystem"],
            ["approche", "Our Approach"],
            ["direction", "Leadership"],
          ] as const,

          vision: {
            eyebrow: "01 / OUR VISION",
            title: (
              <>
                Give ideas
                <br />
                direction.
                <br />
                <span>And talent, a horizon.</span>
              </>
            ),
            paragraphs: [
              "LMG was built around a simple idea: create strong activities, give them the means to develop and allow new ideas to become real projects.",
              "The Group currently develops its activities primarily through LMG Music and LMG Agency. This foundation is designed to evolve over time as new projects, solutions and areas of expertise emerge.",
            ],
            signature: "Create. Develop. Build.",
          },

          ecosystem: {
            eyebrow: "02 / THE LMG ECOSYSTEM",
            title: (
              <>
                Two businesses.
                <br />
                One shared ambition.
              </>
            ),
            intro:
              "Today, the LMG ecosystem is structured around two core businesses. Each develops its own expertise and identity while contributing to the wider development of the Group.",

            businesses: [
              {
                number: "01",
                href: "/poles/music",
                name: "MUSIC",
                field:
                  "Music · Artist Development · Live Entertainment",
                description:
                  "LMG Music develops artists, projects and experiences across recorded music and live entertainment, from artistic direction to audience connection.",
                link: "Discover LMG Music",
              },
              {
                number: "02",
                href: "/poles/agency",
                name: "AGENCY",
                field: "Strategy · Creative · Digital",
                description:
                  "LMG Agency helps brands, projects and talents define their identity, build their communication and create meaningful digital experiences.",
                link: "Discover LMG Agency",
              },
            ],

            connectionEyebrow: "WHAT CONNECTS US",
            connection:
              "A shared entrepreneurial vision connects the Group’s activities: develop strong identities, build useful projects and create the conditions for each activity to grow independently while benefiting from the wider LMG ecosystem.",
          },

          approach: {
            eyebrow: "03 / OUR APPROACH",
            title: (
              <>
                A vision
                <br />
                translated into action.
              </>
            ),

            principles: [
              {
                title: "Understand",
                subtitle: "Identity before execution.",
                description:
                  "Every collaboration begins with the project: its world, ambitions and the people it wants to reach. Understanding these elements gives direction to the work.",
              },
              {
                title: "Connect",
                subtitle: "The right expertise, at the right time.",
                description:
                  "The Group connects expertise, resources and ideas when they can strengthen a project. Each activity keeps its own identity while benefiting from the wider LMG ecosystem.",
              },
              {
                title: "Build",
                subtitle: "A journey, step by step.",
                description:
                  "LMG is built with a long-term perspective. We develop what exists today while creating the foundations that allow new projects, solutions and activities to emerge tomorrow.",
              },
            ],

            projects:
              "See our approach through our projects",
          },

          leadership: {
            eyebrow: "04 / LEADERSHIP",
            title: (
              <>
                The people
                <br />
                behind the vision.
              </>
            ),

            presidentRole: "PRESIDENT / LMG GROUP",
            presidentDescription:
              "President and founder of LMG.",

            directionRole: "MANAGEMENT / MUSIC & AGENCY",
            directionDescription:
              "Co-founder of LMG Agency and Managing Director of LMG Music.",

            contact: "Connect with the Group",
          },

          nextStep: {
            title: "What comes next, we build together.",
            description:
              "Discover the businesses, projects and initiatives shaping LMG today — and those preparing what comes next.",
            label: "Explore our businesses",
          },

          pageNavigationLabel: "On this page",
        }
      : {
          intro: {
            label: "À propos de LMG Group",
            title: "Indépendants d’esprit.\nPensés pour évoluer.",
            description:
              "Legacy Music Group est un groupe indépendant qui développe des marques, des projets et des solutions à la croisée de la culture, de la création et de l’innovation. Son écosystème est pensé pour grandir, évoluer et s’ouvrir progressivement à de nouveaux champs d’activité.",
          },

          chaptersLabel: "EXPLORER LE GROUPE",

          chapters: [
            ["vision", "Notre vision"],
            ["ecosysteme", "Notre écosystème"],
            ["approche", "Notre approche"],
            ["direction", "La direction"],
          ] as const,

          vision: {
            eyebrow: "01 / NOTRE VISION",
            title: (
              <>
                Donner aux idées
                <br />
                une direction.
                <br />
                <span>Et aux talents, un horizon.</span>
              </>
            ),
            paragraphs: [
              "LMG s’est construit autour d’une idée simple : créer des activités fortes, leur donner les moyens de se développer et permettre à de nouvelles idées de devenir des projets concrets.",
              "Le groupe développe aujourd’hui principalement ses activités à travers LMG Music et LMG Agency. Cette première base est pensée pour évoluer au fil du développement de nouveaux projets, solutions et expertises.",
            ],
            signature: "Créer. Développer. Construire.",
          },

          ecosystem: {
            eyebrow: "02 / L’ÉCOSYSTÈME LMG",
            title: (
              <>
                Deux pôles.
                <br />
                Une ambition commune.
              </>
            ),
            intro:
              "Aujourd’hui, l’écosystème LMG s’articule autour de deux activités principales. Chacune développe ses propres expertises et son identité tout en participant au développement global du groupe.",

            businesses: [
              {
                number: "01",
                href: "/poles/music",
                name: "MUSIC",
                field:
                  "Musique · Développement artistique · Live Entertainment",
                description:
                  "LMG Music développe les artistes, les projets et les expériences autour de la musique et du live, de la direction artistique jusqu’à la rencontre avec le public.",
                link: "Découvrir LMG Music",
              },
              {
                number: "02",
                href: "/poles/agency",
                name: "AGENCY",
                field: "Stratégie · Création · Digital",
                description:
                  "LMG Agency accompagne les marques, les projets et les talents dans leur identité, leur communication et la création d’expériences digitales.",
                link: "Découvrir LMG Agency",
              },
            ],

            connectionEyebrow: "CE QUI NOUS RELIE",
            connection:
              "Une même vision entrepreneuriale relie les activités du groupe : développer des identités fortes, construire des projets utiles et permettre à chaque activité de grandir de manière autonome tout en bénéficiant de l’écosystème LMG.",
          },

          approach: {
            eyebrow: "03 / NOTRE APPROCHE",
            title: (
              <>
                Une vision qui
                <br />
                se traduit en actions.
              </>
            ),

            principles: [
              {
                title: "Comprendre",
                subtitle: "L’identité avant les moyens.",
                description:
                  "Chaque collaboration commence par le projet : son univers, ses ambitions et les personnes auxquelles il s’adresse. Cette compréhension donne une direction au travail.",
              },
              {
                title: "Relier",
                subtitle: "Les bons métiers, au bon moment.",
                description:
                  "Le groupe relie les expertises, les ressources et les idées lorsqu’elles peuvent renforcer un projet. Chaque activité conserve son identité tout en bénéficiant de l’écosystème LMG.",
              },
              {
                title: "Construire",
                subtitle: "Une trajectoire, étape par étape.",
                description:
                  "LMG se construit dans une logique de long terme. Nous développons les activités présentes tout en créant les fondations qui permettront à de nouveaux projets, solutions et activités d’émerger demain.",
              },
            ],

            projects:
              "Voir cette approche à travers nos projets",
          },

          leadership: {
            eyebrow: "04 / LA DIRECTION",
            title: (
              <>
                Les personnes
                <br />
                derrière la vision.
              </>
            ),

            presidentRole: "PRÉSIDENCE / LMG GROUP",
            presidentDescription:
              "Président et fondateur de LMG.",

            directionRole: "DIRECTION / MUSIC & AGENCY",
            directionDescription:
              "Cofondatrice de LMG Agency et directrice générale de LMG Music.",

            contact: "Entrer en relation avec le groupe",
          },

          nextStep: {
            title: "La suite se construit ensemble.",
            description:
              "Découvrez les activités, les projets et les initiatives qui construisent LMG aujourd’hui — et préparent ce qui vient ensuite.",
            label: "Explorer nos activités",
          },

          pageNavigationLabel: "Dans cette page",
        };

  return (
    <main
      id="contenu"
      className="about-page"
    >
      <PageIntro
        label={content.intro.label}
        title={content.intro.title}
        description={content.intro.description}
      />

      <nav
        className="about-chapters"
        aria-label={content.pageNavigationLabel}
      >
        <span>{content.chaptersLabel}</span>

        {content.chapters.map(([id, label], i) => (
          <a
            key={id}
            href={`#${id}`}
          >
            <span>
              0{i + 1}
            </span>

            {label}

            <span aria-hidden="true">
              ↓
            </span>
          </a>
        ))}
      </nav>

      <section
        id="vision"
        className="section about-vision"
        aria-labelledby="vision-title"
      >
        <div className="about-vision-top">
          <p className="eyebrow">
            {content.vision.eyebrow}
          </p>

          <Image
            src="/images/lmg-group-white.webp"
            alt=""
            width={100}
            height={100}
          />
        </div>

        <h2 id="vision-title">
          {content.vision.title}
        </h2>

        <div className="about-vision-copy">
          {content.vision.paragraphs.map(
            (paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            )
          )}
        </div>

        <p className="about-signature">
          {content.vision.signature}
        </p>
      </section>

      <section
        id="ecosysteme"
        className="section"
        aria-labelledby="ecosystem-title"
      >
        <div className="section-heading">
          <p className="eyebrow">
            {content.ecosystem.eyebrow}
          </p>

          <h2 id="ecosystem-title">
            {content.ecosystem.title}
          </h2>
        </div>

        <p className="about-section-intro">
          {content.ecosystem.intro}
        </p>

        <div className="about-divisions">
          {content.ecosystem.businesses.map(
            (business) => (
              <Link
                href={business.href}
                key={business.name}
                className="about-division"
              >
                <span className="index">
                  {business.number} / LMG GROUP
                </span>

                <h3>
                  LMG
                  <br />
                  {business.name}
                </h3>

                <p className="about-division-field">
                  {business.field}
                </p>

                <p>
                  {business.description}
                </p>

                <span className="about-division-link">
                  {business.link}{" "}
                  <span aria-hidden="true">
                    ↗
                  </span>
                </span>
              </Link>
            )
          )}
        </div>

        <div className="about-connection">
          <p className="eyebrow">
            {content.ecosystem.connectionEyebrow}
          </p>

          <p>
            {content.ecosystem.connection}
          </p>
        </div>
      </section>

      <section
        id="approche"
        className="section section-ice"
        aria-labelledby="approach-title"
      >
        <div className="section-heading">
          <p className="eyebrow">
            {content.approach.eyebrow}
          </p>

          <h2 id="approach-title">
            {content.approach.title}
          </h2>
        </div>

        <div className="expertise-grid about-principles">
          {content.approach.principles.map(
            (principle, i) => (
              <article key={principle.title}>
                <span className="index">
                  0{i + 1}
                </span>

                <h3>
                  {principle.title}
                </h3>

                <h4>
                  {principle.subtitle}
                </h4>

                <p>
                  {principle.description}
                </p>
              </article>
            )
          )}
        </div>

        <Link
          href="/projets"
          className="text-link about-project-link"
        >
          {content.approach.projects}{" "}
          <span aria-hidden="true">
            ↗
          </span>
        </Link>
      </section>

      <section
        id="direction"
        className="section"
        aria-labelledby="leadership-title"
      >
        <div className="section-heading">
          <p className="eyebrow">
            {content.leadership.eyebrow}
          </p>

          <h2 id="leadership-title">
            {content.leadership.title}
          </h2>
        </div>

        <div className="leadership about-leadership">
          <article>
            <span className="eyebrow">
              {content.leadership.presidentRole}
            </span>

            <h3>
              Joseph Kayaya
            </h3>

            <p>
              {content.leadership.presidentDescription}
            </p>
          </article>
        </div>

        <Link
          href="/contact"
          className="text-link"
        >
          {content.leadership.contact}{" "}
          <span aria-hidden="true">
            ↗
          </span>
        </Link>
      </section>

      <NextStep
        title={content.nextStep.title}
        description={content.nextStep.description}
        href="/poles"
        label={content.nextStep.label}
      />
    </main>
  );
}