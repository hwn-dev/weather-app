import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <div className="main">
      <div className="control">
        <Button />
        <div className="cards">
          <div id="card-one">
            <h1>Manhattan, NY</h1>
          </div>
          <div id="card-two">
            <h1>Scooba, MS</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
