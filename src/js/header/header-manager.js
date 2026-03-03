import { showMobileMenu, hideMobileMenu } from "./mobile-menu-manager.js";
import { turnIconToCross, turnIconToBurger } from "./burger-icon-manager.js";

const header = document.getElementById("header");
const companyName = document.getElementById("company-name");
const aboutTab = document.getElementById("about-tab");
const servicesTab = document.getElementById("services-tab");
const contactTab = document.getElementById("contact-tab");
const burgerIcon = document.getElementById("burger-icon");
const mobileMenuOptions = Array.from(
  document.getElementsByClassName("mobile-menu__element")
);
let toggle = false;

function manage() {
  if (!toggle) {
    turnIconToCross();
    showMobileMenu();
    toggle = true;
  } else {
    turnIconToBurger();
    hideMobileMenu();
    toggle = false;
  }
}

function setMobileMenuOptions() {
  mobileMenuOptions.forEach(option => {
    option.addEventListener("click", () => {
      turnIconToBurger();
      hideMobileMenu();
      toggle = false;
    });
  });
}

function onScrollY() {
  if (window.scrollY > 70) {
    header.classList.add("bg-white/90");
    companyName.classList.remove("text-white");
    aboutTab.classList.remove("text-white");
    servicesTab.classList.remove("text-white");
    contactTab.classList.remove("text-white");
  } else {
    header.classList.remove("bg-white/90");
    companyName.classList.add("text-white");
    aboutTab.classList.add("text-white");
    servicesTab.classList.add("text-white");
    contactTab.classList.add("text-white");
  }
}

window.addEventListener("scroll", onScrollY);
burgerIcon.addEventListener("click", manage);
setMobileMenuOptions();
