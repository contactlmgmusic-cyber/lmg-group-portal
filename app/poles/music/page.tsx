import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "LMG Music", description: "LMG Music accompagne le développement artistique, les projets et les sorties musicales." };

export default function MusicPage() {
  return <main id="contenu"><section className="page-hero"><p className="eyebrow light">01 / LE PÔLE MUSICAL</p><h1>LMG <em>Music.</em></h1><p>Des artistes, des projets, des trajectoires. LMG Music accompagne la création et le développement artistique avec une vision à long terme.</p></section>
    <section className="feature-row"><div className="feature-image"><Image src="/images/laam-fly.png" alt="Visuel du projet FLY de LAAM" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="feature-copy"><p className="eyebrow">MUSIC EN MOUVEMENT</p><h2>La musique<br />se construit.</h2><p>De la direction d’un projet à sa sortie, l’enjeu est de créer un chemin cohérent autour de chaque artiste.</p><a href="https://legacymusicgroup.fr/site/artistes" target="_blank" rel="noopener noreferrer" className="underlined-link">Découvrir les artistes <span>↗</span></a></div></section>
    <section className="editorial-section"><p className="eyebrow light">NOTRE TERRAIN</p><div className="editorial-grid"><article><span>01</span><h3>Développement</h3><p>Travailler la direction, le positionnement et les prochaines étapes du projet artistique.</p></article><article><span>02</span><h3>Sorties</h3><p>Donner de la cohérence aux œuvres, à leur image et à leur présentation au public.</p></article><article><span>03</span><h3>Opportunités</h3><p>Faire avancer les projets grâce à des collaborations et aux autres expertises du groupe.</p></article></div></section>
    <section className="closing-section section-pad"><p className="eyebrow light">VOUS AVEZ UN PROJET MUSICAL ?</p><h2>Écrivons<br /><em>la suite.</em></h2><a href="https://legacymusicgroup.fr/site/rejoindre" target="_blank" rel="noopener noreferrer" className="solid-action">Présenter un projet <span>↗</span></a></section>
  </main>;
}
