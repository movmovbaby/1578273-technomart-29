const mapLink = document.querySelector(".map-img");
const mapPopup = document.querySelector(".popup-map");
const mapClose = document.querySelector(".map-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("popup-map-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("popup-map-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.code === "Escape") {
    if (mapPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("popup-show");
      mapPopup.classList.remove("popup-error");
    }
  }
});
