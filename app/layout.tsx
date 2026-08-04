import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { assetPath } from "./lib/asset-path";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://next-level-marketing-ethiopia.felekedawit11.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Next Level Marketing & Communications",
    template: "%s | Next Level Marketing",
  },
  description:
    "More than 20 years connecting ambitious brands, institutions, and communities with the audiences that matter across Ethiopia.",
  icons: { icon: assetPath("/favicon.png"), shortcut: assetPath("/favicon.png") },
  openGraph: {
    title: "Next Level Marketing & Communications",
    description:
      "Strategy, communication, promotion, production, events, and distribution—built for the Ethiopian market.",
    type: "website",
    locale: "en_ET",
    images: [{ url: assetPath("/og.png"), width: 1735, height: 907, alt: "Next Level Marketing & Communications" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Level Marketing & Communications",
    description: "More than 20 years of market experience in Ethiopia.",
    images: [assetPath("/og.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
