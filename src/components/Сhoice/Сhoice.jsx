import React from "react";
import './Choice.css';

function Choice() {

    return (
        <section className="choice">
            <div className="choice__block">
            <h2 className="education__title">Поможем в&#160;<span className="education__title-span">выборе</span>!</h2>
            <div className="choice__content">
                <div className="choice__content-text">
                    <p className="school__subtitle">Если у вас есть вопросы о формате или вы не знаете, что выбрать,
                        оставьте свой номер — мы позвоним, чтобы ответить на все ваши вопросы.</p>
                </div>
                <form className="choice__form">
                    <div className="choice__container">
                        <input className="choice__input" placeholder="Телефон" type="number" />
                        <label className="choice__label">Позвоните нам для более быстрого ответа 
                            <span className="choice__number"> +375(33) 637-30-79</span></label>
                    </div>
                    <div className="choice__container">
                        <button className="choice__button">Отправить</button>
                        <label className="choice__button-label">Нажимая на кнопку, я соглашаюсь на обработку персональных данных.</label>
                    </div>
                </form>
            </div>
            </div>
        </section>
    )
}
export default Choice;