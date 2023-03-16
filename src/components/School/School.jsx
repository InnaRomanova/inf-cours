import React from "react";
import './School.css';
import vector from '../../images/Vector.svg';

function School() {

    return (
        <section className="school">
            <div className="school__block">
                <h2 className="education__title">Наша <span className="education__title-span">школа</span></h2>
                <p className="become__subtitle">В своём стремлении повысить качество жизни, они забывают,
                    что перспективное планирование играет важную роль в формировании системы обучения кадров,
                    соответствующей насущным потребностям. </p>
                <ul className="education__list">
                    <li className="education__list-item"><img src={vector} className="education__list-image" />1000+ выпускников</li>
                    <li className="education__list-item"><img src={vector} className="education__list-image" />80% трудоустроились</li>
                </ul>
            </div>
            <div className="school__fon" />
            <div className="school__image" />
        </section>
    )
}
export default School;