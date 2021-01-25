import React, { useState, useEffect } from "react";
import Result from "./Result";

const Form = () => {
  const [location, setLocation] = useState({});
  const [details, setDetails] = useState({});

  const owmApi = {
    owmKey: process.env.REACT_APP_APIKEY,
    owmBase: "https://api.openweathermap.org/data/2.5/weather?q=",
  };

  // OPENWEATHERMAP API CALL
  async function getWeather() {
    try {
      let apiResponse;
      const response = await fetch(
        `${owmApi.owmBase}${location}&appid=${owmApi.owmKey}&units=metric`,
      ).then(response => response.json());
      // console.log({ response });
      apiResponse = {
        city: response.name,
        country: response.sys.country,
        temp: Math.round(response.main.temp),
        maxTemp: Math.round(response.main.temp_max),
        minTemp: Math.round(response.main.temp_min),
        feelsLike: Math.round(response.main.feels_like),
        humidity: Math.round(response.main.humidity),
        description: response.weather[0].main,
        windSpeed: response.wind.speed,
        windDirection: response.wind.deg,
        sunrise: new Intl.DateTimeFormat("en-GB", {
          timeStyle: "short",
        }).format(response.sys.sunrise * 1000),
        sunset: new Intl.DateTimeFormat("en-GB", {
          timeStyle: "short",
        }).format(response.sys.sunset * 1000),
      };
      setDetails(apiResponse);
      console.log(details);
    } catch (err) {
      alert(err);
    }
  }

  function handleChange(e) {
    e.preventDefault();
    setLocation(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getWeather();
  }

  return (
    <div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            className="search-form"
            type="text"
            name="search"
            placeholder="Search..."
            onChange={handleChange}
          ></input>
        </form>
      </div>
      <div className="cards">
        <Result
          place={details.city}
          country={details.country}
          // icon={details.weather[0].icon}
          temperature={details.temp}
          desc={details.description}
          feel={details.feelsLike}
        />
      </div>
    </div>
  );
};

export default Form;
