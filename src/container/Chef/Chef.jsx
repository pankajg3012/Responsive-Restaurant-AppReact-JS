import React from 'react';

import './Chef.css';
import { images } from '../../constants'
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper  section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title='Chefs Word' />
      <h1 className="headtext__cormorant">What We Believe In </h1>
      <div className='app__info-content'>
        <div className='app__info-content_quote'>
          <img src={images.quote} alt="qoute" />
          <p className='p__opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit enim quod aspernatur fugiat facere </p>
        </div>
        <p className='p__opensans'>fuga totam libero soluta, odio consectetur repudiandae et, in dolorem modi! Sunt, distinctio!</p>
      </div>
      <div className='app__chef-sign'>
          <p>kevin luio</p>
         <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>

    </div>

  </div>
);

export default Chef;
