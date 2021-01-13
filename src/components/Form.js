import React, { useState } from "react";

const Form = () => {
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState("");
  const [details, setDetails] = useState({});

  const api = {
    key: "4e48b51081eb15cffe3586dba85c9297",
    base: "http://api.weatherstack.com/current?access_key=",
  };

  function getWeather() {
    fetch(`${api.base}${api.key}&query=${location}`)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
      })
      .then(function (response) {
        setLocation(response.location.name);
        setCountry(response.location.country);
        setTemp(response.current.temperature);
      })
      .then(function (response) {
        setDetails({ location, country, temp });
        console.log(details);
      })
      .catch(err => {
        alert("Error: could not find city. Please try again");
      });
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
            className="search-form"
            type="text"
            name="search"
            placeholder="Search..."
            onChange={handleChange}
          ></input>
        </form>
      </div>
      <div className="cards">
        <h1>{details.location}</h1>
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
