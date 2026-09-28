import type { Metadata } from "next";

import { LanguageProvider } from "@/components/LanguageProvider";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { siteUrl } from "@/lib/metadata";

import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: siteUrl,

  title: {
    default: "Home - LMG Group Portal",
    template: "%s - LMG Group Portal",
  },

  description:
    "Discover Legacy Music Group, its Music and Agency businesses, and the projects connecting music, live entertainment, strategy and creative experiences.",

  icons: {
  icon: "/lmg-group-icon.png?v=1",
  shortcut: "/lmg-group-icon.png?v=1",
  apple: "/apple-icon.png?v=1",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <a href="#contenu" className="skip-link">
            Skip to content
          </a>

          <SiteHeader />

          {children}

          <SiteFooter />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}