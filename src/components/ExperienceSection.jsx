import React from "react";
import "./ExperienceSection.css";
 // Replace with your own image or import path

const ExperienceSection = () => {
  return (
    <div className="experience-section">
      {/* Left - Image */}
      <div className="experience-image">
        <img src="people.avif" alt="Traveler" />
      </div>

      {/* Right - Text */}
      <div className="experience-text">
        <h1>With Our Experience We Will Serve You</h1>
        <p>
          We have been moving excellent encounters for a considerable length of time
          through our cutting-edge planned occasion bundles and other fundatrations.
        </p>
        <button>Explore More</button>
      </div>
    </div>
  );
};

export default ExperienceSection;
