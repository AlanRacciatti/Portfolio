import React, { useState } from "react";
import { menuItems } from './MenuItems';
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import './Navbar.css'

const Navbar = () => {

    const [menuClicked, setMenuClicked] = useState(false);

    const handleMenuClick = () => {
        setMenuClicked(!menuClicked);
    }

    return (
        <nav className="NavbarItems">
            <div className="home-icon">
                <Link to="/" className="heading-link"><i className="fas fa-home"></i></Link>
            </div>
            <div className="menu-icon" onClick={handleMenuClick}>
                <i className={menuClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={menuClicked ? 'nav-menu active' : 'nav-menu'}>
                {menuItems.map((item, index) => {
                    return (
                        <li key={index} >
                            <Link onClick={handleMenuClick} to={item.url} className={item.cName}>{item.title}</Link>
                        </li>
                    )
                })}
                <SocialMedia cName="navbar-media-mobile" />
            </ul>
            <SocialMedia cName="navbar-media-desktop" />

        </nav>
    );
};

export default Navbar;
