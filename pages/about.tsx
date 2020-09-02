import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Hero from '../components/about/hero';
import Companies from '../components/companies';
import Values from '../components/about/values';

function AboutPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Values />
      <Footer />
    </>
  );
}

export default AboutPage;
