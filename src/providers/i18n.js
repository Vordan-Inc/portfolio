import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import en from "../utils/translations/locales/en.json";
import am from "../utils/translations/locales/am.json";

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        debug: true,
        locale: "en",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: { translation: en },
            am: { translation: am },
        },
    });

export default i18n;
