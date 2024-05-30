import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import Marquee from 'react-fast-marquee';

import { BLAZER_IMAGES, FEATURED_PRODUCTS } from '@/utils/constants.js';

const BlazerCarousel = () => (
  <div className='w-full relative flex'>
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay, FreeMode]}
      className='mySwiper'
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      freeMode={true}
      breakpoints={{
        480: {
          slidesPerView: 2,
        },
        650: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {BLAZER_IMAGES.map((item) => (
        <SwiperSlide key={item.id}>
          <div key={item.id} className='flex flex-row w-full justify-center'>
            <Image
              src={item.imageUrl}
              width={720}
              height={1020}
              alt='carousel'
              className='w-auto h-auto aspect-square'
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    <div className=' backdrop-blur-lg absolute z-10 bottom-0 w-full'>
      <Marquee className=' w-full flex flex-row gap-10' autoFill={true}>
        {FEATURED_PRODUCTS.map((item) => (
          <div
            key={item.id}
            className=' flex flex-row w-full md:text-4xl text-xl px-3 lg:py-6 py-2 md:gap-5 gap-2 font-semibold  items-center justify-evenly'
          >
            <p>{item.title}</p>
            <span>{item.icon}</span>
          </div>
        ))}
      </Marquee>
    </div>
  </div>
);

export default BlazerCarousel;
