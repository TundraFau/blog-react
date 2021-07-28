import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation} from 'swiper/core';

import '../styles/swiper.scss'


type SlideType = {
    
}


// Install Swiper modules
SwiperCore.use([Navigation]);

const slides: SlideType[] = new Array();

for (let i = 0; i < 5; i++) {
    slides.push(
        <SwiperSlide key={`slide-${i}`}>
            <img src={`https://picsum.photos/id/${i+1}/500/300`} alt={`slide ${i+1}`}></img>
        </SwiperSlide>
    )
}

export function SwiperComp() {
    return(
        <>
        <Swiper 
        
        navigation={true} className="mySwiper">
            {slides}
        </Swiper>
        </>

    )
    
}