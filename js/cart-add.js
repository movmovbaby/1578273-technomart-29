const addToCart = document.querySelector(".cart-add");
const addToCartClose = addToCart.querySelector(".popup-button-cross");
const continueShopping = addToCart.querySelector(".popup-continue-button");

const buyButtons = document.querySelectorAll(".buy-button");

const cartAdd = function (evt) {
  evt.preventDefault();
  addToCart.classList.add("popup-show");
};

for (let i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener("click", cartAdd, false);
}

addToCartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  addToCart.classList.remove("popup-show");
});

continueShopping.addEventListener("click", function (evt) {
  evt.preventDefault();
  addToCart.classList.remove("popup-show");
});
