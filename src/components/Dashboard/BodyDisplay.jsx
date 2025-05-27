import React from "react";
import humanBody from "../../assets/BodyDisplay/human-body.png";
import "./BodyDisplay.css";
import { FiZoomIn } from "react-icons/fi";

function BodyDisplay() {
  return (
    <div className="body-container">
      <img src={humanBody} alt="" className="body-img" />
      <FiZoomIn className="zoom-btn" />
      <div className="label heart">❤️ Healthy Heart</div>
      <div className="label leg">🦿 Healthy Leg</div>
    </div>
  );
}

export default BodyDisplay;
