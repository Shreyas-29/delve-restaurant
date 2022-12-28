import { getSession, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Account = () => {

    const { data: session, status } = useSession();

    if (status === 'authenticated') {
        return (
            <div>
                <p>Welcome {session.user.name}</p>
                <button onClick={() => signOut()} className='px-5 py-3 bg-indigo-500 text-white rounded-md shadow-md'>
                    Sign Out
                </button>
            </div>
        )
    } else {
        return (
            <div>
                <p>You are not signed in.</p>
            </div>
        )
    }

}

export default Account


export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/login'
            }
        }
    }
    return {
        props: { session }
    }
}