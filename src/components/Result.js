import React from "react";

export default function Weather({
  place,
  temperature,
  desc,
  icon,
  time,
  feel,
}) {
  return (
    <div>
      <h1>{place}</h1>

      <h3>{desc}</h3>

      <h3>{temperature}</h3>
      {/*
        <img src={icon} alt="Weather icon"></img> */}

      <h3>{time}</h3>

      <h3>{feel}</h3>
    </div>
  );
}
