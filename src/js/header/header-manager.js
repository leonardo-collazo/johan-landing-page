import { showMobileMenu, hideMobileMenu } from "./mobile-menu-manager.js";
import { turnIconToCross, turnIconToBurger } from "./burger-icon-manager.js";

const burgerIcon = document.getElementById("burger-icon");
const mobileMenuOptions = Array.from(
  document.getElementsByClassName("mobile-menu__element"),
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

burgerIcon.addEventListener("click", manage);
setMobileMenuOptions();
