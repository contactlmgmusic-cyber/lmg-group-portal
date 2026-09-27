"use client";
import { useState } from "react";
import { projects } from "@/lib/content";
import ProjectCard from "./ProjectCard";
export default function ProjectGallery(){const [filter,setFilter]=useState("Tous");const filtered=projects.filter(p=>filter==="Tous"||p.division===filter);return <section className="section gallery"><div className="filter-bar" role="group" aria-label="Filtrer les projets par pôle">{["Tous","Music","Agency"].map(f=><button key={f} type="button" aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}</button>)}<span aria-live="polite">{filtered.length} projet{filtered.length>1?"s":""}</span></div><div className="project-grid">{filtered.map(p=><div id={p.slug} key={p.slug}><ProjectCard project={p}/></div>)}</div></section>}
