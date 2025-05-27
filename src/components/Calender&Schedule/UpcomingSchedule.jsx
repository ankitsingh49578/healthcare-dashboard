import React from "react";
import "./UpcomingSchedule.css";
import SimpleAppointment from "./SimpleAppointment";

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3 className="header">The Upcoming Schedule</h3>
      <p className="upcoming-day-header">On Thursday</p>
      <div className="thursday">
        <SimpleAppointment type="Complete health checkup" icon="💉" time="11:00 AM"/>
        <SimpleAppointment type="Ophthalmologist" icon="👁️" time="14:00 PM"/>
      </div>
      <p className="upcoming-day-header">On Saturday</p>
      <div className="saturday">
        <SimpleAppointment type="Cardiologist" icon="❤️" time="12:00 PM"/>
        <SimpleAppointment type="Neurologist" icon="🧑‍⚕️" time="16:00 PM"/>
      </div>
    </div>
  );
}

export default UpcomingSchedule;
