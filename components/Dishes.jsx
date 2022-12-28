import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'

const Dishes = ({ dish }) => {

    const { slug, featuredImage, title, info, price, discount } = dish;

    return (
        <div className='container mb-4 lg:px-8 sm:mb-8'>
            <Link href={`/dishes/${slug}`}>
                <div className='flex flex-col items-start justify-center px-6 pb-4 pt-6 rounded-2xl shadow-neutral-500/30 overflow-hidden hover:shadow-lg card relative'>
                    <Image src={featuredImage.url} alt='product' width={1000} height={1000} unoptimized className='rounded-md transition ease-in-out duration-300 cursor-pointer mb-2 object-cover w-full h-52' />
                    <span className='absolute top-[45%] lg:top-[50%] left-6 p-1 rounded-r-sm bg-blue-500 text-white text-sm font-medium'>
                        {discount}% off
                    </span>
                    <span className='flex flex-col items-start justify-between w-full'>
                        <h4 className='text-lg font-medium text-neutral-800 my-2 capitalize'>
                            {title}
                        </h4>
                        <p className='text-neutral-600 font-medium mb-2'>{info.substr(0, 50)}...</p>
                        <p className='text-orange-500 font-semibold'>₹{price}</p>
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default Dishes
