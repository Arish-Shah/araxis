import { useEffect } from 'react';
import AOS from 'aos';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Form from '../components/contact/form';

function ContactPage() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Form />
      <Footer />
    </>
  );
}

export default ContactPage;
