import React, { useState } from 'react'
import CartCard from './CartCard'
const CartItem = () => {
  const[isActiveFirst,setIsActiveFirst]=useState(false);
  const[isActiveSecond,setIsActiveSecond]=useState(false);

  return (
    <div className='px-4'>
        {/* uppee*/}
      <div>
        <div className='flex justify-between items-center bg-gray-300 px-2 | sm:px-8 sm:py-4'>
            <div className='font-medium text-[18px]'>
                <p className='font-semibold'>35% off on Selected Styles</p>
                <p className='text-gray-600 font-normal'>Log in and Use Code DAPPERXUS</p>
            </div>
            <div>
                <input type="radio" checked={isActiveFirst} onClick={()=>{setIsActiveFirst(!isActiveFirst)}} style={{height:'20px', width:'20px', accentColor:'black'}}/>
            </div>
        </div>
        <div className='flex justify-between items-center bg-gray-300 px-2 | sm:px-8 sm:py-4 my-4'>
            <div className='font-medium text-[18px]'>
                <p className='font-semibold'>Free Shipping for the Members</p>
                <p className='text-gray-600 font-normal'>Exclusive offers for the members<span className='hidden sm:inline'>: Enjoy free shipping on every order</span></p>
            </div>
            <div>
                <input type="radio" checked={isActiveSecond} onClick={()=>{setIsActiveSecond(!isActiveSecond)}} style={{height:'20px', width:'20px', accentColor:'black'}}/>
            </div>
        </div>
      </div>
      {/* lower */}
      <div>
        <p className='font-bold text-[28px] py-4'>Cart</p>
        <CartCard/>
      </div>
    </div>
  )
}

export default CartItem
