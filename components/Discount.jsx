import React from 'react'

const Discount = () => {
    return (
        <div className='lg:px-32 py-6 flex flex-col px-0 sm:px-0 mb-16 relative'>
            <div className='bg-orange-500 rounded-full w-96 lg:w-[28rem] h-96 lg:h-[28rem] blur-3xl absolute opacity-20 top-52 lg:top-0 left-0 lg:left-60 flex'></div>
            <div className='bg-green-500 rounded-full w-96 lg:w-[28rem] h-96 lg:h-[28rem] blur-3xl absolute opacity-20 top-1/2 lg:top-0 right-0 lg:right-60 hidden lg:flex'></div>

            <div className='w-full py-8 px-4 lg:px-16 rounded-3xl relative bg-transparent z-50' data-aos='zoom-in' data-aos-duration="1000">
                <div className='flex flex-col items-center justify-center relative inset-0 backdrop-blur-sm bg-[rgba(255,255,255,0.4)] border py-16 rounded-3xl z-50 shadow-xl shadow-slate-600/20'>
                    <h2 className='text-neutral-800 font-semibold text-xl sm:text-3xl mb-5 flex flex-col sm:flex-row'>
                        Subscribe us to get
                        <span className='text-orange-500 font-semibold text-xl sm:text-3xl ml-2 font-poppins flex justify-center'>
                            40% discount
                        </span>
                    </h2>
                    <p className='text-gray-700 font-medium full px-8'>
                        Subscribe to get latest discount offers! We care each of our customer.
                    </p>
                    <div className='flex flex-col sm:flex-row items-center justify-center'>
                        <input type="email" className='border-none outline-none rounded-lg mt-8 px-4 py-3 w-full mx-auto lg:w-96 bg-neutral-50' placeholder='Email' />
                        <button className='hidden lg:flex items-center justify-center capitalize bg-gradient-to-br text-white px-4 py-2 font-medium shadow-md from-orange-500 to-amber-500 shadow-orange-500/40 rounded-lg relative transition-all duration-300 hover:scale-105 active:scale-90 top-[15px] ml-[-7.2rem]'>
                            subscribe
                        </button>
                        <button className='flex lg:hidden items-center justify-center capitalize bg-gradient-to-br text-white px-4 py-2 font-medium shadow-md from-orange-500 to-amber-500 shadow-orange-500/40 rounded-lg relative transition duration-300 hover:scale-110 active:scale-90 top-[10px] '>
                            subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discount
