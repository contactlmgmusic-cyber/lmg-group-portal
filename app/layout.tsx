import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Home - LMG Group Portal", template: "%s - LMG Group Portal" },
  description: "Découvrez le groupe LMG, ses pôles Music, Entertainment et Agency, et les projets qui relient musique, création et expérience.",
  icons: { icon: { url: "/images/lmg-group-icon.png", type: "image/png", sizes: "64x64" } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><a href="#contenu" className="skip-link">Aller au contenu</a><SiteHeader />{children}<SiteFooter /></body></html>;
}
