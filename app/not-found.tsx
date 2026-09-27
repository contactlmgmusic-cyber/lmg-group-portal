import Link from "next/link";
export default function NotFound() {
  return <main id="contenu" className="section not-found"><p className="eyebrow">404 / PAGE INTROUVABLE</p><h1>Changeons de direction.</h1><p>Cette page n’existe pas ou a été déplacée. Retrouvez les informations du groupe depuis l’accueil ou la recherche.</p><div className="not-found-actions"><Link className="button" href="/">Retour à l’accueil <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/recherche">Rechercher dans le site <span aria-hidden="true">↗</span></Link></div></main>;
}
