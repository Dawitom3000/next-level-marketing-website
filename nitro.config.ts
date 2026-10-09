import { defineConfig } from "nitro";

const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=()",
  "Strict-Transport-Security": "max-age=31536000",
};

export default defineConfig({
  compatibilityDate: "2026-10-08",
  vercel: {
    config: {
      version: 3,
      routes: [
        {
          src: "/api/(.*)",
          headers: {
            ...securityHeaders,
            "Cache-Control": "no-store, max-age=0",
          },
          continue: true,
        },
        {
          src: "/(.*)",
          headers: securityHeaders,
          continue: true,
        },
      ],
    },
  },
});
