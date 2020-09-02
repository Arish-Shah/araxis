import Head from 'next/head';

import Navbar from '../components/navbar';
import Hero from '../components/index/hero';
import Companies from '../components/companies';
import Vision from '../components/index/vision';
import HowItWorks from '../components/index/how-it-works';
import ClientsSay from '../components/clients-say';
import Ready from '../components/index/ready';
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
        <Hero />
        <Companies />
        <Vision />
        <HowItWorks />
        <ClientsSay title="Clients" />
        <Ready />
        <Footer />
      </div>
    </>
  );
}

export default IndexPage;
