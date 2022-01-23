import './GhostButton.css'
import { Link } from 'react-router-dom'

import React from 'react';

const Button = (props) => {
  return (
    <div>
        <Link to={props.url}><button className='ghost-button'>{props.title}</button></Link>
    </div>
  );
};

export default Button;