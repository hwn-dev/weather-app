import React, { useState } from "react";

function Button() {
  const [count, setCount] = useState(4);
  function changeCount() {
    console.log("plus 10");
    setCount(prevCount => prevCount + 10);
  }
  return (
    <button className="control-button" onClick={changeCount}>
      View Weather
    </button>
  );
}

export default Button;
