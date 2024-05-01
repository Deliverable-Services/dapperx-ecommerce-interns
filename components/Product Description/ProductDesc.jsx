import React from 'react'
import ItemDesc from './ItemDesc'
import ClothCard from '../Products/ClothCard'
import DescriptionCard from './DescriptionCard'
const ProductDesc = () => {
  return (
    <div>
      <div 
        className='flex justify-center font-semibold p-2 items-center'>{`Home ${'>'} Products ${'>'} Catergory`}
      </div>
      <div >
        <h1 className='font-semibold text-[28px] flex justify-center items-center'>Product Description</h1>
      </div>
      <div className='pt-6'>
        <ItemDesc/>
      </div>
      <div className='grid grid-cols-2 sm:grid sm:grid-cols-4 sm:pl-[72px]'>
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
