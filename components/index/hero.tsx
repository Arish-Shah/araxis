import Layout from '../layout';

function Hero() {
  return (
    <Layout child="py-10 pt-32 my-4 flex flex-col md:px-32 lg:gap-10 lg:px-6 lg:flex-row lg:items-center lg:py-12 lg:pt-32">
      <div className="xl:w-5/12">
        <h1 className="text-blue font-semibold text-3xl md:text-4xl xl:text-inter leading-snug">
          Matching developers with great companies.
        </h1>
        <p className="text-black-light text-sm py-6 lg:py-8">
          Whether you are looking for the best IT talent, an experienced IT
          outsourcing partner, or a career in the IT, Araxis delivers.
        </p>
        <div className="flex lg:mt-4 gap-3 md:gap-4 flex-col md:flex-row">
          <RedButton text="Find Work" />
          <BlueButton text="Find Talent" />
        </div>
      </div>
      <div className="mt-12 xl:mt-0 xl:w-7/12">
        <img
          src="/home-banner-illustration.svg"
          alt="People"
          draggable={false}
        />
      </div>
    </Layout>
  );
}

const buttonStyles =
  'bg-gradient-to-r uppercase font-medium text-xl text-white rounded-none py-4 flex-auto lg:flex-none lg:px-12 fill';

export const RedButton = ({ text }: { text: string }) => (
  <button className={`${buttonStyles} from-red to-red-dark`}>{text}</button>
);

export const BlueButton = ({ text }: { text: string }) => (
  <button className={`${buttonStyles} from-blue-light to-blue`}>{text}</button>
);

export default Hero;
