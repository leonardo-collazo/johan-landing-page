import { loadLanguageIcon } from "./load-language-icon.js";

const languageIcon = document.getElementById("language-icon");

function zoomInLanguageIcon() {
  languageIcon.classList.remove("animate__zoomOut");
  languageIcon.classList.add("animate__zoomIn");
}

function zoomOutLanguageIcon() {
  languageIcon.classList.remove("animate__zoomIn");
  languageIcon.classList.add("animate__zoomOut");
}

function changeLanguageIcon() {
  zoomOutLanguageIcon();
  setTimeout(loadLanguageIcon, 250);
  setTimeout(zoomInLanguageIcon, 250);
}

export { languageIcon, changeLanguageIcon };
