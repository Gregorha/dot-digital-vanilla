import React from 'react';

export const CarouselArrow = (props) => {
  return (
    <svg
      onClick={props.moveSlide}
      className={`arrow carousel-btn ${props.className}`}
      style={{ transform: `rotate(${props.rotate}deg)` }}
      id={props.id}
      width="150"
      height="210"
      viewBox="0 0 150 210"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m37.6 169.6-33.7-33.3 0.2-36.5 57.1 56.6v-152.6h28.5v152.6l57.1-56.6v36.6l-33.7 33.5c-18.5 18.4-35.5 33.4-37.7 33.2-2.2-0.2-19.2-15.3-37.7-33.6z"
        stroke-width="4"
      />
    </svg>
  );
};

export default CarouselArrow;
