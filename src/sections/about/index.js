import React from "react";
import Container from "../../components/Container";
import { LightBlock, AboutBox } from "./styled";
import { useTranslation } from "react-i18next";
import RocketPic from "../../assets/rocket.png";

const AboutSection = () => {
    const { t } = useTranslation();

    return (
        <LightBlock id="about">
            <Container>
                <h2 className="section-header">{t("about")}</h2>
                <AboutBox>
                    <div>
                        <h3>Vordan</h3>
                        <p>{t("about-info.vordanDescription1")}</p>
                        <p>{t("about-info.vordanDescription2")}</p>
                        <p>{t("about-info.vordanDescription3")}</p>
                    </div>    
                    <img src={RocketPic} />                 
                </AboutBox>
            </Container>
        </LightBlock>
    );
};

export default AboutSection;
