import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation, Pagination} from 'swiper/core';

import 'swiper/swiper-bundle.css'
import '../styles/swiper.scss'

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const slides = new Array();

for (let i = 0; i < 5; i++) {
    slides.push(
        <SwiperSlide key={`slide-${i}`}>
            <img src={`https://picsum.photos/id/${i+1}/500/300`} alt={`slide ${i+1}`}></img>
        </SwiperSlide>
    )
}

export function SwiperComp() {
    return(
        <div className="swiper-wrapper">
        <Swiper 
        navigation
        pagination
        spaceBetween={5}
        slidesPerView={2}
        className="mySwiper">
            {slides}
        </Swiper>
        </div>

    )
    
}