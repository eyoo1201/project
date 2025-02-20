import React, { useState, useEffect } from "react";
import "./hero.css";
import PIC from "/src/assets/pic.jpeg";

const Hero = () => {
  const texts = [
    "HELLO!",
    "I'M ",
    "LEO TULABING", // Now split into two
    "A Web Developer.",
    "I'm a passionate developer creating amazing things.",
  ];

  const [displayedTexts, setDisplayedTexts] = useState(["", "", "", "", ""]);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;

    const typeText = (index) => {
      if (index >= texts.length) {
        setIsTypingComplete(true); // All text has been typed, unhide the button
        return;
      }

      let currentTextIndex = 0;
      const interval = setInterval(() => {
        setDisplayedTexts((prev) => {
          const newDisplayed = [...prev];
          newDisplayed[index] = texts[index].slice(0, currentTextIndex + 1);
          return newDisplayed;
        });

        currentTextIndex++;
        if (currentTextIndex === texts[index].length) {
          clearInterval(interval);
          typeText(index + 1); // Start typing the next line
        }
      }, 50); // Typing speed per letter
    };

    typeText(0); // Start typing the first line
  }, []);

  return (
    <div className="hero-wrapper">
      <div className="hero-image-container">
        <img src={PIC} alt="Profile" className="hero-image" />
      </div>

      <div className="hero-container">
        {/* Navbar */}
        <nav className="navbar">
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#works">WORKS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>

        <div className="hero-text-container">
          <h1 style={{ minHeight: "1em" }}>{displayedTexts[0]}</h1>
          <h1 style={{ minHeight: "1em" }}>
            {displayedTexts[1]}
            <span style={{ color: "#f5f5dc" }}>{displayedTexts[2]}</span>
          </h1>

          <h3 style={{ color: "#f5f5dc" }}>{displayedTexts[3]}</h3>
          <h3 style={{ color: "#f5f5dc" }}>{displayedTexts[4]}</h3>
        </div>

        <div className="hero-button-container">
          {isTypingComplete && ( // Only show the button when typing is complete
            <button className="hire-me-button">Contact Me</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
