import { loadLanguageIcon } from "./load-language-icon.js";

const languageIcon = document.getElementById("language-icon");

function zoomInLanguageIcon() {
  languageIcon.classList.remove("animate__zoomOut--language-icon");
  languageIcon.classList.add("animate__zoomIn--language-icon");
}

function zoomOutLanguageIcon() {
  languageIcon.classList.remove("animate__zoomIn--language-icon");
  languageIcon.classList.add("animate__zoomOut--language-icon");
}

function changeLanguageIcon() {
  zoomOutLanguageIcon();
  setTimeout(loadLanguageIcon, 250);
  setTimeout(zoomInLanguageIcon, 250);
}

export { languageIcon, changeLanguageIcon };
