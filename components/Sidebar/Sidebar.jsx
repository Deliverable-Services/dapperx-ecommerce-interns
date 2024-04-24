import React, { useState } from 'react'
import Link from 'next/link'
import { X, Home,CircleUserRound ,Rss, Handshake,BaggageClaim, ArrowUpNarrowWide,Heart } from 'lucide-react';
import Styles from './Sidebar.module.css'
const Sidebar = ({isSidebarVisible,handleSidebarVisibility}) => {
    
  return (

      <div className={` ${!isSidebarVisible ? 'hidden': 'flex flex-col gap-2 bg-[#ffffff] sm:w-[35%] lg:w-[25%] w-[100%] h-screen px-10 py-10 fixed top-0 right-0'}`}>
      <button className='flex justify-end items-end pb-2 border-b-2 border-black '>
      <X className='hover:bg-[#444B59] hover:text-white rounded-lg' onClick={handleSidebarVisibility}/>
      </button>
      <Link href={'/'} className={Styles.sidebar}><Home className='size-4'/> Home</Link>
      <Link href={'/profile'} className={Styles.sidebar}> <CircleUserRound className='size-4'/>My Profile</Link>
      <Link href={'/cart'} className={Styles.sidebar}><BaggageClaim className='size-4'/>Cart</Link>
      <Link href={'/liked-products'} className={Styles.sidebar}><Heart className='size-4'/>My wishlist</Link>
      <Link href={'/collections'} className={Styles.sidebar}> <ArrowUpNarrowWide className='size-4'/>Collection</Link>
      <Link href={'/deals'} className={Styles.sidebar}> <Handshake className='size-4'/>Deals</Link>
      <Link href={'/blogs'} className={Styles.sidebar}  > <Rss className='size-4'/>Blogs</Link>
      </div>  
  )
}
export default Sidebar
