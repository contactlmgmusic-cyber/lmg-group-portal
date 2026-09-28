"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function PrivacyContent() {
  const { locale } = useLanguage();
  const isFr = locale === "fr";

  return (
    <main className="bg-white text-black">
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
            {isFr ? "Protection des données" : "Data protection"}
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
            {isFr ? "Politique de confidentialité" : "Privacy Policy"}
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
            {isFr
              ? "Cette politique explique comment Legacy Music Group collecte, utilise et protège les données personnelles traitées dans le cadre de son site."
              : "This policy explains how Legacy Music Group collects, uses and protects personal data processed through its website."}
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
                  ? "1. Responsable du traitement"
                  : "1. Data controller"
              }
            >
              <p>
                {isFr
                  ? "Les traitements de données personnelles réalisés dans le cadre de ce site sont mis en œuvre par Legacy Music Group (LMG), société en cours de constitution en France."
                  : "Personal data processing carried out through this website is managed by Legacy Music Group (LMG), a company currently being incorporated in France."}
              </p>

              <p>
                {isFr
                  ? "Pour toute question relative à vos données personnelles ou pour exercer vos droits :"
                  : "For any question relating to your personal data or to exercise your rights:"}{" "}
                <a
                  href="mailto:contact@legacymusicgroup.fr"
                  className="underline underline-offset-4"
                >
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
                  ? "Selon votre utilisation du site, Legacy Music Group peut traiter les informations que vous transmettez volontairement, notamment lorsque vous utilisez le formulaire de contact."
                  : "Depending on how you use the website, Legacy Music Group may process information that you voluntarily provide, particularly when using the contact form."}
              </p>

              <ul className="list-disc space-y-2 pl-5">
                <li>
                  {isFr
                    ? "Nom et prénom, lorsque renseignés."
                    : "First and last name, when provided."}
                </li>
                <li>
                  {isFr
                    ? "Adresse électronique."
                    : "Email address."}
                </li>
                <li>
                  {isFr
                    ? "Organisation ou société, lorsque renseignée."
                    : "Organisation or company, when provided."}
                </li>
                <li>
                  {isFr
                    ? "Objet et contenu de votre demande."
                    : "Subject and content of your request."}
                </li>
                <li>
                  {isFr
                    ? "Données techniques nécessaires au fonctionnement, à la sécurité et à l’administration du site."
                    : "Technical data required for the operation, security and administration of the website."}
                </li>
              </ul>
            </Section>

            <Section
              title={
                isFr
                  ? "3. Finalités et bases légales"
                  : "3. Purposes and legal bases"
              }
            >
              <p>
                {isFr
                  ? "Les données personnelles sont traitées uniquement lorsqu’une base légale le permet et pour des finalités déterminées."
                  : "Personal data is processed only where a legal basis permits it and for specified purposes."}
              </p>

              <ul className="list-disc space-y-3 pl-5">
                <li>
                  {isFr
                    ? "Répondre aux demandes adressées à LMG et assurer le suivi des échanges : intérêt légitime de LMG à gérer ses relations et communications professionnelles."
                    : "Responding to enquiries and managing communications: LMG’s legitimate interest in managing its professional relationships and communications."}
                </li>

                <li>
                  {isFr
                    ? "Traiter une demande liée à une prestation, un projet ou une future relation contractuelle : mesures précontractuelles prises à la demande de la personne concernée, lorsque cette base est applicable."
                    : "Handling a request relating to a service, project or potential contractual relationship: pre-contractual measures taken at the request of the data subject, where applicable."}
                </li>

                <li>
                  {isFr
                    ? "Assurer la sécurité, la disponibilité et le bon fonctionnement du site : intérêt légitime de LMG à sécuriser ses services numériques."
                    : "Maintaining the security, availability and proper functioning of the website: LMG’s legitimate interest in securing its digital services."}
                </li>

                <li>
                  {isFr
                    ? "Utiliser des traceurs non essentiels, lorsqu’ils sont activés : consentement."
                    : "Using non-essential tracking technologies, when enabled: consent."}
                </li>
              </ul>
            </Section>

            <Section
              title={
                isFr
                  ? "4. Destinataires des données"
                  : "4. Data recipients"
              }
            >
              <p>
                {isFr
                  ? "Les données sont accessibles uniquement aux personnes habilitées au sein de Legacy Music Group et, lorsque cela est nécessaire, aux prestataires techniques intervenant pour le fonctionnement, l’hébergement, la sécurité ou la maintenance du site."
                  : "Data is accessible only to authorised persons within Legacy Music Group and, where necessary, to technical service providers involved in the operation, hosting, security or maintenance of the website."}
              </p>

              <p>
                {isFr
                  ? "Ces prestataires n’accèdent aux données que dans la mesure nécessaire à l’exécution de leurs missions."
                  : "These service providers may access data only to the extent necessary to perform their services."}
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
                  ? "Les données sont conservées pendant une durée proportionnée à la finalité pour laquelle elles ont été collectées, puis supprimées ou archivées lorsque la loi l’exige."
                  : "Personal data is retained only for a period proportionate to the purpose for which it was collected and is then deleted or archived where required by law."}
              </p>

              <p>
                {isFr
                  ? "Les demandes de contact sans relation contractuelle ultérieure sont conservées pendant le temps nécessaire au traitement et au suivi de la demande, sauf nécessité de conservation plus longue justifiée par une obligation légale ou la défense de droits."
                  : "Contact enquiries that do not lead to a contractual relationship are retained for the time necessary to process and follow up the request, unless a longer period is justified by a legal obligation or the establishment, exercise or defence of legal claims."}
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
                  ? "Certains prestataires techniques utilisés pour le fonctionnement du site peuvent traiter des données depuis des pays situés en dehors de l’Espace économique européen. Lorsque de tels transferts ont lieu, LMG veille à ce qu’ils reposent sur un mécanisme reconnu par la réglementation applicable en matière de protection des données."
                  : "Some technical service providers used to operate the website may process data from countries outside the European Economic Area. Where such transfers occur, LMG seeks to ensure that an appropriate transfer mechanism recognised under applicable data protection law is used."}
              </p>
            </Section>

            <Section
              title={isFr ? "7. Vos droits" : "7. Your rights"}
            >
              <p>
                {isFr
                  ? "Dans les conditions prévues par la réglementation applicable, vous pouvez notamment disposer d’un droit d’accès, de rectification, d’effacement, de limitation et d’opposition au traitement de vos données, ainsi que d’un droit à la portabilité lorsque celui-ci est applicable."
                  : "Subject to the conditions provided by applicable data protection law, you may have rights of access, rectification, erasure, restriction and objection, as well as a right to data portability where applicable."}
              </p>

              <p>
                {isFr
                  ? "Lorsque le traitement repose sur votre consentement, vous pouvez le retirer à tout moment, sans remettre en cause la licéité du traitement effectué avant ce retrait."
                  : "Where processing is based on your consent, you may withdraw that consent at any time without affecting the lawfulness of processing carried out before withdrawal."}
              </p>

              <p>
                {isFr
                  ? "Pour exercer vos droits :"
                  : "To exercise your rights:"}{" "}
                <a
                  href="mailto:contact@legacymusicgroup.fr"
                  className="underline underline-offset-4"
                >
                  contact@legacymusicgroup.fr
                </a>
              </p>

              <p>
                {isFr
                  ? "Vous disposez également du droit d’introduire une réclamation auprès de la CNIL."
                  : "You also have the right to lodge a complaint with the French data protection authority (CNIL)."}
              </p>
            </Section>

            <Section
              title={isFr ? "8. Sécurité" : "8. Security"}
            >
              <p>
                {isFr
                  ? "Legacy Music Group met en œuvre des mesures techniques et organisationnelles destinées à protéger les données personnelles contre la perte, l’accès non autorisé, l’altération ou la divulgation."
                  : "Legacy Music Group implements technical and organisational measures designed to protect personal data against loss, unauthorised access, alteration or disclosure."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "9. Cookies et technologies similaires"
                  : "9. Cookies and similar technologies"
              }
            >
              <p>
                {isFr
                  ? "Le site peut utiliser des cookies ou technologies similaires nécessaires à son fonctionnement ainsi que, sous réserve de votre choix lorsqu’il est requis, des traceurs destinés à d’autres finalités."
                  : "The website may use cookies or similar technologies required for its operation and, subject to your choice where required, tracking technologies for other purposes."}
              </p>

              <p>
                {isFr
                  ? "Pour plus d’informations, consultez la Politique de cookies et utilisez l’outil Gérer mes cookies disponible en bas du site."
                  : "For more information, see our Cookie Policy and use the Manage Cookies control available at the bottom of the website."}
              </p>
            </Section>

            <Section
              title={
                isFr
                  ? "10. Modification de cette politique"
                  : "10. Changes to this policy"
              }
            >
              <p>
                {isFr
                  ? "Cette politique peut être mise à jour afin de tenir compte de l’évolution du site, des traitements réalisés ou du cadre réglementaire applicable. La date de dernière mise à jour figure en haut de cette page."
                  : "This policy may be updated to reflect changes to the website, data processing activities or applicable regulations. The latest update date is shown at the top of this page."}
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