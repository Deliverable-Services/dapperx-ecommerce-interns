import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <div className='flex flex-row w-12/12 gap-16 items-center justify-between mr-14 ml-14 bg-[#EDEEF1]'>
      <div className=' flex flex-row gap-8 items-center justify-center font-semibold'>
        <div className='bg-black flex text-white rounded-full w-[40px] h-[40px] items-center justify-center text-xl '>
        <Link href={'/'}><CiSearch className='size-6'/></Link>
        </div>
        <Link href={'/'}>HOME</Link>
        <Link href={'/collections'}>COLLECTIONS</Link>
        <Link href={'/deals'}>DEALS</Link>
      </div>

      <div className='my-4'>
        <Image
        className='flex rounded-xl'
        src='/masculine.png'
        width={150}
        height={30}
        alt='logo'
        />
      </div>

      <div className='flex flex-row gap-8 items-center justify-center font-semibold '>
        <Link href={'/blogs'} >BLOGS</Link>
        <Link href={'/liked-products'} className='bg-black flex text-white rounded-full w-[40px] h-[40px] items-center justify-center text-xl '><CiHeart /></Link>
        <Link href={'/cart'} className='bg-black flex text-white rounded-full w-[40px] h-[40px] items-center justify-center text-xl '><IoBagHandle /></Link>
        <Link href={'/profile'} className='bg-black flex text-white rounded-full w-[40px] h-[40px] items-center justify-center text-xl '><CgProfile /></Link>

      </div>
    </div>
  )
}

export default Navbar
