import React, { useState } from 'react';
// import logo from '../images/hwni-logo.svg';
// import oceanlogo from '../images/1ocean-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import '../App.css'
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react"
// import Modal from './Modal';
import { IoIosPlay } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [toggleVideo, setToggleVideo] = useState(false);

  const openVideo = () => setToggleVideo(true);
  const closeVideo = () => setToggleVideo(false);

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
          {/* <div className='bg-cover bg-center h-[30vh] lg:h-[60vh]' style={{ backgroundImage: "url('/images/new-placeholder/banner.mp4')" }}> */}
          <div>
            <div className='lg-nav-parent'>
              {/* <div className='absolute top-[90px] left-0 right-0 bottom-0 max-h-[60vh] bg-black bg-opacity-10 z-1'></div> */}
              <div className='lg-nav-content-container'>
                <div className='lg-nav-img-container w-1/3 flex justify-center items-center my-auto'>
                  <a href='/'>
                    <img className='h-[150px] w-[150px]' alt='Main Website Logo' src='/images/hwni-short.svg' />
                  </a>
                </div>
                <div className='lg-nav-content justify-center w-2/3 h-[80px] my-auto'>
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
                  <Link to='/sponsors'>
                    <button className='lg-nav-link'>Sponsors</button>
                  </Link>
                </div>
                <div className='flex justify-center items-center h-[80px] mx-auto my-auto w-1/3'>
                  <Link to='/donate'>
                    <button className='btn-primary-test font-normal text-[1.1rem] h-[50px] w-[100px]'>Donate</button>
                  </Link>
                </div>
              </div>
              {/* <div>
            <img className='pt-2' alt='horizontal line' src='/images/horizontal.svg' />
            </div> */}
            </div>
            <div className='bg-cover bg-center h-[30vh] lg:h-[80vh]'>
              <video className='w-full h-full object-none' src='/images/new-placeholder/banner.mp4'
                autoPlay
                muted
                playsInline />
              <div className='flex flex-row mt-20 absolute top-5 right-0 h-screen w-full z-10'>
                <div className='flex flex-col w-1/2 h-[80vh] px-36 justify-center border-l-8 border-[#F0910c]'>
                  <h1 className='py-2 text-white text-6xl font-normal'>Towards a Sustainable Future</h1>
                  <p className='py-5 text-white text-xl font-light'>Devising a new world will require a new relationship with the Earth and with humankind's own existence.</p>
                  <div className='flex flex-row h-[80px] w-[250px] border-[#b3b3b3] border-4 py-2'>
                    <span className='flex items-center'><IoIosPlay style={{ fontSize: '48px', color: 'white' }} /></span>
                    <button onClick={openVideo}>
                      <div className='flex flex-col text-lg text-white text-left font-bold'>
                        <span>Check Out Our</span>
                        <span>Youtube Channel</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {toggleVideo && (
              <div className='flex flex-row rounded-lg bg-white p-10 w-[40%] absolute top-[30vh] left-[30%] right-auto z-40'>
                <iframe
                  width="600"
                  height="400"
                  src="https://www.youtube.com/embed/kkP4oFIZf8s?si=fV2vb-ZudbQMp0v4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <button onClick={closeVideo} className='border-red-400 border-2 h-[30px] ml-auto'>
                  <AiOutlineClose />
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className='lg-nav-parent mb-5'>
            {/* <div className='absolute top-20 left-0 right-0 bottom-0 max-h-[60vh] bg-black bg-opacity-50 z-1'></div> */}
            <div className='lg-nav-content-container pt-5'>
              <div className='lg-nav-img-container'>
                <a href='/'>
                  <img className='h-[75px] w-[300px] my-2' alt='Main Website Logo' src='/images/hwni-logo.svg' />
                </a>
              </div>
              <div className='lg-nav-content justify-center mx-auto'>
                <Link to='/'>
                  <button className='lg-nav-link-2'>Home</button>
                </Link>
                <Link to='/about'>
                  <button className='lg-nav-link-2'>About Us</button>
                </Link>
                <Link to='/rights-of-nature'>
                  <button className='lg-nav-link-2'>Rights Of Nature</button>
                </Link>
                <Link to='/timeline'>
                  <button className='lg-nav-link-2'>Timeline</button>
                </Link>
                <Link to='/assemblies'>
                  <button className='lg-nav-link-2'>Assemblies</button>
                </Link>
                <Link to='/news'>
                  <button className='lg-nav-link-2'>News</button>
                </Link>
                <Link to='/library'>
                  <button className='lg-nav-link-2'>Library</button>
                </Link>
                <Link to='/sponsors'>
                  <button className='lg-nav-link-2'>Sponsors</button>
                </Link>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <Link to='/donate'>
                <button className='btn-primary-test font-normal text-[1.1rem] h-[50px] w-[100px] mr-[50px]'>Donate</button>
              </Link>
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
