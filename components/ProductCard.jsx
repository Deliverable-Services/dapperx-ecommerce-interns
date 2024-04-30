import React from 'react'
import { CiStar, CiStarFilled, CiHeart } from "react-icons/ci";
import { IndianRupee } from 'lucide-react';
import Image from 'next/image';
import Rating from './Rating';
const ProductCard = ({data}) => {
      return (
    <div className='flex flex-row gap-10'>
        {
            data.map((product) => {
                return <div key={product.id} className='bg-white py-4 px-2 gap-3 flex flex-col items-center justify-center min-w-[220px] rounded-lg'>
                    <Image src={product.imgUrl} alt='product' width={180} height={100} className='flex object-fill'/>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-grey text-[10px] font-semibold'>{product.BrandName}</h1>
                            <p className='font-bold text-[13px] '>{product.name}</p>
                            <div className='flex flex-row fill-yellow-500'>
                                
                            {[...Array(5)].map((_, i) => (
                                // <CiStar key={i} className=' fill-yellow-500 '/>
                                <Rating key={i}/>
                            ))}
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 items-end'>
                            <div className=''><CiHeart/></div>
                            <div className='flex flex-row items-center justify-center'>
                                <IndianRupee className='size-3 font-semibold mt-1'/>
                                <p className='size-4 font-semibold'>
                                    {product.price}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
  )
}

export default ProductCard
