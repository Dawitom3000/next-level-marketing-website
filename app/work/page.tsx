import type { Metadata } from "next";
import { pageMetadata } from "../lib/site";
import { Footer, Header, InnerHero, PageCta } from "../components/SiteChrome";
import { assetPath } from "../lib/asset-path";
import { CampaignPortfolio } from "../components/CampaignPortfolio";

export const metadata: Metadata = pageMetadata({ title: "Selected Work", description: "Case studies spanning sports marketing, television, documentary production, and product distribution.", path: "/work" });

const cases = [
  {
    id: "and1",
    tag: "International sports marketing · 2008 & 2010",
    title: "AND1 Ethiopia Tours",
    image: "/logos/and1.png",
    imageClass: "work-photo-logo work-photo-and1",
    proof: "2 international tours",
    summary: "Promotion and event delivery for AND1’s two visits to Ethiopia in 2008 and 2010.",
    context: "Each tour needed local partners, media coverage, venues, and coordinated arrangements for the visiting team and Ethiopian basketball fans.",
    work: "Next Level worked directly with AND1, managing promotion, sponsors, media relations, venue preparation, guest arrangements, and local logistics. The two visits were planned and delivered as separate campaigns.",
    outcome: "Both tours brought AND1 to Ethiopian audiences through coordinated campaigns and live events.",
    services: ["Campaign strategy", "Sponsorship", "Media relations", "Venue & logistics", "Event operations"],
  },
  {
    id: "ethio-ballers",
    tag: "Youth sports marketing · 10+ years",
    title: "Ethio Ballers Summer Camp",
    image: "/images/summer-camp.jpg",
    proof: "10+ year partnership",
    summary: "More than a decade of promotion, parent communication, school partnerships, and annual camp delivery.",
    context: "The camp needed to reach families, explain its programme to parents, and provide a dependable experience for students each year.",
    work: "Next Level has supported camp organization and promotion for more than a decade, handling outreach, parent communication, partners, and international school venues. The venue partnerships also introduced the host schools to participating families.",
    outcome: "Across the wider summer camp programme, participation has averaged more than 500 students per year for over five years.",
    services: ["Audience outreach", "Parent communications", "School partnerships", "Venue activation", "Event promotion"],
  },
  {
    id: "coach-carlos",
    tag: "Broadcast & production · Nahoo TV",
    title: "The Coach Carlos Show",
    image: "/images/coach-carlos-show.jpg",
    proof: "Culture on screen",
    summary: "An interview programme featuring athletes, artists, entrepreneurs, and cultural figures.",
    context: "The show brought conversations about sport, culture, and achievement to a wider television audience.",
    work: "Next Level coordinated programme development, guests, interviews, locations, filming, and publicity. Nahoo TV was the broadcaster and production partner; Blue Birds Hotel sponsored the project and provided a filming venue.",
    outcome: "Guests included Haile Gebrselassie, Betty G, Girum Ermias, and Ras Johnny. The programme extended Next Level’s work into recurring television production.",
    services: ["Program development", "Guest coordination", "Interview production", "Location management", "Broadcast partnership"],
  },
  {
    id: "documentary",
    tag: "Documentary & stakeholder communications · 2025",
    title: "20 Years of Excellence",
    image: "/images/us-embassy-documentary-meeting.jpg",
    imageClass: "work-photo-portrait",
    proof: "U.S. Embassy meeting",
    summary: "An independently funded basketball documentary presented to international stakeholders alongside proposals for community support.",
    context: "The film documented Ethiopian basketball and youth development work for international stakeholders considering scouting and community support.",
    work: "Next Level independently funded and produced the documentary, presented it with additional proposals, and managed the subsequent stakeholder communication.",
    outcome: "The presentation led to a meeting at the U.S. Embassy with Public Diplomacy Officer Ryan Brandon and a discussion of possible support for future youth and basketball charity initiatives.",
    services: ["Documentary strategy", "Production", "Stakeholder materials", "Proposal presentation", "Diplomatic communication"],
  },
  {
    id: "anniversary",
    tag: "Press relations & event communications · 2025",
    title: "20th Anniversary Press Conference",
    image: "/images/next-level-hero-poster.jpg",
    proof: "20th anniversary",
    summary: "A press conference marking 20 years of the Coach Carlos Sports Enrichment Center.",
    context: "The anniversary brought the centre’s history and future plans to media, partners, and invited stakeholders.",
    work: "Next Level organized messaging, invitations, speakers, press engagement, guests, and production. Tripolla Tours collaborated on the event, with sponsorship from Metropolitan Real Estate.",
    outcome: "The press conference gave media and partners a shared setting to discuss the centre’s two decades of work and its next projects.",
    services: ["Press conference strategy", "Partner coordination", "Media invitations", "Guest management", "Event production"],
  },
  {
    id: "tasties",
    tag: "Product marketing & distribution",
    title: "Tasties Market Reach",
    image: "/images/campaigns/tasty-foods.jpeg",
    proof: "Distribution in 4 cities",
    summary: "Snack promotion and direct distribution across Addis Ababa, Bahir Dar, Hawassa, and Jimma.",
    context: "Tasties needed product promotion backed by consistent availability in shops and local markets.",
    work: "Next Level distributed Tasties in Addis Ababa, Bahir Dar, Hawassa, and Jimma, supported by retail promotion, field campaigns, and sports event sponsorship.",
    outcome: "Promotion and distribution supported product recognition and availability across four cities.",
    services: ["Direct distribution", "Retail visibility", "Field promotion", "Event sponsorship", "Regional market reach"],
  },
];

