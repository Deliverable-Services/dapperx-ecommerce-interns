import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay,FreeMode } from 'swiper/modules';

import { Fav_IMAGES } from '@/utils/constants';


const FavCarousel = () => (

  <div className='py-10 w-full flex flex-row'>
    <Swiper navigation={false}  modules={[Navigation,Autoplay,FreeMode]} 
      slidesPerView={1}
      autoplay={true}
      pagination={{
        clickable:true,
      }}
      freeMode={true}
      className='mySwiper'
      >
      {Fav_IMAGES.map((item) => (
         <SwiperSlide key={item.id} className=''>
          

        <Image
          src={item.imgUrl}
          width={720}
          height={1020}
          alt=''
          className='w-full h-auto'
          />
          
         

        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default FavCarousel;





