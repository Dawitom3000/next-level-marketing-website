import Link from "next/link";
import { Footer, Header, PageCta, ServiceGrid } from "./components/SiteChrome";
import { CampaignGallery } from "./components/CampaignGallery";
import { LogoCarousel } from "./components/LogoCarousel";
import { experienceLogos } from "./data/experience";
import { assetPath } from "./lib/asset-path";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero hero-video section-dark">
          <div className="hero-media" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="metadata" poster={assetPath("/images/next-level-hero-poster.jpg")} tabIndex={-1}>
              <source src={assetPath("/videos/next-level-hero-reel.mp4")} type="video/mp4" />
            </video>
          </div>
          <div className="hero-grid shell">
            <div className="hero-copy reveal">
              <p className="eyebrow light"><i className="live-dot" /> Addis Ababa · Ethiopia · Since 2006</p>
              <h1>We move brands <em>through culture.</em></h1>
              <p className="hero-lede">
                Strategy, communication, promotion, production, events, and distribution—connected by more than 20 years of real Ethiopian market experience.
              </p>
              <div className="button-row">
                <Link className="button button-primary" href="/work">See what we move <span>↗</span></Link>
                <Link className="button button-ghost" href="/contact">Start a project</Link>
              </div>
            </div>

            <div className="hero-side reveal delay-1">
              <span className="hero-side-kicker">20+ years in market</span>
              <p>Local intelligence and international ambition—built through real campaigns, partnerships, productions, events, and distribution.</p>
              <div className="hero-disciplines"><span>Strategy</span><span>Communications</span><span>Activation</span><span>Distribution</span></div>
              <small>Footage from the Next Level archive</small>
            </div>
          </div>
          <div className="marquee logo-marquee">
            <LogoCarousel logos={experienceLogos} compact />
          </div>
        </section>

        <section className="metrics" aria-label="Company results"><div className="shell metrics-inner">
          <div><strong>20+</strong><span>Years of experience</span></div>
          <div><strong>500+</strong><span>Annual camp participants</span></div>
          <div><strong>10+</strong><span>Years organizing Ethio Ballers camps</span></div>
          <div><strong>2</strong><span>AND1 Ethiopia tours</span></div>
        </div></section>

        <section className="section shell manifesto">
          <p className="eyebrow">Our point of view</p>
          <p className="manifesto-copy">Attention is easy to buy. <span>Trust is earned in the market.</span> We combine local intelligence with international ambition to turn visibility into action.</p>
          <Link className="text-link" href="/about">The Next Level story <span>↗</span></Link>
        </section>

        <section className="section work-showcase section-dark">
          <div className="shell">
          <div className="section-heading work-heading">
            <div><p className="eyebrow light">Selected work</p><h2>Proof moves<br />faster than promises.</h2></div>
            <Link className="text-link light-link" href="/work">View all work <span>↗</span></Link>
          </div>

          <div className="case-grid">
            <Link href="/work#and1" className="case-card case-large">
              <div className="case-image case-logo-art case-logo-and1"><img src={assetPath("/logos/and1.png")} alt="AND1" /></div>
              <div className="case-overlay"><span>International sports marketing · 2008 & 2010</span><h3>AND1<br />Ethiopia Tours</h3><b>Full market execution ↗</b></div>
            </Link>
            <Link href="/work#coach-carlos" className="case-card">
              <div className="case-image"><img src={assetPath("/images/coach-carlos-show.jpg")} alt="Coach Carlos introducing The Coach Carlos Show" /></div>
              <div className="case-overlay"><span>Media & production · Nahoo TV</span><h3>The Coach<br />Carlos Show</h3><b>Culture on screen ↗</b></div>
            </Link>
            <Link href="/work#documentary" className="case-card case-photo-contain">
              <div className="case-image"><img src={assetPath("/images/us-embassy-documentary-meeting.jpg")} alt="Next Level representatives following a meeting at the U.S. Embassy" /></div>
              <div className="case-overlay"><span>U.S. Embassy engagement · 2025</span><h3>Documentary<br />& Proposals</h3><b>Recognition secured ↗</b></div>
            </Link>
          </div>
          </div>
        </section>

        <section className="section section-sand capability-home">
          <div className="shell">
            <div className="section-heading">
              <div><p className="eyebrow">Connected capabilities</p><h2>One team. From signal to street.</h2></div>
              <p>We connect strategic thinking with the communication, partnerships, production, events, and distribution needed to make work land.</p>
            </div>
            <ServiceGrid compact />
            <Link className="button button-dark service-button" href="/services">Explore our capabilities <span>↗</span></Link>
          </div>
        </section>

        <section className="section campaign-archive section-dark">
          <div className="shell gallery-heading">
            <div><p className="eyebrow light">From the archive</p><h2>The people and moments behind the work.</h2></div>
            <p>Production, interviews, guests, and relationships captured across the Next Level story.</p>
          </div>
          <CampaignGallery />
        </section>

        <PageCta />
      </main>
      <Footer />
    </>
  );
}
