import type { Metadata } from "next";
import { Footer, Header, InnerHero, PageCta } from "../components/SiteChrome";
import { assetPath } from "../lib/asset-path";
import { CampaignPortfolio } from "../components/CampaignPortfolio";

export const metadata: Metadata = { title: "Selected Work", description: "Case studies spanning sports marketing, television, documentary production, and product distribution." };

const cases = [
  {
    id: "and1",
    tag: "International sports marketing · 2008 & 2010",
    title: "AND1 Ethiopia Tours",
    image: "/logos/and1.png",
    imageClass: "work-photo-logo work-photo-and1",
    proof: "2 international tours",
    summary: "Two separate assignments that required Next Level to translate a global streetball property into locally relevant, professionally delivered Ethiopian events.",
    context: "The opportunity went beyond advertising a visiting team. Each tour needed an audience, credible local partners, effective media attention, suitable venues, and a coordinated experience for both the international guests and Ethiopian basketball fans.",
    work: "Next Level worked directly with the AND1 team and managed the Ethiopian side of both visits. The scope brought together campaign planning, promotion, sponsor coordination, public communication, venue preparation, media activity, event operations, guest handling, and local logistics. The 2008 and 2010 visits were planned and delivered as separate campaigns, allowing the approach to respond to the needs of each tour.",
    outcome: "The two visits connected an internationally recognized basketball brand with local audiences while demonstrating Next Level’s ability to coordinate complex sports properties across communication, operations, partnerships, and live experience.",
    services: ["Campaign strategy", "Sponsorship", "Media relations", "Venue & logistics", "Event operations"],
  },
  {
    id: "ethio-ballers",
    tag: "Youth sports marketing · 10+ years",
    title: "Ethio Ballers Summer Camp",
    image: "/images/summer-camp.jpg",
    proof: "10+ year partnership",
    summary: "A long-running youth-sports platform built through consistent promotion, parent communication, venue partnerships, and annual event delivery.",
    context: "Summer camps must earn the confidence of parents while remaining exciting and relevant to students. The task has therefore been both promotional and operational: explain the value of the program, reach families at the right time, and support a dependable experience year after year.",
    work: "For more than a decade, Next Level has supported the organization and promotion of Ethio Ballers Summer Camp. Work has included audience outreach, campaign communication, event visibility, partner coordination, and the use of international-school venues. Those venue relationships gave the camps professional settings while also introducing participating schools to hundreds of families without relying on separate school-promotion campaigns.",
    outcome: "The partnership has developed into a durable annual platform. Across the wider summer-camp program, participation has averaged more than 500 students per year over the past five-plus years—evidence of sustained parent trust and strong market recognition.",
    services: ["Audience outreach", "Parent communications", "School partnerships", "Venue activation", "Event promotion"],
  },
  {
    id: "coach-carlos",
    tag: "Broadcast & production · Nahoo TV",
    title: "The Coach Carlos Show",
    image: "/images/coach-carlos-show.jpg",
    proof: "Culture on screen",
    summary: "An interview and culture platform designed to connect sport with the people, ideas, and achievements shaping Ethiopia.",
    context: "The program needed to feel broader than a conventional sports show. Its role was to create thoughtful public conversations while giving audiences access to respected athletes, artists, entrepreneurs, and cultural figures.",
    work: "Next Level supported program development, guest outreach, scheduling, interview preparation, location coordination, filming, and the communication surrounding each production. Nahoo TV served as broadcaster and production partner. Blue Birds Hotel supported the project as a sponsor and provided a venue for filming, helping the team create a consistent production environment.",
    outcome: "The resulting platform brought together prominent Ethiopian and international voices, including Haile Gebrselassie, Betty G, Girum Ermias, Ras Johnny, and many others. It also extended Next Level’s work from live promotion into recurring media production and relationship-led storytelling.",
    services: ["Program development", "Guest coordination", "Interview production", "Location management", "Broadcast partnership"],
  },
  {
    id: "documentary",
    tag: "Documentary & stakeholder communications · 2025",
    title: "20 Years of Excellence",
    image: "/images/us-embassy-documentary-meeting.jpg",
    imageClass: "work-photo-portrait",
    proof: "Recognition unlocked",
    summary: "A self-funded basketball documentary used not only as a film, but as a strategic communication tool for recognition, relationship-building, and future opportunity.",
    context: "Ethiopian basketball needed a clearer story for international stakeholders—one that could demonstrate the work already happening, make local potential visible, and begin more serious conversations about attention, scouting, and community support.",
    work: "Next Level led the communication, production, and deployment of the documentary and funded the project independently. After production, the team presented the film together with additional proposals and managed the follow-up communication around them. This turned the documentary from a finished media product into a practical stakeholder-engagement asset.",
    outcome: "The engagement led to an in-person meeting at the U.S. Embassy with Public Diplomacy Officer Ryan Brandon. The discussion brought recognition to the work and an expressed willingness to explore support for future charity-donation initiatives connected to the wider youth and basketball mission.",
    services: ["Documentary strategy", "Production", "Stakeholder materials", "Proposal presentation", "Diplomatic communication"],
  },
  {
    id: "anniversary",
    tag: "Press relations & event communications · 2025",
    title: "20th Anniversary Press Conference",
    image: "/images/next-level-hero-poster.jpg",
    proof: "Multi-partner event",
    summary: "A milestone event shaped into a credible media moment through coordinated messaging, partners, guests, venue delivery, and press-facing execution.",
    context: "The twentieth anniversary of the Coach Carlos Sports Enrichment Center called for more than a celebration. It was an opportunity to explain the history of the work, recognize the relationships behind it, and present the next chapter to media, partners, and invited stakeholders.",
    work: "Next Level organized the press conference from communication planning through on-site delivery. The team coordinated the event narrative, invitations, speakers, press engagement, guest flow, and production details. Tripolla Tours participated as a collaborating partner, while Metropolitan Real Estate supported the occasion as a sponsor.",
    outcome: "The event brought two decades of work into a focused public story and created a professional setting for partners, supporters, and media to engage with the organization’s history and future direction.",
    services: ["Press conference strategy", "Partner coordination", "Media invitations", "Guest management", "Event production"],
  },
  {
    id: "tasties",
    tag: "Product marketing & distribution",
    title: "Tasties Market Reach",
    image: "/images/ras-johnny-interview.jpg",
    proof: "4-city distribution",
    summary: "A field-led product-growth assignment where promotion and physical availability were managed together rather than treated as separate problems.",
    context: "Building a snack brand requires more than awareness. Consumers must repeatedly see the product, find it in the market, and associate it with a reliable, good-quality experience. Tasties therefore needed both active promotion and dependable distribution.",
    work: "Next Level served as a direct distributor for Tasties while also supporting market promotion and retail visibility. Distribution was concentrated in Addis Ababa and extended to Bahir Dar, Hawassa, and Jimma. Product presence was reinforced through consistent field activity and event-sponsorship opportunities that placed the snack in front of relevant audiences.",
    outcome: "The combined approach helped Tasties build sustained popularity and recognition. The product’s quality created repeat demand, while Next Level’s distribution and promotional consistency ensured that demand could be converted into real availability across four cities.",
    services: ["Direct distribution", "Retail visibility", "Field promotion", "Event sponsorship", "Regional market reach"],
  },
];

