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
    Wrench
} from "lucide-react";
import { useTranslation } from "react-i18next";

const ICON_SIZE = 48;

const data = [
    {
        icons: [
            <Syringe size={ICON_SIZE} key="1" />,
            <Database size={ICON_SIZE} key="2" />,
            <FileJson size={ICON_SIZE} key="3" />,
        ],
        header: "System Integration & Automation",
        list: [
            "Integration with local accounting and business platforms such as AS-Trade, AS-Accountant, and 1C.",
            "Custom data import from Excel, CSV, and other file formats into databases.",
            "API development using REST, SOAP, and GraphQL for seamless system interoperability.",
            "Automation of routine tasks with scheduled job execution.",
            "Telegram and WhatsApp bot development.",
        ],
    },
    {
        icons: [
            <UserCog size={ICON_SIZE} key="1" />,
            <CloudCog size={ICON_SIZE} key="2" />,
            <ChartNoAxesCombined size={ICON_SIZE} key="3" />,
        ],
        header: "CRM & ERP Solutions",
        list: [
            "Development of CRM systems to manage customer interactions and data.",
            "Employee task management and internal workflow automation.",
            "Multi-role access control and permissions system.",
            "Integration with third-party tools like email, messaging platforms, or inventory software.",
            "Reporting dashboards with real-time insights.",
        ],
    },
    {
        icons: [
            <Code size={ICON_SIZE} key="1" />,
            <AppWindow size={ICON_SIZE} key="2" />,
            <Globe size={ICON_SIZE} key="3" />,
        ],
        header: "Web & Software Development",
        list: [
            "Development of modern, responsive websites and online stores tailored to your brand.",
            "Integration of secure payment systems for seamless online transactions.",
            "Real-time features such as live chat, notifications, and activity tracking.",
            "Custom desktop applications that support internal operations and business workflows.",
            "Tools for managing inventory, sales, reporting, and employee tasks—all in one place.",
        ],
    },
    {
        icons: [
            <ShieldCheck size={ICON_SIZE} key="1" />,
            <ServerCog size={ICON_SIZE} key="2" />,
            <Wrench size={ICON_SIZE} key="3" />,
            
        ],
        header: "IT Support & Cybersecurity",
        list: [
            "Setup and maintenance of secure office networks and remote access (VPN).",
            "Installation and configuration of computers, operating systems, and essential software.",
            "Hardware troubleshooting and repair for desktops, laptops, and peripherals.",
            "Security audits to detect system vulnerabilities before real threats do.",
            "Clear reports with practical steps to improve your company's digital safety.",
        ],
    },
];

const ServicesSection = () => {
    const { t } = useTranslation();
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
