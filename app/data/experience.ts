import { assetPath } from "../lib/asset-path";

export type ExperienceLogo = {
  name: string;
  src: string;
  sector: string;
  note: string;
  alt?: string;
  featured?: boolean;
};

export const experienceLogos: ExperienceLogo[] = [
  { name: "Coca-Cola", src: assetPath("/logos/coca-cola.svg"), sector: "Beverage", note: "Brand experience", featured: true },
  { name: "Pepsi", src: assetPath("/logos/pepsi.svg"), sector: "Beverage", note: "Brand experience", featured: true },
  { name: "Sprite", src: assetPath("/logos/sprite.svg"), sector: "Beverage", note: "Brand experience", featured: true },
  { name: "Tasty Foods PLC", src: assetPath("/logos/tasty-foods.png"), sector: "Food & snacks", note: "Distribution & marketing", featured: true },
  { name: "SUN Chips Ethiopia", src: assetPath("/logos/sun-chips-ethiopia.jpg"), sector: "Food & snacks", note: "Local snack brand", featured: true },
  { name: "Cheetos", src: assetPath("/logos/cheetos.svg"), sector: "Food & snacks", note: "Brand experience", featured: true },
  { name: "Lifan Motors", src: assetPath("/logos/lifan.svg"), sector: "Automotive", note: "Launch promotion", featured: true },
  { name: "Commercial Bank of Ethiopia", src: assetPath("/logos/cbe.svg"), sector: "Financial services", note: "Institutional experience", featured: true },
  { name: "Ethio Ballers", src: assetPath("/logos/ethio-ballers.jpg"), sector: "Sports & youth", note: "Summer camp partner · 10+ years", featured: true },
  { name: "AND1", src: assetPath("/logos/and1.png"), sector: "Sports", note: "Ethiopia tours · 2008 & 2010", featured: true },
  { name: "NBA", src: assetPath("/logos/nba.svg"), sector: "Sports", note: "Documentary collaboration", featured: true },
  { name: "U.S. Embassy in Ethiopia", src: assetPath("/logos/us-state-department.svg"), sector: "Institutional", note: "Diplomatic engagement", featured: true },
  { name: "Ethiopian Lottery Service", src: assetPath("/logos/ethiopian-lottery.png"), sector: "Government", note: "Institutional experience", featured: true },
  { name: "Nahoo TV", src: assetPath("/logos/nahoo-tv.png"), sector: "Media", note: "Broadcast & production partner", featured: true },
  { name: "Metropolitan Real Estate", src: assetPath("/logos/metropolitan.png"), sector: "Real estate", note: "Event sponsor", featured: true },
  { name: "Tripolla Luxury Travel Co.", src: assetPath("/logos/tripolla.jpeg"), sector: "Travel", note: "Event partner", featured: true },
  { name: "Ethiopian Diaspora Service", src: assetPath("/logos/ethiopian-diaspora-service.png"), sector: "Government", note: "Two-year partnership", alt: "FDRE Ministry of Foreign Affairs — Ethiopian Diaspora Service logo", featured: true },
];
