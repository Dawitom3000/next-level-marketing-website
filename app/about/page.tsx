import type { Metadata } from "next";
import { Footer, Header, InnerHero, PageCta } from "../components/SiteChrome";

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

    <section className="section section-sand">
      <div className="shell leadership-grid">
        <div className="leadership-image"><img src="/images/production-set.jpg" alt="Next Level production work in progress" /></div>
        <div>
          <p className="eyebrow">Leadership</p>
          <div className="person"><span>Founder</span><h3>Carlos Thornton</h3><p>Carlos founded Next Level and shaped its reputation through sports marketing, youth development, media production, event promotion, and international relationship-building.</p></div>
          <div className="person"><span>Project Manager</span><h3>Dawit Abebe</h3><p>Dawit leads project coordination and delivery, helping the company translate client goals into organized, accountable market execution.</p></div>
        </div>
      </div>
    </section>

    <section className="section shell values-section"><div className="section-heading"><div><p className="eyebrow">How we work</p><h2>Principles that travel across every project.</h2></div></div><div className="values-grid"><article><strong>01</strong><h3>Audience first</h3><p>We start with who needs to move, what matters to them, and where attention becomes action.</p></article><article><strong>02</strong><h3>Local fluency</h3><p>We understand the relationships, rhythms, and realities that shape the Ethiopian market.</p></article><article><strong>03</strong><h3>Own the execution</h3><p>We stay close to the work—from strategy and production to venues, field teams, and distribution.</p></article><article><strong>04</strong><h3>Build lasting value</h3><p>We look beyond one campaign to create recognition, partnerships, and repeatable growth.</p></article></div></section>
    <PageCta />
  </main><Footer /></>;
}
