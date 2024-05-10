import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
const Accordion = ({title, children}) => {

    const[isOpen,setIsOpen]=useState(true);

    const handleClick = () =>{
        setIsOpen(!isOpen)
    }

  return (
    <div className='border-b-2 border-gray-400 pb-4'>
        <div className='flex justify-between items-center mt-4'>
            <span className='font-semibold text-[17px]' >{title}</span>
            <IoIosArrowDown onClick={handleClick} className={isOpen ? 'transform rotate-180 transition duration-200 ease-in-out' : 'transition duration-200 ease-in-out'}/>
        </div>
        {/* {isOpen && children} */}
        {isOpen && (
        <div className={isOpen ? 'transition duration-1000 ease-in-out h-auto' : 'h-0 overflow-hidden'}>
          {children}
        </div>
      )}
    </div>
  )
}

export default Accordion
