import React from 'react';
import './Home.css';
import TypeWriter from 'typewriter-effect';
import AboutSection from './AboutSection/AboutSection';
import Services from './Services/Services';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='home'>
      <div className='home-header'>
        <h1 className='home-heading'>Alan Racciatti</h1>
        <div className='type-writer'>
          <TypeWriter
            options={{
              delay: 70,
              loop: true
            }} 
            onInit={(typeWrite) => {
              typeWrite
              .typeString(t('home.typeWriter.first'))
              .pauseFor(2000)
              .deleteAll()
              .typeString(t('home.typeWriter.second'))
              .pauseFor(2000)
              .deleteAll()
              .typeString(t('home.typeWriter.third'))
              .pauseFor(2000)
              .deleteAll()
              .start()
            }}
          />
        </div>
      </div>
      <AboutSection />
      <Services />
      <ProjectsSection />
    </div>
  );
};

export default Home;
