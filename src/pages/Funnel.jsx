import React, { useState, useEffect } from "react";

import "./Funnel.scss";

import ProgressBar from "../components/ProgressBar/ProgressBar";
import Banner from "../components/Banner/Banner";
import RadioButtons from "../components/RadioButtons/RadioButtons";
import CheckBoxes from "../components/CheckBoxes/CheckBoxes";
import InputSave from "../components/InputSave/InputSave";

const Funnel = () => {
  const [selectedValue1, setSelectedValue1] = useState(null);
  const [selectedValue2, setSelectedValue2] = useState(null);

  const [progress, setProgress] = useState(20);

  useEffect(() => {
    setTimeout(() =>  setProgress(40), 2000);
  }, []);

  return (
    <div className="form-container">
      <ProgressBar progress={progress} />
      {
        <div className={progress <= 20 ? "fannel-content" : ""}>
          <Banner showBanner={progress <= 40} />
        </div>
      }
      {progress <= 60 && progress > 20 && (
        <RadioButtons
          selectedValue={selectedValue1}
          setSelectedValue={setSelectedValue1}
          setProgress={setProgress}
        />
      )}
      {progress >= 60 && (
        <CheckBoxes
          selectedValue={selectedValue2}
          setSelectedValue={setSelectedValue2}
          setProgress={setProgress}
          progress={progress}
        />
      )}
      {progress >= 80 && <InputSave />}
    </div>
  );
};

export default Funnel;
