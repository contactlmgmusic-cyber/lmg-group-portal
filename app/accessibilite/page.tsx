"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function AccessibilityPage() {
  const { locale } = useLanguage();
  const isFr = locale === "fr";

  return (
    <main className="bg-white text-black">
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
            {isFr ? "Expérience numérique" : "Digital experience"}
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
            {isFr ? "Accessibilité" : "Accessibility"}
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
            {isFr
              ? "Legacy Music Group souhaite proposer une expérience numérique claire, utilisable et accessible au plus grand nombre."
              : "Legacy Music Group aims to provide a clear, usable and accessible digital experience to as many people as possible."}
          </p>
        </div>
      </section>

      <section className="border-t border-neutral-200">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-[260px_1fr] md:px-10 md:py-28">
          <aside>
            <p className="text-sm font-semibold">
              Legacy Music Group
            </p>

            <p className="mt-2 text-sm leading-6 text-neutral-500">
              {isFr
                ? "Accessibilité du site"
                : "Website accessibility"}
            </p>
          </aside>

          <div className="max-w-3xl space-y-16">
            <Section
              title={
                isFr
                  ? "Notre démarche"
                  : "Our approach"
              }
            >
              <p>
                {isFr
                  ? "LMG prend en compte l’accessibilité dans la conception et l’évolution de son site afin d’en faciliter l’utilisation par tous les visiteurs, quels que soient leurs équipements, leurs usages ou leurs besoins."
                  : "LMG considers accessibility in the design and development of its website in order to make it easier to use for all visitors, regardless of their equipment, browsing methods or needs."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "Principes appliqués"
                  : "Principles applied"
              }
            >
              <p>
                {isFr
                  ? "Le site est notamment conçu avec une structure de contenu claire, une navigation cohérente, une utilisation possible au clavier, des états de focus visibles, des textes alternatifs lorsque cela est pertinent et une interface adaptée aux différentes tailles d’écran."
                  : "The website is designed with a clear content structure, consistent navigation, keyboard usability, visible focus states, alternative text where relevant and an interface adapted to different screen sizes."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "Amélioration continue"
                  : "Continuous improvement"
              }
            >
              <p>
                {isFr
                  ? "L’accessibilité est intégrée à l’évolution continue du site. Certaines fonctionnalités ou certains contenus peuvent encore nécessiter des améliorations."
                  : "Accessibility is part of the website’s ongoing development. Some features or content may still require improvement."}
              </p>

              <p>
                {isFr
                  ? "Cette page ne constitue pas, à elle seule, une déclaration de conformité à un référentiel d’accessibilité."
                  : "This page does not, by itself, constitute a declaration of compliance with an accessibility standard."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "Signaler une difficulté"
                  : "Report an accessibility issue"
              }
            >
              <p>
                {isFr
                  ? "Si vous rencontrez une difficulté pour accéder à un contenu ou utiliser une fonctionnalité du site, vous pouvez nous contacter. Nous ferons notre possible pour vous proposer une solution ou un accès alternatif lorsque cela est possible."
                  : "If you experience difficulty accessing content or using a feature of the website, you can contact us. We will make reasonable efforts to provide a solution or an alternative means of access where possible."}
              </p>

              <a
                href="mailto:contact@legacymusicgroup.fr"
                className="inline-block underline underline-offset-4"
              >
                contact@legacymusicgroup.fr
              </a>
            </Section>
          </div>
        </div>
      </section>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-[-0.025em] md:text-3xl">
        {title}
      </h2>

      <div className="mt-6 space-y-4 text-[15px] leading-7 text-neutral-600 md:text-base">
        {children}
      </div>
    </section>
  );
}