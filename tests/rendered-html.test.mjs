import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const expectedSiteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://next-level-marketing-ethiopia.felekedawit11.chatgpt.site").replace(/\/$/, "");

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the video-led homepage and selected proof", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "SAMEORIGIN");
  assert.equal(response.headers.get("referrer-policy"), "strict-origin-when-cross-origin");

  const html = await response.text();
  assert.match(html, /<title>Next Level Marketing &amp; Communications<\/title>/i);
  assert.match(html, /What changed because we were there/);
  assert.match(html, /Ethio Ballers/);
  assert.match(html, /500\+/);
  assert.match(html, /AND1 Ethiopia Tours/);
  assert.match(html, /Tasties Market Reach/);
  assert.match(html, /U\.S\. Embassy meeting secured/);
  assert.match(html, /We move brands/);
  assert.match(html, /through culture/);
  assert.match(html, /videos\/next-level-hero-reel\.mp4/);
  assert.match(html, /images\/next-level-hero-poster\.jpg/);
  assert.doesNotMatch(html, /Crafting its market arrival/);
  await access(new URL("../public/videos/next-level-hero-reel.mp4", import.meta.url));
  assert.match(html, /Moments behind the work|people and moments behind the work/i);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("serves production health, indexing, and failure routes", async () => {
  const health = await render("/api/health");
  assert.equal(health.status, 200);
  assert.match(health.headers.get("cache-control") ?? "", /no-store/);
  assert.equal(health.headers.get("x-content-type-options"), "nosniff");
  const healthPayload = await health.json();
  assert.equal(healthPayload.status, "ok");
  assert.equal(healthPayload.service, "next-level-marketing-website");

  const robots = await render("/robots.txt");
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /Sitemap: .*\/sitemap\.xml/);

  const sitemap = await render("/sitemap.xml");
  assert.equal(sitemap.status, 200);
  const sitemapXml = await sitemap.text();
  assert.match(sitemapXml, /<loc>.*\/work<\/loc>/);
  assert.match(sitemapXml, /<loc>.*\/contact<\/loc>/);
  assert.doesNotMatch(sitemapXml, /<changefreq>quarterly<\/changefreq>/);

  const missing = await render("/this-page-does-not-exist");
  assert.equal(missing.status, 404);
  assert.match(await missing.text(), /We couldn’t find this page/);

  assert.equal((await render("/__debug")).status, 404);
  assert.equal((await render("/api/contact")).status, 404);
});

test("provides distinct metadata and a keyboard destination on every public route", async () => {
  for (const [path, title] of [["/events", "Projects"], ["/work", "Selected Work"], ["/services", "Capabilities"], ["/experience", "Experience"], ["/about", "About"], ["/contact", "Contact"]]) {
    const response = await render(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(`<title>${title} \\| Next Level Marketing</title>`));
    const canonicalTag = html.match(/<link\b[^>]*rel="canonical"[^>]*>/)?.[0] ?? "";
    const ogUrlTag = html.match(/<meta\b[^>]*property="og:url"[^>]*>/)?.[0] ?? "";
    assert.ok(canonicalTag.includes(`href="${expectedSiteUrl}${path}"`));
    assert.ok(ogUrlTag.includes(`content="${expectedSiteUrl}${path}"`));
    assert.match(html, /href="#main-content"/);
    assert.match(html, /<main[^>]+id="main-content"[^>]+tabindex="-1"/i);
    for (const [, source] of html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) {
      if (source.startsWith("/")) await access(new URL(`../public${source}`, import.meta.url));
    }
  }
});

