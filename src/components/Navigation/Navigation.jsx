import React from "react";
import "./Navigation.css";

function Navigation({ handleClose, onClick, onCloseOverlay, list }) {
  return (
    <section className="navigation" onCloseOverlay={onCloseOverlay}>
      <div className="navigation__block">
        <ul className="navigation__list">
          <li className="navigation__list-item" onClick={onClick}>Курсы
          {/* {list.map((list, index) => (
                <Cours list={list} key={index} />
            )
            )} */}
            </li>
          <li className="navigation__list-item">О компании</li>
          <li className="navigation__list-item">Акции</li>
          <li className="navigation__list-item">Контакты</li>
        </ul>
      </div>
      <button className="navigation__close-button" onClick={handleClose} />
    </section>
  );
}

export default Navigation;
