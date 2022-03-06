import React from "react";
import "./About.css";
import TypeWriter from "typewriter-effect";
import { useTranslation } from "react-i18next";
import Skills from './Skills/Skills';

const About = () => {
  	const { t } = useTranslation();

	return (
	<div className="about">
		<div className="about-header">
			<h1>{t("about.heading")}</h1>
			<TypeWriter
			options={{
				delay: 70,
			}}
			onInit={(typeWrite) => {
				typeWrite.typeString(t("about.typeWriter.first")).start();
			}}
			/>
		</div>

      	<div className="about-presentation">
			<div className="presentation-text-container">
				<h3 className="about-presentation-heading">{t("about.presentation.first.heading")}</h3>
				<p className="presentation-text">{t("about.presentation.first.body")}</p>
			</div>
			<div className="presentation-text-container">
				<h3 className="about-presentation-heading">{t("about.presentation.second.heading")}</h3>
				<p className="presentation-text">{t("about.presentation.second.body")}</p>
			</div>
			<div className="presentation-text-container">
				<p className="presentation-text">{t("about.presentation.third.body")}</p>
			</div>
			<div className="presentation-text-container">
				<p className="presentation-text">{t("about.presentation.fourth.body")}</p>
			</div>
		</div>

		<div className="skills-container">
			<h1 className="skills-heading">{t("about.presentation.fifth.heading")}</h1>
			<Skills />
		</div>
    </div>
  );
};

export default About;
