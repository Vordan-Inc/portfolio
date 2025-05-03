import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./GlobalStyles";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("language") || "en";
    });

    const { i18n } = useTranslation();

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        localStorage.setItem("language", language);
        i18n.changeLanguage(language);
    }, [language, i18n]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const changeLanguage = (lng) => {
        setLanguage(lng);
    };

    const isMobile = useMediaQuery({
        query: "(min-width: 180px) and (max-width: 767px)",
    });

    const isTablet = useMediaQuery({
        query: "(min-width: 768px) and (max-width: 900px)",
    });

    const isLight = theme === "light";
    const themeObject = isLight ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
                isLight,
                isMobile,
                isTablet,
                language,
                changeLanguage,
            }}
        >
            <StyledThemeProvider theme={themeObject}>
                <GlobalStyles />
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};
