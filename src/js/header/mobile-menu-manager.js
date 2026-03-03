const mobileMenu = document.getElementById("mobile-menu");

function showMobileMenu() {
  mobileMenu.style.visibility = "visible";
  mobileMenu.classList.remove("animate__fadeOutRight");
  mobileMenu.classList.add("animate__fadeInRight");
}

function hideMobileMenu() {
  mobileMenu.classList.remove("animate__fadeInRight");
  mobileMenu.classList.add("animate__fadeOutRight");
}

export { showMobileMenu, hideMobileMenu };
