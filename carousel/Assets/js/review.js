const carousel = document.querySelector('.carousel');
const slides = Array.from(carousel.children);
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const slideWidth = slides[0].getBoundingClientRect().width;
let currentPosition = 0;

function moveToSlide(carousel, currentSlide, targetSlide) {
  const position = targetSlide.style.left.split('px')[0];
  carousel.style.transform = `translateX(-${position}px)`;
  currentSlide.classList.remove('active-slide');
  targetSlide.classList.add('active-slide');
}

function updateButtons(currentPosition, slides, prevButton, nextButton) {
  prevButton.disabled = currentPosition === 0;
  nextButton.disabled = currentPosition === slides.length - 1;
}

function setPositionOfSlides(slides) {
  let offset = 0;
  slides.forEach((slide, index) => {
    slide.style.left = `${offset}px`;
    offset += slideWidth;
  });
}

setPositionOfSlides(slides);
updateButtons(currentPosition, slides, prevButton, nextButton);

prevButton.addEventListener('click', () => {
  const currentSlide = slides[currentPosition];
  if (currentPosition > 0) {
    currentPosition--;
    const targetSlide = slides[currentPosition];
    moveToSlide(carousel, currentSlide, targetSlide);
    updateButtons(currentPosition, slides, prevButton, nextButton);
  }
});

nextButton.addEventListener('click', () => {
  const currentSlide = slides[currentPosition];
  if (currentPosition < slides.length - 1) {
    currentPosition++;
    const targetSlide = slides[currentPosition];
    moveToSlide(carousel, currentSlide, targetSlide);
    updateButtons(currentPosition, slides, prevButton, nextButton);
  }
});
