import React from 'react'

import Image from 'next/image'
const Topbar = ({ headLine }) => {
  return (
    <div className='topbar flex items-center justify-between px-2'>
      <h2 className='text-3xl font-bold'>{headLine}</h2>
      <div className='w-[300px] h-[40px] relative'>
        <Image src={'/Images/magnifier.png'} height={20} width={20}
          className='absolute top-2 bottom-0'
          alt='This is Image'/>
        <input className='w-full h-full bg-slate-100 pl-6 pr-3 rounded-lg focus:outline-none text-[#A098AE]' type="text" name="" id="" placeholder='What do you want eat today..' />
      </div>
      <div className="flex justify-between px-3 mt-5 items-center">
        <div className="flex items-center ">
          <button >
            <Image src={'/Images/Order-Discussion.png'} width={40} height={40} alt='This is Image'/>
          </button>
          <button className="mx-2">
            <Image src={'/Images/icon/notification.png'} width={40} height={40} alt='This is Image'/>
          </button><button>
            <Image src={'/Images/icon/Setting.png'} width={40} height={40} alt='This is Image'/>
          </button>
        </div>
        <Image width={40} height={40} className="rounded" src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg" alt="Default avatar"></Image>
      </div>
    </div>
  )
}

export default Topbar