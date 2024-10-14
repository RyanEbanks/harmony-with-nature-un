import React, { useState } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import '../App.scss'

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const menuSelect = () => {
        setToggleMenu(!toggleMenu);
    }

  return (
    <div className="nav">
        {/* Navbar SM Screens */}

        {/* Navbar LG Screens */}
        <p>Logo</p>
        <p>Chronology</p>
        <p>Dialogues</p>
        <p>Rights of Nature</p>
        <p>Platform</p>
        <p>UN Docs</p>
        <p>Gratitude</p>
    </div>
  );
}

export default Navbar;
