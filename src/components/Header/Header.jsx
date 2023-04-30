import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../src/images/Logo.png";
import icon from "../../images/icon_arrow.svg";
import telegram from "../../images/icon-telegram.svg";
import { useMediaQuery } from "usehooks-ts";
import MobileMenu from "../elements/Burger_menu.jsx";

function Header() {
  const matches = useMediaQuery("(max-width: 1108px)");

  return (
    <>
      {matches ? (
        <header className="header">
          <img src={logo} className="header__logo" alt="Логотип" />
          <MobileMenu className="header__menu-burger"></MobileMenu>
        </header>
      ) : (
        <header className="header">
          <img src={logo} className="header__logo" alt="Логотип" />
          <ul className="header__menu">
            <li className="header__menu-item">
              Курсы
              <img className="header__menu-icon" src={icon} />
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link" target="_blank">
                О компании
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link" target="_blank">
                Акции
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link" target="_blank">
                Контакты
              </a>
            </li>

            <li className="header__menu-item">
              <p className="header__contact">+375(33) 637-30-79</p>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__telegram">
                <img className="header__telegram-icon" src={telegram} />
              </a>
            </li>
          </ul>
        </header>
      )}
    </>
  );
}
export default Header;
