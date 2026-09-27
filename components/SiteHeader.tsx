import Link from "next/link";

const links = [
  ["/groupe", "Le groupe"],
  ["/poles/music", "Music"],
  ["/poles/entertainment", "Entertainment"],
  ["/poles/agency", "Agency"],
  ["/projets", "Actualités & projets"],
] as const;

export default function SiteHeader() {
  return <header className="site-header">
    <Link href="/" className="brand" aria-label="LMG, accueil"><span className="group-symbol">L<span>●</span>MG</span><span className="brand-suffix">GROUPE</span></Link>
    <nav className="desktop-nav" aria-label="Navigation principale">{links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}</nav>
    <Link className="header-contact" href="/contact">Contact <span aria-hidden="true">↗</span></Link>
    <details className="mobile-nav"><summary aria-label="Ouvrir le menu">Menu <span aria-hidden="true">＋</span></summary><nav aria-label="Navigation mobile">{links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}<Link href="/contact">Contact</Link></nav></details>
  </header>;
}
