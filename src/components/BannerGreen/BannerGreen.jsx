import React, { useState, useEffect } from "react";

import "./BannerGreen.scss";

const BannerGreen = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowBanner(true), 1000);
  }, []);

  return (
    <div className="banner-green-content">
      <div
        className={
          showBanner
            ? "banner-green-square banner-green-rectangle"
            : "banner-green-square"
        }
      >
        <img src="Vector.png" />
        <span className={showBanner ? "banner-green-text hidden" : "hidden"}>
          La puerta principal -el punto más vulnerable- tiene protección
          reforzada para detectar al intruso antes de que entre.
        </span>
      </div>
    </div>
  );
};

export default BannerGreen;
