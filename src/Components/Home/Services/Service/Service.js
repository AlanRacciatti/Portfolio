import React from 'react';
import './Service.css';

const Service = (props) => {
  return (
    <div className='service-item'>
        <i className={props.icon + ' service-icon'}></i>
        <h4 className='service-title'>{props.title}</h4>
        <p className='service-text'>{props.text}</p>
    </div>
  );
};

export default Service;
