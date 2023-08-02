import React from 'react';

import { images, data } from "../../constants";
import { SubHeading } from "../../components";

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title='Contact' />
      <h1 className="headtext__cormorant" >Find Us</h1>
      <div className="app__wrapper_content">
      <p className='p__opensans'>Dahanukar Wadi Dadar West Mumbai 400067 </p>
      <p className='p__opensans'>opening Hours</p>
      <p className='p__opensans'>Mon-Fri: 10 am to 1 am</p>
      <p className='p__opensans'>Sat-Sun: 12 pm to 8 pm</p>
      </div>
      <button type="button" className='custom__button' style={{marginTop:'3rem'}}>View Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="" />
    </div>
  </div>
);

export default FindUs;
