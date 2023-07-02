import { useRef, useEffect, useCallback } from "react";
import { useMediaQuery } from "usehooks-ts";
import { register } from "swiper/element/bundle";
import map from "lodash/map";
import "../School/School.css";
import scrollLeft from "../../images/arrow_left.svg";
import scrollRight from "../../images/arrow_right.svg";

register();

const Swiper = ({ swiperArray }) => {
  const swiperElRef = useRef(null);
  const matches = useMediaQuery("(max-width: 1350px)");

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
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);
  console.log(swiperArray);

  return (
    <>
      {matches ? (
        <>
          <div className="school__left" onClick={handlePrev}>
            <img
              className="school__scroll-image"
              alt="стрелка"
              src={scrollLeft}
            />
          </div>
          <swiper-container
            ref={swiperElRef}
            slides-per-view="1"
            navigation="false"
            pagination="false"
          >
            {map(swiperArray, (teacher, index) => (
              <swiper-slide key={index}>
                <div className="school__user-item">
                  <img className="school__image" src={teacher.image} />
                  <div className="school__content">
                    <h4 className="school__name">{teacher.name}</h4>
                    <p className="school__post">{teacher.text}</p>
                  </div>
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
          <div className="school__right" onClick={handleNext}>
            <img
              className="school__scroll-image"
              alt="стрелка"
              src={scrollRight}
            />
          </div>
        </>
      ) : (
        <>
          <div className="school__left" onClick={handlePrev}>
            <img
              className="school__scroll-image"
              alt="стрелка"
              src={scrollLeft}
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
                <div className="school__user-item">
                  <img className="school__image" src={teacher.image} />
                  <div className="school__content">
                    <h4 className="school__name">{teacher.name}</h4>
                    <p className="school__post">{teacher.text}</p>
                  </div>
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
          <div className="school__right" onClick={handleNext}>
            <img
              className="school__scroll-image"
              alt="стрелка"
              src={scrollRight}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Swiper;
