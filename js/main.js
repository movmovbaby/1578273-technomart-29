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
  writeUs.classList.add("write-us-show");

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
  writeUs.classList.remove("write-us-show");
  writeUs.classList.remove("write-us-error");
});

writeUsForm.addEventListener("submit", function (evt) {
  if (!writeUsName.value || !writeUsEmail.value || !writeUsText.value) {
    evt.preventDefault();
    writeUsForm.classList.remove("write-us-error");
    writeUsForm.offsetWidth = writeUsForm.offsetWidth;
    writeUsForm.classList.add("write-us-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", writeUsName.value);
      localStorage.setItem("email", writeUsEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.code === "Escape") {
    if (writeUs.classList.contains("write-us-show")) {
      evt.preventDefault();
      writeUs.classList.remove("write-us-show");
      writeUs.classList.remove("write-us-error");
    }
  }
});
