import React, { useState } from 'react';
import './Calender.css';
import { weekData } from '../../data/calender';


const WeeklyCalendar = () => {
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>October 2021</h2>
        <div className="arrows">
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
      </div>
      <div className="calendar-grid">
        {weekData.map((day, idx) => (
          <div
            key={idx}
            className={`calendar-day ${day.disabled ? "disabled" : ""}`}
          >
            <div className="day-name">{day.day}</div>
            <div className="day-date">{day.date}</div>
            <div className="slots">
              {day.slots.map((slot, i) => (
                <button
                  key={i}
                  className={`slot-btn ${
                    day.selected === slot ? "selected" : ""
                  }`}
                  disabled={day.disabled}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;
