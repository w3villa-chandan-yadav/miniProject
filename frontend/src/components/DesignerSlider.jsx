


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./stylees.css";

import { EffectCoverflow, Autoplay } from "swiper/modules";
import { useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function DesignerSlider({ movies }) {
  const { i18n } = useTranslation();
  const appCategory = useSelector((state) => state.appCategory);

  return (
    <div className="slider-container mx-auto">
       <h3 className=' poppins font-semibold dark:text-white text-black text-xl ml-[32px]  py-3'>Most Watching series</h3> 

      <Swiper
        loop={movies.length > 2} // Enables infinite looping
        autoplay={{
          delay: 1000, // Auto-slide every 3 seconds
          disableOnInteraction: false, // Keeps autoplay active after user interaction
        }}
        effect={"coverflow"}
        // grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        speed={1000}
        
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
      >
        {movies.slice(5,12)?.map((movie,index) => (
          <SwiperSlide key={index} className="rounded-2xl">
            <img
              loading="lazy"
              className="rounded-2xl bg-black object-cover"
            //  src="https://swiperjs.com/demos/images/nature-2.jpg"
              src={`https://image.tmdb.org/t/p/w300${movie?.backdrop_path}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default DesignerSlider;