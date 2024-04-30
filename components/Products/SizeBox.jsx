import React from 'react'

const SizeBox = ({size}) => {
  return ( 
    <>
      <span className='font-semibold text-[10px] flex bg-white w-6 h-6 items-center justify-center  mr-2 border-2 p-[1px] border-gray-300 rounded-[4px]'>{size}</span>
    </>
    
  )
}

export default SizeBox
