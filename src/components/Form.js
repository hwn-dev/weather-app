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

  // function displayPlace() {
  //   let title;
  //   if (!location.name) {
  //     title = null;
  //   } else {
  //     title = <h1>{location.name}</h1>;
  //   }
  // }

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
            className="search-form"
            type="text"
            name="search"
            placeholder="Search..."
            onChange={handleChange}
          ></input>
        </form>
      </div>
      <div className="cards">
        <h1>{location.name}</h1>
        <h1 className="temp">{details.temperature}°</h1>
        <p className="metric">
          {`Feels Like ${details.feelslike}` || `You didn't choose a location`}
        </p>
      </div>
    </div>
  );
};

export default Form;
