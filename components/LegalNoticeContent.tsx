"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function LegalNoticeContent() {
  const { locale } = useLanguage();
  const isFr = locale === "fr";

  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="legal-hero-copy">
            <p className="legal-eyebrow">
              {isFr ? "Informations légales" : "Legal information"}
            </p>

            <h1>
              {isFr ? "Mentions légales" : "Legal Notice"}
            </h1>

            <p className="legal-intro">
              {isFr
                ? "Informations relatives à l’édition, à l’hébergement et à l’utilisation du site officiel de Legacy Music Group."
                : "Information relating to the publication, hosting and use of the official Legacy Music Group website."}
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
            <LegalSection
              title={
                isFr
                  ? "1. Éditeur du site"
                  : "1. Website publisher"
              }
            >
              {isFr ? (
                <>
                  <p>
                    Le présent site est édité par{" "}
                    <strong>Legacy Music Group (LMG)</strong>.
                  </p>

                  <p>Société en cours de constitution.</p>

                  <p>
                    Les informations relatives à la forme juridique,
                    au capital social, au siège social, au numéro
                    SIREN et à l’immatriculation au Registre du
                    commerce et des sociétés seront complétées à
                    l’issue de l’immatriculation de la société.
                  </p>

                  <p>
                    Contact :{" "}
                    <a href="mailto:contact@legacymusicgroup.fr">
                      contact@legacymusicgroup.fr
                    </a>
                  </p>
                </>
              ) : (
                <>
                  <p>
                    This website is published by{" "}
                    <strong>Legacy Music Group (LMG)</strong>.
                  </p>

                  <p>
                    Company currently being incorporated in France.
                  </p>

                  <p>
                    Information relating to the company&apos;s legal
                    form, share capital, registered office, SIREN
                    number and registration with the Trade and
                    Companies Register will be added once the company
                    has been incorporated.
                  </p>

                  <p>
                    Contact:{" "}
                    <a href="mailto:contact@legacymusicgroup.fr">
                      contact@legacymusicgroup.fr
                    </a>
                  </p>
                </>
              )}
            </LegalSection>

            <LegalSection
              title={
                isFr
                  ? "2. Directeur de la publication"
                  : "2. Publication director"
              }
            >
              <p>
                {isFr
                  ? "Le directeur de la publication est le Président de Legacy Music Group."
                  : "The publication director is the President of Legacy Music Group."}
              </p>
            </LegalSection>

            <LegalSection
              title={isFr ? "3. Hébergement" : "3. Hosting"}
            >
              {isFr ? (
                <>
                  <p>Le site est hébergé par Vercel Inc.</p>

                  <p>
                    440 N Barranca Ave #4133
                    <br />
                    Covina, CA 91723
                    <br />
                    États-Unis
                  </p>
                </>
              ) : (
                <>
                  <p>The website is hosted by Vercel Inc.</p>

                  <p>
                    440 N Barranca Ave #4133
                    <br />
                    Covina, CA 91723
                    <br />
                    United States
                  </p>
                </>
              )}
            </LegalSection>

            <LegalSection
              title={
                isFr
                  ? "4. Propriété intellectuelle"
                  : "4. Intellectual property"
              }
            >
              <p>
                {isFr
                  ? "Sauf mention contraire, l’ensemble des contenus présents sur ce site, notamment les textes, éléments graphiques, identités visuelles, logos, photographies, vidéos, interfaces, créations et éléments de marque, sont la propriété de Legacy Music Group ou sont utilisés avec l’autorisation de leurs titulaires respectifs."
                  : "Unless otherwise stated, all content available on this website, including texts, graphic elements, visual identities, logos, photographs, videos, interfaces, creative works and brand assets, is owned by Legacy Music Group or used with the permission of the relevant rights holders."}
              </p>

              <p>
                {isFr
                  ? "Toute reproduction, représentation, adaptation, diffusion ou exploitation, totale ou partielle, sans autorisation préalable du titulaire des droits concernés est interdite, sous réserve des exceptions prévues par la législation applicable."
                  : "Any reproduction, representation, adaptation, distribution or exploitation, in whole or in part, without the prior permission of the relevant rights holder is prohibited, subject to exceptions provided by applicable law."}
              </p>
            </LegalSection>

            <LegalSection
              title={
                isFr ? "5. Responsabilité" : "5. Liability"
              }
            >
              <p>
                {isFr
                  ? "Legacy Music Group s’efforce d’assurer l’exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, certaines informations peuvent être modifiées à tout moment et sans préavis."
                  : "Legacy Music Group makes reasonable efforts to ensure that the information published on this website is accurate and up to date. However, certain information may be changed at any time without prior notice."}
              </p>

              <p>
                {isFr
                  ? "Legacy Music Group ne saurait être tenu responsable des dommages résultant d’une interruption, d’un dysfonctionnement ou d’une utilisation du site dans les limites prévues par la législation applicable."
                  : "Legacy Music Group shall not be liable for damage resulting from an interruption, malfunction or use of the website, to the extent permitted by applicable law."}
              </p>
            </LegalSection>

            <LegalSection
              title={
                isFr ? "6. Liens externes" : "6. External links"
              }
            >
              <p>
                {isFr
                  ? "Le site peut contenir des liens vers des sites ou services exploités par des tiers. Legacy Music Group n’exerce aucun contrôle sur leur contenu, leur disponibilité ou leurs pratiques et ne saurait être tenu responsable de ceux-ci."
                  : "This website may contain links to websites or services operated by third parties. Legacy Music Group does not control their content, availability or practices and cannot be held responsible for them."}
              </p>
            </LegalSection>

            <LegalSection
              title={
                isFr
                  ? "7. Données personnelles et cookies"
                  : "7. Personal data and cookies"
              }
            >
              <p>
                {isFr
                  ? "Les informations relatives au traitement des données personnelles et à l’utilisation des cookies et autres traceurs sont détaillées dans la Politique de confidentialité et la Politique de cookies du site."
                  : "Information relating to the processing of personal data and the use of cookies and other tracking technologies is provided in the website’s Privacy Policy and Cookie Policy."}
              </p>
            </LegalSection>

            <LegalSection
              title={
                isFr
                  ? "8. Droit applicable"
                  : "8. Applicable law"
              }
            >
              <p>
                {isFr
                  ? "Le présent site et ses mentions légales sont soumis au droit français, sous réserve des règles impératives éventuellement applicables."
                  : "This website and its legal notice are governed by French law, subject to any mandatory rules that may otherwise apply."}
              </p>
            </LegalSection>
          </div>
        </div>
      </section>
    </main>
  );
}

function LegalSection({
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