"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
const sections = [
  { id: "about", label: "About LMG Group", path: "/groupe", title: "About LMG Group", intro: "La vision, les métiers et les personnes qui font avancer le groupe.", links: [["/groupe", "Découvrir le groupe", "Legacy Music Group"], ["/groupe#vision", "Notre vision", "Ce qui anime Legacy Music Group"], ["/groupe#ecosysteme", "L’écosystème LMG", "Trois pôles, une ambition commune"], ["/groupe#approche", "Notre approche", "Comprendre, relier, construire"], ["/groupe#direction", "La direction", "L’équipe à la tête du groupe"], ["/presse", "Presse & médias", "Présentation, logos et contact presse"]] },
  { id: "businesses", label: "Businesses & products", path: "/poles", title: "Business segments", intro: "Trois expertises complémentaires, un même groupe.", links: [["/poles", "Toutes nos activités", "L’écosystème LMG"], ["/poles/music", "LMG Music", "Musique & développement artistique"], ["/poles/entertainment", "LMG Entertainment", "Booking & expériences live"], ["/poles/agency", "LMG Agency", "Stratégie, création & digital"]] },
  { id: "projects", label: "Projets", path: "/projets", title: "Les projets du groupe", intro: "Découvrez les univers et les réalisations portés par nos pôles.", links: [["/projets", "Tous les projets", "La sélection LMG"]] },
  { id: "news", label: "Actualités", path: "/actualites", title: "Le journal du groupe", intro: "Les nouvelles de LMG et les projets qui font avancer le groupe.", links: [["/actualites", "Toutes les actualités", "Le journal LMG"]] },
] as const;
export default function SiteHeader() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const mobileToggle = useRef<HTMLButtonElement>(null);
  const closeAll = () => { setExpanded(null); setMobileOpen(false); };
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") { if (expanded) { setExpanded(null); lastTrigger.current?.focus(); } else if (mobileOpen) { setMobileOpen(false); mobileToggle.current?.focus(); } } };
    const outside = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) { setExpanded(null); setMobileOpen(false); } };
    const focusOutside = (event: FocusEvent) => { if (!header.current?.contains(event.target as Node)) { setExpanded(null); setMobileOpen(false); } };
    const breakpoint = window.matchMedia("(max-width: 800px)");
    const resize = () => { setExpanded(null); setMobileOpen(false); };
    document.addEventListener("keydown", onKey); document.addEventListener("pointerdown", outside); document.addEventListener("focusin", focusOutside); breakpoint.addEventListener("change", resize);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", outside); document.removeEventListener("focusin", focusOutside); breakpoint.removeEventListener("change", resize); };
  }, [expanded, mobileOpen]);
  const active = (path: string) => pathname === path || pathname.startsWith(path + "/") || (path === "/groupe" && pathname === "/presse");
  const toggleSection = (id: string, target: HTMLButtonElement) => { lastTrigger.current = target; setExpanded(expanded === id ? null : id); };
  const closePanel = () => { setExpanded(null); lastTrigger.current?.focus(); };
  return <header ref={header} className="site-header">
    <Link href="/" className="brand" aria-label="LMG Group, accueil" onClick={closeAll}><Image className="lmg-logo" src="/images/lmg-group-blue.webp" alt="" width={64} height={64}/></Link>
    <nav className="desktop-nav" aria-label="Navigation principale">{sections.map(section => <div className="nav-section" key={section.id}><button type="button" className={`nav-trigger${active(section.path) ? " is-current" : ""}`} aria-label={section.label} aria-expanded={expanded === section.id} aria-controls={`desktop-${section.id}`} onClick={e => toggleSection(section.id, e.currentTarget)}>{section.label}<span aria-hidden="true">{expanded === section.id ? "−" : "+"}</span></button><div id={`desktop-${section.id}`} className="mega-panel" hidden={expanded !== section.id}><button type="button" className="panel-close" aria-label="Fermer le sous-menu" onClick={closePanel}>×</button><div className="mega-intro"><span>LMG GROUP</span><h2>{section.title}</h2><p>{section.intro}</p></div><ul className="mega-links">{section.links.map(([href,label,desc]) => <li key={href}><Link href={href} aria-current={pathname === href ? "page" : undefined} onClick={closeAll}><span><strong>{label}</strong><small>{desc}</small></span><span aria-hidden="true">↗</span></Link></li>)}</ul></div></div>)}<Link href="/contact" className={`nav-trigger${active("/contact") ? " is-current" : ""}`} aria-current={pathname === "/contact" ? "page" : undefined} onClick={closeAll}>Contact us</Link></nav>
    <Link href="/recherche" className="header-search" aria-current={pathname === "/recherche" ? "page" : undefined} aria-label="Rechercher dans le site" onClick={closeAll}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg></Link>
    <button ref={mobileToggle} type="button" className="menu-toggle" aria-expanded={mobileOpen} aria-controls="mobile-menu" onClick={() => { setMobileOpen(!mobileOpen); setExpanded(null); }}>{mobileOpen ? "Fermer" : "Menu"}<span aria-hidden="true">{mobileOpen ? "−" : "+"}</span></button>
    <nav id="mobile-menu" className="mobile-menu" aria-label="Navigation mobile" hidden={!mobileOpen}>{sections.map((section,i) => <div className="mobile-section" key={section.id}><button type="button" className={`mobile-section-trigger${active(section.path) ? " is-current" : ""}`} aria-label={section.label} aria-expanded={expanded === section.id} aria-controls={`mobile-${section.id}`} onClick={e => toggleSection(section.id,e.currentTarget)}><span>0{i+1}</span>{section.label}<span aria-hidden="true">{expanded === section.id ? "−" : "+"}</span></button><ul id={`mobile-${section.id}`} className="mobile-submenu" hidden={expanded !== section.id}>{section.links.map(([href,label,desc]) => <li key={href}><Link href={href} aria-current={pathname === href ? "page" : undefined} onClick={closeAll}><span><strong>{label}</strong><small>{desc}</small></span><span aria-hidden="true">↗</span></Link></li>)}</ul></div>)}<Link href="/contact" className="mobile-contact-link" aria-current={pathname === "/contact" ? "page" : undefined} onClick={closeAll}><span>05</span>Contact us</Link><p>Musique. Live. Création.</p></nav>
  </header>;
}
