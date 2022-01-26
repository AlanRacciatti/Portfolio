import './SectionPresentation.css'
import React from 'react';

const SectionPresentation = (props) => {
  return (
    <div className={props.cName}>
      <h2 className='presentation-heading'>{props.heading}</h2>
      <h2 className='main-presentation-heading'>{props.mainHeading}</h2>
    </div>        
  );
};

export default SectionPresentation;
