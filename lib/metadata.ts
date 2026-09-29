import type { Metadata } from "next";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://lmg-group-portal.vercel.app"
);

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = "/share"
): Metadata {
  const isHome = path === "/";

  const shareTitle = isHome
    ? "LMG Group — Culture, Creativity & Innovation"
    : `${title} — LMG Group`;

  return {
    title: isHome ? { absolute: title } : title,
    description,

    alternates: {
      canonical: path,
    },

    openGraph: {
      title: shareTitle,
      description,
      url: path,
      type: "website",
      siteName: "LMG Group",
      locale: "en_GB",
      images: [
        {
          url: image,
          alt: isHome
            ? "Legacy Music Group — Culture, Creativity & Innovation"
            : title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [image],
    },
  };
}