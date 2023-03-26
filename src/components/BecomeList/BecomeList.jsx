import React from "react";
import "./BecomeList.css";
import kouch from "../../images/kouch.png";
import android from "../../images/Android.png";
import digital from "../../images/Digital.png";
import softSkills from "../../images/SoftSkills.png";
import imageFonLeft from "../../images/becomeFonLeft.png";
import Become from "../Become/Become";

function BecomeList() {
    const becomeArray = [
        {
            title: "Управленческий коучинг",
            text: "Курс для предпринимателей, руководителей отделов, продакт- и проджект-менеджеров — не только в ИТ-сфере, но и в офлайн-бизнесе.",
            image: kouch,
            discount: "-24%",
            startPoint: "31 февраля",
            duration: "24 месяца"
        },
        {
            title: "Android-разработка",
            text: "Курс мобильной разработки для новичков и junior-разработчиков.",
            image: android,
            discount: "-10%",
            startPoint: "1 января",
            duration: "10 дней"
        },
        {
            title: "Digital-маркетинг",
            text: "Курс по интернет-маркетингу, SMM, контекстной и таргетированной рекламе, копирайтингу, SEO и PR. На курсах преподают ведущие эксперты отрасли.",
            image: digital,
            discount: "-30%",
            startPoint: "31 февраля",
            duration: "1 день"
        },
        {
            title: "Soft Skills for Hard Times",
            text: "Курс по переговорам, управлению конфликтами, креативному мышлению и не только.",
            image: softSkills,
            discount: "-5%",
            startPoint: "31 декабря",
            duration: "2 дня"
        },
    ]

    return (
        <section className="becomeList">
            <div className="become__container">
                <h2 className="education__title">Кем <span className="education__title-span">стать</span>?</h2>
                <p className="become__subtitle">Выберите направление и начните изучать то, что вам интересно.</p>              
                    <img className="becomeList__image-left" src={imageFonLeft} alt="картинка" />
                <ul className="become__list">
            {becomeArray.map((item, index) => (
                <Become item={item} key={index} />
            )
            )}
            </ul>
            </div>
        </section>
    )
}
export default BecomeList;