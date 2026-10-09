import Link from "next/link";
import { Footer, Header, PageCta, ServiceGrid } from "./components/SiteChrome";
import { CampaignGallery } from "./components/CampaignGallery";
import { LogoCarousel } from "./components/LogoCarousel";
import { experienceLogos } from "./data/experience";
import { assetPath } from "./lib/asset-path";
import { HeroVideo } from "./components/HeroVideo";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="hero hero-video section-dark">
          <HeroVideo />
          <div className="hero-grid shell">
            <div className="hero-copy reveal">
              <p className="eyebrow light">Addis Ababa · Ethiopia · Since 2006</p>
              <h1>We move brands <em>through culture.</em></h1>
              <p className="hero-lede">
                Strategy, communication, promotion, production, events, and distribution. More than 20 years of Ethiopian market experience connects it all.
              </p>
              <div className="button-row">
                <Link className="button button-primary" href="/work">Explore our work <span aria-hidden="true">↗</span></Link>
                <Link className="button button-ghost" href="/contact">Start a project</Link>
              </div>
            </div>

            <div className="hero-side reveal delay-1">
              <span className="hero-side-kicker">20+ years in market</span>
              <p>Local intelligence with international ambition, proven through campaigns, partnerships, productions, events, and distribution.</p>
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
          <p className="manifesto-copy">People act on messages they understand and trust. <span>Local knowledge makes the difference.</span> We connect strategy with practical market delivery.</p>
          <Link className="text-link" href="/about">The Next Level story <span aria-hidden="true">↗</span></Link>
        </section>

        <section className="section work-showcase section-dark">
          <div className="shell">
            <div className="section-heading results-heading">
              <div>
                <p className="eyebrow light">Selected results</p>
                <h2>What changed because we were there.</h2>
              </div>
              <div className="results-heading-side">
                <p>A selection of assignments showing the challenge, Next Level&apos;s role, and the result delivered.</p>
                <Link className="text-link light-link" href="/work">Explore every case <span aria-hidden="true">↗</span></Link>
              </div>
            </div>

            <div className="results-editorial" aria-label="Selected project results">
              <Link href="/work#ethio-ballers" className="result-case result-featured">
                <div className="result-media">
                  <img src={assetPath("/images/summer-camp.jpg")} alt="Coach Carlos with guests at an Ethio Ballers summer camp" loading="lazy" decoding="async" />
                  <span className="result-index">01</span>
                </div>
                <div className="result-content">
                  <p className="result-meta">Youth sports marketing · Addis Ababa</p>
                  <h3>Ethio Ballers<br />Summer Camp</h3>
                  <p className="result-summary">A trusted annual youth sports platform built through parent communication, school partnerships, venue activation, promotion, and dependable event delivery.</p>
                  <div className="result-numbers" aria-label="Ethio Ballers results">
                    <div><strong>10+</strong><span>Years of collaboration</span></div>
                    <div><strong>500+</strong><span>Students joining annually</span></div>
                  </div>
                  <div className="result-scope" aria-label="Next Level role">
                    <span>Parent communication</span><span>School partnerships</span><span>Event delivery</span>
                  </div>
                  <b className="result-link">Read the full case <span aria-hidden="true">↗</span></b>
                </div>
              </Link>

              <div className="result-pair">
                <Link href="/work#and1" className="result-case result-standard">
                  <div className="result-media">
                    <img src={assetPath("/images/basketball-award-presentation.jpg")} alt="Coach Carlos presenting an award during an international basketball event" loading="lazy" decoding="async" />
                    <span className="result-index">02</span>
                    <span className="result-brand-mark"><img src={assetPath("/logos/and1.png")} alt="AND1" loading="lazy" decoding="async" /></span>
                  </div>
                  <div className="result-content">
                    <p className="result-meta">International sports marketing · 2008 &amp; 2010</p>
                    <h3>AND1 Ethiopia Tours</h3>
                    <div className="result-lead"><strong>2</strong><span>International tours delivered</span></div>
                    <p className="result-summary">Next Level managed the Ethiopian side of both visits, connecting promotion, sponsors, media, venues, guest handling, logistics, and live event operations.</p>
                    <div className="result-scope"><span>Campaign strategy</span><span>Event operations</span><span>Media relations</span></div>
                    <b className="result-link">Read the full case <span aria-hidden="true">↗</span></b>
                  </div>
                </Link>

                <Link href="/work#tasties" className="result-case result-standard">
                  <div className="result-media">
                    <img src={assetPath("/images/campaigns/tasty-foods.jpeg")} alt="Coach Carlos speaking during a Tasties sports campaign" loading="lazy" decoding="async" />
                    <span className="result-index">03</span>
                  </div>
                  <div className="result-content">
                    <p className="result-meta">Product marketing and distribution</p>
                    <h3>Tasties Market Reach</h3>
                    <div className="result-lead"><strong>4</strong><span>Cities reached through distribution</span></div>
                    <p className="result-summary">Promotion and physical availability worked together across Addis Ababa, Bahir Dar, Hawassa, and Jimma to build sustained recognition.</p>
                    <div className="result-scope"><span>Direct distribution</span><span>Field promotion</span><span>Event sponsorship</span></div>
                    <b className="result-link">Read the full case <span aria-hidden="true">↗</span></b>
                  </div>
                </Link>
              </div>

              <Link href="/work#documentary" className="result-case result-wide">
                <div className="result-media">
                  <img src={assetPath("/images/us-embassy-documentary-meeting.jpg")} alt="Next Level representatives following a meeting at the U.S. Embassy" loading="lazy" decoding="async" />
                  <span className="result-index">04</span>
                </div>
                <div className="result-content">
                  <p className="result-meta">Documentary and stakeholder communication · 2025</p>
                  <h3>20 Years of Excellence</h3>
                  <div className="result-outcome"><strong>U.S. Embassy meeting secured</strong></div>
                  <p className="result-summary">Next Level independently funded and produced the basketball documentary, then used it with additional proposals to create recognition and open a conversation about future community support.</p>
                  <div className="result-scope"><span>Documentary strategy</span><span>Production</span><span>Diplomatic communication</span></div>
                  <b className="result-link">Read the full case <span aria-hidden="true">↗</span></b>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-sand capability-home">
          <div className="shell">
            <div className="section-heading">
              <div><p className="eyebrow">Connected capabilities</p><h2>Strategy and delivery in one team.</h2></div>
              <p>We connect strategic thinking with the communication, partnerships, production, events, and distribution needed to make work land.</p>
            </div>
            <ServiceGrid compact />
            <Link className="button button-dark service-button" href="/services">Explore our capabilities <span aria-hidden="true">↗</span></Link>
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
