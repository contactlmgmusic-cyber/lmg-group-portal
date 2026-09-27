import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "LMG Agency", description: "Le pôle créatif et digital de LMG : stratégie, identité, contenus et expériences web." };

export default function AgencyPage() {
  return <main id="contenu"><section className="page-hero agency"><p className="eyebrow light">03 / STRATÉGIE & CRÉATION</p><h1>LMG <em>Agency.</em></h1><p>Le pôle créatif et digital du groupe LMG. Nous donnons aux marques, aux entreprises et aux talents une image claire et une présence qui compte.</p></section>
    <section className="feature-row"><div className="feature-image"><Image src="/images/deepa.jpg" alt="Univers visuel du projet Deepa Be Yourself" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="feature-copy"><p className="eyebrow">PROJET À LA UNE</p><h2>Deepa<br />Be Yourself.</h2><p>Une maison de parfums et son univers digital : collection, pages produit et parcours client réunis dans une même expérience.</p><a href="https://agency.legacymusicgroup.fr/realisations#deepa" target="_blank" rel="noopener noreferrer" className="underlined-link">Voir le projet <span>↗</span></a></div></section>
    <section className="editorial-section"><p className="eyebrow light">NOS EXPERTISES</p><div className="editorial-grid"><article><span>01</span><h3>Stratégie</h3><p>Positionnement, direction et discours pour donner un cap à chaque projet.</p></article><article><span>02</span><h3>Création</h3><p>Identité, contenus et communication pensés comme un ensemble cohérent.</p></article><article><span>03</span><h3>Digital</h3><p>Sites et expériences en ligne conçus pour les personnes qui les utilisent.</p></article></div></section>
    <section className="closing-section section-pad"><p className="eyebrow light">DÉCOUVRIR L’AGENCE</p><h2>Votre vision mérite<br /><em>d’être remarquée.</em></h2><a href="https://agency.legacymusicgroup.fr/" target="_blank" rel="noopener noreferrer" className="solid-action">Visiter LMG Agency <span>↗</span></a></section>
  </main>;
}
