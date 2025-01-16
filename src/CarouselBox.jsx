import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, EffectCoverflow, Mousewheel } from "swiper/modules";

function CarouselBox() {
  return (
    <div className="carousel-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="public/movies/the-little-mermaid.jpeg"
            alt="The Little Mermaid"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/movies/the-tank.jpeg" alt="The Tank" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/movies/the-covenant.jpg" alt="The Covenant" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/movies/65.jpg" alt="65" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarouselBox;
