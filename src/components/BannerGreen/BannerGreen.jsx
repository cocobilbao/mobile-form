import React from "react";

import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

import "./BannerGreen.scss";

const BannerGreen = () => {
  return (
    <>
      <div className="banner-green-content">
        <LightbulbOutlinedIcon sx={{ fontSize: 28 }} />
        <span className="banner-green-text">
          La puerta principal -el punto más vulnerable- tiene protección
          reforzada para detectar al intruso antes de que entre.
        </span>
      </div>
    </>
  );
};

export default BannerGreen;
