// import oceanlogo from '../images/1ocean-logo-white.svg';
import '../App.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';


function Footer() {
  return (
    <div className='bg-[#004d6f] text-white py-5'>
      <div className='flex flex-row py-5'>
        <div className='ml-auto'>
          <img className='h-[200px] w-[200px] mx-auto' src='/images/1ocean-logo-white.svg' />
        </div>
        <div className='flex flex-col mx-auto border-orange-300 border-2'>
          <div className='flex flex-row '>
            <div className='flex flex-col mx-auto py-5 border-orange-300 border-2'>
              <a className='text-lg mx-[5px] no-underline footer-link w-[100px] text-[1.1rem] my-auto' href='/' rel='noopener noreferrer'>Home</a>
              <a className='text-lg mx-[5px] no-underline footer-link w-[100px] text-[1.1rem] my-auto' href='/about' rel='noopener noreferrer'>About Us</a>
              <a className='text-lg mx-[5px] no-underline footer-link w-[100px] text-[1.1rem] my-auto' href='/donate' rel='noopener noreferrer'>Donate</a>
            </div>
            <div className='flex flex-col mx-auto py-5 border-orange-300 border-2'>
              <a className='text-lg mx-[5px] no-underline footer-link'>Privacy Policy</a>
              <a className='text-lg mx-[5px] no-underline footer-link'>Terms & Conditions</a>
              <a className='text-lg mx-[5px] no-underline footer-link'>Disclaimer</a>
            </div>
          </div>
          <div className='flex flex-row mx-auto justify-center py-5'>
            <a className='mx-[5px] no-underline footer-link' href='https://www.facebook.com/UNHwN/' target='_blank' rel='noopener noreferrer'><FaFacebookSquare size={36} /></a>
            <a className='mx-[5px] no-underline footer-link' href='https://www.instagram.com/harmonywithnatureun/' target='_blank' rel='noopener noreferrer'><FaSquareInstagram size={36} /></a>
            <a className='mx-[5px] no-underline footer-link' href='https://www.youtube.com/channel/UChFbPDuTDog015fKVtUykzA' target='_blank' rel='noopener noreferrer'><FaYoutube size={36} /></a>
          </div>
        </div>
      </div>
          <div className='text-center'>
            <p className='text-lg mx-[5px] no-underline py-5'>Copyright © 2024 Harmony With Nature Institute - All Rights Reserved</p>
            </div>
    </div>
  );
}

export default Footer;