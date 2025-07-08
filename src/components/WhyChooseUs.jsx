import React from "react";
import "./WhyChooseUs.css";

const reasons = [
  {
    number: "01",
    title: "We provide the best choice for you",
    text: "We always prioritize customer comfort and satisfaction. That's why we only accept the best hotels.",
  },
  {
    number: "02",
    title: "Low price with best quality",
    text: "Although the price tends to be cheaper, it will not affect the quality of service, so don’t worry.",
  },
  {
    number: "03",
    title: "Can refund up to 100%",
    text: "Don’t worry if suddenly you have a problem and want to do a refund. With T.Tripd you can get a full refund.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="choose-us-container">
      {/* Left: Heading and text */}
      <div className="choose-us-left">
        <h2>Why should you choose us</h2>
        <p>Choose us for unforgettable travel experiences tailored to you style and budget. We offer top rated stays, seamless bookings, best prices, and 24/7 support to make every journey truly effortless.</p>
      </div>

      {/* Right: Auto-scrolling boxes */}
      <div className="choose-us-right">
        <div className="scroll-box">
          {reasons.map((item, index) => (
            <div className="scroll-item" key={index}>
              <div className="scroll-item-header">
                <div className="scroll-item-number">{item.number}</div>
                <div className="scroll-item-title">{item.title}</div>
              </div>
              <div className="scroll-item-text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
