import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faBolt,
  faWind,
  faSun,
  faCloudSun,
  faCloudShowersHeavy,
  faCloudRain,
  faSnowflake,
  faMoon,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Weather({
  place,
  country,
  temperature,
  desc,
  time,
  feel,
}) {
  let weatherIcon = null;
  if (desc === "Clouds") {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  } else if (desc === "Clear") {
    weatherIcon = <FontAwesomeIcon icon={faSun} />;
  } else if (desc === "Thunderstorm") {
    weatherIcon = <FontAwesomeIcon icon={faBolt} />;
  } else if (desc === "Drizzle") {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (desc === "Rain") {
    weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (desc === "Snow") {
    weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (
    desc === "Haze" ||
    desc === "Mist" ||
    desc === "Smoke" ||
    desc === "Dust" ||
    desc === "Fog" ||
    desc === "Sand" ||
    desc === "Ash"
  ) {
    weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  } else if (desc === "Squall" || desc === "Tornado") {
    weatherIcon = <FontAwesomeIcon icon={faWind} />;
  } else {
    weatherIcon = null;
  }
  return (
    <div className="result-container">
      <div className="results-top">
        <div className="visual">
          <div className="icon">
            <span>{weatherIcon}</span>
            <span>
              <h3>{desc}</h3>
            </span>
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
