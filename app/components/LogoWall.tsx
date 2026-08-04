import type { ExperienceLogo } from "../data/experience";

export function LogoWall({ logos }: { logos: ExperienceLogo[] }) {
  return (
    <div className="logo-wall" aria-label="Verified brand and organization logos">
      {logos.map((logo) => (
        <article className="logo-card" key={logo.name}>
          <div className="logo-artwork">
            <img src={logo.src} alt={`${logo.name} logo`} loading="lazy" />
          </div>
          <div className="logo-card-copy">
            <strong>{logo.name}</strong>
            <span>{logo.sector} · {logo.note}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
