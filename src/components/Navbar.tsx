import React, { useState } from 'react';
// import logo from '../images/hwni-logo.svg';
// import oceanlogo from '../images/1ocean-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import '../App.css'
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react"

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
            <div className='flex flex-row w-[60%]'>
              <a href='https://1oceanfund.org/' target='_blank' rel='noopener noreferrer'>
                <img className='mt-[10px] h-[70px] w-[80px] ml-[20px] py-1' alt='Affiliated Website Logo' src='/images/1ocean-logo.svg' />
              </a>
              <a href='/'>
                <img className='mt-[10px] h-[70px] w-[130px] ml-[20px] py-1' alt='Main Website Logo' src='/images/hwni-logo.svg' />
              </a>
            </div>
            <div className='flex w-[40%] my-auto justify-center'>
              <button onClick={menuSelect}>
                <CiMenuBurger size={24} />
              </button>
            </div>
          </div>

        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              className='absolute top-0 right-0 h-screen w-3/4 z-10 bg-white text-2xl shadow-lg'
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
        <div className='bg-cover bg-center h-[30vh] lg:h-[60vh]' style={{ backgroundImage: "url('/images/temp-bg.jpg')" }}>
          <div className='hidden lg:text-white lg:flex lg:flex-row lg:flex-grow-[2]'>
            <div className='w-[300px] h-[200px] overflow-hidden'>
              <div className='absolute top-0 left-0 right-0 bottom-0 max-h-[60vh] bg-black bg-opacity-50 z-1'>
                <div className='flex flex-row'>
                <a href='https://1oceanfund.org/' target='_blank' rel='noopener noreferrer'>
                  <img className='mt-[10px] h-[90px] w-[300px] ml-[20px] py-1 px-2' alt='Affiliated Website Logo' src='/images/1ocean-logo.svg' />
                </a>
                <a href='/'>
                  <img className='mt-[10px] h-[90px] w-[300px] ml-[20px] py-1 px-2' alt='Main Website Logo' src='/images/hwni-logo.svg' />
                </a>
                </div>
              </div>
            </div>
            <div className='flex flex-grow-[2] h-[100px] justify-end mt-[20px] z-[2] mr-[20px]'>
              <Link to='/'>
                <button className='text-white font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] hover:underline underline-offset-8'>Home</button>
              </Link>
              <Link to='/about'>
                <button className='text-white font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] hover:underline underline-offset-8'>About Us</button>
              </Link>
              <Link to='/rights-of-nature'>
                <button className='text-white font-[450] text-[16px] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] hover:underline underline-offset-8 special-nav-font-size'>Rights Of Nature</button>
              </Link>
              <Link to='/timeline'>
                <button className='text-white font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] hover:underline underline-offset-8'>Timeline</button>
              </Link>
              <Link to='/assemblies'>
                <button className='text-white font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] hover:underline underline-offset-8'>Assemblies</button>
              </Link>
              <Link to='/news'>
                <button className='text-white font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] hover:underline underline-offset-8'>News</button>
              </Link>
              <Link to='/library'>
                <button className='text-white font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] hover:underline underline-offset-8'>Library</button>
              </Link>
              <Link to='/sponsors'>
                <button className='text-white font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] hover:underline underline-offset-8'>Sponsors</button>
              </Link>
              <Link to='/donate'>
                <button className='btn-primary font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] mr-[20px]'>Donate
                  {/* <a href='https://buy.stripe.com/eVadU1ciQ01F5EIdQQ' target='_blank' rel='noopener noreferrer'>Donate</a> */}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className='hidden lg:flex lg:flex-row lg:flex-grow-[2]'>
          <div className='w-[300px] h-[200px] overflow-hidden'>
            {/* This div used to handle the grey overlay for the navbar picture */}
            <div className='flex flex-row'>
              <a href='https://1oceanfund.org/' target='_blank' rel='noopener noreferrer'>
                <img className='mt-[10px] h-[90px] w-[300px] ml-[20px] py-1 px-2' alt='Affiliated Website Logo' src='/images/1ocean-logo.svg' />
              </a>
              <a href='/'>
                <img className='mt-[10px] h-[90px] w-[300px] ml-[20px] py-1 px-2' alt='Main Website Logo' src='/images/hwni-logo.svg' />
              </a>
            </div>
          </div>
          <div className='flex flex-grow-[2] h-[100px] justify-end mt-[20px] z-[2] mr-[20px]'>
            <Link to='/'>
              <button className='text-black font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] hover:underline underline-offset-8'>Home</button>
            </Link>
            <Link to='/about'>
              <button className='text-black font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] hover:underline underline-offset-8'>About Us</button>
            </Link>
            <Link to='/rights-of-nature'>
              <button className='text-black font-[450] text-[16px] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] special-nav-font-size'>Rights Of <span className='hover:underline underline-offset-8'>Nature</span></button>
            </Link>
            <Link to='/timeline'>
              <button className='text-black font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] hover:underline underline-offset-8'>Timeline</button>
            </Link>
            <Link to='/assemblies'>
              <button className='text-black font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] hover:underline underline-offset-8'>Assemblies</button>
            </Link>
            <Link to='/news'>
              <button className='text-black font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] hover:underline underline-offset-8'>News</button>
            </Link>
            <Link to='/library'>
              <button className='text-black font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] hover:underline underline-offset-8'>Library</button>
            </Link>
            <Link to='/sponsors'>
              <button className='text-black font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] border-0 mr-[20px] hover:underline underline-offset-8'>Sponsors</button>
            </Link>
            <Link to='/donate'>
              <button className='btn-primary font-normal text-[1.1rem] h-[50px] w-[100px] mt-[5px] mr-[20px]'>Donate
                {/* <a href='https://buy.stripe.com/eVadU1ciQ01F5EIdQQ' target='_blank' rel='noopener noreferrer'>Donate</a> */}
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
