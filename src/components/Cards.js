import React, { useState } from "react";
import Form from "./Form";

const api = {
  key: "4e48b51081eb15cffe3586dba85c9297",
  base: "http://api.weatherstack.com/current?access_key=",
};

const labels = ["Max temp", "Min temp"];

const degrees = ["&deg;"];

function Cards() {
  function GetWeather() {
    fetch(`${api.base}${api.key}&query=${Form.location}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response.current.temperature);
      });
  }

  return (
    <div className="cards">
      <h1>Scooba, MS</h1>
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
  );
}

export default Cards;
