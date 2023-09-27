import React from 'react'

const Topbar = () => {
  return (
    <div className='topbar px-5 flex items-center justify-between'>
      <h2 className='text-3xl font-bold'>Hello Samantha</h2>
      <div className='w-[300px] h-[40px]'>
        <input className='w-full h-full bg-slate-100 px-4 rounded-lg focus:outline-none text-[#A098AE]' type="text" name="" id="" placeholder='What do you wanr eat tody..' />
      </div>
    </div>
  )
}

export default Topbar