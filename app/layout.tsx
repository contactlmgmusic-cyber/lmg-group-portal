import type { Metadata } from "next";

import { LanguageProvider } from "@/components/LanguageProvider";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { siteUrl } from "@/lib/metadata";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,

  title: {
    default: "Home - LMG Group Portal",
    template: "%s - LMG Group Portal",
  },

  description:
    "Discover Legacy Music Group, its Music and Agency businesses, and the projects connecting music, live entertainment, strategy and creative experiences.",

  icons: {
    icon: {
      url: "/favicon-lmg-blue.png?v=blue-20260927-2",
      type: "image/png",
      sizes: "64x64",
    },

    shortcut:
      "/favicon-lmg-blue.png?v=blue-20260927-2",

    apple: {
      url: "/apple-icon.png?v=blue-20260927-2",
      sizes: "180x180",
      type: "image/png",
    },
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
        </LanguageProvider>
      </body>
    </html>
  );
}