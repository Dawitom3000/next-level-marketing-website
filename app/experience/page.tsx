import { Footer, Header, InnerHero, PageCta } from "../components/SiteChrome";
import { LogoWall } from "../components/LogoWall";
import { awaitingArtwork, experienceLogos } from "../data/experience";

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <main>
        <InnerHero
          variant="experience"
          eyebrow="Clients, brands & collaborators"
          title="Organizations connected through real projects."
          intro="A verified selection of organizations and products connected to Next Level through campaigns, distribution, sponsorship, production, events, and institutional collaboration."
        />

        <section className="section shell logo-library">
          <div className="section-heading">
            <div><p className="eyebrow">Verified logo library</p><h2>Clients, partners, and collaborators.</h2></div>
            <p>Each mark is displayed in its original proportions. The nature and scope of every engagement varied by project.</p>
          </div>
          <LogoWall logos={experienceLogos} />
        </section>

        <section className="section section-sand artwork-section">
          <div className="shell artwork-grid">
            <div>
              <p className="eyebrow">Artwork being confirmed</p>
              <h2>More names from the Next Level record.</h2>
            </div>
            <div>
              <p className="artwork-intro">These organizations and products remain part of the company record. Their logos will be added after the exact identity or original master artwork is confirmed.</p>
              <div className="artwork-list">
                {awaitingArtwork.map((name) => <span key={name}>{name}</span>)}
              </div>
            </div>
          </div>
        </section>

        <PageCta />
      </main>
      <Footer />
    </>
  );
}
