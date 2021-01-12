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
            <span className="temp">
              10<span className="metric">&#8451;</span>
              <p>Max temp</p>
            </span>
            <span className="temp">
              10<span className="metric">&#8451;</span>
              <p>Min temp</p>
            </span>
          </div>
          <div className="card-two">
            <h1>Scooba, MS</h1>
            <span className="temp">
              10<span className="metric">&#8451;</span>
              <p>Max temp</p>
            </span>
            <span className="temp">
              10<span className="metric">&#8451;</span>
              <p>Min temp</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
