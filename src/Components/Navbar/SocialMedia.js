import React from 'react';

const SocialMedia = (props) => {
  return (
    <li className={props.cName}>
      <a href="https://www.linkedin.com/in/alan-racciatti/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin media-item"></i></a>
      <a href="https://twitter.com/alan_racciatti1" target="_blank" rel='noreferrer'><i className="fab fa-twitter media-item"></i></a>
      <a href="https://github.com/AlanRacciatti" target="_blank" rel='noreferrer'><i className="fab fa-github media-item"></i></a>
    </li>
  )
};

export default SocialMedia;
