import React, { useState } from "react";

const Form = () => {
  const [location, setLocation] = useState("");

  const api = {
    key: "4e48b51081eb15cffe3586dba85c9297",
    base: "http://api.weatherstack.com/current?access_key=",
  };

  const labels = ["Max temp", "Min temp"];

  const degrees = ["&deg;"];

  function GetWeather() {
    fetch(`${api.base}${api.key}&query=${Form.location}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response.temperature);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    GetWeather();
  }

  function handleChange(e) {
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
            autoCorrect="off"
            value={location}
            placeholder="Search..."
            onChange={handleChange}
          ></input>
        </form>
      </div>
      <div className="cards">
        <h1>{location}</h1>
        <span className="temp">
          {}
          <span className="metric"></span>
          <p>placeholder</p>
        </span>
        <span className="temp">
          {}
          <span className="metric"></span>
          <p>placeholder</p>
        </span>
      </div>
    </div>
  );
};

export default Form;
