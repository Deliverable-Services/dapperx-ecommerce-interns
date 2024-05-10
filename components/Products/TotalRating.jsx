import React from 'react'
import Rating from '../Rating'
const TotalRating = () => {
  return (
    <div className='flex items-center mt-2'>
        <input type='checkbox' className='mr-2' style={{height:'15px', width:'15px'}}/>
        <span className='fill-yellow-500'>
        <Rating/>
        </span>
        <span className='fill-yellow-500'>
        <Rating/>
        </span>
        <span className='fill-yellow-500'>
        <Rating/>
        </span>
        <span className='fill-yellow-500'>
        <Rating/>
        </span>
        <span className='fill-yellow-500'>
        <Rating/>
        </span>
    </div>
  )
}

export default TotalRating
