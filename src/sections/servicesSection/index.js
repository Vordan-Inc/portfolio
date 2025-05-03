import React from "react";
import Container from "../../components/Container";
import { DarkBlock, BlockList, IconsList } from "./styled";

import {
    Syringe,
    Database,
    FileJson,
    UserCog,
    CloudCog,
    Code,
    AppWindow,
    Globe,
    ShieldCheck,
    ServerCog,
    ChartNoAxesCombined,
    Wrench,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const ICON_SIZE = 48;

const ServicesSection = () => {
    const { t } = useTranslation();

    const data = [
        {
            icons: [
                <Syringe size={ICON_SIZE} key="1" />,
                <Database size={ICON_SIZE} key="2" />,
                <FileJson size={ICON_SIZE} key="3" />,
            ],
            header: t("integration-title"),
            list: [
                t("integration-1"),
                t("integration-2"),
                t("integration-3"),
                t("integration-4"),
                t("integration-5"),
            ],
        },
        {
            icons: [
                <UserCog size={ICON_SIZE} key="1" />,
                <CloudCog size={ICON_SIZE} key="2" />,
                <ChartNoAxesCombined size={ICON_SIZE} key="3" />,
            ],
            header: t("crm-title"),
            list: [
                t("crm-1"),
                t("crm-2"),
                t("crm-3"),
                t("crm-4"),
                t("crm-5"),
            ],
        },
        {
            icons: [
                <Code size={ICON_SIZE} key="1" />,
                <AppWindow size={ICON_SIZE} key="2" />,
                <Globe size={ICON_SIZE} key="3" />,
            ],
            header: t("web-title"),
            list: [
                t("web-1"),
                t("web-2"),
                t("web-3"),
                t("web-4"),
                t("web-5"),
            ],
        },
        {
            icons: [
                <ShieldCheck size={ICON_SIZE} key="1" />,
                <ServerCog size={ICON_SIZE} key="2" />,
                <Wrench size={ICON_SIZE} key="3" />,
            ],
            header: t("support-title"),
            list: [
                t("support-1"),
                t("support-2"),
                t("support-3"),
                t("support-4"),
                t("support-5"),
            ],
        },
    ];
    return (
        <DarkBlock id="services">
            <Container>
                <h2 className="section-header">{t("our-services")}</h2>

                <BlockList>
                    {data.map((service, index) => (
                        <div key={index}>
                            <IconsList>
                                {service.icons.map((icon, i) => (
                                    <span key={i}>{icon}</span>
                                ))}
                            </IconsList>
                            <h3>{service.header}</h3>
                            <ul>
                                {service.list.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </BlockList>
            </Container>
        </DarkBlock>
    );
};

export default ServicesSection;
