import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";
export default function ProjectCard({ project }: { project: typeof projects[number] }) {
 return <Link href={`/projets/${project.slug}`} className="project-card"><div className={`project-card-image project-${project.slug}`}><Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 100vw, 50vw" /><span className="round-arrow" aria-hidden="true">↗</span></div><div className="project-card-copy"><p className="eyebrow">{project.division} / {project.category}</p><h3>{project.title}</h3><p>{project.intro}</p></div></Link>;
}
