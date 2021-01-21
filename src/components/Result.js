import React from "react";

export default function Weather({
  place,
  country,
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
            <h1>
              {place} {country}
            </h1>
          </div>
          <div className="time">
            <h3>{time}</h3>
          </div>
        </div>
      </div>
      <div className="results-bottom">
        <div className="current-temp">
          <h3>{temperature}&deg;</h3>
          <h6>Current Temperature</h6>
        </div>
        <div className="feel-temp">
          <h3>{feel}&deg;</h3>
          <h6>Feels Like</h6>
        </div>
      </div>
    </div>
  );
}
