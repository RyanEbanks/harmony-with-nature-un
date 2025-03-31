// import oceanlogo from '../images/1ocean-logo-white.svg';
import '../App.css';
import '../index.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';
import { FaBluesky } from 'react-icons/fa6';


function Footer() {
  return (
    <div className='bg-slate-800 text-white py-5 px-10 lg:px-36'>
      <div className='flex flex-col lg:flex-row py-5 mx-auto items-center'>
        {/* Logo & Links Section */}
        <div className='lg:w-1/4'>
        <a  href='/' rel='noopener noreferrer'>
          <img className='h-[150px] w-[150px] mx-auto' src='/images/hwni-white-logo.svg' alt='hwni logo' />
        </a>
          {/* Social Media Links */}
          <div className='flex flex-row mx-auto justify-center py-5'>
            <a className='footer-icons' href='https://www.facebook.com/UNHwN/' target='_blank' rel='noopener noreferrer'><FaFacebookSquare size={20} /></a>
            <a className='footer-icons' href='https://www.instagram.com/harmonywithnatureun/' target='_blank' rel='noopener noreferrer'><FaSquareInstagram size={20} /></a>
            <a className='footer-icons' href='https://www.youtube.com/channel/UChFbPDuTDog015fKVtUykzA' target='_blank' rel='noopener noreferrer'><FaYoutube size={20} /></a>
            <a className='footer-icons' href='https://www.youtube.com/channel/UChFbPDuTDog015fKVtUykzA' target='_blank' rel='noopener noreferrer'><FaBluesky size={20} /></a>
          </div>
        </div>
        {/* Link Section */}
        <div className='flex flex-col mx-auto w-full lg:w-1/3'>
          <div className='flex flex-col xl:flex-row mt-10'>
            <div className='flex flex-col py-5 mx-auto xl:mx-0 w-1/2 xl:w-1/4'>
              <a className='footer-a' href='/' rel='noopener noreferrer'>Home</a>
              <a className='footer-a' href='/about' rel='noopener noreferrer'>About Us</a>
            </div>
            <div className='flex flex-col py-5 mx-auto xl:mx-0 w-1/2 xl:w-1/3'>
              <a className='footer-a' href='/donate' rel='noopener noreferrer'>Donate</a>
              <p className='footer-a'>Privacy Policy</p>
            </div>
            <div className='flex flex-col py-5 mx-auto xl:mx-0 w-1/2 xl:w-1/3'>
              <p className='footer-a'>Terms & Conditions</p>
              <p className='footer-a'>Disclaimer</p>
            </div>
          </div>
        </div>
        {/* Sign Up Section */}
        <div className='flex flex-col w-full mx-5 lg:w-1/3 justify-center mt-5 lg:mt-0'>
          {/* <div className='text-center mb-2.5 '>
            <p className='md:text-lg'>Sign up to receive news and updates</p>
          </div>
          <div className='flex flex-col lg:flex-row justify-center items-center mb-4'>
            <input 
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-slate-400 py-3.5 px-6 text-black' />
            <button 
            type='button' 
            onClick={handleSignUp}
            className='inline-block font-medium bg-[#004d6f] text-white hover:bg-[#2C88B0] py-3.5 px-6 ml-2 mt-5 lg:mt-0'>Sign Up</button>
          </div> */}
           <iframe 
           title='subscribe'
          src='https://cdn.forms-content-1.sg-form.com/0c670aa5-d442-11ef-8760-06925f2fee14'
          className='w-full h-[56.25vw] xl:h-[600px] xl:w-[550px] border-0'
          allowFullScreen
          />
        </div>
      </div>
      {/* Copyright Section  */}
      <div className='text-center'>
        <p className='text-lg mx-[5px] no-underline py-5'>Copyright © 2024 Harmony With Nature Institute - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;