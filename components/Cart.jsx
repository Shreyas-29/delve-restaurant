import React, { useRef, useState } from 'react'
import { IoCloseCircle } from 'react-icons/io5'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md'
import Image from 'next/image';
import Link from 'next/link';
import { useStateContext } from '../context/StateContext';
import getStripe from '../lib/getStripe';
import { toast } from 'react-hot-toast';


const Cart = () => {

    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

    const handlePay = async () => {
        const stripe = await getStripe();

        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItems)
        });

        if (response.statusCode === 500) return;

        const data = await response.json();

        toast.loading("Redirecting...");
        stripe.redirectToCheckout({ sessionId: data.id });
    }


    return (
        <div className='cart-wrapper' ref={cartRef}>
            <div className="cart-container">
                <div className='px-4 mb-8 flex items-center justify-between'>
                    <button
                        type='button'
                        className='flex items-center justify-between drop-shadow-lg'
                        onClick={() => setShowCart(false)}
                    >
                        <IoCloseCircle className='w-8 h-8 text-gray-600 hover:text-orange-500' />
                    </button>
                    <span className='text-2xl font-semibold text-orange-500 capitalize'>my cart</span>
                    <span className='text-lg font-medium text-gray-600'>
                        {totalQuantities} items
                    </span>
                </div>

                {cartItems.length < 1 && (
                    <div className='empty-cart'>
                        <Image src={'/cart.gif'} alt='empty-cart' className='w-full h-auto px-4' unoptimized width={3000} height={2000} />
                        <h3 className='mt-14'>Your cart is empty.</h3>
                        <Link href={'/'}>
                            <button className='my-8 bg-gradient-to-r from-orange-500 to-amber-400 hover:scale-110 transition duration-300 ease-in-out rounded-md text-white font-medium px-6 py-3 capitalize shadow-md shadow-orange-500/30' onClick={() => setShowCart(false)}>
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                )}

                <div className='product-container'>
                    {cartItems.length >= 1 && cartItems.map((item) => (
                        <div className='product' key={item.id}>
                            <img src={item.featuredImage.url} className='cart-product-image object-cover object-center' alt='product' />
                            <div className='flex items-start justify-center flex-col w-full'>
                                <div className="flex items-center justify-between mb-4 lg:mb-8 w-full">
                                    <h1 className='text-lg font-medium'>{item.title} </h1>
                                    <p className='text-orange-500 font-medium'>
                                        ₹{item.price}
                                    </p>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <p className='flex items-center border border-gray-400 rounded-md py-1 px-2'>
                                        <span
                                            onClick={() => toggleCartItemQuanitity(item.id, 'dec')}
                                            className='minus border-r border-gray-400 pr-2 cursor-pointer'>
                                            <AiOutlineMinus />
                                        </span>
                                        <span className='px-3'>
                                            {item.quantity}
                                        </span>
                                        <span
                                            onClick={() => toggleCartItemQuanitity(item.id, 'inc')}
                                            className='plus border-l border-gray-400 pl-2 cursor-pointer'>
                                            <AiOutlinePlus />
                                        </span>
                                    </p>
                                    <MdDelete
                                        onClick={() => onRemove(item)}
                                        className='text-lg text-gray-700 hover:text-red-500 w-6 h-6 cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {cartItems.length >= 1 && (
                    <div className='cart-bottom'>
                        <div className="total">
                            <h3 className='font-medium'>Subtotal:</h3>
                            <h3 className='font-medium'>₹{totalPrice}</h3>
                        </div>
                        <div className="btn-container px-5">
                            <button
                                onClick={handlePay}
                                className='mt-5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-md text-white font-medium w-full py-3 capitalize hover:scale-110 transition ease-in-out duration-500 shadow-md shadow-orange-500/30'>
                                Pay with stripe
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Cart
