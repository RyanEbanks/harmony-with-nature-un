import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../App.css';
import '../index.css';
import { CiMenuBurger } from 'react-icons/ci';
import { motion, AnimatePresence } from 'motion/react';
import { IoIosPlay } from 'react-icons/io';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePage, selectActivePage } from '../activeNavSlice';
import { current } from '@reduxjs/toolkit';
import { auth } from '../firebase';

function Navbar() {
  const [toggleVideo, setToggleVideo] = useState(false);
  const navigate = useNavigate();
  // const username = localStorage.getItem('username');
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken')); // Double negation, sets value to boolean
  const activePage = useSelector(selectActivePage);
  const dispatch = useDispatch();
  const location = useLocation();
  const [userEmail, setuserEmail] = useState<string | null>('');
  const [toggleMenu, setToggleMenu] = useState(false);
  const currentPath = location.pathname;


  useEffect(() => {
    dispatch(setActivePage(location.pathname));
  }, [location.pathname, dispatch]);


  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem('authToken'));
      setuserEmail(localStorage.getItem('userEmail'));
    };

    checkAuth(); // initial check

    window.addEventListener('storage', checkAuth); // listen for auth changes across tabs/windows

    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    localStorage.removeItem('tempEmail');
    setIsAuthenticated(false);
    navigate('/');
  };

  const openVideo = () => setToggleVideo(true);
  const closeVideo = () => setToggleVideo(false);


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
  const routesWithBackground = ['/', '/news', '/donate'];
  const showBackground = routesWithBackground.includes(location.pathname);

  return (
    <div className='navigation-container'>
      {/* Navbar SM Screens */}
      <div className='lg:hidden'>

        <div className='md:hidden flex flex-row w-full'>
          <div className='flex flex-row w-1/2'>
            <a href='/'>
              <img className='h-[70px] w-[130px] ml-[20px]' alt='Main Website Logo' src='/images/hwni-logo.svg' />
            </a>
          </div>
          <div className='flex w-1/2 my-auto justify-center'>
            <button onClick={menuSelect}>
              <CiMenuBurger size={24} />
            </button>
          </div>
        </div>

        <div className='hidden md:flex flex-row w-full'>
          <div className='flex flex-row w-[30%] items-center justify-center'>
            <a href='/'>
              <img className='h-[70px] w-[130px] py-1' alt='Main Website Logo' src='/images/hwni-logo.svg' />
            </a>
          </div>
          <div className='flex flex-row w-[40%] items-center justify-center'>
            <p className='font-semibold text-lg'>Harmony With Nature Institute</p>
          </div>
          <div className='flex w-[30%] my-auto items-center justify-center'>
            <button onClick={menuSelect}>
              <CiMenuBurger size={36} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              className='absolute top-0 right-0 h-screen w-full z-50 bg-white text-2xl shadow-lg flex flex-col justify-center'
              initial='hidden'
              animate='visible'
              exit='exit'
              variants={menuVariants}
              transition={{ type: 'tween', duration: 0.4 }}
            >
              <button onClick={menuSelect} className='ml-4 mt-4'>
                <MdClose size={24} />
              </button>
              <ul className='flex flex-col text-center my-auto h-3/4 w-full justify-center space-y-8'>
                <Link to='/' onClick={menuSelect}>
                  <button className='my-4'>Home</button>
                </Link>
                <Link to='/about' onClick={menuSelect}>
                  <button className='my-4'>About</button>
                </Link>
                <Link to='/rights-of-nature' onClick={menuSelect}>
                  <button className='my-4'>Rights</button>
                </Link>
                {/* <Link to='/timeline' onClick={menuSelect}>
                  <button className='my-4'>Timeline</button>
                </Link> */}
                {/* <Link to='/assemblies' onClick={menuSelect}>
                  <button className='my-4'>Assemblies</button>
                </Link> */}
                <Link to='/news' onClick={menuSelect}>
                  <button className='my-4'>News</button>
                </Link>
                {/* <Link to='/library' onClick={menuSelect}>
                  <button className='my-4'>Library</button>
                </Link> */}
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
          <div className='w-full fixed z-50'>
            <div className="hidden account-container bg-emerald-700 text-white text-sm lg:flex flex-row items-center justify-end px-20">
              {isAuthenticated && (
                <>
                  <p className='mr-8'>Howdy, {userEmail}</p>
                  <Link to='/upload'>
                    <a className='mr-8 py-2 hover:text-[#40916C]'>Add News</a>
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className='mr-8 py-2 hover:text-[#40916C]'
                  >
                    Sign Out
                  </button>
                </>
              )}
            </div>
            <div className='navigation-scale-resizer lg-nav-parent bg-white z-50'>
              {/* <div className='absolute top-[90px] left-0 right-0 bottom-0 max-h-[60vh] bg-black bg-opacity-10 z-1'></div> */}
              <div className='lg-nav-content-container'>
                <div className='lg-nav-img-container w-1/3 flex justify-start items-center'>
                  <a href='/'>
                    <img className='h-[150px] w-[150px]' alt='Main Website Logo' src='/images/hwni-short.svg' />
                  </a>
                </div>
                <div className='lg-nav-content justify-center w-3/4 h-[80px]'>
                  <Link to='/'>
                    <button className={currentPath === '/' ? 'active nav-border-effect lg-nav-link' : 'lg-nav-link'}>Home</button>
                  </Link>
                  <Link to='/about'>
                    <button className={currentPath === '/about' ? 'active nav-border-effect lg-nav-link' : 'lg-nav-link'}>About Us</button>
                  </Link>
                  <Link to='/rights-of-nature'>
                    <button className={currentPath === '/rights-of-nature' ? 'active nav-border-effect lg-nav-link' : 'lg-nav-link'}>Rights</button>
                  </Link>
                  <Link to='/news'>
                    <button className={currentPath === '/news' ? 'active nav-border-effect lg-nav-link' : 'lg-nav-link'}>News</button>
                  </Link>
                  <Link to='/donate'>
                    <button className={currentPath === '/donate' ? 'active nav-border-effect lg-nav-link' : 'lg-nav-link'}>Donate</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='video-banner-container border-t-black border-[0.5px]'>
              {/* Renamed this banner to home-banner due to removing banner.mp4 forcefully based on file size on git */}
              {/* <video className='w-full h-full object-contain md:object-none' src='/images/home-banner.mp4'
                autoPlay
                muted
                playsInline /> */}
              <video className='w-full h-full object-cover lg:object-none'
                autoPlay
                muted
                playsInline>
                <source src="https://hwni-videos.s3.us-east-2.amazonaws.com/new-banner.mp4" type="video/mp4" />
              </video>
              <div className='video-banner-content'>
                <div className='flex flex-col w-full lg:w-1/2 h-[45vh] lg:h-[80vh] px-10 md:px-36 justify-center'>
                  <h1 className='pl-2 md:pl-4 py-2 text-white text-2xl md:text-4xl lg:text-6xl font-normal border-l-8 border-[#F0910c]'>A Sustainable Future</h1>
                  <p className='pl-4 md:pl-6 py-5 text-white text-md md:text-xl font-light'>Devising a new world will require a new relationship with the Earth and with humankind's own existence.</p>
                  <div className='yt-video-btn'>
                    <span className='items-center'><IoIosPlay style={{ fontSize: '48px', color: 'white' }} /></span>
                    <button onClick={openVideo}>
                      <div className='flex flex-col text-sm md:text-lg text-white text-left font-medium'>
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
        <>
          <div className="hidden account-container text-white bg-emerald-700 text-sm lg:flex flex-row items-center justify-end px-20">
            {isAuthenticated && (
              <>
                <p className='mr-8'>Howdy, {userEmail}</p>
                <Link to='/upload'>
                  <a className='mr-8 py-2 hover:text-[#40916C]'>Add News</a>
                </Link>
                <button
                  onClick={handleSignOut}
                  className='mr-8 py-2 hover:text-[#40916C]'
                >
                  Sign Out
                </button>
              </>
            )}
          </div>
          <div className='navigation-scale-resizer lg-nav-parent bg-white z-50 py-1 w-full shadow-lg'>
            {/* <div className='absolute top-[90px] left-0 right-0 bottom-0 max-h-[60vh] bg-black bg-opacity-10 z-1'></div> */}
            <div className='lg-nav-content-container'>
              <div className='lg-nav-img-container w-1/3 flex justify-start items-center'>
                <a href='/'>
                  <img className='h-[150px] w-[150px]' alt='Main Website Logo' src='/images/hwni-short.svg' />
                </a>
              </div>
              <div className='lg-nav-content justify-center w-3/4 h-[80px]'>
                <Link to='/'>
                  <button className={currentPath === '/' ? 'active nav-border-effect lg-nav-link' : 'lg-nav-link'}>Home</button>
                </Link>
                <Link to='/about'>
                  <button className={currentPath === '/about' ? 'active nav-border-effect lg-nav-link' : 'lg-nav-link'}>About Us</button>
                </Link>
                <Link to='/rights-of-nature'>
                  <button className={currentPath === '/rights-of-nature' ? 'active nav-border-effect lg-nav-link' : 'lg-nav-link'}>Rights</button>
                </Link>
                <Link to='/news'>
                  <button className={currentPath === '/news' ? 'active nav-border-effect lg-nav-link' : 'lg-nav-link'}>News</button>
                </Link>
                <Link to='/donate'>
                  <button className={currentPath === '/donate' ? 'active nav-border-effect lg-nav-link' : 'lg-nav-link'}>Donate</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;

