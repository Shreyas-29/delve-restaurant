import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MenuCard = ({ menu }) => {

    const { title, slug, featuredImage, info, price, discount, category } = menu;

    return (
        <div className='container mb-4 sm:mb-8' key={title}>
            <Link href={`/menu/${slug}`}>
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
                        <span className='w-full flex items-center justify-between'>
                            <p className='text-orange-500 font-semibold pt-1'>₹{price}</p>
                            <p className='text-white font-medium lowercase py-0.5 px-1 bg-orange-500 rounded-md'>{category.title}</p>
                        </span>
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default MenuCard
