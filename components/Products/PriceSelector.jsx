import React from 'react'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
const PriceSelector = ({min,max,value,onChange}) => {
  return (
    <div>
      <RangeSlider 
        id='range-slider'
        min={min}
        max={max}
        value={value}
        onInput={onChange}
      />
     <div className='flex justify-between mt-2'>
        <div>
          <span className='text-[13px] font-semibold'>Min</span> 
          <p className='w-24 px-2 text-[14px] border-2 mr-4 border-gray-400 rounded-sm'>{value[0]}</p>
        </div>
        <div>
          <span className='text-[13px] font-semibold'>Maximum</span>
          <p className='w-24 px-2 text-[14px] border-2 border-gray-400 rounded-sm'>{value[1]}</p>
        </div>
     </div>
    </div>
  )
}

export default PriceSelector
