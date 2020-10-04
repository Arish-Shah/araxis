import Head from 'next/head';
import AOS from 'aos';

import 'aos/dist/aos.css';
import '../styles/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      delay: 150,
      once: true,
      duration: 800,
    });

    // Prefetch check image
    const image = new Image();
    image.src = '/form/check-green.svg';
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
