import React from "react";
import "./Navigation.css";
import telegram from "../../images/icon-telegram.svg";

function Navigation({ handleClose }) {
  return (
    <div className="navigation">
      <div className="navigation__block">
        <ul className="navigation__list">
          <li className="navigation__list-item">Курсы</li>
          <li className="navigation__list-item">О компании</li>
          <li className="navigation__list-item">Акции</li>
          <li className="navigation__list-item">Контакты</li>
          <li className="navigation__list-item">+375(33) 637-30-79</li>
          <li className="navigation__list-item">
            <img className="header__telegram-icon" src={telegram} />
          </li>
        </ul>
      </div>
      <button className="navigation__close-button" onClick={handleClose} />
    </div>
  );
}

export default Navigation;
