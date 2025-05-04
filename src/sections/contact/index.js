import React from "react";
import Container from "../../components/Container";
import { LightBlock, ContactBox, ContactCard, SubText } from "./styled";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
    const { t } = useTranslation();

    const contact = t("contact-info.contact", { returnObjects: true });
    const locations = t("contact-info.locations", { returnObjects: true });

    return (
        <LightBlock id="contact">
            <Container>
                <h2 className="section-header">{t("contact-info.header")}</h2>
                <SubText>{t("contact-info.intro")}</SubText>
                <ContactBox>
                    <ContactCard>
                        <h3>{t("contact-info.detailsTitle")}</h3>
                        <ul>
                            <li>
                                <strong>{t("contact-info.emailLabel")}:</strong> {contact.email}
                            </li>
                            <li>
                                <strong>{t("contact-info.phoneLabel")}:</strong> {contact.phone}
                            </li>
                            <li>
                                <strong>{t("contact-info.workingLabel")}:</strong> {contact.hours}
                            </li>
                        </ul>
                    </ContactCard>

                    <ContactCard>
                        <h3>{t("contact-info.locationsTitle")}</h3>
                        <ul>
                            {locations.map((loc, i) => (
                                <li key={i}>
                                    <strong>{loc.label}:</strong>
                                    <br />
                                    {loc.address}
                                </li>
                            ))}
                        </ul>
                    </ContactCard>
                </ContactBox>
            </Container>
        </LightBlock>
    );
};

export default ContactSection;
