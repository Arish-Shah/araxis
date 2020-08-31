import Head from 'next/head';

import Navbar from '../components/navbar';
import HeroIndex from '../components/hero-index';
import Companies from '../components/companies';
import Vision from '../components/vision';
import HowItWorks from '../components/how-it-works';
import ClientsSay from '../components/clients-say';
import Ready from '../components/ready';
import Footer from '../components/footer';

function IndexPage() {
  return (
    <>
      <Head>
        <title>Araxis</title>
        <meta property="og:title" content="AR-AXIS" key="title" />
      </Head>
      <div>
        <Navbar />
        <HeroIndex />
        <Companies />
        <Vision />
        <HowItWorks />
        <ClientsSay />
        <Ready />
        <Footer />
      </div>
    </>
  );
}

export default IndexPage;
