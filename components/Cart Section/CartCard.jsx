import Image from 'next/image'
import React from 'react'
import Rating from '../Rating'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";

const CartCard = () => {
  return (
    <div>
      <div className='flex'>
        <div>
          <Image className='h-[240px] w-[240px] rounded-sm' src={'/add.jpg'} alt='pic' height={300} width={300}/>
        </div>
        <div className='mx-4'>
          <div className='flex justify-between'>
              <span className='font-bold'>Full sleeve zipper</span>
              <span className='overflow-hidden pr-12 font-bold'>₹ 1,500</span>
          </div>
          <p className='font-medium mt-4'>Mens t-shirt</p>
          <div className='flex items-center py-1'>
              <Rating/>
              <Rating/>
              <Rating/>
              <Rating/>
              <Rating/>
              <span>(1320)</span>
          </div>
          <p className='font-medium py-[2px]'>Brown</p>
          <p className='font-medium py-[2px]'>{`Size: ${'M'}`}</p>
          <p className='font-medium py-[2px]'>{`Quantity: ${'01'}`} </p>
          <span className='flex mt-4 | sm:mt-11'>
              <RiDeleteBin6Line />
              <FaRegHeart className='mx-4'/>
          </span>
        </div>
      </div>
      <div className='border-y-2 border-black mt-12 py-2'>
      <p className='font-bold text-[20px]'>Shipping</p>
      <p className='font-medium text-gray-700'>To get shipping information <span className='font-bold'><u>Edit location</u></span></p>
    </div>
  </div>
  )
}

export default CartCard
