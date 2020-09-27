import { useEffect } from 'react';
import AOS from 'aos';

import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Footer from '../components/footer';
import Text from '../components/job-seekers/text';
import ClientsSay from '../components/clients-say';
import RegisterForm from '../components/job-seekers/register-form';

function JobSeekersPage() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero
        firstLine="Shifting gears in your career?"
        secondLine="Let us take the steering wheel!"
        intro="Whether you’re a novice in the industry or come with several years of experience, we ensure with our analytical processes that you land the interview of the dream job you’re searching for!"
      />
      <Text />
      <ClientsSay alternate={true} title="Recruits" />
      <RegisterForm />
      <Footer />
    </>
  );
}

export default JobSeekersPage;
