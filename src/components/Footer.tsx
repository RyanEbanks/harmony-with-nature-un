// import oceanlogo from '../images/1ocean-logo-white.svg';
import '../App.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';


function Footer() {
  return (
    <div className='flex flex-row justify-center bg-[#004d6f] text-white pb-5 mx-[10px] rounded-t-lg'>
      <div className='flex flex-grow'>
        {/* <h3 className='footer-title'>About</h3> */}
        <img className='h-[200px] w-[200px] mx-auto' src='/images/1ocean-logo-white.svg' />
        {/* <a className='footer-p'>Learn More</a> */}
      </div>
      <div className='flex flex-col my-auto flex-grow'>
        <div className='flex flex-row justify-center mx-auto mt-1 text-left'>
          {/* <h3 className='footer-title'>Social Media</h3> */}
          <a className='mx-[5px] no-underline footer-link' href='https://www.facebook.com/UNHwN/' target='_blank' rel='noopener noreferrer'><FaFacebookSquare size={36} /></a>
          <a className='mx-[5px] no-underline footer-link' href='https://www.instagram.com/harmonywithnatureun/' target='_blank' rel='noopener noreferrer'><FaSquareInstagram size={36} /></a>
          <a className='mx-[5px] no-underline footer-link' href='https://www.youtube.com/channel/UChFbPDuTDog015fKVtUykzA' target='_blank' rel='noopener noreferrer'><FaYoutube size={36} /></a>
        </div>
        <div className='flex flex-row justify-center mx-auto mt-1 text-left'>
          <p className='text-lg mx-[5px] no-underline'>Copyright © 2024 Harmony With Nature Institute - All Rights Reserved</p>
        </div>
      </div>
      <div className='my-auto flex-grow'>
          <div className='flex flex-row justify-center mx-auto text-center'>
            {/* <h3 className='footer-title'>About Us</h3> */}
            <a className='text-lg mx-[5px] no-underline footer-link w-[100px] text-[1.1rem] text-center my-auto' href='/' rel='noopener noreferrer'>Home</a>
            <a className='text-lg mx-[5px] no-underline footer-link w-[100px] text-[1.1rem] text-center my-auto' href='/about' rel='noopener noreferrer'>About Us</a>
            <a className='text-lg mx-[5px] no-underline footer-link w-[100px] text-[1.1rem] text-center my-auto'>Contact Us</a>
            <div>
              <button className='btn-primary text-[1.1rem] font-semibold py-3 px-8'>Donate</button>
            </div>
          </div>
        <div className='flex flex-col justify-center text-center mx-auto mt-5'>
          {/* <h3 className='footer-title'>Social Media</h3> */}
          <a className='text-lg mx-[5px] no-underline footer-link'>Privacy Policy</a>
          <a className='text-lg mx-[5px] no-underline footer-link'>Terms & Conditions</a>
          <a className='text-lg mx-[5px] no-underline footer-link'>Disclaimer</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;