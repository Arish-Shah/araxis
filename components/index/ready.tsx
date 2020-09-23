import Layout from '../layout';
import { BlueButton, RedButton } from './hero';

function Ready() {
  return (
    <Layout child="text-center py-32">
      <p className="text-black-light">
        Give your customer the experience they desire
      </p>
      <h1 className="text-blue text-3xl md:text-4xl xl:text-5xl font-semibold py-6 uppercase">
        Work with us!
      </h1>
      <div className="mx-auto w-full justify-center md:w-1/2 flex lg:mt-4 gap-3 md:gap-4 flex-col md:flex-row">
        <RedButton text="Find Work" />
        <BlueButton text="Hire Talent" />
      </div>
    </Layout>
  );
}

export default Ready;
