import React from 'react'
import Image from 'next/image'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

const ClothCard = () => {
  return (
    <div className='m-4'>
      <div className='relative'>
      <Image className='w-[300px] h-[340px]px]' src={'/mens-clothes.jpg'} height={300} width={300} alt='cloth'/>
      <button className='bg-white absolute right-5  top-2' ><FaRegHeart /></button>
      <button className='bg-white absolute right-5  bottom-2' ><MdOutlineShoppingBag /></button>
      </div>
      <p className='font-semibold'>Cotton T shirt</p>
      <div className='flex justify-between overflow-hidden'>
        <span className='font-bold'>Full sleeve zipper</span>
        <span className='overflow-hidden pr-4 font-bold'>₹ 1,500</span>
      </div>
    </div>
  )
}

export default ClothCard
