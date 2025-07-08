import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <nav className='navbar'>
        <div className='logo'>
          <img src='loginpageparis.avif' alt="logo" />
          <span>GlobalTales</span>
        </div>

        <ul className='nav-links'>
          <li>Home</li>
          <li>About Us</li>
          <li>Destination</li>
          <li>Contact Us</li>
        </ul>

        <div className='signup-button'>Sign up</div>
      </nav>
    </div>
  )
}

export default Navbar

