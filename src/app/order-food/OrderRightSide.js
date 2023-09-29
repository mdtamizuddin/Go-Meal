import Image from 'next/image'
import React from 'react'

const OrderRightSide = () => {
    return (
        <div className='px-5 mt-8'>
            <div className="inset-0 w-full h-[380px] mb-4">
                <iframe width="100%" height="100%" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37641.575439222484!2d91.10211729999997!3d22.873330000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754a4f60180b351%3A0xaf35df91820c2a37!2sMaijdee!5e1!3m2!1sen!2sbd!4v1696003211144!5m2!1sen!2sbd" style={{ filter: 'contrast(1.2) opacity(0.8)' }} />

            </div>

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

            <div className='flex justify-between mt-4'>
                <h1 className="text-zinc-800 text-lg font-medium ">Total</h1>
                <div><span className="text-yellow-500 text-2xl font-medium ">$</span><span className="text-zinc-800 text-2xl font-medium ">202.00</span></div>
            </div>


            <div className="w-full mt-8 h-14 p-4 bg-yellow-500 bg-opacity-10 rounded-2xl border border-yellow-500 justify-center items-center gap-2.5 inline-flex">
                <div className="text-yellow-500 text-lg font-medium font-['Poppins']">Delivering to you</div>
            </div>
        </div>
    )
}

export default OrderRightSide

const MenuCard = () => {
    return (
        <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center'>
                <Image src={"/Images/product/fish-burger.jpg"} width={80} height={80} />
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

