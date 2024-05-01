
import Marquee from 'react-fast-marquee'
import React from 'react'

const MarqueeSlider = ({MARQUEE_DETAILS}) => {
  return (
    <Marquee className='bg-slate flex flex-row w-full my-12 ' >
      {
       MARQUEE_DETAILS.map((item,index) => {
           return <div key={index} className=' flex sm:text-3xl text-xl px-3 py-6 gap-5 font-semibold items-center justify-evenly'>
            <p>{item.title}</p>
            <span>{item.icon}</span>
           </div>
        })
      }
    </Marquee>
  )
}

export default MarqueeSlider
