import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectDetailContent from "@/components/ProjectDetailContent";
import { getEditorial } from "@/lib/editorial.server";
import { pageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { projects } = await getEditorial();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return pageMetadata(
    project.title,
    project.intro,
    `/projets/${project.slug}`,
    project.image
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { projects } = await getEditorial();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  const relatedProject =
    projects.find(
      (item) => item.slug !== project.slug
    ) ?? null;

  return (
    <ProjectDetailContent
      project={project}
      relatedProject={relatedProject}
    />
  );
}