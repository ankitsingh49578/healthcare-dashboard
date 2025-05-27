import React from "react";
import "./SimpleAppointment.css";

function SimpleAppointment({ type, icon, time, doctorName }) {
  return (
    <div>
      <div
        className="appointment-card"
        style={{
          backgroundColor: time < "10:00" ? "#3339A6" : "#D8DEF2",
          color: time < "10:00" ? "#fff" : "#000",
        }}
      >
        <div className="type">
          <span>{type}</span>
          <span className="icon">{icon}</span>
        </div>
        <p className="time">{time}</p>
        {doctorName && (
          <p className="doctor-name">{doctorName}</p>
        )}
      </div>
    </div>
  );
}

export default SimpleAppointment;
