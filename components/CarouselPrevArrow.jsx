import { ChevronLeft } from 'lucide-react';

const CarouselPrevArrow = ({ ...props }) => {
  const { onClick } = props;

  return (
    <div
      {...props}
      className='bg-white h-[30px] w-[30px] text-black rounded-full cursor-pointer top-[50%] translate-y-[-50] z-20 left-10 absolute'
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ChevronLeft className='size-4' />
    </div>
  );
};

export default CarouselPrevArrow;




