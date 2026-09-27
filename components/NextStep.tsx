import Link from "next/link";
export default function NextStep({ title = "Construisons la suite.", description = "Un projet artistique, un événement ou une marque à faire grandir ? Échangeons avec le bon pôle.", href = "/contact", label = "Entrer en contact" }: { title?: string; description?: string; href?: string; label?: string }) {
  return <section className="next-step"><div><p className="eyebrow">LE PROCHAIN CHAPITRE</p><h2>{title}</h2><p>{description}</p></div><Link href={href} className="button button-white">{label}<span aria-hidden="true">↗</span></Link></section>;
}
