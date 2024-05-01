import React from 'react'
import Image from 'next/image'
import { CATEGORIES_DETAILS } from '@/utils/constants'
const GridImg = () => {
  return (
    <div className="grid grid-rows-6 grid-cols-2 md:h-[800px]  w-full md:gap-14 gap-5">
      {
            CATEGORIES_DETAILS.map((category) => {
            return <div key={category.id} className={`
            ${category.id === 1 ? 'col-start-1 row-start-1 row-end-5' : ''}
            ${category.id === 2 ? 'col-start-1 row-start-5 row-end-7' : ''}
            ${category.id === 3 ? 'col-start-2 row-start-1 row-end-4': ''}
            ${category.id === 4 ? 'row-start-4 row-end-7 col-start-2':''}`}>
            <div className="relative flex h-full w-full items-end justify-end">
            <Image  width={1000} height={1000} alt="category-image" src={category.bgimage} className="w-full h-full " />
            <div className=" flex flex-col absolute justify-center items-center mb-[10%] mr-[8%] sm:text-lg text-sm font-semibold text-white">
              <p className="">{category.offer}</p>
              <h3 className="sm:text-3xl font-bold">{category.category}</h3>
              <p className="sm:text-3xl ">{category.text}</p>
              <button className="bg-black text-xs md:w-[150px] w-[80px] md:h-[40px] h-[30px]">{category.buttonText}</button>
            </div>
            </div>
          </div>
        })
      } 
    </div>
 
  )
}

export default GridImg
