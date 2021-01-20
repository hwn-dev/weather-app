import React, { useState } from "react";
import Result from "./Result";

const Form = () => {
  const [location, setLocation] = useState({});
  const [details, setDetails] = useState({});

  const api = {
    key: "4e48b51081eb15cffe3586dba85c9297",
    base: "http://api.weatherstack.com/current?access_key=",
  };

  async function getWeather() {
    try {
      const response = await fetch(
        `${api.base}${api.key}&query=${location}`,
      ).then(response => response.json());
      console.log({ response });
      setLocation(response.location);
      setDetails(response.current);
    } catch (err) {
      alert("Error: could not find city. Please try again");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    getWeather();
  }

  function handleChange(e) {
    e.preventDefault();
    setLocation(e.target.value);
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
          place={location.name}
          country={location.country}
          icon={details.weather_icons}
          temperature={details.temperature}
          desc={details.weather_descriptions}
          time={details.observation_time}
          feel={details.feelslike}
        />
      </div>
    </div>
  );
};

export default Form;
