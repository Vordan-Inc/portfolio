import React from "react";
import Container from "../../components/Container";
import { useTranslation } from "react-i18next";
import { LightBlock, PortfolioEntry, Note } from "./styled";

const ProjectsSection = () => {
    const { t } = useTranslation();

    const data = [
        {
            title: t("project.dictionary.title"),
            date_range: t("project.dictionary.date_range"),
            list: [
                t("project.dictionary.point1"),
                t("project.dictionary.point2"),
                t("project.dictionary.point3"),
            ],
        },
        {
            title: t("project.dental.title"),
            date_range: t("project.dental.date_range"),
            list: [
                t("project.dental.point1"),
                t("project.dental.point2"),
                t("project.dental.point3"),
            ],
        },
        {
            title: t("project.supermarket.title"),
            date_range: t("project.supermarket.date_range"),
            list: [
                t("project.supermarket.point1"),
                t("project.supermarket.point2"),
                t("project.supermarket.point3"),
            ],
        },
        {
            title: t("project.vordan.title"),
            date_range: t("project.vordan.date_range"),
            list: [
                t("project.vordan.point1"),
                t("project.vordan.point2"),
                t("project.vordan.point3"),
            ],
            label: t("project.vordan.label"),
        },
    ];

    return (
        <LightBlock id="portfolio">
            <Container>
                <h2 className="section-header">{t("our-projects")}</h2>
                <Note>{t("project.note")}</Note>

                {data.map((project, index) => (
                    <PortfolioEntry key={index}>
                        {project.label && (
                            <span className="project-label">
                                {project.label}
                            </span>
                        )}
                        <h3>{project.title}</h3>

                        <span className="project-duration">
                            {project.date_range}
                        </span>
                        <ul>
                            {project.list.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </PortfolioEntry>
                ))}
            </Container>
        </LightBlock>
    );
};

export default ProjectsSection;
