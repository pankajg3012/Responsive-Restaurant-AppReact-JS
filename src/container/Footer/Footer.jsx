import React from 'react';

import './Footer.css';
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

import { Newsletter, FooterOverlay } from '../../components'
import { images } from '../../constants'
import reslogo from '../../assets/restaurant_logo.jpg'

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans"> Dahukarwadi Ganesh Nagar Dadar West 400063</p>
        <p className="p__opensans"> +91 123-456-45678 </p>
        <p className="p__opensans"> +91 143-456-45678  </p>
      </div>
      <div className="app__footer-links_logo">
        <img src={reslogo} alt="mainlogo" />
        <p className="p__opensans"> "The Best Way To Find Yourself In Service To Others."</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: '15px' }} />
        <div className="app__footer-links_icon">
          <FaWhatsapp />
          <FiFacebook />
          <FiLinkedin />
          <FiInstagram />
          <FiTwitter/>
        </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
      <p className="p__opensans"> Monday-Friday:</p>
      <p className="p__opensans"> 8:00 am To 12:00 am </p>
      <p className="p__opensans"> Saturday-Sunday: </p>
      <p className="p__opensans"> 7:00 am To 11:00 pm </p>

      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022  Siddhi Vinayak Restaurant. All Reserved Right</p>
    </div>
  </div>
);

export default Footer;
