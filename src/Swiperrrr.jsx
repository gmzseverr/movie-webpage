import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, EffectCoverflow, Mousewheel } from "swiper/modules";

import "./style.css";

function Swiperrrr() {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Mousewheel, Pagination, EffectCoverflow]}
        grabCursor={true}
        centeredSlides={true}
        speed={900}
        initialSlide={1}
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
        mousewheel={{ invert: false }}
      >
        <SwiperSlide>
          <img src="/movies/the-little-mermaid.jpeg" alt="The Little Mermaid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/movies/the-tank.jpeg" alt="The Tank" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/movies/the-black-demon.jpg" alt="The Covenant" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/movies/65.jpg" alt="65" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Swiperrrr;
