import React, { useState } from "react";
import "./Navigation.css";
import Cours from "../Cours/Cours";
import VerticalArrow from "../elements/VerticalArrow";

function Navigation({}) {
  const [openCours, setOpenCours] = useState(false);

  function handleOpen() {
    setOpenCours(!openCours);
  }
  return (
    <section className="navigation">
      <div className="navigation__block">
        <ul className="navigation__list">
          <li className="navigation__list-item" onClick={handleOpen}>
            Курсы
            <VerticalArrow onOpen={openCours} />
          </li>
          {openCours && <Cours />}
          <li className="navigation__list-item">О компании</li>
          <li className="navigation__list-item">Акции</li>
          <li className="navigation__list-item">Контакты</li>
        </ul>
      </div>
    </section>
  );
}

export default Navigation;
