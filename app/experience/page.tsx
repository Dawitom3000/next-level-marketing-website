import { pageMetadata } from "../lib/site";
import { Footer, Header, InnerHero, PageCta } from "../components/SiteChrome";
import { LogoWall } from "../components/LogoWall";
import { experienceLogos } from "../data/experience";

export const metadata = pageMetadata({ title: "Experience", description: "Clients, partners, and collaborators across Next Level’s marketing, production, sports, events, and distribution work.", path: "/experience" });

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <InnerHero
          variant="experience"
          eyebrow="Experience"
          title="Relationships built through the work."
          intro="Organizations we have worked with through campaigns, distribution, sponsorship, production, events, and institutional collaboration."
        />

        <section className="section shell logo-library">
          <div className="section-heading">
            <div><p className="eyebrow">Our network</p><h2>Clients, partners, and collaborators.</h2></div>
            <p>Our relationships span different roles, from distribution and event sponsorship to production and institutional partnerships.</p>
          </div>
          <LogoWall logos={experienceLogos} />
        </section>

        <PageCta />
      </main>
      <Footer />
    </>
  );
}
