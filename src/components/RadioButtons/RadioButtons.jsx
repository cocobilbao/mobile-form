import React, { useState } from "react";

import Radio from "@mui/material/Radio";

import "./RadioButtons.scss";

import BannerGreen from "../BannerGreen/BannerGreen";

const RadioButtons = (props) => {
  const [options, setOptions] = useState(["1", "2", "3"]);

  const { selectedValue, setSelectedValue, setProgress } = props;

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setTimeout(() => {
      setOptions([event.target.value]);
      setProgress(60);
    }, 3000);
  };

  return (
    <div className={options.length === 1 ? "questions-buttons-content answered-shadow" : "questions-buttons-content"}>
      <span
        className={options.length === 1 ? "answered-title" : "questions-buttons-title"}
      >
        Pregunta 1
      </span>
      <div>
        {options.map((item) => (
          <div className="questions-buttons" key={item}>
            <span className="questions-buttons-text">Opción {item}</span>
            <Radio
              checked={selectedValue === item}
              disabled={!!selectedValue}
              onChange={handleChange}
              value={item}
              name="questions-buttons"
            />
          </div>
        ))}
      </div>
      {selectedValue && <BannerGreen />}
    </div>
  );
};

export default RadioButtons;
