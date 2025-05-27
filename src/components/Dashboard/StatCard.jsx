import React from "react";
import "./StatCard.css";

function StatCard({ name, organ, date, status }) {
  const color = status > 90 ? "green" : status > 60 ? "orange" : "red";
  return (
    <div className="stat-container">
      <div className="header">
        <img src={organ} alt={`${organ}.png`} />
        <b>{name}</b>
      </div>
      <span className="date">{date}</span>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ backgroundColor: color, width: `${status}%` }}
        ></div>
      </div>
    </div>
  );
}

export default StatCard;
