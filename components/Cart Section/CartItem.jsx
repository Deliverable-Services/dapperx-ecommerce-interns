import React from 'react'
import CartCard from './CartCard'
const CartItem = () => {
  return (
    <div className='px-4'>
        {/* uppee*/}
      <div>
        <div className='flex justify-between items-center bg-gray-300 px-2 | sm:px-4 sm:py-2'>
            <div className='font-medium text-[18px]'>
                <p>35% off on Selected Styles</p>
                <p>Log in and Use Code DAPPERXUS</p>
            </div>
            <div>
                <input type="radio"/>
            </div>
        </div>
        <div className='flex justify-between items-center bg-gray-300 px-2 | sm:px-4 sm:py-2 my-4'>
            <div className='font-medium text-[18px]'>
                <p>Free Shipping for the Members</p>
                <p>Exclusive offers for the members<span className='hidden sm:inline'>: Enjoy free shipping on every order</span></p>
            </div>
            <div>
                <input type="radio"/>
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
