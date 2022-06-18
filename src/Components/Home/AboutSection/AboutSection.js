import React from "react";
import "./AboutSection.css";
import GhostButton from "../Buttons/GhostButton/GhostButton";
import ContainedButton from "../Buttons/ContainedButton/ContainedButton";
import SectionPresentation from "../SectionPresentation/SectionPresentation";
import { useTranslation } from "react-i18next";
import alanImage from "../../../assets/alan.jpg";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <div className="about-section-container">
      <div className="about-section-left">
        <SectionPresentation
          heading={t("home.aboutSection.presentation.heading")}
          mainHeading={t("home.aboutSection.presentation.mainHeading")}
        />
        <p className="about-text">{t("home.aboutSection.description")}</p>
        <div className="button-container">
          <ContainedButton
            title={t("home.aboutSection.button.first")}
            url="/about"
          />
          <GhostButton
            title={t("home.aboutSection.button.second")}
            url="/projects"
          />
        </div>
      </div>
      <div className="about-section-right">
        <img src={alanImage} alt="Alan Racciatti" />
      </div>
    </div>
  );
};

export default AboutSection;
