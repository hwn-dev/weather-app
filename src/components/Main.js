import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <div className="main">
      <div className="control">
        <Button />
        <div className="cards">
          <div className="card-one">
            <h1>Manhattan, NY</h1>
            <h2>Max temp</h2>
            <h2>Min temp</h2>
          </div>
          <div className="card-two">
            <h1>Scooba, MS</h1>
            <h2>Max temp</h2>
            <h2>Min temp</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
