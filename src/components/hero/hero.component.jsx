import React from "react";

import hats from "../../assets/hats.jpg";
import mens from "../../assets/men.jpg";
import womens from "../../assets/womens.avif";
import jackets from "../../assets/jacket.jpg";
import sneakers from "../../assets/sneakers.jpg";
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
          <div className="text">For Women</div>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#af8d6a" }}>
          <img src={mens} alt="for men" />
          <div className="text">For Men</div>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#64626a" }}>
          <img src={jackets} alt="jacket" />
          <div className="text">Jackets</div>
        </SwiperSlide>
        {/* <SwiperSlide style={{ background: "#856047" }}>
          <img src={sneakers} alt="sneakers" />
          <div className="text">Sneakers</div>
        </SwiperSlide>
        <SwiperSlide style={{ background: " #384d61" }}>
          <img src={hats} alt="hats" />
          <div className="text">Hats</div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default Hero;
