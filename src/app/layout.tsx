import type { Metadata, Viewport } from "next";
import { DemoNoticeProvider } from "@/components/demo-notice";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";
import { LanguageProvider } from "@/lib/i18n";
import { medicalClinicJsonLd, webSiteJsonLd } from "@/lib/schema";
import { site, siteOrigin } from "@/lib/site";
import "./globals.css";

// Share card. PNG, not SVG: Facebook, LinkedIn, WhatsApp and iMessage do
// not render SVG og:image files. Regenerate with `node scripts/make-og-image.mjs`.
const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${site.name} — ${site.tagline}`,
};

export const metadata: Metadata = {
  metadataBase: new URL(`${siteOrigin}/`),
  title: {
    default: `${site.shortName} | ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  // No title/description here on purpose: Next then falls back to each
  // page's own <title> and description, so shared links to /faq or
  // /clinicians preview that page instead of the generic home text.
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: site.name,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage.url],
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
        <JsonLd data={medicalClinicJsonLd()} />
        <JsonLd data={webSiteJsonLd()} />
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