test("renders the expanded campaign portfolio with its local media", async () => {
  const response = await render("/work");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Campaign portfolio/);
  assert.match(html, /Five areas of experience/);
  assert.match(html, /ATL marketing/);
  assert.match(html, /BTL marketing/);
  assert.match(html, /Banners · Posters · Roll up banners/);
  assert.match(html, /inner-hero-work/);
  assert.match(html, /page-hero-summer-camp\.webp/);
  assert.doesNotMatch(html, /inner-hero-art|NLM\+C|inner-orbit/);
  assert.match(html, /Lifan World Cup/);
  assert.match(html, /Dada Juice Market Expansion/);
  assert.match(html, /Amico Product Introduction/);
  assert.match(html, /International School Tournaments/);

  const campaigns = await readFile(
    new URL("../app/data/campaigns.ts", import.meta.url),
    "utf8",
  );
  const campaignIds = campaigns.match(/\bid: "/g) ?? [];
  assert.equal(campaignIds.length, 14);

  for (const image of [
    "diaspora-service-partnership.jpeg",
    "us-embassy-pro-camp.jpeg",
    "lifan-world-cup.jpeg",
    "dada-juice.jpeg",
    "amico.jpeg",
  ]) {
    await access(new URL(`../public/images/campaigns/${image}`, import.meta.url));
  }

  for (const image of [
    "page-hero-summer-camp.webp",
    "page-hero-media-interview.webp",
    "page-hero-tripolla-global-dinner-conversation.webp",
    "page-hero-stakeholder-relationship.webp",
  ]) {
    await access(new URL(`../public/images/${image}`, import.meta.url));
  }
});

test("renders direct contact options without a message form", async () => {
  const response = await render("/contact");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Contact us/);
  assert.match(html, /Choose how to reach us/);
  assert.match(html, />Email</);
  assert.match(html, />Phone</);
  assert.match(html, />WhatsApp</);
  assert.match(html, /Opens your email app or service/);
  assert.match(html, /mailto:nextlevelmarketingcomm@gmail\.com/);
  assert.match(html, /tel:\+251970437830/);
  assert.doesNotMatch(html, /<form\b|Send us a message|name="message"|name="email"/i);
  assert.doesNotMatch(html, /FormSubmit|formsubmit\.co|activation email/);
  assert.match(html, /nextlevelmarketingcomm@gmail\.com/);
  assert.doesNotMatch(html, /mailto:felekedawit11@gmail\.com/);
  assert.match(html, /wa\.me\/251970437830/);
});

test("renders Projects with Blue Nile first and correctly dated project groups", async () => {
  const response = await render("/events");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Ongoing/);
  assert.match(html, /Crafting its/);
  assert.match(html, /Recent · 2026/);
  assert.match(html, /Upcoming · 2026/);
  assert.match(html, /Puagume Festival 2026/);
  assert.match(html, /September 8 &amp; 10, 2026/);
  assert.match(html, /African Union Headquarters/);
  assert.match(html, /Meskel 2026/);
  assert.match(html, /Adwa Victory Memorial Museum/);
  assert.match(html, /Irreecha 2026/);
  assert.match(html, /Cambridge Academy/);
  assert.match(html, /World Squad Youth Cup/);
  assert.match(html, /December 18–22, 2026/);
  assert.match(html, /\+251 90 383 5464/);

  const ongoingIndex = html.indexOf("Crafting its");
  const recentIndex = html.indexOf("Recent · 2026");
  const upcomingIndex = html.indexOf("Upcoming · 2026");
  assert.ok(ongoingIndex >= 0 && ongoingIndex < recentIndex && recentIndex < upcomingIndex);
  assert.doesNotMatch(html, /Four live projects|SEP 08 &amp; 10/);

  for (const image of [
    "puagume-festival-2026.png",
    "meskel-back-to-your-origin-2026.png",
    "irreecha-back-to-your-origin-2026.png",
    "world-squad-youth-cup-dubai-2026.png",
  ]) {
    await access(new URL(`../public/images/events/${image}`, import.meta.url));
  }

  const home = await render("/");
  assert.doesNotMatch(await home.text(), /Crafting its market arrival/);
});

test("adds the Ethiopian Diaspora Service mark and removes public artwork placeholders", async () => {
  const response = await render("/experience");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Clients, partners, and collaborators/);
  assert.match(html, /Ethiopian Diaspora Service/);
  assert.match(html, /FDRE Ministry of Foreign Affairs/);
  assert.doesNotMatch(html, /Artwork being confirmed|More names from the Next Level record/);
  await access(new URL("../public/logos/ethiopian-diaspora-service.png", import.meta.url));
});
