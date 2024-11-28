'use strict';
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.arrow-left');
const nextButton = document.querySelector('.arrow-right');

let currentIndex = 0;

function updateSlide(index) {
  const slideWidth = slide[0].clientWidth;
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? slide.length - 1 : currentIndex - 1;
  updateSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === slide.length - 1) ? 0 : currentIndex + 1;
  updateSlide(currentIndex);
});
