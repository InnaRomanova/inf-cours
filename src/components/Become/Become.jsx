import React from "react";
import './Become.css';

function Become() {
    return (
        <section className="become">
           <h2 className="become__title">Кем <span className="education__title-span">стать</span>?</h2>
           <p className="become__subtitle">Выберите направление и начните изучать то, что вам интересно.</p>
           <span>
            <ul className="become__list">
                <li className="become__list-item">
                    <h3 className="become__name">Управленческий коучинг</h3>
                    <img className="become__discount" />
                </li>
            </ul>
           </span>
        </section>
    )
}
export default Become;