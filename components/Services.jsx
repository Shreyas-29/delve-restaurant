import React from 'react'
import { MdOutlineTimer } from 'react-icons/md'
import { BiFoodMenu } from 'react-icons/bi'
import { IoIosWallet } from 'react-icons/io'
import { BsArrowRightShort } from 'react-icons/bs'

const Services = () => {
    return (
        <div className='container mx-auto lg:px-20 px-4 my-8 pb-12'>
            <div className='w-full p-2 flex flex-col items-center justify-center mb-12' data-aos="zoom-in-up">
                <h2 className='text-3xl font-semibold text-neutral-900 mb-4'>How to Order?</h2>
                <p className='text-neutral-700 font-medium text-center'>
                    Get your favorite food in just 25 minutes.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center mx-auto py-4 px-4 lg:px-40 gap-8 lg:gap-20'>
                <div className='flex flex-col items-center justify-center bg-orange-100 rounded-md shadow-xl hover:shadow-md hover:shadow-orange-300/40 shadow-orange-300/40 p-4'>
                    <span className='bg-amber-500 shadow-md shadow-amber-500 p-2 rounded-full'>
                        <BiFoodMenu className='w-8 h-8 text-white' />
                    </span>
                    <div className='flex px-3 flex-col items-center justify-center'>
                        <h4 className='text-base lg:text-xl text-neutral-900 font-medium mb-2 mt-5'>
                            Choose Menu
                        </h4>
                        <p className='mb-2 text-neutral-700'>Choose your favorite food.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center bg-orange-100 rounded-md shadow-xl hover:shadow-md hover:shadow-orange-300/40 shadow-orange-300/40 p-4'>
                    <span className='bg-green-500 shadow-md shadow-green-500 p-2 rounded-full'>
                        <IoIosWallet className='w-8 h-8 text-white' />
                    </span>
                    <div className='flex px-3 flex-col items-center justify-center'>
                        <h4 className='text-base lg:text-xl text-neutral-900 font-medium mb-1 mt-5'>
                            Checkout Order
                        </h4>
                        <p className='mb-2 text-neutral-700'>Checkout payment.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center bg-orange-100 rounded-md shadow-xl hover:shadow-md hover:shadow-orange-300/40 shadow-orange-300/40 p-4'>
                    <span className='bg-red-500 shadow-md shadow-red-500 p-2 rounded-full'>
                        <MdOutlineTimer className='w-8 h-8 text-white' />
                    </span>
                    <div className='flex px-3 flex-col items-center justify-center'>
                        <h4 className='text-base lg:text-xl text-neutral-900 font-medium mb-1 mt-5'>
                            Wait for Delivery
                        </h4>
                        <p className='mb-2 text-neutral-700'>Delivered in 25 min.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
