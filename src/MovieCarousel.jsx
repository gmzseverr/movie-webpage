import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, EffectCoverflow } from "swiper/modules";

function MovieCarousel({ movies, onMovieChange }) {
  if (!movies || movies.length === 0) {
    return <div>No movies available</div>; // Optional: Show a message if no movies are passed
  }

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Pagination, EffectCoverflow]}
        grabCursor={true}
        centeredSlides={true}
        speed={900}
        initialSlide={0}
        spaceBetween={20}
        loop={true}
        slidesPerView={3}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => {
          const activeIndex = swiper.realIndex;
          onMovieChange(movies[activeIndex]);
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img src={movie.image} alt={movie.title} className="movie-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieCarousel;
