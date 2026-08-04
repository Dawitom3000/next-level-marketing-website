import type { Metadata } from "next";
import { Footer, Header, InnerHero, PageCta, ServiceGrid } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Services", description: "Integrated marketing, communications, media, events, and distribution services in Ethiopia." };

export default function ServicesPage() {
  return <><Header /><main>
    <InnerHero eyebrow="Services" title="From market thinking to market movement." intro="An integrated team for the work that happens before, during, and after a campaign goes live." />
    <section className="section shell"><ServiceGrid /></section>
    <section className="section section-dark process-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow light">Our process</p><h2>Clear thinking. Accountable delivery.</h2></div><p>Every engagement is shaped to the assignment, with one practical path from brief to result.</p></div><div className="process-grid"><article><span>01</span><h3>Understand</h3><p>Clarify the audience, business objective, market context, constraints, and evidence of success.</p></article><article><span>02</span><h3>Shape</h3><p>Build the positioning, message, channel plan, partnerships, production scope, and execution map.</p></article><article><span>03</span><h3>Activate</h3><p>Coordinate teams, content, media, events, venues, sponsors, distribution, and stakeholder communication.</p></article><article><span>04</span><h3>Learn</h3><p>Review reach, participation, market feedback, and the next opportunity for growth.</p></article></div></div></section>
    <section className="section shell sectors"><p className="eyebrow">Sectors</p><h2>Experience across the audiences that shape Ethiopia.</h2><div className="sector-list"><span>Consumer goods</span><span>Beverages</span><span>Sports & youth</span><span>Education</span><span>Tourism</span><span>Real estate</span><span>Financial services</span><span>Government & institutions</span></div></section>
    <PageCta />
  </main><Footer /></>;
}
