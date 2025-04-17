// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import translationEN from "./locales/en/translation.json"; // Path to English translation file
// import translationNP from "./locales/np/translation.json"; // Path to Nepali translation file

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationEN },
      np: { translation: translationNP }
    },
    
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language if translation is not found
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;
