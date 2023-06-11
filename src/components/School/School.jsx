import React, { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import "./School.css";
import vector from "../../images/Vector.svg";
import scrollLeft from "../../images/arrow_left.svg";
import scrollRight from "../../images/arrow_right.svg";
import imageMan from "../../images/photo_person_man.svg";
import imageWoman from "../../images/photo_person_woman.svg";

function School() {
  const matches = useMediaQuery("(max-width: 1350px)");
  const user = document.querySelector(".school__scroll");
  const [list, setList] = useState(false);

  function handleList() {
    setList(!list);
    document.addEventListener("click", function () {
      return arr.userMan;
    });
  }

  const arr = {
    userWoman: {
      id: 1,
      image: imageWoman,
      name: "Анна Иванова",
      text: "Руководитель группы по работе с рекламными агенствами  Вконтакте. Работала со Сбером, Яндексом, М-видео.",
    },
    userMan: {
      id: 2,
      image: imageMan,
      name: "Иван Иванов",
      text: "Senior Android Developer. Работал в Amazon Web services, Alibaba Group, Яндекс.",
    },
  };
  //   function handleOpen(e) {
  //     e.preventDefault();

  //     {!matches ? ({ arr.userWoman } && { arr.userMan }) : matches};
  //   }

  return (
    <>
      {matches ? (
        <section className="school">
          <div className="school__rocket">
            <div className="school__block">
              <h2 className="education__title">
                Наша <span className="education__title-span">школа</span>
              </h2>
              <p className="school__subtitle">
                В своём стремлении повысить качество жизни, они забывают, что
                перспективное планирование играет важную роль в формировании
                системы обучения кадров, соответствующей насущным потребностям.
              </p>
              <ul className="school__list">
                <li className="education__list-item">
                  <img src={vector} className="education__list-image" />
                  1000+ выпускников
                </li>
                <li className="education__list-item">
                  <img src={vector} className="education__list-image" />
                  80% трудоустроились
                </li>
              </ul>
            </div>

            <div className="school__staff">
              <div className="school__left">
                <a
                  href="#"
                  className="school__scroll school__scroll_left"
                  onClick={handleList}
                >
                  <img
                    className="school__scroll-image"
                    alt="стрелка"
                    src={scrollLeft}
                  />
                </a>
              </div>
              <ul className="school__user">
                <li className="school__user-item">
                  <img className="school__image" src={imageWoman} />
                  <div className="school__content">
                    <h4 className="school__name">{arr.userWoman.name}</h4>
                    <p className="school__post">{arr.userWoman.text}</p>
                  </div>
                </li>
              </ul>

              <div className="school__left">
                <a
                  href="#"
                  className="school__scroll school__scroll_right"
                  onClick={handleList}
                >
                  <img
                    className="school__scroll-image"
                    alt="стрелка"
                    src={scrollRight}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="school">
          <div className="school__rocket">
            <div className="school__block">
              <h2 className="education__title">
                Наша <span className="education__title-span">школа</span>
              </h2>
              <p className="school__subtitle">
                В своём стремлении повысить качество жизни, они забывают, что
                перспективное планирование играет важную роль в формировании
                системы обучения кадров, соответствующей насущным потребностям.
              </p>
              <ul className="school__list">
                <li className="education__list-item">
                  <img src={vector} className="education__list-image" />
                  1000+ выпускников
                </li>
                <li className="education__list-item">
                  <img src={vector} className="education__list-image" />
                  80% трудоустроились
                </li>
              </ul>
            </div>

            <div className="school__staff">
              <div className="school__left">
                <a href="#" className="school__scroll school__scroll_left">
                  <img
                    className="school__scroll-image"
                    alt="стрелка"
                    src={scrollLeft}
                  />
                </a>
              </div>
              <ul className="school__user">
                <li className="school__user-item">
                  <img className="school__image" src={arr.userMan.image} />
                  <div className="school__content">
                    <h4 className="school__name">{arr.userMan.name}</h4>
                    <p className="school__post">{arr.userMan.text}</p>
                  </div>
                </li>

                <li className="school__user-item">
                  <img className="school__image" src={arr.userWoman.image} />
                  <div className="school__content">
                    <h4 className="school__name">{arr.userWoman.name}</h4>
                    <p className="school__post">{arr.userWoman.text}</p>
                  </div>
                </li>
              </ul>

              <div className="school__left">
                <a
                  href="#"
                  className="school__scroll school__scroll_right"
                  onClick={handleList}
                >
                  <img
                    className="school__scroll-image"
                    alt="стрелка"
                    src={scrollRight}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
export default School;
