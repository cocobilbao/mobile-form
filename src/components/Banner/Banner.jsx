import React from "react";

import "./Banner.scss";

const Banner = (props) => {
  const { showBanner } = props;
  return (
      <div className={showBanner ? "banner-content" : "hidden"}>
        <span className="banner-text">Oferta del mes</span>
        <span className="banner-title">Ahorra un 50%</span>
      </div>
  );
};

export default Banner;
