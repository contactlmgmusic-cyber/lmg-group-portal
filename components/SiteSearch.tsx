"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { normalizeSearch, searchEntries } from "@/lib/search";
const categories = ["Tout", "Le groupe", "Pôles", "Projets", "Actualités"];
export default function SiteSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tout");
  const input = useRef<HTMLInputElement>(null);
  const terms = normalizeSearch(query).split(" ").filter(Boolean);
  const results = searchEntries.filter(entry => (category === "Tout" || entry.category === category) && terms.every(term => normalizeSearch(`${entry.title} ${entry.description} ${entry.keywords}`).includes(term))).sort((a,b) => Number(terms.length > 0 && normalizeSearch(b.title).includes(normalizeSearch(query))) - Number(terms.length > 0 && normalizeSearch(a.title).includes(normalizeSearch(query))));
  return <section className="section site-search"><form role="search" onSubmit={event => event.preventDefault()}><label htmlFor="site-query">Que recherchez-vous ?</label><div className="search-input-row"><input ref={input} id="site-query" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Un projet, un métier, une information…" autoComplete="off" maxLength={150} aria-describedby="search-help" /><button type="button" onClick={() => { setQuery(""); setCategory("Tout"); input.current?.focus(); }}>Effacer</button></div><p id="search-help">Par exemple : Deepa, musique, logos ou contact.</p></form><div className="filter-bar search-filters" role="group" aria-label="Filtrer les résultats">{categories.map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div><p className="search-count" role="status">{results.length} résultat{results.length > 1 ? "s" : ""}{query.trim() ? ` pour « ${query.trim()} »` : " à explorer"}</p>{results.length ? <ul className="search-results">{results.map(result => <li key={result.href}><Link href={result.href}><span className="eyebrow">{result.category}</span><h2>{result.title}<span aria-hidden="true">↗</span></h2><p>{result.description}</p></Link></li>)}</ul> : <div className="search-empty"><h2>Aucun résultat pour cette recherche.</h2><p>Essayez un terme plus court ou une autre catégorie.</p><Link href="/contact" className="text-link">Besoin d’un renseignement ? <span aria-hidden="true">↗</span></Link></div>}</section>;
}
