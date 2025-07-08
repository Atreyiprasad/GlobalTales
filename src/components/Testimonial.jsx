import React from "react";
import "./Testimonials.css";


const testimonials = [
  {
    name: "Kim Seokjin",
    title: "Traveler Enthusiast",
    image: "people.avif",
    feedback:
      "This platform is very helpful because there are many beautiful destinations here and this platform really helps me in finding beautiful destinations and also very good services so I really like to use Traver when I want to go travelling with my family.",
    rating: 5,
  },
  {
    name: "Jungkook",
    title: "Traveler Enthusiast",
    image: "user.avif",
    feedback:
      "This platform is very helpful because there are many beautiful destinations here and this platform really helps me in finding beautiful destinations and also very good services so I really like to use Traver when I want to go travelling with my family.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-header">
        <h2>What Our Customers Say About Us</h2>
        <div className="arrows">
          <button className="arrow-btn black">&#8592;</button>
          <button className="arrow-btn green">&#8594;</button>
        </div>
      </div>

      <div className="testimonial-cards">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">
              {"★".repeat(t.rating)}
            </div>
            <p className="testimonial-text">“{t.feedback}”</p>
            <div className="customer">
              <img src={t.image} alt={t.name} />
              <div>
                <h4>{t.name}</h4>
                <span>{t.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;


