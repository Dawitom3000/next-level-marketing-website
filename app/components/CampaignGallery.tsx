"use client";

import { useRef } from "react";
import { assetPath } from "../lib/asset-path";

const galleryPhotos = [
  { src: "/images/haile-production-behind-scenes.jpg", alt: "Coach Carlos coordinating an office interview production", label: "Behind the production" },
  { src: "/images/betty-g-conversation.jpg", alt: "Coach Carlos in conversation with singer and songwriter Betty G", label: "The Coach Carlos Show" },
  { src: "/images/betty-g-team.jpg", alt: "Betty G pictured with members of the event team", label: "Guests and community" },
  { src: "/images/media-interview.jpg", alt: "Coach Carlos conducting a media interview", label: "Media interviews" },
  { src: "/images/culture-conversation.jpg", alt: "Coach Carlos hosting a cultural conversation", label: "Culture in conversation" },
  { src: "/images/stakeholder-relationship.jpg", alt: "Haile Gebrselassie meeting an invited guest", label: "Stakeholder relationships" },
  { src: "/images/coach-carlos-broadcast.jpg", alt: "Coach Carlos speaking during a broadcast segment", label: "On location" },
  { src: "/images/haile-production-team.jpg", alt: "Production team preparing an interview with Haile Gebrselassie", label: "Production coordination" },
  { src: "/images/founder-office-archive.jpg", alt: "Coach Carlos seated in his office with basketball trophies and project records", label: "The journey behind the work" },
  { src: "/images/basketball-award-presentation.jpg", alt: "Coach Carlos presenting an award during a basketball event", label: "Recognizing performance" },
  { src: "/images/sports-press-conference.jpg", alt: "Coach Carlos speaking alongside colleagues during a sports press conference", label: "Press and communications" },
  { src: "/images/tripolla-global-dinner-conversation.jpg", alt: "Coach Carlos in conversation with guests during a Tripolla event", label: "Partner conversations" },
  { src: "/images/tripolla-global-dinner-portrait.jpg", alt: "Coach Carlos pictured with a guest at a Tripolla event", label: "International relationships" },
  { src: "/images/campaigns/diaspora-service-partnership.jpeg", alt: "Partnership agreement with the Ethiopian Diaspora Service", label: "Diaspora Service partnership" },
  { src: "/images/campaigns/international-sports-travel.jpeg", alt: "Ethiopian youth basketball team during international travel", label: "International team travel" },
  { src: "/images/campaigns/us-embassy-pro-camp.jpeg", alt: "Coaches and organizers at the 2025 Pro Camp", label: "U.S. Embassy Pro Camp" },
  { src: "/images/campaigns/lifan-world-cup.jpeg", alt: "Football tournament activity at the Lifan World Cup", label: "Lifan World Cup" },
  { src: "/images/campaigns/mix-max-chips.jpeg", alt: "Coach Carlos promoting Mix Max Chips through basketball", label: "Mix Max Chips campaign" },
  { src: "/images/campaigns/international-school-events.jpeg", alt: "Trophies and medals prepared for an international school tournament", label: "International school events" },
  { src: "/images/campaigns/addis-chicken.jpeg", alt: "Addis Chicken Processing PLC campaign artwork", label: "Addis Chicken production" },
  { src: "/images/campaigns/tasty-foods.jpeg", alt: "Coach Carlos speaking during a Tasty Foods sports campaign", label: "Tasty Foods campaign" },
  { src: "/images/campaigns/mineral-water-btl.jpeg", alt: "Ambo campaign artwork from the school activation album", label: "Mineral water BTL activation" },
  { src: "/images/campaigns/ballers-gear.jpeg", alt: "Ballers Gear merchandise displayed during the ground campaign", label: "Ballers Gear activation" },
  { src: "/images/campaigns/sofi-malt.jpeg", alt: "Sofi Malt Basketball League campaign poster", label: "Sofi Malt launch events" },
  { src: "/images/campaigns/kakit.jpeg", alt: "Katakit brand artwork used in its digital campaign", label: "Katakit digital campaign" },
  { src: "/images/campaigns/dada-juice.jpeg", alt: "Dada Juice basketball market campaign artwork", label: "Dada Juice expansion" },
  { src: "/images/campaigns/amico.jpeg", alt: "Amico MuuMoo product promotion artwork", label: "Amico product campaign" },
];

export function CampaignGallery() {
  const railRef = useRef<HTMLDivElement>(null);

  function move(direction: number) {
    const rail = railRef.current;
    if (!rail) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    rail.scrollBy({
      left: direction * Math.min(rail.clientWidth * 0.82, 920),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <div className="campaign-gallery">
      <div className="gallery-controls">
        <span>Swipe or use the controls</span>
        <div>
          <button type="button" onClick={() => move(-1)} aria-label="View previous photographs">←</button>
          <button type="button" onClick={() => move(1)} aria-label="View next photographs">→</button>
        </div>
      </div>
      <div className="gallery-rail" ref={railRef} tabIndex={0} aria-label="Next Level campaign and production photographs">
        {galleryPhotos.map((photo, index) => {
          return <figure className="gallery-slide" key={photo.src}>
            <div className="gallery-image"><img src={assetPath(photo.src)} alt={photo.alt} loading={index < 2 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} /></div>
            <figcaption><span>{String(index + 1).padStart(2, "0")} / {String(galleryPhotos.length).padStart(2, "0")}</span><strong>{photo.label}</strong></figcaption>
          </figure>;
        })}
      </div>
    </div>
  );
}
