import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { BLAZER_IMAGES,FEATURED_PRODUCTS } from "@/utils/constants.js";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";


const BlazerCarousel = () => {
  const PrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;

    return (
      <div
        {...props}
        className="bg-white h-[30px] z-20 w-[30px] text-black rounded-full cursor-pointer top-[40%] left-10 absolute"
        style={{display:"flex",alignItems:"center",justifyContent:"center"}}
        onClick={onClick}
      >
      <ChevronLeft className="size-4" />
      </div>
    );
  };
  const NextArrow = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;
    return (
      <div
        {...props}
        className="bg-white h-[30px] w-[30px] text-black rounded-full cursor-pointer top-[40%] right-10 absolute"
        style={{display:"flex",alignItems:"center",justifyContent:"center"}}
        onClick={onClick}
      >
        <ChevronRight size={20} />
      </div>
    );
  };

  const settings = {
    centerMode: true,
    infinite: true,
    autoplay:true,
    slidesToShow: 4,
    speed: 1000,
    
    rows: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="w-full relative slider-container">
    <Slider {...settings} >
        {BLAZER_IMAGES.map((item) => {
          return (
            <div key={item.id} className="flex flex-col w-full">
              <Image
                src={item.imageUrl}
                width={1200}
                height={1200}
                alt="carousel"
                className="w-auto h-auto"
              />
            </div>
          );
        })}
    </Slider>

    <div className="absolute bottom-0">
    <Marquee className=" backdrop-blur-lg bottom-0"
    autoFill="true">
              {FEATURED_PRODUCTS.map((item, index) => {
                return (
                  <div
                  key={index}
                  className=" flex sm:text-4xl text-xl px-3 py-6 gap-5 font-semibold  items-center justify-evenly">
                    <p>{item.title}</p>
                    <span>{item.icon}</span>
                  </div>
                );
              })}
    </Marquee>
              </div>
    </div>
  );
};
export default BlazerCarousel;
