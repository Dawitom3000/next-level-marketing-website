import type { Metadata } from "next";
import { Footer, Header, InnerHero, PageCta } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Selected Work", description: "Case studies spanning sports marketing, television, documentary production, and product distribution." };

const cases = [
  { id: "and1", tag: "International sports marketing · 2008 & 2010", title: "AND1 Ethiopia Tours", image: "/images/summer-camp.jpg", challenge: "Bring a globally recognized streetball team to Ethiopian audiences and deliver a complete local event experience.", work: "Next Level worked directly with the AND1 team and handled the full Ethiopian execution: strategy, promotion, sponsorship, communications, media, venues, event operations, and logistics.", outcome: "Two successful Ethiopia visits that connected international basketball culture with local fans and strengthened Next Level’s sports-marketing credentials." },
  { id: "coach-carlos", tag: "Broadcast & production · Nahoo TV", title: "The Coach Carlos Show", image: "/images/coach-carlos-show.jpg", challenge: "Create a platform where sport, culture, achievement, and public conversation could meet.", work: "Next Level supported program development, guest coordination, interviews, production, location filming, and communications. Nahoo TV served as broadcaster and production partner, with Blue Birds Hotel as sponsor and filming venue.", outcome: "A distinctive interview platform featuring prominent voices including Haile Gebrselassie, Betty G, Girum Ermias, Ras Johnny, and other Ethiopian and international guests." },
  { id: "documentary", tag: "Documentary & stakeholder communications · 2025", title: "20 Years of Excellence", image: "/images/haile-interview.jpg", challenge: "Earn wider recognition for Ethiopian basketball and create a stronger foundation for international attention and community support.", work: "Next Level independently funded and produced the basketball documentary, then led communication and stakeholder engagement around the project.", outcome: "Recognition from NBA-related stakeholders and the U.S. Embassy in Ethiopia, followed by a meeting with Public Diplomacy Officer Ryan Brandon and openness to future charity-support initiatives." },
  { id: "tasties", tag: "Product marketing & distribution", title: "Tasties Market Reach", image: "/images/ras-johnny-interview.jpg", challenge: "Build awareness and reliable product reach for a popular Ethiopian snack.", work: "Next Level combined direct distribution with market promotion and retail visibility, operating mainly in Addis Ababa and extending into Bahir Dar, Hawassa, and Jimma.", outcome: "A sustained market presence supported by consistent field execution across four Ethiopian cities." },
];

export default function WorkPage() {
  return <><Header /><main>
    <InnerHero eyebrow="Selected work" title="Work that earns attention—and uses it well." intro="A selection of projects across sports, media, communications, events, and distribution." />
    <section className="section shell work-list">{cases.map((item, index) => <article className="work-detail" id={item.id} key={item.id}><div className="work-number">0{index + 1}</div><div className="work-photo"><img src={item.image} alt={item.title} /></div><div className="work-copy"><p className="eyebrow">{item.tag}</p><h2>{item.title}</h2><div><h4>Challenge</h4><p>{item.challenge}</p></div><div><h4>Our work</h4><p>{item.work}</p></div><div><h4>Outcome</h4><p>{item.outcome}</p></div></div></article>)}</section>
    <PageCta />
  </main><Footer /></>;
}
