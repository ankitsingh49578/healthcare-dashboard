import React from "react";
import "./Appointment.css";
import { appointments } from "../../data/appointments";
import SimpleAppointment from "./SimpleAppointment";

function Appointment() {
  return (
    <>
      <div className="all-appointments" style={{}}>
        {appointments.map((appointment) => (
          <SimpleAppointment
            key={appointment.id}
            type={appointment.type}
            icon={appointment.icon}
            time={appointment.time}
            doctorName={appointment.doctorName}
          />
        ))}
      </div>
    </>
  );
}

export default Appointment;
