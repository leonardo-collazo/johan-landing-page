import { getLanguage, setLanguage } from "./manage-language.js";
import { loadLanguageIcon } from "./load-language-icon.js";

function loadLanguage() {
  const currentLanguage = getLanguage();
  setLanguage(currentLanguage);
}

loadLanguage();
loadLanguageIcon();
