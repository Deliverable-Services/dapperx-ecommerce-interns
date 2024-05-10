import React from 'react'
import Image from 'next/image'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
const DescriptionCard = () => {
  return (
    <div className='m-4'>
      <div className='relative'>
      <Image className='w-[240px] h-[280px]px]' src={'/cloth.jpg'} height={300} width={300} alt='cloth'/>
      {/* <button className='bg-white absolute right-[6px] sm:right-[80px]  top-2' ><FaRegHeart /></button>
      <button className='bg-white absolute right-[6px] sm:right-[80px]  bottom-2' ><MdOutlineShoppingBag /></button> */}
      <button className='bg-white absolute right-[6px] sm:right-[80px] rounded-[50%] top-2' >
        <FaRegHeart className='m-2 rounded-[50%]'/>
        </button>
      <button className='bg-white absolute right-[6px] sm:right-[80px] bottom-2 font-semibold flex items-center pr-2' style={{borderRadius:"15px 15px 15px 15px"}}><MdOutlineShoppingBag className='m-2'/>ADD</button>
      </div>
      <p className='font-semibold text-[14px] text-gray-500'>Cotton T shirt</p>
      <div className='flex justify-between overflow-hidden sm:mr-8'>
        <span className='font-semibold'>Full sleeve zipper</span>
        <span className='overflow-hidden pr-12 font-semibold'>₹ 1,500</span>
      </div>
    </div>
  )
}

export default DescriptionCard
