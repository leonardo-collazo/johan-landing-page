import { getLanguage } from "../language/manage-language.js";
import { languages, i18n } from "../constants/constants.js";

const heroSection = document.getElementById("hero-section");
const heroSectionHeader = document.getElementById("hero-section-header");
const heroSectionInfo = document.getElementById("hero-section-info");
const heroSectionButton = document.getElementById("hero-section-button");

let currentOption = 1;
const maxOptions = 2;

function updateCurrentOption() {
  if (currentOption < maxOptions) {
    currentOption++;
  } else {
    currentOption = 1;
  }
}

function updateHeroSectionText() {
  heroSectionHeader.setAttribute(
    "i18n",
    `hero-section-header-${currentOption}`,
  );
  heroSectionInfo.setAttribute("i18n", `hero-section-info-${currentOption}`);

  const heroSectionHeaderKey = heroSectionHeader.getAttribute("i18n");
  const heroSectionInfoKey = heroSectionInfo.getAttribute("i18n");
  const currentLanguage = getLanguage();
  const translations =
    currentLanguage === languages.english ? i18n.eng : i18n.esp;

  heroSectionHeader.textContent = translations[heroSectionHeaderKey];
  heroSectionInfo.textContent = translations[heroSectionInfoKey];
}

function updateHeroSectionBackground() {
  let backgroundUrl = "";
  const screenWidth = window.innerWidth;

  if (screenWidth < 425) {
    backgroundUrl = `src/assets/pictures/hero-background-small-${currentOption}.jpg`;
  } else if (screenWidth < 1024) {
    backgroundUrl = `src/assets/pictures/hero-background-medium-${currentOption}.jpg`;
  } else {
    backgroundUrl = `src/assets/pictures/hero-background-large-${currentOption}.jpg`;
  }

  heroSection.style.backgroundImage = `url(${backgroundUrl})`;
}

function removeHeroSectionAnimations() {
  heroSectionHeader.classList.remove(
    "animate__animated",
    "animate__fadeInUp",
    "animate__fadeInUp--hero-section",
  );
  heroSectionInfo.classList.remove(
    "animate__animated",
    "animate__fadeInUp",
    "animate__fadeInUp--hero-section",
  );
  heroSectionButton.classList.remove(
    "animate__animated",
    "animate__fadeInUp",
    "animate__fadeInUp--hero-section",
  );
}

function addHeroSectionAnimations() {
  heroSectionHeader.classList.add(
    "animate__animated",
    "animate__fadeInUp",
    "animate__fadeInUp--hero-section",
  );
  heroSectionInfo.classList.add(
    "animate__animated",
    "animate__fadeInUp",
    "animate__fadeInUp--hero-section",
  );
  heroSectionButton.classList.add(
    "animate__animated",
    "animate__fadeInUp",
    "animate__fadeInUp--hero-section",
  );
}

function resetHeroSectionAnimations() {
  removeHeroSectionAnimations();

  void heroSectionHeader.offsetWidth;
  void heroSectionInfo.offsetWidth;

  addHeroSectionAnimations();
}

function updateHeroSection() {
  updateCurrentOption();
  updateHeroSectionText();
  updateHeroSectionBackground();
  resetHeroSectionAnimations();
}

setInterval(updateHeroSection, 10000);
window.addEventListener("resize", updateHeroSectionBackground);
