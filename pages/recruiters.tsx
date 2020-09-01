import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Hero from '../components/hero';
import SecondHero from '../components/recruiters/hero';
import End2End from '../components/recruiters/e2e';
import Form from '../components/recruiters/form';

function Recruiters() {
  return (
    <>
      <Navbar />
      <Hero
        firstLine="Employment Services"
        secondLine="Find the right talent."
      />
      <SecondHero />
      <End2End />
      <Form />
      <Footer />
    </>
  );
}

export default Recruiters;
