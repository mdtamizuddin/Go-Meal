import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
const Topbar = () => {
  return (
    <div className='topbar flex items-center justify-between px-2'>
      <h2 className='text-3xl font-bold'>Hello Samantha</h2>
      <div className='w-[300px] h-[40px] relative'>
        <Image src={'/Images/magnifier.png'} height={20} width={20}
          className='absolute top-2 bottom-0'
        />
        <input className='w-full h-full bg-slate-100 pl-6 pr-3 rounded-lg focus:outline-none text-[#A098AE]' type="text" name="" id="" placeholder='What do you want eat today..' />
      </div>
    </div>
  )
}

export default Topbar