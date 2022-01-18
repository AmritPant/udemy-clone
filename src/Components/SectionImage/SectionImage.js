import React from "react";
import "./SectionImage.scss";

import { HERO__IMG } from "../../Helpers/config";

function SectionImage() {
  return (
    <div className="section-image">
      <div className="section-image__text-box">
        <h2 className="heading-secondary">Learning that gets you</h2>
        <p className="section-image__para">
          Skills for your present (and your future). Get
          <span> started with us.</span>
        </p>
      </div>
      <img src={HERO__IMG} alt="Main Img" className="section-image__img" />
    </div>
  );
}

export default SectionImage;
