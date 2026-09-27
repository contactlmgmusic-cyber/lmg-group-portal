import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Projets", description: "Une sélection de projets portés par les pôles du groupe LMG." };

export default function ProjetsPage() {
  return <main id="contenu"><section className="page-hero"><p className="eyebrow light">SÉLECTION</p><h1>Les <em>projets.</em></h1><p>Des expressions différentes de la même idée : créer quelque chose qui marque, du projet musical à l’expérience digitale.</p></section>
    <section className="project-list"><article id="fly" className="project-entry"><Image src="/images/laam-fly.png" width={160} height={120} alt="Visuel de FLY" /><div><span>LMG MUSIC / SORTIE</span><h2>LAAM — FLY</h2></div><div><p>Un projet musical présenté dans l’univers de LMG Music.</p><a href="https://legacymusicgroup.fr/site/projets/quatrieme-projet" target="_blank" rel="noopener noreferrer">Voir la sortie ↗</a></div></article><article id="deepa" className="project-entry"><Image src="/images/deepa.jpg" width={160} height={120} alt="Univers visuel de Deepa" /><div><span>LMG AGENCY / DIGITAL</span><h2>Deepa Be Yourself</h2></div><div><p>Une maison de parfums, sa collection et une expérience digitale conçue autour de ses produits.</p><a href="https://agency.legacymusicgroup.fr/realisations#deepa" target="_blank" rel="noopener noreferrer">Voir la réalisation ↗</a></div></article></section>
  </main>;
}
