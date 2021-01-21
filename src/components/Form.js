import React, { useState } from "react";
import Result from "./Result";

const Form = () => {
  const [location, setLocation] = useState({});
  const [details, setDetails] = useState({});

  const wsApi = {
    wsKey: "4e48b51081eb15cffe3586dba85c9297",
    wsBase: "http://api.weatherstack.com/current?access_key=",
  };

  const owmApi = {
    owmkey: "d183d3f17b1271cf5a25030167a7e4e2",
    owmBase: "https://api.openweathermap.org/data/2.5/weather?q=",
  };

  // OPENWEATHERMAP API CALL
  // async function getWeather() {
  //   try {
  //     const response = await fetch(
  //       `${owmApi.owmBase}${location}&appid=${owmApi.owmKey}&units=metric`,
  //       ).then(response => response.json());
  //       console.log({ response });
  //       setDetails(response);
  //     } catch (err) {
  //       alert("Error: could not find city. Please try again");
  //     }
  //   }

  // WEATHERSTACK API CALL
  async function getWeather() {
    try {
      const response = await fetch(
        `${wsApi.wsBase}${wsApi.wsKey}&query=${location}`,
      ).then(response => response.json());
      console.log({ response });
      setLocation(response.location);
      setDetails(response.current);
    } catch (err) {
      alert("Error: could not find city. Please try again");
    }
  }

  function getDesc() {
    const weatherDescription = details.weather_descriptions[0];
    let array;
    if (weatherDescription.includes(",")) {
      array = weatherDescription.split(",");
      console.log(array[0]);
    } else {
      console.log(weatherDescription);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    getWeather();
    getDesc();
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
        // OPENWEATHERMAP
        // place={details.name}
        // country={details.sys.country}
        // icon={details.weather[0].icon}
        // temperature={details.main.temp}
        // desc={details.weather[0].description}
        // feel={details.main.feels_like}

        // WEATHERSTACK
        // place={location.name}
        // country={}
        // icon={}
        // temperature={}
        // desc={}
        // time={}
        // feel={}
        />
      </div>
    </div>
  );
};

export default Form;
