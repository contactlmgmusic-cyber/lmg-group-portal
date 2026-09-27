import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news } from "@/lib/news";
import { pageMetadata } from "@/lib/metadata";
import PageIntro from "@/components/PageIntro";
import NextStep from "@/components/NextStep";
export function generateStaticParams() { return news.map(article => ({ slug: article.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find(item => item.slug === slug);
  if (!article) notFound();
  const metadata = pageMetadata(article.title, article.intro, `/actualites/${article.slug}`);
  return { ...metadata, openGraph: { ...metadata.openGraph, type: "article", publishedTime: article.publishedAt, section: article.category } };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = news.find(item => item.slug === slug);
  if (!article) notFound();
  return <main id="contenu"><article><PageIntro label="Vie du groupe" parent={{ href: "/actualites", label: "Actualités" }} title={article.title} description={article.intro} /><div className="article-meta"><span>{article.category}</span><span>Publié le <time dateTime={article.publishedAt}>{article.dateLabel}</time></span><span>La rédaction LMG</span></div><div className="section article-layout"><aside><p className="eyebrow">DANS CET ARTICLE</p><nav aria-label="Sommaire de l’article">{article.sections.map((section, i) => <a key={section.title} href={`#chapitre-${i + 1}`}>{section.title}</a>)}</nav></aside><div className="article-body">{article.sections.map((section, i) => <section key={section.title} id={`chapitre-${i + 1}`}><h2>{section.title}</h2><p>{section.text}</p></section>)}<div className="article-discover"><p className="eyebrow">POUR ALLER PLUS LOIN</p><Link href="/groupe">Découvrir LMG Group <span aria-hidden="true">↗</span></Link><Link href="/projets/fly">LAAM — FLY <span aria-hidden="true">↗</span></Link><Link href="/projets/deepa">Deepa Be Yourself <span aria-hidden="true">↗</span></Link></div><Link href="/actualites" className="text-link">← Toutes les actualités</Link></div></div></article><NextStep /></main>;
}
