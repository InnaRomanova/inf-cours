import React from "react";
import "./Education.css";
import vector from "../../images/Vector.svg";

function Education() {
  return (
    <section className="education">
      <div className="education__block">
        <h1 className="education__title">
          Современное{" "}
          <span className="education__title-span">образование </span>
          без ограничений
        </h1>
        <span>
          <ul className="education__list">
            <li className="education__list-item">
              <img src={vector} className="education__list-image" />
              Доступ из любой точки мира
            </li>
            <li className="education__list-item">
              <img src={vector} className="education__list-image" />
              Пожизненный доступ к материалу
            </li>
            <li className="education__list-item">
              <img src={vector} className="education__list-image" />8
              направления освоения навыков
            </li>
            <li className="education__list-item">
              <img src={vector} className="education__list-image" />
              Для любого взраста
            </li>
          </ul>
        </span>
      </div>
      <div className="education__container">
        <button className="education__button-cours">Все курсы</button>
        <button className="education__button-class">
          Бесплатное&nbsp;занятие
        </button>
      </div>
      {/* <div className="education__image" /> */}
      <div className="education__image-priz" />
    </section>
  );
}
export default Education;
