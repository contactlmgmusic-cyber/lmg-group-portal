import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";
import { siteUrl } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: "Home - LMG Group Portal", template: "%s - LMG Group Portal" },
  description: "Découvrez le groupe LMG, ses pôles Music, Entertainment et Agency, et les projets qui relient musique, création et expérience.",
  icons: {
    icon: { url: "/favicon-lmg-blue.png?v=blue-20260927-2", type: "image/png", sizes: "64x64" },
    shortcut: "/favicon-lmg-blue.png?v=blue-20260927-2",
    apple: { url: "/apple-icon.png?v=blue-20260927-2", sizes: "180x180", type: "image/png" },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><a href="#contenu" className="skip-link">Aller au contenu</a><SiteHeader />{children}<SiteFooter /></body></html>;
}
