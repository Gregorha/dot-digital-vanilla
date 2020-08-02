import validateForm from './formValidate.js';
import phoneMask from './phoneMask.js';
import { moveSlide, initiateCarouselSlides } from './carouselSlides.js';
import { moveGroup, initiateCarouselGroups, createGroups } from './carouselGroups.js';

const slider = document.getElementsByClassName('slider')[0];
const selectors = document.getElementsByClassName('selector');

const headerArw = document.getElementsByClassName('navTo');
const carousel = document.getElementById('carousel');

for (let i = 0; i < headerArw.length; i++) {
  headerArw[i].addEventListener('click', (e) => {
    e.preventDefault();
    carousel.scrollIntoView({
      behavior: 'smooth',
    });
  });
}

for (let i = 0; i < selectors.length; i++) {
  selectors[i].addEventListener('click', () => showSlide(i));
}
const showSlide = (n) => {
  slider.style.transform = `translateX(${-100 * n}%)`;
  for (let i = 0; i < selectors.length; i++) {
    selectors[i].className = 'selector';
  }
  selectors[n].className = 'selector selected';
};

//carousel

const carouselSlides = document.getElementsByClassName('carousel-slide');
const carouselNextBtnDesk = document.getElementById('cnb-desktop');
const carouselPreviousBtnDesk = document.getElementById('cpb-desktop');
const carouselNextBtn = document.getElementById('carousel-next-btn');
const carouselPreviousBtn = document.getElementById('carousel-previous-btn');

let slide = 0;

window.onresize = () => {
  if (screen.width < 768) {
    initiateCarouselSlides(slide);
    return null;
  } else {
    for (let i = 0; i < carouselSlides.length; i++) {
      carouselSlides[i].className = 'carousel-slide';
    }
  }
};

if (screen.width < 768) {
  if (!document.getElementsByClassName('carousel-group')[0]) {
    initiateCarouselSlides(slide);
  }
}
initiateCarouselGroups(slide);

const nextSlide = () => {
  if (screen.width < 768) {
    slide = slide === carouselSlides.length - 1 ? 0 : slide + 1;
    moveSlide(slide);
    return null;
  }
  const prevActiveSlide = createGroups(slide, 'forwards');
  slide = prevActiveSlide[2] === carouselSlides.length - 1 ? 0 : prevActiveSlide[2] + 1;
  moveGroup(slide, 'next');
};

const previousSlide = () => {
  if (screen.width < 768) {
    slide = slide === 0 ? carouselSlides.length - 1 : slide - 1;
    moveSlide(slide);
    return null;
  }
  slide =
    slide === 0 ? createGroups(carouselSlides.length - 1, 'backwards')[0] : createGroups(slide - 1, 'backwards')[0];
  moveGroup(slide, 'previous');
};

carouselNextBtn.addEventListener('click', nextSlide);
carouselPreviousBtn.addEventListener('click', previousSlide);
carouselNextBtnDesk.addEventListener('click', nextSlide);
carouselPreviousBtnDesk.addEventListener('click', previousSlide);

//accordion

const accordionButtons = document.getElementsByClassName('accordion-button');

for (let i = 0; i < accordionButtons.length; i++) {
  const accordionButton = accordionButtons[i];
  accordionButton.addEventListener('click', () => {
    accordionButton.classList.toggle('accordion-btn-active');
    accordionButton.nextElementSibling.classList.toggle('accordion-active');
  });
}

// phone mask

const phoneInput = document.getElementById('telefone');
phoneInput.addEventListener('input', (e) => phoneMask(e, phoneInput));

// validate form

form.addEventListener('submit', validateForm);
