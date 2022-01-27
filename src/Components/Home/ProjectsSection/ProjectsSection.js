import React from 'react';
import './ProjectsSection.css';
import SectionPresentation from '../SectionPresentation/SectionPresentation';
import ProjectCard from './ProjectCard/ProjectCard';
import { projectsItems } from './ProjectsItems';
import ContainedButton from '../Buttons/ContainedButton/ContainedButton';
import { useTranslation } from 'react-i18next';

const ProjectsSection = () => {

    const { t } = useTranslation();

    return (
        <div className='projects-section-container'>
            <SectionPresentation heading={t('home.projectsSection.presentation.heading')} mainHeading={t('home.projectsSection.presentation.mainHeading')} cName="text-center" /> 
            <div className="projects-cards">
            {projectsItems.map((project, index) => {
                return (
                    <ProjectCard key={index} title={t(`home.projectsSection.projects.${project.title}.title`)} url={project.url} projectDescription={t(`home.projectsSection.projects.${project.title}.description`)} img={project.img} />
                )
            })}
            </div>
            <ContainedButton title={t('home.projectsSection.projectsLink')} url="/projects" cName="text-center d-flex m-auto" />
        </div>
    );
};

export default ProjectsSection;
