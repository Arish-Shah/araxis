import Layout from './layout';
import { BlueButton, RedButton } from './hero-index';

function Ready() {
  return (
    <Layout child="text-center py-32">
      <p className="text-black-light">
        Give your customer the experience they desire
      </p>
      <h1 className="text-blue text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold py-6">
        Ready to work with us?
      </h1>
      <div className="mx-auto w-full justify-center md:w-1/2 flex lg:mt-4 gap-3 md:gap-4 flex-col md:flex-row">
        {RedButton}
        {BlueButton}
      </div>
    </Layout>
  );
}

export default Ready;