const categoryLenses = [
  { number: "01", title: "Partners", copy: "Institutions, sponsors, broadcasters, venues, and brands with whom we build long-term value.", examples: "U.S. Embassy · Ethiopian Diaspora Service · Nahoo TV" },
  { number: "02", title: "Sports marketing", copy: "Camps, tournaments, team travel, sponsorships, and live experiences that connect sport with community.", examples: "AND1 · Ethio Ballers · Lifan World Cup" },
  { number: "03", title: "ATL marketing", copy: "Television, documentary, broadcast, press, and digital media designed to create broad market awareness.", examples: "TV commercials · Documentary · Broadcast production" },
  { number: "04", title: "BTL marketing", copy: "Direct activations that put products and messages into schools, neighbourhoods, events, and retail environments.", examples: "Sampling · School activations · Door-to-door promotion" },
  { number: "05", title: "Advertising", copy: "Campaign-ready creative materials that carry a consistent message across physical and digital touchpoints.", examples: "Banners · Posters · Roll-up banners" },
];

export default function WorkPage() {
  return <><Header /><main>
    <InnerHero eyebrow="Selected work" title="Work that earns attention—and uses it well." intro="A selection of projects across sports, media, communications, events, and distribution." />
    <section className="section section-dark work-categories">
      <div className="shell">
        <div className="section-heading category-heading"><div><p className="eyebrow light">How to explore our work</p><h2>Five ways we move audiences.</h2></div><p>Many assignments cross more than one category. These lenses show the breadth of our role—from partnership and strategy to creative production and field execution.</p></div>
        <div className="category-lens-grid">{categoryLenses.map((category) => <article key={category.number}>
          <span>{category.number}</span><h3>{category.title}</h3><p>{category.copy}</p><small>{category.examples}</small>
        </article>)}</div>
        <a className="category-jump" href="#campaign-portfolio">Browse the categorized portfolio <span>↓</span></a>
      </div>
    </section>
    <section className="section shell work-list">{cases.map((item, index) => <article className="work-detail" id={item.id} key={item.id}><div className="work-number">0{index + 1}</div><div className={`work-photo ${item.imageClass ?? ""}`}><img src={assetPath(item.image)} alt={item.title} /><strong>{item.proof}</strong></div><div className="work-copy"><p className="eyebrow">{item.tag}</p><h2>{item.title}</h2><p className="work-summary">{item.summary}</p><div className="work-story"><section><h4>Context</h4><p>{item.context}</p></section><section><h4>Our work</h4><p>{item.work}</p></section><section><h4>Outcome</h4><p>{item.outcome}</p></section></div><div className="work-scope" aria-label={`${item.title} services`}><span>Scope</span><div>{item.services.map((service) => <b key={service}>{service}</b>)}</div></div></div></article>)}</section>
    <section className="section section-sand campaign-portfolio" id="campaign-portfolio">
      <div className="shell">
        <div className="section-heading campaign-portfolio-heading">
          <div><p className="eyebrow">Campaign portfolio</p><h2>More work.<br />More ways to move a market.</h2></div>
          <p>Additional projects from the Next Level archive, matched to the original campaign records and photographs.</p>
        </div>
        <CampaignPortfolio />
      </div>
    </section>
    <PageCta />
  </main><Footer /></>;
}
