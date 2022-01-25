import React from 'react';
import './AboutSection.css';
import GhostButton from '../Buttons/GhostButton/GhostButton';
import ContainedButton from '../Buttons/ContainedButton/ContainedButton';
import SectionPresentation from '../SectionPresentation/SectionPresentation';

const AboutSection = () => {
    return (
        <div className="about-section-container">
            <div className="about-section-left">
                <SectionPresentation  heading="Who am I?" mainHeading="ABOUT ME" />
                <p className='about-text'>From curiously learning programming with Python at 16 years old, to making Full Stack Web Apllications and Blockchain-based dApps. I'm here to leave my mark in the world.</p>
                <div className="button-container">
                    <ContainedButton title="Read more" url="/about" />
                    <GhostButton title="Projects" url="/projects" />
                </div>
            </div>
            <div className="about-section-right">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQHX960gjf0dkw/profile-displayphoto-shrink_200_200/0/1635898695540?e=1648684800&v=beta&t=QS7sy5UH3VKLDPxLK1ghnAZMDwgrWjgECtUBMGWUoRs" alt="Alan Racciatti" />
            </div>
        </div>
    )
};

export default AboutSection;
