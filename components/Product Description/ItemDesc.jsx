import Image from 'next/image'
import React from 'react'
import Rating from '../Rating'
import { FaRegHeart } from "react-icons/fa";

const ItemDesc = () => {
  return (
    <div className='flex px-4 flex-col sm:flex sm:flex-row'>
      <div className='w-full overflow-hidden sm:w-1/5 flex justify-center sm:flex sm:flex-col '>
        <Image className='h-[90px] w-[120px] mx-2' src={'/model.avif'} alt='t-shirt' height={300} width={300}/>
        <Image className='h-[90px] w-[120px] mx-2 sm:my-[14px]' src={'/model.avif'} alt='t-shirt' height={300} width={300}/>
        <Image className='h-[90px] w-[120px] mx-2 sm:my-[14px]' src={'/model.avif'} alt='t-shirt' height={300} width={300}/>
        <Image className='h-[90px] w-[120px] mx-2' src={'/model.avif'} alt='t-shirt' height={300} width={300}/>
      </div>
      <div className='w-full p-2.5 sm:p-0 sm:w-2/5 sm:items-center sm:flex sm:justify-center sm:-ml-24'>
        <Image className='w-full h-[417px]' src={'/model.avif'} alt='t-shirt' height={300} width={300}/>
      </div>
    <div className='w-full sm:w-2/5 h-full px-6'>
        <div className='w-full flex justify-between'>
            <div><span className='font-bold text-[22px]'>Mens t-shirt</span></div>
            <div>
                <span><s>₹ 3500</s></span>
                <span>{' '}₹2000</span>
            </div>
        </div>
        <p className='font-semibold py-2'>Cotton track</p>
        <div className='flex items-center py-1'>
            <Rating/>
            <Rating/>
            <Rating/>
            <Rating/>
            <Rating/>
            <span>(1320)</span>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deleniti libero illo quod ex molestias dolor magni at, officiis earum reiciendis a harum sit amet nulla cupiditate placeat. Tempore, voluptate.
            Illo hic aspernatur earum quibusdam non neque sunt nesciunt porro laudantium.
        </p>
        <p className='overflow-hidden font-medium py-1'>Select Colors</p>
        <div className='flex justify-between w-full  sm:w-2/3'>
            <div className='w-12 h-12 bg-red-400 rounded-sm'></div>
            <div className='w-12 h-12 bg-black rounded-sm'></div>
            <div className='w-12 h-12 bg-[#C3B9AD] rounded-sm'></div>
            <div className='w-12 h-12 bg-[#3F7879] rounded-sm'></div>
            <div className='w-12 h-12 bg-[#BA9B87] rounded-sm'></div>
        </div>
        <p className='font-medium py-1'>Select Size</p>
        <div className='flex justify-between w-1/2'>
            <span className='font-semibold text-[10px] flex bg-white w-8 h-8 items-center justify-center  mr-2 border-2 p-[1px] border-gray-300 rounded-[4px]'>XS</span>
            <span className='font-semibold text-[10px] flex bg-white w-8 h-8 items-center justify-center  mr-2 border-2 p-[1px] border-gray-300 rounded-[4px]'>S</span>
            <span className='font-semibold text-[10px] flex bg-white w-8 h-8 items-center justify-center  mr-2 border-2 p-[1px] border-gray-300 rounded-[4px]'>M</span>
            <span className='font-semibold text-[10px] flex bg-white w-8 h-8 items-center justify-center  mr-2 border-2 p-[1px] border-gray-300 rounded-[4px]'>L</span>
            <span className='font-semibold text-[10px] flex bg-white w-8 h-8 items-center justify-center  mr-2 border-2 p-[1px] border-gray-300 rounded-[4px]'>XL</span>
        </div>
        <div className='my-2 flex items-center py-1'>
            <button className='w-1/2 bg-black inline-block text-white text-[18px] items-center py-1'>Apply</button>
            <span className='border-2 border-black p-[6px] rounded-sm mx-2'><FaRegHeart /></span>
        </div>
    </div>
    </div>
  )
}

export default ItemDesc
