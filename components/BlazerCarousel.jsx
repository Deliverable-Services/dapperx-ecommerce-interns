import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import Slider from 'react-slick';

import CarouselPrevArrow from './CarouselPrevArrow';
import CarouselNextArrow from './CarouselNextArrow';

import { BLAZER_IMAGES, FEATURED_PRODUCTS } from '@/utils/constants.js';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BlazerCarousel = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    speed: 1000,

    rows: 1,
    nextArrow: <CarouselNextArrow />,
    prevArrow: <CarouselPrevArrow />,
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
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='w-full relative slider-container'>
      <Slider {...settings}>
        {BLAZER_IMAGES.map((item) => (
          <div key={item.id} className='flex flex-col w-full'>
            <Image
              src={item.imageUrl}
              width={1200}
              height={1200}
              alt='carousel'
              className='w-auto h-auto'
            />
          </div>
        ))}
      </Slider>

      <div className='absolute bottom-0'>
        <Marquee className=' backdrop-blur-lg bottom-0' autoFill='true'>
          {FEATURED_PRODUCTS.map((item, index) => (
            <div
              key={index}
              className=' flex sm:text-4xl text-xl px-3 py-6 gap-5 font-semibold  items-center justify-evenly'
            >
              <p>{item.title}</p>
              <span>{item.icon}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BlazerCarousel;







