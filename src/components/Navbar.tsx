import React, { useState } from 'react';
import logo from '../images/logo-white.svg';
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
          <img className='nav-img' src={logo} />
        </div>
        <div className='nav-p-container'>
          <p className='nav-p'>Home</p>
          <p className='nav-p'>Chronology</p>
          <p className='nav-p'>Dialogues</p>
          <p className='nav-p'>Rights of Nature</p>
          <p className='nav-p'>Platform</p>
          <p className='nav-p'>Library</p>
          <p className='nav-p'>UN Docs</p>
          <p className='nav-p'>Gratitude</p>
        <button className='nav-btn btn'>Trust Fund</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
