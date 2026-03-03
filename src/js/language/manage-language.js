import { languageKey, languages, i18n } from "../constants/constants.js";

function getLanguage() {
  let currentLanguage = localStorage.getItem(languageKey);
  if (!currentLanguage) {
    currentLanguage = languages.english;
  }
  return currentLanguage;
}

function setLanguage(language) {
  const i18nElements = document.querySelectorAll("[i18n]");
  const translations = language === languages.english ? i18n.eng : i18n.esp;
  i18nElements.forEach(element => {
    const key = element.getAttribute("i18n");
    element.textContent = translations[key];
  });
}

export { getLanguage, setLanguage };
