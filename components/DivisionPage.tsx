import { getEditorial } from "@/lib/editorial.server";
import DivisionContent from "./DivisionContent";

export default async function DivisionPage({
  slug,
}: {
  slug: "music" | "agency";
}) {
  const { projects } = await getEditorial();

  const project =
    projects.find((item) =>
      slug === "music"
        ? item.division?.toLowerCase().includes("music")
        : item.division?.toLowerCase().includes("agency")
    ) ?? null;

  return (
    <DivisionContent
      slug={slug}
      project={project}
    />
  );
}