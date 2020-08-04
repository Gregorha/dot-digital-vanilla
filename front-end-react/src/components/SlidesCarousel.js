import React, { useEffect, useState } from 'react';
import NavArrow from './NavArrow';
import { Carousel } from 'antd';
import './SlidesCarousel.css';
import picture0 from '../images/1-nature.jpg';
import picture1 from '../images/2-nature.jpg';
import picture2 from '../images/3-nature.jpg';

const SlidesCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);
  return (
    <div>
      {windowWidth}
      <Carousel>
        <div className="slide">
          <img src={picture0} className="image-slide" alt="nature picture" />
        </div>
        <div className="slide">
          <img src={picture1} className="image-slide" alt="nature picture" />
        </div>
        <div className="slide">
          <img src={picture2} className="image-slide" alt="nature picture" />
        </div>
      </Carousel>
    </div>
  );
};

export default SlidesCarousel;
