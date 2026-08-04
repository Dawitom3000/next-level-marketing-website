import Link from "next/link";
import { Footer, Header, PageCta, ServiceGrid } from "./components/SiteChrome";
import { LogoWall } from "./components/LogoWall";
import { experienceLogos } from "./data/experience";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero section-dark">
          <div className="hero-grid shell">
            <div className="hero-copy reveal">
              <p className="eyebrow light">Addis Ababa · Ethiopia · Since 2006</p>
              <h1>Reach the right audience. <span>Move the market.</span></h1>
              <p className="hero-lede">
                Strategy, communication, promotion, production, events, and
                distribution—delivered by a team with more than 20 years of
                Ethiopian market experience.
              </p>
              <div className="button-row">
                <Link className="button button-primary" href="/contact">Start a project <span>↗</span></Link>
                <Link className="button button-ghost" href="/work">Explore our work</Link>
              </div>
            </div>

            <div className="hero-visual reveal delay-1">
              <img src="/images/summer-camp.jpg" alt="Coach Carlos and guests at a summer camp event" />
              <div className="hero-stamp">
                <strong>20+</strong>
                <span>years in market</span>
              </div>
              <div className="hero-caption">Campaigns that connect brands, culture, and community.</div>
            </div>
          </div>
          <div className="marquee" aria-label="Core capabilities">
            <div>MARKETING STRATEGY <i>•</i> BRAND ACTIVATION <i>•</i> COMMUNICATIONS <i>•</i> DISTRIBUTION <i>•</i> SPORTS MARKETING <i>•</i> MEDIA PRODUCTION <i>•</i> EVENTS <i>•</i></div>
          </div>
        </section>

        <section className="metrics shell" aria-label="Company results">
          <div><strong>20+</strong><span>Years of experience</span></div>
          <div><strong>500+</strong><span>Annual camp participants</span></div>
          <div><strong>4</strong><span>Distribution cities</span></div>
          <div><strong>2</strong><span>AND1 Ethiopia tours</span></div>
        </section>

        <section className="section shell intro-grid">
          <div>
            <p className="eyebrow">What we do</p>
            <h2>Local intelligence.<br />International ambition.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Next Level helps brands and institutions turn attention into
              action. We understand how Ethiopian audiences move, what builds
              trust, and what it takes to execute beyond the presentation deck.
            </p>
            <Link className="text-link" href="/about">Meet Next Level <span>→</span></Link>
          </div>
        </section>

        <section className="section section-sand">
          <div className="shell">
            <div className="section-heading">
              <div><p className="eyebrow">Capabilities</p><h2>Built to take work from idea to audience.</h2></div>
              <p>One connected team for strategy, communications, activation, production, and field execution.</p>
            </div>
            <ServiceGrid compact />
            <Link className="button button-dark service-button" href="/services">View all services <span>↗</span></Link>
          </div>
        </section>

        <section className="section shell">
          <div className="section-heading work-heading">
            <div><p className="eyebrow">Selected work</p><h2>Proof, not promises.</h2></div>
            <Link className="text-link" href="/work">View all work <span>→</span></Link>
          </div>

          <div className="case-grid">
            <Link href="/work#and1" className="case-card case-large">
              <div className="case-image"><img src="/images/summer-camp.jpg" alt="Sports event organized by Next Level" /></div>
              <div className="case-meta"><span>International sports marketing</span><span>2008 & 2010</span></div>
              <h3>AND1 Ethiopia Tours</h3>
              <p>Full local execution—from promotion and sponsorship to media, venues, and logistics.</p>
            </Link>
            <Link href="/work#coach-carlos" className="case-card">
              <div className="case-image"><img src="/images/coach-carlos-show.jpg" alt="Coach Carlos introducing The Coach Carlos Show" /></div>
              <div className="case-meta"><span>Media & production</span><span>Nahoo TV</span></div>
              <h3>The Coach Carlos Show</h3>
              <p>A broadcast platform bringing sports, culture, and prominent voices together.</p>
            </Link>
            <Link href="/work#documentary" className="case-card">
              <div className="case-image"><img src="/images/haile-interview.jpg" alt="Coach Carlos interviewing Haile Gebrselassie" /></div>
              <div className="case-meta"><span>Documentary & diplomacy</span><span>2025</span></div>
              <h3>20 Years of Excellence</h3>
              <p>A self-funded basketball documentary built to earn international recognition.</p>
            </Link>
          </div>
        </section>

        <section className="section experience section-dark">
          <div className="shell">
            <div className="section-heading experience-heading">
              <div><p className="eyebrow light">Selected experience</p><h2>Brands know the company we keep.</h2></div>
              <Link className="text-link light-link" href="/experience">View full experience <span>→</span></Link>
            </div>
            <LogoWall logos={experienceLogos.filter((logo) => logo.featured).slice(0, 12)} />
            <p className="brand-note">Clients, sponsors, distribution relationships, media partners, and institutional collaborators. Engagement scope varied by project.</p>
          </div>
        </section>

        <PageCta />
      </main>
      <Footer />
    </>
  );
}
