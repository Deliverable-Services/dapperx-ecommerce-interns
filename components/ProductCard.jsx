import Image from 'next/image';
import { Heart, IndianRupee } from 'lucide-react';

import Rating from './Rating';

const ProductCard = ({ items }) => (
  <div className='flex sm:flex-row flex-col gap-10 items-center justify-center sm:justify-start'>
    {items.map((product) => (
      <div
        key={product.id}
        className='bg-white gap-3 flex flex-col items-center  w-[220px] h-[220px]  shadow-lg shadow-gray-600'
      >
        <Image
          src={product.imgUrl}
          alt='product'
          width={180}
          height={100}
          className='flex w-auto h-auto aspect-square object-cover mt-4'
        />
        <div className='flex flex-col w-full px-5'>
          <div className='flex flex-row items-center justify-between'>
            <h1 className='text-grey text-[10px] font-semibold'>
              {product.BrandName}
            </h1>
            <div className=''>
              <Heart />
            </div>
          </div>
          <div>
            <p className='font-bold text-[13px] '>{product.name}</p>
          </div>
          <div className='flex flex-row items-center justify-between '>
            <div className='flex flex-row fill-yellow-500 h-2 w-9 items-center '>
              {[...Array(5)].map((_, i) => (
                <Rating key={i} />
              ))}
            </div>
            <div className='flex flex-row items-center justify-center  '>
              <IndianRupee size={11} />
              <h2 className='text-sm font-semibold'>{product.price}</h2>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProductCard;







