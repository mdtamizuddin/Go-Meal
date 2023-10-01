import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductCard from '../ProductCard'

const RecentOrder = () => {
    return (
        <div className='mt-8'>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold'>Recent Order</h2>
                <Link href={'/'}
                    className='t-c-3 font-bold flex items-center'
                >
                    View All
                    <Image src={'/Images/arrow-right.png'} width={25} height={25}
                        className='mb-1 ml-2'
                        alt='This is Image'/>
                </Link>
            </div>

            <div className='grid grid-cols-4 justify-items-center mt-10 gap-20'>
                <ProductCard type={"recent"} />
                <ProductCard type={"recent"} />
                <ProductCard type={"recent"} />
                <ProductCard type={"recent"} />
            </div>
        </div>
    )
}

export default RecentOrder