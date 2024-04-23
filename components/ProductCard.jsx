import React from 'react'
import { CiHeart } from "react-icons/ci";
import { IndianRupee } from 'lucide-react';
import Image from 'next/image';
import Rating from './Rating';
const ProductCard = ({data}) => {
  return (
    <div className='flex flex-row max-md:flex-col gap-10'>
        {
            data.map((product) => {
                return <div key={product.id} className='bg-white px-2 gap-3 flex flex-col items-center justify-center min-w-[220px] max-lg:w-24 shadow-lg shadow-gray-600'>
                    <Image src={product.imgUrl} alt='product' width={180} height={100} className='flex object-fill mt-4'/>
                    <div className='flex flex-col '>
                        <div className='flex flex-row items-center justify-between '>
                            <h1 className='text-grey text-[10px] font-semibold'>{product.BrandName}</h1>
                            <div className=''><CiHeart/></div>
                           
                        </div>
                        <div>
                        <p className='font-bold text-[13px] '>{product.name}</p>
                        </div>
                        <div className='flex flex-row items-center justify-between mt-2'>
                           
                             <div className='flex flex-row fill-yellow-500 size-14 '>   
                            {[...Array(5)].map((_, i) => (
                                <Rating key={i}/>
                            ))}
                            </div>
                            <div className='flex flex-row gap-1 items-center justify-center size-10'>
                                <p className='text-sm font-semibold'>
                                <IndianRupee />
                                </p>
                               
                                <p className='text-sm font-semibold'>
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
