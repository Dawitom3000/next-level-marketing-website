import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next Level Marketing & Communications",
    short_name: "Next Level",
    description: "Marketing, communications, production, events, and distribution from Addis Ababa.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0c0a",
    theme_color: "#ff541c",
    icons: [{ src: "/favicon.png", sizes: "512x512", type: "image/png" }],
  };
}
