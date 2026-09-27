import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "LMG Entertainment", description: "LMG Entertainment relie les talents aux scènes et aux expériences live." };

export default function EntertainmentPage() {
  return <main id="contenu"><section className="page-hero entertainment"><p className="eyebrow light">02 / LIVE & EXPÉRIENCES</p><h1>LMG<br /><em>Entertainment.</em></h1><p>Le live crée des moments qu’on ne rejoue pas. LMG Entertainment connecte les artistes, les événements et les publics.</p></section>
    <section className="editorial-section"><p className="eyebrow light">NOTRE RÔLE</p><h2 className="editorial-intro">Imaginer la bonne rencontre entre un talent, une scène et une audience.</h2><div className="editorial-grid"><article><span>01</span><h3>Talents</h3><p>Mettre en avant des profils artistiques et des performances adaptés à chaque contexte.</p></article><article><span>02</span><h3>Événements</h3><p>Relier la programmation artistique à l’énergie et à l’identité d’un événement.</p></article><article><span>03</span><h3>Expériences</h3><p>Construire des moments live qui créent un vrai lien avec le public.</p></article></div></section>
    <section className="closing-section section-pad" style={{background:"#331f1b"}}><p className="eyebrow light">BOOKING & COLLABORATIONS</p><h2>Faisons vivre<br /><em>votre événement.</em></h2><Link href="/contact" className="solid-action">Contacter le pôle <span>↗</span></Link></section>
  </main>;
}
