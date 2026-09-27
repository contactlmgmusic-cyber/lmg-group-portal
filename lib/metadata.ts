import type { Metadata } from "next";
export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://lmg-group-portal.vercel.app");
export function pageMetadata(title: string, description: string, path: string, image = "/share"): Metadata {
  const shareTitle = path === "/" ? "LMG Group — Musique, live et création" : `${title} — LMG Group`;
  return { title: path === "/" ? { absolute: title } : title, description, alternates: { canonical: path }, openGraph: { title: shareTitle, description, url: path, type: "website", siteName: "LMG Group", locale: "fr_FR", images: [{ url: image, alt: title === "Home - LMG Group Portal" ? "Legacy Music Group — Musique, live et création" : title }] }, twitter: { card: "summary_large_image", title: shareTitle, description, images: [image] } };
}
