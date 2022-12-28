import React, { useState } from 'react'
import { getMenu, getMenuDetails } from '../../services'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useStateContext } from '../../context/StateContext';
import { IoHelpCircle } from 'react-icons/io5'
import { Rating } from '@mui/material'
import { Loader } from '../../components'

const Menus = ({ menu }) => {

    const { featuredImage, title, description, price, review } = menu;
    const { decQty, incQty, qty, setShowCart, onAdd, onRemove } = useStateContext();

    const handleBuyNow = () => {
        onAdd(menu, qty);
        setShowCart(true);
    }

    return (
        <div className='container mx-auto lg:px-20 px-4 my-8 pb-12'>
            <Head>
                <title> Delve - {title} </title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <div className='product-detail-container'>
                <div>
                    <div className='image-container lg:p-20'>
                        <Image src={featuredImage.url} unoptimized alt='product' width={1000} height={1000} className='rounded-lg shadow-lg' />
                    </div>
                </div>
                <div className='product-details-desc sm:max-w-[35vw]'>
                    <h1 className='text-2xl font-medium mb-2 text-gray-700'>{title}</h1>
                    <div className='flex items-center gap-1 mb-4'>

                        <Rating name='size-large' defaultValue={3} style={{ color: '#f97316' }} />

                        <p className='ml-2 border-l-2 border-gray-300 pl-2'>{review} Reviews</p>
                        <span className='help relative'>
                            <a href='mailto:webtech.shreyas@gmail.com' className='helpText hover:bg-slate-200 bg-slate-100 z-50 text-slate-600 text-sm px-2 py-1 rounded-md'>Help</a>
                            <IoHelpCircle className='helpIcon w-6 h-6 ml-2  cursor-pointer drop-shadow-md' />
                        </span>
                    </div>
                    <h4 className='text-xl text-gray-700 font-medium mb-2'>Details:</h4>
                    <p className='mb-4'>
                        {description.substr(0, 200)}.
                    </p>
                    <p className='font-bold text-lg mb-4 text-orange-500'>₹{price}</p>
                    <div className='quantity flex items-center my-5 gap-4'>
                        <h3 className='text-lg font-medium text-gray-700'>Quantity:</h3>
                        <p className='flex items-center border rounded-md p-2 gap-3'>
                            <span onClick={decQty} className='minus border-r pr-2 cursor-pointer'>
                                <AiOutlineMinus className='hover:text-orange-500' />
                            </span>
                            <span className='num'>
                                {qty}
                            </span>
                            <span onClick={incQty} className='plus border-l pl-2 cursor-pointer'>
                                <AiOutlinePlus className='hover:text-green-500' />
                            </span>
                        </p>
                    </div>
                    <div className="flex items-center justify-start gap-5 mt-8">
                        <button
                            onClick={() => onAdd(menu, qty)}
                            type='button'
                            className='bg-gradient-to-r from-orange-500 to-amber-500 hover:to-orange-600 rounded-md text-white font-medium px-4 py-2 capitalize shadow-md shadow-orange-500/40'>
                            Add to cart
                        </button>
                        <button
                            onClick={handleBuyNow}
                            type='button'
                            className='border-2 border-orange-500 rounded-md text-orange-500 hover:bg-orange-500 transition ease-in-out hover:text-white font-medium px-3.5 py-1.5 capitalize shadow-md shadow-orange-200/60'>
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menus

export async function getStaticProps({ params }) {
    const data = await getMenuDetails(params.slug);
    return {
        props: {
            menu: data,
        },
        revalidate: 10,
    };
}

export async function getStaticPaths() {
    const menus = await getMenu();
    return {
        paths: menus.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: 'blocking',
    };
}