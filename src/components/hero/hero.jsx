// Hero.js
import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      

      <div className="hero-container">
        <div className="hero-text-container">
          <h1>Hi, I'm Leo Tulabing</h1>
          <h2>A Web Developer.</h2>
          <h2>I'm a passionate developer creating amazing things.</h2>
        </div>
        <div className="hero-button-container">
          <button className="hire-me-button">Hire Me</button>
        </div>
      </div>

      <div className="hero-image-container">
        <img src="/OIP.jpeg" alt="Profile" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
