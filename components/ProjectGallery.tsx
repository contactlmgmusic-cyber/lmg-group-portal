"use client";
import { useState } from "react";
import type { Project } from "@/lib/editorial-types";
import ProjectCard from "./ProjectCard";
export default function ProjectGallery({projects}:{projects:readonly Project[]}){const [filter,setFilter]=useState("Tous");const filtered=projects.filter(p=>filter==="Tous"||p.division===filter);return <section className="section gallery"><div className="filter-bar" role="group" aria-label="Filtrer les projets par pôle">{["Tous",...Array.from(new Set(projects.map(p=>p.division)))].map(f=><button key={f} type="button" aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}</button>)}<span aria-live="polite">{filtered.length} projet{filtered.length>1?"s":""}</span></div>{!filtered.length && <p className="body-copy">Aucun projet publié dans cette sélection pour le moment.</p>}<div className="project-grid">{filtered.map(p=><div id={p.slug} key={p.slug}><ProjectCard project={p}/></div>)}</div></section>}
