import type { MetadataRoute } from "next";
import { publicRoutes, siteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-10-08");

  return publicRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: updated,
    changeFrequency: route === "" || route === "/events" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }));
}
