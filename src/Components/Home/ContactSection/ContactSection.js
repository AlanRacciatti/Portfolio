import React from 'react';
import './ContactSection.css';
import SectionPresentation from '../SectionPresentation/SectionPresentation';
import ContainedButton from '../Buttons/ContainedButton/ContainedButton';

const ContactSection = () => {
    return (
        <div className='contact-section-container bg-dark'>
            <SectionPresentation heading="You have the idea" mainHeading="I make it real" cName="text-center contact-presentation bg-dark" />
            <ContainedButton url="/contact" title="Contact me" cName="text-center d-flex m-auto" />
        </div>
    );
};

export default ContactSection;
