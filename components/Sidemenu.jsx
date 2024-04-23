import React, { useState } from 'react'
import Link from 'next/link'

const Sidemenu = () => {
 
  return (
    

        <div className='flex flex-col gap-2 font-semibold'>
        <Link href={'/'}>HOME</Link>
        <Link href={'/profile'}>My Profile</Link>
        <Link href={'/collections'}>COLLECTIONS</Link>
        <Link href={'/deals'}>DEALS</Link>
        <Link href={'/blogs'} >BLOGS</Link>
        </div> 
  )
}

export default Sidemenu
