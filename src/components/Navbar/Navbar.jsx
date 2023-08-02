import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import './Navbar.css';
import reslogo from '../../assets/restaurant_logo.jpg'
import { MdRestaurantMenu } from 'react-icons/md'


const Navbar = () => {

  const [ toggleMenu , setToggleMenu ] = useState(false)

  return (
    <nav className='app_navbar'>

      <div className="app_navbar_logo">
        <img src={reslogo} alt="restaurant" />
      </div>

      <ul className="app_nav_links">
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className="app-nav_login">
        <a href="#login" className='p__opensans'>Log In/Register</a>
        <div />
        <a href="book_table">Book Table</a>
      </div>


      <div className="app_nav_smallscreen">

        <GiHamburgerMenu color="white" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
        <div className="app_navbar_smallscreen_overplay flex__center slide-bottom">
          <MdRestaurantMenu className='overplay_close' fontSize={27} onClick={() => setToggleMenu(false)} />
          <ul className="app_nav_smallscreen_links">
            <li className='p__opensans'><a href="#home">Home</a></li>
            <li className='p__opensans'><a href="#menu">Menu</a></li>
            <li className='p__opensans'><a href="#awards">Awards</a></li>
            <li className='p__opensans'><a href="#about">About</a></li>
            <li className='p__opensans'><a href="#contact">Contact</a></li>
          </ul>
        </div>
        )}
      </div>

    </nav>
  )
};

export default Navbar;
