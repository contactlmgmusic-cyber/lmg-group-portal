import { getEditorial } from "@/lib/editorial.server";
import { pageMetadata } from "@/lib/metadata";

import ProjectsContent from "@/components/ProjectsContent";

export const dynamic = "force-dynamic";

export default async function Page() {
  const { projects } = await getEditorial();

  return (
    <ProjectsContent projects={projects} />
  );
}

export const metadata = pageMetadata(
  "Projects",
  "Discover selected projects, initiatives and solutions developed across the Legacy Music Group ecosystem.",
  "/projets"
);
