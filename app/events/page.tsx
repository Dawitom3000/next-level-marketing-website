import type { Metadata } from "next";
import { BlueNileBottle } from "../components/BlueNileBottle";
import { Footer, Header, PageCta } from "../components/SiteChrome";
import { recentProjects, upcomingProjects, eventContacts, type CurrentProject } from "../data/events";
import { assetPath } from "../lib/asset-path";
import { pageMetadata } from "../lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description: "Ongoing, recent, and upcoming sports, culture, youth, diaspora, and international tournament projects from Next Level Marketing & Communications.",
  path: "/events",
  image: { url: "/images/events/world-squad-youth-cup-dubai-2026.webp", alt: "World Squad Youth Cup Dubai 2026" },
});

function phoneHref(phone: string) {
  return `tel:${phone}`;
}

function ProjectCard({ project, status }: { project: CurrentProject; status: string }) {
  return (
    <article className="project-card" id={project.id}>
      <div className="project-card-poster">
        <img src={assetPath(project.poster)} alt={`${project.title} poster`} loading="lazy" />
      </div>
      <div className="project-card-copy">
        <p className="eyebrow"><span className="project-status">{status}</span> · {project.series}</p>
        <h3>{project.title}</h3>
        <p className="project-card-summary">{project.summary}</p>
        <dl className="project-card-facts">
          <div><dt>Date</dt><dd>{project.date}</dd></div>
          <div><dt>Venue</dt><dd>{project.venue}</dd></div>
          <div><dt>Location</dt><dd>{project.location}</dd></div>
        </dl>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-highlights" aria-label={`${project.title} highlights`}>
          {project.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
        </div>
        <p className="project-card-audience"><strong>For</strong>{project.audiences}</p>
        {project.registration && <p className="project-registration">{project.registration}</p>}
      </div>
    </article>
  );
}

export default function EventsPage() {
  return <><Header /><main id="main-content" tabIndex={-1}>
    <section className="projects-page-hero section-dark">
      <div className="shell">
        <p className="eyebrow light">Projects · 2026</p>
        <h1>Ongoing, recent, and upcoming work.</h1>
        <p>Sport, culture, diaspora engagement, youth development, and international competition across Ethiopia and abroad.</p>
        <nav className="project-jump-links" aria-label="Project sections">
          <a href="#ongoing">Ongoing</a><a href="#recent">Recent</a><a href="#upcoming">Upcoming</a>
        </nav>
      </div>
    </section>

    <section className="hero hero-blue-nile section-dark ongoing-project" id="ongoing">
      <div className="blue-nile-atmosphere" aria-hidden="true" />
      <div className="hero-grid blue-nile-hero-grid shell">
        <div className="hero-copy">
          <div className="blue-nile-intro">
            <p className="eyebrow light"><i className="live-dot" /> Ongoing · Responsible 21+ activation</p>
            <p className="blue-nile-brandline">The Blue Nile · London Dry Gin</p>
            <h2>Crafting its <em>market arrival.</em></h2>
          </div>
          <div className="blue-nile-details">
            <p className="hero-lede">A 21+ brand introduction combining Ethiopian provenance with hospitality, campaign content, consumer insight, and distribution support.</p>
            <div className="button-row">
              <a className="button button-primary" href="/contact">Discuss a launch <span aria-hidden="true">↗</span></a>
              <a className="button button-ghost" href="/work">Explore our work</a>
            </div>
            <div className="blue-nile-scope" aria-label="Blue Nile project scope">
              <span>Strategy</span><span>Creative direction</span><span>Responsible activation</span><span>Distribution</span>
            </div>
          </div>
        </div>
        <BlueNileBottle />
      </div>
    </section>

    <section className="project-group section shell" id="recent" aria-labelledby="recent-projects-title">
      <div className="section-heading">
        <div><p className="eyebrow">Recent · 2026</p><h2 id="recent-projects-title">Recent projects.</h2></div>
        <p>Recent programme dates and locations from the 2026 Back to Your Origin series.</p>
      </div>
      <div className="project-card-grid">
        {recentProjects.map((project) => <ProjectCard key={project.id} project={project} status="Recent" />)}
      </div>
    </section>

    <section className="project-group project-group-upcoming section section-sand" id="upcoming" aria-labelledby="upcoming-projects-title">
      <div className="shell">
        <div className="section-heading">
          <div><p className="eyebrow">Upcoming · 2026</p><h2 id="upcoming-projects-title">What’s next.</h2></div>
          <p>For registration and partnership enquiries, contact the relevant team below.</p>
        </div>
        <div className="project-card-grid project-card-grid-upcoming">
          {upcomingProjects.map((project) => <ProjectCard key={project.id} project={project} status="Upcoming" />)}
        </div>
      </div>
    </section>

    <section className="section section-dark event-contact-section">
      <div className="shell event-contact-grid">
        <div><p className="eyebrow light">Registration &amp; partnerships</p><h2>Talk with the project team.</h2><p>Contact the relevant team for player registration, school participation, sponsorship, vendor opportunities, media collaboration, or institutional partnership.</p></div>
        <div className="event-contact-cards">
          <article><span>Teams, players, schools &amp; academies</span><h3>Ethio Ballers administration</h3>{eventContacts.ethioBallers.map((phone) => <a href={phoneHref(phone)} key={phone}>{phone === "+251911998000" ? "+251 91 199 8000" : "+251 92 114 5252"}</a>)}</article>
          <article><span>Marketing, partnerships &amp; enquiries</span><h3>Next Level Marketing</h3>{eventContacts.nextLevel.map((phone) => <a href={phoneHref(phone)} key={phone}>{phone === "+251970437830" ? "+251 97 043 7830" : "+251 90 383 5464"}</a>)}</article>
        </div>
      </div>
    </section>

    <PageCta />
  </main><Footer /></>;
}
