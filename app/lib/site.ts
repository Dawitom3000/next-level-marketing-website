import type { Metadata } from "next";
import { assetPath } from "./asset-path";

const vercelDeploymentUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined;
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  vercelProductionUrl ??
  vercelDeploymentUrl ??
  "https://next-level-marketing-ethiopia.felekedawit11.chatgpt.site"
).replace(/\/+$/, "");

export const siteName = "Next Level Marketing & Communications";

export const siteDescription =
  "Marketing, communications, media production, events, and distribution in Ethiopia, backed by more than 20 years of local experience.";

export function pageMetadata({ title, description, path, image }: { title: string; description: string; path: string; image?: { url: string; alt: string } }): Metadata {
  const socialTitle = `${title} | Next Level Marketing`;
  const socialImage = image ?? { url: "/og.jpg", alt: siteName };
  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: {
      title: socialTitle,
      description,
      type: "website",
      locale: "en_ET",
      siteName,
      url: `${siteUrl}${path}`,
      images: [{ url: assetPath(socialImage.url), alt: socialImage.alt }],
    },
    twitter: { card: "summary_large_image", title: socialTitle, description, images: [assetPath(socialImage.url)] },
  };
}

export const businessContacts = {
  phones: ["+251911998000", "+251970437830"],
  emails: ["carlos2thornton@yahoo.com", "nextlevelmarketingcomm@gmail.com"],
  instagram: "https://www.instagram.com/nextlevelmarkating/",
  tiktok: "https://www.tiktok.com/@next.level.market10",
} as const;

export const publicRoutes = [
  "",
  "/events",
  "/work",
  "/services",
  "/experience",
  "/about",
  "/contact",
] as const;
