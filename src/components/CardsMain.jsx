import React from 'react';
import './CardsMain.css';
import { FaPlaneDeparture, FaMapMarkedAlt, FaClipboardList } from 'react-icons/fa';

const CardsMain = () => {
  return (
    <div className='CardsMain'>
      <div className="value-cards-container">

        <div className="value-card">
          <FaPlaneDeparture className="icon" />
          <h3>Look for Flights</h3>
          <p>Discover some of the most unique and fulfilling experiences your next destination has to offer. Providing the best.</p>
        </div>

        <div className="value-card">
          <FaMapMarkedAlt className="icon" />
          <h3>Explore Popular Destination</h3>
          <p>Discover some of the most unique and fulfilling experiences your next destination has to offer. Providing the best.</p>
        </div>

        <div className="value-card">
          <FaClipboardList className="icon" />
          <h3>Plan Your Trip</h3>
          <p>Discover some of the most unique and fulfilling experiences your next destination has to offer. Providing the best.</p>
        </div>

      </div>
    </div>
  );
};

export default CardsMain;
