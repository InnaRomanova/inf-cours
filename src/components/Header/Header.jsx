import React from "react";
import { useState } from "react";
import "./Header.css";
import logo from "../../../src/images/Logo.png";
import icon from "../../images/icon_arrow.svg";
import telegram from "../../images/icon-telegram.svg";
import { useMediaQuery } from "usehooks-ts";
import MobileMenu from "../elements/BurgerMenu";
import Navigation from "../Navigation/Navigation";

function Header() {
  const matches = useMediaQuery("(max-width: 1108px)");
  const [openModal, setOpenModal] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const buttonMenuDisabled = (
    {openModal} ? 'header__menu-button_disabled': ''
  );

  function handleOpen() {
    setOpenModal(true);
  }

  function handleClose() {
    setOpenModal(false);
  }

  return (
    <>
      {matches ? (
        <header className="header">
          <img src={logo} className="header__logo" alt="Логотип" />
          <button className="header__menu-button" onClick={handleOpen}>
            <MobileMenu className="header__menu-burger"/>
          </button>
          {openModal ? <Navigation handleClose={handleClose} /> : ""}
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
