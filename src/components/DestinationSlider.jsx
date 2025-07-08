import React, { useRef } from 'react';
import './DestinationSlider.css';

const destinations = [
  { name: "Paris", image: "paris.avif", price: "$4500", link: "/destinations/paris" },
  { name: "Australia", image: "austrilia.avif", price: "$3200", link: "/destinations/australia" },
  { name: "Bali", image: "bali1.avif", price: "$3000", link: "/destinations/bali" },
  { name: "Barcelona", image: "barcelona.avif", price: "$4200", link: "/destinations/barcelona" },
  { name: "New Delhi", image: "newdelhi.avif", price: "$2900", link: "/destinations/newdelhi" },
  { name: "Seoul", image: "seoul.avif", price: "$4500", link: "/destinations/seoul" }
];

const DestinationSlider = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'right' ? 300 : -300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="slider-container">
      <button className="scroll-button left" onClick={() => scroll('left')}>&larr;</button>
      <div className="scroll-wrapper" ref={scrollRef}>
        {destinations.map((place, index) => (
          <a
            key={index}
            className="destination-card"
            href={place.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-wrapper">
              <img src={place.image} alt={place.name} />
              <span className="price-tag">{place.price}</span>
            </div>
            <p className="destination-title">Enjoy The Beauty of {place.name}</p>
          </a>
        ))}
      </div>
      <button className="scroll-button right" onClick={() => scroll('right')}>&rarr;</button>
    </div>
  );
};

export default DestinationSlider;
