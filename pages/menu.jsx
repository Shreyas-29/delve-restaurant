import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { GiFullPizza, GiHamburger, GiSandwich, GiChickenOven } from 'react-icons/gi'
import { BiDrink } from 'react-icons/bi'
import { getCategories, getMenu } from '../services'
import { MenuCard } from '../components'

const Menu = () => {

    const [menu, setMenu] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getMenu()
            .then((menuItem) => setMenu(menuItem));
        getCategories()
            .then((newCategories) => setCategories(newCategories));
    }, []);

    return (
        <div>
            <Head>
                <title>Delve | Menu </title>
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <div className='container mx-auto lg:px-24 px-0 my-8'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-2xl font-semibold text-neutral-900'>
                        Popular Categories
                    </h2>
                </div>
                <div className='my-8 px-2 ms:px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center justify-center py-4 gap-6'>
                    <div className='flex items-center justify-center w-max py-3 px-5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer duration-200'>
                        <GiFullPizza className='w-10 h-10 pr-2' />
                        <p className='text-neutral-700 border-l border-slate-900 capitalize pl-2 font-medium'>
                            pizza
                        </p>
                    </div>
                    <div className='flex items-center justify-center w-max py-3 px-5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer duration-200'>
                        <GiHamburger className='w-10 h-10 pr-2' />
                        <p className='text-neutral-700 border-l border-slate-900 capitalize pl-2 font-medium'>
                            burger
                        </p>
                    </div>
                    <div className='flex items-center justify-center w-max py-3 px-5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer duration-200'>
                        <GiChickenOven className='w-10 h-10 pr-2' />
                        <p className='text-neutral-700 border-l border-slate-900 capitalize pl-2 font-medium'>
                            chicken
                        </p>
                    </div>
                    <div className='flex items-center justify-center w-max py-3 px-5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer duration-200'>
                        <GiSandwich className='w-10 h-10 pr-2' />
                        <p className='text-neutral-700 border-l border-slate-900 capitalize pl-2 font-medium'>
                            pizza
                        </p>
                    </div>
                    <div className='flex items-center justify-center w-max py-3 px-5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer duration-200'>
                        <BiDrink className='w-10 h-10 pr-2' />
                        <p className='text-neutral-700 border-l border-slate-900 capitalize pl-2 font-medium'>
                            drinks
                        </p>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center pl-8 mb-8 mt-12'>
                    <h2 className='text-2xl font-semibold text-neutral-900 mb-4'>
                        Our Special Menu
                    </h2>
                    <p className='text-neutral-500 font-medium'>
                        Popular choices🔥
                    </p>
                </div>

                <div className='grid sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-12 mb-12'>
                    {menu.map((item) => (
                        <MenuCard menu={item.node} key={item.title} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu

