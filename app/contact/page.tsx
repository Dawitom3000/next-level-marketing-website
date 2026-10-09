import type { Metadata } from "next";
import { Footer, Header } from "../components/SiteChrome";
import { businessContacts, pageMetadata } from "../lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Contact Next Level Marketing & Communications by email, phone, or WhatsApp.",
  path: "/contact",
});

const whatsappMessage = encodeURIComponent("Hello Next Level, I would like to discuss a marketing or communications project.");
const primaryEmail = `mailto:${businessContacts.emails[1]}?subject=${encodeURIComponent("Hello Next Level Marketing")}`;
const dawitWhatsApp = `https://wa.me/251970437830?text=${whatsappMessage}`;

export default function ContactPage() {
  return <><Header /><main id="main-content" tabIndex={-1} className="contact-page section-dark">
    <div className="contact-page-art" aria-hidden="true"><span>TALK</span><span>PLAN</span><span>MOVE</span></div>
    <div className="shell contact-grid">
      <div className="contact-intro">
        <p className="eyebrow light">Start a project</p>
        <h1>Tell us what needs to move.</h1>
        <p className="contact-lede">For project enquiries and partnerships, reach our team directly.</p>
      </div>

      <section className="contact-methods" aria-labelledby="contact-methods-title">
        <p className="eyebrow light">Contact us</p>
        <h2 id="contact-methods-title">Choose how to reach us.</h2>
        <div className="contact-method-grid">
          <a className="contact-method" href={primaryEmail}>
            <span>Email</span><strong>{businessContacts.emails[1].split("@")[0]}<wbr />@{businessContacts.emails[1].split("@")[1]}</strong><small>Opens your email app or service</small>
          </a>
          <a className="contact-method" href="tel:+251970437830">
            <span>Phone</span><strong>+251 970 437 830</strong><small>Call the project manager</small>
          </a>
          <a className="contact-method" href={dawitWhatsApp} target="_blank" rel="noreferrer">
            <span>WhatsApp</span><strong>Message Dawit</strong><small>Start a WhatsApp chat</small>
          </a>
        </div>
      </section>
    </div>
  </main><Footer /></>;
}
