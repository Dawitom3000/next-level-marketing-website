export type CurrentProject = {
  id: string;
  series: string;
  title: string;
  date: string;
  dateShort: string;
  venue: string;
  location: string;
  poster: string;
  summary: string;
  description: string;
  highlights: string[];
  audiences: string;
  registration?: string;
};

const projectRecords: CurrentProject[] = [
  {
    id: "puagume",
    series: "Back to Your Origin · Community Festival",
    title: "Puagume Festival 2026",
    date: "September 8 & 10, 2026",
    dateShort: "SEP 08 & 10",
    venue: "African Union Headquarters",
    location: "Addis Ababa, Ethiopia",
    poster: "/images/events/puagume-festival-2026.webp",
    summary: "A two-day festival programme combining basketball, culture, youth participation, family activities, and local vendors.",
    description: "The Puagume Festival was scheduled as the opening programme in the 2026 partnership series at the African Union Headquarters. Its planned activities brought sport and culture together for young people, diaspora families, schools, local businesses, partners, and the wider public.",
    highlights: ["Basketball tournaments", "Music", "Food", "Local products & vendors", "Fashion show", "Cultural exchange"],
    audiences: "Youth players, families, schools, diaspora communities, local vendors, institutions, and invited partners.",
  },
  {
    id: "meskel",
    series: "Back to Your Origin · 2026 Partnership Series",
    title: "Meskel 2026",
    date: "September 26, 2026",
    dateShort: "SEP 26",
    venue: "Adwa Victory Memorial Museum",
    location: "Addis Ababa, Ethiopia",
    poster: "/images/events/meskel-back-to-your-origin-2026.webp",
    summary: "A youth basketball and cultural programme planned for the Adwa Victory Memorial Museum.",
    description: "The Meskel edition was planned to connect youth basketball with heritage, community participation, and the Back to Your Origin programme, bringing schools, diaspora families, institutions, sponsors, and young athletes together around a shared Ethiopian experience.",
    highlights: ["Youth basketball", "Diaspora gathering", "Cultural connection", "School participation", "Partner visibility"],
    audiences: "Young athletes, parents, international schools, diaspora families, cultural partners, sponsors, and the public.",
  },
  {
    id: "irreecha",
    series: "Back to Your Origin · 2026 Partnership Series",
    title: "Irreecha 2026",
    date: "October 3, 2026",
    dateShort: "OCT 03",
    venue: "Cambridge Academy · Summit",
    location: "Addis Ababa, Ethiopia",
    poster: "/images/events/irreecha-back-to-your-origin-2026.webp",
    summary: "A basketball and Oromo cultural programme planned for Cambridge Academy’s Summit campus.",
    description: "The Irreecha edition was planned as the closing programme in the local three-event series, with basketball, youth participation, and an introduction to the meaning, people, and traditions surrounding Irreecha.",
    highlights: ["Boys & girls basketball", "Irreecha cultural programme", "Youth mentorship", "Diaspora participation", "Community gathering"],
    audiences: "Youth teams, parents, the Oromo community, diaspora visitors, schools, cultural organizations, and partners.",
  },
  {
    id: "dubai",
    series: "International Youth Basketball",
    title: "World Squad Youth Cup · Dubai 2026",
    date: "December 18–22, 2026",
    dateShort: "DEC 18–22",
    venue: "Jebel Ali International School",
    location: "Dubai, United Arab Emirates",
    poster: "/images/events/world-squad-youth-cup-dubai-2026.webp",
    summary: "A five-day youth basketball event featuring teams from more than 18 countries.",
    description: "Next Level Marketing + Communications is presenting the Ethiopian recruitment programme for the World Squad Youth Cup in collaboration with Ethio Ballers and event partner Cambridge Academy. The project gives Ethiopian schools, academies, teams, and players a structured route into international competition.",
    highlights: ["5 competition days", "18+ countries", "Boys & girls", "U14 · U16 · U19", "4+ guaranteed games", "Semifinals & finals", "Full-board options"],
    audiences: "Players, teams, schools, academies, coaches, parents, sponsors, and international basketball partners.",
    registration: "Ethiopia registration for teams, players, schools, and academies opens October 22 and closes October 30, 2026.",
  },
];

export const recentProjects = projectRecords.slice(0, 3);
export const upcomingProjects = projectRecords.slice(3);

export const eventContacts = {
  ethioBallers: ["+251911998000", "+251921145252"],
  nextLevel: ["+251970437830", "+251903835464"],
} as const;
