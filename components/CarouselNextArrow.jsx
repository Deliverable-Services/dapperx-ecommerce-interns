import { ChevronRight } from 'lucide-react';

const CarouselNextArrow = ({ ...props }) => {
  const { onClick } = props;

  return (
    <div
      {...props}
      className='bg-white h-[30px] w-[30px] text-black rounded-full cursor-pointer top-[50%] translate-y-[-50] right-10 absolute'
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ChevronRight size={20} />
    </div>
  );
};

export default CarouselNextArrow;







