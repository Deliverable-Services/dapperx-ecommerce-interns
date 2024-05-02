import Link from 'next/link';
import { X } from 'lucide-react';

import Styles from './Sidebar.module.css';

import { SIDEBAR_LINKS } from '@/utils/constants';

const Sidebar = ({ isSidebarVisible, handleSidebarVisibility }) => (
  <div
    className={` ${!isSidebarVisible ? 'hidden' : 'flex flex-col gap-2 bg-[#ffffff] sm:w-[35%] lg:w-[25%] w-[100%] h-screen px-10 py-10 fixed top-0 right-0'}`}
  >
    <button className='flex justify-end items-end pb-2 border-b-2 border-black '>
      <X
        className='hover:bg-[#444B59] hover:text-white rounded-lg'
        onClick={handleSidebarVisibility}
      />
    </button>
    {SIDEBAR_LINKS.map((link) => (
      <Link href={link.path} className={Styles.sidebar} key={link.id}>
        {link.icon}
        {link.title}
      </Link>
    ))}
  </div>
);

export default Sidebar;






