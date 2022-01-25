import './InfoButton.css';
import React from 'react';

const InfoButton = (props) => {
  return (
    <div className='card-button-container hover-effect'>
        <a href={props.url} className='hover-effect' target="_blank" rel='noreferrer'><button className='card-button'><i className={props.icon}></i></button></a>
    </div>        
  );
};

export default InfoButton;
