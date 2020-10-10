import Container from '../components/container';
import Layout from '../components/layout';
import { RedButton } from '../components/index/hero';

function Custom404() {
  return (
    <Layout title="404 - Araxis">
      <Container child="pt-56 text-center md:px-32 lg:px-40" animate={true}>
        <h1 className="text-blue text-4xl font-semibold lg:text-5xl mb-6">
          404
        </h1>
        <div className="lg:text-lg text-black-light">
          <p>Oops! We can't find what you are looking for.</p>
        </div>
        <div className="mt-20 flex flex-col justify-center md:flex-row">
          <RedButton text="Back to Home" href="/" />
        </div>
      </Container>
    </Layout>
  );
}

export default Custom404;
