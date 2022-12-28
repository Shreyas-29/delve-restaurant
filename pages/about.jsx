import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { MdOutlineCleanHands } from 'react-icons/md'
import { IoFastFood } from 'react-icons/io5'
import { TbTruckDelivery } from 'react-icons/tb'
import { HiCheckBadge } from 'react-icons/hi2'

const about = () => {

    return (
        <div>
            <Head>
                <title>Delve | About </title>
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <section className='lg:px-32 py-6 px-4'>

                <div className='flex flex-col items-start justify-start my-6'>
                    <h2 className='text-3xl font-semibold text-neutral-900 capitalize'>
                        Extraordinary taste and experience
                    </h2>
                    <p className='text-neutral-700 font-medium'>
                        Experience the best food and fast delivery service
                    </p>
                </div>

                <div className="text-gray-600 body-font">
                    <div className="container mx-auto lg:-mt-28 flex px-2 py-6 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start justify-center md:text-left items-start text-start" data-aos='fade-left'>
                            <h1 className="sm:text-3xl text-2xl mb-4 font-medium text-gray-900">Before they sold out
                            </h1>
                            <p className="mb-8 leading-relaxed font-medium">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>

                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:p-8" data-aos='fade-right'>
                            <Image className="object-cover object-center rounded w-full h-auto" alt="hero" src="/Free shipping-pana.png" width={800} height={600} />
                        </div>
                    </div>
                </div>

                <div className="text-gray-600 body-font">
                    <div className="container mx-auto lg:-mt-28 flex px-2 py-6 md:flex-row-reverse flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start text-start" data-aos='fade-left'>
                            <h1 className="sm:text-3xl text-2xl mb-4 font-medium text-gray-900">Cooked by the
                                Best Chefs in the
                                World
                            </h1>
                            <p className="mb-8 leading-relaxed font-medium">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>

                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:p-12" data-aos='fade-right'>
                            <Image alt='chef' src={'/chef.png'} width={1500} height={1500} className='object-cover' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center container mt-8 mb-12'>
                    <div className='flex items-start w-full px-2 justify-start flex-col' data-aos='fade-right'>
                        <h1 className="sm:text-3xl text-2xl mb-4 font-semibold text-gray-900 capitalize">Why  choose us
                        </h1>
                        <p className="mb-8 leading-relaxed font-medium">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant.</p>
                    </div>

                    <div className='grid sm:grid-cols-2 gap-8 p-4'>

                        <div className='flex items-start bg-red-100 p-4 justify-center gap-4 rounded-lg shadow-lg' data-aos='zoom-in'>
                            <div className='bg-red-500 rounded-full'>
                                <span className='flex items-center justify-center p-2'>
                                    <MdOutlineCleanHands className='w-7 h-7 text-white' />
                                </span>
                            </div>
                            <div className='flex flex-col'>
                                <h4 className='text-neutral-800 font-medium text-lg capitalize'>Fastest delivery</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, maiores!</p>
                            </div>
                        </div>

                        <div className='flex items-start bg-yellow-100 p-4 justify-center gap-4 rounded-lg shadow-lg' data-aos='zoom-in'>
                            <div className='bg-yellow-500 rounded-full'>
                                <span className='flex items-center justify-center p-2'>
                                    <IoFastFood className='w-7 h-7 text-white' />
                                </span>
                            </div>
                            <div className='flex flex-col'>
                                <h4 className='text-neutral-800 font-medium text-lg capitalize'>fresh food</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, maiores!</p>
                            </div>
                        </div>

                        <div className='flex items-start bg-blue-100 p-4 justify-center gap-4 rounded-lg shadow-lg' data-aos='zoom-in'>
                            <div className='bg-blue-500 rounded-full'>
                                <span className='flex items-center justify-center p-2'>
                                    <TbTruckDelivery className='w-7 h-7 text-white' />
                                </span>
                            </div>
                            <div className='flex flex-col'>
                                <h4 className='text-neutral-800 font-medium text-lg capitalize'>free shipping</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, maiores!</p>
                            </div>
                        </div>

                        <div className='flex items-start bg-green-100 p-4 justify-center gap-4 rounded-lg shadow-lg' data-aos='zoom-in'>
                            <div className='bg-green-500 rounded-full'>
                                <span className='flex items-center justify-center p-2'>
                                    <HiCheckBadge className='w-7 h-7 text-white' />
                                </span>
                            </div>
                            <div className='flex flex-col'>
                                <h4 className='text-neutral-800 font-medium text-lg capitalize'>best quality</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, maiores!</p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
}


export default about
