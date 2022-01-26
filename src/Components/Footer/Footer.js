import React from 'react';
import './Footer.css'

const Footer = () => {
    let year = new Date().getFullYear()

    return (
        <div className='footer-container'>
            <ul className="footer-media">
                <li className='footer-list-item'><a href="https://www.linkedin.com/in/alan-racciatti/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin footer-item"></i></a></li>
                <li className='footer-list-item'><a href="https://twitter.com/alan_racciatti1" target="_blank" rel='noreferrer'><i className="fab fa-twitter footer-item"></i></a></li>
                <li className='footer-list-item'><a href="https://www.instagram.com/alanracciatti/" target="_blank" rel='noreferrer'><i className="fab fa-instagram footer-item"></i></a></li>
                <li className='footer-list-item'><a href="https://github.com/AlanRacciatti" target="_blank" rel='noreferrer'><i className="fab fa-github footer-item"></i></a></li>
            </ul>
            <p className='copyright-disclaimer'>© {year} Alan Racciatti</p>
        </div>
    );
};

export default Footer;
