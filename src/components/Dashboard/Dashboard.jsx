import React from "react";
import BodyDisplay from "./BodyDisplay";
import StatCard from "./StatCard";
import "./Dashboard.css";
import { bodyStats } from "../../data/bodyStats";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <div className="dropdown">
          <button className="dropdown-toggle">
            This Week <span className="arrow">▾</span>
          </button>
          <ul className="dropdown-menu">
            <li>This Week</li>
            <li>Last Week</li>
            <li>This Month</li>
            <li>Custom Range</li>
          </ul>
        </div>
      </div>
      <div className="body-and-stats">
        <BodyDisplay />
        <div className="stat-cards">
          {bodyStats.map((item) => (
            <StatCard
              key={item.id}
              name={item.name}
              organ={item.organ}
              date={item.date}
              status={item.status}
            />
          ))}
          <button>
            Details
            <span> ▸</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
