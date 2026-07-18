import type { Metadata, Viewport } from "next";
import { DemoNoticeProvider } from "@/components/demo-notice";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";
import { LanguageProvider } from "@/lib/i18n";
import { site, siteOrigin } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteOrigin}/`),
  title: {
    default: `${site.shortName} | ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.shortName,
    description: site.description,
    images: ["/og-image.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <LanguageProvider>
          <DemoNoticeProvider>
            <SkipLink />
            <SiteHeader />
            <main id="main-content">{children}</main>
            <SiteFooter />
          </DemoNoticeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
