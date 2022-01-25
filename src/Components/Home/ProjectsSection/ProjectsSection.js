import React from 'react';
import './ProjectsSection.css';
import SectionPresentation from '../SectionPresentation/SectionPresentation';
import ProjectCard from './ProjectCard/ProjectCard';
import { projectsItems } from './ProjectsItems';
import ContainedButton from '../Buttons/ContainedButton/ContainedButton';

const ProjectsSection = () => {
    return (
        <div className='projects-section-container'>
            <SectionPresentation heading="Where I spend 80% of my time!" mainHeading="PROJECTS" cName="text-center" /> 
            <div className="projects-cards">
            {projectsItems.map(project => {
                return (
                    <ProjectCard title={project.title} url={project.url} projectDescription={project.projectDescription} img={project.img} />
                )
            })}
            </div>
            <ContainedButton title="See all my projects!" url="/projects" cName="text-center d-flex m-auto" />
        </div>
    );
};

export default ProjectsSection;
