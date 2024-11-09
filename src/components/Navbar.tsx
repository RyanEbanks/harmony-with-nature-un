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
          <img className='nav-img' alt='Main Website Logo' src={oceanlogo} />
          <img className='nav-img-2' alt='Affiliated Website Logo' src={logo} />
          </div>
        </div>
        <div className='nav-p-container'>
          <Link to='/'>
          <button className='nav-btn'>Home</button>
          </Link>
          <Link to='/about'>
          <button className='nav-btn'>About Us</button>
          </Link>
          <button className='nav-btn special-nav-font-size'>Rights Of Nature</button>
          <Link to='/timeline'>
          <button className='nav-btn'>Timeline</button>
          </Link>
          <button className='nav-btn'>Assemblies</button>
          <button className='nav-btn'>News</button>
          <button className='nav-btn'>Library</button>
          <button className='nav-btn'>Sponsors</button>
          <button className='nav-donate'>Donate</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
