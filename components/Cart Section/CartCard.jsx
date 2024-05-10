import Image from 'next/image'
import React from 'react'
import Rating from '../Rating'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";

const CartCard = () => {
  return (
    <div>
      <div className='flex border-b-2 border-black pb-8'>
        <div>
          <Image className='h-[264px] w-[200px] rounded-sm' src={'/cloth.jpg'} alt='pic' height={300} width={300}/>
        </div>
        <div className='mx-4'>
          <div className='flex justify-between'>
              <span className='font-bold'>Full sleeve zipper</span>
              <span className='overflow-hidden pr-12 font-bold'>₹ 1,500</span>
          </div>
          <p className='font-medium mt-4'>Mens t-shirt</p>
          <div className='flex items-center py-1'>
          <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
              <span>(1320)</span>
          </div>
          <p className='font-medium py-[2px] text-gray-500'>Brown</p>
          <p className='font-medium py-[2px] text-gray-500'>{`Size: ${'M'}`}</p>
          <p className='font-medium py-[2px] text-gray-500'>{`Quantity: ${'01'}`} </p>
          <span className='flex mt-4 | sm:mt-11'>
          <button className='bg-gray-200' >
          <RiDeleteBin6Line className='m-3'/>
          </button>
          {/* <FaRegHeart className='mx-4'/> */}
          <button className='bg-gray-200 top-2 mx-4' >
          <FaRegHeart className='m-3'/>
          </button>
          </span>
        </div>
      </div>
      <div className='mt-12 py-2'>
      <p className='font-bold text-[20px]'>Shipping</p>
      <p className='font-medium text-gray-700'>To get shipping information <span className='font-bold text-black'><u>Edit location</u></span></p>
    </div>
  </div>
  )
}

export default CartCard
