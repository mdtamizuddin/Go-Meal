import Image from 'next/image'
import React from 'react'

const RightSide = () => {
    return (
        <div className='px-5 mt-8'>
            <h3 className='text-color-2 text-xl font-medium'>Your Address</h3>
            <div className='flex items-center justify-between mt-3'>
                <div className='flex items-center'>
                    <Image src={'/Images/icon/Location.png'} width={24} height={24}
                        alt='Location.png'
                    />
                    <div className="text-zinc-800 text-lg font-bold">Elm Street, 23</div>
                </div>
                <button
                    className='btn-change px-3 py-1'
                >Change</button>
            </div>
            <p className="w-96 text-zinc-400 text-sm font-normal mt-3 leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit, sed do eiusmod tempor incididunt. </p>

            <div className='flex mt-5'>
                <button className='btn-normal px-3 py-1'
                >Add Details</button>
                <button className='btn-normal px-3 py-1 ml-5'
                >Add Note</button>
            </div>
            <div className="text-zinc-800 mt-5 text-2xl font-bold mb-5">Order Menu</div>

            <MenuCard />
            <MenuCard />
            <MenuCard />

            <div className="w-96 mt-8 h-px border border-zinc-300"></div>
            <div className='mt-5 flex justify-between'>
                <h3 className="text-zinc-400  font-medium ">
                    Service
                </h3>
                <h2 className='font-bold'>
                    <span className="text-zinc-800 text-lg font-medium ">+</span><span className="text-yellow-500 text-lg font-medium ">$</span><span className="text-zinc-800 text-lg font-medium">1.00</span>
                </h2>
            </div>
            <div className='flex justify-between mt-4'>
                <h1 className="text-zinc-800 text-lg font-medium ">Total</h1>
                <div><span className="text-yellow-500 text-2xl font-medium ">$</span><span className="text-zinc-800 text-2xl font-medium ">202.00</span></div>
            </div>

            <button className="w-full mt-6 h-16 p-6 bg-neutral-100 rounded-2xl border border-yellow-500 backdrop-blur-lg justify-center items-center gap-6 flex">
                <div className="w-10 h-10 relative">
                    <div className="w-10 h-10 left-0 top-0 flex justify-center items-center bg-yellow-500 rounded-xl " >
                        <Image alt='Vector.png' src={'/Images/icon/Vector.png'}
                            width={30} height={30}
                        />
                    </div>

                </div>
                <div className="text-zinc-800 text-sm font-medium">Have a coupon code?</div>
                <Image src={'/Images/icon/arrow-right.png'} width={30} height={30} alt='This is Image'/>
            </button>
            <div className="w-full mt-8 h-16 p-4 bg-yellow-500 rounded-2xl justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-lg font-medium ">Checkout</div>
            </div>
        </div>
    )
}

export default RightSide

const MenuCard = () => {
    return (
        <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center'>
                <Image src={"/Images/product/fish-burger.jpg"} width={80} height={80} alt='This is Image'/>
                <div className='ml-2'>
                    <h4 className="text-zinc-800 text-lg font-semibold ">Pepperoni Pizza</h4>
                    <p className="text-zinc-400 text-sm font-normal ">x1</p>
                </div>
            </div>
            <h2>
                <span className="text-zinc-800 text-lg font-semibold ">+</span><span className="text-yellow-500 text-lg font-semibold ">$</span><span className="text-zinc-800 text-lg font-semibold ">5.59</span>
            </h2>
        </div>
    )
}