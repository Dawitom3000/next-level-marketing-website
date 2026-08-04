"use client";

import { useCallback, useEffect, useRef, useState } from "react";

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
];

export function CampaignGallery() {
  const railRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const centerSlide = useCallback((index: number) => {
    const rail = railRef.current;
    const slide = rail?.children[index] as HTMLElement | undefined;
    if (!rail || !slide) return;
    const left = slide.offsetLeft - (rail.clientWidth - slide.clientWidth) / 2;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    rail.scrollTo({ left, behavior: reduceMotion ? "auto" : "smooth" });
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let frame = 0;

    const updateActiveSlide = () => {
      const center = rail.scrollLeft + rail.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;
      Array.from(rail.children).forEach((child, index) => {
        const slide = child as HTMLElement;
        const distance = Math.abs(slide.offsetLeft + slide.clientWidth / 2 - center);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      setActiveIndex(closestIndex);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSlide);
    };

    updateActiveSlide();
    rail.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      rail.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  function move(direction: number) {
    centerSlide(Math.max(0, Math.min(galleryPhotos.length - 1, activeIndex + direction)));
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
          const distance = Math.abs(index - activeIndex);
          const position = index === activeIndex ? "is-active" : index < activeIndex ? "is-before" : "is-after";
          return <figure className={`gallery-slide ${position}${distance === 1 ? " is-adjacent" : " is-distant"}`} aria-current={index === activeIndex ? "true" : undefined} key={photo.src}>
            <div className="gallery-image"><img src={photo.src} alt={photo.alt} loading="lazy" /></div>
            <figcaption><span>{String(index + 1).padStart(2, "0")} / {String(galleryPhotos.length).padStart(2, "0")}</span><strong>{photo.label}</strong></figcaption>
          </figure>;
        })}
      </div>
    </div>
  );
}
