import React from "react";

export default function Weather({
  place,
  temperature,
  desc,
  icon,
  time,
  feel,
}) {
  return (
    <div className="result-container">
      <div className="results-top">
        <div className="visual">
          <div className="icon">
            <img src={icon} alt="Weather icon" />
          </div>
          <div className="desc">
            <h3>{desc}</h3>
          </div>
        </div>
        <div className="location-info">
          <div className="place">
            <h1>{place}</h1>
          </div>
          <div className="time">
            <h3>{time}</h3>
          </div>
        </div>
      </div>
      <div className="results-bottom">
        <div className="current-temp">
          <h3>{temperature}</h3>
        </div>
        <div className="feel-temp">
          <h3>{feel}</h3>
        </div>
      </div>
    </div>
  );
}
