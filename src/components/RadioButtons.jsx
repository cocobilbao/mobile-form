import React, { useState } from "react";

import Radio from "@mui/material/Radio";

import BannerGreen from "./BannerGreen";

const RadioButtons = (props) => {
  const [options, setOptions] = useState(["1", "2", "3"]);

  const { selectedValue, setSelectedValue } = props;

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setInterval(() => setOptions([event.target.value]), 3000);
  };

  return (
    <div className="radio-buttons-content">
      <span className="radio-buttons-title">Pregunta 1</span>
      <div>
        {options.map((item) => (
          <div className="radio-buttons" key={item}>
            <span className="radio-buttons-text">Opción {item}</span>
            <Radio
              checked={selectedValue === item}
              onChange={handleChange}
              value={item}
              name="radio-buttons"
            />
          </div>
        ))}
      </div>
      {selectedValue && <BannerGreen />}
    </div>
  );
};

export default RadioButtons;
