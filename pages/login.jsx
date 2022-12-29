import { signOut, useSession, signIn } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image';
import React from 'react'
import { BsGoogle } from 'react-icons/bs'

const Login = () => {

    const { data: session } = useSession();

    if (session) {
        return (
            <div>
                <Head>
                    <title>Delve | Login </title>
                    <link rel="icon" href="/favicon.svg" />
                </Head>
                <div className='container mx-auto flex flex-col items-center justify-center !my-12 gap-8 sm:!h-[70vh]'>
                    <div className='inset-0 flex items-center justify-center'>
                        <div className='flex flex-col items-center justify-center px-16 py-12 my-12 sm:px-16 border rounded-3xl'>
                            <h2 className='text-xl font-semibold capitalize mb-4'>Welcome, {session.user.name}</h2>
                            <Image src={session.user.image} alt={session.user.name} unoptimized className='w-20 h-20 rounded-full mb-4' width={1000} height={1000} />
                            <button onClick={() => signOut()} className='capitalize bg-gradient-to-br text-white px-4 py-2 font-medium shadow-lg from-orange-500 to-amber-500 shadow-orange-500/40 rounded-lg relative transition-all duration-300 hover:scale-110 active:scale-95 ease-in-out'>
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='container mx-auto px-4 sm:px-20 items-center flex justify-center flex-col gap-8 lg:!h-[70vh]'>
                <Head>
                    <title>Delve | Login </title>
                    <link rel="icon" href="/favicon.svg" />
                </Head>
                <div className='inset-0 flex items-center justify-center my-12'>
                    <div className='flex flex-col items-center justify-center py-8 px-6 w-full border rounded-3xl'>
                        <p className='mb-5 text-neutral-800 font-medium flex flex-col items-center justify-center'>
                            <span className='mb-8'>You are not signed in.</span>
                            <button onClick={() => signIn()} className='capitalize bg-gradient-to-br text-white px-4 py-2 font-medium shadow-lg from-orange-500 to-amber-500 shadow-orange-500/40 rounded-lg relative transition-all duration-300 hover:scale-110 active:scale-95 ease-in-out flex items-center justify-center gap-4'>
                                <BsGoogle size={18} /> Sign In with Google
                            </button>
                        </p>
                        <p className='text-sm text-neutral-700 mt-6 text-center w-3/4'>
                            By signing up, I agree to the Terms of Services and Privacy Policy
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
