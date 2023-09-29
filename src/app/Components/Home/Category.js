import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CategoryCard from './CategoryCard'

const Category = () => {
    return (
        <div className='mt-8'>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold'>Category</h2>
                <Link href={'/'}
                    className='t-c-3 font-bold flex items-center'
                >
                    View All
                    <Image src={'/Images/arrow-right.png'} width={25} height={25}
                        className='mb-1 ml-2'
                    />
                </Link>
            </div>

            <div className='grid grid-cols-6 justify-items-center mt-10 gap-5'>
                <CategoryCard image={'/Images/category/cg-1.png'}
                    name={"Bakery"}
                />
                <CategoryCard image={'/Images/icon/Burger.png'}
                    name={"Burger"}
                />
                <CategoryCard image={'/Images/icon/Coffee.png'}
                    name={"Coffee"}
                />
                <CategoryCard image={'/Images/icon/Chicken.png'}
                    name={"Chicken"}
                />
                <CategoryCard image={'/Images/icon/Fast.png'}
                    name={"Fast"}
                />
                <CategoryCard image={'/Images/icon/Fish.png'}
                    name={"Seafood"}
                />
            </div>
        </div>
    )
}

export default Category