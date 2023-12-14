import React, { useState, useEffect } from "react";

import "./BannerGreen.scss";

const BannerGreen = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowBanner(true), 1000);
  }, []);

  return (
    <div className="banner-green-content">
      <div className="banner-green-square">
        <img src="Vector_2.png" alt="lightbulb" className="yellow-lightbulb"/>
        <img src="Vector.png" alt="lightbulb"  style={{position: "absolute"}} />
        <span className="banner-green-text">
          La puerta principal -el punto más vulnerable- tiene protección
          reforzada para detectar al intruso antes de que entre.
        </span>
      </div>
    </div>
  );
};

export default BannerGreen;
