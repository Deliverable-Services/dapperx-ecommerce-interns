import React, { useState } from 'react'

const CheckBox = ({name}) => {
    
  return (
    <div className='flex items-center'>
      <input type='checkbox' style={{height:'15px', width:'15px'}}/> 
      <span className='pl-2 font-semibold text-[15px]'>{name}</span>
    </div>
  )
}

export default CheckBox
