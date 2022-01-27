import React from 'react';
import './Services.css';
import Service from './Service/Service';
import { ServiceItems } from './Service/ServiceItems';
import SectionPresentation from '../SectionPresentation/SectionPresentation';
import { useTranslation } from 'react-i18next';

const Services = () => {

  const { t } = useTranslation();

  return (
    <div className='services-headings-container'>
      <SectionPresentation heading={t('home.servicesSection.presentation.heading')} mainHeading={t('home.servicesSection.presentation.mainHeading')} cName="text-center"/>
      <div className="service-items-container">
        {ServiceItems.map((item, index) => {
          return (
            <Service key={index} icon={item.icon} title={t(`home.servicesSection.services.${item.title}.title`)} text={t(`home.servicesSection.services.${item.title}.description`)}/>
          )
        })}
      </div>
    </div>
  );
};

export default Services;
