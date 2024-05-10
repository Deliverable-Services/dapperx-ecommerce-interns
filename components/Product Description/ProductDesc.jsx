import React from 'react'
import ItemDesc from './ItemDesc'
import ClothCard from '../Products/ClothCard'
import DescriptionCard from './DescriptionCard'
import { IoIosArrowForward } from "react-icons/io";

const ProductDesc = () => {
  return (
    <div className='bg-white'>
      <div 
        className='flex justify-center font-semibold p-2 items-center'>
          <span className='pr-2'>Home</span> 
          <IoIosArrowForward />
          <span className='pr-2'>Products</span>  
          <IoIosArrowForward/> 
          <span className='pr-2'>Catergory</span>
      </div>
      <div >
        <h1 className='font-semibold text-[34px] flex justify-center items-center'>Product Description</h1>
      </div>
      <div className='pt-6'>
        <ItemDesc/>
      </div>
      <div className='grid grid-cols-2 sm:grid sm:grid-cols-4 sm:pl-3'>
        <DescriptionCard/>
        <DescriptionCard/>
        <DescriptionCard/>
        <DescriptionCard/>
        <DescriptionCard/>
        <DescriptionCard/>
        <DescriptionCard/>
        <DescriptionCard/>
      </div>
    </div>
  )
}

export default ProductDesc
