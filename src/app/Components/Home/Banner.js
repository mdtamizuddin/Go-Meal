import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div className='w-full banner relative'>
            <Image width={250} height={250}
                className='absolute right-72'
                src={'/Images/ellipse.png'} />
            <Image width={200} height={200}
                className='absolute right-0 bottom-0'
                src={'/Images/bg/ellipse-2.png'} />
            <Image width={200} height={200}
                className='absolute left-0 bottom-0'
                src={'/Images/bg/ellipse-3.png'} />
            <h1 className='text-4xl pt-10 ml-10 font-bold text-white z-20'>
                Get Discount Boucher <br /> Up to 20%
            </h1>
            <p className='text-white ml-10 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Cum facere atque inventore libero .</p>
        </div>
    )
}

export default Banner