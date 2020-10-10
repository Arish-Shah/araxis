import Hero from '../components/it-solutions/hero';
import Services from '../components/it-solutions/services';
import Footer from '../components/footer';
import Form from '../components/it-solutions/form';
import Layout from '../components/layout';

function ITSolutionsPage() {
  return (
    <Layout title="IT Solutions - Araxis">
      <Hero />
      <Services />
      <Form />
      <Footer />
    </Layout>
  );
}

export default ITSolutionsPage;
