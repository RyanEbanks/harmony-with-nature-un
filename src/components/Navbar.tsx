import React, { useState } from 'react';
import logo from '../images/hwni-logo.svg';
import oceanlogo from '../images/1ocean-logo.svg';
import { Link } from 'react-router-dom';
import '../App.scss'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuSelect = () => {
    setToggleMenu(!toggleMenu);
  }

  return (
    <div className='nav'>
      {/* Navbar SM Screens */}

      {/* Navbar LG Screens */}
      <div className='nav-lg'>
        <div className='nav-img-container'>
          <div className='overlay'>
          <img className='nav-img' alt='Main Website Logo' src={logo} />
          <img className='nav-img-2' alt='Affiliated Website Logo' src={oceanlogo} />
          </div>
        </div>
        <div className='nav-p-container'>
          <button className='nav-btn'>Home</button>
          <button className='nav-btn'>ROF</button>
          <button className='nav-btn'>Timeline</button>
          <button className='nav-btn'>NEA</button>
          <button className='nav-btn'>Library</button>
          <button className='nav-btn'>Sponsors</button>
          <button className='nav-donate'>Donate</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
