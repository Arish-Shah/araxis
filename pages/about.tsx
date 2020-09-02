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
        subtitle="Success is not a matter of coincidences"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        className="bg-pink pt-20"
      />
      <Ready />
      <Footer />
    </>
  );
}

export default AboutPage;
