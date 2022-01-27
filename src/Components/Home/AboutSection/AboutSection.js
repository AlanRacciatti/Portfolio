import React from 'react';
import './AboutSection.css';
import GhostButton from '../Buttons/GhostButton/GhostButton';
import ContainedButton from '../Buttons/ContainedButton/ContainedButton';
import SectionPresentation from '../SectionPresentation/SectionPresentation';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {

    const {t, i18n} = useTranslation();

    return (
        <div className="about-section-container">
            <div className="about-section-left">
                <SectionPresentation  heading={t('home.aboutSection.presentation.heading')} mainHeading={t('home.aboutSection.presentation.mainHeading')} />
                <p className='about-text'>{t('home.aboutSection.description')}</p>
                <div className="button-container">
                    <ContainedButton title={t('home.aboutSection.button.first')} url="/services" />
                    <GhostButton title={t('home.aboutSection.button.second')} url="/projects" />
                </div>
            </div>
            <div className="about-section-right">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQHX960gjf0dkw/profile-displayphoto-shrink_200_200/0/1635898695540?e=1648684800&v=beta&t=QS7sy5UH3VKLDPxLK1ghnAZMDwgrWjgECtUBMGWUoRs" alt="Alan Racciatti" />
            </div>
        </div>
    )
};

export default AboutSection;
