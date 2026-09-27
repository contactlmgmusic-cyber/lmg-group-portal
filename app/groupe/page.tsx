import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { divisions } from "@/lib/content";
import PageIntro from "@/components/PageIntro";
import NextStep from "@/components/NextStep";

const chapters = [["vision", "Notre vision"], ["ecosysteme", "Nos pôles"], ["approche", "Notre approche"], ["direction", "La direction"]] as const;
const principles = [
  ["Comprendre", "L’identité avant les moyens.", "Chaque collaboration commence par le projet : son univers, ses ambitions et les personnes auxquelles il s’adresse. Cette compréhension donne une direction au travail."],
  ["Relier", "Les bons métiers, au bon moment.", "Musique, scène, image et digital se répondent. Les pôles peuvent travailler ensemble quand cela sert le projet, avec un rôle clair pour chacun."],
  ["Construire", "Une trajectoire, étape par étape.", "Une sortie, un événement ou un site est une étape dans un parcours. Notre approche consiste à articuler ces moments et à préparer la suite avec cohérence."],
];

export default function Page() {
  return <main id="contenu" className="about-page">
    <PageIntro label="About LMG Group" title={"Indépendants d’esprit.\nEnsemble dans l’action."} description="Legacy Music Group réunit musique, divertissement et création. Trois pôles complémentaires pour accompagner les talents, les marques et leurs projets jusqu’à la rencontre avec le public." />
    <nav className="about-chapters" aria-label="Dans cette page"><span>EXPLORER LE GROUPE</span>{chapters.map(([id, label], i) => <a key={id} href={`#${id}`}><span>0{i + 1}</span>{label}<span aria-hidden="true">↓</span></a>)}</nav>

    <section id="vision" className="section about-vision" aria-labelledby="vision-title">
      <div className="about-vision-top"><p className="eyebrow">01 / NOTRE VISION</p><Image src="/images/lmg-group-white.webp" alt="" width={100} height={100} /></div>
      <h2 id="vision-title">Donner aux idées<br />une direction.<br /><span>Et aux talents, un horizon.</span></h2>
      <div className="about-vision-copy"><p>Une musique, une expérience live, une identité de marque : chaque projet porte une intention. Notre ambition est de lui donner les moyens de s’exprimer, sans perdre ce qui le rend singulier.</p><p>LMG fait dialoguer le développement artistique, le divertissement et la communication. Le groupe crée des passerelles entre ces métiers, tout en laissant à chaque pôle son expertise et à chaque projet sa personnalité.</p></div>
      <p className="about-signature">Musique. Live. Création.</p>
    </section>

    <section id="ecosysteme" className="section" aria-labelledby="ecosystem-title">
      <div className="section-heading"><p className="eyebrow">02 / L’ÉCOSYSTÈME LMG</p><h2 id="ecosystem-title">Trois pôles.<br />Une ambition commune.</h2></div>
      <p className="about-section-intro">Accompagner la création, lui donner une forme et la faire rencontrer son public. Chaque pôle intervient avec ses métiers, ses interlocuteurs et son univers.</p>
      <div className="about-divisions">{divisions.map(division => <Link href={`/poles/${division.slug}`} key={division.slug} className="about-division"><span className="index">{division.number} / LMG GROUP</span><h3>LMG<br />{division.name}</h3><p className="about-division-field">{division.field}</p><p>{division.description}</p><span className="about-division-link">Découvrir le pôle <span aria-hidden="true">↗</span></span></Link>)}</div>
      <div className="about-connection"><p className="eyebrow">CE QUI NOUS RELIE</p><p>Une même attention à l’identité du projet, à la qualité de son expression et à sa relation avec le public. Les collaborations entre pôles se construisent autour de ces besoins.</p></div>
    </section>

    <section id="approche" className="section section-ice" aria-labelledby="approach-title">
      <div className="section-heading"><p className="eyebrow">03 / NOTRE APPROCHE</p><h2 id="approach-title">Une vision qui<br />se traduit en actions.</h2></div>
      <div className="expertise-grid about-principles">{principles.map(([title, subtitle, description], i) => <article key={title}><span className="index">0{i + 1}</span><h3>{title}</h3><h4>{subtitle}</h4><p>{description}</p></article>)}</div>
      <Link href="/projets" className="text-link about-project-link">Voir cette approche à travers nos projets <span aria-hidden="true">↗</span></Link>
    </section>

    <section id="direction" className="section" aria-labelledby="leadership-title">
      <div className="section-heading"><p className="eyebrow">04 / LA DIRECTION</p><h2 id="leadership-title">Les personnes<br />derrière la vision.</h2></div>
      <div className="leadership about-leadership"><article><span className="eyebrow">PRÉSIDENCE / LMG GROUP</span><h3>Joseph Kayaya</h3><p>Président et fondateur de LMG.</p></article><article><span className="eyebrow">DIRECTION / MUSIC & AGENCY</span><h3>Yliana Faidherbe</h3><p>Cofondatrice de LMG Agency et directrice générale de LMG Music.</p></article></div>
      <Link href="/contact" className="text-link">Entrer en relation avec le groupe <span aria-hidden="true">↗</span></Link>
    </section>
    <NextStep title="La suite se construit ensemble." description="Un projet artistique, une expérience live ou une marque à développer : découvrez les métiers de LMG et le pôle qui peut vous accompagner." href="/poles" label="Explorer nos activités" />
  </main>;
}

export const metadata = pageMetadata("About LMG Group", "Découvrez Legacy Music Group : sa vision, ses pôles Music, Entertainment et Agency, son approche et sa direction.", "/groupe");
