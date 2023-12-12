import React, { useState } from "react";

import Checkbox from "@mui/material/Checkbox";

import "./CheckBoxes.scss";

import BannerGreen from "../BannerGreen/BannerGreen";

const CheckBoxes = (props) => {
  const [options, setOptions] = useState(["1", "2", "3", "4"]);
  const [showBanner, setShowBanner] = useState(false);

  const { selectedValue, setSelectedValue, setProgress, progress } = props;

  const handleChange = (event) => {
    if (selectedValue && selectedValue.find((x) => x === event.target.value)) {
      const values = selectedValue.filter((x) => x !== event.target.value);
      setSelectedValue(values.length === 0 ? null : values);
    } else {
      const values = selectedValue
        ? [...selectedValue, event.target.value]
        : [event.target.value];
      setSelectedValue(values);
    }
  };

  const onClickConfirmHandler = () => {
    setShowBanner(true);
    setTimeout(() => {
      setOptions(selectedValue);
      setProgress(80);
    }, 3000);
  };

  return (
    <div className="checkboxes-buttons-content">
      <div className="titles-content">
        <span
          className={
            progress < 80 ? "questions-buttons-title" : "answered-title"
          }
        >
          Pregunta 2
        </span>
        {progress < 80 && (
          <span className="questions-buttons-subtitle">
            Puedes elegir varias opciones
          </span>
        )}
        <div>
          {options.map((item) => (
            <div className="questions-buttons" key={item}>
              <span className="questions-buttons-text">Opción {item}</span>
              <Checkbox
                id={item}
                disabled={progress >= 80}
                onChange={handleChange}
                value={item}
                name="questions-buttons"
              />
            </div>
          ))}
        </div>
      </div>
      {showBanner && <BannerGreen />}
      {progress < 80 && (
        <div className="confirm-button-content">
          <button
            type="button"
            disabled={!selectedValue}
            onClick={() => onClickConfirmHandler()}
            className={
              !selectedValue
                ? "confirm-button button-disabled"
                : "confirm-button button-active"
            }
          >
            Confirmar
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckBoxes;
