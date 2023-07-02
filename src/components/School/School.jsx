import React from "react";
import "./School.css";
import vector from "../../images/Vector.svg";
import imageMan from "../../images/photo_person_man.svg";
import imageWoman from "../../images/photo_person_woman.svg";
import CustomSwiper from "../elements/CustomSwiper";

function School() {
  const arrReviews = [
    {
      id: 1,
      image: imageWoman,
      name: "Анна Иванова",
      text: "Руководитель группы по работе с рекламными агенствами  Вконтакте. Работала со Сбером, Яндексом, М-видео.",
    },
    {
      id: 2,
      image: imageMan,
      name: "Иван Иванов",
      text: "Senior Android Developer. Работал в Amazon Web services, Alibaba Group, Яндекс.",
    },
    {
      id: 3,
      image: imageMan,
      name: "Иван Иванов 2",
      text: "Senior Android Developer. Работал в Amazon Web services, Alibaba Group, Яндекс.",
    },
  ];

  const reviews = [];

  arrReviews.forEach((rewiew, index) => {
    reviews.push(
      <>
        <div className="school__user-item">
          <img className="school__image" src={rewiew.image} />
          <div className="school__content">
            <h4 className="school__name">{rewiew.name}</h4>
            <p className="school__post">{rewiew.text}</p>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
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
            <div className="school__user">
              <CustomSwiper swiperArray={arrReviews} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default School;
