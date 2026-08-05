import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

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

test("server-renders the Next Level homepage and expanded proof", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Next Level Marketing &amp; Communications<\/title>/i);
  assert.match(html, /Proof moves/);
  assert.match(html, /Ethiopian Diaspora Service/);
  assert.match(html, /U\.S\. Embassy Pro Camp/);
  assert.match(html, /Dada Juice/);
  assert.match(html, /Moments behind the work|people and moments behind the work/i);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("renders the expanded campaign portfolio with its local media", async () => {
  const response = await render("/work");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Campaign portfolio/);
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
});
