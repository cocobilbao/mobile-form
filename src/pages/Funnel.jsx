import React, { useEffect, useState } from "react";

import ProgressBar from "../components/ProgressBar";
import Banner from "../components/Banner";
import RadioButtons from "../components/RadioButtons";

const Funnel = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [showBanner, setShowBanner] = useState(true);
  const [progress, setProgress] = useState(30);

  useEffect(() => {
    if (selectedValue) {
      setInterval(() => {setShowBanner(false); setProgress(40)}, 3000);
    }
  }, [selectedValue]);

  return (
    <div className="form-container">
      <ProgressBar progress={progress} />
      <Banner showBanner={showBanner} />
      <RadioButtons
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
    </div>
  );
};

export default Funnel;
