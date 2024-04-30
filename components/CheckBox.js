import React, { useState } from 'react'

const CheckBox = ({name}) => {
    
  return (
    <div>
      <input type='checkbox'/> 
      <span className='pl-2'>{name}</span>
    </div>
  )
}

export default CheckBox
