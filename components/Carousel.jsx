import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { PRODUCTS_CATEGORIES } from "@/utils/constants.js";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Carausel = () => {
  const PrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;

    return (
      <div
        {...props}
        className="bg-white h-[30px] w-[30px] text-black rounded-full cursor-pointer top-[40%] z-20 left-10 absolute"
        onClick={onClick}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
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
        onClick={onClick}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ChevronRight size={20} />
      </div>
    );
  };

  var settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 4,
    speed: 1000,
    rows: 1,
    autoplay: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container w-full">
      <Slider {...settings}>
        {PRODUCTS_CATEGORIES.map((item) => {
          return (
            <div key={item.id} className="flex flex-col w-[100%] ">
              <div className="flex items-center justify-center">
                <Image
                  src={item.imageUrl}
                  width={1200}
                  height={1200}
                  alt="carousel"
                  className="md:w-[250px] md:h-[280px] w-[120px] h-[150px] "
                />
              </div>
              <h2 className="md:text-xl text-md font-bold flex flex-row items-center justify-center my-8 ">
                {item.category}
              </h2>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Carausel;