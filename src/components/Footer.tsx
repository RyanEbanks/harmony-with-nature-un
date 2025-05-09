// import oceanlogo from '../images/1ocean-logo-white.svg';
import '../App.css';
import '../index.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';
import { FaBluesky } from 'react-icons/fa6';


function Footer() {
  return (
    <div className='bg-emerald-700 text-white py-2'>
      <div className='flex flex-col lg:flex-row w-[80%] mx-auto items-stretch py-5'>
        {/* Logo & Links Section */}
        <div className='w-full lg:w-1/4 text-center lg:text-left'>
          <h2 className='ml-2 text-2xl'>Explore</h2>
          <p className='ml-2 mt-5'>Other projects: <span><a>One Ocean</a></span></p>
          <p className='ml-2 mt-5'>Copyright © 2024 Harmony With Nature Institute - All Rights Reserved</p>
        </div>

        <div className='w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0'>
          <div className="w-full lg:w-1/4 mx-auto">
            <h2 className='ml-2 text-2xl'>Our Socials</h2>
            <div className='ml-2 mt-5'>
              <a>Contact Us</a>
            </div>
            <div className='flex flex-row mt-5 justify-evenly lg:justify-start'>
              <a className='footer-icons' href='https://www.facebook.com/UNHwN/' target='_blank' rel='noopener noreferrer'><FaFacebookSquare size={20} /></a>
              <a className='footer-icons' href='https://www.instagram.com/harmonywithnatureun/' target='_blank' rel='noopener noreferrer'><FaSquareInstagram size={20} /></a>
              <a className='footer-icons' href='https://www.youtube.com/channel/UChFbPDuTDog015fKVtUykzA' target='_blank' rel='noopener noreferrer'><FaYoutube size={20} /></a>
              <a className='footer-icons' href='https://www.youtube.com/channel/UChFbPDuTDog015fKVtUykzA' target='_blank' rel='noopener noreferrer'><FaBluesky size={20} /></a>
            </div>
          </div>

        </div>
        {/* Link Section */}
        <div className='flex flex-col w-full items-center lg:items-start lg:w-1/4 mt-10 lg:mt-0'>
          <div className='flex flex-col lg:flex-row text-center lg:text-left'>
            <div className='flex flex-col md:w-1/2'>
              <a className='footer-a' href='/' rel='noopener noreferrer'>Home</a>
              <a className='footer-a' href='/about' rel='noopener noreferrer'>About Us</a>
              <a className='footer-a' href='/donate' rel='noopener noreferrer'>Donate</a>
            </div>

            <div className='flex flex-col md:w-1/2'>
              <p className='footer-a'>Privacy Policy</p>
              <p className='footer-a'>Terms & Conditions</p>
              <p className='footer-a'>Disclaimer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;