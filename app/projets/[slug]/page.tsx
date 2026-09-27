import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import PageIntro from "@/components/PageIntro";
import NextStep from "@/components/NextStep";
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=projects.find(p=>p.slug===slug);return {title:p?.title??"Projet introuvable",description:p?.intro}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects.find(p=>p.slug===slug);if(!p)notFound();return <main id="contenu"><PageIntro label={p.title} parent={{href:"/projets",label:"Projets"}} title={p.title} description={p.intro}/><div className={`project-cover project-${p.slug}`}><Image src={p.image} alt={p.alt} fill sizes="100vw" preload/></div><section className="section project-story"><aside><dl><dt>Pôle</dt><dd><Link href={`/poles/${p.division.toLowerCase()}`}>LMG {p.division} ↗</Link></dd><dt>Univers</dt><dd>{p.context}</dd><dt>Focus</dt><dd>{p.focus}</dd></dl></aside><div><p className="eyebrow">LE PROJET</p><h2>{p.heading}</h2><p className="body-copy">{p.body}</p><a href={p.href} target="_blank" rel="noopener noreferrer" className="text-link">{p.linkLabel} <span aria-hidden="true">↗</span><span className="sr-only"> (nouvel onglet)</span></a></div></section><NextStep title="D’autres univers à découvrir." description="Explorez les projets et les métiers du groupe LMG." href="/projets" label="Tous les projets"/></main>}
