import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Hero from '../components/about/hero';
import Companies from '../components/companies';
import Values from '../components/about/values';
import Secondary from '../components/recruiters/hero';
import Ready from '../components/about/ready';

function AboutPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Values />
      <Secondary
        title="Our Story"
        subtitle=""
        content="With a solid reputation of more than 10 years of experience in the IT Consulting services industry, we at Araxis are mavericks at matching technical professionals. We prioritise understanding individual needs of various partners and closely match it with our list of candidates. We started out with one mission: to pioneer innovation and growth, in every vertical possible - and with time, have managed to carve a reputed niche for our company."
        className="bg-pink pt-20"
      />
      <Ready />
      <Footer />
    </>
  );
}

export default AboutPage;
