import React, { useEffect, useState, useRef } from 'react';
import { Element } from 'react-scroll';
import CarouselArrow from './CarouselArrow';
import { Carousel } from 'antd';
import CarouselSlide from './CarouselSlide';
import loremData from '../../loremData/lorenData';
import './SlidesCarousel.css';

const SlidesCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const {
    prototype: { next },
  } = Carousel;
  console.log(Carousel);
  console.log(next);

  const carousel = useRef(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);
  return (
    <Element name="carousel">
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div id="carousel">
            <Carousel
              ref={carousel}
              dots={false}
              slidesToShow={windowWidth < 768 ? 1 : 3}
              slidesToScroll={windowWidth < 768 ? 1 : 3}
            >
              {loremData.map(({ picture, title, content }) => (
                <CarouselSlide picture={picture}>
                  <h2>{title}</h2>
                  <p>{content}</p>
                </CarouselSlide>
              ))}
            </Carousel>
          </div>
          <CarouselArrow
            id="cnb-desktop"
            className="carousel-btn-desktop"
            rotate={-90}
            moveSlide={() => carousel.current.slick.slickNext()}
          />
          <CarouselArrow
            id="cpb-desktop"
            className="carousel-btn-desktop"
            rotate={90}
            moveSlide={() => carousel.current.slick.slickPrev()}
          />
        </div>
        <div className="carousel-btn-wrapper">
          <CarouselArrow rotate={90} moveSlide={() => carousel.current.slick.slickPrev()} />
          <CarouselArrow rotate={-90} moveSlide={() => carousel.current.slick.slickNext()} />
        </div>
      </div>
    </Element>
  );
};

export default SlidesCarousel;
