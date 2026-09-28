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
    "Legacy Music Group brings together music, live entertainment, strategy and creative expertise through LMG Music and LMG Agency.",

  applicationName: "LMG GROUP",

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
  const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://legacymusicgroup.fr/#website",
      url: "https://legacymusicgroup.fr/",
      name: "LMG GROUP",
      alternateName: "Legacy Music Group",
    },
    {
      "@type": "Organization",
      "@id": "https://legacymusicgroup.fr/#organization",
      name: "LMG GROUP",
      alternateName: "Legacy Music Group",
      url: "https://legacymusicgroup.fr/",
      logo: "https://legacymusicgroup.fr/lmg-group-icon.png",
    },
  ],
};
  return (
    <html lang="en">
      <body>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
/>
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