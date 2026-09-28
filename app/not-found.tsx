"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";

export default function NotFound() {
  const { locale } = useLanguage();
  const fr = locale === "fr";

  return (
    <main id="contenu" className="section not-found">
      <p className="eyebrow">
        {fr ? "404 / PAGE INTROUVABLE" : "404 / PAGE NOT FOUND"}
      </p>

      <h1>
        {fr ? "Changeons de direction." : "Let’s change direction."}
      </h1>

      <p>
        {fr
          ? "Cette page n’existe pas ou a été déplacée. Retrouvez les informations du groupe depuis l’accueil ou la recherche."
          : "This page does not exist or may have been moved. Explore Legacy Music Group from the homepage or use the site search."}
      </p>

      <div className="not-found-actions">
        <Link className="button" href="/">
          {fr ? "Retour à l’accueil" : "Back to home"}{" "}
          <span aria-hidden="true">↗</span>
        </Link>

        <Link className="text-link" href="/recherche">
          {fr ? "Rechercher dans le site" : "Search the site"}{" "}
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </main>
  );
}