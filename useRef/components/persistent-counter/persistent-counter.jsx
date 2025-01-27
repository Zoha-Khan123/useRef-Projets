import React, { useRef } from "react";

const PersistentCounter = () => {
  const counterRef = useRef(0);
  const counterDisplayRef = useRef(null);

  const incrementCounter = () => {
    counterRef.current += 1;

    if (counterDisplayRef.current) {
      counterDisplayRef.current.innerText = `Counter ${counterRef.current}`;
    }
    console.log(counterRef.current);
  };

  return (
    <div>
      <h1>PersistentCounter</h1>
      <button onClick={incrementCounter}>Increment Counter</button>
      <h5 ref={counterDisplayRef}>Counter : {counterRef.current}</h5>
    </div>
  );
};

export default PersistentCounter;
