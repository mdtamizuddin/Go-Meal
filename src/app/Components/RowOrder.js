import Image from 'next/image'
import React from 'react'

const RowOrder = () => {
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar w-16 h-16">
                        <div className="rounded">
                            <Image height={60} width={60}  src="/Images/product/pizza.jpg" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Fish Burger</div>
                        <div className="text-sm opacity-50">1x</div>
                    </div>
                </div>
            </td>
            <td>
                <p className='opacity-60'>
                    June 1,2020, 10:44 AM
                </p>
            </td>
            {/* Location  */}
            <td>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#F8B602] mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>

                    <h5 className="text-zinc-800 text-lg font-semibold ">Elm Street, 23 Yogyakarta</h5>
                </div>
                <div className="text-zinc-400 text-sm font-normal ml-6">2,97 Km</div>

            </td>
            <td>
                <h3><span className="text-yellow-500 text-lg font-semibold ">$ </span><span className="text-zinc-800 text-lg font-semibold ">5.59</span></h3>
            </td>
            <td>
                <div className="flex">
                    <button className="w-40 h-12 px-6 py-4 bg-lime-400 bg-opacity-20 rounded-2xl border border-lime-400 justify-center items-center gap-2 inline-flex">
                        <div className="text-lime-400 text-sm font-semibold ">Completed</div>
                    </button>
                    <button className="w-40 ml-5 h-12 px-6 py-4 bg-yellow-500 bg-opacity-20 rounded-2xl border border-yellow-500 justify-center items-center gap-2 inline-flex">
                        <div className="text-yellow-500 text-sm font-normal ">Completed</div>
                    </button>
                </div>

            </td>

        </tr>
    )
}

export default RowOrder