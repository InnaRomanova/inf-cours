import { useRef, useEffect, useCallback } from "react";
import { useMediaQuery } from "usehooks-ts";
import { register } from "swiper/element/bundle";
import map from "lodash/map";
import "../School/School.css";
import rigthVector from "../../images/rightVector.svg";
import leftVector from "../../images/leftVector.svg";

register();

const SwiperImage = ({ swiperArray }) => {
  const swiperElRef = useRef(null);
  //   const matches = useMediaQuery("(max-width: 550px)");

  const handlePrev = useCallback(() => {
    if (!swiperElRef.current) return;
    swiperElRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperElRef.current) return;
    swiperElRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    // <>
    //   {matches ? (
    <>
      <div className="programm__link" href="#" onClick={handlePrev}>
        <img
          className="programm__side"
          src={leftVector}
          alt="стрелка направо"
        />
      </div>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="2"
        navigation="false"
        pagination="false"
      >
        {map(swiperArray, (teacher, index) => (
          <swiper-slide key={index}>
            <ul className="programm__image-list">
              <li className="programm__image-list_item">
                <img
                  className="programm__icon"
                  src={teacher.image}
                  alt="картинка"
                />
              </li>
            </ul>
          </swiper-slide>
        ))}
      </swiper-container>
      <div className="programm__link" href="#" onClick={handleNext}>
        <img
          className="programm__side"
          src={rigthVector}
          alt="стрелка направо"
        />
      </div>
    </>
    /*
      ) : (
        <>
          <a className="programm__link" href="#" onClick={handlePrev}>
            <img
              className="programm__side"
              src={leftVector}
              alt="стрелка направо"
            />
          </a>
          <swiper-container
            ref={swiperElRef}
            slides-per-view="2"
            navigation="false"
            pagination="false"
          >
            {map(swiperArray, (teacher, index) => (
              <swiper-slide key={index}>
                <ul className="programm__image-list">
                  <li className="programm__image-list_item">
                    <img
                      className="programm__icon"
                      src={teacher.image}
                      alt="картинка"
                    />
                  </li>
                </ul>
              </swiper-slide>
            ))}
          </swiper-container>
          <a className="programm__link" href="#" onClick={handleNext}>
            <img
              className="programm__side"
              src={rigthVector}
              alt="стрелка направо"
            />
          </a>
        </>
      )}
    </>*/
  );
};

export default SwiperImage;
