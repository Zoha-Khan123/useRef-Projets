import React, { useEffect, useRef, useState } from "react";

const TakePreviousState = () => {
  const [counter, setCounter] = useState(0);
  const prevCounterRef = useRef();

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    prevCounterRef.current = counter;
  }, [counter]);
  return (
    <div>
      <h1>Take Counter Previous State</h1>
      <p>Counter Current State : {counter}</p>
      <p>Counter Previous State : {prevCounterRef.current}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default TakePreviousState;
