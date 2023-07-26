// import React from "react";
// import Carousel from "nuka-carousel";
// // import tech from '../assets/techbro.png';
// import space from '../assets/outspace.jpg';
// import nasa from '../assets/nasa.jpg';
// import server from '../assets/server.jpg';
//
// const Mouse = () => {
//     return (
//         <Carousel
//             autoplay={true}
//             adaptiveHeight={true}
//             slideWidth={500}
//             wrapAround={true}
//             pauseOnHover={true}
//             // Set heightMode to "max" to maintain the desired height
//
//         >
//             <img src={server} alt="tech" />
//             <img src={space} alt="space" />
//             <img src={nasa} alt="nasa" />
//         </Carousel>
//     )
// }
//
// export default Mouse;












// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';
//
//
// // Import Swiper CSS and additional styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
//
// // Import your images (modify the file paths according to your actual images)
// import slide_image_1 from '../assets/img_1.jpg';
// import slide_image_2 from '../assets/img_2.jpg';
// import slide_image_3 from '../assets/img_3.jpg';
// import slide_image_4 from '../assets/img_4.jpg';
// import slide_image_5 from '../assets/img_5.jpg';
// import slide_image_6 from '../assets/img_6.jpg';
// import slide_image_7 from '../assets/img_7.jpg';
//
// // Use Swiper modules
// SwiperCore.use([EffectCoverflow, Pagination, Navigation]);
//
// function Mouse() {
//     return (
//         <div className="container">
//             <h1 className="heading">Flower Gallery</h1>
//             <Swiper
//                 effect={'coverflow'}
//                 grabCursor={true}
//                 centeredSlides={true}
//                 loop={true}
//                 slidesPerView={'auto'}
//                 coverflowEffect={{
//                     rotate: 0,
//                     stretch: 0,
//                     depth: 100,
//                     modifier: 2.5,
//                 }}
//                 pagination={{ clickable: true }}
//                 navigation={true}
//                 className="swiper_container"
//             >
//                 {/* Swiper slides */}
//                 <SwiperSlide>
//                     <img src={slide_image_1} alt="slide_image" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide_image_2} alt="slide_image" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide_image_3} alt="slide_image" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide_image_4} alt="slide_image" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide_image_5} alt="slide_image" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide_image_6} alt="slide_image" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide_image_7} alt="slide_image" />
//                 </SwiperSlide>
//
//                 {/* Swiper navigation */}
//                 <div className="swiper-button-prev slider-arrow">
//                     <i className="icon ion-icon ion-md-arrow-back"></i>
//                 </div>
//                 <div className="swiper-button-next slider-arrow">
//                     <i className="icon ion-icon ion-md-arrow-forward"></i>
//                 </div>
//
//                 {/* Swiper pagination */}
//                 <div className="swiper-pagination"></div>
//             </Swiper>
//         </div>
//     );
// }
//
// export default Mouse;


// import { Carousel } from "@material-tailwind/react";
//
// export default function Example() {
//     return (
//         <Carousel
//             className="rounded-xl"
//             navigation={({ setActiveIndex, activeIndex, length }) => (
//                 <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
//                     {new Array(length).fill("").map((_, i) => (
//                         <span
//                             key={i}
//                             className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
//                                 activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
//                             }`}
//                             onClick={() => setActiveIndex(i)}
//                         />
//                     ))}
//                 </div>
//             )}
//         >
//             <img
//                 src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//                 alt="beach"
//                 className="h-full w-full object-cover"
//             />
//             <img
//                 src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
//                 alt="ocean"
//                 className="h-full w-full object-cover"
//             />
//             <img
//                 src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
//                 alt="lake"
//                 className="h-full w-full object-cover"
//             />
//         </Carousel>
//     );
// }

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import tech from '../assets/techbro.png';
import space from '../assets/outspace.jpg';
import nasa from '../assets/nasa.jpg';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item">
        <img src={nasa} alt="nasa" />
    </div>,
    <div className="item">
        <img src={space} alt="space" />
    </div>,
    <div className="item">
        <img src={tech} alt="tech" />
    </div>,
];

const Mouse = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);

export default Mouse;
