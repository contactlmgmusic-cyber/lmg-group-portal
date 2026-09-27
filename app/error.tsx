"use client";
import Link from "next/link";
export default function ErrorPage({reset}:{reset:()=>void}) {
  return <main id="contenu" className="section not-found"><p className="eyebrow">CONTENU TEMPORAIREMENT INDISPONIBLE</p><h1>Réessayons dans un instant.</h1><p>Nous ne parvenons pas à charger cette page pour le moment.</p><div className="not-found-actions"><button className="button" onClick={reset}>Réessayer</button><Link className="text-link" href="/contact">Contacter le groupe ↗</Link></div></main>;
}
