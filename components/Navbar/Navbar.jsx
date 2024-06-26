'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Menu,
  Search,
  Heart,
  CircleUserRound,
  BaggageClaim,
  X,
  LogOut,
} from 'lucide-react';

import Sidebar from '../Sidebar/Sidebar';
import SessionContext from '../Context';
import Logo from '../Logo';

import { supabase } from '@/utils/client';
import SignOutButtonContainer from '../SignOutButtonContainer';

const Navbar = () => {
  const searchInputRef = useRef(null);
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
  const [isSidebarVisible, setIssidebarVisible] = useState(false);
  const [sessionDetails, setSessionDetails] = useState(null);

  const [isProfileOpen, setProfileOpen] = useState(false);

  /**
   * Autofocus the search input
   * when it is toggled open
   */

  useEffect(() => {
    if (!isSearchbarOpen) return;

    if (searchInputRef && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchbarOpen]);

  const handleToggleSearchVisibility = () => {
    if (isSearchbarOpen) {
      if (searchInputRef.current) {
        searchInputRef.current.value = '';
      }
    }

    setIsSearchbarOpen(!isSearchbarOpen);
  };

  const handleSidebarVisibility = () => {
    setIssidebarVisible(!isSidebarVisible);
  };

  const handleSearchBlur = () => {
    if (searchInputRef?.current && searchInputRef.current.value) {
      return;
    }

    setIsSearchbarOpen(false);
  };

  const handleSearchFocus = () => {
    setIsSearchbarOpen(true);
  };

  async function handleAuth() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return error.message;
    }

    setSessionDetails(null);
  }

  useEffect(() => {
    const fetchUserDetails = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        return error.message;
      }

      setSessionDetails(data.session);
      setProfileOpen(false);
    };

    const { data } = supabase.auth.onAuthStateChange(() => {
      fetchUserDetails();
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  const handleProfileState = () => {
    setProfileOpen(!isProfileOpen);
  };
  /**
   * We don't want vertical scroll
   * when the sidebar is open on screen widths small than lg
   */

  useEffect(() => {
    document.body.style = isSidebarVisible ? 'overflow-y:hidden' : '';
  }, [isSidebarVisible]);

  return (
    <SessionContext.Provider value={sessionDetails}>
      <div className='w-screen'>
        <div className='flex flex-row items-center justify-between px-3 mx-14 pt-8 tracking-widest'>
          <div className='flex flex-row  gap-10 items-center justify-center font-bold'>
            <button
              className='bg-black flex text-white rounded-full md:size-12 size-8 items-center justify-center text-xl '
              onClick={handleToggleSearchVisibility}
            >
              <>
                <Search className='size-4' />
              </>
            </button>

            <div
              className={`${
                isSearchbarOpen
                  ? 'absolute  z-10 md:w-[600px] w-full left-1 p-14 '
                  : 'hidden'
              }`}
            >
              <div className='flex flex-row-reverse w-full items-center relative gap-2'>
                <input
                  ref={searchInputRef}
                  type='text'
                  placeholder='Type keywords to search products'
                  name='search'
                  id='search'
                  className='search w-full md:h-12 h-8 border-2 px-6 rounded-md'
                  onBlur={handleSearchBlur}
                  onFocus={handleSearchFocus}
                />
                <button
                  onClick={handleToggleSearchVisibility}
                  className='absolute right-3'
                >
                  <X size={20} />
                </button>
              </div>
            </div>

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
              <Heart className='size-5' />
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
            <div>
              {sessionDetails == null ? (
                <div className='hidden lg:flex justify-around w-36  font-bold bg-black text-white md:h-12 h-8 rounded-l-full rounded-r-full items-center'>
                  <Link href={'/auth/login'}>Get Started</Link>
                </div>
              ) : (
                <div>
                  <div
                    className='bg-black hidden lg:flex text-white rounded-full size-12 items-center justify-center text-xl cursor-pointer'
                    onClick={handleProfileState}
                  >
                    <CircleUserRound className='size-5' />
                  </div>
                  {isProfileOpen && (
                    <SignOutButtonContainer
                      handleAuth={handleAuth}
                      setProfileOpen={setProfileOpen}
                    />
                  )}
                </div>
              )}
            </div>
            <Menu
              className='md:size-12 size-8 cursor-pointer lg:hidden'
              onClick={handleSidebarVisibility}
            />

            <Sidebar
              isSidebarVisible={isSidebarVisible}
              setIssidebarVisible={setIssidebarVisible}
              handleSidebarVisibility={handleSidebarVisibility}
              handleAuth={handleAuth}
            />
          </div>
        </div>
      </div>
    </SessionContext.Provider>
  );
};

export default Navbar;
