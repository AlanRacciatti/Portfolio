import React from 'react';
import './ContactSection.css';
import SectionPresentation from '../SectionPresentation/SectionPresentation';
import ContainedButton from '../Buttons/ContainedButton/ContainedButton';
import { useTranslation } from 'react-i18next'

const ContactSection = () => {

    const { t } = useTranslation()

    return (
        <div className='contact-section-container bg-dark'>
            <SectionPresentation heading={t('home.contactSection.presentation.heading')} mainHeading={t('home.contactSection.presentation.mainHeading')} cName="text-center contact-presentation bg-dark" />
            <ContainedButton url="/contact" title={t('home.contactSection.contactButton')} cName="text-center d-flex m-auto" />
        </div>
    );
};

export default ContactSection;
