import React, { createContext, useEffect, useState } from 'react'
import { CiSearch,CiHeart } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import { Menu } from 'lucide-react'
import { CgProfile } from "react-icons/cg";
import Styles from './Navbar.module.css';
import Sidebar from '../Sidebar/Sidebar';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../Logo';


// import { Dancing_Script } from "next/font/google";
// const dancingScript = Dancing_Script({
//   weight: "700",
//   subsets: ["latin"],
//   variable: "--font-dancing-script",
// });


const Navbar = () => {

  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
  const [isSidebarVisible, setIssidebarVisible] = useState(false);


  const handleSearch = () => {   
    setIsSearchbarOpen(!isSearchbarOpen)
  }

  const handleSidebarVisibility = () => {
    setIssidebarVisible(!isSidebarVisible)
  }


return (      
<div className=' w-screen'>
    <div className='flex flex-row items-center justify-between  md:mx-14 mx-7 pt-3'>
      <div className='flex flex-row  gap-8 items-center justify-center font-bold'>
        
        {!isSearchbarOpen ? 
        <div className='bg-black flex text-white rounded-full md:size-12 size-8 items-center justify-center text-xl '>
          <div onClick={handleSearch}>
              <CiSearch className='md:size-6 size-4' />
          </div>
        </div>
          :
          <div className=''> 
              <input type='text' placeholder='Type keywords to search products' name='search' id='search'   className=' w-[320px] h-[40px] border-2 fixed top-20  px-6'/>
          </div>
          }    
       
        <div className='hidden lg:flex gap-8'>
        <Link href={'/'}>HOME</Link>
        <Link href={'/collections'}>COLLECTIONS</Link>
        <Link href={'/deals'}>DEALS</Link>
        </div>
      </div>
      <div>
         <Logo/>
      </div>

      <div className='flex flex-row gap-8 items-center justify-center font-semibold '>
        <Link href={'/blogs'} className='lg:flex hidden'>BLOGS</Link>
        <Link href={'/liked-products'} className='bg-black hidden lg:flex  text-white rounded-full size-12 items-center justify-center text-xl '><CiHeart /></Link>

        <div className='relative hidden lg:flex h-[50px] w-[100px] items-center justify-center'>
          <Image width={100} height={100} alt='cart' src={'/cart-wrapper.svg'}/>
          <p className='absolute right-14 text-sm font-bold'>Cart</p>
          <Link href={'/cart'} className='bg-black flex text-white absolute rounded-full w-[35px] mr-2 h-[35px] items-center left-[58px] justify-center text-xl '>
                <IoBagHandle className='h-[42%]'/>
          </Link>
        </div>

        <Link href={'/profile'} className='bg-black hidden lg:flex text-white rounded-full size-12 items-center justify-center text-xl '><CgProfile /></Link>

        <Menu className='md:size-12 size-8 cursor-pointer lg:hidden' onClick={handleSidebarVisibility}/>
        
        <Sidebar isSidebarVisible= {isSidebarVisible} handleSidebarVisibility= {handleSidebarVisibility}/> 
      </div>
    </div>
</div>
  )
}

export default Navbar
