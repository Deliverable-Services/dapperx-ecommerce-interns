import Image from 'next/image';

import Rating from './Rating';

const ReviewCard = ({ items }) => (
  <div className='flex flex-col items-center justify-around bg-white py-10'>
    <p className='md:text-5xl text-xl  pb-14 font-bold'>
      {' '}
      Don&apos;t just listen to us
    </p>
    <div className='flex sm:flex-row flex-col justify-evenly  lg:gap-20 gap-8 px-2 pb-20'>
      {items.map((user) => (
        <div
          key={user.id}
          className={`${
            user.id === 2 ? 'shadow-2xl shadow-zinc-600' : ''
          } bg-slate flex flex-col py-10 items-center justify-evenly md:w-[400] w-full min-h-[500px] gap-7 md:text-lg px-5 `}
        >
          <Image
            src={user.imgUrl}
            width={720}
            height={1020}
            alt=''
            className='w-[100px] h-[100px] aspect-square rounded-full'
          />
          <div className='flex flex-row fill-yellow-500 items-center '>
            {[...Array(5)].map((_, i) => (
              <Rating key={i} />
            ))}
          </div>
          <p className='font-semibold text-center md:leading-9'>
            {user.review}
          </p>
          <span className='font-bold'>{user.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ReviewCard;
