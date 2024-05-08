import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Menu,
  Search,
  Heart,
  CircleUserRound,
  BaggageClaim,
} from 'lucide-react';

import Sidebar from '../Sidebar/Sidebar';
import Logo from '../Logo';

const Navbar = () => {
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
  const [isSidebarVisible, setIssidebarVisible] = useState(false);

  const handleSearch = () => {
    setIsSearchbarOpen(!isSearchbarOpen);
  };

  const handleSidebarVisibility = () => {
    setIssidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    document.body.style = isSidebarVisible ? 'overflow-y:hidden' : '';
  }, [isSidebarVisible]);

  return (
    <div className='w-screen'>
      <div className='flex flex-row items-center justify-between px-3 mx-14 pt-8 tracking-widest'>
        <div className='flex flex-row  gap-10 items-center justify-center font-bold'>
          {!isSearchbarOpen ? (
            <div className='bg-black flex text-white rounded-full md:size-12 size-8 items-center justify-center text-xl '>
              <div onClick={handleSearch}>
                <Search className='size-4' />
              </div>
            </div>
          ) : (
            <div className=''>
              <input
                type='text'
                placeholder='Type keywords to search products'
                name='search'
                id='search'
                className=' w-[320px] h-[40px] border-2 fixed top-20  px-6'
              />
            </div>
          )}

          <div className='hidden lg:flex gap-10'>
            <Link href={'/'}>HOME</Link>
            <Link href={'/collections'}>COLLECTIONS</Link>
            <Link href={'/deals'}>DEALS</Link>
          </div>
        </div>
        <div>
          <Logo />
        </div>

        <div className='flex flex-row gap-12 items-center justify-center font-semibold '>
          <Link href={'/blogs'} className='lg:flex hidden font-bold'>
            BLOGS
          </Link>
          <Link
            href={'/liked-products'}
            className='bg-black hidden lg:flex  text-white rounded-full size-12 items-center justify-center text-xl '
          >
            <Heart className='size-5'/>
          </Link>

          <div className='relative hidden lg:flex h-[50px] w-[100px] items-center justify-center'>
            <Image
              width={100}
              height={100}
              alt='cart'
              src={'/cart-wrapper.svg'}
            />
            <p className='absolute right-14 text-sm font-bold'>Cart</p>
            <Link
              href={'/cart'}
              className='bg-black flex text-white absolute rounded-full w-[35px] mr-2 h-[35px] items-center left-[58px] justify-center text-xl '
            >
              <BaggageClaim className='h-[42%]' />
            </Link>
          </div>

          <Link
            href={'/profile'}
            className='bg-black hidden lg:flex text-white rounded-full size-12 items-center justify-center text-xl '
          >
            <CircleUserRound  className='size-5'/>
          </Link>

          <Menu
            className='md:size-12 size-8 cursor-pointer lg:hidden'
            onClick={handleSidebarVisibility}
          />

          <Sidebar
            isSidebarVisible={isSidebarVisible}
            handleSidebarVisibility={handleSidebarVisibility}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;











