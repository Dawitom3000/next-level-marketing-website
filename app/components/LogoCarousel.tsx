import type { ExperienceLogo } from "../data/experience";

function LogoGroup({ logos, duplicate = false, compact = false }: { logos: ExperienceLogo[]; duplicate?: boolean; compact?: boolean }) {
  return (
    <div className="logo-carousel-group" aria-hidden={duplicate || undefined}>
      {logos.map((logo) => (
        <article className={`logo-slide${logo.name === "AND1" ? " logo-slide--and1" : ""}`} key={`${duplicate ? "duplicate-" : ""}${logo.name}`}>
          <div className="logo-slide-artwork">
            <img src={logo.src} alt={duplicate ? "" : `${logo.name} logo`} />
          </div>
          {!compact && <div className="logo-slide-copy">
              <strong>{logo.name}</strong>
              <span>{logo.note}</span>
            </div>}
        </article>
      ))}
    </div>
  );
}

export function LogoCarousel({ logos, compact = false }: { logos: ExperienceLogo[]; compact?: boolean }) {
  return (
    <div className={`logo-carousel ${compact ? "logo-carousel-compact" : ""}`} aria-label="Companies, sponsors, and organizations we have worked with">
      <div className="logo-carousel-track">
        <LogoGroup logos={logos} compact={compact} />
        <LogoGroup logos={logos} duplicate compact={compact} />
      </div>
    </div>
  );
}
