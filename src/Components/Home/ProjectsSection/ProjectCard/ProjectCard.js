import React from 'react';
import './ProjectCard.css';
import InfoButton from './InfoButton/InfoButton';

const ProjectCard = (props) => {
  return (
    <div className='project-card'>
          <img className='card-img' src={props.img} alt={props.title} />
          <a href={props.url.app} target="_blank" rel="noreferrer" className="project-link">
          <div className="project-info hover-effect">
              <h3 className='project-heading hover-effect'>{props.title}</h3>
              <p className="project-text hover-effect">{props.projectDescription}</p>
              <div className='read-more hover-effect'>
                <InfoButton icon="fas fa-globe" url={props.url.app} />
                <InfoButton icon="fab fa-github" url={props.url.github} />
              </div>
          </div>
          </a>
    </div>
  );
};

export default ProjectCard;
