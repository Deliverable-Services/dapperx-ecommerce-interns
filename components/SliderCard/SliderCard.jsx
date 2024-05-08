import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css/pagination';

import Rating from '../Rating';


import { SLIDER_CARD_DETAILS } from '@/utils/constants';


const SliderCard = () =>  (
    <div className='bg-slate w-full flex flex-col items-center justify-center py-10 xl:px-44'>
      <p className='sm:text-4xl text-xl font-bold mb-10'>DEALS OF THE DAY</p>
      <div className='w-full'>
      <Swiper modules={[Pagination, Autoplay,FreeMode ]} className="mySwiper"
      slidesPerView={'auto'}
      spaceBetween={7}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      initialSlide={0}
      pagination={{
        clickable:true
      }}
      freeMode={true}
      
      centeredSlides ={true}
      breakpoints={{
        600: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}>
          {SLIDER_CARD_DETAILS.map((card, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
            <div
              className={`${isActive ? 'shadow-lg shadow-zinc-600' : 'scale-75'} flex flex-col bg-white p-2 mx-auto my-10 max-h-[330px] max-w-[250px]`}
            >
              <Image
                src={card.imageUrl}
                width={720}
                height={1020}
                alt=''
                className='h-auto w-full aspect-square'
              />

              <div className='flex flex-row justify-between items-center mt-5 mb-3 px-4 w-full'>
                <div className='text-sm font-bold'>
                  <p>{card.text}</p>
                  <div className='flex flex-row gap-3 items-center font-bold '>
                    <span className=' text-xs'>₹ {card.price}</span>
                    <div className='flex flex-row fill-yellow-500 w-[56px]'>
                      {[...Array(5)].map((_, index) => (
                        <Rating key={index} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className='bg-black text-white w-[40px] h-[40px] flex items-center justify-center'>
                  <button className='text-xl'>{card.btnIcon}</button>
                </div>
              </div>
            </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
export default SliderCard;










































































