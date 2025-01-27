import React, { useRef } from "react";
import "./scroll-section.css";

const ScrollSection = () => {
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);

  //   scroll to section
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  //   scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //when this button is clicked it moves to that section
  const sectionOneButton = () => {
    scrollToSection(sectionOneRef);
  };

  const sectionTwoButton = () => {
    scrollToSection(sectionTwoRef);
  };

  const sectionThreeButton = () => {
    scrollToSection(sectionThreeRef);
  };
  return (
    <div className="parent-section">
      {/* <h1>ScrollSection</h1> */}
      <div className="scroll-buttons">
        <button onClick={sectionOneButton}>Section 01</button>
        <button onClick={sectionTwoButton}>Section 02</button>
        <button onClick={sectionThreeButton}>Section 03</button>
      </div>

      <div ref={sectionOneRef} className="section">
        <h1>Section 01</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
          aspernatur!
        </p>
      </div>

      <div ref={sectionTwoRef} className="section">
        <h1>Section 02</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
          aspernatur!
        </p>
      </div>

      <div ref={sectionThreeRef} className="section">
        <h1>Section 03</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
          aspernatur!
        </p>
      </div>
      <button onClick={() => scrollToTop()}>Scroll to Top</button>
    </div>
  );
};

export default ScrollSection;
