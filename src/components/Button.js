import React, { useState } from "react";

function Button() {
  const [count, setCount] = useState(4);
  function changeCount() {
    setCount(count - 1);
  }
  return (
    <button className="control-button" onClick={changeCount}>
      {count}
    </button>
  );
}

export default Button;
