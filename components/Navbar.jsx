import React, { useState } from 'react'
import { CiSearch,CiHeart } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import { Menu } from 'lucide-react'
import { CgProfile } from "react-icons/cg";
import { Dancing_Script } from "next/font/google";
import Sidemenu from './Sidemenu';
import Link from 'next/link';
import Image from 'next/image';
const dancingScript = Dancing_Script({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-dancing-script",
});
const Navbar = () => {

  const [searchbar, setSearchbar] = useState(false);

  const handleSearch = () => {
    if(!searchbar.empty) { 
      setSearchbar(!searchbar)
    }
  }

  const [sidemenu, setSidemenu] = useState(false);

  const handleSidemenu = () => {
    setSidemenu(!sidemenu)
  }

  return (

    
<div>
    <div className='flex flex-row  items-center max-md:max-lg:gap-3 justify-between mx-14 max-md:mx-4  bg-[#EDEEF1]'>
      <div className='flex flex-row max-md:hidden lg:gap-12 gap-3 items-center justify-center font-bold'>
        
        {!searchbar ? 
        <div className='bg-black flex text-white rounded-full w-[50px] h-[50px] items-center justify-center text-xl '>
          <Link href={'/'} onClick={handleSearch}>
              <CiSearch className='size-6' />
          </Link>
        </div>
          :
          <div className=''> 
              <input type='text' placeholder='Type keywords to search products' name='search' id='search'   className='w-[20%] h-[20px] border-2'/>
          </div>
          }   
       
        <Link href={'/'}>HOME</Link>
        <Link href={'/collections'}>COLLECTIONS</Link>
        <Link href={'/deals'}>DEALS</Link>
      </div>

      <div className='my-4 '>
        <h1 className='text-4xl font-bold flex flex-row gap-2'>Dapper <span className={dancingScript.className}>X</span></h1>
      </div>

      <div className='flex flex-row max-md:sm:gap-2 gap-8 items-center  justify-center font-semibold '>
        <Link href={'/blogs'} className='max-lg:hidden flex'>BLOGS</Link>
        <Link href={'/liked-products'} className='bg-black flex max-lg:hidden text-white rounded-full w-[50px] h-[50px] items-center justify-center text-xl '><CiHeart /></Link>

        <div className='relative flex h-[50px] w-[100px] items-center justify-center'>
          <Image width={100} height={100} alt='cart' src={'/CART.svg'}/>
          <p className='absolute right-14 text-sm font-bold'>Cart</p>
          <Link href={'/cart'} className='bg-black flex text-white absolute rounded-full w-[35px] mr-2 h-[35px] items-center left-[58px] justify-center text-xl '>
                <IoBagHandle className='h-[42%]'/>
          </Link>
        </div>

        <Link href={'/profile'} className='bg-black flex text-white rounded-full w-[50px] h-[50px] items-center justify-center text-xl '><CgProfile /></Link>
      </div>
    </div>

    
    <div className='flex flex-row  items-center max-md:max-lg:gap-3 justify-between mx-14 max-md:mx-4  bg-[#EDEEF1]'>
    
      <div onClick={handleSidemenu} className='cursor-pointer'>
        {
          !sidemenu ? <Menu/> : <Sidemenu />
        } 
      </div>

    </div>
</div>
  )
}

export default Navbar
