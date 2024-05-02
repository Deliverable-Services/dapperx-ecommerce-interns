import Image from 'next/image';
import Slider from 'react-slick';

import { Fav_IMAGES } from '@/utils/constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FavCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 300,
    rows: 1,
    dots: true,
  };

  <div className='slider-container py-10'>
    <Slider {...settings} className='relative'>
      {Fav_IMAGES.map((item, index) => (
        <Image
          src={item.imgUrl}
          width={720}
          height={1020}
          alt=''
          className='w-auto h-auto'
          key={index}
        />
      ))}
    </Slider>
  </div>;
};

export default FavCarousel;





