import Layout from '../components/layout';
import Hero from '../components/index/hero';
import Companies from '../components/companies';
import Vision from '../components/index/vision';
import HowItWorks from '../components/index/how-it-works';
import Testimonials from '../components/testimonials';
import Ready from '../components/index/ready';
import Footer from '../components/footer';

function IndexPage() {
  return (
    <Layout title="Get Hired or Find Talent - Araxis">
      <Hero />
      <Companies />
      <Vision />
      <HowItWorks />
      <Testimonials title="Clients" />
      <Ready />
      <Footer />
    </Layout>
  );
}

export default IndexPage;
