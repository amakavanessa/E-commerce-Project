import React from "react";

import mens from "../../assets/men.jpg";
import womens from "../../assets/womens.avif";
import jackets from "../../assets/jacket.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import "./hero.styles.scss";

const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{ background: "#696d5f" }}>
          <img src={womens} alt="womens" />
          <div className="text">Women's Collection</div>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#46516d" }}>
          <img src={mens} alt="for men" />
          <div className="text">Men's Collection</div>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#c69b86" }}>
          <img src={jackets} alt="jacket" />
          <div className="text">Jackets</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
