import logo from './logo.svg';
import '../App.scss';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';

function Footer() {
  return (
    <div className='footer'>
      <div className='about-container'>
        <h3 className='footer-title'>About Us</h3>
        <a className='footer-p'>About</a>
        <a className='footer-p'>Contact</a>
        <a className='footer-p'>Donate</a>
        <a className='footer-p'>Privacy</a>
      </div>
      <div className='social-container'>
        <h3 className='footer-title'>Social Media</h3>
        <a className='footer-p'><span><FaFacebookSquare /></span>Facebook</a>
        <a className='footer-p'><span><FaSquareXTwitter /></span>Twitter</a>
        <a className='footer-p'><span><FaSquareInstagram /></span>Instagram</a>
        <a className='footer-p'><span><FaYoutube /></span>Youtube</a>
      </div>
      <div className='footer-submit-container'>
        <div>
        <h3 className='footer-submit-title'>Receive Updates</h3>
        </div>
        <div className='footer-submit'>
          <input type='email' id='email' placeholder='Enter Email' className='footer-input'/>
          <button type='button' className='footer-btn btn'>Sign Up </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
