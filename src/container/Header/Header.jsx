import React from 'react';

import './Header.css';
import {images} from '../../constants'
import {SubHeading} from '../../components'

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
<SubHeading title="Chase The New Flavour"/>
<h1 className="app__header_h1">The Key To Fine Dinning</h1>
<p className='p__opensans' style={{margin:'2rem 0'}}>Sit Tell Us Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, vero doloribus fugiat ex nam quos a inventore nulla accusantium corrupti provident perspiciatis cum, nisi deleniti labore maiores quas tenetur impedit.</p>
<button type="button" className='custom__button'>Explore Menu</button>
   </div>
   <div className="app__wrapper_img">
<img src={images.welcome} alt="header_img" className=""/>
   </div>
  </div>
);

export default Header;
