import Image from 'next/image'
import React, { useState } from 'react'
import Rating from '../Rating'
import { FaRegHeart } from "react-icons/fa";
import { ImageData } from '@/utils/constants';
const ItemDesc = () => {
  const[imageUrl,setImageUrl]=useState('/model.avif')
  const[activeId,setActiveId]=useState(0);
  return (
    <div className='flex px-4 flex-col sm:flex sm:flex-row'>
      <div className='w-full overflow-hidden sm:w-1/5 flex justify-center sm:flex sm:flex-col '>
        {/* <Image className='h-[108px] w-[76px] sm:w-[120px] mx-2' src={'/model.avif'} onClick={()=>{setImageUrl('/model.avif')}} alt='t-shirt' height={300} width={300}/>
        <Image className='h-[108px] w-[76px] sm:w-[120px] mx-2 sm:my-[14px]' src={'/btshirt.jpg'} onClick={()=>{setImageUrl('/btshirt.jpg')}} alt='t-shirt' height={300} width={300}/>
        <Image className='h-[108px] w-[76px] sm:w-[120px] mx-2 sm:my-[14px]' src={'/vertical.avif'} onClick={()=>{setImageUrl('/vertical.avif')}} alt='t-shirt' height={300} width={300}/>
        <Image className='h-[108px] w-[76px] sm:w-[120px] mx-2' src={'/shirtb.jpg'} onClick={()=>{setImageUrl('/shirtb.jpg')}} alt='t-shirt' height={300} width={300}/> */}
        {ImageData.map((data,index)=>(
          <Image key={data?.id} className={activeId===index ?'h-[100px] w-[76px] sm:w-[120px] mx-2 sm:my-[14px] border-2 border-yellow-300':'h-[100px] w-[76px] sm:w-[120px] mx-2 sm:my-[14px] '} src={`${data?.url}`} onClick={()=>{
            setImageUrl(data?.url)
            setActiveId(data?.id-1)
          }} alt='t-shirt' height={300} width={300}/>
        ))}
      </div>
      <div className='w-full p-2.5 sm:p-0 sm:w-2/5 sm:items-center sm:flex sm:justify-center sm:-ml-24'>
        <Image className='w-full h-[488px]' src={`${imageUrl}`} alt='t-shirt' height={300} width={300}/>
      </div>
    <div className='w-full sm:w-2/5 h-full px-6'>
        <div className='w-full flex justify-between'>
            <div><span className='font-semibold text-[22px]'>Mens t-shirt</span></div>
            <div>
                <span className='font-semibold text-gray-500'><s>₹3500</s></span>
                <span className='font-semibold'>{' '}₹2000</span>
            </div>
        </div>
        <p className='font-semibold py-2 text-gray-600'>Cotton track</p>
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
        <p className='font-semibold text-gray-600 mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deleniti libero illo quod ex molestias dolor magni at, officiis earum reiciendis a harum sit amet nulla cupiditate placeat. Tempore, voluptate.
            Illo hic aspernatur earum quibusdam non neque sunt nesciunt porro laudantium.
        </p>
        <p className='overflow-hidden font-medium py-1 mt-4'>Select Colors</p>
        <div className='flex justify-between w-full  sm:w-2/3 mt-2'>
            <div className='w-12 h-12 bg-red-400 rounded-sm'></div>
            <div className='w-12 h-12 bg-black rounded-sm'></div>
            <div className='w-12 h-12 bg-[#C3B9AD] rounded-sm'></div>
            <div className='w-12 h-12 bg-[#3F7879] rounded-sm'></div>
            <div className='w-12 h-12 bg-[#BA9B87] rounded-sm'></div>
        </div>
        <p className='font-medium py-1 mt-2'>Select Size</p>
        <div className='flex justify-between w-1/2 mt-2'>
            <span className='font-bold text-[10px] flex bg-gray-200 w-10 h-10 items-center justify-center  mr-2 border-2 p-[1px] border-gray-200 rounded-sm'>XS</span>
            <span className='font-bold text-[10px] flex bg-gray-200 w-10 h-10 items-center justify-center  mr-2 border-2 p-[1px] border-gray-200 rounded-sm'>S</span>
            <span className='font-bold text-[10px] flex bg-gray-200 w-10 h-10 items-center justify-center  mr-2 border-2 p-[1px] border-gray-200 rounded-sm'>M</span>
            <span className='font-bold text-[10px] flex bg-gray-200 w-10 h-10 items-center justify-center  mr-2 border-2 p-[1px] border-gray-200 rounded-sm'>L</span>
            <span className='font-bold text-[10px] flex bg-gray-200 w-10 h-10 items-center justify-center  mr-2 border-2 p-[1px] border-gray-200 rounded-sm'>XL</span>
        </div>
        <div className='my-2 flex items-center py-1 mt-4'>
            <button className='w-1/2 bg-black inline-block text-white text-[18px] items-center py-1'>Apply</button>
            <span className='border-2 border-gray-200 bg-gray-200 p-[8px] rounded-sm mx-2'><FaRegHeart /></span>
        </div>
    </div>
    </div>
  )
}

export default ItemDesc
