import React from "react";
import "./ModernHomesLanding.css";

const DestinationCard = ({ title, imageUrl }) => {
  return (
    <div className="destination-card">
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default DestinationCard;

