import React from "react";
import './Header.css';
import logo from '../../../src/images/Logo.png';
import icon from '../../images/icon_arrow.svg';
import telegram from '../../images/icon-telegram.svg';

function Header() {
    return (
        <header className="header">
            <img src={logo} className="header__logo" />
            <ul className="header__menu">
                <li className="header__menu-item">Курсы
                    <img className="header__menu-icon" src={icon} /></li>
                <li className="header__menu-item"><a href="#" className="header__menu-link" target="_blank">О компании</a></li>
                <li className="header__menu-item"><a href="#" className="header__menu-link" target="_blank">Акции</a></li>
                <li className="header__menu-item"><a href="#" className="header__menu-link" target="_blank">Контакты</a></li>

                <li className="header__menu-item"><p className="header__contact">+375(33) 637-30-79</p></li>
                <li className="header__menu-item"><a href="#" className="header__telegram">
                    <img className="header__telegram-icon" src={telegram} /></a></li></ul>

        </header>
    )
}
export default Header;