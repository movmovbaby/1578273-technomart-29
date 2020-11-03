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
