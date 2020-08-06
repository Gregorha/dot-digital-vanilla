import React from 'react';

const CarouselSlide = (props) => {
  return (
    <div class="carousel-slide">
      <div class="carousel-content">
        <div class="image-frame">
          <div class="image-frame-inside">
            <img src={props.picture} class="image-fill" alt="nature picture" />
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default CarouselSlide;
