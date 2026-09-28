"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function CookiePolicyContent() {
  const { locale } = useLanguage();
  const isFr = locale === "fr";

  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="legal-hero-copy">
            <p className="legal-eyebrow">
              {isFr
                ? "Préférences et traceurs"
                : "Preferences & tracking"}
            </p>

            <h1>
              {isFr
                ? "Politique de cookies"
                : "Cookie Policy"}
            </h1>

            <p className="legal-intro">
              {isFr
                ? "Cette page présente les cookies et technologies similaires susceptibles d’être utilisés sur le site Legacy Music Group et la manière dont vous pouvez contrôler vos choix."
                : "This page explains the cookies and similar technologies that may be used on the Legacy Music Group website and how you can control your choices."}
            </p>
          </div>
        </div>
      </section>

      <section className="legal-body">
        <div className="legal-layout">
          <aside className="legal-aside">
            <strong>Legacy Music Group</strong>

            <p>
              {isFr
                ? "Dernière mise à jour : septembre 2026"
                : "Last updated: September 2026"}
            </p>
          </aside>

          <div className="legal-content">
            <Section
              title={
                isFr
                  ? "1. Qu’est-ce qu’un cookie ?"
                  : "1. What is a cookie?"
              }
            >
              <p>
                {isFr
                  ? "Un cookie est un petit fichier ou une information enregistrée ou lue sur votre terminal lors de la consultation d’un site. Des technologies similaires, comme le stockage local du navigateur, peuvent également être utilisées."
                  : "A cookie is a small file or piece of information stored on or read from your device when you visit a website. Similar technologies, such as browser local storage, may also be used."}
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
                  ? "Certaines technologies peuvent être nécessaires au bon fonctionnement du site et à la fourniture de fonctionnalités demandées par l’utilisateur."
                  : "Certain technologies may be required for the website to function correctly and to provide features requested by the user."}
              </p>

              <p>
                {isFr
                  ? "Le site utilise notamment le stockage local du navigateur pour mémoriser certaines préférences, telles que la langue sélectionnée et vos choix relatifs aux cookies."
                  : "The website notably uses browser local storage to remember certain preferences, such as your selected language and your cookie choices."}
              </p>

              <p>
                {isFr
                  ? "Ces technologies nécessaires ne sont pas désactivées par le gestionnaire de préférences."
                  : "These necessary technologies are not disabled by the preference manager."}
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
                  ? "Legacy Music Group peut être amené à utiliser des outils de mesure d’audience afin de mieux comprendre l’utilisation du site et d’en améliorer les performances."
                  : "Legacy Music Group may use audience measurement tools to better understand how the website is used and to improve its performance."}
              </p>

              <p>
                {isFr
                  ? "Lorsque le consentement est requis par la réglementation applicable, ces outils ne doivent être activés qu’après votre accord."
                  : "Where consent is required under applicable law, these tools should only be activated after you have given your permission."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "4. Contenus et services tiers"
                  : "4. Third-party content and services"
              }
            >
              <p>
                {isFr
                  ? "Certaines fonctionnalités du site peuvent, le cas échéant, faire appel à des services fournis par des plateformes tierces."
                  : "Certain website features may, where applicable, rely on services provided by third-party platforms."}
              </p>

              <p>
                {isFr
                  ? "Lorsque ces services impliquent le dépôt ou la lecture de traceurs soumis au consentement, ils ne doivent être activés qu’après votre choix."
                  : "Where those services involve the use of tracking technologies requiring consent, they should only be enabled after you have made your choice."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "5. Vos choix"
                  : "5. Your choices"
              }
            >
              <p>
                {isFr
                  ? "Lorsqu’un choix est requis, vous pouvez accepter ou refuser les technologies facultatives proposées par le site."
                  : "Where a choice is required, you can accept or reject the optional technologies offered by the website."}
              </p>

              <p>
                {isFr
                  ? "Le refus des technologies facultatives n’empêche pas l’utilisation des fonctionnalités strictement nécessaires au fonctionnement du site."
                  : "Rejecting optional technologies does not prevent the use of features that are strictly necessary for the website to operate."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "6. Modifier ou retirer votre choix"
                  : "6. Changing or withdrawing your choice"
              }
            >
              <p>
                {isFr
                  ? "Vous pouvez modifier vos préférences à tout moment en utilisant l’option « Gérer mes cookies » disponible dans le pied de page du site."
                  : "You can change your preferences at any time using the “Customize Cookies” option available in the website footer."}
              </p>

              <p>
                {isFr
                  ? "Le retrait de votre consentement n’affecte pas la licéité des traitements réalisés avant ce retrait."
                  : "Withdrawing your consent does not affect the lawfulness of processing carried out before that withdrawal."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "7. Conservation de vos choix"
                  : "7. Retention of your choices"
              }
            >
              <p>
                {isFr
                  ? "Vos choix sont mémorisés pendant une durée limitée afin d’éviter de vous solliciter à chaque visite. Ils pourront vous être demandés de nouveau lorsque cette durée expire ou lorsque l’utilisation des technologies du site évolue de manière significative."
                  : "Your choices are stored for a limited period so that you are not asked on every visit. You may be asked again when that period expires or when the website’s use of technologies changes significantly."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "8. Évolution des technologies utilisées"
                  : "8. Changes to technologies used"
              }
            >
              <p>
                {isFr
                  ? "Cette politique peut être mise à jour lorsque les technologies ou prestataires utilisés sur le site évoluent."
                  : "This policy may be updated when the technologies or service providers used by the website change."}
              </p>

              <p>
                {isFr
                  ? "Les catégories et services présentés dans le gestionnaire de préférences ont vocation à refléter les technologies effectivement utilisées par le site."
                  : "The categories and services shown in the preference manager are intended to reflect the technologies actually used by the website."}
              </p>
            </Section>

            <Section
              title={isFr ? "9. Contact" : "9. Contact"}
            >
              <p>
                {isFr
                  ? "Pour toute question relative à l’utilisation des cookies ou autres technologies similaires, vous pouvez nous contacter à l’adresse suivante : "
                  : "For any questions relating to cookies or similar technologies, you can contact us at: "}
                <a href="mailto:contact@legacymusicgroup.fr">
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
    <section className="legal-section">
      <h2>{title}</h2>

      <div className="legal-section-copy">
        {children}
      </div>
    </section>
  );
}