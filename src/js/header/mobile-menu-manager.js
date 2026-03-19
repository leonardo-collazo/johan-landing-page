const mobileMenu = document.getElementById("mobile-menu");

function showMobileMenu() {
  mobileMenu.classList.remove("animate__pullUp");
  mobileMenu.classList.add("animate__pullDown");
}

function hideMobileMenu() {
  mobileMenu.classList.remove("animate__pullDown");
  mobileMenu.classList.add("animate__pullUp");
}

export { showMobileMenu, hideMobileMenu };
