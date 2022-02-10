import React from 'react';
import './Contact.css'
import SectionPresentation from '../Home/SectionPresentation/SectionPresentation';
import ContactForm from './ContactForm/ContactForm';
import { useTranslation } from 'react-i18next';

const Contact = () => {

  const {t} = useTranslation();

  return (
    <div className='contact-container bg-dark'>
      <SectionPresentation cName="contact-section bg-dark" heading={t('contact.presentation.heading')} mainHeading={t('contact.presentation.mainHeading')} headingCName="bg-dark" mainHeadingCName="bg-dark"/>
      <ContactForm />
    </div>
  );
};

export default Contact;
