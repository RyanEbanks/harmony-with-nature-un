import React, { useState } from 'react';
// import logo from '../images/hwni-logo.svg';
// import oceanlogo from '../images/1ocean-logo.svg';
import { Link } from 'react-router-dom';
import '../App.css'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuSelect = () => {
    setToggleMenu(!toggleMenu);
  }

  return (
    <div className='bg-cover bg-center h-[60vh]' style={{ backgroundImage: "url('/images/temp-bg.jpg')" }}>
      {/* Navbar SM Screens */}

      {/* Navbar LG Screens */}
      <div className='text-white flex flex-row flex-grow-[2]'>
        <div className='w-[300px] h-[200px] overflow-hidden'>
          <div className='absolute top-0 left-0 right-0 bottom-0 max-h-[60vh] bg-black bg-opacity-50 z-1'>
          <a href='https://1oceanfund.org/' target='_blank' rel='noopener noreferrer'>
          <img className='mt-[10px] h-[90px] w-[300px] bg-black/10 ml-[20px] py-1' alt='Affiliated Website Logo' src='/images/1ocean-logo.svg' />
          </a>
          <a href='/'>
          <img className='mt-[10px] h-[90px] w-[300px] bg-black/10 ml-[20px] py-1' alt='Main Website Logo' src='/images/hwni-logo.svg' />
          </a>
          </div>
        </div>
        <div className='flex flex-grow-[2] h-[100px] justify-end mt-[20px] z-[2] mr-[20px]'>
          <Link to='/'>
          <button className='text-white font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] bg-black/10 hover:bg-black/20 hover:text-white/90'>Home</button>
          </Link>
          <Link to='/about'>
          <button className='text-white font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] bg-black/10 hover:bg-black/20 hover:text-white/90'>About Us</button>
          </Link>
          <Link to='/rights-of-nature'>
          <button className='text-white font-[450] text-[16px] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] bg-black/10 hover:bg-black/20 hover:text-white/90 special-nav-font-size'>Rights Of Nature</button>
          </Link>
          <Link to='/timeline'>
          <button className='text-white font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] bg-black/10 hover:bg-black/20 hover:text-white/90'>Timeline</button>
          </Link>
          <Link to='/assemblies'>
          <button className='text-white font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] bg-black/10 hover:bg-black/20 hover:text-white/90'>Assemblies</button>
          </Link>
          <Link to='/news'>
          <button className='text-white font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] bg-black/10 hover:bg-black/20 hover:text-white/90'>News</button>
          </Link>
          <Link to='/library'>
          <button className='text-white font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] bg-black/10 hover:bg-black/20 hover:text-white/90'>Library</button>
          </Link>
          <Link to='/sponsors'>
          <button className='text-white font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] bg-black/10 hover:bg-black/20 hover:text-white/90'>Sponsors</button>
          </Link>
          <button className='text-white font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] mr-[20px] bg-[#F0910c] border-0 hover:bg-[rgba(240,145,12,0.5)] hover:text-[rgba(255,255,255,0.9)]'>
           <a href='https://buy.stripe.com/eVadU1ciQ01F5EIdQQ' target='_blank' rel='noopener noreferrer'>Donate</a>
            </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
