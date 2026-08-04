import Link from "next/link";

const services = [
  ["01", "Marketing strategy", "Audience insight, positioning, campaign planning, and market-entry thinking."],
  ["02", "Brand activation", "Promotions, launches, sponsorships, and experiences that create participation."],
  ["03", "Strategic communications", "Messaging, public relations, stakeholder engagement, and media coordination."],
  ["04", "Media production", "Documentaries, interviews, campaign content, and production deployment."],
  ["05", "Events & press", "Press conferences, tournaments, launches, and end-to-end event execution."],
  ["06", "Distribution support", "Retail reach, visibility, field coordination, and local product distribution."],
];

const socialProfiles = [
  { name: "Instagram", href: "https://www.instagram.com/nextlevelmarkating/", icon: "/icons/instagram.svg" },
  { name: "TikTok", href: "https://www.tiktok.com/@next.level.market10", icon: "/icons/tiktok.svg" },
];

export function SocialLinks() {
  return <div className="social-links">{socialProfiles.map((profile) => <a className="social-link" href={profile.href} target="_blank" rel="noreferrer" aria-label={`Open Next Level on ${profile.name}`} title={profile.name} key={profile.name}><img src={profile.icon} alt="" aria-hidden="true" /></a>)}</div>;
}

export function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link className="logo" href="/" aria-label="Next Level home">
          <span className="logo-mark"><b>N</b><b>L</b></span>
          <span>Next Level<small>Marketing + Communications</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/work">Work</Link>
          <Link href="/services">Capabilities</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/about">About</Link>
          <Link className="nav-cta" href="/contact"><i /> Start a project <span>↗</span></Link>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav>
            <Link href="/work">Work</Link>
            <Link href="/services">Capabilities</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Start a project</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer section-dark">
      <div className="shell footer-grid">
        <div>
          <Link className="logo logo-footer" href="/"><span className="logo-mark"><b>N</b><b>L</b></span><span>Next Level<small>Marketing + Communications</small></span></Link>
          <p>Market intelligence, creative communication, and accountable execution—built in Ethiopia.</p>
        </div>
        <div><h4>Navigate</h4><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/work">Work</Link><Link href="/experience">Experience</Link><Link href="/contact">Contact</Link></div>
        <div><h4>Talk to us</h4><a href="tel:+251911998000">+251 911 998 000</a><a href="tel:+251970437830">+251 970 437 830</a><a href="mailto:carlos2thornton@yahoo.com">carlos2thornton@yahoo.com</a><a href="mailto:felekedawit11@gmail.com">felekedawit11@gmail.com</a></div>
        <div><h4>Follow</h4><SocialLinks /><span>Addis Ababa, Ethiopia</span></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Next Level Marketing.</span><span>More than 20 years of market experience.</span></div>
    </footer>
  );
}

export function ServiceGrid({ compact = false }: { compact?: boolean }) {
  return <div className={`service-grid ${compact ? "compact" : ""}`}>{services.map(([number, name, text]) => <article className="service-card" key={name}><span>{number}</span><div><h3>{name}</h3><p>{text}</p></div><b aria-hidden="true">↗</b></article>)}</div>;
}

export function PageCta() {
  return (
    <section className="page-cta section-orange">
      <div className="shell page-cta-grid">
        <p className="eyebrow">Your next move</p>
        <h2>Ready to move<br />the market?</h2>
        <div><p>Tell us what needs to reach the right people. We’ll help shape the strategy and carry it into the market.</p><Link className="circle-link" href="/contact" aria-label="Start a conversation">↗</Link></div>
      </div>
    </section>
  );
}

export function InnerHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return <section className="inner-hero section-dark"><div className="shell inner-hero-grid"><p className="eyebrow light">{eyebrow}</p><div><h1>{title}</h1><p>{intro}</p></div><span className="inner-orbit" aria-hidden="true">NLM+C</span></div></section>;
}
