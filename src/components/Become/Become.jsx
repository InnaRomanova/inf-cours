import React from "react";
import './Become.css';
import ProgrammCourses from "../ProgrammCourses/ProgrammCourses";
import { useState } from "react";

function Become({ item, onOpenPopup }) {
    const { title, text, image, discount, startPoint, duration } = item;
    const [openModal, setOpenModal] = useState(false)

    function handleOpen() {
        setOpenModal(!openModal);
    }

    return (
        <> 
        <li className="become__list-item">
            <div className="become__item">
               <h3 className="become__name">{title}</h3>
                <div className="become__circle">{discount}</div></div>

            <div className="become__kouch">
                <img src={image} alt="картинка" className="become__image" />
                <p className="become__text">{text}</p>
            </div>

            <div className="become__block">
                <div className="become__block-list">
                    <p className="become__start">Старт: </p>
                    <p>{startPoint}</p>
                </div>
                <div className="become__block-list">
                    <p className="become__start">Длительность: </p>
                    <p>{duration}</p>
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
                    <div className="become__money">
                        <h4 className="become__money-block">2 387</h4><span className="become__price">BYN </span>
                    </div>
                    <div className="become__monthly">
                        <h3 className="become__monthly-block">1 984</h3><span className="become__prices">BYN</span>
                    </div>
                </div>
            </div>
            <div className="become__buttons">
                <button className="become__button-detailed" onClick={onOpenPopup}>Подробнее</button>
                <button className="become__button-signup">Записаться</button>
            </div>
        </li>
        </>
        
    )
}
export default Become;