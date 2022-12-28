import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='rounded-2xl lg:px-20 py-6 flex flex-col px-0 sm:px-0 mb-' >
            <div className='px-4 flex flex-col sm:flex-row items-center justify-between'>
                <div className="left mb-6 sm:mb-0">
                    <ul className='flex items-center justify-center gap-4'>
                        <li className='cursor-pointer font-medium text-neutral-900 hover:text-orange-600'>Why us?</li>
                        <li className='cursor-pointer font-medium text-neutral-900 hover:text-orange-600'>Menu</li>
                        <li className='cursor-pointer font-medium text-neutral-900 hover:text-orange-600'>Contact</li>
                    </ul>
                </div>
                <div className="right flex items-center justify-center gap-4">
                    <span className='p-2 rounded-full bg-orange-500 shadow-lg shadow-orange-400/30 cursor-pointer'>
                        <BsFacebook className='w-5 h-5 text-white hover:text- cursor-pointer ' />
                    </span>
                    <span className='p-2 rounded-full bg-orange-500 shadow-lg shadow-orange-400/30 cursor-pointer'>
                        <BsInstagram className='w-5 h-5 text-white hover:text- cursor-pointer ' />
                    </span>
                    <span className='p-2 rounded-full bg-orange-500 shadow-lg shadow-orange-400/30 cursor-pointer'>
                        <BsTwitter className='w-5 h-5 text-white hover:text- cursor-pointer ' />
                    </span>
                </div>
            </div>
            <div className='flex items-center justify-center mt-6 mb-10 pt-6 border-t'>
                <p className='text-neutral-800 font-medium text-center'>
                    <span className='text-orange-400 hover:text-orange-500 cursor-pointer mr-2'>
                        <Link href={'/'}>
                            Devle
                        </Link>
                    </span>
                    &copy; copyright 2022 | All rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer
