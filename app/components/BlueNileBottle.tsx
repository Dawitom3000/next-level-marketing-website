import { assetPath } from "../lib/asset-path";
import "./BlueNileBottle.css";

export function BlueNileBottle() {
  return (
    <figure className="bottle-showcase" aria-label="The Blue Nile Gin product presentation">
      <div className="bottle-showcase-space">
        <div className="bottle-suspension">
            <img
              className="bottle-suspension-image"
              src={assetPath("/images/projects/blue-nile-suspended-v2.webp")}
              alt="The Blue Nile London Dry Gin: patterned glass bottle with a wooden cap and blue and cream label, suspended in mid-air"
              width={1024}
              height={1536}
              fetchPriority="high"
              decoding="async"
              draggable={false}
            />
        </div>
      </div>
    </figure>
  );
}
