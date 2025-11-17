import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slide1 from "../../assets/image/Slide1.jpg";
import slide2 from "../../assets/image/Slide2.jpg";
import slide3 from "../../assets/image/Slide3.jpg";
import slide4 from "../../assets/image/Slide4.jpg";
import slide5 from "../../assets/image/Slide5.jpg";

// ------------------ AutoType ------------------

const AutoType = () => {
  const texts = ["Best Coffee in Town","Discover Your Favorite Drink", "Made Fresh for Your"];
  const [ti, setTi] = useState(0);
  const [i, setI] = useState(0);
  const [isT, setIsT] = useState(true);

  useEffect(() => {
    const t = texts[ti];
    const speed = isT ? 120 : 80;

    const timer = setTimeout(() => {
      if (isT) {
        if (i < t.length) setI(i + 1);
        else setIsT(false);
      } else {
        if (i > 0) setI(i - 1);
        else {
          setTi((ti + 1) % texts.length);
          setIsT(true);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [i, isT, ti]);

  return (
    <h1 className="text-1xl lg:text-3xl font-medium text-white">
      {texts[ti].slice(0, i)}|
    </h1>
  );
};

// ------------------ Slidebar ------------------

const slides = [
  { id: 1, src: slide1 },
  { id: 2, src: slide2 },
  { id: 3, src: slide3 },
  { id: 4, src: slide4 },
  { id: 5, src: slide5 },
];

export default function Slidebar() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-[50vh] sm:h-[50vh] md:h-[50vh] lg:h-screen">
              
              <img
                src={item.src}
                alt={`slide ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Buttons */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-5 w-full max-w-[220px]">
                <Link
                  to="/menu"
                  className="flex-1 bg-amber-900 text-white lg:p-3 py-2 text-center text-sm rounded-md hover:bg-amber-700 transition shadow-md"
                >
                  View Menu
                </Link>

                <Link
                  to="/menu"
                  className="flex-1 bg-gray-500 text-white lg:p-3 py-2 text-center text-sm rounded-md hover:bg-gray-600 transition shadow-md"
                >
                  Order Now
                </Link>
              </div>

              {/* Text */}
              <div className="absolute top-1/2 left-11 md:left-16 -translate-y-1/2 backdrop-blur-sm p-4 md:p-8 rounded-xl max-w-[80%] md:max-w-[70%] text-white">
                <h1 className="text-2xl md:text-7xl font-bold mb-3">
                  Welcome to our Café Shop!
                </h1>
                 {/* AutoType inside slide */}
                <AutoType />

                <p className="text-sm md:text-2xl lg:py-5 leading-relaxed text-gray-300">
                  We serve fresh coffee, delicious drinks, and great food every day.
                  Our café is a cozy place to relax, study, or meet friends.
                </p>
               
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
