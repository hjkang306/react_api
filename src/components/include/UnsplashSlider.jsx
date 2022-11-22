import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";

const MoviePopular = ({ random }) => {
  return (
    <li>
      <a href={random.links.download}>
        <img src={random.urls.regular} alt={random.urls.alt_description} />
      </a>
    </li>
  );
};

const UnsplashSlider = ({ random }) => {
  SwiperCore.use([Autoplay]);
  return (
    <section className="unsplash__list">
      <div className="container">
        <div className="unsplash__box">
          <ul className="unsplash__random">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              initialSlide={1}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[Autoplay, EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {random.map((random, index) =>
                index < 10 ? (
                  <SwiperSlide key={index}>
                    <MoviePopular key={index} random={random} />
                  </SwiperSlide>
                ) : null
              )}
            </Swiper>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UnsplashSlider;
