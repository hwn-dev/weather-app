import React, { useState } from "react";

const Form = () => {
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setLocation(e.target.value);
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          className="search-form"
          type="text"
          name="search"
          autocorrect="off"
          value={location}
          placeholder="Search..."
          onChange={handleChange}
        ></input>
      </form>
      <div id="output">
        <h4>{location}</h4>
      </div>
    </div>
  );
};

export default Form;
