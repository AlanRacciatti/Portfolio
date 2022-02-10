import React from 'react';
import './Contact.css'
import SectionPresentation from '../Home/SectionPresentation/SectionPresentation';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className='contact-container bg-dark'>
      <SectionPresentation cName="contact-section bg-dark" heading="Send me a message!" mainHeading="Contact" headingCName="bg-dark" mainHeadingCName="bg-dark"/>
      <ContactForm />
    </div>
  );
};

export default Contact;
