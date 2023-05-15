import React from "react";
import "./Cours.css";

function Cours({ onClick }) {
  return (
    <div className="navigation-list">
      <div className="navigation-list__block">
        <ul className="navigation-list__item">
          <li className="navigation-list__edit">Управленческий коучинг</li>
          <li className="navigation-list__edit">Android-разработка</li>
          <li className="navigation-list__edit">Digital-маркетинг</li>
          <li className="navigation-list__edit">Soft Skills for Hard Times</li>
          <li className="navigation-list__edit">Разработчик игр на Unity</li>
          <li className="navigation-list__edit">Веб-дизайнер</li>
          <li className="navigation-list__edit">Fullstack-разработчик на Python</li>
          <li className="navigation-list__edit">DevOps-инженер</li>
        </ul>
      </div>
    </div>
  );
}

export default Cours;
