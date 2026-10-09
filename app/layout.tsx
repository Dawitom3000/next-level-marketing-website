import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { assetPath } from "./lib/asset-path";
import { businessContacts, siteDescription, siteName, siteUrl } from "./lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  title: {
    default: siteName,
    template: "%s | Next Level Marketing",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "Marketing and communications",
  keywords: ["marketing Ethiopia", "communications Ethiopia", "sports marketing", "brand activation", "media production", "distribution"],
  icons: { icon: assetPath("/favicon.png"), shortcut: assetPath("/favicon.png") },
  openGraph: {
    title: siteName,
    description:
      "Strategy, communication, promotion, production, events, and distribution for the Ethiopian market.",
    type: "website",
    locale: "en_ET",
    url: siteUrl,
    siteName,
    images: [{ url: assetPath("/og.jpg"), width: 1735, height: 907, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Level Marketing & Communications",
    description: "More than 20 years of market experience in Ethiopia.",
    images: [assetPath("/og.jpg")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteName,
    url: siteUrl,
    logo: new URL(assetPath("/favicon.png"), siteUrl).toString(),
    image: new URL(assetPath("/og.jpg"), siteUrl).toString(),
    description: siteDescription,
    foundingDate: "2006",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Addis Ababa",
      addressCountry: "ET",
    },
    areaServed: ["Ethiopia", "International"],
    email: businessContacts.emails[1],
    telephone: businessContacts.phones[0],
    sameAs: [businessContacts.instagram, businessContacts.tiktok],
  };

  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${manrope.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
      </body>
    </html>
  );
}
