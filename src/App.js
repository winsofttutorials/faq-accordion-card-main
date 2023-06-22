import React from "react";
import { AccordionLayout, Footer } from "./components";
import "./App.css";

const App = () => {
  return (
    <section className="a-wrapper">
      <div className="a-container">
        <AccordionLayout />
        <Footer />
      </div>
    </section>
  );
};

export default App;
