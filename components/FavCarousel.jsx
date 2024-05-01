import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const FavCarousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        autoplay:true,
        speed: 300,
        rows: 1,
        dots:true, 
      };
  return (
    <div className="slider-container py-10">
        <Slider 
        {...settings} className='relative'>
            <Image src={"/ajio.avif"} width={720} height={1020} alt="" className="w-auto h-auto"/>
            <Image src={'/ajio1.png'} width={720} height={1020} alt="" className="w-auto h-auto"/>
            <Image src={'/ajio2.png'} width={720} height={1020} alt="" className="w-auto h-auto"/>
        </Slider>
    </div>
  )
}

export default FavCarousel
