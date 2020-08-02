// carousel groups for desktop version
const carouselSlides = document.getElementsByClassName('carousel-slide');

export const createGroups = (firstElementIndex, direction = 'forwards') => {
  const positions = [firstElementIndex];
  let index = firstElementIndex;
  for (let i = 0; i < 2; i++) {
    if (direction === 'forwards') {
      index = index === carouselSlides.length - 1 ? 0 : index + 1;
      positions.push(index);
    }
    if (direction === 'backwards') {
      index = index === 0 ? carouselSlides.length - 1 : index - 1;
      positions.unshift(index);
    }
  }
  return positions;
};

export const createGroupSlide = (arr, className) => {
  const div = document.createElement('div');
  carousel.appendChild(div);
  div.classList.add('carousel-group', className);
  for (let i = 0; i < arr.length; i++) {
    const slideElement = carouselSlides[arr[i]].cloneNode(true);
    slideElement.className = 'carousel-card';
    div.appendChild(slideElement);
  }
  return div;
};

export const initiateCarouselGroups = (slide) => {
  const current = createGroups(slide, 'forwards');
  const next =
    current[2] === carouselSlides.length - 1
      ? createGroups(0)
      : createGroups(current[2] + 1);
  const previous =
    slide === 0
      ? createGroups(carouselSlides.length - 1, 'backwards')
      : createGroups(slide - 1, 'backwards');

  createGroupSlide(next, 'carousel-next');
  createGroupSlide(current, 'carousel-active');
  createGroupSlide(previous, 'carousel-previous');
};

export const moveGroup = (group, way) => {
  const current = createGroups(group, 'forwards');
  const next =
    current[2] === carouselSlides.length - 1
      ? createGroups(0)
      : createGroups(current[2] + 1);
  const previous =
    group === 0
      ? createGroups(carouselSlides.length - 1, 'backwards')
      : createGroups(group - 1, 'backwards');

  if (document.getElementsByClassName('carousel-active')[0]) {
    if (way === 'next') {
      document.getElementsByClassName('carousel-previous')[0].remove();
      document.getElementsByClassName('carousel-active')[0].className =
        'carousel-group carousel-previous';
      document.getElementsByClassName('carousel-next')[0].className =
        'carousel-group carousel-active';
      createGroupSlide(next, 'carousel-next');
    }
    if (way === 'previous') {
      document.getElementsByClassName('carousel-next')[0].remove();
      document.getElementsByClassName('carousel-active')[0].className =
        'carousel-group carousel-next';
      document.getElementsByClassName('carousel-previous')[0].className =
        'carousel-group carousel-active';
      createGroupSlide(previous, 'carousel-previous');
    }
  }
};
