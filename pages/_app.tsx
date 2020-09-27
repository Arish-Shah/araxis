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
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
