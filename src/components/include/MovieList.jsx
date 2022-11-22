import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";

const MoviePopular = (props) => {
  return (
    <div className="item">
      <a href={`https://www.themoviedb.org/movie/${props.movie.id}`}>
        <div className="ranking">{props.rank+1}</div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
          alt={props.movie.title}
        />
      </a>
    </div>
  );
};

const MovieList = (props) => {
  SwiperCore.use([Autoplay]);
  return (
    <section className="movie__list">
      <div className="container">
        <h2>Popular Movies</h2>
        <div className="popular__box">
          <ul className="moviePop__list">
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
              {props.populars.map((movies, index) =>
                index < 10 ? (
                  <SwiperSlide key={index}>
                    <MoviePopular key={index} rank={index} movie={movies} />
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

export default MovieList;
