import React from "react";
import "./AccordionLayout.css";
import { AccordionStage, Gallery, art } from "../../components";
const AccordionLayout = () => {
  return (
    <section className="l-wrapper">
      <div className="l-container">
        <div className="leftSide">
          <Gallery />
          <img src={art} alt="art" className="box" />
        </div>
        <div className="rightSide">
          <AccordionStage />
        </div>
      </div>
    </section>
  );
};

export default AccordionLayout;
