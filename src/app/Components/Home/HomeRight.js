import React from 'react'
import RightSide from './RightSide'
import Image from 'next/image'

const HomeRight = () => {
    return (
        <div className="w-full bg-gray-100">
            <div style={{ background: '#F8B602' }} className="rounded-lg w-[90%] mx-auto mt-10 h-44 flex items-center justify-between px-4">
                <div className="Balance " style={{ width: 160, height: 101, padding: 16, background: 'white', borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                    <div className="Balance" style={{ color: '#2E2E2E', fontSize: 14, fontWeight: '400', wordWrap: 'break-word' }}>Balance</div>
                    <div className="12000" style={{ color: '#2E2E2E', fontSize: 32, fontWeight: '700', wordWrap: 'break-word' }}>$12.000</div>
                </div>
                <div>
                    <button className="bg-white p-2 rounded-xl">
                        <Image src={'/Images/icon/Income.png'} width={30} height={30} alt="Income.png" />
                    </button>
                    <p className="text-white mt-2">Top Up</p>
                </div>
                <div>
                    <button className="bg-white p-2 rounded-xl">
                        <Image src={'/Images/icon/Income.png'} width={30} height={30} alt="Income.png" />
                    </button>
                    <p className="text-white mt-2">Top Up</p>
                </div>
            </div>
            <RightSide />
        </div>
    )
}

export default HomeRight