import React, { useState, useEffect } from "react";
import "./hero.css";
import OIP from "/src/assets/OIP.jpeg";

const Hero = () => {
  const texts = [
    "Hi, I'm Leo Tulabing",
    "A Web Developer.",
    "I'm a passionate developer creating amazing things."
  ];

  const [displayedTexts, setDisplayedTexts] = useState(["", "", ""]);
  const [isTypingComplete, setIsTypingComplete] = useState(false); // State to track typing completion

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
      <div className="hero-container">
        <div className="hero-text-container">
          <h1 style={{ minHeight: "1em" }}>{displayedTexts[0]}</h1>
          <h2 style={{ minHeight: "1em" }}>{displayedTexts[1]}</h2>
          <h2 style={{ minHeight: "1em" }}>{displayedTexts[2]}</h2>
        </div>
        <div className="hero-button-container">
          {isTypingComplete && ( // Only show the button when typing is complete
            <button className="hire-me-button">Hire Me</button>
          )}
        </div>
      </div>

      <div className="hero-image-container">
        <img src={OIP} alt="Profile" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;