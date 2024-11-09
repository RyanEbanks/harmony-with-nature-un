import oceanlogo from '../images/1ocean-logo-white.svg';
import '../App.scss';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';


function Footer() {
  return (
    <div className='footer'>
      <div className='about-ocean-container'>
        {/* <h3 className='footer-title'>About</h3> */}
        <img className='footer-img' src={oceanlogo} />
        {/* <a className='footer-p'>Learn More</a> */}
      </div>
      <div className='content-container'>
        <div className='about-container'>
          {/* <h3 className='footer-title'>About Us</h3> */}
          <a className='footer-p footer-link footer-about-p' href='/' rel='noopener noreferrer'>Home</a>
          <a className='footer-p footer-link footer-about-p' href='/about' rel='noopener noreferrer'>About Us</a>
          <a className='footer-p footer-link footer-about-p'>Contact Us</a>
          <div>
            <button className='footer-donate'>Donate</button>
          </div>
        </div>
        <div className='social-container'>
          {/* <h3 className='footer-title'>Social Media</h3> */}
          <a className='footer-icon footer-link' href='https://www.facebook.com/UNHwN/' target='_blank' rel='noopener noreferrer'><FaFacebookSquare size={36} /></a>
          <a className='footer-icon footer-link' href='https://www.instagram.com/harmonywithnatureun/' target='_blank' rel='noopener noreferrer'><FaSquareInstagram size={36} /></a>
          <a className='footer-icon footer-link' href='https://www.youtube.com/channel/UChFbPDuTDog015fKVtUykzA' target='_blank' rel='noopener noreferrer'><FaYoutube size={36} /></a>
        </div>
        <div className='copyright-container'>
          <p className='footer-p'>Copyright © 2024 Harmony With Nature Institute - All Rights Reserved</p>
        </div>
        <div className='policy-container'>
          {/* <h3 className='footer-title'>Social Media</h3> */}
          <a className='footer-p footer-link'>Privacy Policy</a>
          <a className='footer-p footer-link'>Terms & Conditions</a>
          <a className='footer-p footer-link'>Disclaimer</a>
        </div>
      </div>
      {/* <div className='footer-submit-container'>
        <div>
        <h3 className='footer-submit-title'>Receive Updates</h3>
        </div>
        <div className='footer-submit'>
          <input type='email' id='email' placeholder='Enter Email' className='footer-input'/>
          <button type='button' className='footer-btn btn'>Sign Up </button>
        </div>
      </div> */}
    </div>
  );
}

export default Footer;
