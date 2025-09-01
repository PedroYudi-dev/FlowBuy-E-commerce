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
              <img src="/Images/Banner Fone de ouvido-2.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="/Images/Banner oferta de Iphone 13 - 2.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="/Images/Banner de Geladeira-2.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src="/Images/BAnner de almofadas.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <span>Slide 5</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <span>Slide 6</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
}