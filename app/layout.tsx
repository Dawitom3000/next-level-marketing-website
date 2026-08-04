import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Next Level Marketing & Communications",
      template: "%s | Next Level Marketing",
    },
    description:
      "More than 20 years connecting ambitious brands, institutions, and communities with the audiences that matter across Ethiopia.",
    icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
    openGraph: {
      title: "Next Level Marketing & Communications",
      description:
        "Strategy, communication, promotion, production, events, and distribution—built for the Ethiopian market.",
      type: "website",
      locale: "en_ET",
      images: [{ url: `${baseUrl}/og.png`, width: 1735, height: 907, alt: "Next Level Marketing & Communications" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Next Level Marketing & Communications",
      description: "More than 20 years of market experience in Ethiopia.",
      images: [`${baseUrl}/og.png`],
    },
  };
}

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
