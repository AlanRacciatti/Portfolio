import React from 'react';
import './Services.css';
import Service from './Service/Service';
import { ServiceItems } from './Service/ServiceItems';
import SectionPresentation from '../SectionPresentation/SectionPresentation';

const Services = () => {
  return (
    <div className='services-headings-container'>
      <SectionPresentation heading="What can I do?" mainHeading="SERVICES" cName="text-center"/>
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
