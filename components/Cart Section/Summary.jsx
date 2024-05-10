import Image from 'next/image'
import React from 'react'

const Summary = () => {
  return (
    <div className='w-full'>
      <p className='w-full flex justify-center font-semibold text-[22px]'>Summary</p>
      <p className='w-full flex justify-between mt-4 font-medium'>
        <span>
            Subtotal
        </span>
        <span>
            ₹2500
        </span>
      </p>
      <p className='w-full flex justify-between py-1 font-medium'>
        <span>
            Estimated shipping
        </span>
        <span>
            ₹50.00
        </span>
      </p>
      <p className='w-full flex justify-between py-1 font-medium'>
        <span>
            Estimated tax
        </span>
        <span>
            -
        </span>
      </p> 
      <p className='border-y-2 border-gray-700 p-2 font-bold my-3'>Totoal</p>
      <div className='mx-12 w-[300px]'>
        <button className='bg-black text-white text-[22px] flex justify-center items-center w-full'>CHECKOUT</button>
        <button className='bg-gray-300 flex justify-center text-[20px] my-2 items-center w-full'><Image src={'/mastercard-svgrepo-com.svg'} height={30} width={300} alt='pic' className='h-6 w-6'/>MASTERCARD</button>
        <button className='bg-gray-300 h-8 flex justify-center text-[20px] my-2 items-center w-full'><Image src={'/visa-svgrepo-com.svg'} height={30} width={300} alt='pic' className='h-8 w-8'/></button>
        <Image className='w-[300px] h-[360px] pt-6' src={'/watch.jpg'} alt='pic' height={30} width={30 }/>
      </div>
    </div>
  )
}

export default Summary
