import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import { PRODUCTS_CATEGORIES } from '@/utils/constants.js';

const Carausel = () => (
    <div className='slider-container w-full'>
      <Swiper navigation={true} modules={[Navigation,Pagination]} className="mySwiper"
      slidesPerView={'auto'}
      spaceBetween={7}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        480: {
          slidesPerView: 2,
        
        },
        650: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}>
        {PRODUCTS_CATEGORIES.map((item) => (
          <SwiperSlide key={item.id}>
            <div  className='flex flex-col w-full '>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

export default Carausel;













