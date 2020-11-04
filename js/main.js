/* Работа с формой */
const contactsLink = document.querySelector(".contacts-button");
const writeUs = document.querySelector(".write-us");
const writeUsClose = document.querySelector(".write-us-close");

const writeUsForm = writeUs.querySelector(".write-us-form");
const writeUsName = writeUsForm.querySelector("[name=write-us-name]");
const writeUsEmail = writeUsForm.querySelector("[name=write-us-email]");
const writeUsText = writeUsForm.querySelector("[name=write-us-text]");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUs.classList.add("popup-show");

  if (storageName && storageEmail) {
    writeUsName.value = storageName;
    writeUsEmail.value = storageEmail;
    writeUsText.focus();
  } else {
    writeUsName.focus();
  }
});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUs.classList.remove("popup-show");
  writeUs.classList.remove("popup-error");
});

writeUsForm.addEventListener("submit", function (evt) {
  if (!writeUsName.value || !writeUsEmail.value || !writeUsText.value) {
    evt.preventDefault();
    writeUsForm.classList.remove("popup-error");
    writeUsForm.offsetWidth = writeUsForm.offsetWidth;
    writeUsForm.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", writeUsName.value);
      localStorage.setItem("email", writeUsEmail.value);
    }
  }
});



/* Работа с картой */
const mapLink = document.querySelector(".map-img");
const mapPopup = document.querySelector(".popup-map");
const mapClose = document.querySelector(".map-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("popup-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.code === "Escape") {
    if (mapPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("popup-show");
      mapPopup.classList.remove("popup-error");
    }
    if (writeUs.classList.contains("popup-show")) {
      evt.preventDefault();
      writeUs.classList.remove("popup-show");
      writeUs.classList.remove("popup-error");
      console.log("ESC writeue")
    }
  }
});


/* Интеактивность страниц */
/* Добавление в корзину */
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

/* Сервисы */
const service1 = document.querySelector(".service-item:first-child");
const service2 = document.querySelector(".service-item:nth-child(2)");
const service3 = document.querySelector(".service-item:nth-child(3)");
const serviceDescription1 = document.querySelector(".service-description:first-child");
const serviceDescription2 = document.querySelector(".service-description:nth-child(2)");
const serviceDescription3 = document.querySelector(".service-description:nth-child(3)");

service1.addEventListener("click", function (evt) {
  evt.preventDefault();
  service1.classList.add("service-active");
  service2.classList.remove("service-active");
  service3.classList.remove("service-active");
  serviceDescription1.classList.add("service-description-active");
  serviceDescription2.classList.remove("service-description-active");
  serviceDescription3.classList.remove("service-description-active");
});

service2.addEventListener("click", function (evt) {
  evt.preventDefault();
  service2.classList.add("service-active");
  service1.classList.remove("service-active");
  service3.classList.remove("service-active");
  serviceDescription2.classList.add("service-description-active");
  serviceDescription1.classList.remove("service-description-active");
  serviceDescription3.classList.remove("service-description-active");
});

service3.addEventListener("click", function (evt) {
  evt.preventDefault();
  service3.classList.add("service-active");
  service2.classList.remove("service-active");
  service1.classList.remove("service-active");
  serviceDescription3.classList.add("service-description-active");
  serviceDescription2.classList.remove("service-description-active");
  serviceDescription1.classList.remove("service-description-active");
});

/* Слайдер */
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
