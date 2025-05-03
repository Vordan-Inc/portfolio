import React from "react";
import HeaderPic from "../../assets/header_picture-Photoroom.png";

import { MainSectionBlock } from "./styled";
import Container from "../../components/Container";
import { useTranslation } from "react-i18next";

const MainSection = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <MainSectionBlock id="home">
                <div>
                    <h1>{t("main-header")}</h1>

                    <p>{t("main-sub-header")}</p>

                    <p>{t("main-sub-header-2")}</p>

                    <a href="#services" className="btn">
                        <span>{t("our-services")}</span>
                    </a>
                </div>
                <div>
                    <img className="banner" src={HeaderPic} alt="header" />
                </div>
            </MainSectionBlock>
        </Container>
    );
};

export default MainSection;
