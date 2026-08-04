import type { Metadata } from "next";
import { Footer, Header, SocialLinks } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Contact", description: "Start a marketing, communications, media, event, or distribution project with Next Level." };

export default function ContactPage() {
  return <><Header /><main className="contact-page section-dark"><div className="shell contact-grid">
    <div><p className="eyebrow light"><i className="live-dot" /> Start a project</p><h1>Tell us what needs to move.</h1><p className="contact-lede">A brand. An audience. A launch. A conversation. Share the goal, and we’ll help shape the path.</p><div className="brief-list"><span>Campaign strategy</span><span>Product launch</span><span>Sports & events</span><span>Media production</span><span>Distribution</span></div><div className="contact-social"><SocialLinks /></div></div>
    <div className="contact-cards">
      <article><span>Founder</span><h2>Carlos Thornton</h2><a href="tel:+251911998000">+251 911 998 000</a><a href="mailto:carlos2thornton@yahoo.com">carlos2thornton@yahoo.com</a></article>
      <article><span>Project Manager</span><h2>Dawit Abebe</h2><a href="tel:+251970437830">+251 970 437 830</a><a href="mailto:felekedawit11@gmail.com">felekedawit11@gmail.com</a></article>
      <div className="contact-location"><span>Based in</span><strong>Addis Ababa, Ethiopia</strong><p>Working with local and international organizations.</p></div>
    </div>
  </div></main><Footer /></>;
}
