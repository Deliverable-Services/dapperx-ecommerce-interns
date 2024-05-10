import React from 'react'
import CartItem from './CartItem'
import Summary from './Summary'

const Cart = () => {
  return (
    <div className='flex flex-col sm:flex sm:flex-row bg-white sm:w-full sm:p-6 border-b-2 border-black'>
      <div className='sm:w-3/5 '>
        <CartItem/>
      </div>
      <div className='sm:w-2/5 sm:px-12 px-4'>
        <Summary/>
      </div>
    </div>
  )
}

export default Cart