const categoryLenses = [
  { number: "01", title: "Partners", copy: "Institutions, sponsors, broadcasters, venues, and brands with whom we build lasting value.", examples: "U.S. Embassy · Ethiopian Diaspora Service · Nahoo TV" },
  { number: "02", title: "Sports marketing", copy: "Camps, tournaments, team travel, sponsorships, and live experiences that connect sport with community.", examples: "AND1 · Ethio Ballers · Lifan World Cup" },
  { number: "03", title: "ATL marketing", copy: "Television, documentary, broadcast, press, and digital media designed to create broad market awareness.", examples: "TV commercials · Documentary · Broadcast production" },
  { number: "04", title: "BTL marketing", copy: "Direct activations that put products and messages into schools, neighbourhoods, events, and retail environments.", examples: "Sampling · School activations · Door to door promotion" },
  { number: "05", title: "Advertising", copy: "Creative materials that carry a consistent campaign message across physical and digital channels.", examples: "Banners · Posters · Roll up banners" },
];

export default function WorkPage() {
  return <><Header /><main id="main-content" tabIndex={-1}>
    <InnerHero variant="work" eyebrow="Selected work" title="Campaigns delivered in the market." intro="Sports, media, communications, events, and product campaigns across Ethiopia and abroad." />
    <section className="section section-dark work-categories">
      <div className="shell">
        <div className="section-heading category-heading"><div><p className="eyebrow light">Our practice</p><h2>Five areas of experience.</h2></div><p>Many assignments cross more than one category. Our role can include partnership, strategy, creative production, and field execution.</p></div>
        <div className="category-lens-grid">{categoryLenses.map((category) => <article key={category.number}>
          <span>{category.number}</span><h3>{category.title}</h3><p>{category.copy}</p><small>{category.examples}</small>
        </article>)}</div>
        <a className="category-jump" href="#campaign-portfolio">Browse campaigns <span>↓</span></a>
      </div>
    </section>
    <section className="section shell work-list">{cases.map((item, index) => <article className="work-detail" id={item.id} key={item.id}><div className="work-number">0{index + 1}</div><div className={`work-photo ${item.imageClass ?? ""}`}><img src={assetPath(item.image)} alt={item.title} loading="lazy" decoding="async" /><strong>{item.proof}</strong></div><div className="work-copy"><p className="eyebrow">{item.tag}</p><h2>{item.title}</h2><p className="work-summary">{item.summary}</p><div className="work-story"><section><h4>Context</h4><p>{item.context}</p></section><section><h4>Our work</h4><p>{item.work}</p></section><section><h4>Outcome</h4><p>{item.outcome}</p></section></div><div className="work-scope" aria-label={`${item.title} services`}><span>Scope</span><div>{item.services.map((service) => <b key={service}>{service}</b>)}</div></div></div></article>)}</section>
    <section className="section section-sand campaign-portfolio" id="campaign-portfolio">
      <div className="shell">
        <div className="section-heading campaign-portfolio-heading">
          <div><p className="eyebrow">Campaign portfolio</p><h2>Campaigns across sectors and channels.</h2></div>
          <p>Product campaigns, school events, partnerships, and international team travel from our archive.</p>
        </div>
        <CampaignPortfolio />
      </div>
    </section>
    <PageCta />
  </main><Footer /></>;
}
