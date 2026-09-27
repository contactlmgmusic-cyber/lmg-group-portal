import Link from "next/link";
import { news } from "@/lib/news";
export default function NewsCard({ article }: { article: typeof news[number] }) {
  return <Link href={`/actualites/${article.slug}`} className="news-card"><div className="news-card-art" aria-hidden="true"><span>LMG GROUP</span><strong>Musique.<br />Live.<br />Création.</strong><span>LE JOURNAL DU GROUPE ↗</span></div><div className="news-card-content"><p className="eyebrow">{article.category}</p><time dateTime={article.publishedAt}>{article.dateLabel}</time><h3>{article.title}</h3><p>{article.intro}</p><span className="text-link">Lire l’article <span aria-hidden="true">↗</span></span></div></Link>;
}
