import { Toaster } from 'react-hot-toast';
import { Footer, Header } from '../components'
import { StateContext } from '../context/StateContext';
import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps, session }) {
  return <>
    <SessionProvider session={session}>
      <StateContext>
        <div className='container mx-auto px-0 lg:px-12 w-full'>
          <Header />
          <Toaster gutter={24} />
          <NextNProgress color="#f97316" startPosition={0.3} stopDelayMs={200} height={2} showOnShallow={true} />
          <Component {...pageProps} />
          <Footer />
        </div>
      </StateContext>
    </SessionProvider>
  </>
}
