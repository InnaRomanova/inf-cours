import React, { useState } from "react";
import './School.css';
import vector from '../../images/Vector.svg';
import scrollLeft from '../../images/arrow_left.svg';
import scrollRight from '../../images/arrow_right.svg';
import imageMan from '../../images/photo_person_man.svg';
import imageWoman from '../../images/photo_person_woman.svg';

function School() {
    const [openUser, setOpenUser] = useState(false);

    function handleOpen() {
      setOpenUser(!openUser);
    }

    return (
        <section className="school">
            <div className="school__rocket">
            <div className="school__block">
                <h2 className="education__title">Наша <span className="education__title-span">школа</span></h2>
                <p className="school__subtitle">В своём стремлении повысить качество жизни, они забывают,
                    что перспективное планирование играет важную роль в формировании системы обучения кадров,
                    соответствующей насущным потребностям. </p>
                <ul className="school__list">
                    <li className="education__list-item"><img src={vector} className="education__list-image" />1000+ выпускников</li>
                    <li className="education__list-item"><img src={vector} className="education__list-image" />80% трудоустроились</li>
                </ul>
            </div>
            
            <div className="school__staff">
                <div className="school__left" onClick={handleOpen}><a href="#" className="school__scroll">
                    <img className="school__scroll-image" alt="стрелка" src={scrollLeft} onOpen={openUser} /></a></div>
                <ul className="school__user">
                    <li className="school__user-item">
                        <img className="school__image" src={imageMan} />
                        <div className="school__content">
                        <h4 className="school__name">Иван Иванов</h4>
                        <p className="school__post">Senior Android Developer. Работал в Amazon Web services, Alibaba Group, Яндекс.</p>
                        </div>
                    </li>
                    <li className="school__user-item">
                        <img className="school__image" src={imageWoman} />
                        <div className="school__content">
                        <h4 className="school__name">Анна Иванова</h4>
                        <p className="school__post">Руководитель группы по работе с рекламными агенствами Вконтакте.
                            Работала со Сбером, Яндексом, М-видио.</p>
                            </div>
                    </li>
                </ul>

                <div className="school__left"><a href="#" className="school__scroll">
                    <img className="school__scroll-image" alt="стрелка" src={scrollRight} /></a></div>
            </div>
            </div>
        </section>
    )
}
export default School;