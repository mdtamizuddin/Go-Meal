'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Logo from './Logo'

const Sidebar = () => {
    const manus = [
        {
            name: "Dashboard",
            route: "/",
            icon: "/Images/icon-1.png"
        },
        {
            name: "Food Order",
            route: "/order-food",
            icon: "/Images/icon-7.png"

        },
        {
            name: "Favorite",
            route: "/favorite",
            icon: "/Images/icon-2.png"

        },
        {
            name: "Message",
            route: "/message",
            icon: "/Images/icon-3.png"

        },
        {
            name: "Order History",
            route: "/order-history",
            icon: "/Images/icon-4.png"

        },
        {
            name: "Bills",
            route: "/bills",
            icon: "/Images/icon-5.png"

        },
        {
            name: "Setting",
            route: "/setting",
            icon: "/Images/icon-6.png"

        }

    ]
    const pathName = usePathname()

    return (
        <div className='sidebar '>
            <Logo />

            <ul className='mt-10 px-4'>
                {
                    manus.map((manu, index) => <div key={index}>
                        {
                            pathName === manu.route ?
                                <li key={index + Math.random()} className='w-full bg-color-1 rounded-lg py-2 mt-5 text-center'>
                                    <Link href={manu.route} className='text-[18px] flex items-center justify-start pl-3 text-white '>
                                        <Image src={manu.icon} width={30} height={30} alt='This is Image' />
                                        <span className='ml-2'>
                                            {manu.name}
                                        </span>
                                    </Link>
                                </li>
                                :
                                <li key={index + Math.random()} className='w-full rounded-lg py-2 mt-5 text-center'>
                                    <Link href={manu.route} className='text-[18px] text-color-2 flex justify-start pl-3 items-center'>
                                        <Image src={manu.icon} width={30} height={30} alt='This is Image' />
                                        <span className='ml-2'>
                                            {manu.name}
                                        </span>
                                    </Link>
                                </li>
                        }

                    </div>)
                }


            </ul>
        </div>
    )
}

export default Sidebar