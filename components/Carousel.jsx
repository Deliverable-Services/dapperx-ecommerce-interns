import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CarouselPrevArrow from './CarouselPrevArrow';
import CarouselNextArrow from './CarouselNextArrow';

import { PRODUCTS_CATEGORIES } from '@/utils/constants.js';

const Carausel = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '50px',
    slidesToShow: 4,
    speed: 1000,
    rows: 1,
    autoplay: true,
    slidesToScroll: 1,
    nextArrow: <CarouselNextArrow />,
    prevArrow: <CarouselPrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className='slider-container w-full'>
      <Slider {...settings}>
        {PRODUCTS_CATEGORIES.map((item) => (
          <div key={item.id} className='flex flex-col w-full '>
            <div className='flex items-center justify-center'>
              <Image
                src={item.imageUrl}
                width={1200}
                height={1200}
                alt='carousel'
                className='md:w-[250px] md:h-[280px] w-[120px] h-[150px] '
              />
            </div>
            <h2 className='md:text-xl text-md font-bold flex flex-row items-center justify-center my-8 '>
              {item.category}
            </h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carausel;













