import Image from 'next/image'
import React from 'react'

const ProductCard = ({ type }) => {
  return (
    <>
      {
        type === "popular" ?
          <div className='w-full p-7'>
            <div className='bg-[#EB5757] w-28 flex justify-center items-center rounded-tr-lg rounded-br-lg' >
              <p className='text-white py-1  font-semibold '>15% off</p>
            </div>
            <Image className='block mx-auto' src={'/Images/product/fish-burger.jpg'} width={200} height={200} />
            <div className='flex items-center mt-5'>
              <Image width={24} height={24} className='mr-2' src={'/Images/star.svg'} />
              <Image width={24} height={24} className='mr-2' src={'/Images/star.svg'} />
              <Image width={24} height={24} className='mr-2' src={'/Images/star.svg'} />
              <Image width={24} height={24} className='mr-2' src={'/Images/star.svg'} />
            </div>

            <div className='flex justify-between items-center'>
              <div>
                <h2 className='text-xl mt-3 font-semibold mb-2'>Fish Burger</h2>
                <h1 className='text-4xl font-bold'>
                  <span className='t-c-3 mr-1'>$</span>
                  <span >5.67</span>
                </h1>
              </div>
              <div>
                <button className='bg-color-1 p-3 rounded-lg'>
                  <Image src={'/Images/icon/plus.png'} width={20} height={20} alt='Plus' />
                </button>
              </div>
            </div>
          </div>
          :
          // This is Recent Card
          <div className='w-full p-7'>
            <Image className='block mx-auto rounded-lg' src={'/Images/product/pizza.jpg'} width={200} height={220} />


            <div className='flex justify-center items-center'>
              <div className='flex flex-col items-center'>
                <h2 className='text-xl mt-3 font-semibold mb-2'>Pizza</h2>
                <h1 className='text-4xl font-bold'>
                  <span className='t-c-3 mr-1'>$</span>
                  <span >5.67</span>
                </h1>
                <div className='flex items-center text-[#A098AE] mt-2'>4.97
                  <div className='dot-mini mx-1'></div>
                  21 min
                </div>
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default ProductCard