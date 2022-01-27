import React, { useState } from "react";
import { menuItems } from './MenuItems';
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import LanguageChanger from './LanguageChanger/LanguageChanger';
import './Navbar.css'
import { useTranslation } from "react-i18next";

const Navbar = () => {

    const [menuClicked, setMenuClicked] = useState(false);

    const { t } = useTranslation();

    const handleMenuClick = () => {
        if (window.innerWidth < 768) {
            setMenuClicked(!menuClicked);
        }
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
                            <Link onClick={handleMenuClick} to={item.url} className={item.cName}>{t(`navbar.${item.title.toString().toLowerCase()}`)} <i className={item.icon}></i></Link>
                        </li>
                    )
                })}
                <SocialMedia cName="navbar-media-mobile" />
            </ul>
            <SocialMedia cName="navbar-media-desktop" />
            <LanguageChanger />
        </nav>
    );
};

export default Navbar;
