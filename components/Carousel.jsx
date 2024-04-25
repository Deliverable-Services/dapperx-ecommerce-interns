import React, { useState } from 'react'
import {PRODUCTS_CATEGORIES} from '@/utils/constants.js'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
const Carausel = () => {

  const [currIndex, setCurrIndex] = useState(0);

  const handleLeft = () => {
    setCurrIndex((prev) => 
      prev - 1 < 0 ? PRODUCTS_CATEGORIES.length-1 : prev-1
    );
  };

  const handleRight = () => {
    setCurrIndex((prev) => 
      prev + 1 === PRODUCTS_CATEGORIES.length ? 0 : prev+1
    );
  };

  return (
    <div className='flex relative items-center justify-center'>
    <div className='flex flex-row justify-center items-center gap-10 py-8'>
      {
        PRODUCTS_CATEGORIES.map((item,id)=>{
          return(
            <div  key={id} className={`${currIndex === id || currIndex === id-1 || currIndex === id-2  ? "flex flex-col items-center justify-center gap-5  ": "hidden"}`}>
                <Image src={item.imageUrl} width={200} height={200} alt='crausel' className='w-[300px] h-[300px] mix-blend-multiply'/>
                <h2 className='text-xl font-bold flex items-center justify-center  px-10 py-4'>{item.category}</h2>
            </div>
          )
        })
      }            
    </div>  
    <div className='absolute  opacity-75 gap-[60rem] flex flex-row'>
      <button className='bg-[#EDEEF2] rounded-full flex items-center justify-center size-8 ' onClick={handleLeft}>
        <ChevronLeft className='size-4 text-black'/>
      </button>
      <button className='bg-[#EDEEF2] rounded-full flex items-center justify-center size-8' onClick={handleRight}>
        <ChevronRight className='size-4 text-black'/>  
      </button>
    </div>
  </div>
  )
}

export default Carausel
