import React from 'react';
import NavArrow from '../Header/NavArrow';
import { Carousel } from 'antd';
import './Slider.css';
import picture0 from '../../images/1-nature.jpg';
import picture1 from '../../images/2-nature.jpg';
import picture2 from '../../images/3-nature.jpg';

const Slider = () => {
  return (
    <div>
      <NavArrow />
      <Carousel>
        <div className="slide" style={{ backgroundImage: `url(${picture0})` }}>
          <img src={picture0} className="image-slide" alt="nature picture" />
        </div>
        <div className="slide" style={{ backgroundImage: `url(${picture1})` }}>
          <img src={picture1} className="image-slide" alt="nature picture" />
        </div>
        <div className="slide" style={{ backgroundImage: `url(${picture2})` }}>
          <img src={picture2} className="image-slide" alt="nature picture" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
