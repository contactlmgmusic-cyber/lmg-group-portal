"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
const links = [["/groupe", "Le groupe"], ["/poles", "Nos activités"], ["/projets", "Projets"], ["/contact", "Contact"]] as const;
export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } }; const outside = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) setOpen(false); }; document.addEventListener("keydown", close); document.addEventListener("pointerdown", outside); return () => { document.removeEventListener("keydown", close); document.removeEventListener("pointerdown", outside); }; }, []);
  const active = (href: string) => pathname === href || pathname.startsWith(href + "/");
  return <header ref={header} className="site-header"><Link href="/" className="brand" aria-label="LMG Group, accueil" onClick={() => setOpen(false)}><Image className="lmg-logo" src="/images/lmg-group-blue.webp" alt="" width={64} height={64} /><span className="brand-label">LMG<span>GROUP PORTAL</span></span></Link><nav className="desktop-nav" aria-label="Navigation principale">{links.map(([href,label]) => <Link key={href} href={href} aria-current={active(href) ? "page" : undefined}>{label}</Link>)}</nav><Link href="/poles" className="header-explore">Explorer LMG <span aria-hidden="true">↗</span></Link><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? "Fermer" : "Menu"}<span aria-hidden="true">{open ? "−" : "+"}</span></button><nav id="mobile-menu" className="mobile-menu" aria-label="Navigation mobile" hidden={!open}>{links.map(([href,label],i) => <Link key={href} href={href} aria-current={active(href) ? "page" : undefined} onClick={() => setOpen(false)}><span>0{i+1}</span>{label}<span aria-hidden="true">↗</span></Link>)}<p>Musique. Live. Création.</p></nav></header>;
}
