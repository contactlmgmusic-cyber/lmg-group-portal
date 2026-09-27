import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import NextStep from "@/components/NextStep";
import { divisions } from "@/lib/content";

export default function Page(){return <main id="contenu"><PageIntro label="Nos activités" title={"Trois expertises.\nUn groupe."} description="Chaque pôle possède son métier et son univers. Ensemble, ils relient la création, la scène et la communication."/><section className="section activities">{divisions.map(d=><article key={d.slug}><div className="activity-title"><span className="index">{d.number} / 03</span><h2>LMG<br/>{d.name}</h2></div><div><p className="eyebrow">{d.field}</p><p className="body-copy">{d.description}</p><ul>{d.skills.map(([name])=><li key={name}>{name}</li>)}</ul><Link href={`/poles/${d.slug}`} className="text-link">Découvrir le pôle <span aria-hidden="true">↗</span></Link></div></article>)}</section><NextStep/></main>}

export const metadata = pageMetadata("Nos activités","Music, Entertainment et Agency : découvrez les trois pôles du groupe LMG.","/poles");
