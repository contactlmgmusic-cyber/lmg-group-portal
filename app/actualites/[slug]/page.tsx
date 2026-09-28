import type { Metadata } from "next";
import { notFound } from "next/navigation";

import NewsArticleContent from "@/components/NewsArticleContent";
import { getEditorial } from "@/lib/editorial.server";
import { pageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { news } = await getEditorial();

  const article = news.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  const metadata = pageMetadata(
    article.title,
    article.intro,
    `/actualites/${article.slug}`
  );

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: article.publishedAt,
      section: article.category,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { news } = await getEditorial();

  const article = news.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <NewsArticleContent article={article} />
  );
}