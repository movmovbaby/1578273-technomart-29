const slider = document.querySelector(".slider");
const slide1 = slider.querySelector(".promo-slider-item:first-child");
const slide2 = slider.querySelector(".promo-slider-item:nth-child(2)");

const buttonLeft = slider.querySelector(".to-left");
const buttonRight = slider.querySelector(".to-right");

buttonLeft.addEventListener("click", function (evt) {
  evt.preventDefault();
  slide1.classList.toggle("active-slide");
  slide2.classList.toggle("active-slide");
});

buttonRight.addEventListener("click", function (evt) {
  evt.preventDefault();
  slide1.classList.toggle("active-slide");
  slide2.classList.toggle("active-slide");
});
