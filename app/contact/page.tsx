import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact", description: "Contactez le groupe LMG pour un projet artistique, un événement ou une collaboration créative." };

export default function ContactPage() {
  return <main id="contenu"><section className="page-hero"><p className="eyebrow light">PARLONS DE LA SUITE</p><h1>Un projet ?<br /><em>Parlons-en.</em></h1><p>Artiste, organisateur ou marque : trouvez le bon point de contact pour faire avancer votre idée.</p></section>
    <section className="contact-options"><article><span>01 / MUSIC</span><h2>Projet artistique</h2><p>Présentez votre univers et vos prochaines ambitions à l’équipe Music.</p><a href="https://legacymusicgroup.fr/site/rejoindre" target="_blank" rel="noopener noreferrer">Présenter mon projet ↗</a></article><article><span>02 / ENTERTAINMENT</span><h2>Événement & booking</h2><p>Parlons de votre événement, des talents et de l’expérience que vous voulez créer.</p><a href="mailto:contact@legacymusicgroup.fr?subject=LMG%20Entertainment%20%E2%80%94%20%C3%A9v%C3%A9nement">Écrire à LMG ↗</a></article><article><span>03 / AGENCY</span><h2>Marque & digital</h2><p>Décrivez votre besoin à l’agence pour recevoir une première orientation.</p><a href="https://agency.legacymusicgroup.fr/devis" target="_blank" rel="noopener noreferrer">Parler de mon projet ↗</a></article></section>
  </main>;
}
