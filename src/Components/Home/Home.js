import React from 'react';
import './Home.css';
import TypeWriter from 'typewriter-effect';
import Button from './Button/Button';
import { ButtonItems } from './Button/ButtonItems';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-header'>
        <h1 className='home-heading'>Alan Racciatti</h1>
        <div className='type-writer'>
          <TypeWriter
            options={{
              delay: 70,
              loop: true
            }} 
            onInit={(typeWrite) => {
              typeWrite
              .typeString("Full Stack Web Developer")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Blockchain Developer")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Freelancer")
              .pauseFor(2000)
              .deleteAll()
              .start()
            }}
          />
        </div>
      </div>
      <div className='button-container'>
        {ButtonItems.map((item, index) => {
          return (
            <Button key={index} title={item.title} url={item.url} />
          )
        })}
      </div>
    </div>
  );
};

export default Home;
