import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryCard = ({ image, name }) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Image src={image} width={80} height={80} alt='Category' />
            <Link href={'/'} className='mt-3 hover:underline font-normal'>{name}</Link>
        </div>
    )
}

export default CategoryCard