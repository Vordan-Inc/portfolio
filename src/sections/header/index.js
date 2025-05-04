import React, { useContext, useEffect, useState, useRef } from "react";
import {
    MainMenu,
    LogoBox,
    SecondaryMenu,
    Menu,
    Location,
    Nav,
    Toggler,
    MenuLink,
    MenuButton,
    Burger,
    DropDownMenu,
} from "./styled";
import { MapPin, Sun, SunMoon, Menu as MenuIcon, X } from "lucide-react";
import { ThemeContext } from "../../providers/ThemeContext";

import VordanLogo from "../../assets/vordan-logo.svg";
import VordanLogoDark from "../../assets/vordan-logo-dark.svg";
import Container from "../../components/Container";
import { useTranslation } from "react-i18next";

import AmLogo from "../../assets/am.png";
import EnLogo from "../../assets/gb.png";

const Header = () => {
    const { isLight, toggleTheme, changeLanguage, isTablet, isMobile } =
        useContext(ThemeContext);

    const { t } = useTranslation();

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40); // adjust as needed
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    const burgerRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target) &&
                burgerRef.current && !burgerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        console.log(isOpen);

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, setIsOpen]);

    const MENULINKS = [
        { name: t("home"), url: "#home" },
        { name: t("services"), url: "#services" },
        { name: t("projects"), url: "#portfolio" },
        { name: t("about"), url: "#about" },

        //{ name: t("contact"), link: "/contact" },
    ];

    return (
        <Menu>
            <Container>
                <SecondaryMenu scrolled={scrolled}>
                    <Location>
                        <MapPin size={23} />
                        <span>{t("location")}</span>
                    </Location>
                    <Nav>
                        <Toggler onClick={() => changeLanguage("en")}>
                            <img src={EnLogo} alt="en" /> ENG
                        </Toggler>
                        <Toggler onClick={() => changeLanguage("am")}>
                            <img src={AmLogo} alt="am" /> ՀԱՅ
                        </Toggler>
                        <Toggler onClick={toggleTheme}>
                            {isLight ? (
                                <SunMoon size={23} />
                            ) : (
                                <Sun size={23} />
                            )}
                        </Toggler>
                    </Nav>
                </SecondaryMenu>
                <MainMenu>
                    <LogoBox className="logo-box">
                        {(isTablet || isMobile) && (
                            <Burger
                                onClick={() => setIsOpen((prev) => !prev)}
                                ref={burgerRef} isOpen={isOpen}
                            >
                                {isOpen ? <X size={25} /> : <MenuIcon size={25} />}
                            </Burger>
                        )}
                        <img src={isLight ? VordanLogo : VordanLogoDark} alt="logo" />
                    </LogoBox>

                    {(isTablet || isMobile) && (
                        <DropDownMenu isOpen={isOpen} ref={navRef}>
                            {MENULINKS.map((link, index) => (
                                <MenuLink key={index} onClick={() => setIsOpen(false)} href={link.url}>{link.name}</MenuLink>
                            ))}
                            <MenuLink  onClick={() => setIsOpen(false)}>{t("contact")}</MenuLink>
                        </DropDownMenu>
                    )}
                    
                    
                        <Nav>
                            {!(isTablet || isMobile) && MENULINKS.map((link, index) => (
                                <MenuLink key={index} href={link.url}>
                                    {link.name}
                                    <span></span>
                                </MenuLink>
                            ))}
                            <MenuButton>
                                {t("contact")}
                                <span></span>
                            </MenuButton>
                        </Nav>
                    
                </MainMenu>
            </Container>
        </Menu>
    );
};

export default Header;
