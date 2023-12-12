import React from "react";

import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import "./ProgressBar.scss";

const ProgressBar = (props) => {
  const { progress } = props;

  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 8,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "var(--background-grey)",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "var(--primary-color)",
    },
  }));

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <span className="progress-bar-text">Progreso</span>
        <BorderLinearProgress variant="determinate" value={progress} />
      </div>
    </div>
  );
};

export default ProgressBar;
