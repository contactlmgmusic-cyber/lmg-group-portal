import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Le groupe", description: "La vision et les équipes du groupe LMG." };

export default function GroupePage() {
  return <main id="contenu">
    <section className="page-hero"><p className="eyebrow light">À PROPOS DE LMG</p><h1>Un groupe.<br /><em>Une vision.</em></h1><p>LMG relie la musique, le live et la création. Chaque pôle avance avec son métier, tous partagent le même goût pour les projets construits dans la durée.</p></section>
    <section className="editorial-section"><p className="eyebrow light">NOTRE APPROCHE</p><h2 className="editorial-intro">Faire émerger les talents, créer des expériences et donner aux idées les moyens d’aller plus loin.</h2><div className="editorial-grid"><article><span>01 / MUSIC</span><h3>Développer</h3><p>Accompagner les artistes, leurs projets et leur image avec une direction claire.</p></article><article><span>02 / ENTERTAINMENT</span><h3>Rassembler</h3><p>Mettre les talents en mouvement à travers des performances et des expériences live.</p></article><article><span>03 / AGENCY</span><h3>Créer</h3><p>Imaginer les identités, les contenus et les expériences digitales qui rendent les projets visibles.</p></article></div></section>
    <section className="editorial-section" style={{background:"#e9e7e0",color:"#111"}}><p className="eyebrow">DIRECTION</p><h2 className="editorial-intro">Une équipe qui relie la vision du groupe à la réalité des projets.</h2><div className="bio-grid"><article><span>PRÉSIDENCE</span><h3>Joseph Kayaya</h3><p>Président et fondateur de LMG.</p></article><article><span>DIRECTION</span><h3>Yliana Faidherbe</h3><p>Cofondatrice de LMG Agency et directrice générale de LMG Music.</p></article></div></section>
    <section className="closing-section section-pad"><p className="eyebrow light">LES ACTIVITÉS DU GROUPE</p><h2>Trois pôles.<br /><em>Un même élan.</em></h2><Link href="/#poles" className="solid-action">Explorer les pôles <span>↗</span></Link></section>
  </main>;
}
