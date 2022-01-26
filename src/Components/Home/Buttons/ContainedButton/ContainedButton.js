import './ContainedButton.css'
import { Link } from 'react-router-dom'

import React from 'react';

const Button = (props) => {

  let cName = `contained-button ${props.cName}`
  return (
    <div className='contained-button-container'>
      <Link to={props.url}><button className={cName}>{props.title}</button></Link>
    </div>
  );
};

export default Button;