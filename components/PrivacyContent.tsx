"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function PrivacyContent() {
  const { locale } = useLanguage();
  const isFr = locale === "fr";

  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="legal-hero-copy">
            <p className="legal-eyebrow">
              {isFr
                ? "Protection des données"
                : "Data protection"}
            </p>

            <h1>
              {isFr
                ? "Politique de confidentialité"
                : "Privacy Policy"}
            </h1>

            <p className="legal-intro">
              {isFr
                ? "Cette politique explique comment Legacy Music Group collecte, utilise et protège les données personnelles traitées dans le cadre de son site."
                : "This policy explains how Legacy Music Group collects, uses and protects personal data processed through its website."}
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
                  ? "1. Responsable du traitement"
                  : "1. Data controller"
              }
            >
              <p>
                {isFr
                  ? "Les traitements de données personnelles décrits dans cette politique sont mis en œuvre dans le cadre du site Legacy Music Group."
                  : "The personal data processing activities described in this policy are carried out in connection with the Legacy Music Group website."}
              </p>

              <p>
                {isFr
                  ? "Legacy Music Group est une société en cours de constitution en France. Les informations légales définitives seront complétées à l’issue de son immatriculation."
                  : "Legacy Music Group is a company currently being incorporated in France. Final legal information will be added once the company has been registered."}
              </p>

              <p>
                {isFr ? "Contact : " : "Contact: "}
                <a href="mailto:contact@legacymusicgroup.fr">
                  contact@legacymusicgroup.fr
                </a>
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "2. Données susceptibles d’être collectées"
                  : "2. Data we may collect"
              }
            >
              <p>
                {isFr
                  ? "Selon votre utilisation du site et les informations que vous choisissez de nous transmettre, nous pouvons notamment traiter :"
                  : "Depending on how you use the website and the information you choose to provide, we may process:"}
              </p>

              <ul>
                <li>
                  {isFr
                    ? "votre nom et prénom ;"
                    : "your first and last name;"}
                </li>

                <li>
                  {isFr
                    ? "votre adresse e-mail ;"
                    : "your email address;"}
                </li>

                <li>
                  {isFr
                    ? "le nom de votre organisation ou projet, lorsque vous le renseignez ;"
                    : "the name of your organisation or project, where provided;"}
                </li>

                <li>
                  {isFr
                    ? "le contenu de votre demande ou de votre message ;"
                    : "the content of your enquiry or message;"}
                </li>

                <li>
                  {isFr
                    ? "certaines données techniques nécessaires au fonctionnement, à la sécurité et à la maintenance du site."
                    : "certain technical data required for the operation, security and maintenance of the website."}
                </li>
              </ul>
            </Section>

            <Section
              title={
                isFr
                  ? "3. Finalités et bases juridiques"
                  : "3. Purposes and legal bases"
              }
            >
              <p>
                {isFr
                  ? "Les données peuvent être traitées afin de répondre aux demandes reçues, gérer les échanges avec nos interlocuteurs, assurer le fonctionnement et la sécurité du site et, lorsque cela est pertinent, préparer ou exécuter une relation précontractuelle."
                  : "Data may be processed in order to respond to enquiries, manage communications with our contacts, operate and secure the website and, where relevant, take steps prior to entering into a contractual relationship."}
              </p>

              <p>
                {isFr
                  ? "Selon le traitement concerné, la base juridique peut être notre intérêt légitime à répondre aux demandes et à assurer la sécurité du site, l’exécution de mesures précontractuelles prises à votre demande ou votre consentement lorsqu’il est requis pour certaines technologies facultatives."
                  : "Depending on the processing activity, the legal basis may be our legitimate interest in responding to enquiries and securing the website, steps taken at your request prior to entering into a contract, or your consent where required for certain optional technologies."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "4. Destinataires des données"
                  : "4. Recipients of personal data"
              }
            >
              <p>
                {isFr
                  ? "Les données sont accessibles aux personnes autorisées au sein de Legacy Music Group lorsqu’elles en ont besoin dans le cadre de leurs fonctions."
                  : "Personal data may be accessed by authorised persons within Legacy Music Group where necessary for their duties."}
              </p>

              <p>
                {isFr
                  ? "Elles peuvent également être traitées par des prestataires techniques intervenant pour l’hébergement, le fonctionnement, la sécurité ou la maintenance du site, dans la limite nécessaire à leurs missions."
                  : "They may also be processed by technical service providers involved in hosting, operating, securing or maintaining the website, to the extent necessary for their services."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "5. Durée de conservation"
                  : "5. Data retention"
              }
            >
              <p>
                {isFr
                  ? "Les données sont conservées pendant une durée proportionnée à la finalité pour laquelle elles ont été collectées."
                  : "Personal data is retained for a period proportionate to the purpose for which it was collected."}
              </p>

              <p>
                {isFr
                  ? "Les informations transmises dans le cadre d’une prise de contact sont conservées pendant la durée nécessaire au traitement et au suivi de la demande, sauf lorsqu’une durée différente est nécessaire pour respecter une obligation légale ou assurer la constatation, l’exercice ou la défense de droits en justice."
                  : "Information submitted through an enquiry is retained for the period necessary to handle and follow up the request, unless a different period is required to comply with a legal obligation or to establish, exercise or defend legal claims."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "6. Transferts internationaux"
                  : "6. International transfers"
              }
            >
              <p>
                {isFr
                  ? "Certains prestataires techniques peuvent traiter des données depuis des pays situés en dehors de l’Espace économique européen."
                  : "Some technical service providers may process data from countries outside the European Economic Area."}
              </p>

              <p>
                {isFr
                  ? "Lorsque la réglementation applicable l’exige, ces transferts doivent être encadrés par un mécanisme approprié de protection des données."
                  : "Where required by applicable law, such transfers must be covered by an appropriate data protection mechanism."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "7. Vos droits"
                  : "7. Your rights"
              }
            >
              <p>
                {isFr
                  ? "Dans les conditions prévues par la réglementation applicable, vous pouvez notamment disposer des droits suivants :"
                  : "Subject to the conditions provided by applicable law, you may have the following rights:"}
              </p>

              <ul>
                <li>
                  {isFr
                    ? "droit d’accès à vos données ;"
                    : "the right to access your data;"}
                </li>

                <li>
                  {isFr
                    ? "droit de rectification ;"
                    : "the right to rectification;"}
                </li>

                <li>
                  {isFr
                    ? "droit à l’effacement ;"
                    : "the right to erasure;"}
                </li>

                <li>
                  {isFr
                    ? "droit à la limitation du traitement ;"
                    : "the right to restriction of processing;"}
                </li>

                <li>
                  {isFr
                    ? "droit d’opposition ;"
                    : "the right to object;"}
                </li>

                <li>
                  {isFr
                    ? "droit à la portabilité lorsque celui-ci est applicable ;"
                    : "the right to data portability where applicable;"}
                </li>

                <li>
                  {isFr
                    ? "droit de retirer votre consentement à tout moment lorsqu’un traitement repose sur celui-ci."
                    : "the right to withdraw your consent at any time where processing is based on consent."}
                </li>
              </ul>

              <p>
                {isFr
                  ? "Pour exercer vos droits, vous pouvez nous contacter à l’adresse suivante : "
                  : "To exercise your rights, you may contact us at: "}
                <a href="mailto:contact@legacymusicgroup.fr">
                  contact@legacymusicgroup.fr
                </a>
              </p>

              <p>
                {isFr
                  ? "Vous pouvez également introduire une réclamation auprès de la CNIL si vous estimez que le traitement de vos données personnelles ne respecte pas la réglementation applicable."
                  : "You may also lodge a complaint with the CNIL if you believe that the processing of your personal data does not comply with applicable data protection law."}
              </p>
            </Section>

            <Section
              title={isFr ? "8. Sécurité" : "8. Security"}
            >
              <p>
                {isFr
                  ? "Legacy Music Group met en œuvre des mesures techniques et organisationnelles adaptées afin de protéger les données personnelles contre l’accès non autorisé, la perte, l’altération ou la divulgation."
                  : "Legacy Music Group implements appropriate technical and organisational measures designed to protect personal data against unauthorised access, loss, alteration or disclosure."}
              </p>
            </Section>

            <Section
              title={isFr ? "9. Cookies" : "9. Cookies"}
            >
              <p>
                {isFr
                  ? "Le site peut utiliser des technologies strictement nécessaires à son fonctionnement ainsi que, le cas échéant, des technologies facultatives soumises à votre choix."
                  : "The website may use technologies that are strictly necessary for its operation and, where applicable, optional technologies subject to your choice."}
              </p>

              <p>
                {isFr
                  ? "Pour plus d’informations, consultez notre Politique de cookies. Vous pouvez également modifier vos préférences depuis l’option « Gérer mes cookies » disponible dans le pied de page."
                  : "For more information, please refer to our Cookie Policy. You can also change your preferences using the “Customize Cookies” option available in the website footer."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "10. Modification de la politique"
                  : "10. Changes to this policy"
              }
            >
              <p>
                {isFr
                  ? "Cette politique peut être mise à jour afin de tenir compte de l’évolution du site, de nos pratiques ou des exigences réglementaires applicables."
                  : "This policy may be updated to reflect changes to the website, our practices or applicable regulatory requirements."}
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