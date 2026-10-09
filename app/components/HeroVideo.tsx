"use client";

import { useEffect, useRef } from "react";
import { assetPath } from "../lib/asset-path";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = true;

    function syncPlayback() {
      if (!video) return;
      if (reducedMotion.matches || document.hidden || !inView) {
        video.pause();
      } else {
        void video.play().catch(() => {
          // Keep the poster when autoplay is unavailable or playback is interrupted.
        });
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncPlayback();
    });
    observer.observe(video);
    reducedMotion.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);
    syncPlayback();

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, []);

  return <div className="hero-media" aria-hidden="true">
      <video ref={videoRef} muted loop playsInline preload="metadata" poster={assetPath("/images/next-level-hero-poster.jpg")} tabIndex={-1}>
        <source src={assetPath("/videos/next-level-hero-reel.mp4")} type="video/mp4" />
      </video>
  </div>;
}
