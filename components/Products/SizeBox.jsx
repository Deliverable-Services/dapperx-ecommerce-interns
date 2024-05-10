import React from 'react'

const SizeBox = ({size}) => {
  return ( 
    <>
      <span className='font-semibold text-[10px] text-gray-500 flex bg-white w-6 h-6 items-center justify-center  mr-2 border-[1px] p-[1px] border-gray-400 rounded-[4px]'>{size}</span>
    </>
    
  )
}

export default SizeBox
