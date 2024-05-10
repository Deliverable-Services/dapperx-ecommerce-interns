import Head from 'next/head';

import '@/styles/globals.css'

import 'swiper/css';
import 'swiper/css/navigation';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  return <div className='w-full'>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0, viewport-fit = cover' />
      <meta charset='utf-8' />
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <meta
        name='viewport'
        content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
      />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>;
}
