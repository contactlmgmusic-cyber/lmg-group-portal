import Image from "next/image";
import Link from "next/link";

const divisions = [
  { id: "01", title: "Music", field: "Développement artistique", description: "Des artistes, des histoires et une musique qui traversent les frontières.", href: "/poles/music" },
  { id: "02", title: "Entertainment", field: "Live & expériences", description: "Des moments qui réunissent les talents et leurs publics.", href: "/poles/entertainment" },
  { id: "03", title: "Agency", field: "Création & stratégie", description: "Des idées et des identités qui donnent une forme aux ambitions.", href: "/poles/agency" },
];

export default function HomePage() {
  return <main id="contenu" className="group-home">
    <section className="portal-hero" aria-labelledby="portal-title">
      <div className="portal-hero-art" aria-hidden="true"><span className="orb orb-one"/><span className="orb orb-two"/><span className="orb orb-three"/></div>
      <div className="portal-hero-content">
        <p className="portal-kicker">LMG / LE GROUPE</p>
        <h1 id="portal-title">Des idées qui<br/><span>font avancer</span><br/>la culture.</h1>
        <p>Musique, divertissement et création. Un groupe indépendant, trois expertises qui se rencontrent pour donner de l’ampleur aux projets.</p>
        <Link href="/groupe" className="portal-button">Découvrir LMG <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="portal-hero-bottom"><span>01 / 03 &nbsp; LE GROUPE</span><span>EXPLORER ↓</span></div>
    </section>

    <section className="portal-news" aria-label="À la une">
      <div className="portal-news-title"><span className="blue-line"/>À LA UNE</div>
      <Link href="/projets#fly"><span>Music</span><strong>LAAM — FLY : découvrez le projet</strong><b aria-hidden="true">↗</b></Link>
      <Link href="/projets#deepa"><span>Agency</span><strong>Deepa Be Yourself : une nouvelle expérience digitale</strong><b aria-hidden="true">↗</b></Link>
    </section>

    <section className="portal-intro">
      <div className="portal-section-label">01 / NOTRE VISION</div>
      <div className="portal-intro-body"><h2>La créativité prend<br/>une autre dimension<br/><span>quand elle se rencontre.</span></h2><div><p>LMG fait dialoguer les métiers de la musique, de l’entertainment et de la création. Notre force : relier les talents, les idées et les publics dans un même écosystème.</p><Link href="/groupe" className="portal-text-link">Notre groupe <span>↗</span></Link></div></div>
    </section>

    <section className="portal-divisions" id="poles">
      <div className="portal-section-label">02 / NOS ACTIVITÉS</div>
      <div className="portal-divisions-head"><h2>Un groupe.<br/>Trois univers.</h2><p>Des expertises singulières. Une ambition partagée.</p></div>
      <div className="portal-divisions-list">{divisions.map((division) => <Link href={division.href} className="portal-division" key={division.id}><span className="division-id">{division.id} / 03</span><div><span className="division-field">{division.field}</span><h3>LMG {division.title}</h3><p>{division.description}</p></div><span className="division-go" aria-hidden="true">↗</span></Link>)}</div>
    </section>

    <section className="portal-feature" aria-labelledby="feature-title"><div className="portal-feature-image"><Image src="/images/laam-fly.png" alt="Univers visuel du projet FLY de LAAM" fill sizes="(max-width: 800px) 100vw, 55vw" /></div><div className="portal-feature-copy"><div className="portal-section-label">03 / EN CE MOMENT</div><span className="feature-category">MUSIC · PROJET ARTISTIQUE</span><h2 id="feature-title">Une voix.<br/>Une histoire.<br/><i>Un mouvement.</i></h2><p>Découvrez FLY, le projet de LAAM mis à l’honneur dans l’univers LMG.</p><Link href="/projets#fly" className="portal-button">Explorer le projet <span aria-hidden="true">↗</span></Link></div></section>

    <section className="portal-projects"><div className="portal-section-label">04 / À DÉCOUVRIR</div><div className="portal-projects-top"><h2>Ce qui nous anime.</h2><Link href="/projets" className="portal-text-link">Tous les projets <span>↗</span></Link></div><Link href="/projets#deepa" className="portal-project-card"><div className="portal-project-image"><Image src="/images/deepa.jpg" alt="Projet Deepa Be Yourself" fill sizes="(max-width: 800px) 100vw, 65vw" /></div><div><span>AGENCY / EXPÉRIENCE DIGITALE</span><h3>Deepa<br/>Be Yourself</h3><p>Une identité et une expérience pensées pour s’exprimer pleinement.</p><b aria-hidden="true">↗</b></div></Link></section>

    <section className="portal-end"><span>LMG / ENSEMBLE, PLUS LOIN</span><h2>Et si la suite<br/>commençait <em>ici ?</em></h2><Link href="/contact" className="portal-button">Entrer en contact <span aria-hidden="true">↗</span></Link></section>
  </main>;
}
