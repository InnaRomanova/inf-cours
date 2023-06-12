import React, { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import "./School.css";
import vector from "../../images/Vector.svg";
import scrollLeft from "../../images/arrow_left.svg";
import scrollRight from "../../images/arrow_right.svg";
import imageMan from "../../images/photo_person_man.svg";
import imageWoman from "../../images/photo_person_woman.svg";
import CarouselSlider from "react-carousel-slider";

function School() {
  const matches = useMediaQuery("(max-width: 1350px)");
  const user = document.querySelector(".school__scroll");
  const [list, setList] = useState(false);

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

  let itemsStyle = {
    margin: "0 41px 0 0",
    padding: "0",
    display: "flex",
  };

  let rBtnCpnt = (
    <div className="school__right">
      <a href="#" className="school__scroll school__scroll_right">
        <img className="school__scroll-image" alt="стрелка" src={scrollRight} />
      </a>
    </div>
  );

  let lBtnCpnt = (
    <div className="school__left">
      <a href="#" className="school__scroll school__scroll_left">
        <img className="school__scroll-image" alt="стрелка" src={scrollLeft} />
      </a>
    </div>
  );

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

  let reviewsCard = (
    <CarouselSlider
      sliderBoxStyle={{
        height: "450px",
        width: "80%",
      }}
      accEle={{ dots: false }}
      slideCpnts={reviews}
      itemsStyle={itemsStyle}
      buttonSetting={{ placeOn: "middle-outside" }}
      rBtnCpnt={rBtnCpnt}
      lBtnCpnt={lBtnCpnt}
    />
  );

  /*
  function handleList() {
    setList(!list);
    document.addEventListener("click", function () {
      return arrReviews.userMan;
    });
  }
  */

  //   function handleOpen(e) {
  //     e.preventDefault();

  //     {!matches ? ({ arr.userWoman } && { arr.userMan }) : matches};
  //   }

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
              <div style={{ position: "relative", margin: "0 auto" }}>
                {reviewsCard}
              </div>
            </div>
          </div>
          <div className="school__staff">
            <div className="school__user">{reviews}</div>
          </div>
        </div>
      </section>
    </>
  );
}
export default School;
