import React, { useContext, useEffect, useState } from "react";
import {
    MainMenu,
    LogoBox,
    SecondaryMenu,
    Menu,
    Location,
    Nav,
    Toggler,
} from "./styled";
import { MapPin, Sun, SunMoon } from "lucide-react";
import { ThemeContext } from "../../providers/ThemeContext";

import VordanLogo from "../../assets/vordan-logo.svg";
import VordanLogoDark from "../../assets/vordan-logo-dark.svg";
import Container from "../../components/Container";
import { useTranslation } from "react-i18next";

import { ReactComponent as AmLogo } from "../../assets/am.svg";
import { ReactComponent as EnLogo } from "../../assets/gb.svg";

const Header = () => {
    const { isLight, toggleTheme, changeLanguage } = useContext(ThemeContext);

    const { t } = useTranslation();

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40); // adjust as needed
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Menu>
            <Container>
                <SecondaryMenu scrolled={scrolled}>
                    <Location>
                        <MapPin size={21} />
                        <span>Yerevan, Armenia</span>
                    </Location>
                    <Nav>
                        <Toggler onClick={() => changeLanguage("en")}>
                            <EnLogo /> ENG
                        </Toggler>
                        <Toggler onClick={() => changeLanguage("am")}>
                            <AmLogo /> ՀԱՅ
                        </Toggler>
                        <Toggler onClick={toggleTheme}>
                            {isLight ? (
                                <SunMoon size={21} />
                            ) : (
                                <Sun size={21} />
                            )}
                        </Toggler>
                    </Nav>
                </SecondaryMenu>
                <MainMenu>
                    <LogoBox>
                        <img src={isLight ? VordanLogo : VordanLogoDark} />
                    </LogoBox>
                </MainMenu>
            </Container>
        </Menu>
    );
};

export default Header;
