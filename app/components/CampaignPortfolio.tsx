"use client";

import { useMemo, useState } from "react";
import { campaignProjects, type CampaignCategory } from "../data/campaigns";
import { assetPath } from "../lib/asset-path";

const filters: { id: "all" | CampaignCategory; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "partners", label: "Partners" },
  { id: "sports", label: "Sports marketing" },
  { id: "atl", label: "ATL marketing" },
  { id: "btl", label: "BTL marketing" },
  { id: "advertising", label: "Advertising" },
];

export function CampaignPortfolio() {
  const [active, setActive] = useState<(typeof filters)[number]["id"]>("all");
  const visibleProjects = useMemo(
    () => active === "all" ? campaignProjects : campaignProjects.filter((project) => project.categories.includes(active)),
    [active],
  );

  return <>
    <div className="portfolio-filter" aria-label="Filter campaign portfolio by category">
      {filters.map((filter) => {
        const category = filter.id === "all" ? null : filter.id;
        const count = category === null ? campaignProjects.length : campaignProjects.filter((project) => project.categories.includes(category)).length;
        return <button type="button" key={filter.id} aria-pressed={active === filter.id} onClick={() => setActive(filter.id)}>
          <span>{filter.label}</span><b>{String(count).padStart(2, "0")}</b>
        </button>;
      })}
    </div>
    <p className="portfolio-result" aria-live="polite">Showing {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}</p>
    <div className="campaign-project-grid">
      {visibleProjects.map((project) => {
        const originalIndex = campaignProjects.findIndex((item) => item.id === project.id);
        return <article className="campaign-project-card" id={project.id} key={project.id}>
          <div className={`campaign-project-image ${project.imageFit === "contain" ? "is-contain" : ""}`}>
            <img src={assetPath(project.image)} alt={project.title} loading="lazy" />
            <span>{String(originalIndex + 1).padStart(2, "0")}</span>
          </div>
          <div className="campaign-project-copy">
            <p className="eyebrow">{project.tag}</p>
            <h3>{project.title}</h3>
            <p className="campaign-project-summary">{project.summary}</p>
            <p>{project.detail}</p>
            <div className="campaign-project-services">{project.services.map((service) => <b key={service}>{service}</b>)}</div>
          </div>
        </article>;
      })}
    </div>
  </>;
}
