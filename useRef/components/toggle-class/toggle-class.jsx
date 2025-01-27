import React, { useRef } from "react";
import "./toggle-class.css";

const ToggleClass = () => {
  const toggleDiv = useRef("null");

  const toggleClass = () => {
    toggleDiv.current.classList.toggle("highlight");
  };
  return (
    <div className="toggle-container">
      <h1>Toggle Class on a div</h1>
      <button onClick={toggleClass}>Toggle Div</button>
      <div ref={toggleDiv} className="togglebox">
        <h2>This is a div</h2>
      </div>
    </div>
  );
};

export default ToggleClass;
