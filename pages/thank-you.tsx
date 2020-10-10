import Container from '../components/container';
import { RedButton } from '../components/index/hero';
import Layout from '../components/layout';

function ThankYouPage() {
  return (
    <Layout title="Thank You - Araxis">
      <Container child="pt-56 text-center md:px-32 lg:px-40" animate={true}>
        <h1 className="text-blue text-4xl font-semibold lg:text-5xl mb-6">
          Thank You!
        </h1>
        <div className="lg:text-lg text-black-light">
          <p className="mb-2">
            Your submission has been received, our team is working on it.
          </p>
          <p>We strive to respond as soon as possible.</p>
        </div>
        <div className="mt-16 flex flex-col justify-center md:flex-row">
          <RedButton text="Back to Home" href="/" />
        </div>
      </Container>
    </Layout>
  );
}

export default ThankYouPage;
