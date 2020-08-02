//carousel Slides for mobile version
const carouselSlides = document.getElementsByClassName('carousel-slide');

export const initiateCarouselSlides = (slide) => {
  const iNext = slide === carouselSlides.length - 1 ? 0 : slide + 1;
  const iPrevious = slide === 0 ? carouselSlides.length - 1 : slide - 1;
  carouselSlides[slide].classList.add('carousel-active');
  carouselSlides[iNext].classList.add('carousel-next');
  carouselSlides[iPrevious].classList.add('carousel-previous');
};

export const moveSlide = (slide) => {
  for (let i = 0; i < carouselSlides.length; i++) {
    carouselSlides[i].className = 'carousel-slide';
  }
  const iNext = slide === carouselSlides.length - 1 ? 0 : slide + 1;
  const iPrevious = slide === 0 ? carouselSlides.length - 1 : slide - 1;
  carouselSlides[slide].classList.add('carousel-active');
  carouselSlides[iNext].classList.add('carousel-next');
  carouselSlides[iPrevious].classList.add('carousel-previous');
};
