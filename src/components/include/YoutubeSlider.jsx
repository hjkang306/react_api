import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";

const RandomYoutube = ({randoms}) => {
  return (
    <li>
      <a href={`https://www.youtube.com/watch?v=${randoms.id.videoId}`}>
        <img src={randoms.snippet.thumbnails.medium.url} alt={randoms.snippet.description} />
        <div className="youtubeTitle">{randoms.snippet.title}</div>
      </a>
    </li>
  );
};

const YoutubeSlider = ({randoms}) => {
  SwiperCore.use([Autoplay]);
  return (
    <section className="youtube__list">
      <div className="container">
        <div className="youtube__box">
          <ul className="youtube__random">
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
              {randoms.map((randoms, index) =>
                index < 10 ? (
                  <SwiperSlide key={index}>
                    <RandomYoutube key={index} randoms={randoms} />
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

export default YoutubeSlider;
