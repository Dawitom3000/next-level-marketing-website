import type { Metadata } from "next";
import { Footer, Header, InnerHero, PageCta } from "../components/SiteChrome";
import { assetPath } from "../lib/asset-path";

export const metadata: Metadata = { title: "About", description: "The story, leadership, and operating principles behind Next Level Marketing & Communications." };

export default function AboutPage() {
  return <><Header /><main>
    <InnerHero eyebrow="About Next Level" title="Built in the market. Ready for the world." intro="More than 20 years of practical experience helping brands, institutions, and communities communicate, connect, and grow." />

    <section className="section shell story-grid">
      <div><p className="eyebrow">Our story</p><h2>Experience earned through execution.</h2></div>
      <div className="rich-copy">
        <p>Next Level began operating around 2006, building its reputation through direct marketing, brand activations, sports events, communications, and snack distribution. The company was formally registered by the Addis Ababa City Administration Trade Bureau in 2018.</p>
        <p>From international basketball tours and youth programs to consumer products, television production, documentaries, press conferences, and stakeholder engagement, our work has always lived where strategy meets real audiences.</p>
        <blockquote>We do more than create visibility. We build the relationships, experiences, and field execution that make visibility valuable.</blockquote>
      </div>
    </section>

    <section className="timeline-band section-dark"><div className="shell timeline-grid"><div><span>2006</span><p>Next Level begins operating through direct marketing, promotions, sports, and field execution.</p></div><div><span>2018</span><p>Formally registered by the Addis Ababa City Administration Trade Bureau.</p></div><div><span>Today</span><p>Led forward with two decades of relationships, market knowledge, and international ambition.</p></div></div></section>

    <section className="section section-sand">
      <div className="shell leadership-grid">
        <div className="leadership-image"><img src={assetPath("/images/production-set.jpg")} alt="Next Level production work in progress" /></div>
        <div>
          <p className="eyebrow">Leadership</p>
          <div className="person"><span>Founder</span><h3>Carlos Thornton</h3><p>After a professional sports career spanning American football and basketball in Israel, Carlos founded Next Level and shaped its reputation through sports marketing, youth development, media production, event promotion, and international relationship-building. His wider work in Ethiopia has used sport as a platform for education, opportunity, culture, and community connection for roughly two decades.</p></div>
          <div className="person"><span>Project Manager</span><h3>Dawit Abebe</h3><p>Dawit leads project coordination and delivery, helping the company translate client goals into organized, accountable market execution.</p></div>
        </div>
      </div>
    </section>

    <section className="section founder-proof section-dark">
      <div className="shell founder-proof-grid">
        <div>
          <p className="eyebrow light">The founder&apos;s wider impact</p>
          <h2>Sport became a platform for possibility.</h2>
          <p className="founder-proof-intro">Carlos Thornton&apos;s public record helps explain the operating philosophy behind Next Level: create programs people value, build the partnerships around them, and turn attention into long-term opportunity.</p>
        </div>
        <div className="proof-points">
          <article><strong>20 years</strong><p>Fana Media reported two decades of youth development work across Ethiopia, the United States, and other countries.</p></article>
          <article><strong>Player pathways</strong><p>Ethiopian Business Review reported that Thornton helped five Ethiopian players sign with college teams in the United States.</p></article>
          <article><strong>A legacy that returns</strong><p>The Reporter documented former camper Daniel Haileleul returning years later to serve as a head coach alongside Carlos.</p></article>
          <article><strong>Community reach</strong><p>Government coverage identified him as manager of Ethio Ballers Game Centre during a diaspora-focused sport and culture program in Addis Ababa.</p></article>
          <div className="coverage-links" aria-label="Independent coverage">
            <a href="https://www.fanamc.com/english/amp/ex-american-pro-sees-bright-basketball-future-for-ethiopian-youth/" target="_blank" rel="noreferrer">Fana Media <span>↗</span></a>
            <a href="https://ethiopianbusinessreview.net/can-ethiopian-basketball-return-to-its-former-glory/" target="_blank" rel="noreferrer">Ethiopian Business Review <span>↗</span></a>
            <a href="https://www.thereporterethiopia.com/441/" target="_blank" rel="noreferrer">The Reporter Ethiopia <span>↗</span></a>
            <a href="https://mfaethiopia.blog/2024/09/20/a-week-in-the-horn-20-09-2024/" target="_blank" rel="noreferrer">Ministry of Foreign Affairs <span>↗</span></a>
            <a href="https://www.coachcarlossummercamp.com/" target="_blank" rel="noreferrer">Coach Carlos Summer Camp <span>↗</span></a>
          </div>
        </div>
      </div>
    </section>

    <section className="section shell values-section"><div className="section-heading"><div><p className="eyebrow">How we work</p><h2>Principles that travel across every project.</h2></div></div><div className="values-grid"><article><strong>01</strong><h3>Audience first</h3><p>We start with who needs to move, what matters to them, and where attention becomes action.</p></article><article><strong>02</strong><h3>Local fluency</h3><p>We understand the relationships, rhythms, and realities that shape the Ethiopian market.</p></article><article><strong>03</strong><h3>Own the execution</h3><p>We stay close to the work—from strategy and production to venues, field teams, and distribution.</p></article><article><strong>04</strong><h3>Build lasting value</h3><p>We look beyond one campaign to create recognition, partnerships, and repeatable growth.</p></article></div></section>
    <PageCta />
  </main><Footer /></>;
}
