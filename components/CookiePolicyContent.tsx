"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function CookiePolicyContent() {
  const { locale } = useLanguage();
  const isFr = locale === "fr";

  return (
    <main className="bg-white text-black">
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
            {isFr ? "Préférences et traceurs" : "Preferences & tracking"}
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
            {isFr ? "Politique de cookies" : "Cookie Policy"}
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
            {isFr
              ? "Cette page présente les cookies et technologies similaires susceptibles d’être utilisés sur le site Legacy Music Group et la manière dont vous pouvez contrôler vos choix."
              : "This page explains the cookies and similar technologies that may be used on the Legacy Music Group website and how you can control your choices."}
          </p>
        </div>
      </section>

      <section className="border-t border-neutral-200">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-[260px_1fr] md:px-10 md:py-28">
          <aside>
            <p className="text-sm font-semibold">Legacy Music Group</p>
            <p className="mt-2 text-sm leading-6 text-neutral-500">
              {isFr
                ? "Dernière mise à jour : septembre 2026"
                : "Last updated: September 2026"}
            </p>
          </aside>

          <div className="max-w-3xl space-y-16">
            <Section
              title={
                isFr
                  ? "1. Qu’est-ce qu’un cookie ?"
                  : "1. What is a cookie?"
              }
            >
              <p>
                {isFr
                  ? "Un cookie est un petit fichier ou une information enregistrée ou lue sur votre terminal lors de la consultation d’un site ou de l’utilisation d’un service numérique. Des technologies similaires, comme le stockage local du navigateur, peuvent également être utilisées."
                  : "A cookie is a small file or piece of information stored on or read from your device when you visit a website or use a digital service. Similar technologies, such as browser local storage, may also be used."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "2. Technologies nécessaires"
                  : "2. Necessary technologies"
              }
            >
              <p>
                {isFr
                  ? "Certaines technologies sont nécessaires au fonctionnement du site, à sa sécurité ou à la fourniture d’une fonctionnalité expressément demandée par l’utilisateur. Lorsqu’elles répondent aux conditions prévues par la réglementation applicable, elles peuvent être utilisées sans consentement préalable."
                  : "Certain technologies are required for the operation and security of the website or to provide a feature expressly requested by the user. Where they meet the conditions provided by applicable law, they may be used without prior consent."}
              </p>

              <p>
                {isFr
                  ? "Cela peut notamment inclure la mémorisation de certaines préférences d’interface, telles que la langue sélectionnée."
                  : "This may include remembering certain interface preferences, such as the language selected by the user."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "3. Mesure d’audience"
                  : "3. Audience measurement"
              }
            >
              <p>
                {isFr
                  ? "LMG peut utiliser des outils de mesure d’audience afin de comprendre l’utilisation du site et d’en améliorer les performances. Lorsque ces outils nécessitent votre consentement, ils ne sont activés qu’après votre accord."
                  : "LMG may use audience measurement tools to understand how the website is used and improve its performance. Where these tools require consent, they are activated only after you have agreed."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "4. Services et contenus tiers"
                  : "4. Third-party services and content"
              }
            >
              <p>
                {isFr
                  ? "Certaines fonctionnalités ou contenus provenant de services tiers peuvent nécessiter le dépôt ou la lecture de traceurs. Lorsque le consentement est requis, ces services ne doivent être activés qu’après votre choix."
                  : "Certain features or content provided by third-party services may require tracking technologies. Where consent is required, these services should only be activated after you have made your choice."}
              </p>
            </Section>

            <Section
              title={isFr ? "5. Vos choix" : "5. Your choices"}
            >
              <p>
                {isFr
                  ? "Lorsqu’un consentement est requis, vous pouvez accepter ou refuser les traceurs non essentiels. Le refus n’empêche pas l’accès aux fonctionnalités essentielles du site."
                  : "Where consent is required, you may accept or reject non-essential tracking technologies. Rejecting them does not prevent access to the website’s essential features."}
              </p>

              <p>
                {isFr
                  ? "Vous pouvez également personnaliser vos choix par finalité et les modifier ultérieurement."
                  : "You can also customise your choices by purpose and change them later."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "6. Modifier ou retirer votre consentement"
                  : "6. Changing or withdrawing consent"
              }
            >
              <p>
                {isFr
                  ? "Vous pouvez revenir sur vos choix à tout moment grâce au lien « Gérer mes cookies » disponible dans le pied de page du site."
                  : "You can change your choices at any time using the “Manage Cookies” link available in the website footer."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "7. Durée de conservation des choix"
                  : "7. Retention of your choices"
              }
            >
              <p>
                {isFr
                  ? "Votre choix relatif aux cookies peut être mémorisé pendant une durée limitée afin d’éviter de vous solliciter à chaque visite. À l’issue de cette période, le site pourra vous demander d’exprimer à nouveau votre choix."
                  : "Your cookie choices may be remembered for a limited period so that you are not asked on every visit. Once that period expires, the website may ask you to make a new choice."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "8. Évolution des cookies utilisés"
                  : "8. Changes to cookies used"
              }
            >
              <p>
                {isFr
                  ? "Cette politique pourra être mise à jour si les technologies ou prestataires utilisés par le site évoluent. Les catégories et services effectivement activés devront correspondre aux informations présentées dans le gestionnaire de cookies."
                  : "This policy may be updated if the technologies or service providers used by the website change. The categories and services actually enabled must correspond to the information displayed in the cookie manager."}
              </p>
            </Section>

            <Section title={isFr ? "9. Contact" : "9. Contact"}>
              <p>
                {isFr
                  ? "Pour toute question relative à l’utilisation des cookies ou à la protection de vos données :"
                  : "For any question relating to cookies or the protection of your personal data:"}{" "}
                <a
                  href="mailto:contact@legacymusicgroup.fr"
                  className="underline underline-offset-4"
                >
                  contact@legacymusicgroup.fr
                </a>
              </p>
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