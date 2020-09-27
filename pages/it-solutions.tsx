import { useEffect } from 'react';
import AOS from 'aos';

import Navbar from '../components/navbar';
import Hero from '../components/it-solutions/hero';
import Services from '../components/it-solutions/services';
import Footer from '../components/footer';
import Form from '../components/it-solutions/form';

function ITSolutionsPage() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Form />
      <Footer />
    </>
  );
}

export default ITSolutionsPage;
