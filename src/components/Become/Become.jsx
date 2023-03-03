import React from "react";
import './Become.css';
import kouch from '../../images/kouch.png';

function Become() {
    return (
        <section className="become">
            <div className="become__container">
                <h2 className="education__title">Кем <span className="education__title-span">стать</span>?</h2>
                <p className="become__subtitle">Выберите направление и начните изучать то, что вам интересно.</p>
                <span>
                    <ul className="become__list">
                        <li className="become__list-item">
                            <div className="become__item">
                                <h3 className="become__name">Управленческий коучинг</h3>
                                <div className="become__circle">-24%</div></div>

                            <div className="become__kouch">
                                <img src={kouch} alt="картинка" className="become__image" />
                                <p className="become__text">Курс для предпринимателей,
                                    руководителей отделов, продакт- и проджект-менеджеров —
                                    не только в ИТ-сфере, но и в офлайн-бизнесе.</p>
                            </div>

                            <div className="become__block">
                                <div className="become__block-list">
                                    <p className="become__start">Старт: </p>
                                    <p>31 февраля</p>
                                </div>
                                <div className="become__block-list">
                                    <p className="become__start">Длительность: </p>
                                    <p>24 месяца</p>
                                </div>
                            </div>

                            <div className="become__plan">
                                <div className="become__left">
                                    <div className="become__months">
                                        <h4 className="become__months-block">48  </h4><span className="become__price">BYN / мес.</span>
                                    </div>
                                    <span className="become__price-number">Рассрочка на 24 месяца</span>
                                </div>

                                <div className="become__right">

                                </div>
                            </div>
                        </li>
                    </ul>
                </span>
            </div>
        </section>
    )
}
export default Become;