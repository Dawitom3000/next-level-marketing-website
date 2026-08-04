export type ExperienceLogo = {
  name: string;
  src: string;
  sector: string;
  note: string;
  featured?: boolean;
};

export const experienceLogos: ExperienceLogo[] = [
  { name: "Coca-Cola", src: "/logos/coca-cola.svg", sector: "Beverage", note: "Brand experience", featured: true },
  { name: "Pepsi", src: "/logos/pepsi.svg", sector: "Beverage", note: "Brand experience", featured: true },
  { name: "Sprite", src: "/logos/sprite.svg", sector: "Beverage", note: "Brand experience", featured: true },
  { name: "Tasty Foods PLC", src: "/logos/tasty-foods.png", sector: "Food & snacks", note: "Distribution & marketing", featured: true },
  { name: "SUN Chips Ethiopia", src: "/logos/sun-chips-ethiopia.jpg", sector: "Food & snacks", note: "Local snack brand", featured: true },
  { name: "Cheetos", src: "/logos/cheetos.svg", sector: "Food & snacks", note: "Brand experience", featured: true },
  { name: "Lifan Motors", src: "/logos/lifan.svg", sector: "Automotive", note: "Launch promotion", featured: true },
  { name: "Commercial Bank of Ethiopia", src: "/logos/cbe.svg", sector: "Financial services", note: "Institutional experience", featured: true },
  { name: "Ethio Ballers", src: "/logos/ethio-ballers.jpg", sector: "Sports & youth", note: "Summer camp partner · 10+ years", featured: true },
  { name: "AND1", src: "/logos/and1.png", sector: "Sports", note: "Ethiopia tours · 2008 & 2010", featured: true },
  { name: "NBA", src: "/logos/nba.svg", sector: "Sports", note: "Documentary collaboration", featured: true },
  { name: "U.S. Embassy in Ethiopia", src: "/logos/us-state-department.svg", sector: "Institutional", note: "Diplomatic engagement", featured: true },
  { name: "Ethiopian Lottery Service", src: "/logos/ethiopian-lottery.png", sector: "Government", note: "Institutional experience", featured: true },
  { name: "Nahoo TV", src: "/logos/nahoo-tv.png", sector: "Media", note: "Broadcast & production partner", featured: true },
  { name: "Metropolitan Real Estate", src: "/logos/metropolitan.png", sector: "Real estate", note: "Event sponsor", featured: true },
  { name: "Tripolla Luxury Travel Co.", src: "/logos/tripolla.jpeg", sector: "Travel", note: "Event partner", featured: true },
];

export const awaitingArtwork = [
  "Ambo Mineral Water",
  "Ambo Flavoured Drink",
  "Kaldi’s Coffee",
  "Tasties snack",
  "Crunchips",
  "Enrich Foods PLC",
  "Enrich Cornflakes",
  "Mix Max Chips",
  "Al Hassan Food PLC",
  "Lolly Polly",
  "Kakakit",
  "Latar",
  "Becker Biscuits",
  "Dan Technology PLC",
  "Lucy Taxi",
  "Blue Birds Hotel",
  "Ethiopian Basketball Federation",
  "Coach Carlos Thornton Sports Enrichment Center",
  "Bina Addis Tour & Travel",
];
