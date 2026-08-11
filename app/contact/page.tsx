import type { Metadata } from "next";
import { Footer, Header, SocialLinks } from "../components/SiteChrome";
import { businessContacts } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a marketing, communications, media, event, or distribution project with Next Level by email, phone, or WhatsApp.",
};

const emailSubject = encodeURIComponent("New project enquiry | Next Level Marketing");
const emailBody = encodeURIComponent(`Hello Next Level team,

I would like to discuss a project.

Organization:
Project objective:
Intended audience:
Market or location:
Preferred timing:
Support needed:

My contact details:

Thank you.`);
const whatsappMessage = encodeURIComponent("Hello Next Level, I would like to discuss a marketing or communications project.");

const primaryEmail = `mailto:${businessContacts.emails[1]}?subject=${emailSubject}&body=${emailBody}`;
const founderEmail = `mailto:${businessContacts.emails[0]}?subject=${emailSubject}&body=${emailBody}`;
const dawitWhatsApp = `https://wa.me/251970437830?text=${whatsappMessage}`;
const carlosWhatsApp = `https://wa.me/251911998000?text=${whatsappMessage}`;

const briefItems = [
  ["01", "Objective", "What should the project achieve?"],
  ["02", "Audience", "Who needs to see, understand, or act?"],
  ["03", "Market", "Where should the work reach people?"],
  ["04", "Timing", "When should the project begin or launch?"],
  ["05", "Support", "Which services do you need from our team?"],
];

export default function ContactPage() {
  return <><Header /><main className="contact-page section-dark">
    <div className="contact-page-art" aria-hidden="true"><span>TALK</span><span>PLAN</span><span>MOVE</span></div>
    <div className="shell contact-grid">
      <div className="contact-intro">
        <p className="eyebrow light"><i className="live-dot" /> Start a project</p>
        <h1>Tell us what needs to move.</h1>
        <p className="contact-lede">Reach the team directly by email, phone, or WhatsApp. A short project brief helps us understand the opportunity and respond with the right approach.</p>
        <div className="brief-list"><span>Campaign strategy</span><span>Product launch</span><span>Sports &amp; events</span><span>Media production</span><span>Distribution</span></div>
        <div className="contact-social"><span>Follow the work</span><SocialLinks /></div>
      </div>

      <section className="contact-start" aria-labelledby="project-brief-title">
        <p className="eyebrow">Direct enquiry</p>
        <h2 id="project-brief-title">Start with a clear brief.</h2>
        <p className="contact-start-copy">Include these five points. The email button opens a prepared message so you can complete it in your own email application.</p>
        <ol className="contact-brief-list">
          {briefItems.map(([number, title, copy]) => <li key={number}><span>{number}</span><div><strong>{title}</strong><small>{copy}</small></div></li>)}
        </ol>
        <div className="contact-action-row">
          <a className="button button-dark" href={primaryEmail}>Prepare an email <span>↗</span></a>
          <a className="button contact-whatsapp" href={dawitWhatsApp} target="_blank" rel="noreferrer">Open WhatsApp <span>↗</span></a>
        </div>
        <p className="contact-storage-note">These links open your own email or messaging application. This website does not collect or store your enquiry.</p>
      </section>
    </div>

    <section className="shell contact-directory" aria-labelledby="direct-contacts-title">
      <div className="contact-directory-heading"><p className="eyebrow light">Direct contacts</p><h2 id="direct-contacts-title">Choose who to contact.</h2></div>
      <div className="contact-person-grid">
        <article className="contact-person-card contact-person-primary">
          <span>Primary enquiries · Project Manager</span><h3>Dawit Abebe</h3><p>Project briefs, campaign planning, partnerships, schedules, and next steps.</p>
          <div className="contact-person-actions"><a href="tel:+251970437830">Call <b>+251 970 437 830</b></a><a href={dawitWhatsApp} target="_blank" rel="noreferrer">WhatsApp <b>Message Dawit</b></a><a href={primaryEmail}>Email <b>{businessContacts.emails[1]}</b></a></div>
        </article>
        <article className="contact-person-card">
          <span>Founder</span><h3>Carlos Thornton</h3><p>Senior introductions, long-term relationships, sports initiatives, and strategic opportunities.</p>
          <div className="contact-person-actions"><a href="tel:+251911998000">Call <b>+251 911 998 000</b></a><a href={carlosWhatsApp} target="_blank" rel="noreferrer">WhatsApp <b>Message Carlos</b></a><a href={founderEmail}>Email <b>{businessContacts.emails[0]}</b></a></div>
        </article>
        <aside className="contact-location-card">
          <span>Based in</span><strong>Addis Ababa, Ethiopia</strong><p>Working with local and international organizations across marketing, communications, media, events, and distribution.</p><SocialLinks />
        </aside>
      </div>
    </section>
  </main><Footer /></>;
}
