import React from 'react'
import { MdDeliveryDining } from 'react-icons/md'
import { BsArrowRightShort } from 'react-icons/bs'
import { TbTruckDelivery, TbCheck } from 'react-icons/tb'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoStar } from 'react-icons/io5'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='container mx-auto lg:px-20 px-0'>
            <div className='p-4 flex flex-col sm:flex-row items-center justify-center gap-10 '>
                <div className="flex flex-col items-start">
                    <div className="flex items-center justify-center gap-3 shadow-lg shadow-orange-300/40 px-5 py-2 text-orange-500 font-medium bg-orange-100 rounded-full mb-2">
                        <p>Bike Delivery</p>
                        <MdDeliveryDining className='bg-white text-red-500 rounded-full w-6 h-6 shadow-md p-px' />
                    </div>
                    <h1 className='text-4xl lg:text-5xl font-bold text-neutral-900 tracking-wide w-full my-2 flex flex-col gap-2 lg:gap-3'>
                        <span className=''>Your Favourite</span>
                        <span className='mb-4'>
                            <span className='text-orange-600 mb-2'>
                                Food Delivery
                            </span> Partner
                        </span>
                    </h1>
                    <p className='mb-5 text-neutral-500 font-medium text-lg lg:w-[38rem]'>
                        Hey ! Our Delicious food is waiting for you, we are always near to you with fresh food. Our job is to filling your tummy with delicious food with fast and delivery!
                    </p>
                    <button className='flex items-center justify-center gap-2 capitalize mt-4 bg-gradient-to-br text-white px-5 py-3 font-medium shadow-lg from-orange-500 to-amber-500 shadow-orange-500/40 rounded-lg relative transition-all duration-300 hover:scale-110 active:scale-95 ease-in-out'>
                        <Link href={'/menu'}>
                            explore menu
                        </Link>
                        <BsArrowRightShort className='w-7 h-7 text-white' />
                    </button>
                    <div className='flex flex-col lg:flex-row items-start justify-start gap-5 rounded-lg mt-10 w-full' data-aos='fade-right'>

                        <div className='flex lg:hidden items-center'>
                            <h2 className='text-neutral-900 font-medium capitalize'>our happy customers</h2>
                        </div>
                        <ul className='flex'>
                            <li className='customer'>
                                <Image alt='image' src={'/p1.jpeg'} width={100} height={100} className='cursor-pointer shadow-lg shadow-neutral-500/40 w-12 h-12 rounded-full border-2 border-white transition-all duration-300 object-cover' />
                            </li>
                            <li className='customer'>
                                <Image alt='image' src={'/p2.jpg'} width={100} height={100} className='cursor-pointer shadow-lg shadow-neutral-500/40 w-12 h-12 rounded-full border-2 border-white transition-all duration-300 object-cover' />
                            </li>
                            <li className='customer'>
                                <Image alt='image' src={'/p3.jpg'} width={100} height={100} className='cursor-pointer shadow-lg shadow-neutral-500/40 w-12 h-12 rounded-full border-2 border-white transition-all duration-300 object-cover' />
                            </li>
                            <li className='customer'>
                                <Image alt='image' src={'/p4.jpeg'} width={100} height={100} className='cursor-pointer shadow-lg shadow-neutral-500/40 w-12 h-12 rounded-full border-2 border-white transition-all duration-300 object-cover' />
                            </li>
                            <li className='customer'>
                                <Image alt='image' src={'/p5.jpeg'} width={5000} height={5000} className='cursor-pointer shadow-lg shadow-neutral-500/40 w-12 h-12 rounded-full border-2 border-white transition-all duration-300 object-cover' />
                            </li>
                        </ul>
                        <div className='hidden lg:flex flex-col items-start justify-center'>
                            <h4 className='text-neutral-900 text-sm font-medium'>Our happy customers</h4>

                            <p className='hidden lg:flex items-center justify-center font-medium text-neutral-500'>
                                <IoStar className='text-orange-500 w-5 h-5 mr-2' /> 4.9
                                <span className='ml-2 text-slate-600 font-medium'>
                                    ('10.2k Reviews')
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center -ml-4 sm:ml-16 relative'>
                    <div className='flex items-center justify-center p-2 lg:p-12'>
                        <div className='bg-orange-500 rounded-full w-[30rem] h-[30rem] blur-3xl absolute opacity-20 -z-10 right-12'></div>
                        <Image src={'/hero.png'} alt='delivery boy' width={2000} height={2000} className='w-full h-auto object-center' />
                    </div>
                    <div className='absolute bg-[rgba(255,255,255,0.4)] shadow-2xl shadow-neutral-900/40 rounded-2xl flex items-center justify-center w-max backdrop-blur px-4 py-2 top-8 left-8 lg:left-32 lg:top-32'>
                        <span className='bg-green-500 -top-4 -right-3  absolute w-7 h-7 shadow-xl shadow-green-500/40 rounded-full flex items-center justify-center'>
                            <TbCheck className='text-white absolute w-5 h-5' />
                        </span>
                        <p>Confirm Order</p>
                    </div>
                    <div className='absolute bg-[rgba(255,255,255,0.4)] shadow-2xl shadow-neutral-900/40 rounded-2xl lg:flex items-center justify-center w-max backdrop-blur px-4 py-2 hidden lg:right-0 lg:top-64'>
                        <span className='bg-orange-500 -top-4 -right-3 absolute w-9 h-9 shadow-xl shadow-orange-500/40 rounded-full flex items-center justify-center'>
                            <HiOutlineLocationMarker className='text-white absolute w-6 h-6 shadow-orange-500/40' />
                        </span>
                        <p>Convenient Location</p>
                    </div>
                    <div className='absolute bg-[rgba(255,255,255,0.4)] shadow-2xl shadow-neutral-900/40 rounded-2xl flex items-center justify-center w-max backdrop-blur px-4 py-2 bottom-8 right-8 lg:bottom-28 lg:left-1/2'>
                        <span className='bg-red-500 rounded-full -top-4 -right-3 absolute w-9 h-9 flex items-center justify-center shadow-xl shadow-red-500/40'>
                            <TbTruckDelivery className='text-white absolute w-6 h-6' />
                        </span>
                        <p>Fast Delivery</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
