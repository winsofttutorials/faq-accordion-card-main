import React from "react";
import "./Gallery.css";
import { artz } from "../../components";
const Gallery = () => {
  return (
    <section className="g-wrapper">
      <div className="g-container">
        <img src={artz} alt="art" className="womanArt" />
      </div>
    </section>
  );
};

export default Gallery;
