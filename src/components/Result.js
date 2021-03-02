import React from "react";
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
  faSmog,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import Date from "./Date";

export default function Weather({
  place,
  country,
  temperature,
  feelsLike,
  maxTemp,
  minTemp,
  windSpeed,
  windDirection,
  sunRise,
  sunSet,
  desc,
  timezone,
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
          </div>
          <div className="desc">
            <h3>{desc}</h3>
          </div>
        </div>
        <div className="location-info">
          <div className="place">
            <h1>
              {place}, {country}
            </h1>
          </div>
          <div className="today">
            <h3>
              <Date timezone={timezone} />
            </h3>
          </div>
        </div>
      </div>
      <div className="results-bottom">
        <div className="temperatures">
          <div>
            <h3>{temperature}&deg;</h3>
            <h6>Current Temperature</h6>
          </div>
          <div>
            <h3>{feelsLike}&deg;</h3>
            <h6>Feels Like</h6>
          </div>
          <div>
            <h3>{maxTemp}&deg;</h3>
            <h6>Max Temperature</h6>
          </div>
          <div>
            <h3>{minTemp}&deg;</h3>
            <h6>Min Temperature</h6>
          </div>
        </div>
        <div className="wind">
          <div className="wind-speed">
            <h3>
              {windSpeed}
              <span>mps</span>
            </h3>
            <h6>Wind Speed</h6>
          </div>
          <div className="wind-direction">
            <h3>
              <FontAwesomeIcon icon={faChevronCircleUp} />
              {windDirection}&deg;
            </h3>
            <h6>Wind Direction</h6>
          </div>
        </div>
        <div className="sun-times">
          <div className="sun-rise">
            <h3>{sunRise}</h3>
            <h6>Sun Rise</h6>
          </div>
          <div className="sun-set">
            <h3>{sunSet}</h3>
            <h6>Sun Set</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
