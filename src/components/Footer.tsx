import logo from './logo.svg';
import '../App.scss';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
        <p><FaFacebookSquare /></p>
        <p><FaSquareXTwitter /></p>
        <p><FaSquareInstagram /></p>
        <p><FaYoutube /></p>
        <p><FaLock /></p>
    </div>
  );
}

export default Footer;
