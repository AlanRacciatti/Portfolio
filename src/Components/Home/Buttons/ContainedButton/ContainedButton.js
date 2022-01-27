import './ContainedButton.css'
import { Link } from 'react-router-dom'

import React from 'react';

const Button = (props) => {

  let cName = `contained-button ${props.cName ? props.cName : ""}`
  return (
    <div className='contained-button-container'>
      <button className={cName}><Link className='contained-button-link' to={props.url}>{props.title}</Link></button>
    </div>
  );
};

export default Button;