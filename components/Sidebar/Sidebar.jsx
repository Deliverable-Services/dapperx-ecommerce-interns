import Link from 'next/link';
import { X } from 'lucide-react';
import { useContext, useEffect, useRef } from 'react';

import SessionContext from '../Context';
import Button from '../Button/Button';

import Styles from './Sidebar.module.css';

import { SIDEBAR_LINKS } from '@/utils/constants';

const Sidebar = ({
  isSidebarVisible,
  handleSidebarVisibility,
  setIssidebarVisible,
  handleAuth,
}) => {
  const sidebarMenu = useRef(null);

  const sessionDetails = useContext(SessionContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!sidebarMenu?.current?.contains(event.target)) {
        setIssidebarVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
  }, [sidebarMenu, setIssidebarVisible]);

  return (
    <div
      className={` ${
        !isSidebarVisible
          ? 'hidden'
          : 'flex flex-col gap-3 bg-[#ffffff] sm:w-[35%] lg:w-[25%] w-[100%] h-screen px-10 py-10 fixed top-0 right-0'
      }`}
      ref={sidebarMenu}
    >
      <button className='flex justify-end items-end pb-2 border-b-2 border-black '>
        <X
          className='hover:bg-[#444B59] hover:text-white rounded-lg'
          onClick={handleSidebarVisibility}
        />
      </button>
      {SIDEBAR_LINKS.map((link) => (
        <Link
          href={link.path}
          className={Styles.sidebar}
          key={link.id}
          onClick={handleSidebarVisibility}
        >
          {link.icon}
          {link.title}
        </Link>
      ))}

      <div>
        {sessionDetails !== null ? (
          <div
            onClick={() => {
              handleAuth(), handleSidebarVisibility();
            }}
          >
            <Button>Sign out</Button>
          </div>
        ) : (
          <Link href={'/auth/login'} onClick={handleSidebarVisibility}>
            <Button>Sign in</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
