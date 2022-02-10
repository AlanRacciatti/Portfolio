import './SectionPresentation.css'
import React from 'react';

const SectionPresentation = (props) => {
  let headingCName = props.headingCName ? `${props.headingCName} presentation-heading`  : "presentation-heading";
  let mainHeadingCName = props.mainHeadingCName ? `${props.mainHeadingCName} presentation-main-heading` : "presentation-main-heading";
  return (
    <div className={props.cName}>
      <h2 className={headingCName}>{props.heading}</h2>
      <h2 className={mainHeadingCName}>{props.mainHeading}</h2>
    </div>        
  );
};

export default SectionPresentation;
