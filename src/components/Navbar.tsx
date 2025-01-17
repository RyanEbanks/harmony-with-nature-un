import React, { useState } from 'react';
// import logo from '../images/hwni-logo.svg';
// import oceanlogo from '../images/1ocean-logo.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../App.css'
import { CiMenuBurger } from 'react-icons/ci';
import { motion, AnimatePresence } from 'motion/react'
// import Modal from './Modal';
import { IoIosPlay } from 'react-icons/io';
import { MdClose } from 'react-icons/md';

function Navbar() {
  const [toggleVideo, setToggleVideo] = useState(false);
  const navigate = useNavigate();
  // const username = localStorage.getItem('username');
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    localStorage.removeItem('tempEmail');
    setIsAuthenticated(false);
    navigate('/');
  };

  const openVideo = () => setToggleVideo(true);
  const closeVideo = () => setToggleVideo(false);

  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuSelect = () => {
    setToggleMenu((prev) => !prev);
    console.log('This is the current state of menu on click:', toggleMenu);
  }

  const menuVariants = {
    hidden: { x: '100%', opacity: 0 }, // Slide off the screen to the right
    visible: { x: 0, opacity: 1 }, // Slide into view
    exit: { x: '100%', opacity: 0 }, // Slide out to the right
  };
  //Creating Routes where the image should appear
  const routesWithBackground = ['/', '/about', '/news', 'library', '/sponsors', '/donate'];
  const showBackground = routesWithBackground.includes(location.pathname);

  return (
    <div>
      {/* Navbar SM Screens */}
      <div className='lg:hidden'>

        <div className='md:hidden flex flex-row w-full'>
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

        <div className='hidden md:flex flex-row w-full mt-5'>
          <div className='flex flex-row w-[30%] items-center justify-center'>
            <a href='/'>
              <img className=' h-[70px] w-[130px] py-1' alt='Main Website Logo' src='/images/hwni-logo.svg' />
            </a>
          </div>
          <div className='flex flex-row w-[40%] items-center justify-center'>
            <p className='font-semibold text-xl'>Harmony With Nature Institute</p>
          </div>
          <div className='flex w-[30%] my-auto items-center justify-center'>
            <button onClick={menuSelect}>
              <CiMenuBurger size={48} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              className='absolute top-0 right-0 h-screen w-full z-50 bg-white text-2xl shadow-lg'
              initial='hidden'
              animate='visible'
              exit='exit'
              variants={menuVariants}
              transition={{ type: 'tween', duration: 0.4 }}
            >
              <button onClick={menuSelect} className='ml-4 mt-4'>
                <MdClose size={24} />
              </button>
              <ul className='flex flex-col text-center mt-10 mx-auto'>
                <button className='hidden md:block my-4' onClick={menuSelect}>
                  <a href='https://1oceanfund.org/' target='_blank' rel='noopener noreferrer'>
                    One Ocean Fund
                  </a>
                </button>
                <Link to='/' onClick={menuSelect}>
                  <button className='my-4'>Home</button>
                </Link>
                <Link to='/about' onClick={menuSelect}>
                  <button className='my-4'>About</button>
                </Link>
                <Link to='/rights-of-nature' onClick={menuSelect}>
                  <button className='my-4'>Rights of Nature</button>
                </Link>
                <Link to='/timeline' onClick={menuSelect}>
                  <button className='my-4'>Timeline</button>
                </Link>
                <Link to='/assemblies' onClick={menuSelect}>
                  <button className='my-4'>Assemblies</button>
                </Link>
                <Link to='/news' onClick={menuSelect}>
                  <button className='my-4' onClick={menuSelect}>News</button>
                </Link>
                <Link to='/library' onClick={menuSelect}>
                  <button className='my-4'>Library</button>
                </Link>
                {/* <Link to='/sponsors'>
                  <button className='my-4' onClick={menuSelect}>Sponsors</button>
                </Link> */}
                <Link to='/donate' onClick={menuSelect}>
                  <button className='my-4'>Donate</button>
                </Link>
                {isAuthenticated && (
                  <button
                    onClick={() => {
                      handleSignOut();
                      menuSelect();
                    }}
                    className='my-4 text-red-600 hover:text-red-700'
                  >
                    Sign Out
                  </button>
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Navbar LG Screens */}
      {showBackground ? (
        <div>
          {/* <div className='bg-cover bg-center h-[30vh] lg:h-[60vh]' style={{ backgroundImage: 'url('/images/new-placeholder/banner.mp4')' }}> */}
          <div>
            <div className='lg-nav-parent fixed top-0 bg-white z-50 w-full shadow-lg'>
              {/* <div className='absolute top-[90px] left-0 right-0 bottom-0 max-h-[60vh] bg-black bg-opacity-10 z-1'></div> */}
              <div className='lg-nav-content-container'>
                <div className='lg-nav-img-container w-[20%] flex pl-12 items-center my-auto'>
                  <a href='/'>
                    <img className='h-[150px] w-[150px]' alt='Main Website Logo' src='/images/hwni-short.svg' />
                  </a>
                </div>
                <div className='lg-nav-content justify-center w-[80%] h-[80px] my-auto'>
                  <Link to='/'>
                    <button className='lg-nav-link'>Home</button>
                  </Link>
                  <Link to='/about'>
                    <button className='lg-nav-link'>About Us</button>
                  </Link>
                  <Link to='/rights-of-nature'>
                    <button className='lg-nav-link'>Rights</button>
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
                  {/* <Link to='/sponsors'>
                    <button className='lg-nav-link'>Sponsors</button>
                  </Link> */}
                </div>
                <div className='flex pr-12 justify-end items-center h-[80px] mx-auto my-auto w-[20%]'>
                  <div className='flex items-center space-x-4'>
                    <a href='https://1oceanfund.org/' target='_blank' rel='noopener noreferrer'>
                      <button className='btn-primary nav-btn-styling ml-8 lg:ml-0 flex items-center justify-center'>
                        <img src='/images/1ocean-logo-white.svg' alt='1Ocean Logo' className='h-[40px] w-[50px]' />
                      </button>
                    </a>
                    <Link to='/donate'>
                      <button className='btn-primary nav-btn-styling ml-8 lg:ml-0'>Donate</button>
                    </Link>
                    {isAuthenticated && (
                      <button
                        onClick={handleSignOut}
                        className='px-4 py-2 text-white bg-red-600 hover:bg-red-700 text-sm rounded-full w-[100px]'
                      >
                        Sign Out
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-cover bg-center h-[30vh] md:h-[80vh] md:mt-10 lg:mt-[100px]'>
              <video className='w-full h-full object-contain md:object-none' src='/images/home-banner.mp4'
                autoPlay
                muted
                playsInline />
              <div className='flex flex-row mt-0 lg:mt-20 absolute top-0 md:top-5 right-0 h-screen w-full z-10'>
                <div className='flex flex-col w-full lg:w-1/2 h-[45vh] lg:h-[80vh] px-10 md:px-36 justify-center'>
                  <h1 className='pl-2 md:pl-4 py-2 text-white text-2xl md:text-4xl lg:text-6xl font-normal border-l-8 border-[#F0910c]'>A Sustainable Future</h1>
                  <p className='pl-4 md:pl-6 py-5 text-white text-md md:text-xl font-light'>Devising a new world will require a new relationship with the Earth and with humankind's own existence.</p>
                  <div className='hidden ml-6 md:flex flex-row h-[80px] w-[250px] border-[#b3b3b3] border-4 py-2'>
                    <span className='items-center'><IoIosPlay style={{ fontSize: '48px', color: 'white' }} /></span>
                    <button onClick={openVideo}>
                      <div className='flex flex-col text-sm md:text-lg text-white text-left font-bold'>
                        <span>Check Out Our</span>
                        <span>Youtube Channel</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {toggleVideo && (
              <div className='flex flex-col w-[40%] h-[410px] absolute top-[30vh] left-[30%] z-40'>
                <button onClick={closeVideo} className='h-[30px] ml-auto text-white text-2xl font-bold hover:text-slate-200'>
                  <MdClose />
                </button>
                <div className='relative w-full h-full bg-black'>
                  <iframe
                    className='w-full h-full'
                    src='https://www.youtube.com/embed/kkP4oFIZf8s?si=fV2vb-ZudbQMp0v4'
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

            )}
          </div>
        </div>
      ) : (
        <div>
          <div className='lg-nav-parent fixed top-0 bg-white z-50 w-full shadow-lg'>
            {/* <div className='absolute top-[90px] left-0 right-0 bottom-0 max-h-[60vh] bg-black bg-opacity-10 z-1'></div> */}
            <div className='lg-nav-content-container'>
              <div className='lg-nav-img-container w-[20%] flex pl-12 items-center my-auto'>
                <a href='/'>
                  <img className='h-[150px] w-[150px]' alt='Main Website Logo' src='/images/hwni-short.svg' />
                </a>
              </div>
              <div className='lg-nav-content justify-center w-[80%] h-[80px] my-auto'>
                <Link to='/'>
                  <button className='lg-nav-link'>Home</button>
                </Link>
                <Link to='/about'>
                  <button className='lg-nav-link'>About Us</button>
                </Link>
                <Link to='/rights-of-nature'>
                  <button className='lg-nav-link'>Rights</button>
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
                {/* <Link to='/sponsors'>
                  <button className='lg-nav-link'>Sponsors</button>
                </Link> */}
              </div>
              <div className='flex pr-12 justify-end items-center h-[80px] mx-auto my-auto w-[20%]'>
                <div className='flex items-center space-x-4'>
                  <a href='https://1oceanfund.org/' target='_blank' rel='noopener noreferrer'>
                    <button className='btn-primary nav-btn-styling ml-8 lg:ml-0 flex items-center justify-center'>
                      <img src='/images/1ocean-logo-white.svg' alt='1Ocean Logo' className='h-[40px] w-[50px]' />
                    </button>
                  </a>
                  <Link to='/donate'>
                    <button className='btn-primary nav-btn-styling ml-8 lg:ml-0 flex items-center justify-center'>Donate</button>
                  </Link>
                  {isAuthenticated && (
                    <button
                      onClick={handleSignOut}
                      className='px-4 py-2 text-white bg-red-600 hover:bg-red-700 text-sm rounded-full w-[100px]'
                    >
                      Sign Out
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
