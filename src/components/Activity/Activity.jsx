import React from "react";
import "./Activity.css";
import {data} from '../../data/activityData'

function Activity() {

  return (
    <div className="activity-container">
      <div className="header">
        <b>Activity</b>
        <p>3 appointment of this week</p>
      </div>
      <div className="chart">
        {data.map((item, index) => (
          <div className="day" key={index}>
            {item.bars.map((height, idx) => {
              const colorClass =
                idx === 0 ? "gray" : idx === 1 ? "cyan" : "purple";
              return (
                <div
                  className={`bar ${colorClass}`}
                  key={idx}
                  style={{ height: `${height}px` }}
                ></div>
              );
            })}
            <span>{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity;
