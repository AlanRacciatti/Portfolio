import React from 'react';
import './Services.css';
import Service from './Service/Service';
import { ServiceItems } from './Service/ServiceItems';

const Services = () => {
  return (
    <div className='services-headings-container'>
      <h2 className='services-heading'>What can I do?</h2>
      <h2 className='services-heading-big'>SERVICES</h2>
      <div className="service-items-container">
        {ServiceItems.map((item, index) => {
          return (
            <Service key={index} icon={item.icon} title={item.title} text={item.text}/>
          )
        })}
      </div>
    </div>
  );
};

export default Services;
