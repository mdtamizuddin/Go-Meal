import React from 'react'
import Sidebar from '../Components/Sidebar'
import Topbar from '../Components/Topbar'
import Image from 'next/image'
import RowOrder from '../Components/RowOrder'

const page = () => {
    return (
        <section className="w-full flex justify-between ">
            <div className="container-1">
                <Sidebar />
            </div>
            <div className="container-2 px-5 h-screen overflow-y-auto">
                <Topbar headLine={"Order History"} />
                <div className="flex w-full p-5">
                    <div className="w-[100%]  overflow-y-auto pr-2 p-5">
                        <div className="flex justify-between">
                            <div className='w-[300px] h-[40px] relative'>
                                <Image src={'/Images/magnifier.png'} height={20} width={20}
                                    className='absolute top-2 bottom-0 left-2'
                                    alt='This is Image' />
                                <input className='w-full h-full  pl-8 pr-3 rounded-lg focus:outline-none text-[#A098AE]' type="text" name="" id="" placeholder='Search' />
                            </div>
                            <button className="flex items-center">
                                <div className="text-zinc-800 text-lg font-normal ">Recently</div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ml-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                        </div>

                        {/* Table  */}
                        <div className="overflow-x-auto mt-10 h-[70vh] overflow-y-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <th>Menu</th>
                                        <th>Date</th>
                                        <th>Address</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <RowOrder />
                                    <RowOrder />
                                    <RowOrder />
                                    <RowOrder />
                                    <RowOrder />
                                    <RowOrder />
                                    <RowOrder />
                                    <RowOrder />
                                    <RowOrder />

                                </tbody>
                                {/* foot */}
                            </table>
                        </div>
                        <div className="flex justify-between p-5">
                            <div>
                                <span className="text-zinc-400 text-sm font-normal ">Showing </span><span className="text-zinc-800 text-sm font-normal ">1-5</span><span className="text-zinc-800 text-sm font-normal "> </span><span className="text-zinc-400 text-sm font-normal ">from</span><span className="text-zinc-800 text-sm font-normal "> 100 </span><span className="text-zinc-400 text-sm font-normal ">data</span>
                            </div>
                            <div className="join">
                                <button className="join-item btn" >«</button>
                                <button className="join-item btn">1</button>
                                <button className="join-item btn">2</button>
                                <button className="join-item btn btn-disabled">...</button>
                                <button className="join-item btn">99</button>
                                <button className="join-item btn">100</button>
                                <button className="join-item btn">»</button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


        </section>
    )
}

export default page