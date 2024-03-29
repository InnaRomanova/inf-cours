import React from "react";
import "./ProgrammCourses.css";
import { useMediaQuery } from "usehooks-ts";
import leftVector from "../../images/leftVector.svg";
import rigthVector from "../../images/rightVector.svg";
import kouch from "../../images/kouch.png";
import android from "../../images/Android.png";
import digital from "../../images/Digital.png";
import softSkills from "../../images/SoftSkills.png";
import "../Navigation/Navigation.css";
import CustomSwiperImage from "../elements/CustomSwiperImage";

function ProgrammCourses({ active, handleClose }) {
  const matches = useMediaQuery("(min-width: 550px)");

  const arrReviews = [
    {
      id: 1,
      image: kouch,
    },
    {
      id: 2,
      image: android,
    },
    {
      id: 3,
      image: digital,
    },
    {
      id: 4,
      image: softSkills,
    },
  ];

  const reviews = [];

  arrReviews.forEach((rewiew, index) => {
    reviews.push(
      <>
        <ul className="programm__image-list">
          <li className="programm__image-list_item">
            <img className="programm__icon" src={rewiew.image} alt="картинка" />
          </li>
        </ul>
      </>
    );
  });

  return (
    <>
      {matches ? (
        <div className={active ? "propgramm-mobile  active" : "propgramm"}>
          {
            <div className="propgramm__container" active={active}>
              <div className="programm__block">
                <h3 className="programm__title">Digital-маркетинг</h3>
                <button
                  className="programm__close-button"
                  onClick={() => {
                    handleClose();
                  }}
                />
                <p className="programm__text">
                  Курс по интернет-меркетингу, SMM, контекстной и
                  таргетированной рекламе, копирайту, SEO и PR. На курсах
                  преподают ведущие эксперты отрасли
                </p>
                <div className="program__list">
                  <div className="programm_list-item">
                    <p className="programm_start">
                      Старт: <span className="span">31 февраля</span>
                    </p>
                  </div>
                  <div className="programm_list-item">
                    <p className="programm_start">
                      Длительность: <span className="span">24 месяца</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="programm__section">
                <div className="programm__section-left">
                  <div className="programm__training">
                    <h4 className="programm__training-title">
                      Программа обучения
                    </h4>
                    <p className="programm__training-text">
                      Вы узнаете, что такое интернет-маркетинг с точки зрения
                      бизнеса и чего обычно ждет от маркетолога заказчик.
                    </p>
                  </div>
                  <div className="programm__image">
                    <a className="programm__link" href="#">
                      <img
                        className="programm__side"
                        src={leftVector}
                        alt="стрелка налево"
                      />
                    </a>
                    <ul className="programm__image-list">
                      <li className="programm__image-list_item">
                        <img
                          className="programm__icon"
                          src={kouch}
                          alt="картинка"
                        />
                      </li>
                      <li className="programm__image-list_item">
                        <img
                          className="programm__icon"
                          src={android}
                          alt="картинка"
                        />
                      </li>
                      <li className="programm__image-list_item">
                        <img
                          className="programm__icon"
                          src={digital}
                          alt="картинка"
                        />
                      </li>
                      <li className="programm__image-list_item">
                        <img
                          className="programm__icon"
                          src={softSkills}
                          alt="картинка"
                        />
                      </li>
                    </ul>

                    <a className="programm__link" href="#">
                      <img
                        className="programm__side"
                        src={rigthVector}
                        alt="стрелка направо"
                      />
                    </a>
                  </div>

                  <div className="programm__marketing programm__marketing_active">
                    <div className="programm__marketing-container">
                      <h4 className="programm__marketing-title">
                        Основы интернет-маркетинга
                      </h4>
                      <button className="programm__close-block" />
                    </div>
                    <ul className="marketing__list">
                      <li className="marketing__item">
                        - Основные концепции маркетинга (маркетинг и бизнес)
                      </li>
                      <li className="marketing__item">- Аудитория и инсайты</li>
                      <li className="marketing__item">
                        - Анализ рынка и конкурентов
                      </li>
                      <li className="marketing__item">
                        - Бренды и позиционирование
                      </li>
                      <li className="marketing__item">
                        - Retention маркетинг (e-mail, sms, push, pop-up,
                        чат-боты)
                      </li>
                    </ul>
                  </div>

                  <div className="programm__marketing section">
                    <div className="programm__marketing-container">
                      <h4 className="programm__marketing-title">
                        Стратегия digital-продвижения
                      </h4>
                      <button className="programm__close-block programm__list_open" />
                    </div>
                  </div>

                  <div className="programm__marketing">
                    <div className="programm__marketing-container">
                      <h4 className="programm__marketing-title">
                        Сайты и приложения
                      </h4>
                      <button className="programm__close-block programm__list_open" />
                    </div>
                  </div>

                  <div className="programm__marketing">
                    <div className="programm__marketing-container">
                      <h4 className="programm__marketing-title">
                        Аналитика для интернет-маркетинга
                      </h4>
                      <button className="programm__close-block programm__list_open" />
                    </div>
                  </div>
                </div>

                <div className="programm__section-right">
                  <div className="programm__right-container">
                    <div className="programm__inf">
                      <div className="become__circle become__circle_active programm__circle_active">
                        -24%
                      </div>
                      <div className="programm__month">
                        <p className="programm__months">48 </p>
                        <span className="programm__price">BYN / мес.</span>
                      </div>
                      <span className="become__price-number">
                        Рассрочка на 24 месяца
                      </span>
                    </div>
                    <div className="programm__discount">
                      <div className="programm__discount-money">
                        <h4 className="become__money-block">
                          <del>2 387</del>
                        </h4>
                        <span className="become__price">BYN </span>
                      </div>
                      <div className="programm__monthly">
                        <h3 className="become__monthly-block">1 984</h3>
                        <span className="become__prices">BYN</span>
                      </div>
                    </div>
                  </div>
                  <button className="become__button-signup programm__btn-module">
                    Записаться
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      ) : (
        <div className="propgramm">
          <div className="propgramm__container" active={active}>
            <div className="programm__block">
              <h3 className="programm__title">Digital-маркетинг</h3>
              <button
                className="programm__close-button"
                onClick={() => {
                  handleClose();
                }}
              />
              <p className="programm__text">
                Курс по интернет-меркетингу, SMM, контекстной и таргетированной
                рекламе, копирайту, SEO и PR. На курсах преподают ведущие
                эксперты отрасли
              </p>
              <div className="program__list">
                <div className="programm_list-item">
                  <p className="programm_start">
                    Старт: <span className="span">31 февраля</span>
                  </p>
                </div>
                <div className="programm_list-item">
                  <p className="programm_start">
                    Длительность: <span className="span">24 месяца</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="programm__section">
              <div className="programm__section-left">
                <div className="programm__training">
                  <h4 className="programm__training-title">
                    Программа обучения
                  </h4>
                  <p className="programm__training-text">
                    Вы узнаете, что такое интернет-маркетинг с точки зрения
                    бизнеса и чего обычно ждет от маркетолога заказчик.
                  </p>
                </div>
                <div className="programm__image">
                  {/* <a className="programm__link" href="#">
                    <img
                      className="programm__side"
                      src={leftVector}
                      alt="стрелка налево"
                    />
                  </a>
                  <ul className="programm__image-list">
                    <li className="programm__image-list_item">
                      <img
                        className="programm__icon"
                        src={kouch}
                        alt="картинка"
                      />
                    </li>
                    <li
                      className="programm__image-list_item"                   
                    >
                      <img
                        className="programm__icon"                        
                        src={softSkills}
                        alt="картинка"
                      />
                    </li>
                  </ul>

                  <a className="programm__link" href="#">
                    <img
                      className="programm__side"
                      src={rigthVector}
                      alt="стрелка направо"
                    />
                  </a> */}
                  <CustomSwiperImage swiperArray={arrReviews} />
                </div>

                <div className="programm__marketing">
                  <div className="programm__marketing-container">
                    <h4 className="programm__marketing-title">
                      Основы интернет-маркетинга
                    </h4>
                    <button className="programm__close-block" />
                  </div>
                  <ul className="marketing__list">
                    <li className="marketing__item">
                      - Основные концепции маркетинга (маркетинг и бизнес)
                    </li>
                    <li className="marketing__item">- Аудитория и инсайты</li>
                    <li className="marketing__item">
                      - Анализ рынка и конкурентов
                    </li>
                    <li className="marketing__item">
                      - Бренды и позиционирование
                    </li>
                    <li className="marketing__item">
                      - Retention маркетинг (e-mail, sms, push, pop-up,
                      чат-боты)
                    </li>
                  </ul>
                </div>

                <div className="programm__marketing section">
                  <div className="programm__marketing-container">
                    <h4 className="programm__marketing-title">
                      Стратегия digital-продвижения
                    </h4>
                    <button className="programm__close-block programm__list_open" />
                  </div>
                </div>

                <div className="programm__marketing">
                  <div className="programm__marketing-container">
                    <h4 className="programm__marketing-title">
                      Сайты и приложения
                    </h4>
                    <button className="programm__close-block programm__list_open" />
                  </div>
                </div>

                <div className="programm__marketing">
                  <div className="programm__marketing-container">
                    <h4 className="programm__marketing-title">
                      Аналитика для интернет-маркетинга
                    </h4>
                    <button className="programm__close-block programm__list_open" />
                  </div>
                </div>
              </div>

              <div className="programm__section-right">
                <div className="programm__right-container">
                  <div className="programm__inf">
                    <div className="become__circle become__circle_active programm__circle_active">
                      -24%
                    </div>
                    <div className="programm__month">
                      <p className="programm__months">48 </p>
                      <span className="programm__price">BYN / мес.</span>
                    </div>
                    <span className="become__price-number">
                      Рассрочка на 24 месяца
                    </span>
                  </div>
                  <div className="programm__discount">
                    <div className="programm__discount-money">
                      <h4 className="become__money-block">
                        <del>2 387</del>
                      </h4>
                      <span className="become__price">BYN </span>
                    </div>
                    <div className="programm__monthly">
                      <h3 className="become__monthly-block">1 984</h3>
                      <span className="become__prices">BYN</span>
                    </div>
                  </div>
                </div>
                <button className="become__button-signup programm__btn-module">
                  Записаться
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProgrammCourses;
