// Import
import "swiper/css";
import "swiper/css/pagination";
import "./CarouselImg.css";

// State


// icones
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";


export default function CarouselImg(){

    return (
      <div className="carousel-wrapper">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true} // igual ao loop: true
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "progressbar", // igual ao type: "progressbar"
          }}
          className="progress-slide-carousel"
        >
          <SwiperSlide>
            <div className="slide">
              <img src="/Images/Xiaomi 15.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="/Images/Banner oferta de smartphone moderno linha azul e branco...png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="/Images/poco x7 pro..png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="/Images/S25..png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="/Images/iphone 17 Pro.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="/Images/Huawei Pura 80 Ultra.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
}