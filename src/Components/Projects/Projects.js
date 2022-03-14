import React from 'react';
import { useTranslation } from 'react-i18next';
import TypeWriter from "typewriter-effect";
import './Projects.css';
import ProjectCard from '../Home/ProjectsSection/ProjectCard/ProjectCard'
import { projectsItems } from '../Home/ProjectsSection/ProjectsItems';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className='projects'>
      	<div className="projects-header">
          <h1>{t("projects.heading")}</h1>
          <TypeWriter
          options={{
            delay: 70,
          }}
          onInit={(typeWrite) => {
            typeWrite.typeString("Frontend - Backend - Blockchain").start();
          }}
          />
		  </div>
      <div className="projects-section-container">
        <div className="projects-cards">
          {projectsItems.map((project, index) => {
            return (
              <ProjectCard key={index} title={t(`home.projectsSection.projects.${project.title}.title`)} url={project.url} projectDescription={t(`home.projectsSection.projects.${project.title}.description`)} img={project.img} />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
