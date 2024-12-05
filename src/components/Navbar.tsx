import React, { useState } from 'react';
// import logo from '../images/hwni-logo.svg';
// import oceanlogo from '../images/1ocean-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import '../App.css'
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react"
// import Modal from './Modal';

function Navbar() {

  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuSelect = () => {
    setToggleMenu(!toggleMenu);
  }

  const menuVariants = {
    hidden: { x: '100%' }, // Slide off the screen to the right
    visible: { x: 0 }, // Slide into view
    exit: { x: '100%' }, // Slide out to the right
  };
  //Creating Routes where the image should appear
  const routesWithBackground = ['/', '/about', '/news', 'library', '/sponsors', '/donate'];
  const showBackground = routesWithBackground.includes(location.pathname);

  return (
    <div>
      {/* Navbar SM Screens */}
      <div className='lg:hidden'>

        <div className='flex flex-row w-full'>
          <div className='flex flex-row w-[30%]'>
            <a href='https://1oceanfund.org/' target='_blank' rel='noopener noreferrer'>
              <img className='h-[70px] w-[80px] ml-[20px] py-1' alt='Affiliated Website Logo' src='/images/1ocean-logo.svg' />
            </a>
          </div>
          <div className='flex flex-row w-[40%]'>
            <a href='/'>
              <img className=' h-[70px] w-[130px] ml-[20px] py-1' alt='Main Website Logo' src='/images/hwni-logo.svg' />
            </a>
          </div>
          <div className='flex w-[30%] my-auto justify-center'>
            <button onClick={menuSelect}>
              <CiMenuBurger size={24} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              className='absolute top-0 right-0 h-screen w-full z-10 bg-white text-2xl shadow-lg'
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ type: 'tween', duration: 0.4 }}
            >
              <button onClick={menuSelect} className='ml-4 mt-4'>
                <MdClose size={24} />
              </button>
              <ul className='flex flex-col text-center mt-10 mx-auto'>
                <Link to='/'>
                  <button className='my-4' onClick={menuSelect}>Home</button>
                </Link>
                <Link to='/about'>
                  <button className='my-4' onClick={menuSelect}>About</button>
                </Link>
                <Link to='/rights-of-nature'>
                  <button className='my-4' onClick={menuSelect}>Rights of Nature</button>
                </Link>
                <Link to='/timeline'>
                  <button className='my-4' onClick={menuSelect}>Timeline</button>
                </Link>
                <Link to='/assemblies'>
                  <button className='my-4' onClick={menuSelect}>Assemblies</button>
                </Link>
                <Link to='/news'>
                  <button className='my-4' onClick={menuSelect}>News</button>
                </Link>
                <Link to='/library'>
                  <button className='my-4' onClick={menuSelect}>Library</button>
                </Link>
                <Link to='/sponsors'>
                  <button className='my-4' onClick={menuSelect}>Sponsors</button>
                </Link>
                <Link to='/donate'>
                  <button className='my-4' onClick={menuSelect}>Donate</button>
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Navbar LG Screens */}
      {showBackground ? (
        <div>
          <div className='bg-cover bg-center h-[30vh] lg:h-[60vh]' style={{ backgroundImage: "url('/images/new-bg.svg')" }}>
          <div className='lg-nav-parent'>
              {/* <div className='absolute top-[90px] left-0 right-0 bottom-0 max-h-[60vh] bg-black bg-opacity-10 z-1'></div> */}
            <div className='lg-nav-content-container'>
              <div className='lg-nav-img-container'>
                <a href='/'>
                  <img className='h-[75px] w-[300px] my-2' alt='Main Website Logo' src='/images/hwni-logo.svg' />
                </a>
              </div>
              <div className='lg-nav-content'>
              <Link to='/'>
                <button className='lg-nav-link'>Home</button>
              </Link>
              <Link to='/about'>
                <button className='lg-nav-link'>About Us</button>
              </Link>
              <Link to='/rights-of-nature'>
                <button className='lg-nav-link'>Rights Of Nature</button>
              </Link>
              <Link to='/timeline'>
                <button className='lg-nav-link'>Timeline</button>
              </Link>
              <Link to='/assemblies'>
                <button className='lg-nav-link'>Assemblies</button>
              </Link>
              <Link to='/news'>
                <button className='lg-nav-link'>News</button>
              </Link>
              <Link to='/library'>
                <button className='lg-nav-link'>Library</button>
              </Link>
              <Link to='/sponsors'>
                <button className='lg-nav-link'>Sponsors</button>
              </Link>
              <Link to='/donate'>
                <button className='btn-primary font-normal text-[1.1rem] h-[50px] w-[100px] mr-[20px]'>Donate
                  {/* <a href='https://buy.stripe.com/eVadU1ciQ01F5EIdQQ' target='_blank' rel='noopener noreferrer'>Donate</a> */}
                </button>
              </Link>
              </div>   
            </div>
          </div>
          </div>
          {/* <Modal /> */}
        </div>
      ) : (
        <div>
          <div className='lg-nav-parent'>
              {/* <div className='absolute top-20 left-0 right-0 bottom-0 max-h-[60vh] bg-black bg-opacity-50 z-1'></div> */}
            <div className='lg-nav-content-container'>
              <div className='lg-nav-img-container'>
                <a href='/'>
                  <img className='lg-nav-img' alt='Main Website Logo' src='/images/hwni-logo.svg' />
                </a>
              </div>
              <div className='lg-nav-content'>
              <Link to='/'>
                <button className='lg-nav-link'>Home</button>
              </Link>
              <Link to='/about'>
                <button className='lg-nav-link'>About Us</button>
              </Link>
              <Link to='/rights-of-nature'>
                <button className='lg-nav-link'>Rights Of Nature</button>
              </Link>
              <Link to='/timeline'>
                <button className='lg-nav-link'>Timeline</button>
              </Link>
              <Link to='/assemblies'>
                <button className='lg-nav-link'>Assemblies</button>
              </Link>
              <Link to='/news'>
                <button className='lg-nav-link'>News</button>
              </Link>
              <Link to='/library'>
                <button className='lg-nav-link'>Library</button>
              </Link>
              <Link to='/sponsors'>
                <button className='lg-nav-link'>Sponsors</button>
              </Link>
              <Link to='/donate'>
                <button className='btn-primary font-normal text-[1.1rem] h-[50px] w-[100px] mr-[20px]'>Donate
                  {/* <a href='https://buy.stripe.com/eVadU1ciQ01F5EIdQQ' target='_blank' rel='noopener noreferrer'>Donate</a> */}
                </button>
              </Link>
              </div>   
            </div>
          </div>
          {/* <Modal /> */}
          {/* <div className='bg-cover bg-center h-[30vh] lg:h-[60vh]' style={{ backgroundImage: "url('/images/temp-bg.jpg')" }}></div> */}
        </div>
      )}
    </div>
  );
}

export default Navbar;
