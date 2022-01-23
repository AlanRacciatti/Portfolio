import './ContainedButton.css'
import { Link } from 'react-router-dom'

import React from 'react';

const Button = (props) => {
  return (
    <div>
        <Link to={props.url}><button className='contained-button'>{props.title}</button></Link>
    </div>
  );
};

export default Button;