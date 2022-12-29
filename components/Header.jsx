import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { FiShoppingCart } from 'react-icons/fi'
import Hamburger, { Squash } from 'hamburger-react';
import { Toast } from 'react-hot-toast';
import Cart from './Cart';
import { useStateContext } from '../context/StateContext';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const { qty, onAdd, showCart, setShowCart, totalQuantities } = useStateContext();
    const { data: session } = useSession();

    const handleToggle = () => {
        setIsOpen(true);
    }
    const toggleCart = () => {
        setCartOpen(!cartOpen);
    }
    const closeMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='flex items-center justify-center mt-8 px-6 lg:px-20 pb-8 sm:border-b'>
            <div className='hidden sm:flex  items-center justify-between w-full'>
                <Link href={'/'}>
                    <h1 className='text-3xl font-bold text-orange-500 drop-shadow'>
                        Delve
                    </h1>
                </Link>
                <div className='flex items-center justify-center space-x-8'>
                    <Link href={'/'}>
                        <li className='list-none text-lg text-gray-700 font-medium hover:text-orange-500 transition duration-300 ease-in-out'>
                            Home
                        </li>
                    </Link>
                    <Link href={'/menu'}>
                        <li className='list-none text-lg text-gray-700 font-medium hover:text-orange-500 transition duration-300 ease-in-out'>
                            Menu
                        </li>
                    </Link>
                    <Link href={'/about'}>
                        <li className='list-none text-lg text-gray-700 font-medium hover:text-orange-500 transition duration-300 ease-in-out'>
                            About
                        </li>
                    </Link>
                </div>
                <div className='flex items-center justify-center space-x-10 relative'>
                    <button type='button' className='relative' onClick={() => setShowCart(true)}>
                        <FiShoppingCart className='text-gray-700 w-6 h-6 hover:text-orange-500 transition duration-300' />
                        <span className='absolute bg-orange-500 text-white px-[6px] text-sm -top-2 -right-3 rounded-3xl'>
                            {totalQuantities}
                        </span>
                    </button>
                    {showCart && <Cart />}
                    {session ? (
                        <Link href={'/login'}>
                            <button className='capitalize bg-gradient-to-br text-white px-4 py-2 font-medium shadow-lg from-orange-500 to-amber-500 shadow-orange-500/40 rounded-lg relative transition-all duration-300 hover:scale-110 active:scale-95 ease-in-out'>
                                sign out
                            </button>
                        </Link>
                    ) : (
                        <Link href={'/login'}>
                            <button className='capitalize bg-gradient-to-br text-white px-4 py-2 font-medium shadow-lg from-orange-500 to-amber-500 shadow-orange-500/40 rounded-lg relative transition-all duration-300 hover:scale-110 active:scale-95 ease-in-out'>
                                login
                            </button>
                        </Link>
                    )
                    }
                </div>
            </div>

            <div className='flex sm:hidden items-center justify-between w-full'>
                <div className='relative'>
                    <span className='cursor-pointer' onClick={() => setShowCart(true)}>
                        <FiShoppingCart className='w-6 h-6' />
                        <span className='absolute bg-orange-500 text-white px-[6px] text-sm -top-2 -right-3 rounded-3xl'>
                            {totalQuantities}
                        </span>
                    </span>
                    {showCart && <Cart />}

                </div>
                <Link href={'/'}>
                    <Image src={'/favicon.svg'} alt='logo' width={2000} height={2000} unoptimized className='w-8 h-8' />
                </Link>
                <div className='realtive z-50'>
                    <Hamburger toggle={setIsOpen} toggled={isOpen} color={isOpen ? '#fff' : '#000'} size={20} rounded distance='sm' />
                    {isOpen && (
                        <>
                            <div className='flex flex-col items-start justify-center space-y-2 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 absolute w-60 h-screen right-0 top-0 -z-10 transition duration-300 ease-linear'>
                                <Link href={'/'} className='w-full' onClick={closeMenu}>
                                    <li className='text-bold text-white capitalize py-2 px-8 mx-4 hover:text-orange-500 hover:bg-white w-full rounded-md transition duration-200'>Home</li>
                                </Link>
                                <Link href={'/menu'} className='w-full' onClick={closeMenu}>
                                    <li className='text-bold text-white capitalize py-2 px-8 mx-4 hover:text-orange-500 hover:bg-white w-full rounded-md transition duration-200'>Menu</li>
                                </Link>
                                <Link href={'/about'} className='w-full' onClick={closeMenu}>
                                    <li className='text-bold text-white capitalize py-2 px-8 mx-4 hover:text-orange-500 hover:bg-white w-full rounded-md transition duration-200'>About</li>
                                </Link>
                                {session ? (
                                    <Link href={'/login'} className='w-full' onClick={closeMenu}>
                                        <li className='capitalize text-white mx-4 px-8 py-2 mt-4 hover:text-orange-500 rounded-md hover:bg-white text-start w-full font-semibold relative transition-all duration-300 hover:scale-110 active:scale-95 ease-in-out'>
                                            sign out
                                        </li>
                                    </Link>
                                ) : (
                                    <Link href={'/login'} className='w-full' onClick={closeMenu}>
                                        <li className='capitalize text-white mx-4 px-8 py-2 mt-4 hover:text-orange-500 rounded-md hover:bg-white text-start w-full font-semibold relative transition-all duration-300 hover:scale-110 active:scale-95 ease-in-out'>
                                            login
                                        </li>
                                    </Link>
                                )
                                }
                            </div>
                        </>
                    )}
                </div>
            </div>

        </nav>
    )
}

export default Header
