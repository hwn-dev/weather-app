import React from "react";
import Form from "./Form";
import Cards from "./Cards";

const Main = () => {
  return (
    <div className="main">
      <div className="control">
        <Form />
        <Cards />
      </div>
    </div>
  );
};

export default Main;
